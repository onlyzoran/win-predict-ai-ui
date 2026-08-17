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
  globals: { theme: 'win-predict-light' },
  args: { ...Default.args },
}

export const Dark: Story = {
  globals: { theme: 'win-predict-dark' },
  args: { ...Default.args },
}
