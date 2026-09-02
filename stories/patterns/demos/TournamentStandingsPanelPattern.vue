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
  formatPercent,
  formatRecord,
  formatWinPercent,
  hasWinsStandings,
  shortTeamName,
} from '../utils'
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
  }>(),
  {
    compact: false,
    showChart: false,
  },
)

const TOP_N = 5
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
  <div
    :class="
      showChart
        ? 'grid items-start gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,240px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,280px)]'
        : undefined
    "
  >
    <div v-if="showStandings" class="min-w-0 overflow-x-auto">
      <table
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
            <td class="truncate py-2 pr-3 font-medium">
              <span :title="team.name">
                <span class="md:hidden">{{ shortTeamName(team.name) }}</span>
                <span class="hidden md:inline">{{ team.name }}</span>
              </span>
            </td>
            <template v-if="!compact">
              <td class="hidden py-2 text-center tabular-nums text-muted-foreground md:table-cell">
                {{ team.standings ? abbreviateGroup(team.standings.group) : '—' }}
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
              {{ team.standings ? formatWinPercent(team.standings.winPercent) : '—' }}
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
          <span class="truncate font-medium" :title="team.name">
            <span class="md:hidden">{{ shortTeamName(team.name) }}</span>
            <span class="hidden md:inline">{{ team.name }}</span>
          </span>
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
            <span class="truncate font-medium" :title="slice.name">
              <template v-if="slice.key === 'others'">{{ slice.name }}</template>
              <template v-else>
                <span class="md:hidden">{{ shortTeamName(slice.name) }}</span>
                <span class="hidden md:inline">{{ slice.name }}</span>
              </template>
            </span>
          </span>
          <span class="shrink-0 text-muted-foreground tabular-nums">
            {{ formatPercent(slice.winProbability) }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
