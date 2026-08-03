"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Menu, Moon, Sun, X } from "lucide-react";

const industries = [
  { name: "AI", href: "/industries/ai" },
  { name: "Marketing", href: "/industries/marketing" },
  { name: "B2B", href: "/industries/agencies" },
  { name: "Mobile Apps", href: "/industries/mobile-apps" },
  { name: "Web3", href: "/industries/web3" },
  { name: "Sales", href: "/industries/sales" },
  { name: "Fintech", href: "/industries/fintech" },
  { name: "Ed-Tech", href: "/industries/ed-tech" },
  { name: "Healthcare", href: "/industries/healthcare" },
  { name: "Supply Chain", href: "/industries/b2b" },
];

/* Icon-only theme switch for the pill nav (mounted-guarded, like ThemeToggle). */
function IconThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className={cn("size-8", className)} />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={cn(
        "flex size-8 cursor-pointer items-center justify-center rounded-full transition-colors duration-200",
        className
      )}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? (
        <Sun className="size-4" strokeWidth={1.5} />
      ) : (
        <Moon className="size-4" strokeWidth={1.5} />
      )}
    </button>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Over the home hero the pill floats on dark artwork; past it (or on any
  // other route) it swaps to a dark-on-light treatment (theme-aware).
  const overArt = pathname === "/" && !scrolled;

  const navLinkClass = cn(
    "text-sm font-medium transition-colors duration-200",
    "text-neutral-600 hover:text-neutral-900",
    !overArt && "dark:text-neutral-300 dark:hover:text-white"
  );

  return (
    <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2">
      <div
        className={cn(
          "flex h-14 items-stretch rounded-2xl border backdrop-blur-md transition-colors duration-300",
          overArt
            ? "border-white/10 bg-white/10"
            : "border-black/5 bg-white/40 dark:border-white/10 dark:bg-neutral-900/40"
        )}
      >
        {/* Brand segment — translucent, picks up the artwork behind it */}
        <Link
          href="/"
          className={cn(
            "flex items-center rounded-l-2xl px-5 transition-colors duration-300",
            overArt ? "text-white" : "text-neutral-900 dark:text-white"
          )}
        >
          <span className="text-[17px] font-semibold leading-none tracking-[-0.02em]">
            StartUpBros
          </span>
          <span className="sr-only">EST. 2026 — MVP STUDIO</span>
        </Link>

        {/* Links segment — lighter/whiter capsule half */}
        <div
          className={cn(
            "hidden items-center gap-6 rounded-r-2xl px-5 transition-colors duration-300 lg:flex",
            overArt
              ? "bg-white/85 text-neutral-900"
              : "bg-white/80 text-neutral-900 dark:bg-white/10 dark:text-white"
          )}
        >
          <nav className="flex items-center gap-6">
            <Link href="/portfolio" className={navLinkClass}>
              Case Studies
            </Link>

            {/* Industries dropdown — floats from the pill */}
            <div
              className="relative flex h-14 items-center"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button
                type="button"
                aria-expanded={industriesOpen}
                className={`${navLinkClass} cursor-pointer`}
              >
                Industries
              </button>

              {industriesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                  <div
                    className="grid w-[380px] grid-cols-2 rounded-2xl border border-border p-2 shadow-(--shadow-plate)"
                    style={{ background: "var(--surface-dropdown-bg)" }}
                  >
                    {industries.map((item, i) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-baseline gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors duration-200"
                      >
                        <span className="text-[11px] tabular-nums text-muted-foreground">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/blog" className={navLinkClass}>
              Blog
            </Link>
          </nav>

          <Link
            href="/strategy-call"
            className={cn(
              "text-sm font-semibold transition-colors duration-200",
              overArt
                ? "text-neutral-900 hover:text-neutral-600"
                : "text-neutral-900 hover:text-neutral-600 dark:text-white dark:hover:text-neutral-300"
            )}
          >
            Book a Call
          </Link>

          <IconThemeToggle
            className={cn(
              "text-neutral-600 hover:bg-black/5 hover:text-neutral-900",
              !overArt &&
                "dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-white"
            )}
          />
        </div>

        {/* Mobile segment — links collapse into a Menu trigger */}
        <div
          className={cn(
            "flex items-center gap-1 rounded-r-2xl pl-3 pr-2 transition-colors duration-300 lg:hidden",
            overArt
              ? "bg-white/85 text-neutral-900"
              : "bg-white/80 text-neutral-900 dark:bg-white/10 dark:text-white"
          )}
        >
          <button
            type="button"
            aria-label="Open menu"
            className="flex cursor-pointer items-center gap-2 px-2 py-2 text-sm font-medium"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="size-4" strokeWidth={1.5} />
            Menu
          </button>
          <IconThemeToggle
            className={cn(
              "text-neutral-600 hover:bg-black/5 hover:text-neutral-900",
              !overArt &&
                "dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-white"
            )}
          />
        </div>
      </div>

      {/* Mobile full-screen menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div
            className="fixed inset-0 z-50 bg-black/40"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-background">
            <div className="flex h-20 shrink-0 items-center justify-between px-6">
              <Link
                href="/"
                className="text-[20px] font-semibold leading-none tracking-[-0.02em] text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                StartUpBros
              </Link>
              <button
                type="button"
                aria-label="Close menu"
                className="p-2 text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" strokeWidth={1.5} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col px-6 pt-2 pb-8">
              <Link
                href="/portfolio"
                className="text-h2 border-b border-border py-5"
                onClick={() => setMobileMenuOpen(false)}
              >
                Case Studies
              </Link>

              {/* Industries accordion */}
              <div className="border-b border-border">
                <button
                  type="button"
                  aria-expanded={industriesOpen}
                  onClick={() => setIndustriesOpen(!industriesOpen)}
                  className="flex w-full items-baseline justify-between py-5 text-left"
                >
                  <span className="text-h2">Industries</span>
                  <span
                    className={cn(
                      "text-xl text-muted-foreground transition-transform duration-300",
                      industriesOpen && "rotate-45 text-(--accent-brand)"
                    )}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                {industriesOpen && (
                  <div className="flex flex-col gap-1 pb-6">
                    {industries.map((item, i) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-baseline gap-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="text-[11px] tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/blog"
                className="text-h2 border-b border-border py-5"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>

              <div className="mt-auto pt-10">
                <Link
                  href="/strategy-call"
                  className="btn-pill btn-pill-primary w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book a Call
                  <span className="btn-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
