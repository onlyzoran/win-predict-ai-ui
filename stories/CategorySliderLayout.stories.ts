import type { Meta, StoryObj } from '@storybook/vue3'
import CategorySliderLayout from '../src/components/CategorySliderLayout.vue'
import CategorySliderLayoutDemo from './CategorySliderLayoutDemo.vue'

const meta = {
  title: 'Win Predict AI / UI / CategorySliderLayout',
  component: CategorySliderLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Вертикальный стек категорий с горизонтальным скроллом элементов в каждой строке. Блок фильтров в этом лейауте не предусмотрен — слота `#filters` нет, `CATEGORY_SLIDER_LAYOUT_SHOWS_FILTERS === false`.',
      },
    },
  },
} satisfies Meta<typeof CategorySliderLayout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { CategorySliderLayoutDemo },
    template: '<CategorySliderLayoutDemo />',
  }),
}
