"use client";

import { useEffect } from "react";
import { CTAButton } from "@/components/shared/CTAButton";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100svh-10rem)] px-6 py-24 text-center">
      <span className="badge-pill text-micro-label mb-8">
        <span aria-hidden className="label-dot" />
        <span className="lowercase">ERROR / 500</span>
      </span>
      <h1 className="font-display text-[clamp(2.75rem,7vw,5rem)] leading-[0.98] tracking-[-0.035em] font-medium text-foreground max-w-[22ch]">
        Something went{" "}
        <span className="whitespace-nowrap">
          wrong
          <span
            aria-hidden
            className="ml-[0.045em] inline-block size-[0.105em] rounded-full bg-(--accent-brand) align-baseline"
          />
        </span>
      </h1>
      <p className="text-body-lg text-muted-foreground mt-6 mb-10 max-w-[460px]">
        This page hit an unexpected error. Try again — it usually clears on the
        second pass.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <button type="button" onClick={reset} className="btn-pill btn-pill-primary">
          Try again
        </button>
        <CTAButton href="/" variant="secondary">
          Back to Home
        </CTAButton>
      </div>
    </section>
  );
}
