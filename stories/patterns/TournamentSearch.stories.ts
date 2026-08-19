import type { Meta, StoryObj } from '@storybook/vue3'
import { withAllPalettes } from '../storyHelpers'
import TournamentSearchPattern from './demos/TournamentSearchPattern.vue'

const meta = {
  title: 'Win Predict AI / Patterns / TournamentSearch',
  component: TournamentSearchPattern,
  tags: ['autodocs'],
} satisfies Meta<typeof TournamentSearchPattern>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { TournamentSearchPattern },
    template: '<TournamentSearchPattern />',
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

