import{w as c}from"./storyHelpers-C8GjIxNC.js";import{r as i}from"./iframe-BKwT2t80.js";import{f as p}from"./index-Z9ScswFW.js";import{_ as n}from"./AppHeaderShell-Ahrl22fV.js";import{B as s}from"./BrandTitle-CH9y5-Wz.js";import"./preload-helper-DLzIWJua.js";import"./LocaleSwitcher-VUPFL5HC.js";import"./DropdownMenuTrigger-BnVr_aKs.js";import"./Presence-BFEpRgpy.js";import"./Primitive-BzAyRPy0.js";import"./index-ZmejUnQb.js";import"./index-byXwkcx4.js";import"./useForwardExpose-Rh87xWQC.js";import"./useId-DGmG3Yx4.js";import"./createContext-CIfQaHsO.js";import"./Teleport-BHSHZ19n.js";import"./nullish-CHIgUVhi.js";import"./cn-DaT-yT0k.js";import"./RovingFocusGroup-trFJjA9e.js";import"./ThemeToggle-B8vhy4PB.js";const t=["en","ru"],r={en:"English",ru:"Русский"},G={title:"Win Predict AI / UI / AppHeaderShell",component:n,tags:["autodocs"]},a={args:{locale:"en",locales:t,localeLabels:r,localeAriaLabel:"Language",themeAriaLabelLight:"Switch to light theme",themeAriaLabelDark:"Switch to dark theme",githubUrl:"https://github.com/onlyzoran/win-predict-ai",githubAriaLabel:"GitHub"},render:e=>({components:{AppHeaderShell:n,IconLogin:p,BrandTitle:s},setup(){const o=i(e.locale);return{args:e,locale:o,locales:t,localeLabels:r}},template:`
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
        <p class="text-sm text-muted-foreground">Page content below the fixed header.</p>
      </div>
    `})},l={args:{locale:"ru",locales:t,localeLabels:r},render:e=>({components:{AppHeaderShell:n,BrandTitle:s},setup(){const o=i(e.locale);return{args:e,locale:o,locales:t,localeLabels:r}},template:`
      <div class="pt-16">
        <AppHeaderShell
          v-model:locale="locale"
          :locales="locales"
          :locale-labels="localeLabels"
        >
          <template #brand>
            <BrandTitle suffix=" Admin" />
          </template>
        </AppHeaderShell>
        <p class="text-sm text-muted-foreground">No GitHub link, no actions slot.</p>
      </div>
    `})},{ZincLight:I,ZincDark:U,SlateTealLight:_,SlateTealDark:z,ClaudePlusLight:C,ClaudePlusDark:Z}=c(a);a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
      IconLogin,
      BrandTitle
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
      AppHeaderShell,
      BrandTitle
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
            <BrandTitle suffix=" Admin" />
          </template>
        </AppHeaderShell>
        <p class="text-sm text-muted-foreground">No GitHub link, no actions slot.</p>
      </div>
    \`
  })
}`,...l.parameters?.docs?.source}}};const O=["WithGitHubAndActions","BrandOnly","ZincLight","ZincDark","SlateTealLight","SlateTealDark","ClaudePlusLight","ClaudePlusDark"];export{l as BrandOnly,Z as ClaudePlusDark,C as ClaudePlusLight,z as SlateTealDark,_ as SlateTealLight,a as WithGitHubAndActions,U as ZincDark,I as ZincLight,O as __namedExportsOrder,G as default};
