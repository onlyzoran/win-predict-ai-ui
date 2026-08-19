import type { Meta, StoryObj } from '@storybook/vue3'
import MlbBracketMatchupPattern from './demos/MlbBracketMatchupPattern.vue'
import { mockMlbPlayoffBracket } from './fixtures/bracket'

const meta = {
  title: 'Win Predict AI / Patterns / MlbBracketMatchup',
  component: MlbBracketMatchupPattern,
  tags: ['autodocs'],
} satisfies Meta<typeof MlbBracketMatchupPattern>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { MlbBracketMatchupPattern },
    setup: () => ({ matchup: mockMlbPlayoffBracket.worldSeries }),
    template: '<MlbBracketMatchupPattern :matchup="matchup" class="max-w-xs" />',
  }),
}

export const Tbd: Story = {
  render: () => ({
    components: { MlbBracketMatchupPattern },
    setup: () => ({
      matchup: {
        id: 'tbd',
        higher: mockMlbPlayoffBracket.al.championshipSeries.winner,
        lower: null,
        winner: mockMlbPlayoffBracket.al.championshipSeries.winner,
      },
    }),
    template: '<MlbBracketMatchupPattern :matchup="matchup" class="max-w-xs" />',
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
