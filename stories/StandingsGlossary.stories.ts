import type { Meta, StoryObj } from '@storybook/vue3'
import StandingsGlossary from '../src/components/StandingsGlossary.vue'
import { withAllPalettes } from './storyHelpers'

const meta = {
  title: 'Win Predict AI / UI / StandingsGlossary',
  component: StandingsGlossary,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    preset: { control: 'select', options: ['football'] },
  },
} satisfies Meta<typeof StandingsGlossary>

export default meta
type Story = StoryObj<typeof meta>

export const Football: Story = {
  args: {
    preset: 'football',
  },
}

export const {
  ZincLight,
  ZincDark,
  SlateTealLight,
  SlateTealDark,
  ClaudePlusLight,
  ClaudePlusDark,
} = withAllPalettes(Football)

export const CustomEntries: Story = {
  args: {
    entries: [
      { abbr: 'GP', label: 'Games played' },
      { abbr: 'Pts', label: 'Points' },
    ],
  },
}
