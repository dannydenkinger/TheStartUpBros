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
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { CTAButton } from "@/components/shared/CTAButton";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { TechBrandsMarquee } from "@/components/landing/TechBrandsMarquee";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { projects } from "@/data/portfolio";
import { services } from "@/data/services";
import type { Service } from "@/types";

// Hero icon lookup (matches service.icon keyword)
const heroIconMap: Record<string, LucideIcon> = {
  code: Code,
  layers: Layers,
  brain: Brain,
  palette: Palette,
  wrench: Wrench,
  globe: Globe,
  search: Search,
  megaphone: Megaphone,
  compass: Compass,
  users: Users,
  workflow: Workflow,
};

// Feature-highlight icons
const featureIconMap: Record<string, LucideIcon> = {
  Activity, BarChart3, Bell, Brain, Code, Compass, Database, DollarSign,
  Eye, FileEdit, FileSearch, FileText, Filter, Gauge, GitBranch, Globe,
  Layers, Layout, Lightbulb, Mail, Map, Megaphone, Paintbrush, Palette,
  Plug, RefreshCw, Repeat, Rocket, Scale, Search, Shield, Smartphone,
  Sparkles, Target, Terminal, TrendingUp, Type, Users, Workflow, Zap,
};

export function ServicePageContent({ service }: { service: Service }) {
  const HeroIcon = heroIconMap[service.icon] ?? Code;

  const caseStudies = (service.caseStudySlugs ?? [])
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* ── Hero ── */}
      <section className="px-6 lg:px-10 pt-[120px] pb-16 md:pb-20 text-center flex flex-col items-center justify-center">
        <AnimateIn variant="fadeUp">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="badge-pill flex items-center gap-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Founded by Denkinger Bros
            </div>
            <div className="badge-pill flex items-center gap-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <polyline
                  points="3.27 6.96 12 12.01 20.73 6.96"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line
                  x1="12"
                  y1="22.08"
                  x2="12"
                  y2="12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Trial Week Included
            </div>
          </div>
        </AnimateIn>

        <AnimateIn variant="fadeUp" delay={0.04}>
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary border border-border mb-8">
            <HeroIcon className="w-8 h-8 text-foreground" strokeWidth={1.5} />
          </div>
        </AnimateIn>

        <AnimateIn variant="fadeUp" delay={0.08}>
          <h1 className="text-display max-w-4xl mx-auto mb-6 text-foreground">
            {service.title}
          </h1>
        </AnimateIn>

        <AnimateIn variant="fadeUp" delay={0.16}>
          <p className="text-body-lg max-w-[700px] mx-auto mb-10">
            {service.longDescription}
          </p>
        </AnimateIn>

        <AnimateIn variant="fadeUp" delay={0.24}>
          <div className="flex flex-col sm:flex-row items-center gap-3">
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
      </section>

      {/* ── Trusted-by ── */}
      <TechBrandsMarquee />

      {/* ── Case Studies ── */}
      {caseStudies.length > 0 && (
        <section className="px-6 lg:px-10 py-24 md:py-32">
          <div className="max-w-[1280px] mx-auto">
            <AnimateIn>
              <div className="text-center mb-16">
                <h2 className="text-h2 text-foreground">
                  {service.title} Case Studies
                </h2>
              </div>
            </AnimateIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudies.map((cs) => (
                <Link
                  key={cs.slug}
                  href={`/portfolio/${cs.slug}`}
                  className="group block"
                >
                  <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={cs.image}
                        alt={cs.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        {cs.industry && (
                          <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-[11px] font-medium text-muted-foreground">
                            {cs.industry}
                          </span>
                        )}
                        {cs.year && (
                          <span className="text-[12px] text-muted-foreground">
                            {cs.year}
                          </span>
                        )}
                      </div>
                      <h4 className="text-[20px] md:text-[24px] font-medium leading-[1.2] tracking-[-0.02em] text-foreground group-hover:text-foreground/70 transition-colors">
                        {cs.title}
                      </h4>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Feature Highlights ── */}
      {service.featureHighlights && service.featureHighlights.length > 0 && (
        <section className="px-6 lg:px-10 py-24 md:py-32 bg-background border-t border-border">
          <div className="max-w-[1280px] mx-auto">
            <AnimateIn>
              <div className="text-center mb-16">
                <h2 className="text-h2 text-foreground">What&apos;s Included</h2>
              </div>
            </AnimateIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.featureHighlights.map((feature) => {
                const Icon = featureIconMap[feature.icon] ?? Sparkles;
                return (
                  <div
                    key={feature.title}
                    className="p-8 rounded-2xl border border-border bg-card hover:bg-secondary hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-xl bg-secondary border border-border flex items-center justify-center mb-5">
                      <Icon
                        className="w-5 h-5 text-foreground"
                        strokeWidth={1.8}
                      />
                    </div>
                    <h5 className="text-[16px] font-semibold text-foreground mb-3">
                      {feature.title}
                    </h5>
                    <p className="text-[14px] leading-[1.7] text-muted-foreground">
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
      <section className="px-6 lg:px-10 py-20 md:py-28 border-t border-border">
        <div className="mx-auto max-w-[900px]">
          <AnimateIn>
            <h2 className="text-h2 text-foreground text-center mb-14">
              Use Cases
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {service.useCases.map((useCase, i) => (
              <AnimateIn key={useCase} delay={i * 0.08}>
                <div className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-card">
                  <span className="text-foreground/60 font-mono text-sm mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[14px] leading-relaxed text-muted-foreground">
                    {useCase}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="px-6 lg:px-10 py-20 md:py-28 border-t border-border">
        <div className="mx-auto max-w-[900px] text-center">
          <AnimateIn>
            <h2 className="text-h2 text-foreground mb-10">Tech Stack</h2>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
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
      <section className="px-6 lg:px-10 py-20 md:py-28 border-t border-border">
        <div className="mx-auto max-w-[700px]">
          <AnimateIn>
            <h2 className="text-h2 text-foreground text-center mb-14">
              What You Get
            </h2>
          </AnimateIn>

          <div className="space-y-4">
            {service.deliverables.map((deliverable, i) => (
              <AnimateIn key={deliverable} delay={i * 0.06}>
                <div className="flex items-center gap-4 py-4 border-b border-border">
                  <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-foreground"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-[15px] text-foreground font-medium">
                    {deliverable}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      {service.testimonial && (
        <section className="px-6 lg:px-10 py-24 md:py-28 bg-background border-t border-border">
          <div className="max-w-[800px] mx-auto text-center">
            <AnimateIn>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 mb-8">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="#facc15"
                      className="mx-0.5"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <span className="text-[13px] font-semibold text-foreground">
                  5.0
                </span>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.04}>
              <blockquote className="text-[24px] md:text-[32px] font-medium leading-[1.3] tracking-[-0.02em] text-foreground mb-8">
                &ldquo;{service.testimonial.quote}&rdquo;
              </blockquote>
              <p className="text-[15px] font-bold text-foreground">
                {service.testimonial.name}
              </p>
              <p className="text-[13px] text-muted-foreground mt-1">
                {service.testimonial.role}
              </p>
            </AnimateIn>
          </div>
        </section>
      )}

      {/* ── Explore Other Services ── */}
      <section className="px-6 lg:px-10 py-24 md:py-32 border-t border-border">
        <div className="max-w-[1280px] mx-auto">
          <AnimateIn>
            <div className="text-center mb-16">
              <h2 className="text-h2 text-foreground">Explore Other Services</h2>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group block p-6 rounded-2xl border border-border bg-card hover:bg-secondary hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <h4 className="text-[17px] font-semibold text-foreground mb-2 group-hover:text-foreground/70 transition-colors">
                  {s.title}
                </h4>
                <p className="text-[13px] leading-[1.6] text-muted-foreground mb-4">
                  {s.description}
                </p>
                <span className="text-[13px] font-medium text-foreground group-hover:underline">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing CTA ── */}
      <section className="px-6 lg:px-10 py-24 md:py-32 bg-background border-t border-border">
        <div className="max-w-[760px] mx-auto text-center">
          <AnimateIn>
            <h2 className="text-h2 text-foreground mb-5">
              So much value at such a flexible price
            </h2>
            <p className="text-body-lg mb-10">
              Consultation-based custom pricing. We scope every project to the
              fastest path to launch — no retainers, no bloat.
            </p>
            <CTAButton href="/strategy-call" variant="primary">
              Book a Call
            </CTAButton>
          </AnimateIn>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ />

      {/* ── Final CTA ── */}
      <FinalCTA />
    </div>
  );
}
