"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, fadeIn, scaleIn } from "@/lib/animations";
import { cn } from "@/lib/utils";

type Variant = "fadeUp" | "fadeIn" | "scaleIn";

const variants: Record<Variant, typeof fadeUp> = {
  fadeUp,
  fadeIn,
  scaleIn,
};

interface AnimateInProps {
  children: React.ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
}

export function AnimateIn({
  children,
  variant = "fadeUp",
  delay = 0,
  className,
}: AnimateInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[variant]}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
