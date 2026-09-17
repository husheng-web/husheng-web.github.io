import { Container } from "@/components/ui/container";
import type { Dictionary } from "@/types/content";

interface SiteFooterProps {
  dictionary: Dictionary;
  locale?: "zh" | "en";
}

export function SiteFooter({ dictionary, locale = "en" }: SiteFooterProps) {
  return (
    <footer className="portfolio-site-footer">
      <Container className="portfolio-site-footer__inner">
        <div className="portfolio-site-footer__brand">
          <p>
            {locale === "zh" ? "作品集" : "Portfolio"}
            <span className="text-[var(--accent)]">.</span>
          </p>
          <span>{locale === "zh" ? "AI 产品设计师" : "AI Product Designer"}</span>
        </div>
        <p className="portfolio-site-footer__statement">PEOPLE · IDEAS · PRODUCTS</p>
        <div className="portfolio-site-footer__meta">
          <a
            className="transition-[color,transform] duration-[var(--motion-fast)] ease-[var(--ease-standard)] hover:text-[var(--accent)] active:translate-y-px"
            href="#top"
          >
            {dictionary.shell.backToTop}
          </a>
          <p>{dictionary.shell.allRightsReserved}</p>
        </div>
      </Container>
    </footer>
  );
}
