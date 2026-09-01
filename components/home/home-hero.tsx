"use client";

import { MotionText } from "@/components/motion/motion-text";
import { Container, WideContainer } from "@/components/ui/container";
import { TextLink } from "@/components/ui/text-link";
import type { Dictionary, Locale } from "@/types/content";

interface HomeHeroProps {
  dictionary: Dictionary;
  locale: Locale;
}

export function HomeHero({ dictionary, locale }: HomeHeroProps) {
  const { heroLabel, heroSecondary, heroSupporting, heroTitle, viewSelectedWork } =
    dictionary.home;

  return (
    <section
      aria-labelledby="home-title"
      className="min-h-[calc(100svh-4.0625rem)] py-[var(--space-20)] sm:py-[var(--space-32)]"
    >
      <WideContainer className="flex min-h-[calc(100svh-8rem)] flex-col justify-between">
        <div className="flex items-center justify-between gap-4 border-t border-[var(--border)] pt-4">
          <p className="type-label text-[var(--accent-signal)]">01 / {heroLabel}</p>
          <p className="type-label text-right text-[var(--foreground-muted)]">
            {heroSecondary}
          </p>
        </div>
        <div className="py-[var(--space-16)] sm:py-[var(--space-24)]">
          <MotionText
            className="type-display-xl max-w-[11ch]"
            intensity="standard"
            replayKey={0}
            variant="mask"
          >
            <h1 id="home-title" lang={locale === "zh" ? "zh-CN" : "en"}>
              {heroTitle}
            </h1>
          </MotionText>
        </div>
        <Container className="mx-0 grid gap-6 border-t border-[var(--border)] pt-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <p className="type-body-large max-w-[42rem] text-[var(--foreground-secondary)]">
            {heroSupporting}
          </p>
          <TextLink href={`/${locale}#selected-works`}>{viewSelectedWork}</TextLink>
        </Container>
      </WideContainer>
    </section>
  );
}
