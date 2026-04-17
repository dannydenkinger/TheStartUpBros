"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "@/components/shared/AnimateIn";

function StudyLabel() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        Denkinger Bros
      </span>
      <span className="w-1 h-1 rounded-full bg-muted-foreground/60" />
      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        Design Study
      </span>
    </div>
  );
}

const cases = [
  {
    tags: ["AI", "Healthcare", "Defense"],
    title: "SAID Technology — Offline-First Medical Translation",
    testimonial:
      "Language can't be a barrier to care. We built SAID so translation works at the bedside — offline, on-device, and specific to medicine. That's a different problem than general translation, and it needs a different tool.",
    author: { name: "Anthony Denkinger", role: "Startup Bros", image: "/images/portfolio/ai-finance.avif" },
    href: "/portfolio/writesonic",
    heroImage: "/images/portfolio/sales-crm-full.webp",
    screenshots: [
      "/images/portfolio/crm-dashboard.webp",
      "/images/portfolio/productivity-dashboard.webp",
    ],
  },
  {
    tags: ["AI", "Research", "Private LLMs"],
    title: "K Project — Private AI for Regulated Industries",
    testimonial:
      "The interesting problem in enterprise AI isn't capability — it's control. K Project is about giving organizations the productivity gains of modern LLMs without handing their data to someone else's infrastructure.",
    author: { name: "Anthony Denkinger", role: "Startup Bros", image: "/images/portfolio/geo-analytics.avif" },
    href: "/portfolio/loopback",
    heroImage: "/images/portfolio/ai-landing.webp",
    screenshots: [
      "/images/portfolio/fintech-dashboard.webp",
      "/images/portfolio/freelancer-dashboard.webp",
    ],
  },
  {
    tags: ["Web3", "Mobile", "Blockchain"],
    title: "LOOT8 — Web3 Content & Commerce Platform",
    testimonial:
      "Web3 platforms were built for crypto natives. LOOT8 was built for the artist, the venue, and the fan — the blockchain is the infrastructure, but the experience is the product.",
    author: { name: "Anthony Denkinger", role: "Startup Bros", image: "/images/portfolio/sales-dashboard.avif" },
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
            <span className="badge-pill mb-6 inline-block">Design Studies</span>
            <h2 className="text-h2 text-foreground">
              Product deep-dives from the
              <br className="hidden sm:block" />
              kind of SaaS we build
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

                <StudyLabel />

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
