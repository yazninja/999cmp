/**
 * ════════════════════════════════════════════════════════════════════
 *  UDST ESPORTS SUMMER CAMP — SITE CONFIGURATION
 * ════════════════════════════════════════════════════════════════════
 *  The ONLY file you need to edit to update site content: dates,
 *  pricing, coaches, games, contact details, social links, and
 *  registration status. Shared by both the app and the server API.
 * ════════════════════════════════════════════════════════════════════
 */

export const siteConfig = {
  // ── General ────────────────────────────────────────────────────────
  name: "UDST Esports Summer Camp 2026",
  shortName: "UDST Esports Camp",
  nameArabic: "مخيم الرياضات الإلكترونية الصيفي",
  tagline: "Level Up Your Game This Summer!",
  taglineArabic: "!ارتقِ بمستواك هذا الصيف",
  subtitle:
    "Train with professional coaches and take your skills to the next level.",
  subtitleArabic: "تدرّب مع مدربين محترفين وطوّر مهاراتك إلى مستوى جديد.",
  description:
    "A professional esports development program at UDST. Two weeks of expert coaching in Valorant and EA SPORTS FC 26, drills, scrimmages, VOD reviews, tournaments and prizes.",
  collaboration: "NXT LEVEL",
  organizer: "UDST Wolves Esports",

  // ── Registration status ────────────────────────────────────────────
  // Set to false to close registrations everywhere (UI + server).
  registrationOpen: true,

  // ── Dates & location ───────────────────────────────────────────────
  dates: {
    display: "August 2 – 16, 2026",
    displayArabic: "2 – 16 أغسطس 2026",
    short: "2–16 August 2026",
    startISO: "2026-08-02",
    endISO: "2026-08-16",
    year: "2026",
  },
  location: {
    name: "E-Sports Arena",
    building: "UDST · Building 18",
    nameArabic: "ساحة الرياضات الإلكترونية",
    buildingArabic: "جامعة الدوحة للعلوم والتكنولوجيا · مبنى 18",
    address: "University of Doha for Science & Technology, Doha, Qatar",
    // Paste a Google Maps embed URL to activate the live map,
    // or leave empty for a styled placeholder.
    mapsEmbedUrl: "",
    mapsLink: "https://maps.app.goo.gl/dewvJDbFERmTxPgF8",
  },

  // ── Pricing ────────────────────────────────────────────────────────
  pricing: {
    amount: 390, // ← edit the price here
    currency: "QAR",
    period: "per player · full camp",
    includes: [
      "Professional coaching",
      "Practice sessions",
      "Skill evaluations",
      "Mini tournament",
      "Final championship",
      "Certificate of completion",
    ],
  },

  // ── Games ──────────────────────────────────────────────────────────
  games: [
    {
      id: "valorant",
      name: "VALORANT",
      tag: "Tactical Shooter",
      accent: "red" as const,
      logo: "/games/val.webp",
      description:
        "Master the tactical shooter that defines modern esports. Structured coaching across every pillar of competitive play.",
      features: [
        "Professional coaching",
        "Team communication",
        "Strategy & map control",
        "Aim improvement",
        "Utility usage",
        "Competitive mindset",
      ],
    },
    {
      id: "ea-fc-26",
      name: "EAFC 26",
      tag: "Competitive Football",
      accent: "green" as const,
      logo: "/games/eafc.png",
      description:
        "Develop championship-level football gameplay with a coach who has competed on the world stage.",
      features: [
        "Tactical gameplay",
        "Attacking masterclass",
        "Defending masterclass",
        "Game management",
        "Set pieces & mindset",
        "Competitive preparation",
      ],
    },
  ],

  // ── Camp details ───────────────────────────────────────────────────
  campDetails: [
    {
      icon: "i-lucide-calendar-days",
      title: "Camp Dates",
      lines: ["2–16 August 2026", "E-Gaming Arena · Building 18"],
    },
    {
      icon: "i-lucide-graduation-cap",
      title: "Structured Coaching",
      lines: ["Guided sessions with pro coaches", "Fundamentals to advanced tactics"],
    },
    {
      icon: "i-lucide-users",
      title: "Small Player Groups",
      lines: ["Kept small on purpose", "Personalized feedback per player"],
    },
    {
      icon: "i-lucide-crosshair",
      title: "Scrimmages & Drills",
      lines: ["Live practical reps", "Guided drills & VOD reviews"],
    },
    {
      icon: "i-lucide-bar-chart-3",
      title: "Skill Evaluations",
      lines: ["Progress measured throughout", "Individual development tracking"],
    },
    {
      icon: "i-lucide-swords",
      title: "Mini Tournament",
      lines: ["Mid-camp competition", "Measure your improvement"],
    },
    {
      icon: "i-lucide-trophy",
      title: "Final Championship",
      lines: ["Grand finale with prizes", "Compete for the camp title"],
    },
    {
      icon: "i-lucide-award",
      title: "Certificate",
      lines: ["Official certificate of completion", "For every player who finishes"],
    },
  ],

  // ── Curriculum (development pathway) ───────────────────────────────
  curriculum: [
    { step: "01", title: "Foundations", description: "Game ecosystem, setup, controls & tactical basics." },
    { step: "02", title: "Offense Masterclass", description: "Attacking patterns, executes, finishing & creating chances." },
    { step: "03", title: "Defense Masterclass", description: "Positioning, retakes, transitions & disciplined defending." },
    { step: "04", title: "Advanced Tactics", description: "Systems analysis, custom setups & reading the game." },
    { step: "05", title: "Clutch & Mindset", description: "High-pressure routines, rhythm & competitive decision-making." },
    { step: "06", title: "Prep & Championship", description: "Drills, scrimmages, evaluation & the final championship." },
  ],

  // ── Coaches ────────────────────────────────────────────────────────
  coaches: [
    {
      name: "Omar Alkdhour",
      role: "EA SPORTS FC Coach",
      game: "EA SPORTS FC 26",
      accent: "green" as const,
      // Place a headshot at /public/coaches/ and set the path here.
      photo: "/coaches/Omar.jpeg",
      initials: "OA",
      bio: "A championship record across Qatar, the Middle East and World Cup qualifiers, as both player and coach.",
      achievements: [
        "Multiple Qatar tournament champion",
        "Qualified for Middle East FC Pro Open Cup",
        "Top 225 EA SPORTS FC World Ranking",
        "Games of the Future competitor",
        "Coached multiple championship-winning players",
        "Sent players to Middle East FC Pro & World Cup qualifiers",
      ],
    },
    {
      name: 'Ahmed "Rambosh" Abdeljawad',
      role: "Valorant Coach",
      game: "Valorant",
      accent: "red" as const,
      photo: "",
      initials: "AR",
      bio: "Former Twisted Minds coach, owner of Dark Nebula Valorant, experienced in competitive coaching, player development, and team strategy.",
      achievements: [
        "Former Twisted Minds Coach",
        "1st Place VALORANT MENA Al Majd 2025 Series 1",
        "Multiple Virtuocity Qatar Champion",
        "Multiple OoredooNation Champion",
        "Regional MENA competitor",
        "Experienced in coaching competitive teams and developing players",
      ],
    },
  ],

  // ── FAQ ────────────────────────────────────────────────────────────
  faq: [
    {
      question: "Who can join the camp?",
      answer:
        "The camp is open to players of all backgrounds who want to improve competitively in Valorant or EA SPORTS FC 26. Participants under 18 need parent/guardian consent, which is collected during registration.",
    },
    {
      question: "Do I need prior competitive experience?",
      answer:
        "No. The curriculum runs from fundamentals to advanced tactics, and players are placed into small groups by skill level so everyone trains at the right pace — from aspiring beginners to experienced competitors.",
    },
    {
      question: "What should I bring?",
      answer:
        "Just yourself and your competitive spirit. All gaming equipment — PCs, consoles, monitors and peripherals — is provided at the E-Gaming Arena. You're welcome to bring your own mouse, keyboard, or controller if you prefer.",
    },
    {
      question: "How are groups organized?",
      answer:
        "Players are organized into small groups by game and skill level after an initial evaluation. Small groups are intentional — they guarantee personalized feedback and real coaching attention for every player.",
    },
    {
      question: "How do I pay?",
      answer:
        "Register through the website first. Once your registration is reviewed and confirmed, you'll receive a confirmation email with a secure payment link and further instructions.",
    },
    {
      question: "Are there prizes?",
      answer:
        "Yes. The camp includes a mini tournament mid-camp and a final championship at the end, the final championchip ends with prizes for winners. Every player who completes the camp also receives an official certificate.",
    },
  ],

  // ── Contact ────────────────────────────────────────────────────────
  contact: {
    email: "esports@udst.edu.qa",
    phone: "+974 4495 2222",
    location: "E-Sports Arena, UDST Building 18, Doha, Qatar",
  },

  // ── Social links ───────────────────────────────────────────────────
  social: {
    instagram: "https://instagram.com/udstqatar",
    twitter: "https://x.com/udstqatar",
    tiktok: "https://tiktok.com/@udstqatar",
    discord: "https://discord.gg/udst-esports",
    youtube: "https://youtube.com/@udstqatar",
  },

  // ── Hero stats strip ───────────────────────────────────────────────
  stats: [
    { value: "2", label: "Weeks of Training" },
    { value: "2", label: "Competitive Titles" },
    { value: "2", label: "Pro Coaches" },
    { value: "1", label: "Championship" },
  ],
} as const

export type SiteConfig = typeof siteConfig
