<script setup lang="ts">
import { ref } from 'vue'
import {
  IconBrandGithub,
  IconLogin,
  IconPalette,
} from '@onlyzoran/win-predict-ai-icons'
import LocaleSwitcher from '../../../src/components/LocaleSwitcher.vue'
import ThemeToggle from '../../../src/components/ThemeToggle.vue'

const locale = ref('en')
const locales = ['en', 'ru'] as const
const localeLabels: Record<string, string> = {
  en: 'English',
  ru: 'Русский',
}
</script>

<template>
  <div class="pt-16">
    <header
      class="fixed top-0 right-0 left-0 z-50 flex h-14 items-center justify-between border-b bg-background/80 px-6 shadow-sm backdrop-blur-md"
    >
      <div class="min-w-0">
        <a href="#" class="font-semibold text-foreground hover:opacity-80">Win Predict AI</a>
      </div>
      <div class="flex items-center gap-1">
        <LocaleSwitcher
          v-model="locale"
          :locales="locales"
          :labels="localeLabels"
          aria-label="Language"
        />
        <ThemeToggle
          aria-label-light="Switch to light theme"
          aria-label-dark="Switch to dark theme"
        />
        <a
          href="#"
          class="inline-flex items-center gap-1.5 rounded-md p-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground sm:px-2 sm:py-1.5"
          aria-label="Appearance settings"
        >
          <IconPalette :size="16" aria-hidden="true" />
          <span class="hidden sm:inline">Theme</span>
        </a>
        <span class="mx-1 h-5 w-px bg-border" aria-hidden="true" />
        <a
          href="https://github.com/onlyzoran/win-predict-ai"
          target="_blank"
          rel="noreferrer"
          class="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          aria-label="GitHub"
        >
          <IconBrandGithub :size="16" aria-hidden="true" />
        </a>
        <a
          href="#"
          class="inline-flex items-center gap-1.5 rounded-md p-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground sm:px-2 sm:py-1.5"
          aria-label="Login"
        >
          <IconLogin :size="16" aria-hidden="true" />
          <span class="hidden sm:inline">Login</span>
        </a>
      </div>
    </header>
    <p class="text-sm text-muted-foreground">
      Full app header — compare with AppHeaderShell (no Appearance link, slot-based brand/actions).
    </p>
  </div>
</template>
