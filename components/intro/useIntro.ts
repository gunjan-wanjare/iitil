"use client";

import { createContext, useContext } from "react";
import type { IntroContextValue } from "./types";

const defaultValue: IntroContextValue = {
  phase: "done",
  isComplete: true,
  isActive: false,
  loaderRect: null,
  completeLoader: () => {},
  arriveAtHero: () => {},
};

export const IntroContext = createContext<IntroContextValue>(defaultValue);

export function useIntro(): IntroContextValue {
  return useContext(IntroContext);
}
