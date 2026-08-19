import type { Meta, StoryObj } from '@storybook/vue3'
import WinProbabilityPieTooltipPattern from './demos/WinProbabilityPieTooltipPattern.vue'

const meta = {
  title: 'Win Predict AI / Patterns / WinProbabilityPieTooltip',
  component: WinProbabilityPieTooltipPattern,
  tags: ['autodocs'],
} satisfies Meta<typeof WinProbabilityPieTooltipPattern>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { WinProbabilityPieTooltipPattern },
    template: '<WinProbabilityPieTooltipPattern />',
  }),
}

export const CustomPayload: Story = {
  render: () => ({
    components: { WinProbabilityPieTooltipPattern },
    template:
      '<WinProbabilityPieTooltipPattern :payload="{ name: \'New York Yankees\', winProbability: 0.07 }" />',
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
