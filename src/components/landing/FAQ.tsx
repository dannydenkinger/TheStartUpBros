"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimateIn } from "@/components/shared/AnimateIn";

const faqs = [
  {
    question: "Why should I choose BRICX over traditional design agencies?",
    answer:
      "Traditional agencies often take months to deliver, lack accountability, and work in silos. At BRICX, we deliver in days, collaborate closely with your team, and take full ownership of the product funnel to ensure your success.",
  },
  {
    question: "How is BRICX different from hiring an in-house designer?",
    answer:
      "Hiring in-house means salaries, benefits, and months of onboarding. With BRICX you get an entire senior design team on-demand at a fraction of the cost — ready to ship from day one.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Most clients see meaningful deliverables within the first week. Full product redesigns or MVPs are typically completed in 2–4 weeks depending on scope.",
  },
  {
    question: "What services does BRICX offer?",
    answer:
      "We offer end-to-end UI/UX design, website design, landing pages, design systems, product strategy, user research, prototyping, and developer-ready handoffs.",
  },
  {
    question: "Do you have experience in my industry?",
    answer:
      "We've designed for 50+ SaaS companies across AI, Fintech, HealthTech, EdTech, Web3, B2B, Marketing, and more. Our cross-industry experience lets us bring proven patterns to your niche.",
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
    question: "How do I know if BRICX is the right fit for me?",
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
    <div className="border-b border-border/60">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-foreground/80"
      >
        <span className="text-[15px] font-medium text-foreground pr-8">
          {question}
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p className="pb-6 text-[14px] leading-[1.7] text-muted-foreground">
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
    <section className="px-6 lg:px-10 py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-[800px]">
        <AnimateIn>
          <div className="text-center mb-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e0e0e0] bg-[#f9f9f9] px-4 py-2 text-[13px] font-medium text-[#242424] shadow-sm mb-6">
              FAQs
            </span>
          </div>
          <h2 className="text-display text-center mb-4">
            All your Questions, Answered.
          </h2>
          <p className="text-body-lg text-center max-w-[500px] mx-auto mb-6">
            FAQs can only do so much. For the rest, there&apos;s us.
          </p>
          <div className="flex items-center justify-center gap-3 mb-16">
            <a
              href="/strategy-call"
              className="inline-flex items-center justify-center rounded-full bg-[#242424] text-white px-6 py-3 text-[14px] font-medium hover:bg-[#333] transition-colors"
            >
              Book Strategy Call
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=918178563140"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[#e0e0e0] bg-white text-[#242424] px-6 py-3 text-[14px] font-medium hover:bg-[#f5f5f5] transition-colors"
            >
              Chat with Us
            </a>
          </div>
        </AnimateIn>

        <div>
          {faqs.map((faq, i) => (
            <AnimateIn key={i} delay={i * 0.02}>
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
              />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
