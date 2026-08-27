/* ==========================================================================
   SEEDICON FOUNDER PLATFORM — REUSABLE LAYOUT COMPONENTS
   Ultra-optimized, highly structured, zero-bloat
   ========================================================================== */

const FounderLayout = {
  // 01. Render Standardized Modern Sidebar
  renderSidebar(activeNav = 'network') {
    const isActive = (id) => activeNav === id ? 'active' : '';

    return `
      <aside class="founder-sidebar" id="founderSidebar">
        <!-- Brand Header -->
        <div class="sidebar-brand-row">
          <a href="./network.html" class="brand-title-wrap">
            <div class="brand-icon-box">
              <i data-lucide="asterisk" style="width:15px; height:15px; stroke-width:2.4;"></i>
            </div>
            <span class="brand-name">Seedicon Founder</span>
          </a>
          <button class="sidebar-collapse-btn" id="toggleSidebarBtn" onclick="window.toggleSidebar(event)" title="Collapse Sidebar (⌘[)">
            <i data-lucide="chevrons-left" style="width:14px; height:14px;"></i>
          </button>
        </div>

        <!-- 01. Core / Overview -->
        <div class="nav-group-section" style="margin-top:4px;">
          <div class="nav-group-label">Core</div>
          <a href="./network.html" class="sidebar-nav-item ${isActive('network')}" title="Network">
            <div class="sidebar-nav-item-left">
              <i data-lucide="users" style="width:13.5px; height:13.5px;"></i>
              <span>Network</span>
            </div>
          </a>
          <a href="./product-listing.html" class="sidebar-nav-item ${isActive('listing')}" title="Product Listing">
            <div class="sidebar-nav-item-left">
              <i data-lucide="store" style="width:13.5px; height:13.5px;"></i>
              <span>Product Listing</span>
            </div>
          </a>
        </div>

        <!-- 02. Applications -->
        <div class="nav-group-section">
          <div class="nav-group-label">Applications</div>
          <a href="./my-applications.html" class="sidebar-nav-item ${isActive('my-applications')}" title="My Application">
            <div class="sidebar-nav-item-left">
              <i data-lucide="file-text" style="width:13.5px; height:13.5px;"></i>
              <span>My Application</span>
            </div>
          </a>
        </div>

        <!-- 03. Network & CRM -->
        <div class="nav-group-section">
          <div class="nav-group-label">VDR &amp; CRM</div>
          <a href="./watch-data-rooms.html" class="sidebar-nav-item ${isActive('data-rooms')}" title="Watch Data Rooms">
            <div class="sidebar-nav-item-left">
              <i data-lucide="folder-lock" style="width:13.5px; height:13.5px;"></i>
              <span>Watch Data Rooms</span>
            </div>
          </a>
          <a href="./investor-tracking.html" class="sidebar-nav-item ${isActive('investors')}" title="Investor CRM">
            <div class="sidebar-nav-item-left">
              <i data-lucide="handshake" style="width:13.5px; height:13.5px;"></i>
              <span>Investor CRM</span>
            </div>
          </a>
        </div>

        <!-- 04. Pitch & Review -->
        <div class="nav-group-section">
          <div class="nav-group-label">Pitch &amp; Review</div>
          <a href="./deckwale.html" class="sidebar-nav-item ${isActive('deckwale')}" title="Deckwale">
            <div class="sidebar-nav-item-left">
              <i data-lucide="sparkles" style="width:13.5px; height:13.5px;"></i>
              <span>Deckwale</span>
            </div>
            <span class="badge-pill neutral" style="font-size:8.5px; padding:1px 4px;">PRO</span>
          </a>
          <a href="./pitch-deck-reviewer.html" class="sidebar-nav-item ${isActive('deck')}">
            <div class="sidebar-nav-item-left">
              <i data-lucide="presentation" style="width:13.5px; height:13.5px;"></i>
              <span>Pitch Deck Reviewer</span>
            </div>
            <span class="badge-pill neutral" style="font-size:8.5px; padding:1px 4px;">AI</span>
          </a>
        </div>

        <!-- 05. Ecosystem & Intelligence -->
        <div class="nav-group-section">
          <div class="nav-group-label">Ecosystem &amp; Intelligence</div>
          <a href="./startup-news.html" class="sidebar-nav-item ${isActive('news')}" title="Startup News">
            <div class="sidebar-nav-item-left">
              <i data-lucide="newspaper" style="width:13.5px; height:13.5px;"></i>
              <span>Startup News</span>
            </div>
          </a>
          <a href="./due-diligence.html" class="sidebar-nav-item ${isActive('diligence')}" title="DD Checklist">
            <div class="sidebar-nav-item-left">
              <i data-lucide="shield-check" style="width:13.5px; height:13.5px;"></i>
              <span>DD Checklist</span>
            </div>
          </a>
          <a href="./government-grants.html" class="sidebar-nav-item ${isActive('grants')}" title="Gov Grants">
            <div class="sidebar-nav-item-left">
              <i data-lucide="landmark" style="width:13.5px; height:13.5px;"></i>
              <span>Gov Grants</span>
            </div>
          </a>
          <a href="./real-market-problems.html" class="sidebar-nav-item ${isActive('problems')}" title="Market Problems">
            <div class="sidebar-nav-item-left">
              <i data-lucide="target" style="width:13.5px; height:13.5px;"></i>
              <span>Market Problems</span>
            </div>
          </a>
          <a href="./founder-challenges.html" class="sidebar-nav-item ${isActive('challenges')}" title="Challenges">
            <div class="sidebar-nav-item-left">
              <i data-lucide="message-square-dashed" style="width:13.5px; height:13.5px;"></i>
              <span>Challenges</span>
            </div>
          </a>
        </div>
      </aside>
    `;
  },

  // 02. Render Standardized Top Navigation Bar
  renderTopNav(title = 'Network', actionsHtml = '') {
    return `
      <header class="workspace-top-nav">
        <!-- Left Title -->
        <div class="workspace-top-nav-left">
          ${title ? `<span style="font-size:13px; font-weight:800; color:var(--text-dark); letter-spacing:-0.01em;">${title}</span>` : ''}
        </div>

        <!-- Center Search Pill -->
        <div class="workspace-search-pill-wrap" onclick="window.openCommandPalette()">
          <i data-lucide="search" class="workspace-search-icon"></i>
          <input type="text" class="workspace-search-input" placeholder="Search startups, network, diligence..." readonly />
          <span class="workspace-search-kbd">⌘K</span>
        </div>

        <!-- Right Header Actions -->
        <div class="workspace-top-nav-right">
          ${actionsHtml}

          <!-- Notifications -->
          <button class="nav-ghost-icon-btn" title="Notifications" onclick="window.showToast('No new notifications', 'info')">
            <i data-lucide="bell" style="width:15px; height:15px;"></i>
          </button>

          <!-- Documentation -->
          <button class="nav-ghost-icon-btn" title="Documentation" onclick="window.showToast('Opening Founder Guide', 'info')">
            <i data-lucide="file-text" style="width:15px; height:15px;"></i>
          </button>

          <!-- List Products Button -->
          <a href="./product-listing.html" class="nav-invite-btn" style="background:#141413; color:#FFFFFF; border:none; text-decoration:none;" title="List your products">
            <i data-lucide="plus" style="width:13px; height:13px;"></i>
            <span>List your products</span>
          </a>

          <!-- Profile Avatar -->
          <div class="avatar-gradient-circle" title="Dr. Sarah Chen (Founder)">SC</div>
        </div>
      </header>
    `;
  },

  // 03. One-line Page Layout Initializer
  init(activeNav = 'network', pageTitle = 'Network', actionsHtml = '') {
    const sidebarSlot = document.getElementById('sidebarSlot');
    if (sidebarSlot) {
      sidebarSlot.innerHTML = this.renderSidebar(activeNav);
    }
    const topNavSlot = document.getElementById('topNavSlot');
    if (topNavSlot) {
      topNavSlot.innerHTML = this.renderTopNav(pageTitle, actionsHtml);
    }
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }
};

