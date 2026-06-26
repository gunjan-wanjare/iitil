import type { Metadata } from "next";
import ITServicesPage from "@/components/it-services/ITServicesPage";

export const metadata: Metadata = {
  title: "IT Services | IITIL",
  description:
    "IITIL delivers powerful, scalable digital systems — from data integration and warehousing to analytics, visualization, security, and AI enablement for modern enterprises.",
};

export default function ITServices() {
  return <ITServicesPage />;
}
