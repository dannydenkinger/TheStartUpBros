import type { PortfolioProject } from "@/types";

export const projects: PortfolioProject[] = [
  {
    title: "PropFlow CRM",
    description:
      "A multi-tenant SaaS platform for property managers. Real-time dashboard, Stripe billing, and automated tenant communications.",
    image: "/images/portfolio/propflow.webp",
    tags: ["SaaS", "Next.js", "Stripe", "PostgreSQL"],
    deviceType: "macbook",
  },
  {
    title: "HealthSync AI",
    description:
      "AI-powered patient intake system that processes insurance documents and auto-fills medical records in seconds.",
    image: "/images/portfolio/healthsync.webp",
    tags: ["AI Agent", "Document Processing", "React", "Python"],
    deviceType: "macbook",
  },
  {
    title: "FitTrack Mobile",
    description:
      "A cross-platform fitness app with AI coaching, workout planning, and real-time progress tracking.",
    image: "/images/portfolio/fittrack.webp",
    tags: ["Mobile", "React Native", "AI", "Firebase"],
    deviceType: "iphone",
  },
  {
    title: "InvoiceBot",
    description:
      "Automated invoice processing agent that extracts line items, categorizes expenses, and syncs with QuickBooks.",
    image: "/images/portfolio/invoicebot.webp",
    tags: ["AI Automation", "OCR", "QuickBooks API"],
    deviceType: "macbook",
  },
  {
    title: "LaunchPad Landing",
    description:
      "Premium marketing site for a VC-backed startup. 100/100 Lighthouse score, 3-second average time to conversion.",
    image: "/images/portfolio/launchpad.webp",
    tags: ["Web Design", "Next.js", "Animation"],
    deviceType: "macbook",
  },
  {
    title: "BudgetLens",
    description:
      "A custom financial dashboard that aggregates data from Plaid, Stripe, and manual entries into one real-time view.",
    image: "/images/portfolio/budgetlens.webp",
    tags: ["Dashboard", "Plaid", "Data Viz", "React"],
    deviceType: "both",
  },
];
