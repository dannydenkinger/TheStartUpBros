"use client";

import Link from "next/link";
import { CTAButton } from "@/components/shared/CTAButton";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { MagneticButton } from "@/components/shared/MagneticButton";

const techStack = [
  {
    name: "Next.js",
    mono: true,
    logo: (
      <svg viewBox="0 0 180 180" fill="none" className="w-5 h-5">
        <mask id="a" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
          <circle cx="90" cy="90" r="90" fill="#000" />
        </mask>
        <g mask="url(#a)">
          <circle cx="90" cy="90" r="90" fill="currentColor" />
          <path d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.885 95.461a90.304 90.304 0 009.509-7.325Z" fill="url(#b)" />
          <path d="M115 54h12v72h-12z" fill="url(#c)" />
        </g>
        <defs>
          <linearGradient id="b" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff" /><stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="c" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff" /><stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "Stripe",
    logo: (
      <svg viewBox="0 0 60 25" fill="#635BFF" className="h-5 w-auto">
        <path d="M5 10.2c0-.7.6-1 1.5-1 1.4 0 3.1.4 4.5 1.2V6.3C9.5 5.7 8 5.3 6.5 5.3 2.6 5.3 0 7.4 0 10.5c0 4.8 6.6 4 6.6 6.1 0 .8-.7 1.1-1.7 1.1-1.5 0-3.4-.6-4.9-1.4v4.2c1.7.7 3.3 1 4.9 1 4 0 6.8-2 6.8-5.1C11.7 11.2 5 12.2 5 10.2zm14.3-2.8l-.2-1.9h-4v15h4.6v-10c1.1-1.4 2.9-1.1 3.5-.9V5.5c-.6-.2-2.8-.6-3.9 1.9zm9.7-1.9l-4.6.9v3.5l4.6-1V5.5zm-4.6 5h4.6v10h-4.6v-10zm11.5-5.1c-1.3 0-2.2.6-2.7 1l-.2-.8h-4v19.5l4.6-1v-4.7c.5.4 1.3.9 2.5.9 2.5 0 4.8-2 4.8-6.5-.1-4.1-2.4-6.4-5-6.4zm-.9 9.9c-.8 0-1.3-.3-1.7-.7V9.8c.4-.4.9-.8 1.7-.8 1.3 0 2.2 1.5 2.2 3.1 0 1.8-.9 3.2-2.2 3.2zm14.5-3.1c0-3.7-1.8-6.7-5.2-6.7-3.5 0-5.5 3-5.5 6.7 0 4.4 2.4 6.6 5.9 6.6 1.7 0 3-.4 4-1v-3.4c-1 .5-2.1.8-3.5.8-1.4 0-2.6-.5-2.8-2.1h6.9c0-.2.2-1 .2-1.9zm-7-1.4c0-1.6 1-2.2 1.8-2.2.9 0 1.8.6 1.8 2.2h-3.6z" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    mono: true,
    logo: (
      <svg viewBox="0 0 76 65" fill="currentColor" className="w-5 h-5">
        <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
      </svg>
    ),
  },
  {
    name: "OpenAI",
    mono: true,
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.998 5.998 0 0 0-3.998 2.9 6.042 6.042 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
      </svg>
    ),
  },
  {
    name: "Supabase",
    logo: (
      <svg viewBox="0 0 109 113" fill="none" className="w-5 h-5">
        <path d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347z" fill="url(#sb-a)" />
        <path d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347z" fill="url(#sb-b)" fillOpacity=".2" />
        <path d="M45.317 2.071c2.86-3.601 8.657-1.628 8.726 2.97l.442 67.251H9.83c-8.19 0-12.759-9.46-7.665-15.875L45.317 2.072z" fill="#3ECF8E" />
        <defs>
          <linearGradient id="sb-a" x1="53.974" y1="54.974" x2="94.163" y2="71.829" gradientUnits="userSpaceOnUse">
            <stop stopColor="#249361" /><stop offset="1" stopColor="#3ECF8E" />
          </linearGradient>
          <linearGradient id="sb-b" x1="36.156" y1="30.578" x2="54.484" y2="65.081" gradientUnits="userSpaceOnUse">
            <stop /><stop offset="1" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "Tailwind",
    logo: (
      <svg viewBox="0 0 54 33" fill="none" className="w-6 h-5">
        <path fillRule="evenodd" clipRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" fill="#38BDF8" />
      </svg>
    ),
  },
];

function StudioIcon() {
  return (
    <span className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-[4px] shrink-0" style={{ background: 'var(--accent-brand)' }}>
      <span className="text-white text-[10px] font-bold leading-none tracking-tighter">
        SB
      </span>
    </span>
  );
}

function GoogleMeetIcon() {
  return (
    <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-[4px] bg-white shrink-0 shadow-sm">
      <svg width="12" height="12" viewBox="0 0 48 48" fill="none">
        <path d="M31 24l8 6.5v-13L31 24z" fill="#00832d" />
        <path d="M9 14v20a4 4 0 004 4h18V10H13a4 4 0 00-4 4z" fill="#0066da" />
        <path d="M31 10v14l8 6.5V14a4 4 0 00-4-4h-4z" fill="#e94235" />
        <path d="M31 38h4a4 4 0 004-4v-3.5L31 24v14z" fill="#ffba00" />
        <path d="M39 17.5L31 24l8 6.5v-13z" fill="#00ac47" />
      </svg>
    </span>
  );
}

export function Hero() {
  return (
    <section className="bg-background px-6 lg:px-10 pt-[60px] md:pt-[84px] pb-12 flex-1 flex flex-col justify-center">
      <div className="mx-auto max-w-[1020px] text-center">
        {/* Founder pill */}
        <AnimateIn variant="fadeUp">
          <Link
            href="/strategy-call"
            className="inline-flex items-center gap-2 badge-pill mb-10 hover:bg-muted transition-colors"
          >
            <StudioIcon />
            <span className="text-[13px] font-medium text-foreground">
              Founded by the Denkinger brothers — taking first clients
            </span>
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-foreground/70"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </AnimateIn>

        {/* Headline */}
        <AnimateIn variant="fadeUp" delay={0.08}>
          <h1 className="text-display text-foreground">
            Websites and products for{" "}
            <span style={{ color: 'var(--accent-brand)' }}>fast-moving</span>
            <br className="hidden md:block" />
            B2B and AI SaaS teams
          </h1>
        </AnimateIn>

        {/* Subtitle */}
        <AnimateIn variant="fadeUp" delay={0.16}>
          <p className="text-body-lg mt-6 mx-auto max-w-[560px]">
            Two brothers. Modern stack. Built to ship in weeks, not months.
          </p>
        </AnimateIn>

        {/* CTAs */}
        <AnimateIn variant="fadeUp" delay={0.24}>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <MagneticButton>
              <Link
                href="/strategy-call"
                className="btn-pill btn-pill-primary inline-flex items-center gap-2.5 !pl-3"
                style={{ boxShadow: '0 0 20px var(--accent-brand-glow), 0 0 60px var(--accent-brand-soft)' }}
              >
                <GoogleMeetIcon />
                Book A Call
              </Link>
            </MagneticButton>
            <CTAButton href="/portfolio" variant="secondary">
              See Design Gallery
            </CTAButton>
          </div>
        </AnimateIn>

        {/* Trust line + VC logos inline */}
        <AnimateIn variant="fadeUp" delay={0.32}>
          <div className="mt-14">
            <p className="text-[13px] text-muted-foreground font-medium mb-6">
              Built on the stack trusted by modern SaaS
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {techStack.map((item) => (
                <div
                  key={item.name}
                  className={`flex items-center gap-2 ${item.mono ? "text-foreground/80" : ""}`}
                >
                  {item.logo}
                  <span className="text-[14px] font-medium tracking-tight text-muted-foreground/60">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
