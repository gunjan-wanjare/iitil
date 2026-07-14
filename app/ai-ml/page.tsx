import type { Metadata } from "next";
import AIMLPage from "@/components/ai-ml/AIMLPage";
import { createMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import {
  graph,
  webPageSchema,
  breadcrumbSchema,
  serviceSchema,
} from "@/lib/structured-data";

const TITLE =
  "AI & Machine Learning Services | Predictive Analytics & Automation | IITIL.com";
const DESCRIPTION =
  "IITIL delivers advanced AI and machine learning solutions — predictive analytics, NLP, computer vision, automation, recommendations and custom model deployment.";

export const metadata: Metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/ai-ml",
  ogImage: "/ai_ml.webp",
  keywords: [
    "Artificial Intelligence",
    "Machine Learning",
    "Predictive Analytics",
    "Natural Language Processing",
    "Computer Vision",
    "AI Automation",
    "Model Deployment",
    "Data Intelligence",
  ],
});

const jsonLd = graph(
  webPageSchema({ path: "/ai-ml", title: TITLE, description: DESCRIPTION }),
  serviceSchema({
    name: "AI & Machine Learning Services",
    description: DESCRIPTION,
    path: "/ai-ml",
    serviceType: "Artificial Intelligence & Machine Learning",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/solutions" },
    { name: "AI & ML", path: "/ai-ml" },
  ])
);

export default function AIML() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <AIMLPage />
    </>
  );
}
