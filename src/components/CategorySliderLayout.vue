<script setup lang="ts" generic="TItem">
import type { HTMLAttributes } from 'vue'
import { cn } from '../utils/cn'
import CategorySliderSection from './CategorySliderSection.vue'
import type { CategorySliderCategory } from './category-slider-layout'

const props = withDefaults(
  defineProps<{
    categories: CategorySliderCategory<TItem>[]
    class?: HTMLAttributes['class']
    sectionClass?: HTMLAttributes['class']
    trackClass?: HTMLAttributes['class']
    itemClass?: HTMLAttributes['class']
    ariaLabel?: string
  }>(),
  {
    ariaLabel: 'Category sliders',
  },
)

defineSlots<{
  'category-header'(props: { category: CategorySliderCategory<TItem> }): unknown
  item(props: {
    item: TItem
    category: CategorySliderCategory<TItem>
    index: number
  }): unknown
  empty(props: { category: CategorySliderCategory<TItem> }): unknown
}>()
</script>

<template>
  <div
    :class="cn('flex flex-col gap-8 py-4', props.class)"
    :aria-label="ariaLabel"
  >
    <CategorySliderSection
      v-for="category in categories"
      :key="category.id"
      :category="category"
      :track-class="trackClass"
      :item-class="itemClass"
      :class="sectionClass"
    >
      <template #header="slotProps">
        <slot name="category-header" v-bind="slotProps" />
      </template>
      <template #item="slotProps">
        <slot name="item" v-bind="slotProps" />
      </template>
      <template #empty="slotProps">
        <slot name="empty" v-bind="slotProps" />
      </template>
    </CategorySliderSection>
  </div>
</template>
