"use client";

import { useState } from "react";
import { useReducedMotion } from "motion/react";

export type MotionIntensity = "quiet" | "standard" | "expressive";

const fallbackDurations = { fast: 0.14, base: 0.22, slow: 0.42 };

function readDuration(token: string, fallback: number) {
  const value = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue(token)
    .trim();
  const numeric = Number.parseFloat(value);
  return Number.isFinite(numeric) ? numeric / 1000 : fallback;
}

export function useMotionSettings() {
  const prefersReducedMotion = useReducedMotion();
  const [durations] = useState(() => {
    if (typeof window === "undefined") return fallbackDurations;
    return {
      fast: readDuration("--motion-fast", fallbackDurations.fast),
      base: readDuration("--motion-base", fallbackDurations.base),
      slow: readDuration("--motion-slow", fallbackDurations.slow),
    };
  });

  return { durations, prefersReducedMotion };
}

export function getMotionIntensity(intensity: MotionIntensity) {
  if (intensity === "quiet") return { distance: 6, stagger: 0.04 };
  if (intensity === "expressive") return { distance: 16, stagger: 0.12 };
  return { distance: 10, stagger: 0.08 };
}
