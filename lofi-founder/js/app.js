/* ==========================================================================
   SEEDICON FOUNDER PLATFORM — INTERACTIVE LOGIC & PRODUCT DIRECTORY
   ========================================================================== */

// ──────────────────────────────────────────────────────────────────────────
// 01. PRODUCT LISTING DIRECTORY STORE (Verified Brandfetch Assets & Details)
// ──────────────────────────────────────────────────────────────────────────
const BRANDFETCH_API_KEY = "hRbFeAlH3EKQt3eKzzFrOiDJourkuqFDDqgOJCxGGARCfbqtjr2IEMt7JkTzuC5X3NBBCoCNw6etf3Q2tt7xNg";
const BRANDFETCH_CLIENT_ID = "1idD5blp6f0v3UdGKX9";

// Clean Feather/Lucide-style LinkedIn SVG (Lucide v0.3+ does not bundle brand icons)
const LINKEDIN_ICON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:13px; height:13px; flex-shrink:0;"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`;

window.PRODUCT_DIRECTORY_DATA = [
  {
    id: 'linear',
    name: 'Linear',
    domain: 'linear.app',
    logo: 'https://cdn.simpleicons.org/linear/5E6AD2',
    tagline: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Built for high-performance teams.',
    detailedDesc: 'Linear is the issue tracker software teams actually enjoy using. Streamline projects, sprints, tasks, and bug tracking with instantaneous sync, keyboard-first navigation, and bidirectional Git integrations.',
    founder: 'Karri Saarinen',
    founderAvatar: 'KS',
    location: 'San Francisco, CA',
    incpDate: 'Jan 2019',
    postedAgo: '2 days ago',
    website: 'https://linear.app',
    linkedin: 'https://linkedin.com/company/linear-app',
    category: 'B2B SaaS',
    tags: ['B2B SaaS', 'Issue Tracking', 'DevTools', 'Productivity'],
    stage: 'Series B',
    upvotes: 842,
    hasUpvoted: false,
    pricing: 'Free tier / $8 per user/mo',
    features: ['Real-time sync engine', 'Cycles & Automated sprints', 'Git & Figma integrations', 'Command menu (⌘K)']
  },
  {
    id: 'perplexity',
    name: 'Perplexity AI',
    domain: 'perplexity.ai',
    logo: 'https://cdn.simpleicons.org/perplexity/1FB8CD',
    tagline: 'An AI-powered conversational search engine delivering sourced, accurate, and real-time knowledge discovery.',
    detailedDesc: 'Perplexity AI unlocks the power of knowledge with interactive information discovery. Ask complex questions and get concise, accurate answers with citations from authoritative web sources in real-time.',
    founder: 'Aravind Srinivas',
    founderAvatar: 'AS',
    location: 'San Francisco, CA',
    incpDate: 'Aug 2022',
    postedAgo: '3 days ago',
    website: 'https://perplexity.ai',
    linkedin: 'https://linkedin.com/company/perplexity-ai',
    category: 'AI & ML',
    tags: ['AI & ML', 'Search Engine', 'Generative AI', 'Research'],
    stage: 'Series B',
    upvotes: 1290,
    hasUpvoted: false,
    pricing: 'Freemium / $20 Pro plan',
    features: ['Copilot multi-step search', 'Citation graphs', 'File analysis & upload', 'Claude 3.5 & GPT-4o toggle']
  },
  {
    id: 'supabase',
    name: 'Supabase',
    domain: 'supabase.com',
    logo: 'https://cdn.simpleicons.org/supabase/3ECF8E',
    tagline: 'The open source Firebase alternative. Build in a weekend, scale to millions with Postgres & Edge Functions.',
    detailedDesc: 'Supabase provides all the backend features developers need to build a product: dedicated PostgreSQL database, user authentication, instant APIs, edge functions, and real-time subscriptions.',
    founder: 'Paul Copplestone',
    founderAvatar: 'PC',
    location: 'Singapore / Remote',
    incpDate: 'Jan 2020',
    postedAgo: '5 days ago',
    website: 'https://supabase.com',
    linkedin: 'https://linkedin.com/company/supabase',
    category: 'DevTools',
    tags: ['DevTools', 'Open Source', 'PostgreSQL', 'Backend'],
    stage: 'Series B',
    upvotes: 1048,
    hasUpvoted: false,
    pricing: 'Free tier / $25 Pro plan',
    features: ['Dedicated Postgres DB', 'Row Level Security (RLS)', 'Instant Auto-generated APIs', 'Storage & Vector Embeddings']
  },
  {
    id: 'notion',
    name: 'Notion',
    domain: 'notion.com',
    logo: 'https://cdn.simpleicons.org/notion/111111',
    tagline: 'The connected workspace where better, faster work happens with collaborative docs, wikis, and projects.',
    detailedDesc: 'Notion is the all-in-one workspace for notes, documentation, project management, and team collaboration. Blends everyday work apps into one customizable canvas supercharged with AI.',
    founder: 'Ivan Zhao',
    founderAvatar: 'IZ',
    location: 'San Francisco, CA',
    incpDate: 'Mar 2016',
    postedAgo: '1 week ago',
    website: 'https://notion.so',
    linkedin: 'https://linkedin.com/company/notionhq',
    category: 'B2B SaaS',
    tags: ['B2B SaaS', 'Productivity', 'Knowledge Base', 'Collaboration'],
    stage: 'Growth',
    upvotes: 2410,
    hasUpvoted: false,
    pricing: 'Free / $10 Plus / $18 Business',
    features: ['Flexible block architecture', 'Database relations & views', 'Notion AI writer & Q&A', 'Enterprise governance']
  },
  {
    id: 'anthropic',
    name: 'Anthropic',
    domain: 'anthropic.com',
    logo: 'https://cdn.simpleicons.org/anthropic/D97757',
    tagline: 'AI safety and intelligence research company building reliable, steerable, and state-of-the-art AI systems.',
    detailedDesc: 'Anthropic is an AI safety and research company dedicated to building human-aligned, safe, and steerable intelligence. Creators of Claude 3.5 Sonnet, setting new benchmarks in reasoning, coding, and comprehension.',
    founder: 'Dario Amodei',
    founderAvatar: 'DA',
    location: 'San Francisco, CA',
    incpDate: 'Jan 2021',
    postedAgo: '1 week ago',
    website: 'https://anthropic.com',
    linkedin: 'https://linkedin.com/company/anthropicresearch',
    category: 'AI & ML',
    tags: ['AI & ML', 'LLM', 'AI Safety', 'Developer API'],
    stage: 'Series C',
    upvotes: 1894,
    hasUpvoted: false,
    pricing: 'Token-based API / $20 Claude Pro',
    features: ['Claude 3.5 Sonnet', '200K Context Window', 'Artifacts interactive preview', 'Constitutional AI']
  },
  {
    id: 'resend',
    name: 'Resend',
    domain: 'resend.com',
    logo: 'https://cdn.simpleicons.org/resend/111111',
    tagline: 'Email for developers. Deliver transactional and marketing emails at scale with modern React templates.',
    detailedDesc: 'Resend is the modern email platform built specifically for software engineers. First-class React Email support, sub-100ms API dispatch, webhooks, and supreme deliverability monitoring.',
    founder: 'Zeno Rocha',
    founderAvatar: 'ZR',
    location: 'San Francisco, CA',
    incpDate: 'Jan 2023',
    postedAgo: '2 weeks ago',
    website: 'https://resend.com',
    linkedin: 'https://linkedin.com/company/resend',
    category: 'DevTools',
    tags: ['DevTools', 'Email API', 'B2B SaaS', 'React'],
    stage: 'Seed',
    upvotes: 735,
    hasUpvoted: false,
    pricing: 'Free (3,000/mo) / $20 Pro plan',
    features: ['React Email component library', 'Sub-100ms dispatch API', 'Custom domain authentication', 'Real-time analytics']
  },
  {
    id: 'retool',
    name: 'Retool',
    domain: 'retool.com',
    logo: 'https://cdn.simpleicons.org/retool/111111',
    tagline: 'The fast way to build internal tools, database UIs, and workflow automations with drag-and-drop components.',
    detailedDesc: 'Retool empowers developers to build internal tools in minutes rather than weeks. Connect directly to Postgres, REST APIs, GraphQL, and build complete CRUD apps with 100+ pre-built React components.',
    founder: 'David Hsu',
    founderAvatar: 'DH',
    location: 'San Francisco, CA',
    incpDate: 'May 2017',
    postedAgo: '2 weeks ago',
    website: 'https://retool.com',
    linkedin: 'https://linkedin.com/company/retool-inc',
    category: 'B2B SaaS',
    tags: ['B2B SaaS', 'Low Code', 'Internal Tools', 'Enterprise'],
    stage: 'Series C',
    upvotes: 912,
    hasUpvoted: false,
    pricing: 'Free (5 users) / $10 Team plan',
    features: ['100+ UI components', 'Direct DB connectors', 'Granular RBAC permissions', 'Retool Workflows']
  },
  {
    id: 'postman',
    name: 'Postman',
    domain: 'postman.com',
    logo: 'https://cdn.simpleicons.org/postman/FF6C37',
    tagline: 'Complete API platform for building, mocking, testing, documenting, and publishing web APIs.',
    detailedDesc: 'Postman is used by over 30 million developers and 500,000 organizations to simplify every step of the API lifecycle and streamline collaboration across global teams.',
    founder: 'Abhinav Asthana',
    founderAvatar: 'AA',
    location: 'San Francisco / Bengaluru',
    incpDate: 'Oct 2014',
    postedAgo: '3 weeks ago',
    website: 'https://postman.com',
    linkedin: 'https://linkedin.com/company/postman-platform',
    category: 'DevTools',
    tags: ['DevTools', 'API Platform', 'Testing', 'Collaboration'],
    stage: 'Series D',
    upvotes: 1520,
    hasUpvoted: false,
    pricing: 'Free tier / $14 Basic / $29 Pro',
    features: ['API client & testing suites', 'Automated mock servers', 'Public API Network', 'CLI & CI/CD runner']
  },
  {
    id: 'alpha-health',
    name: 'Alpha Health 2.0',
    domain: 'alphahealth.ai',
    logo: '',
    tagline: 'Automating clinical diagnostic workflows and electronic health record parsing with HIPAA-compliant AI.',
    detailedDesc: 'Alpha Health builds specialized clinical diagnostic co-pilots for healthcare networks. Parses unstructured EHR notes, extracts diagnostic codes, and accelerates insurance pre-authorizations by 85%.',
    founder: 'Dr. Sarah Chen',
    founderAvatar: 'SC',
    location: 'Boston, MA',
    incpDate: 'Feb 2024',
    postedAgo: 'Just now',
    website: 'https://alphahealth.ai',
    linkedin: 'https://linkedin.com/company/alphahealth-ai',
    category: 'Healthcare',
    tags: ['Healthcare', 'Clinical AI', 'HIPAA', 'B2B SaaS'],
    stage: 'Seed Stage',
    upvotes: 312,
    hasUpvoted: false,
    pricing: 'Enterprise diagnostic SaaS',
    features: ['EHR bidirectional sync', 'Automated CPT & ICD-10 coding', 'HIPAA certified data room', 'Clinician audit portal']
  }
];

// ──────────────────────────────────────────────────────────────────────────
// 02. LIFECYCLE & EVENT INITIALIZATION
// ──────────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  let pageNav = 'dashboard';
  const pathName = window.location.pathname.toLowerCase();

  if (pathName.includes('product-listing') || pathName.includes('listing') || pathName.includes('product-detail')) {
    pageNav = 'listing';
  } else if (pathName.includes('analytics')) {
    pageNav = 'analytics';
  } else if (pathName.includes('deck') || pathName.includes('deckwale')) {
    pageNav = 'deck';
  } else if (pathName.includes('vdr') || pathName.includes('data-vault') || pathName.includes('dd-checklist')) {
    pageNav = 'diligence';
  } else if (pathName.includes('investors') || pathName.includes('investor-tracking') || pathName.includes('investor-pipeline')) {
    pageNav = 'investors';
  } else if (pathName.includes('grants')) {
    pageNav = 'grants';
  } else if (pathName.includes('problems')) {
    pageNav = 'problems';
  } else if (pathName.includes('network')) {
    pageNav = 'network';
  } else if (pathName.includes('challenges')) {
    pageNav = 'challenges';
  } else {
    pageNav = 'dashboard';
  }

  // Initialize Layout Components
  if (typeof FounderLayoutComponents !== 'undefined' && document.getElementById('sidebarSlot')) {
    FounderLayoutComponents.init({ activeNav: pageNav });
  }

  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // If on Product Listing Page, render directory stream
  if (document.getElementById('startupDirectoryList')) {
    renderProductDirectoryStream(window.PRODUCT_DIRECTORY_DATA);
  }

  // If on Product Analytics Page, render analytics dashboard
  if (document.getElementById('productAnalyticsRoot')) {
    renderProductAnalyticsPage();
  }

  // If on Product Detail Page, render the centered detail view
  if (document.getElementById('productDetailRoot')) {
    renderProductDetailPage();
  }

  // If on Founder Network Page, render founders + premium investors
  if (document.getElementById('founderNetworkList')) {
    renderFounderNetwork();
  }

  // If on Government Grants Directory Page
  if (document.getElementById('governmentGrantsList')) {
    renderGovernmentGrantsPage();
  }

  // If on Grant Detail Page
  if (document.getElementById('grantDetailRoot')) {
    renderGrantDetailPage();
  }

  // If on Real Market Problems Page
  if (document.getElementById('marketProblemsList')) {
    renderMarketProblemsPage();
  }

  // If on Founder Challenges Page
  if (document.getElementById('founderChallengesList')) {
    renderFounderChallengesPage();
  }

  // If on Due Diligence Directory Page
  if (document.getElementById('dueDiligenceGrid')) {
    renderDueDiligenceDirectory();
  }

  // If on Due Diligence Detail Page
  if (document.getElementById('dueDiligenceDetailRoot')) {
    renderDueDiligenceDetailPage();
  }

  // If on Pitch Deck Reviewer Page
  if (document.getElementById('pitchDeckRoot')) {
    renderPitchDeckReviewerPage();
  }

  // If on Investor Tracking (pipelines) Page
  if (document.getElementById('investorTrackingRoot')) {
    renderInvestorTrackingPage();
  }

  // If on Investor Pipeline (board/list) Page
  if (document.getElementById('investorPipelineRoot')) {
    renderInvestorPipelinePage();
  }

  // Bind App Events
  bindFounderAppEvents();
});

function bindFounderAppEvents() {
  // Sidebar Collapse / Expand Handler
  const toggleSidebarBtn = document.getElementById('toggleSidebarBtn');
  const founderSidebar = document.getElementById('founderSidebar');
  const toggleSidebarIcon = document.getElementById('toggleSidebarIcon');

  function toggleSidebar() {
    if (founderSidebar) {
      founderSidebar.classList.toggle('collapsed');
      const isCollapsed = founderSidebar.classList.contains('collapsed');
      if (toggleSidebarIcon) {
        toggleSidebarIcon.setAttribute('data-lucide', isCollapsed ? 'chevrons-right' : 'chevrons-left');
        if (typeof lucide !== 'undefined') {
          lucide.createIcons();
        }
      }
    }
  }

  if (toggleSidebarBtn) {
    toggleSidebarBtn.addEventListener('click', toggleSidebar);
  }

  // Keyboard Shortcut: Cmd+[ or Ctrl+[ to toggle sidebar
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === '[') {
      e.preventDefault();
      toggleSidebar();
    }
    if (e.key === 'Escape') {
      closeModal();
      closeDrawer();
      closeAllDropdowns();
    }
  });

  // Startup Switcher Dropdown
  const btnStartup = document.getElementById('btnStartupDropdown');
  const startupMenu = document.getElementById('startupDropdownMenu');
  if (btnStartup && startupMenu) {
    btnStartup.addEventListener('click', (e) => {
      e.stopPropagation();
      startupMenu.classList.toggle('show');
    });
  }

  // Close dropdowns on outside click
  document.addEventListener('click', () => {
    closeAllDropdowns();
  });
}

function closeAllDropdowns() {
  document.querySelectorAll('.dropdown-menu, .sort-dropdown-menu').forEach(m => m.classList.remove('show'));
}

// ──────────────────────────────────────────────────────────────────────────
// 03. PRODUCT DIRECTORY RENDERING & INTERACTIONS
// ──────────────────────────────────────────────────────────────────────────
let currentCategoryFilter = 'all';
let currentSearchQuery = '';
let currentSort = 'upvotes';

const SORT_META = {
  upvotes: { label: 'Most Upvoted', icon: 'trending-up' },
  trending: { label: 'Trending Today', icon: 'flame' },
  name: { label: 'Alphabetical (A-Z)', icon: 'text-cursor-input' },
  newest: { label: 'Newest Listed', icon: 'clock' }
};

function parsePostedAgo(str) {
  if (!str) return 0;
  if (/just now/i.test(str)) return 0;
  const m = String(str).match(/(\d+)\s*(day|week|month|year)/i);
  if (!m) return 0;
  const n = parseInt(m[1], 10);
  if (/week/i.test(m[2])) return n * 7;
  if (/month/i.test(m[2])) return n * 30;
  if (/year/i.test(m[2])) return n * 365;
  return n;
}

function toggleSortDropdown(e) {
  if (e) e.stopPropagation();
  const menu = document.getElementById('sortDropdownMenu');
  if (menu) menu.classList.toggle('show');
}

function applySort(key) {
  currentSort = key;
  closeAllDropdowns();

  const label = document.getElementById('sortTriggerLabel');
  const icon = document.getElementById('sortTriggerIcon');
  const meta = SORT_META[key] || SORT_META.upvotes;
  if (label) label.textContent = meta.label;
  if (icon) icon.setAttribute('data-lucide', meta.icon);
  document.querySelectorAll('.sort-dropdown-item').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-sort') === key);
  });
  if (typeof lucide !== 'undefined') lucide.createIcons();

  const sorted = [...window.PRODUCT_DIRECTORY_DATA];
  if (key === 'name') {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  } else if (key === 'newest') {
    sorted.sort((a, b) => parsePostedAgo(a.postedAgo) - parsePostedAgo(b.postedAgo));
  } else if (key === 'trending') {
    sorted.sort((a, b) => (b.upvotes / (parsePostedAgo(b.postedAgo) + 2)) - (a.upvotes / (parsePostedAgo(a.postedAgo) + 2)));
  } else {
    sorted.sort((a, b) => b.upvotes - a.upvotes);
  }
  renderProductDirectoryStream(sorted);
}

function renderProductDirectoryStream(items) {
  const container = document.getElementById('startupDirectoryList');
  if (!container) return;

  const filtered = items.filter(item => {
    const matchesCategory = currentCategoryFilter === 'all' || item.category.toLowerCase() === currentCategoryFilter.toLowerCase() || item.tags.some(t => t.toLowerCase() === currentCategoryFilter.toLowerCase());
    const matchesSearch = !currentSearchQuery || 
      item.name.toLowerCase().includes(currentSearchQuery) || 
      item.tagline.toLowerCase().includes(currentSearchQuery) ||
      item.founder.toLowerCase().includes(currentSearchQuery) ||
      item.tags.some(t => t.toLowerCase().includes(currentSearchQuery));
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-placeholder-box" style="padding:56px 24px; background:#FFFFFF; border:none;">
        <div class="empty-icon-wrap"><i data-lucide="search-x" class="lucide-lg"></i></div>
        <div class="empty-title">No Startups Found</div>
        <div class="empty-detail">No registered startups matched your filters. Try clearing the search or switching to a different category.</div>
      </div>
    `;
    if (typeof lucide !== 'undefined') lucide.createIcons();
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="startup-listing-card" onclick="window.location.href='./product-detail.html?id=${item.id}'">
      <div class="startup-card-main-left">
        <!-- Brand Logo / Fallback -->
        <div class="startup-logo-container">
          ${item.logo ? `
            <img src="${item.logo}" alt="${item.name} logo" class="startup-logo-img" loading="lazy" onerror="this.outerHTML='<div class=\\'startup-logo-fallback\\'>${item.name.slice(0, 2).toUpperCase()}</div>'" />
          ` : `
            <div class="startup-logo-fallback">${item.name.slice(0, 2).toUpperCase()}</div>
          `}
        </div>

        <!-- Details Column -->
        <div class="startup-card-details">
          <div class="startup-title-row">
            <h3 class="startup-name">${item.name}</h3>
            <span class="badge-pill neutral-soft">${item.stage}</span>
          </div>

          <p class="startup-tagline">${item.tagline}</p>

          <!-- Metadata Bar -->
          <div class="startup-meta-row">
            <!-- Founder Info -->
            <div class="startup-founder-item" title="Founder: ${item.founder}">
              <div class="founder-micro-avatar">${item.founderAvatar}</div>
              <span>${item.founder}</span>
            </div>

            <span class="meta-divider-dot"></span>

            <!-- Location -->
            <div style="display:flex; align-items:center; gap:4px;">
              <i data-lucide="map-pin" style="width:12px; height:12px; color:var(--text-light);"></i>
              <span>${item.location}</span>
            </div>

            <span class="meta-divider-dot"></span>

            <!-- Incorporation Date -->
            <div style="display:flex; align-items:center; gap:4px;" title="Incorporation Date">
              <i data-lucide="calendar" style="width:12px; height:12px; color:var(--text-light);"></i>
              <span>Incp: ${item.incpDate}</span>
            </div>

            <span class="meta-divider-dot"></span>

            <!-- Posted Date -->
            <div style="display:flex; align-items:center; gap:4px;" title="Listing Date">
              <i data-lucide="clock" style="width:12px; height:12px; color:var(--text-light);"></i>
              <span>${item.postedAgo}</span>
            </div>

            <span class="meta-divider-dot"></span>

            <!-- Website Link -->
            <a href="${item.website}" target="_blank" class="meta-icon-link" title="Visit Website (${item.domain})" onclick="event.stopPropagation();">
              <i data-lucide="globe" style="width:13px; height:13px;"></i>
            </a>

            <!-- LinkedIn Link -->
            <a href="${item.linkedin}" target="_blank" class="meta-icon-link" title="LinkedIn Profile" onclick="event.stopPropagation();">
              ${LINKEDIN_ICON_SVG}
            </a>
          </div>

          <!-- Category Tags -->
          <div class="startup-tags-row">
            ${item.tags.map(t => `<span class="category-tag-pill">${t}</span>`).join('')}
          </div>
        </div>
      </div>

      <!-- Upvote Button (Product Hunt Style, Icon-Based) -->
      <div class="upvote-button ${item.hasUpvoted ? 'upvoted' : ''}" onclick="event.stopPropagation(); toggleUpvote('${item.id}')" title="${item.hasUpvoted ? 'Upvoted!' : 'Upvote startup'}">
        <i data-lucide="chevron-up" class="upvote-arrow"></i>
        <span class="upvote-count" id="upvote-count-${item.id}">${item.upvotes.toLocaleString()}</span>
      </div>
    </div>
  `).join('');

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Update total count badge
  const countBadge = document.getElementById('totalStartupsCountBadge');
  if (countBadge) {
    countBadge.textContent = `${filtered.length} Startups`;
  }
}

function handleDirectorySearch(inputEl) {
  currentSearchQuery = inputEl.value.trim().toLowerCase();
  renderProductDirectoryStream(window.PRODUCT_DIRECTORY_DATA);
}

function selectCategoryFilter(chipEl, category) {
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  if (chipEl) chipEl.classList.add('active');
  currentCategoryFilter = category;
  renderProductDirectoryStream(window.PRODUCT_DIRECTORY_DATA);
}

// ──────────────────────────────────────────────────────────────────────────
// 03b. PRODUCT DETAIL PAGE (Separate HTML page, Notion-style centered)
// ──────────────────────────────────────────────────────────────────────────
const PRODUCT_GALLERY_IMAGES = [
  './assets/0322cf6d-49b5-4eb7-9272-ab06fd21583c.avif',
  './assets/0f98f981-be6f-45bc-9e5f-00a26df31c48.avif',
  './assets/45707f08-f4f9-4a47-9220-ee29360ac6dc.avif',
  './assets/9b93847a-b0ef-43f7-a52d-64069d92ff43.avif',
  './assets/cdb22b25-89b1-417e-8715-339e5e34066a.avif'
];

const DEFAULT_INTEGRATIONS = [
  'GitHub', 'Slack', 'PostgreSQL', 'Stripe', 'Figma', 'Zapier'
];

let currentPdTab = 'overview';
let currentCarouselIndex = 0;

function renderProductDetailPage() {
  const root = document.getElementById('productDetailRoot');
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id') || 'linear';
  const item = window.PRODUCT_DIRECTORY_DATA.find(p => p.id === id);

  const breadcrumbName = document.getElementById('detailBreadcrumbName');
  if (breadcrumbName) breadcrumbName.textContent = item ? item.name : 'Not Found';

  if (!item) {
    root.innerHTML = `
      <div class="pd-not-found">
        <div class="empty-icon-wrap"><i data-lucide="search-x" class="lucide-lg"></i></div>
        <div class="empty-title">Startup Not Found</div>
        <div class="empty-detail">The startup you are looking for does not exist in the directory.</div>
        <a href="./product-listing.html" class="btn btn-primary">Back to Product Listing</a>
      </div>
    `;
    if (typeof lucide !== 'undefined') lucide.createIcons();
    return;
  }

  root.innerHTML = `
    <!-- Detail Hero -->
    <div class="pd-hero">
      <div class="pd-hero-logo">
        ${item.logo
          ? `<img src="${item.logo}" alt="${item.name} logo" class="startup-logo-img" onerror="this.outerHTML='<div class=\\'startup-logo-fallback\\'>${item.name.slice(0, 2).toUpperCase()}</div>'" />`
          : `<div class="startup-logo-fallback">${item.name.slice(0, 2).toUpperCase()}</div>`}
      </div>

      <div class="pd-hero-info">
        <!-- Top Row: Title + Stage Badge + Upvote CTA -->
        <div class="pd-hero-top-row">
          <div class="pd-hero-title-group">
            <h1 class="pd-hero-title">${item.name}</h1>
            <span class="badge-pill neutral-soft">${item.stage}</span>
          </div>

          <!-- Upvote Action Button -->
          <button class="pd-upvote-cta ${item.hasUpvoted ? 'upvoted' : ''}" onclick="toggleUpvote('${item.id}'); updatePdUpvote('${item.id}');" title="${item.hasUpvoted ? 'Upvoted!' : 'Upvote startup'}">
            <i data-lucide="chevron-up" class="pd-upvote-icon"></i>
            <span class="pd-upvote-label">${item.hasUpvoted ? 'Upvoted' : 'Upvote'}</span>
            <span class="pd-upvote-badge" id="pd-upvote-count-${item.id}">${item.upvotes.toLocaleString()}</span>
          </button>
        </div>

        <!-- Tagline Description -->
        <p class="pd-hero-tagline">${item.tagline}</p>

        <!-- Meta Dossier & Link Pills Row -->
        <div class="pd-hero-meta-row">
          <!-- Metadata items -->
          <div class="pd-hero-meta">
            <div class="pd-hero-meta-item">
              <i data-lucide="map-pin" style="width:12px; height:12px; color:var(--text-light);"></i>
              <span>${item.location}</span>
            </div>
            <span class="meta-divider-dot"></span>
            <div class="pd-hero-meta-item">
              <i data-lucide="calendar" style="width:12px; height:12px; color:var(--text-light);"></i>
              <span>Incp ${item.incpDate}</span>
            </div>
            <span class="meta-divider-dot"></span>
            <div class="pd-hero-meta-item">
              <div class="founder-micro-avatar">${item.founderAvatar || item.founder.slice(0, 2).toUpperCase()}</div>
              <span>${item.founder}</span>
            </div>
            <span class="meta-divider-dot"></span>
            <span style="color:var(--text-light);">${item.postedAgo}</span>
          </div>

          <!-- External Website & LinkedIn Action Links -->
          <div class="pd-hero-links-group">
            <a href="${item.website}" target="_blank" class="pd-action-link" title="Visit Website (${item.domain})">
              <i data-lucide="globe" style="width:12px; height:12px;"></i>
              <span>${item.domain}</span>
              <i data-lucide="arrow-up-right" style="width:11px; height:11px; color:var(--text-light);"></i>
            </a>
            <a href="${item.linkedin}" target="_blank" class="pd-action-link" title="LinkedIn Company Profile">
              ${LINKEDIN_ICON_SVG}
              <span>LinkedIn</span>
              <i data-lucide="arrow-up-right" style="width:11px; height:11px; color:var(--text-light);"></i>
            </a>
          </div>
        </div>

        <!-- Category Tags -->
        <div class="pd-hero-tags-row">
          ${(item.tags || []).map(t => `<span class="category-tag-pill">${t}</span>`).join('')}
        </div>
      </div>
    </div>

    <!-- Tabs -->
    <div class="pd-tabs" id="pdTabs">
      <button class="pd-tab ${currentPdTab === 'overview' ? 'active' : ''}" data-tab="overview" onclick="setPdTab('overview')">Overview</button>
      <button class="pd-tab ${currentPdTab === 'features' ? 'active' : ''}" data-tab="features" onclick="setPdTab('features')">Features</button>
      <button class="pd-tab ${currentPdTab === 'pricing' ? 'active' : ''}" data-tab="pricing" onclick="setPdTab('pricing')">Pricing</button>
      <button class="pd-tab ${currentPdTab === 'integrations' ? 'active' : ''}" data-tab="integrations" onclick="setPdTab('integrations')">Integrations</button>
      <button class="pd-tab ${currentPdTab === 'faq' ? 'active' : ''}" data-tab="faq" onclick="setPdTab('faq')">FAQ</button>
    </div>

    <!-- Two-Column Layout (Matches Reference Structure) -->
    <div class="pd-two-col-layout">
      <!-- Main Content Column (Left, ~68%) -->
      <div class="pd-main-col" id="pdMainCol">
        ${renderPdTab(item)}
      </div>

      <!-- Vitals & Leadership Sidebar Column (Right, ~32%) -->
      <div class="pd-side-col">
        ${renderPdSidebar(item)}
      </div>
    </div>
  `;

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function renderPdSidebar(item) {
  const leadershipRoster = [
    { name: item.founder, role: 'Co-founder & CEO', avatar: item.founderAvatar || item.founder.slice(0, 1) },
    { name: 'Marcus Lindner', role: 'Co-founder & CTO', avatar: 'ML' },
    { name: 'Elena Rostova', role: 'Co-founder', avatar: 'ER' }
  ];

  return `
    <div class="pd-vitals-card">
      <!-- Section 1: Founders & leadership -->
      <div class="pd-vitals-section">
        <div class="pd-vitals-header">
          <span class="pd-vitals-title">Founders &amp; leadership</span>
          <button class="pd-vitals-icon-btn" title="View team" onclick="if(window.showToast) window.showToast('Leadership roster for ${item.name}');">
            <i data-lucide="chevron-right" style="width:13px; height:13px;"></i>
          </button>
        </div>

        <div class="pd-leadership-list">
          ${leadershipRoster.map(l => `
            <div class="pd-leader-item">
              <div class="pd-leader-avatar">${l.avatar}</div>
              <div class="pd-leader-info">
                <span class="pd-leader-name">${l.name}</span>
                <span class="pd-leader-role">${l.role}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="pd-vitals-divider"></div>

      <!-- Section 2: Company vitals -->
      <div class="pd-vitals-section">
        <div class="pd-vitals-header">
          <span class="pd-vitals-title">Company vitals</span>
        </div>

        <div class="pd-vitals-list">
          <!-- Founded -->
          <div class="pd-vital-row">
            <div class="pd-vital-icon-circle">
              <i data-lucide="calendar" style="width:14px; height:14px; color:var(--text-dark);"></i>
            </div>
            <div class="pd-vital-content">
              <span class="pd-vital-label">Founded</span>
              <strong class="pd-vital-val">${item.incpDate}</strong>
            </div>
          </div>

          <!-- Headquarters -->
          <div class="pd-vital-row">
            <div class="pd-vital-icon-circle">
              <i data-lucide="map-pin" style="width:14px; height:14px; color:var(--text-dark);"></i>
            </div>
            <div class="pd-vital-content">
              <span class="pd-vital-label">Headquarters</span>
              <strong class="pd-vital-val">${item.location}</strong>
            </div>
          </div>

          <!-- Stage -->
          <div class="pd-vital-row">
            <div class="pd-vital-icon-circle">
              <i data-lucide="building" style="width:14px; height:14px; color:var(--text-dark);"></i>
            </div>
            <div class="pd-vital-content">
              <span class="pd-vital-label">Stage</span>
              <strong class="pd-vital-val">${item.stage}</strong>
            </div>
          </div>

          <!-- Team size -->
          <div class="pd-vital-row">
            <div class="pd-vital-icon-circle">
              <i data-lucide="users" style="width:14px; height:14px; color:var(--text-dark);"></i>
            </div>
            <div class="pd-vital-content">
              <span class="pd-vital-label">Team size</span>
              <strong class="pd-vital-val">45+ employees</strong>
            </div>
          </div>

          <!-- Contact email -->
          <div class="pd-vital-row">
            <div class="pd-vital-icon-circle">
              <i data-lucide="mail" style="width:14px; height:14px; color:var(--text-dark);"></i>
            </div>
            <div class="pd-vital-content">
              <span class="pd-vital-label">Contact email</span>
              <a href="mailto:founders@${item.domain}" class="pd-vital-email">founders@${item.domain}</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Action Button -->
      <div style="padding-top:2px;">
        <a href="${item.website}" target="_blank" class="pd-vitals-cta-btn">
          <i data-lucide="globe" style="width:14px; height:14px;"></i>
          <span>Visit website</span>
          <i data-lucide="arrow-up-right" style="width:12px; height:12px; margin-left:auto;"></i>
        </a>
      </div>
    </div>
  `;
}

function updatePdUpvote(id) {
  const item = window.PRODUCT_DIRECTORY_DATA.find(p => p.id === id);
  if (!item) return;

  const btn = document.querySelector('.pd-upvote-cta');
  const countEl = document.getElementById(`pd-upvote-count-${id}`);
  const labelEl = btn ? btn.querySelector('.pd-upvote-label') : null;

  if (btn) {
    btn.classList.toggle('upvoted', item.hasUpvoted);
    if (labelEl) labelEl.textContent = item.hasUpvoted ? 'Upvoted' : 'Upvote';
  }
  if (countEl) {
    countEl.textContent = item.upvotes.toLocaleString();
  }
}

function setPdTab(tab) {
  currentPdTab = tab;
  const item = getCurrentPdItem();
  if (!item) return;
  document.querySelectorAll('.pd-tab').forEach(t => t.classList.toggle('active', t.getAttribute('data-tab') === tab));
  const content = document.getElementById('pdMainCol');
  if (content) content.innerHTML = renderPdTab(item);
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function getCurrentPdItem() {
  const params = new URLSearchParams(window.location.search);
  return window.PRODUCT_DIRECTORY_DATA.find(p => p.id === (params.get('id') || 'linear'));
}

window.playDemoVideoModal = function(name) {
  openModal(`${name} — Product walkthrough`, `
    <div style="aspect-ratio:16/9; border-radius:8px; overflow:hidden; background:#0F0F0E; display:flex; align-items:center; justify-content:center; flex-direction:column; gap:12px; border:1px solid var(--border-main); padding:20px; text-align:center;">
      <div style="width:52px; height:52px; border-radius:50%; background:#FFFFFF; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 16px rgba(0,0,0,0.3);">
        <i data-lucide="play" style="width:20px; height:20px; fill:#111; stroke:none; margin-left:3px;"></i>
      </div>
      <div style="font-size:13.5px; font-weight:800; color:#FFFFFF;">Interactive 1080p demo video playing</div>
      <div style="font-size:11.5px; color:#A1A19A; max-width:380px;">Live product sandbox walkthrough streaming for ${name}. Audio narration initialized.</div>
    </div>
  `);
};

function renderPdTab(item) {
  const tags = (item.tags || []).map(t => `<span class="category-tag-pill">${t}</span>`).join('');
  const features = (item.features || []).map(f => `
    <div class="pd-feature-item">
      <i data-lucide="check" class="pd-feature-check"></i>
      <span>${f}</span>
    </div>
  `).join('');
  const integrations = (item.integrations || DEFAULT_INTEGRATIONS).map(t => `
    <div class="pd-integration-item">
      <i data-lucide="plug" class="pd-integration-icon"></i>
      <span>${t}</span>
    </div>
  `).join('');

  const faqs = item.faqs || [
    { q: `What problem does ${item.name} solve?`, a: item.tagline },
    { q: 'Who is the target audience?', a: `${item.name} serves fast-moving teams and enterprises across the ${item.category} category.` },
    { q: `What makes ${item.name} unique?`, a: `${item.detailedDesc}` },
    { q: 'How does the business model work?', a: `${item.pricing}. ${item.name} scales usage-based plans designed around team adoption and growth.` },
    { q: 'What is the development roadmap?', a: `${item.name} ships regular platform updates focused on performance, integrations, and enterprise governance.` }
  ];

  if (currentPdTab === 'overview') {
    return `
      <!-- Card 1: Product demo video -->
      <div class="pd-card">
        <div class="pd-card-header">
          <div class="pd-card-header-left">
            <span class="pd-card-icon-wrap"><i data-lucide="play" class="lucide-sm"></i></span>
            <h3 class="pd-card-title">Product demo video</h3>
          </div>
          <span class="badge-pill neutral-soft">1080p HD</span>
        </div>

        <!-- 16:9 Video player frame with play button overlay -->
        <div class="pd-video-player-frame" onclick="playDemoVideoModal('${item.name}')" title="Click to play demo video">
          <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80" alt="${item.name} demo video" class="pd-video-cover-img" />
          <div class="pd-video-overlay-tint"></div>
          <div class="pd-video-play-btn">
            <i data-lucide="play" style="width:20px; height:20px; fill:#141413; stroke:none; margin-left:3px;"></i>
          </div>
          <div class="pd-video-brand-overlay">
            <span style="font-weight:800; font-size:14px; letter-spacing:-0.02em;">${item.name} pitch &amp; walkthrough</span>
            <span style="font-size:11.5px; opacity:0.9;">${item.tagline.slice(0, 50)}...</span>
          </div>
          <span class="pd-video-duration-pill">2:34</span>
        </div>

        <p class="pd-card-caption">
          Watch how ${item.name} works — from setup to daily high-performance team workflows in under 3 minutes.
        </p>
      </div>

      <!-- Card 2: Product screenshots carousel -->
      <div class="pd-card">
        <div class="pd-card-header">
          <div class="pd-card-header-left">
            <span class="pd-card-icon-wrap"><i data-lucide="layers" class="lucide-sm"></i></span>
            <h3 class="pd-card-title">Product screenshots</h3>
          </div>
          <span class="badge-pill neutral-soft">5 preview slides</span>
        </div>

        <!-- Image carousel -->
        <div class="pd-carousel">
          <div class="pd-carousel-viewport">
            <img src="${PRODUCT_GALLERY_IMAGES[currentCarouselIndex]}" alt="${item.name} screenshots" id="pdCarouselImg" />
          </div>
          <button class="pd-carousel-btn prev" onclick="pdCarouselPrev()" title="Previous screenshot">
            <i data-lucide="chevron-left" style="width:16px; height:16px;"></i>
          </button>
          <button class="pd-carousel-btn next" onclick="pdCarouselNext()" title="Next screenshot">
            <i data-lucide="chevron-right" style="width:16px; height:16px;"></i>
          </button>
          <div class="pd-carousel-dots" id="pdCarouselDots">
            ${PRODUCT_GALLERY_IMAGES.map((_, i) => `
              <button class="pd-carousel-dot ${i === currentCarouselIndex ? 'active' : ''}" onclick="pdCarouselGo(${i})" title="Screenshot ${i + 1}"></button>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Card 3: About the product & capabilities -->
      <div class="pd-card">
        <div class="pd-card-header">
          <div class="pd-card-header-left">
            <span class="pd-card-icon-wrap"><i data-lucide="sparkles" class="lucide-sm"></i></span>
            <h3 class="pd-card-title">About the product</h3>
          </div>
        </div>
        <p class="pd-card-caption" style="color:var(--text-main); font-size:13px; line-height:1.6;">${item.detailedDesc}</p>
        
        <div style="margin-top:4px;">
          <h4 style="font-size:12.5px; font-weight:800; color:var(--text-dark); margin-bottom:8px;">Core capabilities</h4>
          <div class="pd-feature-grid">${features}</div>
        </div>
      </div>

      <!-- Card 4: Verified community reviews -->
      ${pdReviewsHtml(item)}
    `;
  }

  if (currentPdTab === 'features') {
    return `
      <div class="pd-card">
        <div class="pd-card-header">
          <div class="pd-card-header-left">
            <span class="pd-card-icon-wrap"><i data-lucide="check-circle-2" class="lucide-sm"></i></span>
            <h3 class="pd-card-title">Key features &amp; specifications</h3>
          </div>
        </div>
        <div class="pd-feature-grid">${features}</div>
        <div style="margin-top:8px;">
          <h4 style="font-size:12px; font-weight:800; color:var(--text-dark); margin-bottom:6px;">Category &amp; focus tags</h4>
          <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap;">${tags}</div>
        </div>
      </div>
    `;
  }

  if (currentPdTab === 'pricing') {
    return `
      <div class="pd-card">
        <div class="pd-card-header">
          <div class="pd-card-header-left">
            <span class="pd-card-icon-wrap"><i data-lucide="credit-card" class="lucide-sm"></i></span>
            <h3 class="pd-card-title">Pricing plans &amp; tiers</h3>
          </div>
        </div>
        <div class="pd-pricing-card">
          <span class="pd-pricing-plan">Pricing model</span>
          <span class="pd-pricing-value">${item.pricing || 'Freemium / Tiered'}</span>
          <div class="pd-card-caption">Flexible plans designed to grow with your team — from free developer tiers to enterprise SLA tiers.</div>
        </div>
      </div>
    `;
  }

  if (currentPdTab === 'integrations') {
    return `
      <div class="pd-card">
        <div class="pd-card-header">
          <div class="pd-card-header-left">
            <span class="pd-card-icon-wrap"><i data-lucide="plug" class="lucide-sm"></i></span>
            <h3 class="pd-card-title">Supported integrations</h3>
          </div>
        </div>
        <div class="pd-integration-grid">${integrations}</div>
      </div>
    `;
  }

  if (currentPdTab === 'faq') {
    return `
      <div class="pd-card">
        <div class="pd-card-header">
          <div class="pd-card-header-left">
            <span class="pd-card-icon-wrap"><i data-lucide="help-circle" class="lucide-sm"></i></span>
            <h3 class="pd-card-title">Frequently asked questions</h3>
          </div>
        </div>
        <div>
          ${faqs.map(f => `
            <div class="pd-faq-item">
              <div class="pd-faq-q">${f.q}</div>
              <div class="pd-faq-a">${f.a}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  return '';
}

// Carousel controls
function pdCarouselGo(index) {
  const total = PRODUCT_GALLERY_IMAGES.length;
  currentCarouselIndex = (index + total) % total;
  const img = document.getElementById('pdCarouselImg');
  if (img) img.src = PRODUCT_GALLERY_IMAGES[currentCarouselIndex];
  document.querySelectorAll('.pd-carousel-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentCarouselIndex);
  });
}

function pdCarouselPrev() {
  pdCarouselGo(currentCarouselIndex - 1);
}

function pdCarouselNext() {
  pdCarouselGo(currentCarouselIndex + 1);
}

// ──────────────────────────────────────────────────────────────────────────
// 03c. REVIEWS (Amazon-style, on the Overview tab)
// ──────────────────────────────────────────────────────────────────────────
const pdReviewsStore = {};
let pdReviewRating = 5;

function getPdReviews(item) {
  if (pdReviewsStore[item.id]) return pdReviewsStore[item.id];
  const defaults = [
    {
      author: 'Alex Turner',
      role: 'Engineering Lead',
      rating: 5,
      date: '2 weeks ago',
      helpful: 24,
      text: `${item.name} has completely changed how our team ships. The experience is fast, polished, and every integration just works out of the box.`
    },
    {
      author: 'Priya Sharma',
      role: 'Product Manager',
      rating: 4,
      date: '1 month ago',
      helpful: 12,
      text: `Strong product with a clear roadmap. A few edge cases around enterprise controls, but overall a massive upgrade over our previous tooling.`
    },
    {
      author: 'Marcus Lee',
      role: 'Independent Consultant',
      rating: 5,
      date: '2 months ago',
      helpful: 9,
      text: `I recommend ${item.name} to every founder I advise. It balances power with simplicity better than anything else in the space.`
    }
  ];
  pdReviewsStore[item.id] = defaults;
  return defaults;
}

function pdStars(rating) {
  let out = '';
  for (let i = 1; i <= 5; i++) {
    const on = i <= rating;
    out += `<i data-lucide="star" style="width:13px;height:13px;${on ? 'color:var(--text-dark);fill:var(--text-dark);' : 'color:#DCDCD6;fill:#DCDCD6;'}"></i>`;
  }
  return out;
}

function pdReviewStarsPicker() {
  return [1, 2, 3, 4, 5].map(n => {
    const on = n <= pdReviewRating;
    return `
      <button class="pd-star-pick" data-rating="${n}" onclick="pdPickRating(${n})" title="${n} star${n > 1 ? 's' : ''}">
        <i data-lucide="star" style="width:18px;height:18px;${on ? 'color:var(--text-dark);fill:var(--text-dark);' : 'color:#DCDCD6;fill:#DCDCD6;'}"></i>
      </button>`;
  }).join('');
}

function pdPickRating(n) {
  pdReviewRating = n;
  const picker = document.getElementById('pdReviewStars');
  if (picker) {
    picker.innerHTML = pdReviewStarsPicker();
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }
}

function pdReviewsHtml(item) {
  const reviews = getPdReviews(item);
  return `
    <div class="pd-reviews">
      <div class="pd-reviews-header">
        <span class="pd-reviews-title">Reviews</span>
        <span class="pd-reviews-count">${reviews.length} ${reviews.length === 1 ? 'review' : 'reviews'}</span>
      </div>
      <div class="pd-review-list">
        ${reviews.map((r, i) => `
          <div class="pd-review-item">
            <div class="pd-review-top">
              <div class="pd-review-avatar">${r.author.slice(0, 2).toUpperCase()}</div>
              <div>
                <div class="pd-review-author">${r.author}</div>
                <div class="pd-review-role">${r.role}</div>
              </div>
              <div class="pd-review-stars">${pdStars(r.rating)}</div>
              <span class="pd-review-date">${r.date}</span>
            </div>
            <p class="pd-review-text">${r.text}</p>
            <div class="pd-review-actions">
              <button class="pd-review-helpful" onclick="pdHelpful('${item.id}', ${i}, this)">
                <i data-lucide="thumbs-up" style="width:12px; height:12px;"></i>
                <span class="pd-helpful-count">${r.helpful || 0}</span>
                <span>Helpful</span>
              </button>
              <button class="pd-review-report" onclick="if(window.showToast) window.showToast('Review reported to moderators.');">Report</button>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="pd-review-form">
        <div class="pd-review-form-label">Write a Review</div>
        <div class="pd-review-form-rating">
          <span class="pd-review-form-label">Your rating</span>
          <div class="pd-review-stars-picker" id="pdReviewStars">${pdReviewStarsPicker()}</div>
        </div>
        <input type="text" class="pd-review-input" id="pdReviewName" placeholder="Your name (optional)" />
        <textarea class="pd-review-textarea" id="pdReviewText" placeholder="Share what you think about ${item.name}..."></textarea>
        <div class="pd-review-form-footer">
          <button class="btn btn-primary" onclick="pdSubmitReview('${item.id}')">Submit Review</button>
        </div>
      </div>
    </div>
  `;
}

function pdHelpful(id, index, btn) {
  const item = window.PRODUCT_DIRECTORY_DATA.find(p => p.id === id);
  if (!item) return;
  const reviews = getPdReviews(item);
  if (!reviews[index]) return;
  if (btn.classList.contains('voted')) {
    btn.classList.remove('voted');
    reviews[index].helpful = Math.max(0, (reviews[index].helpful || 0) - 1);
  } else {
    btn.classList.add('voted');
    reviews[index].helpful = (reviews[index].helpful || 0) + 1;
  }
  const count = btn.querySelector('.pd-helpful-count');
  if (count) count.textContent = reviews[index].helpful;
}

function pdSubmitReview(id) {
  const item = window.PRODUCT_DIRECTORY_DATA.find(p => p.id === id);
  if (!item) return;
  const text = (document.getElementById('pdReviewText')?.value || '').trim();
  if (!text) {
    if (window.showToast) window.showToast('Please write a review before submitting.', 'alert');
    return;
  }
  const name = (document.getElementById('pdReviewName')?.value || '').trim() || 'Anonymous Founder';
  const reviews = getPdReviews(item);
  reviews.unshift({
    author: name,
    role: 'Verified Member',
    rating: pdReviewRating,
    date: 'Just now',
    helpful: 0,
    text
  });
  pdReviewRating = 5;
  if (window.showToast) window.showToast(`Review published for ${item.name}!`, 'success');
  setPdTab('overview');
}

function toggleUpvote(id) {
  const item = window.PRODUCT_DIRECTORY_DATA.find(p => p.id === id);
  if (!item) return;

  if (item.hasUpvoted) {
    item.hasUpvoted = false;
    item.upvotes -= 1;
    if (window.showToast) window.showToast(`Removed upvote for ${item.name}`);
  } else {
    item.hasUpvoted = true;
    item.upvotes += 1;
    if (window.showToast) window.showToast(`Upvoted ${item.name}!`, 'success');
  }

  renderProductDirectoryStream(window.PRODUCT_DIRECTORY_DATA);
}

// ──────────────────────────────────────────────────────────────────────────
// 04. PRODUCT DETAIL SLIDE-OVER DRAWER
// ──────────────────────────────────────────────────────────────────────────
function openProductDetailDrawer(id) {
  const item = window.PRODUCT_DIRECTORY_DATA.find(p => p.id === id);
  if (!item) return;

  const contentHtml = `
    <!-- Top Header in Drawer -->
    <div style="display:flex; align-items:flex-start; gap:16px; padding-bottom:18px; border-bottom:1px solid var(--border-faint);">
      <div class="startup-logo-container" style="width:64px; height:64px;">
        ${item.logo ? `<img src="${item.logo}" class="startup-logo-img" />` : `<div class="startup-logo-fallback">${item.name.slice(0, 2).toUpperCase()}</div>`}
      </div>
      <div style="flex:1;">
        <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
          <h2 style="font-size:18px; font-weight:800; color:var(--text-dark);">${item.name}</h2>
          <span class="badge-pill neutral-soft">${item.stage}</span>
        </div>
        <p style="font-size:13px; color:var(--text-main); margin-top:4px;">${item.tagline}</p>
        <div style="display:flex; align-items:center; gap:8px; margin-top:8px;">
          <a href="${item.website}" target="_blank" class="btn btn-outline" style="font-size:11.5px; padding:4px 10px;">
            <i data-lucide="globe" class="lucide-sm"></i>
            <span>${item.domain}</span>
          </a>
          <a href="${item.linkedin}" target="_blank" class="btn btn-outline" style="font-size:11.5px; padding:4px 10px;" title="LinkedIn Company Profile">
            ${LINKEDIN_ICON_SVG}
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>

    <!-- About Section -->
    <div>
      <h4 style="font-size:12.5px; font-weight:800; color:var(--text-dark); margin-bottom:6px;">About the Product</h4>
      <p style="font-size:12.5px; color:var(--text-muted); line-height:1.55;">${item.detailedDesc}</p>
    </div>

    <!-- Key Features -->
    <div>
      <h4 style="font-size:12.5px; font-weight:800; color:var(--text-dark); margin-bottom:8px;">Key features</h4>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
        ${(item.features || []).map(f => `
          <div style="background:var(--bg-subtle); border:1px solid var(--border-main); padding:8px 10px; border-radius:6px; font-size:11.5px; font-weight:600; color:var(--text-dark); display:flex; align-items:center; gap:6px;">
            <i data-lucide="check" style="width:12px; height:12px; color:var(--text-dark);"></i>
            <span>${f}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Founder & Entity Dossier -->
    <div style="background:var(--bg-subtle); border:1px solid var(--border-main); border-radius:8px; padding:14px;">
      <h4 style="font-size:12px; font-weight:800; color:var(--text-dark); margin-bottom:10px; text-transform:uppercase; letter-spacing:0.04em;">Company &amp; Founder Dossier</h4>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; font-size:12px;">
        <div>
          <span style="color:var(--text-light); display:block; font-size:10.5px;">Founder</span>
          <strong style="color:var(--text-dark);">${item.founder}</strong>
        </div>
        <div>
          <span style="color:var(--text-light); display:block; font-size:10.5px;">Headquarters</span>
          <strong style="color:var(--text-dark);">${item.location}</strong>
        </div>
        <div>
          <span style="color:var(--text-light); display:block; font-size:10.5px;">Incorporation Date</span>
          <strong style="color:var(--text-dark);">${item.incpDate}</strong>
        </div>
        <div>
          <span style="color:var(--text-light); display:block; font-size:10.5px;">Pricing Model</span>
          <strong style="color:var(--text-dark);">${item.pricing || 'Freemium / Tiered'}</strong>
        </div>
      </div>
    </div>
  `;

  const footerHtml = `
    <button class="btn btn-outline" onclick="closeDrawer()">Close</button>
    <div style="display:flex; align-items:center; gap:8px;">
      <button class="btn btn-outline" onclick="if(window.showToast) window.showToast('Connecting with founder ${item.founder}...');">
        <i data-lucide="message-square" class="lucide-sm"></i>
        <span>Message Founder</span>
      </button>
      <button class="btn btn-primary" onclick="toggleUpvote('${item.id}')">
        <i data-lucide="chevron-up" class="lucide-sm"></i>
        <span>Upvote (${item.upvotes})</span>
      </button>
    </div>
  `;

  openDrawer(item.name, item.category, contentHtml, footerHtml);
}

// ──────────────────────────────────────────────────────────────────────────
// 05. 9-STEP PRODUCT LISTING GUIDED WIZARD (As per refer.md)
// ──────────────────────────────────────────────────────────────────────────
let currentWizardStep = 1;
const wizardFormData = {
  name: '',
  domain: '',
  logo: '',
  shortDesc: '',
  detailedDesc: '',
  website: '',
  address: '',
  socialLinkedin: '',
  socialX: '',
  keyFeatures: '',
  industry: 'B2B SaaS',
  stage: 'Seed',
  pricing: '',
  competitors: '',
  importantLinks: ''
};

function open9StepListingWizard() {
  currentWizardStep = 1;
  renderWizardStepModal();
}

function renderWizardStepModal() {
  const steps = [
    { num: 1, title: 'Step 1: Product Description', sub: 'Logo, Name, Short Description & Detailed Overview' },
    { num: 2, title: 'Step 2: Product Details', sub: 'Website, Company Address & Social Links' },
    { num: 3, title: 'Step 3: Product Media', sub: 'Product Demo Video & Screenshots' },
    { num: 4, title: 'Step 4: Product Integrations', sub: 'Supported tools & API integrations' },
    { num: 5, title: 'Step 5: Product Category', sub: 'Industry & Sector classification' },
    { num: 6, title: 'Step 6: Target Market & Stage', sub: 'Development Stage & Problem Solved FAQ' },
    { num: 7, title: 'Step 7: Pricing & Competitors', sub: 'Pricing Plans & Competitor Links' },
    { num: 8, title: 'Step 8: Important Links', sub: 'Pitch Deck, Whitepaper & Docs' },
    { num: 9, title: 'Step 9: Submit for Review', sub: 'Validation of minimum required fields' }
  ];

  const curr = steps[currentWizardStep - 1];

  let bodyContent = '';

  if (currentWizardStep === 1) {
    bodyContent = `
      <div class="wizard-form-group">
        <label class="wizard-form-label">Startup Website Domain (Auto-fetches Logo via Brandfetch) *</label>
        <div style="display:flex; gap:8px;">
          <input type="text" id="wizDomain" class="wizard-form-input" placeholder="e.g. cursor.com" value="${wizardFormData.domain}" />
          <button class="btn btn-outline" onclick="fetchBrandLogoForWizard()">Fetch Logo</button>
        </div>
      </div>
      <div id="wizLogoPreviewWrap" style="display:flex; align-items:center; gap:12px; padding:10px; background:var(--bg-subtle); border-radius:8px; border:1px solid var(--border-main);">
        <div class="startup-logo-container" id="wizLogoBox" style="width:48px; height:48px;">
          ${wizardFormData.logo ? `<img src="${wizardFormData.logo}" class="startup-logo-img" />` : `<i data-lucide="image" style="color:var(--text-light);"></i>`}
        </div>
        <div>
          <div style="font-size:12px; font-weight:700; color:var(--text-dark);" id="wizLogoTitle">${wizardFormData.name || 'Startup Logo'}</div>
          <div style="font-size:11px; color:var(--text-muted);" id="wizLogoSub">Auto-verified via Brandfetch API</div>
        </div>
      </div>
      <div class="wizard-form-group">
        <label class="wizard-form-label">Product / Startup Name *</label>
        <input type="text" id="wizName" class="wizard-form-input" placeholder="e.g. Cursor" value="${wizardFormData.name}" />
      </div>
      <div class="wizard-form-group">
        <label class="wizard-form-label">Short Description (Tagline) *</label>
        <input type="text" id="wizShortDesc" class="wizard-form-input" placeholder="e.g. The AI Code Editor built for pair programming" value="${wizardFormData.shortDesc}" />
      </div>
      <div class="wizard-form-group">
        <label class="wizard-form-label">Detailed Description *</label>
        <textarea id="wizDetailedDesc" class="wizard-form-textarea" placeholder="Provide full breakdown of what the product does, target audience, and architecture...">${wizardFormData.detailedDesc}</textarea>
      </div>
    `;
  } else if (currentWizardStep === 2) {
    bodyContent = `
      <div class="wizard-form-group">
        <label class="wizard-form-label">Website URL *</label>
        <input type="url" id="wizWebsite" class="wizard-form-input" placeholder="https://..." value="${wizardFormData.website || (wizardFormData.domain ? 'https://' + wizardFormData.domain : '')}" />
      </div>
      <div class="wizard-form-group">
        <label class="wizard-form-label">Company Address / Location *</label>
        <input type="text" id="wizAddress" class="wizard-form-input" placeholder="e.g. San Francisco, CA or Bengaluru, IN" value="${wizardFormData.address}" />
      </div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
        <div class="wizard-form-group">
          <label class="wizard-form-label">LinkedIn Company Page</label>
          <input type="url" id="wizLinkedin" class="wizard-form-input" placeholder="https://linkedin.com/company/..." value="${wizardFormData.socialLinkedin}" />
        </div>
        <div class="wizard-form-group">
          <label class="wizard-form-label">X / Twitter Handle</label>
          <input type="text" id="wizX" class="wizard-form-input" placeholder="@handle" value="${wizardFormData.socialX}" />
        </div>
      </div>
      <div class="wizard-form-group">
        <label class="wizard-form-label">Key Features (Comma-separated)</label>
        <input type="text" id="wizFeatures" class="wizard-form-input" placeholder="e.g. AI Autocomplete, Multi-file edits, Instant indexing" value="${wizardFormData.keyFeatures}" />
      </div>
    `;
  } else if (currentWizardStep === 3) {
    bodyContent = `
      <div class="wizard-form-group">
        <label class="wizard-form-label">Product Demo Video (YouTube / Loom URL)</label>
        <input type="url" class="wizard-form-input" placeholder="https://youtube.com/watch?v=..." />
      </div>
      <div class="wizard-form-group">
        <label class="wizard-form-label">Product Screenshots / Media (Up to 6 images)</label>
        <div style="border:1.5px dashed var(--border-frame); border-radius:8px; padding:24px; text-align:center; background:var(--bg-subtle); cursor:pointer;" onclick="if(window.showToast) window.showToast('Selected 2 sample screenshots');">
          <i data-lucide="upload-cloud" style="width:28px; height:28px; color:var(--text-light); margin-bottom:4px;"></i>
          <div style="font-size:12px; font-weight:700; color:var(--text-dark);">Click to upload screenshots</div>
          <div style="font-size:11px; color:var(--text-muted);">PNG, JPG or WebP up to 10MB</div>
        </div>
      </div>
    `;
  } else if (currentWizardStep === 4) {
    bodyContent = `
      <div class="wizard-form-group">
        <label class="wizard-form-label">Integrations Supported (Multiple)</label>
        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:8px; margin-top:4px;">
          ${['GitHub', 'Slack', 'PostgreSQL', 'Stripe', 'Figma', 'Zapier'].map(tool => `
            <label style="display:flex; align-items:center; gap:6px; padding:8px 10px; background:var(--bg-subtle); border:1px solid var(--border-main); border-radius:6px; font-size:12px; cursor:pointer;">
              <input type="checkbox" checked />
              <span>${tool}</span>
            </label>
          `).join('')}
        </div>
      </div>
    `;
  } else if (currentWizardStep === 5) {
    bodyContent = `
      <div class="wizard-form-group">
        <label class="wizard-form-label">Primary Industry *</label>
        <select id="wizIndustry" class="wizard-form-input">
          <option ${wizardFormData.industry === 'B2B SaaS' ? 'selected' : ''}>B2B SaaS</option>
          <option ${wizardFormData.industry === 'AI & ML' ? 'selected' : ''}>AI & ML</option>
          <option ${wizardFormData.industry === 'DevTools' ? 'selected' : ''}>DevTools</option>
          <option ${wizardFormData.industry === 'Fintech' ? 'selected' : ''}>Fintech</option>
          <option ${wizardFormData.industry === 'Healthcare' ? 'selected' : ''}>Healthcare</option>
          <option ${wizardFormData.industry === 'ClimateTech' ? 'selected' : ''}>ClimateTech</option>
        </select>
      </div>
      <div class="wizard-form-group">
        <label class="wizard-form-label">Other Industry / Tags (Optional)</label>
        <input type="text" class="wizard-form-input" placeholder="e.g. Developer Experience, Generative AI" />
      </div>
    `;
  } else if (currentWizardStep === 6) {
    bodyContent = `
      <div class="wizard-form-group">
        <label class="wizard-form-label">Development Stage *</label>
        <select id="wizStage" class="wizard-form-input">
          <option>Idea / Prototype</option>
          <option>Pre-Seed</option>
          <option selected>Seed Stage</option>
          <option>Series A</option>
          <option>Growth / Scale</option>
        </select>
      </div>
      <div class="wizard-form-group">
        <label class="wizard-form-label">Problem Solved (FAQ 1)</label>
        <textarea class="wizard-form-textarea" style="min-height:50px;" placeholder="What core friction or market problem does this product solve?"></textarea>
      </div>
      <div class="wizard-form-group">
        <label class="wizard-form-label">Target Audience (FAQ 2)</label>
        <input type="text" class="wizard-form-input" placeholder="e.g. Software engineers, engineering leaders, DevOps teams" />
      </div>
    `;
  } else if (currentWizardStep === 7) {
    bodyContent = `
      <div class="wizard-form-group">
        <label class="wizard-form-label">Pricing Plan Summary</label>
        <input type="text" id="wizPricing" class="wizard-form-input" placeholder="e.g. Free Tier / $20 Pro" value="${wizardFormData.pricing}" />
      </div>
      <div class="wizard-form-group">
        <label class="wizard-form-label">Key Competitor Links</label>
        <input type="text" class="wizard-form-input" placeholder="https://competitor.com" />
      </div>
    `;
  } else if (currentWizardStep === 8) {
    bodyContent = `
      <div class="wizard-form-group">
        <label class="wizard-form-label">Important Links (Pitch Deck, Docs, Whitepaper)</label>
        <div style="display:flex; flex-direction:column; gap:8px;">
          <input type="text" class="wizard-form-input" placeholder="Pitch Deck URL (e.g. Deckwale or Google Slides)" />
          <input type="text" class="wizard-form-input" placeholder="Developer Documentation (e.g. https://docs...)" />
        </div>
      </div>
    `;
  } else if (currentWizardStep === 9) {
    bodyContent = `
      <div style="background:var(--bg-subtle); border:1px solid var(--border-main); border-radius:8px; padding:16px;">
        <h4 style="font-size:13px; font-weight:800; color:var(--text-dark); margin-bottom:8px;">Required fields validation (step 9)</h4>
        <div style="display:flex; flex-direction:column; gap:6px; font-size:12px;">
          <div style="display:flex; align-items:center; gap:8px;">
            <i data-lucide="check-circle" style="width:14px; height:14px; color:var(--text-dark);"></i>
            <span><strong>Product name:</strong> ${wizardFormData.name || 'Cursor AI'}</span>
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            <i data-lucide="check-circle" style="width:14px; height:14px; color:var(--text-dark);"></i>
            <span><strong>Website:</strong> ${wizardFormData.website || 'https://cursor.com'}</span>
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            <i data-lucide="check-circle" style="width:14px; height:14px; color:var(--text-dark);"></i>
            <span><strong>Company address:</strong> ${wizardFormData.address || 'San Francisco, CA'}</span>
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            <i data-lucide="check-circle" style="width:14px; height:14px; color:var(--text-dark);"></i>
            <span><strong>Industry:</strong> ${wizardFormData.industry}</span>
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            <i data-lucide="check-circle" style="width:14px; height:14px; color:var(--text-dark);"></i>
            <span><strong>Development stage:</strong> ${wizardFormData.stage}</span>
          </div>
        </div>
      </div>
      <p style="font-size:12px; color:var(--text-muted); margin-top:8px;">
        By clicking <strong>Submit for admin review</strong>, your startup will be published to the verified product directory.
      </p>
    `;
  }

  const modalHtml = `
    <!-- Step Dots Progress Indicator -->
    <div class="wizard-steps-indicator">
      ${steps.map(s => `
        <div class="wizard-step-dot ${s.num === currentWizardStep ? 'active' : s.num < currentWizardStep ? 'completed' : ''}" title="${s.title}"></div>
      `).join('')}
    </div>

    <!-- Step Body -->
    <div class="wizard-step-body">
      <div>
        <div class="wizard-step-title">${curr.title}</div>
        <div class="wizard-step-subtitle">${curr.sub}</div>
      </div>
      <div style="display:flex; flex-direction:column; gap:12px; margin-top:8px;">
        ${bodyContent}
      </div>
    </div>

    <!-- Step Footer Buttons -->
    <div class="modal-footer" style="padding:14px 20px;">
      <div style="font-size:11px; font-weight:700; color:var(--text-light);">
        Step ${currentWizardStep} of 9
      </div>
      <div style="display:flex; align-items:center; gap:8px;">
        ${currentWizardStep > 1 ? `
          <button class="btn btn-outline" onclick="prevWizardStep()">Back</button>
        ` : `
          <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
        `}
        ${currentWizardStep < 9 ? `
          <button class="btn btn-primary" onclick="nextWizardStep()">Continue</button>
        ` : `
          <button class="btn btn-primary" onclick="submitListingForm()">Submit for Review</button>
        `}
      </div>
    </div>
  `;

  openModal('List Your Startup / Product', modalHtml);
}

function saveCurrentStepData() {
  if (currentWizardStep === 1) {
    wizardFormData.domain = document.getElementById('wizDomain')?.value?.trim() || wizardFormData.domain;
    wizardFormData.name = document.getElementById('wizName')?.value?.trim() || wizardFormData.name;
    wizardFormData.shortDesc = document.getElementById('wizShortDesc')?.value?.trim() || wizardFormData.shortDesc;
    wizardFormData.detailedDesc = document.getElementById('wizDetailedDesc')?.value?.trim() || wizardFormData.detailedDesc;
  } else if (currentWizardStep === 2) {
    wizardFormData.website = document.getElementById('wizWebsite')?.value?.trim() || wizardFormData.website;
    wizardFormData.address = document.getElementById('wizAddress')?.value?.trim() || wizardFormData.address;
    wizardFormData.socialLinkedin = document.getElementById('wizLinkedin')?.value?.trim() || wizardFormData.socialLinkedin;
    wizardFormData.socialX = document.getElementById('wizX')?.value?.trim() || wizardFormData.socialX;
    wizardFormData.keyFeatures = document.getElementById('wizFeatures')?.value?.trim() || wizardFormData.keyFeatures;
  } else if (currentWizardStep === 5) {
    wizardFormData.industry = document.getElementById('wizIndustry')?.value || wizardFormData.industry;
  } else if (currentWizardStep === 6) {
    wizardFormData.stage = document.getElementById('wizStage')?.value || wizardFormData.stage;
  } else if (currentWizardStep === 7) {
    wizardFormData.pricing = document.getElementById('wizPricing')?.value || wizardFormData.pricing;
  }
}

function nextWizardStep() {
  saveCurrentStepData();
  if (currentWizardStep === 1 && !wizardFormData.name) {
    wizardFormData.name = 'Cursor';
    wizardFormData.shortDesc = 'The AI-first Code Editor built for pair programming.';
    wizardFormData.detailedDesc = 'Cursor is an intelligent fork of VS Code powered by frontier AI models.';
    wizardFormData.domain = 'cursor.com';
    wizardFormData.address = 'San Francisco, CA';
  }
  currentWizardStep++;
  renderWizardStepModal();
}

function prevWizardStep() {
  saveCurrentStepData();
  if (currentWizardStep > 1) {
    currentWizardStep--;
    renderWizardStepModal();
  }
}

async function fetchBrandLogoForWizard() {
  const domain = document.getElementById('wizDomain')?.value?.trim();
  if (!domain) {
    if (window.showToast) window.showToast('Please enter a domain name like cursor.com', 'alert');
    return;
  }

  if (window.showToast) window.showToast(`Fetching brand assets from Brandfetch for ${domain}...`);

  try {
    const res = await fetch(`https://api.brandfetch.io/v2/brands/${domain}`, {
      headers: { Authorization: `Bearer ${BRANDFETCH_API_KEY}` }
    });
    const data = await res.json();
    
    const iconUrl = data.logos?.find(l => l.type === 'icon' || l.type === 'symbol')?.formats?.[0]?.src || 
                    data.logos?.find(l => l.type === 'logo')?.formats?.[0]?.src || 
                    data.icon;

    if (iconUrl) {
      wizardFormData.logo = iconUrl;
    }
    if (data.name) {
      wizardFormData.name = data.name;
      const nameInput = document.getElementById('wizName');
      if (nameInput) nameInput.value = data.name;
    }
    if (data.description) {
      wizardFormData.shortDesc = data.description;
      const descInput = document.getElementById('wizShortDesc');
      if (descInput) descInput.value = data.description;
    }
    wizardFormData.domain = domain;
    wizardFormData.website = `https://${domain}`;

    const logoBox = document.getElementById('wizLogoBox');
    if (logoBox && iconUrl) {
      logoBox.innerHTML = `<img src="${iconUrl}" class="startup-logo-img" />`;
    }
    const logoTitle = document.getElementById('wizLogoTitle');
    if (logoTitle) logoTitle.textContent = data.name || domain;

    if (window.showToast) window.showToast(`Successfully verified & loaded ${data.name || domain}!`, 'success');
  } catch (err) {
    console.error(err);
    if (window.showToast) window.showToast(`Loaded ${domain} profile with standard fallback.`);
  }
}

function submitListingForm() {
  saveCurrentStepData();

  const newEntry = {
    id: 'startup-' + Date.now(),
    name: wizardFormData.name || 'New Startup',
    domain: wizardFormData.domain || 'startup.com',
    logo: wizardFormData.logo || '',
    tagline: wizardFormData.shortDesc || 'An innovative technology startup building for high impact.',
    detailedDesc: wizardFormData.detailedDesc || 'Detailed overview submitted via the 9-step founder listing flow.',
    founder: 'Dr. Sarah Chen',
    founderAvatar: 'SC',
    location: wizardFormData.address || 'San Francisco, CA',
    incpDate: 'Aug 2026',
    postedAgo: 'Just now',
    website: wizardFormData.website || 'https://' + (wizardFormData.domain || 'seedicon.com'),
    linkedin: wizardFormData.socialLinkedin || 'https://linkedin.com/company/seedicon',
    category: wizardFormData.industry || 'B2B SaaS',
    tags: [wizardFormData.industry || 'B2B SaaS', 'Seedicon Listed', wizardFormData.stage || 'Seed'],
    stage: wizardFormData.stage || 'Seed Stage',
    upvotes: 1,
    hasUpvoted: true,
    pricing: wizardFormData.pricing || 'Freemium',
    features: ['Real-time sync', 'Multi-tenant architecture', 'Enterprise grade security']
  };

  window.PRODUCT_DIRECTORY_DATA.unshift(newEntry);
  closeModal();

  if (window.showToast) {
    window.showToast(`"${newEntry.name}" published to Product Directory!`, 'success');
  }

  renderProductDirectoryStream(window.PRODUCT_DIRECTORY_DATA);
}

// ──────────────────────────────────────────────────────────────────────────
// 06. GENERIC MODAL, DRAWER & TOAST HELPERS
// ──────────────────────────────────────────────────────────────────────────
window.openModal = function(title, contentHtml) {
  let overlay = document.getElementById('modalOverlay');
  let titleEl = document.getElementById('modalTitle');
  let bodyEl = document.getElementById('modalBody');

  if (!overlay) {
    const slot = document.getElementById('modalSlot') || document.body;
    const wrap = document.createElement('div');
    wrap.innerHTML = `
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
    slot.appendChild(wrap.firstElementChild);
    overlay = document.getElementById('modalOverlay');
    titleEl = document.getElementById('modalTitle');
    bodyEl = document.getElementById('modalBody');
  }

  if (titleEl) titleEl.textContent = title;
  if (bodyEl) bodyEl.innerHTML = contentHtml;
  if (overlay) {
    overlay.style.display = 'flex';
    overlay.onclick = function(e) {
      if (e.target === overlay) window.closeModal();
    };
  }
  if (typeof lucide !== 'undefined') lucide.createIcons();
};

window.showModal = window.openModal;

window.closeModal = function() {
  const overlay = document.getElementById('modalOverlay');
  if (overlay) overlay.style.display = 'none';
};

window.openDrawer = function(title, subtitle, bodyHtml, footerHtml = '') {
  let backdrop = document.getElementById('drawerBackdrop');
  let panel = document.getElementById('drawerPanel');

  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.id = 'drawerBackdrop';
    backdrop.className = 'drawer-backdrop';
    backdrop.onclick = window.closeDrawer;
    document.body.appendChild(backdrop);
  }

  if (!panel) {
    panel = document.createElement('div');
    panel.id = 'drawerPanel';
    panel.className = 'drawer-panel';
    document.body.appendChild(panel);
  }

  panel.innerHTML = `
    <div class="drawer-header">
      <div>
        <h3 style="font-size:15px; font-weight:800; color:var(--text-dark);">${title}</h3>
        <span style="font-size:11.5px; color:var(--text-muted);">${subtitle}</span>
      </div>
      <button class="btn-icon" onclick="closeDrawer()" title="Close">
        <i data-lucide="x"></i>
      </button>
    </div>
    <div class="drawer-body">${bodyHtml}</div>
    ${footerHtml ? `<div class="drawer-footer">${footerHtml}</div>` : ''}
  `;

  backdrop.style.display = 'block';
  panel.style.display = 'flex';
  setTimeout(() => panel.classList.add('open'), 10);
  if (typeof lucide !== 'undefined') lucide.createIcons();
};

window.closeDrawer = function() {
  const backdrop = document.getElementById('drawerBackdrop');
  const panel = document.getElementById('drawerPanel');
  if (panel) {
    panel.classList.remove('open');
    setTimeout(() => {
      if (panel) panel.style.display = 'none';
      if (backdrop) backdrop.style.display = 'none';
    }, 220);
  }
};

window.showToast = function(message, icon = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <i data-lucide="${icon === 'success' ? 'check-circle' : icon === 'alert' ? 'alert-circle' : 'sparkles'}" style="width:14px; height:14px;"></i>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  if (typeof lucide !== 'undefined') lucide.createIcons();

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(6px)';
    toast.style.transition = 'all 0.2s ease';
    setTimeout(() => toast.remove(), 220);
  }, 2800);
};

function selectStartup(name, short, stage) {
  const label = document.getElementById('activeStartupLabel');
  if (label) label.textContent = name;
  const dot = document.querySelector('.startup-logo-dot');
  if (dot) dot.textContent = short;
  closeAllDropdowns();
  if (window.showToast) window.showToast(`Switched active venture to ${name}`, 'success');
}

function openNewStartupModal() {
  open9StepListingWizard();
}

function openAction(type) {
  closeAllDropdowns();
  if (type === 'deck') {
    if (window.showToast) window.showToast('Opening Pitch Deck Reviewer (Deckwale AI)...');
  } else if (type === 'vdr') {
    if (window.showToast) window.showToast('Opening Due Diligence Checklist...');
  } else if (type === 'report') {
    if (window.showToast) window.showToast('Opening Investor Updates...');
  } else if (type === 'grants') {
    if (window.showToast) window.showToast('Opening Government Grants Matcher...');
  }
}

function openInviteModal() {
  openModal('Invite Team & Co-Founders', `
    <p style="font-size:12px; color:var(--text-muted); margin-bottom:14px;">
      Collaborate on product listings, pitch decks, and grant applications with your co-founders and team members.
    </p>
    <div style="display:flex; flex-direction:column; gap:12px;">
      <div>
        <label style="font-size:11px; font-weight:700; color:var(--text-dark); display:block; margin-bottom:4px;">Email Address *</label>
        <input type="email" id="inviteEmailInput" placeholder="co-founder@startup.com" style="width:100%; padding:8px 10px; border:1px solid var(--border-main); border-radius:6px; font-size:12px; font-family:Inter;" />
      </div>
      <div>
        <label style="font-size:11px; font-weight:700; color:var(--text-dark); display:block; margin-bottom:4px;">Role & Access</label>
        <select style="width:100%; padding:8px 10px; border:1px solid var(--border-main); border-radius:6px; font-size:12px; font-family:Inter;">
          <option selected>Co-Founder (Full Admin Access)</option>
          <option>Editor (Product & Data Vault)</option>
          <option>Viewer (Read-Only)</option>
        </select>
      </div>
    </div>
    <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:20px;">
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="confirmSendInvite()">Send Invite</button>
    </div>
  `);
}

function confirmSendInvite() {
  const email = document.getElementById('inviteEmailInput')?.value?.trim() || 'colleague';
  closeModal();
  if (window.showToast) window.showToast(`Invitation sent to ${email}`, 'success');
}

function showNotifications() {
  if (window.showToast) window.showToast('No new founder notifications.');
}

function showHelp() {
  if (window.showToast) window.showToast('Opening Seedicon Founder Documentation & Guides...');
}

function handleNavClick(navKey) {
  if (navKey === 'listing') {
    window.location.href = './product-listing.html';
    return;
  }
  if (navKey === 'dashboard') {
    window.location.href = './index.html';
    return;
  }
  if (navKey === 'network') {
    window.location.href = './founder-network.html';
    return;
  }
  if (navKey === 'analytics') {
    window.location.href = './product-analytics.html';
    return;
  }
  if (navKey === 'deck') {
    window.location.href = './pitch-deck-reviewer.html';
    return;
  }
  if (navKey === 'investors') {
    window.location.href = './investor-tracking.html';
    return;
  }
  if (window.showToast) {
    const titles = {
      dashboard: 'Founder Dashboard',
      listing: 'Product Listing',
      analytics: 'Product Analytics',
      deck: 'Pitch Deck Reviewer (AI)',
      investors: 'Investor Tracking (CRM)',
      diligence: 'Due-Diligence Checklist',
      grants: 'Government Grants (6 Matched)',
      problems: 'Real Market Problems',
      network: 'Founder Network',
      challenges: 'Founder Challenges & Solutions'
    };
    window.showToast(`${titles[navKey] || 'Module'} selected`);
  }
}


/* ══════════════════════════════════════════════════════════════════════════
   FOUNDER NETWORK (Founder directory + premium investor contacts)
   ══════════════════════════════════════════════════════════════════════════ */

// Unified interleaved feed: founders + premium investors in one stream
window.FOUNDER_NETWORK_ITEMS = [
  {
    kind: 'founder',
    id: 'amara-okafor',
    name: 'Amara Okafor',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    designation: 'Founder & CEO',
    company: 'Nova Health',
    location: 'Lagos, Nigeria',
    website: 'https://novahealth.ai',
    email: 'amara@novahealth.ai',
    linkedin: 'https://linkedin.com/in/amaraokafor',
    tagline: 'AI-powered maternal care for emerging markets.',
    verified: true,
    messageEnabled: true
  },
  {
    kind: 'founder',
    id: 'daniel-reyes',
    name: 'Daniel Reyes',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    designation: 'Co-Founder & CTO',
    company: 'Stackform',
    location: 'Austin, USA',
    website: 'https://stackform.dev',
    email: 'daniel@stackform.dev',
    linkedin: 'https://linkedin.com/in/danielreyes',
    tagline: 'The fastest way to ship internal tools.',
    verified: true,
    messageEnabled: true
  },
  {
    kind: 'investor',
    name: 'Sarah Mitchell',
    type: 'Angel Investor',
    sectors: ['Fintech', 'B2B SaaS', 'HealthTech'],
    hidden: [
      { icon: 'mail', text: 'sarah@vervecapital.com' },
      { icon: 'linkedin', text: 'linkedin.com/in/sarahmitchell' },
      { icon: 'map-pin', text: 'San Francisco, USA' },
      { icon: 'calendar', text: '12 deals closed in 2025' }
    ]
  },
  {
    kind: 'founder',
    id: 'priya-nair',
    name: 'Priya Nair',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    designation: 'Founder & CEO',
    company: 'Finloop',
    location: 'Bengaluru, India',
    website: 'https://finloop.in',
    email: 'priya@finloop.in',
    linkedin: 'https://linkedin.com/in/priyanair',
    tagline: 'Neobanking rails built for gig-economy workers.',
    verified: true,
    messageEnabled: true
  },
  {
    kind: 'founder',
    id: 'tom-becker',
    name: 'Tom Becker',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    designation: 'Founder & CEO',
    company: 'Greenlyte',
    location: 'Berlin, Germany',
    website: 'https://greenlyte.co',
    email: 'tom@greenlyte.co',
    linkedin: 'https://linkedin.com/in/tombecker',
    tagline: 'Carbon capture that finally makes economic sense.',
    verified: true,
    messageEnabled: true
  },
  {
    kind: 'investor',
    name: 'Michael Chen',
    type: 'General Partner · Verve Capital',
    sectors: ['AI/ML', 'DevTools', 'Fintech'],
    hidden: [
      { icon: 'mail', text: 'michael@vervecap.com' },
      { icon: 'linkedin', text: 'linkedin.com/in/michaelchen' },
      { icon: 'map-pin', text: 'New York, USA' },
      { icon: 'calendar', text: 'Series A tickets $1M–$5M' }
    ]
  },
  {
    kind: 'founder',
    id: 'sofia-marino',
    name: 'Sofia Marino',
    avatar: 'https://randomuser.me/api/portraits/women/26.jpg',
    designation: 'Co-Founder',
    company: 'Cartwise',
    location: 'Milan, Italy',
    website: 'https://cartwise.io',
    email: 'sofia@cartwise.io',
    linkedin: 'https://linkedin.com/in/sofiamarino',
    tagline: 'Headless checkout for modern DTC brands.',
    verified: false,
    messageEnabled: false
  },
  {
    kind: 'founder',
    id: 'rahul-mehta',
    name: 'Rahul Mehta',
    avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
    designation: 'Founder & CEO',
    company: 'AIdentify',
    location: 'San Francisco, USA',
    website: 'https://aidentify.ai',
    email: 'rahul@aidentify.ai',
    linkedin: 'https://linkedin.com/in/rahulmehta',
    tagline: 'Enterprise-grade AI identity verification.',
    verified: true,
    messageEnabled: true
  },
  {
    kind: 'investor',
    name: 'Elena Novak',
    type: 'Angel Investor',
    sectors: ['ClimateTech', 'DeepTech', 'Energy'],
    hidden: [
      { icon: 'mail', text: 'elena@novakcap.io' },
      { icon: 'linkedin', text: 'linkedin.com/in/elenanovak' },
      { icon: 'map-pin', text: 'London, UK' },
      { icon: 'calendar', text: 'Writes $250k–$1M checks' }
    ]
  }
];

function founderInitials(name) {
  return String(name).split(' ').map(w => w && w[0]).slice(0, 2).join('').toUpperCase();
}

function founderAvatarHtml(f) {
  if (f.avatar) {
    return `<img src="${f.avatar}" alt="${f.name}" onerror="this.outerHTML='<div class=\\'fn-avatar-init\\'>${founderInitials(f.name)}</div>'" />`;
  }
  return `<div class="fn-avatar-init">${founderInitials(f.name)}</div>`;
}

function founderRowHtml(f) {
  const domain = String(f.website || '').replace(/^https?:\/\/(www\.)?/, '').split('/')[0];
  const msgBtn = f.messageEnabled
    ? `<button class="fn-message-btn" onclick="openFounderDrawer('${f.id}')"><i data-lucide="message-square"></i> Message</button>`
    : `<button class="fn-message-btn locked" onclick="openFounderDrawer('${f.id}')" title="Messaging requires a verified profile"><i data-lucide="lock"></i> Message</button>`;

  return `
    <div class="fn-row">
      <div class="fn-main">
        <div class="fn-avatar-wrap">
          <div class="fn-avatar">${founderAvatarHtml(f)}</div>
          ${f.verified ? `<span class="fn-verified-badge" title="Verified Founder"><i data-lucide="badge-check"></i></span>` : ''}
        </div>
        <div class="fn-info">
          <div class="fn-line1">
            <span class="fn-name">${f.name}</span>
            ${f.verified ? `<i data-lucide="badge-check" class="fn-check" title="Verified Founder"></i>` : ''}
            <span class="fn-role">${f.designation} at <span class="fn-company">${f.company}</span></span>
          </div>
          <div class="fn-line2">
            <span class="fn-loc"><i data-lucide="map-pin"></i> ${f.location}</span>
            <span class="fn-dot">&middot;</span>
            <span class="fn-tagline">${f.tagline}</span>
          </div>
          <div class="fn-links">
            <a href="${f.website}" target="_blank" rel="noopener" class="fn-link" title="${f.website}"><i data-lucide="globe"></i> ${domain}</a>
            <a href="mailto:${f.email}" class="fn-link" title="${f.email}"><i data-lucide="mail"></i> ${f.email}</a>
            <a href="${f.linkedin}" target="_blank" rel="noopener" class="fn-link" title="LinkedIn profile"><img src="./assets/linkedin.png" class="fn-linkedin-icon" alt="LinkedIn" /> LinkedIn</a>
          </div>
        </div>
      </div>
      <div class="fn-actions">${msgBtn}</div>
    </div>`;
}

function investorRowHtml(inv) {
  const sectors = inv.sectors.map(s => `<span>${s}</span>`).join('');
  const blurText = inv.hidden.map(h => h.text).join(' · ');

  return `
    <div class="fn-row">
      <div class="fn-main">
        <div class="investor-avatar">${founderInitials(inv.name)}</div>
        <div class="fn-info">
          <div class="fn-line1">
            <span class="fn-name">${inv.name}</span>
            <span class="investor-tag-chip"><i data-lucide="lock"></i> Investor</span>
            <span class="fn-role">${inv.type}</span>
          </div>
          <div class="fn-line2">
            <span class="investor-sectors-label">Interested</span>
            <span class="investor-sectors"><span class="investor-tags">${sectors}</span></span>
          </div>
          <div class="fn-links">
            <span class="investor-blur-line">
              <i data-lucide="lock"></i>
              <span class="investor-blur">${blurText}</span>
            </span>
          </div>
        </div>
      </div>
      <div class="fn-actions">
        <button class="fn-message-btn unlock" onclick="openPaywallModal()"><i data-lucide="lock"></i> Unlock Contact</button>
      </div>
    </div>`;
}

window.renderFounderNetwork = function(filter) {
  const stream = document.getElementById('founderNetworkList');
  if (!stream) return;

  const q = String(filter || '').toLowerCase().trim();
  const items = window.FOUNDER_NETWORK_ITEMS || [];

  const list = q
    ? items.filter(it => {
        const hay = it.kind === 'investor'
          ? [it.name, it.type, it.sectors.join(' ')].join(' ').toLowerCase()
          : [it.name, it.company, it.designation, it.tagline, it.location].join(' ').toLowerCase();
        return hay.includes(q);
      })
    : items;

  const badge = document.getElementById('founderCountBadge');
  if (badge) badge.textContent = `${list.length} Contact${list.length !== 1 ? 's' : ''}`;

  stream.innerHTML = list.length
    ? list.map(it => it.kind === 'investor' ? investorRowHtml(it) : founderRowHtml(it)).join('')
    : `<div style="padding: 32px 14px; text-align:center; color:var(--text-muted); font-size:12.5px;">No contacts match &ldquo;${q}&rdquo;.</div>`;

  if (typeof lucide !== 'undefined') lucide.createIcons();
};

window.handleFounderSearch = function(input) {
  if (window.renderFounderNetwork) renderFounderNetwork(input.value);
};

function founderById(id) {
  return (window.FOUNDER_NETWORK_ITEMS || []).find(x => x.kind === 'founder' && x.id === id);
}

window.openFounderDrawer = function(id) {
  const f = founderById(id);
  if (!f) return;

  if (!f.messageEnabled) {
    if (window.showToast) window.showToast('Your profile needs to be verified to do that.', 'alert');
    return;
  }

  let backdrop = document.getElementById('drawerBackdrop');
  let panel = document.getElementById('drawerPanel');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.id = 'drawerBackdrop';
    backdrop.className = 'drawer-backdrop';
    backdrop.onclick = window.closeDrawer;
    document.body.appendChild(backdrop);
  }
  if (!panel) {
    panel = document.createElement('div');
    panel.id = 'drawerPanel';
    panel.className = 'drawer-panel';
    document.body.appendChild(panel);
  }

  const avatar = f.avatar
    ? `<img src="${f.avatar}" alt="${f.name}" onerror="this.style.visibility='hidden'" />`
    : `<div style="font-size:12px;font-weight:800;color:var(--text-muted);">${founderInitials(f.name)}</div>`;
  const miniAvatar = f.avatar
    ? `<img src="${f.avatar}" alt="${f.name}" onerror="this.style.visibility='hidden'" />`
    : `<div style="font-size:8px;font-weight:800;color:var(--text-muted);">${founderInitials(f.name)}</div>`;

  panel.innerHTML = `
    <div class="chat-header">
      <div class="chat-avatar-wrap">
        <div class="chat-avatar">${avatar}</div>
        ${f.verified ? `<span class="fn-verified-badge" style="bottom:-3px; right:-3px;"><i data-lucide="badge-check"></i></span>` : ''}
      </div>
      <div class="chat-head-id">
        <div class="chat-head-name">${f.name}</div>
        <div class="chat-head-role">${f.designation} · ${f.company}</div>
        <div class="chat-head-status"><span class="status-dot"></span> Online · usually replies within a few hours</div>
      </div>
      <div class="chat-head-actions">
        <button class="chat-profile-btn" onclick="closeDrawer(); if(window.showToast) window.showToast('Opening ${f.name}&#39;s profile...')"><i data-lucide="user"></i> Profile</button>
        <button class="btn-icon" onclick="closeDrawer()" title="Close"><i data-lucide="x"></i></button>
      </div>
    </div>
    <div class="chat-thread" id="chatThread">
      <div class="chat-day">Today</div>
      <div class="chat-msg received">
        <div class="chat-mini-avatar">${miniAvatar}</div>
        <div class="chat-bubble">
          <div class="chat-bubble-name">${f.name}</div>
          <div class="chat-bubble-text">Hey! Thanks for reaching out on Seedicon. I'd love to hear more about what you're building.</div>
          <div class="chat-bubble-time">10:24 AM</div>
        </div>
      </div>
    </div>
    <div class="chat-composer">
      <input id="chatInput" class="chat-input" type="text" placeholder="Write a message to ${f.name}..." onkeydown="if(event.key==='Enter') sendFounderMessage('${f.id}')" />
      <button class="chat-send-btn" onclick="sendFounderMessage('${f.id}')" title="Send message"><i data-lucide="send"></i></button>
    </div>
  `;

  backdrop.style.display = 'block';
  panel.style.display = 'flex';
  setTimeout(() => panel.classList.add('open'), 10);
  if (typeof lucide !== 'undefined') lucide.createIcons();
  setTimeout(() => { const i = document.getElementById('chatInput'); if (i) i.focus(); }, 120);
};

window.sendFounderMessage = function(id) {
  const input = document.getElementById('chatInput');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;
  const thread = document.getElementById('chatThread');
  if (!thread) return;
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  thread.insertAdjacentHTML('beforeend', `
    <div class="chat-msg sent">
      <div class="chat-bubble sent-bubble">
        <div class="chat-bubble-text">${escapeHtml(text)}</div>
        <div class="chat-bubble-time">${time}</div>
      </div>
    </div>`);
  input.value = '';
  thread.scrollTop = thread.scrollHeight;
  const f = founderById(id);
  if (window.showToast) window.showToast(f ? `Message sent to ${f.name}` : 'Message sent', 'success');
};

window.openMessagesNavDrawer = function() {
  const convos = (window.FOUNDER_NETWORK_ITEMS || []).filter(x => x.kind === 'founder' && x.messageEnabled);
  const body = `
    <div class="conv-list">
      ${convos.map((f, i) => `
        <div class="conv-row" onclick="openFounderDrawer('${f.id}')">
          <div class="chat-avatar-wrap">
            <div class="chat-avatar" style="width:36px;height:36px;">
              ${f.avatar ? `<img src="${f.avatar}" alt="" onerror="this.style.visibility='hidden'" />` : `<div style="font-size:10px;font-weight:800;color:var(--text-muted);">${founderInitials(f.name)}</div>`}
            </div>
            ${f.verified ? `<span class="fn-verified-badge" style="bottom:-3px;right:-3px;"><i data-lucide="badge-check"></i></span>` : ''}
          </div>
          <div class="conv-info">
            <div class="conv-top">
              <span class="conv-name">${f.name}</span>
              <span class="conv-time">${i === 0 ? '10:24 AM' : 'Yesterday'}</span>
            </div>
            <div class="conv-preview">${f.name.split(' ')[0]}: Thanks for reaching out — happy to connect...</div>
          </div>
          ${i === 0 ? '<span class="conv-badge">2</span>' : ''}
        </div>`).join('')}
    </div>`;
  window.openDrawer('Messages', 'Recent conversations with founders', body);
};

window.openPaywallModal = function() {
  window.openModal('Unlock Investor Contacts', `
    <div class="paywall">
      <div class="paywall-icon"><i data-lucide="lock"></i></div>
      <p>Premium investor contacts are available to <strong>verified founders</strong> on the Seedicon Pro plan.</p>
      <ul>
        <li>Direct email &amp; LinkedIn access</li>
        <li>Full investor background &amp; past deals</li>
        <li>Priority warm intros</li>
      </ul>
      <div class="paywall-price">$29 <span>/ month</span></div>
      <button class="btn btn-primary" onclick="closeModal(); if(window.showToast) window.showToast('Redirecting to secure checkout...')">Unlock Now</button>
    </div>`);
};

function escapeHtml(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/* ──────────────────────────────────────────────────────────────────────────
   11. GOVERNMENT GRANTS DATASET & CONTROLLERS
   ────────────────────────────────────────────────────────────────────────── */
window.GOVERNMENT_GRANTS_DATA = [
  {
    id: 'fitt-birac-leap',
    title: 'FITT IIT Delhi – BIRAC LEAP Fund for Biotech & MedTech Startups',
    shortTitle: 'BIRAC LEAP Fund',
    tagline: 'Up to ₹70L equity funding for biotech & medtech startups',
    status: 'Closing soon',
    statusType: 'urgent',
    amount: 'Up to ₹70 Lakhs',
    amountRaw: 7000000,
    deadline: 'Closes today!',
    deadlineDate: 'Today, 11:59 PM IST',
    type: 'Funding',
    organization: 'FITT, IIT Delhi',
    orgCode: 'IITD',
    sector: 'Biotech & MedTech',
    fundingType: 'Equity Funding',
    portalUrl: 'https://fitt-iitd.in/birac-leap-fund',
    about: 'This grant program is designed to support innovative startups and entrepreneurs in their growth journey. The initiative provides financial assistance along with mentorship and networking opportunities.\n\nApplicants will be evaluated based on their business model, market potential, team strength, and alignment with the program\'s focus areas.',
    eligibility: [
      'Company should be registered in India as Private Limited, LLP, or Partnership',
      'Startup age should be less than 10 years from the date of incorporation',
      'Annual turnover should not exceed ₹100 crore in any financial year',
      'Working towards innovation, development or improvement of products, processes, or services',
      'Must have DPIIT recognition, if applicable'
    ],
    documents: [
      { name: 'Certificate of Incorporation', desc: 'Proof of company registration under Ministry of Corporate Affairs', required: true },
      { name: 'DPIIT Recognition Certificate', desc: 'Startup India recognition certificate with valid DIPP number', required: true },
      { name: 'Business Plan / Pitch Deck', desc: 'Detailed presentation covering problem, solution, TAM, and unit economics', required: true },
      { name: 'Financial Statements – Last 2 Years', desc: 'Audited P&L and balance sheets or provisional CA certificate', required: true },
      { name: 'Founder Identity Proofs', desc: 'PAN, Aadhaar, and passport copies of all co-founders', required: true },
      { name: 'GST Registration Certificate', desc: 'Valid GSTIN certificate matching registered entity name', required: false }
    ],
    supportNote: 'Need help with your application? Contact our support team for guidance.',
    supportEmail: 'grants-support@seedicon.com',
    supportPhone: '+91 11 2659 7153',
    featured: true
  },
  {
    id: 'sisfs-dpiit',
    title: 'Startup India Seed Fund Scheme (SISFS)',
    shortTitle: 'DPIIT Seed Fund',
    tagline: 'Up to ₹50L financial assistance for proof of concept, prototype, product trials & market entry.',
    status: 'Active',
    statusType: 'active',
    amount: 'Up to ₹50 Lakhs',
    amountRaw: 5000000,
    deadline: 'Rolling applications',
    deadlineDate: 'Quarterly review batches',
    type: 'Grant & Debt',
    organization: 'DPIIT, Ministry of Commerce',
    orgCode: 'DPIIT',
    sector: 'All Sectors',
    fundingType: 'Grant & Debt / Convertible',
    portalUrl: 'https://seedfund.startupindia.gov.in',
    about: 'The Startup India Seed Fund Scheme (SISFS) aims to provide financial assistance to startups for proof of concept, prototype development, product trials, market entry, and commercialization through accredited incubators across India.',
    eligibility: [
      'DPIIT recognized startup incorporated not more than 2 years ago at the time of application',
      'Startup must have a business idea to develop a product or service with market fit and viable commercialization',
      'Startup should not have received more than ₹10 lakh of monetary support under any other government scheme',
      'Shareholding by Indian promoters should be at least 51% at the time of application'
    ],
    documents: [
      { name: 'DPIIT Recognition Certificate', desc: 'Valid DIPP registration certificate', required: true },
      { name: 'Certificate of Incorporation', desc: 'MCA incorporation document', required: true },
      { name: 'Pitch Deck & Proof of Concept Note', desc: 'Summary of problem, solution, and prototype milestone plan', required: true },
      { name: 'Bank Account Details', desc: 'Cancelled cheque and bank statement in entity name', required: true },
      { name: 'Cap Table & Shareholding Declaration', desc: 'Signed declaration of 51%+ Indian shareholding', required: true }
    ],
    supportNote: 'Connect with our grant desk to select the best matching incubator for SISFS routing.',
    supportEmail: 'seedfund-help@seedicon.com',
    featured: true
  },
  {
    id: 'birac-big',
    title: 'BIRAC Biotechnology Ignition Grant (BIG Scheme)',
    shortTitle: 'BIRAC BIG Grant',
    tagline: 'Up to ₹50L ignition grant for commercialization of discovery and healthcare innovation.',
    status: 'Active',
    statusType: 'active',
    amount: 'Up to ₹50 Lakhs',
    amountRaw: 5000000,
    deadline: '15 days left',
    deadlineDate: 'Sep 15, 2026',
    type: 'Non-Dilutive Grant',
    organization: 'BIRAC, Dept of Biotechnology',
    orgCode: 'BIRAC',
    sector: 'Biotech & MedTech',
    fundingType: 'Non-Dilutive Grant',
    portalUrl: 'https://birac.nic.in/big.php',
    about: 'BIG is the flagship grant scheme of BIRAC for biotech startups and individual innovators to establish proof of concept for novel ideas in healthcare, agriculture, industrial biotech, and medical devices.',
    eligibility: [
      'Registered biotechnology/medtech company incorporated less than 5 years ago',
      'Indian majority ownership (minimum 51% equity with Indian citizens)',
      'Startup should have an incubator affiliation or access to laboratory infrastructure',
      'Must have full-time founders dedicated to project commercialization'
    ],
    documents: [
      { name: 'Incorporation & MOA/AOA', desc: 'Full corporate filings and memorandum', required: true },
      { name: 'Project Proposal & Milestones', desc: 'Technical proposal formatted as per BIRAC guidelines', required: true },
      { name: 'IP / Patent Filing Summary', desc: 'Provisional or published patent disclosures, if any', required: false },
      { name: 'Incubator Support Letter', desc: 'MOU or letter of incubation with recognized bio-incubator', required: true }
    ],
    supportNote: 'Need technical review of your BIG grant milestone workplan? Schedule a mentor review.',
    supportEmail: 'biotech-grants@seedicon.com',
    featured: false
  },
  {
    id: 'idex-disc',
    title: 'iDEX – Innovations for Defence Excellence (DISC 11)',
    shortTitle: 'iDEX Defence Grant',
    tagline: 'Up to ₹1.5 Cr grant for defence, aerospace, cyber & unmanned technologies.',
    status: 'Closing soon',
    statusType: 'urgent',
    amount: 'Up to ₹1.5 Crore',
    amountRaw: 15000000,
    deadline: 'Closes in 3 days',
    deadlineDate: 'Aug 21, 2026',
    type: 'Grant-in-Aid',
    organization: 'Ministry of Defence (DDP)',
    orgCode: 'iDEX',
    sector: 'Defense & Aerospace',
    fundingType: 'Grant-in-Aid (Up to 50%)',
    portalUrl: 'https://idex.gov.in',
    about: 'iDEX aims to foster innovation and technology development in Defence and Aerospace by engaging R&D institutes, academia, industry, and startups by providing grant funding to build prototypes for Indian Armed Forces challenge statements.',
    eligibility: [
      'DPIIT recognized startup registered in India',
      '100% Indian shareholding / ownership required for strategic defence tracks',
      'Must solve one of the official DISC challenge problem statements published by Army/Navy/Airforce',
      'Team must have demonstrated capability in hardware/software prototyping'
    ],
    documents: [
      { name: 'Defence Challenge Solution Dossier', desc: 'Detailed architectural proposal mapped to DISC challenge', required: true },
      { name: 'DPIIT Certificate', desc: 'Valid Startup India certificate', required: true },
      { name: 'Security Clearance Undertaking', desc: 'Promoter citizenship affidavits and security compliance', required: true },
      { name: 'CA Net Worth Certificate', desc: 'Matching co-funding commitment documentation', required: true }
    ],
    supportNote: 'Contact iDEX partner incubator desk for DISC challenge technical alignment.',
    supportEmail: 'idex-support@seedicon.com',
    featured: true
  },
  {
    id: 'tide-meity',
    title: 'MeitY TIDE 2.0 – Technology Incubation and Development of Entrepreneurs',
    shortTitle: 'TIDE 2.0 ICT Grant',
    tagline: 'Up to ₹7L EIR & up to ₹30L Grant-in-Aid for ICT, AI, IoT & SaaS startups.',
    status: 'Active',
    statusType: 'active',
    amount: 'Up to ₹30 Lakhs',
    amountRaw: 3000000,
    deadline: 'Rolling cohorts',
    deadlineDate: 'Monthly selection cycles',
    type: 'EIR & Grant-in-Aid',
    organization: 'MeitY Startup Hub (MSH)',
    orgCode: 'MeitY',
    sector: 'DeepTech & AI',
    fundingType: 'Non-Dilutive Grant',
    portalUrl: 'https://meitystartuphub.in/schemes/tide-2-0',
    about: 'TIDE 2.0 promotes tech entrepreneurship through financial and technical support to incubators engaged in supporting ICT startups using emerging technologies like IoT, AI, Blockchain, and Robotics across healthcare, agriculture, and education.',
    eligibility: [
      'Early-stage tech startups or aspiring entrepreneurs with prototype roadmap',
      'Project must focus on emerging ICT domains: AI, IoT, Blockchain, Robotics, CleanTech',
      'Applicants must commit to regular physical/virtual incubation milestones'
    ],
    documents: [
      { name: 'Technical Architecture & Prototype Spec', desc: 'Tech stack details and system diagram', required: true },
      { name: 'Founder CVs and GitHub/Portfolio', desc: 'Engineering background and track record', required: true },
      { name: 'Detailed Milestone Budget', desc: 'Breakup of proposed fund utilization', required: true }
    ],
    supportNote: 'Get assisted review for your TIDE 2.0 application through Seedicon incubation network.',
    supportEmail: 'tide-grants@seedicon.com',
    featured: false
  },
  {
    id: 'nidhi-prayas',
    title: 'DST NIDHI-PRAYAS – PRomoting and Accelerating Young and Aspiring Innovators',
    shortTitle: 'NIDHI PRAYAS Prototyping',
    tagline: 'Up to ₹10L proof-of-concept prototyping grant for physical and deeptech hardware products.',
    status: 'Active',
    statusType: 'active',
    amount: 'Up to ₹10 Lakhs',
    amountRaw: 1000000,
    deadline: '20 days left',
    deadlineDate: 'Sep 20, 2026',
    type: 'Prototyping Grant',
    organization: 'Department of Science and Technology (DST)',
    orgCode: 'DST',
    sector: 'DeepTech & AI',
    fundingType: 'Prototyping Grant (100%)',
    portalUrl: 'https://nidhi-prayas.org',
    about: 'NIDHI-PRAYAS is a dedicated program to support young innovators convert their physical hardware and deeptech product ideas into workable prototypes with fabrication access and ₹10L non-dilutive grant support.',
    eligibility: [
      'Individual innovator or team with innovative hardware / physical tech idea',
      'Should not have received funding for the same prototype from other government agencies',
      'Must utilize the PRAYAS Centre (PC) fab labs for prototype fabrication'
    ],
    documents: [
      { name: 'Hardware Design Document (CAD / Block diagrams)', desc: 'Bill of materials and schematic overviews', required: true },
      { name: 'Identity & Address Proofs', desc: 'Aadhaar / Passport of primary innovator', required: true },
      { name: 'Fab Lab Resource Requirement Sheet', desc: 'List of machines and testing tools needed', required: true }
    ],
    supportNote: 'Need prototyping fab lab recommendations? Our hardware engineering team can assist.',
    supportEmail: 'hardware-grants@seedicon.com',
    featured: false
  }
];

let currentGrantSearch = '';
let currentGrantSector = 'all';
let currentGrantType = 'all';
let currentGrantStatus = 'all';

function renderGovernmentGrantsPage() {
  const container = document.getElementById('governmentGrantsList');
  if (!container) return;

  const countBadge = document.getElementById('grantsCountBadge');
  if (countBadge) {
    countBadge.textContent = `${window.GOVERNMENT_GRANTS_DATA.length} active grants`;
  }

  filterAndRenderGrants();
}

function filterAndRenderGrants() {
  const container = document.getElementById('governmentGrantsList');
  if (!container) return;

  let list = window.GOVERNMENT_GRANTS_DATA || [];

  if (currentGrantSearch.trim()) {
    const q = currentGrantSearch.toLowerCase().trim();
    list = list.filter(g =>
      g.title.toLowerCase().includes(q) ||
      g.tagline.toLowerCase().includes(q) ||
      g.organization.toLowerCase().includes(q) ||
      g.sector.toLowerCase().includes(q) ||
      g.fundingType.toLowerCase().includes(q)
    );
  }

  if (currentGrantSector !== 'all') {
    list = list.filter(g => g.sector.toLowerCase() === currentGrantSector.toLowerCase() || g.sector.toLowerCase() === 'all sectors');
  }

  if (currentGrantType !== 'all') {
    list = list.filter(g => g.fundingType.toLowerCase().includes(currentGrantType.toLowerCase()) || g.type.toLowerCase().includes(currentGrantType.toLowerCase()));
  }

  if (currentGrantStatus !== 'all') {
    list = list.filter(g => g.statusType.toLowerCase() === currentGrantStatus.toLowerCase());
  }

  renderGrantStream(list);
}

function renderGrantStream(list) {
  const container = document.getElementById('governmentGrantsList');
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = `
      <div class="empty-placeholder-box" style="padding:48px 24px; text-align:center;">
        <i data-lucide="landmark" style="width:32px; height:32px; color:var(--text-light); margin-bottom:8px;"></i>
        <h4 style="font-size:14px; font-weight:800; color:var(--text-dark); margin:0 0 4px;">No matching grants found</h4>
        <p style="font-size:12px; color:var(--text-muted); margin:0;">Try adjusting your search terms or filter selections.</p>
      </div>`;
    if (typeof lucide !== 'undefined') lucide.createIcons();
    return;
  }

  container.innerHTML = `
    <div class="startup-listing-stream">
      ${list.map(g => `
        <div class="startup-listing-card" onclick="window.location.href='./grant-detail.html?id=${g.id}'">
          <div class="startup-card-main-left">
            <div class="grant-logo-badge">
              ${g.orgCode}
            </div>
            <div class="startup-card-details">
              <div class="startup-title-row">
                <a href="./grant-detail.html?id=${g.id}" class="startup-name" onclick="event.stopPropagation();">${g.title}</a>
                <span class="category-tag-pill">${g.sector}</span>
                <span class="badge-pill ${g.statusType === 'urgent' ? 'neutral-solid' : 'neutral-soft'}">${g.status}</span>
              </div>
              <p class="startup-tagline">${g.tagline}</p>
              <div class="startup-meta-row">
                <span class="startup-meta-item"><i data-lucide="building" style="width:12px;height:12px;"></i> ${g.organization}</span>
                <span class="startup-meta-item"><strong style="color:var(--text-dark);">${g.amount}</strong></span>
                <span class="startup-meta-item"><i data-lucide="file-badge" style="width:12px;height:12px;"></i> ${g.fundingType}</span>
                <span class="startup-meta-item" style="${g.statusType === 'urgent' ? 'color:#991B1B;font-weight:700;' : ''}"><i data-lucide="clock" style="width:12px;height:12px;"></i> ${g.deadline}</span>
              </div>
            </div>
          </div>

          <div class="startup-card-actions" onclick="event.stopPropagation();" style="display:flex; align-items:center; gap:8px;">
            <a href="${g.portalUrl}" target="_blank" class="btn btn-primary" style="font-size:12px; padding:7px 14px; gap:6px; text-decoration:none; white-space:nowrap;" title="Open official application portal">
              <span>Apply now</span>
              <i data-lucide="arrow-up-right" style="width:12px;height:12px;"></i>
            </a>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function handleGrantSearch(input) {
  currentGrantSearch = input.value;
  filterAndRenderGrants();
}

function handleGrantSectorFilter(val) {
  currentGrantSector = val;
  filterAndRenderGrants();
}

function handleGrantTypeFilter(val) {
  currentGrantType = val;
  filterAndRenderGrants();
}

function handleGrantStatusFilter(val) {
  currentGrantStatus = val;
  filterAndRenderGrants();
}

/* ──────────────────────────────────────────────────────────────────────────
   12. GRANT DETAIL PAGE CONTROLLER
   ────────────────────────────────────────────────────────────────────────── */
function renderGrantDetailPage() {
  const root = document.getElementById('grantDetailRoot');
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const grantId = params.get('id') || 'fitt-birac-leap';
  const grant = (window.GOVERNMENT_GRANTS_DATA || []).find(g => g.id === grantId) || window.GOVERNMENT_GRANTS_DATA[0];

  if (!grant) return;

  document.title = `${grant.title} — Seedicon`;

  // Update Top Nav Breadcrumb
  const breadcrumbName = document.getElementById('grantBreadcrumbName');
  if (breadcrumbName) {
    breadcrumbName.textContent = grant.shortTitle || grant.title;
  }

  root.innerHTML = `
    <!-- Header Surface (Professional Executive Layout) -->
    <div class="grant-detail-hero">
      <div class="grant-hero-main-row">
        <div class="grant-hero-left">
          <div class="grant-hero-org-tile">${grant.orgCode}</div>
          <div class="grant-hero-title-group">
            <div class="grant-hero-meta-line">
              <span class="grant-hero-badge ${grant.statusType === 'urgent' ? 'urgent' : 'active'}">
                <i data-lucide="${grant.statusType === 'urgent' ? 'alert-circle' : 'check-circle-2'}"></i>
                <span>${grant.status}</span>
              </span>
              <span class="grant-hero-sep">·</span>
              <span class="grant-hero-org-name"><i data-lucide="building"></i> ${grant.organization}</span>
              <span class="grant-hero-sep">·</span>
              <span class="grant-hero-sector"><i data-lucide="tag"></i> ${grant.sector}</span>
            </div>
            <h1 class="grant-detail-title">${grant.title}</h1>
            <p class="grant-detail-tagline">${grant.tagline}</p>
          </div>
        </div>

        <!-- Action Column Aligned Right -->
        <div class="grant-hero-actions">
          <a href="${grant.portalUrl}" target="_blank" class="btn btn-primary" style="font-size:12.5px; padding:9px 16px; gap:6px; text-decoration:none; white-space:nowrap;" title="Open official application portal">
            <span>Apply now</span>
            <i data-lucide="arrow-up-right" style="width:13px; height:13px;"></i>
          </a>
          <button class="btn btn-outline" style="font-size:12px; padding:8px 13px; gap:5px; white-space:nowrap;" onclick="openGrantSupportModal('${grant.id}')">
            <i data-lucide="help-circle" style="width:13px; height:13px;"></i>
            <span>Support</span>
          </button>
          <div class="grant-hero-icon-row">
            <button class="btn btn-outline btn-icon" onclick="copyGrantLink('${grant.id}')" title="Share grant">
              <i data-lucide="share-2" style="width:13px; height:13px;"></i>
            </button>
            <button class="btn btn-outline btn-icon" onclick="bookmarkGrant('${grant.id}')" title="Bookmark grant">
              <i data-lucide="bookmark" style="width:13px; height:13px;"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Condensed Vitals Dossier Strip -->
      <div class="grant-vitals-strip">
        <div class="grant-vital-item">
          <span class="grant-vital-label">Amount</span>
          <strong class="grant-vital-value">${grant.amount}</strong>
        </div>
        <div class="grant-vital-divider"></div>
        <div class="grant-vital-item">
          <span class="grant-vital-label">Deadline</span>
          <strong class="grant-vital-value ${grant.statusType === 'urgent' ? 'urgent' : ''}">${grant.deadline}</strong>
        </div>
        <div class="grant-vital-divider"></div>
        <div class="grant-vital-item">
          <span class="grant-vital-label">Funding type</span>
          <strong class="grant-vital-value">${grant.fundingType}</strong>
        </div>
        <div class="grant-vital-divider"></div>
        <div class="grant-vital-item">
          <span class="grant-vital-label">Sector</span>
          <strong class="grant-vital-value">${grant.sector}</strong>
        </div>
        <div class="grant-vital-divider"></div>
        <div class="grant-vital-item">
          <span class="grant-vital-label">Organization</span>
          <strong class="grant-vital-value">${grant.organization}</strong>
        </div>
        <div class="grant-vital-divider"></div>
        <div class="grant-vital-item">
          <span class="grant-vital-label">Type</span>
          <strong class="grant-vital-value">${grant.type}</strong>
        </div>
      </div>
    </div>

    <!-- Section 1: About This Grant -->
    <div class="grant-section">
      <h3 class="grant-section-title">About this grant</h3>
      <p class="grant-section-desc" style="white-space:pre-line;">${grant.about}</p>
    </div>

    <!-- Section 2: Eligibility Criteria -->
    <div class="grant-section">
      <h3 class="grant-section-title">Eligibility criteria</h3>
      <div class="grant-eligibility-list">
        ${(grant.eligibility || []).map(item => `
          <div class="grant-eligibility-item">
            <div class="grant-eligibility-check">
              <i data-lucide="check"></i>
            </div>
            <span>${item}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Section 3: Required Documents -->
    <div class="grant-section">
      <div style="display:flex; align-items:center; justify-content:space-between;">
        <h3 class="grant-section-title">Required documents</h3>
        <span style="font-size:11.5px; color:var(--text-muted);">${grant.documents ? grant.documents.length : 0} items needed</span>
      </div>
      <div class="grant-docs-grid">
        ${(grant.documents || []).map(doc => `
          <div class="grant-doc-card">
            <div class="grant-doc-icon">
              <i data-lucide="file-text"></i>
            </div>
            <div class="grant-doc-info">
              <div style="display:flex; align-items:center; justify-content:space-between; gap:6px;">
                <span class="grant-doc-name">${doc.name}</span>
                <span style="font-size:10px; font-weight:700; color:${doc.required ? 'var(--text-dark)' : 'var(--text-light)'}; background:#F2F2EF; padding:1px 5px; border-radius:4px;">${doc.required ? 'Mandatory' : 'Optional'}</span>
              </div>
              <span class="grant-doc-desc">${doc.desc}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Section 4: Application & Support Note -->
    <div class="grant-section">
      <h3 class="grant-section-title">Application &amp; support</h3>
      <div class="grant-support-box">
        <div class="grant-support-left">
          <div class="grant-support-icon-wrap">
            <i data-lucide="headphones"></i>
          </div>
          <div class="grant-support-text">
            <h4 class="grant-support-heading">Need help with your application?</h4>
            <p class="grant-support-note">${grant.supportNote || 'Contact our support team for guidance with document prep and incubator matching.'}</p>
          </div>
        </div>
        <button class="btn btn-outline" style="font-size:12.5px; padding:8px 14px; white-space:nowrap;" onclick="openGrantSupportModal('${grant.id}')">
          <i data-lucide="message-square" style="width:13px; height:13px;"></i>
          <span>Get assistance</span>
        </button>
      </div>
    </div>
  `;

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

window.openGrantSupportModal = function(grantId) {
  const grant = (window.GOVERNMENT_GRANTS_DATA || []).find(g => g.id === grantId) || window.GOVERNMENT_GRANTS_DATA[0];
  openModal(`Application support — ${grant.shortTitle || grant.title}`, `
    <div style="display:flex; flex-direction:column; gap:16px; font-size:12.5px;">
      <p style="color:var(--text-main); margin:0; line-height:1.5;">
        Our grant desk assists founders in document verification, technical pitch refinement, and direct routing through partner incubators.
      </p>

      <div style="background:#FAFAF9; border:1px solid var(--border-main); border-radius:10px; padding:14px; display:flex; flex-direction:column; gap:10px;">
        <div style="display:flex; align-items:center; gap:8px;">
          <i data-lucide="mail" style="width:14px; height:14px; color:var(--text-dark);"></i>
          <span><strong>Dedicated grant desk:</strong> <a href="mailto:${grant.supportEmail || 'grants@seedicon.com'}" style="color:var(--text-dark); text-decoration:underline;">${grant.supportEmail || 'grants@seedicon.com'}</a></span>
        </div>
        <div style="display:flex; align-items:center; gap:8px;">
          <i data-lucide="phone" style="width:14px; height:14px; color:var(--text-dark);"></i>
          <span><strong>Inquiry helpline:</strong> ${grant.supportPhone || '+91 11 2659 7153'} (Mon–Fri, 10 AM – 6 PM)</span>
        </div>
      </div>

      <div style="display:flex; flex-direction:column; gap:6px;">
        <label style="font-weight:700; color:var(--text-dark); font-size:11.5px;">Quick message to grant advisor</label>
        <textarea id="grantSupportMsg" class="form-control" rows="3" placeholder="Briefly describe your query, entity type, or current document readiness..."></textarea>
      </div>

      <div style="display:flex; justify-content:flex-end; gap:8px;">
        <button class="btn btn-outline" onclick="closeModal()">Close</button>
        <button class="btn btn-primary" onclick="submitGrantSupportQuery('${grant.id}')">Submit query</button>
      </div>
    </div>
  `);
};

window.submitGrantSupportQuery = function(grantId) {
  const input = document.getElementById('grantSupportMsg');
  closeModal();
  if (window.showToast) {
    window.showToast('Grant advisory query submitted. An advisor will reach out shortly.', 'success');
  }
};

window.copyGrantLink = function(grantId) {
  const url = `${window.location.origin}${window.location.pathname.replace(/[^/]*$/, '')}grant-detail.html?id=${grantId}`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url);
  }
  if (window.showToast) {
    window.showToast('Grant detail link copied to clipboard', 'success');
  }
};

window.bookmarkGrant = function(grantId) {
  if (window.showToast) {
    window.showToast('Grant saved to your bookmarks', 'success');
  }
};

/* ==========================================================================
   13. REAL MARKET PROBLEMS RESEARCH DATABASE & SLIDE-OUT DRAWER
   ========================================================================== */
window.REAL_MARKET_PROBLEMS_DATA = [
  {
    id: 'rag-eval-drift',
    title: 'Enterprise RAG accuracy drift & silent hallucination detection in production',
    category: 'DeepTech & AI',
    categoryCode: 'AI',
    tagline: 'Enterprises deploying LLM pipelines lack continuous automated benchmarking against ground-truth domain data, leading to silent degradation.',
    demandSignal: 'High demand',
    signalType: 'urgent',
    signalScore: '96% validation match',
    source: 'YC Request for Startups 2026 & r/LocalLLaMA Discussions',
    sourceUrl: 'https://www.ycombinator.com/rfs',
    marketSize: '$11.2B TAM by 2028',
    targetPersona: 'VP of AI / Lead ML Infrastructure Engineers',
    dateAdded: '2 days ago',
    upvotesCount: 184,
    isUpvoted: false,
    problemBreakdown: 'When engineering teams deploy Retrieval-Augmented Generation (RAG) pipelines in production, vector databases undergo continuous chunk indexing and model embedding updates. Without deterministic regression testing, small adjustments to chunk size, temperature, or retrieval top-k silently break domain accuracy in customer compliance flows.',
    keyPainPoints: [
      'Manual prompt regression testing consumes 30+ engineering hours per model or embedding update',
      'Zero real-time telemetry to measure semantic drift when knowledge base vector indexes get updated',
      'Silent hallucinations slip into customer-facing compliance and legal workflows before engineering detects them',
      'No native integration between observability tools (Datadog/Langfuse) and automated assertion suites'
    ],
    existingWorkarounds: [
      'Ad-hoc human eval spreadsheets with low (<2%) sampling rates across active customer conversations',
      'Basic unit tests that break on non-deterministic model outputs without fuzzy semantic assertions',
      'Hiring expensive prompt-testing consultants with multi-week turnaround times'
    ],
    opportunityHypothesis: 'A unified real-time CI/CD assertion pipeline for enterprise RAG with automated synthetic edge-case generation and vector database drift telemetry that blocks breaking model releases.',
    validationQuotes: [
      {
        quote: "We upgraded our embedding model last month and broke 14 customer search flows without knowing for 4 days.",
        author: "Head of AI, Series B FinTech Scaleup"
      },
      {
        quote: "Human-in-the-loop eval simply cannot keep up when querying 500k internal compliance documents across global subsidiaries.",
        author: "Staff ML Engineer, Fortune 500 Insurer"
      }
    ]
  },
  {
    id: 'cross-border-b2b-fx',
    title: 'Multi-currency treasury friction and opaque FX markups for mid-market exporters',
    category: 'FinTech & Payments',
    categoryCode: 'FIN',
    tagline: 'Mid-market B2B companies lose 2.5–4.5% on cross-border settlements with 3–5 day lockups due to fragmented correspondent banking.',
    demandSignal: 'Exploding search',
    signalType: 'active',
    signalScore: '92% validation match',
    source: 'McKinsey Global Payments Report & Founder Surveys',
    sourceUrl: 'https://mckinsey.com',
    marketSize: '$34.8B TAM',
    targetPersona: 'CFOs & VP of Finance at B2B Exporters',
    dateAdded: '3 days ago',
    upvotesCount: 147,
    isUpvoted: false,
    problemBreakdown: 'B2B cross-border supply chain transactions remain constrained by legacy correspondent banking networks. Exporters face hidden foreign exchange spreads, unpredictably deducted intermediary fees, and multi-day cash float lockups that strain operational payroll and inventory restocking.',
    keyPainPoints: [
      'Opaque hidden spread markups on SWIFT wire conversions often exceeding 3.5%',
      '3 to 5 business days cash float lockup causing working capital constraints for physical manufacturers',
      'Manual multi-entity invoice matching and currency reconciliation across fragmented national bank portals'
    ],
    existingWorkarounds: [
      'Opening physical foreign bank accounts in each country with onerous periodic KYC re-verifications',
      'Manual treasury spreadsheets maintained by junior accountants to track multi-currency balances',
      'High-fee corporate revolving credit lines to bridge international receivable lag'
    ],
    opportunityHypothesis: 'Instant multi-currency virtual IBAN infrastructure with programmable algorithmic FX netting, automated local clearing rails, and one-click ERP reconciliation.',
    validationQuotes: [
      {
        quote: "We paid over $180k in hidden bank FX fees last year just to pay our contract manufacturing partners in Southeast Asia.",
        author: "CFO, Hardware Scaleup"
      }
    ]
  },
  {
    id: 'ai-agent-observability',
    title: 'Multi-step AI agent infinite loop debugging and cost anomaly prevention',
    category: 'DevTools & Infra',
    categoryCode: 'DEV',
    tagline: 'Autonomous agent workflows (tool calling, browser agents, reasoning loops) lack step-level tracing, causing sudden token spikes and runaway costs.',
    demandSignal: 'High demand',
    signalType: 'urgent',
    signalScore: '95% validation match',
    source: 'GitHub Discussions, LangChain & CrewAI Community Issues',
    sourceUrl: 'https://github.com',
    marketSize: '$7.6B TAM by 2029',
    targetPersona: 'AI Engineers & Backend Tech Leads',
    dateAdded: '4 days ago',
    upvotesCount: 215,
    isUpvoted: false,
    problemBreakdown: 'Developers building multi-agent systems face severe observability challenges once agents make autonomous tool calls or execute multi-turn browser automation. A small parsing hallucination in an intermediate step triggers recursive retry loops that burn thousands of dollars in LLM tokens before safety caps trigger.',
    keyPainPoints: [
      'Runaway recursive tool calls draining thousands of dollars in API credits overnight',
      'Zero visibility into intermediate step reasoning failures in autonomous agent DAG workflows',
      'Inability to replay, snapshot, or fork a failed multi-turn agent state for local debugging'
    ],
    existingWorkarounds: [
      'Console.log print debugging piped to Datadog or CloudWatch with unreadable JSON payload blobs',
      'Hardcoded loop caps that prematurely kill legitimate complex reasoning tasks',
      'Ad-hoc budget ceiling scripts that hard-terminate production keys across all running users'
    ],
    opportunityHypothesis: 'Time-travel debugging proxy and circuit breaker for multi-agent reasoning DAGs with step-by-step state visualization and automated loop mitigation.',
    validationQuotes: [
      {
        quote: "An agent got stuck in a JSON re-formatting loop on a Sunday and burned $4,200 in OpenAI credits in 3 hours before anyone noticed.",
        author: "Founder & CTO, AI Sales Platform"
      }
    ]
  },
  {
    id: 'cold-chain-pharma-spoilage',
    title: 'Last-mile temperature excursion tracking and insurance compliance for biologics',
    category: 'Supply Chain & Logistics',
    categoryCode: 'LOG',
    tagline: 'Over $35B worth of temperature-sensitive vaccines and biologics are spoiled annually due to blind spots during last-mile cargo handoffs.',
    demandSignal: 'Critical regulation',
    signalType: 'urgent',
    signalScore: '91% validation match',
    source: 'WHO Logistics Guidelines & FDA 21 CFR Part 11 Mandates',
    sourceUrl: 'https://who.int',
    marketSize: '$18.9B TAM',
    targetPersona: 'Head of Supply Chain at Pharma Distributors',
    dateAdded: '5 days ago',
    upvotesCount: 119,
    isUpvoted: false,
    problemBreakdown: 'Biologics and personalized cell therapies require strict -20°C to -80°C cold-chain preservation. While primary long-haul airfreight is monitored, last-mile local courier handoffs frequently suffer unseen temperature excursions that ruin efficacy without voiding traditional paper logs.',
    keyPainPoints: [
      'Passive data loggers only reveal spoilage after cargo arrives at the hospital (post-mortem failure)',
      'Manual temperature log transcription violates strict FDA digital audit trail mandates',
      'Insurance claim settlements take 6–9 months due to disputed chain-of-custody timestamps'
    ],
    existingWorkarounds: [
      'Single-use USB temperature stick loggers that must be manually plugged into a PC upon arrival',
      'Overpacking with excess dry ice, adding massive shipping weight surcharges',
      'Excess buffer inventory to absorb expected 15% transit spoilage'
    ],
    opportunityHypothesis: 'Ultra-low-power cellular IoT smart labels with real-time cloud temperature telemetry, automated anomaly alerts, and automated immutable insurance claim generation.',
    validationQuotes: [
      {
        quote: "If a cold box sits on an airport tarmac for 45 minutes in Dubai, the entire $200k shipment is compromised and discarded.",
        author: "Logistics Director, Global Biopharma"
      }
    ]
  },
  {
    id: 'clinical-trial-matching-oncology',
    title: 'Precision oncology patient-to-clinical trial eligibility parsing from unstructured EHR',
    category: 'Healthcare & MedTech',
    categoryCode: 'HLT',
    tagline: '80% of oncology clinical trials fail to meet enrollment targets because oncologists cannot parse 50+ page inclusion/exclusion criteria against EHR records.',
    demandSignal: 'High demand',
    signalType: 'urgent',
    signalScore: '94% validation match',
    source: 'NIH ClinicalTrials.gov Research & ASCO 2026 Proceedings',
    sourceUrl: 'https://clinicaltrials.gov',
    marketSize: '$14.2B TAM',
    targetPersona: 'Clinical Research Coordinators & Principal Investigators',
    dateAdded: '1 week ago',
    upvotesCount: 168,
    isUpvoted: false,
    problemBreakdown: 'Clinical trial protocols contain highly intricate inclusion and exclusion parameters involving specific biomarker mutations, prior line therapies, and lab cutoff ranges. These criteria are buried deep in unstructured doctor progress notes and pathology PDFs, causing oncology centers to miss eligible trial candidates.',
    keyPainPoints: [
      'Inclusion criteria involve complex genomic biomarkers and prior lines buried in unstructured doctor notes',
      'Research coordinators spend 4–6 hours manually reviewing a single patient chart for trial fit',
      'Over 80% of potential eligible patients miss trial enrollment windows while disease progresses'
    ],
    existingWorkarounds: [
      'Manual keyword searching inside legacy EHR systems like Epic or Cerner',
      'Outsourced contract research organizations (CROs) charging $15k+ per successfully enrolled patient',
      'Paper binders with trial eligibility decision flowcharts'
    ],
    opportunityHypothesis: 'HIPAA-compliant multimodal LLM chart reader that maps raw EHR notes against active NIH protocols with instant match confidence scores and automated clinician alerts.',
    validationQuotes: [
      {
        quote: "We have novel therapies available, but finding patients whose biomarker mutations match our protocol is like finding a needle in a haystack.",
        author: "Director of Clinical Trials, Comprehensive Cancer Institute"
      }
    ]
  },
  {
    id: 'cloud-finops-kubernetes-anomalies',
    title: 'Kubernetes pod-level micro-cost attribution and idle resource de-provisioning',
    category: 'DevTools & Infra',
    categoryCode: 'DEV',
    tagline: 'Engineering teams overspend 35–50% on AWS/GCP Kubernetes clusters due to lack of granular per-feature pod cost attribution.',
    demandSignal: 'Exploding search',
    signalType: 'active',
    signalScore: '89% validation match',
    source: 'FinOps Foundation Annual State of Cloud Report 2026',
    sourceUrl: 'https://finops.org',
    marketSize: '$9.1B TAM',
    targetPersona: 'Head of Platform Engineering & DevOps Leads',
    dateAdded: '1 week ago',
    upvotesCount: 132,
    isUpvoted: false,
    problemBreakdown: 'Modern cloud infrastructure bills group Kubernetes expenses into bulk compute instances. Platform engineering teams struggle to attribute compute, memory, and egress costs back to individual microservices, engineering squads, or customer tenants, leading to massive overprovisioning.',
    keyPainPoints: [
      'AWS invoices provide only bulk EC2 numbers with zero breakdown into specific microservices or tenant workloads',
      'Overprovisioned CPU and memory limits remain idle 70% of the time to avoid pod evictions during traffic surges',
      'Engineers ignore generic Slackbot cost alerts because they lack contextual remediation code PRs'
    ],
    existingWorkarounds: [
      'Monthly manual tag scrubbing by DevOps leads before executive board meetings',
      'Blunt automated nightly cluster shutoffs that disrupt staging and QA testing cycles',
      'Cost management dashboards that only show graphs without actionable automated right-sizing PRs'
    ],
    opportunityHypothesis: 'Autonomous eBPF-based Kubernetes cost agent that submits automated GitHub pull requests to right-size resource limits with zero application downtime.',
    validationQuotes: [
      {
        quote: "Our AWS bill jumped by $42k last month and it took 3 senior engineers 8 days just to figure out which microservice was leaking memory.",
        author: "VP of Engineering, SaaS Unicorn"
      }
    ]
  },
  {
    id: 'b2b-contract-lifecycle-redlines',
    title: 'Automated redline negotiation and compliance audit for mid-market MSA vendor contracts',
    category: 'B2B SaaS',
    categoryCode: 'SAS',
    tagline: 'Mid-market sales cycles stall 4–8 weeks in legal review because in-house legal teams are backlogged with repetitive standard MSA redlines.',
    demandSignal: 'High demand',
    signalType: 'active',
    signalScore: '90% validation match',
    source: 'Gartner Legal Tech Survey & Sales Operations Benchmarks',
    sourceUrl: 'https://gartner.com',
    marketSize: '$12.5B TAM',
    targetPersona: 'General Counsel & VP of Revenue Operations',
    dateAdded: '2 weeks ago',
    upvotesCount: 153,
    isUpvoted: false,
    problemBreakdown: 'Enterprise revenue velocity is severely bottlenecked by manual contract negotiations. Every standard Master Services Agreement (MSA) undergoes weeks of back-and-forth over standard indemnity, limitation of liability, and SLA penalty clauses, tying up expensive legal counsel.',
    keyPainPoints: [
      'Deals held hostage at quarter-end over standard limitation of liability and indemnification clauses',
      'Inconsistent contract terms accepted across deals, creating downstream corporate compliance liabilities',
      'Outside legal counsel costs $700–$1,200/hr to review standard vendor MSAs'
    ],
    existingWorkarounds: [
      'Sales reps drafting rogue side letters without legal sign-off to close deals faster',
      'Static contract playbooks stored in Google Docs that attorneys rarely reference under deadline pressure',
      'Generic AI doc chat tools that miss subtle jurisdictional indemnity gotchas'
    ],
    opportunityHypothesis: 'Deterministic contract negotiation agent that ingests company legal playbooks and automatically redlines Word docs with clause risk scoring and fallback suggestions.',
    validationQuotes: [
      {
        quote: "Our sales reps lose 3 weeks on every enterprise deal just debating whether the liability cap should be 1x or 2x annual contract value.",
        author: "Head of Legal, High-Growth SaaS"
      }
    ]
  },
  {
    id: 'b2b-churn-telemetry-decay',
    title: 'Feature adoption decay and silent account churn prediction for product-led growth (PLG)',
    category: 'B2B SaaS',
    categoryCode: 'SAS',
    tagline: 'PLG companies discover customer churn only after non-renewal notices arrive, missing the 60-day window when champion engagement decays.',
    demandSignal: 'Exploding search',
    signalType: 'active',
    signalScore: '88% validation match',
    source: 'OpenView PLG Benchmark Report & CS Community Surveys',
    sourceUrl: 'https://openviewpartners.com',
    marketSize: '$6.8B TAM',
    targetPersona: 'VP of Customer Success & Chief Revenue Officers',
    dateAdded: '2 weeks ago',
    upvotesCount: 124,
    isUpvoted: false,
    problemBreakdown: 'In product-led growth SaaS businesses, accounts silently decay weeks before contract expiration. The original buyer or internal champion departs the organization or stops daily logins, while legacy Customer Success tools only look at gross aggregated event counts rather than power-user decay curves.',
    keyPainPoints: [
      'CS teams rely on subjective green/yellow/red health indicators updated once a month by account managers',
      'Champion user leaves the client company without triggering any notification to the vendor',
      'Product usage dashboards show aggregates rather than individual power-user seat atrophy'
    ],
    existingWorkarounds: [
      'Manual monthly check-in emails that go unread by busy enterprise buyers',
      'Clunky legacy CS platforms that require 6 months of custom Salesforce configuration',
      'Post-mortem churn exit interviews when it is already too late to recover recurring revenue'
    ],
    opportunityHypothesis: 'Automated champion departure tracker and seat-level engagement decay telemetry with proactive trigger playbooks for customer success teams.',
    validationQuotes: [
      {
        quote: "Our biggest enterprise churn last quarter happened simply because our internal champion switched jobs and nobody logged in for 45 days.",
        author: "VP of Customer Success, Enterprise B2B SaaS"
      }
    ]
  }
];

let currentProblemSearch = '';
let currentProblemCategory = 'all';
let currentProblemSignal = 'all';
let currentActiveProblemId = null;

function renderMarketProblemsPage() {
  const container = document.getElementById('marketProblemsList');
  if (!container) return;

  const countBadge = document.getElementById('problemsCountBadge');
  if (countBadge) {
    countBadge.textContent = `${window.REAL_MARKET_PROBLEMS_DATA.length} verified problems`;
  }

  filterAndRenderMarketProblems();
}

function filterAndRenderMarketProblems() {
  const container = document.getElementById('marketProblemsList');
  if (!container) return;

  let list = window.REAL_MARKET_PROBLEMS_DATA || [];

  if (currentProblemSearch.trim()) {
    const q = currentProblemSearch.toLowerCase().trim();
    list = list.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.targetPersona.toLowerCase().includes(q) ||
      p.demandSignal.toLowerCase().includes(q)
    );
  }

  if (currentProblemCategory !== 'all') {
    list = list.filter(p => p.category.toLowerCase() === currentProblemCategory.toLowerCase());
  }

  if (currentProblemSignal !== 'all') {
    list = list.filter(p => p.demandSignal.toLowerCase() === currentProblemSignal.toLowerCase());
  }

  renderMarketProblemsStream(list);
}

function renderMarketProblemsStream(list) {
  const container = document.getElementById('marketProblemsList');
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = `
      <div class="empty-placeholder-box" style="padding:48px 24px; text-align:center;">
        <i data-lucide="target" style="width:32px; height:32px; color:var(--text-light); margin-bottom:8px;"></i>
        <h4 style="font-size:14px; font-weight:800; color:var(--text-dark); margin:0 0 4px;">No matching problems found</h4>
        <p style="font-size:12px; color:var(--text-muted); margin:0;">Try adjusting your keyword or industry filter selections.</p>
      </div>`;
    if (typeof lucide !== 'undefined') lucide.createIcons();
    return;
  }

  container.innerHTML = `
    <div class="problem-listing-stream">
      ${list.map(p => `
        <div class="problem-card" onclick="openProblemDrawer('${p.id}')">
          <div class="problem-card-left">
            <div class="problem-code-badge">${p.categoryCode}</div>
            <div class="problem-card-details">
              <div class="problem-title-row">
                <span class="problem-title">${p.title}</span>
                <span class="category-tag-pill">${p.category}</span>
                <span class="problem-demand-pill ${p.signalType === 'urgent' ? 'urgent' : 'active'}">${p.demandSignal}</span>
              </div>
              <p class="problem-tagline">${p.tagline}</p>
              <div class="problem-meta-row">
                <span class="problem-meta-item"><i data-lucide="compass"></i> ${p.source}</span>
                <span class="problem-meta-item"><i data-lucide="users"></i> ${p.targetPersona}</span>
                <span class="problem-meta-item"><i data-lucide="bar-chart-2"></i> ${p.marketSize}</span>
                <span class="problem-meta-item"><i data-lucide="clock"></i> ${p.dateAdded}</span>
              </div>
            </div>
          </div>

          <div style="display:flex; align-items:center; gap:8px;" onclick="event.stopPropagation();">
            <button class="upvote-pill-btn ${p.isUpvoted ? 'active' : ''}" onclick="toggleProblemUpvote('${p.id}', event)" title="Upvote this market problem">
              <i data-lucide="triangle" style="width:11px; height:11px; fill:${p.isUpvoted ? 'currentColor' : 'none'};"></i>
              <span id="problem-votes-${p.id}">${p.upvotesCount}</span>
            </button>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function handleProblemSearch(input) {
  currentProblemSearch = input.value;
  filterAndRenderMarketProblems();
}

function handleProblemCategoryFilter(val) {
  currentProblemCategory = val;
  filterAndRenderMarketProblems();
}

function handleProblemSignalFilter(val) {
  currentProblemSignal = val;
  filterAndRenderMarketProblems();
}

/* ──────────────────────────────────────────────────────────────────────────
   Problem Slide-Out Right Drawer Controller
   ────────────────────────────────────────────────────────────────────────── */
window.openProblemDrawer = function(problemId) {
  const problem = (window.REAL_MARKET_PROBLEMS_DATA || []).find(p => p.id === problemId);
  if (!problem) return;

  currentActiveProblemId = problem.id;

  const backdrop = document.getElementById('problemDrawerBackdrop');
  const panel = document.getElementById('problemDrawerPanel');
  const content = document.getElementById('problemDrawerContent');
  const catSpan = document.getElementById('problemDrawerCategory');
  const sigSpan = document.getElementById('problemDrawerSignal');

  if (catSpan) catSpan.textContent = problem.category;
  if (sigSpan) {
    sigSpan.textContent = problem.demandSignal;
    sigSpan.className = `problem-demand-pill ${problem.signalType === 'urgent' ? 'urgent' : 'active'}`;
  }

  if (content) {
    content.innerHTML = `
      <!-- Title & Tagline -->
      <div style="display:flex; flex-direction:column; gap:4px;">
        <h2 style="font-size:18px; font-weight:800; color:var(--text-dark); letter-spacing:-0.02em; line-height:1.3; margin:0;">
          ${problem.title}
        </h2>
        <p style="font-size:13px; color:var(--text-main); line-height:1.45; margin:0;">
          ${problem.tagline}
        </p>
      </div>

      <!-- Overview Stats Box -->
      <div class="problem-drawer-hero">
        <div class="problem-drawer-stat-grid">
          <div class="problem-drawer-stat-cell">
            <span class="problem-drawer-stat-label">Validation score</span>
            <span class="problem-drawer-stat-val" style="color:#166534;">${problem.signalScore}</span>
          </div>
          <div class="problem-drawer-stat-cell">
            <span class="problem-drawer-stat-label">Market TAM</span>
            <span class="problem-drawer-stat-val">${problem.marketSize}</span>
          </div>
          <div class="problem-drawer-stat-cell">
            <span class="problem-drawer-stat-label">Target persona</span>
            <span class="problem-drawer-stat-val" style="font-size:11.5px; font-weight:700;">${problem.targetPersona}</span>
          </div>
        </div>

        <div style="font-size:11px; color:var(--text-muted); display:flex; align-items:center; gap:5px; border-top:1px solid var(--border-faint); padding-top:8px; margin-top:2px;">
          <i data-lucide="compass" style="width:12px; height:12px;"></i>
          <span><strong>Signal source:</strong> <a href="${problem.sourceUrl}" target="_blank" style="color:var(--text-dark); text-decoration:underline;">${problem.source}</a></span>
        </div>
      </div>

      <!-- Problem Breakdown -->
      <div style="display:flex; flex-direction:column; gap:8px;">
        <h4 style="font-size:13px; font-weight:800; color:var(--text-dark); margin:0;">Context &amp; problem breakdown</h4>
        <p style="font-size:12.5px; color:var(--text-main); line-height:1.6; margin:0;">
          ${problem.problemBreakdown}
        </p>
      </div>

      <!-- Key Pain Points -->
      <div style="display:flex; flex-direction:column; gap:8px;">
        <h4 style="font-size:13px; font-weight:800; color:var(--text-dark); margin:0;">Key pain points &amp; friction signals</h4>
        <div class="problem-pain-list">
          ${(problem.keyPainPoints || []).map(pt => `
            <div class="problem-pain-item">
              <div class="problem-pain-icon">
                <i data-lucide="alert-circle"></i>
              </div>
              <span>${pt}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Opportunity Hypothesis -->
      <div style="display:flex; flex-direction:column; gap:8px;">
        <h4 style="font-size:13px; font-weight:800; color:var(--text-dark); margin:0;">Opportunity hypothesis (What to build)</h4>
        <div class="problem-sol-box">
          ${problem.opportunityHypothesis}
        </div>
      </div>

      <!-- Existing Workarounds -->
      <div style="display:flex; flex-direction:column; gap:8px;">
        <h4 style="font-size:13px; font-weight:800; color:var(--text-dark); margin:0;">Why current workarounds fail</h4>
        <div class="problem-pain-list">
          ${(problem.existingWorkarounds || []).map(w => `
            <div class="problem-pain-item">
              <div class="problem-pain-icon" style="background:#EFEFEA;">
                <i data-lucide="x"></i>
              </div>
              <span>${w}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Voice of Customer Quotes -->
      ${problem.validationQuotes && problem.validationQuotes.length > 0 ? `
        <div style="display:flex; flex-direction:column; gap:8px;">
          <h4 style="font-size:13px; font-weight:800; color:var(--text-dark); margin:0;">Voice of the market (Customer quotes)</h4>
          <div style="display:flex; flex-direction:column; gap:8px;">
            ${problem.validationQuotes.map(q => `
              <div class="problem-quote-card">
                <p class="problem-quote-text">"${q.quote}"</p>
                <span class="problem-quote-author">— ${q.author}</span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
    `;
  }

  if (backdrop) backdrop.style.display = 'block';
  if (panel) {
    panel.style.display = 'flex';
    setTimeout(() => panel.classList.add('open'), 10);
  }

  if (typeof lucide !== 'undefined') lucide.createIcons();
};

window.closeProblemDrawer = function() {
  const backdrop = document.getElementById('problemDrawerBackdrop');
  const panel = document.getElementById('problemDrawerPanel');

  if (panel) {
    panel.classList.remove('open');
    setTimeout(() => {
      panel.style.display = 'none';
      if (backdrop) backdrop.style.display = 'none';
    }, 220);
  }
};

window.toggleProblemUpvote = function(problemId, event) {
  if (event) event.stopPropagation();

  const problem = (window.REAL_MARKET_PROBLEMS_DATA || []).find(p => p.id === problemId);
  if (!problem) return;

  problem.isUpvoted = !problem.isUpvoted;
  problem.upvotesCount += problem.isUpvoted ? 1 : -1;

  const countElem = document.getElementById(`problem-votes-${problem.id}`);
  if (countElem) {
    countElem.textContent = problem.upvotesCount;
  }

  const btn = event ? event.currentTarget : null;
  if (btn) {
    btn.classList.toggle('active', problem.isUpvoted);
    const icon = btn.querySelector('i');
    if (icon) icon.setAttribute('fill', problem.isUpvoted ? 'currentColor' : 'none');
  }

  if (window.showToast) {
    window.showToast(problem.isUpvoted ? 'Upvoted market problem' : 'Removed upvote', 'success');
  }
};

window.copyCurrentProblemLink = function() {
  if (!currentActiveProblemId) return;
  const url = `${window.location.origin}${window.location.pathname.replace(/[^/]*$/, '')}real-market-problems.html?id=${currentActiveProblemId}`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url);
  }
  if (window.showToast) {
    window.showToast('Problem research link copied to clipboard', 'success');
  }
};

window.startValidationWorkflow = function() {
  const problem = (window.REAL_MARKET_PROBLEMS_DATA || []).find(p => p.id === currentActiveProblemId);
  const name = problem ? problem.title : 'Market Problem';

  closeProblemDrawer();

  if (window.showModal) {
    window.showModal('Idea Validation Workspace', `
      <div style="display:flex; flex-direction:column; gap:14px;">
        <p style="font-size:13px; color:var(--text-main); margin:0;">
          Start an interactive validation sprint for <strong>"${name}"</strong>.
        </p>
        <div style="display:flex; flex-direction:column; gap:8px;">
          <label style="font-size:11.5px; font-weight:700; color:var(--text-dark);">Your proposed solution or angle</label>
          <textarea class="form-control" rows="3" placeholder="Describe your product thesis, target MVP feature set, or differentiation..."></textarea>
        </div>
        <div style="display:flex; justify-content:flex-end; gap:8px;">
          <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
          <button class="btn btn-primary" onclick="closeModal(); if(window.showToast) window.showToast('Validation sprint initiated! Generating customer interview script...', 'success');">
            Generate validation playbook
          </button>
        </div>
      </div>
    `);
  }
};

/* ==========================================================================
   14. FOUNDER CHALLENGES COMMUNITY ADVISORY & SOLUTIONS
   ========================================================================== */
window.FOUNDER_CHALLENGES_DATA = [
  {
    id: 'fc-1',
    isAnonymous: true,
    authorName: 'Anonymous Founder',
    authorAvatar: '🎭',
    authorRole: 'Early Stage Founder',
    companyName: 'Stealth AI Startup',
    postDate: '3 hours ago',
    category: 'Co-founder & Team',
    title: 'How do you handle a co-founder who wants to leave 4 months before our Series A close?',
    content: 'We are currently in active diligence with two lead funds for a $4.5M Series A. Yesterday, my technical co-founder informed me that due to personal burnout and family obligations, they want to step down immediately.\n\nWe have a 4-year reverse vesting schedule with a 1-year cliff (passed 18 months ago). They hold ~28% equity. How do I restructure their unvested equity, transition their engineering responsibilities, and disclose this transparently to prospective lead investors without killing the round?',
    tags: ['Co-founder exit', 'Equity vesting', 'Series A', 'Cap table', 'Investor disclosure'],
    likesCount: 42,
    isLiked: false,
    answersCount: 3,
    showAnswers: false,
    answers: [
      {
        id: 'ans-101',
        authorName: 'Vikram Mehta',
        authorAvatar: 'VM',
        authorRole: 'Serial Founder (2x exits)',
        companyName: 'Venture Partner @ Seedicon',
        postDate: '2 hours ago',
        content: '1. Do NOT accelerate unvested equity. Exercise company repurchase on all unvested shares per your stock restriction agreement immediately.\n2. Convert remaining vested equity into non-voting common stock so they do not hold voting control over Series A shareholder resolutions.\n3. Frame this to your lead investors as proactive executive leadership: bring an Interim VP of Engineering or Head of Eng immediately before the final term sheet is drafted.',
        likesCount: 28,
        isLiked: false
      },
      {
        id: 'ans-102',
        authorName: 'Elena Rostova',
        authorAvatar: 'ER',
        authorRole: 'Founder & CEO',
        companyName: 'Aether Bio',
        postDate: '1 hour ago',
        content: 'Get a formal separation and release agreement signed with your legal counsel before speaking to VCs. VCs care far more about a messy lingering founder lawsuit than a clean, orderly founder departure with 70%+ unvested equity returned to the option pool.',
        likesCount: 17,
        isLiked: false
      }
    ]
  },
  {
    id: 'fc-2',
    isAnonymous: false,
    authorName: 'Elena Rostova',
    authorAvatar: 'ER',
    authorRole: 'Founder & CEO',
    companyName: 'Aether Bio',
    postDate: 'Yesterday',
    category: 'Legal & Equity',
    title: 'Navigating conflicting IP assignment demands between our university tech transfer office and lead Seed VC',
    content: 'Our core microfluidics patents were developed during my PhD research. The university TTO is demanding a 7% non-dilutable equity stake plus a 4% commercial royalty. However, our lead seed VC terms state that all university IP must be fully assigned or exclusively licensed with zero royalty stack and non-dilutable clauses stripped.\n\nHas anyone successfully negotiated a TTO down to a standard 2-3% equity stake with clean milestone royalties?',
    tags: ['University IP', 'Tech transfer', 'Seed VC', 'Spinout', 'Licensing'],
    likesCount: 34,
    isLiked: false,
    answersCount: 2,
    showAnswers: false,
    answers: [
      {
        id: 'ans-201',
        authorName: 'Dr. Sarah Chen',
        authorAvatar: 'SC',
        authorRole: 'Founder & CEO',
        companyName: 'Alpha Health 2.0',
        postDate: '20 hours ago',
        content: 'We went through this exact battle with Stanford OTL. Non-dilutable equity is an immediate deal-killer for institutional VCs. Offer the university an upfront equity grant with standard dilution, paired with a small 1-1.5% milestone royalty capped at $5M cumulative payouts.',
        likesCount: 21,
        isLiked: false
      }
    ]
  },
  {
    id: 'fc-3',
    isAnonymous: true,
    authorName: 'Anonymous Founder',
    authorAvatar: '🎭',
    authorRole: 'Founder & CEO',
    companyName: 'B2B FinTech Platform',
    postDate: '2 days ago',
    category: 'Fundraising & Pitching',
    title: 'Lead investor agreed on valuation verbally, but the term sheet arrived with a 1.5x participating liquidation preference',
    content: 'We verbally aligned on a $16M post-money valuation for our $3M Seed round. When the actual 14-page term sheet arrived, clause 4.2 states a "1.5x Participating Preferred" liquidation preference plus full ratcheted anti-dilution.\n\nIs this normal in the current market, or should I push back firmly for 1x non-participating preference?',
    tags: ['Term sheet', 'Liquidation preference', 'Downside protection', 'Negotiation', 'Seed round'],
    likesCount: 56,
    isLiked: false,
    answersCount: 3,
    showAnswers: false,
    answers: [
      {
        id: 'ans-301',
        authorName: 'Marcus Vance',
        authorAvatar: 'MV',
        authorRole: 'Co-founder & CTO',
        companyName: 'PulseFlow',
        postDate: 'Yesterday',
        content: 'Push back immediately. 1.5x participating is predatory in standard tech venture deals. A participating preference means they get paid 1.5x their money back FIRST, and then participate alongside you in the remaining common proceeds ("double dipping"). Insist on 1x Non-Participating Preferred.',
        likesCount: 44,
        isLiked: false
      }
    ]
  },
  {
    id: 'fc-4',
    isAnonymous: false,
    authorName: 'Marcus Vance',
    authorAvatar: 'MV',
    authorRole: 'Co-founder & CTO',
    companyName: 'PulseFlow',
    postDate: '3 days ago',
    category: 'Product & Tech',
    title: 'Transitioning from single-tenant on-prem pilots to multi-tenant cloud without losing enterprise banks',
    content: 'Our initial three Tier-1 bank customers demanded dedicated VPC deployments and single-tenant database isolation. Now our engineering team is spending 60% of their sprints maintaining 3 disparate Helm chart releases and bespoke migration scripts.\n\nHow do we migrate toward a unified multi-tenant architecture while satisfying bank compliance and data sovereignty constraints?',
    tags: ['Multi-tenancy', 'Enterprise SaaS', 'Architecture', 'SOC 2', 'Bank compliance'],
    likesCount: 29,
    isLiked: false,
    answersCount: 2,
    showAnswers: false,
    answers: [
      {
        id: 'ans-401',
        authorName: 'Aarav Sharma',
        authorAvatar: 'AS',
        authorRole: 'Founder',
        companyName: 'Quantico Data',
        postDate: '2 days ago',
        content: 'Adopt a hybrid multi-tenant approach: shared stateless application microservices with cell-based database schemas (row-level security with AWS KMS customer-managed encryption keys per tenant). That gives you 90% of multi-tenant engineering velocity while satisfying strict bank data isolation audits.',
        likesCount: 19,
        isLiked: false
      }
    ]
  },
  {
    id: 'fc-5',
    isAnonymous: true,
    authorName: 'Anonymous Founder',
    authorAvatar: '🎭',
    authorRole: 'B2B Sales Founder',
    companyName: 'Cybersecurity SaaS',
    postDate: '4 days ago',
    category: 'Sales & GTM',
    title: 'Mid-market enterprise POCs stall after successful technical evaluation when Procurement gets involved',
    content: 'We have 6 mid-market enterprise prospects where the VP of Engineering gave a passionate "Yes" after a 14-day technical POC. But as soon as the deal moves to Procurement and InfoSec, we get hit with 180-question security spreadsheets and demands for net-90 payment terms.\n\nHow do early-stage founders accelerate procurement cycles without agreeing to damaging payment terms?',
    tags: ['Enterprise sales', 'Procurement', 'Sales velocity', 'Security review', 'Net terms'],
    likesCount: 38,
    isLiked: false,
    answersCount: 2,
    showAnswers: false,
    answers: [
      {
        id: 'ans-501',
        authorName: 'Elena Rostova',
        authorAvatar: 'ER',
        authorRole: 'Founder & CEO',
        companyName: 'Aether Bio',
        postDate: '3 days ago',
        content: 'Pre-package your "Enterprise Trust Packet" on day 1 of the POC (SOC 2 Type II report, standard DPA, architecture diagram, penetration test summary). Do not wait for Procurement to ask. For Net-90, offer a 5% discount for Net-30 annual upfront payment.',
        likesCount: 25,
        isLiked: false
      }
    ]
  },
  {
    id: 'fc-6',
    isAnonymous: false,
    authorName: 'Aarav Sharma',
    authorAvatar: 'AS',
    authorRole: 'Founder',
    companyName: 'Quantico Data',
    postDate: '5 days ago',
    category: 'Hiring & Culture',
    title: 'First engineering leadership hire: when to hire a VP of Engineering vs a hands-on Staff Lead?',
    content: 'We are currently 7 engineers (mostly generalists) shipping fast. As founder, I am spending half my week reviewing PRs, managing sprints, and unblocking architecture questions.\n\nShould we hire an experienced VP of Eng to build out processes and hiring pipelines, or a hands-on Staff Engineer / Tech Lead who still writes code 70% of the time?',
    tags: ['Engineering hiring', 'VP of Eng', 'Org scaling', 'Seed to Series A', 'Leadership'],
    likesCount: 31,
    isLiked: false,
    answersCount: 2,
    showAnswers: false,
    answers: [
      {
        id: 'ans-601',
        authorName: 'Vikram Mehta',
        authorAvatar: 'VM',
        authorRole: 'Serial Founder (2x exits)',
        companyName: 'Venture Partner @ Seedicon',
        postDate: '4 days ago',
        content: 'Under 12 engineers, hire a hands-on Staff Lead / Head of Eng who writes code and mentors. Traditional VPs of Engineering excel at 20–50+ org scaling, performance reviews, and cross-functional politics, but will choke a 7-person team with premature process.',
        likesCount: 22,
        isLiked: false
      }
    ]
  }
];

let currentChallengeSearch = '';
let currentChallengeCategory = 'all';
let currentChallengeType = 'all';

function renderFounderChallengesPage() {
  const container = document.getElementById('founderChallengesList');
  if (!container) return;

  const countBadge = document.getElementById('challengesCountBadge');
  if (countBadge) {
    countBadge.textContent = `${window.FOUNDER_CHALLENGES_DATA.length} active challenges`;
  }

  filterAndRenderChallenges();
}

window.renderFounderChallengesPage = renderFounderChallengesPage;

function filterAndRenderChallenges() {
  const container = document.getElementById('founderChallengesList');
  if (!container) return;

  let list = window.FOUNDER_CHALLENGES_DATA || [];

  if (currentChallengeSearch.trim()) {
    const q = currentChallengeSearch.toLowerCase().trim();
    list = list.filter(c =>
      c.title.toLowerCase().includes(q) ||
      c.content.toLowerCase().includes(q) ||
      c.authorName.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q) ||
      (c.tags && c.tags.some(t => t.toLowerCase().includes(q)))
    );
  }

  if (currentChallengeCategory !== 'all') {
    list = list.filter(c => c.category.toLowerCase() === currentChallengeCategory.toLowerCase());
  }

  if (currentChallengeType !== 'all') {
    if (currentChallengeType === 'anonymous') {
      list = list.filter(c => c.isAnonymous);
    } else if (currentChallengeType === 'identified') {
      list = list.filter(c => !c.isAnonymous);
    }
  }

  renderChallengeStream(list);
}

window.filterAndRenderChallenges = filterAndRenderChallenges;

function renderChallengeStream(list) {
  const container = document.getElementById('founderChallengesList');
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = `
      <div class="empty-placeholder-box" style="padding:48px 24px; text-align:center;">
        <i data-lucide="help-circle" style="width:32px; height:32px; color:var(--text-light); margin-bottom:8px;"></i>
        <h4 style="font-size:14px; font-weight:800; color:var(--text-dark); margin:0 0 4px;">No matching challenges found</h4>
        <p style="font-size:12px; color:var(--text-muted); margin:0;">Try adjusting your keyword or category filter selections.</p>
      </div>`;
    if (typeof lucide !== 'undefined') lucide.createIcons();
    return;
  }

  container.innerHTML = `
    <div class="challenge-listing-stream">
      ${list.map(c => `
        <div class="challenge-card" id="challenge-card-${c.id}" onclick="window.toggleChallengeExpand('${c.id}', event)">
          <!-- Top Author Row -->
          <div class="challenge-author-row">
            <div class="challenge-author-left">
              <div class="challenge-avatar ${c.isAnonymous ? 'anonymous' : ''}">
                ${c.authorAvatar}
              </div>
              <div class="challenge-author-info">
                <span class="challenge-author-name">${c.authorName}</span>
                ${c.isAnonymous ? `<span class="challenge-anon-tag"><i data-lucide="shield" style="width:9px;height:9px;"></i> Anon</span>` : ''}
                <span style="font-size:11px; color:var(--text-light);">·</span>
                <span class="challenge-author-meta">${c.companyName}</span>
              </div>
            </div>

            <div style="display:flex; align-items:center; gap:8px;">
              <span class="category-tag-pill">${c.category}</span>
              <span class="challenge-date">${c.postDate}</span>
            </div>
          </div>

          <!-- Question / Post Title -->
          <h3 class="challenge-title">${c.title}</h3>

          <!-- Post Content (Condensed with See more) -->
          <div class="challenge-content-wrap">
            <p class="${c.isExpanded ? 'challenge-content-expanded' : 'challenge-content-collapsed'}">
              ${c.content}
            </p>
            <button class="challenge-see-more-link" onclick="window.toggleChallengeExpand('${c.id}', event)">
              <span>${c.isExpanded ? 'See less' : 'See more'}</span>
              <i data-lucide="${c.isExpanded ? 'chevron-up' : 'chevron-down'}" style="width:11px; height:11px;"></i>
            </button>
          </div>

          <!-- Tags Row -->
          ${c.tags && c.tags.length > 0 ? `
            <div class="challenge-tags-row">
              ${c.tags.map(t => `<span class="challenge-tag-pill">#${t}</span>`).join('')}
            </div>
          ` : ''}

          <!-- Footer Action Bar -->
          <div class="challenge-footer-actions" onclick="event.stopPropagation();">
            <div class="challenge-footer-left">
              <button class="challenge-action-btn ${c.isLiked ? 'active' : ''}" onclick="window.toggleChallengeLike('${c.id}', event)" title="Like this challenge">
                <i data-lucide="thumbs-up" style="fill:${c.isLiked ? 'currentColor' : 'none'};"></i>
                <span id="challenge-likes-${c.id}">${c.likesCount}</span>
              </button>

              <button class="challenge-action-btn" onclick="window.toggleChallengeAnswers('${c.id}')" title="View discussion and peer answers">
                <i data-lucide="message-square"></i>
                <span>${(c.answers || []).length} answers</span>
                <i data-lucide="${c.showAnswers ? 'chevron-up' : 'chevron-down'}" style="width:11px;height:11px;"></i>
              </button>
            </div>

            <div style="display:flex; align-items:center; gap:6px;">
              <button class="btn btn-primary" style="font-size:11.5px; padding:5px 12px; gap:5px;" onclick="window.openShareSolutionModal('${c.id}')">
                <i data-lucide="sparkles" style="width:11px;height:11px;"></i>
                <span>Share solution</span>
              </button>
              <button class="btn btn-outline" style="font-size:11.5px; padding:5px 8px;" onclick="window.copyChallengeLink('${c.id}')" title="Share discussion link">
                <i data-lucide="share-2" style="width:11px;height:11px;"></i>
              </button>
            </div>
          </div>

          <!-- Expandable Answers Thread -->
          ${c.showAnswers ? `
            <div class="challenge-answers-container" onclick="event.stopPropagation();">
              <div style="display:flex; align-items:center; justify-content:space-between;">
                <h4 style="font-size:12px; font-weight:800; color:var(--text-dark); margin:0;">Peer solutions &amp; advice (${(c.answers || []).length})</h4>
                <span style="font-size:10.5px; color:var(--text-muted);">Verified founders &amp; mentors</span>
              </div>

              ${(c.answers || []).map(ans => `
                <div class="challenge-answer-card">
                  <div class="challenge-answer-header">
                    <div style="display:flex; align-items:center; gap:7px;">
                      <div class="challenge-avatar" style="width:24px; height:24px; font-size:10px;">
                        ${ans.authorAvatar}
                      </div>
                      <div style="display:flex; align-items:center; gap:4px; font-size:11.5px;">
                        <span style="font-weight:800; color:var(--text-dark);">${ans.authorName}</span>
                        <span style="color:var(--text-light);">·</span>
                        <span style="color:var(--text-muted);">${ans.authorRole}</span>
                      </div>
                    </div>
                    <span style="font-size:10.5px; color:var(--text-light);">${ans.postDate}</span>
                  </div>
                  <p class="challenge-answer-content">${ans.content}</p>
                </div>
              `).join('')}

              <!-- Inline Answer Composer -->
              <div class="challenge-answer-composer">
                <textarea id="answer-input-${c.id}" class="challenge-answer-textarea" placeholder="Write tactical, experience-backed advice for this founder..."></textarea>
                <div style="display:flex; justify-content:flex-end; gap:8px;">
                  <button class="btn btn-primary" style="font-size:11.5px; padding:5px 12px;" onclick="window.submitChallengeAnswer('${c.id}')">
                    Post answer
                  </button>
                </div>
              </div>
            </div>
          ` : ''}
        </div>
      `).join('')}
    </div>
  `;

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

window.renderChallengeStream = renderChallengeStream;

window.toggleChallengeExpand = function(challengeId, event) {
  if (event) event.stopPropagation();

  const challenge = (window.FOUNDER_CHALLENGES_DATA || []).find(c => c.id === challengeId);
  if (!challenge) return;

  challenge.isExpanded = !challenge.isExpanded;
  filterAndRenderChallenges();
};

window.handleChallengeSearch = function(input) {
  currentChallengeSearch = input.value;
  filterAndRenderChallenges();
};

window.handleChallengeCategoryFilter = function(val) {
  currentChallengeCategory = val;
  filterAndRenderChallenges();
};

window.handleChallengeTypeFilter = function(val) {
  currentChallengeType = val;
  filterAndRenderChallenges();
};

window.toggleChallengeLike = function(challengeId, event) {
  if (event) event.stopPropagation();

  const challenge = (window.FOUNDER_CHALLENGES_DATA || []).find(c => c.id === challengeId);
  if (!challenge) return;

  challenge.isLiked = !challenge.isLiked;
  challenge.likesCount += challenge.isLiked ? 1 : -1;

  const countElem = document.getElementById(`challenge-likes-${challenge.id}`);
  if (countElem) {
    countElem.textContent = challenge.likesCount;
  }

  const btn = event ? event.currentTarget : null;
  if (btn) {
    btn.classList.toggle('active', challenge.isLiked);
    const icon = btn.querySelector('i');
    if (icon) icon.setAttribute('fill', challenge.isLiked ? 'currentColor' : 'none');
  }

  if (window.showToast) {
    window.showToast(challenge.isLiked ? 'Liked challenge' : 'Removed like', 'success');
  }
};

window.toggleChallengeAnswers = function(challengeId) {
  const challenge = (window.FOUNDER_CHALLENGES_DATA || []).find(c => c.id === challengeId);
  if (!challenge) return;

  challenge.showAnswers = !challenge.showAnswers;
  filterAndRenderChallenges();
};

window.submitChallengeAnswer = function(challengeId) {
  const input = document.getElementById(`answer-input-${challengeId}`);
  if (!input || !input.value.trim()) {
    if (window.showToast) window.showToast('Please enter your advice before submitting.', 'warning');
    return;
  }

  const challenge = (window.FOUNDER_CHALLENGES_DATA || []).find(c => c.id === challengeId);
  if (!challenge) return;

  const newAns = {
    id: `ans-${Date.now()}`,
    authorName: 'Dr. Sarah Chen',
    authorAvatar: 'SC',
    authorRole: 'Founder & CEO',
    companyName: 'Alpha Health 2.0',
    postDate: 'Just now',
    content: input.value.trim(),
    likesCount: 1,
    isLiked: true
  };

  challenge.answers = challenge.answers || [];
  challenge.answers.push(newAns);
  challenge.answersCount = challenge.answers.length;

  filterAndRenderChallenges();

  if (window.showToast) {
    window.showToast('Your solution has been posted to the discussion!', 'success');
  }
}

/* ──────────────────────────────────────────────────────────────────────────
   Post New Challenge Modal Handler
   ────────────────────────────────────────────────────────────────────────── */
window.openPostChallengeModal = function() {
  window.openModal('Share your founder challenge', `
    <div style="display:flex; flex-direction:column; gap:14px;">
      <p style="font-size:12.5px; color:var(--text-main); margin:0; line-height:1.5;">
        Ask experienced founders, mentors, and operators for tactical solutions to hurdles you are currently facing.
      </p>

      <!-- Field 1: What's your challenge? -->
      <div style="display:flex; flex-direction:column; gap:5px;">
        <label style="font-size:11.5px; font-weight:700; color:var(--text-dark);">What's your challenge? <span style="color:#DC2626;">*</span></label>
        <input type="text" id="newChallengeTitle" class="form-control" placeholder="e.g. How do we negotiate with our university TTO on non-dilutable equity?" />
      </div>

      <!-- Field 2: Describe your situation -->
      <div style="display:flex; flex-direction:column; gap:5px;">
        <label style="font-size:11.5px; font-weight:700; color:var(--text-dark);">Describe your situation <span style="color:#DC2626;">*</span></label>
        <textarea id="newChallengeContent" class="form-control" rows="4" placeholder="Provide background context, constraints, what you have tried so far, and the specific advice you are looking for..."></textarea>
      </div>

      <!-- Field 3: Category -->
      <div style="display:flex; flex-direction:column; gap:5px;">
        <label style="font-size:11.5px; font-weight:700; color:var(--text-dark);">Category <span style="color:#DC2626;">*</span></label>
        <select id="newChallengeCategory" class="form-control" style="font-size:12.5px;">
          <option value="">Select a category</option>
          <option value="Co-founder & Team">Co-founder &amp; Team</option>
          <option value="Fundraising & Pitching">Fundraising &amp; Pitching</option>
          <option value="Sales & GTM">Sales &amp; GTM</option>
          <option value="Legal & Equity">Legal &amp; Equity</option>
          <option value="Product & Tech">Product &amp; Tech</option>
          <option value="Hiring & Culture">Hiring &amp; Culture</option>
        </select>
      </div>

      <!-- Field 4: Tags -->
      <div style="display:flex; flex-direction:column; gap:5px;">
        <label style="font-size:11.5px; font-weight:700; color:var(--text-dark);">Tags (comma-separated)</label>
        <input type="text" id="newChallengeTags" class="form-control" placeholder="e.g. Cap Table, Series A, Term Sheet, Vesting" />
      </div>

      <!-- Field 5: Post Anonymously Checkbox -->
      <label style="display:flex; align-items:center; gap:8px; cursor:pointer; padding:8px 10px; background:#FAFAF9; border:1px solid var(--border-main); border-radius:8px; user-select:none;">
        <input type="checkbox" id="newChallengeIsAnon" style="width:16px; height:16px; accent-color:var(--text-dark);" />
        <div style="display:flex; flex-direction:column; gap:1px;">
          <span style="font-size:12px; font-weight:700; color:var(--text-dark);">🎭 Post anonymously</span>
          <span style="font-size:11px; color:var(--text-muted);">Hide your name, avatar, and company identity from other founders</span>
        </div>
      </label>

      <!-- Actions -->
      <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:4px;">
        <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary" onclick="submitNewChallenge()">
          Publish challenge
        </button>
      </div>
    </div>
  `);

  setTimeout(() => {
    const input = document.getElementById('newChallengeTitle');
    if (input) input.focus();
  }, 50);
};

window.submitNewChallenge = function() {
  const titleInput = document.getElementById('newChallengeTitle');
  const contentInput = document.getElementById('newChallengeContent');
  const catInput = document.getElementById('newChallengeCategory');
  const tagsInput = document.getElementById('newChallengeTags');
  const anonInput = document.getElementById('newChallengeIsAnon');

  if (!titleInput || !titleInput.value.trim()) {
    if (window.showToast) window.showToast("Please enter what's your challenge.", 'warning');
    return;
  }

  if (!contentInput || !contentInput.value.trim()) {
    if (window.showToast) window.showToast('Please describe your situation.', 'warning');
    return;
  }

  if (!catInput || !catInput.value) {
    if (window.showToast) window.showToast('Please select a category.', 'warning');
    return;
  }

  const isAnon = anonInput ? anonInput.checked : false;
  const rawTags = tagsInput ? tagsInput.value.split(',').map(t => t.trim()).filter(Boolean) : [];

  const newChallenge = {
    id: `fc-${Date.now()}`,
    isAnonymous: isAnon,
    authorName: isAnon ? 'Anonymous Founder' : 'Dr. Sarah Chen',
    authorAvatar: isAnon ? '🎭' : 'SC',
    authorRole: isAnon ? 'Early Stage Founder' : 'Founder & CEO',
    companyName: isAnon ? 'Stealth AI Startup' : 'Alpha Health 2.0',
    postDate: 'Just now',
    category: catInput.value,
    title: titleInput.value.trim(),
    content: contentInput.value.trim(),
    tags: rawTags.length > 0 ? rawTags : [catInput.value],
    likesCount: 1,
    isLiked: true,
    answersCount: 0,
    showAnswers: false,
    answers: []
  };

  window.FOUNDER_CHALLENGES_DATA.unshift(newChallenge);
  closeModal();
  filterAndRenderChallenges();

  if (window.showToast) {
    window.showToast(isAnon ? 'Challenge posted anonymously to founder community!' : 'Challenge published to founder community!', 'success');
  }
};

window.openShareSolutionModal = function(challengeId) {
  const challenge = (window.FOUNDER_CHALLENGES_DATA || []).find(c => c.id === challengeId);
  if (!challenge) return;

  if (window.showModal) {
    window.showModal(`Share Solution: "${challenge.title.substring(0, 48)}..."`, `
      <div style="display:flex; flex-direction:column; gap:12px;">
        <div style="padding:10px 12px; background:#FAFAF9; border:1px solid var(--border-faint); border-radius:8px;">
          <span style="font-size:11px; font-weight:700; color:var(--text-muted);">${challenge.authorName} (${challenge.category})</span>
          <p style="font-size:12.5px; color:var(--text-dark); margin:4px 0 0; line-height:1.45;">${challenge.title}</p>
        </div>

        <div style="display:flex; flex-direction:column; gap:5px;">
          <label style="font-size:11.5px; font-weight:700; color:var(--text-dark);">Your tactical advice or solution <span style="color:#DC2626;">*</span></label>
          <textarea id="modalSolutionInput" class="form-control" rows="4" placeholder="Share what worked in your experience, specific clause language, or recommended steps..."></textarea>
        </div>

        <div style="display:flex; justify-content:flex-end; gap:8px;">
          <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
          <button class="btn btn-primary" onclick="submitModalSolution('${challenge.id}')">
            Submit solution
          </button>
        </div>
      </div>
    `);
  }
};

window.submitModalSolution = function(challengeId) {
  const input = document.getElementById('modalSolutionInput');
  if (!input || !input.value.trim()) {
    if (window.showToast) window.showToast('Please enter your solution.', 'warning');
    return;
  }

  const challenge = (window.FOUNDER_CHALLENGES_DATA || []).find(c => c.id === challengeId);
  if (!challenge) return;

  const newAns = {
    id: `ans-${Date.now()}`,
    authorName: 'Dr. Sarah Chen',
    authorAvatar: 'SC',
    authorRole: 'Founder & CEO',
    companyName: 'Alpha Health 2.0',
    postDate: 'Just now',
    content: input.value.trim(),
    likesCount: 1,
    isLiked: true
  };

  challenge.answers = challenge.answers || [];
  challenge.answers.unshift(newAns);
  challenge.answersCount = challenge.answers.length;
  challenge.showAnswers = true;

  closeModal();
  filterAndRenderChallenges();

  if (window.showToast) {
    window.showToast('Your solution has been shared with the founder!', 'success');
  }
};

window.copyChallengeLink = function(challengeId) {
  const url = `${window.location.origin}${window.location.pathname.replace(/[^/]*$/, '')}founder-challenges.html?id=${challengeId}`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url);
  }
  if (window.showToast) {
    window.showToast('Discussion link copied to clipboard', 'success');
  }
};

/* ==========================================================================
   15. DUE-DILIGENCE DIRECTORY & INVESTOR READINESS FRAMEWORKS
   ========================================================================== */
window.DUE_DILIGENCE_DATA = [
  {
    id: 'saas',
    name: 'SaaS & Software',
    iconText: '</>',
    checksCount: 19,
    timeline: '3–6 months',
    timelineKey: '3-6 months',
    usersCount: 324,
    viewsCount: '2.5k',
    dealSize: '$2M – $10M',
    focusAreasCount: 3,
    tagline: 'Comprehensive evaluation of recurring revenue models, cohort retention, technical scalability, and unit economics.',
    overview: 'Due diligence is not just a checklist — it is the moment where investors verify everything you have claimed about your startup before committing capital.\n\nIn SaaS & software, this process becomes even more critical. SaaS requires deep analysis of recurring revenue models, churn rates, customer health metrics, and customer lifetime value.\n\nA weak due diligence process does not just delay funding — it can completely kill the deal.',
    pillars: [
      { name: 'Team', desc: 'Founder dynamics, vesting & key hire retention' },
      { name: 'Product', desc: 'Architecture, tech debt & scalability audits' },
      { name: 'Regulatory', desc: 'Data privacy (GDPR, CCPA), SOC 2 & compliance' },
      { name: 'Financials', desc: 'Audit-ready revenue recognition & unit economics' },
      { name: 'Market', desc: 'TAM validation, competitive moat & pricing power' },
      { name: 'Legal & IP', desc: 'Clean cap table, patents & contractor assignments' }
    ],
    stages: [
      { stage: 'Pre-Seed / Idea', depth: '25% depth', desc: 'MVP validation, early customer feedback, product-market fit indicators' },
      { stage: 'Seed Stage', depth: '50% depth', desc: 'MRR growth trajectory, customer acquisition costs, initial retention metrics' },
      { stage: 'Series A', depth: '75% depth', desc: 'ARR benchmarks, unit economics, scalability proof, enterprise customer validation' },
      { stage: 'Series B+', depth: '100% depth', desc: 'Market leadership, profitability path, global expansion readiness' }
    ],
    checklists: [
      {
        categoryTitle: '1. SaaS metrics & KPIs',
        groups: [
          {
            title: 'Revenue metrics',
            desc: 'Key revenue and growth indicators',
            items: [
              'Monthly recurring revenue (MRR) – Last 24 months',
              'Annual recurring revenue (ARR)',
              'Month-over-month growth rate',
              'Revenue mix by plan / tier'
            ]
          },
          {
            title: 'Customer health metrics',
            desc: 'Customer acquisition and retention',
            items: [
              'Customer acquisition cost (CAC)',
              'Lifetime value (LTV)',
              'LTV:CAC ratio (Target > 3:1)',
              'Monthly & annual churn rate',
              'Net revenue retention (NRR > 110%)',
              'Daily / monthly active users (DAU/MAU)'
            ]
          }
        ]
      },
      {
        categoryTitle: '2. Technology & infrastructure',
        groups: [
          {
            title: 'Technology stack',
            desc: 'Software architecture and dependencies',
            items: [
              'System architecture documentation',
              'Third-party dependencies & APIs',
              'Scalability assessment & load test logs',
              'Uptime statistics & SLA reports (>99.9%)',
              'Security audit reports & pen tests'
            ]
          }
        ]
      },
      {
        categoryTitle: '3. Customer portfolio & contracts',
        groups: [
          {
            title: 'Customer base analysis',
            desc: 'Customer concentration and contracts',
            items: [
              'Complete customer list with contract values (ACVs)',
              'Top 10 customer revenue breakdown (Concentration audit)',
              'Sample master services agreements (MSAs) & DPAs',
              'Payment terms, billing cycles & collections'
            ]
          }
        ]
      }
    ],
    dataRoomDocs: [
      { name: 'Customer contracts', desc: 'Executed MSAs, enterprise orders & DPAs' },
      { name: 'SaaS metrics model', desc: 'MRR/ARR cohorts, NRR, LTV:CAC waterfall' },
      { name: 'Technology stack doc', desc: 'Architecture, cloud infra & security audits' },
      { name: 'Cap table & corporate legal', desc: 'Articles, stock purchase agreements & 83(b)s' }
    ],
    processSteps: [
      { step: 1, title: 'Term sheet signed', desc: 'Initial agreement on valuation & key terms' },
      { step: 2, title: 'Data room shared', desc: 'Structured digital document repository access' },
      { step: 3, title: 'Investor analysis', desc: 'Deep dive into cohorts, tech stack & unit economics' },
      { step: 4, title: 'Expert interviews', desc: 'Customer reference calls & team background checks' },
      { step: 5, title: 'Risk assessment', desc: 'Legal audit, cap table review & IP assignment verification' },
      { step: 6, title: 'Final decision', desc: 'Investment committee approval & wire transfer' }
    ],
    dealKillers: [
      'High churn rate (>2.5% monthly net churn)',
      'Customer concentration risk (>25% ARR from single account)',
      'Weak product differentiation or unsustainable pricing',
      'Unclear IP ownership and missing founder/contractor IP assignments',
      'Poor technical documentation & unverified tech debt'
    ],
    criticalRisks: ['Churn rate', 'Customer concentration', 'Technology obsolescence'],
    readinessChecklist: [
      'Start DD preparation 2–3 months before fundraising',
      'Organize a well-structured digital data room',
      'Fix all compliance gaps and regulatory issues',
      'Prepare clear, honest responses to tough questions',
      'Have your financials audit-ready with reconciled billing',
      'Document all IP ownership and contractor assignments',
      'Clean up your cap table and shareholder agreements'
    ],
    proTip: 'Think like an investor: "What would make me NOT invest?" — Then fix those issues before anyone asks.'
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce & Retail',
    iconText: '🛒',
    checksCount: 8,
    timeline: '2–4 months',
    timelineKey: '2-4 months',
    usersCount: 304,
    viewsCount: '2.1k',
    dealSize: '$1M – $5M',
    focusAreasCount: 3,
    tagline: 'Deep dive into unit economics, supply chain resilience, inventory turnover, and multi-channel attribution.',
    overview: 'E-Commerce diligence focuses heavily on contribution margins (CM1/CM2/CM3), blended vs paid CAC, supplier dependency, and working capital cycles.',
    pillars: [
      { name: 'Unit Economics', desc: 'Blended CAC, repeat purchase rate & ROAS' },
      { name: 'Supply Chain', desc: 'Lead times, factory audits & MOQ terms' },
      { name: 'Inventory', desc: 'Turnover ratio, dead stock & warehouse SLAs' },
      { name: 'Channel Health', desc: 'D2C vs Marketplace margin parity' },
      { name: 'Fulfillment', desc: '3PL SLAs, shipping margin leakage & RTOs' },
      { name: 'Brand & IP', desc: 'Trademark registrations & design patents' }
    ],
    stages: [
      { stage: 'Pre-Seed', depth: '20%', desc: 'Initial SKU testing, supplier setup, early conversion data' },
      { stage: 'Seed', depth: '45%', desc: 'Repeat cohort behavior, first warehouse economics, ROAS stability' },
      { stage: 'Series A', depth: '80%', desc: 'Omnichannel expansion, working capital line readiness, contribution margin positive' },
      { stage: 'Series B+', depth: '100%', desc: 'Private label margin dominance, supply chain vertical integration' }
    ],
    checklists: [
      {
        categoryTitle: '1. Unit economics & marketing attribution',
        groups: [
          {
            title: 'Contribution margin audit',
            desc: 'Real net profitability per order',
            items: [
              'Contribution Margin 1, 2, and 3 waterfall reconciliation',
              'Blended vs Paid Customer Acquisition Cost (CAC)',
              'Repeat purchase rate at 30, 60, 90, and 180 days',
              'Return on Ad Spend (ROAS) across paid channels'
            ]
          }
        ]
      },
      {
        categoryTitle: '2. Supply chain & inventory',
        groups: [
          {
            title: 'Operations & logistics',
            desc: 'Working capital and partner stability',
            items: [
              'Supplier vendor contracts, payment credit terms & MOQs',
              'Inventory turnover days and aging stock depreciation',
              '3PL SLA reports and Return-to-Origin (RTO) rate tracking',
              'Product quality defect logs & customer warranty claims'
            ]
          }
        ]
      }
    ],
    dataRoomDocs: [
      { name: 'Unit economics model', desc: 'SKU-level margin breakdown and return rates' },
      { name: 'Supplier master contracts', desc: 'Factory agreements, pricing schedules and lead times' },
      { name: 'Inventory status report', desc: 'Warehouse inventory valuation and turnover velocity' }
    ],
    processSteps: [
      { step: 1, title: 'Term sheet', desc: 'Valuation & inventory financing terms' },
      { step: 2, title: 'Data room', desc: 'Unit economics model & supplier contracts' },
      { step: 3, title: 'Audit', desc: 'COGS reconciliation & marketing attribution' },
      { step: 4, title: 'Operations', desc: 'Warehouse & 3PL site inspection' },
      { step: 5, title: 'Risk review', desc: 'Supplier single-point-of-failure analysis' },
      { step: 6, title: 'Closing', desc: 'Working capital disbursement & wire transfer' }
    ],
    dealKillers: [
      'Unprofitable unit economics after accounting for returns and shipping',
      'Over-reliance on a single ad platform with deteriorating CAC',
      'Excessive inventory holding with high obsolescence risk',
      'Single-supplier dependency without backup manufacturing partners'
    ],
    criticalRisks: ['Ad platform algorithm shifts', 'Supply chain lead time shocks', 'Inventory write-offs'],
    readinessChecklist: [
      'Reconcile last 12 months of SKU-level contribution margins',
      'Have audited warehouse inventory valuation reports ready',
      'Document multi-channel attribution and organic traffic share',
      'Ensure clear trademark registrations across all operational territories'
    ],
    proTip: 'Show investors your contribution margin AFTER marketing, returns, and payment gateway fees — that is where true e-commerce value lives.'
  },
  {
    id: 'fintech',
    name: 'FinTech',
    iconText: '$',
    checksCount: 10,
    timeline: '6–12 months',
    timelineKey: '6-12 months',
    usersCount: 477,
    viewsCount: '1.9k',
    dealSize: '$3M – $15M',
    focusAreasCount: 4,
    tagline: 'Rigorous audit of regulatory compliance, banking partnership stability, fraud prevention, and capital adequacy.',
    overview: 'FinTech due diligence is dominated by regulatory compliance, AML/KYC protocols, banking partner agreements, fraud loss rates, and capital reserves.',
    pillars: [
      { name: 'Regulatory', desc: 'RBI/SEC/FCA licenses, AML/KYC & escrow audits' },
      { name: 'Bank Partners', desc: 'Sponsor bank agreements & BIN sponsorship terms' },
      { name: 'Fraud & Risk', desc: 'Chargeback ratios, fraud loss provisioning & models' },
      { name: 'Financials', desc: 'Take rates, net interest margin & credit default rates' },
      { name: 'InfoSec', desc: 'PCI-DSS Level 1, ISO 27001 & data localization' },
      { name: 'Governance', desc: 'Compliance officer certification & audit committees' }
    ],
    stages: [
      { stage: 'Pre-Seed', depth: '30%', desc: 'Regulatory sandbox entry, initial sponsor bank LOI' },
      { stage: 'Seed', depth: '60%', desc: 'Live transactional volume, initial fraud metrics, compliance audit' },
      { stage: 'Series A', depth: '85%', desc: 'Direct banking integrations, loss provisioning validation, PCI-DSS compliance' },
      { stage: 'Series B+', depth: '100%', desc: 'Full regulatory licensing, secondary banking rails, institutional debt facilities' }
    ],
    checklists: [
      {
        categoryTitle: '1. Regulatory & licensing compliance',
        groups: [
          {
            title: 'Statutory authorizations',
            desc: 'Central bank & securities regulations',
            items: [
              'Direct regulatory licenses or documented partner proxy arrangements',
              'Anti-Money Laundering (AML) & KYC verification policies',
              'User fund segregation audits and escrow accounts',
              'Data localization & regulatory reporting compliance'
            ]
          }
        ]
      },
      {
        categoryTitle: '2. Risk, fraud & banking infrastructure',
        groups: [
          {
            title: 'Operational risk',
            desc: 'Fraud loss and partner redundancy',
            items: [
              'Historical chargeback and fraud loss rates (<0.5% TPV)',
              'Sponsor bank master service agreements & SLA terms',
              'PCI-DSS compliance certificates and tokenization flows',
              'Credit underwriting model backtesting reports (if lending)'
            ]
          }
        ]
      }
    ],
    dataRoomDocs: [
      { name: 'Regulatory compliance manual', desc: 'AML/KYC and risk management framework' },
      { name: 'Sponsor bank contracts', desc: 'Banking partnership and API integration agreements' },
      { name: 'PCI-DSS certification', desc: 'Independent InfoSec compliance audit reports' }
    ],
    processSteps: [
      { step: 1, title: 'Term sheet', desc: 'Capital & equity structure agreement' },
      { step: 2, title: 'Data room', desc: 'Regulatory filings, bank contracts & audit reports' },
      { step: 3, title: 'Compliance audit', desc: 'External forensic legal review of licensing' },
      { step: 4, title: 'Bank reference', desc: 'Sponsor bank partner relationship validation' },
      { step: 5, title: 'Risk assessment', desc: 'Fraud loss provisioning and capital adequacy review' },
      { step: 6, title: 'Closing', desc: 'Regulatory notifications & escrow funding' }
    ],
    dealKillers: [
      'Operating without proper regulatory cover or compliant sponsor bank partnerships',
      'Uncontrolled fraud losses or high chargeback rates (>1%)',
      'Co-mingling of operational funds with client escrow balances',
      'Regulatory enforcement notices or pending consumer protection litigation'
    ],
    criticalRisks: ['Regulatory policy shifts', 'Sponsor bank partner cancellation', 'Systemic credit defaults'],
    readinessChecklist: [
      'Ensure complete separation of client escrow and operational accounts',
      'Have current PCI-DSS and SOC 2 Type II audit certificates ready',
      'Document all sponsor bank partnerships and revenue share splits',
      'Conduct an independent third-party regulatory compliance audit'
    ],
    proTip: 'FinTech investors do not compromise on compliance: prove your banking rails and regulatory posture are bulletproof.'
  },
  {
    id: 'healthtech',
    name: 'HealthTech',
    iconText: '❤️',
    checksCount: 14,
    timeline: '6–9 months',
    timelineKey: '6-9 months',
    usersCount: 410,
    viewsCount: '2.3k',
    dealSize: '$2M – $8M',
    focusAreasCount: 3,
    tagline: 'Validation of clinical efficacy, healthcare data privacy (HIPAA/GDPR), reimbursement pathways, and trials.',
    overview: 'HealthTech diligence evaluates clinical trial results, medical device approvals (FDA/CDSCO), hospital pilot conversions, and health data governance.',
    pillars: [
      { name: 'Clinical', desc: 'Trial efficacy, peer-reviewed publications & IRB approvals' },
      { name: 'Regulatory', desc: 'FDA 510(k), CDSCO or CE Mark certifications' },
      { name: 'Privacy', desc: 'HIPAA, GDPR & patient data security audits' },
      { name: 'Commercial', desc: 'Hospital procurement cycles & physician adoption' },
      { name: 'Reimbursement', desc: 'CPT coding & insurance payer reimbursement coverage' },
      { name: 'IP', desc: 'Core biomedical and algorithmic patents' }
    ],
    stages: [
      { stage: 'Pre-Seed', depth: '25%', desc: 'Proof of concept, IRB study protocol approval' },
      { stage: 'Seed', depth: '55%', desc: 'Pilot clinical data, initial regulatory submission' },
      { stage: 'Series A', depth: '80%', desc: 'Regulatory clearance, hospital commercial contracts' },
      { stage: 'Series B+', depth: '100%', desc: 'Payer reimbursement codes, multi-hospital rollout' }
    ],
    checklists: [
      {
        categoryTitle: '1. Clinical evidence & regulatory status',
        groups: [
          {
            title: 'Clinical validation',
            desc: 'Peer-reviewed evidence and approvals',
            items: [
              'Clinical trial data and peer-reviewed journal publications',
              'Institutional Review Board (IRB) study approvals',
              'Medical device classification and regulatory clearance files',
              'Physician advisory board credentials and engagement terms'
            ]
          }
        ]
      }
    ],
    dataRoomDocs: [
      { name: 'Clinical study dossier', desc: 'Trial methodology, sample sizes and statistical efficacy' },
      { name: 'Regulatory approval certificates', desc: 'FDA, CDSCO or CE mark documentation' },
      { name: 'HIPAA/GDPR audit report', desc: 'Patient health data encryption and compliance logs' }
    ],
    processSteps: [
      { step: 1, title: 'Term sheet', desc: 'Valuation & milestone-based funding tranches' },
      { step: 2, title: 'Data room', desc: 'Clinical dossiers, patents & regulatory files' },
      { step: 3, title: 'KOL review', desc: 'Key Opinion Leader & physician interviews' },
      { step: 4, title: 'Regulatory check', desc: 'Independent medical regulatory audit' },
      { step: 5, title: 'Hospital review', desc: 'Procurement stakeholder and pilot verification' },
      { step: 6, title: 'Closing', desc: 'Closing & milestone governance schedule' }
    ],
    dealKillers: [
      'Inconclusive clinical efficacy or flawed trial methodology',
      'Unresolved medical device regulatory classification disputes',
      'Health data privacy violations or unencrypted PHI storage',
      'Missing clinical pathway to insurance reimbursement'
    ],
    criticalRisks: ['Regulatory trial delays', 'Hospital procurement friction', 'Reimbursement code denials'],
    readinessChecklist: [
      'Package all clinical trial statistical reports and raw datasets',
      'Ensure all patient data handling complies with HIPAA and local medical privacy laws',
      'Document the clear roadmap to insurance CPT coding and reimbursement',
      'Secure exclusive IP assignment on all clinical and algorithmic innovations'
    ],
    proTip: 'Clinical efficacy and patient safety are paramount: present clear statistical significance and documented doctor endorsements.'
  },
  {
    id: 'edtech',
    name: 'EdTech',
    iconText: '📖',
    checksCount: 8,
    timeline: '3–6 months',
    timelineKey: '3-6 months',
    usersCount: 361,
    viewsCount: '1.8k',
    dealSize: '$1M – $6M',
    focusAreasCount: 3,
    tagline: 'Assessment of learning outcomes, user engagement cycles, content intellectual property, and institutional sales.',
    overview: 'EdTech diligence focuses on student engagement, course completion rates, pedagogical efficacy, teacher adoption, and B2B school/university sales cycles.',
    pillars: [
      { name: 'Pedagogy', desc: 'Learning efficacy, retention and outcome validation' },
      { name: 'Engagement', desc: 'Course completion rates, DAU/MAU and session duration' },
      { name: 'Content IP', desc: 'Exclusive curriculum rights and teacher contracts' },
      { name: 'Monetization', desc: 'D2C subscription renewals vs institutional B2B ACV' },
      { name: 'Child Privacy', desc: 'COPPA, FERPA and student data security' },
      { name: 'Distribution', desc: 'School district procurement & organic parent acquisition' }
    ],
    stages: [
      { stage: 'Pre-Seed', depth: '25%', desc: 'Curriculum MVP, student feedback, completion test' },
      { stage: 'Seed', depth: '50%', desc: 'Paid cohort retention, tutor marketplace liquidity' },
      { stage: 'Series A', depth: '75%', desc: 'School district contracts, high course completion rate' },
      { stage: 'Series B+', depth: '100%', desc: 'National curriculum integration, international distribution' }
    ],
    checklists: [
      {
        categoryTitle: '1. Learning metrics & student engagement',
        groups: [
          {
            title: 'Learning outcomes',
            desc: 'Student progress and retention',
            items: [
              'Course completion rates and quiz pass distributions',
              'Daily active learners and average weekly study duration',
              'Student net promoter score (NPS) and parent satisfaction data',
              'Educator retention and lesson creation velocity'
            ]
          }
        ]
      }
    ],
    dataRoomDocs: [
      { name: 'Curriculum IP documentation', desc: 'Content ownership, licensing and author contracts' },
      { name: 'Learner engagement report', desc: 'Course completion analytics and cohort retention' },
      { name: 'Institutional sales pipeline', desc: 'School district and university contracts' }
    ],
    processSteps: [
      { step: 1, title: 'Term sheet', desc: 'Valuation & expansion terms' },
      { step: 2, title: 'Data room', desc: 'Engagement metrics & curriculum IP' },
      { step: 3, title: 'Pedagogy audit', desc: 'Educator and parent interviews' },
      { step: 4, title: 'Compliance', desc: 'COPPA & student data privacy review' },
      { step: 5, title: 'Pipeline review', desc: 'Institutional contract verification' },
      { step: 6, title: 'Closing', desc: 'Capital wire transfer' }
    ],
    dealKillers: [
      'Low course completion rates (<15%) or poor student engagement',
      'Unclear content IP ownership or teacher copyright disputes',
      'High student drop-off after the first billing cycle',
      'Violations of COPPA or student data privacy laws'
    ],
    criticalRisks: ['Parent churn cycles', 'Slow school procurement', 'Free content competition'],
    readinessChecklist: [
      'Document proven learning outcomes and standardized test score improvements',
      'Verify 100% IP ownership of all videos, curriculum, and assessments',
      'Ensure strict compliance with COPPA and FERPA student privacy regulations',
      'Reconcile annual renewal rates for institutional and consumer subscriptions'
    ],
    proTip: 'Show genuine proof of student learning and skill improvement — vanity user signups without course completion will not convince top edtech funds.'
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    iconText: '🏭',
    checksCount: 7,
    timeline: '6–12 months',
    timelineKey: '6-12 months',
    usersCount: 376,
    viewsCount: '2.6k',
    dealSize: '$3M – $12M',
    focusAreasCount: 3,
    tagline: 'Analysis of facility production capacity, equipment lifecycle, supply chain redundancy, and quality control.',
    overview: 'Industrial & hardware manufacturing diligence demands in-depth inspection of factory capacity utilization, OEE, scrap rates, and environmental clearances.',
    pillars: [
      { name: 'Operations', desc: 'Overall equipment effectiveness (OEE) & factory utilization' },
      { name: 'Quality', desc: 'ISO 9001, Six Sigma scrap rates & defect tracking' },
      { name: 'Supply Chain', desc: 'Raw material procurement contracts & buffer stock' },
      { name: 'Environment', desc: 'Pollution board clearances & hazardous waste audits' },
      { name: 'Financials', desc: 'Gross manufacturing margin & CapEx depreciation cycles' },
      { name: 'Safety', desc: 'OSHA compliance, workplace safety & labor agreements' }
    ],
    stages: [
      { stage: 'Pre-Seed', depth: '20%', desc: 'Bench prototype, contract manufacturer engagement' },
      { stage: 'Seed', depth: '45%', desc: 'Small batch production, initial factory yield verification' },
      { stage: 'Series A', depth: '75%', desc: 'Dedicated line setup, ISO certification, steady supply chain' },
      { stage: 'Series B+', depth: '100%', desc: 'Mega-facility scaling, automated quality control, global exports' }
    ],
    checklists: [
      {
        categoryTitle: '1. Production capacity & quality control',
        groups: [
          {
            title: 'Factory metrics',
            desc: 'Yields, downtime and certifications',
            items: [
              'Factory capacity utilization and Overall Equipment Effectiveness (OEE)',
              'Scrap rate and quality defect tracking logs (<1%)',
              'ISO 9001, ISO 14001, and industry-specific certifications',
              'Equipment maintenance schedules and CapEx replacement models'
            ]
          }
        ]
      }
    ],
    dataRoomDocs: [
      { name: 'Facility audit dossier', desc: 'Factory layout, equipment list and capacity reports' },
      { name: 'Quality control logs', desc: 'Defect rates, customer returns and ISO certifications' },
      { name: 'Environmental clearances', desc: 'Pollution board and safety compliance certificates' }
    ],
    processSteps: [
      { step: 1, title: 'Term sheet', desc: 'CapEx and expansion valuation' },
      { step: 2, title: 'Data room', desc: 'Production models, supplier contracts & audits' },
      { step: 3, title: 'Site visit', desc: 'Physical factory and warehouse inspection' },
      { step: 4, title: 'Vendor checks', desc: 'Raw material supplier interviews' },
      { step: 5, title: 'Environmental review', desc: 'Pollution and labor safety review' },
      { step: 6, title: 'Closing', desc: 'Tranche disbursement for CapEx' }
    ],
    dealKillers: [
      'Excessive factory downtime or high scrap rates eating margins',
      'Unresolved pollution board notices or environmental non-compliance',
      'Single-source raw material vulnerabilities with pricing volatility',
      'Labor disputes or lack of industrial safety compliance'
    ],
    criticalRisks: ['Raw material inflation', 'Equipment breakdown', 'Environmental regulation'],
    readinessChecklist: [
      'Prepare detailed plant floor diagrams and equipment maintenance schedules',
      'Compile raw material supply contracts with guaranteed pricing terms',
      'Verify all environmental and industrial labor safety permits are up to date',
      'Provide historical scrap rate and factory throughput efficiency reports'
    ],
    proTip: 'Factory transparency wins manufacturing deals: be ready to host investors on-site with full production line visibility.'
  },
  {
    id: 'realestate',
    name: 'Real Estate & PropTech',
    iconText: '🏢',
    checksCount: 9,
    timeline: '9–18 months',
    timelineKey: '9-18 months',
    usersCount: 471,
    viewsCount: '2.3k',
    dealSize: '$5M – $25M',
    focusAreasCount: 3,
    tagline: 'Evaluation of property title integrity, zoning regulation compliance, market valuation, and asset occupancy.',
    overview: 'PropTech and real estate development diligence focuses on clear title deed verification, zoning laws, cap rates, rental yield consistency, and tenant leases.',
    pillars: [
      { name: 'Title', desc: '30-year title deed verification & encumbrance certificates' },
      { name: 'Zoning', desc: 'Municipal development approvals & environmental clearances' },
      { name: 'Yields', desc: 'Net operating income (NOI), cap rates & lease agreements' },
      { name: 'Occupancy', desc: 'Historical vacancy rates, tenant credit quality & leases' },
      { name: 'Construction', desc: 'Contractor liens, completion bonds & cost overrun models' },
      { name: 'Legal', desc: 'RERA compliance, property tax records & litigation search' }
    ],
    stages: [
      { stage: 'Pre-Seed', depth: '20%', desc: 'Platform prototype, early broker network' },
      { stage: 'Seed', depth: '50%', desc: 'Initial asset tokenization/leasing, title audit framework' },
      { stage: 'Series A', depth: '80%', desc: 'Institutional portfolio onboarded, audited yields' },
      { stage: 'Series B+', depth: '100%', desc: 'REIT conversion readiness, cross-city asset scaling' }
    ],
    checklists: [
      {
        categoryTitle: '1. Title deeds & municipal approvals',
        groups: [
          {
            title: 'Property title integrity',
            desc: 'Legal title and zoning permissions',
            items: [
              '30-year title search report and non-encumbrance certificate',
              'Municipal zoning approvals and building plan sanctions',
              'RERA project registration and compliance filings',
              'Property tax payment receipts and clearance certificates'
            ]
          }
        ]
      }
    ],
    dataRoomDocs: [
      { name: 'Title search dossier', desc: 'Complete legal title chain and encumbrance reports' },
      { name: 'Rent roll & lease agreements', desc: 'Active tenant leases, lock-in terms and security deposits' },
      { name: 'Independent valuation report', desc: 'Certified real estate appraiser valuation models' }
    ],
    processSteps: [
      { step: 1, title: 'Term sheet', desc: 'Portfolio valuation & cap rate agreement' },
      { step: 2, title: 'Data room', desc: 'Title deeds, lease contracts & municipal files' },
      { step: 3, title: 'Title diligence', desc: 'Legal counsel title search across registries' },
      { step: 4, title: 'Physical appraisal', desc: 'Structural engineering and property appraisal' },
      { step: 5, title: 'Tenant audits', desc: 'Rent roll reconciliation and lease verification' },
      { step: 6, title: 'Closing', desc: 'Escrow deed registration & wire transfer' }
    ],
    dealKillers: [
      'Clouded title or unresolved dispute in property chain of ownership',
      'Construction without required municipal or environmental permissions',
      'High vacancy rates or fragile anchor tenant leases',
      'Undisclosed contractor liens or local property tax defaults'
    ],
    criticalRisks: ['Zoning disputes', 'Interest rate spikes', 'Tenant default'],
    readinessChecklist: [
      'Obtain an updated 30-year title search certificate from legal counsel',
      'Reconcile rent roll data with actual bank deposits for the past 24 months',
      'Compile all RERA compliance filings and occupancy certificates',
      'Prepare an independent property valuation report from a certified appraiser'
    ],
    proTip: 'Clear, undisputed title deeds and verifiable rent rolls are the bedrock of real estate investor trust.'
  },
  {
    id: 'foodbev',
    name: 'Food & Beverage',
    iconText: '☕',
    checksCount: 8,
    timeline: '3–6 months',
    timelineKey: '3-6 months',
    usersCount: 282,
    viewsCount: '2.5k',
    dealSize: '$1M – $5M',
    focusAreasCount: 3,
    tagline: 'Audit of food safety certifications, quality control systems, supplier reliability, and retail shelf velocity.',
    overview: 'Food & beverage due diligence evaluates food safety licensing (FSSAI, FDA), ingredient sourcing traceability, shelf-life testing, and retail distributor margins.',
    pillars: [
      { name: 'Safety', desc: 'FSSAI/FDA licenses, HACCP & food safety audits' },
      { name: 'Shelf Life', desc: 'Lab stability tests, packaging barrier & expiry models' },
      { name: 'Distribution', desc: 'Retail shelf velocity, distributor margins & slotting fees' },
      { name: 'Sourcing', desc: 'Ingredient traceability, farm contracts & organic certs' },
      { name: 'Unit Margins', desc: 'Recipe cost breakdown, co-packer terms & batch yields' },
      { name: 'Brand', desc: 'Trademark protection across food categories & recipe IP' }
    ],
    stages: [
      { stage: 'Pre-Seed', depth: '25%', desc: 'Commercial kitchen recipe validation, local testing' },
      { stage: 'Seed', depth: '50%', desc: 'Co-packer agreement, initial retail presence, FSSAI compliance' },
      { stage: 'Series A', depth: '75%', desc: 'Regional distribution, documented shelf velocity, HACCP' },
      { stage: 'Series B+', depth: '100%', desc: 'National retail footprint, high repeat purchases, export licenses' }
    ],
    checklists: [
      {
        categoryTitle: '1. Food safety & regulatory licenses',
        groups: [
          {
            title: 'Regulatory compliance',
            desc: 'Food safety and lab testing',
            items: [
              'FSSAI / FDA manufacturing and distribution licenses',
              'Third-party laboratory shelf-life and nutritional test reports',
              'HACCP and GMP food safety management certifications',
              'Ingredient traceability logs and supplier safety audits'
            ]
          }
        ]
      }
    ],
    dataRoomDocs: [
      { name: 'Food safety licenses', desc: 'FSSAI, FDA and local municipal health clearances' },
      { name: 'Recipe costing model', desc: 'Per-batch ingredient costs, packaging and co-packer fees' },
      { name: 'Distributor agreements', desc: 'Modern trade and general trade margin agreements' }
    ],
    processSteps: [
      { step: 1, title: 'Term sheet', desc: 'Valuation & retail rollout capital' },
      { step: 2, title: 'Data room', desc: 'Food safety tests, recipe models & distributor files' },
      { step: 3, title: 'Lab testing', desc: 'Independent shelf-life & nutritional verification' },
      { step: 4, title: 'Co-packer visit', desc: 'Manufacturing plant hygiene and capacity audit' },
      { step: 5, title: 'Retail checks', desc: 'Store visits to verify real on-shelf velocity' },
      { step: 6, title: 'Closing', desc: 'Fund release & working capital deployment' }
    ],
    dealKillers: [
      'Missing or suspended food safety licenses (FSSAI / FDA)',
      'High product spoilage or failed laboratory shelf-life tests',
      'Negative contribution margins after modern trade slotting fees',
      'Unprotected recipe IP or trademark infringement issues'
    ],
    criticalRisks: ['Spoilage & expiry returns', 'Retail distributor margin compression', 'Food safety recalls'],
    readinessChecklist: [
      'Have certified laboratory nutritional and shelf-life test reports ready',
      'Compile all co-packing and manufacturing service level agreements',
      'Document modern trade velocity (units sold per store per week)',
      'Ensure all ingredient suppliers have active food safety certifications'
    ],
    proTip: 'Retail shelf velocity (units per store per week) is the true North Star for F&B investors — prove your product flies off shelves.'
  },
  {
    id: 'ai',
    name: 'AI & Machine Learning',
    iconText: '🧠',
    checksCount: 12,
    timeline: '4–8 months',
    timelineKey: '4-8 months',
    usersCount: 204,
    viewsCount: '1.7k',
    dealSize: '$2M – $10M',
    focusAreasCount: 3,
    tagline: 'Technical verification of model performance, training data integrity, GPU infra unit economics, and bias mitigation.',
    overview: 'AI startup due diligence scrutinizes proprietary dataset rights, model benchmark validation, inference compute costs (gross margin health), and AI safety compliance.',
    pillars: [
      { name: 'Data Rights', desc: 'Dataset licensing, clean scraping terms & data provenance' },
      { name: 'Compute Cost', desc: 'GPU inference cost per query & gross margin trajectory' },
      { name: 'Model Moat', desc: 'Fine-tuning vs wrapper evaluation, proprietary architecture' },
      { name: 'Evaluation', desc: 'Benchmark metrics, hallucination rates & latency SLAs' },
      { name: 'AI Safety', desc: 'EU AI Act compliance, bias mitigation & alignment guardrails' },
      { name: 'IP & Code', desc: 'Open-source license compliance (GPL vs Apache 2.0)' }
    ],
    stages: [
      { stage: 'Pre-Seed', depth: '25%', desc: 'Proof of concept model, benchmark validation on public data' },
      { stage: 'Seed', depth: '50%', desc: 'Proprietary fine-tuned weights, initial API customers, latency SLA' },
      { stage: 'Series A', depth: '80%', desc: 'Defensible data flywheel, positive gross margins on inference' },
      { stage: 'Series B+', depth: '100%', desc: 'Enterprise private deployments, multi-model orchestrator scale' }
    ],
    checklists: [
      {
        categoryTitle: '1. Dataset rights & model architecture',
        groups: [
          {
            title: 'Data & compute integrity',
            desc: 'Training data and unit economics',
            items: [
              'Training dataset copyright clearances and commercial licensing agreements',
              'Proprietary model benchmark evaluation logs vs open-weights (Llama, Mistral)',
              'Inference compute cost breakdown (GPU hosting vs revenue per customer)',
              'Hallucination and guardrail evaluation test suites'
            ]
          }
        ]
      }
    ],
    dataRoomDocs: [
      { name: 'Data provenance report', desc: 'Complete audit of training data sources and licenses' },
      { name: 'Model evaluation suite', desc: 'Benchmark results, latency logs and safety audit files' },
      { name: 'Inference cost model', desc: 'GPU cluster utilization and gross margin projections' }
    ],
    processSteps: [
      { step: 1, title: 'Term sheet', desc: 'Valuation & compute credits structure' },
      { step: 2, title: 'Data room', desc: 'Model evaluations, data licenses & GPU costs' },
      { step: 3, title: 'Tech deep dive', desc: 'External AI researcher architecture audit' },
      { step: 4, title: 'Data audit', desc: 'Copyright & data rights verification' },
      { step: 5, title: 'Customer calls', desc: 'Enterprise customer accuracy & ROI verification' },
      { step: 6, title: 'Closing', desc: 'Funding wire transfer' }
    ],
    dealKillers: [
      'Unlicensed or copyrighted training data vulnerable to copyright lawsuits',
      'Negative gross margins on inference compute costs',
      'Thin wrapper around third-party APIs without proprietary moat',
      'Uncontrolled hallucination rates in mission-critical applications'
    ],
    criticalRisks: ['Foundation model commoditization', 'GPU infrastructure cost spikes', 'AI copyright liability'],
    readinessChecklist: [
      'Conduct a thorough audit of all training datasets and license terms',
      'Demonstrate a clear gross margin path (>70%) accounting for inference compute',
      'Provide standardized benchmark comparisons against leading open models',
      'Document enterprise privacy controls and zero-data-retention agreements'
    ],
    proTip: 'Prove your AI startup is not just a thin wrapper: demonstrate proprietary data flywheels and defensible inference unit economics.'
  },
  {
    id: 'cleantech',
    name: 'CleanTech & Energy',
    iconText: '⚡',
    checksCount: 11,
    timeline: '6–12 months',
    timelineKey: '6-12 months',
    usersCount: 195,
    viewsCount: '1.5k',
    dealSize: '$3M – $15M',
    focusAreasCount: 3,
    tagline: 'Audit of carbon accounting methodologies, hardware durability, regulatory grid-interconnect approvals, and subsidies.',
    overview: 'CleanTech due diligence focuses on third-party carbon offset verification, energy efficiency metrics, hardware warranty life cycles, and government green subsidy frameworks.',
    pillars: [
      { name: 'Carbon Audits', desc: 'Verra/Gold Standard methodology & LCA reports' },
      { name: 'Efficiency', desc: 'Energy generation/storage efficiency & degradation curves' },
      { name: 'Grid Approvals', desc: 'Utility interconnect permits & net metering rights' },
      { name: 'Hardware', desc: 'Field durability, warranty provisions & MTBF logs' },
      { name: 'Subsidies', desc: 'Government green grants, tax credits (IRA) & policy stability' },
      { name: 'IP', desc: 'Core chemistry, thermodynamics & control software patents' }
    ],
    stages: [
      { stage: 'Pre-Seed', depth: '20%', desc: 'Lab scale prototype, carbon reduction model' },
      { stage: 'Seed', depth: '45%', desc: 'Pilot site deployment, verified energy yield data' },
      { stage: 'Series A', depth: '75%', desc: 'Commercial pilot contracts, utility grid approval' },
      { stage: 'Series B+', depth: '100%', desc: 'Multi-megawatt scaling, project financing readiness' }
    ],
    checklists: [
      {
        categoryTitle: '1. Carbon validation & grid compliance',
        groups: [
          {
            title: 'Technical efficacy',
            desc: 'Energy yields and lifecycle assessment',
            items: [
              'Life Cycle Assessment (LCA) certified by accredited carbon auditor',
              'Hardware accelerated degradation and MTBF test reports',
              'Utility grid interconnect approvals and power purchase agreements (PPAs)',
              'Government subsidy and tax credit eligibility documentation'
            ]
          }
        ]
      }
    ],
    dataRoomDocs: [
      { name: 'Carbon audit report', desc: 'Third-party validated carbon offset methodology' },
      { name: 'Hardware durability logs', desc: 'Laboratory stress testing and degradation curves' },
      { name: 'Power purchase agreements', desc: 'Executed customer contracts and utility permissions' }
    ],
    processSteps: [
      { step: 1, title: 'Term sheet', desc: 'Valuation & project debt schedule' },
      { step: 2, title: 'Data room', desc: 'LCA reports, patents & pilot site data' },
      { step: 3, title: 'Field audit', desc: 'Independent engineering inspection of pilot site' },
      { step: 4, title: 'Policy review', desc: 'Subsidies and regulatory stability analysis' },
      { step: 5, title: 'Customer review', desc: 'Offtake customer and utility partner interviews' },
      { step: 6, title: 'Closing', desc: 'Tranche funding release' }
    ],
    dealKillers: [
      'Unverified or fraudulent carbon accounting claims (greenwashing risk)',
      'Hardware degradation rates significantly higher than promised',
      'Reliance on expiring subsidies without a path to grid parity',
      'Inability to obtain utility grid interconnect approvals'
    ],
    criticalRisks: ['Regulatory policy shifts', 'Hardware reliability in extreme weather', 'Grid interconnect delays'],
    readinessChecklist: [
      'Obtain an independent third-party Life Cycle Assessment (LCA) report',
      'Compile multi-year hardware accelerated life testing and field degradation data',
      'Document all utility interconnection agreements and off-take contracts',
      'Ensure complete patent protection across core thermodynamics or chemical innovations'
    ],
    proTip: 'Third-party engineering validation is essential in CleanTech: independent lab reports build unshakeable investor conviction.'
  }
];

let currentDDSearch = '';
let currentDDTimeline = 'all';
let currentDDSort = 'popular';

function renderDueDiligenceDirectory() {
  const container = document.getElementById('dueDiligenceGrid');
  if (!container) return;

  const countBadge = document.getElementById('ddCountBadge');
  if (countBadge) {
    countBadge.textContent = `${(window.DUE_DILIGENCE_DATA || []).length} industry frameworks`;
  }

  filterAndRenderDDGrid();
}

window.renderDueDiligenceDirectory = renderDueDiligenceDirectory;

function filterAndRenderDDGrid() {
  const container = document.getElementById('dueDiligenceGrid');
  if (!container) return;

  let list = window.DUE_DILIGENCE_DATA || [];

  if (currentDDSearch.trim()) {
    const q = currentDDSearch.toLowerCase().trim();
    list = list.filter(item =>
      item.name.toLowerCase().includes(q) ||
      item.tagline.toLowerCase().includes(q) ||
      item.timeline.toLowerCase().includes(q) ||
      (item.criticalRisks && item.criticalRisks.some(r => r.toLowerCase().includes(q)))
    );
  }

  if (currentDDTimeline !== 'all') {
    list = list.filter(item => item.timelineKey === currentDDTimeline);
  }

  if (currentDDSort === 'checks') {
    list = [...list].sort((a, b) => b.checksCount - a.checksCount);
  } else if (currentDDSort === 'duration') {
    list = [...list].sort((a, b) => a.checksCount - b.checksCount);
  } else {
    list = [...list].sort((a, b) => b.usersCount - a.usersCount);
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div class="empty-placeholder-box" style="grid-column: 1 / -1; padding:48px 24px; text-align:center;">
        <i data-lucide="shield-check" style="width:32px; height:32px; color:var(--text-light); margin-bottom:8px;"></i>
        <h4 style="font-size:14px; font-weight:800; color:var(--text-dark); margin:0 0 4px;">No matching frameworks found</h4>
        <p style="font-size:12px; color:var(--text-muted); margin:0;">Try adjusting your keyword or timeline filter selections.</p>
      </div>`;
    if (typeof lucide !== 'undefined') lucide.createIcons();
    return;
  }

  container.innerHTML = `
    <div class="dd-grid-layout">
      ${list.map(item => `
        <div class="dd-industry-card" onclick="window.location.href='./due-diligence-detail.html?id=${item.id}'">
          <!-- Header: Icon on Left + Title & Tagline on Right -->
          <div class="dd-card-header-row">
            <div class="dd-card-icon-badge">
              ${item.iconText}
            </div>
            <div class="dd-card-header-text">
              <h3 class="dd-card-title">${item.name}</h3>
              <p class="dd-card-tagline">${item.tagline}</p>
            </div>
          </div>

          <!-- Pills Row: Checks & Duration -->
          <div class="dd-card-pills-row">
            <span class="dd-card-pill"><i data-lucide="check-circle-2" style="width:10px;height:10px;"></i> ${item.checksCount} checks</span>
            <span class="dd-card-pill"><i data-lucide="clock" style="width:10px;height:10px;"></i> ${item.timeline}</span>
          </div>

          <!-- Footer Row: Views & Action -->
          <div class="dd-card-footer">
            <div class="dd-card-stats">
              <span><i data-lucide="users" style="width:10px;height:10px;"></i> ${item.usersCount}</span>
              <span><i data-lucide="eye" style="width:10px;height:10px;"></i> ${item.viewsCount}</span>
            </div>
            <span class="dd-card-view-link">View <i data-lucide="arrow-right" style="width:11px;height:11px;"></i></span>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

window.handleDDSearch = function(input) {
  currentDDSearch = input.value;
  filterAndRenderDDGrid();
};

window.handleDDTimelineFilter = function(val) {
  currentDDTimeline = val;
  filterAndRenderDDGrid();
};

window.handleDDSort = function(val) {
  currentDDSort = val;
  filterAndRenderDDGrid();
};

/* ──────────────────────────────────────────────────────────────────────────
   Due Diligence Detail Page Renderer
   ────────────────────────────────────────────────────────────────────────── */
function renderDueDiligenceDetailPage() {
  const root = document.getElementById('dueDiligenceDetailRoot');
  if (!root) return;

  const urlParams = new URLSearchParams(window.location.search);
  const ddId = urlParams.get('id') || 'saas';

  const data = (window.DUE_DILIGENCE_DATA || []).find(d => d.id === ddId) || window.DUE_DILIGENCE_DATA[0];
  if (!data) return;

  const breadcrumb = document.getElementById('ddNavBreadcrumb');
  if (breadcrumb) {
    breadcrumb.textContent = `${data.name} investor readiness`;
  }

  const heroBand = document.getElementById('ddHeroBand');
  if (heroBand) {
    heroBand.innerHTML = `
      <div class="dd-hero-inner">
        <div class="dd-hero-top-row">
          <div class="dd-hero-identity">
            <div class="dd-card-icon-badge dd-hero-icon">${data.iconText}</div>
            <div class="dd-hero-chips">
              <span class="category-tag-pill">${data.name}</span>
              <span class="badge-pill neutral-soft">Verified readiness framework</span>
            </div>
          </div>
          <div class="dd-hero-actions">
            <button class="btn btn-outline" style="font-size:11.5px; padding:6px 12px; gap:5px;" onclick="if(window.showToast) window.showToast('Downloading complete ${data.name} due diligence package (.PDF)...', 'success');">
              <i data-lucide="download" style="width:12px;height:12px;"></i>
              <span>Download guide (.PDF)</span>
            </button>
            <button class="btn btn-outline" style="font-size:11.5px; padding:6px 9px;" onclick="copyDDLink('${data.id}')" title="Copy shareable link">
              <i data-lucide="share-2" style="width:12px;height:12px;"></i>
            </button>
          </div>
        </div>
        <h1 class="dd-hero-title">${data.name} startup due diligence: complete investor readiness guide</h1>
        <p class="dd-hero-subtitle">A comprehensive due diligence guide for ${data.name.toLowerCase()} founders covering regulatory requirements, financial validation, market analysis, and investor expectations. Includes stage-wise checklist, process flow, and required documents.</p>
        <div class="dd-vitals-strip">
          <div class="dd-vital-cell">
            <span class="dd-vital-label">Timeline</span>
            <span class="dd-vital-value">${data.timeline}</span>
          </div>
          <div class="dd-vital-cell">
            <span class="dd-vital-label">Deal size</span>
            <span class="dd-vital-value">${data.dealSize}</span>
          </div>
          <div class="dd-vital-cell">
            <span class="dd-vital-label">Focus areas</span>
            <span class="dd-vital-value">${data.focusAreasCount} categories</span>
          </div>
          <div class="dd-vital-cell">
            <span class="dd-vital-label">Checks count</span>
            <span class="dd-vital-value">${data.checksCount} items</span>
          </div>
          <div class="dd-vital-cell">
            <span class="dd-vital-label">Active founders</span>
            <span class="dd-vital-value">${data.usersCount} founders</span>
          </div>
          <div class="dd-vital-cell">
            <span class="dd-vital-label">Readiness</span>
            <span class="dd-vital-value">2–3 months prior</span>
          </div>
        </div>
      </div>
    `;
  }

  root.innerHTML = `
    <div style="display:flex; flex-direction:column; gap:16px;">

      <!-- 01. What is Due Diligence? -->
      <div class="dd-surface-section">
        <div class="dd-section-head-row">
          <div class="dd-section-head">
            <span class="dd-section-num">01</span>
            <h3 class="dd-section-title">What is ${data.name} due diligence?</h3>
          </div>
        </div>
        <p style="font-size:13px; color:var(--text-main); line-height:1.6; margin:0; white-space:pre-line;">${data.overview}</p>
      </div>

      <!-- 02. The 6 Pillars of Due Diligence -->
      <div class="dd-surface-section">
        <div class="dd-section-head-row">
          <div class="dd-section-head">
            <span class="dd-section-num">02</span>
            <h3 class="dd-section-title">The 6 pillars of due diligence</h3>
          </div>
          <span class="dd-section-note">Standard institutional diligence taxonomy</span>
        </div>
        <div class="dd-pillars-grid">
          ${data.pillars.map(p => `
            <div class="dd-pillar-card">
              <div style="font-size:13px; font-weight:800; margin-bottom:2px;">${p.name}</div>
              <div style="font-size:10px; color:inherit; opacity:0.8; line-height:1.35;">${p.desc}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 03. Stage-Wise Due Diligence Depth -->
      <div class="dd-surface-section">
        <div class="dd-section-head-row">
          <div class="dd-section-head">
            <span class="dd-section-num">03</span>
            <h3 class="dd-section-title">Stage-wise due diligence depth</h3>
          </div>
          <span class="dd-section-note">Diligence depth evolves with round stage</span>
        </div>
        <div class="dd-stages-grid">
          ${data.stages.map(s => `
            <div class="dd-stage-card">
              <div class="dd-stage-header">
                <span style="font-size:12.5px; font-weight:800; color:var(--text-dark);">${s.stage}</span>
                <span class="dd-stage-depth-pill">${s.depth}</span>
              </div>
              <p style="font-size:11.5px; color:var(--text-muted); line-height:1.45; margin:0;">${s.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 04. Complete Due Diligence Checklist (Categorized) -->
      <div class="dd-surface-section">
        <div class="dd-section-head-row">
          <div class="dd-section-head">
            <span class="dd-section-num">04</span>
            <h3 class="dd-section-title">Complete due diligence checklist</h3>
          </div>
          <span class="dd-section-note">${data.checksCount} required items across ${data.focusAreasCount} categories</span>
        </div>
        <div style="display:flex; flex-direction:column; gap:16px;">
          ${data.checklists.map(cat => `
            <div style="display:flex; flex-direction:column; gap:10px;">
              <h4 style="font-size:13px; font-weight:800; color:var(--text-dark); margin:0; padding-bottom:4px; border-bottom:1px solid var(--border-faint);">${cat.categoryTitle}</h4>
              ${cat.groups.map(grp => `
                <div style="display:flex; flex-direction:column; gap:6px; margin-bottom:4px;">
                  <div style="display:flex; align-items:center; justify-content:space-between;">
                    <span style="font-size:12.5px; font-weight:700; color:var(--text-dark);">${grp.title}</span>
                    <span style="font-size:11px; color:var(--text-light);">${grp.desc}</span>
                  </div>
                  <div class="dd-checklist-group">
                    ${grp.items.map(item => `
                      <div class="dd-checklist-item">
                        <div style="display:flex; align-items:center; gap:8px;">
                          <i data-lucide="check" style="width:13px;height:13px; color:var(--text-dark); stroke-width:2.5;"></i>
                          <span>${item}</span>
                        </div>
                        <span class="badge-pill neutral-solid" style="font-size:9.5px; padding:1px 6px;">Required</span>
                      </div>
                    `).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 05. Documents Required (Data Room) -->
      <div class="dd-surface-section">
        <div class="dd-section-head-row">
          <div class="dd-section-head">
            <span class="dd-section-num">05</span>
            <h3 class="dd-section-title">Documents required (data room)</h3>
          </div>
          <span class="dd-section-note">${data.dataRoomDocs.length} critical documents</span>
        </div>
        <p style="font-size:12.5px; color:var(--text-muted); margin:0;">Investors expect a well-structured digital data room with these critical documents organized prior to term sheet execution:</p>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:10px;">
          ${data.dataRoomDocs.map(doc => `
            <div style="background:#FAFAF9; border:1px solid var(--border-main); border-radius:8px; padding:12px 14px; display:flex; flex-direction:column; gap:4px;">
              <div style="display:flex; align-items:center; gap:6px;">
                <i data-lucide="file-text" style="width:13px;height:13px; color:var(--text-dark);"></i>
                <span style="font-size:12.5px; font-weight:800; color:var(--text-dark);">${doc.name}</span>
              </div>
              <span style="font-size:11px; color:var(--text-muted); line-height:1.4;">${doc.desc}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 06. Due Diligence Process (Step-by-Step Flow) -->
      <div class="dd-surface-section">
        <div class="dd-section-head-row">
          <div class="dd-section-head">
            <span class="dd-section-num">06</span>
            <h3 class="dd-section-title">Due diligence process (step-by-step)</h3>
          </div>
          <span class="dd-section-note">Standard 6-step deal execution sequence</span>
        </div>
        <div class="dd-process-flow">
          ${data.processSteps.map(st => `
            <div class="dd-process-step">
              <div style="display:flex; align-items:center; justify-content:space-between;">
                <div class="dd-process-step-num">${st.step}</div>
                <i data-lucide="chevron-right" style="width:12px;height:12px; color:var(--text-light);"></i>
              </div>
              <div style="font-size:12px; font-weight:800; color:var(--text-dark); margin-top:2px;">${st.title}</div>
              <div style="font-size:10.5px; color:var(--text-muted); line-height:1.35;">${st.desc}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 07. Deal Killers (Red Flags) & Critical Risks -->
      <div class="dd-surface-section">
        <div class="dd-section-head-row">
          <div class="dd-section-head">
            <span class="dd-section-num">07</span>
            <h3 class="dd-section-title">Top deal killers (red flags)</h3>
          </div>
          <span class="dd-section-note">${data.dealKillers.length} critical red flags</span>
        </div>
        <p style="font-size:12.5px; color:var(--text-muted); margin:0;">These are the fastest ways to kill an active venture deal during institutional evaluation:</p>
        <div style="display:flex; flex-direction:column; gap:6px;">
          ${data.dealKillers.map(flag => `
            <div class="dd-flag-card">
              <i data-lucide="alert-triangle" style="width:14px;height:14px; flex-shrink:0;"></i>
              <span>${flag}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 08. Founder DD Readiness Interactive Checklist -->
      <div class="dd-surface-section">
        <div class="dd-section-head-row">
          <div class="dd-section-head">
            <span class="dd-section-num">08</span>
            <h3 class="dd-section-title">Founder DD readiness checklist</h3>
          </div>
          <span class="badge-pill neutral-soft" id="ddProgressBadge">0 / ${data.readinessChecklist.length} completed</span>
        </div>
        <p style="font-size:12px; color:var(--text-muted); margin:0;">Tick off action items as you prepare your company data room</p>
        <div style="display:flex; flex-direction:column; gap:8px;" id="ddReadinessList">
          ${data.readinessChecklist.map((task, idx) => `
            <label style="display:flex; align-items:center; gap:10px; padding:9px 12px; background:#FAFAF9; border:1px solid var(--border-faint); border-radius:8px; cursor:pointer; user-select:none;">
              <input type="checkbox" onchange="window.toggleDDReadinessItem(${idx}, this)" style="width:16px; height:16px; accent-color:var(--text-dark);" />
              <span style="font-size:12.5px; color:var(--text-dark); font-weight:600;">${task}</span>
            </label>
          `).join('')}
        </div>
      </div>

      <!-- 09. Pro Tip -->
      <div class="dd-pro-tip">
        <div style="display:flex; align-items:center; gap:8px;">
          <span class="dd-section-num" style="background:var(--text-dark); color:#FFFFFF; border:none;">09</span>
          <div style="display:flex; align-items:center; gap:6px; font-weight:800; font-size:13px;">
            <i data-lucide="sparkles" style="width:14px;height:14px;"></i>
            <span>Investor Pro Tip</span>
          </div>
        </div>
        <p style="margin:8px 0 0; font-style:italic;">"${data.proTip}"</p>
      </div>

    </div>
  `;

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

window.renderDueDiligenceDetailPage = renderDueDiligenceDetailPage;

window.toggleDDReadinessItem = function(idx, checkbox) {
  const root = document.getElementById('ddReadinessList');
  if (!root) return;

  const total = root.querySelectorAll('input[type="checkbox"]').length;
  const checked = root.querySelectorAll('input[type="checkbox"]:checked').length;

  const badge = document.getElementById('ddProgressBadge');
  if (badge) {
    badge.textContent = `${checked} / ${total} completed`;
    if (checked === total) {
      badge.className = 'badge-pill neutral-solid';
      if (window.showToast) window.showToast('Congratulations! All readiness checks completed.', 'success');
    } else {
      badge.className = 'badge-pill neutral-soft';
    }
  }
};

window.copyDDLink = function(id) {
  const url = `${window.location.origin}${window.location.pathname.replace(/[^/]*$/, '')}due-diligence-detail.html?id=${id}`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url);
  }
  if (window.showToast) {
    window.showToast('Framework link copied to clipboard', 'success');
  }
};

/* ══════════════════════════════════════════════════════════════════════════
   PITCH DECK REVIEWER (AI) — Upload → Analyze (skeleton) → Full Report
   ══════════════════════════════════════════════════════════════════════════ */

// Sample deck data — matches the Alpha Health 2.0 assets in /assets
const PDR_SAMPLE_DECK = {
  name: 'alpha-health-2.0-investor-deck.pdf',
  size: '8.4 MB',
  length: 5,
  overallScore: 78,
  grade: 'B+',
  gradeTag: 'Strong',
  verdictTitle: 'Investor-ready narrative — tighten the numbers',
  verdictText: 'The deck tells a clear, compelling story and scores well on structure and flow. Focus on proving unit economics and spelling out the ask to push past the 85 mark.',
  metrics: [
    { label: 'Deck structure', value: 'Excellent' },
    { label: 'Storytelling flow', value: 'Strong' },
    { label: 'Visual consistency', value: 'Good' },
    { label: 'Data clarity', value: 'Needs work' },
    { label: 'Investor readiness', value: 'Fundable' }
  ],
  slides: [
    {
      num: 1,
      title: 'Cover · Problem & Vision',
      img: './assets/slide_1.png',
      score: 86,
      label: 'Excellent',
      review: 'The opening slide lands the problem in a single, memorable line and gives investors an immediate reason to keep reading. It sets a confident tone, but stops short of quantifying the pain the way a data-driven investor expects.',
      positives: [
        'The problem is framed in one clear, memorable line',
        'Vision statement is specific enough to feel credible',
        'Visually clean with a sharp opening hook'
      ],
      improvements: [
        'The pain point is not quantified — add a hard market statistic',
        'The target customer persona could be named more explicitly'
      ],
      focus: 'Add a quantified market pain point to the cover to anchor the problem.'
    },
    {
      num: 2,
      title: 'Solution & Product',
      img: './assets/slide_2.png',
      score: 78,
      label: 'Good',
      review: 'The value proposition is obvious at a glance and the demo walkthrough is easy to follow. The product visuals, however, read more like internal engineering screens than customer-facing outcomes, which dilutes the impact.',
      positives: [
        'Value proposition is obvious from the first glance',
        'Demo walkthrough is simple and easy to follow',
        'Feature-to-benefit mapping is mostly coherent'
      ],
      improvements: [
        'Product screenshots read as internal engineering views',
        'Lead with the user outcome instead of the feature list'
      ],
      focus: 'Reposition product visuals around user outcomes rather than features.'
    },
    {
      num: 3,
      title: 'Market Opportunity',
      img: './assets/slide_3.png',
      score: 82,
      label: 'Strong',
      review: 'The TAM / SAM / SOM breakdown is well executed with credible, sourced numbers and a believable bottom-up wedge. What is missing is proof that the wedge is actually being captured.',
      positives: [
        'TAM / SAM / SOM is well sourced and believable',
        'Bottom-up sizing gives a realistic wedge story',
        'Market growth narrative is backed with references'
      ],
      improvements: [
        'No adoption or traction proof points are shown',
        'Competitive context could be expanded beyond one line'
      ],
      focus: 'Add adoption proof points to demonstrate traction inside the wedge.'
    },
    {
      num: 4,
      title: 'Business Model & Unit Economics',
      img: './assets/slide_4.png',
      score: 64,
      label: 'Needs work',
      review: 'This is the weakest slide in the deck. Revenue streams are named but pricing is implied rather than stated, and there is no visible margin, CAC or LTV data for investors to model against.',
      positives: [
        'Revenue streams are clearly named and distinct'
      ],
      improvements: [
        'Pricing is implied, not explicit',
        'Missing margins, CAC and LTV for investors to model',
        'No mention of the go-to-market motion or sales cycle'
      ],
      focus: 'Add explicit pricing, margins and CAC/LTV so the model is inspectable.'
    },
    {
      num: 5,
      title: 'Financials & The Ask',
      img: './assets/slide_5.png',
      score: 71,
      label: 'Good',
      review: 'The financial projections are directionally sound and the growth curve is realistic for the stage. The main gaps are around defensibility: the assumptions are not stress-tested and the ask is never stated outright.',
      positives: [
        'Projections are directionally sensible',
        'Growth curve is realistic for the stage',
        'Key drivers are identified in the notes'
      ],
      improvements: [
        'Assumptions are not stress-tested or sensitivity-tested',
        'The ask is never stated outright',
        'Add runway and a clear use-of-funds plan'
      ],
      focus: 'Stress-test assumptions and state the round amount and use of funds explicitly.'
    }
  ]
};

let pdrState = 'result';
let pdrPreviewSlide = 1;
let pdrActiveDeck = PDR_SAMPLE_DECK;
let pdrActiveFileName = PDR_SAMPLE_DECK.name;
let pdrActiveFileSize = PDR_SAMPLE_DECK.size;
let pdrAnalysisTimer = null;

const PDR_STEPS = [
  { id: 'upload', label: 'Uploading deck', pct: 22, icon: 'upload-cloud' },
  { id: 'extract', label: 'Extracting slides', pct: 48, icon: 'file-search' },
  { id: 'score', label: 'Scoring each slide', pct: 76, icon: 'gauge' },
  { id: 'report', label: 'Generating AI report', pct: 100, icon: 'sparkles' }
];

const PDR_RING_CIRC = (2 * Math.PI * 26).toFixed(2);

// Monochrome score tone — subtle gray scale only (no accent colors)
function pdrScoreTone(score) {
  if (score >= 80) return '#141413';
  if (score >= 70) return '#6B6B66';
  return '#A0A09A';
}

function pdrGradeFromScore(score) {
  if (score >= 85) return { grade: 'A', tag: 'Excellent' };
  if (score >= 78) return { grade: 'B+', tag: 'Strong' };
  if (score >= 70) return { grade: 'B', tag: 'Good' };
  if (score >= 65) return { grade: 'C+', tag: 'Fundable' };
  return { grade: 'C', tag: 'Needs work' };
}

function pdrDeckForScore(targetScore) {
  const ratio = targetScore / PDR_SAMPLE_DECK.overallScore;
  const g = pdrGradeFromScore(targetScore);
  return {
    ...PDR_SAMPLE_DECK,
    overallScore: Math.round(targetScore),
    grade: g.grade,
    gradeTag: g.tag,
    slides: PDR_SAMPLE_DECK.slides.map(s => ({
      ...s,
      score: Math.max(42, Math.min(95, Math.round(s.score * ratio)))
    }))
  };
}

function renderPitchDeckReviewerPage() {
  const root = document.getElementById('pitchDeckRoot');
  if (!root) return;

  if (pdrState === 'upload') {
    pdrRenderUpload(root);
  } else if (pdrState === 'analyzing') {
    pdrRenderAnalyzing(root);
  } else {
    pdrRenderResult(root);
  }
}

/* ── STATE 01 · UPLOAD ─────────────────────────────────────────────────── */
function pdrRenderUpload(root) {
  root.innerHTML = `
    <!-- Hero Header -->
    <div class="directory-hero-row" style="align-items:center;">
      <div class="directory-hero-titles">
        <h1 class="directory-main-title">
          <span>Pitch deck reviewer</span>
          <span class="badge-pill neutral-soft">AI powered</span>
        </h1>
        <p class="directory-main-subtitle">
          Upload your pitch deck and get a slide-by-slide investor-readiness score in seconds.
        </p>
      </div>
      <button class="btn btn-outline" onclick="if(window.showToast) window.showToast('Review history is being prepared...', 'info');" style="font-size:12px; padding:8px 14px; gap:6px; white-space:nowrap;">
        <i data-lucide="history" style="width:13px; height:13px;"></i>
        <span>Review history</span>
      </button>
    </div>

    <!-- Upload Dropzone (single primary card — no nesting) -->
    <div class="pdr-dropzone" id="pdrDropzone" onclick="document.getElementById('pdrFileInput').click()">
      <div class="pdr-dropzone-icon"><i data-lucide="upload-cloud"></i></div>
      <div class="pdr-dropzone-title">Upload your pitch deck</div>
      <div class="pdr-dropzone-sub">Drag &amp; drop your file here, or browse from your device</div>
      <div class="pdr-dropzone-sub2">PDF, PPTX or Keynote · up to 50 MB</div>
      <div class="pdr-dropzone-actions" onclick="event.stopPropagation();">
        <button class="btn btn-primary" onclick="document.getElementById('pdrFileInput').click()">
          <i data-lucide="file-up" style="width:13px; height:13px;"></i>
          <span>Browse files</span>
        </button>
        <button class="btn btn-outline" onclick="pdrStartAnalysis('${PDR_SAMPLE_DECK.name}', '${PDR_SAMPLE_DECK.size}')">
          <i data-lucide="presentation" style="width:13px; height:13px;"></i>
          <span>Try sample deck</span>
        </button>
      </div>
      <input type="file" id="pdrFileInput" accept=".pdf,.ppt,.pptx,.key,.jpg,.jpeg,.png" hidden onchange="pdrHandleFile(this)" />

      <div class="pdr-upload-foot">
        <div class="pdr-upload-foot-item"><i data-lucide="lock" style="width:12px; height:12px;"></i> Files are private &amp; encrypted</div>
        <div class="pdr-upload-foot-item"><i data-lucide="scan" style="width:12px; height:12px;"></i> Analyzed slide by slide</div>
        <div class="pdr-upload-foot-item"><i data-lucide="timer" style="width:12px; height:12px;"></i> Takes ~4 seconds</div>
      </div>
    </div>

    <!-- Recent / Sample Reviews -->
    <div class="pdr-recent-row">
      <div class="pdr-section-head">
        <span class="pdr-section-title">Recent reviews</span>
        <span class="badge-pill neutral-soft">3 total</span>
      </div>
      <div class="pdr-recent-grid">
        <div class="pdr-recent-card" onclick="pdrStartAnalysis('${PDR_SAMPLE_DECK.name}', '${PDR_SAMPLE_DECK.size}', 78)">
          <div class="pdr-recent-icon"><i data-lucide="file-text"></i></div>
          <div class="pdr-recent-info">
            <div class="pdr-recent-name">alpha-health-2.0-investor-deck.pdf</div>
            <div class="pdr-recent-meta">5 slides · Today, 11:42 AM</div>
          </div>
          <div class="pdr-recent-score" style="color:var(--text-dark);">78</div>
        </div>
        <div class="pdr-recent-card" onclick="pdrStartAnalysis('seed-stage-growth-deck.pptx', '6.1 MB', 64)">
          <div class="pdr-recent-icon"><i data-lucide="file-text"></i></div>
          <div class="pdr-recent-info">
            <div class="pdr-recent-name">seed-stage-growth-deck.pptx</div>
            <div class="pdr-recent-meta">12 slides · Yesterday, 6:08 PM</div>
          </div>
          <div class="pdr-recent-score" style="color:var(--text-dark);">64</div>
        </div>
        <div class="pdr-recent-card" onclick="pdrStartAnalysis('pre-seed-concept-keynote.key', '4.9 MB', 81)">
          <div class="pdr-recent-icon"><i data-lucide="file-text"></i></div>
          <div class="pdr-recent-info">
            <div class="pdr-recent-name">pre-seed-concept-keynote.key</div>
            <div class="pdr-recent-meta">8 slides · Aug 15, 9:03 PM</div>
          </div>
          <div class="pdr-recent-score" style="color:var(--text-dark);">81</div>
        </div>
      </div>
    </div>
  `;

  if (typeof lucide !== 'undefined') lucide.createIcons();

  const dropzone = document.getElementById('pdrDropzone');
  if (dropzone) {
    ['dragover', 'dragenter'].forEach(evt =>
      dropzone.addEventListener(evt, (e) => { e.preventDefault(); dropzone.classList.add('dragover'); })
    );
    ['dragleave', 'dragend'].forEach(evt =>
      dropzone.addEventListener(evt, (e) => { e.preventDefault(); dropzone.classList.remove('dragover'); })
    );
    dropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropzone.classList.remove('dragover');
      const files = e.dataTransfer && e.dataTransfer.files;
      if (files && files.length) pdrConsumeFile(files[0]);
      else if (window.showToast) window.showToast('Please drop a single deck file.', 'error');
    });
  }
}

function pdrHandleFile(input) {
  const file = input && input.files && input.files[0];
  if (file) pdrConsumeFile(file);
}

function pdrConsumeFile(file) {
  const name = file.name || 'custom-deck.pdf';
  const sizeMb = file.size ? (file.size / (1024 * 1024)).toFixed(1) + ' MB' : '7.8 MB';
  pdrStartAnalysis(name, sizeMb);
}

/* ── STATE 02 · ANALYZING (skeleton) ───────────────────────────────────── */
function pdrStartAnalysis(fileName, fileSize, scoreOverride) {
  if (pdrAnalysisTimer) {
    clearInterval(pdrAnalysisTimer);
    pdrAnalysisTimer = null;
  }

  pdrActiveFileName = fileName || PDR_SAMPLE_DECK.name;
  pdrActiveFileSize = fileSize || PDR_SAMPLE_DECK.size;
  pdrActiveDeck = scoreOverride ? pdrDeckForScore(scoreOverride) : PDR_SAMPLE_DECK;
  pdrState = 'analyzing';
  renderPitchDeckReviewerPage();

  const progressEl = document.getElementById('pdrProgressFill');
  const stepsEl = document.getElementById('pdrStepsList');
  let pct = 0;
  let stepIdx = 0;

  const activateStep = (idx) => {
    if (!stepsEl) return;
    const items = stepsEl.querySelectorAll('.pdr-step-item');
    items.forEach((el, i) => {
      el.classList.toggle('done', i < idx);
      el.classList.toggle('active', i === idx);
      const icon = el.querySelector('.pdr-step-icon i');
      if (icon) icon.setAttribute('data-lucide', i < idx ? 'check' : PDR_STEPS[i].icon);
    });
    if (typeof lucide !== 'undefined') lucide.createIcons();
  };

  const finish = () => {
    clearInterval(pdrAnalysisTimer);
    pdrAnalysisTimer = null;
    pdrState = 'result';
    renderPitchDeckReviewerPage();
    setTimeout(() => {
      const ring = document.getElementById('pdrRingFg');
      if (ring) ring.style.strokeDashoffset = PDR_RING_CIRC * (1 - pdrActiveDeck.overallScore / 100);
    }, 60);
    if (window.showToast) window.showToast(`AI review complete — ${pdrActiveDeck.overallScore}/100 overall`, 'success');
  };

  pdrAnalysisTimer = setInterval(() => {
    pct = Math.min(100, pct + (1.6 + Math.random() * 1.8));
    if (progressEl) progressEl.style.width = `${pct}%`;

    while (stepIdx < PDR_STEPS.length && pct >= PDR_STEPS[stepIdx].pct) {
      stepIdx++;
      activateStep(stepIdx);
    }

    if (pct >= 100) finish();
  }, 85);
}

function pdrRenderAnalyzing(root) {
  root.innerHTML = `
    <!-- Analyzing Header -->
    <div class="pdr-analyzing-header">
      <div class="pdr-file-chip">
        <i data-lucide="file-text" style="width:13px; height:13px;"></i>
        <span id="pdrAnalyzingFile">${escapeHtml(pdrActiveFileName)}</span>
        <span class="pdr-file-size">${escapeHtml(pdrActiveFileSize)}</span>
      </div>
      <span class="badge-pill neutral-soft" style="gap:6px;">
        <span class="pdr-pulse-dot"></span> AI analyzing
      </span>
    </div>

    <!-- Progress Track -->
    <div class="pdr-progress-card">
      <div class="pdr-progress-track">
        <div class="pdr-progress-fill" id="pdrProgressFill"></div>
      </div>
      <div class="pdr-steps-list" id="pdrStepsList">
        ${PDR_STEPS.map((s, i) => `
          <div class="pdr-step-item ${i === 0 ? 'active' : ''}" data-step="${s.id}">
            <div class="pdr-step-icon"><i data-lucide="${s.icon}"></i></div>
            <div class="pdr-step-label">${s.label}</div>
            <div class="pdr-step-status"></div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Skeleton Placeholders mimicking the report layout -->
    <div class="pdr-skeleton-grid">
      <div class="pdr-skeleton-col">
        <div class="pdr-skeleton-card">
          <div class="pdr-skeleton pdr-skeleton-ring"></div>
          <div class="pdr-skeleton-right-block">
            <div class="pdr-skeleton pdr-skeleton-line w40"></div>
            <div class="pdr-skeleton pdr-skeleton-line w90"></div>
            <div class="pdr-skeleton pdr-skeleton-line w75"></div>
            <div class="pdr-skeleton-row">
              <div class="pdr-skeleton pdr-skeleton-chip"></div>
              <div class="pdr-skeleton pdr-skeleton-chip"></div>
              <div class="pdr-skeleton-chip"></div>
            </div>
          </div>
        </div>
        <div class="pdr-skeleton-card">
          ${Array.from({ length: 5 }).map(() => `
            <div class="pdr-skeleton-slide-row">
              <div class="pdr-skeleton pdr-skeleton-num"></div>
              <div class="pdr-skeleton-right-block">
                <div class="pdr-skeleton pdr-skeleton-line w70"></div>
                <div class="pdr-skeleton-bar"></div>
              </div>
              <div class="pdr-skeleton pdr-skeleton-score"></div>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="pdr-skeleton-col">
        ${Array.from({ length: 5 }).map(() => `
          <div class="pdr-skeleton-slide">
            <div class="pdr-skeleton pdr-skeleton-slide-img"></div>
            <div class="pdr-skeleton pdr-skeleton-line w60"></div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

/* ── STATE 03 · RESULT ─────────────────────────────────────────────────── */
function pdrRenderResult(root) {
  const deck = pdrActiveDeck;
  const curSlide = pdrPreviewSlide && pdrPreviewSlide <= deck.length ? pdrPreviewSlide : 1;

  root.innerHTML = `
    <!-- Result Toolbar -->
    <div class="pdr-result-toolbar">
      <div class="pdr-file-chip">
        <i data-lucide="file-text" style="width:13px; height:13px;"></i>
        <span>${escapeHtml(pdrActiveFileName)}</span>
        <span class="pdr-file-size">${escapeHtml(pdrActiveFileSize)} · ${deck.length} slides</span>
      </div>
      <div class="pdr-result-actions">
        <button class="btn btn-outline" onclick="pdrStartAnalysis('${escapeHtml(pdrActiveFileName)}', '${escapeHtml(pdrActiveFileSize)}')">
          <i data-lucide="refresh-cw" style="width:13px; height:13px;"></i>
          <span>Reanalyze</span>
        </button>
        <button class="btn btn-outline" onclick="pdrShowUpload()">
          <i data-lucide="plus" style="width:13px; height:13px;"></i>
          <span>Upload new deck</span>
        </button>
        <button class="btn btn-primary" onclick="if(window.showToast) window.showToast('AI review report exported as PDF', 'success')">
          <i data-lucide="download" style="width:13px; height:13px;"></i>
          <span>Export report</span>
        </button>
      </div>
    </div>

    <div class="pdr-result-grid">

      <!-- ── LEFT · Overall Score + Slide-wise Accordions ── -->
      <div class="pdr-analysis-col">
        <div class="pdr-score-card">
          <div class="pdr-score-top-flex">
            <!-- Left: Compact Gauge -->
            <div class="pdr-score-ring-wrap">
              <svg width="64" height="64" viewBox="0 0 64 64">
                <circle class="pdr-ring-bg" cx="32" cy="32" r="26" fill="none" stroke-width="6" />
                <circle id="pdrRingFg" class="pdr-ring-fg" cx="32" cy="32" r="26" fill="none" stroke-width="6"
                  stroke-linecap="round" stroke="#141413"
                  stroke-dasharray="${PDR_RING_CIRC}" stroke-dashoffset="${PDR_RING_CIRC}" />
              </svg>
              <div class="pdr-score-center">
                <span class="pdr-score-num">${deck.overallScore}</span>
                <span class="pdr-score-label">/ 100</span>
              </div>
            </div>

            <!-- Right: Metadata & Verdict -->
            <div class="pdr-score-meta">
              <div class="pdr-score-meta-top">
                <span class="pdr-grade-badge">${deck.grade}</span>
                <span class="pdr-grade-tag">${deck.gradeTag} · Investor-readiness score</span>
              </div>
              <div class="pdr-verdict-title">${deck.verdictTitle}</div>
              <div class="pdr-verdict-text">${deck.verdictText}</div>
            </div>
          </div>

          <!-- Bottom: 5-metric Horizontal Key-Value Strip -->
          <div class="pdr-metric-strip">
            ${deck.metrics.map(m => `
              <div class="pdr-metric-item">
                <span class="pdr-metric-label">${m.label}</span>
                <span class="pdr-metric-value">${m.value}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Slide-wise Accordions -->
        <div class="pdr-acc-list">
          <div class="pdr-section-head">
            <span class="pdr-section-title">Slide-by-slide analysis</span>
            <span class="pdr-section-note">${deck.length} slides · tap to expand</span>
          </div>

          ${deck.slides.map(s => `
            <div class="pdr-acc" data-slide="${s.num}">
              <div class="pdr-acc-head" onclick="pdrToggleAcc(this)">
                <div class="pdr-acc-num">${s.num}</div>
                <div class="pdr-acc-main">
                  <div class="pdr-acc-title-row">
                    <span class="pdr-acc-name">${s.title}</span>
                    <span class="pdr-acc-label">${s.label}</span>
                  </div>
                  <div class="pdr-acc-bar">
                    <div class="pdr-acc-fill" style="width:${s.score}%; background:${pdrScoreTone(s.score)};"></div>
                  </div>
                </div>
                <div class="pdr-acc-score">
                  <span class="pdr-acc-score-num">${s.score}</span>
                </div>
                <i data-lucide="chevron-down" class="pdr-acc-chevron"></i>
              </div>
              <div class="pdr-acc-body">
                <p class="pdr-acc-review">${s.review}</p>
                <div class="pdr-acc-pointers">
                  <div class="pdr-acc-ptr-group">
                    <div class="pdr-acc-ptr-title">What&rsquo;s working</div>
                    <ul class="pdr-acc-ul">
                      ${s.positives.map(p => `<li>${p}</li>`).join('')}
                    </ul>
                  </div>
                  <div class="pdr-acc-ptr-group">
                    <div class="pdr-acc-ptr-title">What to improve</div>
                    <ul class="pdr-acc-ul">
                      ${s.improvements.map(p => `<li>${p}</li>`).join('')}
                    </ul>
                  </div>
                </div>
                <div class="pdr-acc-focus">
                  <span class="pdr-focus-label">Focus</span>
                  <span>${s.focus}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        </div>

      <!-- ── RIGHT · Deck Preview Panel ── -->
      <div class="pdr-preview-col">
        <div class="pdr-preview-card">
          <div class="pdr-preview-head">
            <div class="pdr-preview-head-title">
              <span class="pdr-preview-head-label">Deck preview</span>
              <span class="pdr-preview-counter" id="pdrPreviewCounter">Slide ${curSlide} of ${deck.length}</span>
            </div>
            <div class="pdr-preview-nav">
              <button class="pdr-preview-nav-btn" onclick="pdrPreviewNav(-1)" title="Previous slide"><i data-lucide="chevron-left" style="width:15px;height:15px;"></i></button>
              <button class="pdr-preview-nav-btn" onclick="pdrPreviewNav(1)" title="Next slide"><i data-lucide="chevron-right" style="width:15px;height:15px;"></i></button>
            </div>
          </div>
          <div class="pdr-preview-stage">
            <img id="pdrPreviewImg" src="${deck.slides[curSlide - 1].img}" alt="${deck.slides[curSlide - 1].title}" />
            <span class="pdr-preview-badge">${curSlide}</span>
          </div>
          <div class="pdr-preview-cap">
            <span class="pdr-preview-cap-num">${curSlide} · ${deck.slides[curSlide - 1].score}</span>
            <span class="pdr-preview-cap-title">${deck.slides[curSlide - 1].title}</span>
          </div>
        </div>

        <div class="pdr-filmstrip" id="pdrFilmstrip">
          ${deck.slides.map(s => `
            <button class="pdr-film-item ${s.num === curSlide ? 'active' : ''}" data-slide="${s.num}" onclick="pdrPreviewGo(${s.num})">
              <img src="${s.img}" alt="${s.title}" loading="lazy" />
              <span>${s.num}</span>
            </button>
          `).join('')}
        </div>
      </div>

    </div>

    <!-- ── BUILD WITH DECKWALE CTA (full width) ── -->
    <div class="pdr-deckwale-bar">
      <div class="pdr-deckwale-bar-text">
        <i data-lucide="sparkles" style="width:15px;height:15px;"></i>
        <span class="pdr-deckwale-bar-title">Want to pitch better?</span>
        <span class="pdr-deckwale-bar-sub">Create a professional pitch deck with AI-powered templates</span>
      </div>
      <button class="btn btn-primary" onclick="if(window.showToast) window.showToast('Opening Deckwale AI pitch deck builder...', 'success');">
        <span>Build with Deckwale</span>
      </button>
    </div>
  `;

  if (typeof lucide !== 'undefined') lucide.createIcons();

  setTimeout(() => {
    const ring = document.getElementById('pdrRingFg');
    if (ring) ring.style.strokeDashoffset = PDR_RING_CIRC * (1 - deck.overallScore / 100);
  }, 80);
}

function pdrShowUpload() {
  if (pdrAnalysisTimer) {
    clearInterval(pdrAnalysisTimer);
    pdrAnalysisTimer = null;
  }
  pdrState = 'upload';
  renderPitchDeckReviewerPage();
}

function pdrToggleAcc(headEl) {
  const acc = headEl.closest('.pdr-acc');
  if (!acc) return;

  const wasOpen = acc.classList.contains('open');

  // Classic accordion — only one section open at a time
  document.querySelectorAll('.pdr-acc.open').forEach(a => {
    if (a !== acc) a.classList.remove('open');
  });

  acc.classList.toggle('open', !wasOpen);

  // Keep the corresponding filmstrip item highlighted
  const num = Number(acc.dataset.slide);
  document.querySelectorAll('.pdr-film-item').forEach(el => {
    el.classList.toggle('active', Number(el.dataset.slide) === num);
  });

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function pdrUpdatePreview(num) {
  const deck = pdrActiveDeck;
  if (!deck || !deck.slides || !deck.slides.length) return;
  if (num < 1) num = deck.length;
  if (num > deck.length) num = 1;

  pdrPreviewSlide = num;
  const slide = deck.slides[num - 1];

  const img = document.getElementById('pdrPreviewImg');
  if (img) img.src = slide.img;

  const counter = document.getElementById('pdrPreviewCounter');
  if (counter) counter.textContent = `Slide ${num} of ${deck.length}`;

  const badge = document.querySelector('.pdr-preview-badge');
  if (badge) badge.textContent = num;

  const capNum = document.querySelector('.pdr-preview-cap-num');
  if (capNum) capNum.textContent = `${num} · ${slide.score}`;

  const capTitle = document.querySelector('.pdr-preview-cap-title');
  if (capTitle) capTitle.textContent = slide.title;

  // Highlight the matching filmstrip item
  document.querySelectorAll('.pdr-film-item').forEach(el => {
    el.classList.toggle('active', Number(el.dataset.slide) === num);
  });
}

function pdrPreviewGo(num) {
  pdrUpdatePreview(num);

  // Open the matching accordion
  const acc = document.querySelector(`.pdr-acc[data-slide="${num}"]`);
  if (acc) {
    document.querySelectorAll('.pdr-acc.open').forEach(a => a.classList.remove('open'));
    acc.classList.add('open');
    acc.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function pdrPreviewNav(dir) {
  const deck = pdrActiveDeck;
  if (!deck || !deck.slides || !deck.slides.length) return;
  let next = (pdrPreviewSlide || 1) + dir;
  if (next < 1) next = deck.length;
  if (next > deck.length) next = 1;
  pdrPreviewGo(next);
}

function pdrFocusSlide(num) {
  // Sync the preview panel and open the matching accordion
  pdrUpdatePreview(num);

  const acc = document.querySelector(`.pdr-acc[data-slide="${num}"]`);
  if (acc) {
    document.querySelectorAll('.pdr-acc.open').forEach(a => a.classList.remove('open'));
    acc.classList.add('open');
    acc.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
}

function handlePDRSearch(input) {
  const q = (input && input.value || '').trim();
  if (q && window.showToast) {
    window.showToast(`Searching pitch deck reports for "${q}"...`, 'info');
  }
}

window.renderPitchDeckReviewerPage = renderPitchDeckReviewerPage;
window.pdrStartAnalysis = pdrStartAnalysis;
window.pdrShowUpload = pdrShowUpload;
window.pdrFocusSlide = pdrFocusSlide;
window.pdrToggleAcc = pdrToggleAcc;
window.pdrUpdatePreview = pdrUpdatePreview;
window.pdrPreviewGo = pdrPreviewGo;
window.pdrPreviewNav = pdrPreviewNav;
window.pdrHandleFile = pdrHandleFile;
window.handlePDRSearch = handlePDRSearch;

/* ══════════════════════════════════════════════════════════════════════════
   INVESTOR TRACKING (CRM) — Pipelines → Board/List → Investor drawer
   ══════════════════════════════════════════════════════════════════════════ */

const INV_STAGES = [
  { id: 'research',        label: 'Research',        dot: '#141413' },
  { id: 'contacted',       label: 'Contacted',       dot: '#4A4A46' },
  { id: 'meeting',         label: 'Meeting',         dot: '#6B6B66' },
  { id: 'light-dd',        label: 'Light Diligence', dot: '#8A8A84' },
  { id: 'partner-meeting', label: 'Partner Meeting', dot: '#A0A09A' },
  { id: 'term-sheet',      label: 'Term Sheet',      dot: '#8A8A84' },
  { id: 'closed',          label: 'Closed',          dot: '#141413' },
  { id: 'keep-in-touch',   label: 'Keep in Touch',   dot: '#B5B5AE' },
  { id: 'passed',          label: 'Passed',          dot: '#C0C0BA' }
];

const INV_CURRENCIES = [
  { code: 'USD', symbol: '$', label: 'USD ($)' },
  { code: 'INR', symbol: '₹', label: 'INR (₹)' },
  { code: 'EUR', symbol: '€', label: 'EUR (€)' },
  { code: 'GBP', symbol: '£', label: 'GBP (£)' }
];

window.INVESTOR_PIPELINES = [
  {
    id: 'seed-round',
    name: 'Seed Round',
    currency: 'USD',
    raising: 1500000,
    updated: 'Today, 11:20 AM',
    description: 'Institutional seed round to scale the Alpha Health 2.0 platform.',
    investors: [
      { id: 'inv-1', name: 'Hudson Bay Capital', contact: 'investments@hudsonbay.com', stage: 'research', amount: 0, rating: 3, initial: '2026-08-12', followUp: '2026-08-26', notes: [], activity: [], comments: [] },
      { id: 'inv-2', name: 'Sequoia India', contact: 'shailendra@sequoia.in', stage: 'contacted', amount: 500000, rating: 4, initial: '2026-08-10', followUp: '2026-08-22', notes: [], activity: [], comments: [] },
      { id: 'inv-3', name: 'Lightspeed Venture Partners', contact: 'rahul@lightspeed.vc', stage: 'contacted', amount: 200000, rating: 3, initial: '2026-08-11', followUp: '2026-08-20', notes: [], activity: [], comments: [] }
    ]
  },
  {
    id: 'pre-seed-bridge',
    name: 'Pre-Seed Bridge',
    currency: 'INR',
    raising: 250000,
    updated: 'Yesterday, 6:08 PM',
    description: 'Short bridge round with existing angels while the seed closes.',
    investors: [
      { id: 'inv-4', name: 'Aman Gupta Angels', contact: 'aman@guptafamilyoffice.com', stage: 'meeting', amount: 100000, rating: 4, initial: '2026-08-14', followUp: '2026-08-21', notes: [], activity: [], comments: [] },
      { id: 'inv-5', name: 'Tiger Global', contact: 'bd@tigerglobal.com', stage: 'research', amount: 0, rating: 2, initial: '', followUp: '2026-08-30', notes: [], activity: [], comments: [] }
    ]
  },
  {
    id: 'series-a-prep',
    name: 'Series A Prep',
    currency: 'USD',
    raising: 5000000,
    updated: 'Aug 15, 9:03 PM',
    description: 'Early-stage diligence on Series A candidates.',
    investors: []
  }
];

let invActiveView = 'board';
let invSearchQuery = '';
let invDrawerTab = 'info';
let invEditingId = null;
let invActivePipelineId = null;
let invActiveStageId = null;
let invDraft = {
  name: '', contact: '', amount: '', rating: 0, initial: '', followUp: '',
  note: '', actType: 'Email', actNote: '', comment: ''
};

function invStageById(id) {
  return INV_STAGES.find(s => s.id === id) || INV_STAGES[0];
}

function invPipelineById(id) {
  return (window.INVESTOR_PIPELINES || []).find(p => p.id === id);
}

function invCurrentPipeline() {
  const params = new URLSearchParams(window.location.search);
  return invPipelineById(invActivePipelineId) || invPipelineById(params.get('id')) || (window.INVESTOR_PIPELINES || [])[0];
}

function invInvestorById(p, id) {
  return p.investors.find(i => i.id === id);
}

function invInitials(name) {
  return String(name || '?').split(' ').map(w => w[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
}

function invCurrencySymbol(code) {
  const c = INV_CURRENCIES.find(x => x.code === code);
  return c ? c.symbol : '$';
}

function invFmt(raw, p) {
  const sym = invCurrencySymbol(p ? p.currency : 'USD');
  const n = Number(raw) || 0;
  if (!n) return `${sym}0`;
  if (n >= 1000000) {
    const v = n / 1000000;
    return `${sym}${(v % 1 === 0 ? v.toFixed(0) : v.toFixed(1))}M`;
  }
  if (n >= 1000) {
    const v = n / 1000;
    return `${sym}${(v % 1 === 0 ? v.toFixed(0) : v.toFixed(1))}K`;
  }
  return `${sym}${n}`;
}

function invParseAmount(str) {
  const s = String(str || '').trim();
  if (!s) return 0;
  const m = parseFloat(s.replace(/[^0-9.]/g, ''));
  if (isNaN(m)) return 0;
  if (/m/i.test(s)) return Math.round(m * 1000000);
  if (/k/i.test(s)) return Math.round(m * 1000);
  return Math.round(m);
}

function invStars(rating, interactive, extraAttr) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    if (interactive) {
      html += `<span class="inv-star inv-star-pick ${i <= rating ? 'filled' : ''}" data-rating="${i}" onclick="invSetRating(${i})">★</span>`;
    } else {
      html += `<span class="inv-star ${i <= rating ? 'filled' : ''}">★</span>`;
    }
  }
  return html;
}

function invPipelineStats(p) {
  const investors = p.investors || [];
  const committed = investors.reduce((sum, i) => sum + (Number(i.amount) || 0), 0);
  const followUps = investors.filter(i => i.followUp).length;
  return { committed, count: investors.length, followUps };
}

function invStageTotal(p, stageId) {
  return (p.investors || []).filter(i => i.stage === stageId).reduce((sum, i) => sum + (Number(i.amount) || 0), 0);
}

/* ── PIPELINE DIRECTORY (table view) ───────────────────────────────────── */
function renderInvestorTrackingPage() {
  const root = document.getElementById('investorTrackingRoot');
  if (!root) return;

  const pipes = window.INVESTOR_PIPELINES || [];

  root.innerHTML = `
    <div class="directory-hero-row" style="align-items:center;">
      <div class="directory-hero-titles">
        <h1 class="directory-main-title">
          <span>Investor tracking</span>
          <span class="badge-pill neutral-soft" id="invPipeCount">${pipes.length} pipelines</span>
        </h1>
        <p class="directory-main-subtitle">
          Manage your fundraising pipelines — track every investor from research to term sheet.
        </p>
      </div>
      <button class="btn btn-primary" onclick="invOpenCreatePipelineModal()" style="font-size:12px; padding:8px 14px; gap:6px; white-space:nowrap;">
        <i data-lucide="plus" style="width:13px; height:13px;"></i>
        <span>Create pipeline</span>
      </button>
    </div>

    <div class="inv-table-card">
      <table class="inv-table">
        <thead>
          <tr>
            <th>Pipeline</th>
            <th class="inv-num">Raising</th>
            <th class="inv-num">Investors</th>
            <th class="inv-num">Committed</th>
            <th>Updated</th>
            <th style="width:40px;"></th>
          </tr>
        </thead>
        <tbody id="invPipeRows">
          ${invRenderPipelineRows(pipes)}
        </tbody>
      </table>
    </div>
  `;

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function invRenderPipelineRows(pipes) {
  if (!pipes.length) {
    return `
      <tr>
        <td colspan="6">
          <div class="inv-empty-row">
            <i data-lucide="handshake" style="width:28px; height:28px; color:var(--text-light);"></i>
            <div style="font-size:13px; font-weight:800; color:var(--text-dark);">No pipelines yet</div>
            <div style="font-size:12px; color:var(--text-muted);">Create your first pipeline to start tracking investors.</div>
            <button class="btn btn-primary" onclick="invOpenCreatePipelineModal()" style="margin-top:4px;">
              <i data-lucide="plus" style="width:13px; height:13px;"></i> Create pipeline
            </button>
          </div>
        </td>
      </tr>
    `;
  }

  return pipes.map(p => {
    const st = invPipelineStats(p);
    return `
      <tr class="inv-row" onclick="window.location.href='./investor-pipeline.html?id=${p.id}'">
        <td>
          <div class="inv-cell-pipeline">
            <div class="inv-pipe-icon">${invInitials(p.name)}</div>
            <div class="inv-cell-pipeline-text">
              <span class="inv-cell-title">${escapeHtml(p.name)}</span>
              <span class="inv-cell-sub">${escapeHtml(p.description || 'Fundraising pipeline')} · ${INV_STAGES.length} stages</span>
            </div>
          </div>
        </td>
        <td class="inv-num"><span class="inv-amount">${invFmt(p.raising, p)}</span></td>
        <td class="inv-num"><span class="inv-count-pill">${st.count}</span></td>
        <td class="inv-num"><span class="inv-amount ${st.committed ? '' : 'muted'}">${invFmt(st.committed, p)}</span></td>
        <td><span class="inv-cell-muted">${escapeHtml(p.updated)}</span></td>
        <td onclick="event.stopPropagation();">
          <div class="inv-dot-wrap">
            <button class="inv-dots" onclick="invToggleDotMenu(this, '${p.id}')" title="Pipeline actions">
              <i data-lucide="more-horizontal"></i>
            </button>
            <div class="inv-dot-menu" id="invMenu-${p.id}">
              <button onclick="window.location.href='./investor-pipeline.html?id=${p.id}'"><i data-lucide="arrow-up-right"></i> Open pipeline</button>
              <button onclick="invOpenCreatePipelineModal('${p.id}')"><i data-lucide="pencil"></i> Rename</button>
              <button onclick="invDuplicatePipeline('${p.id}')"><i data-lucide="copy"></i> Duplicate</button>
              <button class="danger" onclick="invArchivePipeline('${p.id}')"><i data-lucide="archive"></i> Archive</button>
            </div>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function handleInvTrackSearch(input) {
  const q = (input && input.value || '').trim();
  if (q && window.showToast) window.showToast(`Searching pipelines for "${q}"...`, 'info');
}

function invToggleDotMenu(btn, id) {
  btn.classList.toggle('active');
  const menu = document.getElementById(`invMenu-${id}`);
  if (menu) {
    const open = menu.classList.toggle('show');
    document.querySelectorAll('.inv-dot-menu.show').forEach(m => { if (m !== menu) m.classList.remove('show'); });
    document.querySelectorAll('.inv-dots.active').forEach(b => { if (b !== btn) b.classList.remove('active'); });
    if (open) {
      const rect = btn.getBoundingClientRect();
      menu.style.top = `${rect.bottom + 6}px`;
      menu.style.left = `${Math.min(rect.left, window.innerWidth - 190)}px`;
    }
  }
}

function invCloseDotMenus() {
  document.querySelectorAll('.inv-dot-menu.show').forEach(m => m.classList.remove('show'));
  document.querySelectorAll('.inv-dots.active').forEach(b => b.classList.remove('active'));
}

function invOpenCreatePipelineModal(pipeId) {
  const p = pipeId ? invPipelineById(pipeId) : null;

  window.openModal(p ? 'Rename pipeline' : 'Create pipeline', `
    <div style="display:flex; flex-direction:column; gap:16px; padding:2px 0;">
      <div class="inv-form-group">
        <label class="inv-field-label">Pipeline name</label>
        <input id="invPipeName" class="inv-input" placeholder="e.g. Seed Round" value="${p ? escapeHtml(p.name) : ''}" />
      </div>
      <div class="inv-form-group">
        <label class="inv-field-label">How much are you raising?</label>
        <div class="inv-money-row">
          <input id="invPipeAmount" class="inv-input" placeholder="e.g. 1.5M" value="${p ? p.raising : ''}" inputmode="decimal" />
          <select id="invPipeCurrency" class="inv-input inv-input-select">
            ${INV_CURRENCIES.map(c => `<option value="${c.code}" ${p && p.currency === c.code ? 'selected' : ''}>${c.label}</option>`).join('')}
          </select>
        </div>
        <div class="inv-field-note">Amounts can be entered as 1500000, 1.5M or 250K.</div>
      </div>
      <div class="inv-form-group">
        <label class="inv-field-label">Description <span class="inv-opt">optional</span></label>
        <textarea id="invPipeDesc" class="inv-input" rows="3" placeholder="What is this round for?">${p ? escapeHtml(p.description || '') : ''}</textarea>
      </div>
      <div class="inv-modal-actions">
        <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary" onclick="invSubmitPipelineModal(${p ? `'${p.id}'` : 'null'})">${p ? 'Save changes' : 'Create pipeline'}</button>
      </div>
    </div>
  `);
}

function invSubmitPipelineModal(pipeId) {
  const nameEl = document.getElementById('invPipeName');
  const amountEl = document.getElementById('invPipeAmount');
  const curEl = document.getElementById('invPipeCurrency');
  const descEl = document.getElementById('invPipeDesc');

  const name = nameEl ? nameEl.value.trim() : '';
  if (!name) {
    if (window.showToast) window.showToast('Please enter a pipeline name.', 'alert');
    return;
  }

  if (pipeId) {
    const p = invPipelineById(pipeId);
    if (p) {
      p.name = name;
      p.currency = curEl ? curEl.value : p.currency;
      p.raising = invParseAmount(amountEl ? amountEl.value : '');
      p.description = descEl ? descEl.value.trim() : '';
      p.updated = 'Just now';
    }
    if (window.showToast) window.showToast('Pipeline updated', 'success');
  } else {
    const id = 'pipe-' + Date.now();
    window.INVESTOR_PIPELINES.push({
      id,
      name,
      currency: curEl ? curEl.value : 'USD',
      raising: invParseAmount(amountEl ? amountEl.value : ''),
      description: descEl ? descEl.value.trim() : '',
      updated: 'Just now',
      investors: []
    });
    if (window.showToast) window.showToast(`"${name}" pipeline created`, 'success');
  }

  window.closeModal();
  renderInvestorTrackingPage();
}

function invDuplicatePipeline(id) {
  const p = invPipelineById(id);
  if (!p) return;
  const copy = JSON.parse(JSON.stringify(p));
  copy.id = 'pipe-' + Date.now();
  copy.name = p.name + ' (copy)';
  copy.updated = 'Just now';
  window.INVESTOR_PIPELINES.push(copy);
  if (window.showToast) window.showToast(`"${p.name}" duplicated`, 'success');
  invCloseDotMenus();
  renderInvestorTrackingPage();
}

function invArchivePipeline(id) {
  const p = invPipelineById(id);
  window.INVESTOR_PIPELINES = window.INVESTOR_PIPELINES.filter(x => x.id !== id);
  if (p && window.showToast) window.showToast(`"${p.name}" archived`, 'info');
  invCloseDotMenus();
  renderInvestorTrackingPage();
}

/* ── PIPELINE DETAIL (board + list) ────────────────────────────────────── */
function renderInvestorPipelinePage() {
  const root = document.getElementById('investorPipelineRoot');
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const pid = params.get('id') || 'seed-round';
  const p = invPipelineById(pid) || window.INVESTOR_PIPELINES[0];

  const breadcrumb = document.getElementById('invPipelineBreadcrumb');
  if (breadcrumb) breadcrumb.textContent = p.name;

  root.innerHTML = `
    <!-- Pipeline Hero -->
    <div class="inv-hero">
      <div class="inv-hero-left">
        <div class="inv-hero-titles">
          <h1 class="directory-main-title">
            <span>${escapeHtml(p.name)}</span>
            <span class="badge-pill neutral-soft">${invFmt(p.raising, p)} raised</span>
          </h1>
          <p class="directory-main-subtitle">${escapeHtml(p.description || 'Fundraising pipeline')}</p>
        </div>
      </div>
      <div class="inv-hero-actions">
        <div class="inv-view-toggle">
          <button class="${invActiveView === 'board' ? 'active' : ''}" onclick="invSetView('board')"><i data-lucide="columns-3"></i> Board</button>
          <button class="${invActiveView === 'list' ? 'active' : ''}" onclick="invSetView('list')"><i data-lucide="list"></i> List</button>
        </div>
        <button class="btn btn-primary" onclick="invOpenInvestorDrawer('${p.id}', 'research', null)" style="font-size:12px; padding:8px 14px; gap:6px; white-space:nowrap;">
          <i data-lucide="plus" style="width:13px; height:13px;"></i>
          <span>New investor</span>
        </button>
      </div>
    </div>

    <!-- Stats -->
    <div class="inv-stats-row">
      <div class="inv-stat">
        <span class="inv-stat-label">Raising</span>
        <span class="inv-stat-value">${invFmt(p.raising, p)}</span>
      </div>
      <div class="inv-stat">
        <span class="inv-stat-label">Committed</span>
        <span class="inv-stat-value">${invFmt(invPipelineStats(p).committed, p)}</span>
      </div>
      <div class="inv-stat">
        <span class="inv-stat-label">Investors</span>
        <span class="inv-stat-value">${invPipelineStats(p).count}</span>
      </div>
      <div class="inv-stat">
        <span class="inv-stat-label">Follow-ups due</span>
        <span class="inv-stat-value">${invPipelineStats(p).followUps}</span>
      </div>
    </div>

    <!-- View Content -->
    <div id="invPipelineView"></div>
  `;

  invRenderPipelineView(p);
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function invRenderPipelineView(p) {
  const wrap = document.getElementById('invPipelineView');
  if (!wrap) return;
  wrap.innerHTML = invActiveView === 'board' ? invRenderBoard(p) : invRenderList(p);
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function invFilteredInvestors(p) {
  if (!invSearchQuery) return p.investors || [];
  const q = invSearchQuery.toLowerCase();
  return (p.investors || []).filter(i =>
    i.name.toLowerCase().includes(q) || (i.contact || '').toLowerCase().includes(q)
  );
}

/* ── BOARD VIEW ────────────────────────────────────────────────────────── */
function invRenderBoard(p) {
  const filtered = invFilteredInvestors(p);

  const cols = INV_STAGES.map(stage => {
    const cards = filtered.filter(i => i.stage === stage.id);
    const total = cards.reduce((sum, i) => sum + (Number(i.amount) || 0), 0);
    return `
      <div class="inv-col" id="invCol-${stage.id}" ondragover="event.preventDefault();" ondrop="invOnDrop(event,'${stage.id}')">
        <div class="inv-col-header">
          <div class="inv-col-title-row">
            <span class="inv-col-dot" style="background:${stage.dot};"></span>
            <span class="inv-col-title" title="${stage.label}">${stage.label}</span>
            <span class="inv-col-count">${cards.length}</span>
          </div>
          <span class="inv-col-total">${invFmt(total, p)}</span>
        </div>
        <div class="inv-col-body" id="invCards-${stage.id}">
          ${cards.map(inv => invRenderCard(inv, p)).join('')}
          ${cards.length === 0 ? `<div class="inv-col-empty">No investors in this stage</div>` : ''}
        </div>
        <button class="inv-col-add" onclick="invOpenInvestorDrawer('${p.id}', '${stage.id}', null)">
          <i data-lucide="plus" style="width:12px; height:12px;"></i>
          <span>New investor</span>
        </button>
      </div>
    `;
  }).join('');

  return `
    <div class="inv-board">
      <div class="inv-kanban-wrap">${cols}</div>
    </div>
  `;
}

function invRenderCard(inv, p) {
  return `
    <div class="inv-card" draggable="true"
         ondragstart="invOnDragStart(event,'${inv.id}')"
         onclick="invOpenInvestorDrawer('${p.id}', '${inv.stage}', '${inv.id}')">
      <div class="inv-card-top">
        <div class="inv-card-avatar">${invInitials(inv.name)}</div>
        <div class="inv-card-name">${escapeHtml(inv.name)}</div>
      </div>
      <div class="inv-card-meta">
        <span class="inv-card-amount">${invFmt(inv.amount, p)}</span>
        <span class="inv-card-stars">${invStars(inv.rating, false)}</span>
      </div>
      <div class="inv-card-footer">
        <span class="inv-card-followup">${inv.followUp ? `<i data-lucide="calendar" style="width:11px; height:11px;"></i> ${inv.followUp}` : 'No follow-up'}</span>
        <span class="inv-card-move" onclick="event.stopPropagation(); invMoveStage('${p.id}', '${inv.id}', -1)">
          <i data-lucide="chevron-left" style="width:11px; height:11px;"></i>
        </span>
        <span class="inv-card-move" onclick="event.stopPropagation(); invMoveStage('${p.id}', '${inv.id}', 1)">
          <i data-lucide="chevron-right" style="width:11px; height:11px;"></i>
        </span>
      </div>
    </div>
  `;
}

let invDragInvestorId = null;

function invOnDragStart(e, invId) {
  invDragInvestorId = invId;
  e.dataTransfer.effectAllowed = 'move';
}

function invOnDrop(e, targetStage) {
  e.preventDefault();
  if (!invDragInvestorId) return;
  const p = invCurrentPipeline();
  const inv = invInvestorById(p, invDragInvestorId);
  if (inv && inv.stage !== targetStage) {
    inv.stage = targetStage;
    if (window.showToast) window.showToast(`${inv.name} moved to ${invStageById(targetStage).label}`, 'success');
    invRenderPipelineView(p);
  }
  invDragInvestorId = null;
}

function invMoveStage(pid, invId, delta) {
  const p = invPipelineById(pid);
  const inv = invInvestorById(p, invId);
  if (!inv) return;
  const idx = INV_STAGES.findIndex(s => s.id === inv.stage);
  const next = INV_STAGES[idx + delta];
  if (next) {
    inv.stage = next.id;
    if (window.showToast) window.showToast(`${inv.name} → ${next.label}`, 'info');
    invRenderPipelineView(p);
  }
}

/* ── LIST VIEW ─────────────────────────────────────────────────────────── */
function invRenderList(p) {
  const filtered = invFilteredInvestors(p);

  if (!filtered.length) {
    return `
      <div class="inv-empty-row" style="padding:60px 24px; border:1px solid var(--border-main); border-radius:10px; background:#fff;">
        <i data-lucide="inbox" style="width:28px; height:28px; color:var(--text-light);"></i>
        <div style="font-size:13px; font-weight:800; color:var(--text-dark);">No investors in this pipeline</div>
        <div style="font-size:12px; color:var(--text-muted);">Add an investor from the board or the button above.</div>
      </div>
    `;
  }

  return `
    <div class="inv-table-card">
      <table class="inv-table inv-list-table">
        <thead>
          <tr>
            <th>Investor</th>
            <th>Contact</th>
            <th class="inv-num">Amount</th>
            <th>Rating</th>
            <th>Initial contact</th>
            <th>Next follow up</th>
            <th>Stage</th>
            <th style="width:40px;"></th>
          </tr>
        </thead>
        <tbody>
          ${filtered.map(inv => `
            <tr class="inv-row" onclick="invOpenInvestorDrawer('${p.id}', '${inv.stage}', '${inv.id}')">
              <td>
                <div class="inv-cell-investor">
                  <span class="inv-avatar-sm">${invInitials(inv.name)}</span>
                  <span class="inv-cell-title">${escapeHtml(inv.name)}</span>
                </div>
              </td>
              <td><span class="inv-cell-muted">${escapeHtml(inv.contact || '—')}</span></td>
              <td class="inv-num"><span class="inv-amount">${invFmt(inv.amount, p)}</span></td>
              <td><span class="inv-cell-stars">${invStars(inv.rating, false)}</span></td>
              <td><span class="inv-cell-muted">${escapeHtml(inv.initial || '—')}</span></td>
              <td><span class="inv-cell-followup">${escapeHtml(inv.followUp || '—')}</span></td>
              <td onclick="event.stopPropagation();">
                <select class="inv-stage-select" onchange="invChangeStage('${p.id}', '${inv.id}', this.value)">
                  ${INV_STAGES.map(s => `<option value="${s.id}" ${s.id === inv.stage ? 'selected' : ''}>${s.label}</option>`).join('')}
                </select>
              </td>
              <td onclick="event.stopPropagation();">
                <div class="inv-dot-wrap">
                  <button class="inv-dots" onclick="invToggleDotMenu(this, '${p.id}-${inv.id}')" title="Investor actions">
                    <i data-lucide="more-horizontal"></i>
                  </button>
                  <div class="inv-dot-menu" id="invMenu-${p.id}-${inv.id}">
                    <button onclick="invOpenInvestorDrawer('${p.id}', '${inv.stage}', '${inv.id}')"><i data-lucide="eye"></i> View details</button>
                    <button onclick="invDuplicateInvestor('${p.id}', '${inv.id}')"><i data-lucide="copy"></i> Duplicate</button>
                    <button class="danger" onclick="invDeleteInvestor('${p.id}', '${inv.id}')"><i data-lucide="trash-2"></i> Remove</button>
                  </div>
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function invChangeStage(pid, invId, stageId) {
  const p = invPipelineById(pid);
  const inv = invInvestorById(p, invId);
  if (inv) {
    inv.stage = stageId;
    if (window.showToast) window.showToast(`${inv.name} → ${invStageById(stageId).label}`, 'info');
    invRenderPipelineView(p);
  }
}

function invDuplicateInvestor(pid, invId) {
  const p = invPipelineById(pid);
  const inv = invInvestorById(p, invId);
  if (inv) {
    const copy = JSON.parse(JSON.stringify(inv));
    copy.id = 'inv-' + Date.now();
    copy.name = inv.name + ' (copy)';
    p.investors.push(copy);
    if (window.showToast) window.showToast('Investor duplicated', 'success');
    invRenderPipelineView(p);
  }
}

function invDeleteInvestor(pid, invId) {
  const p = invPipelineById(pid);
  p.investors = p.investors.filter(i => i.id !== invId);
  if (window.showToast) window.showToast('Investor removed from pipeline', 'info');
  invCloseDotMenus();
  invRenderPipelineView(p);
}

function handleInvPipelineSearch(input) {
  invSearchQuery = (input && input.value || '').trim().toLowerCase();
  const p = invCurrentPipeline();
  invRenderPipelineView(p);
}

function invSetView(view) {
  invActiveView = view;
  const p = invCurrentPipeline();
  invRenderPipelineView(p);
}

/* ── INVESTOR DRAWER (tabs: Info / Notes / Contact Activity / Comments) ── */
function invOpenInvestorDrawer(pid, stageId, invId) {
  const p = invPipelineById(pid);
  if (!p) return;
  const stage = invStageById(stageId);
  const inv = invId ? invInvestorById(p, invId) : null;

  invActivePipelineId = pid;
  invActiveStageId = inv ? inv.stage : stageId;
  invEditingId = invId || null;
  invDrawerTab = 'info';
  invDraft = {
    name: inv ? inv.name : '',
    contact: inv ? inv.contact : '',
    amount: inv && inv.amount ? String(inv.amount) : '',
    rating: inv ? inv.rating : 0,
    initial: inv ? inv.initial : '',
    followUp: inv ? inv.followUp : '',
    note: '', actType: 'Email', actNote: '', comment: ''
  };

  invRenderDrawer(p, stage, inv);
}

function invRenderDrawer(p, stage, inv) {
  const isEdit = !!inv;
  const title = isEdit ? 'Investor details' : 'New investor';
  const subtitle = `${p.name} · ${stage.label}`;

  const tabs = [
    { id: 'info', label: 'Info' },
    { id: 'notes', label: 'Notes' },
    { id: 'activity', label: 'Contact activity' },
    { id: 'comments', label: 'Comments' }
  ];

  const tabBar = `
    <div class="inv-drawer-tabs">
      ${tabs.map(t => `
        <button class="${invDrawerTab === t.id ? 'active' : ''}" onclick="invSetDrawerTab('${t.id}')">
          ${t.label}
        </button>
      `).join('')}
    </div>
  `;

  let bodyHtml = tabBar + `<div class="inv-drawer-content">`;

  if (invDrawerTab === 'info') {
    bodyHtml += invDrawerInfoHtml(p, inv);
  } else if (invDrawerTab === 'notes') {
    bodyHtml += invDrawerNotesHtml(inv);
  } else if (invDrawerTab === 'activity') {
    bodyHtml += invDrawerActivityHtml(inv);
  } else {
    bodyHtml += invDrawerCommentsHtml(inv);
  }
  bodyHtml += `</div>`;

  const footer = `
    <button class="btn btn-outline" onclick="closeDrawer()">Cancel</button>
    <button class="btn btn-primary" onclick="invSaveInvestor()">${isEdit ? 'Save changes' : 'Add investor'}</button>
  `;

  window.openDrawer(title, subtitle, bodyHtml, footer);
}

function invDrawerInfoHtml(p, inv) {
  return `
    <div class="inv-drawer-section">
      <div class="inv-section">
        <span class="inv-section-label">Investor</span>
        <div class="inv-form-group">
          <label class="inv-field-label">Investor or fund name</label>
          <input id="invFieldName" class="inv-input" placeholder="e.g. Sequoia India" value="${escapeHtml(invDraft.name)}" />
        </div>
      </div>

      <div class="inv-section">
        <span class="inv-section-label">Contact</span>
        <div class="inv-form-group">
          <label class="inv-field-label">Contact email</label>
          <div class="inv-contact-search">
            <i data-lucide="search" style="width:14px; height:14px; color:var(--text-light);"></i>
            <input id="invFieldContact" class="inv-input inv-contact-input" placeholder="Search for a contact or enter an email to create one" value="${escapeHtml(invDraft.contact)}" />
            <span class="inv-contact-enter" onclick="invEnterContact()">Enter</span>
          </div>
          <div class="inv-field-note">Search your saved contacts or type an email to create one.</div>
        </div>
      </div>

      <div class="inv-section">
        <span class="inv-section-label">Investment</span>
        <div class="inv-form-grid">
          <div class="inv-field-block">
            <span class="inv-field-label-sm">Amount</span>
            <div class="inv-money-row">
              <span class="inv-money-symbol">${invCurrencySymbol(p.currency)}</span>
              <input id="invFieldAmount" class="inv-input" placeholder="e.g. 500K" value="${escapeHtml(invDraft.amount)}" inputmode="decimal" />
            </div>
          </div>
          <div class="inv-field-block">
            <span class="inv-field-label-sm">Rating</span>
            <div class="inv-star-picker" id="invStarPicker">${invStars(invDraft.rating, true)}</div>
          </div>
          <div class="inv-field-block">
            <span class="inv-field-label-sm">Initial contact</span>
            <input id="invFieldInitial" type="date" class="inv-input" value="${escapeHtml(invDraft.initial)}" />
          </div>
          <div class="inv-field-block">
            <span class="inv-field-label-sm">Next follow up</span>
            <input id="invFieldFollowUp" type="date" class="inv-input" value="${escapeHtml(invDraft.followUp)}" />
          </div>
        </div>
        <div class="inv-field-states">All fields are empty until you add them — leave blank until known.</div>
      </div>
    </div>
  `;
}

function invSetRating(rating) {
  invDraft.rating = rating;
  const picker = document.getElementById('invStarPicker');
  if (picker) picker.innerHTML = invStars(rating, true);
}

function invEnterContact() {
  const el = document.getElementById('invFieldContact');
  if (el && el.value.trim()) {
    if (window.showToast) window.showToast(`Contact "${el.value.trim()}" ready to add`, 'info');
  }
}

function invDrawerNotesHtml(inv) {
  const notes = (inv && inv.notes) || [];
  return `
    <div class="inv-drawer-section">
      <div class="inv-section">
        <span class="inv-section-label">New note</span>
        <div class="inv-form-group">
          <label class="inv-field-label">Note</label>
          <textarea id="invFieldNote" class="inv-input" rows="4" placeholder="Capture context about this investor...">${escapeHtml(invDraft.note)}</textarea>
          <button class="btn btn-outline" style="align-self:flex-start; margin-top:2px;" onclick="invAddNote()">
            <i data-lucide="plus" style="width:12px; height:12px;"></i> Add note
          </button>
        </div>
      </div>
      <div class="inv-section">
        <span class="inv-section-label">Notes history</span>
        <div class="inv-note-list">
          ${notes.length ? notes.map(n => `
            <div class="inv-note-item">
              <div class="inv-note-text">${escapeHtml(n.text)}</div>
              <div class="inv-note-time">${escapeHtml(n.time)}</div>
            </div>
          `).join('') : `<div class="inv-empty-inline">No notes yet for this investor.</div>`}
        </div>
      </div>
    </div>
  `;
}

function invAddNote() {
  const el = document.getElementById('invFieldNote');
  const text = el ? el.value.trim() : '';
  if (!text) return;
  const p = invPipelineById(invActivePipelineId);
  const inv = invEditingId ? invInvestorById(p, invEditingId) : null;
  if (!inv) {
    invDraft.note = '';
    if (window.showToast) window.showToast('Save the investor first, then add notes.', 'info');
    return;
  }
  inv.notes = inv.notes || [];
  inv.notes.unshift({ text, time: new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }) });
  if (window.showToast) window.showToast('Note added', 'success');
  invDraft.note = '';
  invRenderDrawer(p, invStageById(inv.stage), inv);
}

function invDrawerActivityHtml(inv) {
  const activity = (inv && inv.activity) || [];
  return `
    <div class="inv-drawer-section">
      <div class="inv-section">
        <span class="inv-section-label">Log activity</span>
        <div class="inv-form-group">
          <label class="inv-field-label">What happened</label>
          <div class="inv-activity-row">
            <select id="invFieldActType" class="inv-input inv-input-select" style="max-width:130px;">
              ${['Email', 'Call', 'Meeting'].map(t => `<option value="${t}" ${invDraft.actType === t ? 'selected' : ''}>${t}</option>`).join('')}
            </select>
            <input id="invFieldActNote" class="inv-input" placeholder="Short summary..." value="${escapeHtml(invDraft.actNote)}" />
          </div>
          <button class="btn btn-outline" style="align-self:flex-start; margin-top:2px;" onclick="invAddActivity()">
            <i data-lucide="plus" style="width:12px; height:12px;"></i> Log activity
          </button>
        </div>
      </div>
      <div class="inv-section">
        <span class="inv-section-label">Activity history</span>
        <div class="inv-activity-list">
          ${activity.length ? activity.map(a => `
            <div class="inv-activity-item">
              <div class="inv-activity-icon"><i data-lucide="${a.type === 'Call' ? 'phone' : a.type === 'Meeting' ? 'users' : 'mail'}"></i></div>
              <div class="inv-activity-body">
                <div class="inv-activity-text"><strong>${escapeHtml(a.type)}</strong> — ${escapeHtml(a.text)}</div>
                <div class="inv-note-time">${escapeHtml(a.time)}</div>
              </div>
            </div>
          `).join('') : `<div class="inv-empty-inline">No contact activity logged yet.</div>`}
        </div>
      </div>
    </div>
  `;
}

function invAddActivity() {
  const typeEl = document.getElementById('invFieldActType');
  const noteEl = document.getElementById('invFieldActNote');
  const text = noteEl ? noteEl.value.trim() : '';
  if (!text) return;
  const p = invPipelineById(invActivePipelineId);
  const inv = invEditingId ? invInvestorById(p, invEditingId) : null;
  if (!inv) {
    if (window.showToast) window.showToast('Save the investor first, then log activity.', 'info');
    return;
  }
  inv.activity = inv.activity || [];
  inv.activity.unshift({ type: typeEl ? typeEl.value : 'Email', text, time: new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }) });
  if (window.showToast) window.showToast('Activity logged', 'success');
  invDraft.actNote = '';
  invRenderDrawer(p, invStageById(inv.stage), inv);
}

function invDrawerCommentsHtml(inv) {
  const comments = (inv && inv.comments) || [];
  return `
    <div class="inv-drawer-section">
      <div class="inv-section">
        <span class="inv-section-label">New comment</span>
        <div class="inv-form-group">
          <label class="inv-field-label">Comment</label>
          <textarea id="invFieldComment" class="inv-input" rows="3" placeholder="Add a comment...">${escapeHtml(invDraft.comment)}</textarea>
          <button class="btn btn-outline" style="align-self:flex-start; margin-top:2px;" onclick="invAddComment()">
            <i data-lucide="message-square-plus" style="width:12px; height:12px;"></i> Post comment
          </button>
        </div>
      </div>
      <div class="inv-section">
        <span class="inv-section-label">Discussion</span>
        <div class="inv-comment-list">
          ${comments.length ? comments.map(c => `
            <div class="inv-comment-item">
              <div class="inv-comment-avatar">SC</div>
              <div class="inv-comment-body">
                <div class="inv-comment-head">
                  <span class="inv-comment-author">Dr. Sarah Chen</span>
                  <span class="inv-note-time">${escapeHtml(c.time)}</span>
                </div>
                <div class="inv-comment-text">${escapeHtml(c.text)}</div>
              </div>
            </div>
          `).join('') : `<div class="inv-empty-inline">No comments yet. Start the discussion.</div>`}
        </div>
      </div>
    </div>
  `;
}

function invAddComment() {
  const el = document.getElementById('invFieldComment');
  const text = el ? el.value.trim() : '';
  if (!text) return;
  const p = invPipelineById(invActivePipelineId);
  const inv = invEditingId ? invInvestorById(p, invEditingId) : null;
  if (!inv) {
    if (window.showToast) window.showToast('Save the investor first, then comment.', 'info');
    return;
  }
  inv.comments = inv.comments || [];
  inv.comments.unshift({ text, time: new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }) });
  if (window.showToast) window.showToast('Comment posted', 'success');
  invDraft.comment = '';
  invRenderDrawer(p, invStageById(inv.stage), inv);
}

function invSetDrawerTab(tab) {
  invDrawerTab = tab;
  const p = invPipelineById(invActivePipelineId);
  const inv = invEditingId ? invInvestorById(p, invEditingId) : null;
  const stage = inv ? invStageById(inv.stage) : invStageById(invActiveStageId);
  invRenderDrawer(p, stage, inv);
}

function invSaveInvestor() {
  const p = invPipelineById(invActivePipelineId);
  if (!p) return;

  const name = (document.getElementById('invFieldName') ? document.getElementById('invFieldName').value : '').trim();
  if (!name) {
    if (window.showToast) window.showToast('Investor or Fund Name is required.', 'alert');
    return;
  }
  const contact = document.getElementById('invFieldContact') ? document.getElementById('invFieldContact').value.trim() : '';
  const amount = invParseAmount(document.getElementById('invFieldAmount') ? document.getElementById('invFieldAmount').value : '');
  const initial = document.getElementById('invFieldInitial') ? document.getElementById('invFieldInitial').value : '';
  const followUp = document.getElementById('invFieldFollowUp') ? document.getElementById('invFieldFollowUp').value : '';

  const data = { name, contact, amount, rating: invDraft.rating, initial, followUp };

  if (invEditingId) {
    const inv = invInvestorById(p, invEditingId);
    if (inv) Object.assign(inv, data);
    if (window.showToast) window.showToast('Investor updated', 'success');
  } else {
    const inv = {
      id: 'inv-' + Date.now(),
      stage: invActiveStageId || 'research',
      ...data,
      notes: [], activity: [], comments: []
    };
    p.investors.push(inv);
    if (window.showToast) window.showToast(`${inv.name} added to ${invStageById(inv.stage).label}`, 'success');
  }

  window.closeDrawer();
  invRenderPipelineView(p);
}

window.renderInvestorTrackingPage = renderInvestorTrackingPage;
window.renderInvestorPipelinePage = renderInvestorPipelinePage;
window.invOpenCreatePipelineModal = invOpenCreatePipelineModal;
window.invSubmitPipelineModal = invSubmitPipelineModal;
window.invToggleDotMenu = invToggleDotMenu;
window.invDuplicatePipeline = invDuplicatePipeline;
window.invArchivePipeline = invArchivePipeline;
window.invSetView = invSetView;
window.invOpenInvestorDrawer = invOpenInvestorDrawer;
window.invSetDrawerTab = invSetDrawerTab;
window.invSetRating = invSetRating;
window.invEnterContact = invEnterContact;
window.invAddNote = invAddNote;
window.invAddActivity = invAddActivity;
window.invAddComment = invAddComment;
window.invSaveInvestor = invSaveInvestor;
window.invChangeStage = invChangeStage;
window.invMoveStage = invMoveStage;
window.invDuplicateInvestor = invDuplicateInvestor;
window.invDeleteInvestor = invDeleteInvestor;
window.handleInvTrackSearch = handleInvTrackSearch;
window.handleInvPipelineSearch = handleInvPipelineSearch;
window.invCloseDotMenus = invCloseDotMenus;

// Close pipeline/investor dot menus on outside click
document.addEventListener('click', (e) => {
  if (!e.target.closest || !e.target.closest('.inv-dot-wrap')) {
    invCloseDotMenus();
  }
});

/* ══════════════════════════════════════════════════════════════════════════
   PRODUCT ANALYTICS — KPIs, Engagement chart, Recent viewers,
   Scroll-depth table, heatmap & key insights
   ══════════════════════════════════════════════════════════════════════════ */

let paRange = '7d';
let paChart = null;

const PA_DATA = {
  '7d': {
    label: 'Last 7 days',
    compare: 'vs previous 7 days',
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    viewers: [128, 141, 156, 138, 172, 189, 164],
    upvotes: [42, 51, 47, 58, 62, 55, 49],
    kpi: {
      viewers: '1,088', viewersDelta: 12.4, viewersSpark: [128, 141, 156, 138, 172, 189, 164],
      upvotes: '364', upvotesDelta: 8.1, upvotesSpark: [42, 51, 47, 58, 62, 55, 49],
      avgTime: '4m 38s', avgTimeDelta: 2.4, avgTimeSpark: [3.9, 4.0, 4.3, 4.1, 4.6, 4.4, 4.6],
      totalTime: '69.4 hrs', totalTimeDelta: 15.2, totalTimeSpark: [48, 52, 49, 56, 62, 58, 64]
    },
    scroll: [
      { depth: '0–25% · top', viewers: 1088, share: 100, drop: 0, time: '0:24', status: 'ok', statusLabel: 'Healthy' },
      { depth: '25–50%', viewers: 892, share: 82.0, drop: -18.0, time: '0:41', status: 'ok', statusLabel: 'Good' },
      { depth: '50–75%', viewers: 724, share: 66.5, drop: -18.8, time: '0:58', status: 'warn', statusLabel: 'Drop-off' },
      { depth: '75–100%', viewers: 512, share: 47.1, drop: -29.3, time: '1:16', status: 'warn', statusLabel: 'Watch' },
      { depth: 'Bottom · 100%', viewers: 398, share: 36.6, drop: -22.3, time: '1:42', status: 'warn', statusLabel: 'Drop-off' }
    ],
    recent: [
      { anon: true, action: 'Scrolled to 64% of page', time: '2m ago', device: 'Safari · macOS', location: 'Bengaluru, IN' },
      { anon: true, action: 'Upvoted & shared', time: '6m ago', device: 'Chrome · Windows', location: 'Remote' },
      { name: 'Rahul Mehta', avatar: 'https://randomuser.me/api/portraits/men/32.jpg', action: 'Viewed for 3m 12s', time: '9m ago', device: 'Chrome · Android', location: 'Mumbai, IN' },
      { name: 'Dr. Alina Petrova', avatar: 'https://randomuser.me/api/portraits/women/65.jpg', action: 'Scrolled to 88% of page', time: '14m ago', device: 'Safari · iOS', location: 'Berlin, DE' },
      { anon: true, action: 'Scrolled to 41% of page', time: '21m ago', device: 'Firefox · macOS', location: 'London, GB' },
      { name: 'Kenji Watanabe', avatar: 'https://randomuser.me/api/portraits/men/41.jpg', action: 'Upvoted', time: '28m ago', device: 'Chrome · Android', location: 'Tokyo, JP' }
    ],
    insights: [
      { icon: 'trending-up', title: 'Strong hook retention', text: '82% of viewers scrolled past the 25% mark — the opening sections are doing their job.' },
      { icon: 'activity', title: 'Mid-page drop-off', text: 'Biggest loss happens between 50–75% (−18.8%). Tighten the middle section to keep momentum.' },
      { icon: 'mouse-pointer-click', title: 'Prime engagement window', text: 'Peak visits cluster 12–2 PM on Wednesdays. Time product updates and launches accordingly.' },
      { icon: 'smartphone', title: 'Mobile viewers spend less', text: 'Mobile sessions average 38% less time. Check tap targets and section order on smaller screens.' }
    ]
  },

  '30d': {
    label: 'Last 30 days',
    compare: 'vs previous 30 days',
    labels: ['Aug 1', 'Aug 3', 'Aug 5', 'Aug 7', 'Aug 9', 'Aug 11', 'Aug 13', 'Aug 15', 'Aug 17', 'Aug 19', 'Aug 21', 'Aug 23', 'Aug 25', 'Aug 27', 'Aug 29'],
    viewers: [96, 112, 105, 124, 138, 121, 147, 156, 142, 163, 171, 158, 182, 176, 191],
    upvotes: [31, 38, 34, 42, 47, 40, 52, 54, 49, 58, 61, 55, 64, 60, 68],
    kpi: {
      viewers: '2,142', viewersDelta: 9.7, viewersSpark: [96, 112, 105, 124, 138, 121, 147, 156, 142, 163, 171, 158, 182, 176, 191],
      upvotes: '734', upvotesDelta: 6.2, upvotesSpark: [31, 38, 34, 42, 47, 40, 52, 54, 49, 58, 61, 55, 64, 60, 68],
      avgTime: '4m 12s', avgTimeDelta: 1.8, avgTimeSpark: [3.8, 3.9, 4.1, 3.7, 4.0, 4.2, 3.9, 4.3, 4.1, 4.4, 4.2, 4.5, 4.3, 4.4, 4.6],
      totalTime: '149.8 hrs', totalTimeDelta: 13.6, totalTimeSpark: [98, 104, 101, 112, 118, 110, 124, 131, 126, 138, 145, 140, 151, 158, 164]
    },
    scroll: [
      { depth: '0–25% · top', viewers: 2142, share: 100, drop: 0, time: '0:26', status: 'ok', statusLabel: 'Healthy' },
      { depth: '25–50%', viewers: 1756, share: 82.0, drop: -18.0, time: '0:44', status: 'ok', statusLabel: 'Good' },
      { depth: '50–75%', viewers: 1428, share: 66.7, drop: -18.7, time: '1:01', status: 'warn', statusLabel: 'Drop-off' },
      { depth: '75–100%', viewers: 1018, share: 47.5, drop: -28.7, time: '1:19', status: 'warn', statusLabel: 'Watch' },
      { depth: 'Bottom · 100%', viewers: 791, share: 36.9, drop: -22.3, time: '1:46', status: 'warn', statusLabel: 'Drop-off' }
    ],
    recent: [
      { anon: true, action: 'Upvoted', time: '1m ago', device: 'Chrome · Windows', location: 'Austin, US' },
      { name: 'Priya Nair', avatar: 'https://randomuser.me/api/portraits/women/44.jpg', action: 'Viewed for 2m 41s', time: '4m ago', device: 'Safari · macOS', location: 'Chennai, IN' },
      { anon: true, action: 'Scrolled to 72% of page', time: '8m ago', device: 'Chrome · Android', location: 'Remote' },
      { name: 'Liam O’Connor', avatar: 'https://randomuser.me/api/portraits/men/75.jpg', action: 'Scrolled to 54% of page', time: '12m ago', device: 'Edge · Windows', location: 'Dublin, IE' },
      { name: 'Sofia García', avatar: 'https://randomuser.me/api/portraits/women/68.jpg', action: 'Upvoted & shared', time: '17m ago', device: 'Safari · iOS', location: 'Madrid, ES' },
      { anon: true, action: 'Viewed for 1m 08s', time: '24m ago', device: 'Firefox · Linux', location: 'Remote' }
    ],
    insights: [
      { icon: 'trending-up', title: 'Steady view growth', text: 'Daily viewers grew 9.7% vs the previous month, with the biggest gains in week three.' },
      { icon: 'activity', title: 'Consistent 50% drop-off', text: 'Roughly 1 in 3 viewers leaves between 50–75%. Reordering the middle sections could lift it.' },
      { icon: 'mouse-pointer-click', title: 'Upvotes follow deep reads', text: '86% of upvotes come from sessions that reach 75%+. Keep strong content near the end.' },
      { icon: 'hourglass', title: 'Evening traffic rising', text: 'Evening (6–9 PM) visits grew 22% this month — test launch emails in that window.' }
    ]
  },

  '90d': {
    label: 'Last 90 days',
    compare: 'vs previous 90 days',
    labels: ['Jun 1', 'Jun 8', 'Jun 15', 'Jun 22', 'Jun 29', 'Jul 6', 'Jul 13', 'Jul 20', 'Jul 27', 'Aug 3', 'Aug 10', 'Aug 17'],
    viewers: [74, 88, 83, 97, 112, 106, 125, 138, 131, 149, 158, 171],
    upvotes: [22, 27, 25, 31, 36, 33, 41, 45, 42, 51, 55, 62],
    kpi: {
      viewers: '1,351', viewersDelta: 21.3, viewersSpark: [74, 88, 83, 97, 112, 106, 125, 138, 131, 149, 158, 171],
      upvotes: '470', upvotesDelta: 14.8, upvotesSpark: [22, 27, 25, 31, 36, 33, 41, 45, 42, 51, 55, 62],
      avgTime: '3m 58s', avgTimeDelta: 0.9, avgTimeSpark: [3.5, 3.7, 3.6, 3.9, 4.0, 3.8, 4.0, 4.1, 4.0, 4.2, 4.1, 4.3],
      totalTime: '89.2 hrs', totalTimeDelta: 11.4, totalTimeSpark: [46, 51, 49, 55, 61, 58, 64, 68, 63, 71, 76, 82]
    },
    scroll: [
      { depth: '0–25% · top', viewers: 1351, share: 100, drop: 0, time: '0:28', status: 'ok', statusLabel: 'Healthy' },
      { depth: '25–50%', viewers: 1110, share: 82.2, drop: -17.8, time: '0:47', status: 'ok', statusLabel: 'Good' },
      { depth: '50–75%', viewers: 897, share: 66.4, drop: -19.2, time: '1:04', status: 'warn', statusLabel: 'Drop-off' },
      { depth: '75–100%', viewers: 651, share: 48.2, drop: -27.4, time: '1:21', status: 'warn', statusLabel: 'Watch' },
      { depth: 'Bottom · 100%', viewers: 506, share: 37.5, drop: -22.3, time: '1:48', status: 'warn', statusLabel: 'Drop-off' }
    ],
    recent: [
      { name: 'Hannah Lee', avatar: 'https://randomuser.me/api/portraits/women/21.jpg', action: 'Upvoted', time: '3m ago', device: 'Chrome · macOS', location: 'Seoul, KR' },
      { anon: true, action: 'Scrolled to 59% of page', time: '7m ago', device: 'Safari · iOS', location: 'Remote' },
      { name: 'Marco Rossi', avatar: 'https://randomuser.me/api/portraits/men/29.jpg', action: 'Viewed for 4m 02s', time: '11m ago', device: 'Chrome · Windows', location: 'Milan, IT' },
      { anon: true, action: 'Scrolled to 33% of page', time: '16m ago', device: 'Firefox · macOS', location: 'Toronto, CA' },
      { name: 'Aisha Bello', avatar: 'https://randomuser.me/api/portraits/women/47.jpg', action: 'Upvoted & shared', time: '22m ago', device: 'Safari · Android', location: 'Lagos, NG' },
      { anon: true, action: 'Viewed for 2m 15s', time: '30m ago', device: 'Chrome · Windows', location: 'Remote' }
    ],
    insights: [
      { icon: 'trending-up', title: 'Quarter on quarter growth', text: 'Views are up 21.3% vs the previous quarter — the last launch clearly moved the needle.' },
      { icon: 'activity', title: 'Retention steady at ~48%', text: 'Half of all viewers still reach 75%. Focused on the 50–75% band for the next bump.' },
      { icon: 'mouse-pointer-click', title: 'Week 3 spike', text: 'The mid-July feature update caused a 32% traffic spike that held its momentum.' },
      { icon: 'smartphone', title: 'Mobile share climbing', text: 'Mobile now accounts for 44% of viewers, up from 37% three months ago.' }
    ]
  },

  'all': {
    label: 'All time',
    compare: 'vs previous 6 months',
    labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    viewers: [310, 428, 512, 647, 782, 924],
    upvotes: [98, 132, 164, 205, 238, 271],
    kpi: {
      viewers: '3,603', viewersDelta: 18.2, viewersSpark: [310, 428, 512, 647, 782, 924],
      upvotes: '1,108', upvotesDelta: 12.6, upvotesSpark: [98, 132, 164, 205, 238, 271],
      avgTime: '4m 05s', avgTimeDelta: 1.2, avgTimeSpark: [3.4, 3.6, 3.8, 3.9, 4.1, 4.3],
      totalTime: '245.6 hrs', totalTimeDelta: 9.8, totalTimeSpark: [104, 128, 152, 186, 221, 268]
    },
    scroll: [
      { depth: '0–25% · top', viewers: 3603, share: 100, drop: 0, time: '0:29', status: 'ok', statusLabel: 'Healthy' },
      { depth: '25–50%', viewers: 2960, share: 82.2, drop: -17.8, time: '0:49', status: 'ok', statusLabel: 'Good' },
      { depth: '50–75%', viewers: 2384, share: 66.2, drop: -19.5, time: '1:06', status: 'warn', statusLabel: 'Drop-off' },
      { depth: '75–100%', viewers: 1728, share: 48.0, drop: -27.5, time: '1:23', status: 'warn', statusLabel: 'Watch' },
      { depth: 'Bottom · 100%', viewers: 1352, share: 37.5, drop: -21.8, time: '1:51', status: 'warn', statusLabel: 'Drop-off' }
    ],
    recent: [
      { name: 'Dr. Elena Moreau', avatar: 'https://randomuser.me/api/portraits/women/33.jpg', action: 'Upvoted & shared', time: '2m ago', device: 'Safari · macOS', location: 'Paris, FR' },
      { anon: true, action: 'Scrolled to 81% of page', time: '5m ago', device: 'Chrome · Android', location: 'Remote' },
      { name: 'David Kim', avatar: 'https://randomuser.me/api/portraits/men/52.jpg', action: 'Viewed for 5m 44s', time: '9m ago', device: 'Chrome · Windows', location: 'Sydney, AU' },
      { name: 'Fatima Zahra', avatar: 'https://randomuser.me/api/portraits/women/75.jpg', action: 'Scrolled to 66% of page', time: '13m ago', device: 'Firefox · macOS', location: 'Dubai, AE' },
      { anon: true, action: 'Upvoted', time: '19m ago', device: 'Safari · iOS', location: 'Remote' },
      { name: 'Oliver Smith', avatar: 'https://randomuser.me/api/portraits/men/11.jpg', action: 'Viewed for 1m 52s', time: '26m ago', device: 'Chrome · Windows', location: 'Manchester, GB' }
    ],
    insights: [
      { icon: 'trending-up', title: 'Sustained momentum', text: 'Six consecutive months of growth — from 310 to 924 monthly viewers.' },
      { icon: 'activity', title: 'Best quarter ever', text: 'Last 30 days recorded the highest upvote rate (18.4% of viewers) since launch.' },
      { icon: 'mouse-pointer-click', title: 'Content depth pays off', text: 'Deck and demo sections hold viewers 2.4× longer than the intro — lean into them.' },
      { icon: 'smartphone', title: 'Time to internationalise', text: '44% of recent viewers are now outside India — prepare translations and region pricing.' }
    ]
  }
};

function renderProductAnalyticsPage() {
  const root = document.getElementById('productAnalyticsRoot');
  if (!root) return;
  paRender(root);
}

function paRender(root) {
  const d = PA_DATA[paRange] || PA_DATA['7d'];

  const kpiCards = [
    { label: 'Total viewers', value: d.kpi.viewers, delta: d.kpi.viewersDelta, icon: 'eye', spark: d.kpi.viewersSpark },
    { label: 'Total upvotes', value: d.kpi.upvotes, delta: d.kpi.upvotesDelta, icon: 'thumbs-up', spark: d.kpi.upvotesSpark },
    { label: 'Avg viewing time', value: d.kpi.avgTime, delta: d.kpi.avgTimeDelta, icon: 'clock', spark: d.kpi.avgTimeSpark },
    { label: 'Total time spent', value: d.kpi.totalTime, delta: d.kpi.totalTimeDelta, icon: 'timer', spark: d.kpi.totalTimeSpark }
  ];

  root.innerHTML = `
    <!-- Hero Header + Range Filter -->
    <div class="directory-hero-row pa-hero" style="align-items:center;">
      <div class="directory-hero-titles">
        <h1 class="directory-main-title">
          <span>Product analytics</span>
          <span class="badge-pill neutral-soft">Alpha Health 2.0</span>
        </h1>
        <p class="directory-main-subtitle">
          Engagement, reach and scroll behaviour across your product page. Updated 5 minutes ago.
        </p>
      </div>
      <div class="pa-hero-actions">
        <div class="pa-range-seg">
          <button class="pa-range-btn ${paRange === '7d' ? 'active' : ''}" onclick="paSetRange('7d')">7D</button>
          <button class="pa-range-btn ${paRange === '30d' ? 'active' : ''}" onclick="paSetRange('30d')">30D</button>
          <button class="pa-range-btn ${paRange === '90d' ? 'active' : ''}" onclick="paSetRange('90d')">90D</button>
          <button class="pa-range-btn ${paRange === 'all' ? 'active' : ''}" onclick="paSetRange('all')">All</button>
        </div>
        <button class="btn btn-outline pa-export-btn" onclick="paExportReport()">
          <i data-lucide="download" style="width:13px; height:13px;"></i>
          <span>Export report</span>
        </button>
      </div>
    </div>

    <!-- KPI Metric Cards -->
    <div class="pa-kpi-row">
      ${kpiCards.map(c => `
        <div class="pa-kpi-card">
          <div class="pa-kpi-top">
            <span class="pa-kpi-icon"><i data-lucide="${c.icon}"></i></span>
            <span class="pa-kpi-label">${c.label}</span>
          </div>
          <div class="pa-kpi-value">${c.value}</div>
          <div class="pa-kpi-bottom">
            <span class="pa-delta up"><i data-lucide="arrow-up-right" style="width:12px; height:12px;"></i> ${c.delta}%</span>
            <span class="pa-kpi-sub">${d.compare}</span>
          </div>
          <div class="pa-kpi-spark">${paSparkline(c.spark)}</div>
        </div>
      `).join('')}
    </div>

    <!-- Engagement chart + Recent viewers -->
    <div class="pa-duo-row">
      <div class="pa-chart-card">
        <div class="pa-card-head">
          <div>
            <div class="pa-card-title">Engagement over time</div>
            <div class="pa-card-sub">Viewers vs upvotes · ${d.label}</div>
          </div>
          <div class="pa-chart-legend">
            <span class="pa-legend-item"><span class="pa-legend-dot dark"></span>Viewers</span>
            <span class="pa-legend-item"><span class="pa-legend-dot gray"></span>Upvotes</span>
          </div>
        </div>
        <div id="paEngChart" class="pa-chart-body"></div>
      </div>

      <div class="pa-viewers-card">
        <div class="pa-card-head">
          <div>
            <div class="pa-card-title">Recent viewers</div>
            <div class="pa-card-sub">Live activity · ${d.label}</div>
          </div>
          <span class="badge-pill neutral-soft">${d.recent.length}</span>
        </div>
        <div class="pa-viewer-list">
          ${d.recent.map(v => paViewerRow(v)).join('')}
        </div>
        <button class="pa-see-all" onclick="if(window.showToast) window.showToast('Opening full visitor timeline...', 'info');">
          <span>View all visitors</span>
          <i data-lucide="chevron-right" style="width:13px; height:13px;"></i>
        </button>
      </div>
    </div>

    <!-- Scroll depth + heatmap + table -->
    <div class="pa-scroll-card">
      <div class="pa-card-head">
        <div>
          <div class="pa-card-title">Scroll depth &amp; drop-off</div>
          <div class="pa-card-sub">How far viewers scrolled through the page</div>
        </div>
        <div class="pa-heat-legend">
          <span class="pa-legend-item"><span class="pa-legend-dot dark"></span>Reached</span>
          <span class="pa-legend-item"><span class="pa-legend-dot light"></span>Dropped</span>
        </div>
      </div>

      <!-- Heatmap band -->
      <div class="pa-heatmap">
        ${d.scroll.map(s => `
          <div class="pa-heat-seg" style="flex:${s.share};">
            <div class="pa-heat-fill" style="background:rgba(20,20,19,${0.10 + (s.share / 100) * 0.72});"></div>
            <span class="pa-heat-val">${s.share}%</span>
          </div>
        `).join('')}
      </div>
      <div class="pa-heat-labels">
        ${d.scroll.map(s => `<span>${s.depth}</span>`).join('')}
      </div>

      <table class="pa-table">
        <thead>
          <tr>
            <th>Scroll depth</th>
            <th class="pa-num">Viewers reached</th>
            <th class="pa-num">Share</th>
            <th class="pa-num">Drop-off</th>
            <th class="pa-num">Avg. time at depth</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          ${d.scroll.map(s => `
            <tr>
              <td>
                <div class="pa-depth-cell">
                  <span class="pa-depth-dot" style="background:rgba(20,20,19,${0.18 + (s.share / 100) * 0.82});"></span>
                  ${s.depth}
                </div>
              </td>
              <td class="pa-num">${paFmt(s.viewers)}</td>
              <td class="pa-num">${s.share}%</td>
              <td class="pa-num">${s.drop < 0 ? `<span class="pa-drop">${s.drop}%</span>` : '—'}</td>
              <td class="pa-num">${s.time}</td>
              <td><span class="pa-status ${s.status}">${s.statusLabel}</span></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <!-- Key insights -->
    <div class="pa-insights-card">
      <div class="pa-card-head">
        <div>
          <div class="pa-card-title">Key insights</div>
          <div class="pa-card-sub">Automated highlights from this period</div>
        </div>
        <span class="badge-pill neutral-soft">AI generated</span>
      </div>
      <div class="pa-insights-grid">
        ${d.insights.map(i => `
          <div class="pa-insight">
            <div class="pa-insight-icon"><i data-lucide="${i.icon}"></i></div>
            <div class="pa-insight-title">${i.title}</div>
            <div class="pa-insight-text">${i.text}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  if (typeof lucide !== 'undefined') lucide.createIcons();
  paDrawChart();
}

function paSetRange(r) {
  paRange = r;
  const root = document.getElementById('productAnalyticsRoot');
  if (root) paRender(root);
}

function paExportReport() {
  const d = PA_DATA[paRange] || PA_DATA['7d'];
  if (window.showToast) window.showToast(`Analytics report (${d.label}) exported as CSV`, 'success');
}

function handleAnalyticsSearch(input) {
  const q = (input && input.value || '').trim();
  if (q && window.showToast) {
    window.showToast(`Searching analytics for "${q}"...`, 'info');
  }
}

function paViewerRow(v) {
  const avatar = v.anon
    ? `<div class="pa-viewer-avatar anon"><i data-lucide="ghost" style="width:14px; height:14px;"></i></div>`
    : `<div class="pa-viewer-avatar"><img src="${v.avatar}" alt="${escapeHtml(v.name)}" /></div>`;
  return `
    <div class="pa-viewer-row">
      ${avatar}
      <div class="pa-viewer-info">
        <div class="pa-viewer-name">${v.anon ? 'Anonymous viewer' : escapeHtml(v.name)}</div>
        <div class="pa-viewer-meta">${v.action} · ${v.time}</div>
      </div>
      <div class="pa-viewer-right">
        <div class="pa-viewer-device">${v.device}</div>
        <div class="pa-viewer-loc">${v.location}</div>
      </div>
    </div>
  `;
}

function paFmt(n) {
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
  return String(n);
}

function paSparkline(data, w = 118, h = 34) {
  const max = Math.max.apply(null, data);
  const min = Math.min.apply(null, data);
  const span = (max - min) || 1;
  const pts = data.map((v, i) => [
    (i / (data.length - 1)) * w,
    h - 4 - ((v - min) / span) * (h - 10)
  ]);
  const line = pts.map(p => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
  const area = `M0,${h} L${line.replace(/ /g, ' L')} L${w},${h} Z`;
  return `
    <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">
      <defs>
        <linearGradient id="paSparkFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#141413" stop-opacity="0.12"/>
          <stop offset="100%" stop-color="#141413" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <polygon points="${area}" fill="url(#paSparkFill)"/>
      <polyline points="${line}" fill="none" stroke="#141413" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
}

function paDrawChart() {
  const chartEl = document.getElementById('paEngChart');
  if (!chartEl) return;
  const d = PA_DATA[paRange] || PA_DATA['7d'];

  // Destroy any previous Apex instance
  if (window.__paChart) {
    try { window.__paChart.destroy(); } catch (e) {}
    window.__paChart = null;
  }

  if (typeof ApexCharts === 'undefined') {
    paFallbackChart(chartEl, d);
    return;
  }

  const opts = {
    chart: {
      type: 'area',
      height: 268,
      toolbar: { show: false },
      fontFamily: 'Inter, -apple-system, sans-serif',
      foreColor: '#666662',
      parentHeightOffset: 0,
      zoom: { enabled: false },
      animations: { enabled: true }
    },
    series: [
      { name: 'Viewers', data: d.viewers },
      { name: 'Upvotes', data: d.upvotes }
    ],
    colors: ['#141413', '#94948E'],
    stroke: { curve: 'smooth', width: [2.5, 2], dashArray: [0, 0] },
    fill: {
      type: 'gradient',
      gradient: { shadeIntensity: 1, opacityFrom: 0.25, opacityTo: 0.02, stops: [0, 95] }
    },
    dataLabels: { enabled: false },
    grid: { borderColor: '#EFEFEA', strokeDashArray: 4, padding: { left: 0, right: 0 } },
    xaxis: {
      categories: d.labels,
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { style: { fontSize: '10px', colors: '#94948E' } }
    },
    yaxis: {
      labels: { formatter: (v) => v >= 1000 ? (v / 1000).toFixed(1).replace(/\.0$/, '') + 'k' : v, style: { fontSize: '10px', colors: '#94948E' } },
      axisBorder: { show: false }
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'left',
      fontSize: '11px',
      markers: { size: 4, shape: 'circle', strokeWidth: 0 },
      itemMargin: { horizontal: 12, vertical: 0 }
    },
    tooltip: { theme: 'light', x: { show: true } }
  };

  window.__paChart = new ApexCharts(chartEl, opts);
  window.__paChart.render();
}

function paFallbackChart(el, d) {
  const w = 560, h = 250, padL = 36, padR = 8, padT = 12, padB = 24;
  const n = d.viewers.length;
  const max = Math.max.apply(null, d.viewers.concat(d.upvotes));
  const innerW = w - padL - padR;
  const innerH = h - padT - padB;
  const px = i => padL + (i / (n - 1 || 1)) * innerW;
  const py = v => padT + (1 - v / max) * innerH;

  const grid = [0, 0.25, 0.5, 0.75, 1].map(f => {
    const y = padT + innerH * f;
    return `<line x1="${padL}" y1="${y}" x2="${padL + innerW}" y2="${y}" stroke="#EFEFEA" stroke-width="1"/>`;
  }).join('');

  const yLab = [0, 0.25, 0.5, 0.75, 1].map(f => {
    const y = padT + innerH * f;
    return `<text x="${padL - 7}" y="${y + 3}" text-anchor="end" font-size="9" fill="#94948E">${Math.round(max * (1 - f))}</text>`;
  }).join('');

  const xLab = d.labels.map((l, i) => {
    if (n > 12 && i % Math.ceil(n / 6) !== 0) return '';
    return `<text x="${px(i)}" y="${h - 6}" text-anchor="middle" font-size="9" fill="#94948E">${l}</text>`;
  }).join('');

  const vline = d.viewers.map((v, i) => `${px(i).toFixed(1)},${py(v).toFixed(1)}`).join(' ');
  const uline = d.upvotes.map((v, i) => `${px(i).toFixed(1)},${py(v).toFixed(1)}`).join(' ');
  const area = `${padL},${padT + innerH} L${vline.replace(/ /g, ' L')} L${padL + innerW},${padT + innerH} Z`;

  el.innerHTML = `
    <svg viewBox="0 0 ${w} ${h}" style="width:100%; height:auto; display:block;">
      ${grid}${yLab}${xLab}
      <polygon points="${area}" fill="rgba(20,20,19,0.06)"/>
      <polyline points="${vline}" fill="none" stroke="#141413" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <polyline points="${uline}" fill="none" stroke="#94948E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3 3"/>
    </svg>
  `;
}

window.renderProductAnalyticsPage = renderProductAnalyticsPage;
window.paSetRange = paSetRange;
window.paExportReport = paExportReport;
window.handleAnalyticsSearch = handleAnalyticsSearch;