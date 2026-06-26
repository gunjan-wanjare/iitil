import type { Metadata } from "next";
import SolutionsPage from "@/components/solutions/SolutionsPage";

export const metadata: Metadata = {
  title: "Solutions | IITIL",
  description:
    "Enterprise data, AI, cloud and engineering services that help organisations transform operations with measurable business outcomes.",
  keywords: [
    "Data Intelligence",
    "Enterprise AI",
    "Machine Learning",
    "Cloud DevOps",
    "Analytics",
    "Enterprise Engineering",
  ],
  openGraph: {
    title: "Solutions | IITIL",
    description:
      "Enterprise data, AI, cloud and engineering services that help organisations transform operations with measurable business outcomes.",
    type: "website",
    siteName: "IITIL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solutions | IITIL",
    description:
      "Enterprise data, AI, cloud and engineering services that help organisations transform operations with measurable business outcomes.",
  },
  alternates: {
    canonical: "/solutions",
  },
};

export default function Solutions() {
  return <SolutionsPage />;
}
