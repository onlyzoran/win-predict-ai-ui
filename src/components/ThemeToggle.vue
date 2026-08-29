<script setup lang="ts">
import { computed } from 'vue'
import { IconMoon, IconSun } from '@onlyzoran/win-predict-ai-icons'
import { useColorMode } from '@vueuse/core'

const props = withDefaults(
  defineProps<{
    ariaLabelLight?: string
    ariaLabelDark?: string
  }>(),
  {
    ariaLabelLight: 'Switch to light theme',
    ariaLabelDark: 'Switch to dark theme',
  },
)

const mode = useColorMode({
  modes: {
    auto: '',
    light: '',
    dark: 'dark',
  },
})

const isDark = computed(() => mode.state.value === 'dark')

const ariaLabel = computed(() => (isDark.value ? props.ariaLabelLight : props.ariaLabelDark))

function toggleTheme() {
  mode.value = isDark.value ? 'light' : 'dark'
}
</script>

<template>
  <button
    type="button"
    class="relative inline-flex h-7 w-14 shrink-0 items-center rounded-full border border-border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
    :class="isDark ? 'bg-secondary text-secondary-foreground' : 'bg-muted text-muted-foreground'"
    :aria-label="ariaLabel"
    @click="toggleTheme"
  >
    <span
      class="pointer-events-none absolute top-1/2 inline-flex size-6 -translate-y-1/2 items-center justify-center rounded-full shadow-sm transition-[left,right,background-color,color,box-shadow] duration-200"
      :class="
        isDark
          ? 'right-px left-auto bg-background text-foreground shadow-md'
          : 'left-px right-auto bg-card text-muted-foreground'
      "
    >
      <IconMoon v-if="isDark" class="size-3.5" :stroke="2" />
      <IconSun v-else class="size-3.5" :stroke="2" />
    </span>
  </button>
</template>
