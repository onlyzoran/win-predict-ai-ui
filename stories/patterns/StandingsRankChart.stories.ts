import type { Meta, StoryObj } from '@storybook/vue3'
import { withAllPalettes } from '../storyHelpers'
import StandingsRankChartPattern from './demos/StandingsRankChartPattern.vue'
import { mockRankSeries } from './fixtures/rankSeries'

const meta = {
  title: 'Win Predict AI / Patterns / StandingsRankChart',
  component: StandingsRankChartPattern,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof StandingsRankChartPattern>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { StandingsRankChartPattern },
    setup: () => ({ series: mockRankSeries }),
    template: '<StandingsRankChartPattern :series="series" />',
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

