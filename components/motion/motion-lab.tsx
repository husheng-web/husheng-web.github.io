"use client";

import { motion, MotionConfig } from "motion/react";
import { useState, type ReactNode } from "react";

import { MediaReveal } from "@/components/motion/media-reveal";
import { MotionText, type TypographyMotion } from "@/components/motion/motion-text";
import {
  ProjectPreview,
  type ProjectPreviewMode,
} from "@/components/motion/project-preview";
import { SectionReveal, type SectionMotion } from "@/components/motion/section-reveal";
import { useMotionSettings } from "@/components/motion/use-motion-settings";
import { Container, WideContainer } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";

const archiveItems = [
  { title: "拼旅途", status: "content-pending" as const },
  { title: "和拍 Pro", status: "no-media" as const },
  { title: "AI 学术助手", status: "content-pending" as const },
  { title: "国际体验设计奖官网", status: "no-media" as const },
];

const typographyOptions: Array<{ id: TypographyMotion; label: string; note: string }> =
  [
    { id: "mask", label: "A / Mask Rise", note: "Editorial hero or section title." },
    { id: "soft", label: "B / Soft Fade", note: "Technical and quieter framing." },
    {
      id: "lines",
      label: "C / Line Stagger",
      note: "Multi-line title only, never character-by-character.",
    },
  ];

const sectionOptions: Array<{ id: SectionMotion; label: string }> = [
  { id: "sequence", label: "A / Index → title → content" },
  { id: "group", label: "B / Header group" },
  { id: "title", label: "C / Title only" },
];

const archiveOptions: Array<{ id: ProjectPreviewMode; label: string }> = [
  { id: "fixed", label: "A / Fixed preview" },
  { id: "inline", label: "B / Inline reveal" },
  { id: "floating", label: "C / Floating preview" },
];

function OptionControl({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      aria-pressed={active}
      className={`min-h-11 border px-3 font-mono tracking-[var(--tracking-label)] text-[var(--type-label)] uppercase transition-[background-color,border-color,color,transform] duration-[var(--motion-fast)] ease-[var(--ease-standard)] active:translate-y-px ${active ? "border-[var(--accent-interactive)] text-[var(--accent-interactive)]" : "border-[var(--border)] text-[var(--foreground-secondary)] hover:border-[var(--foreground)]"}`}
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  );
}

function ReplayControl({ onReplay }: { onReplay: () => void }) {
  return <OptionControl active={false} label="Replay" onClick={onReplay} />;
}

function MotionPanel({ children }: { children: ReactNode }) {
  return <div className="mt-8 border-b border-[var(--border)] pb-8">{children}</div>;
}

function NavigationPrototype() {
  const [open, setOpen] = useState(false);
  const { durations, prefersReducedMotion } = useMotionSettings();
  return (
    <div className="mt-8 border border-[var(--border)] p-4">
      <div className="flex items-center justify-between gap-4">
        <span className="type-label">Navigation polish</span>
        <button
          aria-expanded={open}
          className="min-h-11 border border-[var(--border)] px-3 font-mono tracking-[var(--tracking-label)] text-[var(--type-label)] uppercase active:translate-y-px"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open ? (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 border-t border-[var(--border)] pt-3"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -6 }}
          transition={{
            duration: prefersReducedMotion ? 0 : durations.base,
            ease: [0, 0, 0.2, 1],
          }}
        >
          <div className="flex flex-col gap-2 font-mono tracking-[var(--tracking-label)] text-[var(--type-label)] uppercase">
            <span>Projects</span>
            <span>About</span>
            <span>Resume</span>
          </div>
        </motion.div>
      ) : null}
    </div>
  );
}

