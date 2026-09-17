import { BuilderArchiveDotField } from "@/components/home/builder-archive-dot-field";
import { HomeProjectRail } from "@/components/home/home-project-rail";
import { HomeScrollReveal } from "@/components/motion/home-scroll-motion";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import type { Dictionary, Locale, Project } from "@/types/content";

interface PortfolioHomeProps {
  dictionary: Dictionary;
  locale: Locale;
  projects: readonly Project[];
}

function SectionRail({
  index,
  label,
  enLabel,
}: {
  index: string;
  label: string;
  enLabel: string;
}) {
  return (
    <header className="home-era__rail">
      <p>
        <span>{index}</span>
        {label}
      </p>
      <span>{enLabel}</span>
    </header>
  );
}

export function PortfolioHome({ dictionary, locale, projects }: PortfolioHomeProps) {
  const featured = projects.filter((project) => project.featured).slice(0, 4);
  const featureProject = featured[0];
  const isZh = locale === "zh";
  const builderTitle = isZh
    ? "产品构建者的工作系统"
    : "A working system for product building";
  const builderSummary = isZh
    ? "将职业定位、关注方向与工作方法整理成可扫描的个人系统。"
    : "A scannable system for positioning, focus, and working method.";
  const builderStatement = isZh
    ? "从问题定义，到可运行的产品原型。"
    : "From problem framing to working product prototypes.";
  const capabilitySummary = isZh
    ? "以用户洞察为起点，完成体验架构、AI 原型与可验证交付，让产品判断真正落到使用场景。"
    : "Starting with user insight, I turn product judgment into experience architecture, AI prototypes, and validated delivery.";
  const awards = isZh
    ? [
        { title: "2026 · 抖音 AI 创变者计划黑客松", recognition: "交流赛三等奖" },
        { title: "2025 · 全国大学生人工智能时尚创新设计大赛", recognition: "铜奖" },
        { title: "2025 · 蓝桥杯 AIGC 专项赛", recognition: "国家一等奖" },
        { title: "2025 · 数字媒体科技竞赛", recognition: "广东省二等奖" },
        { title: "2023 · 中美国际创意大赛", recognition: "铜奖" },
        { title: "2023 · 中美国际创意大赛", recognition: "优秀奖" },
        { title: "2022 · 全国大学生广告艺术大赛", recognition: "省一等奖" },
        { title: "2020 · 全国 3D 大赛省创杯", recognition: "二等奖" },
        {
          title: "2020 · 广东省职业技能大赛省创杯",
          recognition: "一等奖 / 个人三等奖",
        },
        {
          title: "2020 · 全国大学生成图技术与产品信息建模创新大赛",
          recognition: "国三等奖",
        },
      ]
    : [
        { title: "2026 · Douyin AI Hackathon", recognition: "Third prize" },
        {
          title: "2025 · National AI Fashion Innovation Competition",
          recognition: "Bronze award",
        },
        { title: "2025 · Lanqiao Cup AIGC", recognition: "National first prize" },
        {
          title: "2025 · Digital Media Technology Competition",
          recognition: "Guangdong second prize",
        },
        {
          title: "2023 · China-US International Creativity Competition",
          recognition: "Bronze award",
        },
        {
          title: "2023 · China-US International Creativity Competition",
          recognition: "Excellence award",
        },
        {
          title: "2022 · National Student Advertising Art Competition",
          recognition: "Provincial first prize",
        },
        {
          title: "2020 · National 3D Competition, Provincial Cup",
          recognition: "Second prize",
        },
        {
          title: "2020 · Guangdong Vocational Skills Competition",
          recognition: "First prize / personal third prize",
        },
        {
          title: "2020 · National Student Engineering Graphics Competition",
          recognition: "National third prize",
        },
      ];
  const projectExperiences = isZh
    ? [
        {
          title: "拼旅途",
          role: "抖音 AI 创变者计划黑客松 · 项目负责人",
          summary:
            "构建旅行理解、积木生成与前端 Demo，完成从需求定义到验证的产品全链路。",
        },
        {
          title: "台拍互动社区",
          role: "展会 SaaS 社交小程序 · 独立负责人",
          summary: "从需求拆解到上线，完成名片互换、人脉标签、现场破冰与商务回访。",
        },
        {
          title: "茶枯智能洗护商业计划",
          role: "AI 定制化家用智能洗护硬件 · 主创人",
          summary:
            "完成商业计划与 MVP 验证，回收 150 份问卷，其中 56 人表达付费测试意愿。",
        },
      ]
    : [
        {
          title: "Trip Compose",
          role: "Douyin AI Hackathon · Project Lead",
          summary:
            "Built the journey-understanding flow, block generation, and front-end demo from problem framing through validation.",
        },
        {
          title: "Taipai Interactive Community",
          role: "Design-expo SaaS social mini app · Independent Lead",
          summary:
            "Led the product from discovery to launch, including profile exchange, people tags, icebreakers, and follow-up.",
        },
        {
          title: "Tea Seed Smart Care Business Plan",
          role: "AI-customized home care hardware · Core Creator",
          summary:
            "Produced the business plan and MVP validation, collecting 150 surveys with 56 people interested in paid testing.",
        },
      ];
  return (
    <div className="home-era">
      <section
        className="home-era__section home-era__builder"
        aria-labelledby="profile-title"
      >
        <Container>
          <SectionRail
            index="01"
            label={isZh ? "构建者档案" : "Builder archive"}
            enLabel="BUILDER ARCHIVE"
          />
          <HomeScrollReveal>
            <div className="home-era-builder__panel">
              <div className="home-era-builder__copy">
                <h2 className="home-era__display">
                  {isZh ? "构建者档案" : "Builder archive"}
                </h2>
                <h3 className="home-era-builder__title">{builderTitle}</h3>
                <p className="home-era-builder__summary">{builderSummary}</p>
                <p id="profile-title" className="home-era-builder__statement">
                  {builderStatement}
                </p>
                <p>{dictionary.home.aboutCopy}</p>
                <div className="home-era-builder__steps">
                  {dictionary.home.buildSteps.slice(0, 3).map((step) => (
                    <article key={step.index}>
                      <span>{step.index}</span>
                      <strong>{step.title}</strong>
                      <p>{step.description}</p>
                    </article>
                  ))}
                </div>
              </div>
              <div className="home-era-builder__art" aria-hidden="true">
                <BuilderArchiveDotField />
              </div>
            </div>
          </HomeScrollReveal>
        </Container>
      </section>

      <section
        className="home-era__section home-era__projects"
        id="selected-works"
        aria-labelledby="works-title"
      >
        <Container>
          <SectionRail
            index="02"
            label={dictionary.home.sectionLabels.selectedWorks}
            enLabel="FEATURED PROJECTS"
          />
          <HomeScrollReveal>
            <div className="home-era-projects__heading">
              <div>
                <h2 id="works-title" className="home-era__display">
                  {dictionary.home.sectionTitles.selectedWorks}
                </h2>
                <p>{dictionary.home.selectedWorksDescription}</p>
              </div>
              <ButtonLink
                href={`/${locale}/projects`}
                className="home-era__outline-button"
                variant="secondary"
              >
                {dictionary.home.viewProjects}
              </ButtonLink>
            </div>
          </HomeScrollReveal>
          <HomeScrollReveal delay={0.08}>
            {featureProject ? (
              <HomeProjectRail
                dictionary={dictionary}
                locale={locale}
                projects={featured}
              />
            ) : null}
          </HomeScrollReveal>
        </Container>
      </section>

      <section
        className="home-era__section home-era__capability"
        aria-labelledby="capability-title"
      >
        <Container>
          <SectionRail
            index="03"
            label={dictionary.home.sectionLabels.capabilities}
            enLabel="CAPABILITY FRAMEWORK"
          />
          <HomeScrollReveal>
            <div className="home-era-capability__panel">
              <div>
                <h2 id="capability-title" className="home-era__display">
                  {dictionary.home.sectionLabels.capabilities}
                </h2>
                <h3 className="home-era-capability__title">
                  {dictionary.home.sectionTitles.capabilities}
                </h3>
                <p>{capabilitySummary}</p>
              </div>
              <div className="home-era-capability__items">
                {dictionary.home.capabilityGroups.map((group, index) => (
                  <article key={group.title}>
                    <span>0{index + 1}</span>
                    <h3>{group.title}</h3>
                  </article>
                ))}
              </div>
            </div>
          </HomeScrollReveal>
        </Container>
      </section>

      <section
        className="home-era__section home-era__proof"
        aria-labelledby="proof-title"
      >
        <Container>
          <SectionRail
            index="04"
            label={dictionary.home.sectionLabels.proof}
            enLabel="PRACTICE RECORDS"
          />
          <HomeScrollReveal>
            <div className="home-era-proof__heading">
              <div>
                <h2 className="home-era__display">
                  {dictionary.home.sectionLabels.proof}
                </h2>
                <h3 className="home-era-proof__title">
                  {dictionary.home.sectionTitles.proof}
                </h3>
              </div>
              <p>
                {isZh
                  ? "项目实践与竞赛成果，记录从产品构想到落地验证的关键节点。"
                  : "Project practice and competition results mark key moments from product concept to validated delivery."}
              </p>
            </div>
          </HomeScrollReveal>
          <HomeScrollReveal delay={0.08}>
            <div className="home-era-proof__cards">
              <article>
                <p className="home-era-proof__status">
                  {isZh ? "项目经历 / 2026" : "PROJECT EXPERIENCE / 2026"}
                </p>
                <h3 id="proof-title">
                  {isZh
                    ? `${projectExperiences.length} 个近期项目`
                    : `${projectExperiences.length} recent projects`}
                </h3>
                <ol className="home-era-proof__projects">
                  {projectExperiences.map((project) => (
                    <li key={project.title}>
                      <strong>{project.title}</strong>
                      <span>{project.role}</span>
                      <p>{project.summary}</p>
                    </li>
                  ))}
                </ol>
              </article>
              <article>
                <p className="home-era-proof__status">
                  {isZh ? "获奖记录 / 2025-2026" : "AWARDS / 2025-2026"}
                </p>
                <h3>
                  {isZh
                    ? `${awards.length} 项获奖记录`
                    : `${awards.length} award records`}
                </h3>
                <ul className="home-era-proof__awards">
                  {awards.map((award) => (
                    <li key={`${award.title}-${award.recognition}`}>
                      <strong>{award.title}</strong>
                      <span>{award.recognition}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </HomeScrollReveal>
        </Container>
      </section>

      <section
        className="home-era__section home-era__contact"
        aria-labelledby="contact-title"
      >
        <Container>
          <SectionRail
            index="05"
            label={dictionary.home.sectionLabels.contact}
            enLabel="NEXT STEP"
          />
          <HomeScrollReveal>
            <div className="home-era-contact__panel">
              <div>
                <h2 id="contact-title" className="home-era__display">
                  {dictionary.home.sectionLabels.contact}
                </h2>
                <p className="home-era-contact__title">
                  {isZh
                    ? "为有意义的产品，继续构建。"
                    : "Keep building meaningful products."}
                </p>
              </div>
              <div>
                <ButtonLink
                  href={`/${locale}/projects`}
                  className="home-era__primary-button"
                >
                  {dictionary.home.viewProjects}
                </ButtonLink>
                <ButtonLink
                  href={`/${locale}/resume`}
                  className="home-era__inverse-button"
                  variant="secondary"
                >
                  {dictionary.home.viewResume}
                </ButtonLink>
              </div>
            </div>
          </HomeScrollReveal>
        </Container>
      </section>
    </div>
  );
}
