import { Hero } from "@/components/landing/Hero";
import { ShowcaseCarousel } from "@/components/landing/ShowcaseCarousel";
import { ValueProps } from "@/components/landing/ValueProps";
import { CaseStudies } from "@/components/landing/CaseStudies";
import { ClientLogos } from "@/components/landing/ClientLogos";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { WorkSamples } from "@/components/landing/WorkSamples";
import { FinalCTA } from "@/components/landing/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ShowcaseCarousel />
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
