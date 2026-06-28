(() => {
  const map = L.map('map', {
    center: [35.9154, 14.4286],
    zoom: 12,
    zoomControl: false,
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19,
  }).addTo(map);

  L.control.zoom({ position: 'bottomright' }).addTo(map);

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
    return new Date().toLocaleTimeString('en-MT', { hour: '2-digit', minute: '2-digit' });
  }

  function openPanel(event) {
    activeEvent = event;
    setCssColor(event.color);
    eventTag.textContent      = event.tag;
    eventTag.style.background = event.color;
    eventTitle.textContent    = event.title;
    eventDate.textContent     = event.date;
    eventLoc.textContent      = event.location;
    eventSpots.textContent    = event.spots;
    eventDesc.textContent     = event.description;
    bookBtn.href              = event.bookingUrl;
    messages.innerHTML = '';
    event.chat.forEach(msg => renderMessage(msg));
    panel.classList.add('open');
    chatInput.focus();
    map.panTo([event.lat, event.lng], { animate: true, duration: .4 });
  }

  function closePanel() {
    panel.classList.remove('open');
    activeEvent = null;
  }

  closeBtn.addEventListener('click', closePanel);
  map.on('click', closePanel);

  function sendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;
    renderMessage({ author: 'You', avatar: '🙂', text, time: nowTime() }, true);
    chatInput.value = '';
    chatInput.focus();
    setTimeout(() => {
      renderMessage({
        author: 'Host',
        avatar: activeEvent ? activeEvent.chat[0].avatar : '👋',
        text: "Thanks for your message! We'll get back to you very soon 🙌",
        time: nowTime(),
      });
    }, 1200);
  }

  sendBtn.addEventListener('click', sendMessage);
  chatInput.addEventListener('keydown', e => { if (e.key === 'Enter') sendMessage(); });

  EVENTS.forEach(event => {
    const label = event.title.split(' ').slice(0, 2).join('<br>');
    const icon = L.divIcon({
      className: '',
      html: `
        <div class="event-bubble" style="--bubble-glow:${event.color}">
          <div class="event-bubble-pulse" style="background:${event.color}"></div>
          <div class="event-bubble-inner" style="background:${event.color}">${label}</div>
        </div>`,
      iconSize: [56, 56],
      iconAnchor: [28, 28],
    });
    const marker = L.marker([event.lat, event.lng], { icon }).addTo(map);
    marker.on('click', e => {
      L.DomEvent.stopPropagation(e);
      openPanel(event);
    });
  });
})();
