"use client";

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BlurText from "@/components/ui/BlurText";
import PillLabel from "@/components/ui/PillLabel";
import TeamCard from "@/components/team/TeamCard";
import {
  DEPARTMENTS,
  getMembersByDepartment,
  type DepartmentId,
} from "@/lib/team-data";
import { EASE, fadeUp } from "@/lib/animations";

const TeamGrid = memo(function TeamGrid() {
  const [activeDept, setActiveDept] = useState<DepartmentId>("engineering");
  const members = getMembersByDepartment(activeDept);

  const handleSelect = useCallback((id: DepartmentId) => {
    setActiveDept(id);
  }, []);

  return (
    <section className="relative py-28 md:py-32 overflow-hidden" aria-labelledby="departments-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-14">
          <div className="mb-6">
            <PillLabel>Department Teams</PillLabel>
          </div>
          <BlurText
            text="Experts Across Every Function"
            animateBy="words"
            direction="bottom"
            delay={80}
            stepDuration={0.45}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white text-center justify-center max-w-4xl"
          />
          <motion.p
            {...fadeUp(0.35)}
            id="departments-heading"
            className="mt-6 text-lg text-white/45 max-w-2xl leading-relaxed"
          >
            Specialized teams united by one standard — deliver solutions that create
            measurable business impact.
          </motion.p>
        </div>

        <div
          role="tablist"
          aria-label="Department filter"
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {DEPARTMENTS.map((dept) => {
            const isActive = activeDept === dept.id;
            return (
              <button
                key={dept.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => handleSelect(dept.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb]/50 ${
                  isActive
                    ? "bg-[#2563eb]/20 border border-[#2563eb]/40 text-white"
                    : "bg-white/5 border border-white/10 text-white/45 hover:text-white/70 hover:border-white/20"
                }`}
              >
                {dept.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeDept}
            role="tabpanel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {members.map((member, i) => (
              <TeamCard key={member.id} member={member} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
});

export default TeamGrid;
