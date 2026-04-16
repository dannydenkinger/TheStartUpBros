"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "@/components/shared/AnimateIn";

function ClutchRating() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[13px] font-bold text-foreground">Clutch</span>
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#facc15">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>
    </div>
  );
}

const cases = [
  {
    tags: ["AI SaaS", "VC Backed", "NY"],
    title: "Designing the First GEO Platform For Writesonic's 1M+ Users",
    testimonial:
      "Their designs consistently balanced visual aesthetics with functionality and business objectives.",
    author: { name: "Samanyou Garg", role: "Founder @ Writesonic", image: "/images/portfolio/ai-finance.avif" },
    href: "/portfolio/writesonic",
    heroImage: "/images/portfolio/sales-crm-full.webp",
    screenshots: [
      "/images/portfolio/crm-dashboard.webp",
      "/images/portfolio/productivity-dashboard.webp",
    ],
  },
  {
    tags: ["AI SaaS", "MVP + Web Design"],
    title: "Designing Loopback's MVP & Landing Page In 21 Days",
    testimonial:
      "We couldn't have achieved throughout every stage of their work, from wireframes to polished final output. The team provided the client with real-time insights into their results.",
    author: { name: "Mike Sitton", role: "Founder @ Loopback", image: "/images/portfolio/geo-analytics.avif" },
    href: "/portfolio/loopback",
    heroImage: "/images/portfolio/ai-landing.webp",
    screenshots: [
      "/images/portfolio/fintech-dashboard.webp",
      "/images/portfolio/freelancer-dashboard.webp",
    ],
  },
  {
    tags: ["Web3", "Product Design", "🇨🇦 Canada"],
    title: "Launching N3on's token through Thrust",
    testimonial:
      "They're a creative design and developer partner us with creative vision. Their thought leadership is exceptional.",
    author: { name: "Etai Yaacobi", role: "Founder & CEO @ Thrust", image: "/images/portfolio/sales-dashboard.avif" },
    href: "/portfolio/n3on",
    heroImage: "/images/portfolio/defi-landing.webp",
    screenshots: [
      "/images/portfolio/fintech-mobile.webp",
      "/images/portfolio/travel-app.webp",
    ],
  },
];

export function CaseStudies() {
  return (
    <section className="px-6 lg:px-10 py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-[1400px]">
        {/* Section Header */}
        <AnimateIn>
          <div className="text-center mb-16">
            <span className="badge-pill mb-6 inline-block">Case Studies</span>
            <h2 className="text-h2 text-foreground">
              Real Results from Real SaaS
              <br className="hidden sm:block" />
              Companies
            </h2>
          </div>
        </AnimateIn>

        {/* Case Study Blocks — left column is sticky within each row */}
        <div className="space-y-24">
          {cases.map((c) => (
            <div
              key={c.title}
              className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start"
            >
              {/* Left — sticks from the top of the row until the last image scrolls past */}
              <div className="lg:w-[540px] shrink-0 lg:sticky lg:top-[120px] lg:self-start">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {c.tags.map((tag) => (
                    <span key={tag} className="badge-pill text-[13px]">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-[36px] md:text-[48px] font-medium leading-[1.08] tracking-[-0.028em] text-foreground mb-7">
                  {c.title}
                </h3>

                <ClutchRating />

                <p className="text-[17px] leading-relaxed text-muted-foreground mt-6 mb-7 max-w-[480px]">
                  &ldquo;{c.testimonial}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden bg-secondary shrink-0">
                      <Image
                        src={c.author.image}
                        alt={c.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-[15px] font-semibold text-foreground leading-tight">
                        {c.author.name}
                      </p>
                      <p className="text-[14px] text-muted-foreground leading-tight">
                        {c.author.role}
                      </p>
                    </div>
                  </div>
                  <Link
                    href={c.href}
                    className="text-[15px] font-medium text-foreground hover:underline"
                  >
                    View Case Study
                  </Link>
                </div>
              </div>

              {/* Right — images stacked vertically, each with a View Case Study hover overlay */}
              <div className="flex-1 flex flex-col gap-4 w-full">
                {[c.heroImage, ...c.screenshots].map((src, imgIdx) => (
                  <AnimateIn key={src} delay={imgIdx * 0.05}>
                    <Link
                      href={c.href}
                      className="group relative block aspect-[16/10] rounded-2xl overflow-hidden border border-border bg-card shadow-sm"
                    >
                      <Image
                        src={src}
                        alt={imgIdx === 0 ? c.title : "Case study screenshot"}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 backdrop-blur-[2px]">
                        <span className="btn-pill btn-pill-primary shadow-lg">
                          View Case Study
                        </span>
                      </div>
                    </Link>
                  </AnimateIn>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <AnimateIn delay={0.3}>
          <div className="text-center mt-16">
            <Link
              href="/portfolio"
              className="btn-pill btn-pill-primary"
            >
              View All Case Studies
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
