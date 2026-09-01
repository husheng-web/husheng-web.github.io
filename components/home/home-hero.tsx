"use client";

import { motion } from "motion/react";

import { useMotionSettings } from "@/components/motion/use-motion-settings";
import { Container, WideContainer } from "@/components/ui/container";
import { TextLink } from "@/components/ui/text-link";
import type { Dictionary, Locale } from "@/types/content";

interface HomeHeroProps {
  dictionary: Dictionary;
  locale: Locale;
}

export function HomeHero({ dictionary, locale }: HomeHeroProps) {
  const { heroLabel, heroSecondary, heroSupporting, viewSelectedWork } =
    dictionary.home;
  const { durations, prefersReducedMotion } = useMotionSettings();
  const lines =
    locale === "zh"
      ? ["设计并构建", "AI 产品与", "智能服务系统"]
      : ["AI PRODUCT BUILDER", "INTELLIGENT SERVICE", "SYSTEM DESIGNER"];

  return (
    <section
      aria-labelledby="home-title"
      className="py-12 sm:min-h-[calc(100svh-4.0625rem)] sm:py-[clamp(5rem,9vw,8rem)]"
    >
      <WideContainer className="flex flex-col">
        <div className="flex items-center justify-between gap-4 border-t border-[var(--border)] pt-4">
          <p className="type-label text-[var(--accent-signal)]">01 / {heroLabel}</p>
          <p className="type-label text-right text-[var(--foreground-muted)]">
            {heroSecondary}
          </p>
        </div>
        <h1
          className="type-display-xl mt-16 max-w-[12ch] text-[clamp(3.5rem,8.5vw,9.5rem)] sm:mt-[clamp(5rem,9vh,8rem)]"
          id="home-title"
          lang={locale === "zh" ? "zh-CN" : "en"}
        >
          {lines.map((line, index) => (
            <span className="block overflow-hidden" key={line}>
              <motion.span
                animate={{ opacity: 1, y: 0 }}
                className="block"
                initial={prefersReducedMotion ? false : { opacity: 0.99, y: 2 }}
                transition={{
                  delay: prefersReducedMotion ? 0 : index * 0.06,
                  duration: prefersReducedMotion ? 0 : durations.slow,
                  ease: [0, 0, 0.2, 1],
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>
        <Container className="mx-0 mt-16 grid gap-6 border-t border-[var(--border)] pt-5 sm:mt-[clamp(4rem,7vh,6rem)] md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <p className="type-body-large max-w-[42rem] text-[var(--foreground-secondary)]">
            {heroSupporting}
          </p>
          <TextLink href={`/${locale}#selected-works`}>{viewSelectedWork}</TextLink>
        </Container>
      </WideContainer>
    </section>
  );
}
