"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { REVEAL_EASE } from "@/lib/animations";

/* Masked line reveal — children slide up out of an overflow clip, the
 * desses/Framer headline entrance. The OUTER element carries whileInView
 * (the inner starts fully clipped, so observing it directly would never
 * intersect); variants propagate to the inner span. */
export function RevealText({
  children,
  delay = 0,
  once = true,
  className,
  as: Tag = "span",
}: {
  children: React.ReactNode;
  delay?: number;
  once?: boolean;
  className?: string;
  as?: "span" | "div";
}) {
  const prefersReducedMotion = useReducedMotion();

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
        className="block will-change-transform"
        variants={{
          hidden: { y: "110%" },
          visible: {
            y: "0%",
            transition: { duration: 0.9, ease: REVEAL_EASE, delay },
          },
        }}
      >
        {children}
      </motion.span>
    </MotionOuter>
  );
}
