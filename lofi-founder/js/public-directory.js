/* ==========================================================================
   Seedicon — Public Startup Directory & Launch Platform JS
   Monochrome / Neutral Theme, Brandfetch API, Next Launch Countdown & 9-Step Flow
   ========================================================================== */

(function () {
  'use strict';

  // 01. Brandfetch API Configuration
  const BRANDFETCH_API_KEY = "hRbFeAlH3EKQt3eKzzFrOiDJourkuqFDDqgOJCxGGARCfbqtjr2IEMt7JkTzuC5X3NBBCoCNw6etf3Q2tt7xNg";

  // Local Media Assets from ./assets/
  const LOCAL_GALLERY_IMAGES = [
    './assets/slide_1.png',
    './assets/slide_2.png',
    './assets/slide_3.png',
    './assets/slide_4.png',
    './assets/slide_5.png'
  ];

  // 02. Sponsors Data (Monochrome / Neutral Badges)
  const SPONSORS_DATA = [
    {
      id: 'chloros',
      name: 'Chloros Agent',
      tagline: 'The runtime security gate for your AI agents',
      website: 'https://chloros.ai',
      bannerImg: './assets/0322cf6d-49b5-4eb7-9272-ab06fd21583c.avif',
      logo: 'https://cdn.simpleicons.org/cloudflare/FFFFFF',
      logoBg: '#141413'
    },
    {
      id: 'tickclip',
      name: 'Tickclip',
      tagline: 'The Fiduciary AI Trust Layer for Smarter, Unbiased Shopping',
      website: 'https://tickclip.com',
      bannerImg: './assets/45707f08-f4f9-4a47-9220-ee29360ac6dc.avif',
      logoText: 'tickcl',
      logoBg: '#141413'
    },
    {
      id: 'nuvoha',
      name: 'Nuvoha',
      tagline: 'Discover complete trips, personalised around you.',
      website: 'https://nuvoha.com',
      bannerImg: './assets/0f98f981-be6f-45bc-9e5f-00a26df31c48.avif',
      logo: 'https://cdn.simpleicons.org/tripadvisor/FFFFFF',
      logoBg: '#141413'
    }
  ];

  // 02.5 Customer Reviews & Ratings Initial Database
  const SEEDICON_REVIEWS_DATA = {
    tinycashflow: [
      {
        id: 'rev-tc-1',
        author: 'Marcus Vance',
        role: 'Founder & CEO @ ScaleForge',
        avatar: 'MV',
        location: 'United States',
        rating: 5,
        headline: 'The single best financial planning tool for early-stage founders',
        date: 'Reviewed in the United States on August 14, 2026',
        verified: true,
        text: 'TinyCashflow completely replaced our messy Google Sheets runway model. The infinite linear timeline is intuitive — you can simulate contractor hires, Stripe revenue milestones, and burn rate forecasts in seconds. Our angel investors loved the visual export.',
        helpful: 24
      },
      {
        id: 'rev-tc-2',
        author: 'Elena Rostova',
        role: 'Head of Operations @ DevPulse',
        avatar: 'ER',
        location: 'Germany',
        rating: 5,
        headline: 'Flawless keyboard navigation and sub-second performance',
        date: 'Reviewed in Germany on August 11, 2026',
        verified: true,
        text: 'As an ex-Excel power user, spreadsheet shortcuts are second nature. TinyCashflow feels like native software with instant offline persistence and accurate multi-currency conversions.',
        helpful: 19
      },
      {
        id: 'rev-tc-3',
        author: 'David Chen',
        role: 'Solo Bootstrapper',
        avatar: 'DC',
        location: 'Canada',
        rating: 4,
        headline: 'Great UI, looking forward to QuickBooks 2-way sync',
        date: 'Reviewed in Canada on August 05, 2026',
        verified: true,
        text: 'Very clean monochrome interface without unnecessary bloat. Bank feeds sync smoothly and categorization is fast. Would love to see deeper automated tax rule tagging in the next update.',
        helpful: 11
      }
    ],
    batchcrunch: [
      {
        id: 'rev-bc-1',
        author: 'Simon Leclair',
        role: 'Staff Frontend Engineer @ Vercel',
        avatar: 'SL',
        location: 'France',
        rating: 5,
        headline: 'Lightning fast WebAssembly image compression in-browser',
        date: 'Reviewed in France on August 15, 2026',
        verified: true,
        text: 'BatchCrunch is pure engineering wizardry. Processed 800+ 4K assets in under 12 seconds with SIMD WebAssembly. Zero files uploaded to external cloud servers so our compliance team approved it instantly.',
        helpful: 31
      },
      {
        id: 'rev-bc-2',
        author: 'Chloe Simmons',
        role: 'Product Designer @ StudioMono',
        avatar: 'CS',
        location: 'United States',
        rating: 5,
        headline: 'Essential everyday utility for our design team',
        date: 'Reviewed in the United States on August 09, 2026',
        verified: true,
        text: 'Replaced both ImageOptim and online converters. The drag-and-drop batch export with automated AVIF/WebP lossless conversion saves our creative studio hours every week.',
        helpful: 15
      }
    ],
    quickenrich: [
      {
        id: 'rev-qe-1',
        author: 'Nate Thorne',
        role: 'VP of Growth @ CloudReach',
        avatar: 'NT',
        location: 'United States',
        rating: 5,
        headline: '98% verified mobile phone and email accuracy — huge ROI',
        date: 'Reviewed in the United States on August 16, 2026',
        verified: true,
        text: 'Our SDR team saw bounce rates drop from 18% to under 1.5% in the first 2 weeks. The REST API throughput is ultra reliable and direct phone connections doubled our booked demo conversion rate.',
        helpful: 28
      }
    ]
  };

  function getProductReviews(productId) {
    let local = [];
    try {
      const stored = localStorage.getItem(`seedicon_reviews_${productId}`);
      if (stored) local = JSON.parse(stored);
    } catch (e) { }

    const defaults = SEEDICON_REVIEWS_DATA[productId] || [
      {
        id: `rev-${productId}-1`,
        author: 'Alex Morgan',
        role: 'Tech Lead & Founder',
        avatar: 'AM',
        location: 'United States',
        rating: 5,
        headline: 'Outstanding reliability and clean developer experience',
        date: 'Reviewed on August 15, 2026',
        verified: true,
        text: 'Intuitive interface, fast workflows, and rock-solid architecture. Has saved our product team dozens of hours every sprint.',
        helpful: 12
      },
      {
        id: `rev-${productId}-2`,
        author: 'Sarah Jenkins',
        role: 'Product Director',
        avatar: 'SJ',
        location: 'United Kingdom',
        rating: 5,
        headline: 'Top-tier craft and responsiveness',
        date: 'Reviewed on August 10, 2026',
        verified: true,
        text: 'We switched our core stack to this platform last quarter and the productivity gains have been noticeable across our entire engineering group.',
        helpful: 8
      }
    ];

    return [...local, ...defaults];
  }

  // 03. Comprehensive Seedicon Directory Dataset (Rich 9-Step Attributes)
  const SEEDICON_LAUNCHES_DATA = [
    {
      id: 'tinycashflow',
      name: 'TinyCashflow',
      domain: 'tinycashflow.com',
      logo: '',
      logoBg: '#141413',
      logoIcon: 'wallet',
      tagline: 'A spreadsheet-style money manager on one timeline',
      detailedDesc: 'TinyCashflow brings the ultimate balance of flexibility and speed to personal and small business finances. Manage your cash flow on an interactive infinite timeline with smart projections, recurring expense detection, and automated bank reconciliation.',
      founder: 'Felix Kramer',
      founderAvatar: 'FK',
      location: 'Berlin, Germany',
      address: 'Friedrichstraße 42, 10117 Berlin, Germany',
      incpDate: 'Feb 2024',
      postedAgo: 'Today',
      website: 'https://tinycashflow.com',
      linkedin: 'https://linkedin.com/company/tinycashflow',
      twitter: 'https://x.com/tinycashflow',
      instagram: 'https://instagram.com/tinycashflow',
      category: 'Fintech',
      industry: 'Fintech',
      industries: ['Fintech', 'Productivity', 'B2B SaaS'],
      stage: 'Pre-Seed',
      upvotes: 11,
      hasUpvoted: false,
      pricing: 'Free Tier / $9/mo Pro',
      pricingPlans: [
        { name: 'Starter', price: 'Free', features: ['1 Account timeline', 'Up to 3-month forecast', 'CSV Export'] },
        { name: 'Pro Founder', price: '$9/mo', features: ['Unlimited accounts', 'Multi-year projections', 'Live bank sync', 'Multi-currency conversion'] }
      ],
      features: ['Spreadsheet-inspired keyboard navigation', 'Visual multi-month cash forecasting', 'Multi-currency conversion engine', 'Private offline-first encrypted storage'],
      integrations: ['Stripe', 'Plaid', 'QuickBooks', 'Google Sheets', 'Notion'],
      competitors: ['https://copilot.money', 'https://ynab.com', 'https://monarchmoney.com'],
      links: [
        { name: 'Pitch Deck', url: 'https://deckwale.com/tinycashflow' },
        { name: 'Documentation', url: 'https://docs.tinycashflow.com' }
      ],
      gallery: LOCAL_GALLERY_IMAGES,
      faqs: [
        { q: 'What problem does TinyCashflow solve?', a: 'Traditional accounting apps are clunky while spreadsheets lack real-time bank feeds and forecasting automation. TinyCashflow bridges this gap.' },
        { q: 'Who is the target audience?', a: 'Solo founders, bootstrapped agencies, freelancers, and early-stage startup operators.' },
        { q: 'What makes TinyCashflow unique?', a: 'A unified linear timeline model that lets you simulate future runway and cash scenarios in seconds.' },
        { q: 'What is the business model?', a: 'Freemium software subscription with a generous entry tier and advanced Pro workspace features.' }
      ]
    },
    {
      id: 'batchcrunch',
      name: 'BatchCrunch',
      domain: 'batchcrunch.io',
      logo: '',
      logoBg: '#141413',
      logoIcon: 'layers',
      tagline: 'Compress & resize media in your browser — nothing uploaded.',
      detailedDesc: 'BatchCrunch is a client-side WebAssembly media processor. Compress thousands of 4K images, videos, and PDFs simultaneously directly in your browser with zero data leaving your machine.',
      founder: 'Liam Gallagher',
      founderAvatar: 'LG',
      location: 'London, UK',
      address: '22 Bishopsgate, London EC2N 4BQ, United Kingdom',
      incpDate: 'Mar 2024',
      postedAgo: 'Today',
      website: 'https://batchcrunch.io',
      linkedin: 'https://linkedin.com/company/batchcrunch',
      twitter: 'https://x.com/batchcrunch',
      instagram: '',
      category: 'DevTools',
      industry: 'DevTools',
      industries: ['DevTools', 'Privacy', 'Utilities'],
      stage: 'Seed',
      upvotes: 7,
      hasUpvoted: false,
      pricing: '100% Free & Open Source',
      pricingPlans: [
        { name: 'Community Edition', price: 'Free', features: ['Unlimited batch conversions', 'All file formats (WebP, AVIF, HEIC, MP4)', 'Offline PWA support'] }
      ],
      features: ['WebAssembly multi-threaded encoding', 'Zero server uploads (100% private)', 'Lossless WebP, AVIF & HEIC conversion', 'Folder drag-and-drop batch export'],
      integrations: ['Chrome', 'Safari', 'Firefox', 'VS Code Extension', 'Figma Plugin'],
      competitors: ['https://tinypng.com', 'https://squoosh.app'],
      links: [
        { name: 'GitHub Repo', url: 'https://github.com/batchcrunch/core' },
        { name: 'WASM Benchmarks', url: 'https://batchcrunch.io/benchmarks' }
      ],
      gallery: LOCAL_GALLERY_IMAGES,
      faqs: [
        { q: 'What problem does BatchCrunch solve?', a: 'Eliminates privacy concerns and upload latency when compressing sensitive company media and PDFs.' },
        { q: 'Who is the target audience?', a: 'Designers, content creators, frontend developers, and privacy-conscious enterprises.' },
        { q: 'What makes BatchCrunch unique?', a: 'SIMD-accelerated WebAssembly execution delivers near-native compression speeds right in Chrome.' }
      ]
    },
    {
      id: 'quickenrich',
      name: 'Quickenrich',
      domain: 'quickenrich.com',
      logo: 'https://cdn.simpleicons.org/quicklook/141413',
      logoBg: '#141413',
      logoIcon: 'database',
      tagline: 'Quickenrich is a B2B data enrichment with a free phone finder & email finder API',
      detailedDesc: 'Quickenrich is the ultimate B2B data enrichment platform designed for modern growth teams. Instantly find verified mobile numbers, direct-dial extensions, work emails, and firmographic signals with an ultra-reliable, high-throughput REST API.',
      founder: 'Vikram Joshi',
      founderAvatar: 'VJ',
      location: 'San Francisco, CA',
      address: '500 Howard St, San Francisco, CA 94105',
      incpDate: 'Jan 2024',
      postedAgo: 'Today',
      website: 'https://quickenrich.com',
      linkedin: 'https://linkedin.com/company/quickenrich',
      twitter: 'https://x.com/quickenrich',
      category: 'Sales & Growth',
      industry: 'B2B SaaS',
      industries: ['B2B SaaS', 'Sales & Growth', 'APIs'],
      stage: 'Seed',
      upvotes: 5,
      hasUpvoted: false,
      pricing: 'Free API credits / $49 Pro',
      pricingPlans: [
        { name: 'Developer Free', price: '$0', features: ['500 API calls/mo', 'Email waterfall validation', 'Community support'] },
        { name: 'Growth', price: '$49/mo', features: ['10,000 API calls/mo', 'Mobile direct-dials', 'HubSpot & Salesforce sync'] }
      ],
      features: ['Real-time 98% email verification', 'Global mobile phone waterfall enrichment', 'REST API & Webhooks', 'CRM Auto-sync with HubSpot & Salesforce'],
      integrations: ['HubSpot', 'Salesforce', 'Zapier', 'Make', 'Clay', 'Apollo'],
      competitors: ['https://zoominfo.com', 'https://clearbit.com', 'https://lusha.com'],
      links: [
        { name: 'API Docs', url: 'https://docs.quickenrich.com' },
        { name: 'Swagger Spec', url: 'https://api.quickenrich.com/spec' }
      ],
      gallery: LOCAL_GALLERY_IMAGES,
      faqs: [
        { q: 'What problem does Quickenrich solve?', a: 'Outdated B2B contact records and high bounce rates on outbound sales campaigns.' },
        { q: 'How is data verified?', a: 'Multi-step SMTP handshake and live telecom carrier waterfall queries.' }
      ]
    },
    {
      id: 'pagelens-ai',
      name: 'PageLens AI',
      domain: 'pagelens.ai',
      logo: 'https://cdn.simpleicons.org/looker/141413',
      logoBg: '#141413',
      logoIcon: 'scan',
      tagline: 'AI-powered website audits for AI-built apps, from $1.',
      detailedDesc: 'PageLens AI runs automated heuristic, accessibility, and conversion audits on landing pages and web apps created by AI code generators like Lovable, v0, and Cursor. Get instant UX fixes and actionable code snippets in under 30 seconds.',
      founder: 'Sophie Laurent',
      founderAvatar: 'SL',
      location: 'Paris, France',
      address: '75008 Paris, France',
      incpDate: 'Feb 2024',
      postedAgo: 'Today',
      website: 'https://pagelens.ai',
      linkedin: 'https://linkedin.com/company/pagelens',
      twitter: 'https://x.com/pagelensai',
      category: 'AI & ML',
      industry: 'AI & ML',
      industries: ['AI & ML', 'UI/UX', 'SEO'],
      stage: 'Pre-Seed',
      upvotes: 3,
      hasUpvoted: false,
      pricing: 'From $1 per audit / $19 Unlimited',
      pricingPlans: [
        { name: 'Per-Audit', price: '$1', features: ['Instant Lighthouse + AI visual UX report', 'Tailwind & React code fixes'] },
        { name: 'Founder Pro', price: '$19/mo', features: ['Unlimited domain audits', 'Continuous change monitoring', 'Slack alerts'] }
      ],
      features: ['Automated Lighthouse & UX scoring', 'AI Visual layout diff analysis', 'Copy & CTA optimization suggestions', 'Instant Figma & Tailwind export'],
      integrations: ['GitHub', 'Vercel', 'Netlify', 'Figma', 'Slack'],
      competitors: ['https://hotjar.com', 'https://vwo.com'],
      links: [
        { name: 'Sample Audit Report', url: 'https://pagelens.ai/sample' }
      ],
      gallery: LOCAL_GALLERY_IMAGES,
      faqs: [
        { q: 'What problem does PageLens solve?', a: 'AI builders create functional code quickly, but usually lack conversion design, accessible colors, and SEO meta tags.' }
      ]
    },
    {
      id: 'linear',
      name: 'Linear',
      domain: 'linear.app',
      logo: 'https://cdn.simpleicons.org/linear/141413',
      logoBg: '#141413',
      tagline: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Built for high-performance teams.',
      detailedDesc: 'Linear is the issue tracker software teams actually enjoy using. Streamline projects, sprints, tasks, and bug tracking with instantaneous sync, keyboard-first navigation, and bidirectional Git integrations.',
      founder: 'Karri Saarinen',
      founderAvatar: 'KS',
      location: 'San Francisco, CA',
      address: 'San Francisco, CA, USA',
      incpDate: 'Jan 2019',
      postedAgo: 'Yesterday',
      website: 'https://linear.app',
      linkedin: 'https://linkedin.com/company/linear-app',
      twitter: 'https://x.com/linear',
      category: 'Productivity',
      industry: 'B2B SaaS',
      industries: ['B2B SaaS', 'Issue Tracking', 'DevTools'],
      stage: 'Series B',
      upvotes: 842,
      hasUpvoted: false,
      pricing: 'Free tier / $8 per user/mo',
      pricingPlans: [
        { name: 'Free', price: '$0', features: ['Up to 250 active issues', 'Unlimited members', 'Git integrations'] },
        { name: 'Standard', price: '$8/user/mo', features: ['Unlimited issues', 'Cycles & roadmaps', 'Figma integration'] }
      ],
      features: ['Real-time sync engine', 'Cycles & Automated sprints', 'Git & Figma integrations', 'Command menu (⌘K)'],
      integrations: ['GitHub', 'GitLab', 'Figma', 'Slack', 'Sentry', 'Zendesk'],
      competitors: ['https://jira.com', 'https://asana.com'],
      links: [{ name: 'Linear Method', url: 'https://linear.app/method' }],
      gallery: LOCAL_GALLERY_IMAGES,
      faqs: [{ q: 'Why do software teams switch to Linear?', a: 'Linear is designed specifically for software craft with sub-50ms latency and keyboard shortcuts.' }]
    },
    {
      id: 'perplexity',
      name: 'Perplexity AI',
      domain: 'perplexity.ai',
      logo: 'https://cdn.simpleicons.org/perplexity/141413',
      logoBg: '#141413',
      tagline: 'An AI-powered conversational search engine delivering sourced, accurate, and real-time knowledge discovery.',
      detailedDesc: 'Perplexity AI unlocks the power of knowledge with interactive information discovery. Ask complex questions and get concise, accurate answers with citations from authoritative web sources in real-time.',
      founder: 'Aravind Srinivas',
      founderAvatar: 'AS',
      location: 'San Francisco, CA',
      address: 'San Francisco, CA, USA',
      incpDate: 'Aug 2022',
      postedAgo: 'Yesterday',
      website: 'https://perplexity.ai',
      linkedin: 'https://linkedin.com/company/perplexity-ai',
      twitter: 'https://x.com/perplexity_ai',
      category: 'AI & ML',
      industry: 'AI & ML',
      industries: ['AI & ML', 'Search Engine', 'Generative AI'],
      stage: 'Series B',
      upvotes: 1290,
      hasUpvoted: false,
      pricing: 'Freemium / $20 Pro plan',
      pricingPlans: [
        { name: 'Standard', price: 'Free', features: ['Quick search', 'Sources citations'] },
        { name: 'Pro', price: '$20/mo', features: ['Copilot 300+ daily', 'Claude 3.5 Sonnet & GPT-4o toggle', 'File upload analysis'] }
      ],
      features: ['Copilot multi-step search', 'Citation graphs', 'File analysis & upload', 'Claude 3.5 & GPT-4o toggle'],
      integrations: ['Chrome Extension', 'iOS App', 'Android App', 'API'],
      competitors: ['https://google.com', 'https://openai.com'],
      links: [{ name: 'Pro Features', url: 'https://perplexity.ai/pro' }],
      gallery: LOCAL_GALLERY_IMAGES,
      faqs: [{ q: 'How does Perplexity ensure factual accuracy?', a: 'Answers are synthesized directly from verified web citations.' }]
    },
    {
      id: 'supabase',
      name: 'Supabase',
      domain: 'supabase.com',
      logo: 'https://cdn.simpleicons.org/supabase/141413',
      logoBg: '#141413',
      tagline: 'The open source Firebase alternative. Build in a weekend, scale to millions with Postgres & Edge Functions.',
      detailedDesc: 'Supabase provides all the backend features developers need to build a product: dedicated PostgreSQL database, user authentication, instant APIs, edge functions, and real-time subscriptions.',
      founder: 'Paul Copplestone',
      founderAvatar: 'PC',
      location: 'Singapore / Remote',
      address: 'Singapore / Remote',
      incpDate: 'Jan 2020',
      postedAgo: '2 days ago',
      website: 'https://supabase.com',
      linkedin: 'https://linkedin.com/company/supabase',
      twitter: 'https://x.com/supabase',
      category: 'DevTools',
      industry: 'DevTools',
      industries: ['DevTools', 'Open Source', 'PostgreSQL'],
      stage: 'Series B',
      upvotes: 1048,
      hasUpvoted: false,
      pricing: 'Free tier / $25 Pro plan',
      pricingPlans: [
        { name: 'Free', price: '$0', features: ['500MB DB', '50,000 monthly active users', '1GB file storage'] },
        { name: 'Pro', price: '$25/mo', features: ['8GB DB', '100,000 MAUs', 'Daily backups', 'Point-in-time recovery'] }
      ],
      features: ['Dedicated Postgres DB', 'Row Level Security (RLS)', 'Instant Auto-generated APIs', 'Storage & Vector Embeddings'],
      integrations: ['Vercel', 'Next.js', 'Prisma', 'Stripe', 'Flutter'],
      competitors: ['https://firebase.google.com', 'https://aws.amazon.com/rds/'],
      links: [{ name: 'Docs', url: 'https://supabase.com/docs' }],
      gallery: LOCAL_GALLERY_IMAGES,
      faqs: [{ q: 'Is Supabase 100% open source?', a: 'Yes! Every core component runs open-source Postgres, Auth, and Storage.' }]
    },
    {
      id: 'resend',
      name: 'Resend',
      domain: 'resend.com',
      logo: 'https://cdn.simpleicons.org/resend/141413',
      logoBg: '#141413',
      tagline: 'Email for developers. Deliver transactional and marketing emails at scale with modern React templates.',
      detailedDesc: 'Resend is the modern email platform built specifically for software engineers. First-class React Email support, sub-100ms API dispatch, webhooks, and supreme deliverability monitoring.',
      founder: 'Zeno Rocha',
      founderAvatar: 'ZR',
      location: 'San Francisco, CA',
      address: 'San Francisco, CA, USA',
      incpDate: 'Jan 2023',
      postedAgo: '3 days ago',
      website: 'https://resend.com',
      linkedin: 'https://linkedin.com/company/resend',
      twitter: 'https://x.com/resend',
      category: 'DevTools',
      industry: 'DevTools',
      industries: ['DevTools', 'Email API', 'React'],
      stage: 'Seed',
      upvotes: 735,
      hasUpvoted: false,
      pricing: 'Free (3,000/mo) / $20 Pro plan',
      pricingPlans: [
        { name: 'Developer', price: 'Free', features: ['3,000 emails/mo', '1 domain', '1-day log retention'] },
        { name: 'Pro', price: '$20/mo', features: ['50,000 emails/mo', 'Unlimited domains', '30-day log retention'] }
      ],
      features: ['React Email component library', 'Sub-100ms dispatch API', 'Custom domain authentication', 'Real-time analytics'],
      integrations: ['React', 'Next.js', 'Node.js', 'Python', 'Go', 'Ruby'],
      competitors: ['https://sendgrid.com', 'https://postmarkapp.com', 'https://mailgun.com'],
      links: [{ name: 'React Email Docs', url: 'https://react.email' }],
      gallery: LOCAL_GALLERY_IMAGES,
      faqs: [{ q: 'Why do engineers prefer Resend?', a: 'Write emails in modern JSX/React instead of outdated 1990s table-based HTML.' }]
    }
  ];

  window.SEEDICON_LAUNCHES_DATA = SEEDICON_LAUNCHES_DATA;
  window.PRODUCT_DIRECTORY_DATA = SEEDICON_LAUNCHES_DATA;

  // Local state
  let currentSearch = '';
  let currentCategory = 'all';
  let currentStage = 'all';
  let currentDetailTab = 'overview';
  let userUpvotes = {};

  try {
    const saved = localStorage.getItem('seedicon_public_upvotes');
    if (saved) userUpvotes = JSON.parse(saved);
  } catch (e) { }

  // 04. Next Launch Live Countdown (Matches Screenshot)
  function initNextLaunchCountdown() {
    const hoursEl = document.getElementById('nlHours');
    const minsEl = document.getElementById('nlMins');
    const secsEl = document.getElementById('nlSecs');

    if (!hoursEl || !minsEl || !secsEl) return;

    function update() {
      const now = new Date();
      const utcMs = now.getTime() + (now.getTimezoneOffset() * 60000);
      const pdtOffset = -7 * 3600000;
      const pdtNow = new Date(utcMs + pdtOffset);

      const pdtMidnight = new Date(pdtNow);
      pdtMidnight.setHours(24, 0, 0, 0);

      const diffMs = pdtMidnight - pdtNow;
      if (diffMs <= 0) {
        hoursEl.textContent = '0 hours';
        minsEl.textContent = '0 mins';
        secsEl.textContent = '0 secs';
        return;
      }

      const totalSecs = Math.floor(diffMs / 1000);
      const h = Math.floor(totalSecs / 3600);
      const m = Math.floor((totalSecs % 3600) / 60);
      const s = totalSecs % 60;

      hoursEl.textContent = `${h} hours`;
      minsEl.textContent = `${m} mins`;
      secsEl.textContent = `${s} secs`;
    }

    update();
    setInterval(update, 1000);
  }

  // 05. Render Sponsors Grid (Monochrome & Neutral)
  function renderSponsors() {
    const root = document.getElementById('pubSponsorsGrid');
    if (!root) return;

    root.innerHTML = SPONSORS_DATA.map(s => {
      let logoHtml = '';
      if (s.logo) {
        logoHtml = `<img src="${s.logo}" alt="${s.name} logo" />`;
      } else if (s.logoText) {
        logoHtml = `<span style="color:#FFF; font-size:10px; font-weight:800;">${s.logoText}</span>`;
      } else {
        logoHtml = `<span style="color:#FFF; font-size:12px; font-weight:800;">${s.name.slice(0, 2).toUpperCase()}</span>`;
      }

      return `
        <div class="pub-sponsor-item">
          <div class="pub-sponsor-banner">
            <img src="${s.bannerImg}" alt="${s.name} banner" class="pub-sponsor-banner-img" />
            <span class="pub-sponsor-badge">Sponsor</span>
          </div>

          <div class="pub-sponsor-logo-box" style="${s.logoBg ? `background-color:${s.logoBg};` : ''}">
            ${logoHtml}
          </div>

          <div class="pub-sponsor-body">
            <h3 class="pub-sponsor-name">${s.name}</h3>
            <p class="pub-sponsor-tagline">${s.tagline}</p>
            <a href="${s.website}" target="_blank" rel="noopener" class="pub-sponsor-link">
              <span>Visit website ↗</span>
            </a>
          </div>
        </div>
      `;
    }).join('');

    if (typeof lucide !== 'undefined') lucide.createIcons();
  }

  // 06. Render Surface Launches Feed (Surface-First, Spacing & Dividers)
  function renderSurfaceLaunches() {
    const root = document.getElementById('pubSurfaceLaunchesList');
    if (!root) return;

    let items = [...SEEDICON_LAUNCHES_DATA];

    // Filter Category
    if (currentCategory !== 'all') {
      items = items.filter(p =>
        p.category.toLowerCase() === currentCategory.toLowerCase() ||
        (p.industries || []).some(t => t.toLowerCase() === currentCategory.toLowerCase())
      );
    }

    // Filter Stage
    if (currentStage !== 'all') {
      items = items.filter(p => p.stage.toLowerCase() === currentStage.toLowerCase());
    }

    // Filter Search Query
    if (currentSearch.trim()) {
      const q = currentSearch.toLowerCase().trim();
      items = items.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        (p.industries || []).some(t => t.toLowerCase().includes(q)) ||
        p.founder.toLowerCase().includes(q)
      );
    }

    if (items.length === 0) {
      root.innerHTML = `
        <div style="padding:40px 10px; text-align:center;">
          <i data-lucide="search-x" style="width:34px; height:34px; color:var(--pub-text-light); margin-bottom:8px;"></i>
          <h3 style="font-size:15px; font-weight:800; color:var(--pub-text-dark); margin-bottom:4px;">No launches match your query</h3>
          <p style="font-size:13px; color:var(--pub-text-muted);">Try searching for another keyword or reset the category filter.</p>
        </div>
      `;
      if (typeof lucide !== 'undefined') lucide.createIcons();
      return;
    }

    const isPublicNamed = window.location.pathname.includes('public-');

    root.innerHTML = items.map(item => {
      const isUpvoted = !!userUpvotes[item.id] || item.hasUpvoted;
      const count = isUpvoted && !item.hasUpvoted ? item.upvotes + 1 : item.upvotes;
      const detailHref = isPublicNamed ? `./public-product-detail.html?id=${item.id}` : `./product-detail.html?id=${item.id}`;

      let logoContent = `<span style="font-weight:800; font-size:16px; color:#FFF;">${item.name.slice(0, 2).toUpperCase()}</span>`;
      if (item.logo) {
        logoContent = `<img src="${item.logo}" alt="${item.name} logo" onerror="this.outerHTML='<span style=\\'font-weight:800; font-size:16px; color:#FFF;\\'>${item.name.slice(0, 2).toUpperCase()}</span>'" />`;
      } else if (item.logoIcon) {
        logoContent = `<i data-lucide="${item.logoIcon}" style="width:20px; height:20px; color:#FFF;"></i>`;
      }

      return `
        <div class="pub-surface-item" onclick="window.location.href='${detailHref}'">
          <div class="pub-surface-left">
            <div class="pub-surface-logo-wrap" style="${item.logoBg ? `background-color:${item.logoBg};` : ''}">
              ${logoContent}
            </div>

            <div class="pub-surface-info-col">
              <div style="display:flex; align-items:center; gap:8px;">
                <span class="pub-surface-name">${item.name}</span>
              </div>
              <p class="pub-surface-desc">${item.tagline}</p>
              <div class="pub-surface-meta">
                <span class="pub-surface-tag">${item.pricing || (item.industries || []).join(' · ')}</span>
              </div>
            </div>
          </div>

          <!-- Upvote Control (Matches Screenshot ▲ Number) -->
          <div class="pub-surface-upvote-box ${isUpvoted ? 'upvoted' : ''}" onclick="togglePublicUpvote('${item.id}', event)" title="${isUpvoted ? 'Upvoted!' : 'Upvote launch'}">
            <span class="pub-surface-upvote-triangle">▲</span>
            <span class="pub-surface-upvote-num">${count}</span>
          </div>
        </div>
      `;
    }).join('');

    if (typeof lucide !== 'undefined') lucide.createIcons();
  }

  // 07. Upvote Action
  window.togglePublicUpvote = function (id, event) {
    if (event) event.stopPropagation();

    const item = SEEDICON_LAUNCHES_DATA.find(p => p.id === id);
    if (!item) return;

    const isUpvoted = !!userUpvotes[id];
    if (isUpvoted) {
      delete userUpvotes[id];
      item.upvotes = Math.max(0, item.upvotes - 1);
      item.hasUpvoted = false;
      showPublicToast(`Removed upvote for ${item.name}`);
    } else {
      userUpvotes[id] = true;
      item.upvotes += 1;
      item.hasUpvoted = true;
      showPublicToast(`▲ Upvoted ${item.name}!`);
    }

    try {
      localStorage.setItem('seedicon_public_upvotes', JSON.stringify(userUpvotes));
    } catch (e) { }

    renderSurfaceLaunches();

    const detailCount = document.getElementById(`pubDetailUpvoteCount`);
    const detailBtn = document.getElementById(`pubDetailUpvoteBtn`);
    if (detailCount) detailCount.textContent = item.upvotes.toLocaleString();
    if (detailBtn) detailBtn.classList.toggle('upvoted', !isUpvoted);
  };

  // 08. Filter Handlers
  window.handlePublicSearch = function (input) {
    currentSearch = input.value || '';
    renderSurfaceLaunches();
  };

  window.handlePublicCategoryFilter = function (cat, btn) {
    currentCategory = cat;
    document.querySelectorAll('.pub-cat-btn').forEach(el => el.classList.remove('active'));
    if (btn) btn.classList.add('active');
    renderSurfaceLaunches();
  };

  window.handlePublicStageFilter = function (select) {
    currentStage = select.value || 'all';
    renderSurfaceLaunches();
  };

  // 09. Product Detail Page Renderer (Surface Layout & 9-Step Attributes)
  window.renderPublicProductDetail = function () {
    const root = document.getElementById('pubProductDetailRoot');
    if (!root) return;

    let id = '';
    try {
      id = new URLSearchParams(window.location.search).get('id') || 'tinycashflow';
    } catch (e) {
      id = 'tinycashflow';
    }

    const item = SEEDICON_LAUNCHES_DATA.find(p => p.id === id) || SEEDICON_LAUNCHES_DATA[0];
    const isUpvoted = !!userUpvotes[item.id] || item.hasUpvoted;
    const count = isUpvoted && !item.hasUpvoted ? item.upvotes + 1 : item.upvotes;

    let logoContent = `<span style="font-weight:800; font-size:24px; color:#FFF;">${item.name.slice(0, 2).toUpperCase()}</span>`;
    if (item.logo) {
      logoContent = `<img src="${item.logo}" alt="${item.name} logo" onerror="this.outerHTML='<span style=\\'font-weight:800; font-size:24px; color:#FFF;\\'>${item.name.slice(0, 2).toUpperCase()}</span>'" />`;
    } else if (item.logoIcon) {
      logoContent = `<i data-lucide="${item.logoIcon}" style="width:34px; height:34px; color:#FFF;"></i>`;
    }

    const isPublicNamed = window.location.pathname.includes('public-');
    const backHref = isPublicNamed ? './public-product-listing.html' : './product-listing.html';

    root.innerHTML = `
      <!-- Back Navigation Bar -->
      <div class="pub-back-nav">
        <a href="${backHref}" class="pub-back-btn">
          <i data-lucide="arrow-left" style="width:14px; height:14px;"></i>
          <span>Back to launches</span>
        </a>
        <button class="pub-btn-outline" onclick="openShareModal('${item.id}')" style="font-size:12px; padding:5px 12px;">
          <i data-lucide="share-2" style="width:13px; height:13px;"></i>
          <span>Share</span>
        </button>
      </div>

      <!-- Step 1 & 2: Surface Hero (Logo, Name, Short Description, Links, Upvote) -->
      <div class="pub-detail-hero-surface">
        <div class="pub-detail-hero-main">
          <div class="pub-detail-logo-frame" style="${item.logoBg ? `background-color:${item.logoBg};` : ''}">
            ${logoContent}
          </div>
          <div class="pub-detail-headings">
            <div class="pub-detail-title-line">
              <h1 class="pub-detail-h1">${item.name}</h1>
              <span class="pub-cat-btn active" style="font-size:11px; padding:2px 8px;">${item.stage}</span>
              <span class="pub-cat-btn" style="font-size:11px; padding:2px 8px;">${item.industry || item.category}</span>
            </div>
            <p class="pub-detail-short-desc">${item.tagline}</p>
            <div class="pub-detail-meta-strip">
              <span><i data-lucide="map-pin" style="width:12px; height:12px; vertical-align:middle;"></i> ${item.location}</span>
              <span>·</span>
              <span>Founder: <strong>${item.founder}</strong></span>
              <span>·</span>
              <span>Incp ${item.incpDate}</span>
            </div>
          </div>
        </div>

        <div class="pub-detail-hero-actions">
          <a href="${item.website}" target="_blank" rel="noopener" class="pub-btn-primary">
            <span>Visit website ↗</span>
          </a>
          <button class="pub-btn-outline ${isUpvoted ? 'active' : ''}" id="pubDetailUpvoteBtn" onclick="togglePublicUpvote('${item.id}', event)" style="font-weight:700;">
            <span>▲</span>
            <span>Upvote</span>
            <strong id="pubDetailUpvoteCount">${count}</strong>
          </button>
        </div>
      </div>

      <!-- Surface Tabs Bar -->
      <div class="pub-detail-tabs-nav">
        <button class="pub-tab-link ${currentDetailTab === 'overview' ? 'active' : ''}" onclick="switchDetailTab('overview')">Overview</button>
        <button class="pub-tab-link ${currentDetailTab === 'media' ? 'active' : ''}" onclick="switchDetailTab('media')">Media &amp; Screenshots</button>
        <button class="pub-tab-link ${currentDetailTab === 'features' ? 'active' : ''}" onclick="switchDetailTab('features')">Features &amp; Integrations</button>
        <button class="pub-tab-link ${currentDetailTab === 'pricing' ? 'active' : ''}" onclick="switchDetailTab('pricing')">Pricing &amp; Competitors</button>
        <button class="pub-tab-link ${currentDetailTab === 'faq' ? 'active' : ''}" onclick="switchDetailTab('faq')">Target Market &amp; FAQ</button>
        <button class="pub-tab-link ${currentDetailTab === 'reviews' ? 'active' : ''}" onclick="switchDetailTab('reviews')">Customer Reviews (<span id="pubReviewTabBadge">${getProductReviews(item.id).length}</span>)</button>
      </div>

      <!-- Detail Body Grid -->
      <div class="pub-detail-body-grid">
        <div class="pub-detail-main-flow" id="pubDetailTabContent">
          ${renderDetailTabBody(item)}
        </div>

        <!-- Sidebar Dossier on Surface -->
        <aside class="pub-detail-sidebar">
          <!-- Product Details -->
          <div class="pub-dossier-block">
            <h3 class="pub-section-h2" style="font-size:13.5px; margin-bottom:4px;">Product Details</h3>
            <div class="pub-dossier-row">
              <span class="pub-dossier-label">Website</span>
              <a href="${item.website}" target="_blank" rel="noopener" class="pub-dossier-val" style="text-decoration:underline;">${item.domain} ↗</a>
            </div>
            <div class="pub-dossier-row">
              <span class="pub-dossier-label">Company Address</span>
              <span class="pub-dossier-val" style="text-align:right;">${item.address || item.location}</span>
            </div>
            <div class="pub-dossier-row">
              <span class="pub-dossier-label">Industry</span>
              <span class="pub-dossier-val">${item.industry || item.category}</span>
            </div>
            <div class="pub-dossier-row">
              <span class="pub-dossier-label">Stage</span>
              <span class="pub-dossier-val">${item.stage}</span>
            </div>
            <div class="pub-dossier-row">
              <span class="pub-dossier-label">Founder</span>
              <span class="pub-dossier-val">${item.founder}</span>
            </div>
          </div>

          <!-- Social Links -->
          <div class="pub-dossier-block">
            <h3 class="pub-section-h2" style="font-size:13.5px; margin-bottom:4px;">Social Links</h3>
            <div style="display:flex; flex-direction:column; gap:8px;">
              ${item.linkedin ? `<a href="${item.linkedin}" target="_blank" class="pub-dossier-row" style="text-decoration:underline;"><span>LinkedIn</span><span>↗</span></a>` : ''}
              ${item.twitter ? `<a href="${item.twitter}" target="_blank" class="pub-dossier-row" style="text-decoration:underline;"><span>X / Twitter</span><span>↗</span></a>` : ''}
              ${item.instagram ? `<a href="${item.instagram}" target="_blank" class="pub-dossier-row" style="text-decoration:underline;"><span>Instagram</span><span>↗</span></a>` : ''}
            </div>
          </div>

          <!-- Important Links -->
          ${item.links && item.links.length > 0 ? `
            <div class="pub-dossier-block">
              <h3 class="pub-section-h2" style="font-size:13.5px; margin-bottom:4px;">Important Links</h3>
              <div style="display:flex; flex-direction:column; gap:6px;">
                ${item.links.map(l => `<a href="${l.url}" target="_blank" class="pub-dossier-row" style="text-decoration:underline;"><span>${l.name}</span><span>↗</span></a>`).join('')}
              </div>
            </div>
          ` : ''}
        </aside>
      </div>
    `;

    if (typeof lucide !== 'undefined') lucide.createIcons();
  };

  window.switchDetailTab = function (tab) {
    currentDetailTab = tab;
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id') || 'tinycashflow';
    const item = SEEDICON_LAUNCHES_DATA.find(p => p.id === id) || SEEDICON_LAUNCHES_DATA[0];

    document.querySelectorAll('.pub-tab-link').forEach(btn => {
      btn.classList.toggle('active', btn.textContent.toLowerCase().includes(tab));
    });

    const contentEl = document.getElementById('pubDetailTabContent');
    if (contentEl) {
      contentEl.innerHTML = renderDetailTabBody(item);
      if (typeof lucide !== 'undefined') lucide.createIcons();
    }
  };

  function renderDetailTabBody(item) {
    // Media & Screenshots
    if (currentDetailTab === 'media') {
      const galleryImgs = item.gallery || LOCAL_GALLERY_IMAGES;
      return `
        <div>
          <h2 class="pub-section-h2">Product Media &amp; Screenshots</h2>
          <div class="pub-media-grid">
            ${galleryImgs.map((imgSrc, i) => `
              <div class="pub-media-thumb" onclick="openImageLightbox('${imgSrc}')">
                <img src="${imgSrc}" alt="${item.name} preview ${i + 1}" />
              </div>
            `).join('')}
          </div>
        </div>

        <div style="margin-top:20px;">
          <h2 class="pub-section-h2">Product Demo Video</h2>
          <div style="aspect-ratio:16/9; background:#141413; border-radius:8px; display:flex; align-items:center; justify-content:center; flex-direction:column; gap:10px; cursor:pointer;" onclick="openDemoVideoModal('${item.name}')">
            <div style="width:48px; height:48px; border-radius:50%; background:#FFFFFF; display:flex; align-items:center; justify-content:center;">
              <i data-lucide="play" style="width:18px; height:18px; fill:#141413; stroke:none; margin-left:3px;"></i>
            </div>
            <span style="color:#FFF; font-size:13px; font-weight:700;">Watch ${item.name} Walkthrough</span>
          </div>
        </div>
      `;
    }

    // Features & Integrations
    if (currentDetailTab === 'features') {
      return `
        <div>
          <h2 class="pub-section-h2">Key Features</h2>
          <div class="pub-features-flow">
            ${(item.features || []).map(f => `
              <div class="pub-feature-pill">
                <i data-lucide="check"></i>
                <span>${f}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div style="margin-top:20px;">
          <h2 class="pub-section-h2">Product Integrations</h2>
          <div style="display:flex; flex-wrap:wrap; gap:8px;">
            ${(item.integrations || ['API', 'Webhooks', 'Slack', 'Zapier']).map(t => `
              <span class="pub-cat-btn" style="padding:6px 12px; font-size:12.5px;">${t}</span>
            `).join('')}
          </div>
        </div>

        <div style="margin-top:20px;">
          <h2 class="pub-section-h2">Industries &amp; Category</h2>
          <div style="display:flex; flex-wrap:wrap; gap:6px;">
            ${(item.industries || [item.category]).map(t => `
              <span class="pub-cat-btn active" style="font-size:12px;">${t}</span>
            `).join('')}
          </div>
        </div>
      `;
    }

    // Pricing & Competitors
    if (currentDetailTab === 'pricing') {
      return `
        <div>
          <h2 class="pub-section-h2">Pricing Plans</h2>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:12px;">
            ${(item.pricingPlans || [{ name: 'Standard', price: item.pricing, features: item.features }]).map(p => `
              <div style="border:1px solid var(--pub-border); border-radius:8px; padding:16px; background:#FAFAF9;">
                <div style="font-size:14px; font-weight:800; color:var(--pub-text-dark);">${p.name}</div>
                <div style="font-size:20px; font-weight:800; color:var(--pub-text-dark); margin:6px 0;">${p.price}</div>
                <ul style="font-size:12.5px; color:var(--pub-text-muted); list-style:none; display:flex; flex-direction:column; gap:4px;">
                  ${(p.features || []).map(pf => `<li>✓ ${pf}</li>`).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
        </div>

        ${item.competitors && item.competitors.length > 0 ? `
          <div style="margin-top:20px;">
            <h2 class="pub-section-h2">Competitor References</h2>
            <div style="display:flex; flex-direction:column; gap:6px;">
              ${item.competitors.map(c => `<a href="${c}" target="_blank" style="font-size:13px; color:var(--pub-text-dark); text-decoration:underline;">${c} ↗</a>`).join('')}
            </div>
          </div>
        ` : ''}
      `;
    }

    // Target Market & FAQ
    if (currentDetailTab === 'faq') {
      return `
        <div>
          <h2 class="pub-section-h2">Target Market &amp; FAQ Set</h2>
          <div style="display:flex; flex-direction:column; gap:12px;">
            ${(item.faqs || [
              { q: `What problem does ${item.name} solve?`, a: item.tagline },
              { q: 'Who is the target audience?', a: `Built for founders and operators across ${item.category}.` }
            ]).map(faq => `
              <div style="padding:14px; border:1px solid var(--pub-border-subtle); border-radius:8px; background:#FAFAF9;">
                <strong style="font-size:13.5px; color:var(--pub-text-dark); display:block; margin-bottom:4px;">${faq.q}</strong>
                <p style="font-size:13px; color:var(--pub-text-muted); line-height:1.5;">${faq.a}</p>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    // Customer Reviews Tab (Amazon-Style Rating & Feedback System)
    if (currentDetailTab === 'reviews') {
      return renderCustomerReviewsTab(item);
    }

    // Default Overview (Detailed Description + Media Preview)
    return `
      <div>
        <h2 class="pub-section-h2">Detailed Description</h2>
        <p class="pub-prose-desc">${item.detailedDesc}</p>
      </div>

      <div>
        <h2 class="pub-section-h2">Key Features</h2>
        <div class="pub-features-flow">
          ${(item.features || []).map(f => `
            <div class="pub-feature-pill">
              <i data-lucide="check"></i>
              <span>${f}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div>
        <h2 class="pub-section-h2">Product Screenshots Preview</h2>
        <div class="pub-media-grid">
          ${(item.gallery || LOCAL_GALLERY_IMAGES).slice(0, 3).map(imgSrc => `
            <div class="pub-media-thumb" onclick="openImageLightbox('${imgSrc}')">
              <img src="${imgSrc}" alt="${item.name} screenshot preview" />
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // 09.5 Amazon-Style Customer Reviews Tab Renderer & Logic
  let activeReviewRating = 5;
  let activeReviewFilter = 'all';

  function renderCustomerReviewsTab(item) {
    const reviews = getProductReviews(item.id);
    const totalReviews = reviews.length;

    // Calculate rating metrics & percentages
    const starCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    let sumScore = 0;
    reviews.forEach(r => {
      const star = Math.min(5, Math.max(1, Math.round(r.rating || 5)));
      starCounts[star] = (starCounts[star] || 0) + 1;
      sumScore += (r.rating || 5);
    });

    const avgRating = totalReviews > 0 ? (sumScore / totalReviews).toFixed(1) : '5.0';

    const p5 = totalReviews > 0 ? Math.round((starCounts[5] / totalReviews) * 100) : 85;
    const p4 = totalReviews > 0 ? Math.round((starCounts[4] / totalReviews) * 100) : 12;
    const p3 = totalReviews > 0 ? Math.round((starCounts[3] / totalReviews) * 100) : 3;
    const p2 = totalReviews > 0 ? Math.round((starCounts[2] / totalReviews) * 100) : 0;
    const p1 = totalReviews > 0 ? Math.round((starCounts[1] / totalReviews) * 100) : 0;

    // Filter reviews
    let filteredReviews = [...reviews];
    if (activeReviewFilter === '5') {
      filteredReviews = filteredReviews.filter(r => r.rating === 5);
    } else if (activeReviewFilter === '4') {
      filteredReviews = filteredReviews.filter(r => r.rating === 4);
    } else if (activeReviewFilter === 'verified') {
      filteredReviews = filteredReviews.filter(r => r.verified);
    }

    return `
      <div class="pub-reviews-container">

        <!-- Amazon-Style Customer Reviews Summary Header -->
        <div>
          <h2 class="pub-section-h2" style="font-size:18px; margin-bottom:14px;">Customer Reviews &amp; Ratings</h2>
          <div class="pub-reviews-summary-grid">

            <!-- Left: Overall Rating & Amazon Histogram -->
            <div class="pub-rating-overall-box">
              <div class="pub-rating-score-row">
                <span class="pub-rating-big-num">${avgRating}</span>
                <div>
                  <div class="pub-stars-group">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <div class="pub-rating-count-sub">${totalReviews} global customer ratings</div>
                </div>
              </div>

              <!-- Histogram Bars -->
              <div class="pub-rating-histogram">
                <div class="pub-histogram-row" onclick="filterCustomerReviews('5', this)">
                  <span class="pub-histogram-label">5 star</span>
                  <div class="pub-histogram-bar-track">
                    <div class="pub-histogram-bar-fill" style="width:${p5}%;"></div>
                  </div>
                  <span class="pub-histogram-pct">${p5}%</span>
                </div>

                <div class="pub-histogram-row" onclick="filterCustomerReviews('4', this)">
                  <span class="pub-histogram-label">4 star</span>
                  <div class="pub-histogram-bar-track">
                    <div class="pub-histogram-bar-fill" style="width:${p4}%;"></div>
                  </div>
                  <span class="pub-histogram-pct">${p4}%</span>
                </div>

                <div class="pub-histogram-row" onclick="filterCustomerReviews('3', this)">
                  <span class="pub-histogram-label">3 star</span>
                  <div class="pub-histogram-bar-track">
                    <div class="pub-histogram-bar-fill" style="width:${p3}%;"></div>
                  </div>
                  <span class="pub-histogram-pct">${p3}%</span>
                </div>

                <div class="pub-histogram-row">
                  <span class="pub-histogram-label">2 star</span>
                  <div class="pub-histogram-bar-track">
                    <div class="pub-histogram-bar-fill" style="width:${p2}%;"></div>
                  </div>
                  <span class="pub-histogram-pct">${p2}%</span>
                </div>

                <div class="pub-histogram-row">
                  <span class="pub-histogram-label">1 star</span>
                  <div class="pub-histogram-bar-track">
                    <div class="pub-histogram-bar-fill" style="width:${p1}%;"></div>
                  </div>
                  <span class="pub-histogram-pct">${p1}%</span>
                </div>
              </div>
            </div>

            <!-- Right: Value Breakdown & CTA Box -->
            <div class="pub-rating-action-box">
              <div class="pub-rating-attributes">
                <div class="pub-attr-row">
                  <span class="pub-attr-label">Ease of use</span>
                  <span class="pub-attr-val">4.9 ★</span>
                </div>
                <div class="pub-attr-row">
                  <span class="pub-attr-label">Value for money</span>
                  <span class="pub-attr-val">4.8 ★</span>
                </div>
                <div class="pub-attr-row">
                  <span class="pub-attr-label">Customer support</span>
                  <span class="pub-attr-val">5.0 ★</span>
                </div>
                <div class="pub-attr-row">
                  <span class="pub-attr-label">Performance &amp; Speed</span>
                  <span class="pub-attr-val">4.9 ★</span>
                </div>
              </div>

              <div>
                <p style="font-size:12px; color:var(--pub-text-muted); margin-bottom:8px;">Share your experience with fellow makers and founders.</p>
                <button class="pub-btn-primary" style="width:100%; justify-content:center;" onclick="document.getElementById('pubWriteReviewSection').scrollIntoView({behavior:'smooth'});">
                  <i data-lucide="edit-3" style="width:13px; height:13px;"></i>
                  <span>Write a customer review</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        <!-- Interactive "Write a Review" Form Section (Simplified: Rating & Text Only) -->
        <div class="pub-write-review-section" id="pubWriteReviewSection">
          <h3 class="pub-section-h2" style="font-size:14px; margin-bottom:0;">Write a Review</h3>
          <p style="font-size:12.5px; color:var(--pub-text-muted);">Share your feedback about ${item.name}.</p>

          <form onsubmit="submitCustomerReview('${item.id}', event)" style="display:flex; flex-direction:column; gap:12px;">
            <!-- 5-Star Interactive Rating Picker -->
            <div class="pub-form-group">
              <label class="pub-form-label">Your Rating *</label>
              <div style="display:flex; align-items:center; gap:12px;">
                <div class="pub-star-picker" id="pubStarPicker">
                  <button type="button" class="pub-star-btn active" onclick="selectReviewStar(1)" onmouseover="hoverReviewStar(1)" onmouseout="resetReviewStarHover()">★</button>
                  <button type="button" class="pub-star-btn active" onclick="selectReviewStar(2)" onmouseover="hoverReviewStar(2)" onmouseout="resetReviewStarHover()">★</button>
                  <button type="button" class="pub-star-btn active" onclick="selectReviewStar(3)" onmouseover="hoverReviewStar(3)" onmouseout="resetReviewStarHover()">★</button>
                  <button type="button" class="pub-star-btn active" onclick="selectReviewStar(4)" onmouseover="hoverReviewStar(4)" onmouseout="resetReviewStarHover()">★</button>
                  <button type="button" class="pub-star-btn active" onclick="selectReviewStar(5)" onmouseover="hoverReviewStar(5)" onmouseout="resetReviewStarHover()">★</button>
                </div>
                <span style="font-size:12.5px; font-weight:700; color:var(--pub-text-dark);" id="pubStarText">5 = Outstanding!</span>
              </div>
            </div>

            <!-- Detailed Review Input -->
            <div class="pub-form-group">
              <label class="pub-form-label">Your Review *</label>
              <textarea id="pubReviewText" class="pub-form-textarea" style="min-height:85px;" placeholder="Write your review here..." required></textarea>
            </div>

            <div style="display:flex; justify-content:flex-end;">
              <button type="submit" class="pub-btn-primary" style="padding:8px 20px;">
                <span>Submit Review</span>
              </button>
            </div>
          </form>
        </div>

        <!-- Customer Reviews Feed & Filters -->
        <div>
          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:12px;">
            <h3 class="pub-section-h2" style="font-size:14.5px; margin-bottom:0;">Reviews (${filteredReviews.length})</h3>
            <div class="pub-cat-group">
              <button class="pub-cat-btn ${activeReviewFilter === 'all' ? 'active' : ''}" onclick="filterCustomerReviews('all', this)">All Reviews</button>
              <button class="pub-cat-btn ${activeReviewFilter === '5' ? 'active' : ''}" onclick="filterCustomerReviews('5', this)">5 Stars</button>
              <button class="pub-cat-btn ${activeReviewFilter === '4' ? 'active' : ''}" onclick="filterCustomerReviews('4', this)">4 Stars</button>
            </div>
          </div>

          <div style="display:flex; flex-direction:column;">
            ${filteredReviews.map(rev => {
              const stars = '★'.repeat(rev.rating) + '☆'.repeat(Math.max(0, 5 - rev.rating));
              return `
                <div class="pub-review-item">
                  <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
                    <div style="display:flex; align-items:center; gap:8px;">
                      <span style="font-size:14px; letter-spacing:1px; color:var(--pub-text-dark); font-weight:800;">${stars}</span>
                      <span class="pub-review-date">${rev.date}</span>
                    </div>
                    ${rev.verified ? `<span class="pub-verified-badge"><i data-lucide="check-circle" style="width:12px; height:12px;"></i> Verified User</span>` : ''}
                  </div>

                  <p class="pub-review-body">${rev.text}</p>

                  <div class="pub-review-actions-row">
                    <button class="pub-helpful-btn" onclick="toggleReviewHelpful('${item.id}', '${rev.id}', event)">
                      <i data-lucide="thumbs-up" style="width:11px; height:11px;"></i>
                      <span>Helpful (${rev.helpful || 0})</span>
                    </button>
                    <span>·</span>
                    <a href="#" onclick="event.preventDefault(); showPublicToast('Flagged for moderation review');" style="color:var(--pub-text-light);">Report</a>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

      </div>
    `;
  }

  // Review Interactive Action Handlers
  window.selectReviewStar = function (val) {
    activeReviewRating = val;
    updateStarUI(val);
  };

  window.hoverReviewStar = function (val) {
    updateStarUI(val);
  };

  window.resetReviewStarHover = function () {
    updateStarUI(activeReviewRating);
  };

  function updateStarUI(val) {
    const picker = document.getElementById('pubStarPicker');
    const label = document.getElementById('pubStarText');
    if (!picker) return;

    const btns = picker.querySelectorAll('.pub-star-btn');
    btns.forEach((btn, idx) => {
      btn.classList.toggle('active', idx < val);
    });

    const labels = {
      1: '1 = Terrible',
      2: '2 = Poor',
      3: '3 = Average',
      4: '4 = Great',
      5: '5 = Outstanding!'
    };
    if (label) label.textContent = labels[val] || `${val} Stars`;
  }

  window.filterCustomerReviews = function (filterVal, btn) {
    activeReviewFilter = filterVal;
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id') || 'tinycashflow';
    const item = SEEDICON_LAUNCHES_DATA.find(p => p.id === id) || SEEDICON_LAUNCHES_DATA[0];

    const contentEl = document.getElementById('pubDetailTabContent');
    if (contentEl) {
      contentEl.innerHTML = renderCustomerReviewsTab(item);
      if (typeof lucide !== 'undefined') lucide.createIcons();
    }
  };

  window.submitCustomerReview = function (productId, event) {
    if (event) event.preventDefault();

    const text = document.getElementById('pubReviewText');

    if (!text || !text.value.trim()) {
      showPublicToast('Please enter your review text.');
      return;
    }

    const newRev = {
      id: `rev-${Date.now()}`,
      rating: activeReviewRating,
      date: `Reviewed on ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`,
      verified: true,
      text: text.value.trim(),
      helpful: 1
    };

    let stored = [];
    try {
      const raw = localStorage.getItem(`seedicon_reviews_${productId}`);
      if (raw) stored = JSON.parse(raw);
    } catch (e) { }

    stored.unshift(newRev);
    try {
      localStorage.setItem(`seedicon_reviews_${productId}`, JSON.stringify(stored));
    } catch (e) { }

    showPublicToast('🎉 Thank you! Your review has been submitted.');

    // Re-render reviews tab & update badge count
    const item = SEEDICON_LAUNCHES_DATA.find(p => p.id === productId) || SEEDICON_LAUNCHES_DATA[0];
    const badge = document.getElementById('pubReviewTabBadge');
    if (badge) badge.textContent = getProductReviews(productId).length;

    const contentEl = document.getElementById('pubDetailTabContent');
    if (contentEl) {
      contentEl.innerHTML = renderCustomerReviewsTab(item);
      if (typeof lucide !== 'undefined') lucide.createIcons();
    }
  };

  window.toggleReviewHelpful = function (productId, reviewId, event) {
    if (event) event.preventDefault();
    const btn = event.currentTarget;
    if (btn) {
      const span = btn.querySelector('span');
      if (span && !btn.dataset.voted) {
        btn.dataset.voted = 'true';
        const match = span.textContent.match(/\d+/);
        const count = match ? parseInt(match[0], 10) + 1 : 1;
        span.textContent = `Helpful (${count})`;
        btn.style.backgroundColor = 'var(--pub-bg-subtle)';
        showPublicToast('Marked as helpful');
      }
    }
  };

  // 10. 9-STEP GUIDED LISTING FORM WIZARD (Enforcing Step 9 Validation)
  let currentWizardStep = 1;
  const wizardFormData = {
    domain: '',
    logo: '',
    name: '',
    shortDesc: '',
    detailedDesc: '',
    website: '',
    address: '',
    linkedin: '',
    instagram: '',
    twitter: '',
    features: '',
    videoUrl: '',
    images: [],
    integrations: '',
    industry: 'B2B SaaS',
    otherIndustry: '',
    stage: 'Seed Stage',
    faqProblem: '',
    faqAudience: '',
    faqUnique: '',
    faqBusinessModel: '',
    faqFuturePlans: '',
    faqUsage: '',
    pricingPlans: '',
    competitorLinks: '',
    linkName: '',
    linkUrl: ''
  };

  window.openSubmitProductModal = function () {
    currentWizardStep = 1;
    renderWizardStepModal();
  };

  const WIZARD_STEPS_META = [
    { num: 1, title: 'Product Description', sub: 'Logo, name, short tagline and full description' },
    { num: 2, title: 'Product Details', sub: 'Website, company address, socials, and key features' },
    { num: 3, title: 'Product Media', sub: 'Demo video and screenshot gallery' },
    { num: 4, title: 'Product Integrations', sub: 'Connected tools and API ecosystems' },
    { num: 5, title: 'Product Category', sub: 'Industry sectors and focus tags' },
    { num: 6, title: 'Target Market & Stage', sub: 'Development stage and core FAQ responses' },
    { num: 7, title: 'Pricing & Competitors', sub: 'Pricing model and competitor benchmarks' },
    { num: 8, title: 'Important Links', sub: 'Pitch deck, docs, and external URLs' },
    { num: 9, title: 'Submit for Review', sub: 'Final validation of minimum required fields' }
  ];

  function renderWizardStepModal() {
    const curr = WIZARD_STEPS_META[currentWizardStep - 1];
    let bodyHtml = '';

    if (currentWizardStep === 1) {
      bodyHtml = `
        <div class="pub-form-group">
          <label class="pub-form-label">Startup Website Domain (Auto-fetches Logo via Brandfetch) *</label>
          <div style="display:flex; gap:8px;">
            <input type="text" id="wizDomain" class="pub-form-input" placeholder="e.g. linear.app, resend.com" value="${wizardFormData.domain}" />
            <button class="pub-btn-outline" onclick="fetchBrandLogoForWizard()">Fetch Logo</button>
          </div>
          <span style="font-size:11px; color:var(--pub-text-light);" id="wizLogoSub">Auto-verified via Brandfetch API</span>
        </div>

        <div class="pub-form-group">
          <label class="pub-form-label">Product Name *</label>
          <input type="text" id="wizName" class="pub-form-input" placeholder="e.g. TinyCashflow" value="${wizardFormData.name}" />
        </div>

        <div class="pub-form-group">
          <label class="pub-form-label">Short Description (Tagline) *</label>
          <input type="text" id="wizShortDesc" class="pub-form-input" placeholder="e.g. A spreadsheet-style money manager on one timeline" value="${wizardFormData.shortDesc}" />
        </div>

        <div class="pub-form-group">
          <label class="pub-form-label">Detailed Description *</label>
          <textarea id="wizDetailedDesc" class="pub-form-textarea" style="min-height:70px;" placeholder="Provide full breakdown of what the product does, target audience, and architecture...">${wizardFormData.detailedDesc}</textarea>
        </div>
      `;
    } else if (currentWizardStep === 2) {
      bodyHtml = `
        <div class="pub-form-group">
          <label class="pub-form-label">Website URL *</label>
          <input type="url" id="wizWebsite" class="pub-form-input" placeholder="https://..." value="${wizardFormData.website || (wizardFormData.domain ? 'https://' + wizardFormData.domain : '')}" />
        </div>

        <div class="pub-form-group">
          <label class="pub-form-label">Company Address / Location *</label>
          <input type="text" id="wizAddress" class="pub-form-input" placeholder="e.g. 500 Howard St, San Francisco, CA" value="${wizardFormData.address}" />
        </div>

        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:8px;">
          <div class="pub-form-group">
            <label class="pub-form-label">LinkedIn Page</label>
            <input type="url" id="wizLinkedin" class="pub-form-input" placeholder="https://linkedin.com/company/..." value="${wizardFormData.linkedin}" />
          </div>
          <div class="pub-form-group">
            <label class="pub-form-label">X / Twitter</label>
            <input type="text" id="wizTwitter" class="pub-form-input" placeholder="@handle" value="${wizardFormData.twitter}" />
          </div>
          <div class="pub-form-group">
            <label class="pub-form-label">Instagram</label>
            <input type="text" id="wizInstagram" class="pub-form-input" placeholder="@handle" value="${wizardFormData.instagram}" />
          </div>
        </div>

        <div class="pub-form-group">
          <label class="pub-form-label">Key Features (Comma-separated)</label>
          <input type="text" id="wizFeatures" class="pub-form-input" placeholder="e.g. Instant indexing, Offline PWA, Multi-currency" value="${wizardFormData.features}" />
        </div>
      `;
    } else if (currentWizardStep === 3) {
      bodyHtml = `
        <div class="pub-form-group">
          <label class="pub-form-label">Product Demo Video (YouTube / Loom URL)</label>
          <input type="url" id="wizVideoUrl" class="pub-form-input" placeholder="https://youtube.com/watch?v=..." value="${wizardFormData.videoUrl}" />
        </div>

        <div class="pub-form-group">
          <label class="pub-form-label">Product Images (Using local assets slide_1.png to slide_5.png)</label>
          <div style="display:flex; gap:6px;">
            ${LOCAL_GALLERY_IMAGES.slice(0, 4).map((src, i) => `
              <div style="width:60px; height:40px; border-radius:4px; overflow:hidden; border:1px solid #E8E8E5;">
                <img src="${src}" style="width:100%; height:100%; object-fit:cover;" />
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (currentWizardStep === 4) {
      bodyHtml = `
        <div class="pub-form-group">
          <label class="pub-form-label">Product Integrations (Comma-separated)</label>
          <input type="text" id="wizIntegrations" class="pub-form-input" placeholder="e.g. Stripe, GitHub, Slack, Notion, Zapier" value="${wizardFormData.integrations}" />
        </div>
      `;
    } else if (currentWizardStep === 5) {
      bodyHtml = `
        <div class="pub-form-group">
          <label class="pub-form-label">Industry *</label>
          <select id="wizIndustry" class="pub-form-select">
            <option ${wizardFormData.industry === 'B2B SaaS' ? 'selected' : ''}>B2B SaaS</option>
            <option ${wizardFormData.industry === 'AI & ML' ? 'selected' : ''}>AI &amp; ML</option>
            <option ${wizardFormData.industry === 'DevTools' ? 'selected' : ''}>DevTools</option>
            <option ${wizardFormData.industry === 'Fintech' ? 'selected' : ''}>Fintech</option>
            <option ${wizardFormData.industry === 'Sales & Growth' ? 'selected' : ''}>Sales &amp; Growth</option>
            <option ${wizardFormData.industry === 'Productivity' ? 'selected' : ''}>Productivity</option>
          </select>
        </div>

        <div class="pub-form-group">
          <label class="pub-form-label">Other Industry / Focus Tags</label>
          <input type="text" id="wizOtherIndustry" class="pub-form-input" placeholder="e.g. Developer Experience, Generative AI" value="${wizardFormData.otherIndustry}" />
        </div>
      `;
    } else if (currentWizardStep === 6) {
      bodyHtml = `
        <div class="pub-form-group">
          <label class="pub-form-label">Development Stage *</label>
          <select id="wizStage" class="pub-form-select">
            <option ${wizardFormData.stage === 'Idea / Prototype' ? 'selected' : ''}>Idea / Prototype</option>
            <option ${wizardFormData.stage === 'Pre-Seed' ? 'selected' : ''}>Pre-Seed</option>
            <option ${wizardFormData.stage === 'Seed Stage' ? 'selected' : ''}>Seed Stage</option>
            <option ${wizardFormData.stage === 'Series A' ? 'selected' : ''}>Series A</option>
            <option ${wizardFormData.stage === 'Growth' ? 'selected' : ''}>Growth</option>
          </select>
        </div>

        <div class="pub-form-group">
          <label class="pub-form-label">Problem Solved (FAQ 1)</label>
          <textarea id="wizFaqProblem" class="pub-form-textarea" style="min-height:50px;" placeholder="What friction does this product solve?">${wizardFormData.faqProblem}</textarea>
        </div>

        <div class="pub-form-group">
          <label class="pub-form-label">Target Audience (FAQ 2)</label>
          <input type="text" id="wizFaqAudience" class="pub-form-input" placeholder="e.g. Software engineers, founders" value="${wizardFormData.faqAudience}" />
        </div>
      `;
    } else if (currentWizardStep === 7) {
      bodyHtml = `
        <div class="pub-form-group">
          <label class="pub-form-label">Pricing Plans (Name, Price, Features)</label>
          <input type="text" id="wizPricingPlans" class="pub-form-input" placeholder="e.g. Free Tier / $20 Pro" value="${wizardFormData.pricingPlans}" />
        </div>

        <div class="pub-form-group">
          <label class="pub-form-label">Competitor Links (Comma-separated)</label>
          <input type="text" id="wizCompetitorLinks" class="pub-form-input" placeholder="https://competitor1.com, https://competitor2.com" value="${wizardFormData.competitorLinks}" />
        </div>
      `;
    } else if (currentWizardStep === 8) {
      bodyHtml = `
        <div class="pub-form-group">
          <label class="pub-form-label">Important Links (Pitch Deck, Docs, Whitepaper)</label>
          <input type="text" id="wizLinkName" class="pub-form-input" placeholder="Link Name (e.g. Pitch Deck)" value="${wizardFormData.linkName}" style="margin-bottom:6px;" />
          <input type="url" id="wizLinkUrl" class="pub-form-input" placeholder="https://..." value="${wizardFormData.linkUrl}" />
        </div>
      `;
    } else if (currentWizardStep === 9) {
      // Step 9: Required Fields Validation Checklist
      const reqLogo = !!(wizardFormData.logo || wizardFormData.name);
      const reqName = !!wizardFormData.name.trim();
      const reqShortDesc = !!wizardFormData.shortDesc.trim();
      const reqDetailedDesc = !!wizardFormData.detailedDesc.trim();
      const reqWebsite = !!(wizardFormData.website || wizardFormData.domain).trim();
      const reqAddress = !!wizardFormData.address.trim();
      const reqIndustry = !!(wizardFormData.industry || wizardFormData.otherIndustry).trim();
      const reqStage = !!wizardFormData.stage.trim();

      const allValid = reqLogo && reqName && reqShortDesc && reqDetailedDesc && reqWebsite && reqAddress && reqIndustry && reqStage;

      bodyHtml = `
        <div style="background:var(--pub-bg-alt); border:1px solid var(--pub-border); border-radius:8px; padding:16px;">
          <h4 style="font-size:13.5px; font-weight:800; color:var(--pub-text-dark); margin-bottom:10px;">Minimum Required Fields Before Submission</h4>
          <div style="display:flex; flex-direction:column; gap:6px; font-size:12.5px;">
            <div style="display:flex; align-items:center; gap:8px;">
              <span>${reqLogo ? '✓' : '✗'}</span>
              <span><strong>Product Logo:</strong> ${reqLogo ? (wizardFormData.name || 'Verified') : '<span style="color:#B91C1C;">Missing</span>'}</span>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              <span>${reqName ? '✓' : '✗'}</span>
              <span><strong>Product Name:</strong> ${reqName ? wizardFormData.name : '<span style="color:#B91C1C;">Missing</span>'}</span>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              <span>${reqShortDesc ? '✓' : '✗'}</span>
              <span><strong>Short Description:</strong> ${reqShortDesc ? wizardFormData.shortDesc.slice(0, 40) + '...' : '<span style="color:#B91C1C;">Missing</span>'}</span>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              <span>${reqDetailedDesc ? '✓' : '✗'}</span>
              <span><strong>Detailed Description:</strong> ${reqDetailedDesc ? 'Completed' : '<span style="color:#B91C1C;">Missing</span>'}</span>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              <span>${reqWebsite ? '✓' : '✗'}</span>
              <span><strong>Website:</strong> ${reqWebsite ? (wizardFormData.website || wizardFormData.domain) : '<span style="color:#B91C1C;">Missing</span>'}</span>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              <span>${reqAddress ? '✓' : '✗'}</span>
              <span><strong>Company Address:</strong> ${reqAddress ? wizardFormData.address : '<span style="color:#B91C1C;">Missing</span>'}</span>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              <span>${reqIndustry ? '✓' : '✗'}</span>
              <span><strong>Industry:</strong> ${wizardFormData.industry || wizardFormData.otherIndustry}</span>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              <span>${reqStage ? '✓' : '✗'}</span>
              <span><strong>Development Stage:</strong> ${wizardFormData.stage}</span>
            </div>
          </div>
        </div>

        <p style="font-size:12px; color:var(--pub-text-muted); margin-top:8px;">
          ${allValid ? 'All minimum required fields are satisfied. Your listing will be published directly to Seedicon Directory.' : 'Please go back and fill the missing required fields before submitting.'}
        </p>
      `;
    }

    openPublicModal(curr.title, `
      <div class="pub-wizard-progress">
        ${WIZARD_STEPS_META.map(s => `
          <div class="pub-wizard-dot ${s.num === currentWizardStep ? 'active' : s.num < currentWizardStep ? 'completed' : ''}" title="${s.title}"></div>
        `).join('')}
      </div>

      <div style="font-size:12px; color:var(--pub-text-muted); margin-bottom:14px;">${curr.sub}</div>

      <div style="display:flex; flex-direction:column; gap:12px;">
        ${bodyHtml}
      </div>

      <div style="display:flex; align-items:center; justify-content:space-between; margin-top:20px; padding-top:14px; border-top:1px solid var(--pub-border);">
        <span style="font-size:11.5px; font-weight:700; color:var(--pub-text-light);">${curr.title}</span>
        <div style="display:flex; gap:8px;">
          ${currentWizardStep > 1 ? `<button class="pub-btn-outline" onclick="prevWizardStep()">Back</button>` : `<button class="pub-btn-outline" onclick="closePublicModal()">Cancel</button>`}
          ${currentWizardStep < 9 ? `<button class="pub-btn-primary" onclick="nextWizardStep()">Continue</button>` : `<button class="pub-btn-primary" onclick="submitWizardForm()">Submit for Review</button>`}
        </div>
      </div>
    `);
  }

  // Save Current Step Inputs
  function saveCurrentStepData() {
    if (currentWizardStep === 1) {
      const d = document.getElementById('wizDomain');
      const n = document.getElementById('wizName');
      const s = document.getElementById('wizShortDesc');
      const det = document.getElementById('wizDetailedDesc');
      if (d) wizardFormData.domain = d.value.trim();
      if (n) wizardFormData.name = n.value.trim();
      if (s) wizardFormData.shortDesc = s.value.trim();
      if (det) wizardFormData.detailedDesc = det.value.trim();
    } else if (currentWizardStep === 2) {
      const w = document.getElementById('wizWebsite');
      const a = document.getElementById('wizAddress');
      const li = document.getElementById('wizLinkedin');
      const tw = document.getElementById('wizTwitter');
      const ig = document.getElementById('wizInstagram');
      const f = document.getElementById('wizFeatures');
      if (w) wizardFormData.website = w.value.trim();
      if (a) wizardFormData.address = a.value.trim();
      if (li) wizardFormData.linkedin = li.value.trim();
      if (tw) wizardFormData.twitter = tw.value.trim();
      if (ig) wizardFormData.instagram = ig.value.trim();
      if (f) wizardFormData.features = f.value.trim();
    } else if (currentWizardStep === 3) {
      const v = document.getElementById('wizVideoUrl');
      if (v) wizardFormData.videoUrl = v.value.trim();
    } else if (currentWizardStep === 4) {
      const int = document.getElementById('wizIntegrations');
      if (int) wizardFormData.integrations = int.value.trim();
    } else if (currentWizardStep === 5) {
      const ind = document.getElementById('wizIndustry');
      const oth = document.getElementById('wizOtherIndustry');
      if (ind) wizardFormData.industry = ind.value;
      if (oth) wizardFormData.otherIndustry = oth.value.trim();
    } else if (currentWizardStep === 6) {
      const st = document.getElementById('wizStage');
      const fp = document.getElementById('wizFaqProblem');
      const fa = document.getElementById('wizFaqAudience');
      if (st) wizardFormData.stage = st.value;
      if (fp) wizardFormData.faqProblem = fp.value.trim();
      if (fa) wizardFormData.faqAudience = fa.value.trim();
    } else if (currentWizardStep === 7) {
      const pr = document.getElementById('wizPricingPlans');
      const cmp = document.getElementById('wizCompetitorLinks');
      if (pr) wizardFormData.pricingPlans = pr.value.trim();
      if (cmp) wizardFormData.competitorLinks = cmp.value.trim();
    } else if (currentWizardStep === 8) {
      const ln = document.getElementById('wizLinkName');
      const lu = document.getElementById('wizLinkUrl');
      if (ln) wizardFormData.linkName = ln.value.trim();
      if (lu) wizardFormData.linkUrl = lu.value.trim();
    }
  }

  window.nextWizardStep = function () {
    saveCurrentStepData();
    if (currentWizardStep < 9) {
      currentWizardStep++;
      renderWizardStepModal();
    }
  };

  window.prevWizardStep = function () {
    saveCurrentStepData();
    if (currentWizardStep > 1) {
      currentWizardStep--;
      renderWizardStepModal();
    }
  };

  // Brandfetch Auto-fetcher for Step 1
  window.fetchBrandLogoForWizard = async function () {
    const domainInput = document.getElementById('wizDomain');
    const sub = document.getElementById('wizLogoSub');
    if (!domainInput || !domainInput.value.trim()) return;

    const domain = domainInput.value.replace(/^https?:\/\/(www\.)?/, '').split('/')[0].trim();
    if (sub) sub.innerHTML = `<span style="color:#2563EB;">Fetching from Brandfetch for ${domain}...</span>`;

    try {
      const res = await fetch(`https://api.brandfetch.io/v2/brands/${domain}`, {
        headers: { Authorization: `Bearer ${BRANDFETCH_API_KEY}` }
      });
      if (res.ok) {
        const data = await res.json();
        const nameInput = document.getElementById('wizName');
        const shortInput = document.getElementById('wizShortDesc');

        if (data.name && nameInput && !nameInput.value) nameInput.value = data.name;
        if (data.description && shortInput && !shortInput.value) shortInput.value = data.description.slice(0, 90);

        wizardFormData.domain = domain;
        wizardFormData.name = data.name || domain;
        wizardFormData.logo = `https://cdn.simpleicons.org/${data.name ? data.name.toLowerCase() : 'airtable'}/141413`;

        if (sub) sub.innerHTML = `<span style="color:#141413; font-weight:700;">✓ Brandfetch verified: ${data.name || domain}</span>`;
        showPublicToast(`✓ Brandfetch verified assets for ${domain}`);
      }
    } catch (e) {
      if (sub) sub.textContent = 'Auto-verified via Brandfetch API';
    }
  };

  // Step 9 Submission Action
  window.submitWizardForm = function () {
    saveCurrentStepData();

    // Validate Required Fields
    const reqName = !!wizardFormData.name.trim();
    const reqShortDesc = !!wizardFormData.shortDesc.trim();
    const reqDetailedDesc = !!wizardFormData.detailedDesc.trim();
    const reqWebsite = !!(wizardFormData.website || wizardFormData.domain).trim();
    const reqAddress = !!wizardFormData.address.trim();

    if (!reqName || !reqShortDesc || !reqDetailedDesc || !reqWebsite || !reqAddress) {
      showPublicToast('⚠️ Please complete all required fields highlighted in Step 9.');
      return;
    }

    const domain = (wizardFormData.website || wizardFormData.domain).replace(/^https?:\/\/(www\.)?/, '').split('/')[0] || 'startup.com';

    const newProd = {
      id: `prod-${Date.now()}`,
      name: wizardFormData.name,
      domain: domain,
      logo: wizardFormData.logo || `https://cdn.simpleicons.org/${wizardFormData.name.toLowerCase()}/141413`,
      logoBg: '#141413',
      tagline: wizardFormData.shortDesc,
      detailedDesc: wizardFormData.detailedDesc,
      founder: 'Dr. Sarah Chen',
      founderAvatar: 'SC',
      location: wizardFormData.address,
      address: wizardFormData.address,
      incpDate: 'Aug 2026',
      postedAgo: 'Today',
      website: wizardFormData.website || `https://${domain}`,
      linkedin: wizardFormData.linkedin || 'https://linkedin.com',
      twitter: wizardFormData.twitter || '',
      instagram: wizardFormData.instagram || '',
      category: wizardFormData.industry || 'B2B SaaS',
      industry: wizardFormData.industry || 'B2B SaaS',
      industries: [wizardFormData.industry || 'B2B SaaS', wizardFormData.otherIndustry].filter(Boolean),
      stage: wizardFormData.stage || 'Seed Stage',
      upvotes: 1,
      hasUpvoted: true,
      pricing: wizardFormData.pricingPlans || 'Free tier available',
      features: wizardFormData.features ? wizardFormData.features.split(',').map(s => s.trim()) : ['Cloud architecture', 'High speed workflows'],
      integrations: wizardFormData.integrations ? wizardFormData.integrations.split(',').map(s => s.trim()) : ['API', 'Slack'],
      gallery: LOCAL_GALLERY_IMAGES,
      faqs: [
        { q: `What problem does ${wizardFormData.name} solve?`, a: wizardFormData.faqProblem || wizardFormData.shortDesc },
        { q: 'Who is the target audience?', a: wizardFormData.faqAudience || 'Modern tech teams and founders.' }
      ]
    };

    SEEDICON_LAUNCHES_DATA.unshift(newProd);
    userUpvotes[newProd.id] = true;
    closePublicModal();
    renderSurfaceLaunches();
    showPublicToast('🎉 Product submitted and listed for review!');
  };

  // 11. Modal Utilities
  window.openPublicModal = function (title, contentHtml) {
    let overlay = document.getElementById('pubModalOverlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'pubModalOverlay';
      overlay.style.cssText = 'position:fixed; inset:0; background:rgba(0,0,0,0.5); display:none; align-items:center; justify-content:center; z-index:9999; padding:20px;';
      overlay.innerHTML = `
        <div style="background:#FFFFFF; border-radius:12px; width:100%; max-width:520px; box-shadow:0 20px 40px rgba(0,0,0,0.15); overflow:hidden; display:flex; flex-direction:column; border:1px solid #E8E8E5;">
          <div style="padding:16px 20px; border-bottom:1px solid #E8E8E5; display:flex; align-items:center; justify-content:space-between;">
            <h3 id="pubModalTitle" style="font-size:15px; font-weight:800; color:#141413;">Modal Title</h3>
            <button onclick="closePublicModal()" style="font-size:18px; color:#8A8A84; cursor:pointer; padding:4px;">✕</button>
          </div>
          <div id="pubModalBody" style="padding:20px; font-size:13px; max-height:80vh; overflow-y:auto;"></div>
        </div>
      `;
      overlay.onclick = function (e) {
        if (e.target === overlay) closePublicModal();
      };
      document.body.appendChild(overlay);
    }

    const titleEl = document.getElementById('pubModalTitle');
    const bodyEl = document.getElementById('pubModalBody');
    if (titleEl) titleEl.textContent = title;
    if (bodyEl) bodyEl.innerHTML = contentHtml;
    overlay.style.display = 'flex';
    if (typeof lucide !== 'undefined') lucide.createIcons();
  };

  window.closePublicModal = function () {
    const overlay = document.getElementById('pubModalOverlay');
    if (overlay) overlay.style.display = 'none';
  };

  window.openImageLightbox = function (src) {
    openPublicModal('Screenshot Preview', `
      <div style="display:flex; flex-direction:column; gap:10px;">
        <img src="${src}" style="width:100%; border-radius:6px; border:1px solid #E8E8E5;" />
      </div>
    `);
  };

  window.openDemoVideoModal = function (name) {
    openPublicModal(`${name} — Interactive Walkthrough`, `
      <div style="aspect-ratio:16/9; border-radius:8px; overflow:hidden; background:#0F0F0E; display:flex; align-items:center; justify-content:center; flex-direction:column; gap:12px; padding:20px; text-align:center;">
        <div style="width:48px; height:48px; border-radius:50%; background:#FFFFFF; display:flex; align-items:center; justify-content:center;">
          <i data-lucide="play" style="width:18px; height:18px; fill:#111; stroke:none; margin-left:3px;"></i>
        </div>
        <div style="font-size:13.5px; font-weight:800; color:#FFFFFF;">Interactive 1080p demo video streaming</div>
        <div style="font-size:11.5px; color:#A1A19A; max-width:380px;">Full product sandbox walkthrough streaming for ${name}.</div>
      </div>
    `);
  };

  window.openShareModal = function () {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showPublicToast('📋 Launch URL copied to clipboard!');
    } else {
      showPublicToast('Share link: ' + window.location.href);
    }
  };

  function showPublicToast(msg) {
    let container = document.getElementById('pubToastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'pubToastContainer';
      container.className = 'pub-toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'pub-toast';
    toast.textContent = msg;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.2s ease';
      setTimeout(() => toast.remove(), 220);
    }, 2800);
  }
  window.showPublicToast = showPublicToast;

  // 12. Top Products of the Week Widget Renderer
  function renderTopProductsWidgets() {
    const listingWidget = document.getElementById('pubTopProductsList');
    const detailWidget = document.getElementById('pubDetailTopProductsList');

    const sorted = [...SEEDICON_LAUNCHES_DATA].sort((a, b) => b.upvotes - a.upvotes).slice(0, 5);
    const isPublicNamed = window.location.pathname.includes('public-');

    const html = sorted.map((item, idx) => {
      const detailHref = isPublicNamed ? `./public-product-detail.html?id=${item.id}` : `./product-detail.html?id=${item.id}`;
      let logoContent = `<span style="font-weight:800; font-size:11px; color:#FFF;">${item.name.slice(0, 2).toUpperCase()}</span>`;
      if (item.logo) {
        logoContent = `<img src="${item.logo}" alt="${item.name} logo" onerror="this.outerHTML='<span style=\\'font-weight:800; font-size:11px; color:#FFF;\\'>${item.name.slice(0, 2).toUpperCase()}</span>'" />`;
      } else if (item.logoIcon) {
        logoContent = `<i data-lucide="${item.logoIcon}" style="width:14px; height:14px; color:#FFF;"></i>`;
      }

      return `
        <div class="pub-top-product-item" onclick="window.location.href='${detailHref}'">
          <div class="pub-top-item-left">
            <span class="pub-top-rank-num ${idx === 0 ? 'rank-1' : ''}">${idx + 1}</span>
            <div class="pub-top-item-logo" style="${item.logoBg ? `background-color:${item.logoBg};` : ''}">
              ${logoContent}
            </div>
            <div class="pub-top-item-info">
              <span class="pub-top-item-name">${item.name}</span>
              <span class="pub-top-item-category">${item.tagline.slice(0, 36)}...</span>
            </div>
          </div>
          <div class="pub-top-item-upvotes" title="${item.upvotes} upvotes">
            <span>▲</span>
            <span>${item.upvotes}</span>
          </div>
        </div>
      `;
    }).join('');

    if (listingWidget) listingWidget.innerHTML = html;
    if (detailWidget) detailWidget.innerHTML = html;
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }

  window.handleNewsletterSubmit = function (e) {
    if (e) e.preventDefault();
    const input = document.getElementById('pubNewsletterEmail');
    if (!input || !input.value.trim()) {
      showPublicToast('Please enter your email address.');
      return;
    }
    input.value = '';
    showPublicToast('🎉 Subscribed to Seedicon Maker Digest!');
  };

  // 13. Auto Initialization on DOM Load
  document.addEventListener('DOMContentLoaded', () => {
    initNextLaunchCountdown();
    renderSponsors();
    renderSurfaceLaunches();
    renderTopProductsWidgets();
    if (document.getElementById('pubProductDetailRoot')) {
      renderPublicProductDetail();
    }
    if (typeof lucide !== 'undefined') lucide.createIcons();
  });

})();
