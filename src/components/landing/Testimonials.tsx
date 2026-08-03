import {
  TestimonialCard,
  TestimonialAuthor,
} from "@/components/ui/testimonial-card";
import { AnimateIn } from "@/components/shared/AnimateIn";

const testimonials = [
  {
    author: {
      name: "James Whitfield",
      role: "Founder @NovaTech",
      image: "/images/avatars/avatar-1.jpg",
    },
    text: "Most MVPs take 3–6 months at an agency. We aim for 2–4 weeks. Scope tight, stack modern, decisions fast.",
  },
  {
    author: {
      name: "Mia Tanaka",
      role: "CEO @BrightLoop",
      image: "/images/avatars/avatar-2.jpg",
    },
    text: "Start with a paid trial week. Love the work or walk away — no questions, no long-term lock-in.",
  },
  {
    author: {
      name: "David Kessler",
      role: "CTO @Relay",
      image: "/images/avatars/avatar-3.jpg",
    },
    text: "You work directly with Anthony and Danny. No account managers. No junior designers learning on your product.",
  },
  {
    author: {
      name: "Sarah Lindgren",
      role: "Founder @Crestline",
      image: "/images/avatars/avatar-4.jpg",
    },
    text: "Next.js, Supabase, Stripe, OpenAI — what fast-moving SaaS is actually built on. No template mills, no WordPress hacks.",
  },
  {
    author: {
      name: "Ryan Calloway",
      role: "Head of Product @Arcway",
      image: "/images/avatars/avatar-5.jpg",
    },
    text: "No handoff seams between design and engineering. What you see in Figma is what ships to production.",
  },
  {
    author: {
      name: "Emily Park",
      role: "Founder @Stackform",
      image: "/images/avatars/avatar-6.jpg",
    },
    text: "We've been in the weeds of a launch. Every decision we make is tuned for speed, clarity, and what a real user will actually do.",
  },
];

// Split into two rows
const topRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
const bottomRow = testimonials.slice(Math.ceil(testimonials.length / 2));

export function Testimonials() {
  return (
    <section className="bg-background text-foreground py-20 md:py-28">
      <div className="mx-auto max-w-[1360px] px-6 md:px-10">
        <AnimateIn>
          {/* Divider row — dot label over a full-width hairline (desses) */}
          <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
            <span className="badge-pill text-micro-label">
              <span aria-hidden className="label-dot" />
              <span className="sr-only">03 · </span>
              <span className="lowercase">PRINCIPLES</span>
            </span>
          </div>

          <div className="grid grid-cols-12 gap-x-6 gap-y-6 mt-14 mb-20 md:mb-28">
            <h2 className="col-span-12 lg:col-span-7 text-h2">
              How We <span className="accent-word">Work</span>
            </h2>
            <p className="col-span-12 lg:col-start-9 lg:col-span-4 lg:self-end text-body-lg">
              The principles behind every project we ship.
            </p>
          </div>
        </AnimateIn>
      </div>

      <div className="flex flex-col">
        {/* Row 1 — scrolls left, seamless infinite.
            Content is rendered twice so -50% animation closes cleanly at a card boundary.
            Vertical padding keeps card shadows inside the overflow clip. */}
        <div className="relative flex w-full overflow-hidden">
          <div className="flex animate-marquee py-5 [--duration:60s] [&>*]:mr-4">
            {[...Array(2)].map((_, groupIdx) =>
              [...Array(4)].map((_, setIndex) =>
                topRow.map((testimonial, i) => (
                  <TestimonialCard
                    key={`top-${groupIdx}-${setIndex}-${i}`}
                    index={String(i + 1).padStart(2, "0")}
                    tone={i === 2 ? "dark" : "light"}
                    {...testimonial}
                  />
                )),
              ),
            )}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/6 bg-gradient-to-r from-background sm:block z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/6 bg-gradient-to-l from-background sm:block z-10" />
        </div>

        {/* Row 2 — scrolls right, seamless infinite */}
        <div className="relative flex w-full overflow-hidden">
          <div className="flex animate-marquee-reverse py-5 [--duration:65s] [&>*]:mr-4">
            {[...Array(2)].map((_, groupIdx) =>
              [...Array(4)].map((_, setIndex) =>
                bottomRow.map((testimonial, i) => (
                  <TestimonialCard
                    key={`bottom-${groupIdx}-${setIndex}-${i}`}
                    index={String(topRow.length + i + 1).padStart(2, "0")}
                    tone={i === 0 ? "dark" : "light"}
                    {...testimonial}
                  />
                )),
              ),
            )}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/6 bg-gradient-to-r from-background sm:block z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/6 bg-gradient-to-l from-background sm:block z-10" />
        </div>
      </div>
    </section>
  );
}
