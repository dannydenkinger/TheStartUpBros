"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { HOVER_EASE, REVEAL_EASE } from "@/lib/animations";
import { ScrollProgress } from "@/components/shared/ScrollProgress";
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

const tools = [
  {
    name: "SaaS Cost Calculator",
    description: "Estimate MVP scope, timeline, and complexity.",
    href: "/tools/saas-cost",
  },
];

/* Dropdown opens with intent: the plate scales/slides from its top edge,
 * then the ten industries ink in on a 28ms cadence — fast enough that the
 * list is readable before the eye finishes travelling down it. */
const plateVariants: Variants = {
  hidden: { opacity: 0, y: -8, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.28,
      ease: REVEAL_EASE,
      staggerChildren: 0.02,
      delayChildren: 0.03,
    },
  },
  exit: {
    opacity: 0,
    y: -6,
    scale: 0.98,
    transition: { duration: 0.16, ease: HOVER_EASE },
  },
};

const plateItemVariants: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.28, ease: REVEAL_EASE } },
  /* deliberately no exit: the rows leaving one by one strands an empty plate
   * on screen — the plate dismisses as a single object instead. */
};

/* The mobile sheet drops as an opaque panel rather than cross-fading (a fade
 * shows the page through it mid-transition and reads cheap) — same curtain
 * gesture as the route transition, played downward. Rows then step in. */
const sheetVariants: Variants = {
  hidden: { y: "-100%" },
  visible: {
    y: 0,
    transition: {
      duration: 0.44,
      ease: REVEAL_EASE,
      staggerChildren: 0.05,
      delayChildren: 0.18,
    },
  },
  exit: {
    y: "-100%",
    transition: { duration: 0.3, ease: HOVER_EASE },
  },
};

const sheetItemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: REVEAL_EASE } },
  exit: { opacity: 0, transition: { duration: 0.12 } },
};

/* Portals the sheet to <body>: the header's translate transform makes it the
 * containing block for fixed children, which would otherwise clip the sheet to
 * the pill's box. Rendered only while the sheet is present (AnimatePresence
 * keeps it mounted through the exit), so `document` is always defined here. */
function SheetPortal({ children }: { children: React.ReactNode }) {
  return createPortal(children, document.body);
}

