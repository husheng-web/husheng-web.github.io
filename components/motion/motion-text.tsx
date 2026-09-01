"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

import {
  getMotionIntensity,
  type MotionIntensity,
  useMotionSettings,
} from "@/components/motion/use-motion-settings";

export type TypographyMotion = "mask" | "soft" | "lines";

interface MotionTextProps {
  children: ReactNode;
  className?: string;
  intensity?: MotionIntensity;
  replayKey: number;
  variant: TypographyMotion;
}

export function MotionText({
  children,
  className = "",
  intensity = "standard",
  replayKey,
  variant,
}: MotionTextProps) {
  const { durations, prefersReducedMotion } = useMotionSettings();
  const { distance, stagger } = getMotionIntensity(intensity);
  const lines = Array.isArray(children) ? children : [children];
  const transition = {
    duration: prefersReducedMotion ? 0 : durations.slow,
    ease: [0, 0, 0.2, 1] as const,
  };

  if (prefersReducedMotion) return <div className={className}>{children}</div>;

  if (variant === "lines") {
    return (
      <motion.div
        animate="show"
        className={className}
        initial="hidden"
        key={replayKey}
        variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
      >
        {lines.map((line, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: distance },
              show: { opacity: 1, y: 0, transition },
            }}
          >
            {line}
          </motion.div>
        ))}
      </motion.div>
    );
  }

  if (variant === "mask") {
    return (
      <div className="overflow-hidden">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className={className}
          initial={{ opacity: 0, y: distance }}
          key={replayKey}
          transition={transition}
        >
          {children}
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      animate={{ opacity: 1, letterSpacing: "inherit", y: 0 }}
      className={className}
      initial={{ opacity: 0, letterSpacing: "0.01em", y: Math.min(distance, 8) }}
      key={replayKey}
      transition={{ duration: durations.base, ease: [0.2, 0, 0, 1] }}
    >
      {children}
    </motion.div>
  );
}
