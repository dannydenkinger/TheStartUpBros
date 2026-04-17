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
    headline: "Unforgettable Website & UX Design For Marketing SaaS",
    subtitle:
      "We design delightful website & product user experiences for Marketing SaaS to increase signups & conversions.",
    caseStudies: [
      {
        tag: "Sports",
        location: "Startup Bros",
        title: "ZoneX — AI Sports Analytics Platform",
        image: "/images/portfolio/socialsonic.avif",
        href: "/portfolio/socialsonic",
      },
      {
        tag: "Productivity",
        location: "Design Study",
        title: "Federated Search Command Palette — A Product Study",
        image: "/images/portfolio/community-search.avif",
        href: "/portfolio/community",
      },
    ],
    features: [
      {
        icon: "Zap",
        title: "Fast Campaign Setup",
        description:
          "We reduce friction in onboarding so users can launch their first campaign within minutes.",
      },
      {
        icon: "Target",
        title: "Outcome-Focused UX",
        description:
          "We design around what marketers care about — reach, ROI, and what's actually working.",
      },
      {
        icon: "BarChart3",
        title: "Clarity in Metrics",
        description:
          "We turn raw performance data into clean insights — easy to share, easy to act on.",
      },
      {
        icon: "Users",
        title: "Multi-Role Interfaces",
        description:
          "From CMOs to interns, we build flows that adapt to each role's goals, not just generic tools.",
      },
      {
        icon: "Repeat",
        title: "Sticky Daily Workflows",
        description:
          "We design flows users return to — tracking progress, adjusting, iterating, and reporting.",
      },
      {
        icon: "Layers",
        title: "Visual Builder Optimization",
        description:
          "Drag-and-drop is just the start. We fine-tune builders for conversion, clarity, and speed.",
      },
    ],
    testimonial: {
      quote:
        "Coaches don't want to operate a data tool — they want to make a decision. The shortest line between raw film and a game-day adjustment a coach actually trusts is the whole product.",
      name: "Anthony Denkinger",
      role: "Startup Bros",
    },
  },
  ai: {
    label: "AI",
    headline: "Unforgettable Website & UX Design For AI SaaS",
    subtitle:
      "We design delightful website & product user experiences for AI SaaS to increase signups & conversions.",
    caseStudies: [
      {
        tag: "AI Healthcare",
        location: "Startup Bros",
        title: "SAID Technology — Offline-First Medical Translation",
        image: "/images/portfolio/geo-analytics.avif",
        href: "/portfolio/writesonic",
      },
      {
        tag: "Private LLMs",
        location: "Startup Bros",
        title: "K Project — Private AI for Regulated Industries",
        image: "/images/portfolio/ai-landing.webp",
        href: "/portfolio/loopback",
      },
    ],
    features: [
      {
        icon: "Eye",
        title: "Model Output Visualization",
        description:
          "We design interfaces that make AI outputs interpretable and actionable for non-technical users.",
      },
      {
        icon: "Terminal",
        title: "Prompt Engineering UX",
        description:
          "We create intuitive prompt interfaces that help users get the best results from AI models.",
      },
      {
        icon: "Activity",
        title: "Real-Time Feedback Loops",
        description:
          "We build interfaces that show AI processing states clearly so users always know what's happening.",
      },
      {
        icon: "Shield",
        title: "Trust & Transparency",
        description:
          "We design explainable AI interfaces that build user confidence through transparency.",
      },
      {
        icon: "Workflow",
        title: "Adaptive Workflows",
        description:
          "We create flows that learn from user behavior and surface the most relevant features.",
      },
      {
        icon: "GitBranch",
        title: "Data Pipeline Clarity",
        description:
          "We visualize complex data flows so users understand how their data moves through AI systems.",
      },
    ],
    testimonial: {
      quote:
        "The interesting problem in enterprise AI isn't capability — it's control. Giving organizations the productivity gains of modern LLMs without handing their data to someone else's infrastructure is the real work.",
      name: "Anthony Denkinger",
      role: "Startup Bros",
    },
  },
  sales: {
    label: "Sales",
    headline: "Unforgettable Website & UX Design For Sales SaaS & CRM",
    subtitle:
      "We design delightful website & product user experiences for Sales SaaS to increase signups & conversions.",
    caseStudies: [
      {
        tag: "Sales Tools",
        location: "Design Study",
        title: "Pricing Page as Guidance — An AOV Study",
        image: "/images/portfolio/sales-crm-detail.webp",
        href: "/portfolio/manyreach",
      },
      {
        tag: "AI Sales",
        location: "Design Study",
        title: "Zero-Churn Product Migration — A UX Study",
        image: "/images/portfolio/sales-crm-full.webp",
        href: "/portfolio/sybill",
      },
    ],
    features: [
      {
        icon: "TrendingUp",
        title: "Clear Deal Stages",
        description:
          "We design pipelines that make deal progression obvious — every rep knows what to do next.",
      },
      {
        icon: "MousePointerClick",
        title: "One-Click Actions",
        description:
          "Every common action — log a call, send a template, update a stage — is one click away.",
      },
      {
        icon: "UserCog",
        title: "Role-Based UX",
        description:
          "SDRs, AEs, and sales leaders each see the surface that matches their daily workflow.",
      },
      {
        icon: "Rocket",
        title: "Activation-Led Onboarding",
        description:
          "We design onboarding flows that get reps to their first closed deal — not to a settings page.",
      },
      {
        icon: "Smartphone",
        title: "Mobile-First Approach",
        description:
          "Sales happens on the road. Every workflow is designed to work one-handed on a phone.",
      },
      {
        icon: "DollarSign",
        title: "Revenue-Focused Design",
        description:
          "Every screen earns its place by helping reps close more, faster — or it doesn't ship.",
      },
    ],
    testimonial: {
      quote:
        "A pricing page that asks the buyer to choose leaves AOV on the table. Turning the page into a guidance tool — value ladder, mid-tier anchor, outcome calculator — moves buyers to the tier that actually fits their team.",
      name: "Denkinger Bros",
      role: "Design Study",
    },
  },
};

