import type { Metadata } from "next";
import ReachUsPage from "@/components/reach-us/ReachUsPage";
import { createMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import {
  graph,
  webPageSchema,
  breadcrumbSchema,
  professionalServiceSchema,
} from "@/lib/structured-data";

const TITLE = "Contact IITIL.com | Data Intelligence & Technology Consulting";
const DESCRIPTION =
  "Get in touch with IITIL for data analytics, AI, cloud, cybersecurity and enterprise technology solutions. Schedule a consultation with our experts today.";

export const metadata: Metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/reach-us",
  ogImage: "/contact.png",
  keywords: [
    "Contact IITIL",
    "Technology Consulting",
    "Data Analytics",
    "Artificial Intelligence",
    "Cloud Computing",
    "Cybersecurity",
    "Enterprise Software",
    "Schedule a Consultation",
  ],
});

const jsonLd = graph(
  webPageSchema({
    path: "/reach-us",
    title: TITLE,
    description: DESCRIPTION,
    type: "ContactPage",
  }),
  professionalServiceSchema(),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/reach-us" },
  ])
);

export default function ReachUs() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <ReachUsPage />
    </>
  );
}
