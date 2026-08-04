"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { springSoft } from "@/lib/animations";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  /** Fraction of the cursor's offset from centre that the button follows. */
  strength?: number;
  /** Hard cap on the pull, in px — keeps the effect a nudge, not a drag. */
  max?: number;
}

/* Magnetic CTA — the button leans toward the cursor and springs home on exit.
 * Mouse-only (a touch pointer would fire it as a jump on tap), off under
 * prefers-reduced-motion. The rect is measured once per hover, so pointermove
 * only writes motion values — no layout reads in the move handler. */
export function MagneticButton({
  children,
  className,
  strength = 0.25,
  max = 8,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rect = useRef<DOMRect | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, springSoft);
  const springY = useSpring(y, springSoft);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const clamp = (v: number) => Math.max(-max, Math.min(max, v));

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
      onPointerEnter={(e) => {
        if (e.pointerType !== "mouse") return;
        rect.current = ref.current?.getBoundingClientRect() ?? null;
      }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse" || !rect.current) return;
        const r = rect.current;
        x.set(clamp((e.clientX - (r.left + r.width / 2)) * strength));
        y.set(clamp((e.clientY - (r.top + r.height / 2)) * strength));
      }}
      onPointerLeave={() => {
        rect.current = null;
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}
