import { SITE, absoluteUrl } from "./seo";

/**
 * JSON-LD structured data builders.
 * These emit schema.org objects consumed by search engines for rich results.
 */

const ORG_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;

/** Organization + logo + contact + social profiles (site-wide). */
export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: `${SITE.url}/`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE.url}${SITE.logo}`,
    },
    description: SITE.description,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.streetAddress,
      addressLocality: SITE.address.addressLocality,
      postalCode: SITE.address.postalCode,
      addressRegion: SITE.address.addressRegion,
      addressCountry: SITE.address.addressCountry,
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: SITE.email,
      contactType: "customer support",
      url: absoluteUrl("/reach-us"),
      availableLanguage: ["English"],
    },
    sameAs: SITE.socials,
  };
}

/** WebSite node with a SearchAction potential (site-wide). */
export function webSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE.url}/`,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": ORG_ID },
    inLanguage: "en",
  };
}

/** A WebPage (or subtype) node linked back to the site & org. */
export function webPageSchema({
  path,
  title,
  description,
  type = "WebPage",
}: {
  path: string;
  title: string;
  description: string;
  type?: string;
}) {
  const url = absoluteUrl(path);
  return {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en",
  };
}

/** BreadcrumbList from an ordered list of { name, path } crumbs. */
export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

/** A single Service offered by the organization. */
export function serviceSchema({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}) {
  return {
    "@type": "Service",
    name,
    description,
    serviceType: serviceType ?? name,
    url: absoluteUrl(path),
    provider: { "@id": ORG_ID },
    areaServed: "Worldwide",
  };
}

/** ProfessionalService node (used on Contact/Reach Us). */
export function professionalServiceSchema() {
  return {
    "@type": "ProfessionalService",
    "@id": `${SITE.url}/#professionalservice`,
    name: SITE.name,
    image: `${SITE.url}${SITE.ogImage}`,
    url: `${SITE.url}/`,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.streetAddress,
      addressLocality: SITE.address.addressLocality,
      postalCode: SITE.address.postalCode,
      addressRegion: SITE.address.addressRegion,
      addressCountry: SITE.address.addressCountry,
    },
    priceRange: "$$",
    sameAs: SITE.socials,
  };
}

/**
 * Wraps one or more schema nodes into a single JSON-LD graph document.
 */
export function graph(...nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
