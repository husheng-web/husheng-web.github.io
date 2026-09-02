# 拼旅途 Visual QA Audit

## Scope and evidence

Audited route: `/zh/projects/pinlvtu`

Captured evidence is stored in `artifacts/visual-qa/pinlvtu/`.

- Desktop 1440px: full page, Hero, Context, D01, D02, D03, D04, D05, Result.
- Mobile 390px: Hero, D01, D02, D03, D04, D05, key screenshot area, Result.

The route rendered its six sections and D01 to D05 at both widths with no horizontal page overflow. The screenshots exposed a production-critical media failure: every approved product screenshot completed with natural dimensions `0 × 0` and rendered as a broken-image frame in the browser.

## Visual read

The page has a clear Rational Editorial and Technical Archive baseline: the off-white field, numbered sections, strong display type, restrained orange, and ruled grids are coherent. The strongest visual anchor is D01 on desktop. The case currently loses credibility once it reaches product evidence because the UI images fail to load, and the remaining diagrams are still closer to well-formatted data rows than distinct case-study moments.

## A. Hero

The title, one-line description, and role are legible in the first five seconds. The meaning of the shift from Generate to Compose arrives only after Context, not in the Hero. Desktop Hero carries substantial blank vertical area above and below the title while metadata begins below the fold; mobile is denser and reads more effectively. Metadata does not overpower the project title, but four fields create a long reading sequence on mobile.

## B. Typography

Display, eyebrow, lead and body levels are visibly separated. Chinese body text is readable at the current column width and line-height. The main weakness is that every section returns to the same header plus paragraph pattern, while the diagrams use the same small mono label treatment as metadata. There is no dedicated pull-quote or reading break to create a change of pace.

## C. Section rhythm

Context, Reframing, Product Model, Human Control, Building and Reflection all follow the same reading cadence. D01 provides a needed interruption; D02 and D03 are too compact to create another meaningful visual beat. The current 3-column screenshot placement will be visually weak even after media delivery because vertical phone captures become narrow evidence strips rather than inspectable product proof.

## D. Diagram review

### D01 Generate to Compose

Desktop has the intended strongest orange proposition and a clear left-right comparison. It is the most memorable concept page. On mobile, the two sides become a continuous vertical text stack, so the contrast loses its before/after shape. The central phrase remains strong but needs to remain a visual hinge between two clearly separated states.

### D02 Product Model

TravelBlock has an orange border and label, but it retains the same size, density, and position as the other four nodes. Its supporting provenance, evidenceIds and confidence tags are separated below the chain, weakening the sense that they belong to the central intermediate layer.

### D03 Human Control

The visual hierarchy correctly weakens AI proposes and emphasizes the three user-controlled stages. It remains a static row of equal-width boxes, however, so the directional handoff and the distinction between review and confirmation are not yet immediately felt.

### D04 Scope vs Constraints

The orange statement is prominent and correct. At desktop width, the narrow outer columns cause heavily broken Chinese lines, which makes the two compared sets feel like edge annotations rather than equally legible arguments. At mobile width the intended stack is appropriate, but the key distinction needs a clearer separator than a repeated border treatment.

### D05 Capability Boundary

The intended three evidence states are semantically clear in the DOM. The current treatment is three vertically stacked bordered rectangles, which risks reading as an engineering checklist instead of a confidence boundary. The dashed third layer is useful but does not create enough contrast between real prototype and deterministic demo.

## I. Product screenshots

All eight screenshot renderings are broken in the audited browser. This prevents visual assessment of crop, scale, caption, and gallery rhythm. Even after the delivery issue is resolved, the current all-at-once 3-column desktop grid should be reconsidered: the original 390px-wide, tall product screens require a larger single or paired presentation and selective detail crops to be useful as product evidence.

## J. Mobile

The route has no horizontal overflow, and Hero type remains legible. The four metadata fields form a tall sequence. D01 becomes a vertical content list instead of a comparison, while D02, D03, D04 and D05 use vertically readable layouts. Broken image frames consume large mobile height, producing the most severe reading interruption in the page.

## P0, 必须修改

### P0-01, Approved product media does not render

- Current issue: all product images render with `naturalWidth: 0` and `naturalHeight: 0`; the audit screenshots show broken-image frames and alt text.
- Why it matters: product evidence is absent, large empty frames interrupt the case narrative, and the flagship case reads as incomplete.
- Suggested change: fix locale-safe serving and/or Next Image optimization for `/media/projects/pinlvtu/*`, then re-run visual QA before deciding crop, captions, or gallery density.
- Affected: Desktop and Mobile.
- Components: `components/case-study/pinlvtu-case.tsx`, media delivery configuration.

