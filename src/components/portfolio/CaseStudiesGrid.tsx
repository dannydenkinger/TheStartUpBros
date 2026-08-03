"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/portfolio";
import { getImageStyle, getWrapperStyle } from "@/lib/imagePosition";

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();

/* Titles are stored as "Name — Descriptor"; render them with the same
 * name-row + gray-subtitle anatomy the landing case cards use. */
function splitTitle(title: string): [string, string | null] {
  const idx = title.indexOf(" — ");
  if (idx === -1) return [title, null];
  return [title.slice(0, idx), title.slice(idx + 3)];
}

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
    <section className="mx-auto w-full max-w-[1600px] px-6 md:px-10 pb-24 md:pb-32">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12 md:mb-16">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-[300px] h-12 rounded-xl border border-transparent bg-(--surface-input) px-4 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-foreground focus:ring-2 focus:ring-(--accent-brand-soft) transition-[border-color,box-shadow] duration-200"
        />

        <div className="flex items-center gap-3">
          <span className="text-caption font-medium text-muted-foreground">
            Category
          </span>
          <div className="relative">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-12 rounded-xl border border-transparent bg-(--surface-input) pl-4 pr-10 text-sm text-foreground focus:outline-none focus:border-foreground focus:ring-2 focus:ring-(--accent-brand-soft) transition-[border-color,box-shadow] duration-200 cursor-pointer appearance-none"
            >
              <option value="all">All</option>
              {allTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
            <svg
              className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground"
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

      {/* Project showcase — stacked media cards */}
      <div className="flex flex-col gap-16 md:gap-24">
        {filtered.map((project, i) => {
          const [name, descriptor] = splitTitle(project.title);
          return (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            className="group block"
          >
            <div className="rounded-[24px] overflow-hidden bg-card transition-transform duration-300 group-hover:-translate-y-0.5">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[2/1] xl:aspect-[21/9] w-full overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={getWrapperStyle(project.image)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority={i === 0}
                    sizes="(max-width: 768px) 100vw, 1280px"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
                    style={getImageStyle(project.image)}
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
              <span className="text-[13px] text-muted-foreground tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[13px] font-medium text-(--accent-brand)">
                {project.tags.join(" / ")}
              </span>
              {project.year && (
                <span className="text-[13px] text-muted-foreground tabular-nums">
                  {project.year}
                </span>
              )}
              <span aria-hidden className="plus-btn ml-auto">
                +
              </span>
            </div>
            <h2 className="mt-3 text-h2 text-foreground max-w-[980px]">
              {name}
              {descriptor && (
                <>
                  <span className="sr-only"> — </span>
                  <span className="block text-[1.25rem] md:text-[1.375rem] font-normal leading-[1.4] tracking-[-0.01em] text-muted-foreground mt-2">
                    {descriptor}
                  </span>
                </>
              )}
            </h2>
          </Link>
          );
        })}
      </div>
    </section>
  );
}
