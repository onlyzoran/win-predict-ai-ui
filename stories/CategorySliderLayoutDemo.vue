<script setup lang="ts">
import {
  IconBallBaseball,
  IconBallBasketball,
  IconBallFootball,
} from '@onlyzoran/win-predict-ai-icons'
import type { Component } from 'vue'
import CategorySliderLayout from '../../src/components/CategorySliderLayout.vue'
import type { CategorySliderCategory } from '../../src/components/category-slider-layout'
import { Badge } from '../../src/components/ui/badge'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../src/components/ui/card'
import { Progress } from '../../src/components/ui/progress'

interface TournamentCardItem {
  id: string
  title: string
  progress: number
  leader: string
  leaderPct: string
}

const categoryMeta: Record<
  string,
  { icon: Component; tournaments: Array<{ title: string; leader: string; leaderPct: string; progress: number }> }
> = {
  mlb: {
    icon: IconBallBaseball,
    tournaments: [
      { title: 'World Series 26/27', leader: 'Los Angeles Dodgers', leaderPct: '8%', progress: 64 },
      { title: 'AL Pennant 26/27', leader: 'New York Yankees', leaderPct: '11%', progress: 58 },
      { title: 'NL Pennant 26/27', leader: 'Atlanta Braves', leaderPct: '9%', progress: 61 },
      { title: 'Division AL East', leader: 'New York Yankees', leaderPct: '42%', progress: 72 },
      { title: 'Division NL West', leader: 'Los Angeles Dodgers', leaderPct: '38%', progress: 70 },
      { title: 'Division AL Central', leader: 'Cleveland Guardians', leaderPct: '31%', progress: 68 },
      { title: 'Wild Card AL', leader: 'Houston Astros', leaderPct: '19%', progress: 55 },
    ],
  },
  nba: {
    icon: IconBallBasketball,
    tournaments: [
      { title: 'NBA Finals 26/27', leader: 'Boston Celtics', leaderPct: '14%', progress: 48 },
      { title: 'Eastern Conference', leader: 'Boston Celtics', leaderPct: '22%', progress: 52 },
      { title: 'Western Conference', leader: 'Oklahoma City Thunder', leaderPct: '18%', progress: 50 },
      { title: 'Atlantic Division', leader: 'Boston Celtics', leaderPct: '36%', progress: 60 },
      { title: 'Pacific Division', leader: 'Los Angeles Lakers', leaderPct: '29%', progress: 57 },
      { title: 'Southwest Division', leader: 'Dallas Mavericks', leaderPct: '27%', progress: 54 },
    ],
  },
  nfl: {
    icon: IconBallFootball,
    tournaments: [
      { title: 'Super Bowl LXI', leader: 'Kansas City Chiefs', leaderPct: '12%', progress: 35 },
      { title: 'AFC Championship', leader: 'Kansas City Chiefs', leaderPct: '19%', progress: 40 },
      { title: 'NFC Championship', leader: 'San Francisco 49ers', leaderPct: '16%', progress: 38 },
      { title: 'AFC East', leader: 'Buffalo Bills', leaderPct: '44%', progress: 66 },
      { title: 'NFC North', leader: 'Detroit Lions', leaderPct: '33%', progress: 62 },
      { title: 'AFC West', leader: 'Kansas City Chiefs', leaderPct: '41%', progress: 64 },
      { title: 'NFC East', leader: 'Philadelphia Eagles', leaderPct: '28%', progress: 59 },
      { title: 'NFC South', leader: 'New Orleans Saints', leaderPct: '24%', progress: 56 },
    ],
  },
}

const categories: CategorySliderCategory<TournamentCardItem>[] = [
  {
    id: 'mlb',
    title: 'MLB',
    items: categoryMeta.mlb.tournaments.map((tournament, index) => ({
      id: `mlb-${index}`,
      title: tournament.title,
      progress: tournament.progress,
      leader: tournament.leader,
      leaderPct: tournament.leaderPct,
    })),
  },
  {
    id: 'nba',
    title: 'NBA',
    items: categoryMeta.nba.tournaments.map((tournament, index) => ({
      id: `nba-${index}`,
      title: tournament.title,
      progress: tournament.progress,
      leader: tournament.leader,
      leaderPct: tournament.leaderPct,
    })),
  },
  {
    id: 'nfl',
    title: 'NFL',
    items: categoryMeta.nfl.tournaments.map((tournament, index) => ({
      id: `nfl-${index}`,
      title: tournament.title,
      progress: tournament.progress,
      leader: tournament.leader,
      leaderPct: tournament.leaderPct,
    })),
  },
]

function iconForCategory(categoryId: string): Component | undefined {
  return categoryMeta[categoryId]?.icon
}
</script>

<template>
  <CategorySliderLayout :categories="categories">
    <template #category-header="{ category }">
      <h2 class="flex items-center gap-2 text-base font-semibold tracking-tight text-foreground">
        <component
          :is="iconForCategory(category.id)"
          v-if="iconForCategory(category.id)"
          class="size-4"
          aria-hidden="true"
        />
        {{ category.title }}
      </h2>
    </template>

    <template #item="{ item, category }">
      <Card class="w-64 p-0">
        <CardHeader class="px-4 pt-4 pb-2">
          <CardTitle class="flex items-center gap-2 text-sm">
            <component
              :is="iconForCategory(category.id)"
              v-if="iconForCategory(category.id)"
              class="size-4 shrink-0"
              aria-hidden="true"
            />
            <span class="truncate">{{ item.title }}</span>
          </CardTitle>
          <Progress :model-value="item.progress" class="mt-3 h-1" />
        </CardHeader>
        <CardContent class="px-4 pb-4">
          <div class="flex items-center justify-between gap-2 text-sm">
            <span class="truncate font-medium">{{ item.leader }}</span>
            <Badge variant="secondary" class="shrink-0">
              {{ item.leaderPct }}
            </Badge>
          </div>
        </CardContent>
        <CardFooter class="px-4 pb-4 pt-0">
          <span class="text-xs text-muted-foreground">Tap to open details</span>
        </CardFooter>
      </Card>
    </template>
  </CategorySliderLayout>
</template>
