import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig(
  {
    ignores: ["dist/**", "node_modules/", "bettergi.config.*"]
  },
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true
      }
    }
  },
  {
    rules: {
      "require-await": "off",
      "@typescript-eslint/require-await": "off",
      "@typescript-eslint/no-floating-promises": ["error", { ignoreIIFE: true }]
    }
  }
);
