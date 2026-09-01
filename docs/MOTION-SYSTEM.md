# Portfolio Motion System

## Status

Candidate motion system for review in P2.1. It is not yet a mandate for production pages.

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

## Typography

| Candidate    | Mechanism                                                         | Suitable role                               | Decision                           |
| ------------ | ----------------------------------------------------------------- | ------------------------------------------- | ---------------------------------- |
| Mask Rise    | Overflow clip, opacity, small upward transform                    | Hero display, section title                 | **RECOMMENDED**                    |
| Soft Fade    | Opacity, small transform, optional Latin-only tracking settlement | Technical framing or short supporting title | Alternative                        |
| Line Stagger | Semantic line-level stagger only                                  | Explicit multi-line hero                    | Alternative, never character-level |

Chinese and mixed-script samples are tested in the lab. Masking must leave enough vertical room for CJK glyph bounds. Tracking settlement must never be applied globally to Chinese.

## Section Reveal

- **Recommended:** index, title, then content sequence at standard intensity.
- **Alternative:** title-only reveal for dense reading sections.
- **Avoid:** moving a complete section large distances or delaying body content behind long animation.

## Project Interaction

| Candidate        | Behaviour                                                              | Decision                                                                              |
| ---------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Fixed Preview    | Active row updates a stable neutral/media preview; focus matches hover | **RECOMMENDED** desktop pattern                                                       |
| Inline Reveal    | Active row opens a clipped adjacent neutral/media area                 | Alternative for short lists                                                           |
| Floating Preview | Desktop pointer comparison with focus selecting the same record        | **REJECTED** for production unless later evidence proves it does not obstruct reading |

When no cover is approved, preview remains a labelled neutral state. No generated project imagery is used.

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

## Do / Don't

**Do:** replay predictably, use exact duration tokens, keep movement under 16px, preserve focus and content order, and make static media a valid choice.

**Don't:** bounce, stagger characters, animate keyboard navigation, add ambient loops, follow the pointer on mobile, or force a page transition.
