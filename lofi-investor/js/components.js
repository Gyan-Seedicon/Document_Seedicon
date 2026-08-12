/* ==========================================================================
   SEEDICON INVESTOR PLATFORM — REUSABLE LAYOUT COMPONENTS SYSTEM
   ========================================================================== */

const LayoutComponents = {
  // 01. Render Top Header Navbar
  renderHeader() {
    return `
      <header class="top-header">
        <div class="header-left">
          <!-- Sidebar Collapse Toggle Button -->
          <button class="btn-icon" id="toggleSidebarBtn" title="Toggle Navigation Sidebar (⌘[)">
            <i data-lucide="panel-left-close" id="toggleSidebarIcon"></i>
          </button>

          <!-- Short Logo -->
          <a href="./index.html" class="brand-logo">
            <div class="logo-square">
              <i data-lucide="layers"></i>
            </div>
            <span>Seedicon Investor</span>
          </a>

          <!-- Global Search Input -->
          <div class="search-box">
            <i data-lucide="search" class="search-icon"></i>
            <input type="text" class="search-input" placeholder="Search startups, LPs, data rooms, reports..."/>
            <span class="kbd-shortcut">⌘K</span>
          </div>
        </div>

        <div class="header-right">
          <!-- Fund Switcher Dropdown in Navbar -->
          <div class="dropdown-wrap">
            <button class="fund-selector-btn" id="btnFundDropdown">
              <i data-lucide="briefcase" class="lucide-sm"></i>
              <span id="activeFundLabel">Seedicon Fund I (₹20 Cr)</span>
              <i data-lucide="chevron-down" class="lucide-sm"></i>
            </button>

            <div class="dropdown-menu" id="fundDropdownMenu">
              <div class="dropdown-header">SELECT ACTIVE FUND</div>
              
              <div class="dropdown-item active-fund-item" onclick="selectFund('Seedicon Fund I (₹20 Cr)', this)">
                <div class="dropdown-item-left">
                  <i data-lucide="check-circle" class="lucide-sm font-radio-icon"></i>
                  <span>Seedicon Fund I (₹20 Cr)</span>
                </div>
                <span class="fund-settings-gear-btn" onclick="event.stopPropagation(); editFundSettings('Seedicon Fund I', '₹20 Cr', 'INR', '2026', '2026-2030', '10 Years');" title="Edit Fund Settings">
                  <i data-lucide="settings" class="lucide-sm"></i>
                </span>
              </div>

              <div class="dropdown-item" onclick="selectFund('Opportunity Fund II (₹50 Cr)', this)">
                <div class="dropdown-item-left">
                  <i data-lucide="circle" class="lucide-sm font-radio-icon"></i>
                  <span>Opportunity Fund II (₹50 Cr)</span>
                </div>
                <span class="fund-settings-gear-btn" onclick="event.stopPropagation(); editFundSettings('Opportunity Fund II', '₹50 Cr', 'INR', '2026', '2026-2030', '10 Years');" title="Edit Fund Settings">
                  <i data-lucide="settings" class="lucide-sm"></i>
                </span>
              </div>

              <div class="dropdown-item" onclick="selectFund('Growth Fund III (₹100 Cr)', this)">
                <div class="dropdown-item-left">
                  <i data-lucide="circle" class="lucide-sm font-radio-icon"></i>
                  <span>Growth Fund III (₹100 Cr)</span>
                </div>
                <span class="fund-settings-gear-btn" onclick="event.stopPropagation(); editFundSettings('Growth Fund III', '₹100 Cr', 'USD', '2025', '2025-2029', '8 Years');" title="Edit Fund Settings">
                  <i data-lucide="settings" class="lucide-sm"></i>
                </span>
              </div>

              <div class="dropdown-divider"></div>
              
              <div class="dropdown-item" id="btnOpenCreateFundModal">
                <div class="dropdown-item-left">
                  <i data-lucide="plus-circle" class="lucide-sm"></i>
                  <span style="font-weight: 700;">+ Create New Fund</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Create Actions Context Menu Button -->
          <div class="dropdown-wrap">
            <button class="btn btn-primary" id="btnCreateActions">
              <i data-lucide="plus"></i>
              <span>Create</span>
              <i data-lucide="chevron-down" class="lucide-sm"></i>
            </button>

            <div class="dropdown-menu" id="createActionsMenu">
              <div class="dropdown-header">CREATE NEW RESOURCE</div>
              <div class="dropdown-item" id="menuIntakeLink">
                <div class="dropdown-item-left">
                  <i data-lucide="link-2"></i>
                  <span>Create Intake startup Link</span>
                </div>
              </div>
              <div class="dropdown-item" id="menuDataRoom">
                <div class="dropdown-item-left">
                  <i data-lucide="folder-lock"></i>
                  <span>Create Data Room</span>
                </div>
              </div>
              <div class="dropdown-item" id="menuInvestmentThesis">
                <div class="dropdown-item-left">
                  <i data-lucide="file-text"></i>
                  <span>Create Investment Thesis</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Icon Actions -->
          <button class="btn-icon" title="Notifications">
            <i data-lucide="bell"></i>
          </button>
          <button class="btn-icon" title="Help &amp; Documentation">
            <i data-lucide="help-circle"></i>
          </button>
        </div>
      </header>
    `;
  },

  // 02. Render Tiny Ecosystem App Launcher Sidebar (Space-Between Flex Layout)
  renderTinySidebar(activeApp = 'investor') {
    return `
      <aside class="tiny-sidebar">
        <!-- Top App Group -->
        <div class="tiny-sidebar-group">
          <!-- 01. Investor Module -->
          <a href="./index.html" class="tiny-nav-item ${activeApp === 'investor' ? 'active' : ''}" data-tooltip="Investor Module — Platform Active">
            <i data-lucide="building-2"></i>
          </a>

          <div class="tiny-divider"></div>

          <!-- 02. Deckwale -->
          <a href="#deckwale" class="tiny-nav-item ${activeApp === 'deckwale' ? 'active' : ''}" data-tooltip="Deckwale — AI Presentation Builder">
            <i data-lucide="presentation"></i>
          </a>

          <!-- 03. Watch (VDR) -->
          <a href="#watch-vdr" class="tiny-nav-item ${activeApp === 'watch' ? 'active' : ''}" data-tooltip="Watch — Virtual Data Room (VDR)">
            <i data-lucide="shield-check"></i>
          </a>

          <!-- 04. Allbuddy -->
          <a href="#allbuddy" class="tiny-nav-item ${activeApp === 'allbuddy' ? 'active' : ''}" data-tooltip="Allbuddy — Contact &amp; Task Management">
            <i data-lucide="contact-2"></i>
          </a>

          <!-- 05. Seedicon Coffee -->
          <a href="#seedicon-coffee" class="tiny-nav-item ${activeApp === 'coffee' ? 'active' : ''}" data-tooltip="Seedicon Coffee — Coffee Trading Platform">
            <i data-lucide="coffee"></i>
          </a>
        </div>

        <!-- Bottom Actions Group (Anchored to Bottom with Space-Between) -->
        <div class="tiny-sidebar-group">
          <div class="tiny-divider"></div>

          <!-- 06. Explore Seedicon -->
          <a href="https://seedicon.app" target="_blank" class="tiny-nav-item" data-tooltip="Explore Seedicon — Main Website">
            <i data-lucide="compass"></i>
          </a>

          <!-- 07. Settings -->
          <a href="#settings" class="tiny-nav-item" data-tooltip="Workspace Settings">
            <i data-lucide="settings"></i>
          </a>

          <!-- 08. User Profile Avatar -->
          <div class="user-avatar-tiny" data-tooltip="Partner Profile — Partner Workspace">P</div>
        </div>
      </aside>
    `;
  },

  // 03. Render Primary Navigation Sidebar
  renderMainSidebar(activeNav = 'dashboard') {
    const isActive = (id) => activeNav === id ? 'active' : '';

    return `
      <aside class="main-sidebar" id="mainSidebar">
        <!-- Nav Section 1: FUND OVERVIEW -->
        <div class="nav-section">
          <div class="nav-section-title">Fund Overview</div>
          <a href="./index.html" class="nav-item ${isActive('dashboard')}">
            <div class="nav-item-left">
              <i data-lucide="layout-dashboard"></i>
              <span>Dashboard</span>
            </div>
          </a>
          <a href="./investment-thesis.html" class="nav-item ${isActive('investment-thesis')}">
            <div class="nav-item-left">
              <i data-lucide="file-text"></i>
              <span>Investment Thesis</span>
            </div>
          </a>
          <a href="./all-documents.html" class="nav-item ${isActive('all-documents')}">
            <div class="nav-item-left">
              <i data-lucide="files"></i>
              <span>All Documents</span>
            </div>
          </a>
        </div>

        <!-- Nav Section 2: DEAL SOURCING & PIPELINE -->
        <div class="nav-section">
          <div class="nav-section-title">Sourcing &amp; Pipeline</div>
          <a href="./startups-pool.html" class="nav-item ${isActive('startups-pool')}">
            <div class="nav-item-left">
              <i data-lucide="inbox"></i>
              <span>Startups Pools</span>
            </div>
            <span class="nav-count">28</span>
          </a>
          <a href="./deal-crm.html" class="nav-item ${isActive('deal-crm')}">
            <div class="nav-item-left">
              <i data-lucide="kanban"></i>
              <span>Deal CRM</span>
            </div>
            <span class="nav-count">14</span>
          </a>
          <a href="./pipeline-management.html" class="nav-item ${isActive('pipeline-management')}">
            <div class="nav-item-left">
              <i data-lucide="git-pull-request"></i>
              <span>Pipeline Management</span>
            </div>
          </a>
        </div>

        <!-- Nav Section 3: DUE DILIGENCE -->
        <div class="nav-section">
          <div class="nav-section-title">Due Diligence</div>
          <a href="./vdr.html" class="nav-item ${isActive('vdr')}">
            <div class="nav-item-left">
              <i data-lucide="folder-lock"></i>
              <span>VDR (Data Room)</span>
            </div>
            <span class="nav-count">4</span>
          </a>
          <a href="./dd-partners.html" class="nav-item ${isActive('dd-partners')}">
            <div class="nav-item-left">
              <i data-lucide="file-search"></i>
              <span>DD Partners</span>
            </div>
            <span class="nav-count">4</span>
          </a>
          <a href="./shared-with-me.html" class="nav-item ${isActive('shared-with-me')}">
            <div class="nav-item-left">
              <i data-lucide="share-2"></i>
              <span>Shared with me</span>
            </div>
          </a>
        </div>

        <!-- Nav Section 4: PORTFOLIO MANAGEMENT -->
        <div class="nav-section">
          <div class="nav-section-title">Portfolio</div>
          <a href="./portfolio-management.html" class="nav-item ${isActive('portfolio-management')}">
            <div class="nav-item-left">
              <i data-lucide="trending-up"></i>
              <span>Portfolio Management</span>
            </div>
            <span class="nav-count">12</span>
          </a>
        </div>

        <!-- Nav Section 5: LP CAPITAL & EXITS -->
        <div class="nav-section">
          <div class="nav-section-title">LP &amp; Capital</div>
          <a href="./lps-management.html" class="nav-item ${isActive('lps-management')}">
            <div class="nav-item-left">
              <i data-lucide="users"></i>
              <span>LPs Management</span>
            </div>
            <span class="nav-count">18</span>
          </a>
          <a href="./capital-calls.html" class="nav-item ${isActive('capital-calls')}">
            <div class="nav-item-left">
              <i data-lucide="coins"></i>
              <span>Capital Call</span>
            </div>
            <span class="nav-count">₹5 Cr</span>
          </a>
          <a href="./distribution-calls.html" class="nav-item ${isActive('distribution-calls')}">
            <div class="nav-item-left">
              <i data-lucide="arrow-up-right"></i>
              <span>Distribution Calls</span>
            </div>
            <span class="nav-count">Exits</span>
          </a>
        </div>

        <!-- Nav Section 6: COLLABORATION & HISTORY -->
        <div class="nav-section">
          <div class="nav-section-title">Workspace</div>
          <a href="./my-team.html" class="nav-item ${isActive('my-team')}">
            <div class="nav-item-left">
              <i data-lucide="user-plus"></i>
              <span>My Teams</span>
            </div>
            <span class="nav-count">6</span>
          </a>
          <a href="./history.html" class="nav-item ${isActive('history')}">
            <div class="nav-item-left">
              <i data-lucide="clock"></i>
              <span>History</span>
            </div>
          </a>
        </div>
      </aside>
    `;
  },

  // 04. Render Global Modal Container
  renderModalContainer() {
    return `
      <div id="modalOverlay" style="position: fixed; inset: 0; background: rgba(26,26,24,0.4); backdrop-filter: blur(2px); z-index: 300; display: none; align-items: center; justify-content: center;">
        <div style="background: #FFFFFF; border: 1px solid #C8C8BF; border-radius: 10px; width: 480px; max-width: 92vw; padding: 22px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);">
          <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #DCDCD4; padding-bottom: 12px; margin-bottom: 16px;">
            <h3 id="modalTitle" style="font-size: 15px; font-weight: 700; color: #1A1A18;">Action Dialog</h3>
            <button id="closeModalBtn" style="background: transparent; border: none; cursor: pointer; color: #5A5A54;">
              <i data-lucide="x"></i>
            </button>
          </div>
          <div id="modalBody">
            <!-- Dynamic Form Content -->
          </div>
        </div>
      </div>
    `;
  },

  // 05. Master Layout Initializer
  init(options = {}) {
    const activeNav = options.activeNav || 'dashboard';
    const activeApp = options.activeApp || 'investor';

    const headerSlot = document.getElementById('appHeaderSlot');
    const tinySidebarSlot = document.getElementById('tinySidebarSlot');
    const mainSidebarSlot = document.getElementById('mainSidebarSlot');
    const modalSlot = document.getElementById('modalSlot');

    if (headerSlot) headerSlot.innerHTML = this.renderHeader();
    if (tinySidebarSlot) tinySidebarSlot.innerHTML = this.renderTinySidebar(activeApp);
    if (mainSidebarSlot) mainSidebarSlot.innerHTML = this.renderMainSidebar(activeNav);
    if (modalSlot) modalSlot.innerHTML = this.renderModalContainer();
  }
};
