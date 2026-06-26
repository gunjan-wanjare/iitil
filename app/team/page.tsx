import type { Metadata } from "next";
import TeamPage from "@/components/team/TeamPage";

export const metadata: Metadata = {
  title: "Our Team | IITIL",
  description:
    "Meet the IITIL team — leaders and experts in data intelligence, engineering, cloud, and enterprise operations who turn complex challenges into measurable outcomes.",
  keywords: [
    "IITIL Team",
    "Data Intelligence Experts",
    "Technology Leadership",
    "Enterprise Engineering",
    "IITIL Leadership",
  ],
  openGraph: {
    title: "Our Team | IITIL",
    description:
      "Meet the people behind IITIL — the leaders and experts driving data intelligence and technology forward.",
    type: "website",
    siteName: "IITIL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team | IITIL",
    description:
      "Meet the people behind IITIL — the leaders and experts driving data intelligence and technology forward.",
  },
  alternates: {
    canonical: "/team",
  },
};

export default function Team() {
  return <TeamPage />;
}
