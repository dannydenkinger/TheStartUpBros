"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BentoItemProps {
  children: React.ReactNode;
  colSpan?: 1 | 2;
  rowSpan?: 1 | 2;
  className?: string;
}

export function BentoItem({
  children,
  colSpan = 1,
  rowSpan = 1,
  className,
}: BentoItemProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div
        className={cn(
          colSpan === 2 && "md:col-span-2",
          rowSpan === 2 && "md:row-span-2",
          className
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={cn(
        colSpan === 2 && "md:col-span-2",
        rowSpan === 2 && "md:row-span-2",
        className
      )}
      whileHover={{
        scale: 1.02,
        borderColor: "rgba(255,255,255,0.3)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
