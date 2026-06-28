"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import TeamMemberImage from "@/components/team/TeamMemberImage";
import type { TeamMember } from "@/lib/team-data";
import { EASE } from "@/lib/animations";

interface LeadershipCardProps {
  member: TeamMember;
  index: number;
  variant?: "portrait" | "landscape";
}

const LeadershipCard = memo(function LeadershipCard({
  member,
  index,
  variant = "portrait",
}: LeadershipCardProps) {
  const isLandscape = variant === "landscape";

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: EASE }}
      className={`relative rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.02] w-full
        ${isLandscape ? "flex flex-col md:flex-row items-stretch min-h-[400px]" : "flex flex-col items-center text-center p-6 pt-8"}
      `}
    >
      {/* ── LANDSCAPE VARIANT (CEO) ── */}
      {isLandscape && (
        <>
          {/* Image Container */}
          <div className="relative w-full md:w-[45%] min-h-[300px] md:min-h-[440px] overflow-hidden flex-shrink-0">
            <TeamMemberImage
              src={member.image}
              alt={`Portrait of ${member.name}`}
              name={member.name}
              priority={index < 2}
              className="w-full h-full object-cover object-top"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
            {/* Gradient overlay wrapping smoothly into the dark theme */}
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent via-[#020817]/20 to-[#020817]"
            />
          </div>

          {/* Content Panel */}
          <div className="flex flex-col justify-center flex-grow p-8 md:p-10 lg:p-14 z-10">
            <div className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-3">
                {member.experience} experience
              </p>
              <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-tight">
                {member.name}
              </h3>
              <p className="mt-2 text-base font-medium text-[#60a5fa]">
                {member.designation}
              </p>
            </div>
            <p className="text-white/50 leading-relaxed text-sm md:text-[0.9rem]">
              {member.bio}
            </p>
          </div>
        </>
      )}

      {/* ── PORTRAIT VARIANT (CMO, HR, etc.) ── */}
      {!isLandscape && (
        <>
          {/* Top Center Circular Image */}
          <div className="relative w-48 h-48 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-white/[0.1] flex-shrink-0 shadow-xl mb-6">
            <TeamMemberImage
              src={member.image}
              alt={`Portrait of ${member.name}`}
              name={member.name}
              priority={index < 3}
              className="w-full h-full object-cover object-top"
              sizes="(max-width: 768px) 128px, 144px"
            />
          </div>

          {/* Content Panel */}
          <div className="flex flex-col items-center flex-grow w-full">
            <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight leading-tight">
              {member.name}
            </h3>
            <p className="mt-1 text-xs font-medium text-[#60a5fa] mb-4">
              {member.designation}
            </p>


            <p className="text-white/50 leading-relaxed text-sm  max-w-sm">
              {member.bio}
            </p>
          </div>
        </>
      )}
    </motion.article>
  );
});

export default LeadershipCard;