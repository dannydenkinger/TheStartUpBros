"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ServiceCard } from "./ServiceCard";
import { staggerContainer } from "@/lib/animations";
import type { Service } from "@/types";

interface ServiceGridProps {
  services: Service[];
}

export function ServiceGrid({ services }: ServiceGridProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, i) => (
          <ServiceCard key={service.title} service={service} index={i} />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {services.map((service, i) => (
        <ServiceCard key={service.title} service={service} index={i} />
      ))}
    </motion.div>
  );
}
