import type { Meta, StoryObj } from '@storybook/vue3'
import { IconPencil } from '@onlyzoran/win-predict-ai-icons'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../src/components/ui/card'

const cardComponents = {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  IconPencil,
}

const meta = {
  title: 'Win Predict AI / UI / Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: cardComponents,
    template: `
      <Card class="w-full max-w-sm">
        <CardHeader>
          <CardTitle>World Series win odds</CardTitle>
          <CardDescription>Projected from simulation runs for the current season.</CardDescription>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-foreground">Los Angeles Dodgers lead the field at 17%.</p>
        </CardContent>
      </Card>
    `,
  }),
}

export const Light: Story = {
  globals: { theme: 'slate-teal-light' },
  render: Default.render,
}

export const Dark: Story = {
  globals: { theme: 'slate-teal-dark' },
  render: Default.render,
}

export const Empty: Story = {
  render: () => ({
    components: cardComponents,
    template: `
      <Card class="w-full max-w-sm min-h-24" aria-label="Empty card surface">
        <CardContent class="py-0">
          <p class="text-sm text-muted-foreground">Placeholder surface for loading or empty states.</p>
        </CardContent>
      </Card>
    `,
  }),
}

export const EmptyLight: Story = {
  globals: { theme: 'slate-teal-light' },
  render: Empty.render,
}

export const EmptyDark: Story = {
  globals: { theme: 'slate-teal-dark' },
  render: Empty.render,
}

export const WithFooter: Story = {
  render: () => ({
    components: cardComponents,
    template: `
      <Card class="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Standings snapshot</CardTitle>
          <CardDescription>Updated after the latest completed games.</CardDescription>
        </CardHeader>
        <CardContent>
          <dl class="grid grid-cols-2 gap-3 text-sm">
            <div>
              <dt class="text-muted-foreground">Leader</dt>
              <dd class="font-medium text-foreground">Dodgers</dd>
            </div>
            <div>
              <dt class="text-muted-foreground">Games played</dt>
              <dd class="font-medium text-foreground">140</dd>
            </div>
          </dl>
        </CardContent>
        <CardFooter class="border-t">
          <p class="text-xs text-muted-foreground">Source: internal simulation pipeline</p>
        </CardFooter>
      </Card>
    `,
  }),
}

export const WithFooterLight: Story = {
  globals: { theme: 'slate-teal-light' },
  render: WithFooter.render,
}

export const WithFooterDark: Story = {
  globals: { theme: 'slate-teal-dark' },
  render: WithFooter.render,
}

export const WithAction: Story = {
  render: () => ({
    components: cardComponents,
    template: `
      <Card class="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Matchup card</CardTitle>
          <CardDescription>Dodgers vs Yankees — projected tonight.</CardDescription>
          <CardAction>
            <button
              type="button"
              class="inline-flex size-8 items-center justify-center rounded-md border border-border bg-background text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
              aria-label="Edit card"
            >
              <IconPencil aria-hidden="true" class="size-4" />
            </button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-foreground">Home win probability: <span class="font-medium">54%</span></p>
        </CardContent>
      </Card>
    `,
  }),
}

export const WithActionLight: Story = {
  globals: { theme: 'slate-teal-light' },
  render: WithAction.render,
}

export const WithActionDark: Story = {
  globals: { theme: 'slate-teal-dark' },
  render: WithAction.render,
}

export const HeaderOnly: Story = {
  render: () => ({
    components: cardComponents,
    template: `
      <Card class="w-full max-w-sm">
        <CardHeader class="border-b">
          <CardTitle>Season progress</CardTitle>
          <CardDescription>Major League Baseball — 140 days elapsed.</CardDescription>
        </CardHeader>
      </Card>
    `,
  }),
}

export const HeaderOnlyLight: Story = {
  globals: { theme: 'slate-teal-light' },
  render: HeaderOnly.render,
}

export const HeaderOnlyDark: Story = {
  globals: { theme: 'slate-teal-dark' },
  render: HeaderOnly.render,
}
