"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface BlogTableOfContentsProps {
  /** "rail" — desktop sidebar with label + back-to-top; "inline" — bare list for the mobile collapsible card. */
  variant?: "rail" | "inline";
}

export function BlogTableOfContents({
  variant = "rail",
}: BlogTableOfContentsProps) {
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

    // Position-based tracking — the last heading above the reading line wins.
    // (IntersectionObserver misreports on programmatic / fast scrolls.)
    let raf = 0;
    const update = () => {
      raf = 0;
      const readingLine = 140;
      let current = "";
      for (const heading of headings) {
        const el = document.getElementById(heading.id);
        if (el && el.getBoundingClientRect().top <= readingLine) {
          current = heading.id;
        }
      }
      setActiveId(current);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [headings]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (headings.length === 0) return null;

  const inline = variant === "inline";

  return (
    <nav>
      {!inline && (
        <p className="text-micro-label text-muted-foreground pl-4 mb-4">
          <span className="lowercase">On this page</span>
        </p>
      )}
      <ul className={inline ? undefined : "space-y-0.5"}>
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault();
                // Inside the mobile collapsible card — fold it before jumping.
                e.currentTarget.closest("details")?.removeAttribute("open");
                const el = document.getElementById(heading.id);
                if (el) {
                  const y =
                    el.getBoundingClientRect().top + window.scrollY - 100;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className={`
                relative block leading-snug transition-colors duration-200
                ${
                  inline
                    ? "flex min-h-11 items-center py-1.5 text-[14px]"
                    : "py-[5px] text-[13px]"
                }
                ${heading.level === 3 ? "pl-8" : "pl-4"}
                ${
                  activeId === heading.id
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }
              `}
            >
              {activeId === heading.id && (
                <span
                  aria-hidden
                  className="absolute left-0 top-1/2 -translate-y-1/2 size-1.5 rounded-full bg-(--accent-brand)"
                />
              )}
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
      {!inline && (
        <button
          onClick={scrollToTop}
          className="group flex items-baseline gap-1.5 mt-7 pl-4 text-[12px] text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
        >
          <span
            aria-hidden
            className="group-hover:-translate-y-0.5 transition-transform duration-200"
          >
            ↑
          </span>
          Back to top
        </button>
      )}
    </nav>
  );
}
