"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import PageCTA from "@/components/shared/PageCTA";
import TeamHero from "@/components/team/TeamHero";
import LeadershipSection from "@/components/team/LeadershipSection";
import WhyTeamWinsSection from "@/components/team/WhyTeamWinsSection";

function SectionDivider() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div
        className="h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)",
        }}
      />
    </div>
  );
}

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#020817] text-white overflow-x-hidden">
      <Navbar />
      <TeamHero />
      <SectionDivider />
      <LeadershipSection />
      <SectionDivider />
      <SectionDivider />
      <WhyTeamWinsSection />
      <PageCTA
        pillLabel="Join Our Team"
        headline="Ready to Build Something That Matters?"
        description="We're always looking for talented people who care about outcomes, not optics. Explore opportunities to grow with a team that delivers."
        primaryLabel="Contact Our Team"
        secondaryLabel="Explore Solutions"
        primaryHref="/reach-us"
        secondaryHref="/solutions"
      />
      <Footer />
    </main>
  );
}
