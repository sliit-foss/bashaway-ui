import js from "@eslint/js";
import * as mdx from "eslint-plugin-mdx";
import react from "eslint-plugin-react";
import globals from "globals";

export default [
  { ignores: [".cache", "dist", "storybook-static"] },
  js.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  { ...mdx.flat, files: ["**/*.mdx"] },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node }
    },
    settings: {
      react: {
        version: "19.0"
      }
    },
    rules: {
      "react/prop-types": "off"
    }
  }
];
