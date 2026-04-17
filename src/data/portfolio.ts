import type { PortfolioProject } from "@/types";

// Design studies — concept work and product deep-dives by the Denkinger brothers.
// These are analyses and explorations of the kind of B2B/AI SaaS we love to build.
// Images are references and mood boards, not client deliverables.
export const projects: PortfolioProject[] = [
  // ─── Featured Work Samples (gallery-style template) ──────────────────────
  {
    title: "SAID Technology — Offline-First Medical Translation",
    slug: "writesonic",
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
    title: "K Project — Private AI for Regulated Industries",
    slug: "loopback",
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
    title: "LOOT8 — Web3 Content & Commerce Platform",
    slug: "n3on",
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
    title: "Native iOS Travel App — A Mobile Study",
    slug: "thrust",
    description:
      "A travel companion app concept for adventure seekers — itinerary planning, offline maps, and a native iOS feel explored from first principles.",
    image: "/images/portfolio/travel-app.webp",
    tags: ["Mobile", "iOS", "Travel"],
    deviceType: "iphone",
    client: "Design Study",
    year: "2025",
    industry: "Travel",
    services: ["Mobile App Design", "iOS Development", "Brand"],
    overview:
      "Most travel apps are web views wrapped in a phone — unusable in the exact moments travelers need them most. This study explores what a native-feeling iOS experience looks like: offline-first architecture, fluid map interactions, and a design language built for one-thumb use on a moving train.",
    challenge:
      "Web-view prototypes have poor performance and no offline support — useless when signal drops. Going fully native costs time. The middle path is expo with carefully chosen native modules, but only if every interaction is designed for the worst case first.",
    solution:
      "Ship on Expo with carefully selected native modules for maps and storage. Design every screen for thumbs, tune every transition for 60fps, and make every screen work offline before it works online.",
    timeline: "2–4 week build window",
    techStack: ["React Native", "Expo", "Mapbox", "WatermelonDB", "Reanimated"],
    outcomes: [
      "Offline-first architecture — works without signal by default",
      "Every interaction designed for one-thumb use",
      "60fps transitions tuned for the moving-train worst case",
      "Cold start measured in milliseconds, not seconds",
    ],
    gallery: [
      {
        type: "twoUp",
        images: [
          { src: "/images/portfolio/thrust-mobile.avif", alt: "Mobile app screens" },
          { src: "/images/portfolio/thrust-web.avif", alt: "Web companion" },
        ],
        caption:
          "Mobile-first, with a lightweight web companion for trip planning on a laptop.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/travel-app.webp",
        alt: "Trip detail screen",
        heading: "Designed for the moment of travel",
        body: "The hardest UX problem isn't planning — it's using the app one-handed, in poor light, on a moving train, with no signal. Every interaction designed for that worst case first.",
        align: "left",
      },
      {
        type: "full",
        image: "/images/portfolio/thrust-web.avif",
        alt: "Web view",
        caption:
          "A focused web view handles trip planning where a bigger screen helps.",
      },
    ],
    metrics: [
      { value: "2–4 wk", label: "Typical build window" },
      { value: "Week 1", label: "Usable milestone" },
      { value: "Trial", label: "Week included" },
    ],
    quote: {
      text: "A native-feeling app comes from treating every detail as if it mattered — and designing for the worst case first. That's what separates feature-complete from shipped.",
      author: "Denkinger Bros",
      role: "Design Study",
    },
  },
  {
    title: "ZoneX — AI Sports Analytics Platform",
    slug: "socialsonic",
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
    title: "Federated Search Command Palette — A Product Study",
    slug: "community",
    description:
      "A unified search layer concept for community managers — find anything across Slack, Discord, Circle, and Notion, in one place, in under a second.",
    image: "/images/portfolio/productivity-dashboard.webp",
    tags: ["B2B SaaS", "Search", "Productivity"],
    deviceType: "macbook",
    client: "Design Study",
    year: "2025",
    industry: "Productivity",
    services: ["Product Design", "Web Development", "Search Infra"],
    overview:
      "Community managers run their teams across five tools and remember nothing. This study explores a unified search experience — find any message, member, or thread across every platform in under a second. Keyboard-first, command-palette UI, built around the moment a community manager is mid-conversation and needs to surface a thread from three months ago.",
    challenge:
      "Search across federated platforms is hard — every API has different rate limits, schemas, and quirks. The product needs to feel instant, even though data lives in five different places.",
    solution:
      "Build a unified index with incremental sync. Design a keyboard-first command palette UI. Tune every interaction for sub-second response. Users open it 40+ times a day — it has to be faster than Cmd+T.",
    timeline: "2–4 week build window",
    techStack: ["Next.js", "Typesense", "Inngest", "Supabase", "Tailwind"],
    outcomes: [
      "Keyboard-first — command palette opens with one keystroke",
      "Sub-second query latency, because the alternative breaks flow",
      "Compact information design shared across detail and overview",
      "Built for 40+ opens per day, not one-off lookups",
    ],
    gallery: [
      {
        type: "full",
        image: "/images/portfolio/community-search.avif",
        alt: "Command palette concept",
        caption:
          "The command palette is the entire product — opened with one keystroke from anywhere.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/crm-journeys.webp",
        alt: "Search results view",
        heading: "Faster than memory",
        body: "Designed for the moment a community manager is mid-conversation and needs to surface a thread from three months ago. Sub-second matters because the alternative is breaking flow to scroll through Slack.",
        align: "left",
      },
      {
        type: "twoUp",
        images: [
          { src: "/images/portfolio/crm-detail.webp", alt: "Thread detail" },
          { src: "/images/portfolio/productivity-dashboard.webp", alt: "Workspace overview" },
        ],
        caption:
          "Thread detail and workspace overview share the same compact information design.",
      },
    ],
    metrics: [
      { value: "2–4 wk", label: "Typical build window" },
      { value: "Week 1", label: "Usable milestone" },
      { value: "Trial", label: "Week included" },
    ],
    quote: {
      text: "A search tool used 40 times a day has to be faster than Cmd+T. We studied how keyboard-first UI, incremental sync, and sub-second latency compound into a tool users can't imagine working without.",
      author: "Denkinger Bros",
      role: "Design Study",
    },
  },

  // ─── Portfolio case studies (gallery-style template) ──────────────────────
  {
    title: "Enterprise-Grade AI Marketing Site — A Design Study",
    slug: "ltv-ai",
    description:
      "An enterprise-grade marketing site concept for an AI analytics platform — built to convert Fortune 500 procurement teams, not just curious browsers.",
    image: "/images/portfolio/crm-dashboard.webp",
    tags: ["AI", "Enterprise", "Web Design"],
    deviceType: "macbook",
    client: "Design Study",
    year: "2025",
    industry: "AI Analytics",
    services: ["Web Design", "Web Development", "Brand"],
    overview:
      "Seed-stage startups closing six-figure enterprise deals often have websites that look like prototypes. This study explores what an enterprise-credible site looks like — a confident hero, a deep product explainer for technical buyers, and a security/compliance page procurement can send straight to legal.",
    challenge:
      "Sites that read 'startup' lose deals at the demo stage. Procurement teams filter vendors out before sales gets a foot in the door — because the visual language reads hobby project, not enterprise-credible.",
    solution:
      "Rebuild around the buying motion — quietly confident hero, a page-deep product explainer with diagrams technical buyers can actually digest, and a dedicated trust center covering SOC 2, data residency, and SSO out of the box.",
    timeline: "2–4 week build window",
    techStack: ["Next.js", "Sanity CMS", "Framer Motion", "Vercel", "Tailwind"],
    outcomes: [
      "Hero leads with the enterprise outcome, not the product feature",
      "Technical buyer page designed around real procurement questions",
      "Trust center doubles as the sales team's procurement asset",
      "Every diagram earns its place from a real buyer interview",
    ],
    gallery: [
      {
        type: "full",
        image: "/images/portfolio/crm-dashboard.webp",
        alt: "Enterprise marketing hero concept",
        caption:
          "The hero leads with the enterprise outcome, not the product feature.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/sales-dashboard.avif",
        alt: "Product explainer page",
        heading: "Designed for the technical buyer",
        body: "Built around the questions data and analytics leaders actually ask — model architecture, data residency, evaluation methodology. Every diagram earns its place from a real buyer interview.",
        align: "left",
      },
      {
        type: "twoUp",
        images: [
          {
            src: "/images/portfolio/crm-detail.webp",
            alt: "Trust center page",
          },
          {
            src: "/images/portfolio/sales-crm-perspective.webp",
            alt: "Pricing breakdown",
          },
        ],
        caption:
          "Trust center and pricing pages built to be sent directly to procurement.",
      },
    ],
    metrics: [
      { value: "2–4 wk", label: "Typical build window" },
      { value: "Week 1", label: "Usable milestone" },
      { value: "Trial", label: "Week included" },
    ],
    quote: {
      text: "Enterprise buyers filter on vibes before they filter on features. A site that reads 'startup' loses deals the demo could have won — we studied what it takes to read 'enterprise-credible' from the first scroll.",
      author: "Denkinger Bros",
      role: "Design Study",
    },
  },
  {
    title: "Credible AI-First Landing Page — A Conversion Study",
    slug: "gigamind-landing",
    description:
      "A landing page concept designed to convert skeptical AI buyers — built around proof, not promises.",
    image: "/images/portfolio/ai-landing.webp",
    tags: ["AI", "Landing Page", "Conversion"],
    deviceType: "macbook",
    client: "Design Study",
    year: "2025",
    industry: "AI Knowledge",
    services: ["Landing Page", "Brand", "Conversion"],
    overview:
      "AI landing pages all say the same vague things. Buyers have been trained to ignore the marketing. This study explores what it looks like to lead with proof instead — a working demo above the fold, real output examples, and zero buzzwords.",
    challenge:
      "Crowded AI markets mean every competitor's landing page looks the same. Buyers have been trained to ignore vague marketing language, so a strong product gets buried under generic AI copy the audience skims past.",
    solution:
      "Lead with a working demo before the headline. Replace AI buzzwords with concrete output examples. Rebuild social proof around real logos and quotes — not stock testimonials. Every section has to earn its place by lifting a measurable funnel step.",
    timeline: "2–4 week build window",
    techStack: ["Next.js", "Tailwind", "Framer Motion", "PostHog", "Vercel"],
    outcomes: [
      "Demo above the fold — proof before the headline",
      "Concrete output examples replace every buzzword",
      "Social proof rebuilt around real logos, not stock",
      "Every section earns its place by lifting a funnel step",
    ],
    gallery: [
      {
        type: "full",
        image: "/images/portfolio/ai-landing.webp",
        alt: "AI landing hero concept",
        caption:
          "The hero leads with a working demo — not a headline making promises.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/ai-finance.avif",
        alt: "Output examples section",
        heading: "Show, don't tell",
        body: "Replace every AI buzzword with a real example of what the product actually produces. Buyers stop reading and start clicking — because the proof is already on the screen.",
        align: "right",
      },
      {
        type: "twoUp",
        images: [
          { src: "/images/portfolio/ai-visits.avif", alt: "Customer logos" },
          {
            src: "/images/portfolio/productivity-dashboard.webp",
            alt: "Feature breakdown",
          },
        ],
        caption:
          "Real customer logos and concrete feature breakdowns replace the usual hype.",
      },
    ],
    metrics: [
      { value: "2–4 wk", label: "Typical build window" },
      { value: "Week 1", label: "Usable milestone" },
      { value: "Trial", label: "Week included" },
    ],
    quote: {
      text: "AI buyers have seen the same vague promises from every competitor. We studied what it takes to lead with proof — demo first, buzzwords never — so the page does the selling for the demo team.",
      author: "Denkinger Bros",
      role: "Design Study",
    },
  },
  {
    title: "Two-Week Product Unification Sprint — A Design Study",
    slug: "gigamind-product",
    description:
      "A two-week product redesign concept — unifying five fragmented surfaces into one coherent workspace and handing off a design system to build on.",
    image: "/images/portfolio/productivity-dashboard.webp",
    tags: ["AI", "Product Design", "Design System"],
    deviceType: "macbook",
    client: "Design Study",
    year: "2025",
    industry: "AI Knowledge",
    services: ["Product Design", "Component Library", "UX"],
    overview:
      "Five years of ship-and-iterate leaves products with five visual languages stitched together. New users get confused, engineering can't ship quickly because every component is a one-off. This study explores what a two-week sprint delivers: a unified design system and a fully redesigned product, handed off ready to extend.",
    challenge:
      "Fast-shipping products become five products in a trench coat. New user confusion up, feature velocity down, and the team needs a reset that doesn't take six months — but also can't afford a full stop.",
    solution:
      "Two-week sprint: design audit on day 1, component library by day 5, full surface redesign by day 10, polish and engineering handoff by day 14. Come out the other side with a unified system the team can build on for years.",
    timeline: "2–4 week build window",
    techStack: ["React", "Tailwind", "Radix UI", "Storybook", "TypeScript"],
    outcomes: [
      "One workspace, one design language across every surface",
      "Storybook + documented tokens — handoff, not shelved",
      "Paired with engineering on first components to ensure adoption",
      "Component primitives shared across detail and overview views",
    ],
    gallery: [
      {
        type: "full",
        image: "/images/portfolio/productivity-dashboard.webp",
        alt: "Unified workspace concept",
        caption:
          "One workspace, one design language — a home view that replaces five disconnected surfaces.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/crm-journeys.webp",
        alt: "Workflow view",
        heading: "Designed for the engineer who'll extend it",
        body: "A design system only works if it gets adopted. Hand off Figma files alongside Storybook, documented tokens, and a paired first three components — so the system gets built on, not shelved.",
        align: "left",
      },
      {
        type: "twoUp",
        images: [
          {
            src: "/images/portfolio/crm-detail.webp",
            alt: "Component variants",
          },
          {
            src: "/images/portfolio/crm-dashboard.webp",
            alt: "Workspace overview",
          },
        ],
        caption:
          "Component variants and surface views drawn from the same primitives.",
      },
    ],
    metrics: [
      { value: "2–4 wk", label: "Typical build window" },
      { value: "Week 1", label: "Usable milestone" },
      { value: "Trial", label: "Week included" },
    ],
    quote: {
      text: "A two-week constraint is a gift — it forces the team to pick one visual language instead of arguing about three. We studied how audit, component library, and handoff compress into ten days without sacrificing polish.",
      author: "Denkinger Bros",
      role: "Design Study",
    },
  },
  {
    title: "Zero-Churn Product Migration — A UX Study",
    slug: "sybill",
    description:
      "A full product redesign concept delivered in waves — new users get the new experience, power users migrate on their own schedule, no one churns.",
    image: "/images/portfolio/sales-crm-full.webp",
    tags: ["AI", "Sales", "Migration"],
    deviceType: "macbook",
    client: "Design Study",
    year: "2025",
    industry: "AI Sales",
    services: ["Product Design", "UX Research", "Migration Strategy"],
    overview:
      "Power users build workflows around quirks of legacy UIs. A clean-slate redesign churns the highest-LTV users. But the legacy UI blocks new user adoption. This study explores two parallel surfaces and a gradual migration path — ship the new experience without losing a single power user.",
    challenge:
      "Power users' muscle memory is built into the old UI. A redesign that breaks that muscle memory churns the highest-LTV users. But the legacy UI is also the #1 reason new trial users drop off. Both problems are real; a clean-slate redesign fixes only one.",
    solution:
      "Ship two parallel surfaces: a new opt-in experience for all new accounts, and a gradual migration path for existing users with side-by-side previews and easy revert. Every release moves a slice of users without breaking anyone's flow.",
    timeline: "2–4 week build window",
    techStack: ["React", "Tailwind", "Framer Motion", "PostHog", "Storybook"],
    outcomes: [
      "New opt-in experience for new accounts — clean, focused",
      "Side-by-side previews + easy revert preserve muscle memory",
      "Migration on the user's schedule, not the product team's",
      "Power-user shortcuts preserved, shell refreshed",
    ],
    gallery: [
      {
        type: "full",
        image: "/images/portfolio/sales-crm-full.webp",
        alt: "New experience concept",
        caption:
          "The new opt-in experience for new accounts — clean, focused, fast.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/sales-crm-detail.webp",
        alt: "Side-by-side preview",
        heading: "Migration on the user's schedule",
        body: "Power users preview the new UI side-by-side with the old one, switch at will, and revert any time. By the time the legacy surface is deprecated, most users have already moved on their own.",
        align: "right",
      },
      {
        type: "twoUp",
        images: [
          {
            src: "/images/portfolio/sales-crm-perspective.webp",
            alt: "Power user view",
          },
          {
            src: "/images/portfolio/sales-dashboard.avif",
            alt: "Analytics view",
          },
        ],
        caption:
          "Power user surfaces preserve muscle memory — same shortcuts, refreshed shell.",
      },
    ],
    metrics: [
      { value: "2–4 wk", label: "Typical build window" },
      { value: "Week 1", label: "Usable milestone" },
      { value: "Trial", label: "Week included" },
    ],
    quote: {
      text: "A redesign that churns power users isn't a win, no matter how good the new UI is. We studied how two parallel surfaces and an opt-in migration protect both cohorts — new users get the new experience, power users keep their muscle memory.",
      author: "Denkinger Bros",
      role: "Design Study",
    },
  },
  {
    title: "Embedded AI Assistant — A Partner-First Design Study",
    slug: "hobbes-embedded",
    description:
      "An embedded AI assistant concept designed to feel native to every host application it lands in — from setup to first interaction in under an hour.",
    image: "/images/portfolio/crm-journeys.webp",
    tags: ["AI", "Embedded", "Design System"],
    deviceType: "macbook",
    client: "Design Study",
    year: "2025",
    industry: "Embedded AI",
    services: ["Product Design", "Embedded UX", "Partner SDK"],
    overview:
      "Embedded products fight host design systems by default — each integration feels bolted on, not built in. This study explores a chameleon component system that adapts to the host's spacing, color, and typography, while keeping interaction patterns consistent across every embed.",
    challenge:
      "Every customer integration looks different — and looks wrong. Components clash with host design systems, integration teams burn weeks on visual cleanup, and end users feel the seam between the embed and the surrounding product.",
    solution:
      "Build a token-driven component system that absorbs the host's design tokens at runtime — colors, radii, type scale, spacing — and re-skins the embed to match in milliseconds. Interaction patterns stay consistent so end users always know which assistant they're using.",
    timeline: "2–4 week build window",
    techStack: ["React", "Tailwind", "Iframe Resizer", "PostMessage API", "TypeScript"],
    outcomes: [
      "Chameleon system reads host CSS variables at runtime",
      "One component, every host — light theme, dark theme, any brand",
      "Interaction patterns stay consistent so end users know the tool",
      "Partner cleanup work designed out, not patched in",
    ],
    gallery: [
      {
        type: "full",
        image: "/images/portfolio/crm-journeys.webp",
        alt: "Embedded assistant inside a host product",
        caption:
          "The embed inside a partner product — same component, fully adapted to the host's design language.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/crm-detail.webp",
        alt: "Token system diagram",
        heading: "One component, every host",
        body: "The chameleon system reads the host's CSS variables and adapts the embed's surface in real time. Partners drop in one script tag and the assistant looks like it was built specifically for their product.",
        align: "left",
      },
      {
        type: "twoUp",
        images: [
          {
            src: "/images/portfolio/crm-dashboard.webp",
            alt: "Light theme integration",
          },
          {
            src: "/images/portfolio/productivity-dashboard.webp",
            alt: "Dark theme integration",
          },
        ],
        caption:
          "Same embed, two host products — visually adapted, behaviorally consistent.",
      },
    ],
    metrics: [
      { value: "2–4 wk", label: "Typical build window" },
      { value: "Week 1", label: "Usable milestone" },
      { value: "Trial", label: "Week included" },
    ],
    quote: {
      text: "Embedded products either fight the host or disappear into it — neither is right. We studied how a token-driven chameleon system lets an assistant feel native to every partner while staying behaviorally consistent for end users.",
      author: "Denkinger Bros",
      role: "Design Study",
    },
  },
  {
    title: "AI-First Brand Refresh — A Visual System Study",
    slug: "hobbes-rebrand",
    description:
      "A complete identity refresh concept to match a new market position — premium, opinionated, unmistakably AI-native.",
    image: "/images/portfolio/crm-detail.webp",
    tags: ["Brand", "Visual System", "Web Design"],
    deviceType: "macbook",
    client: "Design Study",
    year: "2025",
    industry: "AI Tools",
    services: ["Brand Identity", "Visual System", "Web Design"],
    overview:
      "Early-stage brands often outgrow their first identity — the buyer shifts from indie hacker to engineering leader at Series B+ companies, but the visual language still reads hobby project. This study explores what a full identity refresh looks like: wordmark, color system, type stack, motion principles, and a new site delivering the visual impact the new buyer expects.",
    challenge:
      "The old brand reads 'hobby project' to a buyer audience that needs to see 'enterprise-credible.' Sales loses deals on the deck before they get to the product demo — even though the product itself is strong.",
    solution:
      "Deliver a full identity system in a single sprint — new wordmark, restrained color palette built around a single accent, custom display type pairing, and motion principles applied consistently across web, product, and sales collateral.",
    timeline: "2–4 week build window",
    techStack: ["Figma", "Next.js", "Tailwind", "Framer Motion", "Vercel"],
    outcomes: [
      "Restrained palette — one accent, one display type, one motion principle",
      "Identity carried through web, product, and sales collateral",
      "Brand reads serious, premium, considered — from the first scroll",
      "Visual system extensible to subsequent product launches",
    ],
    gallery: [
      {
        type: "full",
        image: "/images/portfolio/crm-detail.webp",
        alt: "Brand mark and website concept",
        caption:
          "The identity centers on restraint — one accent color, one display type, one motion principle.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/crm-dashboard.webp",
        alt: "Brand application in product",
        heading: "Brand applied where it matters",
        body: "Carry the new identity into the product itself — not just the website. Buyers who see the brand in the deck, the site, and the product walk away with the same impression: serious, premium, considered.",
        align: "right",
      },
      {
        type: "twoUp",
        images: [
          { src: "/images/portfolio/ai-landing.webp", alt: "Web identity" },
          {
            src: "/images/portfolio/sales-dashboard.avif",
            alt: "Product identity",
          },
        ],
        caption:
          "Web and product use the same primitives — a single visual system, two surfaces.",
      },
    ],
    metrics: [
      { value: "2–4 wk", label: "Typical build window" },
      { value: "Week 1", label: "Usable milestone" },
      { value: "Trial", label: "Week included" },
    ],
    quote: {
      text: "A brand that reads 'hobby project' to a Series B+ buyer is actively losing deals. We studied what restraint looks like — one accent, one type, one motion principle — applied everywhere so the buyer gets the same impression from the deck, the site, and the product.",
      author: "Denkinger Bros",
      role: "Design Study",
    },
  },
  {
    title: "Landing Page as Conversion Engine — A CRO Study",
    slug: "alsuitup",
    description:
      "A landing page rebuild concept driven by conversion data — every section earns its place by lifting a measurable funnel step.",
    image: "/images/portfolio/fintech-mobile.webp",
    tags: ["AI", "Landing Page", "CRO"],
    deviceType: "macbook",
    client: "Design Study",
    year: "2025",
    industry: "Legal Tech",
    services: ["Landing Page", "CRO", "A/B Testing"],
    overview:
      "Teams iterate on landing pages for months without measurable lift. Every section becomes someone's pet feature, nothing is instrumented, conversion stays stuck. This study explores what it looks like to start from the funnel, not the page — instrument first, then rebuild section by section with A/B tests lifting each funnel step.",
    challenge:
      "Six months of landing page iteration with no measurable lift. Every section is someone's pet feature, nothing is instrumented, and conversion is stuck below the category benchmark.",
    solution:
      "Start from the funnel, not the page. Instrument the existing page first to learn where users drop off, then rebuild section by section — A/B tests on headline angle, demo placement, pricing transparency, and social proof until each lifts the next funnel step.",
    timeline: "2–4 week build window",
    techStack: ["Next.js", "Tailwind", "PostHog", "Stripe", "Vercel"],
    outcomes: [
      "Instrumented first — rebuilt second",
      "Demo placement and headline angle tested, not guessed",
      "Pricing transparency above the fold — biggest single lift",
      "Playbook documented, reusable across sister products",
    ],
    gallery: [
      {
        type: "full",
        image: "/images/portfolio/fintech-mobile.webp",
        alt: "Landing page concept",
        caption:
          "The new page leads with the demo and routes the right buyer to the right CTA in under 8 seconds.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/fintech-app-duo.webp",
        alt: "Pricing transparency",
        heading: "Pricing as a conversion lever",
        body: "Pricing transparency is one of the biggest lifts in a conversion test sequence. Putting clear pricing above the fold — instead of behind a 'contact us' wall — reliably moves qualified leads up.",
        align: "left",
      },
      {
        type: "twoUp",
        images: [
          {
            src: "/images/portfolio/fintech-dashboard.webp",
            alt: "Demo embed",
          },
          {
            src: "/images/portfolio/fintech-detail.webp",
            alt: "Social proof section",
          },
        ],
        caption:
          "Demo embed and rebuilt social proof section each compound toward the conversion lift.",
      },
    ],
    metrics: [
      { value: "2–4 wk", label: "Typical build window" },
      { value: "Week 1", label: "Usable milestone" },
      { value: "Trial", label: "Week included" },
    ],
    quote: {
      text: "Six months of guessing at a landing page lifts nothing. We studied what happens when you start from the funnel — instrument first, then rebuild section by section — and let every A/B test compound toward a real number.",
      author: "Denkinger Bros",
      role: "Design Study",
    },
  },
  {
    title: "Pricing Page as Guidance — An AOV Study",
    slug: "manyreach",
    description:
      "A full website revamp concept paired with a redesigned pricing page — moving the average buyer to a higher-tier plan without raising prices.",
    image: "/images/portfolio/sales-crm-detail.webp",
    tags: ["Sales", "Web Design", "Pricing"],
    deviceType: "macbook",
    client: "Design Study",
    year: "2025",
    industry: "Sales Tools",
    services: ["Web Design", "Pricing Strategy", "CRO"],
    overview:
      "Healthy conversion, stuck AOV. Buyers default to the cheapest plan because nothing on the pricing page helps them understand which tier is right for them. This study explores how to turn pricing from a menu into a guidance tool — a clearer value ladder, anchored mid-tier emphasis, and an outcome calculator that translates team size into a recommended plan in real time.",
    challenge:
      "Conversion is healthy but AOV is stuck at the entry-level tier. Buyers default to the cheapest plan because nothing on the pricing page helps them self-select into the tier that actually fits their team.",
    solution:
      "Redesign the value ladder so each tier solves a clearly different problem. Anchor visual emphasis on the mid-tier plan. Build an outcome calculator that translates team size and volume into a recommended plan in real time — let the page do the selection work for the buyer.",
    timeline: "2–4 week build window",
    techStack: ["Next.js", "Tailwind", "Framer Motion", "Sanity CMS", "Vercel"],
    outcomes: [
      "Value ladder: each tier solves a clearly different problem",
      "Visual emphasis anchored on the mid-tier plan",
      "Outcome calculator translates inputs to a recommended tier",
      "Pricing reads as guidance, not a menu",
    ],
    gallery: [
      {
        type: "full",
        image: "/images/portfolio/sales-crm-detail.webp",
        alt: "Homepage concept",
        caption:
          "The homepage leads with outcomes by buyer persona — not features.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/sales-crm-full.webp",
        alt: "Pricing page concept",
        heading: "Pricing as a guidance tool",
        body: "The old pricing page asks buyers to choose. The new one helps them understand which choice is right — by tier purpose, by team size, by volume. AOV moves when the right buyer lands on the right plan.",
        align: "right",
      },
      {
        type: "twoUp",
        images: [
          {
            src: "/images/portfolio/sales-dashboard.avif",
            alt: "Outcome calculator",
          },
          {
            src: "/images/portfolio/sales-crm-perspective.webp",
            alt: "Plan comparison",
          },
        ],
        caption:
          "The outcome calculator and plan comparison view do the selection work for the buyer.",
      },
    ],
    metrics: [
      { value: "2–4 wk", label: "Typical build window" },
      { value: "Week 1", label: "Usable milestone" },
      { value: "Trial", label: "Week included" },
    ],
    quote: {
      text: "A pricing page that asks the buyer to choose leaves AOV on the table. We studied how turning the page into a guidance tool — value ladder, mid-tier anchor, outcome calculator — moves buyers to the tier that actually fits their team.",
      author: "Denkinger Bros",
      role: "Design Study",
    },
  },
];
