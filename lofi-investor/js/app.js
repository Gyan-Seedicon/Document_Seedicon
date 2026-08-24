/* ==========================================================================
   SEEDICON INVESTOR PLATFORM — INTERACTIVE WIREFRAME LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 01. Automatic Page Routing & Active Sidebar Navigation Detection
  let pageNav = 'dashboard';
  const pathName = window.location.pathname.toLowerCase();

  if (pathName.includes('capital-calls')) {
    pageNav = 'capital-calls';
  } else if (pathName.includes('distribution-calls')) {
    pageNav = 'distribution-calls';
  } else if (pathName.includes('investment-thesis')) {
    pageNav = 'investment-thesis';
  } else if (pathName.includes('all-documents')) {
    pageNav = 'all-documents';
  } else if (pathName.includes('intake-builder')) {
    pageNav = 'intake-builder';
  } else if (pathName.includes('startups-pool')) {
    pageNav = 'startups-pool';
  } else if (pathName.includes('deal-crm')) {
    pageNav = 'deal-crm';
  } else if (pathName.includes('dd-partners') || pathName.includes('dd-onboard-builder') || pathName.includes('dd-partner-detail')) {
    pageNav = 'dd-partners';
  } else if (pathName.includes('lps-management') || pathName.includes('lp-onboard-builder')) {
    pageNav = 'lps-management';
  } else if (pathName.includes('founder-reports')) {
    pageNav = 'founder-reports';
  } else if (pathName.includes('lp-reporting') || pathName.includes('lp-reports')) {
    pageNav = 'lp-reporting';
  } else if (pathName.includes('portfolio-management')) {
    pageNav = 'portfolio-management';
  } else if (pathName.includes('vdr')) {
    pageNav = 'vdr';
  } else if (pathName.includes('my-team')) {
    pageNav = 'my-team';
  } else {
    pageNav = 'dashboard';
  }

  // Initialize Layout Components with detected active page
  if (typeof LayoutComponents !== 'undefined' && document.getElementById('appHeaderSlot')) {
    LayoutComponents.init({ activeNav: pageNav, activeApp: 'investor' });
  }

  // 02. Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // 03. Bind App Events
  bindAppEvents();
});

// Global Sidebar Toggle Function
window.toggleSidebar = function() {
  const mainSidebar = document.getElementById('mainSidebar');
  const toggleSidebarIcon = document.getElementById('toggleSidebarIcon');
  if (mainSidebar) {
    mainSidebar.classList.toggle('collapsed');
    const isCollapsed = mainSidebar.classList.contains('collapsed');
    if (toggleSidebarIcon) {
      toggleSidebarIcon.setAttribute('data-lucide', isCollapsed ? 'panel-left-open' : 'panel-left-close');
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }
  }
};

function bindAppEvents() {
  // Global Event Delegation for Sidebar Collapse Button
  document.removeEventListener('click', handleToggleClick);
  document.addEventListener('click', handleToggleClick);

  function handleToggleClick(e) {
    const btn = e.target.closest('#toggleSidebarBtn');
    if (btn) {
      e.preventDefault();
      window.toggleSidebar();
    }
  }

  // Keyboard Shortcut: Cmd+[ or Ctrl+[ to toggle sidebar collapse
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === '[') {
      e.preventDefault();
      window.toggleSidebar();
    }
  });

  // Modal Handlers
  window.openModal = function(title, contentHtml) {
    const overlay = document.getElementById('modalOverlay');
    const titleEl = document.getElementById('modalTitle');
    const bodyEl = document.getElementById('modalBody');

    if (titleEl && bodyEl && overlay) {
      titleEl.textContent = title;
      bodyEl.innerHTML = contentHtml;
      overlay.style.display = 'flex';
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }
  };

  window.closeModal = function() {
    const overlay = document.getElementById('modalOverlay');
    if (overlay) {
      overlay.style.display = 'none';
    }
  };

  const closeModalBtn = document.getElementById('closeModalBtn');
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  const modalOverlay = document.getElementById('modalOverlay');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // Slide-Over Drawer Helpers
  window.openDrawer = function(title, subtitle, bodyHtml, footerHtml) {
    let overlay = document.getElementById('drawerOverlay');
    if (!overlay) {
      document.body.insertAdjacentHTML('beforeend', `
        <div id="drawerOverlay" class="drawer-overlay">
          <div class="drawer-panel">
            <div class="drawer-header">
              <div>
                <h3 id="drawerTitle" class="drawer-title">Drawer</h3>
                <p id="drawerSub" class="drawer-sub">Subtitle</p>
              </div>
              <button onclick="closeDrawer()" class="btn-icon" style="border:none; background:transparent;"><i data-lucide="x"></i></button>
            </div>
            <div id="drawerBody" class="drawer-body"></div>
            <div id="drawerFooter" class="drawer-footer"></div>
          </div>
        </div>
      `);
      overlay = document.getElementById('drawerOverlay');
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeDrawer();
      });
    }

    document.getElementById('drawerTitle').textContent = title;
    document.getElementById('drawerSub').textContent = subtitle || '';
    document.getElementById('drawerBody').innerHTML = bodyHtml || '';
    document.getElementById('drawerFooter').innerHTML = footerHtml || '';
    
    overlay.classList.add('show');
    if (typeof lucide !== 'undefined') lucide.createIcons();
  };

  window.closeDrawer = function() {
    const overlay = document.getElementById('drawerOverlay');
    if (overlay) overlay.classList.remove('show');
  };

  // Reusable Bottom-Right Toast Helper Component
  window.showToast = function(message, iconName = 'check-circle') {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.style.cssText = 'position:fixed; bottom:24px; right:24px; display:flex; flex-direction:column; gap:8px; z-index:99999; pointer-events:none;';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.style.cssText = 'background:#1A1A18; color:#FFFFFF; font-family:Inter,sans-serif; font-size:12px; font-weight:600; padding:10px 16px; border-radius:8px; display:flex; align-items:center; gap:8px; box-shadow:0 8px 24px rgba(0,0,0,0.18); pointer-events:auto; transition:opacity 0.2s ease, transform 0.2s ease; opacity:0; transform:translateY(10px);';
    toast.innerHTML = `<i data-lucide="${iconName}" style="width:15px; height:15px;"></i> <span>${message}</span>`;
    container.appendChild(toast);

    if (typeof lucide !== 'undefined') lucide.createIcons();

    requestAnimationFrame(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateY(0)';
    });

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 200);
    }, 3000);
  };

  // Fund Switcher Dropdown Logic
  const btnFundDropdown = document.getElementById('btnFundDropdown');
  const fundDropdownMenu = document.getElementById('fundDropdownMenu');
  const activeFundLabel = document.getElementById('activeFundLabel');

  if (btnFundDropdown && fundDropdownMenu) {
    btnFundDropdown.addEventListener('click', (e) => {
      e.stopPropagation();
      closeAllDropdowns();
      fundDropdownMenu.classList.toggle('show');
    });
  }

  // Switch Active Fund
  window.selectFund = function(fundName, element) {
    if (activeFundLabel) {
      activeFundLabel.textContent = fundName;
    }
    
    const allItems = document.querySelectorAll('#fundDropdownMenu .dropdown-item');
    allItems.forEach(item => {
      item.classList.remove('active-fund-item');
      const icon = item.querySelector('.font-radio-icon');
      if (icon) {
        icon.setAttribute('data-lucide', 'circle');
      }
    });

    if (element) {
      element.classList.add('active-fund-item');
      const icon = element.querySelector('.font-radio-icon');
      if (icon) {
        icon.setAttribute('data-lucide', 'check-circle');
      }
    }

    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }

    closeAllDropdowns();
    landOnDashboard(fundName);
  };

  function landOnDashboard(fundName) {
    const pageHeaderTitle = document.getElementById('pageHeaderTitle');
    const pageHeaderSub = document.getElementById('pageHeaderSub');
    
    if (pageHeaderTitle) pageHeaderTitle.textContent = "Investor Command Center";
    if (pageHeaderSub) pageHeaderSub.textContent = fundName + " — Dashboard Active";

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Edit Fund Settings Modal
  window.editFundSettings = function(name, size, currency, inceptionYear, investmentPeriod, term) {
    closeAllDropdowns();
    const parts = (investmentPeriod || '2026–2030').split(/–|-/);
    const startYear = parts[0] ? parts[0].trim() : '2026';
    const endYear = parts[1] ? parts[1].trim() : '2030';
    const selectedInception = inceptionYear || '2026';
    const selectedTerm = term || '10 Years';

    openModal('Edit Fund Parameters (' + name + ')', `
      <div style="display:flex; flex-direction:column; gap:14px;">
        <div style="display:flex; align-items:center; justify-content:space-between; background:var(--bg-muted); padding:8px 12px; border-radius:6px; border:1px solid var(--border-main);">
          <span style="font-size:12px; font-weight:600; color:var(--text-muted);">Quick Action</span>
          <button type="button" class="btn btn-sm" onclick="autoFillFundForm('edit')" style="gap:4px;">
            <i data-lucide="sparkles" class="lucide-sm"></i>
            <span>✨ Auto-fill Sample Data</span>
          </button>
        </div>

        <div>
          <label style="font-weight:700; font-size:11.5px; color:#1A1A18; display:flex; align-items:center; gap:4px; margin-bottom:5px;">
            <span>FUND NAME</span>
            <i data-lucide="help-circle" class="lucide-sm" style="color:var(--text-light);" title="The name of your fund."></i>
          </label>
          <input type="text" id="inputFundName" value="${name}" placeholder="Seedicon Ventures Fund I" style="width:100%; padding:9px 12px; border:1px solid #C8C8BF; border-radius:6px; font-family:Inter; font-size:12.5px; color:#1A1A18;"/>
        </div>

        <div>
          <label style="font-weight:700; font-size:11.5px; color:#1A1A18; display:flex; align-items:center; gap:4px; margin-bottom:5px;">
            <span>TARGET FUND SIZE</span>
            <i data-lucide="help-circle" class="lucide-sm" style="color:var(--text-light);" title="The total amount you plan to raise."></i>
          </label>
          <input type="text" id="inputFundSize" value="${size}" placeholder="₹20 Cr" style="width:100%; padding:9px 12px; border:1px solid #C8C8BF; border-radius:6px; font-family:Inter; font-size:12.5px; color:#1A1A18;"/>
        </div>

        <div>
          <label style="font-weight:700; font-size:11.5px; color:#1A1A18; display:flex; align-items:center; gap:4px; margin-bottom:5px;">
            <span>CURRENCY</span>
            <i data-lucide="help-circle" class="lucide-sm" style="color:var(--text-light);" title="The currency used for the fund."></i>
          </label>
          <select id="inputFundCurrency" style="width:100%; padding:9px 12px; border:1px solid #C8C8BF; border-radius:6px; font-family:Inter; font-size:12.5px; color:#1A1A18;">
            <option value="INR" ${currency==='INR'?'selected':''}>INR (₹ - Indian Rupee)</option>
            <option value="USD" ${currency==='USD'?'selected':''}>USD ($ - US Dollar)</option>
            <option value="EUR" ${currency==='EUR'?'selected':''}>EUR (€ - Euro)</option>
            <option value="GBP" ${currency==='GBP'?'selected':''}>GBP (£ - British Pound)</option>
            <option value="SGD" ${currency==='SGD'?'selected':''}>SGD (S$ - Singapore Dollar)</option>
          </select>
        </div>

        <div>
          <label style="font-weight:700; font-size:11.5px; color:#1A1A18; display:flex; align-items:center; gap:4px; margin-bottom:5px;">
            <span>FUND INCEPTION YEAR</span>
            <i data-lucide="help-circle" class="lucide-sm" style="color:var(--text-light);" title="The year the fund started."></i>
          </label>
          <select id="inputFundInceptionYear" style="width:100%; padding:9px 12px; border:1px solid #C8C8BF; border-radius:6px; font-family:Inter; font-size:12.5px; color:#1A1A18;">
            ${[2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030].map(y => `<option value="${y}" ${String(y) === String(selectedInception) ? 'selected' : ''}>${y}</option>`).join('')}
          </select>
        </div>

        <div>
          <label style="font-weight:700; font-size:11.5px; color:#1A1A18; display:flex; align-items:center; gap:4px; margin-bottom:5px;">
            <span>INVESTMENT PERIOD (Select start and end year)</span>
            <i data-lucide="help-circle" class="lucide-sm" style="color:var(--text-light);" title="The years when the fund will make new investments."></i>
          </label>
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
            <select id="inputFundPeriodStart" style="width:100%; padding:9px 12px; border:1px solid #C8C8BF; border-radius:6px; font-family:Inter; font-size:12.5px; color:#1A1A18;">
              ${[2023, 2024, 2025, 2026, 2027, 2028, 2029].map(y => `<option value="${y}" ${String(y) === String(startYear) ? 'selected' : ''}>${y}</option>`).join('')}
            </select>
            <select id="inputFundPeriodEnd" style="width:100%; padding:9px 12px; border:1px solid #C8C8BF; border-radius:6px; font-family:Inter; font-size:12.5px; color:#1A1A18;">
              ${[2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035].map(y => `<option value="${y}" ${String(y) === String(endYear) ? 'selected' : ''}>${y}</option>`).join('')}
            </select>
          </div>
        </div>

        <div>
          <label style="font-weight:700; font-size:11.5px; color:#1A1A18; display:flex; align-items:center; gap:4px; margin-bottom:5px;">
            <span>FUND TERM</span>
            <i data-lucide="help-circle" class="lucide-sm" style="color:var(--text-light);" title="The total number of years the fund will run."></i>
          </label>
          <select id="inputFundTerm" style="width:100%; padding:9px 12px; border:1px solid #C8C8BF; border-radius:6px; font-family:Inter; font-size:12.5px; color:#1A1A18;">
            <option value="5 Years" ${selectedTerm === '5 Years' ? 'selected' : ''}>5 Years</option>
            <option value="7 Years" ${selectedTerm === '7 Years' ? 'selected' : ''}>7 Years</option>
            <option value="8 Years" ${selectedTerm === '8 Years' ? 'selected' : ''}>8 Years</option>
            <option value="10 Years" ${selectedTerm === '10 Years' ? 'selected' : ''}>10 Years (Standard 10-Yr Life)</option>
            <option value="12 Years" ${selectedTerm === '12 Years' ? 'selected' : ''}>12 Years (10 + 2 Ext)</option>
            <option value="Evergreen" ${selectedTerm === 'Evergreen' ? 'selected' : ''}>Evergreen / Open-Ended</option>
          </select>
        </div>

        <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:14px;">
          <button onclick="document.getElementById('modalOverlay').style.display='none'" class="btn">Cancel</button>
          <button onclick="submitFundForm(false)" class="btn btn-primary">Save Settings &amp; Return to Dashboard</button>
        </div>
      </div>
    `);
    if (typeof lucide !== 'undefined') lucide.createIcons();
  };

  // Open Create New Fund Modal Form
  const btnOpenCreateFundModal = document.getElementById('btnOpenCreateFundModal');
  if (btnOpenCreateFundModal) {
    btnOpenCreateFundModal.addEventListener('click', () => {
      closeAllDropdowns();
      openModal('Create New Fund Entity', `
        <div style="display:flex; flex-direction:column; gap:14px;">
          <div style="display:flex; align-items:center; justify-content:space-between; background:var(--bg-muted); padding:8px 12px; border-radius:6px; border:1px solid var(--border-main);">
            <span style="font-size:12px; font-weight:600; color:var(--text-muted);">Quick Action</span>
            <button type="button" class="btn btn-sm" onclick="autoFillFundForm('create')" style="gap:4px;">
              <i data-lucide="sparkles" class="lucide-sm"></i>
              <span>✨ Auto-fill Sample Data</span>
            </button>
          </div>

          <div>
            <label style="font-weight:700; font-size:11.5px; color:#1A1A18; display:flex; align-items:center; gap:4px; margin-bottom:5px;">
              <span>FUND NAME</span>
              <i data-lucide="help-circle" class="lucide-sm" style="color:var(--text-light);" title="The name of your fund."></i>
            </label>
            <input type="text" id="inputFundName" placeholder="Seedicon Ventures Fund I" style="width:100%; padding:9px 12px; border:1px solid #C8C8BF; border-radius:6px; font-family:Inter; font-size:12.5px; color:#1A1A18;"/>
          </div>

          <div>
            <label style="font-weight:700; font-size:11.5px; color:#1A1A18; display:flex; align-items:center; gap:4px; margin-bottom:5px;">
              <span>TARGET FUND SIZE</span>
              <i data-lucide="help-circle" class="lucide-sm" style="color:var(--text-light);" title="The total amount you plan to raise."></i>
            </label>
            <input type="text" id="inputFundSize" placeholder="₹20 Cr" style="width:100%; padding:9px 12px; border:1px solid #C8C8BF; border-radius:6px; font-family:Inter; font-size:12.5px; color:#1A1A18;"/>
          </div>

          <div>
            <label style="font-weight:700; font-size:11.5px; color:#1A1A18; display:flex; align-items:center; gap:4px; margin-bottom:5px;">
              <span>CURRENCY</span>
              <i data-lucide="help-circle" class="lucide-sm" style="color:var(--text-light);" title="The currency used for the fund."></i>
            </label>
            <select id="inputFundCurrency" style="width:100%; padding:9px 12px; border:1px solid #C8C8BF; border-radius:6px; font-family:Inter; font-size:12.5px; color:#1A1A18;">
              <option value="INR" selected>INR (₹ - Indian Rupee)</option>
              <option value="USD">USD ($ - US Dollar)</option>
              <option value="EUR">EUR (€ - Euro)</option>
              <option value="GBP">GBP (£ - British Pound)</option>
              <option value="SGD">SGD (S$ - Singapore Dollar)</option>
            </select>
          </div>

          <div>
            <label style="font-weight:700; font-size:11.5px; color:#1A1A18; display:flex; align-items:center; gap:4px; margin-bottom:5px;">
              <span>FUND INCEPTION YEAR</span>
              <i data-lucide="help-circle" class="lucide-sm" style="color:var(--text-light);" title="The year the fund started."></i>
            </label>
            <select id="inputFundInceptionYear" style="width:100%; padding:9px 12px; border:1px solid #C8C8BF; border-radius:6px; font-family:Inter; font-size:12.5px; color:#1A1A18;">
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026" selected>2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
            </select>
          </div>

          <div>
            <label style="font-weight:700; font-size:11.5px; color:#1A1A18; display:flex; align-items:center; gap:4px; margin-bottom:5px;">
              <span>INVESTMENT PERIOD (Select start and end year)</span>
              <i data-lucide="help-circle" class="lucide-sm" style="color:var(--text-light);" title="The years when the fund will make new investments."></i>
            </label>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
              <select id="inputFundPeriodStart" style="width:100%; padding:9px 12px; border:1px solid #C8C8BF; border-radius:6px; font-family:Inter; font-size:12.5px; color:#1A1A18;">
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026" selected>2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
              </select>
              <select id="inputFundPeriodEnd" style="width:100%; padding:9px 12px; border:1px solid #C8C8BF; border-radius:6px; font-family:Inter; font-size:12.5px; color:#1A1A18;">
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030" selected>2030</option>
                <option value="2031">2031</option>
                <option value="2032">2032</option>
              </select>
            </div>
          </div>

          <div>
            <label style="font-weight:700; font-size:11.5px; color:#1A1A18; display:flex; align-items:center; gap:4px; margin-bottom:5px;">
              <span>FUND TERM</span>
              <i data-lucide="help-circle" class="lucide-sm" style="color:var(--text-light);" title="The total number of years the fund will run."></i>
            </label>
            <select id="inputFundTerm" style="width:100%; padding:9px 12px; border:1px solid #C8C8BF; border-radius:6px; font-family:Inter; font-size:12.5px; color:#1A1A18;">
              <option value="5 Years">5 Years</option>
              <option value="7 Years">7 Years</option>
              <option value="8 Years">8 Years</option>
              <option value="10 Years" selected>10 Years (Standard 10-Yr Life)</option>
              <option value="12 Years">12 Years (10 + 2 Ext)</option>
              <option value="Evergreen">Evergreen / Open-Ended</option>
            </select>
          </div>

          <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:14px;">
            <button onclick="document.getElementById('modalOverlay').style.display='none'" class="btn">Cancel</button>
            <button onclick="submitFundForm(true)" class="btn btn-primary">Create Fund</button>
          </div>
        </div>
      `);
      if (typeof lucide !== 'undefined') lucide.createIcons();
    });
  }

  // Auto-fill form fields logic
  window.autoFillFundForm = function(mode) {
    const inputFundName = document.getElementById('inputFundName');
    const inputFundSize = document.getElementById('inputFundSize');
    const inputFundCurrency = document.getElementById('inputFundCurrency');
    const inputFundInceptionYear = document.getElementById('inputFundInceptionYear');
    const inputFundPeriodStart = document.getElementById('inputFundPeriodStart');
    const inputFundPeriodEnd = document.getElementById('inputFundPeriodEnd');
    const inputFundTerm = document.getElementById('inputFundTerm');

    if (inputFundName) inputFundName.value = "Seedicon Ventures Fund I";
    if (inputFundSize) inputFundSize.value = "₹20 Cr";
    if (inputFundCurrency) inputFundCurrency.value = "INR";
    if (inputFundInceptionYear) inputFundInceptionYear.value = "2026";
    if (inputFundPeriodStart) inputFundPeriodStart.value = "2026";
    if (inputFundPeriodEnd) inputFundPeriodEnd.value = "2030";
    if (inputFundTerm) inputFundTerm.value = "10 Years";
  };

  // Submit fund form & land on Dashboard
  window.submitFundForm = function(isNew) {
    const inputFundName = document.getElementById('inputFundName');
    const inputFundSize = document.getElementById('inputFundSize');

    const nameVal = (inputFundName && inputFundName.value.trim()) ? inputFundName.value.trim() : "Seedicon Ventures Fund I";
    const sizeVal = (inputFundSize && inputFundSize.value.trim()) ? inputFundSize.value.trim() : "₹20 Cr";
    const fullName = `${nameVal} (${sizeVal})`;

    if (activeFundLabel) {
      activeFundLabel.textContent = fullName;
    }

    const overlay = document.getElementById('modalOverlay');
    if (overlay) {
      overlay.style.display = 'none';
    }

    landOnDashboard(fullName);
    if (window.showToast) {
      window.showToast(isNew ? `New Fund "${fullName}" created successfully!` : `Fund Parameters for "${fullName}" updated!`);
    } else {
      alert(isNew ? `New Fund "${fullName}" created successfully! Landed on Dashboard.` : `Fund Parameters for "${fullName}" updated! Landed on Dashboard.`);
    }
  };

  // Create Actions Context Menu Logic
  const btnCreateActions = document.getElementById('btnCreateActions');
  const createActionsMenu = document.getElementById('createActionsMenu');

  if (btnCreateActions && createActionsMenu) {
    btnCreateActions.addEventListener('click', (e) => {
      e.stopPropagation();
      closeAllDropdowns();
      createActionsMenu.classList.toggle('show');
    });
  }

  function closeAllDropdowns() {
    const fMenu = document.getElementById('fundDropdownMenu');
    const cMenu = document.getElementById('createActionsMenu');
    if (fMenu) fMenu.classList.remove('show');
    if (cMenu) cMenu.classList.remove('show');
  }

  document.addEventListener('click', closeAllDropdowns);

  // 01. Create Intake startup Link
  const menuIntakeLink = document.getElementById('menuIntakeLink');
  if (menuIntakeLink) {
    menuIntakeLink.addEventListener('click', () => {
      closeAllDropdowns();
      window.location.href = './intake-builder.html';
    });
  }

  // 02. Create New Fund
  const menuCreateFund = document.getElementById('menuCreateFund');
  if (menuCreateFund) {
    menuCreateFund.addEventListener('click', () => {
      closeAllDropdowns();
      const fundModalBtn = document.getElementById('btnOpenCreateFundModal');
      if (fundModalBtn) {
        fundModalBtn.click();
      }
    });
  }

  // 03. Create Investment Thesis
  const menuInvestmentThesis = document.getElementById('menuInvestmentThesis');
  if (menuInvestmentThesis) {
    menuInvestmentThesis.addEventListener('click', () => {
      closeAllDropdowns();
      openModal('Create Investment Thesis Page', `
        <div style="display:flex; flex-direction:column; gap:12px;">
          <p style="font-size:12.5px; color:#5A5A54;">Draft a new fund thesis page to align co-investors and LPs on investment criteria.</p>
          <label style="font-weight:700; font-size:11.5px; color:#1A1A18;">THESIS TITLE</label>
          <input type="text" value="Seedicon Fund I — AI &amp; SaaS Thesis" style="padding:8px; border:1px solid #C8C8BF; border-radius:6px; font-family:Inter; font-size:12.5px; color:#1A1A18;"/>
          <label style="font-weight:700; font-size:11.5px; color:#1A1A18;">TARGET SECTORS &amp; CHEQUE SIZE</label>
          <input type="text" value="Enterprise AI, B2B FinTech · ₹1 Cr - ₹3 Cr Cheque" style="padding:8px; border:1px solid #C8C8BF; border-radius:6px; font-family:Inter; font-size:12.5px; color:#1A1A18;"/>
          <label style="font-weight:700; font-size:11.5px; color:#1A1A18;">SHARE WITH CO-INVESTORS / LPs</label>
          <div style="font-size:12px; color:#2B2B28; display:flex; flex-direction:column; gap:6px;">
            <label><input type="checkbox" checked /> Share on Co-Investor Single Alignment Page</label>
            <label><input type="checkbox" checked /> Publish to LP Portal Directory</label>
          </div>
          <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:16px;">
            <button onclick="document.getElementById('modalOverlay').style.display='none'" class="btn">Cancel</button>
            <button onclick="alert('Investment Thesis Created &amp; Published to Co-Investors!'); document.getElementById('modalOverlay').style.display='none';" class="btn btn-primary">Publish Thesis</button>
          </div>
        </div>
      `);
    });
  }
}
