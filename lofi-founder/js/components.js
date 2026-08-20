/* ==========================================================================
   SEEDICON FOUNDER PLATFORM — REUSABLE LAYOUT COMPONENTS SYSTEM
   Matches modern floating-card design with condensed sidebar & interactive header
   ========================================================================== */

const FounderLayoutComponents = {
  activeStartup: {
    name: 'Alpha Health 2.0',
    shortName: 'AH',
    stage: 'Seed Stage',
    sector: 'Healthcare AI',
    raising: '$1.8M'
  },

  // 01. Render Modern Sidebar with Condensed Layout & Exact Sequence
  renderSidebar(activeNav = 'dashboard') {
    const isActive = (id) => activeNav === id ? 'active' : '';

    return `
      <aside class="founder-sidebar" id="founderSidebar">
        <!-- 01. TOP BRAND HEADER ROW -->
        <div class="sidebar-brand-row">
          <a href="./index.html" class="brand-title-wrap">
            <div class="brand-icon-box">
              <i data-lucide="asterisk" style="width:16px; height:16px; stroke-width:2.4;"></i>
            </div>
            <span class="brand-name">Seedicon Founder</span>
          </a>
          <button class="sidebar-collapse-btn" id="toggleSidebarBtn" title="Collapse Sidebar (⌘[)">
            <i data-lucide="chevrons-left" style="width:14px; height:14px;" id="toggleSidebarIcon"></i>
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
              <i data-lucide="chevrons-up-down" style="width:12px; height:12px;"></i>
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

        <!-- 03. CATEGORY 1: OVERVIEW & GET STARTED -->
        <div class="nav-group-section">
          <div class="nav-group-label">Overview</div>
          
          <!-- 1. Home (Dashboard) -->
          <a href="./index.html" class="sidebar-nav-item ${isActive('dashboard')}" data-tooltip="Home (Dashboard)">
            <div class="sidebar-nav-item-left">
              <i data-lucide="layout-grid" style="width:13.5px; height:13.5px;"></i>
              <span>Home (Dashboard)</span>
            </div>
          </a>

          <!-- 2. Get Started -->
          <a href="./get-started.html" class="sidebar-nav-item ${isActive('get-started')}" data-tooltip="Get Started">
            <div class="sidebar-nav-item-left">
              <i data-lucide="rocket" style="width:13.5px; height:13.5px;"></i>
              <span>Get Started</span>
            </div>
          </a>

          <!-- 3. Product Listing -->
          <a href="./public-product-listing.html" target="_blank" class="sidebar-nav-item ${isActive('listing')}" data-tooltip="Product Listing (Opens in new tab)">
            <div class="sidebar-nav-item-left">
              <i data-lucide="store" style="width:13.5px; height:13.5px;"></i>
              <span>Product Listing</span>
            </div>
            <i data-lucide="external-link" style="width:10px; height:10px; color:var(--text-light); margin-left:auto;"></i>
          </a>
        </div>

        <!-- 04. CATEGORY 2: APPLICATIONS -->
        <div class="nav-group-section">
          <div class="nav-group-label">Applications</div>

          <!-- 4. My Application -->
          <a href="./my-applications.html" class="sidebar-nav-item ${isActive('my-applications')}" data-tooltip="My Application">
            <div class="sidebar-nav-item-left">
              <i data-lucide="file-text" style="width:13.5px; height:13.5px;"></i>
              <span>My Application</span>
            </div>
          </a>
        </div>

        <!-- 05. CATEGORY 3: NETWORK & INVESTOR CRM -->
        <div class="nav-group-section">
          <div class="nav-group-label">Network &amp; CRM</div>

          <!-- 5. Contacts (Networks) -->
          <a href="./founder-network.html" class="sidebar-nav-item ${isActive('network')}" data-tooltip="Contacts (Networks)">
            <div class="sidebar-nav-item-left">
              <i data-lucide="users" style="width:13.5px; height:13.5px;"></i>
              <span>Contacts (Networks)</span>
            </div>
          </a>

          <!-- 6. Watch Data Rooms -->
          <a href="./watch-data-rooms.html" class="sidebar-nav-item ${isActive('data-rooms')}" data-tooltip="Watch Data Rooms">
            <div class="sidebar-nav-item-left">
              <i data-lucide="folder-lock" style="width:13.5px; height:13.5px;"></i>
              <span>Watch Data Rooms</span>
            </div>
          </a>

          <!-- 7. Investor CRM (Renamed from Investor Tracking) -->
          <a href="./investor-tracking.html" class="sidebar-nav-item ${isActive('investors')}" data-tooltip="Investor CRM">
            <div class="sidebar-nav-item-left">
              <i data-lucide="handshake" style="width:13.5px; height:13.5px;"></i>
              <span>Investor CRM</span>
            </div>
            <span class="sidebar-nav-count">(3)</span>
          </a>
        </div>

        <!-- 06. CATEGORY 4: PITCH & STORYTELLING -->
        <div class="nav-group-section">
          <div class="nav-group-label">Pitch &amp; Review</div>

          <!-- 8. Deckwale -->
          <a href="./deckwale.html" class="sidebar-nav-item ${isActive('deckwale')}" data-tooltip="Deckwale">
            <div class="sidebar-nav-item-left">
              <i data-lucide="sparkles" style="width:13.5px; height:13.5px;"></i>
              <span>Deckwale</span>
            </div>
            <span class="sidebar-nav-count" style="font-size:9px; font-weight:700; background:var(--bg-muted); padding:1px 4px; border-radius:3px;">PRO</span>
          </a>

          <!-- 9. Pitch Deck Reviewer -->
          <a href="./pitch-deck-reviewer.html" class="sidebar-nav-item ${isActive('deck')}" data-tooltip="Pitch Deck Reviewer">
            <div class="sidebar-nav-item-left">
              <i data-lucide="presentation" style="width:13.5px; height:13.5px;"></i>
              <span>Pitch Deck Reviewer</span>
            </div>
            <span class="sidebar-nav-count" style="font-size:9.5px; font-weight:700; background:var(--bg-muted); padding:1px 4px; border-radius:3px;">AI</span>
          </a>
        </div>

        <!-- 07. CATEGORY 5: ECOSYSTEM & INTELLIGENCE -->
        <div class="nav-group-section">
          <div class="nav-group-label">Ecosystem &amp; Intelligence</div>

          <!-- 10. Startup News -->
          <a href="./startup-news.html" class="sidebar-nav-item ${isActive('news')}" data-tooltip="Startup News">
            <div class="sidebar-nav-item-left">
              <i data-lucide="newspaper" style="width:13.5px; height:13.5px;"></i>
              <span>Startup News</span>
            </div>
          </a>

          <!-- 11. DD Checklist -->
          <a href="./due-diligence.html" class="sidebar-nav-item ${isActive('diligence')}" data-tooltip="DD Checklist">
            <div class="sidebar-nav-item-left">
              <i data-lucide="shield-check" style="width:13.5px; height:13.5px;"></i>
              <span>DD Checklist</span>
            </div>
            <span class="sidebar-nav-count">(10)</span>
          </a>

          <!-- 12. Gov Grants -->
          <a href="./government-grants.html" class="sidebar-nav-item ${isActive('grants')}" data-tooltip="Gov Grants">
            <div class="sidebar-nav-item-left">
              <i data-lucide="landmark" style="width:13.5px; height:13.5px;"></i>
              <span>Gov Grants</span>
            </div>
            <span class="sidebar-nav-count">(6)</span>
          </a>

          <!-- 13. Market Problems -->
          <a href="./real-market-problems.html" class="sidebar-nav-item ${isActive('problems')}" data-tooltip="Market Problems">
            <div class="sidebar-nav-item-left">
              <i data-lucide="target" style="width:13.5px; height:13.5px;"></i>
              <span>Market Problems</span>
            </div>
            <span class="sidebar-nav-count">(8)</span>
          </a>

          <!-- 14. Challenges -->
          <a href="./founder-challenges.html" class="sidebar-nav-item ${isActive('challenges')}" data-tooltip="Challenges">
            <div class="sidebar-nav-item-left">
              <i data-lucide="help-circle" style="width:13.5px; height:13.5px;"></i>
              <span>Challenges</span>
            </div>
            <span class="sidebar-nav-count">(6)</span>
          </a>

          <!-- 15. Resources -->
          <a href="./resources.html" class="sidebar-nav-item ${isActive('resources')}" data-tooltip="Resources">
            <div class="sidebar-nav-item-left">
              <i data-lucide="book-open" style="width:13.5px; height:13.5px;"></i>
              <span>Resources</span>
            </div>
          </a>
        </div>

        <!-- 08. SIDEBAR BOTTOM FOOTER -->
        <div class="sidebar-bottom-footer">
          <div class="founder-profile-pill" onclick="if(window.showToast) window.showToast('Profile: Dr. Sarah Chen (Founder)');" data-tooltip="Dr. Sarah Chen · Founder">
            <div class="founder-avatar-small" style="width:22px; height:22px; font-size:9px;">SC</div>
            <div class="founder-info-text">
              <div class="founder-name-text" style="font-size:11px;">Dr. Sarah Chen</div>
              <div class="founder-role-text" style="font-size:9.5px;">Founder &amp; CEO</div>
            </div>
          </div>
          <button class="btn-icon" title="Workspace Settings" onclick="openSettingsModal()" data-tooltip="Settings" style="width:24px; height:24px;">
            <i data-lucide="settings" style="width:13px; height:13px;"></i>
          </button>
        </div>
      </aside>
    `;
  },

  // 02. Render Top Nav Right Action Group (With Inline Resilient Styling)
  renderTopNavRight() {
    return `
      <!-- Messages Drawer Trigger -->
      <button class="nav-ghost-icon-btn" title="Messages" onclick="openMessagesNavDrawer()" style="background:transparent; border:none; color:var(--text-muted); cursor:pointer; padding:6px; border-radius:6px; display:inline-flex; align-items:center; justify-content:center;">
        <i data-lucide="message-square" style="width:16px; height:16px;"></i>
      </button>

      <!-- Notifications Bell -->
      <button class="nav-ghost-icon-btn" title="Notifications" onclick="if(window.showNotifications) showNotifications(); else if(window.showToast) showToast('All notifications read');" style="background:transparent; border:none; color:var(--text-muted); cursor:pointer; padding:6px; border-radius:6px; display:inline-flex; align-items:center; justify-content:center;">
        <i data-lucide="bell" style="width:16px; height:16px;"></i>
      </button>

      <!-- Documentation / Notes -->
      <button class="nav-ghost-icon-btn" title="Documentation &amp; Notes" onclick="if(window.showHelp) showHelp(); else window.location.href='./resources.html';" style="background:transparent; border:none; color:var(--text-muted); cursor:pointer; padding:6px; border-radius:6px; display:inline-flex; align-items:center; justify-content:center;">
        <i data-lucide="file-text" style="width:16px; height:16px;"></i>
      </button>

      <!-- List your products Button (Solid Black Pill with White Text) -->
      <button class="btn-list-product" onclick="handleHeaderListProduct()" title="List your product on Seedicon" style="display:inline-flex; align-items:center; gap:6px; background:#141413; color:#FFFFFF; border:1px solid #141413; border-radius:9999px; padding:6px 14px; font-family:Inter,sans-serif; font-size:12px; font-weight:600; cursor:pointer; white-space:nowrap; box-shadow:0 1px 2px rgba(0,0,0,0.08); transition:all 0.15s ease; outline:none; line-height:1.2;">
        <i data-lucide="plus" style="width:13px; height:13px; stroke-width:2.5;"></i>
        <span>List your products</span>
      </button>

      <!-- User Profile Avatar with Context Dropdown Menu (Safe Right-Alignment) -->
      <div class="dropdown-wrap user-profile-dropdown-wrap" style="position:relative; display:inline-flex; align-items:center; margin-right:4px;">
        <div class="avatar-gradient-circle" id="userAvatarBtn" onclick="toggleUserDropdown(event)" title="Account Menu: Dr. Sarah Chen" style="width:26px; height:26px; border-radius:50%; background:radial-gradient(circle at 30% 30%, #818CF8, #3730A3); color:#FFFFFF; font-size:9.5px; font-weight:800; display:flex; align-items:center; justify-content:center; cursor:pointer; border:1px solid rgba(0,0,0,0.06); box-shadow:0 1px 3px rgba(0,0,0,0.08); flex-shrink:0;">
          SC
        </div>
        <div class="dropdown-menu user-dropdown-menu" id="userProfileDropdown" style="position:absolute; top:calc(100% + 8px); right:0; left:auto; width:220px; background:#FFFFFF; border:1px solid #E5E5E0; border-radius:10px; box-shadow:0 12px 32px rgba(0,0,0,0.14); padding:6px; z-index:999999; display:none;">
          <div style="padding:10px 12px 6px; border-bottom:1px solid #EFEFEA; margin-bottom:4px;">
            <div style="font-weight:800; font-size:12.5px; color:#141413; line-height:1.2;">Dr. Sarah Chen</div>
            <div style="font-size:11px; color:#666662; font-weight:normal; margin-top:2px;">founder@alphahealth.ai</div>
          </div>
          <div class="dropdown-item" onclick="window.location.href='./public-product-listing.html'" style="display:flex; align-items:center; gap:8px; padding:7px 10px; font-size:12px; font-weight:600; color:#141413; border-radius:6px; cursor:pointer;">
            <i data-lucide="store" style="width:14px; height:14px; color:#666662;"></i>
            <span>My products</span>
          </div>
          <div class="dropdown-item" onclick="openSettingsModal()" style="display:flex; align-items:center; gap:8px; padding:7px 10px; font-size:12px; font-weight:600; color:#141413; border-radius:6px; cursor:pointer;">
            <i data-lucide="settings" style="width:14px; height:14px; color:#666662;"></i>
            <span>Settings</span>
          </div>
          <div style="height:1px; background:#EFEFEA; margin:4px 0;"></div>
          <div class="dropdown-item" onclick="handleLogout()" style="display:flex; align-items:center; gap:8px; padding:7px 10px; font-size:12px; font-weight:600; color:#DC2626; border-radius:6px; cursor:pointer;">
            <i data-lucide="log-out" style="width:14px; height:14px; color:#DC2626;"></i>
            <span>Log out</span>
          </div>
        </div>
      </div>
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

    // Auto-populate or update topNavRightSlot / .workspace-top-nav-right across pages
    const topNavRight = document.querySelector('.workspace-top-nav-right');
    if (topNavRight) {
      topNavRight.innerHTML = this.renderTopNavRight();
    }

    const modalSlot = document.getElementById('modalSlot');
    if (modalSlot) {
      modalSlot.innerHTML = this.renderModalContainer() + this.renderToastContainer();
    } else if (!document.getElementById('modalOverlay')) {
      const div = document.createElement('div');
      div.id = 'modalSlot';
      div.innerHTML = this.renderModalContainer() + this.renderToastContainer();
      document.body.appendChild(div);
    }
  }
};

// Global Interactive Helpers for Top Nav Dropdown & Header Buttons
window.toggleUserDropdown = function(event) {
  if (event) event.stopPropagation();
  const menu = document.getElementById('userProfileDropdown');
  if (!menu) return;
  const isShown = menu.style.display === 'block' || menu.classList.contains('show');
  
  // Close any other open dropdowns
  document.querySelectorAll('.dropdown-menu').forEach(m => {
    m.classList.remove('show');
    m.style.display = 'none';
  });
  
  if (!isShown) {
    menu.classList.add('show');
    menu.style.display = 'block';
  }
};

// Global click listener to dismiss user profile dropdown
document.addEventListener('click', function(e) {
  const menu = document.getElementById('userProfileDropdown');
  const avatar = document.getElementById('userAvatarBtn');
  if (menu && (menu.style.display === 'block' || menu.classList.contains('show'))) {
    if (!menu.contains(e.target) && (!avatar || !avatar.contains(e.target))) {
      menu.classList.remove('show');
      menu.style.display = 'none';
    }
  }
});

window.handleHeaderListProduct = function() {
  if (typeof openSubmitProductModal === 'function') {
    openSubmitProductModal();
  } else {
    window.location.href = './public-product-listing.html';
  }
};

window.openSettingsModal = function() {
  const modal = document.getElementById('modalOverlay');
  if (modal && typeof openModal === 'function') {
    openModal('Workspace Settings', `
      <div style="display:flex; flex-direction:column; gap:14px;">
        <div class="form-group">
          <label class="form-label">Account Founder Name</label>
          <input type="text" class="form-control" value="Dr. Sarah Chen" />
        </div>
        <div class="form-group">
          <label class="form-label">Primary Email</label>
          <input type="email" class="form-control" value="founder@alphahealth.ai" />
        </div>
        <div class="form-group">
          <label class="form-label">Active Entity</label>
          <input type="text" class="form-control" value="Alpha Health 2.0 (Seed Stage)" />
        </div>
        <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:8px;">
          <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
          <button class="btn btn-primary" onclick="if(window.showToast) showToast('Settings saved successfully'); closeModal();">Save Changes</button>
        </div>
      </div>
    `);
  } else if (window.showToast) {
    showToast('Opening Workspace Settings...');
  }
};

window.handleLogout = function() {
  if (window.showToast) {
    showToast('👋 You have been logged out successfully.');
  }
  const menu = document.getElementById('userProfileDropdown');
  if (menu) {
    menu.classList.remove('show');
    menu.style.display = 'none';
  }
};

/* ==========================================================================
   SMART MULTI-CHAT DRAWER SYSTEM
   ========================================================================== */
window.DIRECT_MESSAGES_DATA = [
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'Partner @ Accel',
    type: 'investor',
    initials: 'ER',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    online: true,
    unread: 2,
    lastTime: '10:24 AM',
    preview: "We reviewed your updated traction slides. Let's do Tuesday at 2 PM.",
    history: [
      { sender: 'them', text: 'Hi Dr. Sarah, we looked through the updated clinical trial validation metrics you sent over.', time: '10:15 AM' },
      { sender: 'them', text: 'The ARR growth and retention metrics are looking very solid for a Seed round. Would you have 30 mins next Tuesday at 2 PM PST for a partner briefing?', time: '10:18 AM' },
      { sender: 'me', text: 'Hi Elena, Tuesday at 2 PM PST works perfectly for our team. I will send over the calendar invite and updated data room link shortly.', time: '10:22 AM' },
      { sender: 'them', text: 'Sounds great. Looking forward to diving deeper into the gross margin breakdown.', time: '10:24 AM' }
    ]
  },
  {
    id: 'marc-benioff',
    name: 'Marc Benioff',
    role: 'Angel Investor / Enterprise',
    type: 'investor',
    initials: 'MB',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    online: false,
    unread: 1,
    lastTime: '1h ago',
    preview: "Let's connect after demo day. We could explore co-investing.",
    history: [
      { sender: 'them', text: 'Really impressed with how you have handled the multi-tenant EHR integrations. The UX is clean.', time: 'Yesterday' },
      { sender: 'me', text: 'Thank you Marc! We prioritized HIPAA-compliant fast sync from day one.', time: 'Yesterday' },
      { sender: 'them', text: "Let's connect after demo day. We could explore co-investing alongside Accel.", time: '1h ago' }
    ]
  },
  {
    id: 'david-sacks',
    name: 'David Sacks',
    role: 'General Partner @ Craft',
    type: 'investor',
    initials: 'DS',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    online: true,
    unread: 0,
    lastTime: 'Yesterday',
    preview: 'Can you send over your net revenue retention (NRR) numbers?',
    history: [
      { sender: 'them', text: 'Can you send over your net revenue retention (NRR) and payback period numbers?', time: 'Yesterday' },
      { sender: 'me', text: 'Sent to your email and added to the Due Diligence checklist vault!', time: 'Yesterday' }
    ]
  },
  {
    id: 'jessica-livingston',
    name: 'Jessica Livingston',
    role: 'Founding Partner @ YC',
    type: 'mentor',
    initials: 'JL',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80',
    online: false,
    unread: 0,
    lastTime: '2d ago',
    preview: 'Loved the customer reviews section on your Seedicon listing.',
    history: [
      { sender: 'them', text: 'Congratulations on the Seedicon product launch! Loved the customer reviews section.', time: '2d ago' },
      { sender: 'me', text: 'Thanks Jessica! The initial traffic from founders and angels has been amazing.', time: '2d ago' }
    ]
  },
  {
    id: 'kunal-shah',
    name: 'Kunal Shah',
    role: 'Angel Investor / Fintech',
    type: 'investor',
    initials: 'KS',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80',
    online: true,
    unread: 0,
    lastTime: '3d ago',
    preview: "Let's do a quick audio call this Friday afternoon.",
    history: [
      { sender: 'them', text: "Curious about your user acquisition economics. Let's do a quick audio call this Friday afternoon.", time: '3d ago' },
      { sender: 'me', text: 'Sounds great Kunal, I will send over my Calendly link for Friday.', time: '3d ago' }
    ]
  },
  {
    id: 'amara-okafor',
    name: 'Dr. Amara Okafor',
    role: 'Founder & CEO @ Nova',
    type: 'founder',
    initials: 'AO',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80',
    online: false,
    unread: 0,
    lastTime: 'Aug 18',
    preview: 'Thanks for sharing the regulatory compliance checklist!',
    history: [
      { sender: 'them', text: 'Thanks for sharing the regulatory compliance checklist, super helpful for our clinical trial!', time: 'Aug 18' },
      { sender: 'me', text: 'Anytime Amara! Happy to share our IRB approval templates as well.', time: 'Aug 18' }
    ]
  }
];

let activeNavChatTab = 'all';
let currentNavChatSearch = '';

window.openMessagesNavDrawer = function() {
  const content = `
    <div class="chat-drawer-wrap" id="navChatContainer">
      <!-- Search & Filters -->
      <div class="conv-search-wrap">
        <i data-lucide="search" style="position:absolute; left:10px; top:50%; transform:translateY(-50%); width:14px; height:14px; color:var(--text-light);"></i>
        <input type="text" class="conv-search-input" placeholder="Search conversations..." oninput="filterNavMessages(this.value)" />
      </div>

      <div class="conv-filter-tabs">
        <button class="conv-tab-btn active" onclick="filterNavMessagesTab('all', this)">All (${window.DIRECT_MESSAGES_DATA.length})</button>
        <button class="conv-tab-btn" onclick="filterNavMessagesTab('investor', this)">Investors</button>
        <button class="conv-tab-btn" onclick="filterNavMessagesTab('founder', this)">Founders &amp; Mentors</button>
      </div>

      <!-- Conversations Stream -->
      <div class="conv-list" id="navConversationsStream">
        ${renderConversationsListHtml()}
      </div>
    </div>
  `;

  window.openDrawer('Direct Messages', 'Direct messages with verified investors & founders', content);
};

function renderConversationsListHtml(filterType = activeNavChatTab, query = currentNavChatSearch) {
  let list = window.DIRECT_MESSAGES_DATA;

  if (filterType === 'investor') {
    list = list.filter(c => c.type === 'investor');
  } else if (filterType === 'founder') {
    list = list.filter(c => c.type === 'founder' || c.type === 'mentor');
  }

  if (query.trim()) {
    const q = query.toLowerCase().trim();
    list = list.filter(c => c.name.toLowerCase().includes(q) || c.role.toLowerCase().includes(q) || c.preview.toLowerCase().includes(q));
  }

  if (list.length === 0) {
    return `
      <div style="padding:40px 16px; text-align:center; color:var(--text-muted);">
        <i data-lucide="message-square-dashed" style="width:28px; height:28px; color:var(--text-light); margin-bottom:8px;"></i>
        <div style="font-size:13px; font-weight:700; color:var(--text-dark);">No conversations found</div>
        <div style="font-size:11.5px;">Try adjusting your search or filter tab.</div>
      </div>
    `;
  }

  return list.map(c => `
    <div class="conv-row ${c.unread > 0 ? 'unread' : ''}" onclick="openChatConversation('${c.id}')">
      <div class="chat-avatar-wrap">
        <div class="chat-avatar">
          ${c.avatar ? `<img src="${c.avatar}" alt="${c.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" /><div style="display:none; width:100%; height:100%; align-items:center; justify-content:center;">${c.initials}</div>` : c.initials}
        </div>
        ${c.online ? `<span class="chat-online-dot" title="Online now"></span>` : ''}
      </div>
      <div class="conv-info">
        <div class="conv-top">
          <div class="conv-name-row">
            <span class="conv-name">${c.name}</span>
            <span class="conv-role-tag">${c.type === 'investor' ? 'Investor' : 'Founder'}</span>
          </div>
          <span class="conv-time">${c.lastTime}</span>
        </div>
        <div class="conv-preview">${c.preview}</div>
      </div>
      ${c.unread > 0 ? `<span class="conv-badge">${c.unread}</span>` : ''}
    </div>
  `).join('');
}

window.filterNavMessages = function(q) {
  currentNavChatSearch = q;
  const stream = document.getElementById('navConversationsStream');
  if (stream) {
    stream.innerHTML = renderConversationsListHtml();
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }
};

window.filterNavMessagesTab = function(tab, btn) {
  activeNavChatTab = tab;
  document.querySelectorAll('.conv-tab-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const stream = document.getElementById('navConversationsStream');
  if (stream) {
    stream.innerHTML = renderConversationsListHtml();
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }
};

window.openChatConversation = function(chatId) {
  const chat = window.DIRECT_MESSAGES_DATA.find(c => c.id === chatId);
  if (!chat) return;

  // Mark as read
  chat.unread = 0;

  const container = document.getElementById('navChatContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="chat-thread-container">
      <!-- Thread Header -->
      <div class="chat-thread-header">
        <div class="chat-thread-header-left">
          <button class="chat-back-btn" onclick="returnToConversationsList()" title="Back to all conversations">
            <i data-lucide="arrow-left" style="width:16px; height:16px;"></i>
          </button>
          <div class="chat-avatar-wrap">
            <div class="chat-avatar" style="width:34px; height:34px; border-radius:8px;">
              ${chat.avatar ? `<img src="${chat.avatar}" alt="${chat.name}" />` : chat.initials}
            </div>
            ${chat.online ? `<span class="chat-online-dot" style="width:8px; height:8px;"></span>` : ''}
          </div>
          <div>
            <div style="font-size:13px; font-weight:800; color:var(--text-dark);">${chat.name}</div>
            <div style="font-size:11px; color:var(--text-muted);">${chat.role} · ${chat.online ? '<span style="color:#16A34A;font-weight:600;">Active now</span>' : 'Offline'}</div>
          </div>
        </div>

        <button class="btn btn-outline" style="font-size:11px; padding:4px 8px; gap:4px;" onclick="if(window.showToast) showToast('Opened contact profile');">
          <i data-lucide="external-link" style="width:12px; height:12px;"></i>
          <span>Profile</span>
        </button>
      </div>

      <!-- Messages Stream Box -->
      <div class="chat-stream-box" id="navChatStreamBox">
        ${chat.history.map(m => `
          <div class="chat-msg ${m.sender === 'me' ? 'sent' : 'received'}">
            <div class="chat-bubble">
              <div class="chat-bubble-text">${m.text}</div>
              <div class="chat-bubble-time">${m.time}</div>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Quick Action Chips -->
      <div class="chat-quick-actions">
        <button class="chat-action-chip" onclick="sendQuickChatAction('deck', '${chat.id}')">
          <i data-lucide="presentation" style="width:11px; height:11px;"></i>
          <span>Send Pitch Deck</span>
        </button>
        <button class="chat-action-chip" onclick="sendQuickChatAction('meeting', '${chat.id}')">
          <i data-lucide="calendar" style="width:11px; height:11px;"></i>
          <span>Schedule Call</span>
        </button>
        <button class="chat-action-chip" onclick="sendQuickChatAction('vdr', '${chat.id}')">
          <i data-lucide="folder-lock" style="width:11px; height:11px;"></i>
          <span>Share Data Room</span>
        </button>
      </div>

      <!-- Message Composer -->
      <div class="chat-composer-row">
        <input type="text" id="navChatInput" class="chat-input-field" placeholder="Reply to ${chat.name.split(' ')[0]}..." onkeydown="if(event.key==='Enter') sendNavChatMessage('${chat.id}')" />
        <button class="chat-send-submit-btn" onclick="sendNavChatMessage('${chat.id}')">
          <span>Send</span>
          <i data-lucide="send" style="width:12px; height:12px;"></i>
        </button>
      </div>
    </div>
  `;

  if (typeof lucide !== 'undefined') lucide.createIcons();

  // Scroll to bottom
  setTimeout(() => {
    const stream = document.getElementById('navChatStreamBox');
    if (stream) stream.scrollTop = stream.scrollHeight;
    const input = document.getElementById('navChatInput');
    if (input) input.focus();
  }, 50);
};

window.returnToConversationsList = function() {
  const container = document.getElementById('navChatContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="conv-search-wrap">
      <i data-lucide="search" style="position:absolute; left:10px; top:50%; transform:translateY(-50%); width:14px; height:14px; color:var(--text-light);"></i>
      <input type="text" class="conv-search-input" placeholder="Search conversations..." oninput="filterNavMessages(this.value)" />
    </div>

    <div class="conv-filter-tabs">
      <button class="conv-tab-btn active" onclick="filterNavMessagesTab('all', this)">All (${window.DIRECT_MESSAGES_DATA.length})</button>
      <button class="conv-tab-btn" onclick="filterNavMessagesTab('investor', this)">Investors</button>
      <button class="conv-tab-btn" onclick="filterNavMessagesTab('founder', this)">Founders &amp; Mentors</button>
    </div>

    <div class="conv-list" id="navConversationsStream">
      ${renderConversationsListHtml()}
    </div>
  `;

  if (typeof lucide !== 'undefined') lucide.createIcons();
};

window.sendNavChatMessage = function(chatId) {
  const input = document.getElementById('navChatInput');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;

  const chat = window.DIRECT_MESSAGES_DATA.find(c => c.id === chatId);
  if (!chat) return;

  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  chat.history.push({ sender: 'me', text: text, time: time });
  chat.preview = `You: ${text}`;
  chat.lastTime = 'Just now';

  const stream = document.getElementById('navChatStreamBox');
  if (stream) {
    stream.insertAdjacentHTML('beforeend', `
      <div class="chat-msg sent">
        <div class="chat-bubble">
          <div class="chat-bubble-text">${text.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
          <div class="chat-bubble-time">${time}</div>
        </div>
      </div>
    `);
    stream.scrollTop = stream.scrollHeight;
  }

  input.value = '';

  if (window.showToast) {
    window.showToast(`Message sent to ${chat.name}`, 'success');
  }
};

window.sendQuickChatAction = function(action, chatId) {
  const chat = window.DIRECT_MESSAGES_DATA.find(c => c.id === chatId);
  if (!chat) return;

  let text = '';
  if (action === 'deck') text = '📄 Shared: Alpha_Health_Seed_Deck_2026.pdf (v2.4 Confidential)';
  else if (action === 'meeting') text = '📅 Let\'s schedule a 30-min briefing call: https://calendly.com/sarah-alphahealth/briefing';
  else if (action === 'vdr') text = '🔒 Granted 7-day secure access to Alpha Health Data Room (Cap Table, Financials & IP)';

  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  chat.history.push({ sender: 'me', text: text, time: time });
  chat.preview = `You: ${text}`;
  chat.lastTime = 'Just now';

  const stream = document.getElementById('navChatStreamBox');
  if (stream) {
    stream.insertAdjacentHTML('beforeend', `
      <div class="chat-msg sent">
        <div class="chat-bubble">
          <div class="chat-bubble-text">${text}</div>
          <div class="chat-bubble-time">${time}</div>
        </div>
      </div>
    `);
    stream.scrollTop = stream.scrollHeight;
  }

  if (window.showToast) {
    window.showToast(`Action sent to ${chat.name}`, 'success');
  }
};
