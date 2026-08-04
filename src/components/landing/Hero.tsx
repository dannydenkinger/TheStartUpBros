"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { REVEAL_EASE } from "@/lib/animations";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { RevealText } from "@/components/shared/RevealText";
import { ClientLogos } from "@/components/landing/ClientLogos";

const statusItems = [
  { label: "Scope", value: "Within 48 hours" },
  { label: "Design", value: "Usable by week one" },
  { label: "Ship", value: "MVP in 2–4 weeks" },
];

/* Hero entrances run off MOUNT, not whileInView — the hero is above the fold,
 * so a scroll-triggered reveal would be a lie. One ladder, one easing, so the
 * screen assembles in a deliberate order instead of arriving all at once. */
function Rise({
  children,
  delay = 0,
  y = 22,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: REVEAL_EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/* Pure-CSS gradient ribbon — one broad electric-blurple arc over black.
 * A giant blurred ring centered at the hero's bottom-left corner: its
 * visible arc enters the top edge ~40% across, bows right, and exits the
 * bottom edge ~75% across, reading as a wide curved beam sweeping from
 * top-center to bottom-right. Layered under .grain. */
function RibbonArt({ animate }: { animate: boolean }) {
  // All rings share this geometry: circle centered at (-8% W, 100% H),
  // radius ~77% of the band width.
  const ring =
    "absolute left-[-8%] top-full aspect-square w-[155%] rounded-full";

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className={cn("absolute inset-0", animate && "animate-hero-float")}>
        {/* Ambient wash where the beam enters, top-center */}
        <div
          className="absolute -top-[24%] right-[28%] h-[70%] w-[38%] rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(82,39,255,0.26), transparent 74%)",
            filter: "blur(90px)",
          }}
        />
        {/* Ribbon — outer soft band */}
        <div
          className={ring}
          style={{
            border: "230px solid rgba(82,39,255,0.5)",
            filter: "blur(100px)",
            transform: "translate(-50%, -50%)",
          }}
        />
        {/* Ribbon — main band */}
        <div
          className={ring}
          style={{
            border: "150px solid rgba(98,58,255,0.95)",
            filter: "blur(64px)",
            transform: "translate(-50%, -50%) scale(0.99)",
          }}
        />
        {/* Ribbon — hot edge highlight */}
        <div
          className={ring}
          style={{
            border: "42px solid rgba(178,150,255,1)",
            filter: "blur(54px)",
            transform: "translate(-50%, -50%) scale(0.984)",
          }}
        />
        {/* Faint second arc grazing the upper-left, desses-style */}
        <div
          className="absolute left-[10%] top-[-70%] aspect-square w-[130%] rounded-full"
          style={{
            border: "70px solid rgba(82,39,255,0.2)",
            filter: "blur(80px)",
            transform: "translate(-50%, -50%)",
          }}
        />
        {/* Counter-glow where the ribbon exits, bottom right */}
        <div
          className="absolute -bottom-[28%] right-[-8%] h-[70%] w-[40%] rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(98,58,255,0.32), transparent 72%)",
            filter: "blur(90px)",
          }}
        />
      </div>
    </div>
  );
}

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const ribbonY = useTransform(scrollYProgress, [0, 1], [0, 140]);

  /* Pointer drift — the light source leans toward the cursor. Fine pointers
   * only (no phantom drift on touch), and the springs make it lag the cursor
   * so it reads as a heavy volume of light, not a cursor-follower. */
  const [pointerFine, setPointerFine] = useState(false);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const driftX = useSpring(pointerX, {
    stiffness: 42,
    damping: 22,
    mass: 1.1,
  });
  const driftY = useSpring(pointerY, {
    stiffness: 42,
    damping: 22,
    mass: 1.1,
  });

  useEffect(() => {
    if (prefersReducedMotion) return;
    const mq = window.matchMedia("(pointer: fine)");
    const sync = () => setPointerFine(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [prefersReducedMotion]);

  const pointerActive = pointerFine && !prefersReducedMotion;

  useEffect(() => {
    if (!pointerActive) return;
    // Viewport size is cached and only re-read on resize — the move handler
    // itself never touches layout.
    let vw = window.innerWidth;
    let vh = window.innerHeight;
    const onResize = () => {
      vw = window.innerWidth;
      vh = window.innerHeight;
    };
    const onMove = (e: PointerEvent) => {
      // Once the hero has scrolled away there is nothing to light — bail
      // before touching the springs. Reading the motion value costs no DOM.
      if (scrollYProgress.get() > 0.9) return;
      pointerX.set((e.clientX / vw - 0.5) * 44);
      pointerY.set((e.clientY / vh - 0.5) * 26);
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
    };
  }, [pointerActive, pointerX, pointerY, scrollYProgress]);

  /* Hover choreography is transform-based, so it has to be switched off in JS
   * (a `motion-reduce:` utility can't cancel a `translate`/`scale` utility). */
  const hoverSwap = prefersReducedMotion
    ? ""
    : "transition-transform duration-[450ms] ease-[cubic-bezier(0.44,0,0.56,1)]";

  return (
    <section ref={sectionRef} className="-mt-[80px] flex flex-col">
      {/* The hero screen — full-bleed dark card, rounded bottom corners so it
       * reads as a dark card ending on the light page. Starts at viewport top
       * behind the floating pill nav. */}
      <div className="band grain relative flex min-h-svh flex-col overflow-hidden max-md:rounded-b-[2rem]">
        <motion.div
          aria-hidden
          className="absolute inset-0"
          style={prefersReducedMotion ? undefined : { y: ribbonY }}
        >
          <motion.div
            className="absolute inset-0"
            style={pointerActive ? { x: driftX, y: driftY } : undefined}
          >
            <RibbonArt animate={!prefersReducedMotion} />
          </motion.div>
        </motion.div>

        {/* Screen content */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-center px-6 pt-28 pb-12 md:px-10 md:pt-32">
          {/* Founder eyebrow — borderless dot label */}
          <Rise>
            <div>
              <Link
                href="/strategy-call"
                className="mb-8 inline-flex items-center gap-2 text-[13px] text-neutral-400 transition-colors hover:text-white"
              >
                <span
                  aria-hidden
                  className="size-1.5 shrink-0 rounded-full bg-(--accent-brand)"
                />
                Founded by the Denkinger brothers — taking first clients
              </Link>
            </div>
          </Rise>

          {/* Headline — white base, one muted-gray inline emphasis */}
          <h1 className="text-display max-w-[880px]">
            <RevealText delay={0.06}>Launch-Ready Products,</RevealText>
            <RevealText delay={0.14}>Built In Weeks</RevealText>
            <RevealText delay={0.22}>
              <span className="text-white/55">— Not Months</span>
            </RevealText>
          </h1>

          {/* Subtitle */}
          <Rise delay={0.30}>
            <p className="mt-10 max-w-[36rem] text-base leading-relaxed text-white/85">
              Full-stack design and development for startups that need to
              move&nbsp;now.
            </p>
          </Rise>

          {/* CTAs — one white capsule + one plain text link */}
          <Rise delay={0.38}>
            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
              <MagneticButton>
                <Link
                  href="/strategy-call"
                  className={cn(
                    "group inline-flex h-12 items-center gap-3 rounded-full bg-white pl-1.5 pr-6 text-sm font-medium text-neutral-900 shadow-lg",
                    !prefersReducedMotion &&
                      "transition-transform duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] hover:scale-[1.02]",
                  )}
                >
                  {/* Arrow swap — the resting arrow exits right while a second
                   * one enters from the left, so the capsule reads as "go". */}
                  <span className="grid size-9 place-items-center overflow-hidden rounded-full bg-(--accent-brand) text-white">
                    <ArrowRight
                      className={cn(
                        "col-start-1 row-start-1 size-4",
                        hoverSwap,
                        !prefersReducedMotion &&
                          "group-hover:translate-x-[170%]",
                      )}
                      strokeWidth={2}
                    />
                    {!prefersReducedMotion && (
                      <ArrowRight
                        aria-hidden
                        className={cn(
                          "col-start-1 row-start-1 size-4 -translate-x-[170%] group-hover:translate-x-0",
                          hoverSwap,
                        )}
                        strokeWidth={2}
                      />
                    )}
                  </span>
                  Book A Call
                </Link>
              </MagneticButton>
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-400 transition-colors hover:text-white"
              >
                See Design Gallery
                <span
                  aria-hidden
                  className={cn(
                    !prefersReducedMotion &&
                      "transition-transform duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:translate-x-1",
                  )}
                >
                  →
                </span>
              </Link>
            </div>
          </Rise>
        </div>

        {/* Bottom block — status line + logo row, pinned near the hero's
         * bottom edge. These run off the same mount ladder as the headline
         * (a whileInView reveal would never fire here: at the bottom of a
         * viewport-height screen it sits outside useInView's -80px margin). */}
        <div className="relative z-10 w-full px-6 pb-12 md:px-12">
          {/* Status line — borderless dot items, wiping in left to right */}
          <div className="mb-10 flex flex-wrap items-center gap-x-8 gap-y-2">
            {statusItems.map((item, i) => (
              <Rise key={item.label} delay={0.46 + i * 0.06} y={14}>
                <span className="inline-flex items-center gap-2.5 text-[13px] text-neutral-400 whitespace-nowrap">
                  <span
                    aria-hidden
                    className="size-1 shrink-0 rounded-full bg-(--accent-brand)"
                  />
                  {item.label} — {item.value}
                </span>
              </Rise>
            ))}
          </div>

          {/* Inspired-by tape — the one logo strip on the landing page.
           * Fades rather than rises: it is already in horizontal motion. */}
          <Rise delay={0.62} y={0}>
            <ClientLogos />
          </Rise>
        </div>
      </div>
    </section>
  );
}
