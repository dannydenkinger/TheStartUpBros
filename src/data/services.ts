import type { Service } from "@/types";

export const services: Service[] = [
  {
    title: "Web Development",
    slug: "web-development",
    description:
      "Fast, modern, and reliable websites built to be the high-performance home for your business.",
    longDescription:
      "We build blazing-fast marketing sites, landing pages, and web platforms on modern frameworks like Next.js and React. Every build ships with responsive layouts, SEO fundamentals, and performance tuning baked in — so your site loads instantly and converts from day one.",
    icon: "globe",
    features: [
      "Next.js & React builds",
      "Responsive, mobile-first layouts",
      "Performance-tuned for Lighthouse 100/100",
      "CMS integration (Sanity, Contentful, MDX)",
      "Analytics & conversion tracking",
    ],
    useCases: [
      "Launch a premium marketing site for your startup",
      "Rebuild an outdated site on a modern stack",
      "Ship a high-converting landing page in days",
      "Create a content-driven site with headless CMS",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Vercel", "Sanity", "MDX", "TypeScript"],
    deliverables: [
      "Fully responsive production website",
      "SEO optimization & structured data",
      "Performance audit report",
      "CMS setup & content workflow",
      "Analytics & tracking integration",
    ],
    featureHighlights: [
      {
        icon: "Zap",
        title: "Sub-Second Load Times",
        description:
          "Server-rendered, edge-cached, image-optimized. Your site loads before the user blinks.",
      },
      {
        icon: "Smartphone",
        title: "Mobile-First Always",
        description:
          "Designed for the thumb first, the trackpad second. Every layout works perfectly on any screen.",
      },
      {
        icon: "Search",
        title: "SEO Built In",
        description:
          "Semantic HTML, structured data, meta tags, and sitemaps — the technical foundation Google rewards.",
      },
      {
        icon: "Paintbrush",
        title: "Pixel-Perfect Build",
        description:
          "Every section earns its place. Clean typography, intentional spacing, and animations that feel premium.",
      },
      {
        icon: "FileEdit",
        title: "Easy Content Updates",
        description:
          "Headless CMS integration so your team can update copy, images, and pages without touching code.",
      },
      {
        icon: "BarChart3",
        title: "Conversion Tracking",
        description:
          "Analytics, heatmaps, and event tracking wired in so you know exactly what's working.",
      },
    ],
    caseStudySlugs: ["alsuitup", "hobbes-rebrand"],
    testimonial: {
      quote:
        "We finally look like the company we already are. Buyers stopped second-guessing us in the first meeting.",
      name: "Lauren Park",
      role: "CEO @ Hobbes",
    },
  },
  {
    title: "Custom App Development",
    slug: "custom-app-dev",
    description:
      "The 'Full Stack' offering — building custom software or mobile apps to bring unique product ideas to life.",
    longDescription:
      "We build production-ready web and mobile applications from the ground up. From authentication and database design to APIs and cloud deployment, every layer is handled — delivered as a complete, scalable product ready for real users on day one.",
    icon: "code",
    features: [
      "React / Next.js frontends",
      "Node.js / Python backends",
      "Database design & optimization",
      "API development & third-party integrations",
      "CI/CD & cloud deployment",
    ],
    useCases: [
      "Launch an MVP web app in 2-4 weeks",
      "Build a cross-platform mobile app with React Native",
      "Create a multi-tenant SaaS platform with billing",
      "Migrate a legacy system to a modern stack",
    ],
    techStack: ["Next.js", "React", "Node.js", "Python", "PostgreSQL", "Redis", "AWS", "Vercel"],
    deliverables: [
      "Production-deployed application",
      "CI/CD pipeline configuration",
      "API documentation",
      "Database schema & migrations",
      "Monitoring & alerting setup",
    ],
    featureHighlights: [
      {
        icon: "Layers",
        title: "Modern Frontend",
        description:
          "React + Next.js with server components, Tailwind, and Framer Motion — fast out of the box.",
      },
      {
        icon: "Terminal",
        title: "Production Backend",
        description:
          "Node.js or Python APIs designed for scale — with auth, rate limits, and observability from day one.",
      },
      {
        icon: "Database",
        title: "Database That Fits",
        description:
          "Postgres for most things, Redis where it matters. Schemas built to grow, not to retrofit.",
      },
      {
        icon: "Zap",
        title: "CI/CD From Day One",
        description:
          "Every push deploys. Preview URLs on every PR. Zero-downtime production deploys.",
      },
      {
        icon: "Shield",
        title: "Secure By Default",
        description:
          "Authentication, authorization, rate limiting, and audit trails built into the foundation.",
      },
      {
        icon: "Activity",
        title: "Observability Built In",
        description:
          "Structured logs, error tracking, and uptime monitoring so you know when something breaks.",
      },
    ],
    caseStudySlugs: ["ltv-ai", "sybill"],
    testimonial: {
      quote:
        "We shipped a complete redesign and didn't lose a single power user. That shouldn't be possible.",
      name: "Nishit Asnani",
      role: "Co-founder @ Sybill",
    },
  },
  {
    title: "Search Optimization (SEO)",
    slug: "seo",
    description:
      "Getting your business found on the first page of Google by people actively looking for your services.",
    longDescription:
      "We handle the technical and strategic SEO work that gets startups ranking. From site audits and keyword research to on-page optimization and content strategy, we build the organic pipeline that compounds month over month without ad spend.",
    icon: "search",
    features: [
      "Technical SEO audits & fixes",
      "Keyword research & content strategy",
      "On-page optimization",
      "Schema markup & structured data",
      "Performance & Core Web Vitals tuning",
    ],
    useCases: [
      "Rank on page one for your core product keywords",
      "Fix technical issues tanking your search visibility",
      "Build a content engine that drives organic leads",
      "Outrank competitors in a crowded startup niche",
    ],
    techStack: ["Google Search Console", "Ahrefs", "Screaming Frog", "Next.js", "Vercel Analytics", "Schema.org"],
    deliverables: [
      "Full technical SEO audit report",
      "Keyword strategy & content roadmap",
      "On-page optimization across all pages",
      "Schema markup implementation",
      "Monthly ranking & traffic reports",
    ],
    featureHighlights: [
      {
        icon: "FileSearch",
        title: "Technical Audit",
        description:
          "We crawl every page, find every broken link, and fix the indexing issues killing your rankings.",
      },
      {
        icon: "TrendingUp",
        title: "Keyword Strategy",
        description:
          "Data-driven keyword targets based on search volume, intent, and what you can actually win.",
      },
      {
        icon: "Code",
        title: "Developer-Led SEO",
        description:
          "We don't just suggest fixes — we ship them. Meta tags, sitemaps, structured data, all in code.",
      },
      {
        icon: "Gauge",
        title: "Core Web Vitals",
        description:
          "Page speed, layout shift, and interactivity tuned to pass every Google performance threshold.",
      },
      {
        icon: "FileText",
        title: "Content Roadmap",
        description:
          "A prioritized plan for the pages and posts that will drive the most qualified traffic.",
      },
      {
        icon: "BarChart3",
        title: "Transparent Reporting",
        description:
          "Monthly reports showing rankings, traffic, and pipeline impact — no vanity metrics.",
      },
    ],
    caseStudySlugs: ["writesonic", "socialsonic"],
    testimonial: {
      quote:
        "Organic traffic went from an afterthought to our top acquisition channel in three months. The ROI speaks for itself.",
      name: "Samanyou Garg",
      role: "Founder @ Writesonic",
    },
  },
  {
    title: "Brand Design",
    slug: "brand-design",
    description:
      "A unique and professional look that makes your startup stand out from every competitor.",
    longDescription:
      "We build brand identities that make early-stage startups look like established players. Logo, color system, typography, and design language — all engineered to scale as you grow, so you never need a rebrand at Series A.",
    icon: "palette",
    features: [
      "Logo & wordmark design",
      "Color system & typography",
      "Brand guidelines document",
      "Design system & component library",
      "Social media & marketing templates",
    ],
    useCases: [
      "Define a brand identity before your first launch",
      "Rebrand an existing startup that's outgrown its look",
      "Build a design system for consistent marketing",
      "Create investor-ready pitch materials and collateral",
    ],
    techStack: ["Figma", "Adobe Illustrator", "Tailwind CSS", "Framer Motion", "Storybook", "Chromatic"],
    deliverables: [
      "Complete brand identity package",
      "Brand guidelines & usage documentation",
      "Design system with reusable components",
      "Social media template kit",
      "Pitch deck template",
    ],
    featureHighlights: [
      {
        icon: "Eye",
        title: "Identity That Sticks",
        description:
          "Logo, wordmark, color, and type — all built from one visual logic that's impossible to forget.",
      },
      {
        icon: "Palette",
        title: "Scalable Color System",
        description:
          "A palette engineered for dark mode, light mode, web, print, and every surface your brand touches.",
      },
      {
        icon: "Type",
        title: "Typography That Works",
        description:
          "Font pairings selected for readability, personality, and performance across every screen size.",
      },
      {
        icon: "Layout",
        title: "Design System",
        description:
          "Reusable components in Figma and code so every page, email, and ad stays on-brand automatically.",
      },
      {
        icon: "Sparkles",
        title: "Motion Language",
        description:
          "Subtle animations and transitions that feel premium and reinforce your brand personality.",
      },
      {
        icon: "FileText",
        title: "Brand Guidelines",
        description:
          "A clear document your team and contractors can follow — so the brand stays consistent without you.",
      },
    ],
    caseStudySlugs: ["hobbes-rebrand", "n3on"],
    testimonial: {
      quote:
        "People assume we're a much bigger company than we are. That's entirely because of how the brand looks and feels now.",
      name: "Lauren Park",
      role: "CEO @ Hobbes",
    },
  },
  {
    title: "Custom Automation",
    slug: "custom-automation",
    description:
      "Connecting your apps to handle the 'busy work' so you can focus on the big-picture growth.",
    longDescription:
      "We build custom integrations and automated workflows that connect the tools your team already uses. From CRM pipelines and Slack notifications to invoice processing and data syncing, we eliminate the manual work that's burning your team's hours.",
    icon: "workflow",
    features: [
      "Multi-app workflow automation",
      "CRM & sales pipeline integrations",
      "Data syncing across platforms",
      "Custom webhook & API connectors",
      "Scheduled jobs & background tasks",
    ],
    useCases: [
      "Sync leads from your website to your CRM automatically",
      "Auto-generate invoices when a deal closes in HubSpot",
      "Send Slack alerts when key metrics change",
      "Connect your app to third-party platforms without Zapier limits",
    ],
    techStack: ["Node.js", "Python", "Make", "Zapier", "n8n", "PostgreSQL", "Redis", "AWS Lambda"],
    deliverables: [
      "Custom automation workflows",
      "API integrations & webhook handlers",
      "Error handling & retry logic",
      "Monitoring dashboard",
      "Documentation & runbooks",
    ],
    featureHighlights: [
      {
        icon: "Workflow",
        title: "End-to-End Workflows",
        description:
          "Multi-step automations that chain actions across your CRM, database, Slack, and email — reliably.",
      },
      {
        icon: "GitBranch",
        title: "Custom Integrations",
        description:
          "When Zapier can't cut it, we build direct API integrations that handle edge cases and scale.",
      },
      {
        icon: "RefreshCw",
        title: "Data Syncing",
        description:
          "Keep your tools in sync in real-time. No more copy-pasting between spreadsheets and dashboards.",
      },
      {
        icon: "Bell",
        title: "Smart Notifications",
        description:
          "Alerts in Slack, email, or SMS triggered by the events that actually matter to your team.",
      },
      {
        icon: "Shield",
        title: "Error Handling Built In",
        description:
          "Retry logic, dead-letter queues, and alerting so failed automations get caught, not lost.",
      },
      {
        icon: "Activity",
        title: "Measurable Time Saved",
        description:
          "We track hours saved per week. Every automation we ship pays for itself within the first month.",
      },
    ],
    caseStudySlugs: ["community", "manyreach"],
    testimonial: {
      quote:
        "It became the most-used app in our workspace within a week. Then we couldn't imagine working without it.",
      name: "Hannah Kim",
      role: "Head of Community @ Maven",
    },
  },
  {
    title: "AI Integration",
    slug: "ai-integration",
    description:
      "Smart tools and AI solutions that give your business a modern, high-tech competitive edge.",
    longDescription:
      "We build custom AI features and intelligent agents powered by the latest LLMs. From chatbots and document processing to RAG pipelines and AI-powered search, we integrate AI into your product or workflow where it creates real, measurable value.",
    icon: "brain",
    features: [
      "Custom AI agent workflows",
      "RAG pipelines & knowledge bases",
      "Chatbot & conversational AI",
      "Document processing & extraction",
      "AI-powered search & recommendations",
    ],
    useCases: [
      "Add an AI assistant to your SaaS product",
      "Build a support chatbot trained on your knowledge base",
      "Automate document review and data extraction",
      "Create an AI research tool for your team",
    ],
    techStack: ["Python", "LangChain", "OpenAI", "Anthropic", "Pinecone", "FastAPI", "PostgreSQL"],
    deliverables: [
      "Custom AI agent or feature",
      "RAG pipeline with vector store",
      "API endpoints for integration",
      "Monitoring & cost tracking dashboard",
      "Prompt engineering documentation",
    ],
    featureHighlights: [
      {
        icon: "Terminal",
        title: "Production-Grade Prompts",
        description:
          "Versioned, tested, evaluated. We treat prompts like code, not like copy.",
      },
      {
        icon: "GitBranch",
        title: "RAG Pipelines",
        description:
          "Retrieval-augmented generation done right — with chunking, reranking, and hit-rate evaluation.",
      },
      {
        icon: "Workflow",
        title: "Tool Use & Orchestration",
        description:
          "Agents that call your APIs, query your database, and chain actions — safely, with fallbacks.",
      },
      {
        icon: "Shield",
        title: "Guardrails & Evals",
        description:
          "Output validation, jailbreak protection, and evaluation suites so you know quality before deploy.",
      },
      {
        icon: "Activity",
        title: "Full Observability",
        description:
          "Every LLM call logged, every token counted. Debug failures, trace decisions, optimize cost.",
      },
      {
        icon: "Zap",
        title: "Latency-Optimized",
        description:
          "Streaming, caching, and model routing designed so users never wait more than a second.",
      },
    ],
    caseStudySlugs: ["loopback", "gigamind-product"],
    testimonial: {
      quote:
        "We came in with a hunch and walked out with a product our design partners loved. The shape they shipped is the shape we still ship today.",
      name: "Marcus Weld",
      role: "Co-founder @ Loopback",
    },
  },
  {
    title: "Lead Generation",
    slug: "lead-generation",
    description:
      "Building a system that finds your ideal customers and brings them directly to your door.",
    longDescription:
      "We build automated lead generation systems that find, qualify, and deliver your ideal customers. From outbound email infrastructure and LinkedIn automation to landing page funnels and lead scoring, we engineer the pipeline so you stop chasing and start closing.",
    icon: "users",
    features: [
      "Outbound email infrastructure & sequences",
      "Landing page funnels & lead magnets",
      "Lead scoring & qualification workflows",
      "CRM pipeline automation",
      "LinkedIn outreach automation",
    ],
    useCases: [
      "Build a cold outbound system that books meetings on autopilot",
      "Create a lead magnet funnel that captures and nurtures prospects",
      "Set up lead scoring so sales only talks to qualified buyers",
      "Automate follow-ups that convert warm leads into customers",
    ],
    techStack: ["Next.js", "HubSpot", "Apollo", "Instantly", "Make", "PostgreSQL", "Resend", "Vercel"],
    deliverables: [
      "Lead generation system architecture",
      "Outbound email sequences & infrastructure",
      "Landing pages & lead capture forms",
      "CRM integration & pipeline setup",
      "Performance dashboard & reporting",
    ],
    featureHighlights: [
      {
        icon: "Mail",
        title: "Outbound Infrastructure",
        description:
          "Domain warming, deliverability tuning, and multi-inbox rotation so your emails actually land.",
      },
      {
        icon: "Target",
        title: "Precision Targeting",
        description:
          "ICP-matched prospect lists built from intent signals, firmographics, and technographics.",
      },
      {
        icon: "Filter",
        title: "Lead Scoring",
        description:
          "Automated qualification so your sales team only spends time on leads ready to buy.",
      },
      {
        icon: "Repeat",
        title: "Automated Follow-Ups",
        description:
          "Multi-step sequences that nurture cold leads into warm conversations without manual effort.",
      },
      {
        icon: "BarChart3",
        title: "Pipeline Analytics",
        description:
          "Real-time dashboards showing open rates, reply rates, and pipeline value at every stage.",
      },
      {
        icon: "Plug",
        title: "CRM Integration",
        description:
          "Every lead, touchpoint, and deal stage synced into your CRM automatically — zero data entry.",
      },
    ],
    caseStudySlugs: ["manyreach", "socialsonic"],
    testimonial: {
      quote:
        "We went from zero outbound pipeline to 40 qualified meetings a month. The system basically runs itself now.",
      name: "Jake Torres",
      role: "Founder @ ManyReach",
    },
  },
  {
    title: "Digital Advertising",
    slug: "digital-advertising",
    description:
      "High-impact ads designed to put your brand in front of the right people at the right time.",
    longDescription:
      "We build and manage paid acquisition campaigns across Google, Meta, and LinkedIn. From creative and copy to audience targeting and bid optimization, we run the ads that turn budget into pipeline — with transparent reporting so you always know your CAC.",
    icon: "megaphone",
    features: [
      "Google Ads (Search, Display, YouTube)",
      "Meta Ads (Facebook & Instagram)",
      "LinkedIn Ads for B2B",
      "Ad creative & copywriting",
      "Conversion tracking & attribution",
    ],
    useCases: [
      "Launch a paid acquisition channel for your startup",
      "Reduce CAC on existing campaigns with better targeting",
      "Run retargeting campaigns that convert warm traffic",
      "Test product-market fit with rapid ad experiments",
    ],
    techStack: ["Google Ads", "Meta Ads Manager", "LinkedIn Campaign Manager", "Google Analytics", "Vercel Analytics", "Figma"],
    deliverables: [
      "Campaign strategy & media plan",
      "Ad creative & copy variants",
      "Audience targeting & segmentation",
      "Conversion tracking setup",
      "Weekly performance reports & optimization",
    ],
    featureHighlights: [
      {
        icon: "Target",
        title: "Precision Audiences",
        description:
          "Lookalikes, retargeting, and intent-based segments that put your ads in front of actual buyers.",
      },
      {
        icon: "Paintbrush",
        title: "High-Converting Creative",
        description:
          "Ad creative and copy built to stop the scroll — tested, iterated, and optimized for clicks.",
      },
      {
        icon: "TrendingUp",
        title: "Continuous Optimization",
        description:
          "Weekly bid adjustments, A/B tests, and budget reallocation based on what's actually converting.",
      },
      {
        icon: "BarChart3",
        title: "Transparent Reporting",
        description:
          "Dashboards showing spend, CPC, CAC, and ROAS — no black boxes, no vanity metrics.",
      },
      {
        icon: "Repeat",
        title: "Retargeting Funnels",
        description:
          "Multi-touch campaigns that bring visitors back and move them from awareness to purchase.",
      },
      {
        icon: "DollarSign",
        title: "Budget Efficiency",
        description:
          "We treat your ad budget like our own. Every dollar is tracked, tested, and accountable.",
      },
    ],
    caseStudySlugs: ["thrust", "n3on"],
    testimonial: {
      quote:
        "Our cost per lead dropped 60% in the first month. They actually understand startup unit economics, not just ad dashboards.",
      name: "Aidan Cole",
      role: "Growth Lead @ Thrust",
    },
  },
  {
    title: "Strategy & Consulting",
    slug: "strategy-consulting",
    description:
      "Expert guidance to help you plan your roadmap, pick the right tech, and avoid costly mistakes.",
    longDescription:
      "We help founders make the right technical and strategic decisions before writing a single line of code. From tech stack selection and architecture reviews to product roadmapping and build-vs-buy analysis, we save you months of wasted effort and six figures in wrong turns.",
    icon: "compass",
    features: [
      "Tech stack selection & architecture review",
      "Product roadmap planning",
      "Build vs. buy analysis",
      "Technical due diligence",
      "Fractional CTO advisory",
    ],
    useCases: [
      "Choose the right tech stack before building your MVP",
      "Get an architecture review before scaling your product",
      "Plan a 6-month product roadmap with realistic milestones",
      "Evaluate whether to build in-house or outsource",
    ],
    techStack: ["Notion", "Linear", "Figma", "Miro", "GitHub", "Vercel"],
    deliverables: [
      "Technical strategy document",
      "Architecture diagram & recommendations",
      "Product roadmap with milestones",
      "Tech stack recommendation report",
      "Ongoing advisory retainer (optional)",
    ],
    featureHighlights: [
      {
        icon: "Map",
        title: "Technical Roadmap",
        description:
          "A clear, prioritized plan for what to build, when to build it, and what stack to use.",
      },
      {
        icon: "GitBranch",
        title: "Architecture Review",
        description:
          "We audit your codebase and infrastructure, then tell you exactly where the landmines are.",
      },
      {
        icon: "Scale",
        title: "Build vs. Buy Analysis",
        description:
          "Honest assessment of when to write code, when to buy a tool, and when to hire.",
      },
      {
        icon: "Shield",
        title: "Technical Due Diligence",
        description:
          "Investor-grade code and infrastructure reviews that surface risks before they become problems.",
      },
      {
        icon: "Users",
        title: "Fractional CTO",
        description:
          "Senior technical leadership on a retainer — without the $300K salary and equity dilution.",
      },
      {
        icon: "Lightbulb",
        title: "Founder-First Advice",
        description:
          "We've built startups ourselves. Every recommendation is grounded in shipping, not theory.",
      },
    ],
    caseStudySlugs: ["gigamind-landing", "loopback"],
    testimonial: {
      quote:
        "They talked us out of rebuilding our backend from scratch and saved us four months. Best money we ever spent was on the advice that said 'don't spend money.'",
      name: "Marcus Weld",
      role: "Co-founder @ Loopback",
    },
  },
];
