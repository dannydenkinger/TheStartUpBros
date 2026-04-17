import type { PortfolioProject } from "@/types";

// Real work from the founders — projects Anthony Denkinger has led or built.
export const projects: PortfolioProject[] = [
  {
    title: "SAID Technology — Offline-First Medical Translation",
    slug: "said",
    description:
      "A secure, offline-first AI translation system for healthcare, defense, and emergency environments — real-time multilingual care without a network connection.",
    image: "/images/portfolio/said-hero-brand.png",
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
        image: "/images/portfolio/said-lineup.png",
        alt: "SAID Technology interface — consultation, conversation, translation detail, and security status",
        caption:
          "On-device translation tuned for medical scenarios — patient intake, symptoms, consent, critical care.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/said-clinical.png",
        alt: "Clinician reviewing a SAID translation at the bedside",
        heading: "Designed for the moment, not the demo",
        body: "Every interaction tuned for ambulances without signal, field hospitals, and the bedside of a patient who speaks a language the clinician doesn't. Offline-first isn't a feature — it's the foundation.",
        align: "left",
      },
      {
        type: "twoUp",
        images: [
          {
            src: "/images/portfolio/said-translation-detail.png",
            alt: "Translation detail view with source and target language panels",
          },
          {
            src: "/images/portfolio/said-chat-marble.png",
            alt: "Bilingual conversation view",
          },
        ],
        caption:
          "Detail and conversation surfaces share one component system — consistent across hospital, field, and defense deployments.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/said-security.png",
        alt: "Privacy-first architecture — HIPAA, GDPR, and SOC 2 posture",
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
    image: "/images/portfolio/zonex-dashboard.webp",
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
        image: "/images/portfolio/zonex-dashboard.webp",
        alt: "ZoneX dashboard — recent form, efficiency trends, and game results",
        caption:
          "The dashboard lands a coach in the last ten games — efficiency trends, net rating, and recent results in one glance.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/zonex-coaching.webp",
        alt: "Coach-specific portal memo with fit analysis",
        heading: "Built for the coach, not the data team",
        body: "Most analytics tools make the coach the operator. ZoneX makes the coach the asker — portal memos, fit drivers, and coach lenses are generated for the specific decision in front of them.",
        align: "right",
      },
      {
        type: "twoUp",
        images: [
          { src: "/images/portfolio/zonex-film.webp", alt: "Computer vision tracking on live game film" },
          { src: "/images/portfolio/zonex-game-data.webp", alt: "Per-game summary with Four Factors breakdown" },
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
      "Multi-surface design system unifying iOS, Android, and web",
      "Blockchain infrastructure wrapped in interactions any non-crypto user understands",
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
  {
    title: "Vesta CRM — Full-Stack CRM Platform",
    slug: "vesta-crm",
    description:
      "A complete CRM platform built from the ground up — contacts, pipelines, outreach automations, data capture, financials, integrated calendar, marketing analytics, and SEO tools, all in one workspace.",
    image: "/images/portfolio/vesta-hero.png",
    tags: ["CRM", "Full-Stack", "SaaS"],
    deviceType: "macbook",
    client: "Vesta CRM",
    year: "2025",
    industry: "CRM / SaaS",
    services: ["Full-Stack Development", "Custom App Development", "Automation", "SEO"],
    overview:
      "Vesta CRM's team needed to stop paying for five different tools that didn't talk to each other. We built their platform as a single system that replaced the entire stack — CRM, email outreach, calendar, financial tracking, marketing analytics, and SEO monitoring — all under one login. The result was a custom-built solution that fit their exact workflow instead of forcing them into someone else's.",
    challenge:
      "The team was juggling separate tools for contact management, email sequences, scheduling, financial tracking, and marketing analytics. Data lived in five places, nothing synced, and the ops team spent hours every week copying information between systems. They needed one platform that handled everything — built specifically for how they operate.",
    solution:
      "We built Vesta CRM end-to-end: a contacts database with custom fields and tagging, a visual pipeline with drag-and-drop deal stages, automated outreach sequences with email integration, a unified calendar syncing Google Calendar, Apple Calendar, and CRM events, a financial dashboard for revenue tracking, and a full marketing analytics suite with traffic, SEO rankings, Core Web Vitals, and search query monitoring. Authentication with Google SSO, role-based access, and a command palette for power users.",
    timeline: "5 weeks",
    techStack: ["Next.js", "React", "Node.js", "PostgreSQL", "Google Calendar API", "Google Search Console", "Tailwind CSS", "Vercel"],
    outcomes: [
      "Replaced 5 separate tools with one unified platform",
      "Automated outreach sequences saved 12+ hours per week",
      "Real-time pipeline visibility eliminated manual reporting",
      "Integrated calendar reduced scheduling friction to zero",
      "Built-in SEO monitoring caught ranking drops within 24 hours",
    ],
    gallery: [
      {
        type: "full",
        image: "/images/portfolio/vesta-hero.png",
        alt: "Vesta CRM landing page and dashboard",
        caption:
          "The Vesta CRM landing page — sales pipeline, revenue metrics, and a full feature overview in one view.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/vesta-calendar.png",
        alt: "Vesta CRM integrated calendar",
        heading: "One calendar for everything",
        body: "Google Calendar, Apple Calendar, CRM tasks, stay dates, and events — all synced into a single view. The team stopped switching tabs and started seeing their full schedule in context. Event sources are filterable, and quick tasks can be created without leaving the calendar.",
        align: "left",
      },
      {
        type: "twoUp",
        images: [
          { src: "/images/portfolio/vesta-analytics.png", alt: "Marketing analytics dashboard" },
          { src: "/images/portfolio/vesta-seo.png", alt: "SEO performance dashboard" },
        ],
        caption:
          "Marketing analytics and SEO monitoring built directly into the CRM — traffic sources, search rankings, Core Web Vitals, and top queries all in one place.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/vesta-login.png",
        alt: "Vesta CRM login screen",
        heading: "Clean auth with Google SSO",
        body: "Authentication built with Google SSO for one-click access. The split-screen login sets the tone for the product — professional, fast, no friction. New team members onboard in seconds, not days.",
        align: "right",
      },
    ],
    metrics: [
      { value: "5→1", label: "Tools consolidated" },
      { value: "12+ hrs", label: "Saved per week" },
      { value: "5 wks", label: "Concept to launch" },
    ],
    quote: {
      text: "We went from juggling five different tools to one platform that actually fits how we work. Vesta CRM is the system we always needed but couldn't find off the shelf.",
      author: "Danny Denkinger",
      role: "StartUpBros",
    },
  },
  {
    title: "EstateFlow — Property Management Platform",
    slug: "estateflow",
    description:
      "A full-stack property management platform — portfolio tracking, tenant management, lease operations, financial reporting, document automation, and market intelligence, all in one dark-mode workspace.",
    image: "/images/portfolio/estateflow-dashboard.png",
    tags: ["PropTech", "Full-Stack", "SaaS"],
    deviceType: "macbook",
    client: "EstateFlow",
    year: "2025",
    industry: "Real Estate / PropTech",
    services: ["Full-Stack Development", "Custom App Development", "Automation", "AI Integration"],
    overview:
      "EstateFlow's founders needed to replace their patchwork of spreadsheets, property management tools, and accounting software with a single platform purpose-built for how they actually operate. We built an end-to-end property management system — portfolio dashboard with net income tracking, property listings with photo galleries, a tenant directory with lease and rent details, a leasing center for publishing listings, an operations calendar syncing rent due dates and lease events, a full document center with legal templates, financial reporting with general ledger, and real-time market data with Zillow API integration.",
    challenge:
      "Property managers were stuck toggling between spreadsheets for finances, separate tools for tenant communication, generic calendars for lease dates, and manual document workflows. Nothing synced, nothing gave a full picture of the portfolio, and scaling past a handful of units meant hiring ops staff just to keep track of the paperwork.",
    solution:
      "We built EstateFlow as a single workspace: a dashboard showing portfolio value, net income trends, occupancy rates, and rent collection at a glance. Properties with photo galleries and at-a-glance metrics. A tenant directory with lease terms, contact info, and rent status. A leasing center for publishing and managing listings. An operations calendar tracking rent due dates and lease expirations. A document center with legal templates and compliance tracking. A financial module with general ledger and transaction history. And a market data feed integrating Zillow Zestimates, economic indicators, and real estate news — all under one login.",
    timeline: "6 weeks",
    techStack: ["Next.js", "React", "Node.js", "PostgreSQL", "Zillow API", "Tailwind CSS", "Vercel"],
    outcomes: [
      "Consolidated 6+ tools into one unified property management platform",
      "Real-time portfolio tracking with net income and occupancy metrics",
      "Automated lease and rent tracking eliminated manual calendar management",
      "Document templates reduced legal prep time by 80%",
      "Market data integration provides property valuations without leaving the platform",
    ],
    gallery: [
      {
        type: "full",
        image: "/images/portfolio/estateflow-dashboard.png",
        alt: "EstateFlow main dashboard with portfolio metrics and rent collection",
        caption:
          "The EstateFlow dashboard — portfolio value, net income trends, occupancy rate, calendar, and rent collection in one view.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/estateflow-properties.png",
        alt: "Property listings grid with photos and key metrics",
        heading: "Every property at a glance",
        body: "Properties display with photos, addresses, valuations, rent amounts, and occupancy status. Managers see their entire portfolio without clicking into individual units — and can filter, sort, and search across all properties instantly.",
        align: "left",
      },
      {
        type: "twoUp",
        images: [
          { src: "/images/portfolio/estateflow-tenants.png", alt: "Tenant directory with lease details" },
          { src: "/images/portfolio/estateflow-finance.png", alt: "Financial overview with general ledger" },
        ],
        caption:
          "Tenant management and financial reporting share the same data layer — rent payments, lease terms, and transaction history stay in sync automatically.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/estateflow-documents.png",
        alt: "Document center with legal templates and compliance tools",
        heading: "Legal templates, not legal headaches",
        body: "The document center ships with residential lease agreements, notices to vacate, pet addendums, and contractor agreements — all templated and ready to customize. Recent documents are tracked with file sizes and timestamps for compliance auditing.",
        align: "right",
      },
    ],
    metrics: [
      { value: "6+", label: "Tools replaced" },
      { value: "80%", label: "Less legal prep" },
      { value: "6 wks", label: "Concept to launch" },
    ],
    quote: {
      text: "EstateFlow turned our entire property operation into one screen. We used to spend half the day switching between spreadsheets, email, and three different apps — now everything lives in one place.",
      author: "Danny Denkinger",
      role: "StartUpBros",
    },
  },
];
