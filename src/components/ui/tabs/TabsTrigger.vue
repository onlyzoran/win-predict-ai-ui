<script setup lang="ts">
import type { TabsTriggerProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { TabsTrigger, useForwardProps } from 'reka-ui'
import { cn } from '../../../utils/cn'

export type TabsTriggerVariant = 'default' | 'with-icon' | 'icon-only'

const props = withDefaults(
  defineProps<
    TabsTriggerProps & {
      class?: HTMLAttributes['class']
      variant?: TabsTriggerVariant
    }
  >(),
  {
    variant: 'default',
  },
)

const delegatedProps = reactiveOmit(props, 'class', 'variant')

const forwardedProps = useForwardProps(delegatedProps)

const variantClasses: Record<TabsTriggerVariant, string> = {
  default: '',
  'with-icon': 'gap-1.5 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  'icon-only': 'size-9 p-0 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
}
</script>

<template>
  <TabsTrigger
    data-slot="tabs-trigger"
    v-bind="forwardedProps"
    :class="
      cn(
        'inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
        variantClasses[props.variant],
        props.class,
      )
    "
  >
    <slot />
  </TabsTrigger>
</template>
