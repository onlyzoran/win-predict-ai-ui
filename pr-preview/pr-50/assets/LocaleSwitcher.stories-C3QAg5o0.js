import{w as s}from"./storyHelpers-BtxSlO8i.js";import{r as c}from"./iframe-pIBGhHsF.js";import{_ as r}from"./LocaleSwitcher-D9fFLhD0.js";import"./preload-helper-QR2TdjE1.js";import"./DropdownMenuTrigger-C0h9hmZh.js";import"./Presence-Cc6kVTlr.js";import"./Primitive-BXWwZxR9.js";import"./index-DakSyiJJ.js";import"./index-B5Q6pv39.js";import"./useForwardExpose-BDLhgg3j.js";import"./useId-DIQRBMv5.js";import"./createContext-DUGmTljU.js";import"./Teleport-Ckia8xDA.js";import"./nullish-CHIgUVhi.js";import"./cn-DaT-yT0k.js";import"./index-B08xoKxG.js";import"./RovingFocusGroup-Dsta60Bs.js";const a=["en","ru","de"],o={en:"English",ru:"Русский",de:"Deutsch"},A={title:"Win Predict AI / UI / LocaleSwitcher",component:r,tags:["autodocs"],argTypes:{modelValue:{control:"select",options:[...a]},ariaLabel:{control:"text"}}},i={modelValue:"en",locales:a,labels:o,ariaLabel:"Language"};function n(t){return{components:{LocaleSwitcher:r},setup(){const l=c(t.modelValue);return{args:t,locale:l,locales:a,labels:o}},template:`
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
