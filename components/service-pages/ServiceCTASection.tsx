"use client";

import { memo } from "react";
import PageCTA from "@/components/shared/PageCTA";

interface ServiceCTASectionProps {
  headline: string;
  description: string;
}

const ServiceCTASection = memo(function ServiceCTASection({
  headline,
  description,
}: ServiceCTASectionProps) {
  return (
    <PageCTA
      headline={headline}
      description={description}
      primaryLabel="Get In Touch"
      secondaryLabel="Talk to a Specialist"
    />
  );
});

export default ServiceCTASection;
