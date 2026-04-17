import type { Metadata } from "next";
import { StrategyCallContent } from "@/components/strategy-call/StrategyCallContent";

export const metadata: Metadata = {
  title: "Book a Strategy Call — StartUpBros",
  description:
    "Book a free strategy call with StartUpBros. We'll map out your product, timeline, and budget — no obligations.",
};

export default function StrategyCallPage() {
  return <StrategyCallContent />;
}
