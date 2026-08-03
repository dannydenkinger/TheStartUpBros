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
    <footer className="band grain">
      <div className="mx-auto max-w-[1360px] px-6 md:px-10">
        {/* Link columns */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 pt-16 md:pt-20 pb-12">
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
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground">
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

        {/* Legal bar */}
        <div className="flex flex-col gap-2 border-t border-border py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} StartUpBros. All rights reserved.
          </p>
          <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
            BUILT IN WEEKS, NOT MONTHS
          </p>
        </div>

        {/* Giant wordmark, baseline-cropped into the band edge */}
        <div className="overflow-hidden pt-6 md:pt-10">
          <Link
            href="/"
            className="-mb-[0.155em] block text-[clamp(4rem,12vw,10rem)] font-semibold leading-[0.9] tracking-[-0.04em] text-white whitespace-nowrap"
          >
            StartUpBros<span className="text-(--accent-brand)">.</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
