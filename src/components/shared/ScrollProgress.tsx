"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

/* Hairline read-progress rail pinned to the very top edge of the viewport.
 * Scroll-linked via motion values (no React state, no layout reads), scaleX
 * only. Fades in after the first 2% so it never sits as a stray mark at rest.
 * Removed entirely under prefers-reduced-motion. */
export function ScrollProgress() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    mass: 0.35,
  });
  const opacity = useTransform(scrollYProgress, [0, 0.015, 0.03], [0, 0, 1]);

  if (prefersReducedMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[55] h-[2px] origin-left bg-(--accent-brand) will-change-transform"
      style={{ scaleX, opacity }}
    />
  );
}
