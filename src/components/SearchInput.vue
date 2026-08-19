<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { IconSearch, IconX } from '@onlyzoran/win-predict-ai-icons'
import { cn } from '../utils/cn'

const modelValue = defineModel<string>({ required: true })

const props = withDefaults(
  defineProps<{
    placeholder?: string
    ariaLabel?: string
    clearAriaLabel?: string
    class?: HTMLAttributes['class']
  }>(),
  {
    placeholder: 'Search…',
    ariaLabel: 'Search',
    clearAriaLabel: 'Clear search',
  },
)
</script>

<template>
  <div :class="cn('relative w-full', props.class)">
    <IconSearch
      class="pointer-events-none absolute top-1/2 left-2 size-3.5 -translate-y-1/2 text-muted-foreground"
      aria-hidden="true"
    />
    <input
      v-model="modelValue"
      type="search"
      :placeholder="placeholder"
      :aria-label="ariaLabel"
      class="h-8 w-full rounded-md border border-input bg-transparent py-1 pr-7 pl-7 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 [&::-webkit-search-cancel-button]:hidden"
    />
    <button
      v-if="modelValue"
      type="button"
      class="absolute top-1/2 right-1.5 -translate-y-1/2 rounded p-0.5 text-muted-foreground hover:text-foreground"
      :aria-label="clearAriaLabel"
      @click="modelValue = ''"
    >
      <IconX class="size-3.5" aria-hidden="true" />
    </button>
  </div>
</template>
