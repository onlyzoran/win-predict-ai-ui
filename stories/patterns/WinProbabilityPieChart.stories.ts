import type { Meta, StoryObj } from '@storybook/vue3'
import WinProbabilityPieChartPattern from './demos/WinProbabilityPieChartPattern.vue'

const meta = {
  title: 'Win Predict AI / Patterns / WinProbabilityPieChart',
  component: WinProbabilityPieChartPattern,
  tags: ['autodocs'],
} satisfies Meta<typeof WinProbabilityPieChartPattern>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { WinProbabilityPieChartPattern },
    template: '<WinProbabilityPieChartPattern />',
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
