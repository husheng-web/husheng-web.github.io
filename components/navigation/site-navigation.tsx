"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { LanguageSwitch } from "@/components/navigation/language-switch";
import type { Dictionary, Locale } from "@/types/content";

interface SiteNavigationProps {
  dictionary: Dictionary;
  locale: Locale;
  showLanguageSwitch?: boolean;
}

const focusableSelector = "a[href], button:not([disabled])";

export function SiteNavigation({
  dictionary,
  locale,
  showLanguageSwitch = true,
}: SiteNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const items = [
    { href: `/${locale}/projects`, label: dictionary.navigation.projects },
    { href: `/${locale}/about`, label: dictionary.navigation.about },
    { href: `/${locale}/resume`, label: dictionary.navigation.resume },
  ];

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const firstItem = menuRef.current?.querySelector<HTMLElement>(focusableSelector);
    const frame = window.requestAnimationFrame(() => firstItem?.focus());

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        window.requestAnimationFrame(() => buttonRef.current?.focus());
        return;
      }

      if (event.key !== "Tab" || !menuRef.current) return;
      const focusable = Array.from(
        menuRef.current.querySelectorAll<HTMLElement>(focusableSelector),
      );
      const first = focusable[0];
      const last = focusable.at(-1);
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const links = (mobile = false) => (
    <>
      {items.map((item) => {
        const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <Link
            aria-current={active ? "page" : undefined}
            className={`font-mono tracking-[var(--tracking-label)] text-[var(--type-label)] uppercase transition-[color,transform] duration-[var(--motion-fast)] ease-[var(--ease-standard)] hover:text-[var(--accent-interactive-hover)] active:translate-y-px ${active ? "text-[var(--accent-interactive)]" : "text-[var(--foreground)]"} ${mobile ? "py-3 text-base" : ""}`}
            href={item.href}
            key={item.href}
            onClick={() => mobile && setIsOpen(false)}
          >
            {item.label}
          </Link>
        );
      })}
      {showLanguageSwitch ? (
        <LanguageSwitch
          className={mobile ? "py-3 text-base" : ""}
          label={dictionary.navigation.language}
          locale={locale}
        />
      ) : null}
    </>
  );

  return (
    <>
      <nav
        aria-label="Primary navigation"
        className="hidden items-center gap-5 md:flex"
      >
        {links()}
      </nav>
      <button
        aria-controls="site-mobile-menu"
        aria-expanded={isOpen}
        aria-label={
          isOpen ? dictionary.navigation.closeMenu : dictionary.navigation.menu
        }
        className="inline-flex min-h-11 min-w-11 items-center justify-center border border-[var(--border)] font-mono tracking-[var(--tracking-label)] text-[var(--type-label)] uppercase transition-[border-color,color,transform] duration-[var(--motion-fast)] ease-[var(--ease-standard)] hover:border-[var(--foreground)] active:translate-y-px md:hidden"
        onClick={() => setIsOpen((open) => !open)}
        ref={buttonRef}
        type="button"
      >
        {isOpen ? dictionary.navigation.closeButton : dictionary.navigation.menuButton}
      </button>
      {isOpen ? (
        <nav
          aria-label="Mobile navigation"
          className="fixed inset-x-0 top-[4.0625rem] bottom-0 z-40 flex flex-col bg-[var(--background)] px-[var(--edge-padding)] py-8"
          id="site-mobile-menu"
          ref={menuRef}
        >
          <div className="flex flex-col border-t border-[var(--border)] pt-3">
            {links(true)}
          </div>
        </nav>
      ) : null}
    </>
  );
}
