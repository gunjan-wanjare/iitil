"use client";

import { motion } from "framer-motion";

interface PillLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function PillLabel({ children, className = "" }: PillLabelProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium tracking-widest uppercase text-white/60 backdrop-blur-sm ${className}`}
    >
      {children}
    </motion.span>
  );
}
