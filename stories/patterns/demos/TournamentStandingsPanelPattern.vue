<script setup lang="ts">
import { computed } from 'vue'
import { Donut } from '@unovis/ts'
import { VisDonut, VisSingleContainer } from '@unovis/vue'
import { Badge } from '../../../src/components/ui/badge'
import { Separator } from '../../../src/components/ui/separator'
import type { ChartConfig } from '../../../src/components/ui/chart'
import {
  ChartContainer,
  ChartTooltip,
  componentToString,
} from '../../../src/components/ui/chart'
import type { TeamProbability } from '../types'
import {
  abbreviateGroup,
  formatFootballRecord,
  formatGoalDifference,
  formatPercent,
  formatRecord,
  formatWinPercent,
  hasFootballStandings,
  hasWinsStandings,
} from '../utils'
import StandingsGlossaryPattern from './StandingsGlossaryPattern.vue'
import WinProbabilityPieTooltipPattern from './WinProbabilityPieTooltipPattern.vue'

interface PieSlice {
  key: string
  name: string
  winProbability: number
  fill: string
}

const props = withDefaults(
  defineProps<{
    teams: TeamProbability[]
    compact?: boolean
    showChart?: boolean
    showGlossary?: boolean
  }>(),
  {
    compact: false,
    showChart: false,
    showGlossary: false,
  },
)

const TOP_N = 5
const isFootball = computed(() => hasFootballStandings(props.teams))
const showStandings = computed(() => hasWinsStandings(props.teams))

const slices = computed<PieSlice[]>(() => {
  const top = props.teams.slice(0, TOP_N)
  const restCount = Math.max(0, props.teams.length - TOP_N)
  const restProb = props.teams.slice(TOP_N).reduce((sum, t) => sum + t.winProbability, 0)
  const aggregated = [
    ...top,
    ...(restCount > 0
      ? [{ id: 'others', name: `Others (${restCount})`, winProbability: restProb }]
      : []),
  ]

  return aggregated.map((team, index) => ({
    key: team.id === 'others' ? 'others' : `team-${team.id}`,
    name: team.name,
    winProbability: team.winProbability,
    fill: `var(--chart-${(index % 5) + 1})`,
  }))
})

const chartConfig = computed<ChartConfig>(() => {
  const config: ChartConfig = {}
  for (const slice of slices.value) {
    config[slice.key] = { label: slice.name, color: slice.fill }
  }
  return config
})

const tooltipTriggers = computed(() => ({
  [Donut.selectors.segment]: componentToString({}, WinProbabilityPieTooltipPattern)!,
}))
</script>