function RoutePrototype() {
  const [option, setOption] = useState<"fade" | "wipe" | "native">("native");
  const [replayKey, setReplayKey] = useState(0);
  const { durations, prefersReducedMotion } = useMotionSettings();
  const values =
    option === "wipe"
      ? { opacity: [0, 1], x: prefersReducedMotion ? 0 : [8, 0] }
      : { opacity: [0, 1], y: prefersReducedMotion ? 0 : [8, 0] };
  return (
    <div className="mt-8">
      <div className="flex flex-wrap gap-2">
        <OptionControl
          active={option === "fade"}
          label="A / Minimal fade"
          onClick={() => {
            setOption("fade");
            setReplayKey((value) => value + 1);
          }}
        />
        <OptionControl
          active={option === "wipe"}
          label="B / Editorial wipe"
          onClick={() => {
            setOption("wipe");
            setReplayKey((value) => value + 1);
          }}
        />
        <OptionControl
          active={option === "native"}
          label="C / Native navigation"
          onClick={() => setOption("native")}
        />
      </div>
      <div className="mt-4 min-h-28 border border-[var(--border)] bg-[var(--background-secondary)] p-4">
        {option === "native" ? (
          <p className="type-body-large">
            No route transition. Preferred production candidate.
          </p>
        ) : (
          <motion.p
            animate={{ opacity: 1, ...(values as object) }}
            className="type-body-large"
            initial={{ opacity: 0 }}
            key={replayKey}
            transition={{
              duration: prefersReducedMotion ? 0 : durations.base,
              ease: [0, 0, 0.2, 1],
            }}
          >
            Route transition prototype only.
          </motion.p>
        )}
      </div>
    </div>
  );
}

