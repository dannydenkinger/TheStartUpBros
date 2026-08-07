import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  /* The old *.vercel.app alias keeps serving the whole site at 200 after a
   * custom domain is attached, so the same 38 pages exist on two hosts. A
   * canonical tag is only a hint; this is a directive, and it also stops the
   * old URL from accruing links that the real domain never sees.
   *
   * Matched on the exact production alias — preview deploys use
   * the-start-up-bros-git-<branch>-*.vercel.app and are untouched, so branch
   * previews still open normally. */
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "the-start-up-bros.vercel.app" }],
        destination: "https://www.startupbros.io/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
