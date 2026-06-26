"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import LinkedInIcon from "@/components/ui/LinkedInIcon";
import GlowCard from "@/components/ui/GlowCard";
import TeamMemberImage from "@/components/team/TeamMemberImage";
import type { TeamMember } from "@/lib/team-data";

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

const TeamCard = memo(function TeamCard({ member, index }: TeamCardProps) {
  return (
    <GlowCard delay={index * 0.08} className="p-0 overflow-hidden h-full flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden group">
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <TeamMemberImage
            src={member.image}
            alt={`Portrait of ${member.name}, ${member.designation}`}
            name={member.name}
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </motion.div>
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-[#020817]/90 via-transparent to-transparent opacity-80"
        />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="text-xl font-semibold text-white tracking-tight">{member.name}</h3>
          <p className="text-sm text-[#60a5fa] mt-0.5">{member.designation}</p>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs font-semibold tracking-widest uppercase text-white/35 mb-3">
          {member.experience} experience
        </p>
        <p className="text-sm text-white/50 leading-relaxed flex-1 line-clamp-3">
          {member.bio}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {member.skills.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="text-xs px-2.5 py-1 rounded-full bg-[#2563eb]/10 border border-[#2563eb]/20 text-[#60a5fa]"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-5 pt-5 border-t border-white/[0.06] flex items-center gap-2">
          {member.linkedin && (
            <motion.a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on LinkedIn`}
              whileHover={{ scale: 1.08, rotate: 4 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-[#2563eb] bg-[#2563eb]/10 border border-[#2563eb]/20 hover:bg-[#2563eb]/18 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb]/50"
            >
              <LinkedInIcon size={16} />
            </motion.a>
          )}
          {member.email && (
            <motion.a
              href={`mailto:${member.email}`}
              aria-label={`Email ${member.name}`}
              whileHover={{ scale: 1.08, rotate: -4 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-[#3b82f6] bg-[#3b82f6]/10 border border-[#3b82f6]/20 hover:bg-[#3b82f6]/18 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb]/50"
            >
              <Mail size={16} />
            </motion.a>
          )}
          <motion.a
            href="/reach-us"
            whileHover={{ x: 3 }}
            className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-white/50 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb]/50 rounded-sm"
          >
            Connect
            <ArrowUpRight size={14} />
          </motion.a>
        </div>
      </div>
    </GlowCard>
  );
});

export default TeamCard;
