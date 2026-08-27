import{w as s}from"./storyHelpers-BtxSlO8i.js";import{r as c}from"./iframe-Dygt4YQp.js";import{_ as r}from"./LocaleSwitcher-BBRNhX6b.js";import"./preload-helper-BpNApFJb.js";import"./DropdownMenuTrigger-Cfq3kS0t.js";import"./Presence-D0LJI6VD.js";import"./Primitive-C3CpuQZt.js";import"./index-BGxVcJte.js";import"./index-CxemjBMX.js";import"./useForwardExpose-s7ZJZv2c.js";import"./useId-C3aew__I.js";import"./createContext-GyXHn4KY.js";import"./Teleport-nLOrXMhd.js";import"./nullish-CHIgUVhi.js";import"./cn-DaT-yT0k.js";import"./index-CVVCqa-X.js";import"./RovingFocusGroup-BFXy4bb_.js";const a=["en","ru","de"],o={en:"English",ru:"Русский",de:"Deutsch"},A={title:"Win Predict AI / UI / LocaleSwitcher",component:r,tags:["autodocs"],argTypes:{modelValue:{control:"select",options:[...a]},ariaLabel:{control:"text"}}},i={modelValue:"en",locales:a,labels:o,ariaLabel:"Language"};function n(t){return{components:{LocaleSwitcher:r},setup(){const l=c(t.modelValue);return{args:t,locale:l,locales:a,labels:o}},template:`
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
