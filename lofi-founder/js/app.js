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

  if (pathName.includes('get-started')) {
    pageNav = 'get-started';
  } else if (pathName.includes('product-listing') || pathName.includes('listing') || pathName.includes('product-detail')) {
    pageNav = 'listing';
  } else if (pathName.includes('my-applications') || pathName.includes('application')) {
    pageNav = 'my-applications';
  } else if (pathName.includes('founder-detail') || pathName.includes('network') || pathName.includes('contact')) {
    pageNav = 'network';
  } else if (pathName.includes('watch-data-rooms') || pathName.includes('data-room')) {
    pageNav = 'data-rooms';
  } else if (pathName.includes('investor-tracking') || pathName.includes('investor-pipeline') || pathName.includes('investors') || pathName.includes('crm')) {
    pageNav = 'investors';
  } else if (pathName.includes('deckwale')) {
    pageNav = 'deckwale';
  } else if (pathName.includes('pitch-deck-reviewer') || pathName.includes('deck')) {
    pageNav = 'deck';
  } else if (pathName.includes('startup-news') || pathName.includes('news')) {
    pageNav = 'news';
  } else if (pathName.includes('due-diligence') || pathName.includes('dd-checklist') || pathName.includes('diligence')) {
    pageNav = 'diligence';
  } else if (pathName.includes('grants')) {
    pageNav = 'grants';
  } else if (pathName.includes('problems')) {
    pageNav = 'problems';
  } else if (pathName.includes('challenges')) {
    pageNav = 'challenges';
  } else if (pathName.includes('resources')) {
    pageNav = 'resources';
  } else if (pathName.includes('analytics')) {
    pageNav = 'analytics';
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

  // If on Founder Detail Page, render LinkedIn-style profile
  if (document.getElementById('founderDetailRoot')) {
    renderFounderDetailPage();
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
  if (document.getElementById('founderChallengesList') || document.getElementById('founderChallengesFeed')) {
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

  // If on Watch Data Rooms Page
  if (document.getElementById('watchDataRoomsRoot')) {
    renderWatchDataRoomsPage();
  }

  // Bind App Events
  bindFounderAppEvents();
});

function bindFounderAppEvents() {
  // Keyboard Shortcut: Cmd+[ or Ctrl+[ to toggle sidebar
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === '[') {
      e.preventDefault();
      if (typeof window.toggleSidebar === 'function') {
        window.toggleSidebar();
      }
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
        <a href="./public-product-listing.html" class="btn btn-primary">Back to Product Listing</a>
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

window.playDemoVideoModal = function (name) {
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
window.openModal = function (title, contentHtml) {
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
    overlay.onclick = function (e) {
      if (e.target === overlay) window.closeModal();
    };
  }
  if (typeof lucide !== 'undefined') lucide.createIcons();
};

window.showModal = window.openModal;

window.closeModal = function () {
  const overlay = document.getElementById('modalOverlay');
  if (overlay) overlay.style.display = 'none';
};

window.openDrawer = function (title, subtitle, bodyHtml, footerHtml = '') {
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

window.closeDrawer = function () {
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

window.showToast = function (message, icon = 'info') {
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
    window.location.href = './public-product-listing.html';
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
    ? `<button class="fn-message-btn" onclick="event.stopPropagation(); openFounderDrawer('${f.id}')"><i data-lucide="message-square"></i> Message</button>`
    : `<button class="fn-message-btn locked" onclick="event.stopPropagation(); openFounderDrawer('${f.id}')" title="Messaging requires a verified profile"><i data-lucide="lock"></i> Message</button>`;

  return `
    <div class="fn-row">
      <div class="fn-main fn-clickable" onclick="window.location.href='./founder-detail.html?id=${f.id}'" title="View profile">
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
      <div class="fn-actions">
        ${msgBtn}
        <button class="fn-view-btn" onclick="window.location.href='./founder-detail.html?id=${f.id}'"><i data-lucide="user"></i> View profile</button>
      </div>
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

window.renderFounderNetwork = function (filter) {
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

window.handleFounderSearch = function (input) {
  if (window.renderFounderNetwork) renderFounderNetwork(input.value);
};

function founderById(id) {
  return (window.FOUNDER_NETWORK_ITEMS || []).find(x => x.kind === 'founder' && x.id === id);
}

window.openFounderDrawer = function (id) {
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
        <button class="chat-profile-btn" onclick="closeDrawer(); window.location.href='./founder-detail.html?id=${f.id}'"><i data-lucide="user"></i> Profile</button>
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

window.sendFounderMessage = function (id) {
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

window.openMessagesNavDrawer = function () {
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

/* ══════════════════════════════════════════════════════════════════════════
   FOUNDER DETAILS — LinkedIn-style internal profile page
   (banner, profile photo, identity, actions, about, experience,
    education, founding team, contact info, verification)
   ══════════════════════════════════════════════════════════════════════════ */

window.FOUNDER_DETAILS = {
  'amara-okafor': {
    phone: '+234 803 555 0192',
    country: 'Nigeria',
    city: 'Lagos',
    bio: 'Healthcare technologist and founder building AI-powered maternal care for emerging markets. Over a decade of shipping digital health products across West Africa, where fragmented maternal-care infrastructure puts mothers at risk. Previously scaled a telemedicine product to 210k monthly users before acquisition.',
    experience: [
      { company: 'Nova Health', role: 'Founder & CEO', start: 'Jan 2023', end: 'Present', current: true, desc: 'Leading product, partnerships and fundraising for an AI maternal-care platform serving 40k+ mothers across Nigeria and Kenya.' },
      { company: 'MedEase (Acquired)', role: 'Product Lead', start: 'Mar 2018', end: 'Dec 2022', current: false, desc: 'Built telemedicine triage used by 120+ clinics; scaled monthly users from 4k to 210k before acquisition.' },
      { company: 'Lagos State Ministry of Health', role: 'Health Innovation Specialist', start: 'Jun 2015', end: 'Feb 2018', current: false, desc: 'Ran digital-health pilots across 30 primary health centres in the state.' }
    ],
    education: [
      { institution: 'University of Lagos', course: 'MSc, Health Informatics', start: '2013', end: '2015', current: false },
      { institution: 'Covenant University', course: 'BSc, Computer Science', start: '2009', end: '2013', current: false }
    ],
    team: [
      { name: 'Chidinma Obi', role: 'Co-Founder & COO', email: 'chidinma@novahealth.ai', linkedin: 'https://linkedin.com/in/chidinmaobi' },
      { name: 'Tunde Adeyemi', role: 'Co-Founder & CTO', email: 'tunde@novahealth.ai', linkedin: 'https://linkedin.com/in/tundeadyemi' }
    ]
  },
  'daniel-reyes': {
    phone: '+1 512 555 0187',
    country: 'USA',
    city: 'Austin, Texas',
    bio: 'Product-minded engineer and co-founder of Stackform — the fastest way to ship internal tools. Previously built developer infrastructure at GitHub and led platform engineering at Hashlabs. Passionate about DX, devtools and boring-on-the-outside software.',
    experience: [
      { company: 'Stackform', role: 'Co-Founder & CTO', start: 'Mar 2022', end: 'Present', current: true, desc: 'Designing the runtime, SDK and control plane that powers Stackform\'s internal-tooling platform.' },
      { company: 'Hashlabs', role: 'Senior Software Engineer', start: 'Jun 2018', end: 'Feb 2022', current: false, desc: 'Led the platform team behind a multi-tenant SaaS serving 40k developers.' },
      { company: 'GitHub', role: 'Software Engineer', start: 'Jan 2016', end: 'May 2018', current: false, desc: 'Worked on repository tooling used by millions of developers.' }
    ],
    education: [
      { institution: 'University of Texas at Austin', course: 'BSc, Computer Science', start: '2011', end: '2015', current: false }
    ],
    team: [
      { name: 'Emily Grant', role: 'Co-Founder & CEO', email: 'emily@stackform.dev', linkedin: 'https://linkedin.com/in/emilygrant' },
      { name: 'Marcus Lee', role: 'Co-Founder & Head of Design', email: 'marcus@stackform.dev', linkedin: 'https://linkedin.com/in/marcuslee' }
    ]
  },
  'priya-nair': {
    phone: '+91 98450 12345',
    country: 'India',
    city: 'Bengaluru, Karnataka',
    bio: 'Fintech builder and founder of Finloop — neobanking rails built for gig-economy workers. Ex-product leader at Niyo and Razorpay, with a decade of experience turning complex money movement into simple, delightful products.',
    experience: [
      { company: 'Finloop', role: 'Founder & CEO', start: 'Jun 2021', end: 'Present', current: true, desc: 'Building neobanking infrastructure for gig workers across India, now live in 14 cities.' },
      { company: 'Niyo', role: 'Head of Product', start: 'Jan 2018', end: 'May 2021', current: false, desc: 'Owned product for salary-advance and forex products serving 1.2M customers.' },
      { company: 'Razorpay', role: 'Senior Product Manager', start: 'Aug 2015', end: 'Dec 2017', current: false, desc: 'Shipped payment-link and subscription billing products now used by 300k+ businesses.' }
    ],
    education: [
      { institution: 'IIM Bangalore', course: 'MBA, Finance & Strategy', start: '2013', end: '2015', current: false },
      { institution: 'NIT Trichy', course: 'B.Tech, Computer Science', start: '2008', end: '2012', current: false }
    ],
    team: [
      { name: 'Vikram Rao', role: 'Co-Founder & CTO', email: 'vikram@finloop.in', linkedin: 'https://linkedin.com/in/vikramrao' },
      { name: 'Neha Kulkarni', role: 'Co-Founder & Head of Growth', email: 'neha@finloop.in', linkedin: 'https://linkedin.com/in/nehakulkarni' }
    ]
  },
  'tom-becker': {
    phone: '+49 151 5550 2277',
    country: 'Germany',
    city: 'Berlin',
    bio: 'Climate engineer and founder of Greenlyte — carbon capture that finally makes economic sense. A decade in carbontech, from research at ETH Zürich to leading engineering at Climeworks.',
    experience: [
      { company: 'Greenlyte', role: 'Founder & CEO', start: 'Feb 2022', end: 'Present', current: true, desc: 'Building low-cost direct-air-capture technology with a pilot plant in Germany.' },
      { company: 'Climeworks', role: 'Director of Engineering', start: 'Apr 2018', end: 'Jan 2022', current: false, desc: 'Led the engineering org behind commercial DAC plants in Iceland and Switzerland.' },
      { company: 'Siemens Energy', role: 'Senior Research Engineer', start: 'Sep 2013', end: 'Mar 2018', current: false, desc: 'Developed next-gen carbon-capture processes for industrial point sources.' }
    ],
    education: [
      { institution: 'ETH Zürich', course: 'PhD, Process Engineering', start: '2011', end: '2014', current: false },
      { institution: 'TU München', course: 'MSc, Chemical Engineering', start: '2007', end: '2010', current: false }
    ],
    team: [
      { name: 'Lina Brandt', role: 'Co-Founder & CTO', email: 'lina@greenlyte.co', linkedin: 'https://linkedin.com/in/linabrandt' }
    ]
  },
  'sofia-marino': {
    phone: '+39 02 5550 8834',
    country: 'Italy',
    city: 'Milan',
    bio: 'Design-driven co-founder of Cartwise — headless checkout for modern DTC brands. Former product designer at Shopify and e-commerce lead at Bottega Veneta. Obsessed with conversion, craft and conversion-optimised commerce.',
    experience: [
      { company: 'Cartwise', role: 'Co-Founder', start: 'Sep 2022', end: 'Present', current: true, desc: 'Co-leading product and design for a headless checkout platform used by 900+ DTC brands.' },
      { company: 'Shopify', role: 'Product Designer', start: 'May 2019', end: 'Aug 2022', current: false, desc: 'Designed the one-page checkout now used by a third of Shopify merchants.' },
      { company: 'Bottega Veneta', role: 'E-commerce Lead', start: 'Jan 2016', end: 'Apr 2019', current: false, desc: 'Led the brand\'s DTC e-commerce experience across 12 markets.' }
    ],
    education: [
      { institution: 'Politecnico di Milano', course: 'MSc, Interaction Design', start: '2014', end: '2016', current: false },
      { institution: 'University of Milan', course: 'BA, Art History', start: '2010', end: '2013', current: false }
    ],
    team: [
      { name: 'Marco Ricci', role: 'Co-Founder & CEO', email: 'marco@cartwise.io', linkedin: 'https://linkedin.com/in/marcoricci' },
      { name: 'Giulia Ferrari', role: 'Co-Founder & CMO', email: 'giulia@cartwise.io', linkedin: 'https://linkedin.com/in/giuliaferrari' }
    ]
  },
  'rahul-mehta': {
    phone: '+1 415 555 0166',
    country: 'USA',
    city: 'San Francisco, California',
    bio: 'Founder of AIdentify — enterprise-grade AI identity verification. Previously led identity product at Plaid and was an early PM at Sift. Backed by a simple thesis: trust is the most valuable thing on the internet.',
    experience: [
      { company: 'AIdentify', role: 'Founder & CEO', start: 'Jan 2021', end: 'Present', current: true, desc: 'Building AI identity-verification infrastructure used by 200+ enterprises.' },
      { company: 'Plaid', role: 'Head of Product, Identity', start: 'Feb 2018', end: 'Dec 2020', current: false, desc: 'Launched identity and income products adopted by 8 of the top 10 US banks.' },
      { company: 'Sift', role: 'Product Manager', start: 'Jul 2015', end: 'Jan 2018', current: false, desc: 'Shipped fraud-prevention products protecting $40B+ in annual transactions.' }
    ],
    education: [
      { institution: 'Stanford University', course: 'MS, Management Science & Engineering', start: '2013', end: '2015', current: false },
      { institution: 'IIT Delhi', course: 'B.Tech, Computer Science', start: '2008', end: '2012', current: false }
    ],
    team: [
      { name: 'Meera Patel', role: 'Co-Founder & CTO', email: 'meera@aidentify.ai', linkedin: 'https://linkedin.com/in/meerapatel' }
    ]
  }
};

function fdDefaults(f) {
  return {
    phone: '—',
    country: String(f.location || '').split(',').pop().trim(),
    city: String(f.location || '').split(',')[0].trim(),
    bio: f.tagline || '',
    experience: [{ company: f.company, role: f.designation, start: '—', end: 'Present', current: true, desc: '' }],
    education: [],
    team: []
  };
}

function fdInitials(name) {
  return String(name).split(' ').map(w => w && w[0]).slice(0, 2).join('').toUpperCase();
}

function fdDates(entry) {
  if (entry.start === '—') return entry.end || '';
  const sep = entry.current ? ' – Present' : entry.end ? ` – ${entry.end}` : '';
  return `${entry.start}${sep}`;
}

function fdExpRow(e) {
  return `
    <div class="fd-exp-row">
      <div class="fd-logo">${fdInitials(e.company)}</div>
      <div class="fd-exp-info">
        <div class="fd-exp-role">${escapeHtml(e.role)}</div>
        <div class="fd-exp-company">${escapeHtml(e.company)}</div>
        <div class="fd-exp-dates">${fdDates(e)}</div>
        ${e.desc ? `<p class="fd-exp-desc">${e.desc}</p>` : ''}
      </div>
    </div>`;
}

function fdEduRow(e) {
  return `
    <div class="fd-exp-row">
      <div class="fd-logo">${fdInitials(e.institution)}</div>
      <div class="fd-exp-info">
        <div class="fd-exp-role">${escapeHtml(e.course)}</div>
        <div class="fd-exp-company">${escapeHtml(e.institution)}</div>
        <div class="fd-exp-dates">${e.start}${e.current ? ' – Present' : e.end ? ` – ${e.end}` : ''}</div>
      </div>
    </div>`;
}

function fdTeamRow(m) {
  return `
    <div class="fd-team-row">
      <div class="fd-team-avatar">${fdInitials(m.name)}</div>
      <div class="fd-team-info">
        <div class="fd-team-name">${escapeHtml(m.name)}</div>
        <div class="fd-team-role">${escapeHtml(m.role || 'Co-Founder')}</div>
      </div>
      <div class="fd-team-links">
        ${m.email ? `<a class="fd-team-link" href="mailto:${escapeHtml(m.email)}" title="${escapeHtml(m.email)}"><i data-lucide="mail"></i></a>` : ''}
        ${m.linkedin ? `<a class="fd-team-link" href="${escapeHtml(m.linkedin)}" target="_blank" rel="noopener" title="LinkedIn"><img src="./assets/linkedin.png" class="fn-linkedin-icon" alt="LinkedIn" /></a>` : ''}
      </div>
    </div>`;
}

window.renderFounderDetailPage = function () {
  const root = document.getElementById('founderDetailRoot');
  if (!root) return;

  let id = '';
  try { id = new URLSearchParams(window.location.search).get('id') || ''; } catch (e) { }

  const f = founderById(id);
  if (!f) {
    root.innerHTML = `
      <div style="padding:60px 14px; text-align:center;">
        <div style="font-size:14px; font-weight:800; color:var(--text-dark); margin-bottom:6px;">Founder profile not found</div>
        <div style="font-size:12px; color:var(--text-muted); margin-bottom:18px;">The profile you are looking for may have been removed.</div>
        <button class="btn btn-outline" onclick="window.location.href='./founder-network.html'"><i data-lucide="arrow-left" style="width:13px;height:13px;"></i> Back to founder network</button>
      </div>`;
    if (typeof lucide !== 'undefined') lucide.createIcons();
    return;
  }

  const crumb = document.getElementById('fdBreadcrumbName');
  if (crumb) crumb.textContent = f.name;

  const det = window.FOUNDER_DETAILS[id] || fdDefaults(f);
  const expRows = (det.experience && det.experience.length ? det.experience : fdDefaults(f).experience).map(fdExpRow).join('');
  const eduRows = (det.education || []).length ? det.education.map(fdEduRow).join('') : '<div class="fd-empty">No education added yet. Auto-fill from LinkedIn to populate this section.</div>';
  const teamRows = (det.team || []).length ? det.team.map(fdTeamRow).join('') : '<div class="fd-empty">No co-founders added yet. Use &ldquo;Add member&rdquo; to build your founding team.</div>';

  const verified = !!f.verified;
  const msgBtn = f.messageEnabled
    ? `<button class="btn btn-primary" onclick="openFounderDrawer('${f.id}')"><i data-lucide="message-square" style="width:13px;height:13px;"></i> Message</button>`
    : `<button class="btn btn-primary" onclick="if(window.showToast) window.showToast('Your profile needs to be verified to message.', 'alert')"><i data-lucide="lock" style="width:13px;height:13px;"></i> Message</button>`;

  root.innerHTML = `
    <div class="fd-header-card">
      <div class="fd-banner"></div>
      <div class="fd-header-body">
        <div class="fd-photo-row">
          <div class="fd-avatar-wrap">
            <div class="fd-avatar">
              ${f.avatar ? `<img src="${f.avatar}" alt="${escapeHtml(f.name)}" onerror="this.outerHTML='<div class=\\'fd-avatar-init\\'>${fdInitials(f.name)}</div>'" />` : `<div class="fd-avatar-init">${fdInitials(f.name)}</div>`}
            </div>
            ${verified ? `<span class="fd-verified" title="Verified founder"><i data-lucide="badge-check"></i></span>` : ''}
          </div>
          <div class="fd-identity">
            <div class="fd-name">${escapeHtml(f.name)}</div>
            <div class="fd-headline">${escapeHtml(f.designation)} at ${escapeHtml(f.company)}</div>
            <div class="fd-loc-line">
              <i data-lucide="map-pin" style="width:12px;height:12px;"></i>
              <span>${escapeHtml(det.city)}, ${escapeHtml(det.country)}</span>
              <span class="fd-dot">&middot;</span>
              <span>500+ connections</span>
              <span class="fd-dot">&middot;</span>
              <span>24 mutual connections</span>
            </div>
          </div>
        </div>
        <div class="fd-actions">
          ${msgBtn}
          <button class="btn btn-outline" onclick="if(window.showToast) window.showToast('Connection request sent to ${f.name}', 'success')"><i data-lucide="user-plus" style="width:13px;height:13px;"></i> Connect</button>
          <a class="btn btn-outline" href="${escapeHtml(f.linkedin)}" target="_blank" rel="noopener"><img src="./assets/linkedin.png" class="fn-linkedin-icon" alt="LinkedIn" /> LinkedIn</a>
        </div>
      </div>
    </div>

    <div class="fd-grid">
      <div class="fd-main">

        <div class="fd-card">
          <div class="fd-card-title">About</div>
          <p class="fd-about-text">${escapeHtml(det.bio) || 'No bio yet. Auto-fill from LinkedIn to populate this section.'}</p>
          ${f.tagline ? `<div class="fd-about-tag">${escapeHtml(f.tagline)}</div>` : ''}
        </div>

        <div class="fd-card">
          <div class="fd-card-title">Professional experience</div>
          <div class="fd-list">${expRows}</div>
        </div>

        <div class="fd-card">
          <div class="fd-card-title">Education</div>
          <div class="fd-list">${eduRows}</div>
        </div>

        <div class="fd-card">
          <div class="fd-card-title-row">
            <div class="fd-card-title">Founding team</div>
            <button class="fd-add-btn" onclick="openAddTeamMember('${f.id}')"><i data-lucide="plus" style="width:12px;height:12px;"></i> Add member</button>
          </div>
          <div class="fd-list" id="fdTeamList">${teamRows}</div>
        </div>

      </div>

      <div class="fd-side">

        <div class="fd-card">
          <div class="fd-card-title">Contact info</div>
          <div class="fd-crow">
            <i data-lucide="mail" class="fd-cicon"></i>
            <div class="fd-cbody"><div class="fd-clabel">Official email &middot; verified</div><div class="fd-cval">${escapeHtml(f.email)}</div></div>
          </div>
          <div class="fd-crow">
            <i data-lucide="phone" class="fd-cicon"></i>
            <div class="fd-cbody"><div class="fd-clabel">Contact number</div><div class="fd-cval">${escapeHtml(det.phone)}</div></div>
          </div>
          <div class="fd-crow">
            <i data-lucide="map-pin" class="fd-cicon"></i>
            <div class="fd-cbody"><div class="fd-clabel">Location</div><div class="fd-cval">${escapeHtml(det.city)}, ${escapeHtml(det.country)}</div></div>
          </div>
          <div class="fd-crow">
            <i data-lucide="globe" class="fd-cicon"></i>
            <div class="fd-cbody"><div class="fd-clabel">Website</div><div class="fd-cval"><a href="${escapeHtml(f.website)}" target="_blank" rel="noopener">${escapeHtml(f.website)}</a></div></div>
          </div>
          <div class="fd-crow">
            <img src="./assets/linkedin.png" class="fd-cicon fn-linkedin-icon" alt="LinkedIn" />
            <div class="fd-cbody"><div class="fd-clabel">LinkedIn profile</div><div class="fd-cval"><a href="${escapeHtml(f.linkedin)}" target="_blank" rel="noopener">View profile &rarr;</a></div></div>
          </div>
          <div class="fd-sync-note"><i data-lucide="download" style="width:11px;height:11px;"></i> Auto-filled from LinkedIn profile</div>
        </div>

        <div class="fd-card">
          <div class="fd-card-title">Verification</div>
          <div class="fd-vrow ${verified ? '' : 'dim'}">
            <i data-lucide="badge-check" class="fd-vicon"></i>
            <div class="fd-vbody">
              <div class="fd-vtitle">Official email verified</div>
              <div class="fd-vsub">Sent to ${escapeHtml(f.email)} on sign-up to reduce fake accounts.</div>
            </div>
          </div>
          <div class="fd-vrow ${verified ? '' : 'dim'}">
            <i data-lucide="shield-check" class="fd-vicon"></i>
            <div class="fd-vbody">
              <div class="fd-vtitle">Contact number verified</div>
              <div class="fd-vsub">Confirmed via OTP at registration.</div>
            </div>
          </div>
          <div class="fd-vrow">
            <i data-lucide="user-check" class="fd-vicon"></i>
            <div class="fd-vbody">
              <div class="fd-vtitle">Profile status</div>
              <div class="fd-vsub">${verified ? 'Verified founder' : 'Verification pending'}</div>
            </div>
          </div>
        </div>

        <div class="fd-card">
          <div class="fd-card-title-row">
            <div class="fd-card-title">Profile strength</div>
            <span class="fd-pscore">82%</span>
          </div>
          <div class="fd-pbar"><div class="fd-pfill" style="width:82%;"></div></div>
          <div class="fd-psub">Photo, email, experience and education complete.</div>
        </div>

      </div>
    </div>
  `;

  if (typeof lucide !== 'undefined') lucide.createIcons();
};

function fdEmpty(msg) {
  return `<div class="fd-empty">${msg}</div>`;
}

window.openAddTeamMember = function (id) {
  const f = founderById(id);
  if (!f) return;
  window.openModal(`Add co-founder · ${f.name}`, `
    <p style="font-size:12px; color:var(--text-muted); margin-bottom:14px;">Add a member to the founding team for <strong>${f.name}</strong>.</p>
    <div style="display:flex; flex-direction:column; gap:12px;">
      <div>
        <label style="font-size:11px; font-weight:700; color:var(--text-dark); display:block; margin-bottom:4px;">Full name</label>
        <input type="text" id="fdTeamName" placeholder="e.g. Jane Doe" style="width:100%; padding:8px 10px; border:1px solid var(--border-main); border-radius:6px; font-size:12px; font-family:Inter;" />
      </div>
      <div>
        <label style="font-size:11px; font-weight:700; color:var(--text-dark); display:block; margin-bottom:4px;">Role</label>
        <input type="text" id="fdTeamRole" placeholder="e.g. Co-Founder & CTO" style="width:100%; padding:8px 10px; border:1px solid var(--border-main); border-radius:6px; font-size:12px; font-family:Inter;" />
      </div>
      <div>
        <label style="font-size:11px; font-weight:700; color:var(--text-dark); display:block; margin-bottom:4px;">Official email <span style="font-weight:500; color:var(--text-light);">(optional)</span></label>
        <input type="email" id="fdTeamEmail" placeholder="cofounder@company.com" style="width:100%; padding:8px 10px; border:1px solid var(--border-main); border-radius:6px; font-size:12px; font-family:Inter;" />
      </div>
      <div>
        <label style="font-size:11px; font-weight:700; color:var(--text-dark); display:block; margin-bottom:4px;">LinkedIn profile URL <span style="font-weight:500; color:var(--text-light);">(optional)</span></label>
        <input type="url" id="fdTeamLinkedin" placeholder="https://linkedin.com/in/janedoe" style="width:100%; padding:8px 10px; border:1px solid var(--border-main); border-radius:6px; font-size:12px; font-family:Inter;" />
      </div>
    </div>
    <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:20px;">
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="fdAddTeamMember('${id}')">Add member</button>
    </div>
  `);
};

window.fdAddTeamMember = function (id) {
  const name = (document.getElementById('fdTeamName') || {}).value?.trim?.() || '';
  if (!name) {
    if (window.showToast) window.showToast('Please enter a name for the team member.', 'alert');
    return;
  }
  const role = (document.getElementById('fdTeamRole') || {}).value?.trim?.() || 'Co-Founder';
  const email = (document.getElementById('fdTeamEmail') || {}).value?.trim?.() || '';
  const linkedin = (document.getElementById('fdTeamLinkedin') || {}).value?.trim?.() || '';

  const f = founderById(id);
  if (!window.FOUNDER_DETAILS[id]) window.FOUNDER_DETAILS[id] = fdDefaults(f);
  window.FOUNDER_DETAILS[id].team.push({ name, role, email, linkedin });

  const list = document.getElementById('fdTeamList');
  if (list) {
    const empty = list.querySelector('.fd-empty');
    if (empty) empty.remove();
    list.insertAdjacentHTML('beforeend', fdTeamRow({ name, role, email, linkedin }));
  }
  if (typeof lucide !== 'undefined') lucide.createIcons();
  window.closeModal();
  if (window.showToast) window.showToast(`${name} added to the founding team`, 'success');
};

// Multi-chat drawer is handled by the primary openMessagesNavDrawer system

function escapeHtml(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/* ──────────────────────────────────────────────────────────────────────────
   FOUNDER DETAILS — LinkedIn-style internal profile page
   (banner, profile photo, identity, actions, about, experience,
    education, founding team, contact info, verification)
   ────────────────────────────────────────────────────────────────────────── */
window.FOUNDER_DETAILS = {
  'amara-okafor': {
    phone: '+234 803 555 0192',
    country: 'Nigeria',
    city: 'Lagos',
    bio: 'Healthcare technologist and founder building AI-powered maternal care for emerging markets. Over a decade of shipping digital health products across West Africa, where fragmented maternal-care infrastructure puts mothers at risk. Previously scaled a telemedicine product to 210k monthly users before acquisition.',
    experience: [
      { company: 'Nova Health', role: 'Founder & CEO', start: 'Jan 2023', end: 'Present', current: true, desc: 'Leading product, partnerships and fundraising for an AI maternal-care platform serving 40k+ mothers across Nigeria and Kenya.' },
      { company: 'MedEase (Acquired)', role: 'Product Lead', start: 'Mar 2018', end: 'Dec 2022', current: false, desc: 'Built telemedicine triage used by 120+ clinics; scaled monthly users from 4k to 210k before acquisition.' },
      { company: 'Lagos State Ministry of Health', role: 'Health Innovation Specialist', start: 'Jun 2015', end: 'Feb 2018', current: false, desc: 'Ran digital-health pilots across 30 primary health centres in the state.' }
    ],
    education: [
      { institution: 'University of Lagos', course: 'MSc, Health Informatics', start: '2013', end: '2015', current: false },
      { institution: 'Covenant University', course: 'BSc, Computer Science', start: '2009', end: '2013', current: false }
    ],
    team: [
      { name: 'Chidinma Obi', role: 'Co-Founder & COO', email: 'chidinma@novahealth.ai', linkedin: 'https://linkedin.com/in/chidinmaobi' },
      { name: 'Tunde Adeyemi', role: 'Co-Founder & CTO', email: 'tunde@novahealth.ai', linkedin: 'https://linkedin.com/in/tundeadyemi' }
    ]
  },
  'daniel-reyes': {
    phone: '+1 512 555 0187',
    country: 'USA',
    city: 'Austin, Texas',
    bio: 'Product-minded engineer and co-founder of Stackform — the fastest way to ship internal tools. Previously built developer infrastructure at GitHub and led platform engineering at Hashlabs. Passionate about DX, devtools and boring-on-the-outside software.',
    experience: [
      { company: 'Stackform', role: 'Co-Founder & CTO', start: 'Mar 2022', end: 'Present', current: true, desc: 'Designing the runtime, SDK and control plane that powers Stackform&#39;s internal-tooling platform.' },
      { company: 'Hashlabs', role: 'Senior Software Engineer', start: 'Jun 2018', end: 'Feb 2022', current: false, desc: 'Led the platform team behind a multi-tenant SaaS serving 40k developers.' },
      { company: 'GitHub', role: 'Software Engineer', start: 'Jan 2016', end: 'May 2018', current: false, desc: 'Worked on repository tooling used by millions of developers.' }
    ],
    education: [
      { institution: 'University of Texas at Austin', course: 'BSc, Computer Science', start: '2011', end: '2015', current: false }
    ],
    team: [
      { name: 'Emily Grant', role: 'Co-Founder & CEO', email: 'emily@stackform.dev', linkedin: 'https://linkedin.com/in/emilygrant' },
      { name: 'Marcus Lee', role: 'Co-Founder & Head of Design', email: 'marcus@stackform.dev', linkedin: 'https://linkedin.com/in/marcuslee' }
    ]
  },
  'priya-nair': {
    phone: '+91 98450 12345',
    country: 'India',
    city: 'Bengaluru, Karnataka',
    bio: 'Fintech builder and founder of Finloop — neobanking rails built for gig-economy workers. Ex-product leader at Niyo and Razorpay, with a decade of experience turning complex money movement into simple, delightful products.',
    experience: [
      { company: 'Finloop', role: 'Founder & CEO', start: 'Jun 2021', end: 'Present', current: true, desc: 'Building neobanking infrastructure for gig workers across India, now live in 14 cities.' },
      { company: 'Niyo', role: 'Head of Product', start: 'Jan 2018', end: 'May 2021', current: false, desc: 'Owned product for salary-advance and forex products serving 1.2M customers.' },
      { company: 'Razorpay', role: 'Senior Product Manager', start: 'Aug 2015', end: 'Dec 2017', current: false, desc: 'Shipped payment-link and subscription billing products now used by 300k+ businesses.' }
    ],
    education: [
      { institution: 'IIM Bangalore', course: 'MBA, Finance & Strategy', start: '2013', end: '2015', current: false },
      { institution: 'NIT Trichy', course: 'B.Tech, Computer Science', start: '2008', end: '2012', current: false }
    ],
    team: [
      { name: 'Vikram Rao', role: 'Co-Founder & CTO', email: 'vikram@finloop.in', linkedin: 'https://linkedin.com/in/vikramrao' },
      { name: 'Neha Kulkarni', role: 'Co-Founder & Head of Growth', email: 'neha@finloop.in', linkedin: 'https://linkedin.com/in/nehakulkarni' }
    ]
  },
  'tom-becker': {
    phone: '+49 151 5550 2277',
    country: 'Germany',
    city: 'Berlin',
    bio: 'Climate engineer and founder of Greenlyte — carbon capture that finally makes economic sense. A decade in carbontech, from research at ETH Zürich to leading engineering at Climeworks.',
    experience: [
      { company: 'Greenlyte', role: 'Founder & CEO', start: 'Feb 2022', end: 'Present', current: true, desc: 'Building low-cost direct-air-capture technology with a pilot plant in Germany.' },
      { company: 'Climeworks', role: 'Director of Engineering', start: 'Apr 2018', end: 'Jan 2022', current: false, desc: 'Led the engineering org behind commercial DAC plants in Iceland and Switzerland.' },
      { company: 'Siemens Energy', role: 'Senior Research Engineer', start: 'Sep 2013', end: 'Mar 2018', current: false, desc: 'Developed next-gen carbon-capture processes for industrial point sources.' }
    ],
    education: [
      { institution: 'ETH Zürich', course: 'PhD, Process Engineering', start: '2011', end: '2014', current: false },
      { institution: 'TU München', course: 'MSc, Chemical Engineering', start: '2007', end: '2010', current: false }
    ],
    team: [
      { name: 'Lina Brandt', role: 'Co-Founder & CTO', email: 'lina@greenlyte.co', linkedin: 'https://linkedin.com/in/linabrandt' }
    ]
  },
  'sofia-marino': {
    phone: '+39 02 5550 8834',
    country: 'Italy',
    city: 'Milan',
    bio: 'Design-driven co-founder of Cartwise — headless checkout for modern DTC brands. Former product designer at Shopify and e-commerce lead at Bottega Veneta. Obsessed with conversion, craft and conversion-optimised commerce.',
    experience: [
      { company: 'Cartwise', role: 'Co-Founder', start: 'Sep 2022', end: 'Present', current: true, desc: 'Co-leading product and design for a headless checkout platform used by 900+ DTC brands.' },
      { company: 'Shopify', role: 'Product Designer', start: 'May 2019', end: 'Aug 2022', current: false, desc: 'Designed the one-page checkout now used by a third of Shopify merchants.' },
      { company: 'Bottega Veneta', role: 'E-commerce Lead', start: 'Jan 2016', end: 'Apr 2019', current: false, desc: 'Led the brand&#39;s DTC e-commerce experience across 12 markets.' }
    ],
    education: [
      { institution: 'Politecnico di Milano', course: 'MSc, Interaction Design', start: '2014', end: '2016', current: false },
      { institution: 'University of Milan', course: 'BA, Art History', start: '2010', end: '2013', current: false }
    ],
    team: [
      { name: 'Marco Ricci', role: 'Co-Founder & CEO', email: 'marco@cartwise.io', linkedin: 'https://linkedin.com/in/marcoricci' },
      { name: 'Giulia Ferrari', role: 'Co-Founder & CMO', email: 'giulia@cartwise.io', linkedin: 'https://linkedin.com/in/giuliaferrari' }
    ]
  },
  'rahul-mehta': {
    phone: '+1 415 555 0166',
    country: 'USA',
    city: 'San Francisco, California',
    bio: 'Founder of AIdentify — enterprise-grade AI identity verification. Previously led identity product at Plaid and was an early PM at Sift. Backed by a simple thesis: trust is the most valuable thing on the internet.',
    experience: [
      { company: 'AIdentify', role: 'Founder & CEO', start: 'Jan 2021', end: 'Present', current: true, desc: 'Building AI identity-verification infrastructure used by 200+ enterprises.' },
      { company: 'Plaid', role: 'Head of Product, Identity', start: 'Feb 2018', end: 'Dec 2020', current: false, desc: 'Launched identity and income products adopted by 8 of the top 10 US banks.' },
      { company: 'Sift', role: 'Product Manager', start: 'Jul 2015', end: 'Jan 2018', current: false, desc: 'Shipped fraud-prevention products protecting $40B+ in annual transactions.' }
    ],
    education: [
      { institution: 'Stanford University', course: 'MS, Management Science & Engineering', start: '2013', end: '2015', current: false },
      { institution: 'IIT Delhi', course: 'B.Tech, Computer Science', start: '2008', end: '2012', current: false }
    ],
    team: [
      { name: 'Meera Patel', role: 'Co-Founder & CTO', email: 'meera@aidentify.ai', linkedin: 'https://linkedin.com/in/meerapatel' }
    ]
  }
};

function fdDefaults(f) {
  return {
    phone: '—',
    country: String(f.location || '').split(',').pop().trim(),
    city: String(f.location || '').split(',')[0].trim(),
    bio: f.tagline || '',
    experience: [{ company: f.company, role: f.designation, start: '—', end: 'Present', current: true, desc: '' }],
    education: [],
    team: []
  };
}

function fdInitials(name) {
  return String(name).split(' ').map(w => w && w[0]).slice(0, 2).join('').toUpperCase();
}

function fdDates(entry) {
  if (entry.start === '—') return entry.end || '';
  const sep = entry.current ? ' – Present' : entry.end ? ` – ${entry.end}` : '';
  return `${entry.start}${sep}`;
}

function fdExpRow(e) {
  return `
    <div class="fd-exp-row">
      <div class="fd-logo">${fdInitials(e.company)}</div>
      <div class="fd-exp-info">
        <div class="fd-exp-role">${escapeHtml(e.role)}</div>
        <div class="fd-exp-company">${escapeHtml(e.company)}</div>
        <div class="fd-exp-dates">${fdDates(e)}</div>
        ${e.desc ? `<p class="fd-exp-desc">${e.desc}</p>` : ''}
      </div>
    </div>`;
}

function fdEduRow(e) {
  return `
    <div class="fd-exp-row">
      <div class="fd-logo">${fdInitials(e.institution)}</div>
      <div class="fd-exp-info">
        <div class="fd-exp-role">${escapeHtml(e.course)}</div>
        <div class="fd-exp-company">${escapeHtml(e.institution)}</div>
        <div class="fd-exp-dates">${e.start}${e.current ? ' – Present' : e.end ? ` – ${e.end}` : ''}</div>
      </div>
    </div>`;
}

function fdTeamRow(m) {
  const avatar = m.name
    ? `<div class="fd-team-avatar">${fdInitials(m.name)}</div>`
    : `<div class="fd-team-avatar"><i data-lucide="user" style="width:14px;height:14px;"></i></div>`;
  return `
    <div class="fd-team-row">
      ${avatar}
      <div class="fd-team-info">
        <div class="fd-team-name">${escapeHtml(m.name)}</div>
        <div class="fd-team-role">${escapeHtml(m.role || 'Co-Founder')}</div>
      </div>
      <div class="fd-team-links">
        ${m.email ? `<a class="fd-team-link" href="mailto:${escapeHtml(m.email)}" title="${escapeHtml(m.email)}"><i data-lucide="mail"></i></a>` : ''}
        ${m.linkedin ? `<a class="fd-team-link" href="${escapeHtml(m.linkedin)}" target="_blank" rel="noopener" title="LinkedIn"><img src="./assets/linkedin.png" class="fn-linkedin-icon" alt="LinkedIn" /></a>` : ''}
      </div>
    </div>`;
}

window.renderFounderDetailPage = function () {
  const root = document.getElementById('founderDetailRoot');
  if (!root) return;

  let id = '';
  try { id = new URLSearchParams(window.location.search).get('id') || ''; } catch (e) { }

  const f = founderById(id);
  if (!f) {
    root.innerHTML = `
      <div style="padding:60px 14px; text-align:center;">
        <div style="font-size:14px; font-weight:800; color:var(--text-dark); margin-bottom:6px;">Founder profile not found</div>
        <div style="font-size:12px; color:var(--text-muted); margin-bottom:18px;">The profile you are looking for may have been removed.</div>
        <button class="btn btn-outline" onclick="window.location.href='./founder-network.html'"><i data-lucide="arrow-left" style="width:13px;height:13px;"></i> Back to founder network</button>
      </div>`;
    if (typeof lucide !== 'undefined') lucide.createIcons();
    return;
  }

  const crumb = document.getElementById('fdBreadcrumbName');
  if (crumb) crumb.textContent = f.name;

  const det = window.FOUNDER_DETAILS[id] || fdDefaults(f);
  const expRows = (det.experience && det.experience.length ? det.experience : fdDefaults(f).experience).map(fdExpRow).join('');
  const eduRows = (det.education || []).length ? det.education.map(fdEduRow).join('') : fdEmpty('No education added yet. Auto-fill from LinkedIn to populate this section.');
  const teamRows = (det.team || []).length ? det.team.map(fdTeamRow).join('') : fdEmpty('No co-founders added yet. Use &ldquo;Add member&rdquo; to build your founding team.');

  const verified = !!f.verified;
  const msgBtn = f.messageEnabled
    ? `<button class="btn btn-primary" onclick="openFounderDrawer('${f.id}')"><i data-lucide="message-square" style="width:13px;height:13px;"></i> Message</button>`
    : `<button class="btn btn-primary" onclick="if(window.showToast) window.showToast('Your profile needs to be verified to message.', 'alert')"><i data-lucide="lock" style="width:13px;height:13px;"></i> Message</button>`;

  root.innerHTML = `
    <!-- Profile Header (LinkedIn style) -->
    <div class="fd-header-card">
      <div class="fd-banner"></div>
      <div class="fd-header-body">
        <div class="fd-photo-row">
          <div class="fd-avatar-wrap">
            <div class="fd-avatar">
              ${f.avatar ? `<img src="${f.avatar}" alt="${escapeHtml(f.name)}" onerror="this.outerHTML='<div class=\\'fd-avatar-init\\'>${fdInitials(f.name)}</div>'" />` : `<div class="fd-avatar-init">${fdInitials(f.name)}</div>`}
            </div>
            ${verified ? `<span class="fd-verified" title="Verified founder"><i data-lucide="badge-check"></i></span>` : ''}
          </div>
          <div class="fd-identity">
            <div class="fd-name">${escapeHtml(f.name)}</div>
            <div class="fd-headline">${escapeHtml(f.designation)} at ${escapeHtml(f.company)}</div>
            <div class="fd-loc-line">
              <i data-lucide="map-pin" style="width:12px;height:12px;"></i>
              <span>${escapeHtml(det.city)}, ${escapeHtml(det.country)}</span>
              <span class="fd-dot">&middot;</span>
              <span>500+ connections</span>
              <span class="fd-dot">&middot;</span>
              <span>24 mutual connections</span>
            </div>
          </div>
        </div>
        <div class="fd-actions">
          ${msgBtn}
          <button class="btn btn-outline" onclick="if(window.showToast) window.showToast('Connection request sent to ${f.name}', 'success')"><i data-lucide="user-plus" style="width:13px;height:13px;"></i> Connect</button>
          <a class="btn btn-outline" href="${escapeHtml(f.linkedin)}" target="_blank" rel="noopener"><img src="./assets/linkedin.png" class="fn-linkedin-icon" alt="LinkedIn" /> LinkedIn</a>
        </div>
      </div>
    </div>

    <!-- Main + Side -->
    <div class="fd-grid">
      <div class="fd-main">

        <!-- About -->
        <div class="fd-card">
          <div class="fd-card-title">About</div>
          <p class="fd-about-text">${escapeHtml(det.bio) || 'No bio yet. Auto-fill from LinkedIn to populate this section.'}</p>
          ${f.tagline ? `<div class="fd-about-tag">${escapeHtml(f.tagline)}</div>` : ''}
        </div>

        <!-- Experience -->
        <div class="fd-card">
          <div class="fd-card-title">Professional experience</div>
          <div class="fd-list">${expRows}</div>
        </div>

        <!-- Education -->
        <div class="fd-card">
          <div class="fd-card-title">Education</div>
          <div class="fd-list">${eduRows}</div>
        </div>

        <!-- Founding team -->
        <div class="fd-card">
          <div class="fd-card-title-row">
            <div class="fd-card-title">Founding team</div>
            <button class="fd-add-btn" onclick="openAddTeamMember('${f.id}')"><i data-lucide="plus" style="width:12px;height:12px;"></i> Add member</button>
          </div>
          <div class="fd-list" id="fdTeamList">${teamRows}</div>
        </div>

      </div>

      <div class="fd-side">

        <!-- Contact -->
        <div class="fd-card">
          <div class="fd-card-title">Contact info</div>
          <div class="fd-crow">
            <i data-lucide="mail" class="fd-cicon"></i>
            <div class="fd-cbody"><div class="fd-clabel">Official email · verified</div><div class="fd-cval">${escapeHtml(f.email)}</div></div>
          </div>
          <div class="fd-crow">
            <i data-lucide="phone" class="fd-cicon"></i>
            <div class="fd-cbody"><div class="fd-clabel">Contact number</div><div class="fd-cval">${escapeHtml(det.phone)}</div></div>
          </div>
          <div class="fd-crow">
            <i data-lucide="map-pin" class="fd-cicon"></i>
            <div class="fd-cbody"><div class="fd-clabel">Location</div><div class="fd-cval">${escapeHtml(det.city)}, ${escapeHtml(det.country)}</div></div>
          </div>
          <div class="fd-crow">
            <i data-lucide="globe" class="fd-cicon"></i>
            <div class="fd-cbody"><div class="fd-clabel">Website</div><div class="fd-cval"><a href="${escapeHtml(f.website)}" target="_blank" rel="noopener">${escapeHtml(f.website)}</a></div></div>
          </div>
          <div class="fd-crow">
            <img src="./assets/linkedin.png" class="fd-cicon fn-linkedin-icon" alt="LinkedIn" />
            <div class="fd-cbody"><div class="fd-clabel">LinkedIn profile</div><div class="fd-cval"><a href="${escapeHtml(f.linkedin)}" target="_blank" rel="noopener">View profile &rarr;</a></div></div>
          </div>
          <div class="fd-sync-note"><i data-lucide="download" style="width:11px;height:11px;"></i> Auto-filled from LinkedIn profile</div>
        </div>

        <!-- Verification -->
        <div class="fd-card">
          <div class="fd-card-title">Verification</div>
          <div class="fd-vrow ${verified ? '' : 'dim'}">
            <i data-lucide="badge-check" class="fd-vicon"></i>
            <div class="fd-vbody">
              <div class="fd-vtitle">Official email verified</div>
              <div class="fd-vsub">Sent to ${escapeHtml(f.email)} on sign-up to reduce fake accounts.</div>
            </div>
          </div>
          <div class="fd-vrow ${verified ? '' : 'dim'}">
            <i data-lucide="shield-check" class="fd-vicon"></i>
            <div class="fd-vbody">
              <div class="fd-vtitle">Contact number verified</div>
              <div class="fd-vsub">Confirmed via OTP at registration.</div>
            </div>
          </div>
          <div class="fd-vrow">
            <i data-lucide="user-check" class="fd-vicon"></i>
            <div class="fd-vbody">
              <div class="fd-vtitle">Profile status</div>
              <div class="fd-vsub">${verified ? 'Verified founder' : 'Verification pending'}</div>
            </div>
          </div>
        </div>

        <!-- Profile strength -->
        <div class="fd-card">
          <div class="fd-card-title-row">
            <div class="fd-card-title">Profile strength</div>
            <span class="fd-pscore">82%</span>
          </div>
          <div class="fd-pbar"><div class="fd-pfill" style="width:82%;"></div></div>
          <div class="fd-psub">Photo, email, experience and education complete.</div>
        </div>

      </div>
    </div>
  `;

  if (typeof lucide !== 'undefined') lucide.createIcons();
};

function fdEmpty(msg) {
  return `<div class="fd-empty">${msg}</div>`;
}

window.openAddTeamMember = function (id) {
  const f = founderById(id);
  if (!f) return;
  window.openModal(`Add co-founder · ${f.name}`, `
    <p style="font-size:12px; color:var(--text-muted); margin-bottom:14px;">Add a member to the founding team for <strong>${f.name}</strong>.</p>
    <div style="display:flex; flex-direction:column; gap:12px;">
      <div>
        <label style="font-size:11px; font-weight:700; color:var(--text-dark); display:block; margin-bottom:4px;">Full name</label>
        <input type="text" id="fdTeamName" placeholder="e.g. Jane Doe" style="width:100%; padding:8px 10px; border:1px solid var(--border-main); border-radius:6px; font-size:12px; font-family:Inter;" />
      </div>
      <div>
        <label style="font-size:11px; font-weight:700; color:var(--text-dark); display:block; margin-bottom:4px;">Role</label>
        <input type="text" id="fdTeamRole" placeholder="e.g. Co-Founder & CTO" style="width:100%; padding:8px 10px; border:1px solid var(--border-main); border-radius:6px; font-size:12px; font-family:Inter;" />
      </div>
      <div>
        <label style="font-size:11px; font-weight:700; color:var(--text-dark); display:block; margin-bottom:4px;">Official email <span style="font-weight:500; color:var(--text-light);">(optional)</span></label>
        <input type="email" id="fdTeamEmail" placeholder="cofounder@company.com" style="width:100%; padding:8px 10px; border:1px solid var(--border-main); border-radius:6px; font-size:12px; font-family:Inter;" />
      </div>
      <div>
        <label style="font-size:11px; font-weight:700; color:var(--text-dark); display:block; margin-bottom:4px;">LinkedIn profile URL <span style="font-weight:500; color:var(--text-light);">(optional)</span></label>
        <input type="url" id="fdTeamLinkedin" placeholder="https://linkedin.com/in/janedoe" style="width:100%; padding:8px 10px; border:1px solid var(--border-main); border-radius:6px; font-size:12px; font-family:Inter;" />
      </div>
    </div>
    <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:20px;">
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="fdAddTeamMember('${id}')">Add member</button>
    </div>
  `);
};

window.fdAddTeamMember = function (id) {
  const name = (document.getElementById('fdTeamName') || {}).value?.trim?.() || '';
  if (!name) {
    if (window.showToast) window.showToast('Please enter a name for the team member.', 'alert');
    return;
  }
  const role = (document.getElementById('fdTeamRole') || {}).value?.trim?.() || 'Co-Founder';
  const email = (document.getElementById('fdTeamEmail') || {}).value?.trim?.() || '';
  const linkedin = (document.getElementById('fdTeamLinkedin') || {}).value?.trim?.() || '';

  const f = founderById(id);
  if (!window.FOUNDER_DETAILS[id]) window.FOUNDER_DETAILS[id] = fdDefaults(f);
  window.FOUNDER_DETAILS[id].team.push({ name, role, email, linkedin });

  const list = document.getElementById('fdTeamList');
  if (list) {
    const empty = list.querySelector('.fd-empty');
    if (empty) empty.remove();
    list.insertAdjacentHTML('beforeend', fdTeamRow({ name, role, email, linkedin }));
  }
  if (typeof lucide !== 'undefined') lucide.createIcons();
  window.closeModal();
  if (window.showToast) window.showToast(`${name} added to the founding team`, 'success');
};

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

window.openGrantSupportModal = function (grantId) {
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

window.submitGrantSupportQuery = function (grantId) {
  const input = document.getElementById('grantSupportMsg');
  closeModal();
  if (window.showToast) {
    window.showToast('Grant advisory query submitted. An advisor will reach out shortly.', 'success');
  }
};

window.copyGrantLink = function (grantId) {
  const url = `${window.location.origin}${window.location.pathname.replace(/[^/]*$/, '')}grant-detail.html?id=${grantId}`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url);
  }
  if (window.showToast) {
    window.showToast('Grant detail link copied to clipboard', 'success');
  }
};

window.bookmarkGrant = function (grantId) {
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
window.openProblemDrawer = function (problemId) {
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

window.closeProblemDrawer = function () {
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

window.toggleProblemUpvote = function (problemId, event) {
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

window.copyCurrentProblemLink = function () {
  if (!currentActiveProblemId) return;
  const url = `${window.location.origin}${window.location.pathname.replace(/[^/]*$/, '')}real-market-problems.html?id=${currentActiveProblemId}`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url);
  }
  if (window.showToast) {
    window.showToast('Problem research link copied to clipboard', 'success');
  }
};

window.startValidationWorkflow = function () {
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

let currentRedditSort = 'hot';
let currentRedditCategory = 'all';
let currentRedditType = 'all';
let currentRedditSearch = '';
let activeComposerCategory = 'Fundraising & Pitching';

function renderFounderChallengesPage() {
  const container = document.getElementById('founderChallengesFeed') || document.getElementById('founderChallengesList');
  if (!container) return;

  const countBadge = document.getElementById('challengesCountBadge');
  if (countBadge) {
    countBadge.textContent = `${(window.FOUNDER_CHALLENGES_DATA || []).length} active challenges`;
  }

  filterAndRenderRedditChallenges();
}

window.renderFounderChallengesPage = renderFounderChallengesPage;

function filterAndRenderRedditChallenges() {
  const container = document.getElementById('founderChallengesFeed') || document.getElementById('founderChallengesList');
  if (!container) return;

  let list = [...(window.FOUNDER_CHALLENGES_DATA || [])];

  // 1. Search Filter
  if (currentRedditSearch.trim()) {
    const q = currentRedditSearch.toLowerCase().trim();
    list = list.filter(c =>
      c.title.toLowerCase().includes(q) ||
      c.content.toLowerCase().includes(q) ||
      c.authorName.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q) ||
      (c.tags && c.tags.some(t => t.toLowerCase().includes(q)))
    );
  }

  // 2. Category Filter
  if (currentRedditCategory !== 'all') {
    list = list.filter(c => c.category.toLowerCase() === currentRedditCategory.toLowerCase());
  }

  // 3. Post Type Filter
  if (currentRedditType !== 'all') {
    if (currentRedditType === 'anonymous') {
      list = list.filter(c => c.isAnonymous);
    } else if (currentRedditType === 'identified') {
      list = list.filter(c => !c.isAnonymous);
    }
  }

  // 4. Sort Filter (Hot, New, Top, Discussed)
  if (currentRedditSort === 'new') {
    list.sort((a, b) => (b.id > a.id ? 1 : -1));
  } else if (currentRedditSort === 'top') {
    list.sort((a, b) => (b.likesCount || 0) - (a.likesCount || 0));
  } else if (currentRedditSort === 'discussed') {
    list.sort((a, b) => ((b.answers || []).length) - ((a.answers || []).length));
  } else {
    // 'hot': score based on votes and discussion activity
    list.sort((a, b) => ((b.likesCount || 0) + (b.answers || []).length * 4) - ((a.likesCount || 0) + (a.answers || []).length * 4));
  }

  renderRedditChallengeStream(list, container);
}

window.filterAndRenderRedditChallenges = filterAndRenderRedditChallenges;
window.filterAndRenderChallenges = filterAndRenderRedditChallenges;

function renderRedditChallengeStream(list, container) {
  if (list.length === 0) {
    container.innerHTML = `
      <div class="challenges-empty">
        <i data-lucide="help-circle" class="empty-icon"></i>
        <h4>No challenges found</h4>
        <p>Try adjusting your keyword or topic filter, or share a new challenge above.</p>
        <button class="btn btn-outline" onclick="openSurfaceComposer()" style="font-size:12px; padding:6px 14px;">
          <i data-lucide="plus" style="width:13px; height:13px;"></i>
          <span>Share a challenge</span>
        </button>
      </div>`;
    if (typeof lucide !== 'undefined') lucide.createIcons();
    return;
  }

  container.innerHTML = list.map(c => {
    const isSaved = c.isSaved || false;
    const answers = c.answers || [];
    const answersCount = answers.length;

    return `
      <article class="challenge-row" id="reddit-card-${c.id}">

        <!-- Meta Header -->
        <div class="challenge-head">
          <div class="challenge-meta">
            <div class="challenge-avatar ${c.isAnonymous ? 'anon' : ''}">
              ${c.authorAvatar || (c.isAnonymous ? '🎭' : 'FC')}
            </div>
            <div>
              <div class="challenge-author-line">
                <span class="challenge-author-name">${c.authorName}</span>
                <span class="challenge-author-company">· ${c.companyName}</span>
              </div>
              <div class="challenge-time">${c.postDate}</div>
            </div>
          </div>
          <span class="challenge-cat">${c.category}</span>
        </div>

        <!-- Title -->
        <h2 class="challenge-title" onclick="toggleRedditComments('${c.id}', event)">
          ${c.title}
        </h2>

        <!-- Body (with expand/collapse) -->
        <div class="challenge-body ${c.isExpanded ? 'expanded' : 'collapsed'}" id="reddit-body-${c.id}">
          ${c.content}
        </div>
        ${c.content && c.content.length > 200 ? `
          <button class="challenge-more" onclick="toggleRedditBodyExpand('${c.id}', event)">
            <span>${c.isExpanded ? 'Show less' : 'Read full context'}</span>
            <i data-lucide="${c.isExpanded ? 'chevron-up' : 'chevron-down'}" style="width:12px; height:12px;"></i>
          </button>
        ` : ''}

        <!-- Tags -->
        ${c.tags && c.tags.length > 0 ? `
          <div class="challenge-tags">
            ${c.tags.map(t => `<button class="challenge-tag" onclick="filterByFlair('${t}')">#${t}</button>`).join('')}
          </div>
        ` : ''}

        <!-- Actions -->
        <div class="challenge-actions" onclick="event.stopPropagation();">
          <button class="challenge-action ${c.showAnswers ? 'active' : ''}" onclick="toggleRedditComments('${c.id}', event)" title="View answers and join the discussion">
            <i data-lucide="message-square" style="width:13px; height:13px;"></i>
            <span class="action-count">${answersCount}</span>
            <span>${answersCount === 1 ? 'Answer' : 'Answers'}</span>
          </button>

          <button class="challenge-action" onclick="copyRedditPostLink('${c.id}', event)" title="Copy shareable link">
            <i data-lucide="share-2" style="width:13px; height:13px;"></i>
            <span>Share</span>
          </button>

          <button class="challenge-action ${isSaved ? 'active' : ''}" onclick="toggleRedditSavePost('${c.id}', event)" title="Save for later reference">
            <i data-lucide="bookmark" style="width:13px; height:13px; fill:${isSaved ? 'currentColor' : 'none'};"></i>
            <span>${isSaved ? 'Saved' : 'Save'}</span>
          </button>

          ${!c.isAnonymous ? `
            <button class="challenge-action" onclick="openDirectMentorChat('${c.id}', '${c.authorName}')" title="Open a direct conversation">
              <i data-lucide="message-circle" style="width:13px; height:13px;"></i>
              <span>Message</span>
            </button>
          ` : ''}
        </div>

        <!-- ──────────────────────────────────────────────────────────────────
             ON-SURFACE DISCUSSION THREAD & INLINE COMPOSER
             ────────────────────────────────────────────────────────────────── -->
        ${c.showAnswers ? `
          <div class="challenge-thread" id="reddit-thread-${c.id}" onclick="event.stopPropagation();">
            <div class="thread-header">
              <span class="thread-title">Responses (${answersCount})</span>
              <span class="thread-verified-note"><i data-lucide="shield-check" style="width:11px; height:11px; display:inline;"></i> Verified peer advice</span>
            </div>

            <!-- Inline Reply Composer -->
            <div class="thread-composer">
              <textarea id="reddit-reply-input-${c.id}" class="comment-textarea" placeholder="Write tactical, experience-backed advice for ${c.isAnonymous ? 'this founder' : c.authorName.split(' ')[0]}..."></textarea>
              <div class="thread-composer-footer">
                <div class="replying-as">
                  <span class="composer-author-avatar" style="width:18px; height:18px; font-size:8px;">SC</span>
                  <span>Replying as <strong>Dr. Sarah Chen</strong> (Alpha Health)</span>
                </div>
                <button class="comment-submit-btn" onclick="submitRedditReply('${c.id}', event)">
                  <span>Post Answer</span>
                </button>
              </div>
            </div>

            <!-- Answers Stream -->
            ${answersCount > 0 ? answers.map(ans => `
              <div class="thread-answer">
                <div class="answer-head">
                  <div class="answer-author">
                    <div class="answer-avatar">
                      ${ans.authorAvatar || 'FA'}
                    </div>
                    <div>
                      <div>
                        <span class="answer-name">${ans.authorName}</span>
                        <span class="answer-badge">Verified</span>
                      </div>
                      <div class="answer-role">${ans.authorRole} · ${ans.companyName}</div>
                    </div>
                  </div>
                  <span class="answer-time">${ans.postDate}</span>
                </div>

                <p class="answer-body">${ans.content}</p>

                <div class="answer-actions">
                  <button class="answer-action-link" onclick="handleCommentUpvote('${c.id}', '${ans.id}', this)">
                    <i data-lucide="arrow-big-up" style="width:13px; height:13px;"></i>
                    <span>Helpful (${ans.likesCount || 1})</span>
                  </button>
                  <button class="answer-action-link" onclick="openDirectMentorChat('${ans.id}', '${ans.authorName}')">
                    <i data-lucide="message-circle" style="width:12px; height:12px;"></i>
                    <span>Reply / DM</span>
                  </button>
                </div>
              </div>
            `).join('') : `
              <div style="padding:16px 0 4px; text-align:center; color:var(--text-muted); font-size:12px;">
                No responses yet. Be the first to share tactical advice!
              </div>
            `}

          </div>
        ` : ''}

      </article>
    `;
  }).join('');

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

// ──────────────────────────────────────────────────────────────────────────
// INTERACTIVE REDDIT ACTIONS & COMPOSER CONTROLS
// ──────────────────────────────────────────────────────────────────────────

window.handleRedditSort = function(sortKey, btn) {
  currentRedditSort = sortKey;
  document.querySelectorAll('.sort-tab-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  filterAndRenderRedditChallenges();
};

window.handleRedditCategoryChange = function(cat) {
  currentRedditCategory = cat;
  filterAndRenderRedditChallenges();
};

window.handleRedditTypeChange = function(type) {
  currentRedditType = type;
  filterAndRenderRedditChallenges();
};

window.handleRedditChallengeSearch = function(query) {
  currentRedditSearch = query;
  filterAndRenderRedditChallenges();
};

window.filterByFlair = function(flair) {
  currentRedditSearch = flair;
  const searchInput = document.querySelector('.workspace-search-input');
  if (searchInput) searchInput.value = flair;
  filterAndRenderRedditChallenges();
  if (window.showToast) window.showToast(`Filtered feed by #${flair}`);
};

// On-Surface Composer Controls
window.openSurfaceComposer = function() {
  const card = document.getElementById('surfaceComposerCard');
  const trigger = document.getElementById('composerCollapsedTrigger');
  const form = document.getElementById('composerExpandedForm');

  if (card && trigger && form) {
    card.classList.add('expanded');
    trigger.style.display = 'none';
    form.style.display = 'flex';
    if (typeof lucide !== 'undefined') lucide.createIcons();
    const titleInput = document.getElementById('composerTitleInput');
    if (titleInput) titleInput.focus();
  }
};

window.closeSurfaceComposer = function() {
  const card = document.getElementById('surfaceComposerCard');
  const trigger = document.getElementById('composerCollapsedTrigger');
  const form = document.getElementById('composerExpandedForm');

  if (card && trigger && form) {
    card.classList.remove('expanded');
    trigger.style.display = 'flex';
    form.style.display = 'none';
  }
};

window.selectComposerCategory = function(cat, chip) {
  activeComposerCategory = cat;
  document.querySelectorAll('.composer-cat-chip').forEach(c => c.classList.remove('active'));
  if (chip) chip.classList.add('active');
};

window.handleSurfacePostSubmit = function(e) {
  e.preventDefault();

  const titleInput = document.getElementById('composerTitleInput');
  const contentInput = document.getElementById('composerContentInput');
  const tagsInput = document.getElementById('composerTagsInput');
  const anonCheckbox = document.getElementById('composerAnonCheckbox');

  if (!titleInput || !titleInput.value.trim() || !contentInput || !contentInput.value.trim()) {
    if (window.showToast) window.showToast('Please enter both a title and description.', 'warning');
    return;
  }

  const isAnon = anonCheckbox ? anonCheckbox.checked : false;
  const rawTags = tagsInput && tagsInput.value.trim() ? tagsInput.value.split(',').map(t => t.trim().replace(/^#/, '')) : [activeComposerCategory];

  const newPost = {
    id: `fc-${Date.now()}`,
    isAnonymous: isAnon,
    authorName: isAnon ? 'Anonymous Founder' : 'Dr. Sarah Chen',
    authorAvatar: isAnon ? '🎭' : 'SC',
    authorRole: isAnon ? 'Stealth Founder' : 'Founder & CEO',
    companyName: isAnon ? 'Stealth Startup' : 'Alpha Health 2.0',
    postDate: 'Just now',
    category: activeComposerCategory,
    title: titleInput.value.trim(),
    content: contentInput.value.trim(),
    tags: rawTags,
    likesCount: 1,
    isLiked: true,
    isUpvoted: true,
    isDownvoted: false,
    answersCount: 0,
    showAnswers: true,
    answers: []
  };

  window.FOUNDER_CHALLENGES_DATA = window.FOUNDER_CHALLENGES_DATA || [];
  window.FOUNDER_CHALLENGES_DATA.unshift(newPost);

  // Reset & Close composer
  titleInput.value = '';
  contentInput.value = '';
  if (tagsInput) tagsInput.value = '';
  if (anonCheckbox) anonCheckbox.checked = false;
  closeSurfaceComposer();

  // Re-render feed
  filterAndRenderRedditChallenges();

  if (window.showToast) {
    window.showToast('🎉 Your challenge has been published to the community feed!', 'success');
  }
};

// Reddit Upvote / Downvote Handler
window.handleRedditVote = function(challengeId, direction, event) {
  if (event) event.stopPropagation();

  const post = (window.FOUNDER_CHALLENGES_DATA || []).find(c => c.id === challengeId);
  if (!post) return;

  if (direction === 'up') {
    if (post.isUpvoted) {
      post.isUpvoted = false;
      post.likesCount = Math.max(0, (post.likesCount || 1) - 1);
    } else {
      if (post.isDownvoted) {
        post.isDownvoted = false;
        post.likesCount += 1;
      }
      post.isUpvoted = true;
      post.likesCount += 1;
    }
  } else if (direction === 'down') {
    if (post.isDownvoted) {
      post.isDownvoted = false;
      post.likesCount += 1;
    } else {
      if (post.isUpvoted) {
        post.isUpvoted = false;
        post.likesCount = Math.max(0, post.likesCount - 1);
      }
      post.isDownvoted = true;
      post.likesCount = Math.max(0, (post.likesCount || 0) - 1);
    }
  }

  const scoreElem = document.getElementById(`reddit-score-${post.id}`);
  if (scoreElem) scoreElem.textContent = post.likesCount;

  filterAndRenderRedditChallenges();
};

window.toggleRedditComments = function(challengeId, event) {
  if (event) event.stopPropagation();

  const post = (window.FOUNDER_CHALLENGES_DATA || []).find(c => c.id === challengeId);
  if (!post) return;

  post.showAnswers = !post.showAnswers;
  filterAndRenderRedditChallenges();
};

window.toggleRedditBodyExpand = function(challengeId, event) {
  if (event) event.stopPropagation();

  const post = (window.FOUNDER_CHALLENGES_DATA || []).find(c => c.id === challengeId);
  if (!post) return;

  post.isExpanded = !post.isExpanded;
  filterAndRenderRedditChallenges();
};

window.submitRedditReply = function(challengeId, event) {
  if (event) event.stopPropagation();

  const input = document.getElementById(`reddit-reply-input-${challengeId}`);
  if (!input || !input.value.trim()) {
    if (window.showToast) window.showToast('Please write your advice before posting.', 'warning');
    return;
  }

  const post = (window.FOUNDER_CHALLENGES_DATA || []).find(c => c.id === challengeId);
  if (!post) return;

  const newAnswer = {
    id: `ans-${Date.now()}`,
    authorName: 'Dr. Sarah Chen',
    authorAvatar: 'SC',
    authorRole: 'Founder & CEO',
    companyName: 'Alpha Health 2.0',
    postDate: 'Just now',
    content: input.value.trim(),
    likesCount: 1
  };

  post.answers = post.answers || [];
  post.answers.unshift(newAnswer);
  post.answersCount = post.answers.length;

  filterAndRenderRedditChallenges();

  if (window.showToast) {
    window.showToast('💬 Your answer has been posted to the discussion thread!', 'success');
  }
};

window.handleCommentUpvote = function(challengeId, commentId, btn) {
  if (btn) {
    btn.style.color = '#EA580C';
    btn.innerHTML = '<i data-lucide="arrow-big-up" style="width:13px; height:13px; fill:currentColor;"></i><span>Helpful (+1)</span>';
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }
  if (window.showToast) window.showToast('Marked answer as helpful');
};

window.copyRedditPostLink = function(challengeId, event) {
  if (event) event.stopPropagation();
  if (navigator.clipboard) {
    navigator.clipboard.writeText(window.location.href + `#${challengeId}`).catch(() => {});
  }
  if (window.showToast) window.showToast('🔗 Post link copied to clipboard!');
};

window.toggleRedditSavePost = function(challengeId, event) {
  if (event) event.stopPropagation();

  const post = (window.FOUNDER_CHALLENGES_DATA || []).find(c => c.id === challengeId);
  if (!post) return;

  post.isSaved = !post.isSaved;
  filterAndRenderRedditChallenges();

  if (window.showToast) {
    window.showToast(post.isSaved ? '🔖 Post saved to your bookmarks' : 'Removed from bookmarks');
  }
};

window.openDirectMentorChat = function(mentorId, mentorName) {
  if (typeof openMessagesNavDrawer === 'function') {
    openMessagesNavDrawer();
  } else if (window.showToast) {
    window.showToast(`💬 Opening direct conversation with ${mentorName}...`);
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
      { id: 'inv-2', name: 'Sequoia India', contact: 'shailendra@sequoia.in', stage: 'contacted', amount: 200000, rating: 4, initial: '2026-08-10', followUp: '2026-08-22', notes: [], activity: [], comments: [] },
      { id: 'inv-3', name: 'Lightspeed Venture Partners', contact: 'rahul@lightspeed.vc', stage: 'contacted', amount: 100000, rating: 3, initial: '2026-08-11', followUp: '2026-08-20', notes: [], activity: [], comments: [] },
      { id: 'inv-6', name: 'Andreessen Horowitz', contact: 'partners@a16z.com', stage: 'research', amount: 0, rating: 4, initial: '2026-08-15', followUp: '2026-08-29', notes: [], activity: [], comments: [] },
      { id: 'inv-7', name: 'Accel Partners', contact: 'priya@accel.com', stage: 'meeting', amount: 150000, rating: 5, initial: '2026-08-13', followUp: '2026-08-19', notes: [], activity: [], comments: [] },
      { id: 'inv-8', name: 'Greylock Partners', contact: 'jerry@greylock.com', stage: 'light-dd', amount: 100000, rating: 4, initial: '2026-08-09', followUp: '2026-08-23', notes: [], activity: [], comments: [] },
      { id: 'inv-9', name: 'Bessemer Venture Partners', contact: 'byron@bvp.com', stage: 'partner-meeting', amount: 200000, rating: 5, initial: '2026-08-08', followUp: '2026-08-18', notes: [], activity: [], comments: [] },
      { id: 'inv-10', name: 'Index Ventures', contact: 'danny@indexventures.com', stage: 'term-sheet', amount: 150000, rating: 4, initial: '2026-08-06', followUp: '2026-08-16', notes: [], activity: [], comments: [] },
      { id: 'inv-11', name: 'First Round Capital', contact: 'josh@firstround.com', stage: 'closed', amount: 100000, rating: 5, initial: '2026-07-28', followUp: '', notes: [], activity: [], comments: [] },
      { id: 'inv-12', name: 'GV (Google Ventures)', contact: 'dave@gv.com', stage: 'keep-in-touch', amount: 0, rating: 3, initial: '2026-08-05', followUp: '2026-09-02', notes: [], activity: [], comments: [] },
      { id: 'inv-13', name: 'General Catalyst', contact: 'hemant@generalcatalyst.com', stage: 'passed', amount: 0, rating: 2, initial: '2026-08-01', followUp: '', notes: [], activity: [], comments: [] }
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
      { id: 'inv-5', name: 'Tiger Global', contact: 'bd@tigerglobal.com', stage: 'research', amount: 0, rating: 2, initial: '', followUp: '2026-08-30', notes: [], activity: [], comments: [] },
      { id: 'inv-14', name: 'Kunal Bahl Family Office', contact: 'kunal@bahlfamilyoffice.com', stage: 'contacted', amount: 75000, rating: 3, initial: '2026-08-16', followUp: '2026-08-25', notes: [], activity: [], comments: [] },
      { id: 'inv-15', name: 'Blume Ventures', contact: 'karthik@blume.vc', stage: 'light-dd', amount: 50000, rating: 4, initial: '2026-08-12', followUp: '2026-08-22', notes: [], activity: [], comments: [] }
    ]
  },
  {
    id: 'series-a-prep',
    name: 'Series A Prep',
    currency: 'USD',
    raising: 5000000,
    updated: 'Aug 15, 9:03 PM',
    description: 'Early-stage diligence on Series A candidates.',
    investors: [
      { id: 'inv-16', name: 'Sequoia Capital', contact: 'doug@sequoia.com', stage: 'research', amount: 0, rating: 4, initial: '', followUp: '2026-09-05', notes: [], activity: [], comments: [] },
      { id: 'inv-17', name: 'Battery Ventures', contact: 'dharmesh@battery.com', stage: 'contacted', amount: 0, rating: 3, initial: '2026-08-18', followUp: '2026-08-28', notes: [], activity: [], comments: [] }
    ]
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

    <!-- Condensed stats strip -->
    <div class="inv-stats-strip">
      <div class="inv-strip-item">
        <span class="inv-strip-lbl">Raising</span>
        <span class="inv-strip-val">${invFmt(p.raising, p)}</span>
      </div>
      <span class="inv-strip-sep"></span>
      <div class="inv-strip-item">
        <span class="inv-strip-lbl">Committed</span>
        <span class="inv-strip-val">${invFmt(invPipelineStats(p).committed, p)}</span>
      </div>
      <span class="inv-strip-sep"></span>
      <div class="inv-strip-item">
        <span class="inv-strip-lbl">Investors</span>
        <span class="inv-strip-val">${invPipelineStats(p).count}</span>
      </div>
      <span class="inv-strip-sep"></span>
      <div class="inv-strip-item">
        <span class="inv-strip-lbl">Follow-ups due</span>
        <span class="inv-strip-val">${invPipelineStats(p).followUps}</span>
      </div>
    </div>

    <!-- Layout: Filters Aside + View -->
    <div class="inv-layout">
      <aside class="inv-filters-aside" id="invFiltersAside">
        ${invRenderFilters(p)}
      </aside>
      <div class="inv-main">
        <div id="invPipelineView"></div>
      </div>
    </div>
  `;

  invRenderPipelineView(p);
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function invRenderPipelineView(p) {
  const wrap = document.getElementById('invPipelineView');
  if (!wrap) return;
  const aside = document.getElementById('invFiltersAside');
  if (aside) aside.innerHTML = invRenderFilters(p);
  wrap.innerHTML = invActiveView === 'board' ? invRenderBoard(p) : invRenderList(p);
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function invFilteredInvestors(p) {
  let list = p.investors || [];
  if (invSearchQuery) {
    const q = invSearchQuery.toLowerCase();
    list = list.filter(i =>
      i.name.toLowerCase().includes(q) || (i.contact || '').toLowerCase().includes(q)
    );
  }
  const f = invFilters || {};
  const stages = f.stages || {};
  if (Object.keys(stages).length) {
    list = list.filter(i => stages[i.stage] !== false);
  }
  if (f.minRating) list = list.filter(i => (i.rating || 0) >= f.minRating);
  if (f.committed === 'committed') list = list.filter(i => (Number(i.amount) || 0) > 0);
  if (f.committed === 'uncommitted') list = list.filter(i => !(Number(i.amount) || 0));
  if (f.hasFollowUp) list = list.filter(i => !!i.followUp);
  return list;
}

/* ── FILTERS ASIDE (Amazon-style sidebar) ───────────────────────────────── */
let invFilters = { stages: {}, minRating: 0, committed: 'all', hasFollowUp: false };

function invInitFilters(p) {
  const s = {};
  (INV_STAGES || []).forEach(st => { s[st.id] = true; });
  invFilters.stages = s;
  invFilters.minRating = 0;
  invFilters.committed = 'all';
  invFilters.hasFollowUp = false;
}

function invFilterCount(p) {
  return invFilteredInvestors(p).length;
}

function invRenderFilters(p) {
  if (!invFilters.stages || Object.keys(invFilters.stages).length === 0) invInitFilters(p);
  const counts = {};
  (p.investors || []).forEach(i => { counts[i.stage] = (counts[i.stage] || 0) + 1; });
  const total = (p.investors || []).length;
  const shown = invFilterCount(p);
  return `
    <div class="inv-filters-head">
      <span class="inv-filters-title"><i data-lucide="sliders-horizontal" style="width:12px; height:12px;"></i> Filters</span>
      <button class="inv-filters-clear" onclick="invClearFilters()">Clear all</button>
    </div>

    <div class="inv-filter-section">
      <div class="inv-filter-label">Stage</div>
      <div class="inv-filter-list">
        ${INV_STAGES.map(st => `
          <label class="inv-filter-item">
            <input type="checkbox" class="inv-filter-check" ${invFilters.stages[st.id] ? 'checked' : ''} onchange="invToggleStageFilter('${st.id}', this.checked)" />
            <span class="inv-filter-label-text">${st.label}</span>
            <span class="inv-filter-count">${counts[st.id] || 0}</span>
          </label>`).join('')}
      </div>
    </div>

    <div class="inv-filter-section">
      <div class="inv-filter-label">Rating</div>
      <div class="inv-rating-chips">
        <button class="inv-rating-chip ${invFilters.minRating === 0 ? 'active' : ''}" onclick="invSetMinRating(0)">Any</button>
        <button class="inv-rating-chip ${invFilters.minRating === 3 ? 'active' : ''}" onclick="invSetMinRating(3)">3★ &amp; up</button>
        <button class="inv-rating-chip ${invFilters.minRating === 4 ? 'active' : ''}" onclick="invSetMinRating(4)">4★ &amp; up</button>
        <button class="inv-rating-chip ${invFilters.minRating === 5 ? 'active' : ''}" onclick="invSetMinRating(5)">5★ only</button>
      </div>
    </div>

    <div class="inv-filter-section">
      <div class="inv-filter-label">Commitment</div>
      <div class="inv-filter-list">
        <label class="inv-filter-item">
          <input type="radio" name="invCommit" class="inv-filter-check" ${invFilters.committed === 'all' ? 'checked' : ''} onchange="invSetCommitFilter('all')" />
          <span class="inv-filter-label-text">All investors</span>
        </label>
        <label class="inv-filter-item">
          <input type="radio" name="invCommit" class="inv-filter-check" ${invFilters.committed === 'committed' ? 'checked' : ''} onchange="invSetCommitFilter('committed')" />
          <span class="inv-filter-label-text">Committed</span>
        </label>
        <label class="inv-filter-item">
          <input type="radio" name="invCommit" class="inv-filter-check" ${invFilters.committed === 'uncommitted' ? 'checked' : ''} onchange="invSetCommitFilter('uncommitted')" />
          <span class="inv-filter-label-text">No commitment</span>
        </label>
      </div>
    </div>

    <div class="inv-filter-section">
      <div class="inv-filter-label">Follow-up</div>
      <div class="inv-filter-list">
        <label class="inv-filter-item">
          <input type="checkbox" class="inv-filter-check" ${invFilters.hasFollowUp ? 'checked' : ''} onchange="invSetFollowUpFilter(this.checked)" />
          <span class="inv-filter-label-text">Has follow-up scheduled</span>
          <span class="inv-filter-count">${(p.investors || []).filter(i => i.followUp).length}</span>
        </label>
      </div>
    </div>

    <div class="inv-filters-foot">
      <span class="inv-filters-result">Showing <strong>${shown}</strong> of ${total} investors</span>
    </div>
  `;
}

function invApplyFilters() {
  const p = invCurrentPipeline();
  invRenderPipelineView(p);
}

function invToggleStageFilter(stageId, checked) {
  if (!invFilters.stages) invFilters.stages = {};
  invFilters.stages[stageId] = checked;
  invApplyFilters();
}

function invSetMinRating(r) {
  invFilters.minRating = r;
  invApplyFilters();
}

function invSetCommitFilter(c) {
  invFilters.committed = c;
  invApplyFilters();
}

function invSetFollowUpFilter(checked) {
  invFilters.hasFollowUp = checked;
  invApplyFilters();
}

function invClearFilters() {
  const p = invCurrentPipeline();
  invInitFilters(p);
  invApplyFilters();
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
window.invToggleStageFilter = invToggleStageFilter;
window.invSetMinRating = invSetMinRating;
window.invSetCommitFilter = invSetCommitFilter;
window.invSetFollowUpFilter = invSetFollowUpFilter;
window.invClearFilters = invClearFilters;
window.invApplyFilters = invApplyFilters;

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









/* ==========================================================================
   16. WATCH DATA ROOMS (VDR) — COMPLETE WORKSPACE & DEEP VAULT EXPLORER
   Navbar Breadcrumbs, One-Row Tabs & Actions, Clean Single-Line Tables
   ========================================================================== */

window.WATCH_DATA_ROOMS_DATA = [
  {
    id: 'vdr-seed-lead',
    name: 'Seed Lead Diligence',
    category: 'Seed Round',
    createdOn: 'Aug 12, 2026',
    lastModified: 'Aug 20, 2026',
    investorsCount: 8,
    requireNda: true,
    domainLock: true,
    allowedDomains: 'accel.com, matrixpartners.com',
    isArchived: false,
    documents: [
      { id: 'doc-1', name: 'Alpha_Health_Series_Seed_Cap_Table_Waterfall_2026.xlsx', format: 'xlsx', type: 'Cap Table (XLSX)', date: 'Aug 20, 2026', size: '2.4 MB', views: 24, downloads: 8 },
      { id: 'doc-2', name: 'Alpha_Health_24_Month_Audited_Financial_Model.xlsx', format: 'xlsx', type: 'Financial Model (XLSX)', date: 'Aug 19, 2026', size: '5.8 MB', views: 31, downloads: 11 },
      { id: 'doc-3', name: 'Alpha_Health_Seed_Pitch_Deck_v2.4_Confidential.pdf', format: 'pdf', type: 'Pitch Deck (PDF)', date: 'Aug 18, 2026', size: '12.1 MB', views: 48, downloads: 19 },
      { id: 'doc-4', name: 'Delaware_C_Corp_Certificate_of_Incorporation.pdf', format: 'pdf', type: 'Legal & Corporate (PDF)', date: 'Aug 15, 2026', size: '1.8 MB', views: 14, downloads: 5 },
      { id: 'doc-5', name: 'US_Provisional_Patent_AI_Biomarker_Diagnostics.pdf', format: 'pdf', type: 'Patent & IP (PDF)', date: 'Aug 14, 2026', size: '8.6 MB', views: 19, downloads: 7 },
      { id: 'doc-6', name: 'Enterprise_Pilot_MSA_Agreement_Redacted.pdf', format: 'pdf', type: 'Commercial MSA (PDF)', date: 'Aug 12, 2026', size: '3.5 MB', views: 9, downloads: 3 },
      { id: 'doc-7', name: 'SOC_2_Type_II_Compliance_Report_2026.pdf', format: 'pdf', type: 'SOC 2 & Security (PDF)', date: 'Aug 10, 2026', size: '4.1 MB', views: 16, downloads: 6 },
      { id: 'doc-8', name: 'Key_Management_Employment_IP_Assignment_Agreements.pdf', format: 'pdf', type: 'Legal & Corporate (PDF)', date: 'Aug 08, 2026', size: '2.9 MB', views: 11, downloads: 4 }
    ],
    sharedUsers: [
      { id: 'usr-1', name: 'Elena Rostova (Accel)', email: 'elena@accel.com', accessGivenOn: 'Aug 14, 2026' },
      { id: 'usr-2', name: 'Vikram Mehta (Matrix)', email: 'vikram@matrix.com', accessGivenOn: 'Aug 15, 2026' },
      { id: 'usr-3', name: 'Marc Benioff (Angel)', email: 'marc@benioffholdings.com', accessGivenOn: 'Aug 16, 2026' },
      { id: 'usr-4', name: 'David Sacks (Craft)', email: 'david@craftventures.com', accessGivenOn: 'Aug 17, 2026' },
      { id: 'usr-5', name: 'Aarav Sharma (Peak XV)', email: 'aarav@peakxv.com', accessGivenOn: 'Aug 18, 2026' }
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
      { id: 'hist-4', user: 'Dr. Sarah Chen (Founder)', action: 'Uploaded SOC_2_Type_II_Compliance_Report_2026.pdf', time: 'Aug 10, 2026 · 02:15 PM', location: 'Boston, US (203.0.113.88)' }
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
      { id: 'doc-21', name: 'US_Provisional_Patent_63_892_104_AI_Biomarker.pdf', format: 'pdf', type: 'Patent & IP (PDF)', date: 'Aug 18, 2026', size: '14.2 MB', views: 22, downloads: 7 },
      { id: 'doc-22', name: 'Stanford_Tech_Transfer_Exclusive_License_Agreement.pdf', format: 'pdf', type: 'Legal & Corporate (PDF)', date: 'Aug 15, 2026', size: '4.8 MB', views: 18, downloads: 4 },
      { id: 'doc-23', name: 'Clinical_Trial_Phase_1_Efficacy_Metrics_Report.pdf', format: 'pdf', type: 'Clinical Data (PDF)', date: 'Aug 12, 2026', size: '28.4 MB', views: 35, downloads: 12 },
      { id: 'doc-24', name: 'IRB_Human_Subject_Protocol_Approval_Notice.pdf', format: 'pdf', type: 'Compliance (PDF)', date: 'Aug 10, 2026', size: '1.9 MB', views: 15, downloads: 3 },
      { id: 'doc-25', name: 'PCT_International_Patent_Application_WO2026_09124.pdf', format: 'pdf', type: 'Patent & IP (PDF)', date: 'Aug 05, 2026', size: '8.3 MB', views: 19, downloads: 6 }
    ],
    sharedUsers: [
      { id: 'usr-21', name: 'Jessica Livingston (YC)', email: 'jessica@ycalumni.com', accessGivenOn: 'Aug 01, 2026' },
      { id: 'usr-22', name: 'Dr. Sanjay Gupta (BioTech)', email: 'sanjay@biotechangels.com', accessGivenOn: 'Aug 05, 2026' },
      { id: 'usr-23', name: 'Marcus Vance (Pulse)', email: 'marcus@pulse.vc', accessGivenOn: 'Aug 08, 2026' }
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
      { id: 'doc-31', name: 'KPMG_Compiled_Financial_Statements_2025_2026.pdf', format: 'pdf', type: 'Financial Model (PDF)', date: 'Aug 19, 2026', size: '6.2 MB', views: 28, downloads: 9 },
      { id: 'doc-32', name: 'Carta_Independent_409A_Valuation_Report_Q2_2026.pdf', format: 'pdf', type: 'Financial Model (PDF)', date: 'Aug 14, 2026', size: '3.1 MB', views: 19, downloads: 6 },
      { id: 'doc-33', name: 'Monthly_MRR_Gross_Margin_Cohort_Waterfall.xlsx', format: 'xlsx', type: 'Financial Model (XLSX)', date: 'Aug 10, 2026', size: '4.5 MB', views: 32, downloads: 14 }
    ],
    sharedUsers: [
      { id: 'usr-31', name: 'Rohit Bansal (Titan)', email: 'rohit@titancapital.vc', accessGivenOn: 'Aug 08, 2026' },
      { id: 'usr-32', name: 'Michael Seibel (YC)', email: 'michael@ycombinator.com', accessGivenOn: 'Aug 10, 2026' }
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
      { id: 'doc-41', name: 'Delaware_Certificate_of_Incorporation_Stamped.pdf', format: 'pdf', type: 'Legal & Corporate (PDF)', date: 'Aug 15, 2026', size: '1.4 MB', views: 16, downloads: 4 },
      { id: 'doc-42', name: 'Founder_Stock_Purchase_Agreements_83b_Elections.pdf', format: 'pdf', type: 'Legal & Corporate (PDF)', date: 'Aug 10, 2026', size: '5.2 MB', views: 12, downloads: 3 },
      { id: 'doc-43', name: '2026_Stock_Incentive_Plan_Option_Pool_Summary.pdf', format: 'pdf', type: 'Cap Table (PDF)', date: 'Aug 05, 2026', size: '2.1 MB', views: 20, downloads: 7 }
    ],
    sharedUsers: [
      { id: 'usr-41', name: 'Garry Tan (Initialized)', email: 'garry@initialized.com', accessGivenOn: 'Aug 02, 2026' },
      { id: 'usr-42', name: 'Alexis Ohanian (776)', email: 'alexis@sevensevensix.com', accessGivenOn: 'Aug 05, 2026' }
    ],
    requestedDocs: [
      { id: 'req-41', title: 'Board Consent for 2026 Series Seed Authorized Shares', template: 'Standard Delaware Board Action', requestedBy: 'Garry Tan (Initialized)', requestedOn: 'Aug 12, 2026', uploadedOn: 'Aug 14, 2026', status: 'Fulfilled' }
    ],
    history: [
      { id: 'hist-41', user: 'Garry Tan (Initialized)', action: 'Downloaded Delaware_Certificate_of_Incorporation_Stamped.pdf', time: 'Aug 15, 2026 · 02:20 PM', location: 'San Francisco, US (198.51.100.22)' }
    ]
  },
  {
    id: 'vdr-commercial-msas',
    name: 'Commercial Contracts',
    category: 'Commercial Contracts',
    createdOn: 'Jul 10, 2026',
    lastModified: 'Aug 17, 2026',
    investorsCount: 4,
    requireNda: true,
    domainLock: false,
    allowedDomains: '',
    isArchived: false,
    documents: [
      { id: 'doc-51', name: 'Fortune_500_Enterprise_Master_Services_Agreement_Redacted.pdf', format: 'pdf', type: 'Commercial MSA (PDF)', date: 'Aug 17, 2026', size: '3.8 MB', views: 11, downloads: 3 },
      { id: 'doc-52', name: 'Healthcare_System_Pilot_SOW_Execution_Copy.pdf', format: 'pdf', type: 'Commercial MSA (PDF)', date: 'Aug 12, 2026', size: '2.4 MB', views: 8, downloads: 2 }
    ],
    sharedUsers: [
      { id: 'usr-51', name: 'Marc Benioff (Angel)', email: 'marc@benioffholdings.com', accessGivenOn: 'Aug 12, 2026' }
    ],
    requestedDocs: [
      { id: 'req-51', title: 'Customer Security Questionnaire & SLA Addendum', template: 'Enterprise Vendor Assessment Form', requestedBy: 'Marc Benioff (Angel)', requestedOn: 'Aug 15, 2026', uploadedOn: 'Pending', status: 'Pending Upload' }
    ],
    history: [
      { id: 'hist-51', user: 'Marc Benioff (Angel)', action: 'Viewed Fortune_500_Enterprise_Master_Services_Agreement_Redacted.pdf', time: 'Aug 17, 2026 · 05:00 PM', location: 'San Francisco, US (192.0.2.10)' }
    ]
  },
  {
    id: 'vdr-tech-soc2',
    name: 'Security & SOC 2',
    category: 'IP & Patents',
    createdOn: 'Aug 05, 2026',
    lastModified: 'Aug 21, 2026',
    investorsCount: 7,
    requireNda: true,
    domainLock: true,
    allowedDomains: 'accel.com, matrix.com',
    isArchived: false,
    documents: [
      { id: 'doc-61', name: 'AWS_Multi_Region_Cloud_Architecture_Diagram_2026.pdf', format: 'pdf', type: 'SOC 2 & Security (PDF)', date: 'Aug 21, 2026', size: '7.9 MB', views: 24, downloads: 8 },
      { id: 'doc-62', name: 'Third_Party_Penetration_Test_Executive_Summary.pdf', format: 'pdf', type: 'SOC 2 & Security (PDF)', date: 'Aug 18, 2026', size: '2.8 MB', views: 19, downloads: 5 },
      { id: 'doc-63', name: 'GDPR_HIPAA_Data_Protection_Agreement_Template.pdf', format: 'pdf', type: 'Compliance (PDF)', date: 'Aug 14, 2026', size: '1.7 MB', views: 14, downloads: 4 }
    ],
    sharedUsers: [
      { id: 'usr-61', name: 'Elena Rostova (Accel)', email: 'elena@accel.com', accessGivenOn: 'Aug 16, 2026' }
    ],
    requestedDocs: [
      { id: 'req-61', title: 'SOC 2 Type II Bridge Letter for Q3 2026', template: 'AICPA Standard Bridge Letter', requestedBy: 'Elena Rostova (Accel)', requestedOn: 'Aug 20, 2026', uploadedOn: 'Pending', status: 'Pending Upload' }
    ],
    history: [
      { id: 'hist-61', user: 'Elena Rostova (Accel)', action: 'Downloaded AWS_Multi_Region_Cloud_Architecture_Diagram_2026.pdf', time: 'Aug 21, 2026 · 08:30 AM', location: 'San Francisco, US (192.0.2.45)' }
    ]
  }
];

let currentVdrView = 'grid';
try {
  const savedView = localStorage.getItem('seedicon_vdr_view');
  if (savedView === 'grid' || savedView === 'table') {
    currentVdrView = savedView;
  }
} catch (e) {}

let currentVdrSearch = '';
let currentVdrCategory = 'all';
let currentActiveVaultId = null;
let currentDeepTab = 'documents';

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('vault')) {
  currentActiveVaultId = urlParams.get('vault');
}
if (urlParams.get('tab')) {
  currentDeepTab = urlParams.get('tab');
}

function updateTopNavBreadcrumb() {
  const topNavLeft = document.querySelector('.workspace-top-nav-left');
  if (!topNavLeft) return;

  if (currentActiveVaultId) {
    const vault = (window.WATCH_DATA_ROOMS_DATA || []).find(v => v.id === currentActiveVaultId);
    const vaultName = vault ? vault.name : 'Diligence Vault';
    topNavLeft.innerHTML = `
      <div class="topnav-page-title" style="display:flex; align-items:center; gap:6px;">
        <a onclick="navigateBackToVaultsList()" style="cursor:pointer; display:inline-flex; align-items:center; gap:5px; color:var(--text-muted); font-size:13px; font-weight:600; text-decoration:none;">
          <i data-lucide="folder-lock" style="width:14px; height:14px;"></i>
          <span>Watch Data Rooms</span>
        </a>
        <span style="color:var(--text-light); font-size:12px;">/</span>
        <span style="display:inline-flex; align-items:center; gap:5px; font-weight:800; color:var(--text-dark); font-size:13.5px;">
          <i data-lucide="folder" style="width:14px; height:14px;"></i>
          <span>${escapeHtml(vaultName)}</span>
        </span>
      </div>
    `;
  } else {
    topNavLeft.innerHTML = `
      <div class="topnav-page-title">
        <span class="topnav-page-icon"><i data-lucide="folder-lock" style="width:15px; height:15px;"></i></span>
        <span class="topnav-page-name">Watch Data Rooms</span>
      </div>
    `;
  }

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function renderWatchDataRoomsPage() {
  const root = document.getElementById('watchDataRoomsRoot');
  if (!root) return;

  updateTopNavBreadcrumb();

  if (currentActiveVaultId) {
    renderDeepVaultExplorer(currentActiveVaultId);
  } else {
    renderVaultsListView();
  }
}

window.renderWatchDataRoomsPage = renderWatchDataRoomsPage;

// ──────────────────────────────────────────────────────────────────────────
// 01. VAULTS LIST VIEW (GOOGLE DRIVE GRID OR CONDENSED TABLE)
// ──────────────────────────────────────────────────────────────────────────
function renderVaultsListView() {
  const root = document.getElementById('watchDataRoomsRoot');
  if (!root) return;

  const allVaults = window.WATCH_DATA_ROOMS_DATA || [];
  const activeVaults = allVaults.filter(v => !v.isArchived).length;

  root.innerHTML = `
    <!-- Surface Header Toolbar (No metrics cards) -->
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
        <button class="btn btn-primary" onclick="openVdrDrawer()" style="gap:6px; padding:6px 12px; font-size:12px;">
          <i data-lucide="plus" style="width:13px; height:13px;"></i>
          <span>Create new vault</span>
        </button>
      </div>
    </div>

    <!-- Data Rooms Container (Google Drive Grid or Condensed Table) -->
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
        <div style="width:38px; height:38px; border-radius:50%; background:var(--bg-muted); display:inline-flex; align-items:center; justify-content:center; margin-bottom:10px;">
          <i data-lucide="folder" style="width:18px; height:18px; color:var(--text-muted);"></i>
        </div>
        <h4 style="font-size:14px; font-weight:800; color:var(--text-dark); margin:0 0 4px;">No data rooms found</h4>
        <p style="font-size:12px; color:var(--text-muted); max-width:360px; margin:0 auto 14px;">Try a different search term or create a new vault.</p>
        <button class="btn btn-outline" onclick="openVdrDrawer()" style="font-size:12px; padding:5px 12px;">
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
                <!-- VDR Name (Single Line) -->
                <td>
                  <div class="vdr-cell-name">
                    <svg style="width:16px; height:16px; color:var(--text-dark); flex-shrink:0;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                    </svg>
                    <span>${escapeHtml(v.name)}</span>
                  </div>
                </td>

                <!-- Created On (Single Line) -->
                <td class="vdr-cell-date">
                  ${v.createdOn}
                </td>

                <!-- Last Modified On (Single Line) -->
                <td class="vdr-cell-date">
                  ${v.lastModified}
                </td>

                <!-- No. of Shared Investors (Number only) -->
                <td>
                  <span class="vdr-cell-investor-num">${v.investorsCount}</span>
                </td>

                <!-- Three Dots Menu -->
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
// 02. ONE PAGE DEEP — VAULT EXPLORER (BREADCRUMBS IN NAVBAR, SINGLE ROW TABS & ACTIONS)
// ──────────────────────────────────────────────────────────────────────────

window.navigateToVaultDetail = function(vaultId) {
  currentActiveVaultId = vaultId;
  currentDeepTab = 'documents';

  const newUrl = `${window.location.pathname}?vault=${vaultId}`;
  window.history.pushState({ vaultId }, '', newUrl);

  renderWatchDataRoomsPage();
};

window.navigateBackToVaultsList = function() {
  currentActiveVaultId = null;
  const newUrl = window.location.pathname;
  window.history.pushState({}, '', newUrl);

  renderWatchDataRoomsPage();
};

window.addEventListener('popstate', function() {
  const params = new URLSearchParams(window.location.search);
  currentActiveVaultId = params.get('vault') || null;
  renderWatchDataRoomsPage();
});

function renderDeepVaultExplorer(vaultId) {
  const root = document.getElementById('watchDataRoomsRoot');
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
    <!-- Top Row: Tabs (Left) & Actions (Right) in a single streamlined row -->
    <div class="vdr-deep-toolbar-row">
      
      <!-- 5 Multiple Tabs: Plain text brackets (N) -->
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

      <!-- Actions on the right of the same row -->
      <div class="vdr-deep-actions-right">
        <!-- Upload Document Button -->
        <button class="btn btn-outline" onclick="openUploadDocModal('${vault.id}')" style="gap:5px; font-size:12px; padding:5px 11px;">
          <i data-lucide="upload-cloud" style="width:13px; height:13px;"></i>
          <span>Upload Document</span>
        </button>

        <!-- Share to Investor Button -->
        <button class="btn btn-primary" onclick="openVdrShareDrawer('${vault.id}')" style="gap:5px; font-size:12px; padding:5.5px 12px;">
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

// ──────────────────────────────────────────────────────────────────────────
// TAB 1: DOCUMENTS (COLUMNS: Document Name, Document Type, Date, Size, Analytics, Actions)
// ──────────────────────────────────────────────────────────────────────────
function renderDeepDocumentsTable(vault) {
  const docs = vault.documents || [];

  if (docs.length === 0) {
    return `
      <div style="background:#FFFFFF; border:1px solid var(--border-main); border-radius:10px; padding:48px 20px; text-align:center;">
        <h4 style="font-size:14px; font-weight:800; color:var(--text-dark); margin:0 0 4px;">No documents uploaded yet</h4>
        <p style="font-size:12px; color:var(--text-muted); max-width:360px; margin:0 auto 14px;">Upload due diligence materials, financial audits, or cap tables for investors.</p>
        <button class="btn btn-primary" onclick="openUploadDocModal('${vault.id}')" style="font-size:12px; padding:5px 12px;">
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
            ${docs.map(doc => {
              const format = (doc.format || 'pdf').toLowerCase();
              const isSpreadsheet = format === 'xlsx' || format === 'csv' || format === 'xls';
              return `
                <tr id="doc-row-${doc.id}">
                  <!-- Document Name (Clean: No format badge here!) -->
                  <td>
                    <div class="vdr-cell-name">
                      <i data-lucide="${isSpreadsheet ? 'file-spreadsheet' : 'file-text'}" style="width:15px; height:15px; color:var(--text-dark); flex-shrink:0;"></i>
                      <span title="${escapeHtml(doc.name)}" onclick="openDocPreviewModal('${vault.id}', '${doc.id}')" style="cursor:pointer;" class="vdr-doc-name-clickable">${escapeHtml(doc.name)}</span>
                    </div>
                  </td>

                  <!-- Document Type (e.g. Cap Table (XLSX), Pitch Deck (PDF)) -->
                  <td>
                    <span style="font-size:12px; font-weight:600; color:var(--text-dark);">${doc.type}</span>
                  </td>

                  <!-- Date -->
                  <td class="vdr-cell-date">
                    ${doc.date}
                  </td>

                  <!-- Size -->
                  <td class="vdr-cell-date">
                    ${doc.size}
                  </td>

                  <!-- Analytics Column -->
                  <td>
                    <button class="vdr-analytics-chip" onclick="openDocAnalyticsDrawer('${vault.id}', '${doc.id}')" title="View viewer & download analytics">
                      <i data-lucide="bar-chart-2" style="width:11px; height:11px;"></i>
                      <span>${doc.views} views · ${doc.downloads} DL</span>
                    </button>
                  </td>

                  <!-- Preview & Three Dots Actions -->
                  <td style="text-align:right; position:relative; white-space:nowrap;" onclick="event.stopPropagation();">
                    <button class="vdr-dot-menu-btn" onclick="openDocPreviewModal('${vault.id}', '${doc.id}')" title="Preview document" style="display:inline-flex; margin-right:3px;">
                      <i data-lucide="eye" style="width:13.5px; height:13.5px;"></i>
                    </button>
                    <button class="vdr-dot-menu-btn" onclick="toggleDocDotMenu('${doc.id}', event)" title="Document options" style="display:inline-flex;">
                      <i data-lucide="more-vertical" style="width:14px; height:14px;"></i>
                    </button>

                    <div class="vdr-context-menu" id="doc-menu-${doc.id}">
                      <button class="vdr-menu-item" onclick="openDocPreviewModal('${vault.id}', '${doc.id}')">
                        <i data-lucide="eye" style="width:13px; height:13px;"></i>
                        <span>Preview Document</span>
                      </button>
                      <button class="vdr-menu-item" onclick="openRenameDocModal('${vault.id}', '${doc.id}')">
                        <i data-lucide="edit-2" style="width:13px; height:13px;"></i>
                        <span>Rename Document</span>
                      </button>
                      <button class="vdr-menu-item" onclick="openDocCommentModal('${vault.id}', '${doc.id}')">
                        <i data-lucide="message-square" style="width:13px; height:13px;"></i>
                        <span>Add Note / Comment</span>
                      </button>
                      <button class="vdr-menu-item" onclick="downloadDocFile('${doc.name}')">
                        <i data-lucide="download" style="width:13px; height:13px;"></i>
                        <span>Download</span>
                      </button>
                      <button class="vdr-menu-item" onclick="copyDocLink('${doc.id}')">
                        <i data-lucide="link" style="width:13px; height:13px;"></i>
                        <span>Copy Link</span>
                      </button>
                      <div class="vdr-menu-divider"></div>
                      <button class="vdr-menu-item danger" onclick="deleteDocFile('${vault.id}', '${doc.id}')">
                        <i data-lucide="trash-2" style="width:13px; height:13px;"></i>
                        <span>Delete Document</span>
                      </button>
                    </div>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// ──────────────────────────────────────────────────────────────────────────
// TAB 2: SHARED USERS (COLUMNS: User, Email ID, Access Given On, Three Dots)
// ──────────────────────────────────────────────────────────────────────────
function renderDeepSharedUsersTable(vault) {
  const users = vault.sharedUsers || [];

  if (users.length === 0) {
    return `
      <div style="background:#FFFFFF; border:1px solid var(--border-main); border-radius:10px; padding:40px 20px; text-align:center;">
        <h4 style="font-size:14px; font-weight:800; color:var(--text-dark); margin:0 0 4px;">No shared users yet</h4>
        <p style="font-size:12px; color:var(--text-muted); max-width:360px; margin:0 auto 14px;">Share this data room with evaluating venture partners or angel syndicates.</p>
        <button class="btn btn-primary" onclick="openVdrShareDrawer('${vault.id}')" style="font-size:12px; padding:5px 12px;">
          <i data-lucide="user-plus" style="width:12px; height:12px;"></i>
          <span>Share to Investor</span>
        </button>
      </div>`;
  }

  return `
    <div class="vdr-condensed-table-card">
      <div class="vdr-table-responsive">
        <table class="vdr-condensed-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Email ID</th>
              <th>Access Given On</th>
              <th style="text-align:right; width:48px;"></th>
            </tr>
          </thead>
          <tbody>
            ${users.map(u => `
              <tr id="user-row-${u.id}">
                <!-- User (Single Line) -->
                <td>
                  <div style="font-weight:700; color:var(--text-dark); font-size:12.5px;">${escapeHtml(u.name)}</div>
                </td>

                <!-- Email ID -->
                <td>
                  <span style="font-family:monospace; font-size:11.5px; color:var(--text-muted);">${escapeHtml(u.email)}</span>
                </td>

                <!-- Access Given On -->
                <td class="vdr-cell-date">
                  ${u.accessGivenOn}
                </td>

                <!-- Three Dots Menu to Revoke / Options -->
                <td style="text-align:right; position:relative;" onclick="event.stopPropagation();">
                  <button class="vdr-dot-menu-btn" onclick="toggleUserDotMenu('${u.id}', event)" title="User options">
                    <i data-lucide="more-vertical" style="width:14px; height:14px;"></i>
                  </button>

                  <div class="vdr-context-menu" id="user-menu-${u.id}">
                    <button class="vdr-menu-item" onclick="resendUserInvite('${u.email}')">
                      <i data-lucide="mail" style="width:13px; height:13px;"></i>
                      <span>Resend Invite Link</span>
                    </button>
                    <button class="vdr-menu-item" onclick="copyVdrShareLink('${vault.id}', event)">
                      <i data-lucide="link" style="width:13px; height:13px;"></i>
                      <span>Copy Access Link</span>
                    </button>
                    <div class="vdr-menu-divider"></div>
                    <button class="vdr-menu-item danger" onclick="revokeUserAccess('${vault.id}', '${u.id}')">
                      <i data-lucide="user-x" style="width:13px; height:13px;"></i>
                      <span>Revoke Access</span>
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

// ──────────────────────────────────────────────────────────────────────────
// TAB 3: REQUESTED DOCUMENTS (COLUMNS: Doc Name, Template, Requested By, Requested On, Uploaded On, Status, Actions)
// ──────────────────────────────────────────────────────────────────────────
function renderDeepRequestedDocsTable(vault) {
  const reqs = vault.requestedDocs || [];

  if (reqs.length === 0) {
    return `
      <div style="background:#FFFFFF; border:1px solid var(--border-main); border-radius:10px; padding:40px 20px; text-align:center;">
        <h4 style="font-size:14px; font-weight:800; color:var(--text-dark); margin:0 0 4px;">No requested documents</h4>
        <p style="font-size:12px; color:var(--text-muted); max-width:360px; margin:0 auto;">All requested diligence materials have been fulfilled.</p>
      </div>`;
  }

  return `
    <div class="vdr-condensed-table-card">
      <div class="vdr-table-responsive">
        <table class="vdr-condensed-table">
          <thead>
            <tr>
              <th>Doc Name</th>
              <th>Template</th>
              <th>Requested By</th>
              <th>Requested On</th>
              <th>Uploaded On</th>
              <th>Status</th>
              <th style="text-align:right; width:48px;"></th>
            </tr>
          </thead>
          <tbody>
            ${reqs.map(r => `
              <tr id="req-row-${r.id}">
                <!-- Doc Name (Single Line) -->
                <td>
                  <div class="vdr-cell-name">
                    <i data-lucide="file-question" style="width:14px; height:14px; color:var(--text-dark); flex-shrink:0;"></i>
                    <span title="${escapeHtml(r.title)}">${escapeHtml(r.title)}</span>
                  </div>
                </td>

                <!-- Template (Clickable to view template) -->
                <td>
                  <button class="vdr-template-pill-btn" onclick="openTemplatePreviewModal('${escapeHtml(r.template)}')" title="Click to preview template">
                    <i data-lucide="file-text" style="width:12px; height:12px; color:var(--text-muted);"></i>
                    <span>${escapeHtml(r.template)}</span>
                  </button>
                </td>

                <!-- Requested By -->
                <td>
                  <span style="font-size:12px; font-weight:600; color:var(--text-dark);">${escapeHtml(r.requestedBy)}</span>
                </td>

                <!-- Requested On -->
                <td class="vdr-cell-date">
                  ${r.requestedOn}
                </td>

                <!-- Uploaded On -->
                <td class="vdr-cell-date">
                  ${r.uploadedOn}
                </td>

                <!-- Status Badge -->
                <td>
                  <span class="vdr-status-badge ${r.status.includes('Pending') ? 'pending' : 'fulfilled'}">
                    ${r.status}
                  </span>
                </td>

                <!-- Actions Menu / Upload -->
                <td style="text-align:right; position:relative;" onclick="event.stopPropagation();">
                  <button class="vdr-dot-menu-btn" onclick="toggleReqDotMenu('${r.id}', event)" title="Options">
                    <i data-lucide="more-vertical" style="width:14px; height:14px;"></i>
                  </button>

                  <div class="vdr-context-menu" id="req-menu-${r.id}">
                    <button class="vdr-menu-item" onclick="openTemplatePreviewModal('${escapeHtml(r.template)}')">
                      <i data-lucide="eye" style="width:13px; height:13px;"></i>
                      <span>View Template</span>
                    </button>
                    <button class="vdr-menu-item" onclick="openUploadDocModal('${vault.id}')">
                      <i data-lucide="upload" style="width:13px; height:13px;"></i>
                      <span>Upload Response</span>
                    </button>
                    <button class="vdr-menu-item" onclick="window.showToast && window.showToast('Notified requester about upload status', 'success'); closeAllVdrMenus();">
                      <i data-lucide="bell" style="width:13px; height:13px;"></i>
                      <span>Send Status Update</span>
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

// ──────────────────────────────────────────────────────────────────────────
// TAB 4: SETTINGS (ON-SURFACE ROW LIST, NO BULKY CARDS)
// ──────────────────────────────────────────────────────────────────────────
function renderDeepSettingsSurface(vault) {
  return `
    <div class="vdr-surface-settings-list">
      
      <!-- Row 1: Dynamic Watermarking -->
      <div class="vdr-surface-setting-row">
        <div class="vdr-setting-text">
          <span class="vdr-setting-title">Dynamic PDF Watermarking</span>
          <span class="vdr-setting-desc">Stamps viewer's verified email address and timestamp dynamically onto PDF pages to prevent unauthorized leaking.</span>
        </div>
        <label class="switch-input">
          <input type="checkbox" checked onchange="window.showToast && window.showToast('Watermarking preferences updated', 'success')" />
          <span class="switch-slider"></span>
        </label>
      </div>

      <!-- Row 2: Require NDA -->
      <div class="vdr-surface-setting-row">
        <div class="vdr-setting-text">
          <span class="vdr-setting-title">Require Mutual NDA Signature</span>
          <span class="vdr-setting-desc">Enforces Seedicon standard digital one-click NDA signature before files can be viewed or downloaded.</span>
        </div>
        <label class="switch-input">
          <input type="checkbox" ${vault.requireNda ? 'checked' : ''} onchange="window.showToast && window.showToast('NDA requirement updated', 'success')" />
          <span class="switch-slider"></span>
        </label>
      </div>

      <!-- Row 3: Disable Document Downloads -->
      <div class="vdr-surface-setting-row">
        <div class="vdr-setting-text">
          <span class="vdr-setting-title">Disable Document Downloads</span>
          <span class="vdr-setting-desc">Restricts investors to encrypted in-browser viewing only without local file download permissions.</span>
        </div>
        <label class="switch-input">
          <input type="checkbox" onchange="window.showToast && window.showToast('Download permissions updated', 'success')" />
          <span class="switch-slider"></span>
        </label>
      </div>

      <!-- Row 4: Domain Whitelist -->
      <div class="vdr-surface-setting-row">
        <div class="vdr-setting-text" style="flex:1;">
          <span class="vdr-setting-title">Domain Access Whitelist</span>
          <span class="vdr-setting-desc">Only emails matching these domains can enter the vault:</span>
          <div style="display:flex; align-items:center; gap:8px; margin-top:6px;">
            <input type="text" id="surfaceDomainInput" class="vdr-input-text" style="max-width:320px; padding:6px 10px; font-size:12px;" value="${escapeHtml(vault.allowedDomains || 'accel.com, matrixpartners.com')}" />
            <button class="btn btn-outline" onclick="saveSurfaceDomains('${vault.id}')" style="font-size:11.5px; padding:5.5px 10px;">Save Domains</button>
          </div>
        </div>
      </div>

    </div>
  `;
}

window.saveSurfaceDomains = function(vaultId) {
  const input = document.getElementById('surfaceDomainInput');
  const vault = (window.WATCH_DATA_ROOMS_DATA || []).find(v => v.id === vaultId);
  if (vault && input) {
    vault.allowedDomains = input.value.trim();
    if (window.showToast) window.showToast('✨ Domain whitelist saved successfully', 'success');
  }
};

// ──────────────────────────────────────────────────────────────────────────
// TAB 5: HISTORY (ON-SURFACE CONDENSED TABLE)
// ──────────────────────────────────────────────────────────────────────────
function renderDeepHistoryTable(vault) {
  const hist = vault.history || [];

  if (hist.length === 0) {
    return `
      <div style="background:#FFFFFF; border:1px solid var(--border-main); border-radius:10px; padding:40px 20px; text-align:center;">
        <h4 style="font-size:14px; font-weight:800; color:var(--text-dark); margin:0 0 4px;">No history recorded</h4>
        <p style="font-size:12px; color:var(--text-muted); max-width:360px; margin:0 auto;">Access and download events will appear here.</p>
      </div>`;
  }

  return `
    <div class="vdr-condensed-table-card">
      <div class="vdr-table-responsive">
        <table class="vdr-condensed-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Action</th>
              <th>Timestamp</th>
              <th>IP / Location</th>
            </tr>
          </thead>
          <tbody>
            ${hist.map(h => `
              <tr>
                <!-- User (Single Line) -->
                <td>
                  <span style="font-weight:700; color:var(--text-dark); font-size:12.5px;">${escapeHtml(h.user)}</span>
                </td>

                <!-- Action (Single Line) -->
                <td>
                  <span style="font-size:12px; color:var(--text-main);">${escapeHtml(h.action)}</span>
                </td>

                <!-- Timestamp -->
                <td class="vdr-cell-date">
                  ${h.time}
                </td>

                <!-- IP / Location -->
                <td>
                  <span style="font-family:monospace; font-size:11px; color:var(--text-muted);">${escapeHtml(h.location || 'San Francisco, US')}</span>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// ──────────────────────────────────────────────────────────────────────────
// 03. SHARE TO INVESTOR DRAWER HANDLERS & CONFIRMATION
// ──────────────────────────────────────────────────────────────────────────

window.openVdrShareDrawer = function(vaultId, event) {
  if (event) event.stopPropagation();
  closeAllVdrMenus();

  const backdrop = document.getElementById('vdrShareDrawerBackdrop');
  const targetVaultId = vaultId || currentActiveVaultId || 'vdr-seed-lead';
  window.__currentSharingVaultId = targetVaultId;

  if (backdrop) {
    backdrop.classList.add('open');
    if (typeof lucide !== 'undefined') lucide.createIcons();
    const emailInput = document.getElementById('vdrShareInvestorEmail');
    setTimeout(() => { if (emailInput) emailInput.focus(); }, 120);
  }
};

window.closeVdrShareDrawer = function() {
  const backdrop = document.getElementById('vdrShareDrawerBackdrop');
  if (backdrop) {
    backdrop.classList.remove('open');
  }
};

window.handleVdrShareBackdropClick = function(event) {
  if (event.target.id === 'vdrShareDrawerBackdrop') {
    closeVdrShareDrawer();
  }
};

window.handleVdrShareSubmit = function(event) {
  event.preventDefault();

  const nameInput = document.getElementById('vdrShareInvestorName');
  const typeSelect = document.getElementById('vdrShareInvestorType');
  const emailInput = document.getElementById('vdrShareInvestorEmail');
  const phoneInput = document.getElementById('vdrShareInvestorPhone');

  const email = emailInput ? emailInput.value.trim() : '';
  if (!email) {
    if (window.showToast) window.showToast('Please enter the investor email address.', 'warning');
    return;
  }

  const name = nameInput && nameInput.value.trim() ? nameInput.value.trim() : email.split('@')[0];
  const type = typeSelect ? typeSelect.value : 'Lead VC';
  const phone = phoneInput ? phoneInput.value.trim() : '';

  const vaultId = window.__currentSharingVaultId || currentActiveVaultId || 'vdr-seed-lead';
  const vault = (window.WATCH_DATA_ROOMS_DATA || []).find(v => v.id === vaultId);
  const vaultName = vault ? vault.name : 'Diligence Vault';

  if (confirm(`Confirm Diligence Access:\n\nAre you sure you want to share "${vaultName}" with ${name} (${email})?`)) {
    if (vault) {
      vault.sharedUsers = vault.sharedUsers || [];
      vault.sharedUsers.unshift({
        id: `usr-${Date.now()}`,
        name: name,
        email: email,
        accessGivenOn: 'Just now'
      });
      vault.investorsCount = (vault.investorsCount || 0) + 1;
      vault.lastModified = 'Just now';
    }

    closeVdrShareDrawer();
    renderWatchDataRoomsPage();

    if (window.showToast) {
      window.showToast(`🎉 Diligence invite & secure NDA link sent to ${email}!`, 'success');
    }
  }
};

window.resendUserInvite = function(email) {
  closeAllVdrMenus();
  if (window.showToast) {
    window.showToast(`📨 Re-sent invite link to ${email}`, 'success');
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 04. DOCUMENT ACTIONS: RENAME, DOWNLOAD, COMMENT, ANALYTICS & MULTI-FILE UPLOAD
// ──────────────────────────────────────────────────────────────────────────

window.openRenameDocModal = function(vaultId, docId) {
  closeAllVdrMenus();
  const vault = (window.WATCH_DATA_ROOMS_DATA || []).find(v => v.id === vaultId);
  const doc = vault ? (vault.documents || []).find(d => d.id === docId) : null;
  if (!doc) return;

  if (typeof openModal === 'function') {
    openModal('Rename Document', `
      <form onsubmit="handleRenameDocSubmit(event, '${vaultId}', '${docId}')" style="display:flex; flex-direction:column; gap:12px;">
        <div class="vdr-field-group">
          <label class="vdr-field-label">Document Name</label>
          <input type="text" id="renameDocInput" class="vdr-input-text" value="${escapeHtml(doc.name)}" required />
        </div>
        <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:4px;">
          <button type="button" class="btn btn-outline" onclick="closeModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">Save Name</button>
        </div>
      </form>
    `);
    setTimeout(() => {
      const inp = document.getElementById('renameDocInput');
      if (inp) inp.select();
    }, 100);
  }
};

window.handleRenameDocSubmit = function(event, vaultId, docId) {
  event.preventDefault();
  const input = document.getElementById('renameDocInput');
  if (!input || !input.value.trim()) return;

  const vault = (window.WATCH_DATA_ROOMS_DATA || []).find(v => v.id === vaultId);
  const doc = vault ? (vault.documents || []).find(d => d.id === docId) : null;
  if (doc) {
    const newName = input.value.trim();
    doc.name = newName;
    const format = newName.toLowerCase().endsWith('.xlsx') ? 'xlsx' : (newName.toLowerCase().endsWith('.docx') ? 'docx' : 'pdf');
    doc.format = format;
    vault.lastModified = 'Just now';

    if (typeof closeModal === 'function') closeModal();
    renderWatchDataRoomsPage();

    if (window.showToast) {
      window.showToast(`✨ Document renamed to "${newName}"`, 'success');
    }
  }
};

window.downloadDocFile = function(fileName) {
  closeAllVdrMenus();
  if (window.showToast) {
    window.showToast(`⬇️ Downloading ${fileName}...`, 'success');
  }
};

window.copyDocLink = function(docId) {
  closeAllVdrMenus();
  const link = `${window.location.origin}${window.location.pathname}?doc=${docId}`;
  if (navigator.clipboard) navigator.clipboard.writeText(link).catch(() => {});
  if (window.showToast) {
    window.showToast('🔗 Secure document link copied to clipboard!', 'success');
  }
};

window.deleteDocFile = function(vaultId, docId) {
  closeAllVdrMenus();
  const vault = (window.WATCH_DATA_ROOMS_DATA || []).find(v => v.id === vaultId);
  if (!vault) return;

  if (confirm('Are you sure you want to delete this document from the vault?')) {
    vault.documents = (vault.documents || []).filter(d => d.id !== docId);
    vault.lastModified = 'Just now';
    renderWatchDataRoomsPage();
    if (window.showToast) {
      window.showToast('🗑️ Document removed from vault.');
    }
  }
};

window.openDocCommentModal = function(vaultId, docId) {
  closeAllVdrMenus();
  const vault = (window.WATCH_DATA_ROOMS_DATA || []).find(v => v.id === vaultId);
  const doc = vault ? (vault.documents || []).find(d => d.id === docId) : null;
  const docTitle = doc ? doc.name : 'Document';

  if (typeof openModal === 'function') {
    openModal(`Add Diligence Note — ${docTitle}`, `
      <div style="display:flex; flex-direction:column; gap:12px;">
        <label class="form-label" style="font-size:12px; font-weight:700;">Internal Note for Co-Founders &amp; Evaluators</label>
        <textarea id="docCommentInput" class="vdr-textarea" placeholder="e.g. Updated with Q2 Carta 409A appraisal and audited stock options waterfall..."></textarea>
        <div style="display:flex; justify-content:flex-end; gap:8px;">
          <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
          <button class="btn btn-primary" onclick="window.showToast && window.showToast('💬 Diligence note saved', 'success'); closeModal();">Save Note</button>
        </div>
      </div>
    `);
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 04-B. DOCUMENT ANALYTICS RIGHT DRAWER (2-COLUMN MASTER-DETAIL LAYOUT)
// ──────────────────────────────────────────────────────────────────────────

window.__currentAnalyticsVaultId = null;
window.__currentAnalyticsDocId = null;
window.__activeAnalyticsViewerId = 'all';
window.__currentApexChartInstance = null;

window.openDocAnalyticsDrawer = function(vaultId, docId) {
  closeAllVdrMenus();
  window.__currentAnalyticsVaultId = vaultId;
  window.__currentAnalyticsDocId = docId;
  window.__activeAnalyticsViewerId = 'all';

  const vault = (window.WATCH_DATA_ROOMS_DATA || []).find(v => v.id === vaultId);
  const doc = vault ? (vault.documents || []).find(d => d.id === docId) : null;
  if (!doc) return;

  const backdrop = document.getElementById('vdrAnalyticsDrawerBackdrop');
  const headerName = document.getElementById('vdrAnalyticsDocNameHeader');
  if (headerName) headerName.textContent = doc.name;

  if (backdrop) {
    backdrop.classList.add('open');
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }

  renderAnalyticsDrawerContent();
};

window.openDocAnalyticsModal = window.openDocAnalyticsDrawer;

window.closeVdrAnalyticsDrawer = function() {
  const backdrop = document.getElementById('vdrAnalyticsDrawerBackdrop');
  if (backdrop) backdrop.classList.remove('open');
  if (window.__currentApexChartInstance) {
    try { window.__currentApexChartInstance.destroy(); } catch (e) {}
    window.__currentApexChartInstance = null;
  }
};

window.handleVdrAnalyticsBackdropClick = function(event) {
  if (event.target.id === 'vdrAnalyticsDrawerBackdrop') {
    closeVdrAnalyticsDrawer();
  }
};

function getDocAnalyticsData(vaultId, docId) {
  const vault = (window.WATCH_DATA_ROOMS_DATA || []).find(v => v.id === vaultId);
  const doc = vault ? (vault.documents || []).find(d => d.id === docId) : null;
  if (!doc) return null;

  const pages = [
    'Page 1 (Cover)',
    'Page 2 (Exec Summary)',
    'Page 3 (Market & TAM)',
    'Page 4 (Product Architecture)',
    'Page 5 (Unit Econ & Growth)',
    'Page 6 (Cap Table Waterfall)',
    'Page 7 (Team & Advisors)',
    'Page 8 (Use of Proceeds)'
  ];

  const viewers = [
    {
      id: 'usr-1',
      name: 'Elena Rostova',
      firm: 'Accel Partners',
      email: 'elena@accel.com',
      avatarImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&fit=crop&crop=faces',
      views: 4,
      downloads: 1,
      avgTime: '4m 12s',
      totalTime: '16m 48s',
      lastActive: 'Aug 20, 2026 · 10:45 AM',
      completionRate: 100,
      ndaStatus: 'Signed NDA',
      pageTimes: [25, 45, 80, 110, 252, 190, 60, 45]
    },
    {
      id: 'usr-2',
      name: 'Vikram Mehta',
      firm: 'Matrix Partners',
      email: 'vikram@matrix.com',
      avatarImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=faces',
      views: 3,
      downloads: 0,
      avgTime: '2m 50s',
      totalTime: '8m 30s',
      lastActive: 'Aug 20, 2026 · 09:12 AM',
      completionRate: 75,
      ndaStatus: 'Signed NDA',
      pageTimes: [20, 35, 60, 85, 170, 95, 30, 15]
    },
    {
      id: 'usr-3',
      name: 'David Sacks',
      firm: 'Craft Ventures',
      email: 'david@craftventures.com',
      avatarImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&crop=faces',
      views: 2,
      downloads: 1,
      avgTime: '3m 15s',
      totalTime: '6m 30s',
      lastActive: 'Aug 19, 2026 · 02:40 PM',
      completionRate: 62,
      ndaStatus: 'Signed NDA',
      pageTimes: [15, 40, 50, 70, 140, 60, 20, 10]
    },
    {
      id: 'usr-4',
      name: 'Marc Benioff',
      firm: 'Angel Investor',
      email: 'marc@benioffholdings.com',
      avatarImg: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=faces',
      views: 1,
      downloads: 0,
      avgTime: '1m 45s',
      totalTime: '1m 45s',
      lastActive: 'Aug 16, 2026 · 04:15 PM',
      completionRate: 38,
      ndaStatus: 'Signed NDA',
      pageTimes: [30, 25, 30, 20, 0, 0, 0, 0]
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

  // Aggregate global page times
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

function renderAnalyticsDrawerContent() {
  const body = document.getElementById('vdrAnalyticsDrawerBody');
  if (!body) return;

  const data = getDocAnalyticsData(window.__currentAnalyticsVaultId, window.__currentAnalyticsDocId);
  if (!data) {
    body.innerHTML = '<p style="font-size:12px; color:var(--text-muted); padding:20px;">No analytics data available.</p>';
    return;
  }

  const { doc, pages, viewers, aggregate } = data;
  const isGlobal = window.__activeAnalyticsViewerId === 'all';
  const selectedViewer = isGlobal ? null : viewers.find(v => v.id === window.__activeAnalyticsViewerId) || viewers[0];

  const currentViews = isGlobal ? aggregate.views : selectedViewer.views;
  const currentDownloads = isGlobal ? aggregate.downloads : selectedViewer.downloads;
  const currentAvgTime = isGlobal ? aggregate.avgTime : selectedViewer.avgTime;
  const currentTotalTime = isGlobal ? aggregate.totalTime : selectedViewer.totalTime;
  const currentPageTimes = isGlobal ? aggregate.pageTimes : selectedViewer.pageTimes;

  // Find max dwell page
  let maxTime = -1;
  let maxPageIdx = 0;
  currentPageTimes.forEach((t, idx) => {
    if (t > maxTime) {
      maxTime = t;
      maxPageIdx = idx;
    }
  });
  const maxPageTitle = pages[maxPageIdx] || 'Page 5';
  const maxTimeFormatted = maxTime > 0 ? `${Math.floor(maxTime / 60)}m ${maxTime % 60}s` : '0s';

  body.innerHTML = `
    <div class="vdr-analytics-split-layout">
      
      <!-- 01. LEFT COLUMN: SLIM VIEWERS LIST (Small Avatar + Name Only) -->
      <div class="vdr-analytics-viewers-pane">
        <div class="vdr-viewers-pane-heading">Viewers (${viewers.length})</div>

        <!-- All Viewers Nav Item -->
        <div class="vdr-viewer-nav-item ${isGlobal ? 'active' : ''}" onclick="selectAnalyticsViewer('all')">
          <div class="vdr-viewer-avatar-circle" style="${isGlobal ? 'background:#FFFFFF; color:#141413;' : ''}">
            <i data-lucide="users" style="width:10px; height:10px;"></i>
          </div>
          <span class="vdr-viewer-nav-name">All Viewers</span>
        </div>

        <div style="height:1px; background:var(--border-faint); margin:3px 2px;"></div>

        <!-- Individual Viewers List (Small Avatar + Name Only) -->
        ${viewers.map(v => `
          <div class="vdr-viewer-nav-item ${window.__activeAnalyticsViewerId === v.id ? 'active' : ''}" onclick="selectAnalyticsViewer('${v.id}')">
            <div class="vdr-viewer-avatar-circle"><img src="${v.avatarImg}" class="vdr-viewer-avatar-img" alt="${escapeHtml(v.name)}" /></div>
            <span class="vdr-viewer-nav-name" title="${escapeHtml(v.name)}">${escapeHtml(v.name)}</span>
          </div>
        `).join('')}
      </div>

      <!-- 02. RIGHT COLUMN: MAIN ANALYTICS DETAILS PANEL -->
      <div class="vdr-analytics-details-pane">
        
        <!-- Active Target Header Banner -->
        ${!isGlobal && selectedViewer ? `
          <div class="vdr-selected-viewer-banner">
            <div style="display:flex; align-items:center; gap:10px; min-width:0;">
              <div class="vdr-viewer-avatar-circle" style="width:32px; height:32px;"><img src="${selectedViewer.avatarImg}" class="vdr-viewer-avatar-img" alt="${escapeHtml(selectedViewer.name)}" /></div>
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

        <!-- 4 Condensed KPI Stat Cards -->
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
              <span><strong>Elena Rostova (Accel)</strong> spent 4m 12s on Page 5 (Unit Econ)</span>
              <span style="color:var(--text-muted); font-size:11px;">Today · 10:45 AM</span>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:4px; border-bottom:1px solid var(--border-faint);">
              <span><strong>Vikram Mehta (Matrix)</strong> viewed 6 pages</span>
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

  // Render ApexChart
  setTimeout(() => {
    renderApexPageWiseChart(currentPageTimes, pages, isGlobal ? 'Avg Seconds' : 'Seconds Spent');
  }, 50);
}

window.selectAnalyticsViewer = function(viewerId) {
  window.__activeAnalyticsViewerId = viewerId;
  renderAnalyticsDrawerContent();
};

function renderApexPageWiseChart(dataSeries, categories, seriesName = 'Seconds Spent') {
  const chartContainer = document.getElementById('vdrApexChartContainer');
  if (!chartContainer) return;

  if (window.__currentApexChartInstance) {
    try { window.__currentApexChartInstance.destroy(); } catch (e) {}
    window.__currentApexChartInstance = null;
  }

  if (typeof ApexCharts === 'undefined') {
    chartContainer.innerHTML = '<p style="font-size:12px; color:var(--text-muted); text-align:center; padding:20px;">Chart library loading...</p>';
    return;
  }

  // Find max value to highlight highest dwell bar
  const maxVal = Math.max(...dataSeries);

  const options = {
    series: [{
      name: seriesName,
      data: dataSeries
    }],
    chart: {
      type: 'bar',
      height: 200,
      toolbar: { show: false },
      fontFamily: 'Inter, sans-serif'
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: '45%',
        distributed: true,
        dataLabels: { position: 'top' }
      }
    },
    colors: dataSeries.map(val => (val > 0 && val === maxVal) ? '#141413' : '#94A3B8'),
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        if (val >= 60) {
          return `${Math.floor(val / 60)}m ${val % 60 ? `${val % 60}s` : ''}`;
        }
        return val > 0 ? `${val}s` : '0s';
      },
      offsetY: -18,
      style: {
        fontSize: '10px',
        fontWeight: '700',
        colors: ['#141413']
      }
    },
    legend: { show: false },
    xaxis: {
      categories: categories.map(c => c.split(' (')[0]),
      labels: {
        style: { fontSize: '10.5px', fontWeight: 600, colors: '#64748B' }
      },
      axisBorder: { show: false },
      axisTicks: { show: false }
    },
    yaxis: {
      show: true,
      labels: {
        formatter: function(val) {
          return `${val}s`;
        },
        style: { fontSize: '10px', colors: '#94A3B8' }
      }
    },
    grid: {
      borderColor: '#F1F1EF',
      strokeDashArray: 3,
      padding: { top: 10, right: 10, bottom: 0, left: 10 }
    },
    tooltip: {
      theme: 'light',
      y: {
        formatter: function (val, opts) {
          const pageTitle = categories[opts.dataPointIndex] || `Page ${opts.dataPointIndex + 1}`;
          const mins = Math.floor(val / 60);
          const secs = val % 60;
          return `${mins > 0 ? `${mins}m ` : ''}${secs}s (${pageTitle})`;
        }
      }
    }
  };

  window.__currentApexChartInstance = new ApexCharts(chartContainer, options);
  window.__currentApexChartInstance.render();
}


// 04-C. WATERMARKED DOCUMENT PREVIEW MODAL
// ──────────────────────────────────────────────────────────────────────────

window.previewCurrentAnalyticsDoc = function() {
  const vaultId = window.__currentAnalyticsVaultId;
  const docId = window.__currentAnalyticsDocId;
  openDocPreviewModal(vaultId, docId);
};

window.openDocPreviewModal = function(vaultId, docId) {
  const vault = (window.WATCH_DATA_ROOMS_DATA || []).find(v => v.id === vaultId);
  const doc = vault ? (vault.documents || []).find(d => d.id === docId) : null;
  const docTitle = doc ? doc.name : 'Diligence Document';
  const format = doc ? (doc.format || 'pdf').toUpperCase() : 'PDF';

  if (typeof openModal === 'function') {
    openModal(`Document Preview — ${docTitle}`, `
      <div class="vdr-preview-modal-body">
        
        <!-- Viewer Control Strip -->
        <div class="vdr-preview-toolbar">
          <div style="display:flex; align-items:center; gap:8px;">
            <span style="font-weight:700; color:var(--text-dark);">${format} Viewer</span>
            <span style="color:var(--text-light);">·</span>
            <span style="color:var(--text-muted); font-size:11.5px;">Page 1 of 8</span>
          </div>

          <div style="display:flex; align-items:center; gap:6px;">
            <button class="btn btn-outline" style="padding:3px 7px; font-size:11px;" onclick="window.showToast && window.showToast('Zoom: 100%', 'info')">100%</button>
            <button class="btn btn-outline" style="padding:3px 7px; font-size:11px;" onclick="window.showToast && window.showToast('Fit to Width', 'info')">Fit</button>
            <button class="btn btn-primary" style="padding:3.5px 9px; font-size:11px; gap:4px;" onclick="downloadDocFile('${docTitle}')">
              <i data-lucide="download" style="width:11px; height:11px;"></i>
              <span>Download</span>
            </button>
          </div>
        </div>

        <!-- Watermarked Slide Sheet -->
        <div class="vdr-preview-sheet">
          <div class="vdr-preview-watermark">
            CONFIDENTIAL · SEEDICON VDR<br>STAMPED: ELENA@ACCEL.COM
          </div>

          <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-faint); padding-bottom:12px; margin-bottom:16px;">
            <div style="font-weight:800; font-size:16px; color:var(--text-dark);">${escapeHtml(docTitle.replace(/_/g, ' ').replace('.pdf', '').replace('.xlsx', ''))}</div>
            <div style="font-size:11px; font-weight:700; color:#15803D; background:#DCFCE7; padding:2px 8px; border-radius:4px;">CONFIDENTIAL</div>
          </div>

          <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:12px; margin-bottom:20px;">
            <div style="background:#FAFAF9; border:1px solid var(--border-main); border-radius:6px; padding:10px;">
              <div style="font-size:10.5px; color:var(--text-muted); font-weight:600; text-transform:uppercase;">Key Metric</div>
              <div style="font-size:16px; font-weight:800; color:var(--text-dark); margin-top:2px;">$180K ARR</div>
            </div>
            <div style="background:#FAFAF9; border:1px solid var(--border-main); border-radius:6px; padding:10px;">
              <div style="font-size:10.5px; color:var(--text-muted); font-weight:600; text-transform:uppercase;">MoM Growth</div>
              <div style="font-size:16px; font-weight:800; color:#15803D; margin-top:2px;">+38% MoM</div>
            </div>
            <div style="background:#FAFAF9; border:1px solid var(--border-main); border-radius:6px; padding:10px;">
              <div style="font-size:10.5px; color:var(--text-muted); font-weight:600; text-transform:uppercase;">Net Retention</div>
              <div style="font-size:16px; font-weight:800; color:var(--text-dark); margin-top:2px;">134% NDR</div>
            </div>
          </div>

          <div style="font-size:12px; color:var(--text-main); line-height:1.6; display:flex; flex-direction:column; gap:8px;">
            <p><strong>Executive Summary:</strong> Proprietary AI diagnostic biomarker platform generating high-margin enterprise SaaS revenue across 4 institutional hospital systems.</p>
            <p><strong>Diligence Notes:</strong> Verified audited waterfall cap table reflecting post-money valuation cap and option pool reservation.</p>
          </div>

          <!-- Bottom Pagination Controls -->
          <div style="margin-top:auto; display:flex; justify-content:space-between; align-items:center; padding-top:16px; border-top:1px solid var(--border-faint);">
            <button class="btn btn-outline" style="font-size:11px; padding:4px 10px;" onclick="window.showToast && window.showToast('Already on first page', 'info')">← Previous Slide</button>
            <span style="font-size:11.5px; color:var(--text-muted); font-weight:600;">Slide 1 of 8</span>
            <button class="btn btn-outline" style="font-size:11px; padding:4px 10px;" onclick="window.showToast && window.showToast('Navigated to Slide 2', 'success')">Next Slide →</button>
          </div>
        </div>

      </div>
    `);
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }
};


// ──────────────────────────────────────────────────────────────────────────
// FAST MULTI-FILE UPLOAD (NO TEDIOUS FORMS, JUST SELECT/DROP & UPLOAD)
// ──────────────────────────────────────────────────────────────────────────

window.openUploadDocModal = function(vaultId) {
  window.__selectedUploadFiles = [];

  if (typeof openModal === 'function') {
    openModal('Upload Due Diligence Documents', `
      <div style="display:flex; flex-direction:column; gap:14px;">
        
        <!-- Drag & Drop Multi-file Zone -->
        <div class="vdr-dropzone-box" id="vdrUploadDropzone" onclick="document.getElementById('vdrMultiFileInput').click()">
          <input type="file" multiple id="vdrMultiFileInput" style="display:none;" onchange="handleFileSelectionChange(this.files, '${vaultId}')" />
          <i data-lucide="upload-cloud" style="width:28px; height:28px; color:var(--text-dark); margin-bottom:6px;"></i>
          <div style="font-size:13px; font-weight:700; color:var(--text-dark);">Choose files or drag &amp; drop here</div>
          <div style="font-size:11.5px; color:var(--text-muted); margin-top:2px;">Upload single or multiple files (PDF, XLSX, DOCX, CSV up to 100MB)</div>
        </div>

        <!-- Selected Files Preview Area -->
        <div id="vdrSelectedFilesList" style="display:none; flex-direction:column; gap:6px; max-height:160px; overflow-y:auto;"></div>

        <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:4px;">
          <button type="button" class="btn btn-outline" onclick="closeModal()">Cancel</button>
          <button type="button" class="btn btn-primary" id="vdrStartUploadBtn" onclick="executeFilesUpload('${vaultId}')" style="gap:6px;">
            <i data-lucide="upload" style="width:13px; height:13px;"></i>
            <span id="vdrUploadBtnLabel">Upload Files</span>
          </button>
        </div>

      </div>
    `);

    if (typeof lucide !== 'undefined') lucide.createIcons();

    // Attach dragover/drop handlers
    setTimeout(() => {
      const dropzone = document.getElementById('vdrUploadDropzone');
      if (dropzone) {
        dropzone.addEventListener('dragover', (e) => { e.preventDefault(); dropzone.classList.add('dragover'); });
        dropzone.addEventListener('dragleave', () => dropzone.classList.remove('dragover'));
        dropzone.addEventListener('drop', (e) => {
          e.preventDefault();
          dropzone.classList.remove('dragover');
          if (e.dataTransfer && e.dataTransfer.files) {
            handleFileSelectionChange(e.dataTransfer.files, vaultId);
          }
        });
      }
    }, 100);
  }
};

window.handleFileSelectionChange = function(files, vaultId) {
  if (!files || files.length === 0) return;

  window.__selectedUploadFiles = Array.from(files);
  const listEl = document.getElementById('vdrSelectedFilesList');
  const btnLabel = document.getElementById('vdrUploadBtnLabel');

  if (listEl) {
    listEl.style.display = 'flex';
    listEl.innerHTML = window.__selectedUploadFiles.map((file, idx) => `
      <div style="background:#FAFAF9; border:1px solid var(--border-main); border-radius:6px; padding:6px 10px; display:flex; align-items:center; justify-content:space-between; font-size:11.5px;">
        <div style="display:flex; align-items:center; gap:6px; min-width:0; flex:1;">
          <i data-lucide="file" style="width:13px; height:13px; color:var(--text-dark); flex-shrink:0;"></i>
          <span style="font-weight:600; color:var(--text-dark); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${escapeHtml(file.name)}</span>
        </div>
        <span style="color:var(--text-muted); font-size:11px; margin-left:8px;">${(file.size / (1024 * 1024)).toFixed(1)} MB</span>
      </div>
    `).join('');
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }

  if (btnLabel) {
    btnLabel.textContent = `Upload ${window.__selectedUploadFiles.length} ${window.__selectedUploadFiles.length === 1 ? 'File' : 'Files'}`;
  }
};

window.executeFilesUpload = function(vaultId) {
  const vault = (window.WATCH_DATA_ROOMS_DATA || []).find(v => v.id === vaultId);
  if (!vault) return;

  const files = window.__selectedUploadFiles || [];

  if (files.length === 0) {
    // If user didn't pick from file dialog, add a demo document
    const demoName = `Diligence_Material_${Date.now().toString().slice(-4)}.pdf`;
    vault.documents = vault.documents || [];
    vault.documents.unshift({
      id: `doc-${Date.now()}`,
      name: demoName,
      format: 'pdf',
      type: 'General Diligence (PDF)',
      date: 'Just now',
      size: '2.5 MB',
      views: 0,
      downloads: 0
    });
  } else {
    vault.documents = vault.documents || [];
    files.forEach((file, idx) => {
      const name = file.name;
      const format = name.toLowerCase().endsWith('.xlsx') ? 'xlsx' : (name.toLowerCase().endsWith('.docx') ? 'docx' : (name.toLowerCase().endsWith('.csv') ? 'csv' : 'pdf'));
      
      let type = 'General Diligence';
      if (name.toLowerCase().includes('cap') || name.toLowerCase().includes('table')) type = 'Cap Table';
      else if (name.toLowerCase().includes('model') || name.toLowerCase().includes('financial')) type = 'Financial Model';
      else if (name.toLowerCase().includes('deck') || name.toLowerCase().includes('pitch')) type = 'Pitch Deck';
      else if (name.toLowerCase().includes('patent') || name.toLowerCase().includes('ip')) type = 'Patent & IP';
      else if (name.toLowerCase().includes('soc') || name.toLowerCase().includes('security')) type = 'SOC 2 & Security';
      else if (name.toLowerCase().includes('msa') || name.toLowerCase().includes('contract')) type = 'Commercial MSA';

      vault.documents.unshift({
        id: `doc-${Date.now()}-${idx}`,
        name: name,
        format: format,
        type: `${type} (${format.toUpperCase()})`,
        date: 'Just now',
        size: `${Math.max(0.8, (file.size / (1024 * 1024))).toFixed(1)} MB`,
        views: 0,
        downloads: 0
      });
    });
  }

  vault.lastModified = 'Just now';

  if (typeof closeModal === 'function') closeModal();
  renderWatchDataRoomsPage();

  if (window.showToast) {
    const count = files.length > 0 ? files.length : 1;
    window.showToast(`🎉 ${count} ${count === 1 ? 'document' : 'documents'} uploaded & encrypted successfully!`, 'success');
  }
};

window.revokeUserAccess = function(vaultId, userId) {
  closeAllVdrMenus();
  const vault = (window.WATCH_DATA_ROOMS_DATA || []).find(v => v.id === vaultId);
  if (!vault) return;

  if (confirm('Revoke access for this user? They will no longer be able to view or download vault documents.')) {
    vault.sharedUsers = (vault.sharedUsers || []).filter(u => u.id !== userId);
    vault.investorsCount = Math.max(0, (vault.investorsCount || 1) - 1);
    renderWatchDataRoomsPage();
    if (window.showToast) {
      window.showToast('🔒 User access revoked.');
    }
  }
};

// ──────────────────────────────────────────────────────────────────────────
// 05. CORE DRAWER & MODAL CONTROLS (CREATE VAULT DRAWER)
// ──────────────────────────────────────────────────────────────────────────

window.openVdrDrawer = function(vaultId = null) {
  const backdrop = document.getElementById('vdrDrawerBackdrop');
  const heading = document.getElementById('vdrDrawerHeading');
  const editIdInput = document.getElementById('vdrEditVaultId');
  const nameInput = document.getElementById('vdrVaultNameInput');
  const domainToggle = document.getElementById('vdrDomainToggle');
  const domainExpand = document.getElementById('vdrDomainExpand');
  const domainsInput = document.getElementById('vdrAllowedDomainsInput');
  const ndaToggle = document.getElementById('vdrNdaToggle');
  const submitText = document.getElementById('vdrSubmitBtnText');

  closeAllVdrMenus();

  if (vaultId) {
    const v = (window.WATCH_DATA_ROOMS_DATA || []).find(item => item.id === vaultId);
    if (v) {
      if (heading) heading.textContent = 'Edit Vault';
      if (editIdInput) editIdInput.value = v.id;
      if (nameInput) nameInput.value = v.name;
      if (domainToggle) domainToggle.checked = !!v.domainLock;
      if (domainExpand) domainExpand.classList.toggle('show', !!v.domainLock);
      if (domainsInput) domainsInput.value = v.allowedDomains || '';
      if (ndaToggle) ndaToggle.checked = !!v.requireNda;
      if (submitText) submitText.textContent = 'Save Changes';
    }
  } else {
    if (heading) heading.textContent = 'Create New Vault';
    if (editIdInput) editIdInput.value = '';
    if (nameInput) nameInput.value = '';
    if (domainToggle) domainToggle.checked = false;
    if (domainExpand) domainExpand.classList.remove('show');
    if (domainsInput) domainsInput.value = '';
    if (ndaToggle) ndaToggle.checked = true;
    if (submitText) submitText.textContent = 'Create Vault';
  }

  if (backdrop) {
    backdrop.classList.add('open');
    if (typeof lucide !== 'undefined') lucide.createIcons();
    setTimeout(() => {
      if (nameInput) nameInput.focus();
    }, 120);
  }
};

window.closeVdrDrawer = function() {
  const backdrop = document.getElementById('vdrDrawerBackdrop');
  if (backdrop) backdrop.classList.remove('open');
};

window.handleVdrDrawerBackdropClick = function(event) {
  if (event.target.id === 'vdrDrawerBackdrop') {
    closeVdrDrawer();
  }
};

window.toggleDomainSwitch = function() {
  const checkbox = document.getElementById('vdrDomainToggle');
  if (checkbox) {
    checkbox.checked = !checkbox.checked;
    handleDomainToggleChange(checkbox.checked);
  }
};

window.handleDomainToggleChange = function(isChecked) {
  const expand = document.getElementById('vdrDomainExpand');
  if (expand) {
    expand.classList.toggle('show', isChecked);
    if (isChecked) {
      const input = document.getElementById('vdrAllowedDomainsInput');
      if (input) input.focus();
    }
  }
};

window.toggleNdaSwitch = function() {
  const checkbox = document.getElementById('vdrNdaToggle');
  if (checkbox) checkbox.checked = !checkbox.checked;
};

window.handleNdaToggleChange = function(isChecked) {};

window.handleVdrFormSubmit = function(event) {
  event.preventDefault();

  const editIdInput = document.getElementById('vdrEditVaultId');
  const nameInput = document.getElementById('vdrVaultNameInput');
  const domainToggle = document.getElementById('vdrDomainToggle');
  const domainsInput = document.getElementById('vdrAllowedDomainsInput');
  const ndaToggle = document.getElementById('vdrNdaToggle');

  if (!nameInput || !nameInput.value.trim()) {
    if (window.showToast) window.showToast('Please enter a vault name.', 'warning');
    return;
  }

  const editId = editIdInput ? editIdInput.value : '';
  const isDomainLocked = domainToggle ? domainToggle.checked : false;
  const isNdaRequired = ndaToggle ? ndaToggle.checked : false;
  const allowedDomains = domainsInput ? domainsInput.value.trim() : '';

  window.WATCH_DATA_ROOMS_DATA = window.WATCH_DATA_ROOMS_DATA || [];

  if (editId) {
    const existing = window.WATCH_DATA_ROOMS_DATA.find(item => item.id === editId);
    if (existing) {
      existing.name = nameInput.value.trim();
      existing.domainLock = isDomainLocked;
      existing.allowedDomains = allowedDomains;
      existing.requireNda = isNdaRequired;
      existing.lastModified = 'Just now';
    }
    if (window.showToast) window.showToast('✨ Vault updated successfully!', 'success');
  } else {
    const newVault = {
      id: `vdr-${Date.now()}`,
      name: nameInput.value.trim(),
      category: 'Seed Round',
      createdOn: 'Just now',
      lastModified: 'Just now',
      investorsCount: 0,
      requireNda: isNdaRequired,
      domainLock: isDomainLocked,
      allowedDomains: allowedDomains,
      isArchived: false,
      documents: [
        { id: `doc-${Date.now()}-1`, name: `${nameInput.value.trim().replace(/\s+/g, '_')}_Overview.pdf`, format: 'pdf', type: 'Pitch Deck (PDF)', date: 'Just now', size: '3.1 MB', views: 0, downloads: 0 },
        { id: `doc-${Date.now()}-2`, name: `${nameInput.value.trim().replace(/\s+/g, '_')}_Financials.xlsx`, format: 'xlsx', type: 'Financial Model (XLSX)', date: 'Just now', size: '4.8 MB', views: 0, downloads: 0 }
      ],
      sharedUsers: [],
      requestedDocs: [
        { id: `req-${Date.now()}`, title: 'Initial Due Diligence Checklist', template: 'Seedicon Standard Checklist', requestedBy: 'System', requestedOn: 'Just now', uploadedOn: 'Pending', status: 'Pending Upload' }
      ],
      history: [
        { id: `hist-${Date.now()}`, user: 'Dr. Sarah Chen (Founder)', action: `Created vault "${nameInput.value.trim()}"`, time: 'Just now', location: 'Boston, US' }
      ]
    };

    window.WATCH_DATA_ROOMS_DATA.unshift(newVault);
    if (window.showToast) window.showToast(`🎉 Vault "${newVault.name}" created!`, 'success');
  }

  closeVdrDrawer();
  renderWatchDataRoomsPage();
};

window.handleVdrViewChange = function(viewMode, btn) {
  currentVdrView = viewMode;
  try {
    localStorage.setItem('seedicon_vdr_view', viewMode);
  } catch (e) {}

  document.querySelectorAll('.vdr-view-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  filterAndRenderWatchDataRooms();
};

window.handleVdrSearch = function(query) {
  currentVdrSearch = query;
  filterAndRenderWatchDataRooms();
};

window.handleVdrCategoryChange = function(cat) {
  currentVdrCategory = cat;
  filterAndRenderWatchDataRooms();
};

function positionVdrContextMenu(menu, btn) {
  if (!menu || !btn) return;
  
  menu.classList.add('show');
  if (typeof lucide !== 'undefined') lucide.createIcons();

  const rect = btn.getBoundingClientRect();
  const menuWidth = 175;
  const menuHeight = menu.offsetHeight || 140;

  menu.style.position = 'fixed';
  menu.style.zIndex = '999999';
  menu.style.right = `${Math.max(12, window.innerWidth - rect.right)}px`;
  menu.style.left = 'auto';

  if (rect.bottom + menuHeight > window.innerHeight - 12) {
    menu.style.top = `${Math.max(12, rect.top - menuHeight - 4)}px`;
    menu.style.bottom = 'auto';
  } else {
    menu.style.top = `${rect.bottom + 4}px`;
    menu.style.bottom = 'auto';
  }
}

window.toggleVdrDotMenu = function(vaultId, event) {
  if (event) event.stopPropagation();

  const menu = document.getElementById(`vdr-menu-${vaultId}`);
  const btn = event ? event.currentTarget : null;
  if (!menu) return;

  const isShown = menu.classList.contains('show');
  closeAllVdrMenus();

  if (!isShown && btn) {
    positionVdrContextMenu(menu, btn);
  }
};

window.toggleDocDotMenu = function(docId, event) {
  if (event) event.stopPropagation();

  const menu = document.getElementById(`doc-menu-${docId}`);
  const btn = event ? event.currentTarget : null;
  if (!menu) return;

  const isShown = menu.classList.contains('show');
  closeAllVdrMenus();

  if (!isShown && btn) {
    positionVdrContextMenu(menu, btn);
  }
};

window.toggleUserDotMenu = function(userId, event) {
  if (event) event.stopPropagation();

  const menu = document.getElementById(`user-menu-${userId}`);
  const btn = event ? event.currentTarget : null;
  if (!menu) return;

  const isShown = menu.classList.contains('show');
  closeAllVdrMenus();

  if (!isShown && btn) {
    positionVdrContextMenu(menu, btn);
  }
};

window.toggleReqDotMenu = function(reqId, event) {
  if (event) event.stopPropagation();

  const menu = document.getElementById(`req-menu-${reqId}`);
  const btn = event ? event.currentTarget : null;
  if (!menu) return;

  const isShown = menu.classList.contains('show');
  closeAllVdrMenus();

  if (!isShown && btn) {
    positionVdrContextMenu(menu, btn);
  }
};

function closeAllVdrMenus() {
  document.querySelectorAll('.vdr-context-menu').forEach(m => {
    m.classList.remove('show');
    m.style.position = '';
    m.style.top = '';
    m.style.bottom = '';
    m.style.right = '';
    m.style.left = '';
  });
}

document.addEventListener('click', function(e) {
  if (!e.target.closest('.vdr-context-menu') && !e.target.closest('.vdr-dot-menu-btn')) {
    closeAllVdrMenus();
  }
});

window.addEventListener('scroll', function() {
  closeAllVdrMenus();
}, true);

window.editVdrVault = function(vaultId, event) {
  if (event) event.stopPropagation();
  closeAllVdrMenus();
  openVdrDrawer(vaultId);
};

window.archiveVdrVault = function(vaultId, event) {
  if (event) event.stopPropagation();
  closeAllVdrMenus();

  const v = (window.WATCH_DATA_ROOMS_DATA || []).find(item => item.id === vaultId);
  if (!v) return;

  v.isArchived = !v.isArchived;
  v.lastModified = 'Just now';

  filterAndRenderWatchDataRooms();

  if (window.showToast) {
    window.showToast(v.isArchived ? `📦 Vault "${v.name}" archived.` : `✨ Vault "${v.name}" unarchived.`);
  }
};

window.deleteVdrVault = function(vaultId, event) {
  if (event) event.stopPropagation();
  closeAllVdrMenus();

  const v = (window.WATCH_DATA_ROOMS_DATA || []).find(item => item.id === vaultId);
  if (!v) return;

  if (confirm(`Are you sure you want to delete "${v.name}"?`)) {
    window.WATCH_DATA_ROOMS_DATA = window.WATCH_DATA_ROOMS_DATA.filter(item => item.id !== vaultId);
    if (currentActiveVaultId === vaultId) {
      currentActiveVaultId = null;
    }
    renderWatchDataRoomsPage();
    if (window.showToast) {
      window.showToast(`🗑️ Vault "${v.name}" deleted.`);
    }
  }
};

window.copyVdrShareLink = function(vaultId, event) {
  if (event) event.stopPropagation();
  closeAllVdrMenus();

  const link = `${window.location.origin}${window.location.pathname}?vault=${vaultId}`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(link).catch(() => {});
  }
  if (window.showToast) {
    window.showToast('🔗 Secure data room link copied to clipboard!', 'success');
  }
};


// ──────────────────────────────────────────────────────────────────────────
// 04-D. TEMPLATE PREVIEW MODAL
// ──────────────────────────────────────────────────────────────────────────

window.openTemplatePreviewModal = function(templateName) {
  closeAllVdrMenus();
  if (typeof openModal === 'function') {
    openModal(`Document Template — ${templateName}`, `
      <div class="vdr-preview-modal-body">
        
        <!-- Viewer Control Strip -->
        <div class="vdr-preview-toolbar">
          <div style="display:flex; align-items:center; gap:8px;">
            <span style="font-weight:700; color:var(--text-dark);">Standard Diligence Template</span>
            <span style="color:var(--text-light);">·</span>
            <span style="color:var(--text-muted); font-size:11.5px;">Schema v2.4</span>
          </div>

          <div style="display:flex; align-items:center; gap:6px;">
            <button class="btn btn-outline" style="padding:3px 7px; font-size:11px;" onclick="window.showToast && window.showToast('Zoom: 100%', 'info')">100%</button>
            <button class="btn btn-primary" style="padding:3.5px 9px; font-size:11px; gap:4px;" onclick="downloadDocFile('${templateName}.xlsx')">
              <i data-lucide="download" style="width:11px; height:11px;"></i>
              <span>Download Template</span>
            </button>
          </div>
        </div>

        <!-- Watermarked Template Sheet -->
        <div class="vdr-preview-sheet">
          <div class="vdr-preview-watermark">
            OFFICIAL DILIGENCE TEMPLATE<br>SEEDICON STANDARD COMPLIANCE
          </div>

          <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-faint); padding-bottom:12px; margin-bottom:16px;">
            <div style="font-weight:800; font-size:15px; color:var(--text-dark);">${escapeHtml(templateName)}</div>
            <div style="font-size:10.5px; font-weight:700; color:#1D4ED8; background:#EFF6FF; padding:2px 8px; border-radius:4px;">VERIFIED TEMPLATE</div>
          </div>

          <div style="background:#FAFAF9; border:1px solid var(--border-main); border-radius:6px; padding:12px; margin-bottom:14px;">
            <div style="font-size:11.5px; font-weight:700; color:var(--text-dark); margin-bottom:4px;">Template Instructions &amp; Required Data Points:</div>
            <ul style="font-size:11.5px; color:var(--text-muted); line-height:1.6; margin:0; padding-left:18px;">
              <li>Monthly customer cohort retention rates (M1 through M24).</li>
              <li>Gross margin contribution per product line and enterprise tier.</li>
              <li>Net revenue retention (NRR) and logo churn breakdown.</li>
              <li>Sign-off from Lead Finance Officer or independent audit partner.</li>
            </ul>
          </div>

          <div style="margin-top:auto; display:flex; justify-content:space-between; align-items:center; padding-top:14px; border-top:1px solid var(--border-faint);">
            <span style="font-size:11px; color:var(--text-muted);">Format: XLSX / CSV Formatted Matrix</span>
            <button class="btn btn-primary" style="font-size:11px; padding:4px 10px;" onclick="downloadDocFile('${templateName}.xlsx')">Use This Template</button>
          </div>
        </div>

      </div>
    `);
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }
};
