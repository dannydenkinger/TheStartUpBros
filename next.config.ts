import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep local dev runs from writing tool-specific instruction files into the
  // public repository. Bundled Next.js docs remain available in node_modules.
  agentRules: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
