import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, // This ensures clean folder-based routing
  images: {
    unoptimized: true,
  },
};

export default nextConfig;