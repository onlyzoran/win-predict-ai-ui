import{w as s}from"./storyHelpers-C8GjIxNC.js";import{r as c}from"./iframe-DMsoZHAR.js";import{_ as r}from"./LocaleSwitcher-CIflUKfR.js";import"./preload-helper-e4nvIFnq.js";import"./DropdownMenuTrigger-BRIa2OM5.js";import"./Presence-DlirwYz2.js";import"./Primitive-BpbA5et_.js";import"./index-DV518hFd.js";import"./index-lNsOltMc.js";import"./useForwardExpose-BZSorg8f.js";import"./useId-CR5bGfzp.js";import"./createContext-EQ5MNBQ7.js";import"./Teleport-Bap-Csn8.js";import"./nullish-CHIgUVhi.js";import"./cn-DaT-yT0k.js";import"./index-Bhn_Qz93.js";import"./RovingFocusGroup-DiM1bToE.js";const a=["en","ru","de"],o={en:"English",ru:"Русский",de:"Deutsch"},A={title:"Win Predict AI / UI / LocaleSwitcher",component:r,tags:["autodocs"],argTypes:{modelValue:{control:"select",options:[...a]},ariaLabel:{control:"text"}}},i={modelValue:"en",locales:a,labels:o,ariaLabel:"Language"};function n(t){return{components:{LocaleSwitcher:r},setup(){const l=c(t.modelValue);return{args:t,locale:l,locales:a,labels:o}},template:`
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
