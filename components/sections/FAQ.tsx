"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BlurText from "@/components/ui/BlurText";
import PillLabel from "@/components/ui/PillLabel";
import AnimatedButton from "@/components/ui/AnimatedButton";

const TRANSPARENCY_ITEMS = [
  {
    question: "We don't sell shelfware.",
    answer:
      "If a dashboard won't change a decision, we won't build it.",
  },
  {
    question: "We don't do innovation theatre.",
    answer:
      "No AI for the press release. Models earn their keep or they don't ship.",
  },
  {
    question: "We don't disappear after go-live.",
    answer:
      "Adoption, governance, and optimisation are the job - not the upsell.",
  },
  {
    question: "We don't let programmes drag.",
    answer:
      "Tight scopes, fast cycles, not the open-ended engagements that quietly become a way of life.",
  },
] as const;

type TransparencyItem = (typeof TRANSPARENCY_ITEMS)[number];

function AccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: TransparencyItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="rounded-2xl overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 40%, transparent 60%, rgba(37,99,235,0.04) 100%)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.07)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.2), 0 0 0 1px rgba(37,99,235,0.1)",
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-8 py-6 text-left group"
      >
        <span className="text-xl font-semibold text-white pr-8 leading-snug">
          {item.question}
        </span>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
          style={{
            background: isOpen ? "rgba(37,99,235,0.2)" : "rgba(255,255,255,0.06)",
            border: `1px solid ${isOpen ? "rgba(37,99,235,0.4)" : "rgba(255,255,255,0.1)"}`,
          }}
        >
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
            className="text-white/60 text-lg leading-none block"
            style={{ marginTop: "-2px" }}
          >
            +
          </motion.span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="px-8 pb-6 text-lg text-white/50 leading-relaxed">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="mb-6">
            <PillLabel>Lead with Transparency</PillLabel>
          </div>
          <BlurText
            as="h2"
            text="We're picky about the right things."
            animateBy="words"
            direction="bottom"
            delay={90}
            stepDuration={0.45}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white text-center justify-center max-w-4xl"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-6 text-lg md:text-xl text-white/45 max-w-2xl leading-relaxed"
          >
            Because &ldquo;we do everything&rdquo; is a red flag, not a value prop.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-3">
          {TRANSPARENCY_ITEMS.map((item, i) => (
            <AccordionItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-center mt-12"
        >
          <AnimatedButton variant="ghost" href="/reach-us">
            Refreshing, right? Let&apos;s talk
          </AnimatedButton>
        </motion.div>
      </div>
    </section>
  );
}
