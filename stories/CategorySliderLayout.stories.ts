import type { Meta, StoryObj } from '@storybook/vue3'
import CategorySliderLayoutDemo from './CategorySliderLayoutDemo.vue'
import { withAllPalettes } from './storyHelpers'

const meta = {
  title: 'Win Predict AI / UI / CategorySliderLayout',
  // Demo mounts CategorySliderLayout with sample categories and slots — autodocs must
  // not render the bare layout (required `categories` prop would break Docs/Canvas).
  component: CategorySliderLayoutDemo,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Вертикальный стек категорий с горизонтальным скроллом элементов в каждой строке. Блок фильтров в этом лейауте не предусмотрен — слота `#filters` нет, `CATEGORY_SLIDER_LAYOUT_SHOWS_FILTERS === false`. Слоты: `#category-header`, `#item`, `#empty`.',
      },
    },
  },
} satisfies Meta<typeof CategorySliderLayoutDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { CategorySliderLayoutDemo },
    template: '<CategorySliderLayoutDemo />',
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
