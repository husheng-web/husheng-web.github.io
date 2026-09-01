# Reference Website Audit

## 1. Executive Summary

**Audit target:** `https://liucs-xanny.github.io/liu-changsheng-portfolio/`
**Audit date:** 2026-09-01
**Method:** live desktop and narrow-viewport inspection, DOM/semantic inspection, computed-style sampling, route inspection, and saved screenshots.

The reference is a long-form, single-page portfolio that behaves like an editorial personal-brand narrative: identity first, structured profile second, project evidence third, capability connections fourth, proof fifth, and contact last. Its strongest transferable mechanism is not a particular illustration, color, or layout: it is the combination of oversized type, a stable section-number grammar, wide editorial rhythm, and metadata-rich project records.

For our AI Product Builder portfolio, use that **logic**, but do not reproduce its dark illustrated hero, its personal copy, its individual project card composition, or its mixed-language presentation. Our system needs a real `/zh` and `/en` architecture, truthful pending states, and a project archive that can accommodate AI, service, digital, research, and industrial-design work without forcing a single visual genre.

### Evidence confidence

| Status          | Meaning                                                                     |
| --------------- | --------------------------------------------------------------------------- |
| **OBSERVED**    | Seen in the current live audit, screenshot, DOM, or computed style.         |
| **APPROXIMATE** | A visual or responsive estimate; not a source-code claim.                   |
| **UNVERIFIED**  | Not safely confirmed in this audit; no design decision should depend on it. |

## 2. Reference Website Overview

**OBSERVED:** The home page is a one-page portfolio with anchor navigation: `ABOUT`, `WORK`, `SKILLS`, and `CONTACT`. Its sections appear in this order:

1. Hero / `PORTFOLIO`
2. `02 / ABOUT ME` / `DESIGNER DASHBOARD`
3. `03 / SELECTED WORKS` / `PROJECT ARCHIVE`
4. `04 / SKILLS MAP` / `DESIGN × AI × PRODUCT`
5. `05 / EXPERIENCE & AWARDS` / `PROOF OF PRACTICE`
6. `06 / CONTACT` / oversized closing statement

The first reading path answers identity before credentials, then shows work before claims, and ends with a direct contact opportunity. It is closer to a **portfolio archive with a personal-brand narrative** than to either a conventional résumé or a product landing page.

## 3. Design DNA

| DNA element               | Where it appears                                                       | Interpretation                                                                  |
| ------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Editorial                 | numbered chapters, large headlines, long reading sequence              | The page feels authored as a publication rather than assembled from components. |
| Archive                   | project indices, dates, English names, Chinese names, tags, case links | Work is treated as an indexed body of evidence.                                 |
| Technical-personal hybrid | dashboard, system tags, capability-to-project links                    | Personal profile is framed as a working system, not a biography paragraph.      |
| High-contrast typography  | hero, section titles, closing CTA                                      | Type, rather than decorative UI, establishes most hierarchy.                    |
| Image-led identity        | illustrated hero, portrait/work images, project covers                 | Images create tone and proof, while text provides taxonomy.                     |
| Controlled variation      | dark, blue, light proof, dark contact zones                            | Section color shifts reset attention without changing the core grammar.         |

## 4. Information Architecture

| Section    | Information task                                     | Why this position works                                         | Our recommendation                                                                |
| ---------- | ---------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Hero       | Establish a memorable identity and entry point.      | It gives a recruiter immediate orientation before detail.       | Adapt: lead with AI Product Builder positioning, not a decorative identity scene. |
| Dashboard  | Convert biography into structured signals.           | It supplies credibility before the work archive.                | Adapt, but only with verified profile data.                                       |
| Archive    | Supply primary proof through projects.               | Work arrives before skill/proof claims.                         | Borrow the evidence-first ordering.                                               |
| Skills map | Explain cross-project capabilities.                  | It helps readers connect a pattern across the preceding work.   | Adapt to a Capability Map backed by registry data.                                |
| Proof      | Add concise validation after the reader has context. | Awards/experience support the story rather than lead it.        | Adapt as a narrow evidence layer; do not duplicate the résumé.                    |
| Contact    | Turn the end of the narrative into an action.        | A deliberate final statement gives the long scroll an endpoint. | Adapt after approved contact details exist.                                       |

