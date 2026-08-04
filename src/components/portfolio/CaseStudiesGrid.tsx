"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { EXIT_EASE, REVEAL_EASE } from "@/lib/animations";
import { projects } from "@/data/portfolio";
import { getImageStyle, getWrapperStyle } from "@/lib/imagePosition";
import { cn } from "@/lib/utils";

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();

/* Card choreography — cards arrive from y28/scale .98 and leave by shrinking
 * back into the grain. Exit is deliberately faster than entrance (0.34 vs
 * 0.7) so a filter change reads as "clear, then deal" rather than a crossfade
 * mush. Transform + opacity only. */
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: REVEAL_EASE, delay },
  }),
  exit: {
    opacity: 0,
    scale: 0.97,
    transition: { duration: 0.34, ease: EXIT_EASE },
  },
};

/* Titles are stored as "Name — Descriptor"; render them with the same
 * name-row + gray-subtitle anatomy the landing case cards use. */
function splitTitle(title: string): [string, string | null] {
  const idx = title.indexOf(" — ");
  if (idx === -1) return [title, null];
  return [title.slice(0, idx), title.slice(idx + 3)];
}

/* Desses card — media on top, attached bg-card panel below. The first
 * (featured) card runs full-width at 21/9; the rest sit in a 2-col grid. */
function CaseCard({
  project,
  featured = false,
  delay = 0,
}: {
  project: (typeof projects)[number];
  featured?: boolean;
  delay?: number;
}) {
  const [name, descriptor] = splitTitle(project.title);
  const prefersReducedMotion = useReducedMotion();

  const inner = (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group block overflow-hidden rounded-lg"
    >
      {/* Media — edge-to-edge, shares the card's radius */}
      <div
        className={cn(
          "relative media-zoom",
          featured
            ? "aspect-[4/3] sm:aspect-[2/1] xl:aspect-[21/9]"
            : "aspect-[4/3] sm:aspect-[16/10]",
        )}
      >
        <div
          className="absolute inset-0"
          style={getWrapperStyle(project.image)}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            quality={90}
            priority={featured}
            sizes={
              featured
                ? "(min-width: 1024px) 1520px, 100vw"
                : "(min-width: 1024px) 750px, (min-width: 640px) 50vw, 100vw"
            }
            className="object-cover"
            style={getImageStyle(project.image)}
          />
        </div>
      </div>

      {/* Attached content panel */}
      <div className={cn("bg-card", featured ? "p-6 md:p-7" : "p-6")}>
        <div className="flex items-start justify-between gap-4">
          <span className="text-[13px] font-medium text-(--accent-brand)">
            {project.tags.join(" · ")}
          </span>
          <span aria-hidden className="plus-btn">
            +
          </span>
        </div>
        <h2
          className={cn(
            "mt-2 font-semibold tracking-tight text-foreground",
            featured ? "text-[30px] leading-[1.15]" : "text-2xl",
          )}
        >
          {name}
        </h2>
        {descriptor && (
          <p
            className={cn(
              "mt-1 text-muted-foreground",
              featured ? "text-[17px] line-clamp-1" : "text-[16px] line-clamp-2",
            )}
          >
            {descriptor}
          </p>
        )}
      </div>
    </Link>
  );

  if (prefersReducedMotion) return <div>{inner}</div>;

  return (
    <motion.div
      layout="position"
      custom={delay}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, margin: "-80px" }}
    >
      {inner}
    </motion.div>
  );
}

export function CaseStudiesGrid() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const prefersReducedMotion = useReducedMotion();

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return projects.filter((project) => {
      const matchesCategory =
        category === "all" || project.tags.includes(category);
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  const [first, ...rest] = filtered;

  return (
    <section className="mx-auto w-full max-w-[1600px] px-6 md:px-10 pb-16 md:pb-32">
      {/* Filter row — quiet text filters left, flat search right.
       * Mobile: one horizontal snap-scroll rank with edge fades; desktop wraps. */}
      <div className="flex flex-col gap-4 lg:gap-5 lg:flex-row lg:items-center lg:justify-between border-b border-border pb-5 lg:pb-6 mb-8 md:mb-14">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 scrollbar-hide max-lg:flex-nowrap max-lg:overflow-x-auto max-lg:snap-x max-lg:snap-proximity max-lg:-mx-6 max-lg:px-6 max-lg:scroll-pl-6 max-lg:[mask-image:linear-gradient(to_right,transparent,black_20px,black_calc(100%-24px),transparent)]">
          {["all", ...allTags].map((tag) => {
            const active = category === tag;
            return (
              <button
                key={tag}
                type="button"
                onClick={() => setCategory(tag)}
                aria-pressed={active}
                className={cn(
                  "inline-flex items-center gap-1.5 text-[15px] cursor-pointer transition-colors duration-200 whitespace-nowrap max-lg:h-11 max-lg:shrink-0 max-lg:snap-start",
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {/* The dot doesn't fade in — it pops from nothing, so the
                 * filter feels switched rather than cross-dissolved. */}
                <span
                  aria-hidden
                  className={cn(
                    "label-dot origin-center transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
                    active ? "opacity-100 scale-100" : "opacity-0 scale-0",
                  )}
                />
                {tag === "all" ? "All" : tag}
              </button>
            );
          })}
        </div>

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full lg:w-[280px] h-11 rounded-full bg-card px-5 text-[16px] lg:text-[15px] text-foreground placeholder:text-muted-foreground/70 focus:outline-none transition-[background-color,box-shadow] duration-300 focus:bg-(--surface-card-hover) focus:shadow-[0_0_0_2px_var(--accent-brand-soft)] motion-reduce:transition-none"
        />
      </div>

      {/* First result full-width, the rest in a 2-col grid.
       * Keys carry the slug so AnimatePresence tracks identity across filter
       * changes; the featured slot is keyed separately because a project
       * moving in/out of it changes aspect ratio — that should read as an
       * exit + enter, not a morph. */}
      <AnimatePresence mode="wait">
        {first && (
          <CaseCard key={`featured-${first.slug}`} project={first} featured />
        )}
      </AnimatePresence>

      <div
        className={cn(
          "grid gap-6 sm:grid-cols-2",
          rest.length > 0 && "mt-6",
        )}
      >
        <AnimatePresence mode="popLayout">
          {rest.map((project, i) => (
            <CaseCard
              key={project.slug}
              project={project}
              delay={prefersReducedMotion ? 0 : Math.min(i, 5) * 0.06}
            />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
