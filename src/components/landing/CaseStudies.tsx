"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { RevealText } from "@/components/shared/RevealText";
import { getImageStyle, getWrapperStyle } from "@/lib/imagePosition";
import { cn } from "@/lib/utils";

const cases = [
  {
    tags: ["CRM", "Full-Stack", "SaaS"],
    title: "Vesta CRM — Complete CRM Platform Built From Scratch",
    href: "/portfolio/vesta-crm",
    heroImage: "/images/portfolio/vesta-hero.png",
  },
  {
    tags: ["AI", "Sports", "Computer Vision"],
    title: "ZoneX — AI Sports Analytics Platform",
    href: "/portfolio/zonex",
    heroImage: "/images/portfolio/zonex-dashboard.webp",
  },
  {
    tags: ["AI", "Healthcare", "Defense"],
    title: "SAID Technology — Offline-First Medical Translation",
    href: "/portfolio/said",
    heroImage: "/images/portfolio/said-hero-brand.webp",
  },
];

/* Titles are stored as "Name — Descriptor"; the desses card anatomy renders
 * the same copy as a big name row + one-line gray subtitle. */
function splitTitle(title: string): [string, string | null] {
  const idx = title.indexOf(" — ");
  if (idx === -1) return [title, null];
  return [title.slice(0, idx), title.slice(idx + 3)];
}

/* Scroll parallax INSIDE the frame — the media plate is cut 14% taller than
 * its clip and drifts ±6%, so the image floats behind the card edge as the
 * card crosses the viewport. Three nested layers, each with one job:
 *   A (hover scale, owned by .media-zoom)  →
 *   B (scroll drift, owned here)           →
 *   C (imagePosition zoom, untouched).
 * Keeping them separate is what stops the CSS hover transform and the
 * scroll-linked inline transform from overwriting each other. */
function ParallaxMedia({ src, alt, sizes }: { src: string; alt: string; sizes: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  const plate = (
    <div className="absolute inset-0" style={getWrapperStyle(src)}>
      <Image
        src={src}
        alt={alt}
        fill
        quality={90}
        sizes={sizes}
        className="object-cover"
        style={getImageStyle(src)}
      />
    </div>
  );

  return (
    <div ref={ref} className="absolute inset-0">
      {prefersReducedMotion ? (
        plate
      ) : (
        <motion.div
          className="absolute -top-[7%] h-[114%] w-full will-change-transform"
          style={{ y }}
        >
          {plate}
        </motion.div>
      )}
    </div>
  );
}

function CaseCard({
  study,
  compact = false,
  delay = 0,
}: {
  study: (typeof cases)[number];
  compact?: boolean;
  delay?: number;
}) {
  const [name, descriptor] = splitTitle(study.title);
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimateIn delay={delay}>
      <Link
        href={study.href}
        className="group block overflow-hidden rounded-lg"
      >
        {/* Media — edge-to-edge, shares the card's radius, no caption */}
        <div
          className={cn(
            "relative media-zoom",
            compact ? "aspect-[4/3]" : "aspect-[16/8]",
          )}
        >
          <ParallaxMedia
            src={study.heroImage}
            alt={study.title}
            sizes={
              compact
                ? "(min-width: 1024px) 430px, (min-width: 640px) 50vw, 100vw"
                : "(min-width: 1024px) 880px, 100vw"
            }
          />
        </div>

        {/* Attached content panel */}
        <div className={cn("bg-card", compact ? "p-6" : "p-6 md:p-7")}>
          <div className="flex items-start justify-between gap-4">
            <span className="text-[13px] font-medium text-(--accent-brand)">
              {study.tags.join(" · ")}
            </span>
            {/* The whole card is the affordance, so the affordance should
             * acknowledge it: the plus inks up to accent and swells a hair.
             * (A quarter-turn is wasted on a '+' — it looks identical.) */}
            <span
              aria-hidden
              className={cn(
                "plus-btn",
                !prefersReducedMotion &&
                  "transition-[transform,background-color,border-color,color] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110",
                "group-hover:border-transparent group-hover:bg-(--accent-brand) group-hover:text-white",
              )}
            >
              +
            </span>
          </div>
          <h3
            className={cn(
              "mt-2 font-semibold tracking-tight text-foreground",
              compact ? "text-2xl" : "text-[30px] leading-[1.15]",
            )}
          >
            {name}
          </h3>
          {descriptor && (
            <p
              className={cn(
                "mt-1 text-muted-foreground",
                compact ? "text-[16px] line-clamp-2" : "text-[17px] line-clamp-1",
              )}
            >
              {descriptor}
            </p>
          )}
        </div>
      </Link>
    </AnimateIn>
  );
}

export function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  /* The pinned rail eases up a touch while the card column runs past it —
   * enough to register as depth, not enough to read as drift. */
  const railY = useTransform(scrollYProgress, [0, 1], [26, -26]);

  return (
    <section ref={sectionRef} className="px-6 md:px-10 py-14 md:py-28">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-12 lg:gap-x-8 gap-y-10 md:gap-y-12">
          {/* Sticky left rail — section header */}
          <aside className="col-span-12 lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <motion.div
              style={prefersReducedMotion ? undefined : { y: railY }}
              className="will-change-transform"
            >
              <AnimateIn>
                <span className="badge-pill text-micro-label">
                  <span aria-hidden className="label-dot" />
                  <span className="sr-only">02 · </span>
                  <span className="lowercase">DESIGN STUDIES</span>
                </span>
              </AnimateIn>
              <h2 className="text-h2 mt-6 max-w-[430px]">
                <RevealText delay={0.08}>
                  Product <span className="accent-word">deep-dives</span> from
                  the kind of SaaS we build
                </RevealText>
              </h2>
            </motion.div>
          </aside>

          {/* Right column — first project full-width, the rest in a 2-col grid */}
          <div className="col-span-12 lg:col-span-8">
            <CaseCard study={cases[0]} />

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {cases.slice(1).map((study, i) => (
                <CaseCard
                  key={study.title}
                  study={study}
                  compact
                  delay={i * 0.08}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
