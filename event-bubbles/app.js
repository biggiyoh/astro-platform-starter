(() => {
  // ── Map init ────────────────────────────────────
  const map = L.map('map', {
    center: [48.858, 2.347],
    zoom: 13,
    zoomControl: false,
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19,
  }).addTo(map);

  L.control.zoom({ position: 'bottomright' }).addTo(map);

  // ── DOM refs ────────────────────────────────────
  const panel      = document.getElementById('panel');
  const closeBtn   = document.getElementById('close-btn');
  const eventTag   = document.getElementById('event-tag');
  const eventTitle = document.getElementById('event-title');
  const eventDate  = document.getElementById('event-date');
  const eventLoc   = document.getElementById('event-location');
  const eventSpots = document.getElementById('event-spots');
  const eventDesc  = document.getElementById('event-desc');
  const bookBtn    = document.getElementById('book-btn');
  const messages   = document.getElementById('messages');
  const chatInput  = document.getElementById('chat-input');
  const sendBtn    = document.getElementById('send-btn');

  let activeEvent = null;

  // ── Helpers ─────────────────────────────────────
  function setCssColor(color) {
    document.documentElement.style.setProperty('--event-color', color);
  }

  function renderMessage({ author, avatar, text, time }, mine = false) {
    const div = document.createElement('div');
    div.className = 'msg' + (mine ? ' mine' : '');
    div.innerHTML = `
      <div class="msg-avatar">${avatar}</div>
      <div class="msg-body">
        <div class="msg-author">${author}<span class="msg-time">${time}</span></div>
        <div class="msg-text">${text}</div>
      </div>`;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function nowTime() {
    return new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  }

  // ── Open panel ──────────────────────────────────
  function openPanel(event) {
    activeEvent = event;

    setCssColor(event.color);
    eventTag.textContent   = event.tag;
    eventTag.style.background = event.color;
    eventTitle.textContent = event.title;
    eventDate.textContent  = event.date;
    eventLoc.textContent   = event.location;
    eventSpots.textContent = event.spots;
    eventDesc.textContent  = event.description;
    bookBtn.href           = event.bookingUrl;
    bookBtn.style.background = event.color;

    messages.innerHTML = '';
    event.chat.forEach(msg => renderMessage(msg));

    panel.classList.add('open');
    chatInput.focus();

    map.panTo([event.lat, event.lng], { animate: true, duration: .4 });
  }

  // ── Close panel ─────────────────────────────────
  function closePanel() {
    panel.classList.remove('open');
    activeEvent = null;
  }

  closeBtn.addEventListener('click', closePanel);
  map.on('click', closePanel);

  // ── Send message ────────────────────────────────
  function sendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;

    renderMessage({
      author: 'Vous',
      avatar: '🙂',
      text,
      time: nowTime(),
    }, true);

    chatInput.value = '';
    chatInput.focus();

    setTimeout(() => {
      renderMessage({
        author: 'Hôte',
        avatar: activeEvent ? activeEvent.chat[0].avatar : '👋',
        text: 'Merci pour votre message ! Nous y répondrons très bientôt 😊',
        time: nowTime(),
      });
    }, 1200);
  }

  sendBtn.addEventListener('click', sendMessage);
  chatInput.addEventListener('keydown', e => { if (e.key === 'Enter') sendMessage(); });

  // ── Place markers ───────────────────────────────
  EVENTS.forEach(event => {
    const label = event.title.split(' ').slice(0, 2).join('<br>');

    const icon = L.divIcon({
      className: '',
      html: `
        <div class="event-bubble">
          <div class="event-bubble-pulse" style="background:${event.color}"></div>
          <div class="event-bubble-inner" style="background:${event.color}">${label}</div>
        </div>`,
      iconSize: [52, 52],
      iconAnchor: [26, 26],
    });

    const marker = L.marker([event.lat, event.lng], { icon })
      .addTo(map);

    marker.on('click', e => {
      L.DomEvent.stopPropagation(e);
      openPanel(event);
    });
  });
})();
