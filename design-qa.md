# Design QA — Caldera-inspired portfolio

## Comparison target

- Source visual truth: `C:\Users\DELL\.codex\generated_images\01a0623f-f969-73b0-b58e-1583f9909866\exec-81a05ca5-cb89-4bcd-b89e-1df26ec2093b.png` (selected option 1).
- Implementation: browser-rendered `http://localhost:3000/zh`, captured in the Codex in-app browser, tab `1`.
- Desktop viewport: 1280 × 800 CSS px, device scale factor 1. The source is 1600 × 1000 px; comparison used the same landscape hero composition rather than a density-normalized pixel clone.
- Mobile viewport: 390 × 844 CSS px, device scale factor 1.
- State: default home view, navigation closed.

## Comparison evidence

The selected source and the browser-rendered hero were visually compared in the same review pass. Both use the same intended hierarchy: a compact oversized black display headline at left, small ember label and paired pill actions below, a warm-pumice canvas, and a dominant blue-violet halftone portrait at right. The implementation intentionally replaces the source mock’s invented person and text with Hu Sheng’s verified portfolio copy and an original generated illustration.

Focused review covered the desktop hero and mobile hero separately because their line wrapping and navigation differ by breakpoint.

## Findings

- [Resolved P1] Hero had no real illustrative asset, making the visual language materially flatter than the selected target.
  - Fix: generated and added `public/media/brand/caldera-hero-halftone.png`; placed it in a responsive right-hand hero panel.
- [Resolved P2] Original token set used a neutral editorial palette that did not carry the supplied Caldera guide.
  - Fix: mapped warm pumice, limestone, ember, sulfur, and plasma-violet to shared tokens and re-applied them across home/profile/archive surfaces.
- [Resolved P2] Desktop title was initially too narrow and broke into five lines.
  - Fix: widened the title measure and reduced its desktop scale. The final desktop view uses a four-line compact display treatment without clipping.

## Required fidelity surfaces

- Fonts and typography: compact heavy display hierarchy, mono labels, ordinary body copy, controlled Chinese wrapping; no truncation observed at 1280px or 390px.
- Spacing and layout rhythm: 80px-scale section cadence, 40px card geometry, flat 1px outlines, intentionally large hero negative space; mobile stacks without horizontal overflow.
- Colors and visual tokens: warm `#e2e2df` canvas, ember `#fc5000`, plasma violet `#524ae9`, sulfur `#f5f28e`, and obsidian foreground are applied as semantic tokens.
- Image quality and asset fidelity: hero uses an original high-resolution generated raster halftone asset; supplied portrait and project media remain real image files. No CSS-drawn image substitutes were introduced.
- Copy and content: retained existing verified Chinese portfolio, education, work history, project, and language content; no mock-only names or metrics were carried over.

## Interactions tested

- Header exposes working routes for projects, about, resume, and locale switch in desktop view.
- The 390px view collapses navigation into its menu button.
- Hero calls to action retain direct routes to projects and about.

## Implementation checklist

- [x] Rebuild shared tokens and global visual system.
- [x] Add original hero illustration and responsive placement.
- [x] Apply the design system to home, profile, and project archive surfaces.
- [x] Verify type checking, linting, production build, and desktop/mobile render.

## Follow-up polish

- [P3] A licensed condensed Chinese display font could make the headline even closer to the target; the current system fallback prioritizes reliable local rendering.

## 2026-09-02 follow-up implementation

The home hero and 拼旅途 case study were subsequently rebuilt from the approved hero image and the Caldera Era/video references. Code validation passed, but the Chrome automation transport closed during the required browser reload, so this follow-up visual pass remains unverified.

final result: blocked

## 2026-09-13 Home Hero editorial rebuild

### Comparison target

- Source visual truth: user-provided Hero reference, `C:\Users\DELL\AppData\Local\Temp\codex-clipboard-5d03681f-87db-4b14-917b-b97882427f5b.png` (985 × 519 px).
- Implementation: Chrome-rendered `http://localhost:3000/zh`, default home state with mobile navigation closed.
- Desktop comparison viewport: 985 × 519 CSS px (Chrome reports a 970 px content width after browser chrome scaling); device density was not overridden.
- Mobile validation viewport: 390 × 844 CSS px (Chrome reports a 375 px content width after browser chrome scaling); device density was not overridden.

