"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { maskUp, REVEAL_EASE } from "@/lib/animations";

/* Masked line reveal — children slide up out of an overflow clip, the
 * desses/Framer headline entrance. The OUTER element carries whileInView
 * (the inner starts fully clipped, so observing it directly would never
 * intersect); variants propagate to the inner span. */
export function RevealText({
  children,
  delay = 0,
  duration = 0.9,
  once = true,
  className,
  as: Tag = "span",
}: {
  children: React.ReactNode;
  delay?: number;
  /** Reveal length in seconds — shorten for small type, keep 0.9 for display. */
  duration?: number;
  once?: boolean;
  className?: string;
  as?: "span" | "div";
}) {
  const prefersReducedMotion = useReducedMotion();
  /* Promote to its own layer only while moving — a permanent will-change on
   * every headline keeps dozens of layers alive for no reason. */
  const [settled, setSettled] = useState(false);

  if (prefersReducedMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionOuter = Tag === "div" ? motion.div : motion.span;

  return (
    <MotionOuter
      className={cn("block overflow-hidden", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-40px" }}
    >
      <motion.span
        className={cn("block", !settled && "will-change-transform")}
        onAnimationComplete={() => setSettled(true)}
        variants={{
          hidden: maskUp.hidden,
          visible: {
            y: "0%",
            transition: { duration, ease: REVEAL_EASE, delay },
          },
        }}
      >
        {children}
      </motion.span>
    </MotionOuter>
  );
}
