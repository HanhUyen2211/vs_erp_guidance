import {
  tabs as defaultTabs,
  siteConfig as defaultSiteConfig,
  documents as defaultDocuments,
  documentSections as defaultDocumentSections,
} from './config.js';

// ─── Danh sách bộ phận ───────────────────────────────────
const DEPARTMENTS = [
  'Kế toán', 'Mua hàng', 'Bán hàng', 'Sản xuất',
  'Kho', 'QC', 'Nhân sự', 'Quản lý', 'Tiến độ',
];

// ─── Danh sách module cho feedback ───────────────────────
const FEEDBACK_MODULES = [
  'Login', 'Item Master', 'BOM', 'Sales Order',
  'Production Order', 'Purchase', 'Delivery', 'Invoice', 'Others',
];

// ─── SVG Icons (line style, no color) ────────────────────
const ICONS = {
  // Sidebar module icons
  login: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>`,
  'item-master': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  bom: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M12 7v4M12 11l-5.5 6M12 11l5.5 6"/></svg>`,
  'sales-order': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
  'production-order': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>`,
  purchase: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
  delivery: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
  invoice: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  // Card icons
  pdf: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
  video: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  chevron: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  info: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
  // File-type specific icons
  pptx: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><circle cx="9" cy="10" r="2.5"/><path d="M11.5 10h3"/><path d="M11.5 12.5h3"/></svg>`,
  xlsx: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/><line x1="12" y1="11" x2="12" y2="19"/></svg>`,
  docx: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  // Logo
  logo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  // Welcome chips
  modules: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
  doc: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>`,
  play: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>`,
  // Documents tab
  library: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  file: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  external: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  tag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>`,
  // Feedback
  feedback: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  send: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
  image: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  alertCircle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>`,
  admin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v5c0 4.6-2.8 8.7-7 10-4.2-1.3-7-5.4-7-10V6l7-3z"/><path d="M9 12l2 2 4-4"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  save: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>`,
  edit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>`,
  logout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
  refresh: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.5 9a9 9 0 0 1 14.9-3.4L23 10"/><path d="M20.5 15a9 9 0 0 1-14.9 3.4L1 14"/></svg>`,
};

// ─── Helpers ──────────────────────────────────────────────
function gdrivePDF(id)      { return `https://drive.google.com/file/d/${id}/preview`; }
function gdriveVideo(id)    { return `https://drive.google.com/file/d/${id}/preview`; }
function gdriveDownload(id) { return `https://drive.google.com/uc?export=download&id=${id}`; }
// Google Drive preview works for PDF, PPTX, XLSX, DOCX using the same URL
function gdrivePreview(id)  { return `https://drive.google.com/file/d/${id}/preview`; }

function cloneContent(value) {
  if (typeof structuredClone === 'function') return structuredClone(value);
  return JSON.parse(JSON.stringify(value));
}

function escapeHTML(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function extractDriveId(input = '') {
  const value = input.trim();
  if (!value) return '';

  const fileMatch = value.match(/\/file\/d\/([^/]+)/);
  if (fileMatch) return fileMatch[1];

  const idMatch = value.match(/[?&]id=([^&]+)/);
  if (idMatch) return idMatch[1];

  const foldersMatch = value.match(/\/folders\/([^/?]+)/);
  if (foldersMatch) return foldersMatch[1];

  return value;
}

function slugify(value = '') {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 48) || 'tai-lieu';
}

function safeExternalUrl(value = '') {
  try {
    const url = new URL(value, window.location.origin);
    if (['http:', 'https:', 'mailto:'].includes(url.protocol)) return url.href;
  } catch (err) {
    return '#';
  }
  return '#';
}

// ─── File Type Config ─────────────────────────────────────
const FILE_TYPES = {
  pdf:  { label: 'PDF',  icon: () => ICONS.pdf,      colorClass: 'ft-pdf'  },
  pptx: { label: 'PPTX', icon: () => ICONS.pptx,     colorClass: 'ft-pptx' },
  xlsx: { label: 'XLSX', icon: () => ICONS.xlsx,     colorClass: 'ft-xlsx' },
  docx: { label: 'DOCX', icon: () => ICONS.docx,     colorClass: 'ft-docx' },
  video: { label: 'Video', icon: () => ICONS.video,   colorClass: 'ft-video' },
  link: { label: 'Link', icon: () => ICONS.external,  colorClass: 'ft-link' },
};

function getFileType(doc) {
  return FILE_TYPES[doc.type] || FILE_TYPES.pdf;
}

// ─── State ────────────────────────────────────────────────
const CONTENT_CACHE_KEY = 'erp-guidance-content-cache-v2';
const API_CONTENT_URL = '/api/content';
const API_AUTH_URL = '/api/auth';

let tabs = cloneContent(defaultTabs);
let siteConfig = cloneContent(defaultSiteConfig);
let documents = cloneContent(defaultDocuments);
let documentSections = cloneContent(defaultDocumentSections);
let activeTabId = null;
let activeDocId = null;
let activeDocSectionId = documentSections[0]?.id || 'references';
let sidebarOpen = false;

const CATEGORY_SECTION_FALLBACK = {
  'Quy định': 'rules-catalog',
  'Thêm mới': 'rules-catalog',
  'Hướng dẫn': 'operation-guides',
  'Quy trình': 'references',
  'Giải thích': 'references',
};

function normalizeDocuments(list) {
  return list.map((doc) => ({
    ...doc,
    type: doc.type || 'pdf',
    category: doc.category || 'Khác',
    sectionId: doc.sectionId || CATEGORY_SECTION_FALLBACK[doc.category] || documentSections[0]?.id || 'references',
  }));
}

function getDefaultContentState() {
  return {
    siteConfig: {
      ...cloneContent(defaultSiteConfig),
      homePdf: defaultSiteConfig.homePdf || '',
      homeVideo: defaultSiteConfig.homeVideo || '',
    },
    tabs: cloneContent(defaultTabs),
    documents: normalizeDocuments(cloneContent(defaultDocuments)),
    documentSections: cloneContent(defaultDocumentSections),
  };
}

function applyContentState(content = {}) {
  const defaults = getDefaultContentState();
  const previousDocSectionId = activeDocSectionId;
  const previousDocId = activeDocId;
  const nextSiteConfig = content.siteConfig && typeof content.siteConfig === 'object'
    ? { ...defaults.siteConfig, ...content.siteConfig }
    : defaults.siteConfig;

  siteConfig = {
    ...nextSiteConfig,
    homePdf: nextSiteConfig.homePdf || '',
    homeVideo: nextSiteConfig.homeVideo || '',
  };
  tabs = Array.isArray(content.tabs) ? cloneContent(content.tabs) : defaults.tabs;
  documents = normalizeDocuments(Array.isArray(content.documents) ? cloneContent(content.documents) : defaults.documents);
  documentSections = Array.isArray(content.documentSections) && content.documentSections.length > 0
    ? cloneContent(content.documentSections)
    : defaults.documentSections;
  activeDocSectionId = documentSections.some((section) => section.id === previousDocSectionId)
    ? previousDocSectionId
    : documentSections[0]?.id || 'references';
  activeDocId = documents.some((doc) => doc.id === previousDocId)
    ? previousDocId
    : documents[0]?.id || null;
}

function getContentPayload() {
  return {
    version: 1,
    updatedAt: new Date().toISOString(),
    siteConfig: {
      ...cloneContent(siteConfig),
      homePdf: siteConfig.homePdf || '',
      homeVideo: siteConfig.homeVideo || '',
    },
    tabs: cloneContent(tabs),
    documents: cloneContent(documents),
    documentSections: cloneContent(documentSections),
  };
}

function cacheContentState(content) {
  try {
    localStorage.setItem(CONTENT_CACHE_KEY, JSON.stringify(content));
  } catch (err) {
    console.warn('[ERP Guidance] Không cache được nội dung:', err);
  }
}

