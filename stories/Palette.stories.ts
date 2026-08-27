import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
  title: 'Win Predict AI / UI / Palette',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

function outcomesSection() {
  return `
      <section>
        <h2 class="mb-3 text-sm font-semibold text-foreground">Outcomes</h2>
        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div class="rounded-lg border border-border bg-outcome-final p-4 text-outcome-final-foreground">
            <p class="text-xs font-medium uppercase tracking-wide opacity-80">outcome-final</p>
            <p class="mt-1 text-lg font-semibold tabular-nums">FT 2 : 1</p>
            <p class="mt-0.5 text-xs opacity-80">Финальный итог матча</p>
          </div>
          <div class="rounded-lg border border-border bg-outcome-intermediate p-4 text-outcome-intermediate-foreground">
            <p class="text-xs font-medium uppercase tracking-wide opacity-80">outcome-intermediate</p>
            <p class="mt-1 text-lg font-semibold tabular-nums">HT 1 : 0</p>
            <p class="mt-0.5 text-xs opacity-80">Промежуточный итог (тайм)</p>
          </div>
        </div>
        <div class="mt-3 flex flex-wrap gap-2">
          <span class="inline-flex items-center rounded-md bg-outcome-final px-2 py-0.5 text-xs font-medium text-outcome-final-foreground">
            Final
          </span>
          <span class="inline-flex items-center rounded-md bg-outcome-intermediate px-2 py-0.5 text-xs font-medium text-outcome-intermediate-foreground">
            Half-time
          </span>
        </div>
      </section>
  `
}

function paletteTemplate(glass = false, includeOutcomes = false) {
  const panel = glass ? 'nexora-glass-panel' : ''
  const bg = (token: string, opacity?: number) =>
    glass && opacity != null ? `${token}/${opacity}` : token

  return `
    <div class="mx-auto flex w-full max-w-3xl flex-col gap-8">
      <section>
        <h2 class="mb-3 text-sm font-semibold text-foreground">Surfaces</h2>
        ${glass ? `<p class="mb-3 text-xs text-muted-foreground">
          Frosted glass поверх ambient-canvas — backdrop-blur + полупрозрачные токены (как в референсе Nexora CRM).
        </p>` : ''}
        <div class="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div class="${panel} rounded-lg border border-border bg-${bg('background', 60)} p-3 text-foreground">
            <p class="text-xs font-medium">background</p>
            <p class="mt-1 text-xs opacity-80">Sample text</p>
          </div>
          <div class="${panel} rounded-lg border border-border bg-${bg('card', 70)} p-3 text-card-foreground">
            <p class="text-xs font-medium">card</p>
            <p class="mt-1 text-xs opacity-80">Sample text</p>
          </div>
          <div class="${panel} rounded-lg border border-border bg-${bg('popover', 75)} p-3 text-popover-foreground">
            <p class="text-xs font-medium">popover</p>
            <p class="mt-1 text-xs opacity-80">Sample text</p>
          </div>
          <div class="${panel} rounded-lg border border-border bg-${glass ? 'muted/55' : 'muted'} p-3 text-muted-foreground">
            <p class="text-xs font-medium">muted</p>
            <p class="mt-1 text-xs opacity-80">Sample text</p>
          </div>
          <div class="${panel} rounded-lg border border-border bg-${glass ? 'secondary/60' : 'secondary'} p-3 text-secondary-foreground">
            <p class="text-xs font-medium">secondary</p>
            <p class="mt-1 text-xs opacity-80">Sample text</p>
          </div>
          <div class="${panel} rounded-lg border border-border bg-${glass ? 'accent/55' : 'accent'} p-3 text-accent-foreground">
            <p class="text-xs font-medium">accent</p>
            <p class="mt-1 text-xs opacity-80">Sample text</p>
          </div>
          <div class="rounded-lg border border-border bg-primary p-3 text-primary-foreground">
            <p class="text-xs font-medium">primary</p>
            <p class="mt-1 text-xs opacity-80">Sample text</p>
          </div>
          <div class="rounded-lg border border-border bg-destructive p-3 text-primary-foreground">
            <p class="text-xs font-medium">destructive</p>
            <p class="mt-1 text-xs opacity-80">Sample text</p>
          </div>
        </div>
      </section>

      <section>
        <h2 class="mb-3 text-sm font-semibold text-foreground">Sidebar</h2>
        <div class="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div class="${panel} rounded-lg border border-sidebar-border bg-${glass ? 'sidebar/75' : 'sidebar'} p-3 text-sidebar-foreground">
            <p class="text-xs font-medium">sidebar</p>
            <p class="mt-1 text-xs opacity-80">Nav item</p>
          </div>
          <div class="${panel} rounded-lg border border-sidebar-border bg-${glass ? 'sidebar-accent/55' : 'sidebar-accent'} p-3 text-sidebar-accent-foreground">
            <p class="text-xs font-medium">sidebar-accent</p>
            <p class="mt-1 text-xs opacity-80">Nav item</p>
          </div>
          <div class="rounded-lg border border-sidebar-border bg-sidebar-primary p-3 text-sidebar-primary-foreground">
            <p class="text-xs font-medium">sidebar-primary</p>
            <p class="mt-1 text-xs opacity-80">Nav item</p>
          </div>
        </div>
      </section>

      <section>
        <h2 class="mb-3 text-sm font-semibold text-foreground">Charts</h2>
        <div class="${panel} flex h-24 items-end gap-2 rounded-lg border border-border bg-${bg('card', 70)} p-4">
          <div class="h-[72%] flex-1 rounded-sm bg-chart-1" title="chart-1" />
          <div class="h-[56%] flex-1 rounded-sm bg-chart-2" title="chart-2" />
          <div class="h-[88%] flex-1 rounded-sm bg-chart-3" title="chart-3" />
          <div class="h-[48%] flex-1 rounded-sm bg-chart-4" title="chart-4" />
          <div class="h-[64%] flex-1 rounded-sm bg-chart-5" title="chart-5" />
        </div>
        <div class="mt-2 flex flex-wrap gap-2">
          <span class="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <span class="size-3 rounded-sm bg-chart-1" /> chart-1
          </span>
          <span class="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <span class="size-3 rounded-sm bg-chart-2" /> chart-2
          </span>
          <span class="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <span class="size-3 rounded-sm bg-chart-3" /> chart-3
          </span>
          <span class="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <span class="size-3 rounded-sm bg-chart-4" /> chart-4
          </span>
          <span class="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <span class="size-3 rounded-sm bg-chart-5" /> chart-5
          </span>
        </div>
      </section>

      ${includeOutcomes ? outcomesSection() : ''}

      <section>
        <h2 class="mb-3 text-sm font-semibold text-foreground">Controls</h2>
        <div class="flex flex-wrap items-center gap-3">
          <button
            type="button"
            class="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground"
          >
            Primary CTA
          </button>
          <button
            type="button"
            class="inline-flex h-9 items-center justify-center rounded-md border border-border bg-background px-4 text-sm font-medium text-foreground shadow-xs hover:bg-accent hover:text-accent-foreground"
          >
            Outline
          </button>
        </div>
      </section>

      <section>
        <h2 class="mb-3 text-sm font-semibold text-foreground">Borders &amp; input</h2>
        <div class="flex flex-wrap gap-3">
          <div class="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground">
            border-border
          </div>
          <div class="rounded-md border border-input bg-input px-3 py-2 text-sm text-foreground">
            bg-input
          </div>
          <button
            type="button"
            class="rounded-md border border-border px-3 py-2 text-sm text-foreground ring-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          >
            focus ring
          </button>
        </div>
      </section>
    </div>
  `
}

