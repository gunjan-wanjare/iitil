"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
  as?: "button" | "a";
  showArrow?: boolean;
}

export default function AnimatedButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  showArrow = true,
}: AnimatedButtonProps) {
  const baseStyles =
    "relative overflow-hidden inline-flex items-center gap-2 px-8 py-5 rounded-full font-semibold text-white transition-colors duration-300 cursor-pointer";

  const variantStyles =
    variant === "primary"
      ? "bg-gradient-to-b from-[#2563eb] to-[#1d4ed8]"
      : "bg-transparent border border-white/20";

  const insetShadow =
    variant === "primary"
      ? { boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.2)" }
      : { boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)" };

  const MotionTag = href ? motion.a : motion.button;

  return (
    <MotionTag
      whileHover="hover"
      initial="rest"
      animate="rest"
      className={`${baseStyles} ${variantStyles} ${className}`}
      style={insetShadow}
      onClick={onClick}
      {...(href ? { href } : { type: "button" as const })}
    >
      {/* Sliding text layers */}
      <span className="relative overflow-hidden inline-flex flex-col h-[1.2em]">
        <motion.span
          variants={{
            rest: { y: "0%", opacity: 1 },
            hover: { y: "-100%", opacity: 0 },
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="inline-block"
        >
          {children}
        </motion.span>
        <motion.span
          variants={{
            rest: { y: "100%", opacity: 0 },
            hover: { y: "0%", opacity: 1 },
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="inline-block absolute top-0 left-0 whitespace-nowrap"
        >
          {children}
        </motion.span>
      </span>

      {/* Arrow icon */}
      {showArrow && (
        <span className="relative overflow-hidden inline-flex w-4 h-4">
          <motion.span
            variants={{
              rest: { x: "0%", y: "0%", opacity: 1 },
              hover: { x: "100%", y: "-100%", opacity: 0 },
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="inline-flex absolute inset-0 items-center justify-center"
          >
            <ArrowUpRight size={16} />
          </motion.span>
          <motion.span
            variants={{
              rest: { x: "-100%", y: "100%", opacity: 0 },
              hover: { x: "0%", y: "0%", opacity: 1 },
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="inline-flex absolute inset-0 items-center justify-center"
          >
            <ArrowUpRight size={16} />
          </motion.span>
        </span>
      )}
    </MotionTag>
  );
}

/* Nav link with text-slide effect (no bg, no border) */
export function NavLink({
  children,
  href,
  className = "",
  active = false,
}: {
  children: ReactNode;
  href?: string;
  className?: string;
  active?: boolean;
}) {
  return (
    <motion.a
      href={href}
      whileHover="hover"
      initial="rest"
      animate="rest"
      className={`relative overflow-hidden inline-flex flex-col h-[1.35em] transition-colors font-medium cursor-pointer ${
        active ? "text-white" : "text-white/70 hover:text-white"
      } ${className}`}
    >
      <motion.span
        variants={{
          rest: { y: "0%", opacity: 1 },
          hover: { y: "-100%", opacity: 0 },
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="inline-block"
      >
        {children}
      </motion.span>
      <motion.span
        variants={{
          rest: { y: "100%", opacity: 0 },
          hover: { y: "0%", opacity: 1 },
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="inline-block absolute top-0 left-0 whitespace-nowrap text-white"
      >
        {children}
      </motion.span>
    </motion.a>
  );
}
