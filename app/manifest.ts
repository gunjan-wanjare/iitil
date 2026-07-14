import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

/** Required for `output: "export"` — metadata routes must be statically generated. */
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — Enterprise Data, AI, Cloud & Digital Transformation`,
    short_name: SITE.name,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#020817",
    theme_color: "#020817",
    icons: [
      {
        src: "/iitil_logo.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
