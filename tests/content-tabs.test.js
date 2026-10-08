import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { mergeContentTabs } from '../src/content-tabs.js';
import { tabs as defaultTabs } from '../src/config.js';
import { GET, POST } from '../api/content.js';
import { createSessionCookie } from '../api/_lib.js';

const content = JSON.parse(readFileSync(new URL('../site-content.json', import.meta.url), 'utf8'));
const purchaseIds = ['purchase-requisitions', 'request-for-quotation', 'purchase-orders'];
const findPurchase = (tabs) => tabs.find((tab) => tab.id === 'purchase');

function oldContent() {
  const old = structuredClone(content);
  findPurchase(old.tabs).children = findPurchase(old.tabs).children
    .filter((tab) => tab.id !== 'request-for-quotation');
  return old;
}

test('saved content contains all configured Purchase tabs and RFQ media', () => {
  const purchase = findPurchase(content.tabs);
  assert.deepEqual(purchase.children.map((tab) => tab.id), purchaseIds);
  assert.deepEqual(purchase.children[1], findPurchase(defaultTabs).children[1]);
});

test('old content restores missing Purchase tabs in order and retains saved media', () => {
  const old = oldContent();
  const purchase = findPurchase(old.tabs);
  purchase.children[0].pdf = 'admin-pdf';
  purchase.children[0].video = '';
  const before = structuredClone(old);
  const merged = mergeContentTabs(old.tabs);
  const result = findPurchase(merged);
  assert.deepEqual(result.children.map((tab) => tab.id), purchaseIds);
  assert.equal(result.children[0].pdf, 'admin-pdf');
  assert.equal(result.children[0].video, '');
  assert.deepEqual(result.children[1], findPurchase(defaultTabs).children[1]);
  assert.deepEqual(mergeContentTabs(merged), merged);
  result.children[0].pdf = 'edited-after-merge';
  assert.deepEqual(old, before);
  assert.notEqual(findPurchase(defaultTabs).children[0].pdf, 'edited-after-merge');
});

test('empty children restore defaults while explicitly cleared RFQ media stays empty', () => {
  for (const children of [undefined, []]) {
    const merged = mergeContentTabs([{ id: 'purchase', children }]);
    assert.deepEqual(findPurchase(merged).children.map((tab) => tab.id), purchaseIds);
  }
  const old = structuredClone(content.tabs);
  findPurchase(old).children[1].pdf = '';
  findPurchase(old).children[1].video = '';
  const rfq = findPurchase(mergeContentTabs(old)).children[1];
  assert.equal(rfq.pdf, '');
  assert.equal(rfq.video, '');
});

test('custom tabs and children survive the merge without sharing references', () => {
  const old = oldContent();
  const child = { id: 'custom-purchase', label: 'Custom', pdf: 'custom-pdf', metadata: { note: 'keep' } };
  const tab = { id: 'custom-module', label: 'Custom Module', children: [{ id: 'custom-child' }] };
  findPurchase(old.tabs).children.push(child);
  old.tabs.push(tab);
  const merged = mergeContentTabs(old.tabs);
  assert.deepEqual(findPurchase(merged).children.at(-1), child);
  assert.deepEqual(merged.at(-1), tab);
  findPurchase(merged).children.at(-1).metadata.note = 'changed';
  assert.equal(child.metadata.note, 'keep');
});

test('legacy Production ID migrates once, retains media, and canonical data wins', () => {
  const merged = mergeContentTabs(content.tabs);
  const production = merged.find((tab) => tab.id === 'production-order');
  assert.deepEqual(production.children.map((tab) => tab.id),
    defaultTabs.find((tab) => tab.id === 'production-order').children.map((tab) => tab.id));
  assert.equal(production.children[0].label, 'Create Work Order');
  assert.equal(production.children[0].pdf, content.tabs.find((tab) => tab.id === 'production-order').children[0].pdf);

  const old = structuredClone(content.tabs);
  old.find((tab) => tab.id === 'production-order').children.push({ id: 'create-wo', pdf: '', video: '' });
  findPurchase(old).children.push({ id: 'production-order-main', label: 'Custom Purchase Child' });
  const result = mergeContentTabs(old);
  const children = result.find((tab) => tab.id === 'production-order').children;
  assert.equal(children.filter((tab) => tab.id === 'create-wo').length, 1);
  assert.equal(children[0].pdf, '');
  assert.equal(children[0].video, '');
  assert.equal(findPurchase(result).children.at(-1).id, 'production-order-main');
});

test('API reads and saves old content with all Purchase tabs, preserving saved values', async (t) => {
  const envNames = ['GITHUB_TOKEN', 'GITHUB_OWNER', 'GITHUB_REPO', 'GITHUB_BRANCH'];
  const originalEnv = envNames.map((key) => process.env[key]);
  const originalFetch = globalThis.fetch;
  t.after(() => {
    globalThis.fetch = originalFetch;
    envNames.forEach((key, index) => {
      if (originalEnv[index] === undefined) delete process.env[key];
      else process.env[key] = originalEnv[index];
    });
  });
  process.env.GITHUB_TOKEN = 'test-token';
  process.env.GITHUB_OWNER = 'test-owner';
  process.env.GITHUB_REPO = 'test-repo';
  process.env.GITHUB_BRANCH = 'test-branch';

  const old = oldContent();
  findPurchase(old.tabs).children[0].pdf = 'saved-pdf';
  findPurchase(old.tabs).children[0].video = '';
  let written;
  globalThis.fetch = async (url, init = {}) => {
    assert.match(String(url), /^https:\/\/api\.github\.com\/repos\/test-owner\/test-repo\/contents\//);
    if (init.method === 'PUT') {
      const body = JSON.parse(init.body);
      written = JSON.parse(Buffer.from(body.content, 'base64').toString('utf8'));
      assert.equal(body.sha, 'test-sha');
      return Response.json({ commit: { sha: 'test-commit' } });
    }
    return Response.json({ sha: 'test-sha', content: Buffer.from(JSON.stringify(old)).toString('base64') });
  };

  const read = await (await GET()).json();
  assert.equal(read.source, 'github');
  assert.deepEqual(findPurchase(read.tabs).children.map((tab) => tab.id), purchaseIds);
  assert.equal(findPurchase(read.tabs).children[0].pdf, 'saved-pdf');
  assert.equal(findPurchase(read.tabs).children[0].video, '');

  const response = await POST(new Request('http://localhost/api/content', {
    method: 'POST',
    headers: { cookie: createSessionCookie('test-admin', { secure: false }), 'Content-Type': 'application/json' },
    body: JSON.stringify(old),
  }));
  assert.equal(response.status, 200);
  const saved = await response.json();
  assert.equal(saved.ok, true);
  assert.deepEqual(saved.content, written);
  assert.deepEqual(findPurchase(written.tabs).children.map((tab) => tab.id), purchaseIds);
  assert.equal(findPurchase(written.tabs).children[0].pdf, 'saved-pdf');
  assert.equal(findPurchase(written.tabs).children[0].video, '');
});
