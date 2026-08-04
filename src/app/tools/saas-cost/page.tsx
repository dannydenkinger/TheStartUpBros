import type { Metadata } from "next";
import { ogImage, siteUrl } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/JsonLd";
import { SaaSCostCalculator } from "@/components/tools/SaaSCostCalculator";
import { FinalCTA } from "@/components/landing/FinalCTA";

export const metadata: Metadata = {
  title: "SaaS Cost Calculator | StartUpBros",
  description:
    "Estimate the cost and timeline for your SaaS MVP. Toggle features, see complexity tiers, and get a ballpark scope — free.",
  openGraph: {
    title: "SaaS Cost Calculator | StartUpBros",
    description:
      "Estimate the cost and timeline for your SaaS MVP. Toggle features, see complexity tiers, and get a ballpark scope — free.",
    url: `${siteUrl}/tools/saas-cost`,
    images: [ogImage],
  },
};

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "SaaS Cost Calculator",
  description:
    "Free tool to estimate the scope, timeline, and complexity of a SaaS MVP build.",
  url: `${siteUrl}/tools/saas-cost`,
  applicationCategory: "BusinessApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  provider: {
    "@type": "Organization",
    name: "StartUpBros",
    url: siteUrl,
  },
};

export default function SaaSCostPage() {
  return (
    <>
      <JsonLd data={webAppJsonLd} />
      <SaaSCostCalculator />
      <FinalCTA index={null} />
    </>
  );
}
