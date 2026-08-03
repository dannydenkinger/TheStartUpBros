"use client";

import { motion, useReducedMotion } from "framer-motion";
import { REVEAL_EASE } from "@/lib/animations";

/* Route-transition fade: template.tsx remounts on navigation, so each page
 * arrives with a quick fade-up. Static under prefers-reduced-motion. */
export default function Template({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return <>{children}</>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: REVEAL_EASE }}
    >
      {children}
    </motion.div>
  );
}