**Narrative conclusion:** projects should remain the centre of gravity. For our portfolio, `How I Build` can sit between selected work and capability map, because it explains the AI Product Builder method without turning the home page into a résumé.

## 5. Typography

### Observed hierarchy

The following values are sampled from the live page at a 1440 px viewport; they are evidence about the reference, not token values to copy.

| Element               | Visual role         | Approx. scale | Weight / case                            | Notes                                                     |
| --------------------- | ------------------- | ------------: | ---------------------------------------- | --------------------------------------------------------- |
| Hero `PORTFOLIO`      | identity device     |      230.4 px | uppercase, 400, very tight tracking      | Spans nearly the full content width.                      |
| Section headings      | chapter markers     |        128 px | uppercase, 400, multi-line               | `DESIGNER DASHBOARD`, `PROJECT ARCHIVE`, etc.             |
| Project Chinese title | work-level evidence |         60 px | Chinese mixed case, 600                  | Sits over/within image-led archive entries.               |
| Case-study hero title | project identity    |         96 px | Chinese, 400                             | Uses a full-bleed image field as backdrop.                |
| Metadata / labels     | indexing layer      |     ~12–16 px | uppercase English or compact Chinese     | Includes section numbers, dates, roles, tags, CTA labels. |
| Body / explanation    | reading layer       |        ~16 px | Chinese body with English support labels | Carries profile and case-study detail.                    |

### Responsive observation

**OBSERVED:** at 375 px, hero type is approximately 60 px and section headings are 48 px; project headings are approximately 30 px. At 768 px, hero type is approximately 123 px; at 1024 px it is approximately 164 px. This is a true scale change, not simple desktop clipping.

### Recommendation

Borrow the hierarchy principle: one display scale, one chapter scale, one project scale, and a compact metadata scale. Adapt it for Chinese by constraining line length and using `clamp()` ranges that protect 375 px. Our English locale must use its own readable widths rather than reproducing Chinese/English overlap as an aesthetic.

## 6. Grid & Layout

**OBSERVED:** at 1440 px, principal section headings begin around 64 px from the left edge and common content sections span approximately 1297 px. Project articles are wide image-led bands; the first measures approximately 1203 px and subsequent entries become incrementally narrower and more inset.

**Interpretation:** the sense of quality is driven primarily by a shared left anchor, very wide type, full-width section fields, and deliberate whitespace—not by a card-grid surface treatment.

**Recommendation:** establish a stable content container, a wider media container, and one readable case-study text measure. Do not reproduce the progressively inset project geometry unless it demonstrably improves our content; a consistent archive grid will better accommodate ten heterogeneous projects and missing covers.

## 7. Spacing & Rhythm

**OBSERVED:** at 1440 px the hero occupies one viewport-height section (~960 px). The About section begins immediately after it and extends roughly 1436 px; the archive begins around y=2396 px and is the longest chapter; the Skills and Proof chapters use shorter, high-contrast resets.

| Level     | Reference relationship                             | Our Phase 2 rule                                           |
| --------- | -------------------------------------------------- | ---------------------------------------------------------- |
| Micro     | tag gaps, label-to-title, inline metadata          | compact and consistent; use tokens, not arbitrary margins. |
| Component | title-to-summary, media-to-caption, card internals | preserve visible hierarchy before adding decoration.       |
| Section   | chapter label -> display title -> content          | give this sequence a repeatable vertical rhythm.           |
| Macro     | hero -> profile -> archive -> proof -> contact     | treat chapter transitions as intentional reading pauses.   |

