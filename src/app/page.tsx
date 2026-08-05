import { Hero } from "@/components/landing/Hero";
import { ValueProps } from "@/components/landing/ValueProps";
import { CaseStudies } from "@/components/landing/CaseStudies";
import { StatementBand } from "@/components/landing/StatementBand";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { faqs } from "@/data/faqs";
import { WorkSamples } from "@/components/landing/WorkSamples";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { siteUrl } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/JsonLd";

/* ProfessionalService rather than bare Organization — it carries the service
 * catalogue and area served, which is what a local/service query matches on. */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#organization`,
  name: "StartUpBros",
  url: siteUrl,
  image: `${siteUrl}/og.png`,
  description:
    "MVP development agency for startups. We design and build your minimum viable product in 2–4 weeks, hand over the code, and stay on retainer for ongoing updates and maintenance.",
  slogan: "Launch-Ready Products, Built In Weeks — Not Months",
  founder: [
    { "@type": "Person", name: "Anthony Denkinger" },
    { "@type": "Person", name: "Danny Denkinger" },
  ],
  areaServed: { "@type": "Country", name: "United States" },
  knowsAbout: [
    "MVP development",
    "App development",
    "Website design",
    "Search engine optimization",
    "SaaS development",
    "AI integration",
    "Product design",
  ],
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: `${siteUrl}/strategy-call`,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: [
      ["MVP Development", "Design and build a launch-ready minimum viable product in 2–4 weeks, with full code handover."],
      ["Custom App Development", "Full-stack web and mobile applications built from scratch."],
      ["Website Design", "High-converting marketing sites and landing pages."],
      ["Search Engine Optimization", "Technical SEO and content strategy to rank for the terms your customers search."],
      ["AI Integration", "Custom AI agents, chatbots, and intelligent product features."],
      ["Maintenance & Updates Retainer", "Ongoing development, updates, and maintenance after handoff."],
    ].map(([name, description]) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name, description },
    })),
  },
};

/* The FAQ block is the site's best rich-result candidate — 15 answered
 * questions already on the page, so the schema describes real visible copy. */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: siteUrl,
  name: "StartUpBros",
  publisher: { "@id": `${siteUrl}/#organization` },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationJsonLd} />
      <JsonLd data={websiteJsonLd} />
      <JsonLd data={faqJsonLd} />
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
