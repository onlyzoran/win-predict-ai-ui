import type { Meta, StoryObj } from '@storybook/vue3'
import { Skeleton } from '../src/components/ui/skeleton'

const meta = {
  title: 'Win Predict AI / UI / Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Skeleton },
    template: '<Skeleton class="h-4 w-48" />',
  }),
}

export const Light: Story = {
  globals: { theme: 'slate-teal-light' },
  render: Default.render,
}

export const Dark: Story = {
  globals: { theme: 'slate-teal-dark' },
  render: Default.render,
}

export const ListLoading: Story = {
  render: () => ({
    components: { Skeleton },
    template: `
      <div class="w-full max-w-md space-y-4 rounded-lg border border-border bg-card p-4">
        <div class="flex items-center justify-between gap-3">
          <div class="flex items-center gap-2">
            <Skeleton class="size-4 rounded-sm" />
            <Skeleton class="h-5 w-32" />
          </div>
          <Skeleton class="size-8 rounded-md" />
        </div>
        <Skeleton class="h-1 w-full" />
        <div class="space-y-2">
          <div v-for="n in 3" :key="n" class="flex items-center justify-between gap-3">
            <Skeleton class="h-4 w-28" />
            <Skeleton class="h-5 w-12 rounded-full" />
          </div>
        </div>
        <Skeleton class="h-9 w-full" />
      </div>
    `,
  }),
}

export const TableRows: Story = {
  render: () => ({
    components: { Skeleton },
    template: `
      <div class="w-full max-w-lg space-y-2">
        <div v-for="n in 4" :key="n" class="flex gap-4">
          <Skeleton class="h-4 flex-1" />
          <Skeleton class="h-4 w-12" />
          <Skeleton class="h-4 w-16" />
        </div>
      </div>
    `,
  }),
}
