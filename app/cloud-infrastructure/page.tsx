import type { Metadata } from "next";
import CloudInfrastructurePage from "@/components/cloud-infrastructure/CloudInfrastructurePage";

export const metadata: Metadata = {
  title: "Cloud Infrastructure | IITIL",
  description:
    "Scalable, secure cloud and infrastructure services from IITIL — migration, management, hybrid multi-cloud, DevOps, security, compliance, and disaster recovery.",
};

export default function CloudInfrastructure() {
  return <CloudInfrastructurePage />;
}
