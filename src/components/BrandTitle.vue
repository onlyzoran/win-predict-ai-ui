<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../utils/cn'

const props = withDefaults(
  defineProps<{
    /** Text before the accent, e.g. "Win Predict". */
    prefix?: string
    /** Accent segment, e.g. "AI". */
    accent?: string
    /** Optional suffix after the accent in foreground color, e.g. " Admin". */
    suffix?: string
    href?: string
    class?: HTMLAttributes['class']
  }>(),
  {
    prefix: 'Win Predict',
    accent: 'AI',
    suffix: '',
  },
)

const tag = props.href ? 'a' : 'span'
</script>

<template>
  <component
    :is="tag"
    :href="href"
    :class="
      cn(
        'inline font-semibold text-foreground',
        href && 'transition-opacity hover:opacity-80',
        props.class,
      )
    "
  >
    <span>{{ prefix }}&nbsp;</span><span class="brand-title-accent">{{ accent }}</span><span v-if="suffix">{{ suffix }}</span>
  </component>
</template>

<style scoped>
.brand-title-accent {
  background: linear-gradient(135deg, var(--brand-ai-from), var(--brand-ai-to));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>
