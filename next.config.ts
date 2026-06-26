import type { NextConfig } from "next";
 
const nextConfig: NextConfig = {
  output: "export",
 
  async redirects() {
    return [
      {
        source: "/privacy-policy",
        destination: "/legal#privacy-policy",
        permanent: true,
      },
      {
        source: "/terms-and-conditions",
        destination: "/legal#terms-and-conditions",
        permanent: true,
      },
      {
        source: "/refund-policy",
        destination: "/legal",
        permanent: true,
      },
    ];
  },
};
 
export default nextConfig;