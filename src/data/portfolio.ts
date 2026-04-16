import type { PortfolioProject } from "@/types";

export const projects: PortfolioProject[] = [
  // ─── Featured Work Samples (gallery-style template) ──────────────────────
  {
    title: "Writesonic GEO Platform",
    slug: "writesonic",
    description:
      "A generative engine optimization platform that helps brands win visibility inside AI search results — from research to ranking, in one workspace.",
    image: "/images/portfolio/sales-crm-perspective.webp",
    tags: ["AI SaaS", "Product Design", "Dashboard"],
    deviceType: "macbook",
    client: "Writesonic",
    year: "2025",
    industry: "AI SaaS",
    services: ["Product Design", "Web Development", "Design System"],
    overview:
      "Writesonic was scaling fast but their existing dashboard couldn't keep up with the new GEO product surface. We partnered with their team to design and build a unified workspace covering brand monitoring, AI citation tracking, and competitor analysis — all under a refreshed design system that could grow with the product.",
    challenge:
      "Writesonic's GEO platform spans research, monitoring, and content optimization — but the legacy dashboard was a patchwork of tools with no shared design language. New users were churning because nothing felt connected.",
    solution:
      "We rebuilt the platform around a single dashboard model: one navigation, one component library, one mental model. Each module — brand mentions, prompt rankings, competitor benchmarking — plugs into the same shell, so the product feels like one tool instead of six.",
    timeline: "6 weeks",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "tRPC"],
    outcomes: [
      "60% reduction in time-to-first-insight for new users",
      "Unified design system across 7 product modules",
      "Activation rate jumped 2.3x post-launch",
      "Used as the reference design for Writesonic's wider product suite",
    ],
    gallery: [
      {
        type: "full",
        image: "/images/portfolio/geo-analytics.avif",
        alt: "Writesonic GEO analytics dashboard",
        caption:
          "The core dashboard surfaces brand mentions, share-of-voice and prompt rankings in one glance.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/sales-dashboard.avif",
        alt: "Sales pipeline visualization",
        heading: "Designed for daily use",
        body: "Every screen was tuned for the operator who lives in the dashboard. Dense information design, keyboard shortcuts, and saved views meant power users could move 3x faster than on the old surface.",
        align: "left",
      },
      {
        type: "twoUp",
        images: [
          {
            src: "/images/portfolio/sales-crm-detail.webp",
            alt: "Detail view of analytics",
          },
          {
            src: "/images/portfolio/sales-crm-full.webp",
            alt: "Full dashboard view",
          },
        ],
        caption:
          "Detail and overview views use the same components, scaled — keeping the visual system tight.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/crm-dashboard.webp",
        alt: "Insights panel",
        heading: "Insights, not just numbers",
        body: "We collaborated with Writesonic's data team to surface the right insight at the right time — turning raw rank tracking into actionable next steps inside the same view.",
        align: "right",
      },
    ],
    metrics: [
      { value: "2.3x", label: "Activation rate uplift" },
      { value: "6 wks", label: "Design + build" },
      { value: "7", label: "Product modules unified" },
    ],
    quote: {
      text: "Startup Bros didn't just ship screens — they built the design language that the rest of our product now follows.",
      author: "Samanyou Garg",
      role: "Founder, Writesonic",
    },
  },
  {
    title: "Loopback MVP",
    slug: "loopback",
    description:
      "A focused MVP that turns user feedback into product decisions — built and launched in 4 weeks for a YC-backed founding team.",
    image: "/images/portfolio/ai-landing.webp",
    tags: ["MVP", "AI", "Product Design"],
    deviceType: "macbook",
    client: "Loopback",
    year: "2025",
    industry: "AI Workflow",
    services: ["MVP Development", "Product Design", "Branding"],
    overview:
      "Loopback's founders had validated the wedge: product teams were drowning in feedback from Slack, support, sales calls, and intercom — but none of it was synthesized. We helped them ship a focused MVP that ingests every channel, clusters themes with AI, and surfaces the top three things to build next.",
    challenge:
      "The team had a strong thesis and a small design partner waitlist, but no product. They needed to ship something credible enough to convert design partners into paying customers within their first 30 days post-launch.",
    solution:
      "We scoped down to the smallest valuable surface: ingestion + clustering + a weekly digest. We picked a stack the founding engineer could own post-handoff and shipped a polished, opinionated MVP — not a prototype.",
    timeline: "4 weeks",
    techStack: ["Next.js", "Supabase", "OpenAI", "Vercel", "Linear API"],
    outcomes: [
      "8 design partners converted in the first 30 days",
      "Onboarded teams from Notion, Vercel and Retool",
      "Founding eng team owns the codebase end-to-end",
      "Used in the seed round pitch as the live product demo",
    ],
    gallery: [
      {
        type: "full",
        image: "/images/portfolio/ai-finance.avif",
        alt: "Loopback dashboard",
        caption:
          "The home view groups feedback by AI-generated themes — not raw items.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/ai-visits.avif",
        alt: "Theme detail view",
        heading: "Themes, not tickets",
        body: "Most feedback tools treat each item as a ticket. Loopback flips that — items are evidence, themes are the unit of work, and product teams ship faster because they finally see signal over noise.",
        align: "left",
      },
      {
        type: "twoUp",
        images: [
          {
            src: "/images/portfolio/productivity-dashboard.webp",
            alt: "Weekly digest",
          },
          {
            src: "/images/portfolio/crm-journeys.webp",
            alt: "Theme detail",
          },
        ],
        caption:
          "Weekly digest emails and in-app theme detail views were designed in parallel.",
      },
    ],
    metrics: [
      { value: "4 wks", label: "Idea to launch" },
      { value: "8", label: "Design partners in 30 days" },
      { value: "100%", label: "Owned by founding team" },
    ],
    quote: {
      text: "We came in with a hunch and walked out with a product our design partners loved. The shape they shipped is the shape we still ship today.",
      author: "Marcus Weld",
      role: "Co-founder, Loopback",
    },
  },
  {
    title: "N3on Token Launch",
    slug: "n3on",
    description:
      "A 10-day platform redesign powering N3on's first token launch — landing page, app shell and bridge UI all redesigned end-to-end.",
    image: "/images/portfolio/defi-landing.webp",
    tags: ["Web3", "DeFi", "Brand"],
    deviceType: "macbook",
    client: "N3on",
    year: "2025",
    industry: "Web3",
    services: ["Web Design", "Brand Refresh", "App Shell"],
    overview:
      "N3on was launching its native token in 10 days and the existing site looked like a 2021 NFT project. We rebuilt the marketing site, redesigned the multichain bridge, and shipped a fresh app shell — in time for launch day, with zero compromises on the brand.",
    challenge:
      "Tight launch deadline, three separate surfaces (marketing site, app shell, bridge) and a brand that needed to feel premium enough to attract serious capital, not retail hype.",
    solution:
      "We ran the three surfaces in parallel with one shared design language. Type, motion and color systems were locked on day 2 so the team could ship in lockstep. Every interaction was tuned for the launch stream — no dead clicks, no jank.",
    timeline: "10 days",
    techStack: ["Next.js", "Framer Motion", "Wagmi", "RainbowKit", "Tailwind"],
    outcomes: [
      "Token launch executed on schedule with zero UX-driven incidents",
      "$11M bridged in first 24 hours",
      "Bounce rate on landing page dropped 41% vs. previous site",
      "Used as the brand reference for all subsequent N3on product work",
    ],
    gallery: [
      {
        type: "full",
        image: "/images/portfolio/defi-pages.webp",
        alt: "N3on landing page",
        caption:
          "The landing page leads with the bridge — the moment of value — not a generic hero.",
      },
      {
        type: "twoUp",
        images: [
          { src: "/images/portfolio/token-platform.avif", alt: "Token platform" },
          { src: "/images/portfolio/multichain.avif", alt: "Multichain bridge" },
        ],
        caption:
          "Token platform and multichain bridge share the same component library.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/multichain.avif",
        alt: "Multichain detail",
        heading: "Built for launch day",
        body: "We pressure-tested every state — wallet connect failures, network mismatches, slow chains — so the launch-day stream wouldn't expose a single edge case to the audience.",
        align: "right",
      },
    ],
    metrics: [
      { value: "10 days", label: "Concept to launch" },
      { value: "$11M", label: "Bridged in 24 hours" },
      { value: "−41%", label: "Bounce rate vs. old site" },
    ],
    quote: {
      text: "Three surfaces, ten days, and we hit launch without a single rollback. That's the bar now.",
      author: "Dimitri Vol",
      role: "Head of Product, N3on",
    },
  },
  {
    title: "Thrust Mobile App",
    slug: "thrust",
    description:
      "A travel companion app for adventure seekers — itinerary planning, offline maps, and a native iOS feel from day one.",
    image: "/images/portfolio/travel-app.webp",
    tags: ["Mobile", "iOS", "Travel"],
    deviceType: "iphone",
    client: "Thrust",
    year: "2025",
    industry: "Travel",
    services: ["Mobile App Design", "iOS Development", "Brand"],
    overview:
      "Thrust came to us with a clear vision: a travel app that didn't feel like a website wrapped in a phone. We delivered a native-feeling iOS experience with offline-first architecture, fluid map interactions, and a design language built for one-thumb use on a moving train.",
    challenge:
      "The existing prototype was a web view with poor performance and no offline support — unusable in the exact moments adventure travelers need it most. The team wanted native quality without going fully native first.",
    solution:
      "We shipped on Expo with carefully selected native modules for maps and storage. Every screen was designed for thumbs, every transition tuned for 60fps, and every screen worked offline before it worked online.",
    timeline: "5 weeks",
    techStack: ["React Native", "Expo", "Mapbox", "WatermelonDB", "Reanimated"],
    outcomes: [
      "Featured by Apple as a 'New App We Love' in launch week",
      "4.8★ average rating across 600+ reviews in first month",
      "Offline mode used by 73% of trips logged",
      "0.6s cold start — faster than most native-only apps",
    ],
    gallery: [
      {
        type: "twoUp",
        images: [
          { src: "/images/portfolio/thrust-mobile.avif", alt: "Thrust app screens" },
          { src: "/images/portfolio/thrust-web.avif", alt: "Thrust web companion" },
        ],
        caption:
          "Mobile-first, with a lightweight web companion for trip planning on a laptop.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/travel-app.webp",
        alt: "Trip detail screen",
        heading: "Designed for the moment of travel",
        body: "The hardest UX problem wasn't planning — it was using the app one-handed, in poor light, on a moving train, with no signal. Every interaction was designed for that worst case first.",
        align: "left",
      },
      {
        type: "full",
        image: "/images/portfolio/thrust-web.avif",
        alt: "Thrust web view",
        caption:
          "A focused web view handles trip planning where a bigger screen helps.",
      },
    ],
    metrics: [
      { value: "0.6s", label: "Cold start" },
      { value: "4.8★", label: "App Store rating" },
      { value: "73%", label: "Trips using offline mode" },
    ],
    quote: {
      text: "The app feels native because every detail was treated like it mattered. That's why Apple featured us in week one.",
      author: "Priya Shah",
      role: "CEO, Thrust",
    },
  },
  {
    title: "SocialSonic Dashboard",
    slug: "socialsonic",
    description:
      "An MVP designed to take SocialSonic from zero to 1000+ active users in 30 days — a focused dashboard built around one habit-forming workflow.",
    image: "/images/portfolio/freelancer-dashboard.webp",
    tags: ["MVP", "Marketing Tech", "Dashboard"],
    deviceType: "macbook",
    client: "SocialSonic",
    year: "2025",
    industry: "Marketing Tech",
    services: ["MVP Development", "Product Design", "Growth Loop"],
    overview:
      "SocialSonic's pitch was simple — turn any podcast into a week of LinkedIn content. Our job was to find the one habit-forming workflow that made that promise real, then ship it as a polished MVP that converted free users into paid in their first session.",
    challenge:
      "The team had a working AI pipeline but no product around it — and no way to prove that users would come back. Conversion was happening on the landing page, but retention was zero.",
    solution:
      "We collapsed the entire product into one screen: paste a podcast link, get seven days of posts, schedule them. Every other feature lived behind that core loop. Activation jumped from < 10% to > 40% in the first week.",
    timeline: "3 weeks",
    techStack: ["Next.js", "Supabase", "Stripe", "OpenAI", "LinkedIn API"],
    outcomes: [
      "1,200+ active users in the first 30 days",
      "Activation rate moved from 8% to 42%",
      "Free-to-paid conversion at 11% in week one",
      "Reached profitability within 60 days of launch",
    ],
    gallery: [
      {
        type: "full",
        image: "/images/portfolio/socialsonic.avif",
        alt: "SocialSonic generator screen",
        caption:
          "The whole MVP collapses into one screen — paste a link, get a week of content.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/freelancer-dashboard.webp",
        alt: "Content scheduling view",
        heading: "One workflow, polished to a shine",
        body: "We resisted every feature request that wasn't on the critical path. The result was a product that did one thing — and did it so well that users converted in their first session.",
        align: "right",
      },
      {
        type: "twoUp",
        images: [
          { src: "/images/portfolio/crm-dashboard.webp", alt: "Analytics" },
          { src: "/images/portfolio/crm-detail.webp", alt: "Post detail" },
        ],
        caption:
          "Analytics and post detail views were added in week two, after the core loop was proven.",
      },
    ],
    metrics: [
      { value: "1,200+", label: "Users in 30 days" },
      { value: "42%", label: "Activation rate" },
      { value: "60 days", label: "To profitability" },
    ],
    quote: {
      text: "They told us 'no' more than they told us 'yes' — and that's exactly why we hit 1000 users. Focus shipped the product.",
      author: "Daniel Lee",
      role: "Founder, SocialSonic",
    },
  },
  {
    title: "Community Search",
    slug: "community",
    description:
      "A unified search layer for community managers — find anything across Slack, Discord, Circle, and Notion, in one place, in under a second.",
    image: "/images/portfolio/productivity-dashboard.webp",
    tags: ["B2B SaaS", "Search", "Productivity"],
    deviceType: "macbook",
    client: "Community",
    year: "2025",
    industry: "Productivity",
    services: ["Product Design", "Web Development", "Search Infra"],
    overview:
      "Community managers run their teams across five tools and remember nothing. Community Search lets them find any message, member, or thread across every platform in under a second. We designed the experience and built the underlying search index — and shipped both in 5 weeks.",
    challenge:
      "Search across federated platforms is hard — every API has different rate limits, schemas, and quirks. The product needed to feel instant, even though the data lived in five different places.",
    solution:
      "We built a unified index with incremental sync, designed a keyboard-first command palette UI, and tuned every interaction for sub-second response. Users open it 40+ times a day — it had to be faster than Cmd+T.",
    timeline: "5 weeks",
    techStack: ["Next.js", "Typesense", "Inngest", "Supabase", "Tailwind"],
    outcomes: [
      "Average query latency under 180ms",
      "Used 40+ times per day per active user",
      "Replaced an average of 4 saved searches per workspace",
      "Acquired by a major community platform within 6 months",
    ],
    gallery: [
      {
        type: "full",
        image: "/images/portfolio/community-search.avif",
        alt: "Community Search command palette",
        caption:
          "The command palette is the entire product — opened with one keystroke from anywhere.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/crm-journeys.webp",
        alt: "Search results view",
        heading: "Faster than memory",
        body: "We designed for the moment a community manager is mid-conversation and needs to surface a thread from three months ago. Sub-second matters because the alternative is breaking flow to scroll through Slack.",
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
      { value: "180ms", label: "Average query latency" },
      { value: "40+/day", label: "Per-user open rate" },
      { value: "5 wks", label: "Design + build" },
    ],
    quote: {
      text: "It became the most-used app in our workspace within a week. Then we couldn't imagine working without it.",
      author: "Hannah Kim",
      role: "Head of Community, Maven",
    },
  },

  // ─── Portfolio case studies (gallery-style template) ──────────────────────
  {
    title: "Building an Enterprise-Grade Website for LTV.ai",
    slug: "ltv-ai",
    description:
      "An enterprise-grade marketing site for an AI customer-LTV platform — built to convert Fortune 500 procurement teams, not just curious browsers.",
    image: "/images/portfolio/crm-dashboard.webp",
    tags: ["AI", "Enterprise", "Web Design"],
    deviceType: "macbook",
    client: "LTV.ai",
    year: "2025",
    industry: "AI Analytics",
    services: ["Web Design", "Web Development", "Brand"],
    overview:
      "LTV.ai was closing six-figure ARR deals with enterprise buyers, but their marketing site looked like a seed-stage prototype. We rebuilt the entire site around the enterprise buying motion — a confident hero, a deep product explainer for technical buyers, and a security/compliance page procurement could send straight to legal.",
    challenge:
      "The old site was actively losing deals at the demo stage. Procurement teams were filtering LTV.ai out before sales even got a foot in the door, because the site read 'startup' and the buyer needed 'enterprise.'",
    solution:
      "We rebuilt the site around the buying motion — quietly confident hero, a page-deep product explainer with diagrams technical buyers could actually digest, and a dedicated trust center covering SOC 2, data residency, and SSO out of the box.",
    timeline: "5 weeks",
    techStack: ["Next.js", "Sanity CMS", "Framer Motion", "Vercel", "Tailwind"],
    outcomes: [
      "3.2x increase in inbound enterprise demo requests",
      "Procurement objections at demo stage dropped to near-zero",
      "Site cited in two Fortune 500 vendor selections in launch quarter",
      "Trust center reused as the sales team's primary procurement asset",
    ],
    gallery: [
      {
        type: "full",
        image: "/images/portfolio/crm-dashboard.webp",
        alt: "LTV.ai marketing hero",
        caption:
          "The hero leads with the enterprise outcome, not the product feature.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/sales-dashboard.avif",
        alt: "Product explainer page",
        heading: "Designed for the technical buyer",
        body: "We built the product page around the questions data and analytics leaders actually ask — model architecture, data residency, evaluation methodology. Every diagram earned its place from a real buyer interview.",
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
          "Trust center and pricing pages were built to be sent directly to procurement.",
      },
    ],
    metrics: [
      { value: "3.2x", label: "Enterprise demo requests" },
      { value: "5 wks", label: "Concept to launch" },
      { value: "2", label: "Fortune 500 wins in Q1" },
    ],
    quote: {
      text: "The new site closed deals that the old site was actively losing. We can trace seven-figure ARR back to specific pages.",
      author: "Avery Lin",
      role: "Head of Marketing, LTV.ai",
    },
  },
  {
    title: "Designing Gigamind's Credible AI-First Landing Page",
    slug: "gigamind-landing",
    description:
      "A landing page designed to convert skeptical AI buyers — built around proof, not promises.",
    image: "/images/portfolio/ai-landing.webp",
    tags: ["AI", "Landing Page", "Conversion"],
    deviceType: "macbook",
    client: "Gigamind",
    year: "2025",
    industry: "AI Knowledge",
    services: ["Landing Page", "Brand", "Conversion"],
    overview:
      "Gigamind was launching into a market drowning in AI hype. Every competitor said the same vague things, every landing page looked the same, and buyers had stopped believing the marketing. We rebuilt their landing page around proof — a working demo above the fold, real customer outputs, and zero buzzwords.",
    challenge:
      "The original landing page converted at less than 1%. The team had a strong product but the page buried it under generic AI marketing language that buyers had been trained to ignore.",
    solution:
      "We led with a working demo before the headline, replaced AI buzzwords with concrete output examples, and rebuilt social proof around real logos and quotes — not stock testimonials. Every section had to earn its place by lifting a measurable funnel step.",
    timeline: "3 weeks",
    techStack: ["Next.js", "Tailwind", "Framer Motion", "PostHog", "Vercel"],
    outcomes: [
      "Conversion rate moved from 0.9% to 4.6%",
      "Average session time up 2.4x — visitors actually engaged with the demo",
      "Bounce rate dropped 38% on paid traffic",
      "Page reused as the template for 3 subsequent product launches",
    ],
    gallery: [
      {
        type: "full",
        image: "/images/portfolio/ai-landing.webp",
        alt: "Gigamind landing hero",
        caption:
          "The hero leads with a working demo — not a headline making promises.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/ai-finance.avif",
        alt: "Output examples section",
        heading: "Show, don't tell",
        body: "We replaced every AI buzzword with a real example of what the product actually produces. Buyers stopped reading and started clicking — because the proof was already on the screen.",
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
          "Real customer logos and concrete feature breakdowns replaced the usual hype.",
      },
    ],
    metrics: [
      { value: "5.1x", label: "Conversion lift" },
      { value: "3 wks", label: "Design + launch" },
      { value: "−38%", label: "Bounce rate on paid traffic" },
    ],
    quote: {
      text: "We finally have a page that does the selling for us. The demo team only talks to qualified buyers now.",
      author: "Jordan Mehta",
      role: "Founder, Gigamind",
    },
  },
  {
    title: "Redesigning GigaMind's Entire Product in Two Weeks",
    slug: "gigamind-product",
    description:
      "A two-week product redesign sprint that unified five fragmented surfaces into one coherent workspace — and gave the team a design system to build on.",
    image: "/images/portfolio/productivity-dashboard.webp",
    tags: ["AI", "Product Design", "Design System"],
    deviceType: "macbook",
    client: "GigaMind",
    year: "2025",
    industry: "AI Knowledge",
    services: ["Product Design", "Component Library", "UX"],
    overview:
      "GigaMind had grown by ship-and-iterate, and the product had become five different visual languages stitched together. New users were confused, and the engineering team couldn't ship features quickly because every component was a one-off. We ran a two-week sprint that delivered a unified design system and a fully redesigned product.",
    challenge:
      "Five years of fast shipping had left GigaMind with a product that looked like five different products in a trench coat. New user confusion was up, feature velocity was down, and the team needed a reset that didn't take six months.",
    solution:
      "We ran a two-week sprint: design audit on day 1, component library by day 5, full surface redesign by day 10, polish and engineering handoff by day 14. The team came out the other side with a unified system they could build on for years.",
    timeline: "2 weeks",
    techStack: ["React", "Tailwind", "Radix UI", "Storybook", "TypeScript"],
    outcomes: [
      "5 fragmented surfaces unified under one design system",
      "Feature ship velocity up 60% in the month following handoff",
      "New user confusion (measured via support tickets) dropped 47%",
      "Component library still in active use 9 months later",
    ],
    gallery: [
      {
        type: "full",
        image: "/images/portfolio/productivity-dashboard.webp",
        alt: "GigaMind unified workspace",
        caption:
          "One workspace, one design language — the new home view replaced five disconnected surfaces.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/crm-journeys.webp",
        alt: "Workflow view",
        heading: "Designed for the engineer who'll extend it",
        body: "We didn't just hand off Figma files — we built the Storybook, documented the tokens, and paired with engineering on the first three components so the system would actually get adopted, not shelved.",
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
      { value: "2 wks", label: "Audit to handoff" },
      { value: "+60%", label: "Feature ship velocity" },
      { value: "−47%", label: "New user support tickets" },
    ],
    quote: {
      text: "Two weeks gave us a design system we'd been talking about for a year. Their constraint was the gift.",
      author: "Mariana Cole",
      role: "VP of Engineering, GigaMind",
    },
  },
  {
    title: "Redesigning Sybill Without Disrupting Existing Users",
    slug: "sybill",
    description:
      "A full product redesign delivered in waves — new users get the new experience, power users migrate on their own schedule, no one churns.",
    image: "/images/portfolio/sales-crm-full.webp",
    tags: ["AI", "Sales", "Migration"],
    deviceType: "macbook",
    client: "Sybill",
    year: "2025",
    industry: "AI Sales",
    services: ["Product Design", "UX Research", "Migration Strategy"],
    overview:
      "Sybill's existing users were power users with deeply ingrained workflows — a clean-slate redesign would have caused mass churn. But the legacy UI was holding back new user adoption. We designed two parallel surfaces and a gradual migration path that let the team ship the new experience without losing a single power user.",
    challenge:
      "Power users had built their entire workflow around quirks of the legacy UI. Any redesign that broke muscle memory would churn the highest-LTV users — but the legacy UI was the #1 reason new trial users dropped off.",
    solution:
      "We shipped two parallel surfaces: a new opt-in experience for all new accounts, and a gradual migration path for existing users with side-by-side previews and easy revert. Every release moved a slice of users without breaking anyone's flow.",
    timeline: "8 weeks",
    techStack: ["React", "Tailwind", "Framer Motion", "PostHog", "Storybook"],
    outcomes: [
      "Zero net churn during migration period",
      "New user trial-to-paid conversion up 41%",
      "92% of power users self-migrated within 90 days",
      "Sales team's #1 objection (the legacy UI) eliminated",
    ],
    gallery: [
      {
        type: "full",
        image: "/images/portfolio/sales-crm-full.webp",
        alt: "Sybill new experience",
        caption:
          "The new opt-in experience for new accounts — clean, focused, fast.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/sales-crm-detail.webp",
        alt: "Side-by-side preview",
        heading: "Migration on the user's schedule",
        body: "Power users could preview the new UI side-by-side with the old one, switch at will, and revert any time. By the time we deprecated the legacy surface, 92% had already moved on their own.",
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
          "Power user surfaces preserved muscle memory — same shortcuts, refreshed shell.",
      },
    ],
    metrics: [
      { value: "0%", label: "Net churn during migration" },
      { value: "+41%", label: "Trial-to-paid conversion" },
      { value: "92%", label: "Power users self-migrated" },
    ],
    quote: {
      text: "We shipped a complete redesign and didn't lose a single power user. That shouldn't be possible.",
      author: "Nishit Asnani",
      role: "Co-founder, Sybill",
    },
  },
  {
    title: "Designing Hobbes as an Embedded Partner",
    slug: "hobbes-embedded",
    description:
      "An embedded AI assistant designed to feel native to every host application it lands in — from setup to first interaction in under an hour.",
    image: "/images/portfolio/crm-journeys.webp",
    tags: ["AI", "Embedded", "Design System"],
    deviceType: "macbook",
    client: "Hobbes",
    year: "2025",
    industry: "Embedded AI",
    services: ["Product Design", "Embedded UX", "Partner SDK"],
    overview:
      "Hobbes was being embedded into customers' own products, but the existing UI fought against every host design system it landed in. Each integration felt like Hobbes was bolted on, not built in. We designed a chameleon component system that adapts to the host's spacing, color, and typography — while keeping Hobbes's interaction patterns consistent across every embed.",
    challenge:
      "Every customer integration looked different — and looked wrong. Hobbes's components clashed with host design systems, integration teams burned weeks on visual cleanup, and end users felt the seam between Hobbes and the surrounding product.",
    solution:
      "We built a token-driven component system that absorbs the host's design tokens at runtime — colors, radii, type scale, spacing — and re-skins Hobbes to match in milliseconds. Interaction patterns stay consistent so end users always know they're using Hobbes.",
    timeline: "6 weeks",
    techStack: ["React", "Tailwind", "Iframe Resizer", "PostMessage API", "TypeScript"],
    outcomes: [
      "Average integration setup time cut from 3 weeks to 4 hours",
      "12 partner products live in launch quarter (vs. 3 the prior quarter)",
      "End-user NPS on embedded surfaces matched native NPS",
      "Partner cleanup tickets dropped to zero",
    ],
    gallery: [
      {
        type: "full",
        image: "/images/portfolio/crm-journeys.webp",
        alt: "Hobbes embedded inside a host product",
        caption:
          "Hobbes embedded inside a partner product — same component, fully adapted to the host's design language.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/crm-detail.webp",
        alt: "Token system diagram",
        heading: "One component, every host",
        body: "The chameleon system reads the host's CSS variables and adapts Hobbes's surface in real time. Partners drop in one script tag and the assistant looks like it was built specifically for their product.",
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
          "Same Hobbes, two host products — visually adapted, behaviorally consistent.",
      },
    ],
    metrics: [
      { value: "4 hrs", label: "Integration setup (was 3 wks)" },
      { value: "12", label: "Partner products live" },
      { value: "0", label: "Partner cleanup tickets" },
    ],
    quote: {
      text: "Our partners stopped asking for visual customization — they just dropped us in and shipped. That's the bar we needed to hit.",
      author: "Ethan Reyes",
      role: "Head of Partnerships, Hobbes",
    },
  },
  {
    title: "Rebranding Hobbes for an AI-First Market",
    slug: "hobbes-rebrand",
    description:
      "A complete identity refresh to match Hobbes's new market position — premium, opinionated, unmistakably AI-native.",
    image: "/images/portfolio/crm-detail.webp",
    tags: ["Brand", "Visual System", "Web Design"],
    deviceType: "macbook",
    client: "Hobbes",
    year: "2025",
    industry: "AI Tools",
    services: ["Brand Identity", "Visual System", "Web Design"],
    overview:
      "Hobbes had outgrown its original identity. The new product was for engineering leaders at Series B+ companies, but the brand still looked like an indie hacker side project. We led a full identity refresh — wordmark, color system, type stack, motion principles, and a new website that delivered the visual impact the new buyer expected.",
    challenge:
      "The old brand was reading 'hobby project' to a buyer audience that needed to see 'enterprise-credible.' Sales was losing deals on the deck before they got to the product demo.",
    solution:
      "We delivered a full identity system in 5 weeks — new wordmark, restrained color palette built around a single accent, custom display type pairing, and motion principles applied consistently across web, product, and sales collateral.",
    timeline: "5 weeks",
    techStack: ["Figma", "Next.js", "Tailwind", "Framer Motion", "Vercel"],
    outcomes: [
      "Series B+ pipeline up 2.7x in the quarter post-relaunch",
      "Sales deck close rate up 22% on rebranded materials",
      "Featured in 3 design publications during launch week",
      "New brand system used as the reference for all subsequent products",
    ],
    gallery: [
      {
        type: "full",
        image: "/images/portfolio/crm-detail.webp",
        alt: "Hobbes new brand mark and website",
        caption:
          "The new identity centers on restraint — one accent color, one display type, one motion principle.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/crm-dashboard.webp",
        alt: "Brand application in product",
        heading: "Brand applied where it matters",
        body: "We carried the new identity into the product itself — not just the website. Buyers who saw the brand in the deck, the site, and the product walked away with the same impression: serious, premium, considered.",
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
      { value: "2.7x", label: "Series B+ pipeline" },
      { value: "+22%", label: "Sales close rate" },
      { value: "5 wks", label: "Concept to launch" },
    ],
    quote: {
      text: "We finally look like the company we already are. Buyers stopped second-guessing us in the first meeting.",
      author: "Lauren Park",
      role: "CEO, Hobbes",
    },
  },
  {
    title: "Turning AlSuitUp's Landing Page Into a Conversion Engine",
    slug: "alsuitup",
    description:
      "A landing page rebuild driven by conversion data — every section earned its place by lifting a measurable funnel step.",
    image: "/images/portfolio/fintech-mobile.webp",
    tags: ["AI", "Landing Page", "CRO"],
    deviceType: "macbook",
    client: "AlSuitUp",
    year: "2025",
    industry: "Legal Tech",
    services: ["Landing Page", "CRO", "A/B Testing"],
    overview:
      "AlSuitUp's old landing page converted at 1.4% — well below the legal-tech benchmark. The founders had a strong product but a page that buried it under noise. We rebuilt the page section by section, instrumenting each with PostHog, A/B testing every angle until conversion settled at 4.8% — a 3.4x lift.",
    challenge:
      "The team had spent six months iterating on the landing page with no measurable lift. Every section was someone's pet feature, nothing was instrumented, and conversion was stuck.",
    solution:
      "We started from the funnel, not the page. We instrumented the existing page first to learn where users actually dropped off, then rebuilt section by section — running A/B tests on headline angle, demo placement, pricing transparency, and social proof until each lifted the next funnel step.",
    timeline: "4 weeks",
    techStack: ["Next.js", "Tailwind", "PostHog", "Stripe", "Vercel"],
    outcomes: [
      "Conversion rate moved from 1.4% to 4.8% (3.4x lift)",
      "Cost per qualified lead down 64% on paid traffic",
      "Average time-to-pricing-page cut in half",
      "Conversion playbook rolled out to 2 sister products",
    ],
    gallery: [
      {
        type: "full",
        image: "/images/portfolio/fintech-mobile.webp",
        alt: "AlSuitUp landing page",
        caption:
          "The new page leads with the demo and routes the right buyer to the right CTA in under 8 seconds.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/fintech-app-duo.webp",
        alt: "Pricing transparency",
        heading: "Pricing as a conversion lever",
        body: "Pricing transparency was the single biggest lift in our test sequence. Putting clear pricing above the fold — instead of behind a 'contact us' wall — moved qualified leads up 41% on its own.",
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
          "The demo embed and rebuilt social proof section each contributed to the final 3.4x lift.",
      },
    ],
    metrics: [
      { value: "3.4x", label: "Conversion lift" },
      { value: "−64%", label: "Cost per qualified lead" },
      { value: "4 wks", label: "Audit to launch" },
    ],
    quote: {
      text: "We'd been guessing for six months. Four weeks of disciplined testing got us to a number we couldn't have reached on instinct.",
      author: "Carlos Romero",
      role: "Founder, AlSuitUp",
    },
  },
  {
    title: "Manyreach Website Revamp that Increased Conversions & AOV",
    slug: "manyreach",
    description:
      "A full website revamp paired with a redesigned pricing page — moving the average customer to a higher-tier plan without raising prices.",
    image: "/images/portfolio/sales-crm-detail.webp",
    tags: ["Sales", "Web Design", "Pricing"],
    deviceType: "macbook",
    client: "Manyreach",
    year: "2025",
    industry: "Sales Tools",
    services: ["Web Design", "Pricing Strategy", "CRO"],
    overview:
      "Manyreach's original site was conversion-friendly but pushed users toward the cheapest plan. AOV was capped, and the team was leaving money on the table at the pricing page. We redesigned the site with a clearer value ladder, anchored pricing on the mid-tier plan, and added an outcome calculator that helped buyers self-select into the tier that actually fit their team.",
    challenge:
      "Conversion was healthy but AOV was stuck at the entry-level tier. Buyers were defaulting to the cheapest plan because nothing on the pricing page helped them understand which tier was right for them.",
    solution:
      "We redesigned the value ladder so each tier solved a clearly different problem, anchored visual emphasis on the mid-tier plan, and built an outcome calculator that translated team size and volume into a recommended plan in real time.",
    timeline: "4 weeks",
    techStack: ["Next.js", "Tailwind", "Framer Motion", "Sanity CMS", "Vercel"],
    outcomes: [
      "Average order value up 34% with no price changes",
      "Mid-tier plan adoption tripled in launch quarter",
      "Conversion rate held steady — no trade-off",
      "Calculator became the most-shared asset on the site",
    ],
    gallery: [
      {
        type: "full",
        image: "/images/portfolio/sales-crm-detail.webp",
        alt: "Manyreach new homepage",
        caption:
          "The new homepage leads with outcomes by buyer persona — not features.",
      },
      {
        type: "imageWithCaption",
        image: "/images/portfolio/sales-crm-full.webp",
        alt: "Pricing page redesign",
        heading: "Pricing as a guidance tool",
        body: "The old pricing page asked buyers to choose. The new one helps them understand which choice is right — by tier purpose, by team size, by volume. AOV moved up 34% because the right buyer landed on the right plan.",
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
      { value: "+34%", label: "Average order value" },
      { value: "3x", label: "Mid-tier plan adoption" },
      { value: "4 wks", label: "Design + launch" },
    ],
    quote: {
      text: "We didn't change the product or the prices. We changed how buyers understood them — and AOV moved 34%.",
      author: "Ben Northam",
      role: "Co-founder, Manyreach",
    },
  },
];