function readCachedContent() {
  try {
    const raw = localStorage.getItem(CONTENT_CACHE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (err) {
    console.warn('[ERP Guidance] Không đọc được cache nội dung:', err);
    return null;
  }
}

async function loadContentState() {
  applyContentState(getDefaultContentState());

  try {
    const response = await fetch(API_CONTENT_URL, { cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const remote = await response.json();
    applyContentState(remote);
    cacheContentState(remote);
    return;
  } catch (err) {
    console.warn('[ERP Guidance] Không tải được nội dung từ GitHub API, dùng cache/default:', err);
  }

  const cached = readCachedContent();
  if (cached) applyContentState(cached);
}

async function saveContentState(overrides = null) {
  const payload = overrides || getContentPayload();

  let response;
  try {
    response = await fetch(API_CONTENT_URL, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    throw new Error('Chức năng lưu GitHub chỉ hoạt động trên Vercel hoặc khi chạy `vercel dev`.');
  }

  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(result.error || 'Không lưu được nội dung lên GitHub.');
  }

  const nextContent = result.content || payload;
  applyContentState(nextContent);
  cacheContentState(nextContent);
  return nextContent;
}

async function resetContentState() {
  const defaults = getDefaultContentState();
  await saveContentState(defaults);
}

async function checkAdminSession() {
  try {
    const response = await fetch(API_AUTH_URL, { cache: 'no-store', credentials: 'include' });
    if (!response.ok) return false;
    const data = await response.json().catch(() => ({}));
    return !!data.authenticated;
  } catch (err) {
    return false;
  }
}

async function loginAdmin(username, password) {
  let response;
  try {
    response = await fetch(API_AUTH_URL, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
  } catch (error) {
    throw new Error('Đăng nhập admin cần chạy trên Vercel hoặc khi dùng `vercel dev`.');
  }

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.error || 'Đăng nhập thất bại.');
  }

  return data;
}

async function logoutAdmin() {
  await fetch(API_AUTH_URL, {
    method: 'DELETE',
    credentials: 'include',
  });
}

function getDocumentSection(sectionId) {
  return documentSections.find((section) => section.id === sectionId) || documentSections[0];
}

function getDocSectionId(doc) {
  return doc.sectionId || CATEGORY_SECTION_FALLBACK[doc.category] || documentSections[0]?.id || 'references';
}

function getFlattenedTabs() {
  return tabs.flatMap((tab) => {
    if (!tab.children || tab.children.length === 0) {
      return [{ tab, parent: null }];
    }
    return tab.children.map((child) => ({ tab: child, parent: tab }));
  });
}

function findTabById(tabId) {
  for (const tab of tabs) {
    if (tab.id === tabId) return { tab, parent: null };
    if (tab.children) {
      const child = tab.children.find((item) => item.id === tabId);
      if (child) return { tab: child, parent: tab };
    }
  }
  return { tab: null, parent: null };
}

function createUniqueDocId(title) {
  const base = slugify(title);
  const usedIds = new Set(documents.map((doc) => doc.id));
  let candidate = base;
  let index = 2;

  while (usedIds.has(candidate)) {
    candidate = `${base}-${index}`;
    index += 1;
  }

  return candidate;
}

function navigateToHash(hash, fallback) {
  const nextHash = `#${hash}`;
  if (window.location.hash === nextHash) {
    Promise.resolve(fallback()).catch((error) => {
      console.error('[ERP Guidance] Navigation failed:', error);
    });
    return;
  }
  window.location.hash = hash;
}

// ─── Build Sidebar ────────────────────────────────────────
function buildSidebar() {
  const nav = document.getElementById('sidebar-nav');
  nav.innerHTML = '';

  // ── Home button ──
  const homeItem = document.createElement('div');
  homeItem.className = 'nav-item';
  const homeBtn = document.createElement('button');
  homeBtn.className = 'nav-btn';
  homeBtn.id = 'nav-home';
  homeBtn.innerHTML = `
    <span class="nav-icon">${ICONS.home}</span>
    <span class="nav-label">Home</span>
  `;
  homeBtn.addEventListener('click', () => navigateToHash('home', showHome));
  homeItem.appendChild(homeBtn);
  nav.appendChild(homeItem);

  // ── Documents button ──
  const docsItem = document.createElement('div');
  docsItem.className = 'nav-item';
  const docsBtn = document.createElement('button');
  docsBtn.className = 'nav-btn';
  docsBtn.id = 'nav-documents';
  docsBtn.innerHTML = `
    <span class="nav-icon">${ICONS.library}</span>
    <span class="nav-label">Tài liệu</span>
  `;
  docsBtn.addEventListener('click', () => navigateToHash('documents', showDocumentsPage));
  docsItem.appendChild(docsBtn);
  nav.appendChild(docsItem);

  // ── Feedback button ──
  const feedbackItem = document.createElement('div');
  feedbackItem.className = 'nav-item';
  const feedbackBtn = document.createElement('button');
  feedbackBtn.className = 'nav-btn nav-btn--feedback';
  feedbackBtn.id = 'nav-feedback';
  feedbackBtn.innerHTML = `
    <span class="nav-icon">${ICONS.feedback}</span>
    <span class="nav-label">Phản hồi</span>
    <span class="feedback-badge">Góp ý</span>
  `;
  feedbackBtn.addEventListener('click', () => navigateToHash('feedback', showFeedbackPage));
  feedbackItem.appendChild(feedbackBtn);
  nav.appendChild(feedbackItem);

  // ── Admin button ──
  const adminItem = document.createElement('div');
  adminItem.className = 'nav-item';
  const adminBtn = document.createElement('button');
  adminBtn.className = 'nav-btn';
  adminBtn.id = 'nav-admin';
  adminBtn.innerHTML = `
    <span class="nav-icon">${ICONS.admin}</span>
    <span class="nav-label">Quản trị</span>
  `;
  adminBtn.addEventListener('click', () => navigateToHash('admin', showAdminPage));
  adminItem.appendChild(adminBtn);
  nav.appendChild(adminItem);

  // Divider
  const divider = document.createElement('div');
  divider.className = 'nav-divider';
  nav.appendChild(divider);

  const label = document.createElement('div');
  label.className = 'nav-section-label';
  label.textContent = 'Modules';
  nav.appendChild(label);

  tabs.forEach((tab) => {
    const item = document.createElement('div');
    item.className = 'nav-item';
    item.dataset.tabId = tab.id;

    const btn = document.createElement('button');
    btn.className = 'nav-btn';
    btn.id = `nav-${tab.id}`;

    btn.innerHTML = `
      <span class="nav-icon">${ICONS[tab.id] || ICONS.doc}</span>
      <span class="nav-label">${tab.label}</span>
    `;

    if (tab.children) {
      btn.innerHTML += `<span class="nav-chevron">${ICONS.chevron}</span>`;
      btn.addEventListener('click', () => toggleSubNav(item, tab));

      const subNav = document.createElement('div');
      subNav.className = 'sub-nav';

      const subInner = document.createElement('div');
      subInner.className = 'sub-nav-inner';

      tab.children.forEach((child) => {
        const subBtn = document.createElement('button');
        subBtn.className = 'sub-btn';
        subBtn.id = `nav-${child.id}`;
        subBtn.innerHTML = `
          <span class="sub-btn-label">${child.label}</span>
          ${child.description ? `<span class="sub-btn-desc">${child.description}</span>` : ''}
        `;
        subBtn.addEventListener('click', () => navigateToHash(child.id, () => setActiveTab(child.id)));
        subInner.appendChild(subBtn);
      });

      subNav.appendChild(subInner);
      item.appendChild(btn);
      item.appendChild(subNav);
    } else {
      btn.addEventListener('click', () => navigateToHash(tab.id, () => setActiveTab(tab.id)));
      item.appendChild(btn);
    }

    nav.appendChild(item);
  });
}

// ─── Toggle Sub Nav ───────────────────────────────────────
function toggleSubNav(item) {
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.nav-item.open').forEach((el) => {
    if (el !== item) {
      el.classList.remove('open');
      el.querySelector('.sub-nav')?.classList.remove('open');
    }
  });
  item.classList.toggle('open', !isOpen);
  item.querySelector('.sub-nav')?.classList.toggle('open', !isOpen);
}

// ─── Documents Page ──────────────────────────────────────
function showDocumentsPage(sectionId = activeDocSectionId) {
  // Reset all active states
  document.querySelectorAll('.nav-btn, .sub-btn').forEach((el) => el.classList.remove('active'));
  document.getElementById('nav-documents')?.classList.add('active');
  activeTabId = null;

  const currentSection = getDocumentSection(sectionId) || documentSections[0];
  activeDocSectionId = currentSection?.id || 'references';
  const sectionDocs = documents.filter((doc) => getDocSectionId(doc) === activeDocSectionId);
  const isEmpty = sectionDocs.length === 0;

  // Update header
  document.getElementById('page-title').textContent = 'Tài liệu';
  document.getElementById('page-subtitle').textContent = currentSection?.desc || 'Tài liệu tham khảo nội bộ';
  document.getElementById('breadcrumb').innerHTML =
    `<span>ERP Guidance</span><span class="breadcrumb-sep">/</span><span>Tài liệu</span><span class="breadcrumb-sep">/</span><span>${escapeHTML(currentSection?.label || '')}</span>`;

  document.getElementById('welcome-screen').style.display = 'none';
  const container = document.getElementById('content-container');
  container.style.display = 'flex';

  // ── Group by category ──
  const grouped = {};
  if (!isEmpty) {
    sectionDocs.forEach((doc) => {
      const cat = doc.category || 'Khác';
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push(doc);
    });
  }

  // Set default active doc
  activeDocId = sectionDocs.some((doc) => doc.id === activeDocId) ? activeDocId : sectionDocs[0]?.id || null;

  const firstDoc = sectionDocs.find((doc) => doc.id === activeDocId) || null;

  container.innerHTML = `
    <div class="docs-page">
      <div class="docs-tabs" role="tablist" aria-label="Nhóm tài liệu">
        ${documentSections.map((section) => {
          const count = documents.filter((doc) => getDocSectionId(doc) === section.id).length;
          return `
            <button
              type="button"
              class="docs-tab ${section.id === activeDocSectionId ? 'active' : ''}"
              data-doc-section-id="${escapeHTML(section.id)}"
              role="tab"
              aria-selected="${section.id === activeDocSectionId ? 'true' : 'false'}">
              <span>${escapeHTML(section.label)}</span>
              <small>${count}</small>
            </button>
          `;
        }).join('')}
      </div>

      <div class="docs-layout" id="docs-layout">

        <!-- Left: list -->
        <div class="docs-sidebar">
          <div class="docs-sidebar-header">
            <span class="docs-sidebar-title">${ICONS.library} ${escapeHTML(currentSection?.label || 'Tài liệu')}</span>
            <span class="docs-count">${sectionDocs.length} tài liệu</span>
          </div>

          <div class="docs-list" id="docs-list">
            ${
              isEmpty
                ? `<div class="docs-empty">
                    <div class="docs-empty-icon">${ICONS.library}</div>
                    <div class="docs-empty-title">Chưa có tài liệu</div>
                    <div class="docs-empty-text">Admin có thể thêm tài liệu tại mục Quản trị</div>
                  </div>`
                : Object.entries(grouped).map(([cat, items]) => `
                    <div class="docs-category">
                      <div class="docs-category-label">${ICONS.tag} ${escapeHTML(cat)}</div>
                      ${items.map((doc) => {
                        const ft = getFileType(doc);
                        return `
                        <button class="docs-item ${doc.id === activeDocId ? 'active' : ''}"
                                data-doc-id="${escapeHTML(doc.id)}">
                          <div class="docs-item-icon ${ft.colorClass}">${ft.icon()}</div>
                          <div class="docs-item-body">
                            <div class="docs-item-title">${escapeHTML(doc.title)}</div>
                            ${doc.desc ? `<div class="docs-item-desc">${escapeHTML(doc.desc)}</div>` : ''}
                          </div>
                          <span class="docs-item-badge ${ft.colorClass}">${ft.label}</span>
                          <div class="docs-item-arrow">${ICONS.chevron}</div>
                        </button>`;
                      }).join('')}
                    </div>
                  `).join('')
            }
          </div>
        </div>

        <!-- Right: preview -->
        <div class="docs-preview" id="docs-preview">
          ${
            isEmpty
              ? `<div class="docs-preview-empty">
                  <div class="docs-preview-empty-icon">${ICONS.pdf}</div>
                  <div class="docs-preview-empty-title">Chọn một tài liệu để xem</div>
                  <div class="docs-preview-empty-text">Tài liệu sẽ hiển thị ở đây</div>
                 </div>`
              : renderDocPreview(firstDoc)
          }
        </div>

      </div>
    </div>
  `;

  // Attach document section events
  container.querySelectorAll('.docs-tab').forEach((btn) => {
    btn.addEventListener('click', () => showDocumentsPage(btn.dataset.docSectionId));
  });

  // Attach click events
  container.querySelectorAll('.docs-item').forEach((btn) => {
    btn.addEventListener('click', () => {
      const docId = btn.dataset.docId;
      const doc = documents.find((d) => d.id === docId);
      if (!doc) return;
      activeDocId = docId;

      // Update active state in list
      container.querySelectorAll('.docs-item').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      // Update preview
      document.getElementById('docs-preview').innerHTML = renderDocPreview(doc);
    });
  });

  if (window.innerWidth <= 768) closeMobileSidebar();
}

function renderDocPreview(doc) {
  if (!doc) return '';
  const hasFile = doc.fileId && doc.fileId.trim() !== '';
  const ft = getFileType(doc);
  const isLink = doc.type === 'link';
  const isVideo = doc.type === 'video';

  if (isLink && doc.url) {
    const safeUrl = safeExternalUrl(doc.url);
    return `
      <div class="docs-preview-header">
        <div class="docs-preview-title-group">
          <div class="docs-preview-icon ${ft.colorClass}">${ft.icon()}</div>
          <div>
            <div class="docs-preview-title">${escapeHTML(doc.title)}</div>
            ${doc.desc ? `<div class="docs-preview-subtitle">${escapeHTML(doc.desc)}</div>` : ''}
          </div>
        </div>
        <a href="${escapeHTML(safeUrl)}" target="_blank" rel="noopener noreferrer" class="btn-download">
          ${ICONS.external} Mở liên kết
        </a>
      </div>
      <div class="docs-preview-body">
        <div class="docs-preview-empty">
          <div class="docs-preview-empty-icon">${ft.icon()}</div>
          <div class="docs-preview-empty-title">${escapeHTML(doc.title)}</div>
          <div class="docs-preview-empty-text">Nhấn <strong>Mở liên kết</strong> để xem tài liệu</div>
        </div>
      </div>
    `;
  }

  return `
    <div class="docs-preview-header">
      <div class="docs-preview-title-group">
        <div class="docs-preview-icon ${ft.colorClass}">${ft.icon()}</div>
        <div>
          <div class="docs-preview-title">
            ${escapeHTML(doc.title)}
            <span class="docs-preview-badge ${ft.colorClass}">${ft.label}</span>
          </div>
          ${doc.desc ? `<div class="docs-preview-subtitle">${escapeHTML(doc.desc)}</div>` : ''}
        </div>
      </div>
      ${hasFile ? `
        <a href="${gdriveDownload(doc.fileId)}"
           class="btn-download"
           target="_blank"
           rel="noopener noreferrer">
          ${ICONS.download} Tải xuống
        </a>` : ''}
    </div>
    <div class="docs-preview-body">
      ${hasFile
        ? `<iframe class="docs-frame"
               src="${gdrivePreview(doc.fileId)}"
               allow="autoplay"
               ${isVideo ? 'allowfullscreen' : ''}
               loading="lazy"
               title="${escapeHTML(doc.title)}"></iframe>`
        : `<div class="docs-preview-empty">
               <div class="docs-preview-empty-icon ${ft.colorClass}">${ft.icon()}</div>
               <div class="docs-preview-empty-title">Chưa có file tài liệu</div>
               <div class="docs-preview-empty-text">Admin có thể thêm Drive ID tại mục Quản trị</div>
             </div>`
      }
    </div>
  `;
}

// ─── Set Active Tab ───────────────────────────────────────
function setActiveTab(tabId) {
  activeTabId = tabId;
  const { tab: tabData, parent: parentTab } = findTabById(tabId);

  if (!tabData) return;

  // Update active states
  document.querySelectorAll('.nav-btn, .sub-btn').forEach((el) => el.classList.remove('active'));
  document.getElementById(`nav-${tabId}`)?.classList.add('active');

  if (parentTab) {
    document.getElementById(`nav-${parentTab.id}`)?.classList.add('active');
    const parentItem = document.querySelector(`[data-tab-id="${parentTab.id}"]`);
    if (parentItem) {
      parentItem.classList.add('open');
      parentItem.querySelector('.sub-nav')?.classList.add('open');
    }
  }

  renderContent(tabData, parentTab);
  if (window.innerWidth <= 768) closeMobileSidebar();
}

// ─── Render Content ───────────────────────────────────────
function renderContent(tabData, parentTab) {
  const container  = document.getElementById('content-container');
  const pageTitle  = document.getElementById('page-title');
  const pageSubtitle = document.getElementById('page-subtitle');
  const breadcrumb = document.getElementById('breadcrumb');

  pageTitle.textContent = tabData.label;
  pageSubtitle.textContent = tabData.description || '';

  if (parentTab) {
    breadcrumb.innerHTML = `
      <span>${parentTab.label}</span>
      <span class="breadcrumb-sep">/</span>
      <span>${tabData.label}</span>
    `;
  } else {
    breadcrumb.innerHTML = `
      <span>Modules</span>
      <span class="breadcrumb-sep">/</span>
      <span>${tabData.label}</span>
    `;
  }

  const hasPDF   = tabData.pdf  && tabData.pdf.trim()   !== '';
  const hasVideo = tabData.video && tabData.video.trim() !== '';

  let html = `<div class="module-content visible" id="module-${tabData.id}">`;

  // Module tag
  html += `
    <div class="module-meta">
      <div class="module-tag">${parentTab ? parentTab.label + ' — ' : ''}${tabData.label}</div>
    </div>
  `;

  // Pending notice (only when both are missing)
  if (!hasPDF && !hasVideo) {
    html += `
      <div class="pending-notice">
        ${ICONS.clock}
        Tài liệu PDF và video hướng dẫn cho module này đang được chuẩn bị.
      </div>
    `;
  }

  // Login-specific admin notice
  if (tabData.id === 'login') {
    html += `
      <div class="admin-notice">
        ${ICONS.info}
        <span>Mọi vấn đề liên quan đến <strong>tài khoản</strong>, <strong>mật khẩu</strong> và <strong>lỗi trang web</strong> vui lòng liên hệ Admin <strong>(Mr. An)</strong> để được hỗ trợ.</span>
      </div>
    `;
  }

  html += `<div class="cards-grid">`;

  // ── PDF Card ──
  html += `
    <div class="viewer-card">
      <div class="card-header">
        <div class="card-title-group">
          <div class="card-type-icon">${ICONS.pdf}</div>
          <div>
            <div class="card-title">Tài liệu hướng dẫn</div>
            <div class="card-subtitle">PDF — ${tabData.label}</div>
          </div>
        </div>
        ${hasPDF ? `
          <a href="${gdriveDownload(tabData.pdf)}"
             class="btn-download"
             target="_blank"
             rel="noopener noreferrer"
             id="btn-download-${tabData.id}">
            ${ICONS.download} Tải xuống
          </a>` : ''}
      </div>
      <div class="card-body">
        ${hasPDF
          ? `<iframe class="viewer-frame"
               src="${gdrivePDF(tabData.pdf)}"
               allow="autoplay"
               loading="lazy"
               title="PDF - ${tabData.label}"></iframe>`
          : `<div class="viewer-placeholder">
               <div class="placeholder-icon">${ICONS.pdf}</div>
               <div class="placeholder-title">Chưa có tài liệu</div>
               <div class="placeholder-text">PDF hướng dẫn đang được cập nhật</div>
             </div>`
        }
      </div>
    </div>
  `;

  // ── Video Card ──
  html += `
    <div class="viewer-card">
      <div class="card-header">
        <div class="card-title-group">
          <div class="card-type-icon">${ICONS.video}</div>
          <div>
            <div class="card-title">Video hướng dẫn</div>
            <div class="card-subtitle">Clip — ${tabData.label}</div>
          </div>
        </div>
      </div>
      <div class="card-body">
        ${hasVideo
          ? `<iframe class="viewer-frame"
               src="${gdriveVideo(tabData.video)}"
               allow="autoplay"
               allowfullscreen
               loading="lazy"
               title="Video - ${tabData.label}"></iframe>`
          : `<div class="viewer-placeholder">
               <div class="placeholder-icon">${ICONS.video}</div>
               <div class="placeholder-title">Chưa có video</div>
               <div class="placeholder-text">Video hướng dẫn đang được cập nhật</div>
             </div>`
        }
      </div>
    </div>
  `;

  html += `</div></div>`;

  container.innerHTML = html;
  document.getElementById('welcome-screen').style.display = 'none';
  container.style.display = 'flex';
}

// ─── Show Home ────────────────────────────────────────
function showHome() {
  // Reset active states in sidebar
  document.querySelectorAll('.nav-btn, .sub-btn').forEach((el) => el.classList.remove('active'));
  document.getElementById('nav-home')?.classList.add('active');

  // Update header
  document.getElementById('page-title').textContent = 'Home';
  document.getElementById('page-subtitle').textContent = 'Tổng quan toàn bộ hệ thống ERP';
  document.getElementById('breadcrumb').innerHTML = '<span>ERP Guidance</span><span class="breadcrumb-sep">/</span><span>Home</span>';

  // Hide welcome screen, show container
  document.getElementById('welcome-screen').style.display = 'none';
  const container = document.getElementById('content-container');
  container.style.display = 'flex';

  const hasPDF   = siteConfig.homePdf   && siteConfig.homePdf.trim()   !== '';
  const hasVideo = siteConfig.homeVideo && siteConfig.homeVideo.trim() !== '';

  // ── Section label ──
  let html = ``;

  // ── Overview viewers ──
  html += `
    <div class="home-overview-label">
      <span class="section-title">Tài liệu &amp; Video tổng quan</span>
      <span class="section-desc">Tài liệu tổng hợp và clip hướng dẫn đầy đủ toàn bộ hệ thống</span>
    </div>
    <div class="cards-grid">
  `;

  // PDF Card
  html += `
    <div class="viewer-card">
      <div class="card-header">
        <div class="card-title-group">
          <div class="card-type-icon">${ICONS.pdf}</div>
          <div>
            <div class="card-title">Tài liệu tổng hợp</div>
            <div class="card-subtitle">Hướng dẫn toàn bộ các chức năng ERP</div>
          </div>
        </div>
        ${hasPDF ? `
          <a href="${gdriveDownload(siteConfig.homePdf)}"
             class="btn-download"
             target="_blank"
             rel="noopener noreferrer"
             id="btn-download-home">
            ${ICONS.download} Tải xuống
          </a>` : ''}
      </div>
      <div class="card-body">
        ${hasPDF
          ? `<iframe class="viewer-frame"
               src="${gdrivePDF(siteConfig.homePdf)}"
               allow="autoplay"
               loading="lazy"
               title="Tài liệu tổng quan ERP"></iframe>`
          : `<div class="viewer-placeholder">
               <div class="placeholder-icon">${ICONS.pdf}</div>
               <div class="placeholder-title">Chưa có tài liệu tổng quan</div>
               <div class="placeholder-text">Điền homePdf trong config.js để hiển thị</div>
             </div>`
        }
      </div>
    </div>
  `;

  // Video Card
  html += `
    <div class="viewer-card">
      <div class="card-header">
        <div class="card-title-group">
          <div class="card-type-icon">${ICONS.video}</div>
          <div>
            <div class="card-title">Video tổng quan</div>
            <div class="card-subtitle">Clip hướng dẫn đầy đủ tất cả functions</div>
          </div>
        </div>
      </div>
      <div class="card-body">
        ${hasVideo
          ? `<iframe class="viewer-frame"
               src="${gdriveVideo(siteConfig.homeVideo)}"
               allow="autoplay"
               allowfullscreen
               loading="lazy"
               title="Video tổng quan ERP"></iframe>`
          : `<div class="viewer-placeholder">
               <div class="placeholder-icon">${ICONS.video}</div>
               <div class="placeholder-title">Chưa có video tổng quan</div>
               <div class="placeholder-text">Điền homeVideo trong config.js để hiển thị</div>
             </div>`
        }
      </div>
    </div>
  `;

  html += `</div>`; // end cards-grid

  // ── Module grid ──
  html += `
    <div class="home-overview-label" style="margin-top:8px;">
      <span class="section-title">Danh sách Module</span>
      <span class="section-desc">Chọn module để xem tài liệu và video hướng dẫn chi tiết</span>
    </div>
    <div class="home-grid">
  `;

  tabs.forEach((tab) => {
    const hasChildren = tab.children && tab.children.length > 0;
    const subCount = hasChildren ? tab.children.length : 0;

    html += `
      <div class="home-card" data-tab-goto="${hasChildren ? tab.children[0].id : tab.id}" id="home-card-${tab.id}">
        <div class="home-card-header">
          <div class="home-card-icon">${ICONS[tab.id] || ICONS.doc}</div>
          <div class="home-card-arrow">${ICONS.arrow}</div>
        </div>
        <div class="home-card-body">
          <div class="home-card-title">${tab.label}</div>
          ${hasChildren
            ? `<div class="home-card-subs">
                ${tab.children.map(c => `<span class="home-sub-tag">${c.label}</span>`).join('')}
               </div>`
            : `<div class="home-card-desc">Tài liệu hướng dẫn và video</div>`
          }
        </div>
        <div class="home-card-footer">
          ${hasChildren
            ? `<span class="home-card-meta">${subCount} sub-module${subCount > 1 ? 's' : ''}</span>`
            : `<span class="home-card-meta">1 module</span>`
          }
          <span class="home-card-status">→ Xem hướng dẫn</span>
        </div>
      </div>
    `;
  });

  html += `</div>`; // end home-grid

  container.innerHTML = html;

  // Attach click handlers to module cards
  container.querySelectorAll('.home-card').forEach((card) => {
    const targetId = card.dataset.tabGoto;
    card.addEventListener('click', () => navigateToHash(targetId, () => setActiveTab(targetId)));
  });

  if (window.innerWidth <= 768) closeMobileSidebar();
}


// ─── Welcome Screen (legacy, kept for initial render) ──────
function renderWelcome() {
  // Not used as landing — Home is default. Kept for safety.
}

// ─── Mobile Sidebar ───────────────────────────────────────
function openMobileSidebar() {
  sidebarOpen = true;
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebar-overlay').classList.add('show');
}

function closeMobileSidebar() {
  sidebarOpen = false;
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('show');
}

// ─── Admin Page ───────────────────────────────────────────
async function showAdminPage() {
  document.querySelectorAll('.nav-btn, .sub-btn').forEach((el) => el.classList.remove('active'));
  document.getElementById('nav-admin')?.classList.add('active');
  activeTabId = null;

  document.getElementById('page-title').textContent = 'Quản trị';
  document.getElementById('page-subtitle').textContent = 'Cập nhật tài liệu và video hướng dẫn';
  document.getElementById('breadcrumb').innerHTML =
    '<span>ERP Guidance</span><span class="breadcrumb-sep">/</span><span>Quản trị</span>';

  document.getElementById('welcome-screen').style.display = 'none';
  const container = document.getElementById('content-container');
  container.style.display = 'flex';

  container.innerHTML = `
    <div class="admin-login-shell">
      <div class="admin-login-card">
        <div class="admin-login-icon">${ICONS.admin}</div>
        <div>
          <div class="admin-login-title">Đang kiểm tra quyền truy cập</div>
          <div class="admin-login-subtitle">Đợi một chút để tải phiên đăng nhập hiện tại.</div>
        </div>
      </div>
    </div>
  `;

  const authenticated = await checkAdminSession();
  if (authenticated) {
    renderAdminDashboard(container);
  } else {
    renderAdminLogin(container);
  }

  if (window.innerWidth <= 768) closeMobileSidebar();
}

function renderAdminLogin(container) {
  container.innerHTML = `
    <div class="admin-login-shell">
      <form class="admin-login-card" id="admin-login-form" novalidate>
        <div class="admin-login-icon">${ICONS.admin}</div>
        <div>
          <div class="admin-login-title">Đăng nhập Admin</div>
          <div class="admin-login-subtitle">Nhập tài khoản quản trị để cập nhật nội dung hướng dẫn.</div>
        </div>

        <div class="admin-field">
          <label class="admin-label" for="admin-username">Tài khoản</label>
          <input class="admin-input" id="admin-username" name="username" autocomplete="username" required />
        </div>

        <div class="admin-field">
          <label class="admin-label" for="admin-password">Mật khẩu</label>
          <input class="admin-input" id="admin-password" name="password" type="password" autocomplete="current-password" required />
        </div>

        <span class="admin-form-error" id="admin-login-error"></span>

        <button type="submit" class="admin-primary-btn">
          ${ICONS.admin}
          <span>Đăng nhập</span>
        </button>
      </form>
    </div>
  `;

  document.getElementById('admin-login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('admin-username').value.trim();
    const password = document.getElementById('admin-password').value;

    document.getElementById('admin-login-error').textContent = '';
    loginAdmin(username, password)
      .then(() => {
        showToast('Đăng nhập admin thành công.', 'success');
        renderAdminDashboard(container);
      })
      .catch((error) => {
        document.getElementById('admin-login-error').textContent = error.message || 'Tài khoản hoặc mật khẩu chưa đúng.';
      });
  });
}

