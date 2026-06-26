import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Legal | IITIL",
  description:
    "Terms & Conditions, Privacy Policy, Cookie Policy, Data Protection Policy and legal information for IITIL.",
};

export default function Legal() {
  return <LegalPage />;
}
