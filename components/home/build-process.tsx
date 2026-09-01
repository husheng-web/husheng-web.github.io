"use client";

import { motion } from "motion/react";

import { SectionHeader } from "@/components/ui/section-header";
import { useMotionSettings } from "@/components/motion/use-motion-settings";
import type { Dictionary } from "@/types/content";

export function BuildProcess({ dictionary }: { dictionary: Dictionary }) {
  const { prefersReducedMotion } = useMotionSettings();

  return (
    <section
      aria-labelledby="build-process-title"
      className="py-[var(--space-section)]"
    >
      <SectionHeader
        eyebrow={dictionary.home.sectionLabels.howIBuild}
        index="03"
        title={
          <span id="build-process-title">
            {dictionary.home.sectionTitles.howIBuild}
          </span>
        }
      />
      <motion.ol
        className="mt-12 grid border-b border-[var(--border)] md:grid-cols-2 xl:grid-cols-3"
        initial={prefersReducedMotion ? false : "hidden"}
        viewport={{ amount: 0.1, once: true }}
        whileInView={prefersReducedMotion ? undefined : "visible"}
        variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
      >
        {dictionary.home.buildSteps.map((step) => (
          <motion.li
            className="min-h-44 border-t border-[var(--border)] px-0 py-5 md:px-5 xl:nth-[3n+1]:pl-0"
            key={step.index}
            variants={{
              hidden: { opacity: 0, y: 8 },
              visible: {
                opacity: 1,
                transition: { duration: 0.22, ease: [0, 0, 0.2, 1] },
                y: 0,
              },
            }}
          >
            <p className="type-label text-[var(--accent-signal)]">{step.index}</p>
            <h3 className="type-h3 mt-8">{step.title}</h3>
            <p className="mt-3 text-[var(--foreground-secondary)]">
              {step.description}
            </p>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  );
}
