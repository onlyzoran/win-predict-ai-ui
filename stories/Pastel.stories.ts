import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { IconLogin } from '@onlyzoran/win-predict-ai-icons'
import AppHeaderShell from '../src/components/AppHeaderShell.vue'
import BrandTitle from '../src/components/BrandTitle.vue'
import MatchResultCardsDemo from './MatchResultCardsDemo.vue'

const locales = ['en', 'ru'] as const
const localeLabels: Record<string, string> = {
  en: 'English',
  ru: 'Русский',
}

/** Standings rows with final vs intermediate result semantics. */
const standings = [
  { team: 'Arsenal', played: 38, status: 'final' as const, pts: 89, label: 'Champion' },
  { team: 'Man City', played: 38, status: 'final' as const, pts: 86, label: '2nd place' },
  { team: 'Liverpool', played: 37, status: 'intermediate' as const, pts: 82, label: 'In progress' },
  { team: 'Chelsea', played: 36, status: 'intermediate' as const, pts: 74, label: 'In progress' },
  { team: 'Tottenham', played: 35, status: 'intermediate' as const, pts: 68, label: 'In progress' },
]

function terminalTemplate() {
  return `
    <div class="flex min-h-[32rem] flex-col gap-0 overflow-hidden rounded-xl border border-border bg-card">
      <AppHeaderShell
        v-model:locale="locale"
        :locales="locales"
        :locale-labels="localeLabels"
        locale-aria-label="Language"
        theme-aria-label-light="Switch to light theme"
        theme-aria-label-dark="Switch to dark theme"
        github-url="https://github.com/onlyzoran/win-predict-ai"
        github-aria-label="GitHub"
      >
        <template #brand>
          <BrandTitle href="#" />
        </template>
        <template #actions>
          <a
            href="#"
            class="inline-flex items-center gap-1.5 rounded-md p-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground sm:px-2 sm:py-1.5"
          >
            <IconLogin :size="16" aria-hidden="true" />
            <span class="hidden sm:inline">Login</span>
          </a>
        </template>
      </AppHeaderShell>

      <div class="flex flex-1">
        <aside class="hidden w-44 shrink-0 border-r border-sidebar-border bg-sidebar p-3 sm:block">
          <p class="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Navigation</p>
          <nav class="flex flex-col gap-1">
            <a href="#" class="rounded-md bg-sidebar-primary px-2.5 py-1.5 text-sm font-medium text-sidebar-primary-foreground">
              Standings
            </a>
            <a href="#" class="rounded-md px-2.5 py-1.5 text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
              Predictions
            </a>
            <a href="#" class="rounded-md px-2.5 py-1.5 text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
              History
            </a>
          </nav>
        </aside>

        <main class="flex flex-1 flex-col gap-4 p-4 pt-16">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h1 class="text-lg font-semibold text-foreground">Premier League standings</h1>
              <p class="text-sm text-muted-foreground">
                Pastel palette — sage for final results, butter for in-progress
              </p>
            </div>
            <button
              type="button"
              class="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground"
            >
              Refresh
            </button>
          </div>

          <div class="flex flex-wrap gap-3 text-xs">
            <span class="inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/60 px-2.5 py-1.5 text-muted-foreground">
              <span class="size-2.5 rounded-sm bg-chart-1" aria-hidden="true" />
              Final result (chart-1 / primary)
            </span>
            <span class="inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/60 px-2.5 py-1.5 text-muted-foreground">
              <span class="size-2.5 rounded-sm bg-chart-2" aria-hidden="true" />
              Intermediate (chart-2)
            </span>
          </div>

          <MatchResultCardsDemo />

          <div class="flex h-20 items-end gap-2 rounded-lg border border-border bg-card p-3">
            <div class="h-[72%] flex-1 rounded-sm bg-chart-1" title="Final" />
            <div class="h-[48%] flex-1 rounded-sm bg-chart-2" title="Intermediate" />
            <div class="h-[64%] flex-1 rounded-sm bg-chart-3" title="chart-3" />
            <div class="h-[40%] flex-1 rounded-sm bg-chart-4" title="chart-4" />
            <div class="h-[56%] flex-1 rounded-sm bg-chart-5" title="chart-5" />
          </div>

          <div class="overflow-hidden rounded-lg border border-border bg-card">
            <table class="w-full text-sm">
              <thead class="border-b border-border bg-muted/50">
                <tr>
                  <th class="px-3 py-2 text-left font-medium text-muted-foreground">Team</th>
                  <th class="px-3 py-2 text-right font-medium text-muted-foreground">P</th>
                  <th class="px-3 py-2 text-right font-medium text-muted-foreground">Pts</th>
                  <th class="px-3 py-2 text-left font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="row in standings"
                  :key="row.team"
                  class="border-b border-border last:border-0 hover:bg-accent/40"
                >
                  <td class="px-3 py-2 font-medium text-foreground">{{ row.team }}</td>
                  <td class="px-3 py-2 text-right tabular-nums text-muted-foreground">{{ row.played }}</td>
                  <td class="px-3 py-2 text-right tabular-nums text-foreground">{{ row.pts }}</td>
                  <td class="px-3 py-2">
                    <span
                      class="inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 text-xs font-medium"
                      :class="row.status === 'final'
                        ? 'bg-chart-1/15 text-primary'
                        : 'bg-chart-2/20 text-foreground'"
                    >
                      <span
                        class="size-2 rounded-sm"
                        :class="row.status === 'final' ? 'bg-chart-1' : 'bg-chart-2'"
                        aria-hidden="true"
                      />
                      {{ row.label }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  `
}

