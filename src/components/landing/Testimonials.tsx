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
    text: "StartUpBros took our rough product spec and shipped a production-ready SaaS with user auth, billing, and a full API in under three weeks. Unreal.",
  },
  {
    author: {
      name: "Sarah K.",
      role: "Operations Lead",
      image: "/images/portfolio/geo-analytics.avif",
    },
    text: "They built us a custom automation pipeline that replaced four hours of manual data entry per day. The ROI was obvious within the first week.",
  },
  {
    author: {
      name: "Marcus T.",
      role: "CEO, FinTech MVP",
      image: "/images/portfolio/sales-dashboard.avif",
    },
    text: "Finally, a dev team that actually gets startup speed. Clean code, daily deploys, no scope creep — just shipped product.",
  },
  {
    author: {
      name: "Danielle P.",
      role: "Head of Product, EdTech",
      image: "/images/portfolio/ai-finance.avif",
    },
    text: "They understood our product vision instantly and built an app that outperformed every prototype we'd gotten from other agencies. The codebase was clean enough for our team to extend on day one.",
  },
  {
    author: {
      name: "James W.",
      role: "CTO, HealthTech",
      image: "/images/portfolio/geo-analytics.avif",
    },
    text: "From initial architecture to a fully deployed MVP in 10 days. CI/CD pipeline, staging environment, production-ready — the whole nine yards.",
  },
  {
    author: {
      name: "Priya M.",
      role: "VP Design, AI Startup",
      image: "/images/portfolio/sales-dashboard.avif",
    },
    text: "StartUpBros treats your product like their own. The code quality, test coverage, and attention to performance were things we'd never seen from an outside team.",
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
              Hear from founders and product leaders who scaled with StartUpBros.
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
