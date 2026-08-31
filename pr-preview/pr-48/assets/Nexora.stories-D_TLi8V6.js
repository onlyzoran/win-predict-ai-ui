import{r as a}from"./iframe-BG9Um9s_.js";import{f as o}from"./index-C9D01r6J.js";import{_ as n}from"./AppHeaderShell-D3pSdf4R.js";import{B as l}from"./BrandTitle-DaOcU0Du.js";import"./preload-helper-DLzIWJua.js";import"./LocaleSwitcher-AYUYD7Lc.js";import"./DropdownMenuTrigger-Cszdyrvb.js";import"./Presence-Bw3rX6qr.js";import"./Primitive-D9BDkSKS.js";import"./index-Cs1pj6hK.js";import"./index-DupvBdgD.js";import"./useForwardExpose-Bip5_TVC.js";import"./useId-BNx9emcj.js";import"./createContext-CoBn2RF9.js";import"./Teleport-BuRRR0em.js";import"./nullish-CHIgUVhi.js";import"./cn-DaT-yT0k.js";import"./RovingFocusGroup-9Hi_RSYC.js";import"./ThemeToggle-Bu1vrGA_.js";const s=["en","ru"],d={en:"English",ru:"Русский"},c=[{match:"Arsenal — Chelsea",league:"EPL",prob:"62%",edge:"+4.2",trendClass:"bg-chart-1"},{match:"Real Madrid — Barcelona",league:"La Liga",prob:"54%",edge:"+1.8",trendClass:"bg-chart-2"},{match:"Bayern — Dortmund",league:"Bundesliga",prob:"71%",edge:"+6.1",trendClass:"bg-chart-3"},{match:"Inter — Milan",league:"Serie A",prob:"48%",edge:"-0.5",trendClass:"bg-chart-4"},{match:"PSG — Lyon",league:"Ligue 1",prob:"67%",edge:"+3.4",trendClass:"bg-chart-5"}];function i(){return`
    <div class="nexora-glass-panel flex min-h-[32rem] flex-col gap-0 overflow-hidden rounded-xl border border-border bg-card/70">
      <AppHeaderShell
        v-model:locale="locale"
        :locales="locales"
        :locale-labels="localeLabels"
        locale-aria-label="Language"
        theme-aria-label-light="Switch to light theme"
        theme-aria-label-dark="Switch to dark theme"
        github-url="https://github.com/onlyzoran/win-predict-ai"
        github-aria-label="GitHub"
      >
        <template #brand>
          <BrandTitle href="#" />
        </template>
        <template #actions>
          <a
            href="#"
            class="inline-flex items-center gap-1.5 rounded-md p-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground sm:px-2 sm:py-1.5"
          >
            <IconLogin :size="16" aria-hidden="true" />
            <span class="hidden sm:inline">Login</span>
          </a>
        </template>
      </AppHeaderShell>

      <div class="flex flex-1">
        <aside class="hidden w-44 shrink-0 border-r border-sidebar-border bg-sidebar/80 p-3 sm:block">
          <p class="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Navigation</p>
          <nav class="flex flex-col gap-1">
            <a href="#" class="rounded-md bg-sidebar-primary px-2.5 py-1.5 text-sm font-medium text-sidebar-primary-foreground">
              Predictions
            </a>
            <a href="#" class="rounded-md px-2.5 py-1.5 text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
              Models
            </a>
            <a href="#" class="rounded-md px-2.5 py-1.5 text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
              History
            </a>
          </nav>
        </aside>

        <main class="flex flex-1 flex-col gap-4 p-4 pt-16">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h1 class="text-lg font-semibold text-foreground">Today&apos;s picks</h1>
              <p class="text-sm text-muted-foreground">Nexora terminal preview — dense table + chart accents</p>
            </div>
            <button
              type="button"
              class="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground"
            >
              Refresh
            </button>
          </div>

          <div class="nexora-glass-panel flex h-20 items-end gap-2 rounded-lg border border-border bg-card/75 p-3">
            <div class="h-[65%] flex-1 rounded-sm bg-chart-1" title="Win rate" />
            <div class="h-[45%] flex-1 rounded-sm bg-chart-2" title="ROI" />
            <div class="h-[80%] flex-1 rounded-sm bg-chart-3" title="Edge" />
            <div class="h-[55%] flex-1 rounded-sm bg-chart-4" title="Volume" />
            <div class="h-[70%] flex-1 rounded-sm bg-chart-5" title="Accuracy" />
          </div>

          <div class="nexora-glass-panel overflow-hidden rounded-lg border border-border bg-card/75">
            <table class="w-full text-sm">
              <thead class="border-b border-border bg-muted/50">
                <tr>
                  <th class="px-3 py-2 text-left font-medium text-muted-foreground">Match</th>
                  <th class="px-3 py-2 text-left font-medium text-muted-foreground">League</th>
                  <th class="px-3 py-2 text-right font-medium text-muted-foreground">Prob</th>
                  <th class="px-3 py-2 text-right font-medium text-muted-foreground">Edge</th>
                  <th class="px-3 py-2 text-center font-medium text-muted-foreground">Trend</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="row in predictions"
                  :key="row.match"
                  class="border-b border-border last:border-0 hover:bg-accent/40"
                >
                  <td class="px-3 py-2 font-medium text-foreground">{{ row.match }}</td>
                  <td class="px-3 py-2 text-muted-foreground">{{ row.league }}</td>
                  <td class="px-3 py-2 text-right tabular-nums text-foreground">{{ row.prob }}</td>
                  <td
                    class="px-3 py-2 text-right tabular-nums"
                    :class="row.edge.startsWith('+') ? 'text-primary' : 'text-muted-foreground'"
                  >
                    {{ row.edge }}
                  </td>
                  <td class="px-3 py-2 text-center">
                    <span class="inline-block size-3 rounded-sm" :class="row.trendClass" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  `}const D={title:"Win Predict AI / UI / Nexora",tags:["autodocs"],parameters:{layout:"padded"}},e={render:()=>({components:{AppHeaderShell:n,IconLogin:o,BrandTitle:l},setup(){return{locale:a("en"),locales:s,localeLabels:d,predictions:c}},template:i()})},t={globals:{theme:"nexora-light"},render:()=>({components:{AppHeaderShell:n,IconLogin:o,BrandTitle:l},setup(){return{locale:a("en"),locales:s,localeLabels:d,predictions:c}},template:i()})},r={globals:{theme:"nexora-dark"},render:()=>({components:{AppHeaderShell:n,IconLogin:o,BrandTitle:l},setup(){return{locale:a("en"),locales:s,localeLabels:d,predictions:c}},template:i()})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AppHeaderShell,
      IconLogin,
      BrandTitle
    },
    setup() {
      const locale = ref('en');
      return {
        locale,
        locales,
        localeLabels,
        predictions
      };
    },
    template: terminalTemplate()
  })
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'nexora-light'
  },
  render: () => ({
    components: {
      AppHeaderShell,
      IconLogin,
      BrandTitle
    },
    setup() {
      const locale = ref('en');
      return {
        locale,
        locales,
        localeLabels,
        predictions
      };
    },
    template: terminalTemplate()
  })
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'nexora-dark'
  },
  render: () => ({
    components: {
      AppHeaderShell,
      IconLogin,
      BrandTitle
    },
    setup() {
      const locale = ref('en');
      return {
        locale,
        locales,
        localeLabels,
        predictions
      };
    },
    template: terminalTemplate()
  })
}`,...r.parameters?.docs?.source}}};const E=["Default","Light","Dark"];export{r as Dark,e as Default,t as Light,E as __namedExportsOrder,D as default};
