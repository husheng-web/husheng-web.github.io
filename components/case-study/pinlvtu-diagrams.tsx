function Node({
  children,
  emphasis = false,
}: {
  children: string;
  emphasis?: boolean;
}) {
  return (
    <div
      className={`border px-4 py-3 text-center font-mono text-xs tracking-[0.08em] ${emphasis ? "border-[var(--accent)] text-[var(--accent)]" : "border-[var(--border)]"}`}
    >
      {children}
    </div>
  );
}

function Arrow({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`font-mono text-[var(--accent)] ${className}`}>
      →
    </span>
  );
}

export function GenerateComposeDiagram() {
  return (
    <div
      className="grid gap-8 border-y border-[var(--border)] py-[clamp(3rem,9vw,8rem)] lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-center"
      data-pinlvtu-diagram="D01"
    >
      <div className="max-w-[22rem] border-b border-[var(--border)] pb-6 opacity-55 lg:border-r lg:border-b-0 lg:pr-10 lg:pb-0">
        <p className="type-label">V1 / Generate</p>
        <p className="mt-3 leading-7">
          旅行攻略 → 规则 / Mock 拆解 → 路线模块 → 路线草稿
        </p>
      </div>
      <div className="flex items-center gap-3 py-2 lg:flex-col lg:gap-2">
        <span aria-hidden="true" className="font-mono text-[var(--accent)] lg:hidden">
          ↓
        </span>
        <p className="text-[clamp(2rem,5.5vw,5.75rem)] leading-[0.88] font-[var(--font-display)] font-black tracking-[var(--tracking-display)] text-[var(--accent)]">
          Generate → Compose
        </p>
        <span aria-hidden="true" className="font-mono text-[var(--accent)] lg:hidden">
          ↓
        </span>
      </div>
      <div className="max-w-[28rem] border-t border-[var(--accent)] pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
        <p className="type-label text-[var(--accent)]">V2 / Compose</p>
        <p className="mt-3 text-[1.05rem] leading-7 font-medium">
          旅行内容 → Chapter → TravelBlock → Selection → Canvas
        </p>
      </div>
    </div>
  );
}
export function ProductModelDiagram() {
  return (
    <div className="border-y border-[var(--border)] py-8" data-pinlvtu-diagram="D02">
      <div className="grid items-center gap-3 sm:grid-cols-[1fr_auto_1fr_auto_minmax(12rem,1.8fr)_auto_1fr_auto_1fr]">
        <Node>Content</Node>
        <Arrow className="hidden sm:block" />
        <Node>Chapter</Node>
        <Arrow className="hidden sm:block" />
        <div className="border-2 border-[var(--accent)] px-4 py-5 text-center">
          <p className="type-label text-[var(--accent)]">CORE INTERMEDIARY</p>
          <p className="type-h3 mt-2 text-[var(--accent)]">TravelBlock</p>
          <div className="mt-4 grid gap-1 border-t border-[var(--accent)] pt-3 text-left font-mono text-[0.68rem] leading-5 text-[var(--foreground-secondary)]">
            <span>provenance: 来源 / 导入链路</span>
            <span>evidenceIds: 证据引用</span>
            <span>confidence: 置信表达</span>
          </div>
        </div>
        <Arrow className="hidden sm:block" />
        <Node>Selection</Node>
        <Arrow className="hidden sm:block" />
        <Node>Canvas</Node>
      </div>
    </div>
  );
}
export function HumanControlDiagram() {
  return (
    <div
      className="grid gap-3 border-y border-[var(--border)] py-8 md:grid-cols-4"
      data-pinlvtu-diagram="D03"
    >
      {[
        ["AI proposes", false],
        ["User reviews", true],
        ["User confirms", true],
        ["Visible intent", true],
      ].map(([label, emphasis]) => (
        <Node emphasis={Boolean(emphasis)} key={String(label)}>
          {String(label)}
        </Node>
      ))}
    </div>
  );
}
export function ScopeConstraintDiagram() {
  return (
    <div
      className="grid gap-x-10 gap-y-8 border-y border-[var(--border)] py-8 md:grid-cols-2"
      data-pinlvtu-diagram="D04"
    >
      <div>
        <p className="type-label">Product Scope Decisions</p>
        <p className="mt-4 leading-8">
          完整地图
          <br />
          真实团购
          <br />
          完整城市数据
        </p>
      </div>
      <div>
        <p className="type-label">Technical Constraints</p>
        <p className="mt-4 leading-8">
          无真实多模态模型
          <br />
          视频抽帧未形成完整管线
          <br />
          deterministic / fallback
          <br />
          无数据库
        </p>
      </div>
      <p className="type-h2 border-t border-[var(--border)] pt-6 text-[var(--accent)] md:col-span-2">
        主动 MVP 取舍 ≠ 技术限制
      </p>
    </div>
  );
}
export function CapabilityBoundaryDiagram() {
  return (
    <div className="border-y border-[var(--border)] py-8" data-pinlvtu-diagram="D05">
      <div className="border-b-2 border-[var(--foreground)] pb-7">
        <p className="type-label text-[var(--foreground)]">01 / REAL PROTOTYPE</p>
        <p className="type-h3 mt-3">
          Feed、Chapter、Selection、Canvas、Companion、Share preview 页面与交互。
        </p>
      </div>
      <div className="ml-[6%] border-b border-[var(--border-strong)] py-7">
        <p className="type-label">02 / DETERMINISTIC DEMO / FALLBACK</p>
        <p className="mt-3 text-[var(--foreground-secondary)]">
          确定性 Chapter / TravelBlock 数据、AI 建议、Scene Question 与分享预览。
        </p>
      </div>
      <div className="ml-[12%] border-b border-dashed border-[var(--border-strong)] py-7 text-[var(--foreground-muted)]">
        <p className="type-label">03 / DESIGNED, NOT IMPLEMENTED</p>
        <p className="mt-3 text-sm">
          真实抽帧/多模态、外部 Model API、数据库、真实发布、地图与支付。
        </p>
      </div>
    </div>
  );
}
