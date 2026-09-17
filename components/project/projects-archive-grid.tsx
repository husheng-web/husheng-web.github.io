"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { getLocalizedText } from "@/lib/i18n";
import type { Dictionary, Locale, Project } from "@/types/content";

interface ProjectsArchiveGridProps {
  dictionary: Dictionary;
  locale: Locale;
  projects: readonly Project[];
}

const archiveFilters = [
  { id: "all", category: null, zh: "全部", en: "All" },
  { id: "ai", category: "AI 产品", zh: "AI 产品", en: "AI products" },
  { id: "service", category: "服务系统", zh: "服务系统", en: "Service systems" },
  { id: "industrial", category: "工业设计", zh: "工业设计", en: "Industrial design" },
  {
    id: "visual",
    category: "视觉与文创",
    zh: "视觉与文创",
    en: "Visual & culture",
  },
] as const;

type ArchiveFilter = (typeof archiveFilters)[number]["id"];

const modulePages = [
  { id: "02", zh: "项目起点", en: "Project origin", file: "02-project-origin.png" },
  {
    id: "03",
    zh: "问题重构",
    en: "Problem reframing",
    file: "03-problem-reframing.png",
  },
  { id: "04", zh: "产品模型", en: "Product model", file: "04-product-model.png" },
  {
    id: "05",
    zh: "产品体验",
    en: "Product experience",
    file: "05-product-experience.png",
  },
  { id: "06", zh: "用户控制", en: "User control", file: "06-user-control.png" },
  { id: "07", zh: "构建原型", en: "Build prototype", file: "07-build-prototype.png" },
  {
    id: "08",
    zh: "结果与证据",
    en: "Results and evidence",
    file: "08-results-evidence.png",
  },
  {
    id: "09",
    zh: "反思与下一步",
    en: "Reflection and next steps",
    file: "09-reflection-next.png",
  },
] as const;

const ixdcDetailUrl = "https://m1hvgj8aaxv.feishuapp.com/app/app_17e5325uufd/about";

