import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import LocaleSwitcher from '../src/components/LocaleSwitcher.vue'

const locales = ['en', 'ru', 'de'] as const
const labels: Record<string, string> = {
  en: 'English',
  ru: 'Русский',
  de: 'Deutsch',
}

const meta = {
  title: 'Win Predict AI / UI / LocaleSwitcher',
  component: LocaleSwitcher,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'select', options: [...locales] },
    ariaLabel: { control: 'text' },
  },
} satisfies Meta<typeof LocaleSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Controlled: Story = {
  args: {
    modelValue: 'en',
    locales,
    labels,
    ariaLabel: 'Language',
  },
  render: (args) => ({
    components: { LocaleSwitcher },
    setup() {
      const locale = ref(args.modelValue)
      return { args, locale, locales, labels }
    },
    template: `
      <div class="flex items-center gap-3">
        <LocaleSwitcher
          v-model="locale"
          :locales="locales"
          :labels="labels"
          :aria-label="args.ariaLabel"
        />
        <span class="text-sm text-muted-foreground">Selected: <code>{{ locale }}</code></span>
      </div>
    `,
  }),
}
