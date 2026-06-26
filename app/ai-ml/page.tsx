import type { Metadata } from "next";
import AIMLPage from "@/components/ai-ml/AIMLPage";

export const metadata: Metadata = {
  title: "AI & ML | IITIL",
  description:
    "Intelligence that drives growth — IITIL delivers advanced AI and ML solutions including predictive analytics, NLP, computer vision, automation, recommendations, and custom model deployment.",
};

export default function AIML() {
  return <AIMLPage />;
}
