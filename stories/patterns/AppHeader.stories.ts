import type { Meta, StoryObj } from '@storybook/vue3'
import AppHeaderPattern from './demos/AppHeaderPattern.vue'

const meta = {
  title: 'Win Predict AI / Patterns / AppHeader',
  component: AppHeaderPattern,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof AppHeaderPattern>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { AppHeaderPattern },
    template: '<AppHeaderPattern />',
  }),
}

export const Light: Story = {
  globals: { theme: 'slate-teal-light' },
  ...Default,
}

export const Dark: Story = {
  globals: { theme: 'slate-teal-dark' },
  ...Default,
}
