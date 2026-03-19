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

function getTier(days: number): { label: string; color: string; description: string } {
  if (days <= 12) {
    return {
      label: "Simple",
      color: "text-emerald-400",
      description: "A focused MVP with core features. Ideal for validation.",
    };
  }
  if (days <= 25) {
    return {
      label: "Standard",
      color: "text-amber-400",
      description: "A well-rounded product with multiple integrated systems.",
    };
  }
  return {
    label: "Complex",
    color: "text-rose-400",
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

  const totalDays = features
    .filter((f) => selected.has(f.id))
    .reduce((sum, f) => sum + f.days, 0);

  const tier = getTier(totalDays);

  const Wrapper = prefersReducedMotion ? "div" : motion.div;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <section className="px-6 lg:px-10 pt-[160px] pb-16">
        <div className="mx-auto max-w-[900px] text-center">
          <AnimateIn variant="fadeUp">
            <span className="badge-pill mb-6 inline-block">Free Tool</span>
            <h1 className="text-display text-foreground mb-4">
              SaaS Cost Calculator
            </h1>
            <p className="text-body-lg max-w-[600px] mx-auto">
              Toggle the features your MVP needs. We&apos;ll estimate the
              scope, timeline, and complexity tier.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="px-6 lg:px-10 pb-24">
        <div className="mx-auto max-w-[1000px]">
          {/* Feature Toggle Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {features.map((feature, i) => {
              const isOn = selected.has(feature.id);
              const Icon = feature.icon;

              return (
                <AnimateIn key={feature.id} delay={i * 0.05}>
                  <button
                    onClick={() => toggle(feature.id)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 ${
                      isOn
                        ? "border-ring bg-muted shadow-lg shadow-ring"
                        : "border-border bg-card hover:border-ring"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                          isOn ? "bg-accent" : "bg-secondary"
                        }`}
                      >
                        <Icon className="w-4.5 h-4.5 text-foreground" strokeWidth={1.5} />
                      </div>
                      <div
                        className={`w-4 h-4 rounded-full border-2 transition-colors ml-auto ${
                          isOn
                            ? "bg-white border-white"
                            : "border-ring bg-transparent"
                        }`}
                      />
                    </div>
                    <p className="text-[14px] font-medium text-foreground mb-1">
                      {feature.label}
                    </p>
                    <p className="text-[12px] text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                    <p className="text-[11px] text-muted-foreground mt-2">
                      ~{feature.days} dev days
                    </p>
                  </button>
                </AnimateIn>
              );
            })}
          </div>

          {/* Results Card */}
          <AnimatePresence mode="wait">
            {selected.size > 0 && (
              <Wrapper
                {...(!prefersReducedMotion && {
                  layout: true,
                  initial: { opacity: 0, y: 16 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -8 },
                  transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                })}
                className="card-elevated p-8 md:p-10 text-center"
              >
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-8">
                  <div>
                    <p className="text-[13px] text-muted-foreground mb-1 uppercase tracking-wider">
                      Estimated Scope
                    </p>
                    <p className="text-[48px] font-semibold text-foreground leading-none">
                      {totalDays}
                    </p>
                    <p className="text-[14px] text-muted-foreground mt-1">
                      dev days
                    </p>
                  </div>
                  <div className="w-px h-16 bg-muted hidden md:block" />
                  <div>
                    <p className="text-[13px] text-muted-foreground mb-1 uppercase tracking-wider">
                      Complexity Tier
                    </p>
                    <p className={`text-[32px] font-semibold leading-none ${tier.color}`}>
                      {tier.label}
                    </p>
                    <p className="text-[13px] text-muted-foreground mt-2 max-w-[300px]">
                      {tier.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-body-lg mb-6">
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