function renderAdminDashboard(container) {
  const moduleOptions = getFlattenedTabs();
  const firstModuleId = moduleOptions[0]?.tab.id || '';
  const categoryValues = [...new Set([
    'Quy định',
    'Thêm mới',
    'Hướng dẫn',
    'Quy trình',
    'Giải thích',
    ...documents.map((doc) => doc.category).filter(Boolean),
  ])];

  container.innerHTML = `
    <div class="admin-wrapper">
      <div class="admin-toolbar">
        <div>
          <div class="admin-title">Quản trị nội dung</div>
          <div class="admin-subtitle">Các thay đổi sẽ được commit lên GitHub qua Vercel Function.</div>
        </div>
        <div class="admin-toolbar-actions">
          <button type="button" class="admin-secondary-btn" id="admin-export">
            ${ICONS.download}
            <span>Xuất JSON</span>
          </button>
          <button type="button" class="admin-secondary-btn admin-danger-text" id="admin-reset-content">
            ${ICONS.refresh}
            <span>Khôi phục gốc</span>
          </button>
          <button type="button" class="admin-secondary-btn" id="admin-logout">
            ${ICONS.logout}
            <span>Đăng xuất</span>
          </button>
        </div>
      </div>

      <div class="admin-grid">
        <form class="admin-panel" id="admin-home-form">
          <div class="admin-panel-header">
            <div>
              <div class="admin-panel-title">Home</div>
              <div class="admin-panel-subtitle">Tài liệu và video tổng quan</div>
            </div>
          </div>

          <div class="admin-field">
            <label class="admin-label" for="admin-home-pdf">PDF tổng quan</label>
            <input class="admin-input" id="admin-home-pdf" value="${escapeHTML(siteConfig.homePdf || '')}" placeholder="Drive ID hoặc link Google Drive" />
          </div>

          <div class="admin-field">
            <label class="admin-label" for="admin-home-video">Video tổng quan</label>
            <input class="admin-input" id="admin-home-video" value="${escapeHTML(siteConfig.homeVideo || '')}" placeholder="Drive ID hoặc link Google Drive" />
          </div>

          <button type="submit" class="admin-primary-btn">
            ${ICONS.save}
            <span>Lưu Home</span>
          </button>
        </form>

        <form class="admin-panel" id="admin-module-form">
          <div class="admin-panel-header">
            <div>
              <div class="admin-panel-title">Module</div>
              <div class="admin-panel-subtitle">Cập nhật PDF và clip hướng dẫn</div>
            </div>
          </div>

          <div class="admin-field">
            <label class="admin-label" for="admin-module-select">Chọn module</label>
            <div class="admin-select-wrap">
              <select class="admin-select" id="admin-module-select">
                ${moduleOptions.map(({ tab, parent }) => `
                  <option value="${escapeHTML(tab.id)}">${escapeHTML(parent ? `${parent.label} / ${tab.label}` : tab.label)}</option>
                `).join('')}
              </select>
              <span class="select-arrow">${ICONS.chevron}</span>
            </div>
          </div>

          <div class="admin-field">
            <label class="admin-label" for="admin-module-pdf">PDF module</label>
            <input class="admin-input" id="admin-module-pdf" placeholder="Drive ID hoặc link Google Drive" />
          </div>

          <div class="admin-field">
            <label class="admin-label" for="admin-module-video">Video module</label>
            <input class="admin-input" id="admin-module-video" placeholder="Drive ID hoặc link Google Drive" />
          </div>

          <button type="submit" class="admin-primary-btn" ${firstModuleId ? '' : 'disabled'}>
            ${ICONS.save}
            <span>Lưu module</span>
          </button>
        </form>

        <form class="admin-panel admin-panel-wide" id="admin-doc-form">
          <div class="admin-panel-header">
            <div>
              <div class="admin-panel-title">Thêm / sửa tài liệu chung</div>
              <div class="admin-panel-subtitle">Chọn tab, loại file rồi dán Drive ID hoặc link</div>
            </div>
          </div>

          <input type="hidden" id="admin-doc-editing-id" />
          <datalist id="admin-doc-category-options">
            ${categoryValues.map((category) => `<option value="${escapeHTML(category)}"></option>`).join('')}
          </datalist>

          <div class="admin-form-grid">
            <div class="admin-field">
              <label class="admin-label" for="admin-doc-title">Tên tài liệu</label>
              <input class="admin-input" id="admin-doc-title" required placeholder="Ví dụ: Danh sách ID" />
            </div>

            <div class="admin-field">
              <label class="admin-label" for="admin-doc-section">Tab tài liệu</label>
              <div class="admin-select-wrap">
                <select class="admin-select" id="admin-doc-section">
                  ${documentSections.map((section) => `
                    <option value="${escapeHTML(section.id)}">${escapeHTML(section.label)}</option>
                  `).join('')}
                </select>
                <span class="select-arrow">${ICONS.chevron}</span>
              </div>
            </div>

            <div class="admin-field">
              <label class="admin-label" for="admin-doc-category">Nhóm nhỏ</label>
              <input class="admin-input" id="admin-doc-category" list="admin-doc-category-options" required placeholder="Quy định, Hướng dẫn, Giải thích..." />
            </div>

            <div class="admin-field">
              <label class="admin-label" for="admin-doc-type">Loại file</label>
              <div class="admin-select-wrap">
                <select class="admin-select" id="admin-doc-type">
                  ${Object.entries(FILE_TYPES).map(([type, config]) => `
                    <option value="${type}">${config.label}</option>
                  `).join('')}
                </select>
                <span class="select-arrow">${ICONS.chevron}</span>
              </div>
            </div>

            <div class="admin-field admin-field-wide">
              <label class="admin-label" for="admin-doc-desc">Mô tả</label>
              <input class="admin-input" id="admin-doc-desc" placeholder="Mô tả ngắn hiển thị dưới tên tài liệu" />
            </div>

            <div class="admin-field admin-field-wide">
              <label class="admin-label" for="admin-doc-source" id="admin-doc-source-label">Drive ID / link</label>
              <input class="admin-input" id="admin-doc-source" placeholder="Drive ID hoặc link Google Drive" />
            </div>
          </div>

          <div class="admin-form-actions">
            <button type="button" class="admin-secondary-btn" id="admin-doc-clear">
              ${ICONS.refresh}
              <span>Làm mới form</span>
            </button>
            <button type="submit" class="admin-primary-btn" id="admin-doc-submit">
              ${ICONS.plus}
              <span>Thêm tài liệu</span>
            </button>
          </div>
        </form>

        <div class="admin-panel admin-panel-wide">
          <div class="admin-panel-header">
            <div>
              <div class="admin-panel-title">Danh sách tài liệu</div>
              <div class="admin-panel-subtitle">${documents.length} tài liệu đang hiển thị</div>
            </div>
          </div>
          <div class="admin-doc-list" id="admin-doc-list">
            ${renderAdminDocumentList()}
          </div>
        </div>
      </div>
    </div>
  `;

  attachAdminDashboardEvents(container, firstModuleId);
}

