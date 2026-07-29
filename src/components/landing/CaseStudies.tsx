"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { Plate } from "@/components/shared/Plate";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { getImageStyle, getWrapperStyle } from "@/lib/imagePosition";

function StudyLabel() {
  return (
    <div className="flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
      <span>Denkinger Bros</span>
      <span aria-hidden>·</span>
      <span>Design Study</span>
    </div>
  );
}

const cases = [
  {
    tags: ["CRM", "Full-Stack", "SaaS"],
    title: "Vesta CRM — Complete CRM Platform Built From Scratch",
    testimonial:
      "We went from juggling five different tools to one platform that actually fits how we work. Vesta CRM is the system we always needed but couldn't find off the shelf.",
    author: { name: "Danny Denkinger", role: "StartUpBros", image: "/images/avatars/danny-denkinger.png" },
    href: "/portfolio/vesta-crm",
    heroImage: "/images/portfolio/vesta-hero.png",
    screenshots: [
      "/images/portfolio/vesta-calendar.png",
      "/images/portfolio/vesta-analytics.png",
    ],
  },
  {
    tags: ["AI", "Sports", "Computer Vision"],
    title: "ZoneX — AI Sports Analytics Platform",
    testimonial:
      "Coaches don't want to operate a data tool — they want to make a decision. ZoneX is the shortest line between raw film and a game-day adjustment a coach actually trusts.",
    author: { name: "Anthony Denkinger", role: "StartUpBros", image: "/images/avatars/anthony-denkinger.png" },
    href: "/portfolio/zonex",
    heroImage: "/images/portfolio/zonex-dashboard.webp",
    screenshots: [
      "/images/portfolio/zonex-film.webp",
      "/images/portfolio/zonex-coaching.webp",
    ],
  },
  {
    tags: ["AI", "Healthcare", "Defense"],
    title: "SAID Technology — Offline-First Medical Translation",
    testimonial:
      "Language can't be a barrier to care. We built SAID so translation works at the bedside — offline, on-device, and specific to medicine. That's a different problem than general translation, and it needs a different tool.",
    author: { name: "Anthony Denkinger", role: "StartUpBros", image: "/images/avatars/anthony-denkinger.png" },
    href: "/portfolio/said",
    heroImage: "/images/portfolio/said-hero-brand.webp",
    screenshots: [
      "/images/portfolio/said-lineup.webp",
      "/images/portfolio/said-clinical.webp",
    ],
  },
];

export function CaseStudies() {
  return (
    <section className="px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-[1360px]">
        <AnimateIn>
          <SectionHeader
            index="02"
            label="DESIGN STUDIES"
            title={
              <>
                Product <span className="accent-word">deep-dives</span> from the{" "}
                <br className="hidden sm:block" />
                kind of SaaS we build
              </>
            }
          />
        </AnimateIn>

        {/* Case Study Blocks — left column is sticky within each row */}
        <div className="space-y-24">
          {cases.map((c, caseIdx) => {
            const slug = c.href.split("/").pop() ?? "";
            return (
              <div
                key={c.title}
                className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start"
              >
                {/* Left — sticks from the top of the row until the last image scrolls past */}
                <div className="lg:w-[540px] shrink-0 lg:sticky lg:top-[120px] lg:self-start">
                  <p className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground mb-6">
                    {c.tags.join(" / ")}
                  </p>

                  <h3 className="text-h1 text-foreground mb-6">{c.title}</h3>

                  <StudyLabel />

                  <p className="font-display italic text-[21px] leading-[1.45] text-foreground mt-6 mb-8 max-w-[480px]">
                    &ldquo;{c.testimonial}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-baseline gap-3 py-3 border-b border-border/60">
                    <span className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground">
                      {c.author.name}
                    </span>
                    <span
                      aria-hidden
                      className="flex-1 border-b border-dotted border-muted-foreground/40 -translate-y-[3px]"
                    />
                    <span className="text-[15px] font-medium text-foreground">
                      {c.author.role}
                    </span>
                  </div>

                  <div className="mt-8">
                    <Link href={c.href} className="btn-pill btn-pill-primary">
                      View Case Study{" "}
                      <span aria-hidden className="btn-arrow">
                        →
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Right — images stacked vertically as captioned plates */}
                <div className="flex-1 flex flex-col gap-8 w-full">
                  {[c.heroImage, ...c.screenshots].map((src, imgIdx) => (
                    <AnimateIn key={src} delay={Math.min(imgIdx, 3) * 0.06}>
                      <Link href={c.href} className="group block">
                        <Plate
                          caption={slug}
                          fig={String(caseIdx * 3 + imgIdx + 1).padStart(2, "0")}
                          shadow
                        >
                          <div className="relative aspect-[16/10] rounded-[4px] overflow-hidden">
                            <div className="absolute inset-0" style={getWrapperStyle(src)}>
                              <Image
                                src={src}
                                alt={imgIdx === 0 ? c.title : "Case study screenshot"}
                                fill
                                quality={90}
                                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                                style={getImageStyle(src)}
                              />
                            </div>
                            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 px-4 py-3 bg-background border-t border-border opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <span className="text-micro-label text-foreground">
                                View Case Study
                              </span>
                              <span aria-hidden className="text-micro-label text-foreground">
                                →
                              </span>
                            </div>
                          </div>
                        </Plate>
                      </Link>
                    </AnimateIn>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* View All CTA */}
        <AnimateIn delay={0.3}>
          <div className="mt-16">
            <Link href="/portfolio" className="btn-pill btn-pill-primary">
              View All Case Studies
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
