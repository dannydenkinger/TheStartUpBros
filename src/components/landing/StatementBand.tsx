import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { WordColorReveal } from "@/components/shared/WordColorReveal";
import { cn } from "@/lib/utils";

/* Founder quotes relocated out of the project cards (desses keeps its
 * testimonial rail on the dark statement band, not inside case cards). */
const quotes = [
  {
    text: "We went from juggling five different tools to one platform that actually fits how we work. Vesta CRM is the system we always needed but couldn't find off the shelf.",
    author: {
      name: "Danny Denkinger",
      role: "StartUpBros",
      image: "/images/avatars/danny-denkinger.png",
    },
  },
  {
    text: "Coaches don't want to operate a data tool — they want to make a decision. ZoneX is the shortest line between raw film and a game-day adjustment a coach actually trusts.",
    author: {
      name: "Anthony Denkinger",
      role: "StartUpBros",
      image: "/images/avatars/anthony-denkinger.png",
    },
  },
  {
    text: "Language can't be a barrier to care. We built SAID so translation works at the bedside — offline, on-device, and specific to medicine. That's a different problem than general translation, and it needs a different tool.",
    author: {
      name: "Anthony Denkinger",
      role: "StartUpBros",
      image: "/images/avatars/anthony-denkinger.png",
    },
  },
];

export function StatementBand() {
  return (
    <section className="band grain py-32">
      <div className="mx-auto max-w-[1360px] px-6 md:px-10">
        {/* Statement — scroll-linked word reveal, gray → white */}
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-span-7">
            <WordColorReveal
              text="The one-stop shop for AI-powered MVPs. We deliver 90% solutions so you can go to market tomorrow. Full-stack apps, SaaS frameworks, AI agents, and more."
              className="text-[clamp(1.375rem,1.9vw,1.625rem)] leading-snug tracking-[-0.01em]"
            />
          </div>
        </div>

        {/* Divider row — dot label left, plain text link right */}
        <AnimateIn>
          <div className="mt-24 flex items-center justify-between gap-6 border-b border-white/15 pb-4">
            <span className="badge-pill text-micro-label">
              <span aria-hidden className="label-dot" />
              Case Studies
            </span>
            <Link
              href="/portfolio"
              className="text-[15px] text-white transition-opacity hover:opacity-75"
            >
              View All Case Studies
            </Link>
          </div>
        </AnimateIn>

        {/* Quote rail — horizontal snap scroll, alternating surfaces */}
        <div className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto scrollbar-hide">
          {quotes.map((q, i) => {
            const lightCard = i % 2 === 1;
            return (
              <figure
                key={q.author.name + i}
                className={cn(
                  "flex min-h-[360px] w-[min(560px,85vw)] shrink-0 snap-start flex-col rounded-2xl p-8",
                  lightCard
                    ? "bg-[#F4F4F2] text-neutral-900"
                    : "bg-white/[0.06] text-white",
                )}
              >
                <blockquote className="text-2xl leading-snug tracking-[-0.01em]">
                  &ldquo;{q.text}&rdquo;
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-3 pt-10">
                  <span className="relative block h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={q.author.image}
                      alt=""
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[15px] font-medium leading-tight">
                      {q.author.name}
                    </span>
                    <span
                      className={cn(
                        "mt-0.5 block text-[13px] leading-tight",
                        lightCard ? "text-neutral-500" : "text-white/55",
                      )}
                    >
                      {q.author.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
