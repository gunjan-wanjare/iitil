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

type Stage = "brand" | "yaka";

function LoadingBar({ delay = 0.5 }: { delay?: number }) {
  return (
    <div
      className="relative z-10 overflow-hidden rounded-full"
      style={{ width: 80, height: 2, background: "rgba(255,255,255,0.08)" }}
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
        transition={{ duration: 1.2, repeat: Infinity, ease: "linear", delay }}
      />
    </div>
  );
}

/**
 * Fullscreen two-stage loader: the site's own wordmark, then the
 * "A YAKA Brand" mark. Holds each stage in turn, measures the YAKA mark,
 * notifies parent, then fades over `loaderFadeDuration`.
 */
export default function Loader({ onComplete, onExited }: LoaderProps) {
  const yakaLogoRef = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState<Stage>("brand");
  const [visible, setVisible] = useState(true);
  const completedRef = useRef(false);

  useEffect(() => {
    const toYaka = window.setTimeout(
      () => setStage("yaka"),
      introConfig.loaderStage1Duration
    );

    const hold = window.setTimeout(() => {
      const rect = measureRect(yakaLogoRef.current);
      if (rect && !completedRef.current) {
        completedRef.current = true;
        // Handoff BEFORE fade so FloatingLogo occupies the same pixels.
        onComplete(rect);
      }
      setVisible(false);
    }, introConfig.loaderStage1Duration + introConfig.loaderStage2Duration);

    return () => {
      window.clearTimeout(toYaka);
      window.clearTimeout(hold);
    };
  }, [onComplete]);

  return (
    <AnimatePresence onExitComplete={onExited}>
      {visible && (
        <motion.div
          key="iitil-loader"
          className="fixed inset-0 z-[10000] flex items-center justify-center"
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

          <AnimatePresence mode="wait">
            {stage === "brand" ? (
              <motion.div
                key="stage1-iitil"
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 flex flex-col items-center justify-center gap-6"
              >
                <div
                  className="relative"
                  style={{
                    width: introConfig.loaderStage1LogoSize,
                    height: introConfig.loaderStage1LogoSize,
                  }}
                >
                  <Image
                    src={introConfig.stage1Logo}
                    alt="IITIL"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
                <LoadingBar delay={0.3} />
              </motion.div>
            ) : (
              <motion.div
                key="stage2-yaka"
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 flex flex-col items-center justify-center gap-3"
              >
                <div
                  ref={yakaLogoRef}
                  className="relative"
                  style={{
                    width: introConfig.loaderStage2LogoSize,
                    height: introConfig.loaderStage2LogoSize,
                  }}
                >
                  <Image
                    src={introConfig.iconLogo}
                    alt="YAKA"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
                <p className="text-xs sm:text-sm font-medium tracking-wide text-[#B0C0F8]">
                  A <span className="font-bold text-white">YAKA</span> Brand
                </p>
                <LoadingBar delay={0.5} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
