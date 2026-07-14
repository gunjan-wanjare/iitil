import type { Metadata } from "next";

/**
 * Central SEO configuration for IITIL.
 * Single source of truth for site-wide identity, canonical origin,
 * social profiles and structured-data building blocks.
 */
export const SITE = {
  name: "IITIL",
  legalName: "Crediple India Private Limited (CIPL)",
  // Public production origin. Used for metadataBase, canonicals, sitemap & JSON-LD.
  url: "https://www.iitil.com",
  domain: "www.iitil.com",
  description:
    "IITIL delivers enterprise data analytics, AI & ML, cloud, DevOps and digital transformation services that turn fragmented data into measurable business outcomes.",
  logo: "/iitil_logo.svg",
  ogImage: "/hero-image.png",
  email: "hello@iitil.com",
  twitterHandle: "@iitil",
  locale: "en_US",
  address: {
    streetAddress: "Sattva Knowledge City, Hi-Tec City",
    addressLocality: "Hyderabad",
    postalCode: "500081",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  socials: ["https://www.linkedin.com/company/iitil-cipl/"],
} as const;

/**
 * Absolute URL helper that respects the site's trailing-slash routing.
 */
export function absoluteUrl(path = "/"): string {
  if (path === "/") return `${SITE.url}/`;
  const clean = path.startsWith("/") ? path : `/${path}`;
  const withSlash = clean.endsWith("/") ? clean : `${clean}/`;
  return `${SITE.url}${withSlash}`;
}

interface PageMetaInput {
  title: string;
  description: string;
  /** Route path, e.g. "/about". Use "/" for the home page. */
  path: string;
  keywords?: string[];
  /** Override the default social share image (relative or absolute). */
  ogImage?: string;
  /** Narrow the OG type where relevant (e.g. "profile", "article"). */
  ogType?: "website" | "article" | "profile";
}

/**
 * Builds a complete, production-ready Metadata object for a route.
 * Guarantees canonical, Open Graph, Twitter, robots and keywords are present.
 */
export function createMetadata({
  title,
  description,
  path,
  keywords,
  ogImage = SITE.ogImage,
  ogType = "website",
}: PageMetaInput): Metadata {
  const canonicalPath = path === "/" ? "/" : path.endsWith("/") ? path : `${path}/`;
  const url = absoluteUrl(path);
  const imageUrl = ogImage.startsWith("http") ? ogImage : `${SITE.url}${ogImage}`;

  return {
    // Absolute bypasses the layout title template so the exact string is used.
    title: { absolute: title },
    description,
    keywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      type: ogType,
      locale: SITE.locale,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      creator: SITE.twitterHandle,
      site: SITE.twitterHandle,
    },
  };
}
