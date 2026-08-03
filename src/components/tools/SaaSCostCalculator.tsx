"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { CTAButton } from "@/components/shared/CTAButton";
import {
  ShieldCheck,
  Brain,
  Database,
  CreditCard,
  LayoutDashboard,
  HardDrive,
  Mail,
  BarChart3,
} from "lucide-react";

interface Feature {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  days: number;
  description: string;
}

const features: Feature[] = [
  {
    id: "auth",
    label: "Authentication",
    icon: ShieldCheck,
    days: 5,
    description: "User signup, login, OAuth, password reset, session management",
  },
  {
    id: "ai",
    label: "AI / LLM Integration",
    icon: Brain,
    days: 8,
    description: "LLM API integration, prompt engineering, response handling",
  },
  {
    id: "database",
    label: "Database & ORM",
    icon: Database,
    days: 4,
    description: "Schema design, migrations, ORM setup, seeding",
  },
  {
    id: "payments",
    label: "Payments / Billing",
    icon: CreditCard,
    days: 6,
    description: "Stripe integration, subscriptions, invoicing, webhooks",
  },
  {
    id: "admin",
    label: "Admin Dashboard",
    icon: LayoutDashboard,
    days: 7,
    description: "User management, analytics views, content moderation",
  },
  {
    id: "storage",
    label: "File Storage",
    icon: HardDrive,
    days: 3,
    description: "Upload, CDN, image processing, access control",
  },
  {
    id: "email",
    label: "Email / Notifications",
    icon: Mail,
    days: 3,
    description: "Transactional emails, in-app notifications, templates",
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: BarChart3,
    days: 4,
    description: "Event tracking, dashboards, usage metrics, reporting",
  },
];

function getTier(days: number): { label: string; description: string } {
  if (days <= 12) {
    return {
      label: "Simple",
      description: "A focused MVP with core features. Ideal for validation.",
    };
  }
  if (days <= 25) {
    return {
      label: "Standard",
      description: "A well-rounded product with multiple integrated systems.",
    };
  }
  return {
    label: "Complex",
    description: "A feature-rich platform requiring careful architecture.",
  };
}

export function SaaSCostCalculator() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const prefersReducedMotion = useReducedMotion();

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const selectedFeatures = features.filter((f) => selected.has(f.id));
  const totalDays = selectedFeatures.reduce((sum, f) => sum + f.days, 0);

  const tier = getTier(totalDays);

  const Wrapper = prefersReducedMotion ? "div" : motion.div;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <section className="px-6 md:px-10 pt-16 md:pt-20 pb-12">
        <div className="mx-auto max-w-[1600px]">
          <AnimateIn variant="fadeUp">
            <div className="badge-pill text-micro-label mb-6">
              <span aria-hidden className="label-dot" />
              <span className="lowercase">Free Tool</span>
            </div>
            <h1 className="text-display mb-4">
              SaaS Cost <span className="accent-word">Calculator</span>
            </h1>
            <p className="text-body-lg max-w-[600px]">
              Toggle the features your MVP needs. We&apos;ll estimate the
              scope, timeline, and complexity tier.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-24">
        <div className="mx-auto max-w-[1600px]">
          {/* Feature Toggle Grid */}
          <AnimateIn variant="fadeUp" className="mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {features.map((feature) => {
                const isOn = selected.has(feature.id);
                const Icon = feature.icon;

                return (
                  <button
                    key={feature.id}
                    onClick={() => toggle(feature.id)}
                    aria-pressed={isOn}
                    className={`w-full h-full text-left rounded-[20px] p-6 transition-all duration-300 cursor-pointer select-none hover:-translate-y-0.5 ${
                      isOn
                        ? "bg-white dark:bg-[#1c1c1c] ring-2 ring-(--accent-brand)"
                        : "bg-card hover:bg-(--surface-card-hover)"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-5">
                      <Icon className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                      <span className="flex items-center gap-2">
                        <span
                          aria-hidden
                          className={`size-1.5 shrink-0 rounded-full ${
                            isOn ? "bg-(--accent-brand)" : "bg-foreground/15"
                          }`}
                        />
                        <span className="text-xs tabular-nums text-muted-foreground">
                          +{feature.days} days
                        </span>
                      </span>
                    </div>
                    <p className="text-[15px] font-medium text-foreground mb-1">
                      {feature.label}
                    </p>
                    <p className="text-[12px] text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </AnimateIn>

          {/* Results Card */}
          <AnimatePresence mode="wait">
            {selected.size === 0 ? (
              <Wrapper
                key="empty"
                {...(!prefersReducedMotion && {
                  initial: { opacity: 0, y: 16 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -8 },
                  transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                })}
                className="card-elevated p-8 md:p-10"
              >
                <p className="text-micro-label text-muted-foreground mb-3">
                  Estimated Scope
                </p>
                <div className="py-3 border-b border-border/60">
                  <span className="text-sm text-muted-foreground">
                    Select features to estimate
                  </span>
                </div>
                <div className="flex items-baseline gap-3 pt-5">
                  <span className="text-[4rem] font-medium leading-none tracking-[-0.02em] tabular-nums text-foreground/30">
                    0
                  </span>
                  <span className="text-xs text-muted-foreground">
                    dev days
                  </span>
                </div>
              </Wrapper>
            ) : (
              <Wrapper
                key="results"
                {...(!prefersReducedMotion && {
                  layout: true,
                  initial: { opacity: 0, y: 16 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -8 },
                  transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                })}
                className="card-elevated p-8 md:p-10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                  <div className="lg:col-span-7">
                    <p className="text-micro-label text-muted-foreground mb-3">
                      Estimated Scope
                    </p>
                    <div>
                      {selectedFeatures.map((f) => (
                        <div
                          key={f.id}
                          className="flex items-baseline justify-between gap-6 py-3 border-b border-border/60"
                        >
                          <span className="text-sm text-muted-foreground">
                            {f.label}
                          </span>
                          <span className="text-[15px] font-medium text-foreground tabular-nums">
                            {f.days} days
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-baseline gap-3 pt-5">
                      <span className="text-[4rem] font-medium leading-none tracking-[-0.02em] tabular-nums text-foreground">
                        {totalDays}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        dev days
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-5 lg:border-l lg:border-border lg:pl-10">
                    <p className="text-micro-label text-muted-foreground mb-3">
                      Complexity Tier
                    </p>
                    <p className="flex items-baseline gap-3 text-[2.5rem] font-medium leading-none tracking-[-0.02em] text-foreground mb-3">
                      {tier.label}
                      <span
                        aria-hidden
                        className="size-2.5 shrink-0 rounded-full bg-(--accent-brand)"
                      />
                    </p>
                    <p className="text-[14px] text-muted-foreground max-w-[300px]">
                      {tier.description}
                    </p>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-border flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                  <p className="text-body-lg">
                    Want an exact quote and timeline for your build?
                  </p>
                  <MagneticButton>
                    <CTAButton href="/strategy-call" variant="primary">
                      Book a Consultation to Finalize This Scope
                    </CTAButton>
                  </MagneticButton>
                </div>
              </Wrapper>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
