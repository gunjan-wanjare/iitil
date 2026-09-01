import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import ServicesStack from "@/components/sections/ServicesStack";
import WorkProcess from "@/components/sections/WorkProcess";
import IITILComparison from "@/components/sections/IITILComparison";
import CaseStudies from "@/components/sections/CaseStudies";
import Benefits from "@/components/sections/Benefits";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { graph, webPageSchema, serviceSchema } from "@/lib/structured-data";

export const metadata: Metadata = createMetadata({
  title:
    "Enterprise Data, AI ML, Cloud & Digital Transformation Services | IITIL.com",
  description:
    "Drive innovation and growth with data analytics, AI & ML, cloud & DevOps services and enterprise technology solutions tailored to your business.",
  path: "/",
  keywords: [
    "Enterprise Software",
    "Data Analytics",
    "Artificial Intelligence",
    "Machine Learning",
    "Cloud Computing",
    "DevOps",
    "Digital Transformation",
    "Data Intelligence",
    "Business Intelligence",
    "Enterprise Applications",
  ],
});

const jsonLd = graph(
  webPageSchema({
    path: "/",
    title:
      "Enterprise Data, AI ML, Cloud & Digital Transformation Services | IITIL.com",
    description:
      "Drive innovation and growth with data analytics, AI & ML, cloud & DevOps services and enterprise technology solutions tailored to your business.",
  }),
  serviceSchema({
    name: "Enterprise Data & Digital Transformation Services",
    description:
      "Data analytics, AI & ML, cloud, DevOps and enterprise engineering services that turn fragmented data into measurable business outcomes.",
    path: "/solutions",
    serviceType: "Digital Transformation Consulting",
  })
);

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020817]">
      <JsonLd data={jsonLd} />
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
