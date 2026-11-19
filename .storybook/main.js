import { mergeConfig } from 'vite';
import { default as path } from 'path';

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../src/stories/**/*.mdx",
    "../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "storybook-addon-remix-react-router"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  staticDirs: ['./public'],
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          "@/": `${path.resolve(import.meta.dirname, "../src")}/`
        }
      },
    });
  },
};
export default config;
