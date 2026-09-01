"use client";

import { motion } from "motion/react";
import { useState } from "react";

import { useMotionSettings } from "@/components/motion/use-motion-settings";

export type ProjectPreviewMode = "fixed" | "inline" | "floating";

interface ProjectPreviewItem {
  title: string;
  status: "content-pending" | "no-media";
}

interface ProjectPreviewProps {
  items: ProjectPreviewItem[];
  mode: ProjectPreviewMode;
  replayKey: number;
}

function NeutralPreview({
  activeTitle,
  mode,
}: {
  activeTitle: string;
  mode: ProjectPreviewMode;
}) {
  return (
    <div className="flex aspect-[4/3] min-h-44 flex-col justify-between border border-[var(--border)] bg-[var(--background-secondary)] p-5">
      <p className="type-label text-[var(--accent-signal)]">
        {mode === "floating" ? "Floating preview, test only" : "No approved media"}
      </p>
      <p className="type-h3 max-w-[14ch]">{activeTitle}</p>
      <p className="type-meta text-[var(--foreground-muted)]">[CONTENT TODO]</p>
    </div>
  );
}

export function ProjectPreview({ items, mode, replayKey }: ProjectPreviewProps) {
  const { durations, prefersReducedMotion } = useMotionSettings();
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex];
  const transition = {
    duration: prefersReducedMotion ? 0 : durations.base,
    ease: [0, 0, 0.2, 1] as const,
  };

  return (
    <div
      className={
        mode === "fixed"
          ? "grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.72fr)]"
          : "relative"
      }
      key={replayKey}
    >
      <div className="border-b border-[var(--border)]">
        {items.map((item, index) => {
          const activeRow = activeIndex === index;
          return (
            <div className="border-t border-[var(--border)]" key={item.title}>
              <button
                aria-pressed={activeRow}
                className={`group flex w-full items-center justify-between gap-4 py-4 text-left transition-[background-color,color,transform] duration-[var(--motion-fast)] ease-[var(--ease-standard)] active:translate-y-px ${activeRow ? "text-[var(--accent-interactive)]" : "text-[var(--foreground)]"}`}
                onFocus={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                onPointerMove={() => mode === "floating" && setActiveIndex(index)}
                type="button"
              >
                <span className="type-h3 transition-transform duration-[var(--motion-fast)] ease-[var(--ease-standard)] group-hover:translate-x-1">
                  {item.title}
                </span>
                <span className="type-label shrink-0 text-[var(--foreground-muted)]">
                  {item.status === "content-pending" ? "Content pending" : "No media"}
                </span>
              </button>
              {mode === "inline" && activeRow ? (
                <motion.div
                  animate={{ clipPath: "inset(0 0 0 0)", opacity: 1 }}
                  initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
                  transition={transition}
                >
                  <NeutralPreview activeTitle={item.title} mode={mode} />
                </motion.div>
              ) : null}
            </div>
          );
        })}
      </div>
      {mode === "fixed" ? (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 6 }}
          key={active.title}
          transition={transition}
        >
          <NeutralPreview activeTitle={active.title} mode={mode} />
        </motion.div>
      ) : null}
      {mode === "floating" ? (
        <motion.div
          animate={{ opacity: 1, x: 0, y: 0 }}
          className="pointer-events-none absolute top-12 right-4 hidden w-[min(20rem,45%)] lg:block"
          initial={{ opacity: 0, x: 8, y: 4 }}
          key={active.title}
          transition={transition}
        >
          <NeutralPreview activeTitle={active.title} mode={mode} />
        </motion.div>
      ) : null}
    </div>
  );
}