const otherIndustries = [
  { name: "AI", slug: "ai", description: "Design for intelligent products that feel effortless." },
  { name: "Marketing", slug: "marketing", description: "Conversion-focused design for marketing platforms." },
  { name: "Sales", slug: "sales", description: "Streamlined workflows that close deals faster." },
  { name: "FinTech", slug: "fintech", description: "Trust-building interfaces for financial products." },
  { name: "EdTech", slug: "ed-tech", description: "Engaging learning experiences that drive completion." },
  { name: "Web3", slug: "web3", description: "Intuitive design for decentralized applications." },
  { name: "Mobile Apps", slug: "mobile-apps", description: "Native-feeling experiences users love." },
  { name: "B2B / Agencies", slug: "agencies", description: "Enterprise-grade UX that scales with your team." },
  { name: "Healthcare", slug: "healthcare", description: "Clinical workflows designed for clarity and speed." },
  { name: "Supply Chain", slug: "b2b", description: "Operational interfaces that reduce friction and errors." },
];

function getIndustryData(slug: string): IndustryData {
  if (industryData[slug]) return industryData[slug];
  // Fallback: generic content, but case studies point to real portfolio pages
  const label = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    label,
    headline: `Unforgettable Website & UX Design For ${label} SaaS`,
    subtitle: `We design delightful website & product user experiences for ${label} SaaS to increase signups & conversions.`,
    caseStudies: [
      {
        tag: label,
        location: "Startup Bros",
        title: "SAID Technology — Offline-First Medical Translation",
        image: "/images/portfolio/geo-analytics.avif",
        href: "/portfolio/writesonic",
      },
      {
        tag: label,
        location: "Design Study",
        title: "Pricing Page as Guidance — An AOV Study",
        image: "/images/portfolio/sales-crm-detail.webp",
        href: "/portfolio/manyreach",
      },
    ],
    features: [
      { icon: "Sparkles", title: "Rapid Prototyping", description: "From concept to clickable prototype in days, not months." },
      { icon: "Target", title: "Conversion Optimization", description: "Every screen designed to move users toward activation." },
      { icon: "BarChart3", title: "Data-Driven Layouts", description: "We use analytics and heatmaps to refine every interaction." },
      { icon: "Layers", title: "Scalable Design Systems", description: "Components and tokens that grow with your engineering team." },
      { icon: "Users", title: "User Research Baked In", description: "We talk to your users so every design decision is grounded in reality." },
      { icon: "Workflow", title: "Developer-Ready Handoffs", description: "Organized Figma files with specs, tokens, and annotations." },
    ],
    testimonial: {
      quote: `Good ${label} SaaS design starts with the buyer's actual workflow — every screen earns its place by moving them one step closer to the outcome they came for.`,
      name: "Denkinger Bros",
      role: "Design Study",
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
            Founded by Denkinger Bros
          </div>
          <div className="badge-pill flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Trial Week Included
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
              {data.label} Design Studies
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
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Denkinger Bros · Design Study
            </span>
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
