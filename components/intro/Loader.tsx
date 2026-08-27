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
  const logoBoxRef = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState<Stage>("brand");
  const [visible, setVisible] = useState(true);
  const completedRef = useRef(false);

  useEffect(() => {
    const toYaka = window.setTimeout(
      () => setStage("yaka"),
      introConfig.loaderStage1Duration
    );

    const hold = window.setTimeout(() => {
      const rect = measureRect(logoBoxRef.current);
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
              ease: [0.22, 1, 0.36, 1],
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

          {/* Soft glow/shadow behind the logo */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute pointer-events-none rounded-full"
            style={{
              width: 400,
              height: 400,
              background:
                "radial-gradient(circle, rgba(96,165,250,0.24) 0%, rgba(37,99,235,0.12) 45%, transparent 70%)",
              filter: "blur(28px)",
            }}
          />

          <motion.div
            initial={{ scale: 3.5, opacity: 0, filter: "blur(18px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center justify-center gap-5"
          >
            <div
              ref={logoBoxRef}
              className="relative"
              style={{
                width: introConfig.loaderStage1LogoSize,
                height: introConfig.loaderStage1LogoSize,
              }}
            >
              <AnimatePresence mode="wait">
                {stage === "brand" ? (
                  <motion.div
                    key="stage1-iitil"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={introConfig.stage1Logo}
                      alt="IITIL"
                      fill
                      priority
                      className="object-contain"
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="stage2-yaka"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={introConfig.iconLogo}
                      alt="YAKA"
                      fill
                      priority
                      className="object-contain"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              {stage === "yaka" && (
                <motion.p
                  key="yaka-caption"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="text-[10px] sm:text-xs font-medium tracking-wide text-[#B0C0F8]"
                >
                  A <span className="font-bold text-white">YAKA</span> Brand
                </motion.p>
              )}
            </AnimatePresence>

            <LoadingBar delay={0.5} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
