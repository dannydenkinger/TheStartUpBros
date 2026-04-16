import { cn } from "@/lib/utils";
import {
  TestimonialCard,
  TestimonialAuthor,
} from "@/components/ui/testimonial-card";
import { AnimateIn } from "@/components/shared/AnimateIn";

const testimonials = [
  {
    author: {
      name: "Alex R.",
      role: "Founder, PropTech Startup",
      image: "/images/portfolio/ai-finance.avif",
    },
    text: "Startup Bros took our napkin sketch and turned it into a production-ready SaaS in under three weeks. Unreal.",
  },
  {
    author: {
      name: "Sarah K.",
      role: "Operations Lead",
      image: "/images/portfolio/geo-analytics.avif",
    },
    text: "Their AI agent replaced four hours of manual data entry per day. The ROI was obvious within the first week.",
  },
  {
    author: {
      name: "Marcus T.",
      role: "CEO, FinTech MVP",
      image: "/images/portfolio/sales-dashboard.avif",
    },
    text: "Finally, a dev team that gets startup speed. No scope creep, no surprises — just shipped product.",
  },
  {
    author: {
      name: "Danielle P.",
      role: "Head of Product, EdTech",
      image: "/images/portfolio/ai-finance.avif",
    },
    text: "They understood our product vision instantly. The UX they delivered outperformed every agency we'd worked with before.",
  },
  {
    author: {
      name: "James W.",
      role: "CTO, HealthTech",
      image: "/images/portfolio/geo-analytics.avif",
    },
    text: "From wireframes to a fully branded design system in 10 days. Our engineering team was able to start building immediately.",
  },
  {
    author: {
      name: "Priya M.",
      role: "VP Design, AI Startup",
      image: "/images/portfolio/sales-dashboard.avif",
    },
    text: "Startup Bros treats your product like their own. The attention to detail in micro-interactions was something we'd never seen from an agency.",
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
              Don&apos;t Take Our Word. Take Theirs.
            </h2>
            <p className="text-body-lg max-w-[600px] mx-auto">
              Hear from founders and product leaders who scaled with Startup Bros.
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
