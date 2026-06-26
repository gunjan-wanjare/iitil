import type { Metadata } from "next";
import CaseStudiesPage from "@/components/case-studies/CaseStudiesPage";

export const metadata: Metadata = {
  title: "Case Studies | IITIL",
  description:
    "Explore how IITIL delivers measurable business outcomes through data intelligence, analytics, AI, cloud solutions, and enterprise technology services across healthcare, finance, and retail industries.",
};

export default function CaseStudies() {
  return <CaseStudiesPage />;
}
