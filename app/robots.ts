import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

/** Required for `output: "export"` — metadata routes must be statically generated. */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_next/", "/api/"],
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