### Evidence and normalization

The supplied reference and the Chrome-rendered Hero were inspected in the same visual review pass at the matching 985 × 519 desktop viewport. The reference is a cropped Hero-only image while the implementation includes the requested navigation, so comparison focused on the shared Hero region: three-line title, left/right proportion, orange CTA, blue-violet halftone subject, orange dot field, and warm off-white canvas. Chrome capture was inspected directly in the current browser session; this browser integration exposes capture output for review but does not provide a filesystem screenshot path.

Focused review covered the headline / CTA region and the portrait / dot-field region. A separate mobile capture checked source-order, title wrapping, visual crop, no horizontal overflow, and the mobile navigation state.

### Comparison history

- [P2, fixed] At the 985 × 519 reference-sized desktop viewport, the initial visual minimum height placed the primary CTA below the fold.
  - Fix: reduced the desktop visual's lower bound from `34rem` to `25rem`, while retaining the `64vh` preferred scale on taller desktop displays.
  - Post-fix: CTA bounds end at 497 px in the 519 px viewport; it remains fully visible.

### Required fidelity surfaces

- **Fonts and typography:** The existing compact display stack is retained, with `900` weight, `0.91` line-height, negative tracking, and three explicit Chinese line wrappers. No title truncation or accidental fourth / fifth line was observed. Navigation and supporting copy remain materially lighter.
- **Spacing and layout rhythm:** The desktop Hero uses a 54/46 grid with shared 5vw page edges. At reference size, title starts at 49 px, visual starts at 530 px, and CTA remains within the viewport. Mobile stacks title, visual, copy, then CTA; `scrollWidth` equals `clientWidth` (375 px), so no horizontal overflow was observed.
- **Colors and visual tokens:** The implementation reuses `--surface`, `--foreground`, `--accent`, and `--plasma-violet`; the Signal Orange CTA and dot field preserve the reference's single high-emphasis color.
- **Image quality and asset fidelity:** The existing original blue-violet raster halftone asset is retained, enlarged and bottom-masked without a card border or radius. Its RGB background cannot become a truly transparent cutout, but `mix-blend-mode` and the shared warm canvas visually reduce the rectangular boundary. This is an acceptable P3 difference under the approved asset constraint.
- **Copy and content:** The Hero now uses a concise, non-fabricated self-introduction, a single project CTA, and a localized name / role lockup. No unverified history, metrics, or contact information was added.

### Interaction and accessibility checks

- The primary CTA resolves to `/zh/projects`.
- The mobile menu opens and closes successfully; the navigation remains keyboard-operable through the existing component.
- The Hero image remains decorative (`alt=""`, `aria-hidden` visual wrapper), while the H1 and CTA retain semantic labels.
- The existing reduced-motion preference is respected by the Hero's opacity / translate / scale transitions.
- Browser console review found no application errors. The only Hero-related warning occurred during an earlier hot-update frame before the visual wrapper's CSS settled; the final rendered state had the expected positioned, non-zero visual area.

### Follow-up polish

- [P3] A future transparent portrait source could remove the remaining faint raster rectangle completely. It is not required for the approved rebuild.

### Final result

passed

## 2026-09-13 首页下半区 Caldera Era 重构

### Comparison target and evidence

- Source visual truth: `C:\Users\DELL\.codex\attachments\465f2580-216f-41e2-97b1-574ed9872011\image-1.png` (1024 × 1536 px approved lower-home prototype).
- Implementation: `http://localhost:3000/zh#selected-works`, rendered in the Codex in-app browser (tab `1`). The desktop review used a 1440 × 1100 CSS viewport; the mobile review used 390 × 844 CSS px, with the document reporting 375 × 375 CSS px `clientWidth` / `scrollWidth` after browser scaling.
- State: default Chinese home page; lower sections contain the existing Builder Archive, selected works, capability framework, proof, next-step, and footer content.
- Full-view evidence: the reference was opened beside the browser review in the same QA pass. The desktop capture verified the black capability panel, proof cards, next-step block, header, and shared background; a focused mobile capture verified project-card stacking.
- Focused region evidence: Builder Archive / featured-project hierarchy and the Capability / Proof / Next Step sequence were reviewed separately because the full-page source is taller than the browser viewport.

