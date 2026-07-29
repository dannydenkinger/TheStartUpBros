import Link from "next/link";

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
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1360px] px-6 md:px-10">
        {/* Wordmark, baseline-cropped into the rule below */}
        <div className="overflow-hidden pt-16 md:pt-24">
          <Link
            href="/"
            className="-mb-[0.12em] block font-display text-[clamp(4rem,13vw,11rem)] leading-[0.9] tracking-[-0.02em] text-foreground whitespace-nowrap"
          >
            StartUpBros
          </Link>
        </div>

        {/* Middle grid */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 border-t border-border py-12">
          <p className="text-caption col-span-12 max-w-xs lg:col-span-4">
            Full-stack development for startups. We build apps, websites, and
            software — from idea to launch.
          </p>

          {columns.map((col, i) => (
            <div
              key={col.title}
              className={
                i === 0
                  ? "col-span-6 sm:col-span-4 lg:col-start-7 lg:col-span-2"
                  : "col-span-6 sm:col-span-4 lg:col-span-2"
              }
            >
              <p className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-2 border-t border-border py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] text-muted-foreground">
            &copy; {new Date().getFullYear()} StartUpBros. All rights reserved.
          </p>
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
            BUILT IN WEEKS, NOT MONTHS
          </p>
        </div>
      </div>
    </footer>
  );
}
