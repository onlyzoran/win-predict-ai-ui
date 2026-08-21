import{w as i}from"./storyHelpers-CiLmDOdr.js";import{r as s}from"./iframe-Co1gEe7Z.js";import{f as c}from"./index-BJH0Ay5l.js";import{_ as n}from"./AppHeaderShell-ZeNId2ZQ.js";import"./preload-helper-CE2h5UKx.js";import"./LocaleSwitcher-BQQXdcw1.js";import"./DropdownMenuTrigger-oVvSThB4.js";import"./Presence-CJcLSHfj.js";import"./Primitive-phwxLrPC.js";import"./index-BwSErBIk.js";import"./index-BSlgtreQ.js";import"./useForwardExpose-BG-F8nu2.js";import"./useId-hjJZh0PL.js";import"./createContext-3f_-hNPN.js";import"./Teleport-CzF24d0o.js";import"./nullish-CHIgUVhi.js";import"./cn-DaT-yT0k.js";import"./RovingFocusGroup-DVwdMaLj.js";import"./ThemeToggle-D13tDWYX.js";const t=["en","ru"],r={en:"English",ru:"Русский"},y={title:"Win Predict AI / UI / AppHeaderShell",component:n,tags:["autodocs"]},a={args:{locale:"en",locales:t,localeLabels:r,localeAriaLabel:"Language",themeAriaLabelLight:"Switch to light theme",themeAriaLabelDark:"Switch to dark theme",githubUrl:"https://github.com/onlyzoran/win-predict-ai",githubAriaLabel:"GitHub"},render:e=>({components:{AppHeaderShell:n,IconLogin:c},setup(){const o=s(e.locale);return{args:e,locale:o,locales:t,localeLabels:r}},template:`
      <div class="pt-16">
        <AppHeaderShell
          v-model:locale="locale"
          :locales="locales"
          :locale-labels="localeLabels"
          :locale-aria-label="args.localeAriaLabel"
          :theme-aria-label-light="args.themeAriaLabelLight"
          :theme-aria-label-dark="args.themeAriaLabelDark"
          :github-url="args.githubUrl"
          :github-aria-label="args.githubAriaLabel"
        >
          <template #brand>
            <a href="#" class="font-semibold text-foreground hover:opacity-80">Win Predict AI</a>
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
        <p class="text-sm text-muted-foreground">Page content below the fixed header.</p>
      </div>
    `})},l={args:{locale:"ru",locales:t,localeLabels:r},render:e=>({components:{AppHeaderShell:n},setup(){const o=s(e.locale);return{args:e,locale:o,locales:t,localeLabels:r}},template:`
      <div class="pt-16">
        <AppHeaderShell
          v-model:locale="locale"
          :locales="locales"
          :locale-labels="localeLabels"
        >
          <template #brand>
            <span class="font-semibold text-foreground">Win Predict AI Admin</span>
          </template>
        </AppHeaderShell>
        <p class="text-sm text-muted-foreground">No GitHub link, no actions slot.</p>
      </div>
    `})},{ZincLight:W,ZincDark:G,SlateTealLight:U,SlateTealDark:_,ClaudePlusLight:z,ClaudePlusDark:C}=i(a);a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'en',
    locales,
    localeLabels,
    localeAriaLabel: 'Language',
    themeAriaLabelLight: 'Switch to light theme',
    themeAriaLabelDark: 'Switch to dark theme',
    githubUrl: 'https://github.com/onlyzoran/win-predict-ai',
    githubAriaLabel: 'GitHub'
  },
  render: args => ({
    components: {
      AppHeaderShell,
      IconLogin
    },
    setup() {
      const locale = ref(args.locale);
      return {
        args,
        locale,
        locales,
        localeLabels
      };
    },
    template: \`
      <div class="pt-16">
        <AppHeaderShell
          v-model:locale="locale"
          :locales="locales"
          :locale-labels="localeLabels"
          :locale-aria-label="args.localeAriaLabel"
          :theme-aria-label-light="args.themeAriaLabelLight"
          :theme-aria-label-dark="args.themeAriaLabelDark"
          :github-url="args.githubUrl"
          :github-aria-label="args.githubAriaLabel"
        >
          <template #brand>
            <a href="#" class="font-semibold text-foreground hover:opacity-80">Win Predict AI</a>
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
        <p class="text-sm text-muted-foreground">Page content below the fixed header.</p>
      </div>
    \`
  })
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'ru',
    locales,
    localeLabels
  },
  render: args => ({
    components: {
      AppHeaderShell
    },
    setup() {
      const locale = ref(args.locale);
      return {
        args,
        locale,
        locales,
        localeLabels
      };
    },
    template: \`
      <div class="pt-16">
        <AppHeaderShell
          v-model:locale="locale"
          :locales="locales"
          :locale-labels="localeLabels"
        >
          <template #brand>
            <span class="font-semibold text-foreground">Win Predict AI Admin</span>
          </template>
        </AppHeaderShell>
        <p class="text-sm text-muted-foreground">No GitHub link, no actions slot.</p>
      </div>
    \`
  })
}`,...l.parameters?.docs?.source}}};const T=["WithGitHubAndActions","BrandOnly","ZincLight","ZincDark","SlateTealLight","SlateTealDark","ClaudePlusLight","ClaudePlusDark"];export{l as BrandOnly,C as ClaudePlusDark,z as ClaudePlusLight,_ as SlateTealDark,U as SlateTealLight,a as WithGitHubAndActions,G as ZincDark,W as ZincLight,T as __namedExportsOrder,y as default};
