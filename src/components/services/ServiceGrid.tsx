"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ServiceCard } from "./ServiceCard";
import { staggerContainer } from "@/lib/animations";
import type { Service } from "@/types";

interface ServiceGridProps {
  services: Service[];
}

const gridClasses =
  "grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-md overflow-hidden";

export function ServiceGrid({ services }: ServiceGridProps) {
  const prefersReducedMotion = useReducedMotion();

  const filler =
    services.length % 3 !== 0 || services.length % 2 !== 0 ? (
      <div aria-hidden className="hidden md:block bg-background" />
    ) : null;

  if (prefersReducedMotion) {
    return (
      <div className={gridClasses}>
        {services.map((service, i) => (
          <ServiceCard key={service.title} service={service} index={i} />
        ))}
        {filler}
      </div>
    );
  }

  return (
    <motion.div
      className={gridClasses}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {services.map((service, i) => (
        <ServiceCard key={service.title} service={service} index={i} />
      ))}
      {filler}
    </motion.div>
  );
}
