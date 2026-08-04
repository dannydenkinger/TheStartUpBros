"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "framer-motion";
import { Children, useRef } from "react";
import type { Variants } from "framer-motion";
import {
  fadeUp,
  fadeIn,
  scaleIn,
  blurIn,
  stagger,
  VIEWPORT,
} from "@/lib/animations";
import { cn } from "@/lib/utils";

type Variant = "fadeUp" | "fadeIn" | "scaleIn" | "blurIn";

const variants: Record<Variant, Variants> = {
  fadeUp,
  fadeIn,
  scaleIn,
  blurIn,
};

interface AnimateInProps {
  children: React.ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
  /** Orchestrate direct children instead of the wrapper: `true` = 80ms
   * cadence, or pass seconds. Each child is wrapped in its own motion div. */
  stagger?: number | boolean;
  /** Replay on re-entry (default: reveal once). */
  once?: boolean;
  /** rootMargin for the viewport trigger (default "-80px"). */
  margin?: string;
  /** Container tag — use "ul"/"ol" so staggered lists keep list semantics. */
  as?: Tag;
  /** Tag for the per-child stagger wrapper (default "div"; use "li" in lists). */
  itemAs?: Tag;
}

type Tag = "div" | "ul" | "ol" | "li" | "span" | "section";

const motionTag = {
  div: motion.div,
  ul: motion.ul,
  ol: motion.ol,
  li: motion.li,
  span: motion.span,
  section: motion.section,
} as const;

export function AnimateIn({
  children,
  variant = "fadeUp",
  delay = 0,
  className,
  stagger: staggerProp,
  once = VIEWPORT.once,
  margin = VIEWPORT.margin,
  as = "div",
  itemAs = "div",
}: AnimateInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    margin: margin as `${number}px`,
  });
  const prefersReducedMotion = useReducedMotion();

  const Container = motionTag[as];
  const Item = motionTag[itemAs];

  if (prefersReducedMotion) {
    /* Same markup as the animated path — the stagger wrappers still render so
     * list semantics (ul > li) survive with motion switched off. */
    const Static = as;
    const StaticItem = itemAs;
    return (
      <Static className={className}>
        {staggerProp
          ? Children.map(children, (node, i) => (
              <StaticItem key={i}>{node}</StaticItem>
            ))
          : children}
      </Static>
    );
  }

  const child = variants[variant];

  if (staggerProp) {
    const cadence = typeof staggerProp === "number" ? staggerProp : 0.08;

    return (
      <Container
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={stagger(cadence, delay)}
        className={cn(className)}
      >
        {Children.map(children, (node, i) => (
          <Item key={i} variants={child}>
            {node}
          </Item>
        ))}
      </Container>
    );
  }

  return (
    <Container
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={child}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </Container>
  );
}
