import type { Meta, StoryObj } from '@storybook/vue3'
import { withAllPalettes } from '../storyHelpers'
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


export const {
  ZincLight,
  ZincDark,
  SlateTealLight,
  SlateTealDark,
  ClaudePlusLight,
  ClaudePlusDark,
} = withAllPalettes(Default)

