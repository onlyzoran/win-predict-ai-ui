<script setup lang="ts">
import { ref } from 'vue'
import { IconArrowLeft, IconPalette } from '@onlyzoran/win-predict-ai-icons'
import { cn } from '../../../src/utils/cn'
import { PALETTES, type Palette } from '../../../src/themes/palettes'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../../src/components/ui/card'

/** Story-only palette picker — mirrors AppearanceView without app routing/i18n. */
const lightPalette = ref<Palette>('slate-teal')
const darkPalette = ref<Palette>('slate-teal')

const paletteMeta: Record<Palette, { name: string; description: string }> = {
  zinc: { name: 'Zinc', description: 'Neutral default, minimal chroma' },
  'slate-teal': { name: 'Slate + Teal', description: 'Product default — calm terminal' },
  'claude-plus': { name: 'Claude+', description: 'Warm paper tones, soft accent' },
}

function selectLight(palette: Palette) {
  lightPalette.value = palette
}

function selectDark(palette: Palette) {
  darkPalette.value = palette
}
</script>

<template>
  <div class="mx-auto w-full max-w-2xl sm:px-2 lg:max-w-4xl">
    <a
      href="#"
      class="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      <IconArrowLeft :size="16" aria-hidden="true" />
      Back to home
    </a>

    <div class="mb-8 flex items-start gap-3">
      <div
        class="flex size-10 shrink-0 items-center justify-center rounded-lg border bg-card text-muted-foreground"
      >
        <IconPalette :size="20" aria-hidden="true" />
      </div>
      <div>
        <h1 class="text-2xl font-semibold tracking-tight text-foreground">Appearance</h1>
        <p class="mt-1 text-sm text-muted-foreground">
          Choose light and dark palettes independently. Story-only — selections do not persist.
        </p>
      </div>
    </div>

    <div class="space-y-8">
      <section>
        <h2 class="mb-1 text-sm font-medium text-foreground">Light mode</h2>
        <p class="mb-4 text-sm text-muted-foreground">Palette when the app is in light theme.</p>
        <div class="grid items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <button
            v-for="palette in PALETTES"
            :key="`light-${palette}`"
            type="button"
            class="h-full w-full text-left"
            :aria-pressed="lightPalette === palette"
            @click="selectLight(palette)"
          >
            <Card
              :class="
                cn(
                  'h-full transition-colors hover:border-ring/50',
                  lightPalette === palette && 'border-primary ring-2 ring-ring/30',
                )
              "
            >
              <CardHeader class="pb-3">
                <CardTitle class="text-base">{{ paletteMeta[palette].name }}</CardTitle>
                <CardDescription>{{ paletteMeta[palette].description }}</CardDescription>
              </CardHeader>
              <CardContent class="mt-auto">
                <div :data-palette="palette" class="overflow-hidden rounded-lg border">
                  <div class="flex h-16 bg-background">
                    <div class="flex flex-1 flex-col justify-end gap-1 p-2">
                      <div class="h-2 w-12 rounded-sm bg-foreground/80" />
                      <div class="h-1.5 w-20 rounded-sm bg-muted-foreground/50" />
                    </div>
                    <div class="w-10 bg-primary" />
                  </div>
                  <div class="flex gap-1 border-t bg-card p-2">
                    <span class="size-2 rounded-full bg-chart-1" />
                    <span class="size-2 rounded-full bg-chart-2" />
                    <span class="size-2 rounded-full bg-chart-3" />
                    <span class="size-2 rounded-full bg-chart-4" />
                    <span class="size-2 rounded-full bg-chart-5" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </button>
        </div>
      </section>

      <section>
        <h2 class="mb-1 text-sm font-medium text-foreground">Dark mode</h2>
        <p class="mb-4 text-sm text-muted-foreground">Palette when the app is in dark theme.</p>
        <div class="grid items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <button
            v-for="palette in PALETTES"
            :key="`dark-${palette}`"
            type="button"
            class="h-full w-full text-left"
            :aria-pressed="darkPalette === palette"
            @click="selectDark(palette)"
          >
            <Card
              :class="
                cn(
                  'h-full transition-colors hover:border-ring/50',
                  darkPalette === palette && 'border-primary ring-2 ring-ring/30',
                )
              "
            >
              <CardHeader class="pb-3">
                <CardTitle class="text-base">{{ paletteMeta[palette].name }}</CardTitle>
                <CardDescription>{{ paletteMeta[palette].description }}</CardDescription>
              </CardHeader>
              <CardContent class="mt-auto">
                <div :data-palette="palette" class="dark overflow-hidden rounded-lg border">
                  <div class="flex h-16 bg-background">
                    <div class="flex flex-1 flex-col justify-end gap-1 p-2">
                      <div class="h-2 w-12 rounded-sm bg-foreground/80" />
                      <div class="h-1.5 w-20 rounded-sm bg-muted-foreground/50" />
                    </div>
                    <div class="w-10 bg-primary" />
                  </div>
                  <div class="flex gap-1 border-t bg-card p-2">
                    <span class="size-2 rounded-full bg-chart-1" />
                    <span class="size-2 rounded-full bg-chart-2" />
                    <span class="size-2 rounded-full bg-chart-3" />
                    <span class="size-2 rounded-full bg-chart-4" />
                    <span class="size-2 rounded-full bg-chart-5" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </button>
        </div>
      </section>
    </div>
  </div>
</template>
