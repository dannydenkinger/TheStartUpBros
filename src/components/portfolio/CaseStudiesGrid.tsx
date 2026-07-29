"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/portfolio";
import { getImageStyle, getWrapperStyle } from "@/lib/imagePosition";

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();

export function CaseStudiesGrid() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

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

  return (
    <section className="mx-auto w-full max-w-[1360px] px-6 md:px-10 pb-24 md:pb-32">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-border pt-6 mb-12">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-[280px] h-10 rounded-[2px] border border-input bg-(--surface-input) px-3 font-mono text-xs tracking-[0.08em] text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground transition-colors duration-200"
        />

        <div className="flex items-center gap-3">
          <span className="text-micro-label text-muted-foreground">
            Category
          </span>
          <div className="relative">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-10 rounded-[2px] border border-input bg-(--surface-input) pl-3 pr-9 font-mono text-xs uppercase tracking-[0.08em] text-foreground focus:outline-none focus:border-foreground transition-colors duration-200 cursor-pointer appearance-none"
            >
              <option value="all">All</option>
              {allTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
            <svg
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Ledger rows */}
      <div>
        {filtered.map((project, i) => (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            className="group relative flex items-start lg:items-baseline gap-5 lg:gap-6 border-t border-border py-8 lg:py-10 last:border-b"
          >
            <span className="hidden lg:block font-mono text-sm tracking-[0.04em] text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>

            {/* Static thumbnail plate below lg */}
            <div className="lg:hidden w-28 sm:w-36 shrink-0 rounded-md border border-border bg-secondary p-1">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[3px]">
                <div
                  className="absolute inset-0"
                  style={getWrapperStyle(project.image)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="144px"
                    className="object-cover"
                    style={getImageStyle(project.image)}
                  />
                </div>
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <p className="lg:hidden mb-2 font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")} · {project.tags.join(" / ")} ·{" "}
                {project.year}
              </p>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.01em] text-foreground transition-transform duration-300 lg:group-hover:translate-x-2">
                {project.title}
              </h2>
            </div>

            <span className="hidden lg:block font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground whitespace-nowrap">
              {project.tags.join(" / ")}
            </span>
            <span className="hidden lg:block font-mono text-sm tracking-[0.04em] text-muted-foreground">
              {project.year}
            </span>
            <span
              aria-hidden
              className="font-mono text-base text-muted-foreground transition-colors duration-200 group-hover:text-(--accent-brand)"
            >
              ↗
            </span>

            {/* Hover reveal plate (lg+) */}
            <div className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[340px] aspect-[4/3] rounded-md border border-border overflow-hidden opacity-0 scale-[0.97] rotate-[-2deg] group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none hidden lg:block z-10 shadow-(--shadow-plate)">
              <div
                className="absolute inset-0"
                style={getWrapperStyle(project.image)}
              >
                <Image
                  src={project.image}
                  alt=""
                  fill
                  sizes="340px"
                  className="object-cover"
                  style={getImageStyle(project.image)}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
