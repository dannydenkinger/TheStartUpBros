import type { Metadata } from "next";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ServiceCard } from "@/components/services/ServiceCard";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-stack app development, custom SaaS frameworks, AI agents & automation, premium web design, and custom business tools.",
};

export default function ServicesPage() {
  return (
    <>
    <section className="px-6 md:px-10 pt-14 md:pt-24 pb-16 md:pb-32">
      <div className="mx-auto max-w-[1600px]">
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
            {/* Same hover grammar as ServiceCard so the sixth tile belongs to
              * the set — lift, icon rise, index dims. */}
            <Link
              href="/strategy-call"
              className="card-elevated group flex h-full flex-col transition-[background-color,transform] duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <div className="mb-6 flex items-start justify-between">
                <Calendar
                  className="h-5 w-5 text-(--accent-brand) transition-transform duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0"
                  strokeWidth={1.5}
                />
                <span className="text-xs tabular-nums text-muted-foreground/80 transition-opacity duration-300 group-hover:opacity-50 motion-reduce:transition-none">
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
              <ul className="mb-8 space-y-3">
                {[
                  { label: "Scope", value: "Within 48 hours" },
                  { label: "Design", value: "Usable by week one" },
                  { label: "Ship", value: "MVP in 2–4 weeks" },
                ].map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-2.5 text-[13px] leading-snug text-muted-foreground"
                  >
                    <span aria-hidden className="label-dot" />
                    <span>
                      {item.label} — {item.value}
                    </span>
                  </li>
                ))}
              </ul>
              <span className="btn-pill btn-pill-primary mt-auto self-start">
                Book Strategy Call
                <span aria-hidden className="btn-arrow">
                  →
                </span>
              </span>
            </Link>
          </AnimateIn>
        </div>
      </div>
    </section>
    <FinalCTA index={null} />
    </>
  );
}
