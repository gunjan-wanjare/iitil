import type { Metadata } from "next";
import CybersecurityPage from "@/components/cybersecurity/CybersecurityPage";

export const metadata: Metadata = {
  title: "Cybersecurity | IITIL",
  description:
    "Enterprise-grade cybersecurity services from IITIL — security assessments, network protection, endpoint security, IAM, threat monitoring, and compliance governance.",
};

export default function Cybersecurity() {
  return <CybersecurityPage />;
}