The measurements above are **APPROXIMATE** relationships, not a spacing scale to clone. Our spacing token system should be based on content density and responsive intent, not copied pixel distances.

## 8. Color

**OBSERVED:** the default page field is a near-black neutral (computed body sample: `rgb(17, 16, 14)`), with warm off-white text. The reference uses a saturated blue chapter for Skills and an off-white chapter for Proof; the contact area returns to dark. Project imagery contributes substantial identity color.

**Interpretation:** the system depends on a neutral base plus episodic section fields and image color, rather than an accent color applied to every component.

**Recommendation:** retain our neutral base and one replaceable accent token. Use accent color for state, indexing, or a single chapter-level intervention only after brand direction is approved. Do not copy the reference’s blue or its illustrated-image dependency.

## 9. Designer Dashboard

**OBSERVED:** the About chapter combines a portrait and in-practice image, identity strip, bio panel, education panels, compact metrics, language information, and system tags under the label `DESIGNER DASHBOARD`.

**Interpretation:** the dashboard makes many profile facts scannable and presents the individual as a coherent operating system. It earns its density because the surrounding page is sparse.

**Our adaptation:** promising, but conditional. A future profile module could be named a Builder Dashboard, Product System Dashboard, or Profile System; no label is decided. It should only surface owner-approved identity, education, focus, proof, and current direction. No decorative metrics or inferred tools.

## 10. Project Archive

### Observed content hierarchy

Each observed project article contains: index, period, English title, Chinese title, one-line summary, tags, cover image, and `VIEW CASE` CTA. The archive heading frames these as a digital archive, not as a set of cards.

### Why it reads as an archive

- index and period allow scanning as a catalogue;
- tags preserve taxonomy without taking over the page;
- large covers work as evidence, while metadata remains an overlay/supporting layer;
- repeated article grammar makes different projects comparable;
- the archive is vertically sequential, encouraging a reading order.

### Our adaptation

This model can contain AI Product, web, service design, industrial design, and research because it separates **core registry fields** from the visual cover. For our v1:

- keep `index`, localized title, content status, optional category/tags, and a status-aware CTA;
- reveal year/role/summary/media only when verified;
- make `content-pending` an honest archive state—not a fake project preview;
- use one consistent archive skeleton instead of image-first treatment where a cover is absent.

## 11. Skills Map

**OBSERVED:** `DESIGN × AI × PRODUCT` presents capability buttons and an `ACTIVE CAPABILITY` area with `RELATED PROJECTS`. The initial rendered state is `AI Product` and lists linked projects.

**Interpretation:** the component shifts skills from a static résumé list to a relational map: capability -> evidence.

**UNVERIFIED:** switching among capability buttons was not confirmed in the current run; the existence of interactive buttons and the initial related-project state is observed, but transition behavior and all filter states are not.

**Our recommendation:** build a data-backed Capability Map later around `Product & Strategy`, `Experience & Systems`, `AI Product`, and `Build & Communication`. It should only expose relationships present in the project registry. A tag without evidence should remain a tag, not an interactive claim.

## 12. Experience / Proof

**OBSERVED:** the `PROOF OF PRACTICE` chapter uses compact chronological entries for awards, intellectual-property/progress, software copyright, and organisational experience.

**Interpretation:** it is positioned after work to validate—not replace—project evidence. In hiring terms, this becomes a credibility layer after the reader already understands what the person builds.

**Our recommendation:** use a short proof timeline only for approved, material evidence. Keep full education/employment detail on Resume; avoid an awards wall or repeated résumé timeline.

## 13. Navigation

**OBSERVED:** desktop navigation exposes About, Work, Skills, and Contact as in-page anchors. Clicking `ABOUT` moved the viewport to the About chapter in this audit. The header remains visible across contrasting chapter backgrounds.

**OBSERVED:** at 375 and 390 px the desktop navigation is hidden and a labelled `MENU` button is shown. Its open state changes to `CLOSE` and displays the four anchor links. The trigger has an accessible label (`Toggle menu`).

