import type { Meta, StoryObj } from '@storybook/vue3'
import { withAllPalettes } from '../storyHelpers'
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
          'Story-only replica of AppearanceView palette picker. Selections are local state — use Storybook Palette toolbar for live theme preview. NexoraLight / NexoraDark: toolbar on Nexora while nested swatches show each palette’s own tokens.',
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


export const {
  ZincLight,
  ZincDark,
  SlateTealLight,
  SlateTealDark,
  ClaudePlusLight,
  ClaudePlusDark,
  PastelLight,
  PastelDark,
  NexoraLight,
  NexoraDark,
} = withAllPalettes(Default)

