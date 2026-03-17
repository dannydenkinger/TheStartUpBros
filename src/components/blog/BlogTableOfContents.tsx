"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function BlogTableOfContents() {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const article = document.querySelector("[data-blog-content]");
    if (!article) return;

    const elements = article.querySelectorAll("h2, h3");
    const items: TocItem[] = [];

    elements.forEach((el) => {
      const id =
        el.id ||
        (el.textContent || "")
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");
      el.id = id;
      items.push({
        id,
        text: el.textContent || "",
        level: el.tagName === "H2" ? 2 : 3,
      });
    });

    setHeadings(items);
  }, []);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first heading that is currently intersecting
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      }
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (headings.length === 0) return null;

  return (
    <nav className="space-y-1">
      <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground mb-4">
        On this page
      </p>
      <ul className="space-y-0.5">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(heading.id);
                if (el) {
                  const y =
                    el.getBoundingClientRect().top + window.scrollY - 100;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className={`
                block py-1.5 text-[13px] leading-snug transition-all duration-200 border-l-2
                ${heading.level === 3 ? "pl-6" : "pl-4"}
                ${
                  activeId === heading.id
                    ? "border-foreground text-foreground font-medium"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground/40"
                }
              `}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
      <button
        onClick={scrollToTop}
        className="flex items-center gap-1.5 mt-6 pl-4 text-[12px] text-muted-foreground hover:text-foreground transition-colors duration-200"
      >
        <ArrowUp className="w-3 h-3" />
        Back to top
      </button>
    </nav>
  );
}
