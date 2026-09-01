"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

import { useMotionSettings } from "@/components/motion/use-motion-settings";

export type SectionMotion = "sequence" | "group" | "title";

interface SectionRevealProps {
  children: ReactNode;
  content: ReactNode;
  eyebrow: ReactNode;
  replayKey: number;
  title: ReactNode;
  variant: SectionMotion;
}

export function SectionReveal({
  children,
  content,
  eyebrow,
  replayKey,
  title,
  variant,
}: SectionRevealProps) {
  const { durations, prefersReducedMotion } = useMotionSettings();
  const transition = {
    duration: prefersReducedMotion ? 0 : durations.base,
    ease: [0, 0, 0.2, 1] as const,
  };
  const item = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 8 },
    visible: { opacity: 1, y: 0, transition },
  };
  const groupTransition =
    variant === "sequence" ? { staggerChildren: 0.08 } : { staggerChildren: 0 };

  if (variant === "title") {
    return (
      <div className="border-t border-[var(--border)] pt-4" key={replayKey}>
        <p className="type-label text-[var(--accent-signal)]">{eyebrow}</p>
        <motion.h3
          animate="visible"
          className="type-h2 mt-4"
          initial="hidden"
          variants={item}
        >
          {title}
        </motion.h3>
        <div className="mt-4 text-[var(--foreground-secondary)]">{content}</div>
        <div className="mt-6">{children}</div>
      </div>
    );
  }

  return (
    <motion.div
      animate="visible"
      className="border-t border-[var(--border)] pt-4"
      initial="hidden"
      key={replayKey}
      variants={{ hidden: {}, visible: { transition: groupTransition } }}
    >
      <motion.p className="type-label text-[var(--accent-signal)]" variants={item}>
        {eyebrow}
      </motion.p>
      <motion.h3 className="type-h2 mt-4" variants={item}>
        {title}
      </motion.h3>
      <motion.div className="mt-4 text-[var(--foreground-secondary)]" variants={item}>
        {content}
      </motion.div>
      <motion.div className="mt-6" variants={item}>
        {children}
      </motion.div>
    </motion.div>
  );
}
