import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

/** Required for `output: "export"` — metadata routes must be statically generated. */
export const dynamic = "force-static";

type ChangeFreq = MetadataRoute.Sitemap[number]["changeFrequency"];

interface RouteConfig {
  path: string;
  priority: number;
  changeFrequency: ChangeFreq;
}

const ROUTES: RouteConfig[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/solutions", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/portfolio", priority: 0.8, changeFrequency: "monthly" },
  { path: "/case-studies", priority: 0.8, changeFrequency: "monthly" },
  { path: "/it-services", priority: 0.8, changeFrequency: "monthly" },
  { path: "/data-services", priority: 0.8, changeFrequency: "monthly" },
  { path: "/ai-ml", priority: 0.8, changeFrequency: "monthly" },
  { path: "/cloud-infrastructure", priority: 0.8, changeFrequency: "monthly" },
  { path: "/cybersecurity", priority: 0.8, changeFrequency: "monthly" },
  { path: "/reach-us", priority: 0.7, changeFrequency: "monthly" },
  { path: "/team", priority: 0.6, changeFrequency: "monthly" },
  { path: "/legal", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  }));
}
