import type { Meta, StoryObj } from '@storybook/vue3'
import { withAllPalettes } from './storyHelpers'
import { Separator } from '../src/components/ui/separator'

const meta = {
  title: 'Win Predict AI / UI / Separator',
  component: Separator,
  tags: ['autodocs'],
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Separator },
    template: `
      <div class="w-full max-w-md space-y-4">
        <p class="text-sm text-foreground">Standings</p>
        <Separator />
        <p class="text-sm text-muted-foreground">Table rows below the divider.</p>
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


export const Vertical: Story = {
  render: () => ({
    components: { Separator },
    template: `
      <div class="flex h-10 items-center gap-4 text-sm">
        <span class="text-foreground">Overview</span>
        <Separator orientation="vertical" />
        <span class="text-muted-foreground">Stats</span>
        <Separator orientation="vertical" />
        <span class="text-muted-foreground">History</span>
      </div>
    `,
  }),
}

export const InCard: Story = {
  render: () => ({
    components: { Separator },
    template: `
      <div class="w-full max-w-sm rounded-lg border border-border bg-card p-4 text-card-foreground">
        <p class="text-sm font-medium">World Series</p>
        <p class="text-xs text-muted-foreground">Season 2026</p>
        <Separator class="my-3" />
        <p class="text-sm text-muted-foreground">Dodgers lead win probability at 17%.</p>
      </div>
    `,
  }),
}