const meta = {
  title: 'Win Predict AI / UI / Pastel',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  globals: { theme: 'pastel-light' },
  render: () => ({
    components: { AppHeaderShell, IconLogin, BrandTitle, MatchResultCardsDemo },
    setup() {
      const locale = ref('en')
      return { locale, locales, localeLabels, standings }
    },
    template: terminalTemplate(),
  }),
}

export const Light: Story = {
  globals: { theme: 'pastel-light' },
  render: () => ({
    components: { AppHeaderShell, IconLogin, BrandTitle, MatchResultCardsDemo },
    setup() {
      const locale = ref('en')
      return { locale, locales, localeLabels, standings }
    },
    template: terminalTemplate(),
  }),
}

export const Dark: Story = {
  globals: { theme: 'pastel-dark' },
  render: () => ({
    components: { AppHeaderShell, IconLogin, BrandTitle, MatchResultCardsDemo },
    setup() {
      const locale = ref('en')
      return { locale, locales, localeLabels, standings }
    },
    template: terminalTemplate(),
  }),
}

/** Карточки итогов на пастельной палитре — без полного terminal chrome. */
export const ResultCards: Story = {
  globals: { theme: 'pastel-light' },
  parameters: {
    layout: 'padded',
  },
  render: () => ({
    components: { MatchResultCardsDemo },
    template: `
      <div class="mx-auto flex w-full max-w-4xl flex-col gap-4">
        <div>
          <h1 class="text-lg font-semibold text-foreground">Result outcome cards</h1>
          <p class="text-sm text-muted-foreground">
            Sage (chart-1) — final · Butter (chart-2) — in progress
          </p>
        </div>
        <MatchResultCardsDemo />
      </div>
    `,
  }),
}

export const ResultCardsDark: Story = {
  globals: { theme: 'pastel-dark' },
  parameters: {
    layout: 'padded',
  },
  render: () => ({
    components: { MatchResultCardsDemo },
    template: `
      <div class="mx-auto flex w-full max-w-4xl flex-col gap-4">
        <div>
          <h1 class="text-lg font-semibold text-foreground">Result outcome cards</h1>
          <p class="text-sm text-muted-foreground">
            Sage (chart-1) — final · Butter (chart-2) — in progress
          </p>
        </div>
        <MatchResultCardsDemo />
      </div>
    `,
  }),
}
