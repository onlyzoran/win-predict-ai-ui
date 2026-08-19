import type { Meta, StoryObj } from '@storybook/vue3'
import TeamProbabilityListSkeletonPattern from './demos/TeamProbabilityListSkeletonPattern.vue'

const meta = {
  title: 'Win Predict AI / Patterns / TeamProbabilityListSkeleton',
  component: TeamProbabilityListSkeletonPattern,
  tags: ['autodocs'],
} satisfies Meta<typeof TeamProbabilityListSkeletonPattern>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { TeamProbabilityListSkeletonPattern },
    template: '<TeamProbabilityListSkeletonPattern />',
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
