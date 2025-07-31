import type { StorybookConfig } from '@storybook/nextjs';


const config: StorybookConfig = {
  "stories": [
    "../app/**/*.mdx",
    "../app/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  "framework": {
    "name": "@storybook/nextjs",
    "options": {}
  },
  "staticDirs": [
    "..\\public"
  ],
  // change docs name
  // docs: {
  //   defaultName: 'my docs',
  // },
};
export default config;