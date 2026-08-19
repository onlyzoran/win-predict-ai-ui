import type { Meta, StoryObj } from '@storybook/vue3'
import ThemeToggle from '../src/components/ThemeToggle.vue'
import { withAllPalettes } from './storyHelpers'

const meta = {
  title: 'Win Predict AI / UI / ThemeToggle',
  component: ThemeToggle,
  tags: ['autodocs'],
  argTypes: {
    ariaLabelLight: { control: 'text' },
    ariaLabelDark: { control: 'text' },
  },
} satisfies Meta<typeof ThemeToggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    ariaLabelLight: 'Switch to light theme',
    ariaLabelDark: 'Switch to dark theme',
  },
}

export const {
  ZincLight,
  ZincDark,
  SlateTealLight,
  SlateTealDark,
  ClaudePlusLight,
  ClaudePlusDark,
} = withAllPalettes(Default)

const headerShellTemplate = `
  <header
    class="flex h-14 items-center justify-end border-b border-border bg-background/80 px-6 shadow-sm backdrop-blur-md"
  >
    <ThemeToggle v-bind="args" />
  </header>
`

export const InHeader: Story = {
  args: { ...Default.args },
  render: (args) => ({
    components: { ThemeToggle },
    setup() {
      return { args }
    },
    template: headerShellTemplate,
  }),
}

export const {
  InHeaderZincLight,
  InHeaderZincDark,
  InHeaderSlateTealLight,
  InHeaderSlateTealDark,
  InHeaderClaudePlusLight,
  InHeaderClaudePlusDark,
} = withAllPalettes(InHeader, 'InHeader')
