<script setup lang="ts">
import { ref } from 'vue'
import {
  IconArrowsSort,
  IconBallBaseball,
  IconBallBasketball,
  IconBallFootball,
} from '@onlyzoran/win-predict-ai-icons'
import SearchInput from '../../../src/components/SearchInput.vue'
import { Button } from '../../../src/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '../../../src/components/ui/dropdown-menu'
import type { SortMode } from '../types'

const sport = ref<'all' | 'mlb' | 'nba' | 'nfl'>('all')
const search = ref('')
const sort = ref<SortMode>('popular')

const sports = [
  { id: 'all' as const, label: 'All sports' },
  { id: 'mlb' as const, label: 'MLB', icon: IconBallBaseball },
  { id: 'nba' as const, label: 'NBA', icon: IconBallBasketball },
  { id: 'nfl' as const, label: 'NFL', icon: IconBallFootball },
]

const sortOptions: Array<{ id: SortMode; label: string }> = [
  { id: 'popular', label: 'Popular' },
  { id: 'name', label: 'Name' },
  { id: 'endingSoon', label: 'Ending soon' },
]

withDefaults(
  defineProps<{
    mobile?: boolean
  }>(),
  {
    mobile: false,
  },
)
</script>

<template>
  <div
    class="sticky top-14 z-40 border-b bg-background/80 backdrop-blur-md"
    :class="mobile ? 'max-w-sm' : undefined"
  >
    <div class="flex items-center gap-2 px-4 py-2">
      <div class="flex min-w-0 flex-1 items-center justify-start gap-2 overflow-x-auto">
        <Button
          v-for="item in sports"
          :key="item.id"
          :variant="sport === item.id ? 'secondary' : 'ghost'"
          size="sm"
          class="shrink-0 cursor-pointer"
          :aria-label="item.icon ? item.label : undefined"
          @click="sport = item.id"
        >
          <component :is="item.icon" v-if="item.icon" class="size-4" />
          <span :class="item.icon ? 'hidden min-[400px]:inline' : undefined">{{ item.label }}</span>
        </Button>
      </div>

      <div v-if="!mobile" class="hidden shrink-0 items-center gap-2 md:flex">
        <DropdownMenu :modal="false">
          <DropdownMenuTrigger as-child>
            <Button variant="ghost" size="sm" class="shrink-0 cursor-pointer" aria-label="Sort">
              <IconArrowsSort class="size-4" />
              <span class="hidden min-[500px]:inline">{{ sortOptions.find((o) => o.id === sort)?.label }}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuRadioGroup v-model="sort">
              <DropdownMenuRadioItem v-for="option in sortOptions" :key="option.id" :value="option.id">
                {{ option.label }}
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <SearchInput v-model="search" class="w-48 shrink-0 md:w-56" placeholder="Search tournaments…" />
      </div>
    </div>

    <div v-if="mobile" class="flex items-center gap-2 border-t px-4 py-2">
      <DropdownMenu :modal="false">
        <DropdownMenuTrigger as-child>
          <Button variant="ghost" size="sm" class="shrink-0 cursor-pointer" aria-label="Sort">
            <IconArrowsSort class="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuRadioGroup v-model="sort">
            <DropdownMenuRadioItem v-for="option in sortOptions" :key="option.id" :value="option.id">
              {{ option.label }}
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <SearchInput v-model="search" class="min-w-0 flex-1" placeholder="Search tournaments…" />
    </div>
  </div>
</template>
