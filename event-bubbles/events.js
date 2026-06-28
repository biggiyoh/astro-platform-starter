// ──────────────────────────────────────────────────
//  To update an event:
//    - title, date, spots, description → edit below
//    - bookingUrl → replace with your real JuicyEvent.fr link
//    - lat/lng → verify on maps.google.com if needed
// ──────────────────────────────────────────────────

const EVENTS = [
  {
    id: 1,
    title: "Gianpula Village",
    tag: "Open-Air Club",
    date: "Saturday · Doors 10pm",
    location: "Gianpula, Rabat",
    spots: "Limited tickets",
    description: "Malta's largest open-air club complex nestled in the valley. Multiple stages, world-class DJs, and an electric crowd under the stars — the ultimate summer night out.",
    color: "#FF2D78",
    lat: 35.8756,
    lng: 14.3936,
    bookingUrl: "https://juicyevent.fr",
    chat: [
      { author: "Host", avatar: "🎉", text: "Hey! Gianpula is back for summer 🔥 Grab your tickets before they sell out!", time: "6:00 PM" },
      { author: "Jake", avatar: "🕺", text: "Is there parking on site?", time: "6:20 PM" },
      { author: "Host", avatar: "🎉", text: "Yes, large free parking area just outside the entrance. Uber/Bolt also drops right at the gate 🚗", time: "6:22 PM" },
      { author: "Mia", avatar: "💃", text: "What time do the main DJs go on?", time: "7:10 PM" },
      { author: "Host", avatar: "🎉", text: "Main stage kicks off around midnight — warm-up acts from 10pm. Check the full lineup on our site! 🎷", time: "7:13 PM" },
    ]
  },
  {
    id: 2,
    title: "Café del Mar Malta",
    tag: "Sunset Club",
    date: "Friday · 7pm – 2am",
    location: "St. Paul's Bay",
    spots: "Tables available",
    description: "The legendary Café del Mar brand brings its iconic sunset sessions to Malta. Terrace views over the Mediterranean, chilled house sets, and signature cocktails at golden hour.",
    color: "#FF8C00",
    lat: 35.9542,
    lng: 14.3733,
    bookingUrl: "https://juicyevent.fr",
    chat: [
      { author: "Host", avatar: "🌅", text: "Sunset tonight is at 8:47pm — we'll be in full swing 🍹 Best view on the island!", time: "5:00 PM" },
      { author: "Sofia", avatar: "🥂", text: "Do you need a reservation for the terrace?", time: "5:30 PM" },
      { author: "Host", avatar: "🌅", text: "Table reservations are recommended — book through JuicyEvent.fr or walk in and we'll do our best 😊", time: "5:32 PM" },
      { author: "Tom", avatar: "🎶", text: "Who's on the decks tonight?", time: "6:15 PM" },
      { author: "Host", avatar: "🌅", text: "Balearic sunset set from DJ Nico, then live percussion from 9pm 🥁✨", time: "6:18 PM" },
    ]
  },
  {
    id: 3,
    title: "Sky Club Malta",
    tag: "Rooftop Club",
    date: "Saturday · 11pm – 5am",
    location: "Paceville, St. Julian's",
    spots: "VIP tables left",
    description: "Paceville's most exclusive rooftop nightclub with panoramic views of the bay. Top-tier sound system, resident and guest DJs, VIP bottle service available.",
    color: "#9B5DE5",
    lat: 35.9233,
    lng: 14.4902,
    bookingUrl: "https://juicyevent.fr",
    chat: [
      { author: "Host", avatar: "🌃", text: "Sky Club is fully open this weekend 🙌 VIP table enquiries: book via JuicyEvent.fr", time: "12:00 PM" },
      { author: "Leo", avatar: "🥃", text: "What's the minimum spend for a VIP table?", time: "12:40 PM" },
      { author: "Host", avatar: "🌃", text: "Starting from €150 for a table of 4. Includes a bottle and mixers. Check JuicyEvent.fr for full packages!", time: "12:43 PM" },
      { author: "Anna", avatar: "👗", text: "Dress code?", time: "1:30 PM" },
      { author: "Host", avatar: "🌃", text: "Smart-casual to chic. No sportswear/flip-flops. We want you looking fab up here 🌟", time: "1:32 PM" },
    ]
  },
  {
    id: 4,
    title: "Toyroom Malta",
    tag: "Nightclub",
    date: "Friday & Saturday · 11pm",
    location: "Paceville, St. Julian's",
    spots: "Tickets available",
    description: "One of Malta's most iconic clubs. Toyroom delivers big-room energy with internationally acclaimed DJs, immersive visuals, and a crowd that knows how to party.",
    color: "#00BBF9",
    lat: 35.9218,
    lng: 14.4888,
    bookingUrl: "https://juicyevent.fr",
    chat: [
      { author: "Host", avatar: "🎊", text: "Toyroom Malta is live every Friday & Saturday! Who's coming this week? 👀", time: "2:00 PM" },
      { author: "Chris", avatar: "🔊", text: "Is there a queue at the door usually?", time: "2:25 PM" },
      { author: "Host", avatar: "🎊", text: "Booking through JuicyEvent.fr gets you priority entry — skip the line 💪", time: "2:27 PM" },
      { author: "Nina", avatar: "🎵", text: "What genre is the music usually?", time: "3:10 PM" },
      { author: "Host", avatar: "🎊", text: "Mainly commercial house, techno, and top hits. Multiple rooms so there's something for everyone 🎶", time: "3:13 PM" },
    ]
  },
  {
    id: 5,
    title: "Toyroom Beach Club",
    tag: "Beach Club",
    date: "Sunday · 2pm – 10pm",
    location: "Mellieha Bay",
    spots: "Sunbeds available",
    description: "The beach club extension of the Toyroom brand. Daytime vibes with DJ sets, crystal-clear water, poolside cocktails, and the best beach crowd on the island.",
    color: "#00F5D4",
    lat: 35.9643,
    lng: 14.3520,
    bookingUrl: "https://juicyevent.fr",
    chat: [
      { author: "Host", avatar: "🏖️", text: "Sunday forecast: 34°C and sun all day ☀️ Beach club is ready for you!", time: "9:00 AM" },
      { author: "Remi", avatar: "🤿", text: "Can we book a sunbed in advance?", time: "9:30 AM" },
      { author: "Host", avatar: "🏖️", text: "Yes! Book your sunbed + drinks package directly on JuicyEvent.fr — best prices online 🌊", time: "9:33 AM" },
      { author: "Laura", avatar: "🍹", text: "Is there food at the beach club?", time: "10:05 AM" },
      { author: "Host", avatar: "🏖️", text: "Full food menu available — fresh grills, salads, wraps, and of course amazing cocktails 🍔🥗", time: "10:07 AM" },
    ]
  },
  {
    id: 6,
    title: "Aria Complex Malta",
    tag: "Entertainment Complex",
    date: "Every weekend",
    location: "Marsa, Malta",
    spots: "Booking open",
    description: "Malta's premier entertainment complex featuring multiple indoor and outdoor spaces. From live music to DJ events, Aria hosts the island's biggest nights across its iconic venues.",
    color: "#FF6B2B",
    lat: 35.8741,
    lng: 14.4972,
    bookingUrl: "https://juicyevent.fr",
    chat: [
      { author: "Host", avatar: "🏟️", text: "Aria Complex has something for everyone this weekend — check the full programme on JuicyEvent.fr 🎤", time: "11:00 AM" },
      { author: "Marc", avatar: "❓", text: "How many venues are inside Aria?", time: "11:20 AM" },
      { author: "Host", avatar: "🏟️", text: "Multiple spaces: main arena, rooftop, lounge bar, and outdoor terrace. You can move between them all night 🔄", time: "11:23 AM" },
      { author: "Elise", avatar: "🎟️", text: "Does one ticket cover all areas?", time: "12:00 PM" },
      { author: "Host", avatar: "🏟️", text: "Yes, one ticket = full access to all spaces. VIP upgrades also available on JuicyEvent.fr 💎", time: "12:02 PM" },
    ]
  },
  {
    id: 7,
    title: "Twentytwo Malta",
    tag: "Rooftop Bar",
    date: "Thursday – Sunday · 7pm",
    location: "Valletta",
    spots: "Walk-ins welcome",
    description: "Rooftop bar and venue perched above the baroque capital of Malta with stunning views of the Grand Harbour. Craft cocktails, live DJs, and an intimate atmosphere with a killer view.",
    color: "#C77DFF",
    lat: 35.8992,
    lng: 14.5137,
    bookingUrl: "https://juicyevent.fr",
    chat: [
      { author: "Host", avatar: "🌆", text: "Twentytwo is open Thu–Sun. Come for sunset, stay for the party 🌇", time: "5:00 PM" },
      { author: "Jake", avatar: "📸", text: "Is the Grand Harbour view as good as people say?", time: "5:20 PM" },
      { author: "Host", avatar: "🌆", text: "It's unreal — bring your camera. Arguably the best view in all of Malta 🏛️✨", time: "5:22 PM" },
      { author: "Sara", avatar: "🍸", text: "Do you do cocktail masterclasses?", time: "6:05 PM" },
      { author: "Host", avatar: "🌆", text: "Yes! Private events and masterclasses available — enquire via JuicyEvent.fr for group bookings 🍋", time: "6:07 PM" },
    ]
  }
];