**Accessibility limitation:** the inspected mobile trigger did not expose an `aria-expanded` value. Keyboard behaviour, focus trap, focus restoration, scroll lock, and transition timing are **UNVERIFIED**.

**Our recommendation:** use the reference’s compact mobile disclosure concept, but implement route navigation (`Projects`, `About`, `Resume`) plus locale switching, Escape handling, focus management, and `aria-expanded` from the start.

## 14. Contact / Footer

**OBSERVED:** the final chapter uses an oversized multi-line contact statement, then pairs identity/location with Resume, Email, and Back-to-top actions. The contact content functions as a narrative finale rather than a low-emphasis footer.

**Our recommendation:** reserve the same structural role, but do not choose a final personal slogan before owner approval. Until verified email/resume details exist, use a restrained pending state rather than non-functional CTAs.

## 15. Motion & Interaction

| Interaction                     | Trigger                                           | Observed effect                                               | Purpose                                | Recommendation                                                 |
| ------------------------------- | ------------------------------------------------- | ------------------------------------------------------------- | -------------------------------------- | -------------------------------------------------------------- |
| Anchor navigation               | desktop nav `ABOUT`                               | viewport moved to target chapter                              | shortens a long one-page scan          | Adapt as route/anchor navigation where appropriate.            |
| Mobile menu                     | `MENU` button                                     | label becomes `CLOSE`; anchor links become visible            | preserves compact hero at narrow width | Adapt with accessible state management.                        |
| Active capability state         | initial page render                               | `AI Product` is shown with related projects                   | connects capability to evidence        | Adapt, data-backed.                                            |
| Eye-following hero character    | page exposes an accessibility label describing it | **UNVERIFIED** visual motion; pointer response was not tested | decorative personality                 | Avoid unless it supports our identity and reduced-motion path. |
| Project hover                   | **UNVERIFIED**                                    | no reliable hover state captured                              | feedback/preview                       | Do not decide from this audit.                                 |
| Scroll reveal / page transition | **UNVERIFIED**                                    | not isolated from ordinary scrolling                          | pacing                                 | Use only after Phase 2 defines a reduced-motion-safe utility.  |

## 16. Responsive Behavior

| Viewport checked | Observed behavior                                                                                                                      | Assessment                                                    |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 375 px           | hero ~60 px; chapter headings ~48 px; desktop nav hidden; labelled menu shown; project articles ~301 px wide; body scroll width 360 px | readable hierarchy retained, no horizontal overflow observed. |
| 390 px           | hero ~62 px; nav hidden; article ~315 px wide; body scroll width 375 px                                                                | same narrow-screen mode.                                      |
| 768 px           | hero ~123 px; desktop nav visible; article ~632 px wide                                                                                | desktop navigation returns at tablet width.                   |
| 1024 px          | hero ~164 px; desktop nav visible; article ~828 px wide                                                                                | desktop scale expands smoothly.                               |
| 1440 px          | hero 230.4 px; wide editorial columns; full archive treatment                                                                          | intended primary composition.                                 |

**UNVERIFIED:** exact breakpoint source rules, keyboard reflow at browser zoom, and all mobile project/detail states.

## 17. Case Study

### Observed route and narrative

The inspected project route has a full-bleed image hero followed by `01 / OVERVIEW`, `02 / PROBLEM`, `03 / MY ROLE`, `04 / RESEARCH`, `05 / STRATEGY`, `06 / WORKFLOW`, `07 / DESIGN OUTPUT`, `08 / RESULT`, `09 / REFLECTION`, and a Next Case link. It also includes rich media and a project-document link.

### Layout evidence

At 1440 px, the case hero fills roughly one viewport height. The project title sampled at 96 px. Content sections use a wide ~1297 px region, while design-output media is held in a narrower central column (about 1010 px); the gallery uses two image columns around 494 px each.

### Our adaptation

