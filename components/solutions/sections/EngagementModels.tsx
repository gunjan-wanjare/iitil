"use client";

import { Compass, Users, Target, ShieldAlert, Workflow, GraduationCap } from "lucide-react";
import HorizontalScrollCards, {
  type HorizontalCardData,
} from "@/components/solutions/HorizontalScrollCards";

const ICON = { size: 24, strokeWidth: 1.6 } as const;

const MODEL_CARDS: HorizontalCardData[] = [
  {
    id: "discovery",
    tag: "Fixed Scope",
    title: "Discovery Sprint",
    description:
      "2–4 weeks to define the opportunity, success metrics, and a roadmap you can act on. Best when you know there's value to unlock but want a sharp plan before committing.",
    icon: <Compass {...ICON} />,
    accent: "#2563eb",
  },
  {
    id: "review",
    tag: "Flat Fee",
    title: "Architecture & Risk Audit",
    description:
      "A deep, 2-week health assessment of your existing code, cloud posture, and data pipelines. Best when preparing to scale up or needing to uncover hidden performance bottlenecks.",
    icon: <ShieldAlert {...ICON} />,
    accent: "#1d4ed8",
  },
  {
    id: "pod",
    tag: "Monthly Retainer",
    title: "Pod-as-a-Service",
    description:
      "An embedded, cross-functional team that ships outcomes weekly. Best when you need senior capacity that moves fast and plugs straight into your product workflow.",
    icon: <Users {...ICON} />,
    accent: "#3b82f6",
  },
  {
    id: "scaleout",
    tag: "Long-Term Team",
    title: "Dedicated Scale-Out",
    description:
      "Long-term, exclusive core engineering squads assembled specifically to build, maintain, and own entire major platform initiatives alongside your internal tech leads.",
    icon: <Workflow {...ICON} />,
    accent: "#1e40af",
  },
  {
    id: "outcome",
    tag: "Milestone-Based",
    title: "Outcome Engagements",
    description:
      "Multi-quarter programmes priced on delivered business value. Best when the goal is completely clear and you would rather pay for results than hours logged.",
    icon: <Target {...ICON} />,
    accent: "#60a5fa",
  },
  {
    id: "fractional",
    tag: "Part-Time Advisory",
    title: "Fractional Tech Leadership",
    description:
      "Strategic guidance from seasoned data and cloud practitioners on a fractional basis. Best for hyper-growth stages requiring senior technical advisory without the full-time C-suite overhead.",
    icon: <GraduationCap {...ICON} />,
    accent: "#38bdf8",
  },
];

export default function EngagementModels() {
  return (
    <HorizontalScrollCards
      sectionId="engagement-models"
      label="Engagement Models"
      heading="Built for momentum, priced for clarity."
      description="Pick the model that fits where you are — scroll horizontally to view them all:"
      cards={MODEL_CARDS}
    />
  );
}