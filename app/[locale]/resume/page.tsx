import Image from "next/image";

import { Container } from "@/components/ui/container";
import { hasLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

interface ResumePageProps {
  params: Promise<{ locale: string }>;
}

export default async function ResumePage({ params }: ResumePageProps) {
  const { locale } = await params;

  if (!hasLocale(locale)) notFound();

  return (
    <Container
      as="section"
      className="resume-page"
      size="wide"
      aria-label={locale === "zh" ? "个人简历" : "Resume"}
    >
      <header className="resume-page__header">
        <h1 className="type-display era-foundation-page__title">
          {locale === "zh" ? "简历" : "Resume"}
          <span className="text-[var(--accent)]">.</span>
        </h1>
        <p className="foundation-page__summary type-body-large">
          {locale === "zh"
            ? "个人经历、教育背景与产品构建方法。"
            : "Experience, education, and a product-building practice."}
        </p>
      </header>
      <div className="resume-page__sheet">
        <Image
          alt={locale === "zh" ? "胡昇个人简历" : "Husheng resume"}
          className="resume-page__image"
          height={3621}
          priority
          sizes="(max-width: 768px) 100vw, min(100vw - 4rem, 90rem)"
          src="/media/resume/husheng-intern-resume.png"
          width={2560}
        />
      </div>
      <a
        className="resume-page__download"
        download
        href="/media/resume/husheng-intern-resume.pdf"
      >
        {locale === "zh" ? "下载简历" : "Download resume"}
        <span aria-hidden="true">↓</span>
      </a>
    </Container>
  );
}
