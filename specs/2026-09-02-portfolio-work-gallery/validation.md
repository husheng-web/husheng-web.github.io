# Portfolio work gallery — validation

## Automated

- `npm run format:check`
- `npm run lint`
- `npm run typecheck`
- `npm run build`

## Manual / runtime

- `/zh/projects` renders thirteen registry entries, including supplied cover media.
- `/en/projects` resolves from the same registry.
- All newly registered local cover URLs return HTTP 200.
- Projects without supplied media render a neutral state and do not link to a fabricated case study.
