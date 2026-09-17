import { defineConfig, globalIgnores } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

export default defineConfig([
  ...nextCoreWebVitals,
  ...nextTypeScript,
  globalIgnores([
    ".next/**",
    "node_modules/**",
    ".npm-cache/**",
    "tmp/**",
    "feishu-husheng-portfolio/**",
    "tmp-chrome-*/**",
    "作品集文件/**",
    ".learnings/**",
  ]),
]);
