"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LegalContentBlock } from "./legalSections";
import { EASE } from "@/components/service-pages/constants";

interface LegalSectionProps {
  id: string;
  title: string;
  content: LegalContentBlock[];
  index: number;
}

function renderBlock(block: LegalContentBlock, index: number) {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={index} className="text-base text-white/55 leading-relaxed">
          {block.text}
        </p>
      );
    case "heading":
      return (
        <h3
          key={index}
          className="text-lg font-semibold text-white/90 tracking-tight mt-6 mb-2"
        >
          {block.text}
        </h3>
      );
    case "list":
      if (block.ordered) {
        return (
          <ol
            key={index}
            className="list-decimal list-inside space-y-2 text-base text-white/55 leading-relaxed pl-1"
          >
            {block.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        );
      }
      return (
        <ul key={index} className="space-y-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-base text-white/55 leading-relaxed">
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2.5"
                style={{ background: "#2563eb" }}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <div
          key={index}
          className="rounded-xl px-5 py-4 text-sm text-white/70 leading-relaxed"
          style={{
            background: "rgba(37,99,235,0.08)",
            border: "1px solid rgba(37,99,235,0.22)",
          }}
        >
          {block.text}
        </div>
      );
    default:
      return null;
  }
}

export default function LegalSection({
  id,
  title,
  content,
  index,
}: LegalSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: 0.05, duration: 0.6, ease: EASE }}
      className="scroll-mt-28"
      aria-labelledby={`${id}-heading`}
    >
      <div
        className="rounded-2xl p-8 md:p-10 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 50%, transparent 100%)",
          border: "1px solid rgba(255,255,255,0.06)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.06), 0 0 0 1px rgba(37,99,235,0.08)",
        }}
      >
        <div
          aria-hidden
          className="absolute top-0 left-0 w-2/5 h-2/5 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top left, rgba(37,99,235,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10">
          <motion.h2
            id={`${id}-heading`}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease: EASE }}
            className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-6 flex items-center gap-3"
          >
            <span
              className="text-sm font-semibold tracking-widest"
              style={{ color: "#3b82f6" }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            {title}
          </motion.h2>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-4"
          >
            {content.map((block, blockIndex) => renderBlock(block, blockIndex))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
