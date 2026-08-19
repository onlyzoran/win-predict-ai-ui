import type { Meta, StoryObj } from '@storybook/vue3'
import { withAllPalettes } from '../storyHelpers'
import TournamentDetailsPattern from './demos/TournamentDetailsPattern.vue'

const meta = {
  title: 'Win Predict AI / Patterns / TournamentDetails',
  component: TournamentDetailsPattern,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof TournamentDetailsPattern>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { TournamentDetailsPattern },
    template: '<TournamentDetailsPattern />',
  }),
}

export const Compact: Story = {
  render: () => ({
    components: { TournamentDetailsPattern },
    template: '<TournamentDetailsPattern compact :tabbed="false" />',
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

