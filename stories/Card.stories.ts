import type { Meta, StoryObj } from '@storybook/vue3'
import { Card } from '../src/components/ui/card'
import LeaguePredictionCardDemo from './LeaguePredictionCardDemo.vue'
import MatchResultCardsDemo from './MatchResultCardsDemo.vue'

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

/** Match/result cards: sage (chart-1) — финал, butter (chart-2) — промежуточный итог. Palette → Pastel Light/Dark. */
export const ResultOutcomes: Story = {
  render: () => ({
    components: { MatchResultCardsDemo },
    template: '<MatchResultCardsDemo />',
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Карточки итогов: приглушённый зелёный (chart-1 / primary) для финальных результатов, приглушённый жёлтый (chart-2) для промежуточных. Переключите toolbar **Palette** на Pastel · Light / Dark.',
      },
    },
  },
}
