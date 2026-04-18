import { Hero } from "@/components/landing/Hero";
import { ShowcaseCarousel } from "@/components/landing/ShowcaseCarousel";
import { ValueProps } from "@/components/landing/ValueProps";
import { CaseStudies } from "@/components/landing/CaseStudies";
import { ClientLogos } from "@/components/landing/ClientLogos";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { WorkSamples } from "@/components/landing/WorkSamples";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { JsonLd } from "@/components/shared/JsonLd";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "StartUpBros",
  url: "https://startupbros.dev",
  description:
    "Full-stack development for startups. We build apps, websites, and software — from idea to launch.",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: "https://startupbros.dev/strategy-call",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationJsonLd} />
      <div className="h-[calc(100vh-80px)] flex flex-col">
        <Hero />
        <ShowcaseCarousel />
      </div>
      <ClientLogos />
      <ValueProps />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <WorkSamples />
      <FinalCTA />
    </>
  );
}
