import{w as s}from"./storyHelpers-C8GjIxNC.js";import{r as c}from"./iframe-BKwT2t80.js";import{_ as r}from"./LocaleSwitcher-VUPFL5HC.js";import"./preload-helper-DLzIWJua.js";import"./DropdownMenuTrigger-BnVr_aKs.js";import"./Presence-BFEpRgpy.js";import"./Primitive-BzAyRPy0.js";import"./index-ZmejUnQb.js";import"./index-byXwkcx4.js";import"./useForwardExpose-Rh87xWQC.js";import"./useId-DGmG3Yx4.js";import"./createContext-CIfQaHsO.js";import"./Teleport-BHSHZ19n.js";import"./nullish-CHIgUVhi.js";import"./cn-DaT-yT0k.js";import"./index-Z9ScswFW.js";import"./RovingFocusGroup-trFJjA9e.js";const a=["en","ru","de"],o={en:"English",ru:"Русский",de:"Deutsch"},A={title:"Win Predict AI / UI / LocaleSwitcher",component:r,tags:["autodocs"],argTypes:{modelValue:{control:"select",options:[...a]},ariaLabel:{control:"text"}}},i={modelValue:"en",locales:a,labels:o,ariaLabel:"Language"};function n(t){return{components:{LocaleSwitcher:r},setup(){const l=c(t.modelValue);return{args:t,locale:l,locales:a,labels:o}},template:`
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
