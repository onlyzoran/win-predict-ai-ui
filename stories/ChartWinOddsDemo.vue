<script setup lang="ts">
import { computed } from 'vue'
import { Donut } from '@unovis/ts'
import { VisDonut, VisSingleContainer } from '@unovis/vue'
import type { ChartConfig } from '../src/components/ui/chart'
import {
  ChartContainer,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  componentToString,
} from '../src/components/ui/chart'

interface WinOddsSlice {
  key: string
  name: string
  probability: number
  fill: string
}

/** Static mock data — same shape as WinProbabilityPieChart slices in the app. */
const slices: WinOddsSlice[] = [
  { key: 'dodgers', name: 'Los Angeles Dodgers', probability: 0.17, fill: 'var(--chart-1)' },
  { key: 'yankees', name: 'New York Yankees', probability: 0.07, fill: 'var(--chart-2)' },
  { key: 'brewers', name: 'Milwaukee Brewers', probability: 0.06, fill: 'var(--chart-3)' },
  { key: 'others', name: 'Others (25)', probability: 0.59, fill: 'var(--chart-4)' },
]

const chartConfig = computed<ChartConfig>(() => {
  const config: ChartConfig = {}
  for (const slice of slices) {
    config[slice.key] = {
      label: slice.name,
      color: slice.fill,
    }
  }
  return config
})

const valueAccessor = (d: WinOddsSlice) => d.probability
const colorAccessor = (d: WinOddsSlice) => d.fill

const tooltipTriggers = computed(() => ({
  [Donut.selectors.segment]: componentToString(chartConfig.value, ChartTooltipContent, {
    labelFormatter: () => 'World Series win odds',
  })!,
}))

function formatPercent(value: number): string {
  return `${Math.round(value * 100)}%`
}
</script>

<template>
  <div class="mx-auto w-full max-w-md space-y-4">
    <div class="space-y-1">
      <h2 class="text-sm font-medium text-foreground">World Series win odds</h2>
      <p class="text-xs text-muted-foreground">Mock chart — ChartContainer + Unovis donut</p>
    </div>

    <ChartContainer :config="chartConfig" class="mx-auto aspect-square max-h-[260px] w-full">
      <VisSingleContainer :data="slices" :margin="{ top: 4, bottom: 4 }">
        <VisDonut :value="valueAccessor" :color="colorAccessor" :arc-width="28" />
        <ChartTooltip :triggers="tooltipTriggers" />
      </VisSingleContainer>
    </ChartContainer>

    <ChartLegendContent />

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
          {{ formatPercent(slice.probability) }}
        </span>
      </li>
    </ul>
  </div>
</template>
