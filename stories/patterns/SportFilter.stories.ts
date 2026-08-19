import type { Meta, StoryObj } from '@storybook/vue3'
import { withAllPalettes } from '../storyHelpers'
import SportFilterPattern from './demos/SportFilterPattern.vue'

const meta = {
  title: 'Win Predict AI / Patterns / SportFilter',
  component: SportFilterPattern,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof SportFilterPattern>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { SportFilterPattern },
    template: '<SportFilterPattern />',
  }),
}

export const Mobile: Story = {
  render: () => ({
    components: { SportFilterPattern },
    template: '<SportFilterPattern mobile />',
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

