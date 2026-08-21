const g={title:"Win Predict AI / UI / Palette",tags:["autodocs"],parameters:{layout:"padded"}};function t(r=!1){const e=r?"nexora-glass-panel":"",a=(u,x)=>r&&x!=null?`${u}/${x}`:u;return`
    <div class="mx-auto flex w-full max-w-3xl flex-col gap-8">
      <section>
        <h2 class="mb-3 text-sm font-semibold text-foreground">Surfaces</h2>
        ${r?`<p class="mb-3 text-xs text-muted-foreground">
          Frosted glass поверх ambient-canvas — backdrop-blur + полупрозрачные токены (как в референсе Nexora CRM).
        </p>`:""}
        <div class="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div class="${e} rounded-lg border border-border bg-${a("background",60)} p-3 text-foreground">
            <p class="text-xs font-medium">background</p>
            <p class="mt-1 text-xs opacity-80">Sample text</p>
          </div>
          <div class="${e} rounded-lg border border-border bg-${a("card",70)} p-3 text-card-foreground">
            <p class="text-xs font-medium">card</p>
            <p class="mt-1 text-xs opacity-80">Sample text</p>
          </div>
          <div class="${e} rounded-lg border border-border bg-${a("popover",75)} p-3 text-popover-foreground">
            <p class="text-xs font-medium">popover</p>
            <p class="mt-1 text-xs opacity-80">Sample text</p>
          </div>
          <div class="${e} rounded-lg border border-border bg-${r?"muted/55":"muted"} p-3 text-muted-foreground">
            <p class="text-xs font-medium">muted</p>
            <p class="mt-1 text-xs opacity-80">Sample text</p>
          </div>
          <div class="${e} rounded-lg border border-border bg-${r?"secondary/60":"secondary"} p-3 text-secondary-foreground">
            <p class="text-xs font-medium">secondary</p>
            <p class="mt-1 text-xs opacity-80">Sample text</p>
          </div>
          <div class="${e} rounded-lg border border-border bg-${r?"accent/55":"accent"} p-3 text-accent-foreground">
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
          <div class="${e} rounded-lg border border-sidebar-border bg-${r?"sidebar/75":"sidebar"} p-3 text-sidebar-foreground">
            <p class="text-xs font-medium">sidebar</p>
            <p class="mt-1 text-xs opacity-80">Nav item</p>
          </div>
          <div class="${e} rounded-lg border border-sidebar-border bg-${r?"sidebar-accent/55":"sidebar-accent"} p-3 text-sidebar-accent-foreground">
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
        <div class="${e} flex h-24 items-end gap-2 rounded-lg border border-border bg-${a("card",70)} p-4">
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
  `}const s={render:()=>({template:t()})},d={globals:{theme:"zinc-light"},render:()=>({template:t()})},o={globals:{theme:"zinc-dark"},render:()=>({template:t()})},n={globals:{theme:"slate-teal-light"},render:()=>({template:t()})},l={globals:{theme:"slate-teal-dark"},render:()=>({template:t()})},c={globals:{theme:"claude-plus-light"},render:()=>({template:t()})},p={globals:{theme:"claude-plus-dark"},render:()=>({template:t()})},i={globals:{theme:"nexora-light"},render:()=>({template:t(!0)})},m={globals:{theme:"nexora-dark"},render:()=>({template:t(!0)})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: paletteTemplate()
  })
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'zinc-light'
  },
  render: () => ({
    template: paletteTemplate()
  })
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'zinc-dark'
  },
  render: () => ({
    template: paletteTemplate()
  })
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-light'
  },
  render: () => ({
    template: paletteTemplate()
  })
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-dark'
  },
  render: () => ({
    template: paletteTemplate()
  })
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'claude-plus-light'
  },
  render: () => ({
    template: paletteTemplate()
  })
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'claude-plus-dark'
  },
  render: () => ({
    template: paletteTemplate()
  })
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'nexora-light'
  },
  render: () => ({
    template: paletteTemplate(true)
  })
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'nexora-dark'
  },
  render: () => ({
    template: paletteTemplate(true)
  })
}`,...m.parameters?.docs?.source}}};const b=["Default","ZincLight","ZincDark","SlateTealLight","SlateTealDark","ClaudePlusLight","ClaudePlusDark","NexoraLight","NexoraDark"];export{p as ClaudePlusDark,c as ClaudePlusLight,s as Default,m as NexoraDark,i as NexoraLight,l as SlateTealDark,n as SlateTealLight,o as ZincDark,d as ZincLight,b as __namedExportsOrder,g as default};
