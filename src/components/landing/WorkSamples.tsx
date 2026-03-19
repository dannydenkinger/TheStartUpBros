import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "@/components/shared/AnimateIn";

const workSamples = [
  {
    title: "Writesonic GEO Platform",
    image: "/images/portfolio/sales-crm-perspective.webp",
    href: "/portfolio/writesonic",
  },
  {
    title: "Loopback MVP",
    image: "/images/portfolio/ai-landing.webp",
    href: "/portfolio/loopback",
  },
  {
    title: "N3on Token Launch",
    image: "/images/portfolio/defi-landing.webp",
    href: "/portfolio/n3on",
  },
  {
    title: "Thrust Mobile App",
    image: "/images/portfolio/travel-app.webp",
    href: "/portfolio/thrust",
  },
  {
    title: "SocialSonic Dashboard",
    image: "/images/portfolio/freelancer-dashboard.webp",
    href: "/portfolio/socialsonic",
  },
  {
    title: "Community Search",
    image: "/images/portfolio/productivity-dashboard.webp",
    href: "/portfolio/community",
  },
];

export function WorkSamples() {
  return (
    <section className="px-6 lg:px-10 py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-[1400px]">
        <AnimateIn>
          <div className="text-center mb-16">
            <h2 className="text-display mb-4">Work Samples</h2>
          </div>
        </AnimateIn>

        {/* Bento-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {workSamples.map((sample, i) => (
            <AnimateIn key={sample.title} delay={i * 0.06}>
              <Link href={sample.href} className="group block">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={sample.image}
                      alt={sample.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-[16px] font-medium text-foreground group-hover:text-foreground/70 transition-colors">
                      {sample.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>

        {/* View More CTA */}
        <AnimateIn delay={0.3}>
          <div className="text-center mt-14">
            <Link
              href="/portfolio"
              className="btn-pill btn-pill-secondary"
            >
              View More
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
