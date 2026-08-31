<script setup lang="ts" generic="TItem">
import type { HTMLAttributes } from 'vue'
import { cn } from '../utils/cn'
import type { CategorySliderCategory } from './category-slider-layout'

const props = withDefaults(
  defineProps<{
    category: CategorySliderCategory<TItem>
    trackClass?: HTMLAttributes['class']
    itemClass?: HTMLAttributes['class']
  }>(),
  {},
)

defineSlots<{
  header(props: { category: CategorySliderCategory<TItem> }): unknown
  item(props: {
    item: TItem
    category: CategorySliderCategory<TItem>
    index: number
  }): unknown
  empty(props: { category: CategorySliderCategory<TItem> }): unknown
}>()

const headingId = `category-slider-${props.category.id}`
</script>

<template>
  <section
    class="space-y-3"
    :aria-labelledby="headingId"
  >
    <div class="px-4">
      <slot name="header" :category="category">
        <h2
          :id="headingId"
          class="text-base font-semibold tracking-tight text-foreground"
        >
          {{ category.title }}
        </h2>
      </slot>
    </div>

    <div
      v-if="category.items.length > 0"
      role="list"
      :aria-label="category.title"
      :class="
        cn(
          'flex gap-4 overflow-x-auto px-4 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          trackClass,
        )
      "
    >
      <div
        v-for="(item, index) in category.items"
        :key="`${category.id}-${index}`"
        role="listitem"
        :class="cn('shrink-0 snap-start', itemClass)"
      >
        <slot
          name="item"
          :item="item"
          :category="category"
          :index="index"
        />
      </div>
    </div>

    <div v-else class="px-4">
      <slot name="empty" :category="category">
        <p class="text-sm text-muted-foreground">
          No items in this category.
        </p>
      </slot>
    </div>
  </section>
</template>
