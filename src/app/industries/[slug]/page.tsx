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
import { CTAButton } from "@/components/shared/CTAButton";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { StatusStrip } from "@/components/shared/StatusStrip";
import { TechBrandsMarquee } from "@/components/landing/TechBrandsMarquee";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { getImageStyle, getWrapperStyle } from "@/lib/imagePosition";

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
        image: "/images/portfolio/zonex-dashboard.webp",
        href: "/portfolio/zonex",
      },
      {
        tag: "Web3 Commerce",
        location: "Startup Bros",
        title: "LOOT8 — Web3 Content & Commerce Platform",
        image: "/images/portfolio/defi-landing.webp",
        href: "/portfolio/loot8",
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
        href: "/portfolio/said",
      },
      {
        tag: "Private LLMs",
        location: "Startup Bros",
        title: "K Project — Private AI for Regulated Industries",
        image: "/images/portfolio/ai-landing.webp",
        href: "/portfolio/k-project",
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
        tag: "Web3 Commerce",
        location: "Startup Bros",
        title: "LOOT8 — Web3 Content & Commerce Platform",
        image: "/images/portfolio/defi-landing.webp",
        href: "/portfolio/loot8",
      },
      {
        tag: "AI Analytics",
        location: "Startup Bros",
        title: "ZoneX — AI Sports Analytics Platform",
        image: "/images/portfolio/zonex-dashboard.webp",
        href: "/portfolio/zonex",
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
        "Web3 platforms were built for crypto natives. LOOT8 was built for the artist, the venue, and the fan — the blockchain is the infrastructure, but the experience is the product.",
      name: "Anthony Denkinger",
      role: "Startup Bros",
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
        href: "/portfolio/said",
      },
      {
        tag: label,
        location: "Startup Bros",
        title: "LOOT8 — Web3 Content & Commerce Platform",
        image: "/images/portfolio/defi-landing.webp",
        href: "/portfolio/loot8",
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
      name: "Anthony Denkinger",
      role: "Startup Bros",
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

  // Continuous section numbering, computed in document order.
  let sectionCount = 0;
  const idx = () => String(++sectionCount).padStart(2, "0");

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* ── Hero ── */}
      <section className="px-6 md:px-10 pt-16 md:pt-24 pb-16 md:pb-20">
        <div className="max-w-[1360px] mx-auto">
          <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8">
            <span className="badge-pill">
              <span aria-hidden className="label-dot" />
              Founded by Denkinger Bros
            </span>
            <span className="badge-pill">
              <span aria-hidden className="label-dot" />
              Trial Week Included
            </span>
          </div>

          <div className="grid grid-cols-12 gap-x-6">
            <h1 className="col-span-12 lg:col-span-9 text-h1 text-foreground mb-6">
              {data.headline}
            </h1>
          </div>
          <p className="text-body-lg max-w-[680px] mb-10">{data.subtitle}</p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-12">
            <CTAButton href="/strategy-call" variant="primary">
              Book Strategy Call
            </CTAButton>
            <CTAButton href="/portfolio" variant="secondary">
              View Our Work
            </CTAButton>
          </div>

          <div className="max-w-[840px]">
            <StatusStrip
              items={[
                { label: "Scope", value: "Within 48 hours" },
                { label: "Design", value: "Usable by week one" },
                { label: "Ship", value: "MVP in 2–4 weeks" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── Trusted By Marquee ── */}
      <TechBrandsMarquee />

      {/* ── Case Studies ── */}
      <section className="px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-[1360px] mx-auto">
          <SectionHeader
            index={idx()}
            label="DESIGN STUDIES"
            title={`${data.label} Design Studies`}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.caseStudies.map((cs) => (
              <Link
                key={cs.title}
                href={cs.href}
                className="group block overflow-hidden rounded-[20px] bg-card transition-colors duration-300 hover:bg-(--surface-card-hover)"
              >
                <div className="relative aspect-[16/10] overflow-hidden isolate">
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={getWrapperStyle(cs.image)}
                  >
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      style={getImageStyle(cs.image)}
                    />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <p className="text-[13px] font-medium text-(--accent-brand)">
                      {cs.tag} — {cs.location}
                    </p>
                    <span aria-hidden className="plus-btn">
                      +
                    </span>
                  </div>
                  <h3 className="text-h3 text-foreground mb-4">{cs.title}</h3>
                  <span className="text-[13px] font-medium text-(--accent-brand)">
                    → View Case Study
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features Grid ── */}
      <section className="px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-[1360px] mx-auto">
          <SectionHeader
            index={idx()}
            label="CAPABILITIES"
            title={`Built For ${data.label} Teams`}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.map((feature, i) => {
              const Icon = iconMap[feature.icon] ?? Sparkles;
              return (
                <div key={feature.title} className="card-elevated">
                  <div className="flex items-start justify-between mb-6">
                    <Icon className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                    <span className="text-xs tabular-nums text-muted-foreground/80">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-h3 text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-caption text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Testimonial Quote ── */}
      <section className="px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-[1360px] mx-auto">
          <div className="mb-16">
            <span className="badge-pill text-micro-label">
              <span aria-hidden className="label-dot" />
              <span className="sr-only">{idx()} · </span>
              <span className="lowercase">TESTIMONIAL</span>
            </span>
          </div>
          <div className="card-elevated p-8 md:p-12">
            <div className="grid grid-cols-12 gap-x-6">
              <div className="col-span-12 lg:col-span-10">
                <p className="text-xs text-muted-foreground mb-8">
                  Denkinger Bros · Design Study
                </p>
                <blockquote className="text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.25] tracking-[-0.02em] font-medium text-foreground mb-8">
                  &ldquo;{data.testimonial.quote}&rdquo;
                </blockquote>
                <p className="text-sm font-medium text-foreground">
                  {data.testimonial.name}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {data.testimonial.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Explore Other Industries ── */}
      <section className="px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-[1360px] mx-auto">
          <SectionHeader
            index={idx()}
            label="INDUSTRIES"
            title="Explore Other Industries"
          />
          <div>
            {otherIndustries
              .filter((ind) => ind.slug !== currentSlug)
              .slice(0, 8)
              .map((ind, i, arr) => (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className={`group flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 border-t border-border py-6${
                    i === arr.length - 1 ? " border-b" : ""
                  }`}
                >
                  <span className="text-xs tabular-nums text-muted-foreground/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-h3 text-foreground md:w-[280px] shrink-0 transition-transform duration-300 lg:group-hover:translate-x-2">
                    {ind.name}
                  </h3>
                  <p className="text-caption text-muted-foreground flex-1">
                    {ind.description}
                  </p>
                  <span className="text-[13px] font-medium text-(--accent-brand) whitespace-nowrap">
                    Explore {ind.name} →
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* ── Pricing CTA ── */}
      <section className="px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-[1360px] mx-auto">
          <div className="mb-16">
            <span className="badge-pill text-micro-label">
              <span aria-hidden className="label-dot" />
              <span className="sr-only">{idx()} · </span>
              <span className="lowercase">PRICING</span>
            </span>
          </div>
          <div className="card-elevated p-8 md:p-12">
            <div className="grid grid-cols-12 gap-x-6">
              <div className="col-span-12 lg:col-span-7">
                <h2 className="text-h2 text-foreground mb-5">
                  So much value at such a{" "}
                  <span className="accent-word">flexible</span> price
                </h2>
                <p className="text-body-lg max-w-[560px] mb-10">
                  Consultation-based custom pricing. We scope every project to the
                  fastest path to launch, no retainers, no bloat.
                </p>
                <CTAButton href="/strategy-call" variant="primary">
                  Book a Call
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ index={idx()} />

      {/* ── Final CTA ── */}
      <FinalCTA index={idx()} />
    </div>
  );
}
