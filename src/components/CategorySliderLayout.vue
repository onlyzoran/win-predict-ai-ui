<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../utils/cn'
import CategorySliderSection from './CategorySliderSection.vue'
import type { CategorySliderCategory } from './category-slider-layout'

const props = withDefaults(
  defineProps<{
    categories: CategorySliderCategory[]
    class?: HTMLAttributes['class']
    sectionClass?: HTMLAttributes['class']
    trackClass?: HTMLAttributes['class']
    itemClass?: HTMLAttributes['class']
    ariaLabel?: string
  }>(),
  {
    categories: () => [],
    ariaLabel: 'Category sliders',
  },
)
</script>

<template>
  <div
    :class="cn('flex w-full flex-col gap-8 overflow-visible py-4', props.class)"
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
      <template #header="{ category, headingId }">
        <slot name="category-header" :category="category" :heading-id="headingId" />
      </template>
      <template #item="{ item, category, index }">
        <slot name="item" :item="item" :category="category" :index="index" />
      </template>
      <template #empty="{ category }">
        <slot name="empty" :category="category" />
      </template>
    </CategorySliderSection>
  </div>
</template>
