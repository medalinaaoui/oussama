import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "funnelslayer.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "v0.funnelslayer.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