function renderAdminDocumentList() {
  if (!documents.length) {
    return `
      <div class="admin-doc-empty">
        <div class="admin-doc-empty-icon">${ICONS.library}</div>
        <span>Chưa có tài liệu chung.</span>
      </div>
    `;
  }

  return documentSections.map((section) => {
    const sectionDocs = documents.filter((doc) => getDocSectionId(doc) === section.id);
    return `
      <div class="admin-doc-section">
        <div class="admin-doc-section-title">
          <span>${escapeHTML(section.label)}</span>
          <small>${sectionDocs.length}</small>
        </div>
        ${sectionDocs.length
          ? sectionDocs.map((doc) => {
              const ft = getFileType(doc);
              const source = doc.type === 'link' ? doc.url : doc.fileId;
              return `
                <div class="admin-doc-row">
                  <div class="admin-doc-row-icon ${ft.colorClass}">${ft.icon()}</div>
                  <div class="admin-doc-row-main">
                    <div class="admin-doc-row-title">${escapeHTML(doc.title)}</div>
                    <div class="admin-doc-row-meta">
                      <span>${escapeHTML(doc.category || 'Khác')}</span>
                      <span>${ft.label}</span>
                      <span>${source ? escapeHTML(source) : 'Chưa có Drive ID'}</span>
                    </div>
                  </div>
                  <div class="admin-doc-row-actions">
                    <button type="button" class="admin-icon-btn" data-admin-doc-edit="${escapeHTML(doc.id)}" aria-label="Sửa ${escapeHTML(doc.title)}">
                      ${ICONS.edit}
                    </button>
                    <button type="button" class="admin-icon-btn admin-danger-btn" data-admin-doc-delete="${escapeHTML(doc.id)}" aria-label="Xóa ${escapeHTML(doc.title)}">
                      ${ICONS.trash}
                    </button>
                  </div>
                </div>
              `;
            }).join('')
          : '<div class="admin-doc-section-empty">Chưa có tài liệu trong tab này.</div>'
        }
      </div>
    `;
  }).join('');
}

