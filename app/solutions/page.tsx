import type { Metadata } from "next";
import SolutionsPage from "@/components/solutions/SolutionsPage";
import { createMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import {
  graph,
  webPageSchema,
  breadcrumbSchema,
  serviceSchema,
} from "@/lib/structured-data";

const TITLE =
  "Data Intelligence & Analytics, AI ML, DevOps, Cloud Solutions | IITIL.com";
const DESCRIPTION =
  "Empower your business with data intelligence, machine learning, cloud services, custom software development and secure enterprise technology solutions.";

export const metadata: Metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/solutions",
  ogImage: "/data_intelligence.jpg",
  keywords: [
    "Data Intelligence",
    "Data Analytics",
    "Machine Learning",
    "Artificial Intelligence",
    "DevOps",
    "Cloud Computing",
    "Custom Software Development",
    "Enterprise Software",
    "Business Intelligence",
    "Data Engineering",
  ],
});

const SERVICES = [
  {
    name: "Data Intelligence & Analytics",
    description:
      "Data engineering, warehousing, analytics and visualization that turn raw data into decisions.",
    path: "/data-services",
  },
  {
    name: "AI & Machine Learning",
    description:
      "Predictive analytics, NLP, computer vision and custom model deployment for enterprise use cases.",
    path: "/ai-ml",
  },
  {
    name: "Cloud & DevOps",
    description:
      "Cloud migration, hybrid multi-cloud, DevOps automation and infrastructure management.",
    path: "/cloud-infrastructure",
  },
  {
    name: "Cybersecurity",
    description:
      "Security assessments, threat monitoring, IAM and compliance governance for enterprises.",
    path: "/cybersecurity",
  },
];

const jsonLd = graph(
  webPageSchema({ path: "/solutions", title: TITLE, description: DESCRIPTION }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/solutions" },
  ]),
  ...SERVICES.map((s) => serviceSchema(s))
);

export default function Solutions() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <SolutionsPage />
    </>
  );
}
