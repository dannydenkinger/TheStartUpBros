"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CURTAIN_EASE, REVEAL_EASE } from "@/lib/animations";

/* Module scope survives template remounts but resets on a hard load — so the
 * curtain only ever plays on client-side route changes, never on first paint. */
let hasNavigated = false;

/* Route transition — a black grain band (the site's own divider material)
 * wipes up off the viewport with a blurple trailing edge while the incoming
 * page fades up beneath it. template.tsx cannot run exit animations, so the
 * whole gesture is an entrance: 420ms total, and because the panel breaks away
 * on an ease-OUT curve the page is uncovering within ~50ms — no added latency,
 * just a wipe. Static under prefers-reduced-motion. */
export default function Template({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion();
  const [curtain, setCurtain] = useState(() => hasNavigated);

  useEffect(() => {
    hasNavigated = true;
  }, []);

  if (prefersReducedMotion) return <>{children}</>;

  return (
    <>
      {curtain && (
        <motion.div
          aria-hidden="true"
          data-route-curtain=""
          className="pointer-events-none fixed inset-0 z-[60] will-change-transform"
          style={{ background: "var(--band)" }}
          initial={{ y: 0 }}
          animate={{ y: "-101%" }}
          transition={{ duration: 0.42, ease: CURTAIN_EASE }}
          onAnimationComplete={() => setCurtain(false)}
        >
          {/* .grain is unlayered CSS and sets position:relative — it has to
           * live on a child, or it would beat the `fixed` utility here. */}
          <span className="grain block h-full w-full" />
          {/* Leading edge: a blurple glow + hairline. In dark mode the black
           * panel is near-invisible against the page, so the edge is what
           * actually carries the wipe — it has to read in both themes. */}
          <span
            className="absolute inset-x-0 bottom-0 block h-[180px]"
            style={{
              background:
                "linear-gradient(to top, var(--accent-brand-glow), transparent)",
            }}
          />
          <span className="absolute inset-x-0 bottom-0 block h-[3px] bg-(--accent-brand)" />
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: REVEAL_EASE }}
      >
        {children}
      </motion.div>
    </>
  );
}
