import type { Metadata } from "next";
import DataServicesPage from "@/components/data-services/DataServicesPage";
import { createMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import {
  graph,
  webPageSchema,
  breadcrumbSchema,
  serviceSchema,
} from "@/lib/structured-data";

const TITLE =
  "Data Services | Data Engineering, Warehousing & Analytics | IITIL.com";
const DESCRIPTION =
  "Turn data into strategic advantage with IITIL's end-to-end data services — custom development, warehousing, analytics, visualization, security and AI enablement.";

export const metadata: Metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/data-services",
  ogImage: "/data_service.png",
  keywords: [
    "Data Services",
    "Data Engineering",
    "Data Warehousing",
    "Data Analytics",
    "Data Visualization",
    "Business Intelligence",
    "Data Intelligence",
    "Data Security",
  ],
});

const jsonLd = graph(
  webPageSchema({
    path: "/data-services",
    title: TITLE,
    description: DESCRIPTION,
  }),
  serviceSchema({
    name: "Data Services",
    description: DESCRIPTION,
    path: "/data-services",
    serviceType: "Data Engineering & Analytics",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/solutions" },
    { name: "Data Services", path: "/data-services" },
  ])
);

export default function DataServices() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <DataServicesPage />
    </>
  );
}
