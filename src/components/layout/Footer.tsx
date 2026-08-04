import Link from "next/link";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { FooterWordmark } from "@/components/shared/FooterWordmark";

const columns = [
  {
    title: "Company",
    links: [
      { label: "Portfolio", href: "/portfolio" },
      { label: "Gallery", href: "/gallery" },
      { label: "Blog", href: "/blog" },
      { label: "Book a Call", href: "/strategy-call" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "Custom Apps", href: "/services/custom-app-dev" },
      { label: "SEO", href: "/services/seo" },
      { label: "AI Integration", href: "/services/ai-integration" },
      { label: "All Services", href: "/services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Case Studies", href: "/portfolio" },
      { label: "SaaS Cost Calculator", href: "/tools/saas-cost" },
      { label: "All Services", href: "/services" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="band grain border-t border-border">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        {/* Top zone — dot label / brand+contact / link columns */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 md:gap-y-12 pt-14 md:pt-28 pb-12 md:pb-24">
          {/* (1) Dot label */}
          <AnimateIn className="col-span-12 lg:col-span-2">
            <span className="badge-pill text-micro-label">
              <span aria-hidden className="label-dot" />
              <span className="lowercase">MVP STUDIO</span>
            </span>
          </AnimateIn>

          {/* (2) Brand / contact block */}
          <AnimateIn
            delay={0.06}
            className="col-span-12 sm:col-span-6 lg:col-span-4"
          >
            <p className="text-[17px] text-white">StartUpBros</p>
            <p className="mt-3 max-w-xs text-[17px] leading-[1.5] text-white">
              Full-stack development for startups. We build apps, websites, and
              software — from idea to launch.
            </p>
          </AnimateIn>

          {/* (3+4) Link columns — each column staggers its own rows, and the
           * columns themselves step in left-to-right. */}
          {columns.map((col, ci) => (
            <AnimateIn
              key={col.title}
              delay={0.12 + ci * 0.07}
              className="col-span-6 sm:col-span-4 lg:col-span-2"
            >
              <p className="mb-4 text-[17px] text-muted-foreground">
                {col.title}
              </p>
              <AnimateIn
                as="ul"
                itemAs="li"
                stagger={0.05}
                delay={0.06}
                margin="-40px"
                className="space-y-2.5"
              >
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-[17px] text-white hover:text-white/70 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </AnimateIn>
            </AnimateIn>
          ))}
        </div>

        {/* Bottom row — giant wordmark left, legal stack right */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between pt-6 md:pt-10 pb-10 md:pb-12">
          <FooterWordmark />
          {/* margin 0: this block never clears the last 80px of the viewport,
           * so the default inset trigger would leave it hidden at page end. */}
          <AnimateIn
            delay={0.3}
            margin="0px"
            className="shrink-0 space-y-1 pb-2 text-xs text-muted-foreground md:text-right"
          >
            <p>
              &copy; {new Date().getFullYear()} StartUpBros. All rights
              reserved.
            </p>
            <p className="lowercase">BUILT IN WEEKS, NOT MONTHS</p>
          </AnimateIn>
        </div>
      </div>
    </footer>
  );
}
