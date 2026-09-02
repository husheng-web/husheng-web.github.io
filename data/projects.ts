import type { ContentStatus, Project } from "@/types/content";

export const projects = [
  {
    archiveIndex: 1,
    slug: "pinlvtu",
    title: { zh: "拼旅途", en: "Trip Compose" },
    subtitle: {
      zh: "将旅行内容转化为可理解的旅途积木，让用户在 AI 建议下拼出并调整自己的旅程。",
    },
    summary: { zh: "从 Generate → Compose 重构的 AI 旅行产品案例。" },
    period: "2026-06-06 — ongoing",
    categories: ["AI Product"],
    roles: {
      zh: "AI Product Lead / Solo Builder（V2）；Team Lead / AI Product Lead（V1）",
    },
    featured: true,
    contentStatus: "partial",
    translationStatus: "pending",
  },
  {
    archiveIndex: 2,
    slug: "hepai-pro",
    title: { zh: "和拍 Pro" },
    featured: true,
    contentStatus: "content-pending",
    translationStatus: "pending",
  },
  {
    archiveIndex: 3,
    slug: "academic-assistant",
    title: { zh: "AI 学术助手" },
    featured: true,
    contentStatus: "content-pending",
    translationStatus: "pending",
  },
  {
    archiveIndex: 4,
    slug: "ixdc-website",
    title: { zh: "国际体验设计奖官网" },
    featured: true,
    contentStatus: "content-pending",
    translationStatus: "pending",
  },
  {
    archiveIndex: 5,
    slug: "tea-seed-shampoo",
    title: { zh: "茶枯洗发" },
    featured: false,
    contentStatus: "content-pending",
    translationStatus: "pending",
  },
  {
    archiveIndex: 6,
    slug: "diverse-community",
    title: { zh: "多元社区" },
    featured: false,
    contentStatus: "content-pending",
    translationStatus: "pending",
  },
  {
    archiveIndex: 7,
    slug: "sea-turtle-rescue",
    title: { zh: "海龟救助" },
    featured: false,
    contentStatus: "content-pending",
    translationStatus: "pending",
  },
  {
    archiveIndex: 8,
    slug: "service-product-system",
    title: { zh: "服务产品系统设计" },
    featured: false,
    contentStatus: "content-pending",
    translationStatus: "pending",
  },
  {
    archiveIndex: 9,
    slug: "kids-swimming-aid",
    title: { zh: "儿童游泳辅具设计" },
    featured: false,
    contentStatus: "content-pending",
    translationStatus: "pending",
  },
  {
    archiveIndex: 10,
    slug: "smart-comb",
    title: { zh: "智能梳子" },
    featured: false,
    contentStatus: "content-pending",
    translationStatus: "pending",
  },
] satisfies Project[];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjects(): readonly Project[] {
  return projects;
}

export function getFeaturedProjects(): readonly Project[] {
  return projects.filter((project) => project.featured);
}

/** A Registry media asset is only present after it has been approved for display. */
export function hasApprovedProjectMedia(project: Project): boolean {
  return Boolean(project.cover || project.thumbnail);
}

export function hasApprovedMedia(projectsToCheck: readonly Project[]): boolean {
  return projectsToCheck.some(hasApprovedProjectMedia);
}

export function getSharedContentStatus(
  projectsToCheck: readonly Project[],
): ContentStatus | undefined {
  const [firstProject] = projectsToCheck;
  if (!firstProject) return undefined;

  return projectsToCheck.every(
    (project) => project.contentStatus === firstProject.contentStatus,
  )
    ? firstProject.contentStatus
    : undefined;
}

export const featuredProjects = getFeaturedProjects();
