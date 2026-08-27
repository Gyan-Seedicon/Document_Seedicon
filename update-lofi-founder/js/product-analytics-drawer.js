/**
 * ==========================================================================
 * PRODUCT ANALYTICS RIGHT DRAWER COMPONENT (Seedicon Platform)
 * Reusable JS Component for Detailed Product & Traction Analytics
 * Strict Font Rule: Outfit Only
 * Includes: 4 KPI Cards, ApexCharts Neutral Engagement Graph, Recent Viewers
 * ==========================================================================
 */

(function (window) {
  'use strict';

  // In-memory analytics mock database for posted products
  const PRODUCT_ANALYTICS_DATA = {
    'junify': {
      id: 'junify',
      name: 'Junify',
      logo: 'https://www.google.com/s2/favicons?domain=junify.io&sz=128',
      category: 'B2B SaaS',
      tagline: 'Multi-tenant e-commerce SaaS platform helping brands scale cross-border sales.',
      publishedDate: '12 Jun 2026',
      arr: '$1.2M',
      stats: {
        totalViewers: '3,842',
        viewersChange: '+24% this week',
        totalUpvotes: '48',
        upvotesRank: 'Rank #2 in SaaS',
        totalTimeSpent: '142 hrs',
        timeEngaged: 'High Intent',
        avgViewTime: '3m 42s',
        avgTimePer: 'Per session'
      },
      chartData: {
        '7D': {
          categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          series: [240, 310, 420, 560, 490, 680, 810],
          peak: '810 Views (Sun)'
        },
        '30D': {
          categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          series: [780, 1140, 1420, 1890],
          peak: '1,890 Views (W4)'
        },
        '90D': {
          categories: ['Jun', 'Jul', 'Aug'],
          series: [1950, 2800, 3842],
          peak: '3,842 Views (Aug)'
        },
        'ALL': {
          categories: ['Q1 2026', 'Q2 2026', 'Q3 2026'],
          series: [1200, 2650, 4890],
          peak: '4,890 Views (All Time)'
        }
      },
      recentViewers: [
        {
          name: 'Elena Rostova',
          firm: 'Accel Partners',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&fit=crop&crop=faces',
          action: 'Spent 4m 12s on Pricing & Tech Stack',
          timeSpent: '4m 12s',
          timeAgo: '12m ago',
          isAnonymous: false
        },
        {
          name: 'Anonymous Investor',
          firm: 'Tier-1 Enterprise VC Fund',
          avatar: '',
          iconFallback: 'shield',
          action: 'Evaluated Market Moats & Unit Economics',
          timeSpent: '3m 48s',
          timeAgo: '35m ago',
          isAnonymous: true
        },
        {
          name: 'Vikram Mehta',
          firm: 'Matrix Ventures',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=faces',
          action: 'Viewed Product Details & Upvoted',
          timeSpent: '2m 45s',
          timeAgo: '1h ago',
          isAnonymous: false
        },
        {
          name: 'Verified Angel Investor',
          firm: 'Cross-Border Fintech Syndicate',
          avatar: '',
          iconFallback: 'user-check',
          action: 'Inspected Pitch Deck & Multi-currency APIs',
          timeSpent: '5m 10s',
          timeAgo: '2h ago',
          isAnonymous: true
        },
        {
          name: 'Sarah Lin',
          firm: 'Bessemer Venture Partners',
          avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=96&h=96&fit=crop&crop=faces',
          action: 'Watched Demo Video & Checked Moat FAQ',
          timeSpent: '5m 18s',
          timeAgo: '3h ago',
          isAnonymous: false
        },
        {
          name: 'Anonymous Scout',
          firm: 'Multi-Stage Venture Firm (SF)',
          avatar: '',
          iconFallback: 'lock',
          action: 'Visited Official Website from Product Page',
          timeSpent: '1m 50s',
          timeAgo: 'Yesterday',
          isAnonymous: true
        }
      ]
    },

    'viktor': {
      id: 'viktor',
      name: 'Viktor.com',
      logo: 'https://www.google.com/s2/favicons?domain=viktor.ai&sz=128',
      category: 'AI / Coworker',
      tagline: 'An AI coworker that actually completes complex multi-app operational tasks.',
      publishedDate: '18 Jul 2026',
      arr: '$840K',
      stats: {
        totalViewers: '8,410',
        viewersChange: '+38% this week',
        totalUpvotes: '696',
        upvotesRank: 'Rank #1 in AI Tools',
        totalTimeSpent: '318 hrs',
        timeEngaged: 'Very High Intent',
        avgViewTime: '4m 15s',
        avgTimePer: 'Per session'
      },
      chartData: {
        '7D': {
          categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          series: [580, 720, 890, 1120, 1250, 1480, 1690],
          peak: '1,690 Views (Sun)'
        },
        '30D': {
          categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          series: [1800, 2400, 3100, 4200],
          peak: '4,200 Views (W4)'
        },
        '90D': {
          categories: ['Jun', 'Jul', 'Aug'],
          series: [3100, 5400, 8410],
          peak: '8,410 Views (Aug)'
        },
        'ALL': {
          categories: ['Q1 2026', 'Q2 2026', 'Q3 2026'],
          series: [2400, 5600, 9820],
          peak: '9,820 Views (All Time)'
        }
      },
      recentViewers: [
        {
          name: 'Alexandre Renard',
          firm: 'Index Ventures',
          avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=96&h=96&fit=crop&crop=faces',
          action: 'Tested Live Agent Workflow Demo',
          timeSpent: '6m 40s',
          timeAgo: '5m ago',
          isAnonymous: false
        },
        {
          name: 'Anonymous Partner',
          firm: 'AI Frontier Seed Fund',
          avatar: '',
          iconFallback: 'shield',
          action: 'Reviewed LLM Orchestration Benchmark',
          timeSpent: '4m 10s',
          timeAgo: '20m ago',
          isAnonymous: true
        },
        {
          name: 'Priya Patel',
          firm: 'Lightspeed Venture Partners',
          avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&fit=crop&crop=faces',
          action: 'Upvoted & Shared to Partner Channel',
          timeSpent: '4m 10s',
          timeAgo: '42m ago',
          isAnonymous: false
        },
        {
          name: 'Verified Early Stage Angel',
          firm: 'Autonomous Agents Syndicate',
          avatar: '',
          iconFallback: 'user-check',
          action: 'Checked Customer Retention Metrics',
          timeSpent: '3m 22s',
          timeAgo: 'Today, 11:30 AM',
          isAnonymous: true
        }
      ]
    }
  };

  let activeChartInstance = null;
  let activeProduct = null;
  let activeTimeRange = '7D';

  /**
   * Injects drawer markup into the DOM if not already present
   */
  function ensureDrawerInDOM() {
    if (document.getElementById('productAnalyticsDrawerOverlay')) return;

    const drawerHTML = `
      <div class="pad-drawer-overlay" id="productAnalyticsDrawerOverlay" onclick="handleDrawerBackdropClick(event)">
        <div class="pad-drawer-panel" id="productAnalyticsDrawerPanel" onclick="event.stopPropagation()">
          
          <!-- Drawer Header -->
          <div class="pad-drawer-head">
            <div class="pad-product-info-wrap">
              <img id="padProductLogo" src="" alt="Product Logo" class="pad-product-logo" />
              <div class="pad-product-details">
                <div class="pad-title-row">
                  <h2 class="pad-product-name" id="padProductName">Product Name</h2>
                  <span class="pad-status-live">🟢 Live on Marketplace</span>
                </div>
                <span class="pad-product-category" id="padProductCategory">Category</span>
              </div>
            </div>

            <button type="button" class="pad-btn-close" onclick="closeProductAnalyticsDrawer()" title="Close analytics drawer">
              <i data-lucide="x" style="width:16px; height:16px;"></i>
            </button>
          </div>

          <!-- Drawer Body (Scrollable) -->
          <div class="pad-drawer-body">
            
            <!-- Time Filter Bar -->
            <div class="pad-filter-bar">
              <span class="pad-filter-title">Performance Overview</span>
              <div class="pad-time-pills">
                <button type="button" class="pad-time-btn active" onclick="setProductAnalyticsTimeRange('7D', this)">7 Days</button>
                <button type="button" class="pad-time-btn" onclick="setProductAnalyticsTimeRange('30D', this)">30 Days</button>
                <button type="button" class="pad-time-btn" onclick="setProductAnalyticsTimeRange('90D', this)">90 Days</button>
                <button type="button" class="pad-time-btn" onclick="setProductAnalyticsTimeRange('ALL', this)">All time</button>
              </div>
            </div>

            <!-- 4 Condensed KPI Metric Stat Cards -->
            <div class="pad-kpi-grid">
              
              <!-- Card 1: Total Viewers -->
              <div class="pad-kpi-card">
                <span class="pad-kpi-label">Total viewers</span>
                <span class="pad-kpi-value" id="padKpiViewers">0</span>
                <span class="pad-kpi-sub" id="padKpiViewersSub">
                  <i data-lucide="trending-up" style="width:11px; height:11px;"></i>
                  <span>+0% this week</span>
                </span>
              </div>

              <!-- Card 2: Total Upvotes -->
              <div class="pad-kpi-card">
                <span class="pad-kpi-label">Total upvotes</span>
                <span class="pad-kpi-value" id="padKpiUpvotes">0</span>
                <span class="pad-kpi-sub neutral" id="padKpiUpvotesSub">Rank #1 in SaaS</span>
              </div>

              <!-- Card 3: Total Time Spent -->
              <div class="pad-kpi-card">
                <span class="pad-kpi-label">Total time spent</span>
                <span class="pad-kpi-value" id="padKpiTotalTime">0 hrs</span>
                <span class="pad-kpi-sub neutral" id="padKpiTotalTimeSub">High Intent</span>
              </div>

              <!-- Card 4: Avg View Time -->
              <div class="pad-kpi-card">
                <span class="pad-kpi-label">Avg view time</span>
                <span class="pad-kpi-value" id="padKpiAvgTime">0m 0s</span>
                <span class="pad-kpi-sub neutral" id="padKpiAvgTimeSub">Per session</span>
              </div>

            </div>

            <!-- ApexCharts Engagement Graph (Neutral Palette) -->
            <div class="pad-chart-section">
              <div class="pad-section-header">
                <span class="pad-section-heading">Engagement over time</span>
                <span class="pad-chart-peak-pill" id="padChartPeakLabel">Peak: 0 Views</span>
              </div>

              <div class="pad-chart-card">
                <div class="pad-chart-legend-row">
                  <span class="pad-chart-legend-label">Daily profile &amp; directory impressions</span>
                </div>
                <div id="padApexChartMount"></div>
              </div>
            </div>

            <!-- Recent Viewers / Evaluators -->
            <div class="pad-viewers-section">
              <div class="pad-section-header">
                <span class="pad-section-heading">Recent viewers &amp; evaluators</span>
                <span style="font-size:11.5px; color:var(--pad-text-muted);">Live audit stream</span>
              </div>

              <div class="pad-viewers-list" id="padViewersList">
                <!-- Dynamically populated -->
              </div>
            </div>

          </div>

        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', drawerHTML);
  }

  /**
   * Opens the right drawer with product data
   * @param {string} productId - 'junify' | 'viktor'
   */
  function openDrawer(productId = 'junify') {
    ensureDrawerInDOM();

    const normalizedId = (productId || '').toLowerCase();
    activeProduct = PRODUCT_ANALYTICS_DATA[normalizedId] || PRODUCT_ANALYTICS_DATA['junify'];
    activeTimeRange = '7D';

    // Populate header info
    document.getElementById('padProductLogo').src = activeProduct.logo;
    document.getElementById('padProductName').textContent = activeProduct.name;
    document.getElementById('padProductCategory').textContent = `${activeProduct.category} · ARR: ${activeProduct.arr}`;

    // Populate KPI Cards
    document.getElementById('padKpiViewers').textContent = activeProduct.stats.totalViewers;
    document.getElementById('padKpiViewersSub').querySelector('span').textContent = activeProduct.stats.viewersChange;
    document.getElementById('padKpiUpvotes').textContent = activeProduct.stats.totalUpvotes;
    document.getElementById('padKpiUpvotesSub').textContent = activeProduct.stats.upvotesRank;
    document.getElementById('padKpiTotalTime').textContent = activeProduct.stats.totalTimeSpent;
    document.getElementById('padKpiTotalTimeSub').textContent = activeProduct.stats.timeEngaged;
    document.getElementById('padKpiAvgTime').textContent = activeProduct.stats.avgViewTime;
    document.getElementById('padKpiAvgTimeSub').textContent = activeProduct.stats.avgTimePer;

    // Reset filter buttons active state
    document.querySelectorAll('.pad-time-btn').forEach((btn, idx) => {
      btn.classList.toggle('active', idx === 0);
    });

    // Populate Recent Viewers List
    renderRecentViewers(activeProduct.recentViewers);

    // Show Overlay & Drawer
    const overlay = document.getElementById('productAnalyticsDrawerOverlay');
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';

    // Render ApexCharts Engagement Graph
    setTimeout(() => {
      renderChart(activeTimeRange);
      if (typeof lucide !== 'undefined') lucide.createIcons();
    }, 120);
  }

  /**
   * Closes the right drawer
   */
  function closeDrawer() {
    const overlay = document.getElementById('productAnalyticsDrawerOverlay');
    if (overlay) {
      overlay.classList.remove('show');
      document.body.style.overflow = '';
    }
  }

  /**
   * Backdrop click handler
   */
  window.handleDrawerBackdropClick = function (e) {
    if (e.target.id === 'productAnalyticsDrawerOverlay') {
      closeDrawer();
    }
  };

  /**
   * Time range change handler
   */
  window.setProductAnalyticsTimeRange = function (range, btnEl) {
    activeTimeRange = range;
    document.querySelectorAll('.pad-time-btn').forEach(btn => btn.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');
    renderChart(range);
  };

  /**
   * Renders ApexChart in neutral monochrome colors
   */
  function renderChart(timeRange) {
    const mountEl = document.getElementById('padApexChartMount');
    if (!mountEl || !activeProduct) return;

    if (activeChartInstance) {
      try {
        activeChartInstance.destroy();
      } catch (err) {
        console.warn(err);
      }
      activeChartInstance = null;
    }

    if (typeof ApexCharts === 'undefined') {
      mountEl.innerHTML = '<div style="font-size:12px; color:var(--pad-text-muted); text-align:center; padding:30px;">Loading graph library...</div>';
      return;
    }

    const chartConfig = activeProduct.chartData[timeRange] || activeProduct.chartData['7D'];
    document.getElementById('padChartPeakLabel').textContent = `Peak: ${chartConfig.peak}`;

    const options = {
      series: [{
        name: 'Viewers',
        data: chartConfig.series
      }],
      chart: {
        type: 'area',
        height: 190,
        toolbar: { show: false },
        fontFamily: "'Outfit', sans-serif",
        sparkline: { enabled: false }
      },
      colors: ['#111827'], // Strict Neutral Dark
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.18,
          opacityTo: 0.02,
          stops: [0, 95, 100]
        }
      },
      dataLabels: { enabled: false },
      stroke: {
        curve: 'smooth',
        width: 2.2,
        colors: ['#111827']
      },
      markers: {
        size: 3.5,
        colors: ['#111827'],
        strokeColors: '#FFFFFF',
        strokeWidth: 2,
        hover: { size: 5.5 }
      },
      xaxis: {
        categories: chartConfig.categories,
        labels: {
          style: {
            colors: '#6B7280',
            fontSize: '11px',
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 500
          }
        },
        axisBorder: { show: false },
        axisTicks: { show: false }
      },
      yaxis: {
        labels: {
          style: {
            colors: '#9CA3AF',
            fontSize: '11px',
            fontFamily: "'Outfit', sans-serif"
          },
          formatter: (val) => val >= 1000 ? `${(val / 1000).toFixed(1)}k` : val
        }
      },
      grid: {
        borderColor: '#F0F0EB',
        strokeDashArray: 3,
        padding: { top: 0, right: 10, bottom: 0, left: 10 }
      },
      tooltip: {
        theme: 'light',
        style: {
          fontSize: '12px',
          fontFamily: "'Outfit', sans-serif"
        },
        y: {
          formatter: (val) => `${val} total viewers`
        }
      }
    };

    activeChartInstance = new ApexCharts(mountEl, options);
    activeChartInstance.render();
  }

  /**
   * Renders the recent viewers list
   */
  function renderRecentViewers(viewers) {
    const listEl = document.getElementById('padViewersList');
    if (!listEl) return;

    listEl.innerHTML = viewers.map(v => {
      const avatarHtml = v.isAnonymous
        ? `<div class="pad-viewer-avatar" style="background:#F3F4F6; display:flex; align-items:center; justify-content:center; color:#4B5563;"><i data-lucide="${v.iconFallback || 'shield'}" style="width:16px; height:16px;"></i></div>`
        : `<img src="${v.avatar}" alt="${v.name}" class="pad-viewer-avatar" />`;

      return `
        <div class="pad-viewer-item">
          <div class="pad-viewer-left">
            ${avatarHtml}
            <div class="pad-viewer-details">
              <div class="pad-viewer-name-row">
                <span class="pad-viewer-name">${v.name}</span>
                <span class="pad-viewer-firm">· ${v.firm}</span>
              </div>
              <span class="pad-viewer-action">${v.action}</span>
            </div>
          </div>
          <div class="pad-viewer-right">
            <span class="pad-viewer-time">${v.timeSpent}</span>
            <span class="pad-viewer-ago">${v.timeAgo}</span>
          </div>
        </div>
      `;
    }).join('');

    if (typeof lucide !== 'undefined') lucide.createIcons();
  }

  // Keyboard shortcut (Escape to close)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDrawer();
    }
  });

  // Export public API
  window.openProductAnalyticsDrawer = openDrawer;
  window.closeProductAnalyticsDrawer = closeDrawer;

})(window);
