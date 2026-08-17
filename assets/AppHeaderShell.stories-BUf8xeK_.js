import{d as x,u as S,c as u,a as r,r as b,b as h,F as g,e as k,f,m as v,o as p,g as A}from"./iframe-Bm1X6sB0.js";import{i as H,w}from"./index-5c_f-Qnn.js";import{_ as y}from"./LocaleSwitcher-C13_Nnnf.js";import{_ as I}from"./ThemeToggle-B759Qluz.js";import"./preload-helper-CWSTMizN.js";import"./cn-arqyrL0O.js";const G={class:"fixed top-0 right-0 left-0 z-50 flex h-14 items-center justify-between border-b bg-background/80 px-6 shadow-sm backdrop-blur-md"},U={class:"min-w-0"},V={class:"flex items-center gap-1"},D=["href","aria-label"],d=x({__name:"AppHeaderShell",props:v({locales:{},localeLabels:{},localeAriaLabel:{default:"Language"},themeAriaLabelLight:{default:"Switch to light theme"},themeAriaLabelDark:{default:"Switch to dark theme"},githubUrl:{},githubAriaLabel:{default:"GitHub"}},{locale:{required:!0},localeModifiers:{}}),emits:["update:locale"],setup(e){const a=S(e,"locale");return(m,l)=>(p(),u("header",G,[r("div",U,[b(m.$slots,"brand")]),r("div",V,[h(y,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=L=>a.value=L),locales:e.locales,labels:e.localeLabels,"aria-label":e.localeAriaLabel},null,8,["modelValue","locales","labels","aria-label"]),h(I,{"aria-label-light":e.themeAriaLabelLight,"aria-label-dark":e.themeAriaLabelDark},null,8,["aria-label-light","aria-label-dark"]),e.githubUrl?(p(),u(g,{key:0},[l[1]||(l[1]=r("span",{class:"mx-1 h-5 w-px bg-border","aria-hidden":"true"},null,-1)),r("a",{href:e.githubUrl,target:"_blank",rel:"noreferrer",class:"rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground","aria-label":e.githubAriaLabel},[h(k(H),{size:16,"aria-hidden":"true"})],8,D)],64)):f("",!0),m.$slots.actions?(p(),u(g,{key:1},[l[2]||(l[2]=r("span",{class:"mx-1 h-5 w-px bg-border","aria-hidden":"true"},null,-1)),b(m.$slots,"actions")],64)):f("",!0)])]))}});d.__docgenInfo={exportName:"default",displayName:"AppHeaderShell",description:"",tags:{},props:[{name:"locales",required:!0,type:{name:"TSTypeOperator"}},{name:"localeLabels",required:!0,type:{name:"Record",elements:[{name:"string"},{name:"string"}]}},{name:"localeAriaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Language'"}},{name:"themeAriaLabelLight",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Switch to light theme'"}},{name:"themeAriaLabelDark",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Switch to dark theme'"}},{name:"githubUrl",required:!1,type:{name:"string"}},{name:"githubAriaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'GitHub'"}}],slots:[{name:"brand"},{name:"actions"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/AppHeaderShell.vue"]};const i=["en","ru"],c={en:"English",ru:"Русский"},$={title:"Win Predict AI / UI / AppHeaderShell",component:d,tags:["autodocs"]},t={args:{locale:"en",locales:i,localeLabels:c,localeAriaLabel:"Language",themeAriaLabelLight:"Switch to light theme",themeAriaLabelDark:"Switch to dark theme",githubUrl:"https://github.com/onlyzoran/win-predict-ai",githubAriaLabel:"GitHub"},render:e=>({components:{AppHeaderShell:d,IconLogin:w},setup(){const a=A(e.locale);return{args:e,locale:a,locales:i,localeLabels:c}},template:`
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
    `})},o={args:{locale:"ru",locales:i,localeLabels:c},render:e=>({components:{AppHeaderShell:d},setup(){const a=A(e.locale);return{args:e,locale:a,locales:i,localeLabels:c}},template:`
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
    `})},s={globals:{theme:"slate-teal-light"},...t},n={globals:{theme:"slate-teal-dark"},...t};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-light'
  },
  ...WithGitHubAndActions
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-dark'
  },
  ...WithGitHubAndActions
}`,...n.parameters?.docs?.source}}};const O=["WithGitHubAndActions","BrandOnly","Light","Dark"];export{o as BrandOnly,n as Dark,s as Light,t as WithGitHubAndActions,O as __namedExportsOrder,$ as default};
