"use client";

import { memo } from "react";
import PageCTA from "@/components/shared/PageCTA";

interface ServiceCTASectionProps {
  headline: string;
  description: string;
  /** Secondary CTA label — educate before converting. */
  secondaryLabel?: string;
  /** Secondary CTA destination. */
  secondaryHref?: string;
}

const ServiceCTASection = memo(function ServiceCTASection({
  headline,
  description,
  secondaryLabel = "Explore All Solutions",
  secondaryHref = "/solutions",
}: ServiceCTASectionProps) {
  return (
    <PageCTA
      headline={headline}
      description={description}
      primaryLabel="Get In Touch"
      secondaryLabel={secondaryLabel}
      primaryHref="/reach-us"
      secondaryHref={secondaryHref}
    />
  );
});

export default ServiceCTASection;
