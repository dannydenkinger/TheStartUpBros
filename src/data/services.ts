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
      "Multi-tenant SaaS application",
      "Stripe billing integration",
      "Admin dashboard",
      "RBAC system",
      "Onboarding flow",
    ],
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
  },
];
