import type { Metadata } from "next";
import TeamPage from "@/components/team/TeamPage";
import { createMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import {
  graph,
  webPageSchema,
  breadcrumbSchema,
} from "@/lib/structured-data";

const TITLE = "Our Team | Data Intelligence & Technology Experts | IITIL.com";
const DESCRIPTION =
  "Meet the IITIL team — leaders and experts in data intelligence, engineering, cloud and enterprise operations who turn complex challenges into measurable outcomes.";

export const metadata: Metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/team",
  keywords: [
    "IITIL Team",
    "Technology Leadership",
    "Data Intelligence Experts",
    "Enterprise Engineering",
    "Technology Consulting",
  ],
});

const jsonLd = graph(
  webPageSchema({ path: "/team", title: TITLE, description: DESCRIPTION }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Our Team", path: "/team" },
  ])
);

export default function Team() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <TeamPage />
    </>
  );
}
