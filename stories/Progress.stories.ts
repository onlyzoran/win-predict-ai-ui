import type { Meta, StoryObj } from '@storybook/vue3'
import { withAllPalettes } from './storyHelpers'
import { Progress } from '../src/components/ui/progress'

const meta = {
  title: 'Win Predict AI / UI / Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: { type: 'range', min: 0, max: 100, step: 1 } },
  },
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { modelValue: 64 },
  render: (args) => ({
    components: { Progress },
    setup() {
      return { args }
    },
    template: `
      <div class="w-full max-w-md space-y-2">
        <Progress v-bind="args" />
        <p class="text-xs text-muted-foreground">Season progress — {{ args.modelValue }}%</p>
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


export const Values: Story = {
  render: () => ({
    components: { Progress },
    template: `
      <div class="w-full max-w-md space-y-4">
        <div class="space-y-1">
          <p class="text-xs text-muted-foreground">0%</p>
          <Progress :model-value="0" />
        </div>
        <div class="space-y-1">
          <p class="text-xs text-muted-foreground">33%</p>
          <Progress :model-value="33" />
        </div>
        <div class="space-y-1">
          <p class="text-xs text-muted-foreground">100%</p>
          <Progress :model-value="100" />
        </div>
      </div>
    `,
  }),
}
