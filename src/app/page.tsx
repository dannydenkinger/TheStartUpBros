import { Hero } from "@/components/landing/Hero";
import { ValueProps } from "@/components/landing/ValueProps";
import { CaseStudies } from "@/components/landing/CaseStudies";
import { StatementBand } from "@/components/landing/StatementBand";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { WorkSamples } from "@/components/landing/WorkSamples";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { siteUrl } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/JsonLd";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "StartUpBros",
  url: siteUrl,
  description:
    "Full-stack development for startups. We build apps, websites, and software — from idea to launch.",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: `${siteUrl}/strategy-call`,
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationJsonLd} />
      <Hero />
      <ValueProps />
      <CaseStudies />
      <StatementBand />
      <Testimonials />
      <FAQ />
      <WorkSamples />
      <FinalCTA />
    </>
  );
}
