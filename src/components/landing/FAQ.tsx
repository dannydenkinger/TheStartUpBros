"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionHeader } from "@/components/shared/SectionHeader";

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
  { src: "/images/avatars/anthony-denkinger.png", name: "Anthony Denkinger" },
  { src: "/images/avatars/danny-denkinger.png", name: "Danny Denkinger" },
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
    <div className="rounded-xl bg-card shadow-none">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
      >
        <span className="flex-1 text-[17px] font-semibold leading-snug text-foreground">
          {question}
        </span>
        <span
          aria-hidden
          className={cn(
            "plus-btn transition-transform duration-300",
            isOpen && "rotate-45",
          )}
        >
          +
        </span>
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div className="mx-6 border-t border-border">
            <p className="max-w-[560px] pt-4 pb-5 text-sm leading-relaxed text-muted-foreground">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// How many questions show before the quiet "show all" toggle
const VISIBLE_COUNT = 6;

export function FAQ({ index = "04" }: { index?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);
  const visibleFaqs = showAll ? faqs : faqs.slice(0, VISIBLE_COUNT);

  return (
    <section className="px-6 md:px-10 py-14 md:py-28 bg-(--muted) dark:bg-background">
      <div className="mx-auto max-w-[1600px]">
        <AnimateIn>
          <SectionHeader
            index={index}
            label="FAQ"
            title={
              <>
                All your Questions,{" "}
                <span className="accent-word">Answered.</span>
              </>
            }
          />
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-10">
          {/* ─── Left: FAQ stack ───────────────────────────────────── */}
          <div className="space-y-3">
            {visibleFaqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}

            {!showAll && (
              <button
                type="button"
                onClick={() => setShowAll(true)}
                className="flex w-full cursor-pointer items-center justify-between gap-6 rounded-xl px-6 py-4 text-left transition-colors duration-200 hover:bg-card"
              >
                <span className="text-[15px] font-medium text-muted-foreground">
                  Show all questions{" "}
                  <span className="tabular-nums">({faqs.length})</span>
                </span>
                <span aria-hidden className="plus-btn">
                  +
                </span>
              </button>
            )}
          </div>

          {/* ─── Right: sticky CTA card ────────────────────────────── */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl bg-card p-7">
              <p className="text-[17px] leading-snug text-muted-foreground mb-6">
                FAQs can only do so much. For the rest, there&apos;s us.
              </p>

              <div className="flex flex-wrap items-center gap-5">
                <Link
                  href="/strategy-call"
                  className="btn-pill btn-pill-primary bg-(--background) dark:bg-[#f0f0f2]"
                >
                  Book Strategy Call
                </Link>
                <Link
                  href="/strategy-call"
                  className="text-[15px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Chat with Us
                </Link>
              </div>

              {/* Founder strip — grayscale to keep the pair tonally unified */}
              <div className="mt-6 grid grid-cols-2 gap-1.5">
                {teamAvatars.map((member) => (
                  <div
                    key={member.src}
                    className="relative aspect-[4/5] rounded-lg overflow-hidden bg-secondary"
                  >
                    <Image
                      src={member.src}
                      alt={member.name}
                      fill
                      sizes="260px"
                      className="object-cover object-[50%_20%] grayscale contrast-[1.05]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
