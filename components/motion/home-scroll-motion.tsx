"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import type { ReactNode } from "react";

interface HomeScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function HomeScrollReveal({
  children,
  className = "",
  delay = 0,
}: HomeScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={`home-scroll-reveal ${className}`.trim()}
      initial={
        prefersReducedMotion ? false : { filter: "blur(8px)", opacity: 0, y: 32 }
      }
      transition={{
        delay: prefersReducedMotion ? 0 : delay,
        duration: prefersReducedMotion ? 0 : 0.62,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ amount: 0.16, once: true }}
      whileInView={
        prefersReducedMotion ? undefined : { filter: "blur(0px)", opacity: 1, y: 0 }
      }
    >
      {children}
    </motion.div>
  );
}

export function HomeScrollProgress() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    damping: 30,
    mass: 0.2,
    stiffness: 180,
  });

  if (prefersReducedMotion) return null;

  return (
    <div aria-hidden="true" className="home-scroll-progress">
      <span className="home-scroll-progress__track" />
      <motion.span
        className="home-scroll-progress__fill"
        style={{ scaleY: progress }}
      />
    </div>
  );
}
