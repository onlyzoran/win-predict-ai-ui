<script setup lang="ts">
import { computed } from 'vue'
import type { LeagueBracket } from '../types'
import MlbBracketMatchupPattern from './MlbBracketMatchupPattern.vue'

const props = withDefaults(
  defineProps<{
    bracket: LeagueBracket
    mirror?: boolean
    layout?: 'horizontal' | 'vertical'
  }>(),
  {
    mirror: false,
    layout: 'horizontal',
  },
)

const divisionLabel = computed(() =>
  props.bracket.league === 'al' ? 'ALDS' : 'NLDS',
)
const championshipLabel = computed(() =>
  props.bracket.league === 'al' ? 'ALCS' : 'NLCS',
)

const rounds = computed(() => {
  const cols = [
    { key: 'wc', label: 'Wild Card', matchups: props.bracket.wildCard },
    { key: 'ds', label: divisionLabel.value, matchups: props.bracket.divisionSeries },
    { key: 'cs', label: championshipLabel.value, matchups: [props.bracket.championshipSeries] },
  ]
  return props.mirror ? [...cols].reverse() : cols
})
</script>

<template>
  <div class="w-full min-w-0">
    <h4 class="mb-3 text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground">
      {{ bracket.league === 'al' ? 'American League' : 'National League' }}
    </h4>

    <div v-if="layout === 'vertical'" class="space-y-5">
      <div v-for="round in rounds" :key="round.key" class="space-y-2">
        <p class="text-center text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
          {{ round.label }}
        </p>
        <div
          class="grid gap-2"
          :class="round.matchups.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'"
        >
          <MlbBracketMatchupPattern
            v-for="matchup in round.matchups"
            :key="matchup.id"
            :matchup="matchup"
          />
        </div>
      </div>
    </div>

    <div v-else class="grid grid-cols-3 gap-3">
      <div v-for="round in rounds" :key="round.key" class="flex min-w-0 flex-col gap-2">
        <p class="text-center text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
          {{ round.label }}
        </p>
        <MlbBracketMatchupPattern
          v-for="matchup in round.matchups"
          :key="matchup.id"
          :matchup="matchup"
        />
      </div>
    </div>
  </div>
</template>
