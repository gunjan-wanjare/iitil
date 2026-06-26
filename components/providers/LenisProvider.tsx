"use client";

import Lenis from "lenis";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

interface LenisContextValue {
  lenis: Lenis | null;
  stop: () => void;
  start: () => void;
}

export const LenisContext = createContext<LenisContextValue>({
  lenis: null,
  stop: () => {},
  start: () => {},
});

export function useLenis() {
  return useContext(LenisContext);
}

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const instance = new Lenis({
      lerp: 0.07,
      smoothWheel: true,
      syncTouch: true,
      duration: 1.4,
    });

    // Expose globally so ScrollStack can subscribe without creating its own instance
    if (typeof window !== "undefined") {
      (window as unknown as Record<string, unknown>).__lenis = instance;
    }

    setLenis(instance);

    function raf(time: number) {
      instance.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }

    rafRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
      instance.destroy();
      if (typeof window !== "undefined") {
        delete (window as unknown as Record<string, unknown>).__lenis;
      }
    };
  }, []);

  const stop = useCallback(() => lenis?.stop(), [lenis]);
  const start = useCallback(() => lenis?.start(), [lenis]);

  return (
    <LenisContext.Provider value={{ lenis, stop, start }}>
      {children}
    </LenisContext.Provider>
  );
}
