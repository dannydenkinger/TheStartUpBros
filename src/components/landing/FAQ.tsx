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
      "Why should I choose StartUpBros over hiring developers myself?",
    answer:
      "Hiring developers means months of recruiting, six-figure salaries, and no guarantee they can ship a full product. With StartUpBros, you get a battle-tested full-stack team that's built dozens of startup products — ready to deploy from day one.",
  },
  {
    question: "How is StartUpBros different from a freelancer or dev shop?",
    answer:
      "Freelancers disappear. Dev shops pad timelines. We operate like your in-house engineering team — embedded in your workflow, shipping daily, and accountable to your launch date. No hand-offs, no black boxes.",
  },
  {
    question: "How long does it take to build an MVP?",
    answer:
      "Most MVPs ship in 2–4 weeks. We scope aggressively, cut what doesn't matter for launch, and get you to market fast. Full-scale apps with complex features typically take 6–10 weeks.",
  },
  {
    question: "What services does StartUpBros offer?",
    answer:
      "We cover nine core services: Web Development, Custom App Development, SEO, Brand Design, Custom Automation, AI Integration, Lead Generation, Digital Advertising, and Strategy & Consulting. Everything your startup needs under one roof.",
  },
  {
    question: "Do you have experience in my industry?",
    answer:
      "We've built products across AI, Fintech, HealthTech, EdTech, PropTech, B2B SaaS, eCommerce, and more. Our cross-industry experience means we bring proven technical patterns and growth strategies to your niche.",
  },
  {
    question: "Will I be locked into a long-term contract?",
    answer:
      "No. We operate on flexible engagement models with no long-term lock-ins. You can scale up or down based on your needs at any time.",
  },
  {
    question: "How do you collaborate with our team?",
    answer:
      "We work inside your existing tools — Slack, GitHub, Linear, Notion — and push daily commits. You get full visibility into progress with shared repos, staging environments, and async standups.",
  },
  {
    question: "What kind of deliverables can I expect?",
    answer:
      "Clean, production-ready code in a private repo, deployed to staging and production environments, with full API documentation, CI/CD pipelines, and admin access to everything we build.",
  },
  {
    question: "Do you take feedback during the development process?",
    answer:
      "Absolutely. We run weekly demos on staging so you can click through real builds — not static mockups. Feedback gets prioritized and shipped in the next sprint.",
  },
  {
    question: "How do I know if StartUpBros is the right fit for me?",
    answer:
      "Book a free strategy call. We'll talk through your product idea, technical requirements, and timeline to see if we're the right match — no strings attached.",
  },
  {
    question: "What tech stack do you use?",
    answer:
      "We're stack-agnostic but lean toward modern, scalable tools: Next.js, React, Node, Python, PostgreSQL, Supabase, AWS, and Vercel. We'll pick what's right for your product, not what's trendy.",
  },
  {
    question: "Can you help with strategy, or do you only write code?",
    answer:
      "Strategy is core to our process. Before writing a line of code, we map your market, validate your idea, and architect a technical roadmap so every sprint moves the needle on real business goals.",
  },
  {
    question: "How much involvement is required from our team?",
    answer:
      "Minimal. We need a kickoff session and periodic feedback reviews. Everything else — architecture, development, testing, deployment — is handled by us.",
  },
  {
    question: "What happens if we're not happy with the work?",
    answer:
      "We offer unlimited revisions within scope. If after the first milestone you're not satisfied, we'll refund your investment — no questions asked.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Yes. We offer ongoing retainer packages for maintenance, feature development, bug fixes, and scaling support as your product grows and your user base expands.",
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
            <span className="badge-pill mb-6 inline-block">FAQs</span>
            <h2 className="text-display mb-4">All your Questions, Answered.</h2>
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
