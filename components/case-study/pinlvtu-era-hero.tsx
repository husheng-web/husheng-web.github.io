import Image from "next/image";

import { Container } from "@/components/ui/container";
import type { Project } from "@/types/content";

const media = "/media/projects/pinlvtu/";

export function PinlvtuEraHero({ project }: { project: Project }) {
  return (
    <section className="pinlvtu-era-hero" aria-labelledby="pinlvtu-case-title">
      <Container className="pinlvtu-era-hero__grid">
        <div className="pinlvtu-era-hero__intro">
          <p className="type-label">拼旅途 / AI 旅行规划与多人协作平台</p>
          <h1 className="pinlvtu-era-hero__title" id="pinlvtu-case-title">
            <span>把旅行内容，</span>
            <span>拼成可调整的</span>
            <span>旅程。</span>
          </h1>
          <p className="pinlvtu-era-hero__summary">
            从灵感收集到实时调整，让用户在 AI 建议下保留每一次判断与确认。
          </p>
          <ul className="pinlvtu-era-hero__tags" aria-label="项目标签">
            <li>AI 行程生成</li>
            <li>多人协作</li>
            <li>实时调整</li>
          </ul>
        </div>
        <div
          className="pinlvtu-era-hero__media"
          aria-label={`${project.title.zh} 产品界面预览`}
        >
          <div className="pinlvtu-era-hero__map" aria-hidden="true" />
          <Image
            alt="拼旅途内容章节与旅程规划界面"
            className="pinlvtu-era-hero__screen pinlvtu-era-hero__screen--back"
            height={844}
            priority
            sizes="(min-width: 72rem) 20rem, 48vw"
            src={`${media}p02-chapter.png`}
            width={390}
          />
          <Image
            alt="拼旅途旅途积木选择界面"
            className="pinlvtu-era-hero__screen pinlvtu-era-hero__screen--front"
            height={844}
            priority
            sizes="(min-width: 72rem) 22rem, 54vw"
            src={`${media}p04-selection.png`}
            width={390}
          />
        </div>
      </Container>
    </section>
  );
}
