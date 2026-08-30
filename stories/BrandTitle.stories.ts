import type { Meta, StoryObj } from '@storybook/vue3'
import { withAllPalettes } from './storyHelpers'
import BrandTitle from '../src/components/BrandTitle.vue'

const meta = {
  title: 'Win Predict AI / UI / BrandTitle',
  component: BrandTitle,
  tags: ['autodocs'],
  argTypes: {
    prefix: { control: 'text' },
    accent: { control: 'text' },
    suffix: { control: 'text' },
    href: { control: 'text' },
  },
} satisfies Meta<typeof BrandTitle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    prefix: 'Win Predict',
    accent: 'AI',
    suffix: '',
  },
}

export const AsLink: Story = {
  args: {
    ...Default.args,
    href: '#',
  },
}

export const AdminVariant: Story = {
  args: {
    prefix: 'Win Predict',
    accent: 'AI',
    suffix: ' Admin',
  },
}

export const InHeader: Story = {
  args: {
    ...Default.args,
    href: '#',
  },
  render: (args) => ({
    components: { BrandTitle },
    setup() {
      return { args }
    },
    template: `
      <header class="flex h-14 items-center border-b border-border bg-background/80 px-6 shadow-sm backdrop-blur-md">
        <BrandTitle v-bind="args" />
      </header>
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
  NexoraLight,
  NexoraDark,
} = withAllPalettes(Default)
