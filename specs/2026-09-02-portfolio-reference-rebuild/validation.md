# Portfolio reference rebuild — validation

- `npm run format:check`, `npm run lint`, `npm run typecheck`, and `npm run build` pass.
- `/zh`, `/en`, `/zh/projects`, `/zh/projects/pinlvtu`, and `/zh/about` were rendered in the local in-app browser with successful `200` responses.
- Desktop visual checks confirm the global shell, home hero, archive, and case-study route render without clipping or broken product media.
- Mobile CSS falls back to one-column grids below `48rem`; the available browser surface did not expose a viewport override for a live 390px capture, so final deployment QA must repeat that visual check.
- The home page uses registered project titles and approved Trip Compose media only.
- No source asset URL from the reference site appears in the application source.
