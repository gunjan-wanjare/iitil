import type { Metadata } from "next";
import ReachUsPage from "@/components/reach-us/ReachUsPage";

export const metadata: Metadata = {
  title: "Reach Us | IITIL",
  description:
    "Tell us what's tangled. Connect with IITIL to talk about how data intelligence and technology move your business forward.",
  openGraph: {
    title: "Reach Us | IITIL",
    description:
      "Tell us what's tangled. Let's fix it together. Connect with IITIL and map the fastest path through your challenges.",
    type: "website",
    siteName: "IITIL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reach Us | IITIL",
    description:
      "Tell us what's tangled. Let's fix it together. Connect with IITIL and map the fastest path through your challenges.",
  },
  alternates: {
    canonical: "/reach-us",
  },
};

export default function ReachUs() {
  return <ReachUsPage />;
}
