import type { Meta, StoryObj } from '@storybook/vue3'
import AppearanceSettingsPattern from './demos/AppearanceSettingsPattern.vue'

const meta = {
  title: 'Win Predict AI / Patterns / AppearanceSettings',
  component: AppearanceSettingsPattern,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Story-only replica of AppearanceView palette picker. Selections are local state — use Storybook Palette toolbar for live theme preview.',
      },
    },
  },
} satisfies Meta<typeof AppearanceSettingsPattern>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { AppearanceSettingsPattern },
    template: '<AppearanceSettingsPattern />',
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