// Global Interactive Helpers
window.toggleSidebar = function(e) {
  if (e) e.stopPropagation();
  const sb = document.getElementById('founderSidebar');
  if (sb) sb.classList.toggle('collapsed');
};

window.showToast = function(msg, type = 'info') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.style.cssText = 'position:fixed; bottom:20px; right:20px; z-index:99999; display:flex; flex-direction:column; gap:8px; pointer-events:none;';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  const bg = type === 'success' ? '#16A34A' : type === 'error' ? '#DC2626' : '#141413';
  toast.style.cssText = `background:${bg}; color:#FFFFFF; padding:10px 16px; border-radius:8px; font-size:12.5px; font-weight:600; box-shadow:0 8px 24px rgba(0,0,0,0.15); display:flex; align-items:center; gap:8px; pointer-events:auto; transition:all 0.2s ease; opacity:0; transform:translateY(10px);`;
  toast.innerHTML = `<i data-lucide="info" style="width:14px; height:14px;"></i><span>${msg}</span>`;
  container.appendChild(toast);
  if (typeof lucide !== 'undefined') lucide.createIcons();

  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
  });

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 250);
  }, 3200);
};

window.openModal = function(title, bodyHtml) {
  let overlay = document.getElementById('globalModalOverlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'globalModalOverlay';
    overlay.style.cssText = 'position:fixed; inset:0; z-index:99990; background:rgba(0,0,0,0.4); backdrop-filter:blur(3px); display:none; align-items:center; justify-content:center; padding:16px;';
    overlay.innerHTML = `
      <div style="background:#FFFFFF; border:1px solid var(--border-main); border-radius:10px; width:100%; max-width:520px; box-shadow:0 20px 40px rgba(0,0,0,0.18); overflow:hidden; display:flex; flex-direction:column;">
        <div style="display:flex; align-items:center; justify-content:space-between; padding:14px 18px; border-bottom:1px solid var(--border-main);">
          <h3 id="globalModalTitle" style="font-size:14px; font-weight:800; color:var(--text-dark); margin:0;"></h3>
          <button onclick="window.closeModal()" style="background:none; border:none; cursor:pointer; color:var(--text-muted); display:flex; align-items:center; padding:2px;">
            <i data-lucide="x" style="width:16px; height:16px;"></i>
          </button>
        </div>
        <div id="globalModalBody" style="padding:18px; max-height:80vh; overflow-y:auto;"></div>
      </div>
    `;
    document.body.appendChild(overlay);
  }
  document.getElementById('globalModalTitle').textContent = title;
  document.getElementById('globalModalBody').innerHTML = bodyHtml;
  overlay.style.display = 'flex';
  if (typeof lucide !== 'undefined') lucide.createIcons();
};

