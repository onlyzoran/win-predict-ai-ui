<script setup lang="ts">
import { IconBrandGithub } from '@onlyzoran/win-predict-ai-icons'
import LocaleSwitcher from './LocaleSwitcher.vue'
import ThemeToggle from './ThemeToggle.vue'

const locale = defineModel<string>('locale', { required: true })

withDefaults(
  defineProps<{
    locales: readonly string[]
    localeLabels: Record<string, string>
    localeAriaLabel?: string
    themeAriaLabelLight?: string
    themeAriaLabelDark?: string
    githubUrl?: string
    githubAriaLabel?: string
  }>(),
  {
    localeAriaLabel: 'Language',
    themeAriaLabelLight: 'Switch to light theme',
    themeAriaLabelDark: 'Switch to dark theme',
    githubAriaLabel: 'GitHub',
  },
)
</script>

<template>
  <header
    class="fixed top-0 right-0 left-0 z-50 flex h-14 items-center justify-between border-b bg-background/80 px-6 shadow-sm backdrop-blur-md"
  >
    <div class="min-w-0">
      <slot name="brand" />
    </div>
    <div class="flex items-center gap-1">
      <LocaleSwitcher
        v-model="locale"
        :locales="locales"
        :labels="localeLabels"
        :aria-label="localeAriaLabel"
      />
      <ThemeToggle
        :aria-label-light="themeAriaLabelLight"
        :aria-label-dark="themeAriaLabelDark"
      />
      <template v-if="githubUrl">
        <span class="mx-1 h-5 w-px bg-border" aria-hidden="true" />
        <a
          :href="githubUrl"
          target="_blank"
          rel="noreferrer"
          class="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          :aria-label="githubAriaLabel"
        >
          <IconBrandGithub :size="16" aria-hidden="true" />
        </a>
      </template>
      <template v-if="$slots.actions">
        <span class="mx-1 h-5 w-px bg-border" aria-hidden="true" />
        <slot name="actions" />
      </template>
    </div>
  </header>
</template>