Borrow the composable chapter order, media hierarchy, and next-project handoff. Do not require every project to render every chapter. For our `content-pending` records, only an honest hero/status state is appropriate; no synthetic case narrative or fabricated results.

## 18. Chinese / English Treatment

**OBSERVED:** the reference combines English uppercase for labels, chapter names, role naming, and project aliases with Chinese for explanatory content and primary project titles. It does not expose a Chinese/English locale switch in the inspected navigation.

**Interpretation:** this is a bilingual-looking editorial aesthetic, not evidence of a true bilingual information architecture.

**Our recommendation:** retain English only as a controlled metadata/brand layer on `/zh`; use separate translated content on `/en`. The two routes must preserve semantic equivalence, metadata, and page mapping rather than simply repeating mixed-language visual treatment.

## 19. Strengths

- Clear end-to-end narrative and immediate identity recognition.
- Strong project evidence: index, date, title, summary, tags, image, and case link are co-located.
- Type and whitespace create hierarchy without relying on generic SaaS decoration.
- Dashboard and Skills Map turn personal information into linked systems.
- Case study has a readable progression from premise to reflection.
- Responsive type reduces substantially on mobile rather than overflowing.

## 20. Weaknesses and Risks

- The hero’s illustrated identity is highly personal; it is not a transferable solution without equivalent, approved assets.
- Very large display type can reduce scanning efficiency, shorten content capacity, and create fragile Chinese line wrapping.
- Project entries are visually rich but can become expensive in media weight and hard to maintain when covers are missing.
- Mixed Chinese/English styling can be mistaken for complete bilingual support.
- Mobile menu state needs further keyboard/focus validation; `aria-expanded` was not observed.
- The dense dashboard risks becoming a fact dump if profile metrics and tags are not evidence-backed.

## 21. Borrow / Adapt / Avoid

| Feature                  | Borrow | Adapt | Avoid | Reason                                                                      |
| ------------------------ | :----: | :---: | :---: | --------------------------------------------------------------------------- |
| Typography hierarchy     |   ✓    |       |       | Type-first hierarchy fits editorial product evidence.                       |
| Section numbers          |   ✓    |       |       | A reusable reading grammar for long-form pages.                             |
| Hero                     |        |   ✓   |       | Use positioning and type, not copied art or personal visual language.       |
| Dashboard                |        |   ✓   |       | Build only from verified profile data; name remains open.                   |
| Project Archive          |        |   ✓   |       | Preserve registry logic, change geometry for heterogeneous/missing content. |
| Skills Map               |        |   ✓   |       | Capability must resolve to actual projects.                                 |
| Experience / proof       |        |   ✓   |       | Keep concise and avoid résumé duplication.                                  |
| Contact finale           |        |   ✓   |       | Preserve structural role; defer slogan and details.                         |
| Motion                   |        |   ✓   |       | Use sparingly and support reduced motion.                                   |
| Grid                     |   ✓    |       |       | Shared anchors, wide media, and whitespace are broadly transferable.        |
| Color                    |        |   ✓   |       | Use role-based neutral/accent system, not copied values.                    |
| Case study               |        |   ✓   |       | Composable sections are needed for uneven source material.                  |
| Bilingual treatment      |        |   ✓   |       | Real locale routes should replace aesthetic-only mixing.                    |
| Illustrated hero/persona |        |       |   ✓   | Would imitate a personal asset strategy without matching evidence.          |

## 22. Translation to Our Portfolio

| Reference mechanism | AI Product Builder translation                                                                                                             |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Designer Dashboard  | A future profile system that shows positioning, current focus, verified education/experience, and evidence-backed capability clusters.     |
| Skills Map          | Capability Map: Product, Experience, AI, Build—each backed by project registry links.                                                      |
| Project Archive     | One editorial archive grammar with type/category/status support for AI product, web, service, industrial, and research projects.           |
| Proof of Practice   | A compact, verified evidence timeline after project work, with details retained on Resume.                                                 |
| Case workflow       | A composable story that can include problem, system/workflow, AI/technology, design output, validation, and reflection only when supplied. |
| Contact statement   | A final invitation controlled by approved personal copy and verified contact endpoints.                                                    |