window.closeModal = function() {
  const overlay = document.getElementById('globalModalOverlay');
  if (overlay) overlay.style.display = 'none';
};

window.openCommandPalette = function() {
  window.openModal('Command Menu & Navigation (⌘K)', `
    <div style="display:flex; flex-direction:column; gap:10px;">
      <input type="text" placeholder="Type a destination or shortcut..." style="width:100%; padding:10px 12px; border:1px solid var(--border-main); border-radius:6px; font-size:12.5px; outline:none;" autofocus />
      <div style="display:flex; flex-direction:column; gap:4px; max-height:260px; overflow-y:auto;">
        <a href="./network.html" style="display:flex; align-items:center; gap:10px; padding:8px 10px; border-radius:6px; text-decoration:none; color:var(--text-dark); font-size:12.5px; font-weight:600;"><i data-lucide="users" style="width:14px; height:14px;"></i> Network</a>
        <a href="./watch-data-rooms.html" style="display:flex; align-items:center; gap:10px; padding:8px 10px; border-radius:6px; text-decoration:none; color:var(--text-dark); font-size:12.5px; font-weight:600;"><i data-lucide="folder-lock" style="width:14px; height:14px;"></i> Watch Data Rooms (VDR)</a>
        <a href="./investor-tracking.html" style="display:flex; align-items:center; gap:10px; padding:8px 10px; border-radius:6px; text-decoration:none; color:var(--text-dark); font-size:12.5px; font-weight:600;"><i data-lucide="handshake" style="width:14px; height:14px;"></i> Investor CRM</a>
        <a href="./due-diligence.html" style="display:flex; align-items:center; gap:10px; padding:8px 10px; border-radius:6px; text-decoration:none; color:var(--text-dark); font-size:12.5px; font-weight:600;"><i data-lucide="shield-check" style="width:14px; height:14px;"></i> Due Diligence Checklist</a>
        <a href="./government-grants.html" style="display:flex; align-items:center; gap:10px; padding:8px 10px; border-radius:6px; text-decoration:none; color:var(--text-dark); font-size:12.5px; font-weight:600;"><i data-lucide="landmark" style="width:14px; height:14px;"></i> Government Grants</a>
      </div>
    </div>
  `);
};

document.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    window.openCommandPalette();
  }
  if ((e.metaKey || e.ctrlKey) && e.key === '[') {
    e.preventDefault();
    window.toggleSidebar();
  }
  if (e.key === 'Escape') {
    window.closeModal();
    if (typeof window.closeProductAnalyticsDrawer === 'function') {
      window.closeProductAnalyticsDrawer();
    }
  }
});

/* ──────────────────────────────────────────────────────────────────────────
   10. GLOBAL PRODUCT ANALYTICS DRAWER COMPONENT
   ────────────────────────────────────────────────────────────────────────── */
window.openProductAnalyticsDrawer = window.openProductAnalyticsDrawer || function(productId = 'junify') {
  if (typeof window.ensureProductAnalyticsDrawerInDOM === 'function') {
    window.ensureProductAnalyticsDrawerInDOM();
  }
};

