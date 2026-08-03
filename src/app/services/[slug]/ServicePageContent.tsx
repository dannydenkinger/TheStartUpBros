"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  BarChart3,
  Bell,
  Brain,
  Code,
  Compass,
  Database,
  DollarSign,
  Eye,
  FileEdit,
  FileSearch,
  FileText,
  Filter,
  Gauge,
  GitBranch,
  Globe,
  Layers,
  Layout,
  Lightbulb,
  Mail,
  Map,
  Megaphone,
  Paintbrush,
  Palette,
  Plug,
  RefreshCw,
  Repeat,
  Rocket,
  Scale,
  Search,
  Shield,
  Smartphone,
  Sparkles,
  Target,
  Terminal,
  TrendingUp,
  Type,
  Users,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { CTAButton } from "@/components/shared/CTAButton";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { TechBrandsMarquee } from "@/components/landing/TechBrandsMarquee";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { getImageStyle, getWrapperStyle } from "@/lib/imagePosition";
import { projects } from "@/data/portfolio";
import { services } from "@/data/services";
import type { Service } from "@/types";

// Feature-highlight icons
const featureIconMap: Record<string, LucideIcon> = {
  Activity, BarChart3, Bell, Brain, Code, Compass, Database, DollarSign,
  Eye, FileEdit, FileSearch, FileText, Filter, Gauge, GitBranch, Globe,
  Layers, Layout, Lightbulb, Mail, Map, Megaphone, Paintbrush, Palette,
  Plug, RefreshCw, Repeat, Rocket, Scale, Search, Shield, Smartphone,
  Sparkles, Target, Terminal, TrendingUp, Type, Users, Workflow, Zap,
};

