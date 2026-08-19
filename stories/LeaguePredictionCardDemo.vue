<script setup lang="ts">
import { IconBallFootball, IconPin } from '@onlyzoran/win-predict-ai-icons'
import { Badge } from '../src/components/ui/badge'
import { Button } from '../src/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../src/components/ui/card'
import { Progress } from '../src/components/ui/progress'
import { Separator } from '../src/components/ui/separator'

/** Top 5 + Others — как на главной app (MLB World Series card snapshot). */
const leagueTeams = [
  { id: 'lad', name: 'Los Angeles Dodgers', pct: '8%' },
  { id: 'nyy', name: 'New York Yankees', pct: '6%' },
  { id: 'hou', name: 'Houston Astros', pct: '4%' },
  { id: 'atl', name: 'Atlanta Braves', pct: '4%' },
  { id: 'phi', name: 'Philadelphia Phillies', pct: '4%' },
  { id: 'others', name: 'Others (25)', pct: '74%' },
]

withDefaults(
  defineProps<{
    /** Pin в header — как editMode в TeamProbabilityList на главной app. */
    withHeaderAction?: boolean
  }>(),
  {
    withHeaderAction: true,
  },
)
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
          v-if="withHeaderAction"
          type="button"
          class="rounded-md px-2 py-1 text-sm font-medium uppercase text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          aria-label="Pin tournament"
        >
          <IconPin aria-hidden="true" />
        </button>
      </div>
      <Progress :model-value="64" class="mt-4 h-1" />
    </CardHeader>
    <CardContent class="p-0">
      <div v-for="(team, index) in leagueTeams" :key="team.id">
        <div class="flex items-center justify-between px-4 py-2">
          <span class="font-medium">{{ team.name }}</span>
          <Badge variant="secondary">
            {{ team.pct }}
          </Badge>
        </div>
        <Separator v-if="index < leagueTeams.length - 1" />
      </div>
    </CardContent>
    <CardFooter class="flex gap-2 px-4 pb-4">
      <Button variant="outline" class="flex-1 cursor-pointer">
        Preview
      </Button>
      <Button class="flex-1 cursor-pointer">
        Details
      </Button>
    </CardFooter>
  </Card>
</template>
