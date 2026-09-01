# Portfolio Motion System

## Status

Approved production motion system. This document is the production baseline for portfolio motion; new motion patterns require a reviewed amendment rather than a page-level exception.

## Motion Principles

- Motion explains hierarchy, orientation, feedback, narrative sequence, or continuity.
- Default intensity is **Standard leaning Quiet**.
- Line-level is the smallest permitted title stagger. Character animation is prohibited.
- Native scrolling remains in control. There is no scroll hijacking, smooth-scroll library, or forced inertia.
- Content must remain readable and complete when motion is absent.

## Motion Tokens

CSS source of truth: `styles/tokens.css`.

| Token             | Value                            | Use                                   |
| ----------------- | -------------------------------- | ------------------------------------- |
| `--motion-fast`   | 140ms                            | Hover, press, compact feedback        |
| `--motion-base`   | alias of 220ms normal            | Standard reveal and disclosure        |
| `--motion-slow`   | 420ms                            | Occasional typography or media reveal |
| `--ease-standard` | `cubic-bezier(0.2, 0, 0, 1)`     | Most feedback                         |
| `--ease-out`      | `cubic-bezier(0, 0, 0.2, 1)`     | Enter/reveal                          |
| `--ease-in-out`   | `cubic-bezier(0.65, 0, 0.35, 1)` | Rare reversible prototype             |

`useMotionSettings()` reads these CSS durations at runtime, so Motion components do not introduce an independent timing scale.

## Intensity

| Level      | Distance / stagger | Use                                |
| ---------- | ------------------ | ---------------------------------- |
| Quiet      | 6px / 40ms         | Frequent feedback                  |
| Standard   | 10px / 80ms        | Default reveal candidate           |
| Expressive | 16px / 120ms       | Lab comparison only, not a default |

## Typography Hierarchy

| Candidate    | Mechanism                                                         | Suitable role                               | Decision                           |
| ------------ | ----------------------------------------------------------------- | ------------------------------------------- | ---------------------------------- |
| Mask Rise    | Overflow clip, opacity, small upward transform                    | Hero display, section title                 | **RECOMMENDED**                    |
| Soft Fade    | Opacity, small transform, optional Latin-only tracking settlement | Technical framing or short supporting title | Alternative                        |
| Line Stagger | Semantic line-level stagger only                                  | Explicit multi-line hero                    | Alternative, never character-level |

Chinese and mixed-script samples are tested in the lab. Masking must leave enough vertical room for CJK glyph bounds. Tracking settlement must never be applied globally to Chinese.

- Hero and major narrative titles: prefer Mask Rise.
- Major section headings: use Mask Rise or Sequence when it clarifies the section order.
- Dense case-study sections: prefer title-only reveal or static treatment.
- Body copy and metadata: static by default.

This hierarchy prevents a long case study from repeating the same animated rhythm; reading remains the primary experience.

## Section Reveal

- **Recommended:** index, title, then content sequence at standard intensity.
- Index to title delay: approximately 40–60ms.
- Title to content delay: approximately 60–80ms.
- The full reveal must not create noticeable waiting before reading begins.
- **Alternative:** title-only reveal for dense reading sections.
- **Avoid:** moving a complete section large distances or delaying body content behind long animation.

## Project Interaction

| Candidate        | Behaviour                                                              | Decision                                                                              |
| ---------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Fixed Preview    | Active row updates a stable neutral/media preview; focus matches hover | **RECOMMENDED** desktop pattern                                                       |
| Inline Reveal    | Active row opens a clipped adjacent neutral/media area                 | Alternative for short lists                                                           |
| Floating Preview | Desktop pointer comparison with focus selecting the same record        | **REJECTED** for production unless later evidence proves it does not obstruct reading |

Fixed Preview is a media-container mechanism, not a single cover-image template. It must accept a cover image, UI screenshot, industrial render, poster, diagram, video poster, or labelled neutral pending state. When no media is approved, preview remains the labelled neutral state. No generated project imagery is used.

## Media Reveal

The semantic API is `MediaReveal` with `motion="mask" | "fade" | "none"`.

- `mask`: UI, cover, poster, or visual work.
- `fade`: diagram or dense information where clip motion may harm comprehension.
- `none`: service blueprint, high-density research content, or any media where immediate reading wins.

## Navigation

Active navigation uses color and short feedback. The mobile disclosure may fade and shift a few pixels, but keyboard-triggered state must never wait for animation. Existing Escape, focus restoration, and scroll lock remain the source of truth.

## Route Transition

| Candidate              | Decision                                                 |
| ---------------------- | -------------------------------------------------------- |
| Minimal fade           | Prototype only                                           |
| Editorial neutral wipe | Prototype only, likely too costly for navigation benefit |
| Native navigation      | **RECOMMENDED production candidate**                     |

## Reduced Motion

When `prefers-reduced-motion: reduce` is active:

- text, section, media, preview, menu, and route prototypes resolve immediately;
- replay controls still work and never hide content;
- floating preview does not follow movement;
- native scrolling remains unchanged except smooth anchor scrolling is disabled by global CSS.

## Responsive Rules

- 375 and 390px: no floating preview, no motion-induced content delay, compact controls wrap.
- 768px: list and preview may remain stacked where space is constrained.
- 1024 and 1440px: fixed preview is eligible; floating comparison is lab-only.
- Every option must support keyboard focus as an equal trigger to pointer hover.

## Performance

- Animate opacity and transform first.
- Use `clip-path` only for contained media-mask candidates.
- Avoid layout-property animation, filter animation, large persistent fixed surfaces, and `transition: all`.
- Use Motion only for candidate semantics, not every page element.

## Production Constraints

**Do:** replay predictably, use exact duration tokens, keep movement under 16px, preserve focus and content order, and make static media a valid choice.

**Don't:** bounce, stagger characters, animate keyboard navigation, add ambient loops, follow the pointer on mobile, use floating preview in production, scroll hijack, or force a route transition.
