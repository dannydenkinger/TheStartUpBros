import type { Metadata } from "next";
import { StrategyCallContent } from "@/components/strategy-call/StrategyCallContent";
import { getSaasEstimate, parseSaasFeatureIds } from "@/lib/saasEstimate";

export const metadata: Metadata = {
  title: "Book a Free MVP Strategy Call",
  description:
    "Book a free strategy call with StartUpBros. We'll map out your product, timeline, and budget — no obligations.",
};

export default async function StrategyCallPage({
  searchParams,
}: {
  searchParams: Promise<{
    features?: string | string[];
    from?: string | string[];
  }>;
}) {
  const params = await searchParams;
  const fromCalculator = params.from === "saas-cost";
  const featureIds = fromCalculator ? parseSaasFeatureIds(params.features) : [];
  const estimate = getSaasEstimate(featureIds);

  return (
    <StrategyCallContent
      initialEstimate={
        featureIds.length > 0
          ? {
              featureIds,
              featureLabels: estimate.selectedFeatures.map((feature) => feature.label),
              totalDays: estimate.totalDays,
              tier: estimate.tier.label,
            }
          : undefined
      }
    />
  );
}
