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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
          <AnimateIn
            delay={services.length * 0.08}
            className="h-full"
          >
            <Link
              href="/strategy-call"
              className="card-elevated group flex h-full flex-col bg-(--accent-brand-soft)"
            >
              <div className="mb-6 flex items-start justify-between">
                <Calendar
                  className="h-5 w-5 text-(--accent-brand)"
                  strokeWidth={1.5}
                />
                <span className="text-xs tabular-nums text-muted-foreground/80">
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
              <span className="btn-pill btn-pill-primary mt-auto self-start">
                Book Strategy Call →
              </span>
            </Link>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
