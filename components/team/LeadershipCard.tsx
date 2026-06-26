"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import LinkedInIcon from "@/components/ui/LinkedInIcon";
import TeamMemberImage from "@/components/team/TeamMemberImage";
import type { TeamMember } from "@/lib/team-data";
import { EASE } from "@/lib/animations";

interface LeadershipCardProps {
  member: TeamMember;
  index: number;
}

const LeadershipCard = memo(function LeadershipCard({ member, index }: LeadershipCardProps) {
  return (
    <motion.article
      // Entry animation variants
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: EASE }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      className="group relative rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.02]"
    >
      {/* Container Motion Div - Handles the "Opening/Expanding" Effect */}
      <motion.div
        variants={{
          rest: { 
            scale: 1, 
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 0 0 1px rgba(37,99,235,0.08)" 
          },
          hover: { 
            scale: 1.02, 
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px rgba(37,99,235,0.28), 0 20px 40px rgba(0,0,0,0.4)" 
          }
        }}
        initial="rest"
        whileHover="hover"
        animate="rest"
        transition={{ duration: 0.4, ease: EASE }}
        className="h-full flex flex-col"
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          <motion.div
            className="absolute inset-0"
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.08 }
            }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <TeamMemberImage
              src={member.image}
              alt={`Portrait of ${member.name}`}
              name={member.name}
              priority={index < 2}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>
          
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
              {member.name}
            </h3>
            <p className="mt-1 text-sm font-medium text-[#60a5fa]">{member.designation}</p>
          </div>
        </div>

        <div className="p-6 md:p-8 flex flex-col flex-grow">
          {member.tagline && (
            <p className="text-sm font-medium text-white/70 mb-4">{member.tagline}</p>
          )}
          
          <p className="text-sm text-white/50 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
            {member.bio}
          </p>

          <div className="mt-auto pt-6 flex items-center gap-3">
            {member.linkedin && (
              <motion.a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-[#2563eb] bg-[#2563eb]/10 border border-[#2563eb]/25"
              >
                <LinkedInIcon size={18} />
              </motion.a>
            )}
            {member.email && (
              <motion.a
                href={`mailto:${member.email}`}
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-[#3b82f6] bg-[#3b82f6]/10 border border-[#3b82f6]/25"
              >
                <Mail size={18} />
              </motion.a>
            )}
            <motion.a
              href="/reach-us"
              whileHover={{ x: 4 }}
              className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-white/60 hover:text-white"
            >
              Connect
              <ArrowUpRight size={16} />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
});

export default LeadershipCard;