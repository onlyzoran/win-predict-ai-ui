import{r as t}from"./iframe-BPfh3LMt.js";import{f as r}from"./index-DxXIMqEh.js";import{_ as a}from"./AppHeaderShell-ja7lLGhG.js";import{w as o}from"./storyHelpers-CiLmDOdr.js";import"./preload-helper-DCvky1p-.js";import"./LocaleSwitcher-BmDCql6h.js";import"./DropdownMenuTrigger-BY67bFos.js";import"./Presence-CqCl5xh-.js";import"./Primitive-Dhu-moVp.js";import"./index-CpnRdPoH.js";import"./index-CFqrjW3D.js";import"./useForwardExpose-Djy9A25T.js";import"./useId-BxlpgUiS.js";import"./createContext-BvkAYw-z.js";import"./Teleport-zEIaMaU0.js";import"./nullish-CHIgUVhi.js";import"./cn-DaT-yT0k.js";import"./RovingFocusGroup-DACytLBV.js";import"./ThemeToggle-CsynXZGC.js";const d=["en","ru"],s={en:"English",ru:"Русский"},l=[{match:"Arsenal — Chelsea",league:"EPL",prob:"62%",edge:"+4.2",trendClass:"bg-chart-1"},{match:"Real Madrid — Barcelona",league:"La Liga",prob:"54%",edge:"+1.8",trendClass:"bg-chart-2"},{match:"Bayern — Dortmund",league:"Bundesliga",prob:"71%",edge:"+6.1",trendClass:"bg-chart-3"},{match:"Inter — Milan",league:"Serie A",prob:"48%",edge:"-0.5",trendClass:"bg-chart-4"},{match:"PSG — Lyon",league:"Ligue 1",prob:"67%",edge:"+3.4",trendClass:"bg-chart-5"}];function n(){return`
    <div class="flex min-h-[32rem] flex-col gap-0 overflow-hidden rounded-lg border border-border bg-background">
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
          <span class="font-semibold text-foreground">Win Predict AI</span>
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
        <aside class="hidden w-44 shrink-0 border-r border-sidebar-border bg-sidebar p-3 sm:block">
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
              <p class="text-sm text-muted-foreground">Claude+ terminal preview — dense table + chart accents</p>
            </div>
            <button
              type="button"
              class="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground"
            >
              Refresh
            </button>
          </div>

          <div class="flex h-20 items-end gap-2 rounded-lg border border-border bg-card p-3">
            <div class="h-[65%] flex-1 rounded-sm bg-chart-1" title="Win rate" />
            <div class="h-[45%] flex-1 rounded-sm bg-chart-2" title="ROI" />
            <div class="h-[80%] flex-1 rounded-sm bg-chart-3" title="Edge" />
            <div class="h-[55%] flex-1 rounded-sm bg-chart-4" title="Volume" />
            <div class="h-[70%] flex-1 rounded-sm bg-chart-5" title="Accuracy" />
          </div>

          <div class="overflow-hidden rounded-lg border border-border bg-card">
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
  `}const I={title:"Win Predict AI / UI / Claude+",tags:["autodocs"],parameters:{layout:"padded"}},e={render:()=>({components:{AppHeaderShell:a,IconLogin:r},setup(){return{locale:t("en"),locales:d,localeLabels:s,predictions:l}},template:n()})},{ZincLight:T,ZincDark:H,SlateTealLight:E,SlateTealDark:_,ClaudePlusLight:M,ClaudePlusDark:W}=o(e);e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AppHeaderShell,
      IconLogin
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
}`,...e.parameters?.docs?.source}}};const Z=["Default","ZincLight","ZincDark","SlateTealLight","SlateTealDark","ClaudePlusLight","ClaudePlusDark"];export{W as ClaudePlusDark,M as ClaudePlusLight,e as Default,_ as SlateTealDark,E as SlateTealLight,H as ZincDark,T as ZincLight,Z as __namedExportsOrder,I as default};
