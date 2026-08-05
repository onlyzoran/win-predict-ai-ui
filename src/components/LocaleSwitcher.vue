<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

const modelValue = defineModel<string>({ required: true })

withDefaults(
  defineProps<{
    locales: readonly string[]
    labels: Record<string, string>
    ariaLabel?: string
  }>(),
  {
    ariaLabel: 'Language',
  },
)

function onLocaleChange(value: string | number | bigint | Record<string, unknown> | null) {
  if (typeof value === 'string') {
    modelValue.value = value
  }
}
</script>

<template>
  <DropdownMenu :modal="false">
    <DropdownMenuTrigger
      class="rounded-md px-2 py-1 text-sm font-medium uppercase text-muted-foreground outline-none transition-colors hover:bg-accent hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
      :aria-label="ariaLabel"
    >
      {{ modelValue }}
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuRadioGroup :model-value="modelValue" @update:model-value="onLocaleChange">
        <DropdownMenuRadioItem v-for="code in locales" :key="code" :value="code">
          <span class="w-6 uppercase text-muted-foreground">{{ code }}</span>
          {{ labels[code] }}
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
