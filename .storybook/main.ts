import type { StorybookConfig } from '@storybook/vue3-vite'
import { mergeConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  async viteFinal(config, { configType }) {
    const base =
      process.env.STORYBOOK_BASE ||
      (configType === 'PRODUCTION' ? '/win-predict-ai-ui/' : '/')

    return mergeConfig(config, {
      base,
      plugins: [tailwindcss()],
      resolve: {
        alias: {
          '@': resolve(__dirname, '../src'),
        },
      },
    })
  },
}

export default config
