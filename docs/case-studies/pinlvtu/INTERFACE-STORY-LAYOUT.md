# 拼旅途 Interface Story Layout

## Purpose

将产品截图从统一 Gallery 中拆出，改为按用户任务推进的界面叙事。每一个界面同时说明它解决的产品问题、AI 的工作范围，以及用户保留的决定权。页面继续只使用已冻结的中文案例材料与已确认的原型截图。

| Section           | Interface | User Task                                                        | Product Decision                                               | AI Role                                               | Human Control                        | Desktop Layout                                                | Mobile Layout                            | Media                                      |
| ----------------- | --------- | ---------------------------------------------------------------- | -------------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------ | ------------------------------------------------------------- | ---------------------------------------- | ------------------------------------------ |
| 03.1 / Discover   | Feed      | 从已感兴趣的旅行内容开始，决定是否继续进入理解流程。             | 不要求用户从目的地、日期或行程表单重新描述需求。               | 不在此页直接生成路线；内容成为后续理解的入口。        | 用户决定内容是否进入下一步。         | 左侧大尺寸完整界面，右侧窄解释列。                            | 标题、说明、完整界面。                   | P01 Feed                                   |
| 03.2 / Understand | Chapter   | 阅读被整理的内容，理解其中可被带入旅程的信息。                   | 将旅行内容转化为可阅读、可理解的 Chapter，而不是直接输出路线。 | 将内容组织为 Chapter，并为后续 TravelBlock 提供结构。 | 用户先理解内容，再决定是否进入选择。 | 左侧解释，右侧完整界面；局部裁切补充结构证据。                | 标题、说明、完整界面、局部裁切。         | P02 Chapter                                |
| 03.3 / Select     | Selection | 在候选 TravelBlock 中选择或跳过。                                | 在选择发生之前显示推荐理由、避雷、confidence 与 evidence。     | 提供候选与判断依据，不替用户决定路线。                | 用户 Select / Skip。                 | 标题与说明置顶；完整界面和大尺寸 TravelBlock 裁切形成双证据。 | 标题、说明、完整界面、TravelBlock 裁切。 | P04 Selection                              |
| 03.4 / Compose    | Canvas    | 查看已选择的 TravelBlock，并对建议后的调整作出确认、拒绝或重排。 | 建议先以 visible intent 呈现，不静默改变路线。                 | 提出可见建议，不直接写入用户旅程。                    | 用户确认、拒绝或重新排列。           | 全宽 Default / Intent 1:1 对照。                              | 标题、说明、Default、Intent。            | P05 Canvas default; P05 Canvas intent-only |
| 03.5 / Adapt      | Companion | 在旅行过程中拍一拍或提问，并判断新的场景候选是否进入旅程。       | 将规划延伸到旅行过程，不把规划视作出发前一次完成。             | 提供场景候选与建议。                                  | 新 Block 仍需用户确认。              | 大尺寸单界面，与简短解释并列。                                | 标题、说明、大尺寸界面。                 | P07 Companion                              |
| 03.6 / Share      | Share     | 回看并分享已经拼好的旅程结果。                                   | 以轻量 Demo preview 收束产品体验，不把它作为功能高潮。         | 此页不新增或暗示未实现的 AI 能力。                    | 用户决定是否使用该展示结果。         | 小尺寸界面与轻量说明收尾。                                    | 标题、说明、小尺寸界面。                 | P08 Share                                  |

## Replaced Composition

当前 Reframing 中的 Feed 截图、Product Model 中的 Chapter Gallery、Human-Controlled Experience 中的 Selection、Canvas 与 Companion Gallery，以及 Result 中的 Share 截图，将全部移动到 `03 / Product Experience`。

`04 / Product Model` 仅保留 D02，作为界面体验之后的系统总结；`05 / Human Control` 仅保留 D03，作为 Selection、Canvas 与 Companion 已展示证据的交互原则总结。D01 继续位于 Reframing，D04 与 D05 继续位于 Building the Prototype。

## Layout Rule

桌面端使用宽媒体列与较窄文字列的非对称排版，避免截图和正文被收进同一个窄容器。移动端统一为标题、短说明、完整界面、必要时局部裁切；Canvas 明确保留 Default 到 Intent 的上下关系。所有 UI 保持真实原型边界，不新增 Motion、不改写 Narrative、不新增英文内容。