<template>
  <div class="space-y-3">
    <div
      :class="
        showChart
          ? 'grid items-start gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,240px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,280px)]'
          : undefined
      "
    >
      <div v-if="showStandings" class="min-w-0 overflow-x-auto">
        <table
          v-if="isFootball"
          data-testid="football-standings-table"
          class="w-full table-fixed border-collapse text-sm"
          :class="compact ? undefined : 'md:min-w-[42rem]'"
        >
          <colgroup>
            <col />
            <col v-if="compact" class="w-20 md:w-16" />
            <template v-if="!compact">
              <col class="hidden w-9 md:table-column" />
              <col class="hidden w-8 md:table-column" />
              <col class="hidden w-8 md:table-column" />
              <col class="hidden w-8 md:table-column" />
              <col class="hidden w-9 md:table-column" />
              <col class="hidden w-9 md:table-column" />
              <col class="hidden w-9 md:table-column" />
            </template>
            <col class="w-12 md:w-10" />
            <col class="w-16 md:w-14" />
          </colgroup>
          <thead>
            <tr class="text-xs font-medium text-muted-foreground">
              <th class="pb-2 pr-3 text-left font-medium">Team</th>
              <th v-if="compact" class="pb-2 text-center font-medium">Record</th>
              <template v-if="!compact">
                <th class="hidden pb-2 text-center font-medium md:table-cell">GP</th>
                <th class="hidden pb-2 text-center font-medium md:table-cell">W</th>
                <th class="hidden pb-2 text-center font-medium md:table-cell">D</th>
                <th class="hidden pb-2 text-center font-medium md:table-cell">L</th>
                <th class="hidden pb-2 text-center font-medium md:table-cell">GF</th>
                <th class="hidden pb-2 text-center font-medium md:table-cell">GA</th>
                <th class="hidden pb-2 text-center font-medium md:table-cell">GD</th>
              </template>
              <th class="pb-2 text-center font-medium">Pts</th>
              <th class="pb-2 text-center font-medium">Win chance</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(team, index) in teams"
              :key="team.id"
              class="border-border"
              :class="index < teams.length - 1 ? 'border-b' : undefined"
            >
              <td class="truncate py-2 pr-3 font-medium">
                <span
                  v-if="!compact && team.standings?.rank != null"
                  class="mr-2 inline-block w-4 text-center tabular-nums text-muted-foreground"
                >
                  {{ team.standings.rank }}
                </span>
                {{ team.name }}
              </td>
              <td v-if="compact" class="py-2 text-center tabular-nums text-muted-foreground">
                <template v-if="team.standings">
                  {{
                    formatFootballRecord(
                      team.standings.wins,
                      team.standings.draws ?? 0,
                      team.standings.losses,
                    )
                  }}
                </template>
                <template v-else>—</template>
              </td>
              <template v-if="!compact">
                <td class="hidden py-2 text-center tabular-nums text-muted-foreground md:table-cell">
                  {{ team.standings?.played ?? '—' }}
                </td>
                <td class="hidden py-2 text-center tabular-nums text-muted-foreground md:table-cell">
                  {{ team.standings?.wins ?? '—' }}
                </td>
                <td class="hidden py-2 text-center tabular-nums text-muted-foreground md:table-cell">
                  {{ team.standings?.draws ?? '—' }}
                </td>
                <td class="hidden py-2 text-center tabular-nums text-muted-foreground md:table-cell">
                  {{ team.standings?.losses ?? '—' }}
                </td>
                <td class="hidden py-2 text-center tabular-nums text-muted-foreground md:table-cell">
                  {{ team.standings?.goalsFor ?? '—' }}
                </td>
                <td class="hidden py-2 text-center tabular-nums text-muted-foreground md:table-cell">
                  {{ team.standings?.goalsAgainst ?? '—' }}
                </td>
                <td class="hidden py-2 text-center tabular-nums text-muted-foreground md:table-cell">
                  <template v-if="team.standings?.goalDifference != null">
                    {{ formatGoalDifference(team.standings.goalDifference) }}
                  </template>
                  <template v-else>—</template>
                </td>
              </template>
              <td class="py-2 text-center tabular-nums font-medium">
                {{ team.standings?.points ?? '—' }}
              </td>
              <td class="py-2">
                <div class="flex justify-center">
                  <Badge variant="secondary" class="shrink-0">
                    {{ formatPercent(team.winProbability) }}
                  </Badge>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <table
          v-else
          data-testid="mlb-standings-table"
          class="w-full table-fixed border-collapse text-sm"
          :class="compact ? undefined : 'md:min-w-[34rem]'"
        >
          <colgroup>
            <col />
            <template v-if="!compact">
              <col class="hidden w-11 md:table-column" />
              <col class="hidden w-9 md:table-column" />
              <col class="hidden w-10 md:table-column" />
            </template>
            <col class="w-16 md:w-14" />
            <col v-if="!compact" class="hidden w-11 md:table-column" />
            <col class="w-16 md:w-14" />
          </colgroup>
          <thead>
            <tr class="text-xs font-medium text-muted-foreground">
              <th class="pb-2 pr-3 text-left font-medium">Team</th>
              <template v-if="!compact">
                <th class="hidden pb-2 text-center font-medium md:table-cell">Conf</th>
                <th class="hidden pb-2 text-center font-medium md:table-cell">Pos</th>
                <th class="hidden pb-2 text-center font-medium md:table-cell">GP</th>
              </template>
              <th class="pb-2 text-center font-medium">Record</th>
              <th v-if="!compact" class="hidden pb-2 text-center font-medium md:table-cell">Pct</th>
              <th class="pb-2 text-center font-medium">Win chance</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(team, index) in teams"
              :key="team.id"
              class="border-border"
              :class="index < teams.length - 1 ? 'border-b' : undefined"
            >
              <td class="truncate py-2 pr-3 font-medium">{{ team.name }}</td>
              <template v-if="!compact">
                <td class="hidden py-2 text-center tabular-nums text-muted-foreground md:table-cell">
                  {{ team.standings?.group ? abbreviateGroup(team.standings.group) : '—' }}
                </td>
                <td class="hidden py-2 text-center tabular-nums text-muted-foreground md:table-cell">
                  {{ team.standings?.playoffSeed ?? '—' }}
                </td>
                <td class="hidden py-2 text-center tabular-nums text-muted-foreground md:table-cell">
                  {{ team.standings?.played ?? '—' }}
                </td>
              </template>
              <td class="py-2 text-center tabular-nums text-muted-foreground">
                <template v-if="team.standings">
                  {{ formatRecord(team.standings.wins, team.standings.losses) }}
                </template>
                <template v-else>—</template>
              </td>
              <td
                v-if="!compact"
                class="hidden py-2 text-center tabular-nums text-muted-foreground md:table-cell"
              >
                {{
                  team.standings?.winPercent != null
                    ? formatWinPercent(team.standings.winPercent)
                    : '—'
                }}
              </td>
              <td class="py-2">
                <div class="flex justify-center">
                  <Badge variant="secondary" class="shrink-0">
                    {{ formatPercent(team.winProbability) }}
                  </Badge>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-else>
        <div v-for="(team, index) in teams" :key="team.id">
          <div class="flex items-center justify-between gap-3 py-2">
            <span class="truncate font-medium">{{ team.name }}</span>
            <Badge variant="secondary" class="shrink-0">
              {{ formatPercent(team.winProbability) }}
            </Badge>
          </div>
          <Separator v-if="index < teams.length - 1" />
        </div>
      </div>

      <div v-if="showChart" data-testid="win-probability-pie" class="w-full space-y-4 md:sticky md:top-20">
        <ChartContainer :config="chartConfig" class="mx-auto aspect-square max-h-[260px] w-full">
          <VisSingleContainer :data="slices" :margin="{ top: 4, bottom: 4 }">
            <VisDonut
              :value="(d: PieSlice) => d.winProbability"
              :color="(d: PieSlice) => d.fill"
              :arc-width="28"
            />
            <ChartTooltip :triggers="tooltipTriggers" />
          </VisSingleContainer>
        </ChartContainer>

        <ul class="grid gap-2 text-sm">
          <li v-for="slice in slices" :key="slice.key" class="flex items-center justify-between gap-3">
            <span class="flex min-w-0 items-center gap-2">
              <span
                class="size-2.5 shrink-0 rounded-xs"
                :style="{ backgroundColor: slice.fill }"
                aria-hidden="true"
              />
              <span class="truncate font-medium">{{ slice.name }}</span>
            </span>
            <span class="shrink-0 text-muted-foreground tabular-nums">
              {{ formatPercent(slice.winProbability) }}
            </span>
          </li>
        </ul>
      </div>
    </div>

    <StandingsGlossaryPattern
      v-if="showGlossary && showStandings"
      :variant="isFootball ? 'football' : 'mlb'"
    />
  </div>
</template>
