<script setup lang="ts">
export interface GlossaryEntry {
  abbr: string
  label: string
}

const props = withDefaults(
  defineProps<{
    variant?: 'football' | 'mlb'
    entries?: GlossaryEntry[]
  }>(),
  {
    variant: 'football',
  },
)

const footballEntries: GlossaryEntry[] = [
  { abbr: 'GP', label: 'Games played' },
  { abbr: 'W', label: 'Wins' },
  { abbr: 'D', label: 'Draws' },
  { abbr: 'L', label: 'Losses' },
  { abbr: 'GF', label: 'Goals for' },
  { abbr: 'GA', label: 'Goals against' },
  { abbr: 'GD', label: 'Goal difference' },
  { abbr: 'Pts', label: 'Points' },
]

const mlbEntries: GlossaryEntry[] = [
  { abbr: 'Conf', label: 'Conference' },
  { abbr: 'Pos', label: 'Playoff position' },
  { abbr: 'GP', label: 'Games played' },
  { abbr: 'Record', label: 'Wins–losses' },
  { abbr: 'Pct', label: 'Win percentage' },
]

const items = props.entries ?? (props.variant === 'mlb' ? mlbEntries : footballEntries)
</script>

<template>
  <dl
    data-testid="standings-glossary"
    class="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground"
  >
    <div v-for="entry in items" :key="entry.abbr" class="inline-flex gap-1">
      <dt class="font-medium text-foreground">{{ entry.abbr }}</dt>
      <dd>{{ entry.label }}</dd>
    </div>
  </dl>
</template>
