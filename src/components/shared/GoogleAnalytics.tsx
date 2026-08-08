"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * GA4 for the App Router.
 *
 * Every pageview — including the first — is sent from the effect below, and
 * `send_page_view: false` turns off gtag's own emission so nothing fires twice.
 *
 * The reason we don't let gtag track navigation itself: this is a SPA, so
 * moving between pages is a history.pushState, not a document load. gtag's
 * built-in history listener fires on the pushState, which happens *before*
 * React commits the new route — so the hit carries the previous page's URL and
 * title. Measured on this site: navigating to /services sent a page_view for
 * /portfolio. Sending from an effect means the hit is built after the commit,
 * when location and document.title both describe the page actually on screen.
 */
export function GoogleAnalytics({ gaId }: { gaId: string }) {
  const pathname = usePathname();

  useEffect(() => {
    /* The inline script below normally defines this first, but it loads
     * afterInteractive and this effect can win the race on a fast hydration.
     * Recreating the shim is harmless — it's the same queue-into-dataLayer
     * function, and gtag.js drains whatever is waiting once it arrives. */
    window.dataLayer = window.dataLayer || [];
    if (typeof window.gtag !== "function") {
      window.gtag = function gtag() {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer!.push(arguments);
      };
    }

    window.gtag("event", "page_view", {
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname]);

  return (
    <>
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', { send_page_view: false });
          `,
        }}
      />
      <Script
        id="ga-script"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
    </>
  );
}
