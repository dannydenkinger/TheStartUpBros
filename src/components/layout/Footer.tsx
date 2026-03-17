import Link from "next/link";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/strategy-call" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "App Development", href: "/services#full-stack" },
      { label: "SaaS Platforms", href: "/services#saas" },
      { label: "AI Agents", href: "/services#ai-agents" },
      { label: "Web Design", href: "/services#web-design" },
    ],
  },
  {
    title: "Blog",
    links: [
      { label: "Case Studies", href: "/portfolio" },
      { label: "How We Work", href: "/services" },
      { label: "Book a Call", href: "/strategy-call" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-16">
        <div className="flex flex-col md:flex-row md:justify-between gap-12">
          {/* Brand */}
          <div className="max-w-xs">
            <Link
              href="/"
              className="text-[15px] font-semibold tracking-[-0.02em] text-foreground"
            >
              Startup Bros
            </Link>
            <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
              AI-powered MVP development for lean startups. Build lean, launch
              fast, scale smart.
            </p>
          </div>

          {/* Link columns */}
          <div className="flex gap-16">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-[12px] font-semibold text-foreground uppercase tracking-[0.08em] mb-4">
                  {col.title}
                </p>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-[12px] text-muted-foreground">
            &copy; {new Date().getFullYear()} Startup Bros. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/contact"
              className="text-[12px] text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="text-[12px] text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
