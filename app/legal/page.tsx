import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { createMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import {
  graph,
  webPageSchema,
  breadcrumbSchema,
} from "@/lib/structured-data";

const TITLE =
  "Legal | Terms, Privacy & Data Protection Policies | IITIL.com";
const DESCRIPTION =
  "Terms & Conditions, Privacy Policy, Cookie Policy, Data Protection Policy and legal information for IITIL.";

export const metadata: Metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/legal",
  keywords: [
    "IITIL Legal",
    "Terms and Conditions",
    "Privacy Policy",
    "Cookie Policy",
    "Data Protection Policy",
  ],
});

const jsonLd = graph(
  webPageSchema({ path: "/legal", title: TITLE, description: DESCRIPTION }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Legal", path: "/legal" },
  ])
);

export default function Legal() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <LegalPage />
    </>
  );
}
