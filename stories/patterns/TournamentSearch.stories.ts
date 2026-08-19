import type { Meta, StoryObj } from '@storybook/vue3'
import TournamentSearchPattern from './demos/TournamentSearchPattern.vue'

const meta = {
  title: 'Win Predict AI / Patterns / TournamentSearch',
  component: TournamentSearchPattern,
  tags: ['autodocs'],
} satisfies Meta<typeof TournamentSearchPattern>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { TournamentSearchPattern },
    template: '<TournamentSearchPattern />',
  }),
}

export const Light: Story = {
  globals: { theme: 'slate-teal-light' },
  ...Default,
}

export const Dark: Story = {
  globals: { theme: 'slate-teal-dark' },
  ...Default,
}
