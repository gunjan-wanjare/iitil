"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const DEFAULT_ROOT_MARGIN = "0px 0px -70% 0px";

interface UseScrollSpyOptions {
  rootMargin?: string;
  enabled?: boolean;
}

export function useScrollSpy(
  sectionIds: string[],
  options: UseScrollSpyOptions = {}
) {
  const { rootMargin = DEFAULT_ROOT_MARGIN, enabled = true } = options;
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");
  const isProgrammaticScroll = useRef(false);
  const programmaticTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const setProgrammaticScroll = useCallback((value: boolean, durationMs = 1400) => {
    isProgrammaticScroll.current = value;
    if (programmaticTimer.current) {
      clearTimeout(programmaticTimer.current);
    }
    if (value) {
      programmaticTimer.current = setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, durationMs);
    }
  }, []);

  useEffect(() => {
    if (!enabled || sectionIds.length === 0) return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const visibleSections = new Map<string, IntersectionObserverEntry>();

    const observer = new IntersectionObserver(
      (entries) => {
        if (isProgrammaticScroll.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        if (visibleSections.size === 0) return;

        const sorted = [...visibleSections.values()].sort(
          (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
        );

        const nextActive = sorted[0]?.target.id;
        if (nextActive) {
          setActiveId(nextActive);
        }
      },
      {
        root: null,
        rootMargin,
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      visibleSections.clear();
      if (programmaticTimer.current) {
        clearTimeout(programmaticTimer.current);
      }
    };
  }, [sectionIds, rootMargin, enabled]);

  return {
    activeId,
    setActiveId,
    setProgrammaticScroll,
    isProgrammaticScroll,
  };
}
