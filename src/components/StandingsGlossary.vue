<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { cn } from '../utils/cn'
import {
  resolveStandingsGlossaryEntries,
  type StandingsGlossaryEntry,
  type StandingsGlossaryPreset,
} from './standings-glossary'

const props = withDefaults(
  defineProps<{
    preset?: StandingsGlossaryPreset
    entries?: StandingsGlossaryEntry[]
    class?: HTMLAttributes['class']
  }>(),
  {
    preset: 'football',
  },
)

const items = computed<StandingsGlossaryEntry[]>(() =>
  props.entries?.length ? props.entries : resolveStandingsGlossaryEntries(props.preset),
)
</script>

<template>
  <dl
    data-testid="standings-glossary"
    :class="cn('flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground', props.class)"
  >
    <div v-for="entry in items" :key="entry.abbr" class="inline-flex gap-1">
      <dt class="font-medium text-foreground">{{ entry.abbr }}</dt>
      <dd>{{ entry.label }}</dd>
    </div>
  </dl>
</template>
