# GitHub Pages 部署验证

## 自动检查

- `npm run format:check`
- `npm run lint`
- `npm run typecheck`
- `npm run build`

## 产物检查

- `out/index.html` 存在。
- `out/zh/index.html` 与 `out/en/index.html` 存在。
- `out` 内不包含项目 `project.pdf`。
- `out` 内不包含 `media/reference` 与 `media/prototypes`。

## 线上检查

- GitHub Actions 部署成功。
- `https://husheng-web.github.io` 可访问并跳转到中文首页。
- 中文、英文、项目、关于与简历页面可正常打开。
