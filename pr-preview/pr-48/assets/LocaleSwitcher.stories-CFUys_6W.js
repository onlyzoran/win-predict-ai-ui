import{w as s}from"./storyHelpers-C8GjIxNC.js";import{r as c}from"./iframe-BG9Um9s_.js";import{_ as r}from"./LocaleSwitcher-AYUYD7Lc.js";import"./preload-helper-DLzIWJua.js";import"./DropdownMenuTrigger-Cszdyrvb.js";import"./Presence-Bw3rX6qr.js";import"./Primitive-D9BDkSKS.js";import"./index-Cs1pj6hK.js";import"./index-DupvBdgD.js";import"./useForwardExpose-Bip5_TVC.js";import"./useId-BNx9emcj.js";import"./createContext-CoBn2RF9.js";import"./Teleport-BuRRR0em.js";import"./nullish-CHIgUVhi.js";import"./cn-DaT-yT0k.js";import"./index-C9D01r6J.js";import"./RovingFocusGroup-9Hi_RSYC.js";const a=["en","ru","de"],o={en:"English",ru:"Русский",de:"Deutsch"},A={title:"Win Predict AI / UI / LocaleSwitcher",component:r,tags:["autodocs"],argTypes:{modelValue:{control:"select",options:[...a]},ariaLabel:{control:"text"}}},i={modelValue:"en",locales:a,labels:o,ariaLabel:"Language"};function n(t){return{components:{LocaleSwitcher:r},setup(){const l=c(t.modelValue);return{args:t,locale:l,locales:a,labels:o}},template:`
      <div class="flex items-center gap-3">
        <LocaleSwitcher
          v-model="locale"
          :locales="locales"
          :labels="labels"
          :aria-label="args.ariaLabel"
        />
        <span class="text-sm text-muted-foreground">Selected: <code>{{ locale }}</code></span>
      </div>
    `}}const e={args:i,render:t=>n(t)},{ZincLight:C,ZincDark:Z,SlateTealLight:v,SlateTealDark:V,ClaudePlusLight:E,ClaudePlusDark:I}=s(e);e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: controlledArgs,
  render: args => controlledRender(args)
}`,...e.parameters?.docs?.source}}};const R=["Default","ZincLight","ZincDark","SlateTealLight","SlateTealDark","ClaudePlusLight","ClaudePlusDark"];export{I as ClaudePlusDark,E as ClaudePlusLight,e as Default,V as SlateTealDark,v as SlateTealLight,Z as ZincDark,C as ZincLight,R as __namedExportsOrder,A as default};
