"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { REVEAL_EASE, springSnappy } from "@/lib/animations";

const WORDMARK = "StartUpBros";

const TYPE_CLASS =
  "block text-[clamp(4rem,9vw,8.5rem)] max-md:text-[clamp(2.5rem,15vw,4rem)] font-semibold leading-[0.9] tracking-[-0.04em] text-white whitespace-nowrap";

/* Closing signature — the eleven letters rise out of one shared clip line on a
 * 25ms cadence (last letter settles at ~0.98s), then the blurple period snaps
 * in. The clip carries padding-bottom cancelled by an equal negative margin so
 * the descender has room while the layout box stays exactly as designed. */
export function FooterWordmark() {
  const prefersReducedMotion = useReducedMotion();
  /* Twelve permanent compositor layers for a word that animates once is a bad
   * trade — the hint is dropped as soon as the line has landed. */
  const [settled, setSettled] = useState(false);

  if (prefersReducedMotion) {
    return (
      <Link href="/" className={TYPE_CLASS}>
        {WORDMARK}
        <span className="text-(--accent-brand)">.</span>
      </Link>
    );
  }

  return (
    <Link
      href="/"
      aria-label="StartUpBros — home"
      className={cn(TYPE_CLASS, "overflow-hidden pb-[0.16em] -mb-[0.16em]")}
    >
      <motion.span
        aria-hidden="true"
        className="block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-15%" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.025 } },
        }}
        onAnimationComplete={() => setSettled(true)}
      >
        {WORDMARK.split("").map((char, i) => (
          <motion.span
            key={`${char}-${i}`}
            className={cn("inline-block", !settled && "will-change-transform")}
            variants={{
              hidden: { y: "125%" },
              visible: {
                y: "0%",
                transition: { duration: 0.72, ease: REVEAL_EASE },
              },
            }}
          >
            {char}
          </motion.span>
        ))}
        <motion.span
          className={cn(
            "inline-block text-(--accent-brand)",
            !settled && "will-change-transform"
          )}
          variants={{
            hidden: { scale: 0, opacity: 0 },
            visible: {
              scale: 1,
              opacity: 1,
              /* lands just after the last letter settles — punctuation last */
              transition: { ...springSnappy, delay: 0.38 },
            },
          }}
        >
          .
        </motion.span>
      </motion.span>
    </Link>
  );
}
