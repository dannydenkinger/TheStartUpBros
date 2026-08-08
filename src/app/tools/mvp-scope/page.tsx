import type { Metadata } from "next";
import { MvpScopePlanner } from "@/components/tools/MvpScopePlanner";
import { JsonLd } from "@/components/shared/JsonLd";
import { ogImage, siteUrl } from "@/lib/metadata";
import { parseMvpScopeAnswers } from "@/lib/mvpScope";

const pageUrl = `${siteUrl}/tools/mvp-scope`;

export const metadata: Metadata = {
  title: "Free MVP Scope Planner",
  description:
    "Turn a startup idea into a focused MVP build plan. Prioritize features, estimate a development timeline, and get a shareable first-release roadmap.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Free MVP Scope Planner | StartUpBros",
    description:
      "Make five product decisions and get a focused first-release roadmap, planning timeline, and technical starting point.",
    url: pageUrl,
    images: [ogImage],
  },
};

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "MVP Scope Planner",
  description:
    "A free planning tool that turns product decisions into a prioritized MVP build plan, timeline range, and technical starting point.",
  url: pageUrl,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any",
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

type ScopeSearchParams = {
  productType?: string | string[];
  audience?: string | string[];
  goal?: string | string[];
  capabilities?: string | string[];
  posture?: string | string[];
};

export default async function MvpScopePage({
  searchParams,
}: {
  searchParams: Promise<ScopeSearchParams>;
}) {
  const initialAnswers = parseMvpScopeAnswers(await searchParams);

  return (
    <>
      <JsonLd data={webAppJsonLd} />
      <MvpScopePlanner initialAnswers={initialAnswers} />
    </>
  );
}
