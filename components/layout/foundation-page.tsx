import { Container } from "@/components/ui/container";
import { AboutPhotoWall } from "@/components/about/about-photo-wall";
import type { Locale } from "@/types/content";

interface FoundationPageProps {
  locale: Locale;
}

export function FoundationPage({ locale }: FoundationPageProps) {
  const isZh = locale === "zh";
  const title = isZh ? "关于我" : "About me";
  const summary = isZh
    ? "在设计之外，记录生活、保持学习，也为下一个好点子留出空间。"
    : "Beyond design, I keep learning, notice everyday life, and leave room for the next good idea.";

  return (
    <Container as="section" className="foundation-page about-page" size="wide">
      <h1 className="type-display era-foundation-page__title">
        {title}
        <span className="text-[var(--accent)]">.</span>
      </h1>
      <p className="foundation-page__summary type-body-large">{summary}</p>
      <AboutPhotoWall />
    </Container>
  );
}
