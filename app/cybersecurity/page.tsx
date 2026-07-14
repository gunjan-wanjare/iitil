import type { Metadata } from "next";
import CybersecurityPage from "@/components/cybersecurity/CybersecurityPage";
import { createMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import {
  graph,
  webPageSchema,
  breadcrumbSchema,
  serviceSchema,
} from "@/lib/structured-data";

const TITLE =
  "Cybersecurity Services | Threat Monitoring, IAM & Compliance | IITIL.com";
const DESCRIPTION =
  "Enterprise-grade cybersecurity services from IITIL — security assessments, network protection, endpoint security, IAM, threat monitoring and compliance governance.";

export const metadata: Metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/cybersecurity",
  keywords: [
    "Cybersecurity",
    "Threat Monitoring",
    "Identity and Access Management",
    "Endpoint Security",
    "Network Security",
    "Compliance Governance",
    "Enterprise Security",
  ],
});

const jsonLd = graph(
  webPageSchema({
    path: "/cybersecurity",
    title: TITLE,
    description: DESCRIPTION,
  }),
  serviceSchema({
    name: "Cybersecurity Services",
    description: DESCRIPTION,
    path: "/cybersecurity",
    serviceType: "Cybersecurity",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/solutions" },
    { name: "Cybersecurity", path: "/cybersecurity" },
  ])
);

export default function Cybersecurity() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <CybersecurityPage />
    </>
  );
}
