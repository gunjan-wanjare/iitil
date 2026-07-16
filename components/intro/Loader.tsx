"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { introConfig } from "./introConfig";
import { measureRect } from "./utils";
import type { Rect } from "./types";

interface LoaderProps {
  /** Fired with the measured logo rect as fade begins — FloatingLogo starts here. */
  onComplete: (rect: Rect) => void;
  /** Fired after the fade-out finishes — parent may unmount the loader. */
  onExited?: () => void;
}

/**
 * Fullscreen Crediple loader.
 * Holds for `loaderDuration`, measures the brand logo, notifies parent,
 * then fades over `loaderFadeDuration`.
 */
export default function Loader({ onComplete, onExited }: LoaderProps) {
  const logoRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const completedRef = useRef(false);

  useEffect(() => {
    const hold = window.setTimeout(() => {
      const rect = measureRect(logoRef.current);
      if (rect && !completedRef.current) {
        completedRef.current = true;
        // Handoff BEFORE fade so FloatingLogo occupies the same pixels.
        onComplete(rect);
      }
      setVisible(false);
    }, introConfig.loaderDuration);

    return () => window.clearTimeout(hold);
  }, [onComplete]);

  return (
    <AnimatePresence onExitComplete={onExited}>
      {visible && (
        <motion.div
          key="crediple-loader"
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center"
          style={{ background: "rgba(2,8,23,1)" }}
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: introConfig.loaderFadeDuration / 1000,
              ease: "easeInOut",
            },
          }}
          aria-busy="true"
          aria-label="Loading"
          role="status"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(37,99,235,0.22) 0%, transparent 70%)",
            }}
          />

          <motion.div
            ref={logoRef}
            className="relative z-10"
            style={{
              width: introConfig.loaderLogoSize,
              height: introConfig.loaderLogoSize,
            }}
            initial={{
              scale: 3.5,
              filter: "blur(18px)",
              opacity: 0,
            }}
            animate={{
              scale: 1,
              filter: "blur(0px)",
              opacity: 1,
            }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Image
              src={introConfig.brandLogo}
              alt=""
              width={introConfig.loaderLogoSize}
              height={introConfig.loaderLogoSize}
              priority
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Real shimmer — transform x only, never opacity or background-position */}
          <div
            className="relative z-10 mt-10 overflow-hidden rounded-full"
            style={{
              width: 80,
              height: 2,
              background: "rgba(255,255,255,0.08)",
            }}
            aria-hidden
          >
            <motion.div
              className="absolute top-0 bottom-0 rounded-full"
              style={{
                width: "40%",
                background:
                  "linear-gradient(90deg, transparent, rgba(96,165,250,0.95), transparent)",
              }}
              animate={{ x: ["-120%", "220%"] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
