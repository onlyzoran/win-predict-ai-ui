import type { Meta, StoryObj } from '@storybook/vue3'
import TeamProbabilityListPattern from './demos/TeamProbabilityListPattern.vue'

const meta = {
  title: 'Win Predict AI / Patterns / TeamProbabilityList',
  component: TeamProbabilityListPattern,
  tags: ['autodocs'],
} satisfies Meta<typeof TeamProbabilityListPattern>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { TeamProbabilityListPattern },
    template: '<TeamProbabilityListPattern />',
  }),
}

export const Pinned: Story = {
  render: () => ({
    components: { TeamProbabilityListPattern },
    template: '<TeamProbabilityListPattern pinned />',
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
