"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { Plate } from "@/components/shared/Plate";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { getImageStyle, getWrapperStyle } from "@/lib/imagePosition";

function StudyLabel() {
  return (
    <div className="flex items-center gap-2 text-[13px] text-muted-foreground">
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
    <section className="px-6 md:px-10 py-20 md:py-28">
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
                  <div className="flex flex-wrap gap-2 mb-7">
                    {c.tags.map((tag) => (
                      <span key={tag} className="badge-pill">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-h1 text-foreground mb-6">{c.title}</h3>

                  <StudyLabel />

                  <p className="text-[19px] leading-[1.55] tracking-[-0.01em] text-muted-foreground mt-5 mb-8 max-w-[480px]">
                    &ldquo;{c.testimonial}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden bg-secondary shrink-0">
                      <Image
                        src={c.author.image}
                        alt=""
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[14px] font-medium text-foreground leading-tight">
                        {c.author.name}
                      </p>
                      <p className="text-[13px] text-muted-foreground leading-tight mt-0.5">
                        {c.author.role}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link
                      href={c.href}
                      className="btn-pill btn-pill-primary h-10 px-5 text-sm"
                    >
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
                          <div className="relative aspect-[16/10] overflow-hidden">
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
                            <div className="absolute bottom-4 left-4 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-medium text-[#0e0e10] shadow-[0_4px_16px_rgba(0,0,0,0.18)]">
                                View Case Study
                                <span aria-hidden>→</span>
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
