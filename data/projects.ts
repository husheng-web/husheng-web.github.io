import type { Project } from "@/types/content";

export const projects = [
  {
    slug: "pinlvtu",
    title: { zh: "拼旅途" },
    featured: true,
    contentStatus: "content-pending",
    translationStatus: "pending",
  },
  {
    slug: "hepai-pro",
    title: { zh: "和拍 Pro" },
    featured: true,
    contentStatus: "content-pending",
    translationStatus: "pending",
  },
  {
    slug: "academic-assistant",
    title: { zh: "AI 学术助手" },
    featured: true,
    contentStatus: "content-pending",
    translationStatus: "pending",
  },
  {
    slug: "ixdc-website",
    title: { zh: "国际体验设计奖官网" },
    featured: true,
    contentStatus: "content-pending",
    translationStatus: "pending",
  },
  {
    slug: "tea-seed-shampoo",
    title: { zh: "茶枯洗发" },
    featured: false,
    contentStatus: "content-pending",
    translationStatus: "pending",
  },
  {
    slug: "diverse-community",
    title: { zh: "多元社区" },
    featured: false,
    contentStatus: "content-pending",
    translationStatus: "pending",
  },
  {
    slug: "sea-turtle-rescue",
    title: { zh: "海龟救助" },
    featured: false,
    contentStatus: "content-pending",
    translationStatus: "pending",
  },
  {
    slug: "service-product-system",
    title: { zh: "服务产品系统设计" },
    featured: false,
    contentStatus: "content-pending",
    translationStatus: "pending",
  },
  {
    slug: "kids-swimming-aid",
    title: { zh: "儿童游泳辅具设计" },
    featured: false,
    contentStatus: "content-pending",
    translationStatus: "pending",
  },
  {
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

export const featuredProjects = projects.filter((project) => project.featured);
