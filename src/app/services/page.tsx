import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-stack app development, custom SaaS frameworks, AI agents & automation, premium web design, and custom business tools.",
};

export default function ServicesPage() {
  return (
    <section className="px-6 lg:px-10 py-20 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading
          title="Our Services"
          subtitle="Everything a lean startup needs to go from idea to launched product."
        />
        <ServiceGrid services={services} />
      </div>
    </section>
  );
}
