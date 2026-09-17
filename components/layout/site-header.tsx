"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

import { SiteNavigation } from "@/components/navigation/site-navigation";
import { Container } from "@/components/ui/container";
import type { Dictionary, Locale } from "@/types/content";

interface SiteHeaderProps {
  locale: Locale;
  dictionary: Dictionary;
  showLanguageSwitch?: boolean;
}

const HEADER_SCROLL_THRESHOLD = 64;

function subscribeToScroll(onStoreChange: () => void) {
  const notify = () => onStoreChange();

  window.addEventListener("scroll", notify, { passive: true });
  document.addEventListener("scroll", notify, { capture: true, passive: true });

  return () => {
    window.removeEventListener("scroll", notify);
    document.removeEventListener("scroll", notify, { capture: true });
  };
}

function getScrollState() {
  return window.scrollY > HEADER_SCROLL_THRESHOLD;
}

function getServerScrollState() {
  return false;
}

export function SiteHeader({
  locale,
  dictionary,
  showLanguageSwitch = true,
}: SiteHeaderProps) {
  const isScrolled = useSyncExternalStore(
    subscribeToScroll,
    getScrollState,
    getServerScrollState,
  );

  return (
    <header
      className={[
        "portfolio-site-header sticky top-0 z-50",
        isScrolled && "is-scrolled",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Container className="portfolio-site-header__inner flex min-h-16 items-center justify-between gap-6">
        <Link
          aria-label={`${dictionary.navigation.brandName}, ${dictionary.navigation.brandRole}`}
          className="portfolio-site-header__brand transition-[color,transform] duration-[var(--motion-fast)] ease-[var(--ease-standard)] hover:text-[var(--accent-interactive-hover)] active:translate-y-px"
          href={`/${locale}`}
        >
          <span className="portfolio-site-header__brand-name">
            {dictionary.navigation.brandName}
            <span className="text-[var(--accent)]">.</span>
          </span>
          <span className="portfolio-site-header__brand-divider" aria-hidden="true" />
          <span className="portfolio-site-header__brand-role">
            {dictionary.navigation.brandRole}
          </span>
        </Link>
        <SiteNavigation
          dictionary={dictionary}
          locale={locale}
          showLanguageSwitch={showLanguageSwitch}
        />
      </Container>
    </header>
  );
}
