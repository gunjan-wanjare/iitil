import type { Metadata } from "next";
import PortfolioPage from "@/components/portfolio/PortfolioPage";
import { createMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import {
  graph,
  webPageSchema,
  breadcrumbSchema,
} from "@/lib/structured-data";

const TITLE =
  "Portfolio | Enterprise Applications, SaaS, Cloud, DevOps & IT Solutions | IITIL.com";
const DESCRIPTION =
  "Explore IITIL's portfolio of healthcare, fintech, legal tech and property management solutions delivering innovation, automation and measurable business outcomes.";

export const metadata: Metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/portfolio",
  ogImage: "/application_development.png",
  keywords: [
    "Enterprise Applications",
    "SaaS Development",
    "Custom Software Development",
    "Cloud Computing",
    "DevOps",
    "IT Solutions",
    "Fintech",
    "Healthcare Technology",
    "Legal Tech",
    "Digital Transformation",
  ],
});

const jsonLd = graph(
  webPageSchema({
    path: "/portfolio",
    title: TITLE,
    description: DESCRIPTION,
    type: "CollectionPage",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
  ])
);

export default function Portfolio() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <PortfolioPage />
    </>
  );
}
