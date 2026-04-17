"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimateIn } from "@/components/shared/AnimateIn";

const faqs = [
  {
    question:
      "Why should I choose Startup Bros over traditional design agencies?",
    answer:
      "Traditional agencies often take months to deliver, lack accountability, and work in silos. At Startup Bros, we deliver in days, collaborate closely with your team, and take full ownership of the product funnel to ensure your success.",
  },
  {
    question: "How is Startup Bros different from hiring an in-house designer?",
    answer:
      "Hiring in-house means salaries, benefits, and months of onboarding. With Startup Bros you get a founder-led team — Anthony and Danny directly on your project — at a fraction of the cost, ready to ship from day one.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "We aim to have a usable milestone in week one. Full MVPs and product redesigns typically ship in 2–4 weeks depending on scope.",
  },
  {
    question: "What services does Startup Bros offer?",
    answer:
      "We offer end-to-end UI/UX design, website design, landing pages, design systems, product strategy, user research, prototyping, and developer-ready handoffs.",
  },
  {
    question: "Do you have experience in my industry?",
    answer:
      "We focus on B2B SaaS, AI products, fintech, and web3. Our design studies across these verticals shape the patterns we bring to every project — from trust signals on enterprise tools to data density in fintech dashboards.",
  },
  {
    question: "Will I be locked into a long-term contract?",
    answer:
      "No. We operate on flexible engagement models with no long-term lock-ins. You can scale up or down based on your needs at any time.",
  },
  {
    question: "How do you ensure collaboration with our team?",
    answer:
      "We work inside your existing tools — Slack, Figma, Linear, Notion — and provide daily updates. You're never out of the loop.",
  },
  {
    question: "What kind of deliverables can I expect?",
    answer:
      "Pixel-perfect Figma files, interactive prototypes, design systems with components, and developer-ready specs with assets and annotations.",
  },
  {
    question: "Do you take feedback during the design process?",
    answer:
      "Absolutely. We build in structured feedback loops at every milestone. Unlimited revisions are included until you're 100% satisfied.",
  },
  {
    question: "How do I know if Startup Bros is the right fit for me?",
    answer:
      "Book a free strategy call. We'll discuss your goals, timeline, and budget to see if we're the right match — no strings attached.",
  },
  {
    question: "How do you handle handoffs to developers?",
    answer:
      "We deliver organized Figma files with auto-layout, component documentation, design tokens, and CSS specs. Our designs are built to be developer-friendly from the start.",
  },
  {
    question: "Can you help us with strategy, or do you only handle design?",
    answer:
      "Strategy is core to our process. Before touching pixels, we analyze your market, competitors, and user flows to ensure the design solves real business problems.",
  },
  {
    question: "How much involvement is required from our team?",
    answer:
      "Minimal. We need a kickoff session and periodic feedback reviews. Everything else — research, design, iteration — is handled by us.",
  },
  {
    question: "What happens if we're not happy with the work?",
    answer:
      "We offer unlimited revisions within scope. If after the first milestone you're not satisfied, we'll refund your investment — no questions asked.",
  },
  {
    question: "Do you offer support after the project is delivered?",
    answer:
      "Yes. We offer ongoing retainer packages for continuous design support, updates, and iteration as your product evolves.",
  },
];

const teamAvatars = [
  "/images/portfolio/ai-finance.avif",
  "/images/portfolio/geo-analytics.avif",
  "/images/portfolio/sales-dashboard.avif",
  "/images/portfolio/ai-visits.avif",
  "/images/portfolio/socialsonic.avif",
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card transition-colors",
        isOpen && "bg-card",
      )}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
      >
        <span className="text-[15px] font-medium text-foreground leading-[1.4]">
          {question}
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300",
            isOpen && "rotate-180",
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-[14px] leading-[1.7] text-muted-foreground">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-6 lg:px-10 py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-[1200px]">
        <AnimateIn>
          <div className="text-center mb-14">
            <span className="badge-pill mb-6 inline-block" style={{ borderColor: 'var(--accent-brand-glow)', background: 'var(--accent-brand-soft)' }}>FAQs</span>
            <h2 className="text-display mb-4">All your Questions, <span style={{ color: 'var(--accent-brand)' }}>Answered.</span></h2>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* ─── Left: sticky CTA card ─────────────────────────────── */}
          <div className="lg:sticky lg:top-[120px] lg:self-start">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              {/* Overlapping avatars */}
              <div className="flex -space-x-3 mb-5">
                {teamAvatars.map((src, i) => (
                  <div
                    key={src}
                    className="relative w-11 h-11 rounded-full border-2 border-background overflow-hidden bg-secondary"
                    style={{ zIndex: teamAvatars.length - i }}
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <p className="text-[15px] leading-[1.45] text-foreground mb-5">
                FAQs can only do so much. For the rest, there&apos;s us.
              </p>

              <div className="flex flex-col gap-2">
                <Link
                  href="/strategy-call"
                  className="btn-pill btn-pill-primary w-full !py-3"
                >
                  Book Strategy Call
                </Link>
                <Link
                  href="/strategy-call"
                  className="btn-pill btn-pill-secondary w-full !py-3 flex items-center justify-center gap-2"
                >
                  <MessageCircle
                    className="w-4 h-4 text-emerald-500"
                    strokeWidth={2.2}
                  />
                  Chat with Us
                </Link>
              </div>
            </div>
          </div>

          {/* ─── Right: FAQ stack ──────────────────────────────────── */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
