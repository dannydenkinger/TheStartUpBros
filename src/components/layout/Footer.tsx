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
    <footer className="band grain border-t border-border">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        {/* Top zone — dot label / brand+contact / link columns */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 md:gap-y-12 pt-14 md:pt-28 pb-12 md:pb-24">
          {/* (1) Dot label */}
          <div className="col-span-12 lg:col-span-2">
            <span className="badge-pill text-micro-label">
              <span aria-hidden className="label-dot" />
              <span className="lowercase">MVP STUDIO</span>
            </span>
          </div>

          {/* (2) Brand / contact block */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <p className="text-[17px] text-white">StartUpBros</p>
            <p className="mt-3 max-w-xs text-[17px] leading-[1.5] text-white">
              Full-stack development for startups. We build apps, websites, and
              software — from idea to launch.
            </p>
          </div>

          {/* (3+4) Link columns */}
          {columns.map((col) => (
            <div key={col.title} className="col-span-6 sm:col-span-4 lg:col-span-2">
              <p className="mb-4 text-[17px] text-muted-foreground">
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[17px] text-white hover:text-white/70 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row — giant wordmark left, legal stack right */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between pt-6 md:pt-10 pb-10 md:pb-12">
          <Link
            href="/"
            className="block text-[clamp(4rem,9vw,8.5rem)] max-md:text-[clamp(2.5rem,15vw,4rem)] font-semibold leading-[0.9] tracking-[-0.04em] text-white whitespace-nowrap"
          >
            StartUpBros<span className="text-(--accent-brand)">.</span>
          </Link>
          <div className="shrink-0 space-y-1 pb-2 text-xs text-muted-foreground md:text-right">
            <p>
              &copy; {new Date().getFullYear()} StartUpBros. All rights
              reserved.
            </p>
            <p className="lowercase">BUILT IN WEEKS, NOT MONTHS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
