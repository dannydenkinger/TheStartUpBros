import { CTAButton } from "@/components/shared/CTAButton";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100svh-10rem)] px-6 py-24 text-center">
      <span className="badge-pill text-micro-label mb-8">
        <span aria-hidden className="label-dot" />
        <span className="lowercase">ERROR / 404</span>
      </span>
      <h1 className="font-display text-[clamp(8rem,20vw,15rem)] leading-[0.95] tracking-[-0.045em] font-medium tabular-nums text-foreground">
        404
        <span
          aria-hidden
          className="ml-[0.045em] inline-block size-[0.105em] rounded-full bg-(--accent-brand)"
        />
      </h1>
      <p className="text-body-lg text-muted-foreground mt-6 mb-10 max-w-[440px]">
        This page doesn&apos;t exist. Let&apos;s get you back on track.
      </p>
      <CTAButton href="/" variant="primary">
        Back to Home
      </CTAButton>
    </section>
  );
}
