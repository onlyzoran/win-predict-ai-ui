<script setup lang="ts">
import { computed } from 'vue'
import { IconBallFootball, IconPin, IconPinnedOff } from '@onlyzoran/win-predict-ai-icons'
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Progress,
  Separator,
} from '../../../src/index'
import { leagueCardTeams } from '../fixtures/teams'
import { formatPercent } from '../utils'

const props = withDefaults(
  defineProps<{
    pinned?: boolean
    progress?: number
  }>(),
  {
    pinned: false,
    progress: 64,
  },
)

const TOP_N = 5

const visibleTeams = computed(() => {
  const top = leagueCardTeams.slice(0, TOP_N)
  const restCount = Math.max(0, leagueCardTeams.length - TOP_N)
  const restProb = leagueCardTeams.slice(TOP_N).reduce((sum, t) => sum + t.winProbability, 0)

  return [
    ...top,
    {
      id: 'others',
      name: `Others (${restCount})`,
      winProbability: restProb,
    },
  ]
})
</script>

<template>
  <Card class="w-full p-0 sm:max-w-xs sm:min-w-3xs">
    <CardHeader class="px-4 pt-4">
      <div class="flex min-h-8 items-center justify-between">
        <CardTitle class="flex items-center gap-2">
          <IconBallFootball aria-hidden="true" class="size-4" />
          MLB World Series 26/27
        </CardTitle>
        <button
          type="button"
          class="rounded-md px-2 py-1 text-sm font-medium uppercase text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          :aria-label="pinned ? 'Unpin tournament' : 'Pin tournament'"
        >
          <IconPin v-if="!pinned" aria-hidden="true" />
          <IconPinnedOff v-else aria-hidden="true" />
        </button>
      </div>
      <Progress :model-value="progress" class="mt-4 h-1" />
    </CardHeader>
    <CardContent class="p-0">
      <div v-for="(team, index) in visibleTeams" :key="team.id">
        <div class="flex items-center justify-between px-4 py-2">
          <span class="font-medium">{{ team.name }}</span>
          <Badge variant="secondary">
            {{ formatPercent(team.winProbability) }}
          </Badge>
        </div>
        <Separator v-if="index < visibleTeams.length - 1" />
      </div>
    </CardContent>
    <CardFooter class="flex gap-2 px-4 pb-4">
      <Button variant="outline" class="flex-1 cursor-pointer">Preview</Button>
      <Button class="flex-1 cursor-pointer">Details</Button>
    </CardFooter>
  </Card>
</template>