## P1, 建议修改

### P1-01, D01 loses its comparison structure on mobile

- Current issue: V1, the central proposition, and V2 become one vertical text sequence.
- Why it matters: the core reframing is the case's most memorable claim and must be instantly scannable at 390px.
- Suggested change: preserve a clearly separated V1 to V2 relationship around the central proposition in the mobile composition.
- Affected: Mobile.
- Components: `GenerateComposeDiagram`.

### P1-02, TravelBlock lacks sufficient intermediary-layer weight

- Current issue: D02 gives TravelBlock only a color border; all five nodes retain equal visual mass.
- Why it matters: the product model's main insight is not perceived at a glance.
- Suggested change: make TravelBlock spatially or typographically dominant and bind provenance, evidenceIds, and confidence directly to it.
- Affected: Desktop and Mobile.
- Components: `ProductModelDiagram`.

### P1-03, D04 comparison columns are too narrow at desktop

- Current issue: Chinese scope and constraint labels wrap into short fragments at the outer edges.
- Why it matters: the reader expends effort reconstructing the comparison instead of understanding the MVP distinction.
- Suggested change: give both argument columns usable reading width and treat the orange proposition as a central divider, not as the only readable object.
- Affected: Desktop.
- Components: `ScopeConstraintDiagram`.

### P1-04, D05 reads as a checklist, not an evidence boundary

- Current issue: all three states use similar rectangular containers.
- Why it matters: REAL PROTOTYPE, deterministic demo, and designed-not-implemented must be visibly different confidence levels.
- Suggested change: use a more graded composition through density, line treatment, placement, and label hierarchy while retaining the factual boundary.
- Affected: Desktop and Mobile.
- Components: `CapabilityBoundaryDiagram`.

### P1-05, Screenshot gallery will be too small even after delivery is fixed

- Current issue: the existing three-column grid forces tall 390px-wide screens into narrow columns.
- Why it matters: readers cannot inspect interface decisions that are meant to substantiate the case.
- Suggested change: curate fewer screens per beat, use an enlarged single or split pair, and reserve a grid for secondary evidence.
- Affected: Desktop, then Mobile.
- Components: `Screens`, `PinlvtuCase` section compositions.

### P1-06, Section rhythm repeats a single reading pattern

- Current issue: most sections follow heading, paragraph, ruled diagram, image gallery.
- Why it matters: the long case becomes mechanically paced and undersells the differences between reframing, system model, control, and evidence boundaries.
- Suggested change: introduce layout variation using existing semantic material, such as a pull statement for Reframing, a wider D02 beat, and a deliberate whitespace break before Reflection.
- Affected: Desktop and Mobile.
- Components: `PinlvtuCase`, `CaseSection` composition.

## P2, 可选优化

### P2-01, Bring the Generate to Compose signal closer to Hero

- Current issue: the hero explains the project but the signature reframing is delayed.
- Why it matters: the first screen could communicate the thesis more efficiently.
- Suggested change: add a restrained, non-narrative-changing signal in Hero rather than duplicating D01.
- Affected: Desktop and Mobile.
- Components: `PinlvtuCase`, `CaseHero`.

### P2-02, Rebalance Hero whitespace and metadata fold position

- Current issue: desktop first viewport is generous but metadata starts low; mobile metadata becomes lengthy.
- Why it matters: the first read can feel either under-filled or information-stacked depending on width.
- Suggested change: tune vertical allocation and metadata grouping after media delivery is repaired.
- Affected: Desktop and Mobile.
- Components: `CaseHero`, `PinlvtuCase` hero rail.

### P2-03, Make D03 direction more explicit

- Current issue: the four stages are recognized as labels more than a handoff.
- Why it matters: human control is a key product-thinking claim.
- Suggested change: improve directional sequencing with existing line and spacing language, without adding ornamental animation.
- Affected: Desktop and Mobile.
- Components: `HumanControlDiagram`.

### P2-04, Add media captions only where they clarify evidence

- Current issue: the screenshots currently have one repeated alt text and no visible explanatory caption.
- Why it matters: captions can help distinguish feed, selection, canvas intent, companion and share proof.
- Suggested change: add concise evidence captions after the media rendering problem is fixed. Do not caption every image by default.
- Affected: Desktop and Mobile.
- Components: `Screens`, `PinlvtuCase`.

## Priority summary

- P0: 1
- P1: 6
- P2: 4

## Recommended next phase

Enter a focused Visual Refinement Phase only after P0 media delivery is corrected. Do not add Motion in that phase. The visual thesis remains Rational Editorial × Technical Archive, with D01 as the signature concept anchor and product screenshots as the required proof anchor.
