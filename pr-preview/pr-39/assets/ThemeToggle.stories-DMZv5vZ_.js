import{_ as r}from"./ThemeToggle-Ba0H3RWs.js";import{w as t}from"./storyHelpers-CiLmDOdr.js";import"./iframe-ZoloQyo5.js";import"./preload-helper-CE2h5UKx.js";import"./index-XtXVhrIn.js";import"./index-CJEqeRbw.js";import"./index-Cb2Vsne7.js";const m={title:"Win Predict AI / UI / ThemeToggle",component:r,tags:["autodocs"],argTypes:{ariaLabelLight:{control:"text"},ariaLabelDark:{control:"text"}}},e={args:{ariaLabelLight:"Switch to light theme",ariaLabelDark:"Switch to dark theme"}},{ZincLight:u,ZincDark:p,SlateTealLight:L,SlateTealDark:k,ClaudePlusLight:T,ClaudePlusDark:D}=t(e),l=`
  <header
    class="flex h-14 items-center justify-end border-b border-border bg-background/80 px-6 shadow-sm backdrop-blur-md"
  >
    <ThemeToggle v-bind="args" />
  </header>
`,a={args:{...e.args},render:n=>({components:{ThemeToggle:r},setup(){return{args:n}},template:l})},{InHeaderZincLight:I,InHeaderZincDark:S,InHeaderSlateTealLight:b,InHeaderSlateTealDark:H,InHeaderClaudePlusLight:P,InHeaderClaudePlusDark:f}=t(a,"InHeader");e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    ariaLabelLight: 'Switch to light theme',
    ariaLabelDark: 'Switch to dark theme'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => ({
    components: {
      ThemeToggle
    },
    setup() {
      return {
        args
      };
    },
    template: headerShellTemplate
  })
}`,...a.parameters?.docs?.source}}};const C=["Default","ZincLight","ZincDark","SlateTealLight","SlateTealDark","ClaudePlusLight","ClaudePlusDark","InHeader","InHeaderZincLight","InHeaderZincDark","InHeaderSlateTealLight","InHeaderSlateTealDark","InHeaderClaudePlusLight","InHeaderClaudePlusDark"];export{D as ClaudePlusDark,T as ClaudePlusLight,e as Default,a as InHeader,f as InHeaderClaudePlusDark,P as InHeaderClaudePlusLight,H as InHeaderSlateTealDark,b as InHeaderSlateTealLight,S as InHeaderZincDark,I as InHeaderZincLight,k as SlateTealDark,L as SlateTealLight,p as ZincDark,u as ZincLight,C as __namedExportsOrder,m as default};
