import type { ContentStatus, Project } from "@/types/content";

export const projects = [
  {
    archiveIndex: 1,
    slug: "pinlvtu",
    title: { zh: "拼旅途", en: "Trip Compose" },
    subtitle: {
      zh: "将旅行内容转化为可理解的旅途积木，让用户在 AI 建议下拼出并调整自己的旅程。",
      en: "Turn travel content into understandable journey blocks, then shape an itinerary with AI guidance.",
    },
    summary: {
      zh: "从 Generate → Compose 重构的 AI 旅行产品案例。",
      en: "An AI travel product case study reimagined from Generate to Compose.",
    },
    period: "2026-06-06 — ongoing",
    categories: ["AI 产品"],
    caseDocument: {
      pageCount: 7,
      pageWidth: 375,
      pageHeight: 811,
      presentation: "phone",
    },
    roles: {
      zh: "AI Product Lead / Solo Builder（V2）；Team Lead / AI Product Lead（V1）",
    },
    featured: true,
    contentStatus: "partial",
    translationStatus: "pending",
    cover: {
      src: "/media/projects/pinlvtu/cover-imagegen.png",
      alt: { zh: "拼旅途旅行积木视觉封面", en: "Trip Compose journey-block cover" },
      width: 1672,
      height: 941,
    },
  },
  {
    archiveIndex: 2,
    slug: "hepai-pro",
    title: { zh: "和拍 Pro", en: "Hepai Pro" },
    summary: {
      zh: "面向设计展会的摄影互动服务体验设计。",
      en: "An interactive photography service experience for design exhibitions.",
    },
    categories: ["AI 产品"],
    caseDocument: {
      pageCount: 44,
      pageWidth: 2560,
      pageHeight: 1440,
      presentation: "continuous",
    },
    featured: true,
    contentStatus: "partial",
    translationStatus: "pending",
    cover: {
      src: "/media/projects/hepai-pro/cover-imagegen.png",
      alt: {
        zh: "和拍 Pro 人机协作摄影社区视觉封面",
        en: "Hepai Pro human-AI photography community cover",
      },
      width: 1672,
      height: 941,
    },
  },
  {
    archiveIndex: 3,
    slug: "academic-assistant",
    title: { zh: "AI 学术助手", en: "AI Academic Assistant" },
    summary: {
      zh: "围绕论文项目、文献精读与可追溯 AI 建议构建的研究工作台。",
      en: "A research workspace for paper projects, close reading, and traceable AI guidance.",
    },
    categories: ["AI 产品"],
    links: {
      liveUrl: "https://m1hvgj8aaxv.feishuapp.com/app/app_17e5n68v3gt/",
    },
    featured: true,
    contentStatus: "partial",
    translationStatus: "pending",
    cover: {
      src: "/media/projects/academic-assistant/cover-imagegen.png",
      alt: {
        zh: "AI 学术助手研究证据工作台视觉封面",
        en: "AI Academic Assistant research workspace cover",
      },
      width: 1672,
      height: 941,
    },
  },
  {
    archiveIndex: 4,
    slug: "ixdc-website",
    title: { zh: "国际体验设计奖官网", en: "IXDC eXperience Award Website" },
    summary: {
      zh: "IXDC 国际体验奖“关于 IXDC”页面，展示奖项定位、品牌主张与三大委员会。",
      en: "IXDC Award's About page presenting its positioning, brand statement, and three committees.",
    },
    categories: ["AI 产品"],
    caseDocument: {
      pageCount: 1,
      pageWidth: 2560,
      pageHeight: 2920,
      presentation: "continuous",
      fileExtension: "png",
    },
    featured: true,
    contentStatus: "partial",
    translationStatus: "pending",
    cover: {
      src: "/media/projects/ixdc-website/cover-imagegen.png",
      alt: {
        zh: "国际体验设计奖策展展厅视觉封面",
        en: "IXDC eXperience Award exhibition cover",
      },
      width: 1672,
      height: 941,
    },
  },
  {
    archiveIndex: 5,
    slug: "tea-seed-shampoo",
    title: { zh: "茶枯洗发", en: "Tea Seed Shampoo" },
    summary: {
      zh: "融合端侧 AI 与中药配方的阶段性洗护方案。",
      en: "A staged hair-care solution combining on-device AI and herbal formulas.",
    },
    categories: ["工业设计"],
    caseDocument: { pageCount: 19, pageWidth: 2560, pageHeight: 1440 },
    featured: false,
    contentStatus: "content-pending",
    translationStatus: "pending",
    cover: {
      src: "/media/projects/tea-seed-shampoo/cover-imagegen.png",
      alt: {
        zh: "茶枯洗发茶籽洗护装置视觉封面",
        en: "Tea Seed Shampoo care-device cover",
      },
      width: 1672,
      height: 941,
    },
  },
  {
    archiveIndex: 6,
    slug: "diverse-community",
    title: { zh: "多元社区", en: "Diverse Community" },
    summary: {
      zh: "面向多元群体的包容性社区服务系统设计。",
      en: "An inclusive community service system for diverse groups.",
    },
    categories: ["服务系统"],
    caseDocument: { pageCount: 4, pageWidth: 2560, pageHeight: 906 },
    featured: false,
    contentStatus: "content-pending",
    translationStatus: "pending",
    cover: {
      src: "/media/projects/diverse-community/cover-imagegen.png",
      alt: {
        zh: "多元社区包容性服务系统视觉封面",
        en: "Diverse Community service-system cover",
      },
      width: 1672,
      height: 941,
    },
  },
  {
    archiveIndex: 7,
    slug: "sea-turtle-rescue",
    title: { zh: "海龟救助", en: "Sea Turtle Rescue" },
    summary: {
      zh: "帮助救助者安全移除误吞塑料的海洋救援工具。",
      en: "A marine rescue tool for safely removing ingested plastic from sea turtles.",
    },
    categories: ["工业设计"],
    caseDocument: { pageCount: 25, pageWidth: 2560, pageHeight: 1440 },
    featured: false,
    contentStatus: "content-pending",
    translationStatus: "pending",
    cover: {
      src: "/media/projects/sea-turtle-rescue/cover-imagegen.png",
      alt: {
        zh: "海龟救助水下救援工具视觉封面",
        en: "Sea Turtle Rescue underwater-tool cover",
      },
      width: 1672,
      height: 941,
    },
  },
  {
    archiveIndex: 8,
    slug: "service-product-system",
    title: { zh: "服务产品系统设计", en: "Service Product System" },
    summary: {
      zh: "围绕桑葚产业构建的助农产品服务系统与视觉设计。",
      en: "A product-service system and visual identity supporting the mulberry industry.",
    },
    categories: ["服务系统"],
    caseDocument: { pageCount: 66, pageWidth: 2560, pageHeight: 1440 },
    featured: false,
    contentStatus: "content-pending",
    translationStatus: "pending",
    cover: {
      src: "/media/projects/service-product-system/cover-imagegen.png",
      alt: {
        zh: "助农金灶桑葚服务生态视觉封面",
        en: "Mulberry agriculture service ecosystem cover",
      },
      width: 1672,
      height: 941,
    },
  },
  {
    archiveIndex: 9,
    slug: "kids-swimming-aid",
    title: { zh: "儿童游泳辅具设计", en: "Children's Swim Aid" },
    summary: {
      zh: "兼顾浮力、安全与收纳的儿童游泳辅助装备设计。",
      en: "A children's swimming aid balancing buoyancy, safety, and storage.",
    },
    categories: ["工业设计"],
    caseDocument: { pageCount: 4, pageWidth: 2560, pageHeight: 906 },
    featured: false,
    contentStatus: "content-pending",
    translationStatus: "pending",
    cover: {
      src: "/media/projects/kids-swimming-aid/cover-imagegen.png",
      alt: {
        zh: "儿童游泳辅具产品视觉封面",
        en: "Children's Swim Aid product cover",
      },
      width: 1672,
      height: 941,
    },
  },
  {
    archiveIndex: 10,
    slug: "smart-comb",
    title: { zh: "智能梳子", en: "Smart Comb" },
    summary: {
      zh: "融合头皮监测与日常梳理的智能护理梳设计。",
      en: "A smart care comb combining scalp monitoring with daily grooming.",
    },
    categories: ["工业设计"],
    caseDocument: { pageCount: 7, pageWidth: 2560, pageHeight: 906 },
    featured: false,
    contentStatus: "content-pending",
    translationStatus: "pending",
    cover: {
      src: "/media/projects/smart-comb/cover-imagegen.png",
      alt: { zh: "智能梳子精密护理产品视觉封面", en: "Smart Comb product cover" },
      width: 1672,
      height: 941,
    },
  },
  {
    archiveIndex: 11,
    slug: "muscle-motion",
    title: { zh: "肌动派", en: "Muscle Motion" },
    summary: {
      zh: "探索运动与健康场景的产品体验设计。",
      en: "A product-experience concept for movement and health scenarios.",
    },
    categories: ["工业设计"],
    caseDocument: { pageCount: 18, pageWidth: 2560, pageHeight: 1440 },
    featured: false,
    contentStatus: "content-pending",
    translationStatus: "pending",
    cover: {
      src: "/media/projects/muscle-motion/cover-imagegen.png",
      alt: { zh: "肌动派运动社群视觉封面", en: "Muscle Motion community cover" },
      width: 1672,
      height: 941,
    },
  },
  {
    archiveIndex: 12,
    slug: "baomi-tuanzi",
    title: { zh: "苞米团子", en: "Corn Buddy" },
    summary: {
      zh: "以玉米为灵感打造的毛绒文创角色设计。",
      en: "A plush cultural character inspired by corn.",
    },
    categories: ["视觉与文创"],
    caseDocument: { pageCount: 3, pageWidth: 2560, pageHeight: 3621 },
    featured: false,
    contentStatus: "content-pending",
    translationStatus: "pending",
    cover: {
      src: "/media/projects/baomi-tuanzi/cover-imagegen.png",
      alt: { zh: "苞米团子文创毛绒视觉封面", en: "Corn Buddy plush character cover" },
      width: 1672,
      height: 941,
    },
  },
  {
    archiveIndex: 13,
    slug: "dolphin-neck-pillow",
    title: { zh: "软萌萌海豚 U 型枕", en: "Soft Dolphin U-Pillow" },
    summary: {
      zh: "以中华白海豚为灵感的软萌 U 型枕设计。",
      en: "A soft U-shaped neck pillow inspired by the Chinese white dolphin.",
    },
    categories: ["视觉与文创"],
    caseDocument: { pageCount: 1, pageWidth: 2560, pageHeight: 3621 },
    featured: false,
    contentStatus: "content-pending",
    translationStatus: "pending",
    cover: {
      src: "/media/projects/dolphin-neck-pillow/cover-imagegen.png",
      alt: {
        zh: "软萌萌海豚 U 型枕视觉封面",
        en: "Soft Dolphin U-Pillow cover",
      },
      width: 1672,
      height: 941,
    },
  },
  {
    archiveIndex: 14,
    slug: "tattoo-industry",
    title: {
      zh: "纹身企业战略创新规划研究",
      en: "Tattoo Enterprise Strategic Innovation Planning Research",
    },
    summary: {
      zh: "围绕纹身用户、服务生命周期与企业战略的创新规划研究。",
      en: "A strategic innovation study of tattoo services across the user lifecycle.",
    },
    categories: ["服务系统"],
    caseDocument: {
      pageCount: 22,
      pageWidth: 2560,
      pageHeight: 1440,
      presentation: "continuous",
    },
    featured: false,
    contentStatus: "partial",
    translationStatus: "pending",
    cover: {
      src: "/media/projects/tattoo-industry/cover-imagegen.png",
      alt: {
        zh: "纹身企业战略创新规划研究封面",
        en: "Tattoo enterprise strategic innovation planning research cover",
      },
      width: 1672,
      height: 941,
    },
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
