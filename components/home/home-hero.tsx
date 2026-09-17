"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import { useMotionSettings } from "@/components/motion/use-motion-settings";
import { ButtonLink } from "@/components/ui/button";
import type { Dictionary, Locale } from "@/types/content";

interface HomeHeroProps {
  dictionary: Dictionary;
  locale: Locale;
}

export function HomeHero({ dictionary, locale }: HomeHeroProps) {
  const isZh = locale === "zh";
  const { prefersReducedMotion } = useMotionSettings();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
    target: heroRef,
  });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -42]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const visualScale = useTransform(scrollYProgress, [0, 1], [1, 1.035]);
  const dotGridY = useTransform(scrollYProgress, [0, 1], [0, 54]);
  const introY = useTransform(scrollYProgress, [0, 1], [0, -18]);
  const titleMotion = prefersReducedMotion
    ? { initial: false }
    : { initial: { opacity: 0 }, animate: { opacity: 1 } };
  const visualMotion = prefersReducedMotion
    ? { initial: false }
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
      };

  return (
    <section className="portfolio-hero" aria-labelledby="home-title" ref={heroRef}>
      <div className="portfolio-hero__grid">
        <motion.div
          className="portfolio-hero__title-block"
          transition={{
            duration: prefersReducedMotion ? 0 : 0.58,
            ease: [0, 0, 0.2, 1],
          }}
          style={prefersReducedMotion ? undefined : { y: titleY }}
          {...titleMotion}
        >
          <h1
            id="home-title"
            className="type-display-xl portfolio-hero__title"
            lang={isZh ? "zh-CN" : "en"}
          >
            {isZh ? (
              <>
                <span>设计并构建</span>
                <span>AI 产品与</span>
                <span>
                  智能服务系统<span className="portfolio-hero__period">.</span>
                </span>
              </>
            ) : (
              "AI Product Builder"
            )}
          </h1>
        </motion.div>

        <motion.div
          aria-hidden="true"
          className="portfolio-hero__visual"
          transition={{
            duration: prefersReducedMotion ? 0 : 0.68,
            delay: prefersReducedMotion ? 0 : 0.1,
            ease: [0, 0, 0.2, 1],
          }}
          style={prefersReducedMotion ? undefined : { scale: visualScale, y: visualY }}
          {...visualMotion}
        >
          <motion.span
            className="portfolio-hero__dot-grid"
            style={prefersReducedMotion ? undefined : { y: dotGridY }}
          />
          <Image
            alt=""
            fill
            priority
            sizes="(min-width: 75rem) 46vw, (min-width: 48rem) 50vw, 112vw"
            src="/media/brand/hero-portrait-original.png"
          />
        </motion.div>

        <motion.div
          className="portfolio-hero__intro"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.42,
            delay: prefersReducedMotion ? 0 : 0.12,
            ease: [0, 0, 0.2, 1],
          }}
          style={prefersReducedMotion ? undefined : { y: introY }}
        >
          <p className="type-body-large portfolio-hero__copy">
            {dictionary.home.heroSupporting}
          </p>
          <motion.div
            className="portfolio-hero__actions"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.38,
              delay: prefersReducedMotion ? 0 : 0.2,
              ease: [0, 0, 0.2, 1],
            }}
          >
            <ButtonLink
              href={`/${locale}/projects`}
              className="portfolio-hero__cta rounded-[var(--radius-pill)]"
            >
              {dictionary.home.viewSelectedWork}
              <span aria-hidden="true" className="portfolio-hero__cta-arrow">
                →
              </span>
            </ButtonLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
