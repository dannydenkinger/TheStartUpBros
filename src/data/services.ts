import type { Service } from "@/types";

export const services: Service[] = [
  {
    title: "Full-Stack App Development",
    description:
      "End-to-end web and mobile applications built with modern frameworks. From authentication to deployment, we handle every layer.",
    icon: "code",
    features: [
      "React / Next.js frontends",
      "Node.js / Python backends",
      "Database design & optimization",
      "API development & integrations",
      "CI/CD & cloud deployment",
    ],
  },
  {
    title: "Custom SaaS Frameworks",
    description:
      "Multi-tenant SaaS platforms with billing, auth, and admin dashboards baked in from the start.",
    icon: "layers",
    features: [
      "Multi-tenant architecture",
      "Stripe billing integration",
      "Role-based access control",
      "Admin dashboards",
      "Usage analytics & monitoring",
    ],
  },
  {
    title: "AI Agents & Automation",
    description:
      "Intelligent agents that automate workflows, process documents, and make decisions. Powered by the latest LLMs.",
    icon: "brain",
    features: [
      "Custom AI agent workflows",
      "Document processing & extraction",
      "Chatbot & conversational AI",
      "RAG pipelines & knowledge bases",
      "API orchestration & tool use",
    ],
  },
  {
    title: "Premium Web Design",
    description:
      "Beautiful, conversion-optimized websites that establish credibility and drive action. Mobile-first, performance-obsessed.",
    icon: "palette",
    features: [
      "Brand identity & design systems",
      "Responsive, mobile-first layouts",
      "Micro-interactions & animations",
      "SEO optimization",
      "Lighthouse 100/100 targets",
    ],
  },
  {
    title: "Custom Business Tools",
    description:
      "Internal tools, calculators, dashboards, and workflow apps that replace spreadsheets and save hours every week.",
    icon: "wrench",
    features: [
      "Custom calculators & estimators",
      "Real-time dashboards",
      "Workflow automation tools",
      "Data visualization",
      "Third-party integrations",
    ],
  },
];