export function MotionLab() {
  const [typography, setTypography] = useState<TypographyMotion>("mask");
  const [section, setSection] = useState<SectionMotion>("sequence");
  const [archive, setArchive] = useState<ProjectPreviewMode>("fixed");
  const [media, setMedia] = useState<"mask" | "fade" | "none">("mask");
  const [replay, setReplay] = useState(0);
  const [simulateReducedMotion, setSimulateReducedMotion] = useState(false);
  const { prefersReducedMotion } = useMotionSettings();

  return (
    <MotionConfig reducedMotion={simulateReducedMotion ? "always" : "user"}>
      <WideContainer className="py-[var(--space-section)]">
        <p className="type-label text-[var(--accent-signal)]">
          DEV / MOTION LAB / CANDIDATE
        </p>
        <h1 className="type-display-xl mt-5 max-w-[12ch]">Motion language</h1>
        <p className="type-body-large mt-8 max-w-[52rem] text-[var(--foreground-secondary)]">
          A comparison surface for quiet hierarchy, archive feedback, and accessible
          continuity. No project imagery or product claims are simulated here.
        </p>
      </WideContainer>

      <Container className="space-y-[var(--space-section)] pb-[var(--space-section)]">
        <section>
          <SectionHeader
            eyebrow="Motion tokens"
            index="01"
            title="Standard leaning quiet."
          />
          <div className="mt-8 grid gap-3 border-t border-[var(--border)] pt-4 md:grid-cols-3">
            <p>
              <span className="type-label">Quiet</span>
              <br />
              Small 6px distance, fast feedback.
            </p>
            <p>
              <span className="type-label">Standard</span>
              <br />
              10px hierarchy movement, default lab intensity.
            </p>
            <p>
              <span className="type-label">Expressive</span>
              <br />
              16px candidate only, not a production default.
            </p>
          </div>
        </section>

        <section>
          <SectionHeader
            eyebrow="Typography reveal"
            index="02"
            title="Three line-level candidates."
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {typographyOptions.map((item) => (
              <OptionControl
                active={typography === item.id}
                key={item.id}
                label={item.label}
                onClick={() => {
                  setTypography(item.id);
                  setReplay((value) => value + 1);
                }}
              />
            ))}
            <ReplayControl onReplay={() => setReplay((value) => value + 1)} />
          </div>
          <MotionPanel>
            <p className="type-meta mb-5 text-[var(--foreground-muted)]">
              {typographyOptions.find((item) => item.id === typography)?.note}
            </p>
            <MotionText
              className="type-display"
              replayKey={replay}
              variant={typography}
            >
              <span lang="en">AI PRODUCT BUILDER</span>
            </MotionText>
            <MotionText
              className="type-h1 mt-6"
              replayKey={replay + 1}
              variant={typography}
            >
              <span lang="zh-CN">设计并构建 AI 产品与智能服务系统</span>
            </MotionText>
            <MotionText
              className="type-h2 mt-6"
              replayKey={replay + 2}
              variant={typography}
            >
              {[
                <span key="en" lang="en">
                  AI Product Builder /
                </span>,
                <span key="zh" lang="zh-CN">
                  智能服务系统设计
                </span>,
              ]}
            </MotionText>
          </MotionPanel>
        </section>

        <section>
          <SectionHeader
            eyebrow="Section reveal"
            index="03"
            title="Reading order before motion."
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {sectionOptions.map((item) => (
              <OptionControl
                active={section === item.id}
                key={item.id}
                label={item.label}
                onClick={() => {
                  setSection(item.id);
                  setReplay((value) => value + 1);
                }}
              />
            ))}
            <ReplayControl onReplay={() => setReplay((value) => value + 1)} />
          </div>
          <MotionPanel>
            <SectionReveal
              content="A short supporting statement stays readable even if motion is disabled."
              eyebrow="03 / SELECTED WORKS"
              replayKey={replay}
              title="Evidence has a reading order."
              variant={section}
            >
              <p className="type-meta">
                Content enters only after the heading when the sequence option is
                selected.
              </p>
            </SectionReveal>
          </MotionPanel>
        </section>

        <section>
          <SectionHeader
            eyebrow="Project archive interaction"
            index="04"
            title="Preview states without fabricated media."
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {archiveOptions.map((item) => (
              <OptionControl
                active={archive === item.id}
                key={item.id}
                label={item.label}
                onClick={() => {
                  setArchive(item.id);
                  setReplay((value) => value + 1);
                }}
              />
            ))}
            <ReplayControl onReplay={() => setReplay((value) => value + 1)} />
          </div>
          <MotionPanel>
            <ProjectPreview items={archiveItems} mode={archive} replayKey={replay} />
            <p className="type-meta mt-4 text-[var(--foreground-muted)]">
              Fixed preview is the recommended candidate. Floating preview is
              desktop-only and deliberately retained as a comparison, not a production
              recommendation.
            </p>
          </MotionPanel>
        </section>

        <section>
          <SectionHeader
            eyebrow="Media reveal"
            index="05"
            title="Motion follows media type."
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {(["mask", "fade", "none"] as const).map((item) => (
              <OptionControl
                active={media === item}
                key={item}
                label={item}
                onClick={() => {
                  setMedia(item);
                  setReplay((value) => value + 1);
                }}
              />
            ))}
            <ReplayControl onReplay={() => setReplay((value) => value + 1)} />
          </div>
          <MotionPanel>
            <MediaReveal motion={media} replayKey={replay}>
              <div className="flex aspect-video items-end border border-[var(--border)] bg-[var(--background-secondary)] p-5">
                <p className="type-label text-[var(--foreground-muted)]">
                  Neutral media placeholder / no approved asset
                </p>
              </div>
            </MediaReveal>
            <p className="type-meta mt-4 text-[var(--foreground-muted)]">
              Mask: UI or poster. Fade: diagram or dense information. None: static
              reading material.
            </p>
          </MotionPanel>
        </section>

        <section>
          <SectionHeader
            eyebrow="Navigation and route"
            index="06"
            title="Feedback, not theatre."
          />
          <NavigationPrototype />
          <RoutePrototype />
        </section>

        <section>
          <SectionHeader
            eyebrow="Reduced motion"
            index="07"
            title="Content stays immediate."
          />
          <div className="mt-8 border-t border-[var(--border)] pt-4">
            <p className="type-body-large">
              System preference:{" "}
              {prefersReducedMotion || simulateReducedMotion
                ? "Reduced motion active"
                : "Standard motion active"}
              .
            </p>
            <p className="mt-3 text-[var(--foreground-secondary)]">
              When reduced motion is active, Reveal, text, media, preview, menu, and
              route prototypes render without staged movement. Replay remains
              functional.
            </p>
            <div className="mt-5">
              <OptionControl
                active={simulateReducedMotion}
                label="Simulate reduced motion"
                onClick={() => setSimulateReducedMotion((value) => !value)}
              />
            </div>
          </div>
        </section>
      </Container>
    </MotionConfig>
  );
}
