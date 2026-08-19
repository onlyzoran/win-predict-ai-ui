import type { Meta, StoryObj } from '@storybook/vue3'
import { ChartContainer } from '../src/components/ui/chart'
import ChartWinOddsDemo from './ChartWinOddsDemo.vue'

const meta = {
  title: 'Win Predict AI / UI / Chart',
  component: ChartContainer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Shadcn-обвязка для Unovis: ChartContainer, ChartStyle, ChartTooltipContent, ChartLegendContent. Peer dependency: `@unovis/vue`.',
      },
    },
  },
} satisfies Meta<typeof ChartContainer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { ChartWinOddsDemo },
    template: '<ChartWinOddsDemo />',
  }),
}

export const Light: Story = {
  globals: { theme: 'slate-teal-light' },
  render: () => ({
    components: { ChartWinOddsDemo },
    template: '<ChartWinOddsDemo />',
  }),
}

export const Dark: Story = {
  globals: { theme: 'slate-teal-dark' },
  render: () => ({
    components: { ChartWinOddsDemo },
    template: '<ChartWinOddsDemo />',
  }),
}
