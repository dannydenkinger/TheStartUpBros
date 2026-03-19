import type { PortfolioProject } from "@/types";

export const projects: PortfolioProject[] = [
  {
    title: "PropFlow CRM",
    slug: "propflow-crm",
    description:
      "A multi-tenant SaaS platform for property managers. Real-time dashboard, Stripe billing, and automated tenant communications.",
    image: "/images/portfolio/propflow.webp",
    tags: ["SaaS", "Next.js", "Stripe", "PostgreSQL"],
    deviceType: "macbook",
    challenge:
      "Property managers were juggling spreadsheets, email threads, and paper forms to track tenants, payments, and maintenance. No existing tool served the mid-market segment without enterprise pricing.",
    solution:
      "We built a multi-tenant SaaS platform with real-time dashboards, Stripe-powered billing, automated tenant communications, and a maintenance request portal — all from scratch in 3 weeks.",
    timeline: "3 weeks",
    techStack: ["Next.js", "PostgreSQL", "Stripe", "Tailwind CSS", "Vercel"],
    outcomes: [
      "3-week delivery from kickoff to production",
      "120+ properties managed in the first month",
      "Stripe billing reduced payment collection time by 70%",
      "Automated notifications cut manual follow-ups to zero",
    ],
  },
  {
    title: "HealthSync AI",
    slug: "healthsync-ai",
    description:
      "AI-powered patient intake system that processes insurance documents and auto-fills medical records in seconds.",
    image: "/images/portfolio/healthsync.webp",
    tags: ["AI Agent", "Document Processing", "React", "Python"],
    deviceType: "macbook",
    challenge:
      "Clinic staff spent 15+ minutes per patient manually entering insurance and medical data. Error rates were high and compliance was a constant concern.",
    solution:
      "We built an AI-powered intake system using OCR and LLMs to extract structured data from insurance cards and medical documents, auto-filling records with human-in-the-loop validation.",
    timeline: "4 weeks",
    techStack: ["React", "Python", "FastAPI", "OpenAI", "PostgreSQL", "AWS"],
    outcomes: [
      "Reduced intake time from 15 minutes to under 2 minutes",
      "98.5% extraction accuracy on insurance documents",
      "HIPAA-compliant data pipeline",
      "Saved 4+ hours of manual data entry per day",
    ],
  },
  {
    title: "FitTrack Mobile",
    slug: "fittrack-mobile",
    description:
      "A cross-platform fitness app with AI coaching, workout planning, and real-time progress tracking.",
    image: "/images/portfolio/fittrack.webp",
    tags: ["Mobile", "React Native", "AI", "Firebase"],
    deviceType: "iphone",
    challenge:
      "The founder had a validated fitness methodology but no way to deliver it at scale. Existing white-label solutions couldn't accommodate the custom AI coaching model.",
    solution:
      "We built a cross-platform React Native app with AI-powered workout personalization, real-time progress dashboards, and Firebase for instant sync across devices.",
    timeline: "5 weeks",
    techStack: ["React Native", "Firebase", "OpenAI", "Expo", "TypeScript"],
    outcomes: [
      "1,200+ downloads in the first month on both platforms",
      "AI coaching increased user retention by 35%",
      "4.7-star average rating on App Store",
      "Real-time sync eliminated data loss complaints",
    ],
  },
  {
    title: "InvoiceBot",
    slug: "invoicebot",
    description:
      "Automated invoice processing agent that extracts line items, categorizes expenses, and syncs with QuickBooks.",
    image: "/images/portfolio/invoicebot.webp",
    tags: ["AI Automation", "OCR", "QuickBooks API"],
    deviceType: "macbook",
    challenge:
      "A growing e-commerce company was drowning in invoices — 200+ per week, all manually entered. Errors were causing reconciliation headaches and delayed month-end close.",
    solution:
      "We built an AI agent that processes invoices via email, extracts line items using OCR and LLMs, categorizes expenses, and syncs everything to QuickBooks automatically.",
    timeline: "2 weeks",
    techStack: ["Python", "LangChain", "OpenAI", "QuickBooks API", "FastAPI"],
    outcomes: [
      "Saved 4 hours of data entry per day",
      "99.2% accuracy on line item extraction",
      "Month-end close reduced from 5 days to 1 day",
      "Zero manual invoices after 30-day onboarding",
    ],
  },
  {
    title: "LaunchPad Landing",
    slug: "launchpad-landing",
    description:
      "Premium marketing site for a VC-backed startup. 100/100 Lighthouse score, 3-second average time to conversion.",
    image: "/images/portfolio/launchpad.webp",
    tags: ["Web Design", "Next.js", "Animation"],
    deviceType: "macbook",
    challenge:
      "A VC-backed startup needed a premium marketing site to match their brand positioning for a Series A fundraise. Their existing site was slow, outdated, and had a 12-second load time.",
    solution:
      "We designed and built a performance-obsessed Next.js site with Framer Motion animations, structured data, and a conversion-optimized layout that scored 100/100 on Lighthouse.",
    timeline: "2 weeks",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel", "MDX"],
    outcomes: [
      "100/100 Lighthouse score across all categories",
      "3-second average time from landing to CTA click",
      "42% increase in demo requests vs. old site",
      "Used as a key asset in Series A pitch deck",
    ],
  },
  {
    title: "BudgetLens",
    slug: "budgetlens",
    description:
      "A custom financial dashboard that aggregates data from Plaid, Stripe, and manual entries into one real-time view.",
    image: "/images/portfolio/budgetlens.webp",
    tags: ["Dashboard", "Plaid", "Data Viz", "React"],
    deviceType: "both",
    challenge:
      "A finance team was copying data between Plaid, Stripe, and spreadsheets to build weekly reports. It took a full day every Monday and was always out of date.",
    solution:
      "We built a real-time dashboard that aggregates data from Plaid and Stripe APIs with manual entry support, providing auto-generated reports and visual breakdowns.",
    timeline: "3 weeks",
    techStack: ["React", "Next.js", "Plaid", "Stripe", "D3.js", "PostgreSQL"],
    outcomes: [
      "Eliminated Monday reporting day entirely",
      "Real-time financial visibility for 3 business units",
      "Auto-generated weekly reports saved 6+ hours per week",
      "Custom alerts caught 2 billing errors in the first month",
    ],
  },
];
