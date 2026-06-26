import type { Metadata } from "next";
import DataServicesPage from "@/components/data-services/DataServicesPage";

export const metadata: Metadata = {
  title: "Data Services | IITIL",
  description:
    "Turn data into strategic advantage with IITIL's end-to-end data services — custom development, warehousing, analytics, visualization, security, and AI enablement.",
};

export default function DataServices() {
  return <DataServicesPage />;
}
