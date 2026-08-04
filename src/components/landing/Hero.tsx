"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { RevealText } from "@/components/shared/RevealText";
import { ClientLogos } from "@/components/landing/ClientLogos";

const statusItems = [
  { label: "Scope", value: "Within 48 hours" },
  { label: "Design", value: "Usable by week one" },
  { label: "Ship", value: "MVP in 2–4 weeks" },
];

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
          <RibbonArt animate={!prefersReducedMotion} />
        </motion.div>

        {/* Screen content */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-center px-6 pt-28 pb-12 md:px-10 md:pt-32">
          {/* Founder eyebrow — borderless dot label */}
          <AnimateIn variant="fadeUp">
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
          </AnimateIn>

          {/* Headline — white base, one muted-gray inline emphasis */}
          <h1 className="text-display max-w-[880px]">
            <RevealText delay={0.05}>Launch-Ready Products,</RevealText>
            <RevealText delay={0.16}>Built In Weeks</RevealText>
            <RevealText delay={0.27}>
              <span className="text-white/55">— Not Months</span>
            </RevealText>
          </h1>

          {/* Subtitle */}
          <AnimateIn variant="fadeUp" delay={0.35}>
            <p className="mt-10 max-w-[36rem] text-base leading-relaxed text-white/85">
              Full-stack design and development for startups that need to
              move&nbsp;now.
            </p>
          </AnimateIn>

          {/* CTAs — one white capsule + one plain text link */}
          <AnimateIn variant="fadeUp" delay={0.45}>
            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
              <MagneticButton>
                <Link
                  href="/strategy-call"
                  className="group inline-flex h-12 items-center gap-3 rounded-full bg-white pl-1.5 pr-6 text-sm font-medium text-neutral-900 shadow-lg transition-transform duration-200 hover:scale-[1.02]"
                >
                  <span className="grid size-9 place-items-center rounded-full bg-(--accent-brand) text-white transition-transform duration-200 group-hover:translate-x-0.5">
                    <ArrowRight className="size-4" strokeWidth={2} />
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
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
            </div>
          </AnimateIn>
        </div>

        {/* Bottom block — status line + static logo row, pinned near the
         * hero's bottom edge. No AnimateIn here: at the bottom of a
         * viewport-height screen it would sit outside useInView's -80px
         * margin and never fade in. */}
        <div className="relative z-10 w-full px-6 pb-12 md:px-12">
          {/* Status line — borderless dot items */}
          <div className="mb-10 flex flex-wrap items-center gap-x-8 gap-y-2">
            {statusItems.map((item) => (
              <span
                key={item.label}
                className="inline-flex items-center gap-2.5 text-[13px] text-neutral-400 whitespace-nowrap"
              >
                <span
                  aria-hidden
                  className="size-1 shrink-0 rounded-full bg-(--accent-brand)"
                />
                {item.label} — {item.value}
              </span>
            ))}
          </div>

          {/* Inspired-by tape — the one logo strip on the landing page */}
          <ClientLogos />
        </div>
      </div>
    </section>
  );
}
