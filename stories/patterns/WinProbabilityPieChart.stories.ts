import type { Meta, StoryObj } from '@storybook/vue3'
import { withAllPalettes } from '../storyHelpers'
import WinProbabilityPieChartPattern from './demos/WinProbabilityPieChartPattern.vue'

const meta = {
  title: 'Win Predict AI / Patterns / WinProbabilityPieChart',
  component: WinProbabilityPieChartPattern,
  tags: ['autodocs'],
} satisfies Meta<typeof WinProbabilityPieChartPattern>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { WinProbabilityPieChartPattern },
    template: '<WinProbabilityPieChartPattern />',
  }),
}

/** Narrow viewport — league abbreviations in legend. */
export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
  render: () => ({
    components: { WinProbabilityPieChartPattern },
    template: '<WinProbabilityPieChartPattern />',
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

