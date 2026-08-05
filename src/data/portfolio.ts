import type { PortfolioProject } from "@/types";

// Real work from the founders — projects Anthony Denkinger has led or built.
export const projects: PortfolioProject[] = [
  {
    title: "EnVision — Hospital Price Leak Detector",
    slug: "envision",
    description:
      "A mobile app that catches procurement price leaks before the purchase order goes out — every cart line checked against the contract a hospital already signed.",
    image: "/images/portfolio/envision-card.webp",
    tags: ["Mobile", "Healthcare", "Procurement"],
    deviceType: "iphone",
    client: "EnVision",
    year: "2026",
    industry: "Healthcare Procurement",
    services: [
      "Product Design",
      "Mobile App Development",
      "Brand & Identity",
    ],
    overview:
      "Hospitals negotiate hard on supply contracts and then quietly overpay against them. A vendor's catalogue price drifts, a SKU gets re-listed, a rep quotes off-contract — and because nobody reconciles line by line at the moment of purchase, the difference just leaves. EnVision closes that window. It ingests the contract, reads the cart, and flags the lines where cart price and contract price disagree — with the dollar figure attached, before the order is placed rather than in an audit six months later.",
    challenge:
      "The leak is invisible at the only moment it can be stopped. Contract terms live in a PDF in a procurement folder; the purchase happens in a different system, often on a phone, often under time pressure. Catching a variance requires someone to remember a negotiated price for a specific SKU — which nobody does across thousands of line items. The product had to make that check effortless enough to happen every time, and clear enough that a non-specialist can act on it in seconds.",
    solution:
      "A phone-first tool built around a single number: what this cart could save right now. The dashboard leads with total potential savings and the count of items needing review; each flagged line shows cart price against contract price and the resulting delta, then offers three honest outcomes — update the vendor price, mark it prevented, or record that it was purchased anyway. That last option matters: it keeps the log truthful and turns the app into a record of what was actually recovered. Contract ingestion, scan history, and notifications close the loop around it.",
    timeline: "Ongoing — shipped and in active development",
    techStack: ["React Native", "TypeScript", "Mobile", "Contract parsing"],
    outcomes: [
      "Cart lines reconciled against signed contract pricing at the point of purchase",
      "Potential savings surfaced as a single figure with per-item breakdown",
      "Three-way resolution — price updated, saving captured, or override logged",
      "Contract ingestion, scan history, and alerts in one phone-first flow",
    ],
    gallery: [
      {
        type: "twoUp",
        images: [
          {
            src: "/images/portfolio/envision-main-dashboard.webp",
            alt: "EnVision dashboard showing total potential savings and items to review",
          },
          {
            src: "/images/portfolio/envision-results-analysis.webp",
            alt: "EnVision review list with cart versus contract pricing",
          },
        ],
        portrait: true,
        caption:
          "One number leads the app — what this cart could save — then every flagged line shows cart price against the contract price behind it.",
      },
      {
        type: "twoUp",
        images: [
          {
            src: "/images/portfolio/envision-item-detail.webp",
            alt: "EnVision item detail with price breakdown",
          },
          {
            src: "/images/portfolio/envision-contract-ingestion.webp",
            alt: "EnVision contract ingestion",
          },
        ],
        portrait: true,
        caption:
          "Item detail explains the variance; contract ingestion is what makes the comparison possible in the first place.",
      },
      {
        type: "twoUp",
        images: [
          {
            src: "/images/portfolio/envision-scan-history.webp",
            alt: "EnVision scan history",
          },
          {
            src: "/images/portfolio/envision-notifications.webp",
            alt: "EnVision notifications",
          },
        ],
        portrait: true,
        caption:
          "History and alerts turn one-off catches into a record of what was actually recovered.",
      },
      {
        type: "twoUp",
        images: [
          {
            src: "/images/portfolio/envision-splash.webp",
            alt: "EnVision splash screen",
          },
          {
            src: "/images/portfolio/envision-login.webp",
            alt: "EnVision sign-in screen",
          },
        ],
        portrait: true,
        caption:
          "The full account flow — splash, sign-in, registration, verification, and password recovery — designed alongside the product rather than bolted on.",
      },
    ],
  },
  {
    title: "Renado Labs — Applied AI R&D Studio",
    slug: "renado-labs",
    description:
      "The identity and site for a private applied-AI lab — a quiet, editorial system for a studio whose pitch is that its systems survive contact with production.",
    image: "/images/portfolio/renado-hero.webp",
    tags: ["Brand", "Web Design", "AI"],
    deviceType: "macbook",
    client: "Renado Labs",
    year: "2026",
    industry: "Applied AI R&D",
    services: ["Brand & Identity", "Web Design", "Art Direction"],
    overview:
      "Renado Labs builds and architects AI products, rapid prototypes, and production infrastructure — first prototype through deployed system. The site had to read as a working lab rather than an agency: no stock-photo futurism, no neon, no promises of disruption. The result is a bone-paper editorial system where a grotesque display face carries the claims, a serif italic carries the asides, and aerial survey photography — land marked, measured, gridded — does the atmospheric work. Restraint is the pitch: the design implies a studio with nothing to prove.",
    challenge:
      "Applied-AI studios all sound identical, and their websites look it — the same gradients, the same abstract meshes, the same language about transformation. A lab whose actual value is judgment and production rigour cannot signal that with visual noise. The design had to establish seriousness in the first five seconds while keeping the founder, not the technology, at the centre.",
    solution:
      "An editorial identity in the register of a research document. A numbered section spine (RNDO-001, 02 · PRODUCTS & PROJECTS) frames the site as filed work; the palette stays bone, ink, and paper; and aerial survey imagery — surveyed ground, faint grid lines — supplies texture without a single technology cliché. The headline sets the whole position in one line and turns on a serif italic: AI systems that survive contact with production. Capabilities, an active-tracks section presenting the lab as a living portfolio of builds, and a plainly stated engagement model follow — with a single, unhurried call to action.",
    timeline: "Ongoing — shipped and in active development",
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    outcomes: [
      "Editorial identity that reads as a research lab rather than an agency",
      "Numbered section spine framing the site as filed, documented work",
      "Aerial survey art direction — texture and rigour without technology clichés",
      "Founder-forward positioning with a single, unhurried call to action",
    ],
    gallery: [
      {
        type: "imageWithCaption",
        image: "/images/portfolio/renado-capabilities.webp",
        alt: "Renado Labs capabilities section",
        heading: "Claims stated, not sold",
        body: "Capabilities are set as a document rather than a pitch deck — plain language, generous measure, and a serif italic reserved for the turn in each sentence. Nothing animates for its own sake.",
        align: "left",
      },
      {
        type: "twoUp",
        images: [
          {
            src: "/images/portfolio/renado-project-tracks.webp",
            alt: "Renado Labs active project tracks",
          },
          {
            src: "/images/portfolio/renado-project-track-detail.webp",
            alt: "Renado Labs project track detail",
          },
        ],
        caption:
          "A living lab of systems and builds — four active tracks presented as ongoing work rather than finished case studies.",
      },
      {
        type: "twoUp",
        images: [
          {
            src: "/images/portfolio/renado-about.webp",
            alt: "Renado Labs about section",
          },
          {
            src: "/images/portfolio/renado-engagement.webp",
            alt: "Renado Labs engagement model",
          },
        ],
        caption:
          "The founder stays at the centre, and the engagement model is stated plainly — scope call first, no funnel.",
      },
      {
        type: "full",
        image: "/images/portfolio/renado-contact.webp",
        alt: "Renado Labs contact section",
        caption:
          "One unhurried call to action closes the page — the same restraint the rest of the system is arguing for.",
      },
    ],
  },
  {
    title: "VetClaim Pro — VA Disability Claim Builder",
    slug: "vetclaim-pro",
    description:
      "A guided eight-step tool that reads a veteran's service and medical records, finds every condition they could claim, and rewrites their own words in the language the VA actually rates on.",
    image: "/images/portfolio/vetclaim-landing-hero.webp",
    tags: ["AI", "GovTech", "Full-Stack"],
    deviceType: "both",
    client: "VetClaim Pro",
    year: "2026",
    industry: "Veteran Services",
    services: [
      "Product Design",
      "Full-Stack Development",
      "AI Integration",
      "Brand & Identity",
    ],
    overview:
      "Veterans lose ratings they earned because a claim is a translation problem: the VA rates on the specific language of 38 CFR Part 4, and almost nobody writes that way about their own body. VetClaim Pro closes that gap. It reads uploaded service and medical records, surfaces every condition the evidence supports — direct, secondary, and presumptive — interviews the veteran condition by condition, shows exactly where their answers land against the rating criteria, and exports a Statement in Support of Claim written in the VA's own terms. Nothing is invented: every line traces back to the veteran's answers or their records.",
    challenge:
      "A disability claim asks a veteran to be their own medical historian, records clerk, and regulatory analyst at once. Conditions that qualify get missed entirely — secondaries that flow from an existing injury, presumptives tied to a service era. And when a condition is claimed, it is usually described in ordinary language that the rating schedule cannot score, so the veteran is rated below what their evidence supports. The tool had to do serious analytical work while remaining trustworthy about its own limits — it is not a lawyer, not VA-accredited, and it files nothing.",
    solution:
      "An eight-step flow that never asks for something it can infer. Service history establishes the era and its presumptives; uploaded records are scanned and every finding is shown with its source — sick call entries, profiles, MRI findings — so the veteran can untick anything they do not want to claim. An anatomical body map covers conditions the records missed, grouped by system and filtered to the veteran's service era. A structured interview then asks only what the rating criteria actually turn on. The review board shows each condition's diagnostic code, the estimated rating, and the specific evidence gaps standing between the veteran and the next rung. Export produces a PDF in VA language, alongside a combined-rating estimate — and a plain warning that software wrote it and every line should be read.",
    timeline: "Ongoing — shipped and in active development",
    techStack: ["Next.js", "React", "TypeScript", "AI / LLM", "Tailwind CSS", "Vercel"],
    outcomes: [
      "Records scanned and every condition surfaced with its supporting evidence cited",
      "Direct, secondary, and presumptive service connection classified automatically",
      "Service-era presumptives applied, including PACT Act and burn-pit conditions",
      "Rating estimates shown with the specific evidence gaps to the next rating level",
      "Export produces a Statement in Support of Claim in 38 CFR Part 4 language",
      "Full flow works on mobile — no account required to start",
    ],
    gallery: [
      {
        type: "imageWithCaption",
        image: "/images/portfolio/vetclaim-discovery.webp",
        alt: "VetClaim Pro discovery step listing conditions found across uploaded records",
        heading: "Everything the records support",
        body: "The scan reports what it found and why — each condition carries its evidence strength, its service-connection type, and a link to the exact records behind it. The default is opt-out, not opt-in: nothing a veteran unticks is written into their documents.",
        align: "left",
      },
      {
        type: "full",
        image: "/images/portfolio/vetclaim-body-map.webp",
        alt: "VetClaim Pro anatomical body map for selecting additional conditions",
        caption:
          "The body map catches what the paperwork missed — conditions grouped by system, with the veteran's service-era presumptives listed alongside.",
      },
      {
        type: "twoUp",
        images: [
          {
            src: "/images/portfolio/vetclaim-interview-question.webp",
            alt: "VetClaim Pro structured interview question",
          },
          {
            src: "/images/portfolio/vetclaim-interview-transcript.webp",
            alt: "VetClaim Pro interview transcript",
          },
        ],
        caption:
          "The interview asks only what the rating criteria turn on, and keeps the veteran's own words as the record of record.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/vetclaim-claim-board.webp",
        alt: "VetClaim Pro review board showing rating estimates and evidence gaps",
        heading: "The gap between you and the higher rung",
        body: "Each condition shows its diagnostic code, the range the code carries, and where the veteran's answers currently land — then names the specific gaps holding the rating down. The reasoning is stated plainly rather than hidden, and the tool is explicit that the VA assigns the real percentage after a C and P exam.",
        align: "right",
      },
      {
        type: "full",
        image: "/images/portfolio/vetclaim-export-letter.webp",
        alt: "VetClaim Pro exported statement in support of claim",
        caption:
          "The export — the veteran's facts, rewritten in the language the VA rates on, with a combined-rating estimate and an honest warning that software wrote it.",
      },
      {
        type: "twoUp",
        images: [
          {
            src: "/images/portfolio/vetclaim-mobile-discovery.webp",
            alt: "VetClaim Pro discovery step on mobile",
          },
          {
            src: "/images/portfolio/vetclaim-mobile-claim-board.webp",
            alt: "VetClaim Pro review board on mobile",
          },
        ],
        portrait: true,
        caption:
          "The entire eight-step flow works on a phone — where most veterans will actually start it.",
      },
    ],
  },
  {
    title: "AirSync — Aviation Operations Platform",
    slug: "airsync",
    description:
      "Five connected apps on one account — scheduling, dispatch, training records, maintenance, and member billing — so a flight school runs its whole operation from a single source of truth.",
    image: "/images/portfolio/airsync-home.webp",
    tags: ["SaaS", "Aviation", "Full-Stack"],
    deviceType: "macbook",
    client: "AirSync",
    year: "2026",
    industry: "Aviation SaaS",
    services: [
      "Product Design",
      "Full-Stack Development",
      "Design System",
      "Billing Integration",
    ],
    websiteUrl: "https://airsyncusa.com",
    overview:
      "Flight schools and flying clubs run on a patchwork of scheduling tools, paper training records, maintenance spreadsheets, and separate billing systems — so the same aircraft can be grounded in one place and bookable in another. AirSync collapses that into one operating system for the flight line: five apps sharing a single account and a single truth. Ground a plane once and it is a NO-GO everywhere, instantly, with no re-entry and no silos.",
    challenge:
      "Aviation operations software is fragmented by default. Scheduling, dispatch, currency and qualification tracking, maintenance status, and member billing typically live in separate systems that never talk to each other. The result is duplicated data entry and — far worse — contradictory answers to safety-critical questions like whether an aircraft is airworthy or a pilot is current.",
    solution:
      "A connected product suite rather than a monolith: Flight Schedule, Pilot Debrief, Academy, Marketplace, and PlaneBnB each stand alone but share one account and one data model. Aircraft status, pilot currency, and qualifications propagate across every surface the moment they change. The interface is built for the environments it is used in — the panel, the ramp, and the office — with a dark, high-contrast operational UI and flat, self-serve pricing that removes the enterprise sales call.",
    timeline: "Ongoing — shipped and in active development",
    techStack: ["Next.js", "React", "TypeScript", "Stripe", "Vercel"],
    outcomes: [
      "Five connected apps operating from one account and one source of truth",
      "Cross-app grounding — an aircraft marked NO-GO is unbookable everywhere at once",
      "Currency and qualification tracking verified before dispatch, not after the flight",
      "Scheduled time flows into member billing with no re-keying",
      "Multi-tenant workspaces with role-based access for owners, instructors, and students",
      "Every surface shipped in both light and dark themes",
    ],
    gallery: [
      {
        type: "full",
        image: "/images/portfolio/airsync-app-dashboard-dark.webp",
        alt: "AirSync operations dashboard showing today's board, fleet status, and revenue",
        caption:
          "The morning board — every reservation, every tail number, and the one aircraft that is down, on a single screen.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/airsync-app-schedule-light.webp",
        alt: "AirSync flight schedule with aircraft and instructor resource rows",
        heading: "Dispatch is the operational core",
        body: "Aircraft and instructors share one resource timeline, so a double-booking is impossible to create. Grounded tail numbers are struck through in red the moment maintenance flags them — the schedule cannot offer an aircraft that is not airworthy.",
      },
      {
        type: "twoUp",
        images: [
          {
            src: "/images/portfolio/airsync-app-fleet-dark.webp",
            alt: "AirSync fleet view with per-aircraft airworthiness status",
          },
          {
            src: "/images/portfolio/airsync-app-maintenance-dark.webp",
            alt: "AirSync maintenance tracking and squawks",
          },
        ],
        caption:
          "Fleet and Maintenance are the same record seen from two angles — a squawk raised here is what grounds the aircraft everywhere else.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/airsync-app-roster-dark.webp",
        alt: "AirSync roster showing owners, instructors, students and their hours",
        heading: "One roster, four roles",
        body: "Owners, staff, instructors, and students share a single roster, each with their own permissions, logged hours, and account balance. Currency and endorsements live against the pilot rather than in a binder — so the schedule can refuse a dispatch before the flight instead of discovering the problem after it.",
        align: "right",
      },
      {
        type: "full",
        image: "/images/portfolio/airsync-app-billing-dark.webp",
        alt: "AirSync member billing and invoicing",
        caption:
          "Billing closes the loop — flight time booked on the schedule becomes an invoice without anyone re-keying it.",
      },
      {
        type: "twoUp",
        images: [
          {
            src: "/images/portfolio/airsync-app-aircraft-detail-light.webp",
            alt: "AirSync aircraft detail view, light theme",
          },
          {
            src: "/images/portfolio/airsync-app-aircraft-detail-dark.webp",
            alt: "AirSync aircraft detail view, dark theme",
          },
        ],
        caption:
          "Every surface ships in both themes — daylight on the ramp, dark in the panel at night.",
      },
    ],
  },
  {
    title: "SAID Technology — Offline-First Medical Translation",
    slug: "said",
    description:
      "A secure, offline-first AI translation system for healthcare, defense, and emergency environments — real-time multilingual care without a network connection.",
    image: "/images/portfolio/said-hero-brand.webp",
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
        image: "/images/portfolio/said-lineup.webp",
        alt: "SAID Technology interface — consultation, conversation, translation detail, and security status",
        caption:
          "On-device translation tuned for medical scenarios — patient intake, symptoms, consent, critical care.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/said-clinical.webp",
        alt: "Clinician reviewing a SAID translation at the bedside",
        heading: "Designed for the moment, not the demo",
        body: "Every interaction tuned for ambulances without signal, field hospitals, and the bedside of a patient who speaks a language the clinician doesn't. Offline-first isn't a feature — it's the foundation.",
        align: "left",
      },
      {
        type: "twoUp",
        images: [
          {
            src: "/images/portfolio/said-translation-detail.webp",
            alt: "Translation detail view with source and target language panels",
          },
          {
            src: "/images/portfolio/said-chat-marble.webp",
            alt: "Bilingual conversation view",
          },
        ],
        caption:
          "Detail and conversation surfaces share one component system — consistent across hospital, field, and defense deployments.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/said-security.webp",
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
      "A measurement platform for coaching — golf swings reconstructed from video into tracked body positions, and team fixtures broken into shot-clock-anchored possessions, each claim carrying its own evidence tier.",
    image: "/images/portfolio/zonex-app-hero-dashboard.webp",
    tags: ["AI", "Sports", "Computer Vision"],
    deviceType: "macbook",
    client: "ZoneX",
    year: "2025",
    industry: "Sports Tech",
    services: ["Product Design", "Computer Vision", "Full-Stack Development"],
    overview:
      "ZoneX turns coaching intuition into measurement. On the golf side it reconstructs a player's swing from their own captured video — tracking pelvis sway, depth, and lead-side position at the checkpoints that matter — then ranks the faults that actually recur instead of the one that happened last. ZoneX Cortex applies the same discipline to team sport, cutting basketball and lacrosse fixtures into shot-clock-anchored possessions with resolved player counts and offensive shape. Across both, every claim carries an explicit evidence tier, so a coach knows how hard the footage is backing what the system just told them.",
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
        image: "/images/portfolio/zonex-app-hero-dashboard.webp",
        alt: "ZoneX Golf coaching brief showing swing checkpoints and measured patterns",
        caption:
          "The coaching brief opens on a read, not a data dump — the pattern that recurs most, the swings that prove it, and the next capture to take.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/zonex-app-hero-swing-detail.webp",
        alt: "ZoneX Golf swing detail with tracked body positions",
        heading: "The golfer, tracked from their own video",
        body: "Every figure is the player themselves, reconstructed from captured video at the checkpoints that matter. Pelvis sway, depth, and lead-side position are measured rather than eyeballed — so a coaching note points at a number instead of an opinion.",
        align: "left",
      },
      {
        type: "twoUp",
        images: [
          {
            src: "/images/portfolio/zonex-app-faults.webp",
            alt: "ZoneX Golf fault library with recurrence and severity",
          },
          {
            src: "/images/portfolio/zonex-app-compare.webp",
            alt: "ZoneX Golf side-by-side swing comparison",
          },
        ],
        caption:
          "Faults are ranked by how often they recur and how bad they get; comparison puts two captures side by side so progress is visible rather than asserted.",
      },
      {
        type: "twoUp",
        images: [
          {
            src: "/images/portfolio/zonex-app-ball-data.webp",
            alt: "ZoneX Golf ball flight data",
          },
          {
            src: "/images/portfolio/zonex-app-progress.webp",
            alt: "ZoneX Golf progress tracking across sessions",
          },
        ],
        caption:
          "Ball data and body data sit in one record, so a change in launch numbers can be traced to the movement that produced it.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/zonex-app-kiosk.webp",
        alt: "ZoneX Golf kiosk mode for the practice bay",
        heading: "A mode for the bay, not the desk",
        body: "Kiosk mode strips the workspace down for the range — capture, review, repeat — so the system works where the coaching actually happens instead of only in an office afterwards.",
        align: "right",
      },
      {
        type: "full",
        image: "/images/portfolio/zonex-cortex-possession-basketball.webp",
        alt: "ZoneX Cortex possession analysis for a basketball fixture",
        caption:
          "ZoneX Cortex — the same measurement discipline applied to team sport: shot-clock-anchored possessions, resolved player counts, and offensive shape, across basketball and lacrosse fixtures.",
      },
      {
        type: "twoUp",
        images: [
          {
            src: "/images/portfolio/zonex-cortex-matchups-basketball.webp",
            alt: "ZoneX Cortex matchup analysis",
          },
          {
            src: "/images/portfolio/zonex-cortex-evidence-tiers.webp",
            alt: "ZoneX Cortex evidence tiers",
          },
        ],
        caption:
          "Matchups and an explicit evidence tier on every claim — the system states how strongly the footage supports what it is telling you.",
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
        image: "/images/portfolio/vesta-app-dashboard-dark.webp",
        alt: "Vesta CRM dashboard with pipeline value, revenue, and conversion metrics",
        caption:
          "The dashboard opens on the numbers that matter — pipeline value, monthly revenue, conversion rate, and open inquiries, over a trend chart the user can reframe.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/vesta-app-pipeline-dark.webp",
        alt: "Vesta CRM opportunities board with drag-and-drop deal stages",
        heading: "The pipeline is the product",
        body: "Deals move between stages by drag, and every column carries its own deal count and share of total pipeline — so the shape of the funnel is legible at a glance rather than buried in a report. Priority, value, and next action live on the card itself.",
        align: "left",
      },
      {
        type: "twoUp",
        images: [
          {
            src: "/images/portfolio/vesta-app-contacts-dark.webp",
            alt: "Vesta CRM contacts database with custom fields and tagging",
          },
          {
            src: "/images/portfolio/vesta-app-communications-dark.webp",
            alt: "Vesta CRM communications and outreach history",
          },
        ],
        caption:
          "Contacts and communications share one record — every call, email, and note stays attached to the person it belongs to.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/vesta-app-automations-dark.webp",
        alt: "Vesta CRM automation sequences",
        heading: "Follow-ups that run themselves",
        body: "Outreach sequences fire on pipeline events rather than on someone remembering. Combined with the built-in form builder, a new inquiry can land, be tagged, enter a sequence, and appear on the board without anyone touching a keyboard.",
        align: "right",
      },
      {
        type: "twoUp",
        images: [
          {
            src: "/images/portfolio/vesta-app-calendar-month-dark.webp",
            alt: "Vesta CRM calendar, month view",
          },
          {
            src: "/images/portfolio/vesta-app-finance-dark.webp",
            alt: "Vesta CRM finance and revenue tracking",
          },
        ],
        caption:
          "Google Calendar, Apple Calendar, CRM tasks, and events in one schedule — and the finance view that turns closed deals into tracked revenue.",
      },
      {
        type: "twoUp",
        images: [
          {
            src: "/images/portfolio/vesta-app-marketing-dark.webp",
            alt: "Vesta CRM marketing analytics with traffic and SEO",
          },
          {
            src: "/images/portfolio/vesta-app-documents-dark.webp",
            alt: "Vesta CRM document management",
          },
        ],
        caption:
          "Marketing analytics — traffic, search rankings, Core Web Vitals — and document storage, both inside the CRM rather than bolted onto it.",
      },
      {
        type: "twoUp",
        images: [
          {
            src: "/images/portfolio/vesta-app-pipeline-light.webp",
            alt: "Vesta CRM pipeline, light theme",
          },
          {
            src: "/images/portfolio/vesta-app-dashboard-light.webp",
            alt: "Vesta CRM dashboard, light theme",
          },
        ],
        caption:
          "Every one of the fourteen screens ships in both themes — no second-class light mode.",
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