/* Icon-only theme switch for the pill nav (mounted-guarded, like ThemeToggle). */
function IconThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

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
  const [toolsOpen, setToolsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    let frame = 0;
    // rAF-coalesced so a fast scroll can't queue a state write per event.
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        // Hysteresis: the pill can't strobe on the threshold.
        setScrolled((prev) =>
          prev ? window.scrollY > 540 : window.scrollY > 600
        );
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Lock page scroll behind the mobile menu sheet.
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileMenuOpen]);

  // Over the home hero the pill floats on dark artwork; past it (or on any
  // other route) it swaps to a dark-on-light treatment (theme-aware).
  const overArt = pathname === "/" && !scrolled;

  const navLinkClass = cn(
    "text-sm font-medium transition-colors duration-200",
    "text-neutral-600 hover:text-neutral-900",
    !overArt && "dark:text-neutral-300 dark:hover:text-white"
  );

  const industryLinks = (onNavigate?: () => void) =>
    industries.map((item, i) => (
      <Link
        key={item.name}
        href={item.href}
        onClick={onNavigate}
        className="flex items-baseline gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors duration-200"
      >
        <span className="text-[11px] tabular-nums text-muted-foreground">
          {String(i + 1).padStart(2, "0")}
        </span>
        {item.name}
      </Link>
    ));

  const toolLinks = (onNavigate?: () => void) =>
    tools.map((item, i) => (
      <Link
        key={item.name}
        href={item.href}
        onClick={onNavigate}
        className="flex items-start gap-3 rounded-xl px-3 py-3 text-foreground transition-colors duration-200 hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none"
      >
        <span className="pt-0.5 text-[11px] tabular-nums text-muted-foreground">
          {String(i + 1).padStart(2, "0")}
        </span>
        <span>
          <span className="block text-sm font-medium">{item.name}</span>
          <span className="mt-1 block max-w-[30ch] text-xs leading-relaxed text-muted-foreground">
            {item.description}
          </span>
        </span>
      </Link>
    ));

  const mobileMenu = (
      <motion.div
        key="mobile-sheet"
        role="dialog"
        aria-modal="true"
        className="fixed inset-0 z-50 flex flex-col overflow-y-auto overscroll-contain bg-background lg:hidden"
        variants={sheetVariants}
        initial={prefersReducedMotion ? false : "hidden"}
        animate="visible"
        exit={prefersReducedMotion ? undefined : "exit"}
      >
        <div className="flex h-[72px] shrink-0 items-center justify-between pl-6 pr-3">
          <Link
            href="/"
            className="text-[20px] font-semibold leading-none tracking-[-0.02em] text-foreground"
            onClick={() => setMobileMenuOpen(false)}
          >
            StartUpBros
          </Link>
          <div className="flex items-center gap-1">
            <IconThemeToggle className="size-11 text-muted-foreground hover:bg-black/5 hover:text-foreground dark:hover:bg-white/10" />
            <button
              type="button"
              aria-label="Close menu"
              className="grid size-11 cursor-pointer place-items-center rounded-full text-foreground transition-colors duration-200 hover:bg-black/5 dark:hover:bg-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="size-6" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <nav className="flex flex-1 flex-col px-6 pt-2 pb-8">
          <motion.div variants={sheetItemVariants}>
            <Link
              href="/portfolio"
              className="text-h2 block border-b border-border py-5"
              onClick={() => setMobileMenuOpen(false)}
            >
              Case Studies
            </Link>
          </motion.div>

          {/* Industries accordion */}
          <motion.div variants={sheetItemVariants} className="border-b border-border">
            <button
              type="button"
              aria-expanded={industriesOpen}
              onClick={() => setIndustriesOpen(!industriesOpen)}
              className="flex w-full cursor-pointer items-baseline justify-between py-5 text-left"
            >
              <span className="text-h2">Industries</span>
              <span
                className={cn(
                  "grid size-11 shrink-0 -translate-y-1 translate-x-2 place-items-center self-center text-xl text-muted-foreground transition-transform duration-300",
                  industriesOpen && "rotate-45 text-(--accent-brand)"
                )}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            {industriesOpen &&
              (prefersReducedMotion ? (
                <div className="grid grid-cols-2 gap-x-6 pb-6">
                  {industries.map((item, i) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex min-h-11 items-center gap-3 py-1.5 text-[15px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="text-[11px] tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <motion.div
                  className="grid grid-cols-2 gap-x-6 pb-6"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.03 } },
                  }}
                >
                  {industries.map((item, i) => (
                    <motion.div key={item.name} variants={plateItemVariants}>
                      <Link
                        href={item.href}
                        className="flex min-h-11 items-center gap-3 py-1.5 text-[15px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="text-[11px] tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              ))}
          </motion.div>

          <motion.div variants={sheetItemVariants}>
            <Link
              href="/blog"
              className="text-h2 block border-b border-border py-5"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
          </motion.div>

          {/* Tools accordion */}
          <motion.div variants={sheetItemVariants} className="border-b border-border">
            <button
              type="button"
              aria-expanded={toolsOpen}
              onClick={() => setToolsOpen(!toolsOpen)}
              className="flex w-full cursor-pointer items-baseline justify-between py-5 text-left"
            >
              <span className="text-h2">Tools</span>
              <span
                className={cn(
                  "grid size-11 shrink-0 -translate-y-1 translate-x-2 place-items-center self-center text-xl text-muted-foreground transition-transform duration-300",
                  toolsOpen && "rotate-45 text-(--accent-brand)"
                )}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            {toolsOpen &&
              (prefersReducedMotion ? (
                <div className="pb-6">{toolLinks(() => setMobileMenuOpen(false))}</div>
              ) : (
                <motion.div
                  className="pb-6"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.03 } },
                  }}
                >
                  {tools.map((item, i) => (
                    <motion.div key={item.name} variants={plateItemVariants}>
                      <Link
                        href={item.href}
                        className="flex min-h-11 items-start gap-3 rounded-xl py-2 text-foreground transition-colors duration-200 hover:text-(--accent-brand) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="pt-0.5 text-[11px] tabular-nums text-muted-foreground">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>
                          <span className="block text-[15px] font-medium">
                            {item.name}
                          </span>
                          <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                            {item.description}
                          </span>
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              ))}
          </motion.div>

          <motion.div variants={sheetItemVariants} className="mt-auto pt-10">
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
          </motion.div>
        </nav>
      </motion.div>
  );

  return (
    <>
      <ScrollProgress />
      <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2">
        {/* Entrance and scroll-state live on separate layers so the drop-in
         * delay never leaks into the later scroll transitions. */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: -22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: REVEAL_EASE, delay: 0.15 }}
        >
          <motion.div
            className={cn(
              "flex h-14 items-stretch rounded-2xl border backdrop-blur-md transition-colors duration-300",
              overArt
                ? "border-white/10 bg-white/10"
                : "border-black/5 bg-white/40 dark:border-white/10 dark:bg-neutral-900/40"
            )}
            animate={
              prefersReducedMotion ? undefined : { scale: scrolled ? 0.98 : 1 }
            }
            transition={{ duration: 0.5, ease: REVEAL_EASE }}
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

                  <AnimatePresence>
                    {industriesOpen && (
                      <div
                        key="industries-plate"
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                      >
                        {prefersReducedMotion ? (
                          <div
                            className="grid w-[380px] grid-cols-2 rounded-2xl border border-border p-2 shadow-(--shadow-plate)"
                            style={{ background: "var(--surface-dropdown-bg)" }}
                          >
                            {industryLinks()}
                          </div>
                        ) : (
                          <motion.div
                            key="industries-plate"
                            className="grid w-[380px] grid-cols-2 rounded-2xl border border-border p-2 shadow-(--shadow-plate) will-change-transform"
                            style={{
                              background: "var(--surface-dropdown-bg)",
                              transformOrigin: "top center",
                            }}
                            variants={plateVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                          >
                            {industries.map((item, i) => (
                              <motion.div
                                key={item.name}
                                variants={plateItemVariants}
                              >
                                <Link
                                  href={item.href}
                                  className="flex items-baseline gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors duration-200"
                                >
                                  <span className="text-[11px] tabular-nums text-muted-foreground">
                                    {String(i + 1).padStart(2, "0")}
                                  </span>
                                  {item.name}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    )}
                  </AnimatePresence>
                </div>

                <Link href="/blog" className={navLinkClass}>
                  Blog
                </Link>

                {/* Tools dropdown — uses the same plate language as Industries */}
                <div
                  className="relative flex h-14 items-center"
                  onMouseEnter={() => setToolsOpen(true)}
                  onMouseLeave={() => setToolsOpen(false)}
                  onFocus={() => setToolsOpen(true)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) {
                      setToolsOpen(false);
                    }
                  }}
                >
                  <button
                    type="button"
                    aria-expanded={toolsOpen}
                    className={`${navLinkClass} cursor-pointer`}
                  >
                    Tools
                  </button>

                  <AnimatePresence>
                    {toolsOpen && (
                      <div
                        key="tools-plate"
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                      >
                        {prefersReducedMotion ? (
                          <div
                            className="w-[330px] rounded-2xl border border-border p-2 shadow-(--shadow-plate)"
                            style={{ background: "var(--surface-dropdown-bg)" }}
                          >
                            {toolLinks()}
                          </div>
                        ) : (
                          <motion.div
                            key="tools-plate"
                            className="w-[330px] rounded-2xl border border-border p-2 shadow-(--shadow-plate) will-change-transform"
                            style={{
                              background: "var(--surface-dropdown-bg)",
                              transformOrigin: "top center",
                            }}
                            variants={plateVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                          >
                            {tools.map((item, i) => (
                              <motion.div
                                key={item.name}
                                variants={plateItemVariants}
                              >
                                <Link
                                  href={item.href}
                                  className="flex items-start gap-3 rounded-xl px-3 py-3 text-foreground transition-colors duration-200 hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none"
                                >
                                  <span className="pt-0.5 text-[11px] tabular-nums text-muted-foreground">
                                    {String(i + 1).padStart(2, "0")}
                                  </span>
                                  <span>
                                    <span className="block text-sm font-medium">
                                      {item.name}
                                    </span>
                                    <span className="mt-1 block max-w-[30ch] text-xs leading-relaxed text-muted-foreground">
                                      {item.description}
                                    </span>
                                  </span>
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    )}
                  </AnimatePresence>
                </div>
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
                "flex items-stretch gap-0.5 rounded-r-2xl pl-2 pr-1.5 transition-colors duration-300 lg:hidden",
                overArt
                  ? "bg-white/85 text-neutral-900"
                  : "bg-white/80 text-neutral-900 dark:bg-white/10 dark:text-white"
              )}
            >
              <button
                type="button"
                aria-label="Open menu"
                className="flex min-w-11 cursor-pointer items-center gap-2 px-2.5 text-sm font-medium"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="size-4" strokeWidth={1.5} />
                Menu
              </button>
              <IconThemeToggle
                className={cn(
                  "size-11 self-center text-neutral-600 hover:bg-black/5 hover:text-neutral-900",
                  !overArt &&
                    "dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-white"
                )}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Mobile full-screen menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <SheetPortal key="mobile-sheet">{mobileMenu}</SheetPortal>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