export function ServicePageContent({ service }: { service: Service }) {
  const caseStudies = (service.caseStudySlugs ?? [])
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const otherServices = services.filter((s) => s.slug !== service.slug);

  // Continuous section numbering — sections render conditionally, so the
  // index is computed at render time in document order.
  let sectionCount = 0;
  const idx = () => String(++sectionCount).padStart(2, "0");

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* ── Hero ── */}
      <section className="px-6 md:px-10 pt-16 md:pt-24 pb-16 md:pb-20">
        <div className="max-w-[1360px] mx-auto">
          <AnimateIn variant="fadeUp">
            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8">
              <span className="badge-pill">
                <span aria-hidden className="label-dot" />
                Founded by Denkinger Bros
              </span>
              <span className="badge-pill">
                <span aria-hidden className="label-dot" />
                Trial Week Included
              </span>
            </div>
          </AnimateIn>

          <AnimateIn variant="fadeUp" delay={0.06}>
            <div className="grid grid-cols-12 gap-x-6">
              <h1 className="col-span-12 lg:col-span-9 text-h1 text-foreground mb-6">
                {service.title}
              </h1>
            </div>
          </AnimateIn>

          <AnimateIn variant="fadeUp" delay={0.12}>
            <p className="text-body-lg max-w-[680px] mb-10">
              {service.longDescription}
            </p>
          </AnimateIn>

          <AnimateIn variant="fadeUp" delay={0.18}>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <MagneticButton>
                <CTAButton href="/strategy-call" variant="primary">
                  Book Strategy Call
                </CTAButton>
              </MagneticButton>
              <CTAButton href="/portfolio" variant="secondary">
                View Our Work
              </CTAButton>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Trusted-by ── */}
      <TechBrandsMarquee />

      {/* ── Case Studies ── */}
      {caseStudies.length > 0 && (
        <section className="px-6 md:px-10 py-24 md:py-32">
          <div className="max-w-[1360px] mx-auto">
            <SectionHeader
              index={idx()}
              label="CASE STUDIES"
              title={`${service.title} Case Studies`}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudies.map((cs, i) => (
                <AnimateIn key={cs.slug} delay={Math.min(i, 3) * 0.06}>
                  <Link
                    href={`/portfolio/${cs.slug}`}
                    className="group block overflow-hidden rounded-[20px] bg-card transition-colors duration-300 hover:bg-(--surface-card-hover)"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden isolate">
                      <div
                        className="absolute inset-0 overflow-hidden"
                        style={getWrapperStyle(cs.image)}
                      >
                        <Image
                          src={cs.image}
                          alt={cs.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                          style={getImageStyle(cs.image)}
                        />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <p className="text-[13px] font-medium text-(--accent-brand)">
                          {[cs.industry, cs.year].filter(Boolean).join(" — ")}
                        </p>
                        <span aria-hidden className="plus-btn">
                          +
                        </span>
                      </div>
                      <h3 className="text-h3 text-foreground mb-4">
                        {cs.title}
                      </h3>
                      <span className="text-[13px] font-medium text-(--accent-brand)">
                        → View Case Study
                      </span>
                    </div>
                  </Link>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Feature Highlights ── */}
      {service.featureHighlights && service.featureHighlights.length > 0 && (
        <section className="px-6 md:px-10 py-24 md:py-32">
          <div className="max-w-[1360px] mx-auto">
            <SectionHeader
              index={idx()}
              label="WHAT'S INCLUDED"
              title={
                <>
                  What&apos;s <span className="accent-word">Included</span>
                </>
              }
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.featureHighlights.map((feature, i) => {
                const Icon = featureIconMap[feature.icon] ?? Sparkles;
                return (
                  <div key={feature.title} className="card-elevated">
                    <div className="flex items-start justify-between mb-6">
                      <Icon
                        className="w-5 h-5 text-foreground"
                        strokeWidth={1.5}
                      />
                      <span className="text-xs tabular-nums text-muted-foreground/80">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-h3 text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-caption text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── Use Cases ── */}
      <section className="px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-[1360px] mx-auto">
          <SectionHeader index={idx()} label="USE CASES" title="Use Cases" />
          <div className="card-elevated max-w-[840px] divide-y divide-border/60">
            {service.useCases.map((useCase, i) => (
              <AnimateIn key={useCase} delay={Math.min(i, 3) * 0.06}>
                <div className="flex items-baseline gap-6 py-4">
                  <span className="text-xs tabular-nums text-muted-foreground/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[15px] font-medium text-foreground">
                    {useCase}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-[1360px] mx-auto">
          <SectionHeader index={idx()} label="TECH STACK" title="Tech Stack" />
          <AnimateIn delay={0.06}>
            <div className="flex flex-wrap gap-3">
              {service.techStack.map((tech) => (
                <span key={tech} className="badge-pill">
                  {tech}
                </span>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Deliverables ── */}
      <section className="px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-[1360px] mx-auto">
          <SectionHeader index={idx()} label="WHAT YOU GET" title="What You Get" />
          <div className="max-w-[680px]">
            {service.deliverables.map((deliverable, i) => (
              <AnimateIn key={deliverable} delay={Math.min(i, 3) * 0.06}>
                <div className="flex items-baseline justify-between gap-6 py-3 border-b border-border/60">
                  <span className="text-sm font-medium text-foreground">
                    {deliverable}
                  </span>
                  <span className="text-xs tabular-nums text-muted-foreground/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      {service.testimonial && (
        <section className="px-6 md:px-10 py-24 md:py-32">
          <div className="max-w-[1360px] mx-auto">
            <div className="mb-16">
              <span className="badge-pill text-micro-label">
                <span aria-hidden className="label-dot" />
                <span className="sr-only">{idx()} · </span>
                <span className="lowercase">TESTIMONIAL</span>
              </span>
            </div>
            <AnimateIn>
              <div className="card-elevated p-8 md:p-12">
                <div className="grid grid-cols-12 gap-x-6">
                  <div className="col-span-12 lg:col-span-10">
                    <p className="text-sm tabular-nums text-muted-foreground mb-8">
                      5.0 / 5.0
                    </p>
                    <blockquote className="text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.25] tracking-[-0.02em] font-medium text-foreground mb-8">
                      &ldquo;{service.testimonial.quote}&rdquo;
                    </blockquote>
                    <p className="text-sm font-medium text-foreground">
                      {service.testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {service.testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>
      )}

      {/* ── Explore Other Services ── */}
      <section className="px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-[1360px] mx-auto">
          <SectionHeader
            index={idx()}
            label="OTHER SERVICES"
            title="Explore Other Services"
          />
          <div>
            {otherServices.map((s, i) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className={`group flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 border-t border-border py-6${
                  i === otherServices.length - 1 ? " border-b" : ""
                }`}
              >
                <span className="text-xs tabular-nums text-muted-foreground/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-h3 text-foreground md:w-[320px] shrink-0 transition-transform duration-300 lg:group-hover:translate-x-2">
                  {s.title}
                </h3>
                <p className="text-caption text-muted-foreground flex-1">
                  {s.description}
                </p>
                <span className="text-[13px] font-medium text-(--accent-brand) whitespace-nowrap">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing CTA ── */}
      <section className="px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-[1360px] mx-auto">
          <div className="mb-16">
            <span className="badge-pill text-micro-label">
              <span aria-hidden className="label-dot" />
              <span className="sr-only">{idx()} · </span>
              <span className="lowercase">PRICING</span>
            </span>
          </div>
          <AnimateIn>
            <div className="card-elevated p-8 md:p-12">
              <div className="grid grid-cols-12 gap-x-6">
                <div className="col-span-12 lg:col-span-7">
                  <h2 className="text-h2 text-foreground mb-5">
                    So much value at such a{" "}
                    <span className="accent-word">flexible</span> price
                  </h2>
                  <p className="text-body-lg max-w-[560px] mb-10">
                    Consultation-based custom pricing. We scope every project to
                    the fastest path to launch — no retainers, no bloat.
                  </p>
                  <CTAButton href="/strategy-call" variant="primary">
                    Book a Call
                  </CTAButton>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ index={idx()} />

      {/* ── Final CTA ── */}
      <FinalCTA index={idx()} />
    </div>
  );
}
