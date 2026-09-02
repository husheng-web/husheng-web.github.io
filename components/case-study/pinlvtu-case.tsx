import Image from "next/image";
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
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.72fr)]">
          <p className="type-meta max-w-[18rem] text-[var(--foreground-muted)]">
            P01 / CONTENT ENTRY
          </p>
          <Screens files={["p01-feed.png"]} layout="large" />
        </div>
      </CaseSection>
      <CaseSection index="03" size="wide" title="Product Model">
        <p>
          Content → Chapter → TravelBlock → Selection → Canvas。AI
          组织理解，用户决定什么进入旅程。
        </p>
        <ProductModelDiagram />
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(16rem,0.65fr)_minmax(0,1fr)]">
          <Screens files={["p02-chapter.png"]} layout="single" />
          <DetailCrop
            file="p02-chapter.png"
            label="CHAPTER STRUCTURE"
            position="center 42%"
          />
        </div>
      </CaseSection>
      <CaseSection index="04" size="wide" title="Human-Controlled Experience">
        <p>
          AI 负责理解和建议，用户负责选择和确认。Canvas 默认记录可见
          intent，而不是在后台直接写入 Route。
        </p>
        <HumanControlDiagram />
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(16rem,0.66fr)_minmax(0,1fr)]">
          <Screens files={["p04-selection.png"]} layout="single" />
          <DetailCrop
            file="p04-selection.png"
            label="TRAVELBLOCK / SELECTION"
            position="center 45%"
          />
        </div>
        <div className="border-t border-[var(--border)] pt-4">
          <p className="type-label text-[var(--accent)]">DEFAULT → VISIBLE INTENT</p>
        </div>
        <Screens
          files={["p05-canvas-default.png", "p05-canvas-intent-only.png"]}
          layout="comparison"
        />
        <div className="ml-auto max-w-[38rem] pt-[clamp(2rem,6vw,6rem)]">
          <p className="type-label mb-4 text-[var(--foreground-muted)]">
            P07 / COMPANION
          </p>
          <Screens files={["p07-companion.png"]} layout="large" />
        </div>
      </CaseSection>
      <CaseSection index="05" title="Building the Prototype">
        <p>
          主动 MVP 取舍 ≠ 技术限制。完整地图、真实团购和完整城市数据未进入
          MVP；真实多模态、数据库与真实发布均未实现。
        </p>
        <ScopeConstraintDiagram />
        <CapabilityBoundaryDiagram />
      </CaseSection>
      <CaseSection
        className="border-t border-[var(--border)] pt-[clamp(7rem,14vw,14rem)]"
        index="06"
        title="Result & Reflection"
      >
        <p>
          我从使用 AI 工具，走到理解 AI Product Workflow、Human Control 与能力边界。
        </p>
        <p>
          Future
          Exploration：陌生人拼团旅行，以及多人共同记录和沉淀旅程。这是未来方向，不是当前已实现功能。
        </p>
        <div className="max-w-[20rem] opacity-80">
          <Screens files={["p08-share-preview.png"]} layout="single" />
        </div>
      </CaseSection>
    </>
  );
}
