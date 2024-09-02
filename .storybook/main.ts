import type { StorybookConfig } from "@storybook/react-vite";
import eslint from 'vite-plugin-eslint';

const config: StorybookConfig = {
  stories: ["../**/*.mdx", "../**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    // Add ESLint plugin
    config.plugins = [
      ...(config.plugins || []),
      eslint({ include: ['src/**/*.{js,jsx,ts,tsx}'] }),
    ];

    return config;
  },
};
export default config;
