"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import PageCTA from "@/components/shared/PageCTA";
import SolutionsHero from "./sections/SolutionsHero";
import ConnectedByDesign from "./sections/ConnectedByDesign";
import FivePractices from "./sections/FivePractices";
import BuiltInSection from "./sections/BuiltInSection";
import WhyUsComparison from "./sections/WhyUsComparison";
import EngagementModels from "./sections/EngagementModels";
import IndustriesSection from "./sections/IndustriesSection";
import { BG_BASE } from "@/lib/constants";

export default function SolutionsPage() {
  return (
    <main
      className="min-h-screen text-white relative block overflow-x-hidden"
      style={{ background: BG_BASE }}
    >
      <Navbar />
      <SolutionsHero />
      <ConnectedByDesign />
      <FivePractices />
      <BuiltInSection />
      <WhyUsComparison />
      <EngagementModels />
      <IndustriesSection />
      <PageCTA
        headline="Enough reading. Let's build."
        description="Tell us what you're trying to solve. We'll respond within one business day — usually with a few sharp questions and a suggested next step."
        primaryLabel="Schedule a consultation →"
        secondaryLabel="Talk to a specialist"
      />
      <Footer />
    </main>
  );
}
