import type { Meta, StoryObj } from '@storybook/vue3'
import { IconBallFootball, IconPin } from '@onlyzoran/win-predict-ai-icons'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../src/components/ui/card'

const cardComponents = {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  IconBallFootball,
  IconPin,
}

/** Top 5 + Others — как на главной app (MLB World Series card snapshot). */
const leagueTeams = [
  { name: 'Los Angeles Dodgers', pct: '8%' },
  { name: 'New York Yankees', pct: '6%' },
  { name: 'Houston Astros', pct: '4%' },
  { name: 'Atlanta Braves', pct: '4%' },
  { name: 'Philadelphia Phillies', pct: '4%' },
  { name: 'Others (25)', pct: '74%' },
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

function renderLeaguePredictionCard() {
  return {
    components: cardComponents,
    template: leaguePredictionCardTemplate(),
  }
}

export const Default: Story = {
  render: () => renderLeaguePredictionCard(),
}

export const ZincLight: Story = {
  globals: { theme: 'zinc-light' },
  render: () => renderLeaguePredictionCard(),
}

export const ZincDark: Story = {
  globals: { theme: 'zinc-dark' },
  render: () => renderLeaguePredictionCard(),
}

export const SlateTealLight: Story = {
  globals: { theme: 'slate-teal-light' },
  render: () => renderLeaguePredictionCard(),
}

export const SlateTealDark: Story = {
  globals: { theme: 'slate-teal-dark' },
  render: () => renderLeaguePredictionCard(),
}

export const ClaudePlusLight: Story = {
  globals: { theme: 'claude-plus-light' },
  render: () => renderLeaguePredictionCard(),
}

export const ClaudePlusDark: Story = {
  globals: { theme: 'claude-plus-dark' },
  render: () => renderLeaguePredictionCard(),
}