function attachAdminDashboardEvents(container, firstModuleId) {
  document.getElementById('admin-logout').addEventListener('click', async () => {
    await logoutAdmin().catch(() => {});
    showToast('Đã đăng xuất admin.', 'success');
    renderAdminLogin(container);
  });

  document.getElementById('admin-export').addEventListener('click', exportAdminContent);

  document.getElementById('admin-reset-content').addEventListener('click', async () => {
    if (!window.confirm('Khôi phục dữ liệu gốc từ config.js? Các thay đổi admin trong trình duyệt này sẽ bị xóa.')) return;
    const previousContent = getContentPayload();
    try {
      await resetContentState();
      showToast('Đã khôi phục dữ liệu gốc và commit lên GitHub.', 'success');
      renderAdminDashboard(container);
    } catch (error) {
      applyContentState(previousContent);
      renderAdminDashboard(container);
      showToast(error.message || 'Không thể khôi phục dữ liệu.', 'error');
    }
  });

  document.getElementById('admin-home-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const previousContent = getContentPayload();
    siteConfig.homePdf = extractDriveId(document.getElementById('admin-home-pdf').value);
    siteConfig.homeVideo = extractDriveId(document.getElementById('admin-home-video').value);
    try {
      await saveContentState();
      showToast('Đã lưu Home và commit lên GitHub.', 'success');
      renderAdminDashboard(container);
    } catch (error) {
      applyContentState(previousContent);
      renderAdminDashboard(container);
      showToast(error.message || 'Không thể lưu Home.', 'error');
    }
  });

  const moduleSelect = document.getElementById('admin-module-select');
  const modulePdf = document.getElementById('admin-module-pdf');
  const moduleVideo = document.getElementById('admin-module-video');

  function fillModuleForm() {
    const { tab } = findTabById(moduleSelect.value || firstModuleId);
    modulePdf.value = tab?.pdf || '';
    moduleVideo.value = tab?.video || '';
  }

  moduleSelect.addEventListener('change', fillModuleForm);
  fillModuleForm();

  document.getElementById('admin-module-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const { tab } = findTabById(moduleSelect.value);
    if (!tab) return;

    const previousContent = getContentPayload();
    tab.pdf = extractDriveId(modulePdf.value);
    tab.video = extractDriveId(moduleVideo.value);
    try {
      await saveContentState();
      showToast('Đã lưu module và commit lên GitHub.', 'success');
      renderAdminDashboard(container);
    } catch (error) {
      applyContentState(previousContent);
      renderAdminDashboard(container);
      showToast(error.message || 'Không thể lưu module.', 'error');
    }
  });

  const docForm = document.getElementById('admin-doc-form');
  const docEditingId = document.getElementById('admin-doc-editing-id');
  const docSection = document.getElementById('admin-doc-section');
  const docCategory = document.getElementById('admin-doc-category');
  const docType = document.getElementById('admin-doc-type');
  const docSource = document.getElementById('admin-doc-source');
  const docSourceLabel = document.getElementById('admin-doc-source-label');
  const docSubmit = document.getElementById('admin-doc-submit');

  function updateSourceField() {
    const isLink = docType.value === 'link';
    docSourceLabel.textContent = isLink ? 'URL liên kết' : 'Drive ID / link Google Drive';
    docSource.placeholder = isLink ? 'https://...' : 'Drive ID hoặc link Google Drive';
  }

  function clearDocForm() {
    docForm.reset();
    docEditingId.value = '';
    docSection.value = activeDocSectionId || documentSections[0]?.id || '';
    docCategory.value = docSection.value === 'rules-catalog'
      ? 'Quy định'
      : docSection.value === 'operation-guides'
        ? 'Hướng dẫn'
        : 'Quy trình';
    docType.value = 'pdf';
    updateSourceField();
    docSubmit.innerHTML = `${ICONS.plus}<span>Thêm tài liệu</span>`;
  }

  docType.addEventListener('change', updateSourceField);
  docSection.addEventListener('change', () => {
    if (!docEditingId.value) {
      docCategory.value = docSection.value === 'rules-catalog'
        ? 'Quy định'
        : docSection.value === 'operation-guides'
          ? 'Hướng dẫn'
          : 'Quy trình';
    }
  });

  document.getElementById('admin-doc-clear').addEventListener('click', clearDocForm);

  docForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const previousContent = getContentPayload();

    const title = document.getElementById('admin-doc-title').value.trim();
    const desc = document.getElementById('admin-doc-desc').value.trim();
    const sectionId = docSection.value;
    const category = docCategory.value.trim() || 'Khác';
    const type = docType.value;
    const source = docSource.value.trim();

    if (!title) {
      showToast('Vui lòng nhập tên tài liệu.', 'error');
      return;
    }

    if (type === 'link' && source && safeExternalUrl(source) === '#') {
      showToast('URL liên kết chưa hợp lệ.', 'error');
      return;
    }

    const editingId = docEditingId.value;
    const existingIndex = editingId ? documents.findIndex((doc) => doc.id === editingId) : -1;
    const existingDoc = existingIndex >= 0 ? documents[existingIndex] : {};
    const nextDoc = {
      ...existingDoc,
      id: editingId || createUniqueDocId(title),
      title,
      desc,
      sectionId,
      category,
      type,
      fileId: type === 'link' ? '' : extractDriveId(source),
      url: type === 'link' ? source : '',
    };

    if (existingIndex >= 0) {
      documents[existingIndex] = nextDoc;
    } else {
      documents.push(nextDoc);
    }

    activeDocSectionId = sectionId;
    try {
      await saveContentState();
      showToast(existingIndex >= 0 ? 'Đã cập nhật và commit lên GitHub.' : 'Đã thêm tài liệu mới và commit lên GitHub.', 'success');
      renderAdminDashboard(container);
    } catch (error) {
      applyContentState(previousContent);
      renderAdminDashboard(container);
      showToast(error.message || 'Không thể lưu tài liệu.', 'error');
    }
  });

  container.querySelectorAll('[data-admin-doc-edit]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const doc = documents.find((item) => item.id === btn.dataset.adminDocEdit);
      if (!doc) return;

      docEditingId.value = doc.id;
      document.getElementById('admin-doc-title').value = doc.title || '';
      document.getElementById('admin-doc-desc').value = doc.desc || '';
      docSection.value = getDocSectionId(doc);
      docCategory.value = doc.category || '';
      docType.value = doc.type || 'pdf';
      docSource.value = doc.type === 'link' ? doc.url || '' : doc.fileId || '';
      updateSourceField();
      docSubmit.innerHTML = `${ICONS.save}<span>Lưu thay đổi</span>`;
      docForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  container.querySelectorAll('[data-admin-doc-delete]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const doc = documents.find((item) => item.id === btn.dataset.adminDocDelete);
      if (!doc) return;
      if (!window.confirm(`Xóa tài liệu "${doc.title}"?`)) return;

      const previousContent = getContentPayload();
      documents = documents.filter((item) => item.id !== doc.id);
      saveContentState()
        .then(() => {
          showToast('Đã xóa tài liệu và commit lên GitHub.', 'success');
          renderAdminDashboard(container);
        })
        .catch((error) => {
          applyContentState(previousContent);
          renderAdminDashboard(container);
          showToast(error.message || 'Không thể xóa tài liệu.', 'error');
        });
    });
  });

  clearDocForm();
}

