import type { Metadata } from "next";
import ITServicesPage from "@/components/it-services/ITServicesPage";
import { createMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import {
  graph,
  webPageSchema,
  breadcrumbSchema,
  serviceSchema,
} from "@/lib/structured-data";

const TITLE =
  "IT Services | Custom Software & Enterprise Application Development | IITIL.com";
const DESCRIPTION =
  "IITIL delivers powerful, scalable digital systems — custom software, enterprise applications, integration, managed services and AI enablement for modern enterprises.";

export const metadata: Metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/it-services",
  ogImage: "/application_development.png",
  keywords: [
    "IT Services",
    "Custom Software Development",
    "Enterprise Applications",
    "SaaS Development",
    "Managed Services",
    "System Integration",
    "Digital Transformation",
  ],
});

const jsonLd = graph(
  webPageSchema({
    path: "/it-services",
    title: TITLE,
    description: DESCRIPTION,
  }),
  serviceSchema({
    name: "IT Services",
    description: DESCRIPTION,
    path: "/it-services",
    serviceType: "IT & Custom Software Development",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/solutions" },
    { name: "IT Services", path: "/it-services" },
  ])
);

export default function ITServices() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <ITServicesPage />
    </>
  );
}
