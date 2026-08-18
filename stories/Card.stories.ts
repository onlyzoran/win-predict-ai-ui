import type { Meta, StoryObj } from '@storybook/vue3'
import { IconBallFootball, IconPin, IconPencil } from '@onlyzoran/win-predict-ai-icons'
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
  IconBallFootball,
  IconPin,
  IconPencil,
}

const leagueTeams = [
  { name: 'Los Angeles Dodgers', pct: '17%' },
  { name: 'New York Yankees', pct: '7%' },
  { name: 'Milwaukee Brewers', pct: '6%' },
  { name: 'Others (25)', pct: '59%' },
]

function leaguePredictionCardTemplate() {
  const teamRows = leagueTeams
    .map(
      (team, index) => `
        <div class="flex items-center justify-between px-4 py-2">
          <span class="font-medium">${team.name}</span>
          <span class="inline-flex items-center justify-center rounded-full border border-transparent bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">${team.pct}</span>
        </div>
        ${index < leagueTeams.length - 1 ? '<div class="bg-border h-px w-full shrink-0" role="separator"></div>' : ''}
      `,
    )
    .join('')

  return `
    <Card class="w-full p-0 sm:max-w-xs sm:min-w-3xs">
      <CardHeader class="px-4 pt-4">
        <div class="flex justify-between">
          <CardTitle class="flex items-center gap-2">
            <IconBallFootball aria-hidden="true" class="size-4" />
            MLB World Series 26/27
          </CardTitle>
          <button
            type="button"
            class="rounded-md px-2 py-1 text-sm font-medium uppercase text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
            aria-label="Pin tournament"
          >
            <IconPin aria-hidden="true" class="size-4" />
          </button>
        </div>
        <div
          class="bg-primary/20 relative mt-4 h-1 w-full overflow-hidden rounded-full"
          role="progressbar"
          aria-valuenow="64"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="Season progress"
        >
          <div class="bg-primary h-full w-[64%] transition-all"></div>
        </div>
      </CardHeader>
      <CardContent class="p-0">
        ${teamRows}
      </CardContent>
      <CardFooter class="flex gap-2 px-4 pb-4">
        <button
          type="button"
          class="inline-flex h-9 flex-1 cursor-pointer items-center justify-center gap-2 rounded-md border bg-background px-4 py-2 text-sm font-medium shadow-xs transition-all hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
        >
          Preview
        </button>
        <button
          type="button"
          class="inline-flex h-9 flex-1 cursor-pointer items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
        >
          Details
        </button>
      </CardFooter>
    </Card>
  `
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
    template: leaguePredictionCardTemplate(),
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

export const WithHeaderDescription: Story = {
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

export const WithHeaderDescriptionLight: Story = {
  globals: { theme: 'slate-teal-light' },
  render: WithHeaderDescription.render,
}

export const WithHeaderDescriptionDark: Story = {
  globals: { theme: 'slate-teal-dark' },
  render: WithHeaderDescription.render,
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
