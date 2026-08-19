import type { Meta, StoryObj } from '@storybook/vue3'
import ThemeToggle from '../src/components/ThemeToggle.vue'

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

export const Light: Story = {
  globals: { theme: 'slate-teal-light' },
  args: { ...Default.args },
}

export const Dark: Story = {
  globals: { theme: 'slate-teal-dark' },
  args: { ...Default.args },
}

const headerShellTemplate = `
  <header
    class="flex h-14 items-center justify-end border-b border-border bg-background/80 px-6 shadow-sm backdrop-blur-md"
  >
    <ThemeToggle v-bind="args" />
  </header>
`

export const ClaudePlusLight: Story = {
  globals: { theme: 'claude-plus-light' },
  args: { ...Default.args },
  render: (args) => ({
    components: { ThemeToggle },
    setup() {
      return { args }
    },
    template: headerShellTemplate,
  }),
}

export const ClaudePlusDark: Story = {
  globals: { theme: 'claude-plus-dark' },
  args: { ...Default.args },
  render: (args) => ({
    components: { ThemeToggle },
    setup() {
      return { args }
    },
    template: headerShellTemplate,
  }),
}
