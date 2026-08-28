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
          <a href="./messages.html" class="sidebar-nav-item ${isActive('messages')}" title="Messages">
            <div class="sidebar-nav-item-left">
              <i data-lucide="message-square" style="width:13.5px; height:13.5px;"></i>
              <span>Messages</span>
            </div>
          </a>
        </div>

        <!-- 02. Network & CRM -->
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

        <!-- 03. Pitch & Review -->
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

        <!-- 04. Ecosystem & Intelligence -->
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

          <!-- Direct Messages Drawer Trigger -->
          <button class="nav-ghost-icon-btn nav-messages-trigger-btn" id="navMessagesBtn" title="Direct Messages" onclick="window.openMessagesDrawer()" style="position:relative;">
            <i data-lucide="message-square" style="width:15px; height:15px;"></i>
            <span class="nav-msg-unread-dot" id="navMsgUnreadDot" style="position:absolute; top:5px; right:5px; width:7px; height:7px; background:#111827; border-radius:50%; border:1.5px solid #FFFFFF;"></span>
          </button>

          <!-- List your product Button -->
          <a href="./list-product.html" class="nav-invite-btn" style="background:#141413; color:#FFFFFF; border:none; text-decoration:none; display:inline-flex; align-items:center; gap:6px; height:32px; padding:0 12px; border-radius:9999px; font-size:12px; font-weight:600;" title="List your product">
            <i data-lucide="plus" style="width:13px; height:13px;"></i>
            <span>List your product</span>
          </a>

          <!-- User Profile Dropdown -->
          <div class="workspace-avatar-container" style="position:relative;">
            <button type="button" class="pub-avatar-btn" id="workspaceUserAvatarBtn" onclick="window.toggleWorkspaceUserDropdown(event)" title="User Account" style="width:32px; height:32px; border-radius:50%; overflow:hidden; border:1.5px solid var(--border-main); cursor:pointer; background:#FFFFFF; padding:0; display:block;">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&fit=crop&crop=faces" alt="Alex Thorne" style="width:100%; height:100%; object-fit:cover;" />
            </button>

            <div class="pub-user-menu" id="workspaceUserMenu">
              <div class="pub-user-menu-head" onclick="window.location.href='./profile.html'" style="cursor:pointer;">
                <div style="display:flex; align-items:center; gap:10px;">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&fit=crop&crop=faces" alt="Alex Thorne" style="width:32px; height:32px; border-radius:50%; object-fit:cover;" />
                  <div>
                    <div style="font-size:13px; font-weight:700; color:#111827;" id="workspaceUserNameDisplay">Alex Thorne</div>
                    <div style="font-size:11.5px; color:#6B7280;" id="workspaceUserEmailDisplay">alex.thorne@seedicon.com</div>
                  </div>
                </div>

                <div style="margin-top:10px;">
                  <div style="display:flex; justify-content:space-between; font-size:11.5px; font-weight:700; color:#111827; margin-bottom:4px;">
                    <span>Profile Completion</span>
                    <span style="font-weight:800;">50%</span>
                  </div>
                  <div style="height:5px; background:#E5E7EB; border-radius:9999px; overflow:hidden;">
                    <div style="width:50%; height:100%; background:#111827;"></div>
                  </div>
                </div>
              </div>

              <!-- Menu Links -->
              <a href="./profile.html" class="pub-user-menu-link" onclick="window.location.href='./profile.html'">
                <i data-lucide="user" style="width:14px; height:14px;"></i>
                <span>Profile</span>
              </a>
              <a href="./network.html" class="pub-user-menu-link" onclick="window.location.href='./network.html'">
                <i data-lucide="settings" style="width:14px; height:14px;"></i>
                <span>Settings</span>
              </a>
              <a href="./my-products.html" class="pub-user-menu-link" onclick="window.location.href='./my-products.html'">
                <i data-lucide="package" style="width:14px; height:14px;"></i>
                <span>My products</span>
              </a>
              <a href="./funding-requests.html" class="pub-user-menu-link" onclick="window.location.href='./funding-requests.html'">
                <i data-lucide="banknote" style="width:14px; height:14px;"></i>
                <span>Funding requests</span>
              </a>

              <div style="height:1px; background:#F0F0EB; margin:4px 0;"></div>

              <!-- Workspaces -->
              <a href="./network.html" class="pub-user-menu-link active" onclick="window.location.href='./network.html'">
                <i data-lucide="layout-dashboard" style="width:14px; height:14px;"></i>
                <span>Founder Workspace</span>
              </a>
              <a href="../lofi-investor/index.html" class="pub-user-menu-link" onclick="window.location.href='../lofi-investor/index.html'">
                <i data-lucide="trending-up" style="width:14px; height:14px;"></i>
                <span>Investor Workspace</span>
              </a>

              <div style="height:1px; background:#F0F0EB; margin:4px 0;"></div>

              <a href="./index.html" class="pub-user-menu-link" style="color:#DC2626;" onclick="localStorage.removeItem('seedicon_user'); window.showToast('Signed out', 'info');">
                <i data-lucide="log-out" style="width:14px; height:14px;"></i>
                <span>Sign out</span>
              </a>
            </div>
          </div>
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

    // Auto-inject messages stylesheet if not already on page
    if (!document.querySelector('link[href*="messages.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = './css/messages.css';
      document.head.appendChild(link);
    }

    // Auto-inject messages drawer script if not already on page
    if (!window.openMessagesDrawer && !document.querySelector('script[src*="messages-drawer.js"]')) {
      const s = document.createElement('script');
      s.src = './js/messages-drawer.js';
      document.body.appendChild(s);
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

window.openModal = function(title, bodyHtml, maxWidth = '540px') {
  let overlay = document.getElementById('globalModalOverlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'globalModalOverlay';
    overlay.style.cssText = 'position:fixed; inset:0; z-index:99990; background:rgba(0,0,0,0.45); backdrop-filter:blur(4px); -webkit-backdrop-filter:blur(4px); display:none; align-items:center; justify-content:center; padding:16px;';
    overlay.onclick = function(e) {
      if (e.target.id === 'globalModalOverlay') window.closeModal();
    };
    overlay.innerHTML = `
      <div id="globalModalCard" style="background:#FFFFFF; border:1px solid var(--border-main); border-radius:12px; width:100%; max-width:${maxWidth}; box-shadow:0 24px 50px rgba(0,0,0,0.2); overflow:hidden; display:flex; flex-direction:column; animation:modalPop 0.16s cubic-bezier(0.16, 1, 0.3, 1);">
        <div style="display:flex; align-items:center; justify-content:space-between; padding:14px 20px; border-bottom:1px solid var(--border-main); background:#FAFAF9;">
          <h3 id="globalModalTitle" style="font-size:14px; font-weight:800; color:var(--text-dark); margin:0;"></h3>
          <button onclick="window.closeModal()" style="background:none; border:none; cursor:pointer; color:var(--text-muted); display:flex; align-items:center; padding:4px; border-radius:4px;">
            <i data-lucide="x" style="width:16px; height:16px;"></i>
          </button>
        </div>
        <div id="globalModalBody" style="padding:20px; max-height:82vh; overflow-y:auto;"></div>
      </div>
    `;
    document.body.appendChild(overlay);
  }
  const card = document.getElementById('globalModalCard');
  if (card) card.style.maxWidth = maxWidth;
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

window.toggleWorkspaceUserDropdown = function(e) {
  if (e) e.stopPropagation();
  const menu = document.getElementById('workspaceUserMenu');
  if (menu) {
    menu.classList.toggle('show');
  }
};

document.addEventListener('click', (e) => {
  const menu = document.getElementById('workspaceUserMenu');
  const btn = document.getElementById('workspaceUserAvatarBtn');
  if (menu && menu.classList.contains('show')) {
    if (!menu.contains(e.target) && (!btn || !btn.contains(e.target))) {
      menu.classList.remove('show');
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


