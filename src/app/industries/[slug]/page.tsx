import Image from "next/image";
import Link from "next/link";
import { TechBrandsMarquee } from "@/components/landing/TechBrandsMarquee";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";

/* ─── Industry data keyed by slug ─── */
const industryData: Record<
  string,
  {
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
    features: { title: string; description: string }[];
    testimonial: { quote: string; name: string; role: string };
  }
> = {
  marketing: {
    label: "Marketing",
    headline: "Unforgettable Website & UX Design For Marketing SaaS",
    subtitle:
      "We design delightful website & product user experiences for Marketing SaaS to increase signups & conversions.",
    caseStudies: [
      {
        tag: "Marketing",
        location: "Miami Beach, Florida",
        title: "Increasing BookMe's Landing Page Conversions in Two Weeks",
        image: "/images/portfolio/socialsonic.avif",
        href: "/portfolio/bookme",
      },
      {
        tag: "Marketing",
        location: "San Francisco, CA",
        title: "Designing Socialsonic's MVP To Reach 1000+ Users In 30 Days",
        image: "/images/portfolio/community-search.avif",
        href: "/portfolio/socialsonic",
      },
    ],
    features: [
      {
        title: "Fast Campaign Setup",
        description:
          "We reduce friction in onboarding so users can launch their first campaign within minutes.",
      },
      {
        title: "Outcome-Focused UX",
        description:
          "We design around what marketers care about — reach, ROI, and what's actually working.",
      },
      {
        title: "Clarity in Metrics",
        description:
          "We turn raw performance data into clean insights — easy to share, easy to act on.",
      },
      {
        title: "Multi-Role Interfaces",
        description:
          "From CMOs to interns, we build flows that adapt to each role's goals, not just generic tools.",
      },
      {
        title: "Sticky Daily Workflows",
        description:
          "We design flows users return to — tracking progress, adjusting, iterating, and reporting.",
      },
      {
        title: "Visual Builder Optimization",
        description:
          "Drag-and-drop is just the start. We fine-tune builders for conversion, clarity, and speed.",
      },
    ],
    testimonial: {
      quote:
        "They consistently crafted designs that harmonized visual appeal, practical use, and business goals.",
      name: "Samanyou Garg",
      role: "Founder @ Socialsonic",
    },
  },
  ai: {
    label: "AI",
    headline: "Unforgettable Website & UX Design For AI SaaS",
    subtitle:
      "We design delightful website & product user experiences for AI SaaS to increase signups & conversions.",
    caseStudies: [
      {
        tag: "AI",
        location: "San Francisco, CA",
        title: "Designing the First GEO Platform For Writesonic's 1M+ Users",
        image: "/images/portfolio/geo-analytics.avif",
        href: "/portfolio/writesonic",
      },
      {
        tag: "AI",
        location: "New York, NY",
        title: "Building an AI-Powered Analytics Dashboard in 14 Days",
        image: "/images/portfolio/ai-finance.avif",
        href: "/portfolio/ai-analytics",
      },
    ],
    features: [
      {
        title: "Model Output Visualization",
        description:
          "We design interfaces that make AI outputs interpretable and actionable for non-technical users.",
      },
      {
        title: "Prompt Engineering UX",
        description:
          "We create intuitive prompt interfaces that help users get the best results from AI models.",
      },
      {
        title: "Real-Time Feedback Loops",
        description:
          "We build interfaces that show AI processing states clearly so users always know what's happening.",
      },
      {
        title: "Trust & Transparency",
        description:
          "We design explainable AI interfaces that build user confidence through transparency.",
      },
      {
        title: "Adaptive Workflows",
        description:
          "We create flows that learn from user behavior and surface the most relevant features.",
      },
      {
        title: "Data Pipeline Clarity",
        description:
          "We visualize complex data flows so users understand how their data moves through AI systems.",
      },
    ],
    testimonial: {
      quote:
        "Startup Bros understood the complexity of our AI product and made it feel effortlessly simple for our users.",
      name: "Alex Chen",
      role: "CPO @ AI Startup",
    },
  },
  /* fallback for any other slug */
};

