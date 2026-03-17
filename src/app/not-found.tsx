import { CTAButton } from "@/components/shared/CTAButton";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <h1 className="text-display text-foreground mb-4">404</h1>
      <p className="text-body-lg text-muted-foreground mb-8">
        This page doesn&apos;t exist. Let&apos;s get you back on track.
      </p>
      <CTAButton href="/" variant="primary">
        Back to Home
      </CTAButton>
    </section>
  );
}
