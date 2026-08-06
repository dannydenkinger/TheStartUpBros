"use client";

import Link from "next/link";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionHeader } from "@/components/shared/SectionHeader";

/* The engagement model, stated plainly. Both of the agencies this site is
 * benchmarked against lead with their model (subscription / 1-week trial);
 * ours — build it, hand over the code, stay on retainer — was previously
 * only implied, and code ownership is the part competitors don't offer. */
const steps = [
  {
    step: "01",
    title: "Strategy call",
    body: "A free call to scope the product, the timeline, and the budget. You leave knowing what it costs and how long it takes, whether or not you hire us.",
    meta: "Free · 30 minutes",
  },
  {
    step: "02",
    title: "Paid trial week",
    body: "We start with one paid week. You see real work on your product before committing to the build — love it or walk away, no questions and no long-term lock-in.",
    meta: "One week",
  },
  {
    step: "03",
    title: "Build sprint",
    body: "Design and engineering run together, with a usable milestone in week one. Most MVPs ship in two to four weeks depending on scope.",
    meta: "2–4 weeks",
  },
  {
    step: "04",
    title: "Handoff — you own it",
    body: "The code, the repo, and the accounts are yours. No proprietary platform, no hostage licence, nothing you have to keep paying us to access.",
    meta: "Full ownership",
  },
  {
    step: "05",
    title: "Retainer, if you want it",
    body: "Most founders keep us on for updates, new features, and maintenance after launch. It is an add-on, never a condition of the build.",
    meta: "Optional · monthly",
  },
];

export function HowItWorks({ index = "02" }: { index?: string }) {
  return (
    <section className="px-6 md:px-10 py-14 md:py-28 bg-background">
      <div className="mx-auto max-w-[1600px]">
        <AnimateIn>
          <SectionHeader
            index={index}
            label="HOW IT WORKS"
            title={
              <>
                We build it, you <span className="accent-word">own</span> it
              </>
            }
            intro="Five steps from first call to launched product — and the code is yours at the end of it."
          />
        </AnimateIn>

        <ol className="grid gap-3 md:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <AnimateIn key={s.step} delay={(i % 3) * 0.06} className="h-full">
              <li className="card-elevated flex h-full flex-col list-none">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-[13px] font-medium tabular-nums text-muted-foreground/70">
                    {s.step}
                  </span>
                  <span className="text-[13px] text-(--accent-brand)">
                    {s.meta}
                  </span>
                </div>
                <h3 className="text-h3 text-foreground mb-2">{s.title}</h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </li>
            </AnimateIn>
          ))}

          {/* Sixth cell closes the grid and carries the conversion. */}
          <AnimateIn delay={0.12} className="h-full">
            <li className="card-elevated flex h-full flex-col list-none bg-(--accent-brand-soft)">
              <h3 className="text-h3 text-foreground mb-2">
                Start with the call
              </h3>
              <p className="text-[15px] leading-relaxed text-muted-foreground mb-6">
                Free, 30 minutes, no obligation. Worst case you leave with a
                scoped plan and an honest estimate.
              </p>
              <div className="mt-auto">
                <Link href="/strategy-call" className="btn-pill btn-pill-primary">
                  Book Strategy Call
                </Link>
              </div>
            </li>
          </AnimateIn>
        </ol>
      </div>
    </section>
  );
}
