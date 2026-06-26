"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  type MotionValue,
} from "framer-motion";

interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
  labels?: string[];
}

interface StackCardProps {
  progress: MotionValue<number>;
  index: number;
  total: number;
  children: React.ReactNode;
}

const StackCard = React.memo(function StackCard({
  progress,
  index,
  total,
  children,
}: StackCardProps) {
  const size = 1 / total;
  const start = index * size;
  const nextStart = (index + 1) * size;
  const isLast = index === total - 1;

  const scale = useTransform(
    progress,
    [start, nextStart],
    [1, isLast ? 1 : 0.9]
  );

  const stackY = (total - 1 - index) * -14;

  const y = useTransform(
    progress,
    [Math.max(0, start - size), start, nextStart],
    [index === 0 ? 0 : 800, stackY, stackY]
  );

  const brightness = useTransform(
    progress,
    [start, nextStart],
    [1, isLast ? 1 : 0.72]
  );

  const opacity = useTransform(
    progress,
    [start, nextStart],
    [1, isLast ? 1 : 0.55]
  );

  const blur = useTransform(
    progress,
    [start, nextStart],
    [0, isLast ? 0 : 6]
  );

  const filter = useMotionTemplate`brightness(${brightness}) blur(${blur}px)`;

  const boxShadow = "inset 0 1px 0 rgba(255,255,255,0.10), 0 32px 64px rgba(0,0,0,0.5)";

  return (
    <motion.div
      className="absolute inset-x-0 top-0 bottom-0 flex items-center justify-center transform-gpu will-change-transform pointer-events-none"
      style={{
        scale,
        y,
        filter,
        opacity,
        zIndex: index + 1,
      }}
    >
      <motion.div
        className="pointer-events-auto w-full max-w-6xl mx-auto px-6 md:px-12"
        style={{ boxShadow }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
});

export default function ScrollStack({
  children,
  className = "",
}: ScrollStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const childArray = React.Children.toArray(children);
  const total = childArray.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const dynamicHeight = total === 1 ? 100 : (total - 1) * 100 + 50;

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${className}`}
      style={{ height: `${dynamicHeight}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden transform-gpu">
        <div className="relative w-full h-full">
          {childArray.map((child, idx) => (
            <StackCard
              key={idx}
              progress={scrollYProgress}
              index={idx}
              total={total}
            >
              {child}
            </StackCard>
          ))}
        </div>
      </div>
    </div>
  );
}