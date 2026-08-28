/* ==========================================================================
   SEEDICON FOUNDER PLATFORM — WATCH DATA ROOMS (VDR) JAVASCRIPT ENGINE
   Exact Google Drive Folder UI, 3-Dots Context Menus, Deep Explorer & Analytics
   ========================================================================== */

(function() {
  // ──────────────────────────────────────────────────────────────────────────
  // 01. INITIAL DATA STORE
  // ──────────────────────────────────────────────────────────────────────────
  const INITIAL_VAULTS_DATA = [
    {
      id: 'vdr-seed-lead',
      name: 'Seed Lead Diligence',
      category: 'Seed Round',
      createdOn: 'Aug 12, 2026',
      lastModified: 'Aug 24, 2026',
      investorsCount: 8,
      requireNda: true,
      domainLock: true,
      allowedDomains: 'accel.com, matrix.com, peakxv.com',
      isArchived: false,
      documents: [
        { id: 'doc-1', name: 'Alpha_Health_Series_Seed_Cap_Table_Waterfall_2026.xlsx', format: 'xlsx', type: 'Cap Table (XLSX)', date: 'Aug 20, 2026', size: '2.4 MB', views: 24, downloads: 8, pages: 4 },
        { id: 'doc-2', name: 'Alpha_Health_24_Month_Audited_Financial_Model.xlsx', format: 'xlsx', type: 'Financial Model (XLSX)', date: 'Aug 19, 2026', size: '5.8 MB', views: 31, downloads: 11, pages: 8 },
        { id: 'doc-3', name: 'Alpha_Health_Seed_Pitch_Deck_v2.4_Confidential.pdf', format: 'pdf', type: 'Pitch Deck (PDF)', date: 'Aug 18, 2026', size: '12.1 MB', views: 48, downloads: 19, pages: 14 },
        { id: 'doc-4', name: 'Delaware_C_Corp_Certificate_of_Incorporation.pdf', format: 'pdf', type: 'Legal & Corporate (PDF)', date: 'Aug 15, 2026', size: '1.8 MB', views: 14, downloads: 5, pages: 5 },
        { id: 'doc-5', name: 'US_Provisional_Patent_AI_Biomarker_Diagnostics.pdf', format: 'pdf', type: 'Patent & IP (PDF)', date: 'Aug 14, 2026', size: '8.6 MB', views: 19, downloads: 7, pages: 22 },
        { id: 'doc-6', name: 'Enterprise_Pilot_MSA_Agreement_Redacted.pdf', format: 'pdf', type: 'Commercial MSA (PDF)', date: 'Aug 12, 2026', size: '3.5 MB', views: 9, downloads: 3, pages: 9 },
        { id: 'doc-7', name: 'SOC_2_Type_II_Compliance_Report_2026.pdf', format: 'pdf', type: 'SOC 2 & Security (PDF)', date: 'Aug 10, 2026', size: '4.1 MB', views: 16, downloads: 6, pages: 32 },
        { id: 'doc-8', name: 'Key_Management_Employment_IP_Assignment_Agreements.pdf', format: 'pdf', type: 'Legal & Corporate (PDF)', date: 'Aug 08, 2026', size: '2.9 MB', views: 11, downloads: 4, pages: 11 }
      ],
      sharedUsers: [
        { id: 'usr-1', name: 'Elena Rostova (Accel)', email: 'elena@accel.com', accessGivenOn: 'Aug 14, 2026', ndaSigned: true },
        { id: 'usr-2', name: 'Vikram Mehta (Matrix)', email: 'vikram@matrix.com', accessGivenOn: 'Aug 15, 2026', ndaSigned: true },
        { id: 'usr-3', name: 'Marc Benioff (Angel)', email: 'marc@benioffholdings.com', accessGivenOn: 'Aug 16, 2026', ndaSigned: true },
        { id: 'usr-4', name: 'David Sacks (Craft)', email: 'david@craftventures.com', accessGivenOn: 'Aug 17, 2026', ndaSigned: true },
        { id: 'usr-5', name: 'Aarav Sharma (Peak XV)', email: 'aarav@peakxv.com', accessGivenOn: 'Aug 18, 2026', ndaSigned: false }
      ],
      requestedDocs: [
        { id: 'req-1', title: 'Q3 2026 Customer Retention & Cohort Breakdown', template: 'Cohort Analysis Template v2', requestedBy: 'Elena Rostova (Accel)', requestedOn: 'Aug 19, 2026', uploadedOn: 'Pending', status: 'Pending Upload' },
        { id: 'req-2', title: 'Auditor Sign-Off Letter on 2025 R&D Tax Credits', template: 'KPMG Standard Audit Form', requestedBy: 'Vikram Mehta (Matrix)', requestedOn: 'Aug 18, 2026', uploadedOn: 'Aug 20, 2026', status: 'Fulfilled' },
        { id: 'req-3', title: 'HIPAA Business Associate Agreement (BAA) Master', template: 'HHS Standard BAA Model', requestedBy: 'David Sacks (Craft)', requestedOn: 'Aug 17, 2026', uploadedOn: 'Aug 18, 2026', status: 'Fulfilled' }
      ],
      history: [
        { id: 'hist-1', user: 'Elena Rostova (Accel)', action: 'Downloaded Alpha_Health_Series_Seed_Cap_Table_Waterfall_2026.xlsx', time: 'Aug 20, 2026 · 10:45 AM', location: 'San Francisco, US (192.0.2.45)' },
        { id: 'hist-2', user: 'Vikram Mehta (Matrix)', action: 'Viewed Alpha_Health_24_Month_Audited_Financial_Model.xlsx', time: 'Aug 20, 2026 · 09:12 AM', location: 'Palo Alto, US (198.51.100.12)' },
        { id: 'hist-3', user: 'Elena Rostova (Accel)', action: 'Signed Seedicon Mutual NDA (Digital Signature v3.2)', time: 'Aug 14, 2026 · 04:30 PM', location: 'San Francisco, US (192.0.2.45)' },
        { id: 'hist-4', user: 'Gyan Sharma (Founder)', action: 'Uploaded SOC_2_Type_II_Compliance_Report_2026.pdf', time: 'Aug 10, 2026 · 02:15 PM', location: 'Boston, US (203.0.113.88)' }
      ]
    },
    {
      id: 'vdr-ip-patents',
      name: 'IP & Clinical Patents',
      category: 'IP & Patents',
      createdOn: 'Jul 28, 2026',
      lastModified: 'Aug 18, 2026',
      investorsCount: 5,
      requireNda: true,
      domainLock: true,
      allowedDomains: 'sequoiacap.com, khoslaventures.com',
      isArchived: false,
      documents: [
        { id: 'doc-21', name: 'US_Provisional_Patent_63_892_104_AI_Biomarker.pdf', format: 'pdf', type: 'Patent & IP (PDF)', date: 'Aug 18, 2026', size: '14.2 MB', views: 22, downloads: 7, pages: 30 },
        { id: 'doc-22', name: 'Stanford_Tech_Transfer_Exclusive_License_Agreement.pdf', format: 'pdf', type: 'Legal & Corporate (PDF)', date: 'Aug 15, 2026', size: '4.8 MB', views: 18, downloads: 4, pages: 18 },
        { id: 'doc-23', name: 'Clinical_Trial_Phase_1_Efficacy_Metrics_Report.pdf', format: 'pdf', type: 'Clinical Data (PDF)', date: 'Aug 12, 2026', size: '28.4 MB', views: 35, downloads: 12, pages: 45 },
        { id: 'doc-24', name: 'IRB_Human_Subject_Protocol_Approval_Notice.pdf', format: 'pdf', type: 'Compliance (PDF)', date: 'Aug 10, 2026', size: '1.9 MB', views: 15, downloads: 3, pages: 6 },
        { id: 'doc-25', name: 'PCT_International_Patent_Application_WO2026_09124.pdf', format: 'pdf', type: 'Patent & IP (PDF)', date: 'Aug 05, 2026', size: '8.3 MB', views: 19, downloads: 6, pages: 28 }
      ],
      sharedUsers: [
        { id: 'usr-21', name: 'Jessica Livingston (YC)', email: 'jessica@ycalumni.com', accessGivenOn: 'Aug 01, 2026', ndaSigned: true },
        { id: 'usr-22', name: 'Dr. Sanjay Gupta (BioTech)', email: 'sanjay@biotechangels.com', accessGivenOn: 'Aug 05, 2026', ndaSigned: true },
        { id: 'usr-23', name: 'Marcus Vance (Pulse)', email: 'marcus@pulse.vc', accessGivenOn: 'Aug 08, 2026', ndaSigned: true }
      ],
      requestedDocs: [
        { id: 'req-21', title: 'Independent Clinical Lab Raw Chromatography Data (CSV)', template: 'Clinical Trial Raw Data Schema', requestedBy: 'Dr. Sanjay Gupta (BioTech)', requestedOn: 'Aug 16, 2026', uploadedOn: 'Pending', status: 'Pending Upload' },
        { id: 'req-22', title: 'Stanford Tech-Transfer Royalties Schedule Amendment', template: 'University License Annex B', requestedBy: 'Jessica Livingston (YC)', requestedOn: 'Aug 14, 2026', uploadedOn: 'Aug 17, 2026', status: 'Fulfilled' }
      ],
      history: [
        { id: 'hist-21', user: 'Dr. Sanjay Gupta (BioTech)', action: 'Downloaded US_Provisional_Patent_63_892_104_AI_Biomarker.pdf', time: 'Aug 18, 2026 · 11:20 AM', location: 'New York, US (198.51.100.4)' },
        { id: 'hist-22', user: 'Jessica Livingston (YC)', action: 'Viewed Clinical_Trial_Phase_1_Efficacy_Metrics_Report.pdf', time: 'Aug 17, 2026 · 03:40 PM', location: 'Palo Alto, US (192.0.2.78)' },
        { id: 'hist-23', user: 'Marcus Vance (Pulse)', action: 'Signed Seedicon Mutual NDA', time: 'Aug 08, 2026 · 09:15 AM', location: 'London, UK (81.2.69.142)' }
      ]
    },
    {
      id: 'vdr-financials-audit',
      name: 'Financials & 409A Audit',
      category: 'Financials & Audit',
      createdOn: 'Aug 02, 2026',
      lastModified: 'Aug 19, 2026',
      investorsCount: 6,
      requireNda: true,
      domainLock: false,
      allowedDomains: '',
      isArchived: false,
      documents: [
        { id: 'doc-31', name: 'KPMG_Compiled_Financial_Statements_2025_2026.pdf', format: 'pdf', type: 'Financial Model (PDF)', date: 'Aug 19, 2026', size: '6.2 MB', views: 28, downloads: 9, pages: 16 },
        { id: 'doc-32', name: 'Carta_Independent_409A_Valuation_Report_Q2_2026.pdf', format: 'pdf', type: 'Financial Model (PDF)', date: 'Aug 14, 2026', size: '3.1 MB', views: 19, downloads: 6, pages: 12 },
        { id: 'doc-33', name: 'Monthly_MRR_Gross_Margin_Cohort_Waterfall.xlsx', format: 'xlsx', type: 'Financial Model (XLSX)', date: 'Aug 10, 2026', size: '4.5 MB', views: 32, downloads: 14, pages: 6 }
      ],
      sharedUsers: [
        { id: 'usr-31', name: 'Rohit Bansal (Titan)', email: 'rohit@titancapital.vc', accessGivenOn: 'Aug 08, 2026', ndaSigned: true },
        { id: 'usr-32', name: 'Michael Seibel (YC)', email: 'michael@ycombinator.com', accessGivenOn: 'Aug 10, 2026', ndaSigned: true }
      ],
      requestedDocs: [
        { id: 'req-31', title: 'Q3 2026 Operating Expense Runway Forecast Model', template: 'SaaS Runway Calculator v4', requestedBy: 'Rohit Bansal (Titan)', requestedOn: 'Aug 18, 2026', uploadedOn: 'Pending', status: 'Pending Upload' }
      ],
      history: [
        { id: 'hist-31', user: 'Rohit Bansal (Titan)', action: 'Downloaded Monthly_MRR_Gross_Margin_Cohort_Waterfall.xlsx', time: 'Aug 19, 2026 · 04:10 PM', location: 'New Delhi, IN (182.74.12.90)' }
      ]
    },
    {
      id: 'vdr-cap-table-legal',
      name: 'Cap Table & Corporate',
      category: 'Legal & Cap Table',
      createdOn: 'Jun 14, 2026',
      lastModified: 'Aug 15, 2026',
      investorsCount: 11,
      requireNda: true,
      domainLock: true,
      allowedDomains: 'initialized.com, 776.org',
      isArchived: false,
      documents: [
        { id: 'doc-41', name: 'Delaware_Certificate_of_Incorporation_Stamped.pdf', format: 'pdf', type: 'Legal & Corporate (PDF)', date: 'Aug 15, 2026', size: '1.4 MB', views: 16, downloads: 4, pages: 4 },
        { id: 'doc-42', name: 'Founder_Stock_Purchase_Agreements_83b_Elections.pdf', format: 'pdf', type: 'Legal & Corporate (PDF)', date: 'Aug 10, 2026', size: '5.2 MB', views: 12, downloads: 3, pages: 14 },
        { id: 'doc-43', name: '2026_Stock_Incentive_Plan_Option_Pool_Summary.pdf', format: 'pdf', type: 'Cap Table (PDF)', date: 'Aug 05, 2026', size: '2.1 MB', views: 20, downloads: 7, pages: 8 }
      ],
      sharedUsers: [
        { id: 'usr-41', name: 'Garry Tan (Initialized)', email: 'garry@initialized.com', accessGivenOn: 'Aug 02, 2026', ndaSigned: true },
        { id: 'usr-42', name: 'Alexis Ohanian (776)', email: 'alexis@sevensevensix.com', accessGivenOn: 'Aug 05, 2026', ndaSigned: true }
      ],
      requestedDocs: [
        { id: 'req-41', title: 'Board Consent for 2026 Series Seed Authorized Shares', template: 'Standard Delaware Board Action', requestedBy: 'Garry Tan (Initialized)', requestedOn: 'Aug 12, 2026', uploadedOn: 'Aug 14, 2026', status: 'Fulfilled' }
      ],
      history: [
        { id: 'hist-41', user: 'Garry Tan (Initialized)', action: 'Viewed 2026_Stock_Incentive_Plan_Option_Pool_Summary.pdf', time: 'Aug 15, 2026 · 02:22 PM', location: 'San Francisco, US (198.51.100.22)' }
      ]
    }
  ];

  window.WATCH_DATA_ROOMS_DATA = INITIAL_VAULTS_DATA;

  let currentActiveVaultId = null;
  let currentVdrView = 'grid';
  let currentVdrSearch = '';
  let currentVdrCategory = 'all';
  let currentDeepTab = 'documents';
  let activeAnalyticsDoc = null;
  let selectedViewerId = null;

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 02. MAIN RENDER CONTROLLER
  // ──────────────────────────────────────────────────────────────────────────
  function renderWatchDataRoomsPage() {
    const root = document.getElementById('vdrRoot');
    if (!root) return;

    if (currentActiveVaultId) {
      renderDeepVaultExplorer(currentActiveVaultId);
    } else {
      renderVaultsListView();
    }
  }
  window.renderWatchDataRoomsPage = renderWatchDataRoomsPage;
  window.renderWatchDataRooms = renderWatchDataRoomsPage;

  // ──────────────────────────────────────────────────────────────────────────
  // 03. VAULTS LIST VIEW (GOOGLE DRIVE GRID OR CONDENSED TABLE)
  // ──────────────────────────────────────────────────────────────────────────
  function renderVaultsListView() {
    const root = document.getElementById('vdrRoot');
    if (!root) return;

    const allVaults = window.WATCH_DATA_ROOMS_DATA || [];
    const activeVaults = allVaults.filter(v => !v.isArchived).length;

    root.innerHTML = `
      <!-- Surface Header Toolbar -->
      <div class="vdr-surface-toolbar">
        <div class="vdr-toolbar-left">
          <div class="vdr-page-heading">
            <h1 class="vdr-main-title">
              <span>Watch Data Rooms</span>
            </h1>
            <span class="vdr-count-badge">${activeVaults}</span>
          </div>
        </div>

        <div class="vdr-toolbar-right">
          <!-- Search Input -->
          <div class="vdr-search-box">
            <i data-lucide="search" class="vdr-search-icon"></i>
            <input type="text" class="vdr-search-input" placeholder="Search data rooms..." value="${escapeHtml(currentVdrSearch)}" oninput="handleVdrSearch(this.value)" />
          </div>

          <!-- Category Dropdown Filter -->
          <select class="vdr-filter-dropdown" onchange="handleVdrCategoryChange(this.value)">
            <option value="all" ${currentVdrCategory === 'all' ? 'selected' : ''}>All Categories</option>
            <option value="Seed Round" ${currentVdrCategory === 'Seed Round' ? 'selected' : ''}>Seed Round</option>
            <option value="Series A" ${currentVdrCategory === 'Series A' ? 'selected' : ''}>Series A</option>
            <option value="IP & Patents" ${currentVdrCategory === 'IP & Patents' ? 'selected' : ''}>IP &amp; Patents</option>
            <option value="Financials & Audit" ${currentVdrCategory === 'Financials & Audit' ? 'selected' : ''}>Financials &amp; Audit</option>
            <option value="Legal & Cap Table" ${currentVdrCategory === 'Legal & Cap Table' ? 'selected' : ''}>Legal &amp; Cap Table</option>
            <option value="Commercial Contracts" ${currentVdrCategory === 'Commercial Contracts' ? 'selected' : ''}>Commercial Contracts</option>
          </select>

          <!-- View Switcher (Grid vs Table) -->
          <div class="vdr-view-switcher">
            <button class="vdr-view-btn ${currentVdrView === 'grid' ? 'active' : ''}" onclick="handleVdrViewChange('grid', this)" title="Google Drive Grid View">
              <i data-lucide="layout-grid" style="width:13px; height:13px;"></i>
              <span>Grid</span>
            </button>
            <button class="vdr-view-btn ${currentVdrView === 'table' ? 'active' : ''}" onclick="handleVdrViewChange('table', this)" title="Condensed Table View">
              <i data-lucide="list" style="width:13px; height:13px;"></i>
              <span>Table</span>
            </button>
          </div>

          <!-- Create New Vault Button -->
          <button class="btn btn-primary" onclick="openVdrDrawer()" style="gap:6px; padding:6px 12px; font-size:12px; background:#141413; color:#FFFFFF; border:none; border-radius:6px; cursor:pointer; display:inline-flex; align-items:center;">
            <i data-lucide="plus" style="width:13px; height:13px;"></i>
            <span>Create new vault</span>
          </button>
        </div>
      </div>

      <!-- Data Rooms Container -->
      <div id="vdrContentContainer" style="margin-top:2px;"></div>
    `;

    if (typeof lucide !== 'undefined') lucide.createIcons();
    filterAndRenderWatchDataRooms();
  }

  function filterAndRenderWatchDataRooms() {
    const container = document.getElementById('vdrContentContainer');
    if (!container) return;

    let list = [...(window.WATCH_DATA_ROOMS_DATA || [])];

    if (currentVdrSearch.trim()) {
      const q = currentVdrSearch.toLowerCase().trim();
      list = list.filter(v =>
        v.name.toLowerCase().includes(q) ||
        (v.category && v.category.toLowerCase().includes(q))
      );
    }

    if (currentVdrCategory !== 'all') {
      list = list.filter(v => v.category === currentVdrCategory);
    }

    if (list.length === 0) {
      container.innerHTML = `
        <div style="background:#FFFFFF; border:1px solid var(--border-main); border-radius:10px; padding:48px 20px; text-align:center;">
          <div style="width:38px; height:38px; border-radius:50%; background:#EDEDED; display:inline-flex; align-items:center; justify-content:center; margin-bottom:10px;">
            <i data-lucide="folder" style="width:18px; height:18px; color:var(--text-muted);"></i>
          </div>
          <h4 style="font-size:14px; font-weight:800; color:var(--text-dark); margin:0 0 4px;">No data rooms found</h4>
          <p style="font-size:12px; color:var(--text-muted); max-width:360px; margin:0 auto 14px;">Try a different search term or create a new vault.</p>
          <button class="btn btn-outline" onclick="openVdrDrawer()" style="font-size:12px; padding:5px 12px; border-radius:6px; cursor:pointer;">
            <i data-lucide="plus" style="width:12px; height:12px;"></i>
            <span>Create new vault</span>
          </button>
        </div>`;
      if (typeof lucide !== 'undefined') lucide.createIcons();
      return;
    }

    if (currentVdrView === 'grid') {
      renderVdrGridView(list, container);
    } else {
      renderVdrTableView(list, container);
    }
  }

  // ──────────────────────────────────────────────────────────────────────────
  // GOOGLE DRIVE MONOCHROME FOLDER GRID VIEW
  // ──────────────────────────────────────────────────────────────────────────
  function renderVdrGridView(vaults, container) {
    container.innerHTML = `
      <div class="vdr-folder-big-grid">
        ${vaults.map(v => {
          const docs = v.documents || [];
          let totalSizeMB = 0;
          docs.forEach(d => {
            const sz = parseFloat(d.size) || 2.5;
            totalSizeMB += sz;
          });
          const sizeDisplay = totalSizeMB > 0 ? `${totalSizeMB.toFixed(1)} MB` : '12.4 MB';

          return `
            <div class="vdr-folder-big-card" id="vdr-card-${v.id}" onclick="navigateToVaultDetail('${v.id}')">
              
              <!-- Three dots options menu -->
              <div class="vdr-folder-card-menu-wrap" onclick="event.stopPropagation();">
                <button class="vdr-dot-menu-btn" onclick="toggleVdrDotMenu('${v.id}', event)" title="Options">
                  <i data-lucide="more-vertical" style="width:13px; height:13px;"></i>
                </button>

                <div class="vdr-context-menu" id="vdr-menu-${v.id}">
                  <button class="vdr-menu-item" onclick="editVdrVault('${v.id}', event)">
                    <i data-lucide="edit-3" style="width:13px; height:13px;"></i>
                    <span>Edit Vault</span>
                  </button>
                  <button class="vdr-menu-item" onclick="openVdrShareDrawer('${v.id}', event)">
                    <i data-lucide="share-2" style="width:13px; height:13px;"></i>
                    <span>Share to Investor</span>
                  </button>
                  <button class="vdr-menu-item" onclick="copyVdrShareLink('${v.id}', event)">
                    <i data-lucide="link" style="width:13px; height:13px;"></i>
                    <span>Copy Link</span>
                  </button>
                  <button class="vdr-menu-item" onclick="archiveVdrVault('${v.id}', event)">
                    <i data-lucide="${v.isArchived ? 'rotate-ccw' : 'archive'}" style="width:13px; height:13px;"></i>
                    <span>${v.isArchived ? 'Unarchive' : 'Archive'}</span>
                  </button>
                  <div class="vdr-menu-divider"></div>
                  <button class="vdr-menu-item danger" onclick="deleteVdrVault('${v.id}', event)">
                    <i data-lucide="trash-2" style="width:13px; height:13px;"></i>
                    <span>Delete Vault</span>
                  </button>
                </div>
              </div>

              <!-- Monochrome Black, White & Neutral Folder Graphic -->
              <div class="vdr-folder-card-graphic">
                <svg class="vdr-folder-big-svg" viewBox="0 0 96 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <!-- Top white document sheet with subtle grey lines -->
                  <rect x="26" y="7" width="44" height="24" rx="3.5" fill="#FFFFFF" stroke="#D4D4CE" stroke-width="1.2"/>
                  <line x1="33" y1="13" x2="55" y2="13" stroke="#D4D4CE" stroke-width="1.2" stroke-linecap="round"/>
                  <line x1="33" y1="18" x2="46" y2="18" stroke="#E5E5E0" stroke-width="1.2" stroke-linecap="round"/>
                  
                  <!-- Back neutral folder tab -->
                  <path d="M8 17C8 12.5817 11.5817 9 16 9H34C36.2 9 38.3 10.1 39.5 11.9L42.5 16.1C43.7 17.9 45.8 19 48 19H80C84.4183 19 88 22.5817 88 27V60C88 64.4183 84.4183 68 80 68H16C11.5817 68 8 64.4183 8 60V17Z" fill="#D4D4CE"/>
                  
                  <!-- Front neutral folder body -->
                  <path d="M8 25C8 20.5817 11.5817 17 16 17H80C84.4183 17 88 20.5817 88 25V60C88 64.4183 84.4183 68 80 68H16C11.5817 68 8 64.4183 8 60V25Z" fill="#EAEAE7" stroke="#D4D4CE" stroke-width="1"/>
                  
                  <!-- Front top lip highlight line -->
                  <line x1="16" y1="18" x2="80" y2="18" stroke="#F5F5F3" stroke-width="1.5" stroke-linecap="round"/>
                  
                  <!-- Subtle minimal monochrome lock emblem -->
                  <path d="M48 37C45.7909 37 44 38.7909 44 41V43H42C40.8954 43 40 43.8954 40 45V51C40 52.1046 40.8954 53 42 53H54C55.1046 53 56 52.1046 56 51V45C56 43.8954 55.1046 43 54 43H52V41C52 38.7909 50.2091 37 48 37ZM46 41C46 39.8954 46.8954 39 48 39C49.1046 39 50 39.8954 50 41V43H46V41Z" fill="#141413" fill-opacity="0.3"/>
                </svg>
              </div>

              <!-- Single-Line Folder Name & Size (Zero Truncation) -->
              <div class="vdr-folder-card-meta">
                <span class="vdr-folder-card-name">${escapeHtml(v.name)}</span>
                <span class="vdr-folder-card-size">${sizeDisplay}</span>
              </div>

            </div>
          `;
        }).join('')}
      </div>
    `;

    if (typeof lucide !== 'undefined') lucide.createIcons();
  }

  // ──────────────────────────────────────────────────────────────────────────
  // CONDENSED TABLE VIEW
  // ──────────────────────────────────────────────────────────────────────────
  function renderVdrTableView(vaults, container) {
    container.innerHTML = `
      <div class="vdr-condensed-table-card">
        <div class="vdr-table-responsive">
          <table class="vdr-condensed-table">
            <thead>
              <tr>
                <th>VDR Name</th>
                <th>Created On</th>
                <th>Last Modified</th>
                <th>Shared Investors</th>
                <th style="text-align:right; width:48px;"></th>
              </tr>
            </thead>
            <tbody>
              ${vaults.map(v => `
                <tr id="vdr-row-${v.id}" onclick="navigateToVaultDetail('${v.id}')" style="cursor:pointer;">
                  <td>
                    <div class="vdr-cell-name">
                      <svg style="width:16px; height:16px; color:var(--text-dark); flex-shrink:0;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                      </svg>
                      <span>${escapeHtml(v.name)}</span>
                    </div>
                  </td>
                  <td class="vdr-cell-date">${v.createdOn}</td>
                  <td class="vdr-cell-date">${v.lastModified}</td>
                  <td><span class="vdr-cell-investor-num">${v.investorsCount}</span></td>
                  <td style="text-align:right; position:relative;" onclick="event.stopPropagation();">
                    <button class="vdr-dot-menu-btn" onclick="toggleVdrDotMenu('${v.id}', event)" title="Options">
                      <i data-lucide="more-vertical" style="width:14px; height:14px;"></i>
                    </button>

                    <div class="vdr-context-menu" id="vdr-menu-${v.id}">
                      <button class="vdr-menu-item" onclick="editVdrVault('${v.id}', event)">
                        <i data-lucide="edit-3" style="width:13px; height:13px;"></i>
                        <span>Edit Vault</span>
                      </button>
                      <button class="vdr-menu-item" onclick="openVdrShareDrawer('${v.id}', event)">
                        <i data-lucide="share-2" style="width:13px; height:13px;"></i>
                        <span>Share to Investor</span>
                      </button>
                      <button class="vdr-menu-item" onclick="copyVdrShareLink('${v.id}', event)">
                        <i data-lucide="link" style="width:13px; height:13px;"></i>
                        <span>Copy Link</span>
                      </button>
                      <button class="vdr-menu-item" onclick="archiveVdrVault('${v.id}', event)">
                        <i data-lucide="${v.isArchived ? 'rotate-ccw' : 'archive'}" style="width:13px; height:13px;"></i>
                        <span>${v.isArchived ? 'Unarchive' : 'Archive'}</span>
                      </button>
                      <div class="vdr-menu-divider"></div>
                      <button class="vdr-menu-item danger" onclick="deleteVdrVault('${v.id}', event)">
                        <i data-lucide="trash-2" style="width:13px; height:13px;"></i>
                        <span>Delete Vault</span>
                      </button>
                    </div>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;

    if (typeof lucide !== 'undefined') lucide.createIcons();
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 04. DEEP VAULT EXPLORER (ONE-ROW TABS & ACTIONS, CONDENSED TABLES)
  // ──────────────────────────────────────────────────────────────────────────
  window.navigateToVaultDetail = function(vaultId) {
    currentActiveVaultId = vaultId;
    currentDeepTab = 'documents';
    renderWatchDataRoomsPage();
  };

  window.navigateBackToVaultsList = function() {
    currentActiveVaultId = null;
    renderWatchDataRoomsPage();
  };

  function renderDeepVaultExplorer(vaultId) {
    const root = document.getElementById('vdrRoot');
    if (!root) return;

    const vault = (window.WATCH_DATA_ROOMS_DATA || []).find(v => v.id === vaultId);
    if (!vault) {
      root.innerHTML = `
        <div style="padding:40px; text-align:center;">
          <h3>Vault not found</h3>
          <button class="btn btn-outline" onclick="navigateBackToVaultsList()">← Back to Data Rooms</button>
        </div>`;
      return;
    }

    const docs = vault.documents || [];
    const sharedUsers = vault.sharedUsers || [];
    const requestedDocs = vault.requestedDocs || [];

    root.innerHTML = `
      <!-- Back Breadcrumb Button -->
      <div style="display:flex; align-items:center; gap:8px; margin-bottom:2px;">
        <button class="btn btn-outline" onclick="navigateBackToVaultsList()" style="gap:5px; font-size:12px; padding:4.5px 10px; border-radius:6px; cursor:pointer;">
          <i data-lucide="arrow-left" style="width:13px; height:13px;"></i>
          <span>All Vaults</span>
        </button>
        <span style="color:var(--text-muted); font-size:12px;">/</span>
        <span style="font-weight:700; font-size:13.5px; color:var(--text-dark);">${escapeHtml(vault.name)}</span>
      </div>

      <!-- Top Row: Tabs (Left) & Actions (Right) in a single streamlined row -->
      <div class="vdr-deep-toolbar-row">
        
        <div class="vdr-deep-tabs-bar">
          <button class="vdr-tab-btn ${currentDeepTab === 'documents' ? 'active' : ''}" onclick="switchDeepTab('documents')">
            <span>Documents (${docs.length})</span>
          </button>
          <button class="vdr-tab-btn ${currentDeepTab === 'shared' ? 'active' : ''}" onclick="switchDeepTab('shared')">
            <span>Shared Users (${sharedUsers.length})</span>
          </button>
          <button class="vdr-tab-btn ${currentDeepTab === 'requests' ? 'active' : ''}" onclick="switchDeepTab('requests')">
            <span>Requested Documents (${requestedDocs.length})</span>
          </button>
          <button class="vdr-tab-btn ${currentDeepTab === 'settings' ? 'active' : ''}" onclick="switchDeepTab('settings')">
            <span>Settings</span>
          </button>
          <button class="vdr-tab-btn ${currentDeepTab === 'history' ? 'active' : ''}" onclick="switchDeepTab('history')">
            <span>History</span>
          </button>
        </div>

        <div class="vdr-deep-actions-right">
          <button class="btn btn-outline" onclick="openUploadDocModal('${vault.id}')" style="gap:5px; font-size:12px; padding:5px 11px; border-radius:6px; cursor:pointer;">
            <i data-lucide="upload-cloud" style="width:13px; height:13px;"></i>
            <span>Upload Document</span>
          </button>
          <button class="btn btn-primary" onclick="openVdrShareDrawer('${vault.id}')" style="gap:5px; font-size:12px; padding:5.5px 12px; background:#141413; color:#FFFFFF; border:none; border-radius:6px; cursor:pointer; display:inline-flex; align-items:center;">
            <i data-lucide="user-plus" style="width:13px; height:13px;"></i>
            <span>Share to investor</span>
          </button>
        </div>

      </div>

      <!-- Active Tab Dynamic Content Area -->
      <div id="deepTabContentArea" style="margin-top:2px;">
        ${renderActiveDeepTabContent(vault)}
      </div>
    `;

    if (typeof lucide !== 'undefined') lucide.createIcons();
  }

  window.switchDeepTab = function(tabName) {
    currentDeepTab = tabName;
    const vault = (window.WATCH_DATA_ROOMS_DATA || []).find(v => v.id === currentActiveVaultId);
    if (vault) {
      renderDeepVaultExplorer(vault.id);
    }
  };

  function renderActiveDeepTabContent(vault) {
    if (currentDeepTab === 'documents') {
      return renderDeepDocumentsTable(vault);
    } else if (currentDeepTab === 'shared') {
      return renderDeepSharedUsersTable(vault);
    } else if (currentDeepTab === 'requests') {
      return renderDeepRequestedDocsTable(vault);
    } else if (currentDeepTab === 'settings') {
      return renderDeepSettingsSurface(vault);
    } else if (currentDeepTab === 'history') {
      return renderDeepHistoryTable(vault);
    }
    return '';
  }

  // TAB 1: DOCUMENTS TABLE
  function renderDeepDocumentsTable(vault) {
    const docs = vault.documents || [];

    if (docs.length === 0) {
      return `
        <div style="background:#FFFFFF; border:1px solid var(--border-main); border-radius:10px; padding:48px 20px; text-align:center;">
          <h4 style="font-size:14px; font-weight:800; color:var(--text-dark); margin:0 0 4px;">No documents uploaded yet</h4>
          <p style="font-size:12px; color:var(--text-muted); max-width:360px; margin:0 auto 14px;">Upload due diligence materials, financial audits, or cap tables for investors.</p>
          <button class="btn btn-primary" onclick="openUploadDocModal('${vault.id}')" style="font-size:12px; padding:5px 12px; border-radius:6px; cursor:pointer;">
            <i data-lucide="upload" style="width:12px; height:12px;"></i>
            <span>Upload Document</span>
          </button>
        </div>`;
    }

    return `
      <div class="vdr-condensed-table-card">
        <div class="vdr-table-responsive">
          <table class="vdr-condensed-table">
            <thead>
              <tr>
                <th>Document Name</th>
                <th>Document Type</th>
                <th>Date</th>
                <th>Size</th>
                <th>Analytics</th>
                <th style="text-align:right; width:48px;"></th>
              </tr>
            </thead>
            <tbody>
              ${docs.map(doc => `
                <tr id="vdr-doc-row-${doc.id}">
                  <td>
                    <div class="vdr-cell-name">
                      <i data-lucide="${doc.format === 'xlsx' ? 'file-spreadsheet' : 'file-text'}" style="width:14px; height:14px; color:var(--text-dark); flex-shrink:0;"></i>
                      <span class="vdr-doc-name-clickable" onclick="previewVdrDoc('${doc.id}', '${vault.id}')" style="cursor:pointer;" title="Preview Document">${escapeHtml(doc.name)}</span>
                    </div>
                  </td>
                  <td style="color:var(--text-muted); font-size:11.5px;">${escapeHtml(doc.type)}</td>
                  <td class="vdr-cell-date">${doc.date}</td>
                  <td style="font-size:11.5px; color:var(--text-muted); font-variant-numeric:tabular-nums;">${doc.size}</td>
                  <td>
                    <div class="vdr-analytics-cell-group">
                      <button class="vdr-analytics-chip" onclick="openDocumentAnalytics('${vault.id}', '${doc.id}')" title="View heatmaps & per-page reading analytics">
                        <i data-lucide="bar-chart-2" style="width:11px; height:11px;"></i>
                        <span>${doc.views || 24} views</span>
                      </button>
                      <button class="vdr-doc-view-btn" onclick="previewVdrDoc('${doc.id}', '${vault.id}')" title="Preview Document">
                        <i data-lucide="eye" style="width:13px; height:13px;"></i>
                      </button>
                    </div>
                  </td>
                  <td style="text-align:right; position:relative;" onclick="event.stopPropagation();">
                    <button class="vdr-dot-menu-btn" onclick="toggleDocDotMenu('${doc.id}', event)" title="Document options">
                      <i data-lucide="more-vertical" style="width:13px; height:13px;"></i>
                    </button>
                    <div class="vdr-context-menu" id="doc-menu-${doc.id}">
                      <button class="vdr-menu-item" onclick="previewVdrDoc('${doc.id}', '${vault.id}')">
                        <i data-lucide="eye" style="width:12px; height:12px;"></i>
                        <span>Preview</span>
                      </button>
                      <button class="vdr-menu-item" onclick="openDocumentAnalytics('${vault.id}', '${doc.id}')">
                        <i data-lucide="bar-chart-2" style="width:12px; height:12px;"></i>
                        <span>Analytics</span>
                      </button>
                      <button class="vdr-menu-item" onclick="downloadVdrDoc('${doc.id}', '${vault.id}')">
                        <i data-lucide="download" style="width:12px; height:12px;"></i>
                        <span>Download</span>
                      </button>
                      <div class="vdr-menu-divider"></div>
                      <button class="vdr-menu-item danger" onclick="deleteVdrDoc('${vault.id}', '${doc.id}')">
                        <i data-lucide="trash-2" style="width:12px; height:12px;"></i>
                        <span>Delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // TAB 2: SHARED USERS TABLE
  function renderDeepSharedUsersTable(vault) {
    const shared = vault.sharedUsers || [];
    return `
      <div class="vdr-condensed-table-card">
        <div class="vdr-table-responsive">
          <table class="vdr-condensed-table">
            <thead>
              <tr>
                <th>User / VC Name</th>
                <th>Email Address</th>
                <th>Access Granted On</th>
                <th>Status</th>
                <th style="text-align:right; width:48px;"></th>
              </tr>
            </thead>
            <tbody>
              ${shared.length === 0 ? `
                <tr><td colspan="5" style="text-align:center; padding:32px; color:var(--vdr-text-muted);">No shared users yet.</td></tr>
              ` : shared.map(u => {
                const isRevoked = !!u.isRevoked;
                return `
                <tr id="vdr-user-row-${u.id}" class="${isRevoked ? 'vdr-row-revoked' : ''}">
                  <td>
                    <div class="vdr-cell-name" style="${isRevoked ? 'color:#991B1B;' : ''}">
                      <i data-lucide="user" style="width:13.5px; height:13.5px; color:${isRevoked ? '#DC2626' : 'var(--vdr-text-muted)'}; flex-shrink:0;"></i>
                      <span style="${isRevoked ? 'text-decoration:line-through; opacity:0.85;' : ''}">${escapeHtml(u.name)}</span>
                    </div>
                  </td>
                  <td style="font-size:12px; color:${isRevoked ? '#991B1B' : 'var(--vdr-text-muted)'};">
                    <code>${escapeHtml(u.email)}</code>
                  </td>
                  <td class="vdr-cell-date" style="${isRevoked ? 'color:#991B1B;' : ''}">${u.accessGivenOn}</td>
                  <td>
                    ${isRevoked 
                      ? '<span class="vdr-status-badge revoked"><i data-lucide="shield-alert" style="width:10px; height:10px;"></i> Access Revoked</span>'
                      : '<span class="vdr-status-badge fulfilled"><i data-lucide="check-circle" style="width:10px; height:10px;"></i> Active Access</span>'}
                  </td>
                  <td style="text-align:right; position:relative;" onclick="event.stopPropagation();">
                    <button class="vdr-dot-menu-btn" onclick="toggleUserDotMenu('${u.id}', event)" title="Options">
                      <i data-lucide="more-vertical" style="width:13px; height:13px;"></i>
                    </button>

                    <div class="vdr-context-menu" id="usr-menu-${u.id}">
                      ${isRevoked ? `
                        <button class="vdr-menu-item" onclick="restoreUserAccess('${vault.id}', '${u.id}', event)">
                          <i data-lucide="rotate-ccw" style="width:12px; height:12px;"></i>
                          <span>Restore Access</span>
                        </button>
                      ` : `
                        <button class="vdr-menu-item danger" onclick="confirmRevokeUserAccess('${vault.id}', '${u.id}', '${escapeHtml(u.name)}', event)">
                          <i data-lucide="user-x" style="width:12px; height:12px;"></i>
                          <span>Revoke Access</span>
                        </button>
                      `}
                      <button class="vdr-menu-item" onclick="copyVdrShareLink('${vault.id}', event)">
                        <i data-lucide="link" style="width:12px; height:12px;"></i>
                        <span>Copy Access Link</span>
                      </button>
                    </div>
                  </td>
                </tr>
              `;}).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // TAB 3: REQUESTED DOCS TABLE
  function renderDeepRequestedDocsTable(vault) {
    const requests = vault.requestedDocs || [];
    return `
      <div class="vdr-condensed-table-card">
        <div class="vdr-table-responsive">
          <table class="vdr-condensed-table">
            <thead>
              <tr>
                <th>Requested Document</th>
                <th>Template / Format</th>
                <th>Requested By</th>
                <th>Requested On</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${requests.length === 0 ? `
                <tr><td colspan="5" style="text-align:center; padding:32px; color:var(--text-muted);">No requested documents.</td></tr>
              ` : requests.map(r => `
                <tr>
                  <td><div class="vdr-cell-name"><span>${escapeHtml(r.title)}</span></div></td>
                  <td><span style="font-size:11.5px; color:var(--text-muted);">${escapeHtml(r.template)}</span></td>
                  <td><span style="font-size:12px; font-weight:600;">${escapeHtml(r.requestedBy)}</span></td>
                  <td class="vdr-cell-date">${r.requestedOn}</td>
                  <td>
                    ${r.status === 'Fulfilled' 
                      ? '<span class="vdr-status-badge fulfilled"><i data-lucide="check" style="width:10px; height:10px;"></i> Fulfilled</span>' 
                      : '<span class="vdr-status-badge pending">Pending Upload</span>'}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // TAB 4: SETTINGS SURFACE
  function renderDeepSettingsSurface(vault) {
    return `
      <div class="vdr-surface-settings-list">
        <div class="vdr-surface-setting-row">
          <div class="vdr-setting-text">
            <span class="vdr-setting-title">Domain Restriction Lock</span>
            <span class="vdr-setting-desc">Restrict vault entry exclusively to approved partner or VC firm email domains (${vault.allowedDomains || 'No domain lock'}).</span>
          </div>
          <label class="switch-input">
            <input type="checkbox" ${vault.domainLock ? 'checked' : ''} onchange="toggleVaultSetting('${vault.id}', 'domainLock', this.checked)" />
            <span class="switch-slider"></span>
          </label>
        </div>

        <div class="vdr-surface-setting-row">
          <div class="vdr-setting-text">
            <span class="vdr-setting-title">Enforce Mutual NDA Digital Signature</span>
            <span class="vdr-setting-desc">Require visitors to sign the Seedicon Mutual NDA before data room files can be viewed or downloaded.</span>
          </div>
          <label class="switch-input">
            <input type="checkbox" ${vault.requireNda ? 'checked' : ''} onchange="toggleVaultSetting('${vault.id}', 'requireNda', this.checked)" />
            <span class="switch-slider"></span>
          </label>
        </div>

        <div class="vdr-surface-setting-row">
          <div class="vdr-setting-text">
            <span class="vdr-setting-title">Dynamic Watermarking Protection</span>
            <span class="vdr-setting-desc">Stamps every page with visitor's email, IP address, and timestamp upon viewing.</span>
          </div>
          <span class="vdr-status-badge fulfilled">Active</span>
        </div>
      </div>
    `;
  }

  // TAB 5: HISTORY TABLE
  function renderDeepHistoryTable(vault) {
    const logs = vault.history || [];
    return `
      <div class="vdr-condensed-table-card">
        <div class="vdr-table-responsive">
          <table class="vdr-condensed-table">
            <thead>
              <tr>
                <th>User / Actor</th>
                <th>Action Performed</th>
                <th>Time</th>
                <th>Location &amp; IP</th>
              </tr>
            </thead>
            <tbody>
              ${logs.map(h => `
                <tr>
                  <td><div class="vdr-cell-name"><span>${escapeHtml(h.user)}</span></div></td>
                  <td><span style="font-size:12px;">${escapeHtml(h.action)}</span></td>
                  <td class="vdr-cell-date">${h.time}</td>
                  <td style="font-size:11.5px; color:var(--text-muted);">${escapeHtml(h.location)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 05. DRAWERS & MODALS (CREATE VAULT, SHARE, ANALYTICS, UPLOAD)
  // ──────────────────────────────────────────────────────────────────────────
  function ensureVdrDrawers() {
    if (document.getElementById('vdrDrawerBackdrop')) return;

    const div = document.createElement('div');
    div.innerHTML = `
      <!-- 01. CREATE / EDIT VAULT DRAWER -->
      <div class="vdr-drawer-backdrop" id="vdrDrawerBackdrop" onclick="handleVdrDrawerBackdropClick(event)">
        <div class="vdr-drawer-card">
          <div class="vdr-drawer-header">
            <div class="vdr-drawer-title-group">
              <div class="vdr-drawer-icon">
                <i data-lucide="folder-plus" style="width:16px; height:16px;"></i>
              </div>
              <span class="vdr-drawer-title" id="vdrDrawerHeading">Create New Vault</span>
            </div>
            <button class="vdr-drawer-close-btn" onclick="closeVdrDrawer()" title="Close Drawer">
              <i data-lucide="x" style="width:16px; height:16px;"></i>
            </button>
          </div>

          <form id="vdrVaultForm" onsubmit="handleVdrFormSubmit(event)" class="vdr-drawer-body">
            <input type="hidden" id="vdrEditVaultId" value="" />

            <div class="vdr-field-group">
              <label class="vdr-field-label" for="vdrVaultNameInput">
                <span>Vault Name <span style="color:#DC2626;">*</span></span>
              </label>
              <input type="text" id="vdrVaultNameInput" class="vdr-input-text" placeholder="e.g. Series Seed Lead Diligence Vault" required />
            </div>

            <div class="vdr-toggle-box">
              <div class="vdr-toggle-head" onclick="toggleDomainSwitch()">
                <div class="vdr-toggle-text">
                  <span class="vdr-toggle-title">Only allow access from specific email domain?</span>
                  <span class="vdr-toggle-sub">Restrict entry exclusively to approved partner or VC firm email domains.</span>
                </div>
                <label class="switch-input" onclick="event.stopPropagation();">
                  <input type="checkbox" id="vdrDomainToggle" onchange="handleDomainToggleChange(this.checked)" />
                  <span class="switch-slider"></span>
                </label>
              </div>

              <div class="vdr-toggle-expand" id="vdrDomainExpand">
                <label class="vdr-field-label" for="vdrAllowedDomainsInput" style="font-size:11px;">
                  <span>Allowed Email Domains</span>
                </label>
                <input type="text" id="vdrAllowedDomainsInput" class="vdr-input-text" placeholder="e.g. accel.com, sequoiacap.com" />
              </div>
            </div>

            <div class="vdr-toggle-box">
              <div class="vdr-toggle-head" onclick="toggleNdaSwitch()">
                <div class="vdr-toggle-text">
                  <span class="vdr-toggle-title">Require visitors to sign NDA before access?</span>
                  <span class="vdr-toggle-sub">Enforces digital signature on your mutual NDA before data room files can be viewed.</span>
                </div>
                <label class="switch-input" onclick="event.stopPropagation();">
                  <input type="checkbox" id="vdrNdaToggle" checked onchange="handleNdaToggleChange(this.checked)" />
                  <span class="switch-slider"></span>
                </label>
              </div>
            </div>

            <div class="vdr-drawer-footer" style="margin-top:auto;">
              <button type="button" class="btn btn-outline" onclick="closeVdrDrawer()" style="padding:6px 12px; font-size:12px; border-radius:6px; cursor:pointer;">Cancel</button>
              <button type="submit" class="btn btn-primary" id="vdrSubmitBtn" style="gap:6px; padding:6px 14px; font-size:12px; background:#141413; color:#FFFFFF; border:none; border-radius:6px; cursor:pointer;">
                <i data-lucide="check" style="width:13px; height:13px;"></i>
                <span id="vdrSubmitBtnText">Create Vault</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- 02. SHARE TO INVESTOR DRAWER -->
      <div class="vdr-drawer-backdrop" id="vdrShareDrawerBackdrop" onclick="handleVdrShareBackdropClick(event)">
        <div class="vdr-drawer-card">
          <div class="vdr-drawer-header">
            <div class="vdr-drawer-title-group">
              <div class="vdr-drawer-icon">
                <i data-lucide="user-plus" style="width:16px; height:16px;"></i>
              </div>
              <span class="vdr-drawer-title">Share Vault with Investor</span>
            </div>
            <button class="vdr-drawer-close-btn" onclick="closeVdrShareDrawer()" title="Close Drawer">
              <i data-lucide="x" style="width:16px; height:16px;"></i>
            </button>
          </div>

          <form id="vdrShareForm" onsubmit="handleVdrShareSubmit(event)" class="vdr-drawer-body">
            <div class="vdr-field-group">
              <label class="vdr-field-label" for="vdrShareInvestorName">
                <span>Investor Name</span>
                <span style="font-size:11px; font-weight:normal; color:var(--text-light);">(Optional)</span>
              </label>
              <input type="text" id="vdrShareInvestorName" class="vdr-input-text" placeholder="e.g. Elena Rostova" />
            </div>

            <div class="vdr-field-group">
              <label class="vdr-field-label" for="vdrShareInvestorType">
                <span>Type of Investor</span>
              </label>
              <select id="vdrShareInvestorType" class="vdr-input-text" style="cursor:pointer;">
                <option value="Lead VC">Lead VC (Institutional)</option>
                <option value="Follow-on VC">Follow-on VC</option>
                <option value="Angel Investor">Angel Investor</option>
                <option value="Family Office">Family Office</option>
                <option value="Corporate VC">Corporate VC (CVC)</option>
              </select>
            </div>

            <div class="vdr-field-group">
              <label class="vdr-field-label" for="vdrShareInvestorEmail">
                <span>Investor Email <span style="color:#DC2626;">*</span></span>
              </label>
              <input type="email" id="vdrShareInvestorEmail" class="vdr-input-text" placeholder="e.g. elena@accel.com" required />
            </div>

            <div style="background:#FAFAF9; border:1px solid var(--border-main); border-radius:8px; padding:10px 12px; font-size:11.5px; color:var(--text-muted); line-height:1.4;">
              <span style="font-weight:700; color:var(--text-dark);">🔒 Protection Guarantee:</span> The recipient will receive an encrypted access link and must digitally execute the mutual NDA before files can be viewed or downloaded.
            </div>

            <div class="vdr-drawer-footer" style="margin-top:auto;">
              <button type="button" class="btn btn-outline" onclick="closeVdrShareDrawer()" style="padding:6px 12px; font-size:12px; border-radius:6px; cursor:pointer;">Cancel</button>
              <button type="submit" class="btn btn-primary" style="gap:6px; padding:6px 14px; font-size:12px; background:#141413; color:#FFFFFF; border:none; border-radius:6px; cursor:pointer;">
                <i data-lucide="send" style="width:13px; height:13px;"></i>
                <span>Share Access Link</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- 03. DOCUMENT ANALYTICS DRAWER -->
      <div class="vdr-drawer-backdrop" id="vdrAnalyticsDrawerBackdrop" onclick="handleVdrAnalyticsBackdropClick(event)">
        <div class="vdr-drawer-card vdr-analytics-drawer-card">
          <div class="vdr-drawer-header">
            <div class="vdr-drawer-title-group" style="min-width:0; flex:1;">
              <div class="vdr-drawer-icon" style="background:#141413;">
                <i data-lucide="bar-chart-2" style="width:16px; height:16px;"></i>
              </div>
              <div style="display:flex; flex-direction:column; min-width:0;">
                <span class="vdr-drawer-title">Document Analytics</span>
                <span id="vdrAnalyticsDocNameHeader" style="font-size:11.5px; color:var(--text-muted); font-weight:600; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:260px;"></span>
              </div>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              <button class="vdr-drawer-close-btn" onclick="closeVdrAnalyticsDrawer()" title="Close Drawer">
                <i data-lucide="x" style="width:16px; height:16px;"></i>
              </button>
            </div>
          </div>

          <div class="vdr-drawer-body vdr-analytics-drawer-body" id="vdrAnalyticsDrawerBody" style="padding:0 !important; margin:0 !important; gap:0 !important; overflow:hidden;"></div>
        </div>
      </div>
    `;

    document.body.appendChild(div);
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 06. GLOBAL ACTION HANDLERS
  // ──────────────────────────────────────────────────────────────────────────
  window.handleVdrSearch = function(val) {
    currentVdrSearch = val || '';
    filterAndRenderWatchDataRooms();
  };

  window.handleVdrCategoryChange = function(cat) {
    currentVdrCategory = cat;
    filterAndRenderWatchDataRooms();
  };

  window.handleVdrViewChange = function(mode, btn) {
    currentVdrView = mode;
    renderVaultsListView();
  };

  window.toggleVdrDotMenu = function(vaultId, e) {
    if (e) e.stopPropagation();
    document.querySelectorAll('.vdr-context-menu').forEach(m => m.classList.remove('show'));
    const menu = document.getElementById(`vdr-menu-${vaultId}`);
    if (menu) menu.classList.toggle('show');
  };

  window.toggleDocDotMenu = function(docId, e) {
    if (e) e.stopPropagation();
    document.querySelectorAll('.vdr-context-menu').forEach(m => m.classList.remove('show'));
    const menu = document.getElementById(`doc-menu-${docId}`);
    if (menu) menu.classList.toggle('show');
  };

  // Close menus on outside click
  document.addEventListener('click', () => {
    document.querySelectorAll('.vdr-context-menu').forEach(m => m.classList.remove('show'));
  });

  // Create / Edit Drawer
  window.openVdrDrawer = function(editId = null) {
    ensureVdrDrawers();
    const bd = document.getElementById('vdrDrawerBackdrop');
    const heading = document.getElementById('vdrDrawerHeading');
    const btnText = document.getElementById('vdrSubmitBtnText');
    const editInput = document.getElementById('vdrEditVaultId');
    const nameInput = document.getElementById('vdrVaultNameInput');
    const domainToggle = document.getElementById('vdrDomainToggle');
    const domainExpand = document.getElementById('vdrDomainExpand');
    const domainsInput = document.getElementById('vdrAllowedDomainsInput');
    const ndaToggle = document.getElementById('vdrNdaToggle');

    if (editId) {
      const v = (window.WATCH_DATA_ROOMS_DATA || []).find(item => item.id === editId);
      if (v) {
        heading.textContent = 'Edit Vault';
        btnText.textContent = 'Save Changes';
        editInput.value = v.id;
        nameInput.value = v.name;
        domainToggle.checked = !!v.domainLock;
        if (v.domainLock) domainExpand.classList.add('show'); else domainExpand.classList.remove('show');
        domainsInput.value = v.allowedDomains || '';
        ndaToggle.checked = !!v.requireNda;
      }
    } else {
      heading.textContent = 'Create New Vault';
      btnText.textContent = 'Create Vault';
      editInput.value = '';
      nameInput.value = '';
      domainToggle.checked = false;
      domainExpand.classList.remove('show');
      domainsInput.value = '';
      ndaToggle.checked = true;
    }

    bd.classList.add('open');
    if (typeof lucide !== 'undefined') lucide.createIcons();
  };

  window.closeVdrDrawer = function() {
    const bd = document.getElementById('vdrDrawerBackdrop');
    if (bd) bd.classList.remove('open');
  };

  window.handleVdrDrawerBackdropClick = function(e) {
    if (e.target.id === 'vdrDrawerBackdrop') closeVdrDrawer();
  };

  window.toggleDomainSwitch = function() {
    const cb = document.getElementById('vdrDomainToggle');
    if (cb) { cb.checked = !cb.checked; handleDomainToggleChange(cb.checked); }
  };

  window.handleDomainToggleChange = function(checked) {
    const expand = document.getElementById('vdrDomainExpand');
    if (expand) {
      if (checked) expand.classList.add('show'); else expand.classList.remove('show');
    }
  };

  window.toggleNdaSwitch = function() {
    const cb = document.getElementById('vdrNdaToggle');
    if (cb) cb.checked = !cb.checked;
  };

  window.handleVdrFormSubmit = function(e) {
    e.preventDefault();
    const editId = document.getElementById('vdrEditVaultId').value;
    const name = document.getElementById('vdrVaultNameInput').value.trim();
    const domainLock = document.getElementById('vdrDomainToggle').checked;
    const allowedDomains = document.getElementById('vdrAllowedDomainsInput').value.trim();
    const requireNda = document.getElementById('vdrNdaToggle').checked;

    if (!name) return;

    if (editId) {
      const v = window.WATCH_DATA_ROOMS_DATA.find(item => item.id === editId);
      if (v) {
        v.name = name;
        v.domainLock = domainLock;
        v.allowedDomains = allowedDomains;
        v.requireNda = requireNda;
        v.lastModified = 'Just now';
      }
      if (window.showToast) window.showToast('Vault updated successfully', 'success');
    } else {
      const newVault = {
        id: 'vdr-' + Date.now(),
        name,
        category: 'Seed Round',
        createdOn: 'Today',
        lastModified: 'Just now',
        investorsCount: 0,
        requireNda,
        domainLock,
        allowedDomains,
        isArchived: false,
        documents: [],
        sharedUsers: [],
        requestedDocs: [],
        history: [{ id: 'hist-' + Date.now(), user: 'Gyan Sharma (Founder)', action: `Created vault "${name}"`, time: 'Just now', location: 'Austin, US' }]
      };
      window.WATCH_DATA_ROOMS_DATA.unshift(newVault);
      if (window.showToast) window.showToast('New vault created successfully', 'success');
    }

    closeVdrDrawer();
    renderWatchDataRoomsPage();
  };

  window.editVdrVault = function(vaultId, e) {
    if (e) e.stopPropagation();
    openVdrDrawer(vaultId);
  };

  window.deleteVdrVault = function(vaultId, e) {
    if (e) e.stopPropagation();
    if (confirm('Are you sure you want to delete this vault?')) {
      window.WATCH_DATA_ROOMS_DATA = window.WATCH_DATA_ROOMS_DATA.filter(v => v.id !== vaultId);
      if (window.showToast) window.showToast('Vault deleted', 'info');
      renderWatchDataRoomsPage();
    }
  };

  window.archiveVdrVault = function(vaultId, e) {
    if (e) e.stopPropagation();
    const v = window.WATCH_DATA_ROOMS_DATA.find(item => item.id === vaultId);
    if (v) {
      v.isArchived = !v.isArchived;
      if (window.showToast) window.showToast(v.isArchived ? 'Vault archived' : 'Vault unarchived', 'info');
      renderWatchDataRoomsPage();
    }
  };

  window.copyVdrShareLink = function(vaultId, e) {
    if (e) e.stopPropagation();
    navigator.clipboard?.writeText(`https://seedicon.com/vdr/access?id=${vaultId}`);
    if (window.showToast) window.showToast('Encrypted access link copied to clipboard', 'success');
  };

  // Share Drawer
  let activeShareVaultId = null;
  window.openVdrShareDrawer = function(vaultId, e) {
    if (e) e.stopPropagation();
    ensureVdrDrawers();
    activeShareVaultId = vaultId || currentActiveVaultId;
    const bd = document.getElementById('vdrShareDrawerBackdrop');
    document.getElementById('vdrShareInvestorName').value = '';
    document.getElementById('vdrShareInvestorEmail').value = '';
    bd.classList.add('open');
    if (typeof lucide !== 'undefined') lucide.createIcons();
  };

  window.closeVdrShareDrawer = function() {
    const bd = document.getElementById('vdrShareDrawerBackdrop');
    if (bd) bd.classList.remove('open');
  };

  window.handleVdrShareBackdropClick = function(e) {
    if (e.target.id === 'vdrShareDrawerBackdrop') closeVdrShareDrawer();
  };

  window.handleVdrShareSubmit = function(e) {
    e.preventDefault();
    const name = document.getElementById('vdrShareInvestorName').value.trim() || 'Investor';
    const email = document.getElementById('vdrShareInvestorEmail').value.trim();
    if (!email) return;

    const vault = (window.WATCH_DATA_ROOMS_DATA || []).find(v => v.id === activeShareVaultId);
    if (vault) {
      vault.sharedUsers = vault.sharedUsers || [];
      vault.sharedUsers.push({
        id: 'usr-' + Date.now(),
        name,
        email,
        accessGivenOn: 'Today',
        ndaSigned: false
      });
      vault.investorsCount = vault.sharedUsers.length;
    }

    closeVdrShareDrawer();
    if (window.showToast) window.showToast(`Access link sent to ${email}`, 'success');
    renderWatchDataRoomsPage();
  };

  // ──────────────────────────────────────────────────────────────────────────
  // 07. DOCUMENT ANALYTICS ENGINE (APEXCHARTS & MULTI-VIEWER PROFILE)
  // ──────────────────────────────────────────────────────────────────────────
  let currentAnalyticsVaultId = null;
  let currentAnalyticsDocId = null;
  let activeAnalyticsViewerId = 'all';
  let currentApexChartInstance = null;

  function getDocAnalyticsData(vaultId, docId) {
    const vault = (window.WATCH_DATA_ROOMS_DATA || []).find(v => v.id === vaultId);
    if (!vault) return null;
    const doc = (vault.documents || []).find(d => d.id === docId);
    if (!doc) return null;

    const pages = [
      'Page 1 (Title & Problem)',
      'Page 2 (Market Opportunity)',
      'Page 3 (Solution & Architecture)',
      'Page 4 (Unit Economics & Margins)',
      'Page 5 (Traction & Cohorts)',
      'Page 6 (Go-To-Market & Pipeline)',
      'Page 7 (Competitive Moat)',
      'Page 8 (Financial Projections & Ask)'
    ];

    const viewers = [
      {
        id: 'usr-1',
        name: 'Elena Rostova',
        firm: 'Accel Partners',
        email: 'elena@accel.com',
        avatarImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&fit=crop&crop=faces',
        views: 6,
        downloads: 2,
        avgTime: '4m 12s',
        totalTime: '25m 12s',
        lastActive: 'Today · 10:45 AM',
        completionRate: 94,
        ndaStatus: 'Signed NDA',
        pageTimes: [14, 28, 22, 58, 46, 32, 26, 26]
      },
      {
        id: 'usr-2',
        name: 'Vikram Mehta',
        firm: 'Matrix Partners',
        email: 'vikram@matrix.com',
        avatarImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=faces',
        views: 4,
        downloads: 1,
        avgTime: '3m 30s',
        totalTime: '14m 00s',
        lastActive: 'Today · 09:12 AM',
        completionRate: 88,
        ndaStatus: 'Signed NDA',
        pageTimes: [10, 20, 18, 44, 38, 28, 24, 28]
      },
      {
        id: 'usr-3',
        name: 'Marc Benioff',
        firm: 'Benioff Holdings',
        email: 'marc@benioffholdings.com',
        avatarImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&crop=faces',
        views: 3,
        downloads: 0,
        avgTime: '2m 15s',
        totalTime: '6m 45s',
        lastActive: 'Yesterday · 04:30 PM',
        completionRate: 75,
        ndaStatus: 'Signed NDA',
        pageTimes: [8, 14, 16, 32, 28, 18, 12, 7]
      },
      {
        id: 'usr-4',
        name: 'David Sacks',
        firm: 'Craft Ventures',
        email: 'david@craftventures.com',
        avatarImg: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=96&h=96&fit=crop&crop=faces',
        views: 2,
        downloads: 1,
        avgTime: '1m 45s',
        totalTime: '3m 30s',
        lastActive: 'Aug 22 · 02:40 PM',
        completionRate: 62,
        ndaStatus: 'Signed NDA',
        pageTimes: [12, 16, 14, 25, 20, 12, 6, 0]
      },
      {
        id: 'usr-5',
        name: 'Aarav Sharma',
        firm: 'Peak XV Partners',
        email: 'aarav@peakxv.com',
        avatarImg: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=96&h=96&fit=crop&crop=faces',
        views: 0,
        downloads: 0,
        avgTime: '0s',
        totalTime: '0s',
        lastActive: 'Pending Visit',
        completionRate: 0,
        ndaStatus: 'Invite Sent',
        pageTimes: [0, 0, 0, 0, 0, 0, 0, 0]
      }
    ];

    const activeViewers = viewers.filter(v => v.views > 0);
    const aggregatePageTimes = pages.map((_, pIdx) => {
      let sum = 0;
      activeViewers.forEach(v => { sum += (v.pageTimes[pIdx] || 0); });
      return Math.round(sum / (activeViewers.length || 1));
    });

    return {
      doc,
      pages,
      viewers,
      aggregate: {
        views: doc.views || 24,
        downloads: doc.downloads || 8,
        avgTime: '3m 42s',
        totalTime: '1h 28m',
        completionRate: 84,
        pageTimes: aggregatePageTimes
      }
    };
  }

  window.openDocumentAnalytics = function(vaultId, docId) {
    ensureVdrDrawers();
    currentAnalyticsVaultId = vaultId;
    currentAnalyticsDocId = docId;
    activeAnalyticsViewerId = 'all';

    const vault = (window.WATCH_DATA_ROOMS_DATA || []).find(v => v.id === vaultId);
    const doc = vault?.documents?.find(d => d.id === docId);
    if (!doc) return;

    document.getElementById('vdrAnalyticsDocNameHeader').textContent = doc.name;
    document.getElementById('vdrAnalyticsDrawerBackdrop').classList.add('open');
    renderAnalyticsDrawerContent();
  };

  window.selectAnalyticsViewer = function(viewerId) {
    activeAnalyticsViewerId = viewerId;
    renderAnalyticsDrawerContent();
  };

  function renderAnalyticsDrawerContent() {
    const body = document.getElementById('vdrAnalyticsDrawerBody');
    if (!body) return;

    const data = getDocAnalyticsData(currentAnalyticsVaultId, currentAnalyticsDocId);
    if (!data) return;

    const { doc, pages, viewers, aggregate } = data;
    const isGlobal = activeAnalyticsViewerId === 'all';
    const selectedViewer = isGlobal ? null : viewers.find(v => v.id === activeAnalyticsViewerId) || viewers[0];

    const currentViews = isGlobal ? aggregate.views : selectedViewer.views;
    const currentDownloads = isGlobal ? aggregate.downloads : selectedViewer.downloads;
    const currentAvgTime = isGlobal ? aggregate.avgTime : selectedViewer.avgTime;
    const currentTotalTime = isGlobal ? aggregate.totalTime : selectedViewer.totalTime;
    const currentPageTimes = isGlobal ? aggregate.pageTimes : selectedViewer.pageTimes;

    let maxTime = -1;
    let maxPageIdx = 0;
    currentPageTimes.forEach((t, idx) => {
      if (t > maxTime) {
        maxTime = t;
        maxPageIdx = idx;
      }
    });
    const maxPageTitle = pages[maxPageIdx] || 'Page 4';
    const maxTimeFormatted = maxTime > 0 ? `${Math.floor(maxTime / 60)}m ${maxTime % 60}s` : '0s';

    body.innerHTML = `
      <div class="vdr-analytics-split-layout">
        
        <!-- 01. LEFT COLUMN: SLIM VIEWERS LIST -->
        <div class="vdr-analytics-viewers-pane">
          <div class="vdr-viewers-pane-heading">Viewers (${viewers.length})</div>

          <!-- All Viewers Global Nav Item -->
          <div class="vdr-viewer-nav-item ${isGlobal ? 'active' : ''}" onclick="selectAnalyticsViewer('all')">
            <div class="vdr-viewer-avatar-circle" style="${isGlobal ? 'background:#FFFFFF; color:#141413;' : ''}">
              <i data-lucide="users" style="width:10px; height:10px;"></i>
            </div>
            <span class="vdr-viewer-nav-name">All Viewers</span>
          </div>

          <div style="height:1px; background:var(--border-faint); margin:3px 2px;"></div>

          <!-- Individual Viewers List -->
          ${viewers.map(v => `
            <div class="vdr-viewer-nav-item ${activeAnalyticsViewerId === v.id ? 'active' : ''}" onclick="selectAnalyticsViewer('${v.id}')">
              <div class="vdr-viewer-avatar-circle"><img src="${v.avatarImg}" class="vdr-viewer-avatar-img" alt="${escapeHtml(v.name)}" style="width:100%; height:100%; border-radius:50%; object-fit:cover;" /></div>
              <span class="vdr-viewer-nav-name" title="${escapeHtml(v.name)}">${escapeHtml(v.name)}</span>
            </div>
          `).join('')}
        </div>

        <!-- 02. RIGHT COLUMN: MAIN DETAILS PANEL -->
        <div class="vdr-analytics-details-pane">
          
          <!-- Active Header Banner -->
          ${!isGlobal && selectedViewer ? `
            <div class="vdr-selected-viewer-banner">
              <div style="display:flex; align-items:center; gap:10px; min-width:0;">
                <div class="vdr-viewer-avatar-circle" style="width:32px; height:32px;"><img src="${selectedViewer.avatarImg}" style="width:100%; height:100%; border-radius:50%; object-fit:cover;" alt="${escapeHtml(selectedViewer.name)}" /></div>
                <div style="display:flex; flex-direction:column; min-width:0;">
                  <div style="font-weight:800; font-size:13px; color:var(--text-dark); display:flex; align-items:center; gap:6px;">
                    <span>${escapeHtml(selectedViewer.name)}</span>
                    <span style="font-size:11.5px; color:var(--text-muted); font-weight:500;">· ${escapeHtml(selectedViewer.firm)}</span>
                  </div>
                  <div style="font-size:11px; color:var(--text-muted); font-family:monospace;">${escapeHtml(selectedViewer.email)} · Last active ${selectedViewer.lastActive}</div>
                </div>
              </div>
              <div style="display:flex; flex-direction:column; align-items:flex-end; gap:2px; flex-shrink:0;">
                <span style="font-size:10.5px; font-weight:700; color:#15803D; background:#DCFCE7; padding:2px 6px; border-radius:4px;">${selectedViewer.ndaStatus}</span>
                <span style="font-size:10.5px; color:var(--text-muted); font-weight:600;">${selectedViewer.completionRate}% read completion</span>
              </div>
            </div>
          ` : `
            <div style="display:flex; align-items:center; justify-content:space-between;">
              <div>
                <span style="font-size:13px; font-weight:800; color:var(--text-dark);">Global Audience Analytics</span>
                <div style="font-size:11.5px; color:var(--text-muted);">Aggregated performance across all evaluating investor firms</div>
              </div>
              <span style="font-size:11px; font-weight:700; color:#15803D; background:#DCFCE7; padding:2.5px 8px; border-radius:5px;">84% Avg Completion</span>
            </div>
          `}

          <!-- 4 KPI Stat Cards -->
          <div class="vdr-analytics-kpi-grid">
            <div class="vdr-kpi-card">
              <span class="vdr-kpi-label">Total Views</span>
              <span class="vdr-kpi-value">${currentViews}</span>
              <span class="vdr-kpi-sub">
                <i data-lucide="trending-up" style="width:11px; height:11px;"></i>
                <span>${isGlobal ? '+18%' : `${currentViews} sessions`}</span>
              </span>
            </div>

            <div class="vdr-kpi-card">
              <span class="vdr-kpi-label">Downloads</span>
              <span class="vdr-kpi-value">${currentDownloads}</span>
              <span class="vdr-kpi-sub" style="color:var(--text-muted);">
                <span>${isGlobal ? 'Encrypted' : currentDownloads > 0 ? 'Downloaded' : 'View only'}</span>
              </span>
            </div>

            <div class="vdr-kpi-card">
              <span class="vdr-kpi-label">Avg. Dwell</span>
              <span class="vdr-kpi-value">${currentAvgTime}</span>
              <span class="vdr-kpi-sub">
                <i data-lucide="clock" style="width:11px; height:11px;"></i>
                <span>Per visit</span>
              </span>
            </div>

            <div class="vdr-kpi-card">
              <span class="vdr-kpi-label">Total Time</span>
              <span class="vdr-kpi-value">${currentTotalTime}</span>
              <span class="vdr-kpi-sub" style="color:var(--text-muted);">
                <span>Engaged</span>
              </span>
            </div>
          </div>

          <!-- Page-wise Analytics Graph (ApexCharts) -->
          <div class="vdr-analytics-chart-box">
            <div class="vdr-chart-box-header">
              <div>
                <span class="vdr-chart-title">Page-by-Page Attention &amp; Dwell Time</span>
                <div style="font-size:11px; color:var(--text-muted); margin-top:1px;">
                  ${isGlobal ? 'Average seconds spent per slide across all evaluating investors' : `Detailed reading profile for ${selectedViewer.name}`}
                </div>
              </div>
              ${maxTime > 0 ? `
                <span class="vdr-chart-peak-badge">
                  🔥 Peak: ${maxPageTitle.split('(')[0]} (${maxTimeFormatted})
                </span>
              ` : ''}
            </div>

            <!-- Chart Mount Point -->
            <div id="vdrApexChartContainer"></div>
          </div>

          <!-- Activity Timeline Stream -->
          <div style="display:flex; flex-direction:column; gap:6px;">
            <span style="font-size:11px; font-weight:700; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.04em;">Recent Access Stream</span>
            <div style="background:#FAFAF9; border:1px solid var(--border-main); border-radius:8px; padding:8px 12px; display:flex; flex-direction:column; gap:6px; font-size:11.5px;">
              <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:4px; border-bottom:1px solid var(--border-faint);">
                <span><strong>Elena Rostova (Accel)</strong> spent 4m 12s on Page 4 (Unit Economics)</span>
                <span style="color:var(--text-muted); font-size:11px;">Today · 10:45 AM</span>
              </div>
              <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:4px; border-bottom:1px solid var(--border-faint);">
                <span><strong>Vikram Mehta (Matrix)</strong> viewed 8 pages</span>
                <span style="color:var(--text-muted); font-size:11px;">Today · 09:12 AM</span>
              </div>
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span><strong>David Sacks (Craft)</strong> downloaded encrypted copy</span>
                <span style="color:var(--text-muted); font-size:11px;">Yesterday · 02:40 PM</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    `;

    if (typeof lucide !== 'undefined') lucide.createIcons();

    setTimeout(() => {
      renderApexPageWiseChart(currentPageTimes, pages, isGlobal ? 'Avg Seconds' : 'Seconds Spent');
    }, 60);
  }

  function renderApexPageWiseChart(dataSeries, categories, seriesName = 'Seconds Spent') {
    const chartContainer = document.getElementById('vdrApexChartContainer');
    if (!chartContainer) return;

    if (currentApexChartInstance) {
      try { currentApexChartInstance.destroy(); } catch (e) {}
      currentApexChartInstance = null;
    }

    if (typeof ApexCharts === 'undefined') {
      chartContainer.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:6px; padding:8px 0;">
          ${dataSeries.map((sec, i) => `
            <div style="display:flex; align-items:center; gap:8px; font-size:11.5px;">
              <span style="width:70px; color:var(--text-muted);">Page ${i+1}</span>
              <div style="flex:1; height:6px; background:#EAEAE7; border-radius:3px; overflow:hidden;">
                <div style="width:${Math.min(100, sec * 1.8)}%; height:100%; background:#141413;"></div>
              </div>
              <span style="width:34px; text-align:right; font-weight:700; color:var(--text-dark);">${sec}s</span>
            </div>
          `).join('')}
        </div>
      `;
      return;
    }

    const shortCategories = categories.map((c, i) => `P${i+1}`);

    const options = {
      series: [{
        name: seriesName,
        data: dataSeries
      }],
      chart: {
        type: 'bar',
        height: 190,
        toolbar: { show: false },
        fontFamily: "'Outfit', sans-serif"
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          columnWidth: '45%',
          distributed: false,
          dataLabels: { position: 'top' }
        }
      },
      colors: ['#141413'],
      dataLabels: {
        enabled: true,
        formatter: function(val) { return val > 0 ? val + 's' : ''; },
        offsetY: -18,
        style: { fontSize: '10px', colors: ['#666662'], fontWeight: 700 }
      },
      xaxis: {
        categories: shortCategories,
        labels: { style: { fontSize: '11px', colors: '#666662', fontWeight: 600 } },
        axisBorder: { show: false },
        axisTicks: { show: false }
      },
      yaxis: {
        labels: {
          formatter: function(val) { return val + 's'; },
          style: { fontSize: '10.5px', colors: '#8A8A85' }
        }
      },
      grid: {
        borderColor: '#EFEFEA',
        strokeDashArray: 3,
        padding: { top: 10, bottom: 0, left: 10, right: 10 }
      },
      tooltip: {
        custom: function({ series, seriesIndex, dataPointIndex, w }) {
          const val = series[seriesIndex][dataPointIndex];
          const fullTitle = categories[dataPointIndex] || `Page ${dataPointIndex + 1}`;
          return `
            <div style="background:#141413; color:#FFFFFF; padding:6px 10px; border-radius:6px; font-size:11.5px; font-family:'Outfit', sans-serif;">
              <div style="font-weight:700; margin-bottom:2px;">${fullTitle}</div>
              <div style="color:#A3A3A0;">Dwell: <span style="color:#FFFFFF; font-weight:800;">${val} seconds</span></div>
            </div>`;
        }
      }
    };

    try {
      currentApexChartInstance = new ApexCharts(chartContainer, options);
      currentApexChartInstance.render();
    } catch (e) {
      console.error(e);
    }
  }

  window.closeVdrAnalyticsDrawer = function() {
    const bd = document.getElementById('vdrAnalyticsDrawerBackdrop');
    if (bd) bd.classList.remove('open');
    if (currentApexChartInstance) {
      try { currentApexChartInstance.destroy(); } catch (e) {}
      currentApexChartInstance = null;
    }
  };

  window.handleVdrAnalyticsBackdropClick = function(e) {
    if (e.target.id === 'vdrAnalyticsDrawerBackdrop') closeVdrAnalyticsDrawer();
  };

  // ──────────────────────────────────────────────────────────────────────────
  // 08. WATERMARKED IN-BROWSER DOCUMENT PREVIEW MODAL
  // ──────────────────────────────────────────────────────────────────────────
  window.previewVdrDoc = function(docId, vaultId) {
    const vault = (window.WATCH_DATA_ROOMS_DATA || []).find(v => v.id === vaultId);
    const doc = vault?.documents?.find(d => d.id === docId);
    const docTitle = doc ? doc.name : 'Due Diligence Checklist';
    const format = doc ? (doc.format || 'pdf').toUpperCase() : 'PDF';

    if (window.openModal) {
      window.openModal(`Preview · ${docTitle}`, `
        <div class="vdr-preview-modal-body">
          
          <!-- Document Image Viewer Sheet -->
          <div style="background:#F9F9F8; border:1px solid var(--vdr-border-main); border-radius:8px; max-height:72vh; overflow-y:auto; padding:16px; display:flex; justify-content:center; align-items:flex-start; box-shadow:inset 0 1px 3px rgba(0, 0, 0, 0.03); position:relative;">
            <img src="./assets/creating-a-practical-and-useful-due-diligence-checklist.jpg" alt="${escapeHtml(docTitle)}" style="max-width:100%; width:auto; height:auto; max-height:66vh; object-fit:contain; border-radius:4px; box-shadow:0 4px 16px rgba(0,0,0,0.12); display:block; border:1px solid #E5E5E0; background:#FFFFFF;" />
          </div>

        </div>
      `, '560px');

      if (typeof lucide !== 'undefined') lucide.createIcons();
    }
  };

  window.downloadVdrDoc = function(docId, vaultId) {
    if (window.showToast) window.showToast('Preparing watermarked encrypted export for download...', 'info');
  };

  window.deleteVdrDoc = function(vaultId, docId) {
    const vault = (window.WATCH_DATA_ROOMS_DATA || []).find(v => v.id === vaultId);
    if (vault) {
      vault.documents = (vault.documents || []).filter(d => d.id !== docId);
      if (window.showToast) window.showToast('Document removed from vault', 'info');
      renderWatchDataRoomsPage();
    }
  };

  // ──────────────────────────────────────────────────────────────────────────
  // USER ACCESS CONTROLS (3-DOTS MENU & CONFIRMATION POPUP)
  // ──────────────────────────────────────────────────────────────────────────
  window.toggleUserDotMenu = function(userId, e) {
    if (e) e.stopPropagation();
    document.querySelectorAll('.vdr-context-menu').forEach(m => m.classList.remove('show'));
    const menu = document.getElementById(`usr-menu-${userId}`);
    if (menu) menu.classList.toggle('show');
  };

  window.confirmRevokeUserAccess = function(vaultId, userId, userName, e) {
    if (e) e.stopPropagation();
    document.querySelectorAll('.vdr-context-menu').forEach(m => m.classList.remove('show'));

    if (window.openModal) {
      window.openModal('Revoke Investor Access', `
        <div style="display:flex; flex-direction:column; gap:16px;">
          <div style="display:flex; align-items:flex-start; gap:12px;">
            <div style="width:36px; height:36px; border-radius:50%; background:#FEE2E2; color:#DC2626; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
              <i data-lucide="alert-triangle" style="width:18px; height:18px;"></i>
            </div>
            <div style="display:flex; flex-direction:column; gap:4px;">
              <div style="font-size:13.5px; font-weight:700; color:var(--vdr-text-dark);">Revoke access for ${userName || 'this investor'}?</div>
              <div style="font-size:12px; color:var(--vdr-text-muted); line-height:1.5;">
                Access of the vault will be removed from this investor, no longer to access your document now, are you sure to do that?
              </div>
            </div>
          </div>

          <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:6px;">
            <button type="button" class="btn btn-outline" onclick="window.closeModal()" style="padding:6px 14px; font-size:12px; border-radius:6px; cursor:pointer;">Cancel</button>
            <button type="button" class="btn btn-primary" onclick="executeRevokeUserAccess('${vaultId}', '${userId}')" style="background:#DC2626; color:#FFFFFF; border:none; padding:6px 14px; font-size:12px; border-radius:6px; font-weight:700; cursor:pointer; display:inline-flex; align-items:center; gap:6px;">
              <i data-lucide="user-x" style="width:13px; height:13px;"></i>
              <span>Yes, Revoke Access</span>
            </button>
          </div>
        </div>
      `, '480px');
      if (typeof lucide !== 'undefined') lucide.createIcons();
    }
  };

  window.executeRevokeUserAccess = function(vaultId, userId) {
    const vault = (window.WATCH_DATA_ROOMS_DATA || []).find(v => v.id === vaultId);
    if (vault) {
      const user = (vault.sharedUsers || []).find(u => u.id === userId);
      if (user) {
        user.isRevoked = true;
      }
      if (window.closeModal) window.closeModal();
      if (window.showToast) window.showToast('Investor access revoked successfully', 'info');
      renderWatchDataRoomsPage();
    }
  };

  window.restoreUserAccess = function(vaultId, userId, e) {
    if (e) e.stopPropagation();
    document.querySelectorAll('.vdr-context-menu').forEach(m => m.classList.remove('show'));
    const vault = (window.WATCH_DATA_ROOMS_DATA || []).find(v => v.id === vaultId);
    if (vault) {
      const user = (vault.sharedUsers || []).find(u => u.id === userId);
      if (user) {
        user.isRevoked = false;
      }
      if (window.showToast) window.showToast('Investor access restored', 'success');
      renderWatchDataRoomsPage();
    }
  };

  window.toggleVaultSetting = function(vaultId, setting, val) {
    const vault = (window.WATCH_DATA_ROOMS_DATA || []).find(v => v.id === vaultId);
    if (vault) {
      vault[setting] = val;
      if (window.showToast) window.showToast('Vault security policy updated', 'success');
    }
  };

  // ──────────────────────────────────────────────────────────────────────────
  // 09. FAST MULTI-FILE UPLOAD MODAL (DRAG & DROP WITH LIVE QUEUE)
  // ──────────────────────────────────────────────────────────────────────────
  let selectedUploadFiles = [];

  window.openUploadDocModal = function(vaultId) {
    const vId = vaultId || currentActiveVaultId;
    selectedUploadFiles = [];

    if (window.openModal) {
      window.openModal('Upload Due Diligence Documents', `
        <div style="display:flex; flex-direction:column; gap:14px;">
          
          <!-- Drag & Drop Multi-file Zone -->
          <div class="vdr-dropzone-box" id="vdrUploadDropzone" onclick="document.getElementById('vdrMultiFileInput').click()">
            <input type="file" multiple id="vdrMultiFileInput" style="display:none;" onchange="handleFileSelectionChange(this.files, '${vId}')" />
            <i data-lucide="upload-cloud" style="width:28px; height:28px; color:var(--vdr-text-dark); margin-bottom:6px;"></i>
            <div style="font-size:13px; font-weight:700; color:var(--vdr-text-dark);">Choose files or drag &amp; drop here</div>
            <div style="font-size:11.5px; color:var(--vdr-text-muted); margin-top:2px;">Upload single or multiple files (PDF, XLSX, DOCX, CSV up to 100MB)</div>
          </div>

          <!-- Selected Files Preview Area -->
          <div id="vdrSelectedFilesList" style="display:none; flex-direction:column; gap:6px; max-height:160px; overflow-y:auto;"></div>

          <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:4px;">
            <button type="button" class="btn btn-outline" onclick="window.closeModal()" style="padding:6px 14px; font-size:12px; border-radius:6px; cursor:pointer;">Cancel</button>
            <button type="button" class="btn btn-primary" id="vdrStartUploadBtn" onclick="executeFilesUpload('${vId}')" style="gap:6px; padding:6px 14px; font-size:12px; background:#141413; color:#FFFFFF; border:none; border-radius:6px; cursor:pointer; display:inline-flex; align-items:center;">
              <i data-lucide="upload" style="width:13px; height:13px;"></i>
              <span id="vdrUploadBtnLabel">Upload Files</span>
            </button>
          </div>

        </div>
      `, '580px');

      if (typeof lucide !== 'undefined') lucide.createIcons();

      setTimeout(() => {
        const dropzone = document.getElementById('vdrUploadDropzone');
        if (dropzone) {
          dropzone.addEventListener('dragover', (e) => { e.preventDefault(); dropzone.classList.add('dragover'); });
          dropzone.addEventListener('dragleave', () => dropzone.classList.remove('dragover'));
          dropzone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropzone.classList.remove('dragover');
            if (e.dataTransfer && e.dataTransfer.files) {
              handleFileSelectionChange(e.dataTransfer.files, vId);
            }
          });
        }
      }, 80);
    }
  };

  window.handleFileSelectionChange = function(files, vaultId) {
    if (!files || files.length === 0) return;

    selectedUploadFiles = Array.from(files);
    const listEl = document.getElementById('vdrSelectedFilesList');
    const btnLabel = document.getElementById('vdrUploadBtnLabel');

    if (listEl) {
      listEl.style.display = 'flex';
      listEl.innerHTML = selectedUploadFiles.map((file, idx) => `
        <div style="background:#FAFAF9; border:1px solid var(--vdr-border-main); border-radius:6px; padding:6px 10px; display:flex; align-items:center; justify-content:space-between; font-size:11.5px;">
          <div style="display:flex; align-items:center; gap:6px; min-width:0; flex:1;">
            <i data-lucide="file" style="width:13px; height:13px; color:var(--vdr-text-dark); flex-shrink:0;"></i>
            <span style="font-weight:600; color:var(--vdr-text-dark); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${escapeHtml(file.name)}</span>
          </div>
          <span style="color:var(--vdr-text-muted); font-size:11px; margin-left:8px;">${(file.size / (1024 * 1024)).toFixed(1)} MB</span>
        </div>
      `).join('');
      if (typeof lucide !== 'undefined') lucide.createIcons();
    }

    if (btnLabel) {
      btnLabel.textContent = `Upload ${selectedUploadFiles.length} ${selectedUploadFiles.length === 1 ? 'File' : 'Files'}`;
    }
  };

  window.executeFilesUpload = function(vaultId) {
    const vault = (window.WATCH_DATA_ROOMS_DATA || []).find(v => v.id === vaultId);
    if (!vault) return;

    const files = selectedUploadFiles || [];

    if (files.length === 0) {
      const demoName = `Diligence_Material_${Date.now().toString().slice(-4)}.pdf`;
      vault.documents = vault.documents || [];
      vault.documents.unshift({
        id: `doc-${Date.now()}`,
        name: demoName,
        format: 'pdf',
        type: 'General Diligence (PDF)',
        date: 'Today',
        size: '2.5 MB',
        views: 1,
        downloads: 0,
        pages: 8
      });
    } else {
      vault.documents = vault.documents || [];
      files.forEach((file, idx) => {
        const name = file.name;
        const format = name.toLowerCase().endsWith('.xlsx') ? 'xlsx' : (name.toLowerCase().endsWith('.docx') ? 'docx' : (name.toLowerCase().endsWith('.csv') ? 'csv' : 'pdf'));
        
        let type = 'General Diligence (PDF)';
        if (name.toLowerCase().includes('cap') || name.toLowerCase().includes('table')) type = 'Cap Table (XLSX)';
        else if (name.toLowerCase().includes('model') || name.toLowerCase().includes('financial')) type = 'Financial Model (XLSX)';
        else if (name.toLowerCase().includes('deck') || name.toLowerCase().includes('pitch')) type = 'Pitch Deck (PDF)';
        else if (name.toLowerCase().includes('patent') || name.toLowerCase().includes('ip')) type = 'Patent & IP (PDF)';
        else if (name.toLowerCase().includes('soc') || name.toLowerCase().includes('security')) type = 'SOC 2 & Security (PDF)';
        else if (name.toLowerCase().includes('msa') || name.toLowerCase().includes('contract')) type = 'Commercial MSA (PDF)';

        vault.documents.unshift({
          id: `doc-${Date.now()}-${idx}`,
          name: file.name,
          format: format,
          type: type,
          date: 'Today',
          size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
          views: 1,
          downloads: 0,
          pages: 10
        });
      });
    }

    if (window.closeModal) window.closeModal();
    if (window.showToast) window.showToast(`Successfully uploaded ${files.length || 1} document(s)`, 'success');
    renderWatchDataRoomsPage();
  };

  // Close drawers on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeVdrDrawer();
      closeVdrShareDrawer();
      closeVdrAnalyticsDrawer();
    }
  });

  // Auto initialize on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    ensureVdrDrawers();
    renderWatchDataRoomsPage();
  });
})();