### Comparison history

- [P1, fixed] The first lower-home implementation made the internal working-system copy the principal heading, which weakened the approved prototype's section-name-led editorial hierarchy.
  - Fix: the existing section names (构建者档案、能力框架、实践证明、下一步) now become the display anchors, while the existing working-system / capability / practice / contact copy is retained as secondary information.
  - Post-fix evidence: browser accessibility tree and desktop render confirm the intended display-title followed by secondary heading across all four sections.
- [P1, fixed] The lower sections did not share a single Caldera-style surface system.
  - Fix: rebuilt them around warm pumice canvas, limestone cards, low-radius large panels, dotted rules, ember feature/action color, and an obsidian capability/contact contrast block; added a real raster halftone asset for the Builder Archive rather than a CSS substitute.
  - Post-fix evidence: desktop capture shows the shared panel geometry and color hierarchy from Builder Archive through the footer.

### Required fidelity surfaces

- **Fonts and typography:** display headings use the existing compact, heavy display stack with controlled negative tracking; rail labels use the mono style; factual supporting copy remains readable and unmodified. No truncation was observed in desktop or mobile inspection.
- **Spacing and layout rhythm:** all lower sections use the same container edges, 1.5px dotted rails, substantial section gaps, and consistently rounded large surfaces. Desktop uses a feature-project-plus-three-archive-card grid; mobile stacks cleanly.
- **Colors and visual tokens:** warm neutral canvas, limestone surfaces, obsidian contrast panels, a single ember-orange feature/action color, and a restrained violet Builder Archive illustration follow the approved Caldera-inspired palette.
- **Image quality and asset fidelity:** Builder Archive uses `public/media/brand/builder-archive-halftone.png`, an actual generated raster asset. The featured project retains the existing verified project cover, rather than replacing its content with the mockup's invented landscape. No decorative mock asset was recreated with inline SVG or CSS shapes.
- **Copy and content:** existing Builder Archive, projects, capability groups, verified/pending practice language, actions, and footer content remain intact. Only visual hierarchy was changed.

### Checks

- `npm run lint` — passed.
- `npm run typecheck` — passed.
- `npm run build` — passed; all 15 static pages generated.
- Desktop browser review — passed for section sequence, panel geometry, contrast, and primary links.
- Mobile browser review — passed; `scrollWidth === clientWidth === 375`, and browser console error list was empty.

### Follow-up polish

- [P3] The source prototype includes bespoke outline icons on its archive and evidence cards. They were intentionally not substituted with mismatched glyphs; they can be added later from a single licensed icon set if the visual reference is to be matched beyond the established shared system.

### Final result

passed

## 2026-09-13 Site-wide Caldera system pass

### Source and implementation

- Source visual system: user-provided `design.md`, read from `C:\Users\DELL\.codex\attachments\7c86130f-de2f-41c8-acdf-87494f92f0a1\pasted-text.txt`.
- Chrome-rendered implementation routes: `/zh`, `/zh/projects`, `/zh/projects/pinlvtu`, `/zh/about`, and `/zh/resume`.
- Desktop review used the normal Chrome viewport. Mobile review used a 390 × 844 CSS viewport override; the page reported `scrollWidth === clientWidth === 375`, so no horizontal overflow was present.

### Findings

- [P1, fixed] The original 关于 / 简历 routes ended in a generic content-pending panel, which broke continuity with the verified personal profile available on the home page.
  - Fix: reused the verified profile, education, work, language, and tools block beneath purpose-specific page headings.
- [P1, fixed] The 拼旅途 title was forced into an excessively narrow column and fractured into unintentional lines.
  - Fix: gave the case title three explicit editorial lines and reduced the display range; the final Chrome check shows the headline, summary, and violet project media together.

### Required fidelity surfaces

- **Typography:** Existing compact display type remains structural; global body / navigation weight is medium, while the approved Chinese Hero keeps its language-specific tight tracking.
- **Spacing and layout:** Shared 1280px page container, 80px-scale section rhythm, 40px content surfaces, and full-pill controls are applied across archive, profile, cases, and utility pages.
- **Colors:** Pumice canvas, Limestone surfaces, Obsidian copy, Ember action color, Sulfur tags, and Plasma Hero surfaces are mapped to shared semantic aliases.
- **Images:** Existing supplied project and profile media remain in place; no placeholders or generated replacement artwork were introduced.
- **Copy:** About and resume routes expose only facts already present in the profile component; no new personal claims were added.

