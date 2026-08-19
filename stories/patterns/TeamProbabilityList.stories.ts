import type { Meta, StoryObj } from '@storybook/vue3'
import { withAllPalettes } from '../storyHelpers'
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


export const {
  ZincLight,
  ZincDark,
  SlateTealLight,
  SlateTealDark,
  ClaudePlusLight,
  ClaudePlusDark,
} = withAllPalettes(Default)

