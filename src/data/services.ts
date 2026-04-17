import type { Service } from "@/types";

export const services: Service[] = [
  {
    title: "Full-Stack App Development",
    slug: "full-stack-apps",
    description:
      "End-to-end web and mobile applications built with modern frameworks. From authentication to deployment, we handle every layer.",
    longDescription:
      "We build production-ready web and mobile applications from the ground up using React, Next.js, Node.js, and Python. Every project includes authentication, database design, API development, CI/CD pipelines, and cloud deployment — delivered as a complete, scalable product ready for users.",
    icon: "code",
    features: [
      "React / Next.js frontends",
      "Node.js / Python backends",
      "Database design & optimization",
      "API development & integrations",
      "CI/CD & cloud deployment",
    ],
    useCases: [
      "Launch an MVP web app in 2–4 weeks",
      "Migrate a legacy system to a modern stack",
      "Build a cross-platform mobile app with React Native",
      "Create real-time collaborative features",
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
        "A redesign that churns power users isn't a win, no matter how good the new UI is. Two parallel surfaces and an opt-in migration protect both cohorts.",
      name: "Denkinger Bros",
      role: "Design Study",
    },
  },
  {
    title: "Custom SaaS Frameworks",
    slug: "saas-dev",
    description:
      "Multi-tenant SaaS platforms with billing, auth, and admin dashboards baked in from the start.",
    longDescription:
      "We architect multi-tenant SaaS platforms with Stripe billing, role-based access control, admin dashboards, and usage analytics built into the foundation. Skip months of boilerplate and go straight to building your unique value proposition.",
    icon: "layers",
    features: [
      "Multi-tenant architecture",
      "Stripe billing integration",
      "Role-based access control",
      "Admin dashboards",
      "Usage analytics & monitoring",
    ],
    useCases: [
      "Launch a subscription-based B2B platform",
      "Add billing and team management to an existing app",
      "Build a white-label solution for resellers",
      "Create a marketplace with seller dashboards",
    ],
    techStack: ["Next.js", "Stripe", "PostgreSQL", "Prisma", "NextAuth", "Tailwind CSS", "Vercel"],
    deliverables: [
      "Production-deployed SaaS platform",
      "Stripe billing + customer portal",
      "Admin dashboard",
      "RBAC system",
      "Onboarding flow",
    ],
    featureHighlights: [
      {
        icon: "Users",
        title: "Multi-Tenant From Day 1",
        description:
          "Workspaces, team invites, and isolated data — built in before the product ships, not retrofitted.",
      },
      {
        icon: "DollarSign",
        title: "Stripe Billing Done Right",
        description:
          "Subscriptions, usage-based pricing, customer portal, and webhooks — all handled correctly.",
      },
      {
        icon: "Shield",
        title: "Role-Based Access Control",
        description:
          "Owner, admin, member, viewer — with a permissions model your team can extend without rewriting.",
      },
      {
        icon: "BarChart3",
        title: "Usage Analytics",
        description:
          "Every event tracked, every dashboard answered. See what users do before they tell you.",
      },
      {
        icon: "Workflow",
        title: "Admin Tooling",
        description:
          "Admin dashboards for support, debugging, and impersonation — because you'll need them in week two.",
      },
      {
        icon: "Rocket",
        title: "Onboarding That Converts",
        description:
          "Activation-led onboarding flows that move users from signup to first value in minutes.",
      },
    ],
    caseStudySlugs: ["writesonic", "gigamind-product"],
    testimonial: {
      quote:
        "Language can't be a barrier to care. SAID works at the bedside — offline, on-device, and specific to medicine. That's a different problem than general translation, and it needs a different tool.",
      name: "Anthony Denkinger",
      role: "Startup Bros",
    },
  },
  {
    title: "AI Agents & Automation",
    slug: "ai-agents",
    description:
      "Intelligent agents that automate workflows, process documents, and make decisions. Powered by the latest LLMs.",
    longDescription:
      "We build custom AI agents that automate complex workflows using the latest LLMs. From document processing and data extraction to conversational AI and RAG pipelines, we deliver intelligent systems that save hours of manual work every day.",
    icon: "brain",
    features: [
      "Custom AI agent workflows",
      "Document processing & extraction",
      "Chatbot & conversational AI",
      "RAG pipelines & knowledge bases",
      "API orchestration & tool use",
    ],
    useCases: [
      "Automate invoice processing and data entry",
      "Build a customer support chatbot with your knowledge base",
      "Create an AI research assistant for your team",
      "Automate document review and compliance checks",
    ],
    techStack: ["Python", "LangChain", "OpenAI", "Anthropic", "Pinecone", "FastAPI", "PostgreSQL"],
    deliverables: [
      "Custom AI agent system",
      "RAG pipeline with vector store",
      "API endpoints for integration",
      "Monitoring dashboard",
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
          "Agents that call your APIs, hit your database, and chain actions — safely, with fallbacks.",
      },
      {
        icon: "Shield",
        title: "Guardrails & Evals",
        description:
          "Output validation, jailbreak protection, and evaluation suites so you know quality before deploy.",
      },
      {
        icon: "Activity",
        title: "Observability",
        description:
          "Every LLM call logged, every token counted. Debug failures, trace decisions, optimize cost.",
      },
      {
        icon: "Zap",
        title: "Latency-Aware",
        description:
          "Streaming, caching, and model routing designed so users never wait more than a second.",
      },
    ],
    caseStudySlugs: ["loopback", "gigamind-landing"],
    testimonial: {
      quote:
        "The interesting problem in enterprise AI isn't capability — it's control. K Project gives organizations the productivity gains of modern LLMs without handing their data to someone else's infrastructure.",
      name: "Anthony Denkinger",
      role: "Startup Bros",
    },
  },
  {
    title: "Premium Web Design",
    slug: "web-design",
    description:
      "Beautiful, conversion-optimized websites that establish credibility and drive action. Mobile-first, performance-obsessed.",
    longDescription:
      "We design and build premium websites that look like they cost ten times more than they do. Every pixel is intentional — optimized for conversion, SEO, and performance. Mobile-first responsive design with Lighthouse 100/100 targets.",
    icon: "palette",
    features: [
      "Brand identity & design systems",
      "Responsive, mobile-first layouts",
      "Micro-interactions & animations",
      "SEO optimization",
      "Lighthouse 100/100 targets",
    ],
    useCases: [
      "Launch a premium marketing site for your startup",
      "Redesign an outdated website to increase conversions",
      "Build a high-performance landing page for a campaign",
      "Create a design system for consistent branding",
    ],
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Figma", "Vercel", "MDX"],
    deliverables: [
      "Fully responsive website",
      "Design system & component library",
      "SEO optimization & meta tags",
      "Performance audit report",
      "CMS integration",
    ],
    featureHighlights: [
      {
        icon: "Target",
        title: "Conversion-Led Design",
        description:
          "Every section earns its place by lifting the funnel. No decorative noise, no wasted real estate.",
      },
      {
        icon: "Smartphone",
        title: "Mobile-First Always",
        description:
          "Designed for the thumb before the trackpad. Every layout works one-handed on a moving train.",
      },
      {
        icon: "Sparkles",
        title: "Micro-Interactions",
        description:
          "Framer Motion animations tuned for 60fps and subtle delight — not jank, not distraction.",
      },
      {
        icon: "Eye",
        title: "Brand That Sticks",
        description:
          "Identity systems built to scale — wordmark, color, type, motion — all from one visual logic.",
      },
      {
        icon: "Zap",
        title: "Lighthouse 100/100",
        description:
          "Performance-obsessed builds. Images, fonts, JS bundle — tuned so the page lands instantly.",
      },
      {
        icon: "BarChart3",
        title: "SEO-Ready",
        description:
          "Structured data, clean metadata, semantic HTML. You'll rank because the foundations are right.",
      },
    ],
    caseStudySlugs: ["alsuitup", "hobbes-rebrand"],
    testimonial: {
      quote:
        "A brand that reads 'hobby project' to a Series B+ buyer is actively losing deals. Restraint — one accent, one type, one motion principle — is the bar.",
      name: "Denkinger Bros",
      role: "Design Study",
    },
  },
  {
    title: "Custom Business Tools",
    slug: "tools",
    description:
      "Internal tools, calculators, dashboards, and workflow apps that replace spreadsheets and save hours every week.",
    longDescription:
      "We build custom internal tools that replace the spreadsheets and manual processes holding your team back. Real-time dashboards, calculators, workflow automation, and data visualization — integrated with the tools you already use.",
    icon: "wrench",
    features: [
      "Custom calculators & estimators",
      "Real-time dashboards",
      "Workflow automation tools",
      "Data visualization",
      "Third-party integrations",
    ],
    useCases: [
      "Replace a complex spreadsheet with a purpose-built tool",
      "Build a client-facing ROI calculator",
      "Create an internal operations dashboard",
      "Automate a multi-step business workflow",
    ],
    techStack: ["React", "Next.js", "D3.js", "Recharts", "PostgreSQL", "Plaid", "Zapier"],
    deliverables: [
      "Custom business application",
      "Data visualization dashboards",
      "Third-party API integrations",
      "User documentation",
      "Admin controls",
    ],
    featureHighlights: [
      {
        icon: "BarChart3",
        title: "Real-Time Dashboards",
        description:
          "Dashboards that update as data changes — not on refresh, not on page load. Built for operators.",
      },
      {
        icon: "Workflow",
        title: "Workflow Automation",
        description:
          "Chain steps across systems. What used to take 20 clicks becomes one — with audit logs.",
      },
      {
        icon: "GitBranch",
        title: "Third-Party Integrations",
        description:
          "Plaid, Stripe, QuickBooks, HubSpot, Slack — we plumb the tools you already use into one workflow.",
      },
      {
        icon: "Terminal",
        title: "Custom Calculators",
        description:
          "ROI calculators, pricing estimators, cost models — built to replace the spreadsheet nobody trusts.",
      },
      {
        icon: "Users",
        title: "Role-Based Tools",
        description:
          "One tool, three surfaces — one for the operator, one for the manager, one for the admin.",
      },
      {
        icon: "Activity",
        title: "Replaces Manual Work",
        description:
          "We measure success in hours saved per week. Every tool we ship pays for itself in a month.",
      },
    ],
    caseStudySlugs: ["community", "manyreach"],
    testimonial: {
      quote:
        "A search tool used 40 times a day has to be faster than Cmd+T. Keyboard-first UI, incremental sync, and sub-second latency compound into a tool users can't imagine working without.",
      name: "Denkinger Bros",
      role: "Design Study",
    },
  },
];
