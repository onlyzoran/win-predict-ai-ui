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
    class="relative inline-flex h-7 w-14 shrink-0 items-center rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
    :class="
      isDark
        ? 'border-zinc-700 bg-zinc-800 text-zinc-100'
        : 'border-zinc-300 bg-zinc-100 text-zinc-500'
    "
    :aria-label="ariaLabel"
    @click="toggleTheme"
  >
    <span
      class="pointer-events-none absolute top-1/2 inline-flex size-6 -translate-y-1/2 items-center justify-center rounded-full transition-[left,right,background-color,color,box-shadow] duration-200"
      :class="
        isDark
          ? 'right-0.5 left-auto bg-zinc-950 text-white shadow-[0_2px_10px_rgba(0,0,0,0.35)]'
          : 'left-0.5 right-auto bg-white text-zinc-500 shadow-[0_2px_8px_rgba(15,23,42,0.18)]'
      "
    >
      <IconMoon v-if="isDark" class="size-3.5" :stroke="2" />
      <IconSun v-else class="size-3.5" :stroke="2" />
    </span>
  </button>
</template>
