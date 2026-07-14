import type { Metadata } from "next";
import CaseStudiesPage from "@/components/case-studies/CaseStudiesPage";
import { createMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import {
  graph,
  webPageSchema,
  breadcrumbSchema,
} from "@/lib/structured-data";

const TITLE =
  "Case Studies | Data Analytics, AI & Digital Transformation Success Stories | IITIL.com";
const DESCRIPTION =
  "Explore how IITIL helps organizations achieve measurable results through data analytics, AI, cloud technologies and enterprise digital transformation solutions.";

export const metadata: Metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/case-studies",
  ogImage: "/data_analytics.jpg",
  keywords: [
    "Case Studies",
    "Data Analytics",
    "Artificial Intelligence",
    "Digital Transformation",
    "Business Intelligence",
    "Cloud Computing",
    "Machine Learning",
    "Enterprise Software",
  ],
});

const jsonLd = graph(
  webPageSchema({
    path: "/case-studies",
    title: TITLE,
    description: DESCRIPTION,
    type: "CollectionPage",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/case-studies" },
  ])
);

export default function CaseStudies() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <CaseStudiesPage />
    </>
  );
}
