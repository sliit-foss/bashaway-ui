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
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "storybook-addon-react-router-v6"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ['./public'],
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          "@/": `${path.resolve(__dirname, "../src")}/`
        }
      },
    });
  },
};
export default config;