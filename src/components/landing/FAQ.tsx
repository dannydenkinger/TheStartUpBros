"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { REVEAL_EASE } from "@/lib/animations";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { faqs } from "@/data/faqs";
import { useContactModal } from "@/context/ContactModalContext";

const teamAvatars = [
  { src: "/images/avatars/anthony-denkinger.png", name: "Anthony Denkinger" },
  { src: "/images/avatars/danny-denkinger.png", name: "Danny Denkinger" },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  delay,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  delay: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  const body = (
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
            "plus-btn",
            !prefersReducedMotion &&
              "transition-[transform,background-color] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
            isOpen && "rotate-45",
          )}
        >
          +
        </span>
      </button>
      {/* Answer reveal stays on grid-rows (the only technique that animates to
       * intrinsic height without a measurement pass); easing is the house
       * REVEAL_EASE so it decelerates like everything else on the page. The
       * copy itself rides in on a transform, which is what gives the reveal
       * its weight — the row alone reads mechanical. */}
      <div
        className={cn(
          "grid motion-reduce:transition-none",
          "transition-[grid-template-rows,opacity] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div className="mx-6 border-t border-border">
            <p
              className={cn(
                "max-w-[560px] pt-4 pb-5 text-sm leading-relaxed text-muted-foreground",
                !prefersReducedMotion &&
                  "transition-transform duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                !prefersReducedMotion &&
                  (isOpen ? "translate-y-0" : "-translate-y-1.5"),
              )}
            >
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  if (prefersReducedMotion) return body;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: REVEAL_EASE, delay }}
    >
      {body}
    </motion.div>
  );
}

// How many questions show before the quiet "show all" toggle
const VISIBLE_COUNT = 6;

export function FAQ({ index = "05" }: { index?: string }) {
  const { openModal } = useContactModal();
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
                /* First screenful cascades; anything revealed by "show all"
                 * lands almost immediately — the user asked for it. */
                delay={
                  i < VISIBLE_COUNT
                    ? i * 0.05
                    : Math.min(i - VISIBLE_COUNT, 4) * 0.03
                }
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
                <button
                  type="button"
                  onClick={openModal}
                  className="cursor-pointer text-[15px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Chat with Us
                </button>
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
