# Refero Benchmark

## Executive Summary

**Final decision: REFINE P2.** The current system already has the right foundation for an AI Product Builder portfolio: it is bilingual, evidence-aware, flat, structured, and archive-oriented. Neither benchmark should replace it. The strongest justified refinements are script-aware typography, a more explicit metadata rule, and a clearer orange-action hierarchy.

Evidence labels used in this document:

- **CURRENT:** repository source and `/dev/design-system` inspection on 2026-09-01.
- **HUMBLE:** observed Refero Humble DESIGN.md and rendered style page.
- **ABOARD:** observed Refero Aboard DESIGN.md and rendered style page.
- **INFERENCE:** a portfolio-fit conclusion drawn from the above evidence.
- **APPROXIMATE / UNVERIFIED:** retained where a rule cannot be established directly.

Benchmark URLs: [Humble](https://styles.refero.design/style/a6950b49-8ce4-4330-9499-26ca08061599) and [Aboard](https://styles.refero.design/style/7b083729-e694-4b66-82a3-befb08451722). Both were inspected as rendered Refero style pages and DESIGN.md text on 2026-09-01.

## Current System Snapshot

**CURRENT:** warm off-white `#F5F3EE`, near-black `#171613`, Signal Orange `#F04A24`, hairline borders, almost-square radius, responsive display scale, mono labels, wide/page/reading containers, a row-based archive, and a dark footer. The preview confirms that it is more editorial catalogue than SaaS card grid.

**CURRENT issue:** the preview's shared `LanguageSwitch` maps `/dev/design-system` to `/zh/design-system`, which is not a registered route. This is a non-production preview-route bug, but it demonstrates that locale switching needs an explicit non-localized route policy.

## Humble Design DNA

**HUMBLE, OBSERVED:** a near-monochrome warm-paper system with Safety Orange used as punctuation, a generous editorial rhythm, flat surfaces and no shadows. Its display typography is tight and poster-like. It uses very rounded cards and pill CTAs as a deliberate friendly product-brand signature.

**Portfolio fit:** adopt its restraint, paper warmth, and deliberately limited chroma. Reject its large-radius card/pill language because it would soften the intended technical archive character.

## Aboard Design DNA

**ABOARD, OBSERVED:** a light/dark editorial dossier, 1px hairlines, warm neutrals, orange for action or live state, thin components, and documentary density. It uses a serif display plus mono body treatment, small technical metadata, and occasional full-bleed dark photography bands.

**Portfolio fit:** adopt its semantic distinction between action and status, hairline media framing, and selective dark-section rhythm. Reject mono body and its specific serif pairing because true Chinese/English reading needs a more reliable bilingual text system.

## Three-way Comparison

| Dimension         | Current                                       | Humble                                | Aboard                                   | Recommended Direction                                             |
| ----------------- | --------------------------------------------- | ------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------- |
| Color             | Warm paper, near-black, orange                | Warm paper, black, safety orange      | Bone white, warm darks, ember orange     | Keep current warm-neutral base.                                   |
| Neutral           | Three light levels plus inverse               | Several paper-like surface levels     | Light, linen, deep-dark bands            | Keep, then document intended media surface use.                   |
| Accent            | Active, links, status, primary action         | Punctuation and rare bands            | Action, active state, icon/live state    | Refine semantic rules, do not change hex now.                     |
| Typography        | Heavy grotesk display, sans body, mono labels | Tight grotesk editorial display       | Light serif display, mono body           | Keep bilingual sans/body architecture; add script-aware tracking. |
| Spacing           | Fluid section/macro tokens                    | Comfortable 64–80px sections          | 8px base, 64px sections                  | Keep current fluid scale.                                         |
| Grid              | 76rem page, 96rem wide, reading measure       | 1200px content field                  | 1200px editorial split                   | Keep current containers.                                          |
| Border            | Warm hairline and stronger divider            | Flat, occasional dark outline         | 1px hairline is core language            | Adopt Aboard's media-frame rule later.                            |
| Radius            | 2px / 4px                                     | 24–70px surfaces, full pills          | 8–12px cards, pill CTA                   | Keep current square-industrial rule.                              |
| Surface           | Page field first, inverse footer              | Paper, cream, linen cards             | Light reading field plus dark bands      | Keep page field first.                                            |
| Button            | Square orange/outline/quiet variants          | Black pill primary                    | Orange pill primary                      | Refine usage, not geometry.                                       |
| Link              | Underlined technical link, orange hover       | Orange is not a link role             | Orange underline/link accent             | Keep links mostly ink, orange on interaction.                     |
| Tag               | Small outlined taxonomy                       | Filled rounded pill                   | Compact rounded tag                      | Keep outline taxonomy, avoid filters-as-pills.                    |
| Archive           | Indexed responsive rows, status-aware         | Product mockup/card oriented          | Documentary/editorial, metadata-led      | Keep rows and enhance future media framing.                       |
| Metadata          | Mono, uppercase, 11–12px                      | Small UI captions                     | Mono 10–16px technical labels            | Refine minimum/default label readability.                         |
| Dark section      | Inverse footer only                           | Mostly light                          | Purposeful full-bleed dark bands         | Add selectively, never alternating by formula.                    |
| Image treatment   | Not implemented yet                           | Large rounded product frames          | Hairline framed media, full-bleed photos | Hybridize by asset type in Case Study phase.                      |
| Motion            | Feedback and disclosure only                  | Not a dominant visible rule           | Interface recedes                        | Keep restrained motion.                                           |
| Editorial feeling | Strong typographic catalogue                  | Broadsheet/paper                      | Field journal/dossier                    | Current is appropriately between the two.                         |
| Technical feeling | Mono metadata + registry states               | Low to medium                         | High                                     | Take Aboard's information discipline, not mono body.              |
| Bilingual fit     | Explicit `/zh` and `/en`                      | **UNVERIFIED** true locale system     | **UNVERIFIED** true locale system        | Current is materially stronger.                                   |
| Portfolio fit     | Evidence-aware and scalable                   | Better for friendly product marketing | Better for documentary/product narrative | Current base is strongest for mixed portfolio media.              |

## Color

### Background and neutral system

- **CURRENT:** `#F5F3EE` and `#FFFEFB` already avoid sterile pure white. `#E9E5DC` adds a restrained secondary field.
- **HUMBLE:** validates the paper-like warm canvas and flat surface approach.
- **ABOARD:** validates a warm reading canvas plus an intentional near-black section state.
- **INFERENCE:** retain current values. More neutral tokens would increase choice without a current content need.

### Accent strategy

- **CURRENT:** Signal Orange is used in index, active navigation, hover feedback, status point, and primary action.
- **HUMBLE:** uses orange mainly as punctuation and avoids orange CTAs, links, and active nav.
- **ABOARD:** uses orange for primary CTA, active navigation, links, icon fills, and live state.
- **INFERENCE:** the portfolio should follow a restrained Aboard-like semantic model rather than Humble's brand-punctuation model. Orange is useful when it signals navigation, active selection, project status, or one high-commit action. It should not become section background by default.

**Conclusion: KEEP Signal Orange, REFINE its documented hierarchy.** Usage should not increase in visual area. It should become more intentional, not more frequent.

## Typography

- **CURRENT:** heavy display type creates an immediate product-builder signal and uses a reliable Chinese fallback stack. Mono is appropriately constrained to labels.
- **HUMBLE:** supports tight display type, but its Bricolage-specific weight and tracking cannot be copied safely into a bilingual system.
- **ABOARD:** demonstrates an effective editorial-versus-technical type contrast, but mono body and light serif display would reduce Chinese reading consistency and overstate a documentary aesthetic.
- **INFERENCE:** current sans display plus regular body is the best base. However, the current global display tracking (`-0.065em`) is too aggressive as a default for Chinese display strings. The same applies to the highly spaced mono label tracking on Chinese metadata.

**Conclusion: REFINE locale-aware tracking and label sizing. Do not replace the font architecture.**

## Grid & Spacing

- **CURRENT:** its 76rem page container closely matches the benchmarks' approximately 1200px editorial measure; 96rem wide and 45rem reading sizes add a useful case-study hierarchy.
- **HUMBLE / ABOARD:** both support comfortable 64px-plus section cadence and a limited component gap scale.
- **INFERENCE:** current fluid `--space-section` and `--space-macro` are better suited to mobile-to-desktop portfolio work than copying either static scale.

**Conclusion: KEEP.**

## Borders / Radius / Surface

- **CURRENT:** hairlines and 2px/4px radii produce a technical archive tone without shadow.
- **HUMBLE:** uses softness intentionally through 24–70px radii. This conflicts with the requested rational, structured, technical direction.
- **ABOARD:** validates hairline borders and restrained elevation but has softer cards and pills than necessary here.
- **INFERENCE:** use page field + divider + typography as default. Introduce a bordered media frame only when approved media arrives. Do not add generic surface cards.

**Conclusion: KEEP square radius and flat surface strategy. ADOPT Aboard's media-frame principle later, not its rounded geometry.**

## Project Archive

- **CURRENT:** the archive entry uses an index, localized title, factual-status indicators, optional metadata, and an action state. Pending projects do not receive fake covers or clickable case-study promises.
- **HUMBLE:** its rounded product mockups are not an archive model for mixed media or incomplete records.
- **ABOARD:** reinforces the value of thin rules, modest metadata, and a content-led field rather than a card grid.
- **INFERENCE:** current rows are already a credible Portfolio Archive. The future improvement is not a different component: it is a documented two-mode media rule, `record without approved media` versus `record with approved media`.

**Conclusion: KEEP component architecture. REFINE media variants only when actual assets are available.**

## Metadata

- **CURRENT:** status visibility is honest and the index holds hierarchy correctly. The preview shows labels are visually quiet.
- **HUMBLE:** uses 12px-plus supporting text.
- **ABOARD:** demonstrates compact mono labels but also relies on a custom face and a single-language English context.
- **INFERENCE:** the current `0.6875rem` label is below the preferred default for multilingual recruiter scanning. Use 12px as the standard label floor, and reserve smaller sizes for nonessential decorative indices only.

**Conclusion: REFINE.**

## Buttons / Links / Tags

- **CURRENT:** a filled orange button exists, with square geometry and a quiet text-link alternative.
- **HUMBLE:** black pill CTAs support a friendly product-marketing voice, not the required archive tone.
- **ABOARD:** orange pill CTAs make action unmistakable but also bring a SaaS/service-brand feel.
- **INFERENCE:** portfolio default CTAs should be `TextLink` or bordered controls. Filled orange is reserved for a single decision-heavy action, if that action is owner-approved. Tags should remain outlined taxonomy rather than filled filters.

**Conclusion: KEEP geometry, REFINE component usage guidance.**

## Section Contrast

| Section type              | Direction                                                                               | Evidence            |
| ------------------------- | --------------------------------------------------------------------------------------- | ------------------- |
| Hero                      | Optional dark only when approved strong media or a deliberate identity statement exists | ABOARD + INFERENCE  |
| Selected work / Archive   | Avoid dark default                                                                      | CURRENT + INFERENCE |
| Capabilities              | Optional restrained dark field if it connects capability to evidence                    | ABOARD + INFERENCE  |
| Contact / Footer          | Recommended dark finale                                                                 | CURRENT + ABOARD    |
| Case hero                 | Recommended when approved visual material supports it                                   | ABOARD + INFERENCE  |
| Alternating every section | Avoid                                                                                   | INFERENCE           |

## Image Treatment

- **HUMBLE:** rounded, outlined product frames work for homogeneous software screenshots.
- **ABOARD:** hairline image frames and full-bleed documentary bands fit a limited photography language.
- **INFERENCE:** this portfolio needs an asset-type system: UI screenshots can use quiet contained frames; industrial renders may sit flush on neutral fields; diagrams require readable light surfaces; poster work can bleed; video needs a poster plus clear control. No universal radius or overlay rule is justified.

## Editorial vs Technical Balance

```text
Editorial  ←──────────────→  Technical
Humble          Current       Aboard
                     Recommended

Minimal    ←──────────────→  Expressive
Current / Recommended       Humble
                       Aboard
```

**INFERENCE:** recommended position is just to the technical side of the current system, through metadata discipline and evidence linking, not through a documentation-like mono body or heavy dark treatment.

## AI Product Builder Fit

| Rule                               | Decision          | Why it strengthens or weakens the identity                                  |
| ---------------------------------- | ----------------- | --------------------------------------------------------------------------- |
| Warm paper and flat hierarchy      | KEEP              | Communicates deliberation without generic SaaS polish.                      |
| Indexed evidence archive           | KEEP              | Helps recruiters compare work and contribution quickly.                     |
| Orange as action/status signal     | REFINE            | Supports workflow and system-state cues.                                    |
| Serif display + mono body          | REJECT            | Prioritizes art-direction/technical fiction over bilingual product clarity. |
| Rounded soft cards                 | REJECT            | Pulls the system toward friendly SaaS rather than technical archive.        |
| Selective dark case/contact fields | ADOPT FROM ABOARD | Creates narrative state change when evidence warrants it.                   |
| Hairline media frames              | ADOPT FROM ABOARD | Lets heterogeneous proof material read as governed evidence.                |

## Keep / Refine / Adopt / Reject

| Decision          | Items                                                                                                                                                    | Source                       |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| KEEP              | Warm canvas, low-chroma palette, containers, flat surfaces, hairlines, square radius, row archive, restrained motion, explicit bilingual routes          | CURRENT, HUMBLE, ABOARD      |
| REFINE            | Chinese display/label tracking, 12px default metadata floor, orange semantic hierarchy, preview locale-switch policy, button usage documentation         | CURRENT, INFERENCE           |
| ADOPT FROM HUMBLE | Treat orange as scarce visual mass, preserve flat/no-shadow composition                                                                                  | HUMBLE                       |
| ADOPT FROM ABOARD | Semantic orange action/status distinction, media-frame rule, selective light/dark narrative contrast                                                     | ABOARD                       |
| HYBRIDIZE         | Media treatment by asset type, future case-study contrast states                                                                                         | CURRENT + ABOARD + INFERENCE |
| REJECT            | Humble's oversized rounded cards/pills, Aboard's mono body and serif replacement, fixed dark/light alternation, generic dark hero without approved media | HUMBLE, ABOARD, INFERENCE    |

## Recommended Phase 2 Changes

See `docs/P2-CHANGE-PROPOSAL.md`. The proposal deliberately makes no code changes in P2.05.

## Final Decision

**REFINE P2.** The system does not require rework. Preserve its current identity, apply only the bilingual typography and semantic-usage refinements after approval, then start Phase 3 from the refined rules.
