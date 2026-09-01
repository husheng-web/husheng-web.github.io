# P2 Change Proposal

This proposal is a review artifact only. It does not authorize implementation.

## Priority 0 — Must Fix

### Add locale-aware typography rules

**Change:** split display and technical-label tracking by script. Chinese display text must not inherit the most aggressive Latin negative tracking; Chinese metadata must not inherit unnecessary all-caps/expanded-letter visual treatment.

**Reason:** CURRENT P2 applies `-0.065em` display tracking and `0.13em` technical-label tracking globally. That is not a safe default for a true bilingual portfolio.

**Source:** CURRENT + INFERENCE. Humble's tight display tracking and Aboard's expanded mono labels are single-style signatures, not proof that they suit Chinese.

**Impact:** preserves editorial confidence while improving Chinese and mixed-script readability.

**Files:** `styles/tokens.css`, `app/globals.css`, `docs/DESIGN-SYSTEM.md`.

### Resolve LanguageSwitch behaviour on non-localized preview routes

**Change:** prevent the shared LanguageSwitch from generating `/zh/design-system` when the current route is `/dev/design-system`. Either hide it on non-localized developer pages or provide a valid preview locale mapping.

**Reason:** CURRENT live preview inspection showed the invalid target.

**Source:** CURRENT, OBSERVED.

**Impact:** keeps the design-system preview truthful about the locale architecture it demonstrates.

**Files:** `components/navigation/language-switch.tsx`, `app/dev/design-system/page.tsx`, potentially `components/layout/site-header.tsx`.

## Priority 1 — Recommended

### Raise the default technical-label floor to 12px

**Change:** make 12px the standard `Label` size. Reserve anything smaller for nonessential index decoration only.

**Reason:** recruiter scanning and bilingual metadata need a more robust default than 11px with wide tracking.

**Source:** CURRENT + HUMBLE + ABOARD + INFERENCE.

**Impact:** improves archive/status scanability without changing hierarchy.

**Files:** `styles/tokens.css`, `docs/DESIGN-SYSTEM.md`, preview examples.

### Make orange roles explicit

**Change:** document and, if needed, encode `signal/status`, `interactive/active`, and `high-commit action` uses. Keep Signal Orange sparse in visual area.

**Reason:** CURRENT uses one token across several roles. Humble and Aboard demonstrate opposing but internally consistent orange strategies. The portfolio needs one clear model, not accidental mixed usage.

**Source:** HUMBLE + ABOARD + INFERENCE.

**Impact:** strengthens AI/workflow signalling and prevents orange saturation.

**Files:** `docs/DESIGN-SYSTEM.md`, potentially `styles/tokens.css` and `components/ui/button.tsx`.

### Add a future media-frame contract

**Change:** specify content-driven media variants before Case Study work: contained UI frame, flush industrial render, readable diagram surface, bleedable poster, and video poster.

**Reason:** the portfolio will mix product UI, industrial design, service blueprints, diagrams, and posters. One universal card or radius rule would fail that range.

**Source:** ABOARD + CURRENT + INFERENCE.

**Impact:** preserves archive consistency without inventing images or forcing all media into cards.

**Files:** `docs/DESIGN-SYSTEM.md`; later Case Study component contracts, not current project content.

## Priority 2 — Optional

### Add an optional dark narrative field token

**Change:** add a semantic `--surface-inverse` alias only if Phase 3 needs a controlled dark capability or case-introduction field.

**Reason:** Aboard demonstrates useful dark/light rhythm; CURRENT already has an inverse footer. No additional dark region is justified before real Home or Case content exists.

**Source:** ABOARD + CURRENT + INFERENCE.

**Impact:** provides controlled expansion without forcing an alternating-section pattern.

**Files:** `styles/tokens.css`, `docs/DESIGN-SYSTEM.md`.

### Add quiet accent-outline support for selected taxonomy only

**Change:** consider one subdued orange-border state for an active project filter after verified categories exist.

**Reason:** Aboard uses a softer accent echo for quieter selected states. Current registry has no confirmed categories, so this is premature.

**Source:** ABOARD + INFERENCE.

**Impact:** future filter clarity, no current visual impact.

**Files:** future Projects filter components and tokens.

## Rejected Changes

### Replace the display stack with Humble's Bricolage Grotesque strategy

**Reason for rejection:** custom display font and aggressive Latin tracking would not automatically improve Chinese/mixed-script typography. The current direction is more reliable until an owner-approved bilingual font decision exists.

### Adopt Aboard's serif display plus mono body system

**Reason for rejection:** it is a strong single-brand editorial signature but risks becoming art-direction or documentation theatre. It weakens sustained Chinese reading and is not required to signal product-system capability.

### Convert primary controls into pill CTAs

**Reason for rejection:** Humble and Aboard use pills coherently within their brand systems. For this technical archive, square/bordered controls and text links better support an evidence-first reading path.

### Add rounded card surfaces across the portfolio

**Reason for rejection:** violates the page-field plus divider strategy and would push the work toward generic SaaS/dashboard styling.

### Alternate dark and light sections mechanically

**Reason for rejection:** visual rhythm must follow content state and approved media, not a repeating decoration rule.
