"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

/* Reading progress hairline.
 *
 * Wraps the prose column so the measurement target is the actual reading
 * measure — not the whole document, which would include the hero plate, the
 * related-posts grid and the CTA band and therefore lie about how far in you
 * are. The bar is a 2px scaleX-only strip pinned to the very top of the
 * viewport (the header floats at top-4, so they never collide). It starts at
 * scaleX(0), which is already invisible — no separate opacity fade, because a
 * second scroll-linked value here gets hardware-accelerated onto a different
 * code path from the spring and drifts out of step with it.
 *
 * scaleX only — no width animation, nothing that can force layout on a scroll
 * frame. */
export function ReadingProgress({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Lenis already smooths the scroll position; this spring only takes the
  // last edge off so the hairline never looks quantised on trackpad flicks.
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 42,
    restDelta: 0.0005,
  });
  return (
    // `relative` is required, not cosmetic: framer measures a static scroll
    // target against the wrong offset parent and warns about it.
    <div ref={ref} className={cn("relative", className)} data-blog-content>
      {!prefersReducedMotion && (
        <motion.span
          aria-hidden
          style={{ scaleX }}
          className="fixed inset-x-0 top-0 z-40 h-[2px] origin-left bg-(--accent-brand) will-change-transform"
        />
      )}
      {children}
    </div>
  );
}
