import type { Metadata } from "next";
import { StrategyCallContent } from "@/components/strategy-call/StrategyCallContent";
import { getSaasEstimate, parseSaasFeatureIds } from "@/lib/saasEstimate";
import { getMvpScopePlan, parseMvpScopeAnswers } from "@/lib/mvpScope";

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
    productType?: string | string[];
    audience?: string | string[];
    goal?: string | string[];
    capabilities?: string | string[];
    posture?: string | string[];
  }>;
}) {
  const params = await searchParams;
  const fromCalculator = params.from === "saas-cost";
  const fromScopePlanner = params.from === "mvp-scope";
  const featureIds = fromCalculator ? parseSaasFeatureIds(params.features) : [];
  const estimate = getSaasEstimate(featureIds);
  const scopeAnswers = fromScopePlanner
    ? parseMvpScopeAnswers(params)
    : { capabilities: [] };
  const scopePlan = getMvpScopePlan(scopeAnswers);

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
      initialScope={
        scopePlan
          ? {
              productType: scopePlan.product.label,
              audience: scopePlan.audience.label,
              goal: scopePlan.goal.label,
              posture: scopePlan.posture.label,
              capabilities: scopePlan.buildNow.map((capability) => capability.label),
              laterCapabilities: scopePlan.buildLater.map(
                (capability) => capability.label,
              ),
              timeline: scopePlan.timeline,
            }
          : undefined
      }
    />
  );
}
