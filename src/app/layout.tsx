import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@/components/shared/GoogleAnalytics";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "@/components/shared/Providers";
import { siteMetadata } from "@/lib/metadata";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = siteMetadata;

/* GA4 measurement ID. Public by design — it ships in the client bundle either
 * way, so there's nothing gained by hiding it in an env var, and hardcoding it
 * means the tag can't silently vanish because a Vercel env var went unset. */
const GA_MEASUREMENT_ID = "G-XVP6P5LNXE";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <Providers>
          <Header />
          <main className="min-h-screen pt-[80px]">{children}</main>
          <Footer />
        </Providers>
        <Analytics />
        <SpeedInsights />
        {/* VERCEL_ENV, not NODE_ENV. Vercel builds preview deploys in
         * production mode too, so a NODE_ENV check still lets every branch
         * preview report into the live property; VERCEL_ENV is "preview" there
         * and "production" only on the real domain. Vercel's own scripts detect
         * dev mode themselves — gtag has no such guard, which is why it needs
         * one here at all. Undefined off-platform, so a local `next start`
         * stays silent too. */}
        {process.env.VERCEL_ENV === "production" && (
          <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
        )}
      </body>
    </html>
  );
}
