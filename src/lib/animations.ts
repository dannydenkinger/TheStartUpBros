import type { Variants } from "framer-motion";

/* House motion language (desses-style):
 * entrances — long easeOutQuint reveals; hovers — 0.3s cubic-bezier(0.44,0,0.56,1)
 * (hover timing lives in globals.css). */
export const REVEAL_EASE = [0.22, 1, 0.36, 1] as const;

/* Hover/interaction ease — mirrors the CSS hover curve so JS-driven hovers
 * (media zoom, magnetic CTAs) sit in the same family as the CSS ones. */
export const HOVER_EASE = [0.44, 0, 0.56, 1] as const;

/* Curtain/wipe ease — easeOutCubic. Panels that LEAVE the viewport must break
 * away immediately (a symmetric curve holds the screen covered for ~150ms and
 * reads as latency); the slow tail lands off-screen where nobody sees it. */
export const CURTAIN_EASE = [0.33, 1, 0.68, 1] as const;

/* Exit ease — easeIn. Things that LEAVE should accelerate away; reusing the
 * decelerating REVEAL_EASE on an exit makes removal read as hesitation. Pair
 * with a duration roughly half the matching entrance. */
export const EXIT_EASE = [0.4, 0, 1, 1] as const;

/* Shared viewport trigger so every section fires at the same sightline. */
export const VIEWPORT = { once: true, margin: "-80px" } as const;

/* Springs for interactive (pointer-driven) elements only — never for
 * scroll-linked reveals, which stay on the eased curves above. */
export const springSoft = {
  type: "spring",
  stiffness: 220,
  damping: 26,
  mass: 0.9,
} as const;

export const springSnappy = {
  type: "spring",
  stiffness: 420,
  damping: 34,
  mass: 0.7,
} as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: REVEAL_EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: REVEAL_EASE },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: REVEAL_EASE },
  },
};

/* Blur-in — for a single hero-adjacent element per page, never for grids.
 * `filter` is compositor-friendly but blur is fill-rate heavy: keep the
 * blurred element small and the radius short. */
export const blurIn: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: REVEAL_EASE },
  },
};

/* Masked line/word reveal — pair with an `overflow-hidden` parent. */
export const maskUp: Variants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.9, ease: REVEAL_EASE },
  },
};

/* Orchestration helper — a container variant with tunable cadence.
 * `stagger(0.05, 0.1)` = 50ms between children, 100ms before the first. */
export function stagger(children = 0.08, delayChildren = 0): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: children, delayChildren },
    },
  };
}
