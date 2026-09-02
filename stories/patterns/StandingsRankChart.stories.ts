import type { Meta, StoryObj } from '@storybook/vue3'
import { withAllPalettes } from '../storyHelpers'
import StandingsRankChartPattern from './demos/StandingsRankChartPattern.vue'
import { mockRankSeries } from './fixtures/rankSeries'

const meta = {
  title: 'Win Predict AI / Patterns / StandingsRankChart',
  component: StandingsRankChartPattern,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof StandingsRankChartPattern>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { StandingsRankChartPattern },
    setup: () => ({ series: mockRankSeries }),
    template: '<div class="w-full p-4 md:p-6"><StandingsRankChartPattern :series="series" /></div>',
  }),
}

/** Full-width rank chart on narrow viewport — abbreviations on side labels. */
export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    layout: 'fullscreen',
  },
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

