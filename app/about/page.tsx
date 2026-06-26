import type { Metadata } from "next";
import AboutPage from "@/components/about/AboutPage";

export const metadata: Metadata = {
  title: "About Us | IITIL",
  description:
    "IITIL brings analytics, engineering, and systems together so your scattered data becomes a clear basis for decisions — not another dashboard nobody trusts.",
  keywords: [
    "Data Intelligence",
    "Enterprise AI",
    "Analytics",
    "Enterprise Engineering",
    "IITIL",
  ],
  openGraph: {
    title: "About Us | IITIL",
    description:
      "Your data's all dots. We draw the line. Learn how IITIL turns scattered data into decisions you can trust.",
    type: "website",
    siteName: "IITIL",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | IITIL",
    description:
      "Your data's all dots. We draw the line. Learn how IITIL turns scattered data into decisions you can trust.",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function About() {
  return <AboutPage />;
}
