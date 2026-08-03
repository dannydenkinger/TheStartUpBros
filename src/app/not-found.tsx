import { CTAButton } from "@/components/shared/CTAButton";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <span className="badge-pill text-micro-label mb-6">
        <span aria-hidden className="label-dot" />
        <span className="lowercase">ERROR / 404</span>
      </span>
      <h1 className="font-display text-[10rem] leading-none tracking-[-0.03em] font-medium tabular-nums text-foreground mb-4">
        404
        <span
          aria-hidden
          className="ml-3 inline-block size-5 rounded-full bg-(--accent-brand)"
        />
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
