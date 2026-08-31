<script setup lang="ts">
import { Badge } from '../../../src/index'
import { mockMlbPlayoffBracket } from '../fixtures/bracket'
import { formatPercent, shortTeamName } from '../utils'
import MlbBracketMatchupPattern from './MlbBracketMatchupPattern.vue'
import MlbLeagueBracketPattern from './MlbLeagueBracketPattern.vue'

withDefaults(
  defineProps<{
    layout?: 'desktop' | 'mobile'
  }>(),
  {
    layout: 'desktop',
  },
)

const bracket = mockMlbPlayoffBracket
</script>

<template>
  <section class="w-full min-w-0">
    <div class="mb-5 space-y-1">
      <h3 class="text-base font-semibold leading-none">Playoff bracket</h3>
      <p class="text-sm text-muted-foreground">Projected matchups from win probabilities</p>
    </div>

    <div v-if="layout === 'mobile'" class="max-w-md space-y-8">
      <MlbLeagueBracketPattern :bracket="bracket.al" layout="vertical" />

      <div class="w-full rounded-lg border border-border bg-card px-4 py-5 shadow-sm">
        <p class="mb-3 text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          World Series
        </p>
        <MlbBracketMatchupPattern :matchup="bracket.worldSeries" />
        <div v-if="bracket.winner" class="mt-4 border-t border-border pt-4 text-center">
          <p class="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">Winner</p>
          <p class="mt-1 text-sm font-semibold" :title="bracket.winner.name">
            {{ shortTeamName(bracket.winner.name) }}
          </p>
          <Badge variant="secondary" class="mt-2">
            {{ formatPercent(bracket.winner.winProbability) }}
          </Badge>
        </div>
      </div>

      <MlbLeagueBracketPattern :bracket="bracket.nl" layout="vertical" />
    </div>

    <div v-else class="flex w-full items-stretch gap-4 2xl:gap-6">
      <MlbLeagueBracketPattern :bracket="bracket.al" class="min-w-0 flex-[3]" />

      <div
        class="flex w-[12rem] shrink-0 flex-col justify-center self-center rounded-lg border border-border bg-card px-3 py-5 shadow-sm 2xl:w-[14rem]"
      >
        <p class="mb-3 text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          World Series
        </p>
        <MlbBracketMatchupPattern :matchup="bracket.worldSeries" />
        <div v-if="bracket.winner" class="mt-4 border-t border-border pt-4 text-center">
          <p class="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">Winner</p>
          <p class="mt-1 text-sm font-semibold" :title="bracket.winner.name">
            {{ shortTeamName(bracket.winner.name) }}
          </p>
          <Badge variant="secondary" class="mt-2">
            {{ formatPercent(bracket.winner.winProbability) }}
          </Badge>
        </div>
      </div>

      <MlbLeagueBracketPattern :bracket="bracket.nl" mirror class="min-w-0 flex-[3]" />
    </div>
  </section>
</template>
