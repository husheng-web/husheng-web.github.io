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
function Screens({ files }: { files: string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {files.map((file) => (
        <Image
          alt="拼旅途原型界面截图"
          className="h-auto w-full border border-[var(--border)] bg-[var(--surface)]"
          height={844}
          key={file}
          sizes="(min-width:1024px) 24rem, 45vw"
          src={`${media}${file}`}
          width={390}
        />
      ))}
    </div>
  );
}
export function PinlvtuCase({ project }: { project: Project }) {
  return (
    <>
      <CaseHero displayTitle="拼旅途 / Trip Compose" locale="zh" project={project} />
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
      <CaseSection index="02" title="Reframing">
        <p>
          我没有继续追求更聪明地生成路线，而是改问：AI
          如何理解旅行灵感，并让用户自己拼出旅程？
        </p>
        <GenerateComposeDiagram />
        <Screens files={["p01-feed.png"]} />
      </CaseSection>
      <CaseSection index="03" title="Product Model">
        <p>
          Content → Chapter → TravelBlock → Selection → Canvas。AI
          组织理解，用户决定什么进入旅程。
        </p>
        <ProductModelDiagram />
        <Screens files={["p02-chapter.png", "p04-selection.png"]} />
      </CaseSection>
      <CaseSection index="04" title="Human-Controlled Experience">
        <p>
          AI 负责理解和建议，用户负责选择和确认。Canvas 默认记录可见
          intent，而不是在后台直接写入 Route。
        </p>
        <HumanControlDiagram />
        <Screens
          files={[
            "p04-selection.png",
            "p05-canvas-default.png",
            "p05-canvas-intent-only.png",
            "p07-companion.png",
          ]}
        />
      </CaseSection>
      <CaseSection index="05" title="Building the Prototype">
        <p>
          主动 MVP 取舍 ≠ 技术限制。完整地图、真实团购和完整城市数据未进入
          MVP；真实多模态、数据库与真实发布均未实现。
        </p>
        <ScopeConstraintDiagram />
        <CapabilityBoundaryDiagram />
      </CaseSection>
      <CaseSection index="06" title="Result & Reflection">
        <p>
          我从使用 AI 工具，走到理解 AI Product Workflow、Human Control 与能力边界。
        </p>
        <p>
          Future
          Exploration：陌生人拼团旅行，以及多人共同记录和沉淀旅程。这是未来方向，不是当前已实现功能。
        </p>
        <Screens files={["p08-share-preview.png"]} />
      </CaseSection>
    </>
  );
}
