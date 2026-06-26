import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import ServicesStack from "@/components/sections/ServicesStack";
import WorkProcess from "@/components/sections/WorkProcess";
import IITILComparison from "@/components/sections/IITILComparison";
import FAQ from "@/components/sections/FAQ";
import CaseStudies from "@/components/sections/CaseStudies";
import Benefits from "@/components/sections/Benefits";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IITIL — Data Intelligence, Enterprise AI & Cloud Engineering",
  description:
    "IITIL brings data intelligence, enterprise AI, machine learning, cloud DevOps, analytics, and enterprise engineering together — turning fragmented data into measurable outcomes.",
  keywords: [
    "Data Intelligence",
    "Enterprise AI",
    "Machine Learning",
    "Cloud DevOps",
    "Analytics",
    "Enterprise Engineering",
    "IITIL",
    "data platforms",
    "business intelligence",
  ],
  openGraph: {
    title: "IITIL — Data Intelligence, Enterprise AI & Cloud Engineering",
    description:
      "End-to-end data intelligence and technology services. Connect your data, AI, cloud, and engineering into one intelligent ecosystem.",
    type: "website",
    siteName: "IITIL",
  },
  twitter: {
    card: "summary_large_image",
    title: "IITIL — Data Intelligence, Enterprise AI & Cloud Engineering",
    description:
      "Turn fragmented data into intelligent outcomes with IITIL's full-stack data, AI, cloud, and engineering services.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020817]">
      <Navbar />
      <Hero />
      <ServicesStack />
      <WorkProcess /> 
      <IITILComparison />
      <CaseStudies />
      <Benefits />
      <Testimonials />
      {/* <FAQ /> */}
      <CTABanner />
      <Footer />
    </main>
  );
}
