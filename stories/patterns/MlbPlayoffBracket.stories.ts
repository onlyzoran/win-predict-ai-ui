import type { Meta, StoryObj } from '@storybook/vue3'
import MlbPlayoffBracketPattern from './demos/MlbPlayoffBracketPattern.vue'

const meta = {
  title: 'Win Predict AI / Patterns / MlbPlayoffBracket',
  component: MlbPlayoffBracketPattern,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof MlbPlayoffBracketPattern>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { MlbPlayoffBracketPattern },
    template: '<MlbPlayoffBracketPattern />',
  }),
}

export const Mobile: Story = {
  render: () => ({
    components: { MlbPlayoffBracketPattern },
    template: '<MlbPlayoffBracketPattern layout="mobile" />',
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