function exportAdminContent() {
  const payload = {
    siteConfig: {
      homePdf: siteConfig.homePdf || '',
      homeVideo: siteConfig.homeVideo || '',
    },
    tabs,
    documentSections,
    documents,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `erp-guidance-content-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

// ─── Feedback Page ────────────────────────────────────────
function showFeedbackPage() {
  // Reset active states
  document.querySelectorAll('.nav-btn, .sub-btn').forEach((el) => el.classList.remove('active'));
  document.getElementById('nav-feedback')?.classList.add('active');
  activeTabId = null;

  // Update header
  document.getElementById('page-title').textContent = 'Phản hồi Hệ thống';
  document.getElementById('page-subtitle').textContent = 'Gửi ý kiến, yêu cầu thay đổi về hệ thống ERP';
  document.getElementById('breadcrumb').innerHTML =
    '<span>ERP Guidance</span><span class="breadcrumb-sep">/</span><span>Phản hồi</span>';

  document.getElementById('welcome-screen').style.display = 'none';
  const container = document.getElementById('content-container');
  container.style.display = 'flex';

  // Chips HTML cho modules
  const moduleChips = FEEDBACK_MODULES.map((m) =>
    `<button type="button" class="module-chip" data-module="${m}">${m}</button>`
  ).join('');

  container.innerHTML = `
    <div class="feedback-wrapper" id="feedback-wrapper">

      <div class="feedback-intro">
        <div class="feedback-intro-icon">${ICONS.feedback}</div>
        <div>
          <div class="feedback-intro-title">Ý kiến của bạn rất quan trọng</div>
          <div class="feedback-intro-desc">Điền thông tin bên dưới để gửi phản hồi về hệ thống ERP. Chúng tôi sẽ xem xét và phản hồi sớm nhất có thể.</div>
        </div>
      </div>

      <form class="feedback-form" id="feedback-form" novalidate>

        <!-- Bộ phận -->
        <div class="feedback-field" id="field-department">
          <label class="feedback-label" for="fb-department">
            Bộ phận của bạn <span class="required">*</span>
          </label>
          <div class="feedback-select-wrap">
            <select class="feedback-select" id="fb-department" name="department" required>
              <option value="">— Chọn bộ phận —</option>
              ${DEPARTMENTS.map((d) => `<option value="${d}">${d}</option>`).join('')}
            </select>
            <span class="select-arrow">${ICONS.chevron}</span>
          </div>
          <span class="feedback-error" id="err-department"></span>
        </div>

        <!-- Module -->
        <div class="feedback-field" id="field-modules">
          <label class="feedback-label">
            Module liên quan <span class="required">*</span>
            <span class="feedback-hint">Có thể chọn nhiều</span>
          </label>
          <div class="module-chips" id="module-chips">
            ${moduleChips}
          </div>
          <span class="feedback-error" id="err-modules"></span>
        </div>

        <!-- Nội dung -->
        <div class="feedback-field" id="field-content">
          <label class="feedback-label" for="fb-content">
            Nội dung ý kiến / Yêu cầu thay đổi <span class="required">*</span>
          </label>
          <textarea
            class="feedback-textarea"
            id="fb-content"
            name="content"
            placeholder="Mô tả chi tiết vấn đề bạn gặp phải hoặc tính năng bạn muốn thay đổi..."
            rows="6"
            required
          ></textarea>
          <div class="textarea-counter"><span id="char-count">0</span> / 2000 ký tự</div>
          <span class="feedback-error" id="err-content"></span>
        </div>

        <!-- Hình ảnh -->
        <div class="feedback-field">
          <label class="feedback-label">
            Hình ảnh / Tệp đính kèm
            <span class="feedback-hint">Tùy chọn — tối đa 3 ảnh, mỗi ảnh ≤ 4MB</span>
          </label>
          <div class="file-upload-area" id="file-upload-area">
            <input type="file" id="fb-images" name="images" accept="image/*" multiple class="file-input" />
            <div class="file-upload-placeholder" id="file-placeholder">
              <div class="file-upload-icon">${ICONS.image}</div>
              <div class="file-upload-text">Kéo thả ảnh vào đây hoặc <span class="file-browse">chọn file</span></div>
              <div class="file-upload-hint">PNG, JPG, WEBP — tối đa 3 ảnh</div>
            </div>
            <div class="file-preview-grid" id="file-preview-grid"></div>
          </div>
        </div>

        <!-- Submit -->
        <div class="feedback-actions">
          <button type="button" class="btn-reset" id="btn-reset">Xóa form</button>
          <button type="submit" class="btn-send" id="btn-send">
            <span class="btn-send-icon">${ICONS.send}</span>
            <span class="btn-send-label">Gửi phản hồi</span>
            <span class="btn-send-spinner" id="send-spinner"></span>
          </button>
        </div>

      </form>
    </div>
  `;

  // ── Module chip toggle ──
  const chipsEl = document.getElementById('module-chips');
  chipsEl.querySelectorAll('.module-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      chip.classList.toggle('active');
      document.getElementById('err-modules').textContent = '';
    });
  });

  // ── Char counter ──
  const textarea = document.getElementById('fb-content');
  const charCount = document.getElementById('char-count');
  textarea.addEventListener('input', () => {
    const len = textarea.value.length;
    charCount.textContent = len;
    charCount.style.color = len > 1900 ? 'var(--warning-text)' : '';
    if (len > 0) document.getElementById('err-content').textContent = '';
  });

  // ── File upload ──
  const fileInput = document.getElementById('fb-images');
  const filePreviewGrid = document.getElementById('file-preview-grid');
  const filePlaceholder = document.getElementById('file-placeholder');
  let selectedFiles = [];

  function renderFilePreviews() {
    filePreviewGrid.innerHTML = '';
    if (selectedFiles.length === 0) {
      filePlaceholder.style.display = 'flex';
      return;
    }
    filePlaceholder.style.display = 'none';
    selectedFiles.forEach((file, idx) => {
      const url = URL.createObjectURL(file);
      const item = document.createElement('div');
      item.className = 'file-preview-item';
      item.innerHTML = `
        <img src="${url}" alt="${file.name}" class="file-preview-img" />
        <div class="file-preview-name">${file.name}</div>
        <button type="button" class="file-preview-remove" data-idx="${idx}">${ICONS.trash}</button>
      `;
      item.querySelector('.file-preview-remove').addEventListener('click', () => {
        selectedFiles.splice(idx, 1);
        renderFilePreviews();
      });
      filePreviewGrid.appendChild(item);
    });
  }

  const uploadArea = document.getElementById('file-upload-area');
  uploadArea.addEventListener('click', (e) => {
    if (!e.target.closest('.file-preview-remove')) fileInput.click();
  });
  uploadArea.addEventListener('dragover', (e) => { e.preventDefault(); uploadArea.classList.add('dragover'); });
  uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('dragover'));
  uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
    addFiles(Array.from(e.dataTransfer.files));
  });
  fileInput.addEventListener('change', () => {
    addFiles(Array.from(fileInput.files));
    fileInput.value = '';
  });

  function addFiles(newFiles) {
    const images = newFiles.filter((f) => f.type.startsWith('image/'));
    const toAdd = images.slice(0, 3 - selectedFiles.length);
    const oversized = toAdd.filter((f) => f.size > 4 * 1024 * 1024);
    if (oversized.length) { showToast('Mỗi ảnh tối đa 4MB!', 'error'); return; }
    selectedFiles = [...selectedFiles, ...toAdd].slice(0, 3);
    renderFilePreviews();
  }

  // ── Reset ──
  document.getElementById('btn-reset').addEventListener('click', () => {
    document.getElementById('feedback-form').reset();
    chipsEl.querySelectorAll('.module-chip').forEach((c) => c.classList.remove('active'));
    charCount.textContent = '0';
    selectedFiles = [];
    renderFilePreviews();
    ['err-department', 'err-modules', 'err-content'].forEach((id) => {
      document.getElementById(id).textContent = '';
    });
    ['field-department', 'field-modules', 'field-content'].forEach((id) => {
      document.getElementById(id)?.classList.remove('has-error');
    });
  });

  // ── Submit ──
  document.getElementById('feedback-form').addEventListener('submit', (e) => {
    e.preventDefault();
    submitFeedback(selectedFiles);
  });

  if (window.innerWidth <= 768) closeMobileSidebar();
}

// ─── Submit Feedback ──────────────────────────────────────
async function submitFeedback(selectedFiles) {
  // ── Validate ──
  let valid = true;
  const dept = document.getElementById('fb-department').value;
  const content = document.getElementById('fb-content').value.trim();
  const activeChips = [...document.querySelectorAll('.module-chip.active')].map((c) => c.dataset.module);

  if (!dept) {
    document.getElementById('err-department').textContent = 'Vui lòng chọn bộ phận.';
    document.getElementById('field-department')?.classList.add('has-error');
    valid = false;
  } else {
    document.getElementById('err-department').textContent = '';
    document.getElementById('field-department')?.classList.remove('has-error');
  }

  if (activeChips.length === 0) {
    document.getElementById('err-modules').textContent = 'Vui lòng chọn ít nhất một module.';
    document.getElementById('field-modules')?.classList.add('has-error');
    valid = false;
  } else {
    document.getElementById('err-modules').textContent = '';
    document.getElementById('field-modules')?.classList.remove('has-error');
  }

  if (!content) {
    document.getElementById('err-content').textContent = 'Vui lòng nhập nội dung phản hồi.';
    document.getElementById('field-content')?.classList.add('has-error');
    valid = false;
  } else {
    document.getElementById('err-content').textContent = '';
    document.getElementById('field-content')?.classList.remove('has-error');
  }

  if (!valid) return;

  // ── Loading state ──
  const btnSend = document.getElementById('btn-send');
  btnSend.disabled = true;
  btnSend.classList.add('loading');

  // ── Convert images to base64 ──
  const imagesBase64 = [];
  for (const file of selectedFiles) {
    const b64 = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target.result);
      reader.readAsDataURL(file);
    });
    imagesBase64.push({ name: file.name, data: b64 });
  }

  // ── Build payload ──
  const payload = {
    timestamp: new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' }),
    department: dept,
    modules: activeChips.join(', '),
    content: content,
    images: imagesBase64,
  };

  // ── Check webhook URL ──
  const webhookUrl = siteConfig.feedbackWebhookUrl;
  if (!webhookUrl || webhookUrl.trim() === '') {
    // Demo mode: log to console and show success (for testing before setup)
    console.log('[ERP Feedback] Webhook chưa cấu hình. Dữ liệu phản hồi:', payload);
    btnSend.disabled = false;
    btnSend.classList.remove('loading');
    showToast('⚙️ Webhook chưa cấu hình — xem SETUP_FEEDBACK.md để thiết lập Google Sheets.', 'warning', 6000);
    return;
  }

  // ── Send ──
  try {
    // Google Apps Script Web App yêu cầu no-cors mode
    // (không đọc được response body nhưng request vẫn được xử lý phía server)
    await fetch(webhookUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    // no-cors không throw lỗi nếu network OK → assume success
    document.getElementById('btn-reset').click();
    showToast('✅ Phản hồi đã được gửi thành công! Cảm ơn bạn.', 'success', 5000);
  } catch (err) {
    console.error('[ERP Feedback] Lỗi gửi phản hồi:', err);
    showToast('❌ Gửi thất bại. Vui lòng thử lại hoặc liên hệ Admin.', 'error', 5000);
  } finally {
    btnSend.disabled = false;
    btnSend.classList.remove('loading');
  }
}

// ─── Toast Notification ───────────────────────────────────
function showToast(message, type = 'success', duration = 4000) {
  // Remove existing toast
  document.getElementById('erp-toast')?.remove();

  const toast = document.createElement('div');
  toast.id = 'erp-toast';
  toast.className = `erp-toast erp-toast--${type}`;
  toast.innerHTML = `
    <span class="toast-message">${message}</span>
    <button class="toast-close" onclick="this.parentElement.remove()">✕</button>
  `;
  document.body.appendChild(toast);

  // Animate in
  requestAnimationFrame(() => toast.classList.add('show'));

  // Auto remove
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 350);
  }, duration);
}

// ─── Theme Toggle ─────────────────────────────────────────
const ICON_SUN = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.22" y1="4.22" x2="7.05" y2="7.05"/><line x1="16.95" y1="16.95" x2="19.78" y2="19.78"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.22" y1="19.78" x2="7.05" y2="16.95"/><line x1="16.95" y1="7.05" x2="19.78" y2="4.22"/></svg>`;
const ICON_MOON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/></svg>`;

function applyTheme(isDark) {
  if (isDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
  const icon = document.getElementById('theme-toggle-icon');
  const label = document.getElementById('theme-toggle-label');
  if (icon) icon.innerHTML = isDark ? ICON_MOON : ICON_SUN;
  if (label) label.textContent = isDark ? 'Giao diện sáng' : 'Giao diện tối';
}

function initTheme() {
  const saved = localStorage.getItem('erp-theme');
  // Default is light (null or 'light' = light)
  const isDark = saved === 'dark';
  applyTheme(isDark);

  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      const currentlyDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const next = !currentlyDark;
      localStorage.setItem('erp-theme', next ? 'dark' : 'light');
      applyTheme(next);
    });
  }
}

async function routeFromHash() {
  const hash = window.location.hash.replace('#', '');
  if (hash === 'home') {
    showHome();
  } else if (hash === 'documents') {
    showDocumentsPage();
  } else if (hash === 'feedback') {
    showFeedbackPage();
  } else if (hash === 'admin') {
    await showAdminPage();
  } else if (hash) {
    setActiveTab(hash);
  } else {
    showHome(); // Default landing page is Home
  }
}

// ─── Init ─────────────────────────────────────────────────
export async function init() {
  await loadContentState();
  initTheme();
  buildSidebar();
  renderWelcome();

  document.getElementById('mobile-toggle').addEventListener('click', () => {
    sidebarOpen ? closeMobileSidebar() : openMobileSidebar();
  });
  document.getElementById('sidebar-overlay').addEventListener('click', closeMobileSidebar);
  window.addEventListener('hashchange', () => {
    routeFromHash().catch((error) => console.error('[ERP Guidance] Route failed:', error));
  });

  await routeFromHash();
}
