<script setup lang="ts">
import { computed } from 'vue'
import { Donut } from '@unovis/ts'
import { VisDonut, VisSingleContainer } from '@unovis/vue'
import type { ChartConfig } from '../../../src/components/ui/chart'
import {
  ChartContainer,
  ChartTooltip,
  componentToString,
} from '../../../src/components/ui/chart'
import { mlbWorldSeriesTeams } from '../fixtures/teams'
import { formatPercent } from '../utils'
import WinProbabilityPieTooltipPattern from './WinProbabilityPieTooltipPattern.vue'

interface PieSlice {
  key: string
  name: string
  winProbability: number
  fill: string
}

const TOP_N = 5
const teams = mlbWorldSeriesTeams

const slices = computed<PieSlice[]>(() => {
  const top = teams.slice(0, TOP_N)
  const restCount = Math.max(0, teams.length - TOP_N)
  const restProb = teams.slice(TOP_N).reduce((sum, t) => sum + t.winProbability, 0)

  return [
    ...top.map((team, index) => ({
      key: `team-${team.id}`,
      name: team.name,
      winProbability: team.winProbability,
      fill: `var(--chart-${index + 1})`,
    })),
    {
      key: 'others',
      name: `Others (${restCount})`,
      winProbability: restProb,
      fill: 'var(--chart-4)',
    },
  ]
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
  <div data-testid="win-probability-pie" class="mx-auto w-full max-w-md space-y-4">
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
</template>
