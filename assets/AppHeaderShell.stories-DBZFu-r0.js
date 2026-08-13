import{d as L,u as A,c as d,a as t,r as p,b as m,F as h,e as x,f as b,m as v,o as u,g}from"./iframe-BMJMIWcR.js";import{t as S,l as k}from"./index-75Td3ern.js";import{_ as H}from"./LocaleSwitcher-BFlysRuR.js";import{_ as w}from"./ThemeToggle-C3cLixGU.js";import"./preload-helper-CWSTMizN.js";import"./cn-D7voatc2.js";const y={class:"fixed top-0 right-0 left-0 z-50 flex h-14 items-center justify-between border-b bg-background/80 px-6 shadow-sm backdrop-blur-md"},I={class:"min-w-0"},U={class:"flex items-center gap-1"},V=["href","aria-label"],i=L({__name:"AppHeaderShell",props:v({locales:{},localeLabels:{},localeAriaLabel:{default:"Language"},themeAriaLabelLight:{default:"Switch to light theme"},themeAriaLabelDark:{default:"Switch to dark theme"},githubUrl:{},githubAriaLabel:{default:"GitHub"}},{locale:{required:!0},localeModifiers:{}}),emits:["update:locale"],setup(e){const a=A(e,"locale");return(c,l)=>(u(),d("header",y,[t("div",I,[p(c.$slots,"brand")]),t("div",U,[m(H,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=f=>a.value=f),locales:e.locales,labels:e.localeLabels,"aria-label":e.localeAriaLabel},null,8,["modelValue","locales","labels","aria-label"]),m(w,{"aria-label-light":e.themeAriaLabelLight,"aria-label-dark":e.themeAriaLabelDark},null,8,["aria-label-light","aria-label-dark"]),e.githubUrl?(u(),d(h,{key:0},[l[1]||(l[1]=t("span",{class:"mx-1 h-5 w-px bg-border","aria-hidden":"true"},null,-1)),t("a",{href:e.githubUrl,target:"_blank",rel:"noreferrer",class:"rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground","aria-label":e.githubAriaLabel},[m(x(S),{size:16,"aria-hidden":"true"})],8,V)],64)):b("",!0),c.$slots.actions?(u(),d(h,{key:1},[l[2]||(l[2]=t("span",{class:"mx-1 h-5 w-px bg-border","aria-hidden":"true"},null,-1)),p(c.$slots,"actions")],64)):b("",!0)])]))}});i.__docgenInfo={exportName:"default",displayName:"AppHeaderShell",description:"",tags:{},props:[{name:"locales",required:!0,type:{name:"TSTypeOperator"}},{name:"localeLabels",required:!0,type:{name:"Record",elements:[{name:"string"},{name:"string"}]}},{name:"localeAriaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Language'"}},{name:"themeAriaLabelLight",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Switch to light theme'"}},{name:"themeAriaLabelDark",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Switch to dark theme'"}},{name:"githubUrl",required:!1,type:{name:"string"}},{name:"githubAriaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'GitHub'"}}],slots:[{name:"brand"},{name:"actions"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/AppHeaderShell.vue"]};const n=["en","ru"],s={en:"English",ru:"Русский"},z={title:"Win Predict AI / UI / AppHeaderShell",component:i,tags:["autodocs"]},r={args:{locale:"en",locales:n,localeLabels:s,localeAriaLabel:"Language",themeAriaLabelLight:"Switch to light theme",themeAriaLabelDark:"Switch to dark theme",githubUrl:"https://github.com/onlyzoran/win-predict-ai",githubAriaLabel:"GitHub"},render:e=>({components:{AppHeaderShell:i,IconLogin:k},setup(){const a=g(e.locale);return{args:e,locale:a,locales:n,localeLabels:s}},template:`
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
    `})},o={args:{locale:"ru",locales:n,localeLabels:s},render:e=>({components:{AppHeaderShell:i},setup(){const a=g(e.locale);return{args:e,locale:a,locales:n,localeLabels:s}},template:`
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
    `})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const B=["WithGitHubAndActions","BrandOnly"];export{o as BrandOnly,r as WithGitHubAndActions,B as __namedExportsOrder,z as default};
