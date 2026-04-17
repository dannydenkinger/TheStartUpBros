import type { PortfolioProject } from "@/types";

// Real work from the founders — projects Anthony Denkinger has led or built.
export const projects: PortfolioProject[] = [
  {
    title: "SAID Technology — Offline-First Medical Translation",
    slug: "said",
    description:
      "A secure, offline-first AI translation system for healthcare, defense, and emergency environments — real-time multilingual care without a network connection.",
    image: "/images/portfolio/sales-crm-perspective.webp",
    tags: ["AI", "Healthcare", "Defense"],
    deviceType: "macbook",
    client: "SAID Technology",
    year: "2024",
    industry: "AI Healthcare",
    services: ["Product Design", "AI Integration", "Compliance-Aware UX"],
    overview:
      "SAID is an offline-first medical communication system that enables real-time language translation in healthcare and emergency environments without requiring internet connectivity. Built for the moments when language can't be a barrier to care — ambulances without signal, field hospitals, rural clinics, military medical operations — every interaction runs on-device, keeping sensitive patient data at the point of care.",
    challenge:
      "Language differences compromise care in the highest-stakes moments — patient intake, symptom description, consent, critical care. Cloud-based translation fails the moment connectivity drops, and sending patient data to third-party APIs fails the moment a compliance officer asks. Neither is acceptable in emergency medicine.",
    solution:
      "An offline-first architecture with domain-specific medical language understanding running entirely on-device. No external transmission unless explicitly configured. Designed to slot into existing clinical workflows with minimal training, standardizing meaning across languages in time-sensitive scenarios.",
    timeline: "Shipped 2024 — actively deployed",
    techStack: ["On-device LLMs", "Domain-specific fine-tuning", "React Native", "Edge inference", "HIPAA-aware architecture"],
    outcomes: [
      "Privacy-first — zero external data transmission by default",
      "Domain-specific medical language, not generic translation",
      "Operates reliably in time-sensitive, low-connectivity environments",
      "Integrates into existing clinical workflows with minimal training",
    ],
    gallery: [
      {
        type: "full",
        image: "/images/portfolio/geo-analytics.avif",
        alt: "SAID Technology interface",
        caption:
          "On-device translation tuned for medical scenarios — patient intake, symptoms, consent, critical care.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/sales-dashboard.avif",
        alt: "Clinical workflow integration",
        heading: "Designed for the moment, not the demo",
        body: "Every interaction tuned for ambulances without signal, field hospitals, and the bedside of a patient who speaks a language the clinician doesn't. Offline-first isn't a feature — it's the foundation.",
        align: "left",
      },
      {
        type: "twoUp",
        images: [
          {
            src: "/images/portfolio/sales-crm-detail.webp",
            alt: "Translation detail view",
          },
          {
            src: "/images/portfolio/sales-crm-full.webp",
            alt: "Clinical dashboard",
          },
        ],
        caption:
          "Detail and overview surfaces share one component system — consistent across hospital, field, and defense deployments.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/crm-dashboard.webp",
        alt: "Privacy-first architecture",
        heading: "Mission-driven, not general-purpose",
        body: "SAID isn't a general-purpose AI tool. It's a focused system designed so language is never a barrier to care — and so patient data never leaves the device unless a clinician explicitly sends it.",
        align: "right",
      },
    ],
    metrics: [
      { value: "2024", label: "Shipped" },
      { value: "Offline", label: "First architecture" },
      { value: "On-device", label: "Zero cloud by default" },
    ],
    quote: {
      text: "Language can't be a barrier to care. We built SAID so translation works at the bedside — offline, on-device, and specific to medicine. That's a different problem than general translation, and it needs a different tool.",
      author: "Anthony Denkinger",
      role: "Startup Bros",
    },
  },
  {
    title: "ZoneX — AI Sports Analytics Platform",
    slug: "zonex",
    description:
      "An AI-driven sports analytics platform that turns raw film and game data into actionable intelligence — computer vision, structured data, and explainable models built for coaches, not data scientists.",
    image: "/images/portfolio/freelancer-dashboard.webp",
    tags: ["AI", "Sports", "Computer Vision"],
    deviceType: "macbook",
    client: "ZoneX",
    year: "2025",
    industry: "Sports Tech",
    services: ["Product Design", "AI Integration", "Dashboard"],
    overview:
      "ZoneX unifies video analysis, AI-powered computer vision, and structured game data into a single intelligence layer for coaches and analysts. Built to solve the film-overload problem — and to deliver explainable insights that actually translate into game-day decisions, without requiring a data science team to operate.",
    challenge:
      "Competitive teams face three compounding problems — film overload, fragmented data sources, and black-box analytics nobody trusts. Most sports analytics tools solve one of those and make the other two worse. Coaches either drown in dashboards or give up and go back to manual tagging.",
    solution:
      "Abstract the technical complexity. Computer vision handles the tagging, structured game data handles the context, and explainable AI handles the trust problem. A user-centric design where coaches don't tune models or write queries — they ask questions and get answers they can act on before the next game.",
    timeline: "Launched 2025 — waitlist active",
    techStack: ["Computer vision", "Video ML", "Structured game data", "Explainable AI", "Next.js dashboard"],
    outcomes: [
      "Advanced computer vision automates film breakdown",
      "Explainable models — transparency and trust, not black boxes",
      "Designed as a natural extension of coaching workflows",
      "Speed and clarity tuned for rapid adjustments and game planning",
    ],
    gallery: [
      {
        type: "full",
        image: "/images/portfolio/socialsonic.avif",
        alt: "ZoneX analytics dashboard",
        caption:
          "One intelligence layer — film, data, and AI unified for the coach on the sideline.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/freelancer-dashboard.webp",
        alt: "Coaching workflow",
        heading: "Built for the coach, not the data team",
        body: "Most analytics tools make the coach the operator. ZoneX makes the coach the asker — the platform handles the film breakdown, the model tuning, and the data cleaning. Coaches get answers they can act on in minutes, not weeks.",
        align: "right",
      },
      {
        type: "twoUp",
        images: [
          { src: "/images/portfolio/crm-dashboard.webp", alt: "Film analysis" },
          { src: "/images/portfolio/crm-detail.webp", alt: "Game data detail" },
        ],
        caption:
          "Film analysis and structured game data share a single dashboard — the same lens on every source.",
      },
    ],
    metrics: [
      { value: "2025", label: "Launched" },
      { value: "Explainable", label: "AI, not black box" },
      { value: "Waitlist", label: "Currently active" },
    ],
    quote: {
      text: "Coaches don't want to operate a data tool — they want to make a decision. ZoneX is the shortest line between raw film and a game-day adjustment a coach actually trusts.",
      author: "Anthony Denkinger",
      role: "Startup Bros",
    },
  },
  {
    title: "LOOT8 — Web3 Content & Commerce Platform",
    slug: "loot8",
    description:
      "A blockchain-powered platform merging digital and physical commerce — digital product passports, loyalty, fan experiences, and Web3 access layers shipped across iOS, Android, and web.",
    image: "/images/portfolio/defi-landing.webp",
    tags: ["Web3", "Mobile", "Blockchain"],
    deviceType: "both",
    client: "LOOT8",
    year: "2023",
    industry: "Web3 Commerce",
    services: ["Product Design", "Mobile App", "Brand", "Web3 Architecture"],
    overview:
      "LOOT8 is an enterprise content platform that bridges Web2 and Web3 — turning physical objects, venues, and moments into digital experiences through product drops, geofencing, QR codes, and on-chain ownership. Built for businesses, artists, creators, and collegiate athletes who need to own their audience without becoming crypto experts to do it.",
    challenge:
      "Web3 platforms were built for crypto natives. Artists, venues, and creators wanted the ownership benefits — digital product passports, loyalty that actually travels with the fan, direct revenue — without the wallet-connect friction and jargon. Bridging Web2 and Web3 meant making the blockchain layer invisible.",
    solution:
      "A multi-surface platform — native iOS, Android, and web — that wraps blockchain rails in interactions creators already understand. Product drops, venue check-ins, QR-to-collectible flows, streaming, geofenced unlocks. The chain is the infrastructure; the experience is the product.",
    timeline: "Multi-year product, shipped to stores 2023–2025",
    techStack: ["React Native", "Next.js", "Web3 SDKs", "Geofencing", "QR infrastructure", "AI (via K Project)"],
    outcomes: [
      "Shipped to Apple App Store, Google Play Store, and browser",
      "Deployed across concerts, conferences, sports venues, and creator drops",
      "Partnership with Unsigned Prospects for collegiate athlete content ownership",
      "Joint venture with ZFlo addressing the $30B package security problem",
    ],
    gallery: [
      {
        type: "full",
        image: "/images/portfolio/defi-pages.webp",
        alt: "LOOT8 platform experience",
        caption:
          "Digital-physical commerce — product drops, venue unlocks, and on-chain ownership wrapped in interactions anyone can use.",
      },
      {
        type: "twoUp",
        images: [
          { src: "/images/portfolio/token-platform.avif", alt: "Platform overview" },
          { src: "/images/portfolio/multichain.avif", alt: "Digital product passports" },
        ],
        caption:
          "Platform overview and digital product passports share the same component library across mobile and web.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/multichain.avif",
        alt: "Fan experience detail",
        heading: "The chain is invisible on purpose",
        body: "Crypto-native UX loses 99% of the audience. LOOT8 hides the wallet behind the moment — a QR code at a venue, a loyalty token from a drop — so the fan gets the ownership without needing to understand it.",
        align: "right",
      },
    ],
    metrics: [
      { value: "2023", label: "Platform shipped" },
      { value: "iOS + Android", label: "+ browser" },
      { value: "Web2 → Web3", label: "Bridged invisibly" },
    ],
    quote: {
      text: "Web3 platforms were built for crypto natives. LOOT8 was built for the artist, the venue, and the fan — the blockchain is the infrastructure, but the experience is the product.",
      author: "Anthony Denkinger",
      role: "Startup Bros",
    },
  },
  {
    title: "K Project — Private AI for Regulated Industries",
    slug: "k-project",
    description:
      "An AI research initiative building locally-hosted, domain-specific language models for organizations where data sovereignty and compliance are non-negotiable.",
    image: "/images/portfolio/ai-landing.webp",
    tags: ["AI", "Research", "Private LLMs"],
    deviceType: "macbook",
    client: "K Project",
    year: "2024",
    industry: "AI Research",
    services: ["AI Research", "Product Design", "Private LLM Architecture"],
    overview:
      "K Project turns proprietary knowledge, workflows, and ideas into purpose-built intelligence systems — local deployments of specialized language models, tuned to an organization's own data, running inside its own environment. Built for healthcare, finance, defense, and regulated enterprise where centralized AI services are a non-starter.",
    challenge:
      "Centralized AI services force a trade between capability and control. Regulated industries can't send proprietary data to third-party APIs, but also can't afford to fall behind on AI-driven productivity. The gap — a specialized model they own, running where their data already lives — hadn't been closed.",
    solution:
      "A dual-use intelligence layer: the same architecture powers internal workflow automation and external customer-facing tools. Locally-hosted, fine-tuned on proprietary documents and institutional expertise, integrated into existing workflows without disrupting them. Compliance isn't a checkbox — it's the starting constraint.",
    timeline: "Ongoing since 2024",
    techStack: ["Fine-tuned open-source LLMs", "Local inference", "Vector stores", "Workflow automation", "Compliance-first architecture"],
    outcomes: [
      "Locally-hosted models — data never leaves the environment unless explicitly shared",
      "Dual-use architecture powers internal and external applications from one intelligence layer",
      "Workflow integration surfaces insights without disrupting existing processes",
      "Compliance-ready for healthcare, finance, defense, and regulated enterprise",
    ],
    gallery: [
      {
        type: "full",
        image: "/images/portfolio/ai-finance.avif",
        alt: "K Project intelligence layer",
        caption:
          "A centralized intelligence layer unifying proprietary documents, workflows, and institutional expertise.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/ai-visits.avif",
        alt: "Local deployment",
        heading: "Control over data and infrastructure",
        body: "The problem wasn't capability — it was control. Locally-hosted models mean data stays in the environment it was meant for, and fine-tuning on proprietary workflows means the model actually understands the domain.",
        align: "left",
      },
      {
        type: "twoUp",
        images: [
          {
            src: "/images/portfolio/productivity-dashboard.webp",
            alt: "Workflow automation",
          },
          {
            src: "/images/portfolio/crm-journeys.webp",
            alt: "Decision support",
          },
        ],
        caption:
          "Workflow automation and decision support share the same intelligence layer — one system, many surfaces.",
      },
    ],
    metrics: [
      { value: "2024", label: "Initiative launched" },
      { value: "Local", label: "Deployment first" },
      { value: "Dual-use", label: "Internal + external" },
    ],
    quote: {
      text: "The interesting problem in enterprise AI isn't capability — it's control. K Project is about giving organizations the productivity gains of modern LLMs without handing their data to someone else's infrastructure.",
      author: "Anthony Denkinger",
      role: "Startup Bros",
    },
  },
];
