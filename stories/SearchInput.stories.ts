import type { Meta, StoryObj } from '@storybook/vue3'
import { withAllPalettes } from './storyHelpers'
import { ref } from 'vue'
import SearchInput from '../src/components/SearchInput.vue'

const meta = {
  title: 'Win Predict AI / UI / SearchInput',
  component: SearchInput,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    ariaLabel: { control: 'text' },
    clearAriaLabel: { control: 'text' },
  },
} satisfies Meta<typeof SearchInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Search tournaments…',
    ariaLabel: 'Search tournaments',
    clearAriaLabel: 'Clear search',
  },
  render: (args) => ({
    components: { SearchInput },
    setup() {
      const query = ref('')
      return { args, query }
    },
    template: `
      <div class="w-full max-w-xs space-y-2">
        <SearchInput
          v-model="query"
          :placeholder="args.placeholder"
          :aria-label="args.ariaLabel"
          :clear-aria-label="args.clearAriaLabel"
        />
        <p class="text-xs text-muted-foreground">Query: <code>{{ query || '—' }}</code></p>
      </div>
    `,
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


export const WithValue: Story = {
  args: { ...Default.args },
  render: (args) => ({
    components: { SearchInput },
    setup() {
      const query = ref('MLB')
      return { args, query }
    },
    template: `
      <div class="w-full max-w-xs">
        <SearchInput
          v-model="query"
          :placeholder="args.placeholder"
          :aria-label="args.ariaLabel"
          :clear-aria-label="args.clearAriaLabel"
        />
      </div>
    `,
  }),
}

export const InToolbar: Story = {
  args: { ...Default.args },
  render: (args) => ({
    components: { SearchInput },
    setup() {
      const query = ref('')
      return { args, query }
    },
    template: `
      <div class="flex w-full max-w-md items-center gap-3 rounded-lg border border-border bg-card p-3">
        <SearchInput
          v-model="query"
          class="flex-1"
          :placeholder="args.placeholder"
          :aria-label="args.ariaLabel"
          :clear-aria-label="args.clearAriaLabel"
        />
        <span class="shrink-0 text-xs text-muted-foreground">Sport filter</span>
      </div>
    `,
  }),
}
