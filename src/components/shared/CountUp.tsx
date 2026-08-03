"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/* In-view number count-up for stat values like "12+ hrs", "5→1", "€20m+".
 * Animates the FIRST integer found in the string and keeps everything else
 * verbatim; strings without digits render as-is. */
export function CountUp({
  value,
  duration = 1.4,
  className,
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState<string | null>(null);

  const hasDigit = /\d/.test(value);

  useEffect(() => {
    if (!inView || prefersReducedMotion) return;
    const match = value.match(/\d+/);
    if (!match || match.index === undefined) return;

    const target = parseInt(match[0], 10);
    const prefix = value.slice(0, match.index);
    const suffix = value.slice(match.index + match[0].length);
    const start = performance.now();
    let rafId: number;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 4);
      setDisplay(`${prefix}${Math.round(target * eased)}${suffix}`);
      if (t < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [inView, prefersReducedMotion, value, duration]);

  if (prefersReducedMotion || !hasDigit) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {display ?? value.replace(/\d+/, "0")}
    </span>
  );
}
