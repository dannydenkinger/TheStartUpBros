import type { Metadata } from "next";
import { JsonLd } from "@/components/shared/JsonLd";
import { SaaSCostCalculator } from "@/components/tools/SaaSCostCalculator";

export const metadata: Metadata = {
  title: "SaaS Cost Calculator | StartUpBros",
  description:
    "Estimate the cost and timeline for your SaaS MVP. Toggle features, see complexity tiers, and get a ballpark scope — free.",
  openGraph: {
    title: "SaaS Cost Calculator | StartUpBros",
    description:
      "Estimate the cost and timeline for your SaaS MVP. Toggle features, see complexity tiers, and get a ballpark scope — free.",
    url: "https://startupbros.dev/tools/saas-cost",
  },
};

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "SaaS Cost Calculator",
  description:
    "Free tool to estimate the scope, timeline, and complexity of a SaaS MVP build.",
  url: "https://startupbros.dev/tools/saas-cost",
  applicationCategory: "BusinessApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  provider: {
    "@type": "Organization",
    name: "StartUpBros",
    url: "https://startupbros.dev",
  },
};

export default function SaaSCostPage() {
  return (
    <>
      <JsonLd data={webAppJsonLd} />
      <SaaSCostCalculator />
    </>
  );
}