function ProjectDocumentReader({
  locale,
  project,
  title,
}: {
  locale: Locale;
  project: Project;
  title: string;
}) {
  const document = project.caseDocument;

  if (!document) return null;

  return (
    <div
      aria-label={
        locale === "zh"
          ? `${title}，${document.pageCount} 页案例文档`
          : `${title}, ${document.pageCount}-page case document`
      }
      className={`projects-preview__reader${document.presentation ? ` is-${document.presentation}` : ""}${document.pageCount === 1 ? "is-single-page" : ""}`}
      tabIndex={0}
    >
      <ol>
        {Array.from({ length: document.pageCount }, (_, index) => {
          const pageNumber = index + 1;
          const pageLabel =
            locale === "zh"
              ? `${title}，第 ${pageNumber} 页，共 ${document.pageCount} 页`
              : `${title}, page ${pageNumber} of ${document.pageCount}`;

          return (
            <li key={pageNumber}>
              <Image
                alt={pageLabel}
                className="projects-preview__document-page"
                height={document.pageHeight}
                loading={pageNumber === 1 ? undefined : "lazy"}
                priority={pageNumber === 1}
                sizes="(min-width: 64rem) 68vw, 88vw"
                src={`/media/projects/${project.slug}/pages/page-${String(pageNumber).padStart(3, "0")}.${document.fileExtension ?? "webp"}`}
                unoptimized
                width={document.pageWidth}
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function ProjectModuleReader({
  locale,
  slug,
  title,
}: {
  locale: Locale;
  slug: string;
  title: string;
}) {
  return (
    <div
      aria-label={
        locale === "zh" ? `${title}，8 个阶段模块` : `${title}, 8 project modules`
      }
      className="projects-preview__reader projects-preview__reader--modules"
      tabIndex={0}
    >
      <ol>
        {modulePages.map((page) => {
          const moduleTitle = locale === "zh" ? page.zh : page.en;

          return (
            <li key={page.id}>
              <Image
                alt={`${title} ${page.id} / ${moduleTitle}`}
                className="projects-preview__document-page"
                height={1600}
                loading={page.id === "02" ? undefined : "lazy"}
                priority={page.id === "02"}
                sizes="(min-width: 64rem) 68vw, 88vw"
                src={`/media/projects/${slug}/modules/${page.file}`}
                unoptimized
                width={2560}
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function ArchiveCard({
  dictionary,
  locale,
  onOpen,
  project,
  priority,
}: {
  dictionary: Dictionary;
  locale: Locale;
  onOpen: (project: Project) => void;
  project: Project;
  priority: boolean;
}) {
  const title = getLocalizedText(project.title, locale);
  const categoryKey = project.categories?.[0];
  const category =
    locale === "zh"
      ? (categoryKey ?? dictionary.projects.indexLabel)
      : (archiveFilters.find((filter) => filter.category === categoryKey)?.en ??
        dictionary.projects.indexLabel);
  const summary = getLocalizedText(project.summary, locale) || category;

  const content = (
    <>
      <div className="projects-catalog-card__media">
        {project.cover ? (
          <Image
            alt={getLocalizedText(project.cover.alt, locale) || title}
            className="projects-catalog-card__image"
            fill
            priority={priority}
            sizes="(min-width: 72rem) 24vw, (min-width: 48rem) 45vw, 92vw"
            src={project.cover.src}
          />
        ) : (
          <div className="projects-catalog-card__pending" aria-hidden="true">
            <span>{String(project.archiveIndex).padStart(2, "0")}</span>
          </div>
        )}
      </div>
      <div className="projects-catalog-card__caption">
        <div>
          <h2>{title}</h2>
          <p>{summary}</p>
        </div>
        <div className="projects-catalog-card__actions">
          <span>{category}</span>
          <b aria-hidden="true">→</b>
        </div>
      </div>
    </>
  );

  return (
    <button
      aria-label={`${title}：${summary}`}
      className="projects-catalog-card"
      onClick={() => onOpen(project)}
      type="button"
    >
      {content}
    </button>
  );
}

export function ProjectPreviewDialog({
  dictionary,
  locale,
  onClose,
  project,
}: {
  dictionary: Dictionary;
  locale: Locale;
  onClose: () => void;
  project: Project;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const title = getLocalizedText(project.title, locale);
  const previewMedia = project.cover;
  const isModuleProject =
    project.slug === "pinlvtu" || project.slug === "academic-assistant";
  const isIxdcWebsite = project.slug === "ixdc-website";
  const detailUrl = isIxdcWebsite ? ixdcDetailUrl : project.links?.liveUrl;
  const detailLabel = locale === "zh" ? "查看详情" : "View details";

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      aria-labelledby="project-preview-title"
      aria-modal="true"
      className="projects-preview"
      onMouseDown={onClose}
      role="dialog"
    >
      <button
        aria-label={dictionary.navigation.closeButton}
        className="projects-preview__close"
        onClick={onClose}
        ref={closeButtonRef}
        type="button"
      >
        ×
      </button>
      <section
        className="projects-preview__panel"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <h2 className="projects-preview__accessible-title" id="project-preview-title">
          {title}
        </h2>

        {isModuleProject ? (
          <ProjectModuleReader locale={locale} slug={project.slug} title={title} />
        ) : project.caseDocument ? (
          <ProjectDocumentReader locale={locale} project={project} title={title} />
        ) : (
          <div className="projects-preview__media">
            {previewMedia ? (
              <Image
                alt={getLocalizedText(previewMedia.alt, locale) || title}
                className="projects-preview__image"
                fill
                priority
                sizes="(min-width: 64rem) 72vw, 92vw"
                src={previewMedia.src}
              />
            ) : (
              <div className="projects-preview__pending" aria-hidden="true">
                {String(project.archiveIndex).padStart(2, "0")}
              </div>
            )}
          </div>
        )}

        {detailUrl ? (
          <a
            aria-label={`${detailLabel}：${title}`}
            className="projects-preview__detail-link"
            href={detailUrl}
            rel="noreferrer"
            target="_blank"
          >
            {detailLabel}
            <span aria-hidden="true">→</span>
          </a>
        ) : null}
      </section>
    </div>
  );
}

export function ProjectsArchiveGrid({
  dictionary,
  locale,
  projects,
}: ProjectsArchiveGridProps) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<ArchiveFilter>("all");
  const visibleProjects = projects.filter((project) => {
    const filter = archiveFilters.find(({ id }) => id === activeFilter);
    return !filter?.category || project.categories?.includes(filter.category);
  });

  return (
    <section className="projects-catalog" aria-labelledby="projects-catalog-title">
      <div className="projects-catalog__dot-field" aria-hidden="true" />
      <header className="projects-catalog__hero">
        <div>
          <h1 id="projects-catalog-title">
            {dictionary.projects.heroTitle}
            <i>.</i>
          </h1>
          <p className="projects-catalog__intro">
            {dictionary.projects.heroDescription}
          </p>
        </div>
        <p className="projects-catalog__signal" aria-hidden="true">
          DESIGN
          <br />
          FOR A WARMER
          <br />
          TOMORROW
        </p>
      </header>

      <div
        className="projects-catalog__filters"
        aria-label={dictionary.projects.indexTitle}
      >
        {archiveFilters.map((filter) => {
          const count = filter.category
            ? projects.filter((project) =>
                project.categories?.includes(filter.category),
              ).length
            : projects.length;
          const label = locale === "zh" ? filter.zh : filter.en;

          return (
            <button
              aria-pressed={activeFilter === filter.id}
              className={activeFilter === filter.id ? "is-active" : undefined}
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              type="button"
            >
              {label} {count}
            </button>
          );
        })}
      </div>

      <div className="projects-catalog__grid" key={activeFilter}>
        {visibleProjects.map((project, index) => (
          <ArchiveCard
            dictionary={dictionary}
            key={project.slug}
            locale={locale}
            onOpen={setActiveProject}
            priority={index < 4}
            project={project}
          />
        ))}
      </div>

      <footer className="projects-catalog__footer">
        <p>
          {projects.length} {dictionary.projects.projectCountLabel}
        </p>
        <p>
          {locale === "zh"
            ? "持续探索，设计让生活更美好！"
            : "Keep exploring. Design makes everyday life better."}
        </p>
      </footer>

      {activeProject ? (
        <ProjectPreviewDialog
          dictionary={dictionary}
          locale={locale}
          onClose={() => setActiveProject(null)}
          project={activeProject}
        />
      ) : null}
    </section>
  );
}
