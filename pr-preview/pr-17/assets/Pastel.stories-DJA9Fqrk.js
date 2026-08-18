import{r}from"./iframe-DOMXs0XN.js";import{w as a}from"./index-CaXKSMYv.js";import{_ as o}from"./AppHeaderShell-QPcaGGrN.js";import"./preload-helper-BpNApFJb.js";import"./LocaleSwitcher-CdQC8xeJ.js";import"./cn-dn7fIY-C.js";import"./ThemeToggle-KrWDZcw9.js";const n=["en","ru"],s={en:"English",ru:"Русский"},l=[{match:"Arsenal — Chelsea",league:"EPL",ht:"1 : 0",ft:"2 : 1",prob:"62%",edge:"+4.2"},{match:"Real Madrid — Barcelona",league:"La Liga",ht:"0 : 0",ft:"1 : 2",prob:"54%",edge:"+1.8"},{match:"Bayern — Dortmund",league:"Bundesliga",ht:"2 : 1",ft:"3 : 1",prob:"71%",edge:"+6.1"},{match:"Inter — Milan",league:"Serie A",ht:"0 : 1",ft:"1 : 1",prob:"48%",edge:"-0.5"},{match:"PSG — Lyon",league:"Ligue 1",ht:"1 : 0",ft:"2 : 0",prob:"67%",edge:"+3.4"}];function d(){return`
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
              Results
            </a>
            <a href="#" class="rounded-md px-2.5 py-1.5 text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
              Predictions
            </a>
            <a href="#" class="rounded-md px-2.5 py-1.5 text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
              Models
            </a>
          </nav>
        </aside>

        <main class="flex flex-1 flex-col gap-4 p-4 pt-16">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h1 class="text-lg font-semibold text-foreground">Match results</h1>
              <p class="text-sm text-muted-foreground">Pastel terminal — финальные и промежуточные итоги</p>
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
                  <th class="px-3 py-2 text-center font-medium text-muted-foreground">HT</th>
                  <th class="px-3 py-2 text-center font-medium text-muted-foreground">FT</th>
                  <th class="px-3 py-2 text-right font-medium text-muted-foreground">Prob</th>
                  <th class="px-3 py-2 text-right font-medium text-muted-foreground">Edge</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="row in matches"
                  :key="row.match"
                  class="border-b border-border last:border-0 hover:bg-accent/40"
                >
                  <td class="px-3 py-2 font-medium text-foreground">{{ row.match }}</td>
                  <td class="px-3 py-2 text-muted-foreground">{{ row.league }}</td>
                  <td class="px-3 py-2 text-center">
                    <span class="inline-flex min-w-14 items-center justify-center rounded-md bg-outcome-intermediate px-2 py-0.5 tabular-nums text-xs font-semibold text-outcome-intermediate-foreground">
                      {{ row.ht }}
                    </span>
                  </td>
                  <td class="px-3 py-2 text-center">
                    <span class="inline-flex min-w-14 items-center justify-center rounded-md bg-outcome-final px-2 py-0.5 tabular-nums text-xs font-semibold text-outcome-final-foreground">
                      {{ row.ft }}
                    </span>
                  </td>
                  <td class="px-3 py-2 text-right tabular-nums text-foreground">{{ row.prob }}</td>
                  <td
                    class="px-3 py-2 text-right tabular-nums"
                    :class="row.edge.startsWith('+') ? 'text-primary' : 'text-muted-foreground'"
                  >
                    {{ row.edge }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  `}const x={title:"Win Predict AI / UI / Pastel",tags:["autodocs"],parameters:{layout:"padded"}},e={globals:{theme:"pastel-light"},render:()=>({components:{AppHeaderShell:o,IconLogin:a},setup(){return{locale:r("en"),locales:n,localeLabels:s,matches:l}},template:d()})},t={globals:{theme:"pastel-dark"},render:()=>({components:{AppHeaderShell:o,IconLogin:a},setup(){return{locale:r("en"),locales:n,localeLabels:s,matches:l}},template:d()})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'pastel-light'
  },
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
        matches
      };
    },
    template: terminalTemplate()
  })
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'pastel-dark'
  },
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
        matches
      };
    },
    template: terminalTemplate()
  })
}`,...t.parameters?.docs?.source}}};const f=["Light","Dark"];export{t as Dark,e as Light,f as __namedExportsOrder,x as default};
