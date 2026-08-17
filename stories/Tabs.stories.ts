import type { Meta, StoryObj } from '@storybook/vue3'
import {
  IconArrowsSort,
  IconFlag,
  IconGripVertical,
  IconPencil,
  IconPin,
  IconSearch,
} from '@onlyzoran/win-predict-ai-icons'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../src/components/ui/tabs'

const meta = {
  title: 'Win Predict AI / UI / Tabs',
  component: Tabs,
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

function tabsTemplate() {
  return `
    <Tabs default-value="overview" class="w-full max-w-md">
      <TabsList aria-label="Example tabs">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="stats">Stats</TabsTrigger>
        <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" class="rounded-lg border border-border bg-card p-4 text-card-foreground">
        <p class="text-sm text-muted-foreground">General information for the selected item.</p>
      </TabsContent>
      <TabsContent value="stats" class="rounded-lg border border-border bg-card p-4 text-card-foreground">
        <p class="text-sm text-muted-foreground">Metrics and performance data.</p>
      </TabsContent>
      <TabsContent value="disabled" class="rounded-lg border border-border bg-card p-4 text-card-foreground">
        <p class="text-sm text-muted-foreground">This panel is not reachable while disabled.</p>
      </TabsContent>
    </Tabs>
  `
}

export const Default: Story = {
  render: () => ({
    components: { Tabs, TabsList, TabsTrigger, TabsContent },
    template: tabsTemplate(),
  }),
}

export const Light: Story = {
  globals: { theme: 'win-predict-light' },
  render: () => ({
    components: { Tabs, TabsList, TabsTrigger, TabsContent },
    template: tabsTemplate(),
  }),
}

export const Dark: Story = {
  globals: { theme: 'win-predict-dark' },
  render: () => ({
    components: { Tabs, TabsList, TabsTrigger, TabsContent },
    template: tabsTemplate(),
  }),
}

export const NarrowScroll: Story = {
  render: () => ({
    components: { Tabs, TabsList, TabsTrigger, TabsContent },
    template: `
      <Tabs default-value="tab-1" class="w-56">
        <TabsList aria-label="Scrollable tabs">
          <TabsTrigger value="tab-1">First</TabsTrigger>
          <TabsTrigger value="tab-2">Second tab</TabsTrigger>
          <TabsTrigger value="tab-3">Third tab</TabsTrigger>
          <TabsTrigger value="tab-4">Fourth tab</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1" class="text-sm text-muted-foreground">Content for the first tab.</TabsContent>
        <TabsContent value="tab-2" class="text-sm text-muted-foreground">Content for the second tab.</TabsContent>
        <TabsContent value="tab-3" class="text-sm text-muted-foreground">Content for the third tab.</TabsContent>
        <TabsContent value="tab-4" class="text-sm text-muted-foreground">Content for the fourth tab.</TabsContent>
      </Tabs>
    `,
  }),
}

function withIconsTemplate() {
  return `
    <Tabs default-value="search" class="w-full max-w-md">
      <TabsList aria-label="Tabs with icons">
        <TabsTrigger value="search" variant="with-icon">
          <IconSearch aria-hidden="true" />
          Search
        </TabsTrigger>
        <TabsTrigger value="pinned" variant="with-icon">
          <IconPin aria-hidden="true" />
          Pinned
        </TabsTrigger>
        <TabsTrigger value="edit" variant="with-icon" disabled>
          <IconPencil aria-hidden="true" />
          Edit
        </TabsTrigger>
      </TabsList>
      <TabsContent value="search" class="rounded-lg border border-border bg-card p-4 text-card-foreground">
        <p class="text-sm text-muted-foreground">Search results and filters.</p>
      </TabsContent>
      <TabsContent value="pinned" class="rounded-lg border border-border bg-card p-4 text-card-foreground">
        <p class="text-sm text-muted-foreground">Pinned items for quick access.</p>
      </TabsContent>
      <TabsContent value="edit" class="rounded-lg border border-border bg-card p-4 text-card-foreground">
        <p class="text-sm text-muted-foreground">Edit mode is disabled in this example.</p>
      </TabsContent>
    </Tabs>
  `
}

export const WithIcons: Story = {
  render: () => ({
    components: { Tabs, TabsList, TabsTrigger, TabsContent, IconSearch, IconPin, IconPencil },
    template: withIconsTemplate(),
  }),
}

export const WithIconsLight: Story = {
  globals: { theme: 'win-predict-light' },
  render: () => ({
    components: { Tabs, TabsList, TabsTrigger, TabsContent, IconSearch, IconPin, IconPencil },
    template: withIconsTemplate(),
  }),
}

export const WithIconsDark: Story = {
  globals: { theme: 'win-predict-dark' },
  render: () => ({
    components: { Tabs, TabsList, TabsTrigger, TabsContent, IconSearch, IconPin, IconPencil },
    template: withIconsTemplate(),
  }),
}

export const IconOnly: Story = {
  render: () => ({
    components: { Tabs, TabsList, TabsTrigger, TabsContent, IconSearch, IconPin, IconPencil },
    template: `
      <Tabs default-value="search" class="w-fit">
        <TabsList aria-label="Icon-only tabs">
          <TabsTrigger value="search" variant="icon-only" aria-label="Search">
            <IconSearch aria-hidden="true" />
          </TabsTrigger>
          <TabsTrigger value="pinned" variant="icon-only" aria-label="Pinned">
            <IconPin aria-hidden="true" />
          </TabsTrigger>
          <TabsTrigger value="edit" variant="icon-only" aria-label="Edit" disabled>
            <IconPencil aria-hidden="true" />
          </TabsTrigger>
        </TabsList>
        <TabsContent value="search" class="mt-2 text-sm text-muted-foreground">Search panel.</TabsContent>
        <TabsContent value="pinned" class="mt-2 text-sm text-muted-foreground">Pinned panel.</TabsContent>
        <TabsContent value="edit" class="mt-2 text-sm text-muted-foreground">Edit panel.</TabsContent>
      </Tabs>
    `,
  }),
}

/**
 * Composition case for win-predict-ai league detail page:
 * season header stays above tabs; heavy widgets (standings, bracket, bump chart) live in separate panels.
 */
function leagueDetailTabsTemplate() {
  const standingsRows = [
    { team: 'Los Angeles Dodgers', conf: 'NL', pos: '1', gp: 140, wl: '84-56', pct: '.600', win: '17%' },
    { team: 'New York Yankees', conf: 'AL', pos: '1', gp: 140, wl: '78-62', pct: '.557', win: '7%' },
    { team: 'Milwaukee Brewers', conf: 'NL', pos: '2', gp: 140, wl: '76-64', pct: '.543', win: '6%' },
    { team: 'Tampa Bay Rays', conf: 'AL', pos: '2', gp: 140, wl: '74-66', pct: '.529', win: '5%' },
  ]

  const standingsTable = `
    <div class="overflow-x-auto">
      <table class="w-full min-w-[32rem] text-sm">
        <thead>
          <tr class="border-b border-border text-left text-muted-foreground">
            <th class="pb-2 pr-4 font-medium">Team</th>
            <th class="pb-2 pr-3 font-medium">Conf</th>
            <th class="pb-2 pr-3 font-medium">Pos</th>
            <th class="pb-2 pr-3 font-medium">GP</th>
            <th class="pb-2 pr-3 font-medium">W-L</th>
            <th class="pb-2 pr-3 font-medium">PCT</th>
            <th class="pb-2 font-medium">Win %</th>
          </tr>
        </thead>
        <tbody>
          ${standingsRows
            .map(
              (row) => `
            <tr class="border-b border-border/60">
              <td class="py-2.5 pr-4 font-medium text-foreground">${row.team}</td>
              <td class="py-2.5 pr-3 text-muted-foreground">${row.conf}</td>
              <td class="py-2.5 pr-3 text-muted-foreground">${row.pos}</td>
              <td class="py-2.5 pr-3 text-muted-foreground">${row.gp}</td>
              <td class="py-2.5 pr-3 text-muted-foreground">${row.wl}</td>
              <td class="py-2.5 pr-3 text-muted-foreground">${row.pct}</td>
              <td class="py-2.5">
                <span class="inline-flex rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-foreground">${row.win}</span>
              </td>
            </tr>
          `,
            )
            .join('')}
        </tbody>
      </table>
    </div>
  `

  const donutLegend = [
    { team: 'Los Angeles Dodgers', pct: '17%', tone: 'bg-primary' },
    { team: 'New York Yankees', pct: '7%', tone: 'bg-primary/70' },
    { team: 'Milwaukee Brewers', pct: '6%', tone: 'bg-primary/40' },
    { team: 'Others (25)', pct: '59%', tone: 'bg-muted-foreground/30' },
  ]

  return `
    <div class="mx-auto w-full max-w-5xl space-y-6">
      <header class="space-y-4">
        <div class="space-y-1">
          <h1 class="text-lg font-semibold text-foreground">Major League Baseball | World Series</h1>
          <p class="text-sm text-muted-foreground">Season 2026</p>
        </div>
        <div class="space-y-2">
          <div class="h-2 overflow-hidden rounded-full bg-muted">
            <div class="h-full w-[64%] rounded-full bg-foreground/80" aria-hidden="true"></div>
          </div>
          <div class="flex flex-wrap justify-between gap-2 text-xs text-muted-foreground">
            <span>Mar 26, 2026 (ongoing for 140 days)</span>
            <span>Nov 1, 2026 (80 days left)</span>
          </div>
        </div>
      </header>

      <Tabs default-value="standings" class="w-full">
        <TabsList aria-label="League detail sections">
          <TabsTrigger value="standings" variant="with-icon">
            <IconGripVertical aria-hidden="true" />
            Standings
          </TabsTrigger>
          <TabsTrigger value="playoff" variant="with-icon">
            <IconFlag aria-hidden="true" />
            Playoff projection
          </TabsTrigger>
          <TabsTrigger value="movement" variant="with-icon">
            <IconArrowsSort aria-hidden="true" />
            Standings movement
          </TabsTrigger>
        </TabsList>

        <TabsContent value="standings" class="space-y-4">
          <div class="grid gap-4 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
            <section class="rounded-lg border border-border bg-card p-4 text-card-foreground">
              <h2 class="sr-only">Standings table</h2>
              ${standingsTable}
            </section>
            <section class="rounded-lg border border-border bg-card p-4 text-card-foreground">
              <h2 class="mb-4 text-sm font-medium text-foreground">World Series win odds</h2>
              <div class="mx-auto mb-4 flex size-36 items-center justify-center rounded-full border-[10px] border-muted bg-background" aria-hidden="true">
                <div class="size-20 rounded-full bg-card"></div>
              </div>
              <ul class="space-y-2 text-sm">
                ${donutLegend
                  .map(
                    (item) => `
                  <li class="flex items-center justify-between gap-3">
                    <span class="flex min-w-0 items-center gap-2">
                      <span class="size-2.5 shrink-0 rounded-sm ${item.tone}" aria-hidden="true"></span>
                      <span class="truncate text-foreground">${item.team}</span>
                    </span>
                    <span class="shrink-0 text-muted-foreground">${item.pct}</span>
                  </li>
                `,
                  )
                  .join('')}
              </ul>
            </section>
          </div>
        </TabsContent>

        <TabsContent value="playoff">
          <section class="rounded-lg border border-border bg-card p-4 text-card-foreground">
            <div class="mb-6 space-y-1">
              <h2 class="text-base font-semibold text-foreground">Playoff projection</h2>
              <p class="text-sm text-muted-foreground">Bracket projected from World Series win odds.</p>
            </div>
            <div class="grid gap-4 overflow-x-auto lg:grid-cols-[1fr_auto_1fr] lg:items-start">
              <div class="min-w-[12rem] space-y-3">
                <p class="text-center text-xs font-medium uppercase tracking-wide text-muted-foreground">American League</p>
                <div class="space-y-2">
                  <div class="rounded-md border border-border bg-background p-2 text-xs">
                    <p class="mb-1 text-[10px] uppercase text-muted-foreground">Wild Card</p>
                    <p class="font-medium text-foreground">Red Sox <span class="float-right text-muted-foreground">2%</span></p>
                    <p class="text-muted-foreground">Rangers</p>
                  </div>
                  <div class="rounded-md border border-border bg-background p-2 text-xs">
                    <p class="mb-1 text-[10px] uppercase text-muted-foreground">ALCS</p>
                    <p class="font-medium text-foreground">Yankees <span class="float-right text-muted-foreground">7%</span></p>
                    <p class="text-muted-foreground">Rays</p>
                  </div>
                </div>
              </div>
              <div class="flex min-w-[10rem] flex-col items-center justify-center rounded-lg border border-border bg-background p-4 text-center">
                <p class="text-[10px] uppercase tracking-wide text-muted-foreground">World Series</p>
                <p class="mt-2 text-sm font-semibold text-foreground">Dodgers vs Yankees</p>
                <p class="mt-4 text-[10px] uppercase tracking-wide text-muted-foreground">Projected champion</p>
                <p class="mt-1 text-lg font-semibold text-foreground">Dodgers</p>
                <span class="mt-2 inline-flex rounded-md bg-muted px-2 py-0.5 text-xs font-medium">17%</span>
              </div>
              <div class="min-w-[12rem] space-y-3">
                <p class="text-center text-xs font-medium uppercase tracking-wide text-muted-foreground">National League</p>
                <div class="space-y-2">
                  <div class="rounded-md border border-border bg-background p-2 text-xs">
                    <p class="mb-1 text-[10px] uppercase text-muted-foreground">Wild Card</p>
                    <p class="font-medium text-foreground">Braves <span class="float-right text-muted-foreground">3%</span></p>
                    <p class="text-muted-foreground">Diamondbacks</p>
                  </div>
                  <div class="rounded-md border border-border bg-background p-2 text-xs">
                    <p class="mb-1 text-[10px] uppercase text-muted-foreground">NLCS</p>
                    <p class="font-medium text-foreground">Dodgers <span class="float-right text-muted-foreground">17%</span></p>
                    <p class="text-muted-foreground">Brewers</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="movement">
          <section class="rounded-lg border border-border bg-card p-4 text-card-foreground">
            <h2 class="mb-4 text-base font-semibold text-foreground">Standings movement</h2>
            <div class="relative min-h-[18rem] overflow-hidden rounded-md border border-border bg-background">
              <svg viewBox="0 0 640 220" class="h-full w-full" aria-hidden="true">
                <path d="M20 30 H620" class="stroke-border" fill="none" stroke-width="1" />
                <path d="M20 110 H620" class="stroke-border" fill="none" stroke-width="1" />
                <path d="M20 190 H620" class="stroke-border" fill="none" stroke-width="1" />
                <path d="M40 40 C120 40, 120 180, 200 180" class="stroke-primary" fill="none" stroke-width="2" />
                <path d="M40 80 C140 80, 140 60, 240 60" class="stroke-primary/70" fill="none" stroke-width="2" />
                <path d="M40 120 C160 120, 160 40, 280 40" class="stroke-primary/50" fill="none" stroke-width="2" />
                <path d="M40 160 C180 160, 180 100, 300 100" class="stroke-muted-foreground" fill="none" stroke-width="2" />
              </svg>
              <div class="absolute left-4 top-4 rounded-md border border-border bg-card/95 p-3 text-xs shadow-sm">
                <p class="font-medium text-foreground">Apr 16, 2026</p>
                <ul class="mt-2 space-y-1 text-muted-foreground">
                  <li>Tampa Bay Rays — 4</li>
                  <li>Milwaukee Brewers — 10</li>
                  <li>Atlanta Braves — 3</li>
                </ul>
              </div>
            </div>
            <p class="mt-3 text-xs text-muted-foreground">
              Bump chart widget from the app; tab keeps the tall interactive canvas isolated from the standings grid.
            </p>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  `
}

const leagueDetailComponents = {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  IconGripVertical,
  IconFlag,
  IconArrowsSort,
}

export const LeagueDetail: Story = {
  render: () => ({
    components: leagueDetailComponents,
    template: leagueDetailTabsTemplate(),
  }),
}

export const LeagueDetailLight: Story = {
  globals: { theme: 'win-predict-light' },
  render: () => ({
    components: leagueDetailComponents,
    template: leagueDetailTabsTemplate(),
  }),
}

export const LeagueDetailDark: Story = {
  globals: { theme: 'win-predict-dark' },
  render: () => ({
    components: leagueDetailComponents,
    template: leagueDetailTabsTemplate(),
  }),
}
