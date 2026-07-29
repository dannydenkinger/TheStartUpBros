import type { Metadata } from "next";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ServiceCard } from "@/components/services/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-stack app development, custom SaaS frameworks, AI agents & automation, premium web design, and custom business tools.",
};

export default function ServicesPage() {
  return (
    <section className="px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-[1360px]">
        <SectionHeader
          index="01"
          label="CAPABILITIES"
          title="Our Services"
          intro="Everything a lean startup needs to go from idea to launched product."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-md overflow-hidden">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
          <AnimateIn
            delay={services.length * 0.08}
            className="h-full bg-background"
          >
            <Link
              href="/strategy-call"
              className="group flex h-full flex-col bg-background p-8 hover:bg-secondary/60 transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <Calendar className="h-5 w-5 text-foreground" strokeWidth={1.5} />
                <span className="font-mono text-sm tracking-[0.04em] text-muted-foreground">
                  {String(services.length + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-h3 text-foreground mb-3">
                Book a Strategy Call
              </h3>
              <p className="text-caption text-muted-foreground mb-6">
                Not sure which service fits? We&apos;ll scope the fastest path
                to launch on a free call.
              </p>
              <span className="mt-auto text-micro-label text-foreground group-hover:text-(--accent-brand) transition-colors duration-200">
                Book Strategy Call →
              </span>
            </Link>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
