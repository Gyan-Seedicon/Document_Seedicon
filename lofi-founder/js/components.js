/* ==========================================================================
   SEEDICON FOUNDER PLATFORM — REUSABLE LAYOUT COMPONENTS SYSTEM
   Matches modern floating-card design with integrated sidebar navigation
   ========================================================================== */

const FounderLayoutComponents = {
  activeStartup: {
    name: 'Alpha Health 2.0',
    shortName: 'AH',
    stage: 'Seed Stage',
    sector: 'Healthcare AI',
    raising: '$1.8M'
  },

  // 01. Render Modern Sidebar with User's Navigation Items & Proper UX Categorization
  renderSidebar(activeNav = 'dashboard') {
    const isActive = (id) => activeNav === id ? 'active' : '';

    return `
      <aside class="founder-sidebar" id="founderSidebar">
        <!-- 01. TOP BRAND HEADER ROW -->
        <div class="sidebar-brand-row">
          <a href="./index.html" class="brand-title-wrap">
            <div class="brand-icon-box">
              <i data-lucide="asterisk" style="width:18px; height:18px; stroke-width:2.4;"></i>
            </div>
            <span class="brand-name">Seedicon Founder</span>
          </a>
          <button class="sidebar-collapse-btn" id="toggleSidebarBtn" title="Collapse Sidebar (⌘[)">
            <i data-lucide="chevrons-left" style="width:15px; height:15px;" id="toggleSidebarIcon"></i>
          </button>
        </div>

        <!-- 02. STARTUP / WORKSPACE SELECTOR PILL -->
        <div class="dropdown-wrap" style="width:100%;">
          <div class="startup-switcher-pill" id="btnStartupDropdown" data-tooltip="${this.activeStartup.name}">
            <div class="startup-switcher-left">
              <div class="startup-logo-dot">${this.activeStartup.shortName}</div>
              <span class="startup-switcher-name" id="activeStartupLabel">${this.activeStartup.name}</span>
            </div>
            <div class="startup-switcher-arrows">
              <i data-lucide="chevrons-up-down" style="width:13px; height:13px;"></i>
            </div>
          </div>

          <div class="dropdown-menu" id="startupDropdownMenu" style="width:100%;">
            <div class="dropdown-header">ACTIVE STARTUP PROFILE</div>
            <div class="dropdown-item active" onclick="selectStartup('Alpha Health 2.0', 'AH', 'Seed')">
              <div style="display:flex; align-items:center; gap:8px;">
                <i data-lucide="check-circle" class="lucide-sm"></i>
                <span>Alpha Health 2.0</span>
              </div>
              <span class="badge-pill neutral-soft">Seed</span>
            </div>
            <div class="dropdown-item" onclick="selectStartup('NeuroPulse AI', 'NP', 'Pre-Seed')">
              <div style="display:flex; align-items:center; gap:8px;">
                <i data-lucide="circle" class="lucide-sm"></i>
                <span>NeuroPulse AI</span>
              </div>
              <span class="badge-pill neutral-soft">Pre-Seed</span>
            </div>
            <div class="dropdown-divider"></div>
            <div class="dropdown-item" onclick="openNewStartupModal()">
              <div style="display:flex; align-items:center; gap:8px; font-weight:700;">
                <i data-lucide="plus-circle" class="lucide-sm"></i>
                <span>+ Add New Startup</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 03. CATEGORY 1: OVERVIEW & PRODUCT -->
        <div class="nav-group-section">
          <div class="nav-group-label">Overview</div>
          
          <!-- 1. Dashboard -->
          <a href="./index.html" class="sidebar-nav-item ${isActive('dashboard')}" data-tooltip="Dashboard">
            <div class="sidebar-nav-item-left">
              <i data-lucide="layout-grid"></i>
              <span>Dashboard</span>
            </div>
          </a>

          <!-- 2. Product Listing -->
          <a href="./product-listing.html" class="sidebar-nav-item ${isActive('listing')}" data-tooltip="Product Listing">
            <div class="sidebar-nav-item-left">
              <i data-lucide="store"></i>
              <span>Product Listing</span>
            </div>
          </a>

          <!-- 3. Product Analytics -->
          <a href="./product-analytics.html" class="sidebar-nav-item ${isActive('analytics')}" data-tooltip="Product Analytics">
            <div class="sidebar-nav-item-left">
              <i data-lucide="bar-chart-2"></i>
              <span>Product Analytics</span>
            </div>
          </a>
        </div>

        <!-- 04. CATEGORY 2: FUNDRAISING & DUE DILIGENCE -->
        <div class="nav-group-section">
          <div class="nav-group-label">Fundraising &amp; Diligence</div>

          <!-- 4. Pitch Deck Reviewer -->
          <a href="./pitch-deck-reviewer.html" class="sidebar-nav-item ${isActive('deck')}" data-tooltip="Pitch Deck Reviewer">
            <div class="sidebar-nav-item-left">
              <i data-lucide="presentation"></i>
              <span>Pitch Deck Reviewer</span>
            </div>
            <span class="sidebar-nav-count" style="font-size:10px; font-weight:700; background:var(--bg-muted); padding:1px 5px; border-radius:3px;">AI</span>
          </a>

          <!-- 5. Investor Tracking (CRM) -->
          <a href="./investor-tracking.html" class="sidebar-nav-item ${isActive('investors')}" data-tooltip="Investor Tracking">
            <div class="sidebar-nav-item-left">
              <i data-lucide="handshake"></i>
              <span>Investor Tracking</span>
            </div>
            <span class="sidebar-nav-count">(3)</span>
          </a>

          <!-- 6. Due-Diligence Checklist -->
          <a href="./due-diligence.html" class="sidebar-nav-item ${isActive('diligence')}" data-tooltip="Due-Diligence Checklist">
            <div class="sidebar-nav-item-left">
              <i data-lucide="shield-check"></i>
              <span>Due-Diligence Checklist</span>
            </div>
            <span class="sidebar-nav-count">(10)</span>
          </a>
        </div>

        <!-- 05. CATEGORY 3: ECOSYSTEM & OPPORTUNITIES -->
        <div class="nav-group-section">
          <div class="nav-group-label">Ecosystem &amp; Grants</div>

          <!-- 6. Government Grants -->
          <a href="./government-grants.html" class="sidebar-nav-item ${isActive('grants')}" data-tooltip="Government Grants">
            <div class="sidebar-nav-item-left">
              <i data-lucide="landmark"></i>
              <span>Government Grants</span>
            </div>
            <span class="sidebar-nav-count">(6)</span>
          </a>

          <!-- 7. Real Market Problems -->
          <a href="./real-market-problems.html" class="sidebar-nav-item ${isActive('problems')}" data-tooltip="Real Market Problems">
            <div class="sidebar-nav-item-left">
              <i data-lucide="target"></i>
              <span>Real Market Problems</span>
            </div>
            <span class="sidebar-nav-count">(8)</span>
          </a>
        </div>

        <!-- 06. CATEGORY 4: COMMUNITY & CHALLENGES -->
        <div class="nav-group-section">
          <div class="nav-group-label">Community &amp; Support</div>

          <!-- 8. Founder Network -->
          <a href="./founder-network.html" class="sidebar-nav-item ${isActive('network')}" data-tooltip="Founder Network">
            <div class="sidebar-nav-item-left">
              <i data-lucide="users"></i>
              <span>Founder Network</span>
            </div>
          </a>

          <!-- 9. Founder Challenges -->
          <a href="./founder-challenges.html" class="sidebar-nav-item ${isActive('challenges')}" data-tooltip="Founder Challenges">
            <div class="sidebar-nav-item-left">
              <i data-lucide="help-circle"></i>
              <span>Founder Challenges</span>
            </div>
            <span class="sidebar-nav-count">(6)</span>
          </a>
        </div>

        <!-- 07. SIDEBAR BOTTOM FOOTER -->
        <div class="sidebar-bottom-footer">
          <div class="founder-profile-pill" onclick="if(window.showToast) window.showToast('Profile: Dr. Sarah Chen (Founder)');" data-tooltip="Dr. Sarah Chen · Founder">
            <div class="founder-avatar-small">SC</div>
            <div class="founder-info-text">
              <div class="founder-name-text">Dr. Sarah Chen</div>
              <div class="founder-role-text">Founder &amp; CEO</div>
            </div>
          </div>
          <button class="btn-icon" title="Workspace Settings" onclick="if(window.showToast) window.showToast('Opening Workspace Settings...');" data-tooltip="Settings">
            <i data-lucide="settings" style="width:14px; height:14px;"></i>
          </button>
        </div>
      </aside>
    `;
  },

  // Modal Container
  renderModalContainer() {
    return `
      <div class="modal-overlay" id="modalOverlay">
        <div class="modal-dialog">
          <div class="modal-header">
            <h3 class="modal-title" id="modalTitle">Modal Title</h3>
            <button class="btn-icon" onclick="closeModal()" title="Close">
              <i data-lucide="x"></i>
            </button>
          </div>
          <div class="modal-body" id="modalBody"></div>
        </div>
      </div>
    `;
  },

  // Toast Container
  renderToastContainer() {
    return `<div class="toast-container" id="toastContainer"></div>`;
  },

  // Initialize Layout Component Slots
  init(config = {}) {
    const activeNav = config.activeNav || 'dashboard';

    const sidebarSlot = document.getElementById('sidebarSlot');
    if (sidebarSlot) sidebarSlot.innerHTML = this.renderSidebar(activeNav);

    const modalSlot = document.getElementById('modalSlot');
    if (modalSlot) {
      modalSlot.innerHTML = this.renderModalContainer() + this.renderToastContainer();
    }
  }
};
