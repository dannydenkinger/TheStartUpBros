import { cn } from "@/lib/utils";
import {
  TestimonialCard,
  TestimonialAuthor,
} from "@/components/ui/testimonial-card";
import { AnimateIn } from "@/components/shared/AnimateIn";

const testimonials = [
  {
    author: {
      name: "Ship in weeks",
      role: "How we work",
      image: "/images/portfolio/ai-finance.avif",
    },
    text: "Most MVPs take 3–6 months at an agency. We aim for 2–4 weeks. Scope tight, stack modern, decisions fast.",
  },
  {
    author: {
      name: "Trial week included",
      role: "How we work",
      image: "/images/portfolio/geo-analytics.avif",
    },
    text: "Start with a paid trial week. Love the work or walk away — no questions, no long-term lock-in.",
  },
  {
    author: {
      name: "Founders-only",
      role: "How we work",
      image: "/images/portfolio/sales-dashboard.avif",
    },
    text: "You work directly with Anthony and Danny. No account managers. No junior designers learning on your product.",
  },
  {
    author: {
      name: "Modern stack",
      role: "How we work",
      image: "/images/portfolio/ai-finance.avif",
    },
    text: "Next.js, Supabase, Stripe, OpenAI — what fast-moving SaaS is actually built on. No template mills, no WordPress hacks.",
  },
  {
    author: {
      name: "Design and dev, one team",
      role: "How we work",
      image: "/images/portfolio/geo-analytics.avif",
    },
    text: "No handoff seams between design and engineering. What you see in Figma is what ships to production.",
  },
  {
    author: {
      name: "Built by founders, for founders",
      role: "How we work",
      image: "/images/portfolio/sales-dashboard.avif",
    },
    text: "We've been in the weeds of a launch. Every decision we make is tuned for speed, clarity, and what a real user will actually do.",
  },
];

// Split into two rows
const topRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
const bottomRow = testimonials.slice(Math.ceil(testimonials.length / 2));

export function Testimonials() {
  return (
    <section
      className={cn(
        "bg-background text-foreground",
        "py-16 sm:py-24 md:py-32 px-0"
      )}
    >
      <div className="mx-auto flex max-w-full flex-col items-center gap-4 text-center sm:gap-16">
        <AnimateIn>
          <div className="flex flex-col items-center gap-4 px-4 sm:gap-6">
            <h2 className="text-display max-w-[720px] mx-auto">
              How we <span style={{ color: 'var(--accent-brand)' }}>work</span>
            </h2>
            <p className="text-body-lg max-w-[600px] mx-auto">
              The principles behind every project we ship.
            </p>
          </div>
        </AnimateIn>

        {/* Row 1 — scrolls left, seamless infinite.
            Content is rendered twice so -50% animation closes cleanly at a card boundary. */}
        <div className="relative flex w-full overflow-hidden">
          <div className="flex animate-marquee [--duration:60s] [&>*]:mr-4">
            {[...Array(2)].map((_, groupIdx) =>
              [...Array(4)].map((_, setIndex) =>
                topRow.map((testimonial, i) => (
                  <TestimonialCard
                    key={`top-${groupIdx}-${setIndex}-${i}`}
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
        <div className="relative flex w-full overflow-hidden -mt-8">
          <div className="flex animate-marquee-reverse [--duration:65s] [&>*]:mr-4">
            {[...Array(2)].map((_, groupIdx) =>
              [...Array(4)].map((_, setIndex) =>
                bottomRow.map((testimonial, i) => (
                  <TestimonialCard
                    key={`bottom-${groupIdx}-${setIndex}-${i}`}
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
