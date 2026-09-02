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

export function GenerateComposeDiagram() {
  return (
    <div
      className="grid gap-6 border-y border-[var(--border)] py-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center"
      data-pinlvtu-diagram="D01"
    >
      <div className="space-y-3 opacity-65">
        <p className="type-label">V1 / Generate</p>
        <p>旅行攻略 → 规则 / Mock 拆解 → 路线模块 → 路线草稿</p>
      </div>
      <p className="type-h2 text-[var(--accent)]">Generate → Compose</p>
      <div className="space-y-3">
        <p className="type-label text-[var(--accent)]">V2 / Compose</p>
        <p>旅行内容 → Chapter → TravelBlock → Selection → Canvas</p>
      </div>
    </div>
  );
}
export function ProductModelDiagram() {
  return (
    <div className="border-y border-[var(--border)] py-8" data-pinlvtu-diagram="D02">
      <div className="grid gap-3 md:grid-cols-5">
        {["Content", "Chapter", "TravelBlock", "Selection", "Canvas"].map((name) => (
          <Node emphasis={name === "TravelBlock"} key={name}>
            {name}
          </Node>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="type-meta border border-[var(--border)] px-2 py-1">
          provenance：来源 / 导入链路
        </span>
        <span className="type-meta border border-[var(--border)] px-2 py-1">
          evidenceIds：证据引用
        </span>
        <span className="type-meta border border-[var(--border)] px-2 py-1">
          confidence：置信表达
        </span>
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
      className="grid gap-6 border-y border-[var(--border)] py-8 md:grid-cols-[1fr_auto_1fr]"
      data-pinlvtu-diagram="D04"
    >
      <div>
        <p className="type-label">Product Scope Decisions</p>
        <p className="mt-4">
          完整地图
          <br />
          真实团购
          <br />
          完整城市数据
        </p>
      </div>
      <p className="type-h2 self-center text-[var(--accent)]">
        主动 MVP 取舍 ≠ 技术限制
      </p>
      <div>
        <p className="type-label">Technical Constraints</p>
        <p className="mt-4">
          无真实多模态模型
          <br />
          视频抽帧未形成完整管线
          <br />
          deterministic / fallback
          <br />
          无数据库
        </p>
      </div>
    </div>
  );
}
export function CapabilityBoundaryDiagram() {
  return (
    <div
      className="space-y-3 border-y border-[var(--border)] py-8"
      data-pinlvtu-diagram="D05"
    >
      <div className="border border-[var(--foreground)] p-5">
        <p className="type-label">REAL PROTOTYPE</p>
        <p className="mt-3">
          Feed、Chapter、Selection、Canvas、Companion、Share preview 页面与交互。
        </p>
      </div>
      <div className="border border-[var(--border-strong)] p-5">
        <p className="type-label">DETERMINISTIC DEMO / FALLBACK</p>
        <p className="mt-3">
          确定性 Chapter / TravelBlock 数据、AI 建议、Scene Question 与分享预览。
        </p>
      </div>
      <div className="border border-dashed border-[var(--border-strong)] p-5 text-[var(--foreground-muted)]">
        <p className="type-label">DESIGNED, NOT IMPLEMENTED</p>
        <p className="mt-3">
          真实抽帧/多模态、外部 Model API、数据库、真实发布、地图与支付。
        </p>
      </div>
    </div>
  );
}
