import Image from "next/image";
import type { ReactNode } from "react";
import { CaseSection } from "@/components/case-study/case-blocks";
import { CaseHero } from "@/components/case-study/case-study-page";
import {
  CapabilityBoundaryDiagram,
  GenerateComposeDiagram,
  HumanControlDiagram,
  ProductModelDiagram,
  ScopeConstraintDiagram,
} from "@/components/case-study/pinlvtu-diagrams";
import { Container } from "@/components/ui/container";
import type { Project } from "@/types/content";

const media = "/media/projects/pinlvtu/";
const labels: Record<string, string> = {
  "p01-feed.png": "P01 Feed",
  "p02-chapter.png": "P02 Chapter",
  "p04-selection.png": "P04 Selection",
  "p05-canvas-default.png": "P05 Canvas default",
  "p05-canvas-intent-only.png": "P05 Canvas intent-only",
  "p07-companion.png": "P07 Companion",
  "p08-share-preview.png": "P08 Share",
};

function Screens({
  files,
  layout = "pair",
}: {
  files: string[];
  layout?: "comparison" | "large" | "pair" | "single";
}) {
  const layouts = {
    comparison: "grid gap-5 md:grid-cols-2",
    large: "max-w-[36rem]",
    pair: "grid gap-5 md:grid-cols-2",
    single: "max-w-[26rem]",
  } as const;

  return (
    <div className={layouts[layout]}>
      {files.map((file) => (
        <figure key={file}>
          <Image
            alt={`拼旅途 ${labels[file]} 原型界面`}
            className="h-auto w-full border border-[var(--border)] bg-[var(--surface)]"
            height={844}
            sizes={
              layout === "single"
                ? "(min-width:1024px) 26rem, 100vw"
                : layout === "large"
                  ? "(min-width:1024px) 36rem, 100vw"
                  : "(min-width:1024px) 30rem, 100vw"
            }
            src={`${media}${file}`}
            width={390}
          />
          <figcaption className="type-meta mt-3 text-[var(--foreground-muted)]">
            {labels[file]}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function DetailCrop({
  file,
  label,
  position = "center",
}: {
  file: string;
  label: string;
  position?: string;
}) {
  return (
    <figure>
      <div className="relative h-[24rem] overflow-hidden border border-[var(--border)] bg-[var(--foreground)] sm:h-[32rem]">
        <Image
          alt={`拼旅途 ${label} 局部界面`}
          className="object-cover"
          fill
          sizes="(min-width:1024px) 34rem, 100vw"
          src={`${media}${file}`}
          style={{ objectPosition: position }}
        />
      </div>
      <figcaption className="type-meta mt-3 text-[var(--foreground-muted)]">
        DETAIL / {label}
      </figcaption>
    </figure>
  );
}

function InterfaceStory({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-[var(--border)] pt-[clamp(3.5rem,8vw,7rem)] first:border-t-0 first:pt-0">
      <p className="type-label text-[var(--accent)]">{eyebrow}</p>
      <h3 className="type-h2 mt-4 max-w-[17ch]">{title}</h3>
      <div className="mt-7">{children}</div>
    </section>
  );
}

export function PinlvtuCase({ project }: { project: Project }) {
  return (
    <>
      <CaseHero displayTitle="拼旅途 / Trip Compose" locale="zh" project={project} />
      <Container className="border-b border-[var(--border)] py-5">
        <div className="flex items-center gap-4">
          <span className="type-label text-[var(--foreground-muted)]">
            V1 / GENERATE
          </span>
          <span aria-hidden="true" className="h-px flex-1 bg-[var(--border)]" />
          <span className="type-label text-[var(--accent)]">GENERATE → COMPOSE</span>
          <span aria-hidden="true" className="h-px flex-1 bg-[var(--accent)]" />
          <span className="type-label text-[var(--accent)]">V2 / COMPOSE</span>
        </div>
      </Container>
      <Container className="py-10">
        <p className="type-label">HACKATHON ORIGIN</p>
        <p className="type-body-large mt-4 max-w-[50rem]">
          拼旅途从 Generate → Compose 重构 AI 旅行产品，让用户在 AI
          建议下拼出并调整自己的旅程。
        </p>
        <dl className="mt-8 grid gap-4 border-y border-[var(--border)] py-5 md:grid-cols-4">
          <div>
            <dt className="type-label">Role</dt>
            <dd className="mt-2">AI Product Lead / Solo Builder（V2）</dd>
          </div>
          <div>
            <dt className="type-label">Competition</dt>
            <dd className="mt-2">抖音AI创变者计划2026黑客松联赛</dd>
          </div>
          <div>
            <dt className="type-label">Outcome</dt>
            <dd className="mt-2">V1 交流赛三等奖；V2 已提交大区赛，名次未确认</dd>
          </div>
          <div>
            <dt className="type-label">Timeline</dt>
            <dd className="mt-2">2026-06-06 至今</dd>
          </div>
        </dl>
      </Container>
      <CaseSection index="01" title="Context">
        <p>
          旅行攻略的问题，不只是信息太多，而是用户很难把零散建议拼成一段真正适合自己的旅程。
        </p>
        <p>
          V1「旅拆拆」由 3 人团队在两天内完成。我负责问题定义、产品与交互、前端、Demo
          和路演。它使用规则型 Mock，不含真实视频分析、多模态调用或生产级后端。
        </p>
      </CaseSection>
      <CaseSection index="02" size="wide" title="Reframing">
        <p className="type-body-large max-w-[44rem]">
          我没有继续追求更聪明地生成路线，而是改问：AI
          如何理解旅行灵感，并让用户自己拼出旅程？
        </p>
        <GenerateComposeDiagram />
      </CaseSection>
      <CaseSection index="03" size="wide" title="Product Experience">
        <div className="space-y-[clamp(5rem,12vw,12rem)]">
          <InterfaceStory
            eyebrow="01 / DISCOVER"
            title="从灵感开始，而不是从填写行程开始"
          >
            <div className="grid items-center gap-8 lg:grid-cols-[minmax(18rem,1.1fr)_minmax(18rem,0.8fr)] lg:gap-14">
              <Screens files={["p01-feed.png"]} layout="large" />
              <div className="max-w-[28rem] space-y-4">
                <p className="type-body-large">
                  产品从用户已经感兴趣的旅行内容开始，而不是要求用户重新从零描述需求。
                </p>
                <p>
                  用户先从 Feed
                  浏览旅行灵感，再决定是否继续进入理解流程。这里不直接生成路线，而是为后续理解保留真实的内容入口。
                </p>
              </div>
            </div>
          </InterfaceStory>

          <InterfaceStory
            eyebrow="02 / UNDERSTAND"
            title="先理解内容，再决定是否带进旅程"
          >
            <div className="grid items-center gap-8 lg:grid-cols-[minmax(18rem,0.8fr)_minmax(18rem,1.1fr)] lg:gap-14">
              <div className="max-w-[28rem] space-y-4 lg:order-1">
                <p className="type-body-large">
                  Chapter
                  的作用不是生成路线，而是把一段旅行内容变成可以被阅读和理解的结构。
                </p>
                <p>
                  AI 将内容组织为
                  Chapter，用户先查看时间范围与摘要，再决定哪些信息值得带进下一步选择。
                </p>
              </div>
              <div className="grid items-start gap-5 sm:grid-cols-[minmax(13rem,0.7fr)_minmax(14rem,1fr)] lg:order-2">
                <Screens files={["p02-chapter.png"]} layout="single" />
                <DetailCrop
                  file="p02-chapter.png"
                  label="CHAPTER STRUCTURE"
                  position="center 42%"
                />
              </div>
            </div>
          </InterfaceStory>

          <InterfaceStory
            eyebrow="03 / SELECT"
            title="把 AI 推荐变成用户可以判断的选择"
          >
            <div className="max-w-[42rem] space-y-4">
              <p className="type-body-large">
                AI 不直接替用户决定路线，而是把判断依据放在选择发生之前。
              </p>
              <p>
                Selection 呈现 TravelBlock 候选、推荐理由、避雷、confidence 与
                evidence。用户可以 Select 或 Skip，每个候选都必须经过自己的判断。
              </p>
            </div>
            <div className="mt-9 grid items-start gap-5 lg:grid-cols-[minmax(15rem,0.7fr)_minmax(24rem,1.2fr)]">
              <Screens files={["p04-selection.png"]} layout="single" />
              <DetailCrop
                file="p04-selection.png"
                label="TRAVELBLOCK / SELECTION"
                position="center 45%"
              />
            </div>
          </InterfaceStory>

          <InterfaceStory
            eyebrow="04 / COMPOSE"
            title="旅程不是生成出来的，而是拼出来的"
          >
            <div className="max-w-[42rem] space-y-4">
              <p className="type-body-large">建议可以被看见，但决定必须被确认。</p>
              <p>
                Default 记录用户已经选择的 TravelBlock。AI 的建议先成为 visible
                intent，而不是静默修改路线；用户仍可以确认、拒绝或重新排列。
              </p>
            </div>
            <div className="mt-9 border-t border-[var(--border)] pt-4">
              <p className="type-label text-[var(--accent)]">
                DEFAULT → VISIBLE INTENT
              </p>
            </div>
            <div className="mt-6">
              <Screens
                files={["p05-canvas-default.png", "p05-canvas-intent-only.png"]}
                layout="comparison"
              />
            </div>
          </InterfaceStory>

          <InterfaceStory eyebrow="05 / ADAPT" title="旅行改变时，计划也应该能改变">
            <div className="grid items-center gap-8 lg:grid-cols-[minmax(18rem,1.1fr)_minmax(18rem,0.8fr)] lg:gap-14">
              <Screens files={["p07-companion.png"]} layout="large" />
              <div className="max-w-[28rem] space-y-4">
                <p className="type-body-large">
                  规划不是出发前一次完成，而是在旅行过程中持续调整。
                </p>
                <p>
                  用户可以拍一拍或提问，系统给出场景候选与建议。新的 Block
                  不会自动加入旅程，仍需用户确认。
                </p>
              </div>
            </div>
          </InterfaceStory>

          <InterfaceStory
            eyebrow="06 / SHARE"
            title="把拼好的旅程变成可以回看和分享的结果"
          >
            <div className="grid items-center gap-8 lg:grid-cols-[minmax(15rem,0.45fr)_minmax(18rem,0.8fr)] lg:gap-14">
              <div className="max-w-[16rem]">
                <Screens files={["p08-share-preview.png"]} layout="single" />
              </div>
              <div className="max-w-[28rem] space-y-4">
                <p className="type-body-large">将拼好的旅程形成可回看的展示结果。</p>
                <p>
                  这里呈现的是 Demo
                  preview，用于收束已拼好的旅程；不宣称真实发布、短链或线上二维码服务。
                </p>
              </div>
            </div>
          </InterfaceStory>
        </div>
      </CaseSection>
      <CaseSection index="04" size="wide" title="Product Model">
        <p className="max-w-[42rem]">
          Content → Chapter → TravelBlock → Selection →
          Canvas。界面体验之后，TravelBlock 成为连接 AI 理解与用户选择的中间层。
        </p>
        <ProductModelDiagram />
      </CaseSection>
      <CaseSection index="05" size="wide" title="Human Control">
        <p className="max-w-[42rem]">
          Selection 让用户审阅候选；Canvas 与 Companion
          将建议保留为用户可见、可确认的下一步，而不是由系统静默执行。
        </p>
        <HumanControlDiagram />
      </CaseSection>
      <CaseSection index="06" title="Building the Prototype">
        <p>
          主动 MVP 取舍 ≠ 技术限制。完整地图、真实团购和完整城市数据未进入
          MVP；真实多模态、数据库与真实发布均未实现。
        </p>
        <ScopeConstraintDiagram />
        <CapabilityBoundaryDiagram />
      </CaseSection>
      <CaseSection
        className="border-t border-[var(--border)] pt-[clamp(7rem,14vw,14rem)]"
        index="07"
        title="Result & Reflection"
      >
        <p>
          我从使用 AI 工具，走到理解 AI Product Workflow、Human Control 与能力边界。
        </p>
        <p>
          Future
          Exploration：陌生人拼团旅行，以及多人共同记录和沉淀旅程。这是未来方向，不是当前已实现功能。
        </p>
      </CaseSection>
    </>
  );
}
