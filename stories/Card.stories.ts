import type { Meta, StoryObj } from '@storybook/vue3'
import { Card } from '../src/components/ui/card'
import LeaguePredictionCardDemo from './LeaguePredictionCardDemo.vue'

const meta = {
  title: 'Win Predict AI / UI / Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { LeaguePredictionCardDemo },
    template: '<LeaguePredictionCardDemo />',
  }),
}

/** Без pin в header — высота строки заголовка совпадает с Default (min-h-8 под action). */
export const WithoutHeaderAction: Story = {
  render: () => ({
    components: { LeaguePredictionCardDemo },
    template: '<LeaguePredictionCardDemo :with-header-action="false" />',
  }),
}

export const ZincLight: Story = {
  globals: { theme: 'zinc-light' },
  render: () => ({
    components: { LeaguePredictionCardDemo },
    template: '<LeaguePredictionCardDemo />',
  }),
}

export const ZincDark: Story = {
  globals: { theme: 'zinc-dark' },
  render: () => ({
    components: { LeaguePredictionCardDemo },
    template: '<LeaguePredictionCardDemo />',
  }),
}

export const SlateTealLight: Story = {
  globals: { theme: 'slate-teal-light' },
  render: () => ({
    components: { LeaguePredictionCardDemo },
    template: '<LeaguePredictionCardDemo />',
  }),
}

export const SlateTealDark: Story = {
  globals: { theme: 'slate-teal-dark' },
  render: () => ({
    components: { LeaguePredictionCardDemo },
    template: '<LeaguePredictionCardDemo />',
  }),
}

export const ClaudePlusLight: Story = {
  globals: { theme: 'claude-plus-light' },
  render: () => ({
    components: { LeaguePredictionCardDemo },
    template: '<LeaguePredictionCardDemo />',
  }),
}

export const ClaudePlusDark: Story = {
  globals: { theme: 'claude-plus-dark' },
  render: () => ({
    components: { LeaguePredictionCardDemo },
    template: '<LeaguePredictionCardDemo />',
  }),
}