## 23. Design Principles for Phase 2

### Principle 01 — Typography establishes identity before decoration.

- **Observation:** the reference makes display type its dominant visual device.
- **Interpretation:** hierarchy supplies confidence with less visual noise.
- **Our adaptation:** establish display, chapter, project, body, and metadata scales before introducing decorative motifs.

### Principle 02 — A numbered grammar makes a long portfolio navigable.

- **Observation:** every major chapter is indexed with a number and label.
- **Interpretation:** readers can orient themselves in a long narrative.
- **Our adaptation:** use stable chapter numbering on Home and optional case-study numbering; do not number routes purely for decoration.

### Principle 03 — Projects are evidence; metadata makes evidence scannable.

- **Observation:** project index, date, titles, tags, image, and CTA are consistently co-located.
- **Interpretation:** the archive supports quick comparison and deep reading.
- **Our adaptation:** let the typed registry drive every archive entry and hide missing facts rather than filling the pattern with invented data.

### Principle 04 — Systems should connect claims to proof.

- **Observation:** the Skills Map shows related projects for an active capability.
- **Interpretation:** capabilities feel credible when traceable.
- **Our adaptation:** connect Capability Map filters only to explicit `categories`/`tags` once those fields are confirmed.

### Principle 05 — Whitespace and shared anchors create the editorial tone.

- **Observation:** large chapter fields use common left anchors and generous breathing room.
- **Interpretation:** restraint is structural, not ornamental.
- **Our adaptation:** define container, wide-media, text-measure, and section-space tokens; avoid a page of isolated rounded cards.

### Principle 06 — Treat the profile as information design, not a bio wall.

- **Observation:** profile material is grouped into distinct dashboard modules.
- **Interpretation:** varied evidence is easier to scan when structured.
- **Our adaptation:** build modular About blocks that can independently remain pending; do not manufacture statistics.

### Principle 07 — Motion must improve orientation or feedback.

- **Observation:** anchor navigation and the mobile disclosure provide visible state change.
- **Interpretation:** the useful motion is navigational, not ambient.
- **Our adaptation:** define reduced-motion-safe reveal, menu, and hover utilities; avoid decorative pointer effects and unverified transitions.

### Principle 08 — Bilingual architecture is functional, not just typographic.

- **Observation:** the reference uses mixed-language labels but no observed locale switch.
- **Interpretation:** aesthetic bilingualism does not solve translation, SEO, or routing.
- **Our adaptation:** preserve separate `/zh` and `/en` content, URLs, alternates, and pending translation states.

## 24. Open Questions

- Which brand accent color and image direction will distinguish our system without copying the reference’s dark-blue illustrated tone?
- Which verified profile facts are appropriate for a future dashboard, and which should remain Resume-only?
- Which projects will receive approved cover media first, and what is the fallback archive treatment for `content-pending` entries?
- Which Capability Map terms are both owner-approved and demonstrably evidenced by project material?
- Should Home use a final contact statement once personal copy and contact details are supplied?

## Evidence Inventory

Saved and visually inspected during this audit:

- `docs/reference/01-home-desktop.png` — default desktop hero
- `docs/reference/02-home-1440.png` — 1440 px home evidence
- `docs/reference/03-project-archive-1440.png` — archive chapter
- `docs/reference/04-skills-and-proof-1440.png` — capture retained; Skills content also verified semantically from the live DOM
- `docs/reference/05-project-detail-1440.png` — project case-study hero
- `docs/reference/06-home-mobile-375.png` — narrow hero
- `docs/reference/07-mobile-menu-375.png` — open mobile navigation
- `docs/reference/08-about-dashboard-1440.png` — profile dashboard

No reference source code, styles, assets, copy, personal details, or exact layouts are to be reused in our implementation.