const otherIndustries = [
  { name: "AI", slug: "ai", description: "Design for intelligent products that feel effortless." },
  { name: "Marketing", slug: "marketing", description: "Conversion-focused design for marketing platforms." },
  { name: "FinTech", slug: "fintech", description: "Trust-building interfaces for financial products." },
  { name: "EdTech", slug: "ed-tech", description: "Engaging learning experiences that drive completion." },
  { name: "Sales", slug: "sales", description: "Streamlined workflows that close deals faster." },
  { name: "Web3", slug: "web3", description: "Intuitive design for decentralized applications." },
  { name: "Mobile Apps", slug: "mobile-apps", description: "Native-feeling experiences users love." },
  { name: "B2B / Agencies", slug: "agencies", description: "Enterprise-grade UX that scales with your team." },
  { name: "Healthcare", slug: "healthcare", description: "Clinical workflows designed for clarity and speed." },
  { name: "Supply Chain", slug: "b2b", description: "Operational interfaces that reduce friction and errors." },
];

function getIndustryData(slug: string) {
  if (industryData[slug]) return industryData[slug];
  // Fallback: generate generic data
  const label = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    label,
    headline: `Unforgettable Website & UX Design For ${label} SaaS`,
    subtitle: `We design delightful website & product user experiences for ${label} SaaS to increase signups & conversions.`,
    caseStudies: [
      {
        tag: label,
        location: "San Francisco, CA",
        title: `Designing a High-Converting ${label} Platform`,
        image: "/images/portfolio/ai-finance.avif",
        href: "/portfolio",
      },
      {
        tag: label,
        location: "New York, NY",
        title: `Scaling ${label} Products With Premium UX`,
        image: "/images/portfolio/geo-analytics.avif",
        href: "/portfolio",
      },
    ],
    features: [
      { title: "Rapid Prototyping", description: "From concept to clickable prototype in days, not months." },
      { title: "Conversion Optimization", description: "Every screen designed to move users toward activation." },
      { title: "Data-Driven Layouts", description: "We use analytics and heatmaps to refine every interaction." },
      { title: "Scalable Design Systems", description: "Components and tokens that grow with your engineering team." },
      { title: "User Research Baked In", description: "We talk to your users so every design decision is grounded in reality." },
      { title: "Developer-Ready Handoffs", description: "Organized Figma files with specs, tokens, and annotations." },
    ],
    testimonial: {
      quote: "Startup Bros transformed our product experience. The results spoke for themselves within the first month.",
      name: "Product Leader",
      role: `${label} SaaS`,
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
      <section className="px-6 lg:px-10 pt-[180px] pb-[100px] text-center flex flex-col items-center justify-center">
        <h1 className="text-display max-w-4xl mx-auto mb-6 text-foreground">
          {data.headline}
        </h1>
        <p className="text-body-lg max-w-2xl mx-auto mb-10">
          {data.subtitle}
        </p>
        <a
          href="/strategy-call"
          className="btn-pill btn-pill-primary px-8 py-3.5"
        >
          Book Strategy Call
        </a>
      </section>

      {/* ── Trusted By Marquee ── */}
      <TechBrandsMarquee />

      {/* ── Case Studies ── */}
      <section className="px-6 lg:px-10 py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-h2 text-foreground">
              Our {data.label} UX Design Case Studies
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
            <h2 className="text-h2 text-foreground">Our Features</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.map((feature) => (
              <div
                key={feature.title}
                className="p-8 rounded-2xl border border-border bg-card hover:bg-secondary hover:shadow-lg transition-all duration-300"
              >
                <h5 className="text-[16px] font-semibold text-foreground mb-3">
                  {feature.title}
                </h5>
                <p className="text-[14px] leading-[1.7] text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial Quote ── */}
      <section className="px-6 lg:px-10 py-24 md:py-28 bg-background">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#facc15" className="mx-0.5">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
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

      {/* ── FAQ ── */}
      <FAQ />

      {/* ── Final CTA ── */}
      <FinalCTA />
    </div>
  );
}
