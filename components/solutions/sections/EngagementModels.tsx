"use client";

import { Compass, Users, Target } from "lucide-react";
import HorizontalScrollCards, {
  type HorizontalCardData,
} from "@/components/solutions/HorizontalScrollCards";

const ICON = { size: 24, strokeWidth: 1.6 } as const;

const MODEL_CARDS: HorizontalCardData[] = [
  {
    id: "discovery",
    tag: "Fixed scope",
    title: "Discovery Sprint",
    description:
      "2–4 weeks to define the opportunity, success metrics and a roadmap you can act on. Best when you know there's value to unlock but want a sharp plan before committing.",
    icon: <Compass {...ICON} />,
    accent: "#2563eb",
  },
  {
    id: "pod",
    tag: "Monthly retainer",
    title: "Pod-as-a-Service",
    description:
      "An embedded, cross-functional team that ships outcomes weekly. Best when you need senior capacity that moves fast and plugs straight into your workflow.",
    icon: <Users {...ICON} />,
    accent: "#3b82f6",
  },
  {
    id: "outcome",
    tag: "Milestone-based",
    title: "Outcome Engagements",
    description:
      "Multi-quarter programmes priced on delivered business value. Best when the goal is clear and you'd rather pay for results than hours.",
    icon: <Target {...ICON} />,
    accent: "#60a5fa",
  },
];

export default function EngagementModels() {
  return (
    <HorizontalScrollCards
      sectionId="engagement-models"
      label="Engagement Models"
      heading="Built for momentum, priced for clarity."
      description="Pick the model that fits where you are:"
      cards={MODEL_CARDS}
    />
  );
}
