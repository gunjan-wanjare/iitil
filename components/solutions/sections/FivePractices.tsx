"use client";

import { BarChart3, Brain, Cloud, Code2, Compass } from "lucide-react";
import HorizontalScrollCards, {
  type HorizontalCardData,
} from "@/components/solutions/HorizontalScrollCards";

const ICON = { size: 24, strokeWidth: 1.6 } as const;

const PRACTICE_CARDS: HorizontalCardData[] = [
  {
    id: "data",
    tag: "1 · Data",
    title: "Data intelligence & analytics",
    headline: "One source of truth everyone trusts.",
    description: "Your Teams stop arguing about whose number is right.",
    icon: <BarChart3 {...ICON} />,
    accent: "#2563eb",
    bullets: [
      "Data platforms - Snowflake, Databricks, BigQuery",
      "Analytics & BI - governed semantic layers",
      "Data engineering - dbt, Airflow, CD",
    ],
  },
  {
    id: "ai",
    tag: "2 · AI",
    title: "Artificial intelligence & ML",
    headline: "Models that earn their keep.",
    description: "Your AI moves from slideware to everyday systems.",
    icon: <Brain {...ICON} />,
    accent: "#3b82f6",
    bullets: [
      "Predictive modelling - forecasting, risk scoring",
      "Generative AI - RAG, agents, guardrails, evals",
      "MLOps - CI/CD, feature stores, observability",
    ],
  },
  {
    id: "cloud",
    tag: "3 · Cloud",
    title: "Cloud & DevOps",
    headline: "Ship faster. Sleep better.",
    description: "Your releases get quicker; the system gets steadier.",
    icon: <Cloud {...ICON} />,
    accent: "#60a5fa",
    bullets: [
      "Platform engineering - golden paths, IDPs",
      "Cloud security - zero-trust, IAM, posture",
      "Migration - AWS, Azure, GCP",
    ],
  },
  {
    id: "build",
    tag: "4 · Build",
    title: "Enterprise engineering",
    headline: "Software that fits your business.",
    description: "Your systems work together, not around each other.",
    icon: <Code2 {...ICON} />,
    accent: "#1d4ed8",
    bullets: [
      "Product engineering - web, mobile, backend",
      "Integrations - ERP, CRM, billing",
      "Quality & reliability - test automation, SRE",
    ],
  },
  {
    id: "advisory",
    tag: "5 · Advisory",
    title: "Strategic advisory",
    headline: "Strategy built by practitioners, not presenters.",
    description: "Your technology blueprint aligns completely with real economic ROI.",
    icon: <Compass {...ICON} />,
    accent: "#38bdf8",
    bullets: [
      "Architecture evaluation & technical due diligence",
      "Data & AI readiness assessments",
      "Ecosystem modernization blueprints",
    ],
  },
];

export default function FivePractices() {
  return (
    <HorizontalScrollCards
      sectionId="five-practices"
      label="The Five Practices"
      heading="Five practices. One integrated delivery model."
      description="Scroll through each practice — the screen locks until you've seen them all."
      cards={PRACTICE_CARDS}
      richCards
    />
  );
}