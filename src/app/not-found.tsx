import { CTAButton } from "@/components/shared/CTAButton";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <span className="badge-pill text-micro-label mb-6">ERROR / 404</span>
      <h1 className="font-display text-[10rem] leading-none tracking-[-0.03em] font-medium tabular-nums text-(--accent-brand) mb-4">
        404
      </h1>
      <p className="text-body-lg text-muted-foreground mb-8">
        This page doesn&apos;t exist. Let&apos;s get you back on track.
      </p>
      <CTAButton href="/" variant="primary">
        Back to Home
      </CTAButton>
    </section>
  );
}
