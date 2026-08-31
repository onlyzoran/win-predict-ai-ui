<script setup lang="ts">
import { IconBallFootball, IconChartSankey, IconReplace, IconTable } from '@onlyzoran/win-predict-ai-icons'
import { Progress, Tabs, TabsContent, TabsList, TabsTrigger } from '../../../src/index'
import { mockRankSeries } from '../fixtures/rankSeries'
import { mlbWorldSeriesTeams } from '../fixtures/teams'
import MlbPlayoffBracketPattern from './MlbPlayoffBracketPattern.vue'
import StandingsRankChartPattern from './StandingsRankChartPattern.vue'
import TournamentStandingsPanelPattern from './TournamentStandingsPanelPattern.vue'

withDefaults(
  defineProps<{
    compact?: boolean
    tabbed?: boolean
  }>(),
  {
    compact: false,
    tabbed: true,
  },
)

const teams = mlbWorldSeriesTeams
const progress = 64
</script>

<template>
  <div class="w-full">
    <div :class="tabbed ? 'mx-auto w-full max-w-6xl' : undefined">
      <div class="space-y-2">
        <h2 class="flex items-center gap-2 text-lg font-semibold leading-none">
          <IconBallFootball class="size-4" aria-hidden="true" />
          MLB World Series 2026/27
        </h2>
        <p class="text-sm text-muted-foreground">Season 2026/27</p>
        <Progress :model-value="progress" class="h-1" />
        <div class="flex items-center justify-between text-xs text-muted-foreground">
          <span>Mar 26, 2026 <template v-if="!compact">(12 days until start)</template></span>
          <span>Nov 1, 2026 <template v-if="!compact">(245 days until end)</template></span>
        </div>
      </div>

      <div v-if="!tabbed" class="mt-6">
        <TournamentStandingsPanelPattern
          :teams="teams"
          :compact="compact"
          :show-chart="!compact"
        />
      </div>
    </div>

    <Tabs v-if="tabbed" default-value="standings" class="mt-6 w-full">
      <section class="flex justify-center px-4">
        <TabsList class="w-fit max-w-full" aria-label="Tournament sections">
          <TabsTrigger value="standings" variant="with-icon">
            <IconTable aria-hidden="true" />
            Standings
          </TabsTrigger>
          <TabsTrigger value="movement" variant="with-icon">
            <IconChartSankey aria-hidden="true" />
            Rank movement
          </TabsTrigger>
          <TabsTrigger value="playoff" variant="with-icon">
            <IconReplace aria-hidden="true" />
            Playoff bracket
          </TabsTrigger>
        </TabsList>
      </section>

      <TabsContent value="standings" class="mt-4 space-y-4 px-4">
        <div class="mx-auto w-full max-w-6xl">
          <TournamentStandingsPanelPattern :teams="teams" show-chart />
        </div>
      </TabsContent>

      <TabsContent value="movement" class="mt-4 w-full px-4">
        <StandingsRankChartPattern :series="mockRankSeries" />
      </TabsContent>

      <TabsContent value="playoff" class="mt-4 w-full px-4">
        <div class="mx-auto w-full max-w-6xl">
          <MlbPlayoffBracketPattern layout="desktop" />
        </div>
      </TabsContent>
    </Tabs>
  </div>
</template>
