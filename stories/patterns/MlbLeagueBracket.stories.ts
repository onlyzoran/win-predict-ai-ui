import type { Meta, StoryObj } from '@storybook/vue3'
import { withAllPalettes } from '../storyHelpers'
import MlbLeagueBracketPattern from './demos/MlbLeagueBracketPattern.vue'
import { mockMlbPlayoffBracket } from './fixtures/bracket'

const meta = {
  title: 'Win Predict AI / Patterns / MlbLeagueBracket',
  component: MlbLeagueBracketPattern,
  tags: ['autodocs'],
} satisfies Meta<typeof MlbLeagueBracketPattern>

export default meta
type Story = StoryObj<typeof meta>

export const AmericanLeague: Story = {
  render: () => ({
    components: { MlbLeagueBracketPattern },
    setup: () => ({ bracket: mockMlbPlayoffBracket.al }),
    template: '<MlbLeagueBracketPattern :bracket="bracket" />',
  }),
}

export const NationalLeagueMirrored: Story = {
  render: () => ({
    components: { MlbLeagueBracketPattern },
    setup: () => ({ bracket: mockMlbPlayoffBracket.nl }),
    template: '<MlbLeagueBracketPattern :bracket="bracket" mirror />',
  }),
}

export const Vertical: Story = {
  render: () => ({
    components: { MlbLeagueBracketPattern },
    setup: () => ({ bracket: mockMlbPlayoffBracket.al }),
    template: '<MlbLeagueBracketPattern :bracket="bracket" layout="vertical" />',
  }),
}


export const {
  ZincLight,
  ZincDark,
  SlateTealLight,
  SlateTealDark,
  ClaudePlusLight,
  ClaudePlusDark,
} = withAllPalettes(AmericanLeague)