### Checks

- `npm run lint`, `npm run typecheck`, and `npm run build` all passed.
- Chrome confirmed primary navigation states for projects, about, resume, and language switching routes.
- Chrome desktop review confirmed archive cards, Pinlvtu Hero, and profile surfaces use the flat, shadowless system.

### Follow-up polish

- [P3] The mobile browser capture transport rendered at a scaled display size despite the browser reporting the correct 375px document width. DOM overflow evidence is valid; a later manual device pass can refine crop density if needed.

### Final result

passed

## 2026-09-14 拼旅途 02–09 项目预览替换

### 比较目标与证据

- Source visual truth: `public/media/projects/pinlvtu/modules/02-project-origin.png` (2560 × 1602 px) through `09-reflection-next.png` (2560 × 1601 px). The first and final artwork were opened for direct visual review; each of the eight files is the approved module source.
- Implementation: Chrome-rendered `http://localhost:3000/zh/projects`, with the 拼旅途 project preview dialog open.
- Desktop viewport: 1536 × 695 CSS px at `devicePixelRatio: 1.25`; the module reader measured `1151px` for both `clientWidth` and `scrollWidth`.
- Mobile viewport: 390 × 844 CSS px, temporarily applied in Chrome and reset after the check. The module reader measured `326px` for both `clientWidth` and `scrollWidth`.
- Browser screenshot evidence: Chrome captures were inspected in the active Chrome session. The computer-use capture channel exposes rendered pixels directly but does not save a filesystem screenshot path. The desktop capture showed module 02; the focused continuation and mobile capture showed later module artwork, including 07–09.
- State: Chinese project archive, first project card selected, dialog fully entered. The source artwork is intentionally read as a vertical, continuous sequence, so no density normalization or crop adjustment was applied.

### Comparison history

- [P1, fixed] The earlier implementation put 02–09 into the standalone `/zh/projects/pinlvtu` detail page instead of the project archive preview selected in the approved reference.
  - Fix: removed the new module-artwork injection from the detail page; added a 拼旅途-only reader in the project archive dialog. The reader maps the eight actual assets in 02–09 order and hides the dialog’s "查看案例" link for this project.
  - Post-fix evidence: Chrome accessibility tree exposes exactly eight image labels, from `拼旅途 02 / 项目起点` to `拼旅途 09 / 反思与下一步`; `detailLinks: 0` in the live dialog.

### Required fidelity surfaces

- **Fonts and typography:** The dialog preserves the existing heavy project title, mono metadata, and compact footer copy. Module typography comes from the approved 2560px source boards and is not re-typeset or truncated by the implementation.
- **Spacing and layout rhythm:** The existing rounded, fixed-height archive dialog remains unchanged. The new reader uses the same continuous document-reader behavior as other project documents; it scrolls vertically within the black reading field without expanding the dialog or the page.
- **Colors and visual tokens:** The dialog retains the site’s warm surface, obsidian reader field, signal-orange metadata, and existing radius token. Each source board keeps its approved warm-paper / black / orange composition unchanged.
- **Image quality and asset fidelity:** All eight displayed resources are the project-local 2560px PNG assets under `public/media/projects/pinlvtu/modules/`. Chrome reports all eight images loaded (`loadedImages: 8`); no placeholder, CSS recreation, or cropped substitute is used.
- **Copy and content:** Existing project-card title, category, status, and short description remain unchanged. The prior preview document is replaced by the requested 02–09 sequence; the standalone detail-page link is intentionally absent from this dialog.

### Checks

- `npm run lint` — passed.
- `npm run typecheck` — passed.
- `npm run build` — passed; production compilation and static generation completed.
- Chrome desktop — passed: eight ordered module images, no horizontal overflow, no preview-detail link.
- Chrome mobile — passed: `clientWidth === scrollWidth === 326px`, eight images loaded, and the mobile capture shows readable vertically scaled boards without page-width overflow.
- Chrome console errors — none.

### Final result

passed
