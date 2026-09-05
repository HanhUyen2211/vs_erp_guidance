import crypto from 'node:crypto';
import {
  siteConfig as defaultSiteConfig,
  tabs as defaultTabs,
  documents as defaultDocuments,
  documentSections as defaultDocumentSections,
} from '../src/config.js';

const GITHUB_API_BASE = 'https://api.github.com';

function clone(value) {
  if (typeof structuredClone === 'function') return structuredClone(value);
  return JSON.parse(JSON.stringify(value));
}

function getDefaultContent() {
  return {
    version: 1,
    updatedAt: new Date().toISOString(),
    siteConfig: clone(defaultSiteConfig),
    tabs: clone(defaultTabs),
    documents: clone(defaultDocuments),
    documentSections: clone(defaultDocumentSections),
  };
}

function getEnv(name, fallback = '') {
  return process.env[name] || fallback;
}

function getGitHubConfig() {
  return {
    token: getEnv('GITHUB_TOKEN'),
    owner: getEnv('GITHUB_OWNER'),
    repo: getEnv('GITHUB_REPO'),
    branch: getEnv('GITHUB_BRANCH', 'main'),
    filePath: getEnv('GITHUB_CONTENT_PATH', 'site-content.json'),
  };
}

function hasGitHubConfig() {
  const { token, owner, repo } = getGitHubConfig();
  return !!(token && owner && repo);
}

function base64UrlEncode(input) {
  return Buffer.from(input).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function base64UrlDecode(input) {
  const normalized = input.replace(/-/g, '+').replace(/_/g, '/');
  const padded = normalized + '='.repeat((4 - (normalized.length % 4 || 4)) % 4);
  return Buffer.from(padded, 'base64').toString('utf8');
}

function cookieHeader(name, value, options = {}) {
  const parts = [`${name}=${value}`];
  if (options.maxAge !== undefined) parts.push(`Max-Age=${options.maxAge}`);
  parts.push(`Path=${options.path || '/'}`);
  parts.push(`SameSite=${options.sameSite || 'Lax'}`);
  if (options.httpOnly !== false) parts.push('HttpOnly');
  if (options.secure) parts.push('Secure');
  return parts.join('; ');
}

function parseCookies(request) {
  const header = request.headers.get('cookie') || '';
  return header.split(';').reduce((acc, chunk) => {
    const index = chunk.indexOf('=');
    if (index === -1) return acc;
    const key = chunk.slice(0, index).trim();
    const value = chunk.slice(index + 1).trim();
    if (key) acc[key] = value;
    return acc;
  }, {});
}

function getAdminCredentials() {
  return {
    username: getEnv('ADMIN_USERNAME', 'admin'),
    password: getEnv('ADMIN_PASSWORD', '221103'),
  };
}

function getSessionSecret() {
  return getEnv('ADMIN_SESSION_SECRET', getEnv('GITHUB_TOKEN', 'dev-admin-secret'));
}

function signSession(payload) {
  const encoded = base64UrlEncode(JSON.stringify(payload));
  const signature = crypto.createHmac('sha256', getSessionSecret()).update(encoded).digest('base64url');
  return `${encoded}.${signature}`;
}

function verifySession(token) {
  if (!token || typeof token !== 'string') return null;
  const [encoded, signature] = token.split('.');
  if (!encoded || !signature) return null;
  const expected = crypto.createHmac('sha256', getSessionSecret()).update(encoded).digest('base64url');
  if (signature.length !== expected.length) return null;
  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return null;

  try {
    const payload = JSON.parse(base64UrlDecode(encoded));
    if (payload.exp && Date.now() > payload.exp) return null;
    return payload;
  } catch (err) {
    return null;
  }
}

function createSessionCookie(username, options = {}) {
  const payload = {
    username,
    exp: Date.now() + 1000 * 60 * 60 * 12,
  };
  const token = signSession(payload);
  const secure = options.secure ?? (process.env.VERCEL_ENV === 'production' || process.env.NODE_ENV === 'production');
  return cookieHeader('erp_guidance_session', token, {
    maxAge: 60 * 60 * 12,
    secure,
  });
}

function clearSessionCookie(options = {}) {
  const secure = options.secure ?? (process.env.VERCEL_ENV === 'production' || process.env.NODE_ENV === 'production');
  return cookieHeader('erp_guidance_session', '', {
    maxAge: 0,
    secure,
  });
}

function getAuthenticatedUser(request) {
  const cookies = parseCookies(request);
  return verifySession(cookies.erp_guidance_session);
}

function json(data, init = {}) {
  const headers = new Headers(init.headers || {});
  headers.set('Content-Type', 'application/json; charset=utf-8');
  headers.set('Cache-Control', 'no-store');
  return new Response(JSON.stringify(data), {
    ...init,
    headers,
  });
}

function encodePath(path) {
  return path.split('/').map((segment) => encodeURIComponent(segment)).join('/');
}

async function githubRequest(path, init = {}) {
  const { token } = getGitHubConfig();
  if (!token) {
    throw new Error('GitHub token is not configured.');
  }

  const headers = new Headers(init.headers || {});
  headers.set('Authorization', `Bearer ${token}`);
  headers.set('Accept', 'application/vnd.github+json');
  headers.set('X-GitHub-Api-Version', '2022-11-28');
  if (init.body && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  const response = await fetch(`${GITHUB_API_BASE}${path}`, {
    ...init,
    headers,
  });

  return response;
}

async function readGithubContent(filePath) {
  const { owner, repo, branch } = getGitHubConfig();
  if (!hasGitHubConfig()) return null;

  const response = await githubRequest(`/repos/${owner}/${repo}/contents/${encodePath(filePath)}?ref=${encodeURIComponent(branch)}`);
  if (response.status === 404) return null;
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`GitHub read failed: ${response.status} ${text}`);
  }

  const data = await response.json();
  const decoded = Buffer.from((data.content || '').replace(/\n/g, ''), 'base64').toString('utf8');
  return {
    sha: data.sha,
    content: JSON.parse(decoded),
  };
}

async function writeGithubContent(filePath, content, message) {
  const { owner, repo, branch } = getGitHubConfig();
  if (!hasGitHubConfig()) {
    throw new Error('GitHub config is not complete.');
  }

  let sha = null;
  try {
    const current = await readGithubContent(filePath);
    sha = current?.sha || null;
  } catch (err) {
    if (!String(err.message || '').includes('404')) {
      throw err;
    }
  }

  const body = {
    message,
    content: Buffer.from(JSON.stringify(content, null, 2)).toString('base64'),
    branch,
  };
  if (sha) body.sha = sha;

  const response = await githubRequest(`/repos/${owner}/${repo}/contents/${encodePath(filePath)}`, {
    method: 'PUT',
    body: JSON.stringify(body),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const messageText = data.message || `GitHub write failed: ${response.status}`;
    throw new Error(messageText);
  }

  return data;
}

export {
  clearSessionCookie,
  createSessionCookie,
  getAdminCredentials,
  getAuthenticatedUser,
  getDefaultContent,
  getGitHubConfig,
  hasGitHubConfig,
  json,
  parseCookies,
  readGithubContent,
  writeGithubContent,
  verifySession,
};
