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
      className={`group relative rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.02]
        transition-[transform,box-shadow] duration-500
        hover:scale-[1.015]
        hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_0_1px_rgba(37,99,235,0.28),0_20px_40px_rgba(0,0,0,0.4)]
        ${isLandscape ? "flex flex-col md:flex-row" : "flex flex-col"}
      `}
      style={{ transitionTimingFunction: "cubic-bezier(0.25,0.46,0.45,0.94)" }}
    >
      {/* Image Container */}
      <div
        className={`relative overflow-hidden flex-shrink-0
          ${isLandscape
            ? "w-full md:w-[38%] aspect-[4/5] md:aspect-auto md:min-h-[400px]" // Increased height here
            : "aspect-[4/5]" // Changed from 3/2 to 4/5 for more vertical height
          }
        `}
      >
        <div
          className="absolute inset-0 group-hover:[transform:scale(1.06)] transition-transform duration-500 will-change-transform"
          style={{ transitionTimingFunction: "cubic-bezier(0.25,0.46,0.45,0.94)" }}
        >
          {/* Note: Ensure TeamMemberImage applies 'object-cover' internally */}
          <TeamMemberImage
            src={member.image}
            alt={`Portrait of ${member.name}`}
            name={member.name}
            priority={index < 2}
            className="w-full h-full object-cover object-top" 
            sizes={
              isLandscape
                ? "(max-width: 768px) 100vw, 40vw"
                : "(max-width: 768px) 100vw, 33vw"
            }
          />
        </div>

        {/* Gradient */}
        <div
          aria-hidden
          className={`absolute inset-0 ${
            isLandscape
              ? "bg-gradient-to-r from-transparent via-[#020817]/10 to-[#020817]"
              : "bg-gradient-to-t from-[#020817] via-[#020817]/40 to-transparent"
          }`}
        />

        {!isLandscape && (
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
            <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
              {member.name}
            </h3>
            <p className="mt-1 text-sm font-medium text-[#60a5fa]">
              {member.designation}
            </p>
          </div>
        )}
      </div>

      {/* Content */}
      <div
        className={`flex flex-col justify-center flex-grow
          ${isLandscape ? "p-8 md:p-10 lg:p-12" : "p-6 md:p-7"}
        `}
      >
        {isLandscape && (
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#3b82f6]/70 mb-2">
              Leadership
            </p>
            <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
              {member.name}
            </h3>
            <p className="mt-2 text-base font-medium text-[#60a5fa]">
              {member.designation}
            </p>
          </div>
        )}

        {member.tagline && (
          <p
            className={`font-medium text-white/70 ${
              isLandscape ? "text-base mb-4" : "text-sm mb-3"
            }`}
          >
            {member.tagline}
          </p>
        )}

        <p
          className={`text-white/50 leading-relaxed ${
            isLandscape ? "text-sm md:text-base" : "text-sm"
          }`}
        >
          {member.bio}
        </p>
      </div>
    </motion.article>
  );
});

export default LeadershipCard;