/* ==========================================================================
   SEEDICON FOUNDER PLATFORM — UNIFIED MESSAGES & CHAT DRAWER ENGINE
   Modular, accessible, 2-attachment max, square-rounded 8px chat bubbles
   ========================================================================== */

(function() {
  // 01. Central Conversations & Threads Database
  const SEEDICON_MESSAGES_DB = {
    'fnd-elena-synthflow': {
      id: 'fnd-elena-synthflow',
      name: 'Elena Rostova',
      role: 'CEO & Co-founder',
      company: 'SynthFlow AI',
      location: 'San Francisco, CA',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&fit=crop&crop=faces',
      online: true,
      unread: true,
      messages: [
        { sender: 'them', text: 'Hey Gyan! Thanks for checking out SynthFlow. We just launched our real-time agent observability engine on Seedicon.', time: '10:14 AM' },
        { sender: 'me', text: 'Awesome Elena, congrats on the launch! Really impressed with the sub-10ms latency metrics.', time: '10:18 AM' },
        { sender: 'them', text: 'Thank you! Let me know if your engineering team would like early beta access to our evaluation pipeline.', time: '10:22 AM' }
      ]
    },
    'fnd-vikram-flowpay': {
      id: 'fnd-vikram-flowpay',
      name: 'Vikram Mehta',
      role: 'Co-founder & CTO',
      company: 'FlowPay Global',
      location: 'London, UK',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=faces',
      online: true,
      unread: false,
      messages: [
        { sender: 'them', text: 'Hi Gyan! Let me know if you would like to test our cross-border payment rails for your platform.', time: '09:30 AM' },
        { sender: 'me', text: 'Hey Vikram, definitely! We are looking into low-fee EUR/USD settlement routes.', time: '09:42 AM' }
      ]
    },
    'fnd-sarah-cyberguard': {
      id: 'fnd-sarah-cyberguard',
      name: 'Sarah Jenkins',
      role: 'Founder & CEO',
      company: 'CyberGuard Core',
      location: 'Austin, TX',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=96&h=96&fit=crop&crop=faces',
      online: false,
      unread: false,
      messages: [
        { sender: 'them', text: 'Hello Gyan! We just published our enterprise SOC2 compliance automation benchmark if you would like to review.', time: 'Yesterday' }
      ]
    },
    'fnd-david-orbit': {
      id: 'fnd-david-orbit',
      name: 'David Park',
      role: 'Founder & Architect',
      company: 'Orbit Data Layer',
      location: 'New York, NY',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&crop=faces',
      online: true,
      unread: false,
      messages: [
        { sender: 'them', text: 'Hey Gyan! Exploring distributed DB sharding right now. Happy to share what worked for OrbitDB at 100k writes/sec.', time: 'Aug 24' }
      ]
    },
    'fnd-marcus-chainpulse': {
      id: 'fnd-marcus-chainpulse',
      name: 'Marcus Vance',
      role: 'Co-founder & Head of Product',
      company: 'ChainPulse Labs',
      location: 'Chicago, IL',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=96&h=96&fit=crop&crop=faces',
      online: false,
      unread: false,
      messages: [
        { sender: 'them', text: 'Hi Gyan! Reaching out regarding institutional asset tracking. Let me know if you have 10 mins this week.', time: 'Aug 22' }
      ]
    },
    'fnd-aria-biomind': {
      id: 'fnd-aria-biomind',
      name: 'Dr. Aria Montgomery',
      role: 'Founding Scientist',
      company: 'BioMind Analytics',
      location: 'Boston, MA',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=96&h=96&fit=crop&crop=faces',
      online: true,
      unread: false,
      messages: [
        { sender: 'them', text: 'Greetings Gyan! Delighted to connect. We are scaling our oncology AI clinical trials and exploring strategic partnerships.', time: 'Aug 20' }
      ]
    },
    'fnd-lucas-vance': {
      id: 'fnd-lucas-vance',
      name: 'Lucas Vance',
      role: 'Founder',
      company: 'Vance Logistics',
      location: 'Austin, TX',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=96&h=96&fit=crop&crop=faces',
      online: false,
      unread: false,
      messages: [
        { sender: 'them', text: 'Hey Gyan! Thanks for connecting. Excited to share notes on bootstrap growth and customer retention.', time: 'Aug 18' }
      ]
    }
  };

  let activeRecipientId = null;
  let activeAttachments = [];

  // Helper: Escape HTML
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

  // Helper: Count Unread Conversations
  function getUnreadCount() {
    return Object.values(SEEDICON_MESSAGES_DB).filter(c => c.unread).length;
  }

  // 02. Inject / Initialize Drawer DOM
  function ensureDrawerMarkup() {
    if (document.getElementById('messagesDrawerOverlay')) return;

    const overlay = document.createElement('div');
    overlay.id = 'messagesDrawerOverlay';
    overlay.className = 'messages-drawer-overlay';
    overlay.onclick = (e) => {
      if (e.target === overlay) window.closeMessagesDrawer();
    };

    overlay.innerHTML = `
      <div class="messages-drawer-panel" onclick="event.stopPropagation()">
        
        <!-- ════════════════════════════════════════════════════════════════════
             VIEW 1: INBOX CONVERSATIONS LIST
             ════════════════════════════════════════════════════════════════════ -->
        <div class="msg-view-container" id="msgInboxViewContainer">
          
          <!-- Inbox Header -->
          <div class="msg-inbox-head">
            <div class="msg-inbox-title-wrap">
              <h2 class="msg-inbox-title">Messages</h2>
              <span class="msg-inbox-count-badge" id="msgInboxCountBadge">7</span>
            </div>
            <div class="msg-inbox-actions">
              <button type="button" class="pad-btn-close" onclick="window.closeMessagesDrawer()" title="Close drawer">
                <i data-lucide="x" style="width:15px; height:15px;"></i>
              </button>
            </div>
          </div>

          <!-- Inbox Search Input -->
          <div class="msg-inbox-search-wrap">
            <div class="msg-inbox-search-box">
              <i data-lucide="search" class="msg-inbox-search-icon"></i>
              <input type="text" id="msgInboxSearchInput" class="msg-inbox-search-input" placeholder="Search conversations..." oninput="window.filterConversations(this.value)" />
            </div>
          </div>

          <!-- Inbox Conversation List -->
          <div class="msg-conv-list" id="msgConversationsList"></div>

        </div>

        <!-- ════════════════════════════════════════════════════════════════════
             VIEW 2: ACTIVE CHAT THREAD
             ════════════════════════════════════════════════════════════════════ -->
        <div class="msg-view-container" id="msgChatViewContainer" style="display:none;">
          
          <!-- Chat Header -->
          <div class="msg-chat-head">
            <div class="msg-chat-head-left">
              <button type="button" class="msg-back-btn" onclick="window.backToInboxView()" title="Back to messages">
                <i data-lucide="arrow-left" style="width:14px; height:14px;"></i>
              </button>
              <div class="msg-conv-avatar-wrap">
                <img id="msgChatRecipientAvatar" src="" alt="" class="msg-conv-avatar" style="width:36px; height:36px;" />
                <span class="msg-online-dot" id="msgChatOnlineDot"></span>
              </div>
              <div class="msg-chat-recipient-info">
                <div class="msg-chat-name-row">
                  <span class="msg-chat-name" id="msgChatRecipientName">Recipient Name</span>
                  <i data-lucide="badge-check" style="width:13px; height:13px; color:#111827; flex-shrink:0;"></i>
                </div>
                <div class="msg-chat-role" id="msgChatRecipientRole">Founder @ Startup</div>
              </div>
            </div>

            <div class="msg-chat-head-right">
              <a href="javascript:void(0)" class="msg-profile-link-btn" id="msgChatProfileLink" title="View Dossier">
                <i data-lucide="user" style="width:12px; height:12px;"></i>
                <span>Profile</span>
              </a>
              <button type="button" class="pad-btn-close" onclick="window.closeMessagesDrawer()" title="Close chat">
                <i data-lucide="x" style="width:15px; height:15px;"></i>
              </button>
            </div>
          </div>

          <!-- Chat Messages Body -->
          <div class="msg-chat-body" id="msgChatFeedBody">
            <div class="msg-date-pill">
              <span>Today</span>
            </div>
            <div id="msgChatBubblesList" style="display:flex; flex-direction:column; gap:12px;"></div>
          </div>

          <!-- Chat Composer & Attachments -->
          <div class="msg-composer-wrap">
            
            <!-- Attachment Previews (Max 2) -->
            <div class="msg-attachments-preview-bar" id="msgAttachmentsPreviewBar" style="display:none;">
              <div id="msgAttachmentsList" style="display:flex; gap:6px; flex-wrap:wrap;"></div>
              <span class="msg-attachment-count-hint" id="msgAttachmentCountHint">(0/2)</span>
            </div>

            <!-- Input Row -->
            <div class="msg-input-row">
              <input type="file" id="msgAttachmentFileInput" multiple accept="image/*,.pdf,.doc,.docx" style="display:none;" onchange="window.handleChatAttachmentSelect(this)" />
              
              <button type="button" class="msg-attach-btn" onclick="window.triggerAttachmentPicker()" title="Attach file (Max 2 files)">
                <i data-lucide="paperclip" style="width:14px; height:14px;"></i>
              </button>

              <textarea id="msgChatInputTextarea" class="msg-textarea" rows="1" placeholder="Write a message... (Press Enter to send)" onkeydown="window.handleChatKeyDown(event)" oninput="window.autoResizeChatInput(this)"></textarea>

              <button type="button" class="msg-send-btn" id="btnSendChatMessage" onclick="window.sendChatMessage()" title="Send Message">
                <i data-lucide="send" style="width:13.5px; height:13.5px;"></i>
              </button>
            </div>

          </div>

        </div>

      </div>
    `;

    document.body.appendChild(overlay);
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }

  // 03. Render Conversation List in Inbox View
  function renderInboxList(filterQuery = '') {
    const listEl = document.getElementById('msgConversationsList');
    const badgeEl = document.getElementById('msgInboxCountBadge');
    if (!listEl) return;

    const q = (filterQuery || '').toLowerCase().trim();
    const convs = Object.values(SEEDICON_MESSAGES_DB).filter(c => {
      if (!q) return true;
      const lastMsg = c.messages[c.messages.length - 1]?.text || '';
      return c.name.toLowerCase().includes(q) ||
             (c.company && c.company.toLowerCase().includes(q)) ||
             lastMsg.toLowerCase().includes(q);
    });

    if (badgeEl) {
      badgeEl.textContent = convs.length;
    }

    if (convs.length === 0) {
      listEl.innerHTML = `
        <div style="padding:40px 16px; text-align:center; color:var(--msg-text-muted);">
          <i data-lucide="message-square-dashed" style="width:28px; height:28px; margin:0 auto 8px; opacity:0.6;"></i>
          <div style="font-size:13px; font-weight:700; color:var(--msg-text-dark);">No conversations found</div>
          <div style="font-size:11.5px; margin-top:2px;">Try searching by founder name or startup</div>
        </div>
      `;
      if (typeof lucide !== 'undefined') lucide.createIcons();
      return;
    }

    listEl.innerHTML = convs.map(c => {
      const lastMsgObj = c.messages[c.messages.length - 1];
      const lastMsg = lastMsgObj ? (lastMsgObj.sender === 'me' ? `You: ${lastMsgObj.text}` : lastMsgObj.text) : 'Started a conversation';
      const time = lastMsgObj ? lastMsgObj.time : '';
      const isUnread = c.unread;

      return `
        <div class="msg-conv-item ${isUnread ? 'unread' : ''}" onclick="window.selectConversation('${c.id}')">
          <div class="msg-conv-avatar-wrap">
            <img src="${c.avatar}" alt="${escapeHtml(c.name)}" class="msg-conv-avatar" />
            ${c.online ? '<span class="msg-online-dot" title="Online"></span>' : ''}
          </div>
          <div class="msg-conv-content">
            <div class="msg-conv-top-row">
              <div class="msg-conv-name-row">
                <span class="msg-conv-name">${escapeHtml(c.name)}</span>
                <i data-lucide="badge-check" style="width:12px; height:12px; color:#111827; flex-shrink:0;"></i>
              </div>
              <span class="msg-conv-time">${time}</span>
            </div>
            <div class="msg-conv-sub-row">
              <span class="msg-conv-preview">${escapeHtml(lastMsg)}</span>
              ${isUnread ? '<span class="msg-unread-dot" title="Unread"></span>' : ''}
            </div>
          </div>
        </div>
      `;
    }).join('');

    if (typeof lucide !== 'undefined') lucide.createIcons();
  }

  // 04. Render Active Chat Feed
  function renderChatFeed() {
    const container = document.getElementById('msgChatBubblesList');
    if (!container || !activeRecipientId) return;

    const conv = SEEDICON_MESSAGES_DB[activeRecipientId];
    if (!conv) return;

    // Mark as read
    conv.unread = false;
    updateTopNavBadge();

    container.innerHTML = conv.messages.map(m => {
      const isMe = m.sender === 'me';
      const rowClass = isMe ? 'outgoing' : 'incoming';
      let attachmentsHtml = '';
      if (m.attachments && m.attachments.length > 0) {
        attachmentsHtml = m.attachments.map(att => `
          <div class="msg-bubble-attachment">
            <i data-lucide="paperclip" style="width:12px; height:12px;"></i>
            <span>${escapeHtml(att.name)}</span>
          </div>
        `).join('');
      }

      return `
        <div class="msg-bubble-row ${rowClass}">
          <div class="msg-bubble-box">
            <div>${escapeHtml(m.text)}</div>
            ${attachmentsHtml}
          </div>
          <div class="msg-bubble-time">${m.time}${isMe ? ' · Sent' : ''}</div>
        </div>
      `;
    }).join('');

    if (typeof lucide !== 'undefined') lucide.createIcons();
    scrollChatToBottom();
  }

  function scrollChatToBottom() {
    const feed = document.getElementById('msgChatFeedBody');
    if (feed) {
      feed.scrollTop = feed.scrollHeight;
    }
  }

  function updateTopNavBadge() {
    const dot = document.getElementById('navMsgUnreadDot');
    if (dot) {
      const unreadCount = getUnreadCount();
      dot.style.display = unreadCount > 0 ? 'block' : 'none';
    }
  }

  // 05. Global API Methods
  window.openMessagesDrawer = function(recipientId = null) {
    ensureDrawerMarkup();
    const overlay = document.getElementById('messagesDrawerOverlay');
    if (!overlay) return;

    activeAttachments = [];
    window.renderAttachmentPreviews();

    if (recipientId && SEEDICON_MESSAGES_DB[recipientId]) {
      window.selectConversation(recipientId);
    } else {
      window.backToInboxView();
    }

    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
    if (typeof lucide !== 'undefined') lucide.createIcons();
  };

  window.closeMessagesDrawer = function() {
    const overlay = document.getElementById('messagesDrawerOverlay');
    if (overlay) {
      overlay.classList.remove('show');
      document.body.style.overflow = '';
    }
  };

  window.selectConversation = function(recipientId) {
    const conv = SEEDICON_MESSAGES_DB[recipientId];
    if (!conv) return;

    activeRecipientId = recipientId;
    activeAttachments = [];

    // Switch view
    document.getElementById('msgInboxViewContainer').style.display = 'none';
    document.getElementById('msgChatViewContainer').style.display = 'flex';

    // Populate header
    document.getElementById('msgChatRecipientAvatar').src = conv.avatar;
    document.getElementById('msgChatRecipientName').textContent = conv.name;
    document.getElementById('msgChatRecipientRole').textContent = `${conv.role} @ ${conv.company} · ${conv.location}`;
    
    const onlineDot = document.getElementById('msgChatOnlineDot');
    if (onlineDot) onlineDot.style.display = conv.online ? 'block' : 'none';

    const profileLink = document.getElementById('msgChatProfileLink');
    if (profileLink) {
      profileLink.href = `./network-profile.html?id=${conv.id}`;
    }

    const input = document.getElementById('msgChatInputTextarea');
    if (input) {
      input.value = '';
      input.style.height = 'auto';
    }

    renderChatFeed();
    window.renderAttachmentPreviews();

    setTimeout(() => {
      scrollChatToBottom();
      if (input) input.focus();
    }, 120);
  };

  window.backToInboxView = function() {
    activeRecipientId = null;
    activeAttachments = [];

    const inboxView = document.getElementById('msgInboxViewContainer');
    const chatView = document.getElementById('msgChatViewContainer');
    if (inboxView) inboxView.style.display = 'flex';
    if (chatView) chatView.style.display = 'none';

    renderInboxList();
    updateTopNavBadge();
  };

  window.filterConversations = function(query) {
    renderInboxList(query);
  };

  // Attachments Handling (Strictly 2 Max)
  window.triggerAttachmentPicker = function() {
    const input = document.getElementById('msgAttachmentFileInput');
    if (input) {
      input.value = '';
      input.click();
    }
  };

  window.handleChatAttachmentSelect = function(input) {
    if (!input.files || input.files.length === 0) return;

    const selectedFiles = Array.from(input.files);
    const availableSlots = 2 - activeAttachments.length;

    if (availableSlots <= 0) {
      if (window.showToast) window.showToast('Maximum 2 attachments allowed.', 'error');
      return;
    }

    if (selectedFiles.length > availableSlots) {
      if (window.showToast) window.showToast('Maximum 2 attachments allowed. Extra files omitted.', 'error');
    }

    const filesToAdd = selectedFiles.slice(0, availableSlots);
    filesToAdd.forEach(f => {
      activeAttachments.push({
        name: f.name,
        size: (f.size / 1024).toFixed(1) + ' KB'
      });
    });

    window.renderAttachmentPreviews();
  };

  window.removeAttachment = function(index) {
    activeAttachments.splice(index, 1);
    window.renderAttachmentPreviews();
  };

  window.renderAttachmentPreviews = function() {
    const bar = document.getElementById('msgAttachmentsPreviewBar');
    const list = document.getElementById('msgAttachmentsList');
    const countHint = document.getElementById('msgAttachmentCountHint');
    if (!bar || !list) return;

    if (activeAttachments.length === 0) {
      bar.style.display = 'none';
      list.innerHTML = '';
      return;
    }

    bar.style.display = 'flex';
    if (countHint) countHint.textContent = `(${activeAttachments.length}/2)`;

    list.innerHTML = activeAttachments.map((att, idx) => `
      <div class="msg-attachment-chip">
        <i data-lucide="paperclip" style="width:11.5px; height:11.5px;"></i>
        <span>${escapeHtml(att.name)}</span>
        <button type="button" class="msg-attachment-remove" onclick="window.removeAttachment(${idx})" title="Remove">&times;</button>
      </div>
    `).join('');

    if (typeof lucide !== 'undefined') lucide.createIcons();
  };

  // Send Message Logic
  window.sendChatMessage = function() {
    const textarea = document.getElementById('msgChatInputTextarea');
    const text = textarea ? textarea.value.trim() : '';

    if (!text && activeAttachments.length === 0) return;
    if (!activeRecipientId || !SEEDICON_MESSAGES_DB[activeRecipientId]) return;

    const conv = SEEDICON_MESSAGES_DB[activeRecipientId];
    const newMsg = {
      sender: 'me',
      text: text || '(Attachment)',
      attachments: [...activeAttachments],
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    conv.messages.push(newMsg);
    activeAttachments = [];
    window.renderAttachmentPreviews();

    if (textarea) {
      textarea.value = '';
      textarea.style.height = 'auto';
    }

    renderChatFeed();

    // Simulate realistic instant response
    const rId = activeRecipientId;
    setTimeout(() => {
      if (activeRecipientId === rId) {
        const replies = [
          `Thanks for reaching out, Gyan! Appreciate the message and would love to connect.`,
          `Got it, Gyan! Let me review this with the team and get back to you shortly.`,
          `Sounds like a great synergy! Let's schedule a 15-minute quick call this week.`
        ];
        const randomReply = replies[Math.floor(Math.random() * replies.length)];
        SEEDICON_MESSAGES_DB[rId].messages.push({
          sender: 'them',
          text: randomReply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        });
        renderChatFeed();
      }
    }, 900);
  };

  window.handleChatKeyDown = function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      window.sendChatMessage();
    }
  };

  window.autoResizeChatInput = function(el) {
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 90) + 'px';
  };

  // Close drawer on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeMessagesDrawer();
    }
  });

  // Expose DB for full page
  window.SEEDICON_MESSAGES_DB = SEEDICON_MESSAGES_DB;

  // Auto initialize on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    ensureDrawerMarkup();
    updateTopNavBadge();
  });
})();
