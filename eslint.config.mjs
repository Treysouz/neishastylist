import { defineConfig, globalIgnores } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

export default defineConfig([
  globalIgnores([
    ".next/**",
    ".vercel/**",
    ".open-next/**",
    "next-env.d.ts",
    "cloudflare-env.d.ts",
  ]),
  nextCoreWebVitals,
  nextTypescript,
  {
    rules: {
      "react/self-closing-comp": [
        "error",
        {
          component: true,
          html: true,
        },
      ],
    },
  },
]);
