import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  BarChart3,
  DollarSign,
  Eye,
  GitBranch,
  Layers,
  MousePointerClick,
  Repeat,
  Rocket,
  Shield,
  Smartphone,
  Sparkles,
  Target,
  Terminal,
  TrendingUp,
  UserCog,
  Users,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { TechBrandsMarquee } from "@/components/landing/TechBrandsMarquee";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";

// ─── Icon lookup ──────────────────────────────────────────────────────────
const iconMap: Record<string, LucideIcon> = {
  Zap,
  Target,
  BarChart3,
  Users,
  Repeat,
  Layers,
  Eye,
  Terminal,
  Activity,
  Shield,
  Workflow,
  GitBranch,
  TrendingUp,
  MousePointerClick,
  UserCog,
  Rocket,
  Smartphone,
  DollarSign,
  Sparkles,
};

// ─── Industry data keyed by slug ──────────────────────────────────────────
type IndustryData = {
  label: string;
  headline: string;
  subtitle: string;
  caseStudies: {
    tag: string;
    location: string;
    title: string;
    image: string;
    href: string;
  }[];
  features: { icon: string; title: string; description: string }[];
  testimonial: { quote: string; name: string; role: string };
};

const industryData: Record<string, IndustryData> = {
  marketing: {
    label: "Marketing",
    headline: "Full-Stack Development For Marketing Startups",
    subtitle:
      "We build custom apps, websites, and software for Marketing startups — from idea to launch.",
    caseStudies: [
      {
        tag: "Marketing",
        location: "San Francisco, CA",
        title: "Designing SocialSonic's MVP To Reach 1000+ Users In 30 Days",
        image: "/images/portfolio/socialsonic.avif",
        href: "/portfolio/socialsonic",
      },
      {
        tag: "Productivity",
        location: "New York, NY",
        title:
          "Building Community Search — A Unified Workspace Indexed in Under 180ms",
        image: "/images/portfolio/community-search.avif",
        href: "/portfolio/community",
      },
    ],
    features: [
      {
        icon: "Zap",
        title: "Rapid MVP Delivery",
        description:
          "We ship your marketing platform fast — functional core features first so you can start acquiring users immediately.",
      },
      {
        icon: "Target",
        title: "Conversion-Driven Architecture",
        description:
          "Every feature we build is engineered to drive signups, engagement, and revenue — not just look good.",
      },
      {
        icon: "BarChart3",
        title: "Analytics & Reporting Engines",
        description:
          "We build custom dashboards and reporting pipelines that turn raw data into actionable marketing insights.",
      },
      {
        icon: "Users",
        title: "Multi-Tenant Platforms",
        description:
          "From solo founders to enterprise teams, we architect role-based systems that scale with your user base.",
      },
      {
        icon: "Repeat",
        title: "Automation & Integrations",
        description:
          "We wire up APIs, webhooks, and third-party integrations so your platform works seamlessly with the tools marketers already use.",
      },
      {
        icon: "Layers",
        title: "Scalable Infrastructure",
        description:
          "Clean code, modular architecture, and cloud-native deployments — built to handle growth from day one.",
      },
    ],
    testimonial: {
      quote:
        "They told us 'no' more than they told us 'yes' — and that's exactly why the MVP shipped clean. StartUpBros built exactly what we needed to hit 1000 users.",
      name: "Daniel Lee",
      role: "Founder @ SocialSonic",
    },
  },
  ai: {
    label: "AI",
    headline: "Full-Stack Development For AI Startups",
    subtitle:
      "We build custom apps, websites, and software for AI startups — from idea to launch.",
    caseStudies: [
      {
        tag: "AI SaaS",
        location: "San Francisco, CA",
        title: "Designing the First GEO Platform For Writesonic's 1M+ Users",
        image: "/images/portfolio/geo-analytics.avif",
        href: "/portfolio/writesonic",
      },
      {
        tag: "AI Landing",
        location: "San Francisco, CA",
        title: "Designing Gigamind's Credible AI-First Landing Page",
        image: "/images/portfolio/ai-landing.webp",
        href: "/portfolio/gigamind-landing",
      },
    ],
    features: [
      {
        icon: "Eye",
        title: "Model Integration & APIs",
        description:
          "We build robust backends that connect to LLMs, vision models, and custom ML pipelines — making AI outputs production-ready.",
      },
      {
        icon: "Terminal",
        title: "Custom AI Feature Development",
        description:
          "From prompt orchestration to fine-tuning workflows, we engineer the AI-powered features that set your product apart.",
      },
      {
        icon: "Activity",
        title: "Real-Time Processing Infrastructure",
        description:
          "We build streaming, websocket, and queue-based systems so your AI features respond instantly at scale.",
      },
      {
        icon: "Shield",
        title: "Security & Compliance Engineering",
        description:
          "We architect data handling, access controls, and audit trails that keep your AI product trustworthy and compliant.",
      },
      {
        icon: "Workflow",
        title: "Intelligent Automation Pipelines",
        description:
          "We build multi-step AI workflows — chained models, conditional logic, and human-in-the-loop checkpoints baked into your product.",
      },
      {
        icon: "GitBranch",
        title: "Data Pipeline Engineering",
        description:
          "We architect ETL pipelines, vector databases, and retrieval systems that keep your AI models fed with clean, current data.",
      },
    ],
    testimonial: {
      quote:
        "StartUpBros didn't just ship features — they built the technical foundation that the rest of our product now runs on.",
      name: "Samanyou Garg",
      role: "Founder @ Writesonic",
    },
  },
  sales: {
    label: "Sales",
    headline: "Full-Stack Development For Sales & CRM Startups",
    subtitle:
      "We build custom apps, websites, and software for Sales startups — from idea to launch.",
    caseStudies: [
      {
        tag: "Sales Tools",
        location: "Canada",
        title:
          "Manyreach Website Revamp that Increased Conversions & AOV",
        image: "/images/portfolio/sales-crm-detail.webp",
        href: "/portfolio/manyreach",
      },
      {
        tag: "AI Sales",
        location: "Mountain View, CA",
        title: "Redesigning Sybill Without Disrupting Existing Users",
        image: "/images/portfolio/sales-crm-full.webp",
        href: "/portfolio/sybill",
      },
    ],
    features: [
      {
        icon: "TrendingUp",
        title: "Custom Pipeline Engineering",
        description:
          "We build deal-tracking systems with real-time stage transitions, automated follow-ups, and forecasting logic baked in.",
      },
      {
        icon: "MousePointerClick",
        title: "Workflow Automation",
        description:
          "Log calls, fire emails, update stages — we engineer one-click automations that eliminate repetitive busywork for your reps.",
      },
      {
        icon: "UserCog",
        title: "Role-Based Access & Views",
        description:
          "We architect permission systems and custom dashboards so SDRs, AEs, and managers each get exactly the data they need.",
      },
      {
        icon: "Rocket",
        title: "Fast Onboarding Flows",
        description:
          "We build activation sequences that get new users to their first value moment — importing contacts, not configuring settings.",
      },
      {
        icon: "Smartphone",
        title: "Mobile-Ready Architecture",
        description:
          "Sales happens on the road. We build responsive, PWA-capable platforms that perform flawlessly on any device.",
      },
      {
        icon: "DollarSign",
        title: "Revenue-Driven Features",
        description:
          "Every feature we ship is tied to a revenue outcome — helping reps close more deals, faster, with less friction.",
      },
    ],
    testimonial: {
      quote:
        "StartUpBros rebuilt our entire frontend and backend in weeks. We didn't change the offer — we changed the platform — and AOV moved 34%.",
      name: "Ben Northam",
      role: "Co-founder @ Manyreach",
    },
  },
};

