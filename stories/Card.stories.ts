import type { Meta, StoryObj } from '@storybook/vue3'
import { Card } from '../src/index'
import LeaguePredictionCardDemo from './LeaguePredictionCardDemo.vue'

const meta = {
  title: 'Win Predict AI / UI / Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Card использует семантические токены (`bg-card`, `text-card-foreground`). Палитру и light/dark переключайте через toolbar **Palette** — отдельные story под каждую тему не нужны.',
      },
    },
  },
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
