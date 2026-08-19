import type { Meta, StoryObj } from '@storybook/vue3'
import { withAllPalettes } from '../storyHelpers'
import AppFooterPattern from './demos/AppFooterPattern.vue'

const meta = {
  title: 'Win Predict AI / Patterns / AppFooter',
  component: AppFooterPattern,
  tags: ['autodocs'],
} satisfies Meta<typeof AppFooterPattern>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { AppFooterPattern },
    template: '<AppFooterPattern />',
  }),
}

export const Mobile: Story = {
  render: () => ({
    components: { AppFooterPattern },
    template: '<AppFooterPattern narrow />',
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

