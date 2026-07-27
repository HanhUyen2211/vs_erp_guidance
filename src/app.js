import { tabs, siteConfig } from './config.js';

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
  // Logo
  logo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  // Welcome chips
  modules: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
  doc: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>`,
  play: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>`,
};

// ─── Helpers ──────────────────────────────────────────────
function gdrivePDF(id)      { return `https://drive.google.com/file/d/${id}/preview`; }
function gdriveVideo(id)    { return `https://drive.google.com/file/d/${id}/preview`; }
function gdriveDownload(id) { return `https://drive.google.com/uc?export=download&id=${id}`; }

// ─── State ────────────────────────────────────────────────
let activeTabId = null;
let sidebarOpen = false;

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
  homeBtn.addEventListener('click', () => showHome());
  homeItem.appendChild(homeBtn);
  nav.appendChild(homeItem);

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
        subBtn.addEventListener('click', () => setActiveTab(child.id));
        subInner.appendChild(subBtn);
      });

      subNav.appendChild(subInner);
      item.appendChild(btn);
      item.appendChild(subNav);
    } else {
      btn.addEventListener('click', () => setActiveTab(tab.id));
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

// ─── Set Active Tab ───────────────────────────────────────
function setActiveTab(tabId) {
  activeTabId = tabId;
  let tabData = null;
  let parentTab = null;

  for (const tab of tabs) {
    if (tab.id === tabId) { tabData = tab; break; }
    if (tab.children) {
      const child = tab.children.find((c) => c.id === tabId);
      if (child) { tabData = child; parentTab = tab; break; }
    }
  }

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
    card.addEventListener('click', () => setActiveTab(targetId));
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

// ─── Init ─────────────────────────────────────────────────
export function init() {
  buildSidebar();
  renderWelcome();

  document.getElementById('mobile-toggle').addEventListener('click', () => {
    sidebarOpen ? closeMobileSidebar() : openMobileSidebar();
  });
  document.getElementById('sidebar-overlay').addEventListener('click', closeMobileSidebar);

  const hash = window.location.hash.replace('#', '');
  if (hash) {
    setActiveTab(hash);
  } else {
    showHome(); // Default landing page is Home
  }
}
