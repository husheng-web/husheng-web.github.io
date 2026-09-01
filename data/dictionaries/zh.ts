import type { Dictionary } from "@/types/content";

export const zhDictionary = {
  navigation: {
    home: "首页",
    projects: "项目",
    about: "关于",
    resume: "简历",
    language: "English",
    menu: "打开导航菜单",
    closeMenu: "关闭导航菜单",
    menuButton: "菜单",
    closeButton: "关闭",
    skipToContent: "跳至主要内容",
  },
  shell: {
    contentPending: "[内容待补充]",
    comingSoon: "即将更新",
    footerLabel: "作品集系统基础已建立",
    notFoundTitle: "页面不存在",
    notFoundBody: "该页面尚未建立，或地址已发生变化。",
    returnHome: "返回首页",
    allRightsReserved: "保留所有权利",
    backToTop: "返回顶部",
    designSystem: "设计系统",
    archive: "项目档案",
    statusReady: "内容完整",
    statusPartial: "内容部分就绪",
    statusContentPending: "内容待补充",
    statusTranslationPending: "翻译待补充",
  },
} satisfies Dictionary;
