"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

import { useMotionSettings } from "@/components/motion/use-motion-settings";

export type MediaMotion = "mask" | "fade" | "none";

interface MediaRevealProps {
  children: ReactNode;
  className?: string;
  motion: MediaMotion;
  replayKey: number;
}

export function MediaReveal({
  children,
  className = "",
  motion: mode,
  replayKey,
}: MediaRevealProps) {
  const { durations, prefersReducedMotion } = useMotionSettings();
  if (mode === "none" || prefersReducedMotion)
    return <div className={className}>{children}</div>;

  if (mode === "mask") {
    return (
      <motion.div
        animate={{ clipPath: "inset(0 0 0 0)" }}
        className={className}
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        key={replayKey}
        transition={{ duration: durations.slow, ease: [0, 0, 0.2, 1] }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      className={className}
      initial={{ opacity: 0, scale: 0.985 }}
      key={replayKey}
      transition={{ duration: durations.base, ease: [0, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
