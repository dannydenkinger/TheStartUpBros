"use client";

import Image from "next/image";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { CTAButton } from "@/components/shared/CTAButton";

const services = [
  {
    title: "Brand Identity",
    description:
      "Get a differentiated and unique brand identity to stand out your product from competitors.",
    image: "/images/portfolio/sales-dashboard.avif",
  },
  {
    title: "Website Design",
    description:
      "Turn your website into a eye-dropping marketing machine to turn visitors into customers.",
    image: "/images/portfolio/ai-finance.avif",
  },
  {
    title: "Product Design",
    description:
      "Make your product so delightful to, it instantly becomes the thing to talk about in the industry.",
    image: "/images/portfolio/ai-visits.avif",
  },
  {
    title: "No Code Development",
    description:
      "Get your website developed in a blazing fast speed and have complete control as you scale.",
    image: "/images/portfolio/thrust-web.avif",
  },
  {
    title: "3D Design & Motion",
    description:
      "Elevate your brand by adding seamless 3D and motion animations to delight users.",
    image: "/images/portfolio/geo-analytics.avif",
  },
  {
    title: "Pitch Deck & Collaterals",
    description:
      "Fulfill all marketing design requirements with a team that feels like your own.",
    image: "/images/portfolio/community-search.avif",
  },
];

export function ValueProps() {
  return (
    <section className="px-6 lg:px-10 py-20 md:py-28">
      <div className="mx-auto max-w-[1100px]">
        <AnimateIn>
          <div className="text-center mb-14">
            <span className="badge-bricx mb-6 inline-block">Our Services</span>
            <h2 className="text-h2 text-foreground">
              Your full-stack design partner to
              <br className="hidden md:block" />
              solve all your creative problems
            </h2>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <AnimateIn key={service.title} delay={i * 0.08}>
              <div className="group rounded-2xl border border-[#e5e5e5] bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-[200px] overflow-hidden bg-[#f5f5f5]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-[16px] font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.5}>
          <div className="mt-14 text-center">
            <CTAButton href="/strategy-call" variant="primary">
              Book Strategy Call
            </CTAButton>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