const otherIndustries = [
  { name: "AI", slug: "ai", description: "Custom software for AI-powered products — from model integration to production deployment." },
  { name: "Marketing", slug: "marketing", description: "Full-stack platforms that help marketing teams acquire, engage, and convert." },
  { name: "Sales", slug: "sales", description: "CRM tools, pipeline systems, and automations built to close deals faster." },
  { name: "FinTech", slug: "fintech", description: "Secure, compliant financial platforms engineered for trust and performance." },
  { name: "EdTech", slug: "ed-tech", description: "Learning platforms and course systems built for engagement and scale." },
  { name: "Web3", slug: "web3", description: "Decentralized apps, smart contract integrations, and blockchain-native platforms." },
  { name: "Mobile Apps", slug: "mobile-apps", description: "Cross-platform and native mobile apps built for speed and reliability." },
  { name: "B2B / Agencies", slug: "agencies", description: "Enterprise-grade SaaS and internal tools that scale with your business." },
  { name: "Healthcare", slug: "healthcare", description: "HIPAA-aware clinical software built for clarity, speed, and compliance." },
  { name: "Supply Chain", slug: "b2b", description: "Operations platforms and logistics tools that reduce friction and errors." },
];

function getIndustryData(slug: string): IndustryData {
  if (industryData[slug]) return industryData[slug];
  // Fallback: generic content, but case studies point to real portfolio pages
  const label = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    label,
    headline: `Full-Stack Development For ${label} Startups`,
    subtitle: `We build custom apps, websites, and software for ${label} startups — from idea to launch.`,
    caseStudies: [
      {
        tag: label,
        location: "San Francisco, CA",
        title: "Designing the First GEO Platform For Writesonic's 1M+ Users",
        image: "/images/portfolio/geo-analytics.avif",
        href: "/portfolio/writesonic",
      },
      {
        tag: label,
        location: "Canada",
        title:
          "Manyreach Website Revamp that Increased Conversions & AOV",
        image: "/images/portfolio/sales-crm-detail.webp",
        href: "/portfolio/manyreach",
      },
    ],
    features: [
      { icon: "Sparkles", title: "Rapid MVP Development", description: "From concept to working product in weeks, not months — we ship functional software fast." },
      { icon: "Target", title: "Conversion-Optimized Engineering", description: "Every feature is built to drive signups, engagement, and revenue from day one." },
      { icon: "BarChart3", title: "Custom Analytics & Dashboards", description: "We build reporting systems that turn your raw data into clear, actionable insights." },
      { icon: "Layers", title: "Scalable Architecture", description: "Clean code, modular systems, and cloud-native infrastructure that grows with your user base." },
      { icon: "Users", title: "User-Centered Development", description: "We build based on real user needs — not assumptions — so every feature earns its place." },
      { icon: "Workflow", title: "API & Integration Engineering", description: "We connect your product to the tools your users already rely on — seamless, reliable, documented." },
    ],
    testimonial: {
      quote: "StartUpBros built our entire platform from scratch. The product was live and acquiring users within the first month.",
      name: "Product Leader",
      role: `${label} Startup`,
    },
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const data = getIndustryData(resolvedParams.slug);
  const currentSlug = resolvedParams.slug;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* ── Hero ── */}
      <section className="px-6 lg:px-10 pt-[120px] pb-[60px] text-center flex flex-col items-center justify-center">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <div className="badge-pill flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Official Framer Expert
          </div>
          <div className="badge-pill flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Certified Webflow Partner
          </div>
        </div>

        <h1 className="text-display max-w-4xl mx-auto mb-6 text-foreground">
          {data.headline}
        </h1>
        <p className="text-body-lg max-w-2xl mx-auto mb-10">
          {data.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Link
            href="/strategy-call"
            className="btn-pill btn-pill-primary px-8 py-3.5"
          >
            Book Strategy Call
          </Link>
          <Link
            href="/portfolio"
            className="btn-pill btn-pill-secondary px-8 py-3.5"
          >
            View Our Work
          </Link>
        </div>
      </section>

      {/* ── Trusted By Marquee ── */}
      <TechBrandsMarquee />

      {/* ── Case Studies ── */}
      <section className="px-6 lg:px-10 py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-h2 text-foreground">
              Our {data.label} Work
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.caseStudies.map((cs) => (
              <Link key={cs.title} href={cs.href} className="group block">
                <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-[11px] font-medium text-muted-foreground">
                        {cs.tag}
                      </span>
                      <span className="text-[12px] text-muted-foreground">
                        {cs.location}
                      </span>
                    </div>
                    <h4 className="text-[20px] md:text-[24px] font-medium leading-[1.2] tracking-[-0.02em] text-foreground group-hover:text-foreground/70 transition-colors">
                      {cs.title}
                    </h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features Grid ── */}
      <section className="px-6 lg:px-10 py-24 md:py-32 bg-background">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-h2 text-foreground">
              Built For {data.label} Teams
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.map((feature) => {
              const Icon = iconMap[feature.icon] ?? Sparkles;
              return (
                <div
                  key={feature.title}
                  className="p-8 rounded-2xl border border-border bg-card hover:bg-secondary hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-secondary border border-border flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-foreground" strokeWidth={1.8} />
                  </div>
                  <h5 className="text-[16px] font-semibold text-foreground mb-3">
                    {feature.title}
                  </h5>
                  <p className="text-[14px] leading-[1.7] text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Testimonial Quote ── */}
      <section className="px-6 lg:px-10 py-24 md:py-28 bg-background">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 mb-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#facc15" className="mx-0.5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <span className="text-[13px] font-semibold text-foreground">5.0</span>
          </div>
          <blockquote className="text-[24px] md:text-[32px] font-medium leading-[1.3] tracking-[-0.02em] text-foreground mb-8">
            &ldquo;{data.testimonial.quote}&rdquo;
          </blockquote>
          <p className="text-[15px] font-bold text-foreground">
            {data.testimonial.name}
          </p>
          <p className="text-[13px] text-muted-foreground mt-1">
            {data.testimonial.role}
          </p>
        </div>
      </section>

      {/* ── Explore Other Industries ── */}
      <section className="px-6 lg:px-10 py-24 md:py-32 bg-background">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-h2 text-foreground">Explore Other Industries</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {otherIndustries
              .filter((ind) => ind.slug !== currentSlug)
              .slice(0, 8)
              .map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="group block p-6 rounded-2xl border border-border bg-card hover:bg-secondary hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <h4 className="text-[17px] font-semibold text-foreground mb-2 group-hover:text-foreground/70 transition-colors">
                    {ind.name}
                  </h4>
                  <p className="text-[13px] leading-[1.6] text-muted-foreground mb-4">
                    {ind.description}
                  </p>
                  <span className="text-[13px] font-medium text-foreground group-hover:underline">
                    Explore {ind.name} →
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* ── Pricing CTA ── */}
      <section className="px-6 lg:px-10 py-24 md:py-32 bg-background border-t border-border">
        <div className="max-w-[760px] mx-auto text-center">
          <h2 className="text-h2 text-foreground mb-5">
            So much value at such a flexible price
          </h2>
          <p className="text-body-lg mb-10">
            Consultation-based custom pricing. We scope every project to the
            fastest path to launch, no retainers, no bloat.
          </p>
          <Link
            href="/strategy-call"
            className="btn-pill btn-pill-primary px-8 py-3.5"
          >
            Book a Call
          </Link>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ />

      {/* ── Final CTA ── */}
      <FinalCTA />
    </div>
  );
}
