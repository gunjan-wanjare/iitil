import type { Metadata } from "next";
import AboutPage from "@/components/about/AboutPage";
import { createMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import {
  graph,
  webPageSchema,
  breadcrumbSchema,
} from "@/lib/structured-data";

const TITLE =
  "About IITIL | Data Intelligence & Technology Solutions Company | IITIL.com";
const DESCRIPTION =
  "Learn how IITIL helps organizations transform data into business value through analytics, AI, cloud technologies and enterprise technology solutions.";

export const metadata: Metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/about",
  ogImage: "/about_img.jpg",
  keywords: [
    "About IITIL",
    "Data Intelligence Company",
    "Technology Consulting",
    "Enterprise Software",
    "Digital Transformation",
    "Data Analytics",
    "Artificial Intelligence",
    "Cloud Computing",
  ],
});

const jsonLd = graph(
  webPageSchema({
    path: "/about",
    title: TITLE,
    description: DESCRIPTION,
    type: "AboutPage",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ])
);

export default function About() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <AboutPage />
    </>
  );
}
