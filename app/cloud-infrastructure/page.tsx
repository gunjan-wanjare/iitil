import type { Metadata } from "next";
import CloudInfrastructurePage from "@/components/cloud-infrastructure/CloudInfrastructurePage";
import { createMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import {
  graph,
  webPageSchema,
  breadcrumbSchema,
  serviceSchema,
} from "@/lib/structured-data";

const TITLE =
  "Cloud & Infrastructure Services | Cloud Migration & DevOps | IITIL.com";
const DESCRIPTION =
  "Scalable, secure cloud and infrastructure services from IITIL — migration, management, hybrid multi-cloud, DevOps, security, compliance and disaster recovery.";

export const metadata: Metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/cloud-infrastructure",
  ogImage: "/cloud_infrastructure.png",
  keywords: [
    "Cloud Computing",
    "Cloud Migration",
    "DevOps",
    "Hybrid Cloud",
    "Multi-Cloud",
    "Infrastructure Management",
    "Disaster Recovery",
    "Cloud Security",
  ],
});

const jsonLd = graph(
  webPageSchema({
    path: "/cloud-infrastructure",
    title: TITLE,
    description: DESCRIPTION,
  }),
  serviceSchema({
    name: "Cloud & Infrastructure Services",
    description: DESCRIPTION,
    path: "/cloud-infrastructure",
    serviceType: "Cloud Computing & DevOps",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/solutions" },
    { name: "Cloud Infrastructure", path: "/cloud-infrastructure" },
  ])
);

export default function CloudInfrastructure() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <CloudInfrastructurePage />
    </>
  );
}