export const Default: Story = {
  render: () => ({
    template: paletteTemplate(),
  }),
}

export const ZincLight: Story = {
  globals: { theme: 'zinc-light' },
  render: () => ({
    template: paletteTemplate(),
  }),
}

export const ZincDark: Story = {
  globals: { theme: 'zinc-dark' },
  render: () => ({
    template: paletteTemplate(),
  }),
}

export const SlateTealLight: Story = {
  globals: { theme: 'slate-teal-light' },
  render: () => ({
    template: paletteTemplate(),
  }),
}

export const SlateTealDark: Story = {
  globals: { theme: 'slate-teal-dark' },
  render: () => ({
    template: paletteTemplate(),
  }),
}

export const ClaudePlusLight: Story = {
  globals: { theme: 'claude-plus-light' },
  render: () => ({
    template: paletteTemplate(),
  }),
}

export const ClaudePlusDark: Story = {
  globals: { theme: 'claude-plus-dark' },
  render: () => ({
    template: paletteTemplate(),
  }),
}

export const PastelLight: Story = {
  globals: { theme: 'pastel-light' },
  render: () => ({
    template: paletteTemplate(false, true),
  }),
}

export const PastelDark: Story = {
  globals: { theme: 'pastel-dark' },
  render: () => ({
    template: paletteTemplate(false, true),
  }),
}

export const NexoraLight: Story = {
  globals: { theme: 'nexora-light' },
  render: () => ({
    template: paletteTemplate(true),
  }),
}

export const NexoraDark: Story = {
  globals: { theme: 'nexora-dark' },
  render: () => ({
    template: paletteTemplate(true),
  }),
}
