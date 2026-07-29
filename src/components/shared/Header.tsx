"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

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

const navLinkClass =
  "text-micro-label text-muted-foreground hover:text-foreground transition-colors duration-200";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 h-20 border-b border-border">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background: "var(--surface-nav-bg)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      />
      <div className="mx-auto flex h-full max-w-[1360px] items-center justify-between px-6 md:px-10">
        {/* Wordmark */}
        <Link href="/" className="flex items-baseline gap-3">
          <span className="font-display text-[22px] leading-none text-foreground">
            StartUpBros
          </span>
          <span className="hidden lg:inline font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
            EST. 2026 — MVP STUDIO
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-7">
            <Link href="/" className={navLinkClass}>
              Home
            </Link>
            <Link href="/portfolio" className={navLinkClass}>
              Case Studies
            </Link>

            {/* Industries dropdown */}
            <div
              className="relative flex items-center"
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
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-5">
                  <div
                    className="w-[380px] rounded-md border border-border p-2 shadow-(--shadow-plate) grid grid-cols-2"
                    style={{ background: "var(--surface-dropdown-bg)" }}
                  >
                    {industries.map((item, i) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-baseline gap-3 rounded-[2px] px-3 py-2.5 font-mono text-xs font-medium uppercase tracking-[0.08em] text-foreground hover:bg-secondary transition-colors duration-200"
                      >
                        <span className="tabular-nums text-muted-foreground">
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

          <ThemeToggle />

          <Link href="/strategy-call" className="btn-pill btn-pill-primary">
            Book a Call
            <span className="btn-arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>

        {/* Mobile bar controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Open menu"
            className="p-2 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" strokeWidth={1.5} />
          </button>
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
            <div className="flex h-20 shrink-0 items-center justify-between border-b border-border px-6">
              <Link
                href="/"
                className="font-display text-[22px] leading-none text-foreground"
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
                href="/"
                className="text-h1 border-b border-border py-5"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/portfolio"
                className="text-h1 border-b border-border py-5"
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
                  <span className="text-h1">Industries</span>
                  <span
                    className={cn(
                      "font-mono text-lg text-muted-foreground transition-transform duration-300",
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
                        className="flex items-baseline gap-4 py-2 font-mono text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground hover:text-foreground transition-colors duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="tabular-nums">
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
                className="text-h1 border-b border-border py-5"
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
