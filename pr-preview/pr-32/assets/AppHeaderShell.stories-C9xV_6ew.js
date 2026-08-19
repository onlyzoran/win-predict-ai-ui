import{r as c}from"./iframe-CZbg21jV.js";import{f as p}from"./index-BRmrF3c1.js";import{_ as i}from"./AppHeaderShell-Cbfl00nq.js";import"./preload-helper-DR0Ra8Iv.js";import"./LocaleSwitcher-BTPvTIQ4.js";import"./DropdownMenuTrigger-DcSzUJej.js";import"./Presence-BxBsFUlv.js";import"./Primitive-B616n9Qm.js";import"./index-BfW2HXGB.js";import"./index-D7g1-zI5.js";import"./useForwardExpose-DTCiqJDU.js";import"./useId-DCtzg9yx.js";import"./createContext-9E_p4YM4.js";import"./Teleport-442Fj_HE.js";import"./nullish-CHIgUVhi.js";import"./cn-DaT-yT0k.js";import"./RovingFocusGroup-By-EjTts.js";import"./ThemeToggle-D5B_QNyk.js";const o=["en","ru"],s={en:"English",ru:"Русский"},G={title:"Win Predict AI / UI / AppHeaderShell",component:i,tags:["autodocs"]},e={args:{locale:"en",locales:o,localeLabels:s,localeAriaLabel:"Language",themeAriaLabelLight:"Switch to light theme",themeAriaLabelDark:"Switch to dark theme",githubUrl:"https://github.com/onlyzoran/win-predict-ai",githubAriaLabel:"GitHub"},render:a=>({components:{AppHeaderShell:i,IconLogin:p},setup(){const n=c(a.locale);return{args:a,locale:n,locales:o,localeLabels:s}},template:`
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
    `})},l={args:{locale:"ru",locales:o,localeLabels:s},render:a=>({components:{AppHeaderShell:i},setup(){const n=c(a.locale);return{args:a,locale:n,locales:o,localeLabels:s}},template:`
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
    `})},t={globals:{theme:"slate-teal-light"},...e},r={globals:{theme:"slate-teal-dark"},...e};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-light'
  },
  ...WithGitHubAndActions
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-dark'
  },
  ...WithGitHubAndActions
}`,...r.parameters?.docs?.source}}};const P=["WithGitHubAndActions","BrandOnly","Light","Dark"];export{l as BrandOnly,r as Dark,t as Light,e as WithGitHubAndActions,P as __namedExportsOrder,G as default};
