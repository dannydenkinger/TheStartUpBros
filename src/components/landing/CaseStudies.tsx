"use client";

import Image from "next/image";
import { AnimateIn } from "@/components/shared/AnimateIn";

const cases = [
  {
    label: "SaaS Platform",
    title: "From napkin sketch to production SaaS in 3 weeks",
    description:
      "We built a multi-tenant property management platform with Stripe billing, role-based access, and automated tenant communications.",
    features: ["Next.js", "PostgreSQL", "Stripe", "Auth"],
    images: [
      { src: "/images/portfolio/sales-crm-full.webp", w: 800, h: 600 },
      { src: "/images/portfolio/crm-dashboard.webp", w: 800, h: 600 },
    ],
  },
  {
    label: "AI Automation",
    title: "AI agent that saves 4 hours of data entry per day",
    description:
      "Custom document processing pipeline that extracts line items from invoices, categorizes expenses, and syncs with QuickBooks automatically.",
    features: ["Python", "LLMs", "OCR", "QuickBooks API"],
    images: [
      { src: "/images/portfolio/productivity-dashboard.webp", w: 800, h: 600 },
      { src: "/images/portfolio/ai-landing.webp", w: 800, h: 600 },
    ],
  },
  {
    label: "Web3 Platform",
    title: "Token launch platform with 910+ community members",
    description:
      "Full-stack Web3 platform with pre-sale management, wallet integration, community discovery, and real-time transaction tracking.",
    features: ["React", "Solidity", "Web3.js", "WebSocket"],
    images: [
      { src: "/images/portfolio/defi-landing.webp", w: 800, h: 600 },
      { src: "/images/portfolio/fintech-dashboard.webp", w: 800, h: 600 },
    ],
  },
];

export function CaseStudies() {
  return (
    <section className="px-6 lg:px-10 py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20">
          {/* Sticky left sidebar */}
          <div className="lg:w-[380px] shrink-0">
            <div className="lg:sticky lg:top-[120px]">
              <AnimateIn>
                <span className="badge-pill mb-6 inline-block">Case Studies</span>
                <h2 className="text-h2 text-foreground">
                  Real Results from
                  <br />
                  Real SaaS Companies
                </h2>
                <p className="text-body-lg mt-4">
                  We don&apos;t just write code — we ship products that founders use to
                  raise funding, acquire customers, and scale.
                </p>
              </AnimateIn>

              {/* Featured floating image */}
              <AnimateIn delay={0.2}>
                <div className="mt-10 hidden lg:block">
                  <div
                    className="rounded-2xl border border-border bg-card overflow-hidden"
                    style={{
                      boxShadow:
                        "0 4px 6px rgba(0,0,0,0.04), 0 12px 40px rgba(0,0,0,0.08), 0 24px 80px rgba(0,0,0,0.06)",
                      transformStyle: "preserve-3d",
                      transform: "perspective(1000px) rotateY(-2deg) rotateX(1deg)",
                    }}
                  >
                    <Image
                      src="/images/portfolio/travel-app.webp"
                      alt="Mobile app showcase"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>

          {/* Right content — case study blocks */}
          <div className="flex-1 space-y-0">
            {cases.map((c, i) => (
              <AnimateIn key={c.label} delay={i * 0.1}>
                <div className={`space-y-5 py-12 ${i > 0 ? "border-t-[3px] border-accent" : ""}`}>
                  <span className="inline-block text-[12px] font-medium text-muted-foreground uppercase tracking-[0.08em]">
                    {c.label}
                  </span>
                  <h3 className="text-h3 text-foreground">{c.title}</h3>
                  <p className="text-[13px] leading-relaxed text-muted-foreground max-w-lg">
                    {c.description}
                  </p>

                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-2">
                    {c.features.map((f) => (
                      <span
                        key={f}
                        className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-[11px] font-medium text-muted-foreground"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Floating image cards */}
                  <div className="flex gap-3 mt-4">
                    {c.images.map((img, j) => (
                      <div
                        key={img.src}
                        className="flex-1 rounded-2xl border border-border bg-card overflow-hidden"
                        style={{
                          boxShadow:
                            "0 2px 4px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)",
                          transform: j === 1 ? "translateY(12px)" : "translateY(0)",
                        }}
                      >
                        <Image
                          src={img.src}
                          alt={`${c.label} screenshot ${j + 1}`}
                          width={img.w}
                          height={img.h}
                          className="w-full h-auto"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
