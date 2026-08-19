<script setup lang="ts">
import { ref } from 'vue'
import SearchInput from '../../../src/components/SearchInput.vue'

const query = ref('')
const prefilled = ref('World Series')
</script>

<template>
  <div class="flex max-w-md flex-col gap-4">
    <SearchInput v-model="query" placeholder="Search tournaments…" aria-label="Search tournaments" />
    <SearchInput
      v-model="prefilled"
      placeholder="Search tournaments…"
      aria-label="Search tournaments"
    />
  </div>
</template>
