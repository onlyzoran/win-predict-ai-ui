import{w as s}from"./storyHelpers-BtxSlO8i.js";import{r as c}from"./iframe-CrnZ8d65.js";import{_ as r}from"./LocaleSwitcher-Ddr6bxRF.js";import"./preload-helper-QR2TdjE1.js";import"./DropdownMenuTrigger-KAiBh7VY.js";import"./Presence-dC_Gkh_j.js";import"./Primitive-CrksTsCf.js";import"./index-BzlL2piU.js";import"./index-Dz5-xlzP.js";import"./useForwardExpose-BVWDrM11.js";import"./useId-D2sgm-yv.js";import"./createContext-DsPWDOFb.js";import"./Teleport-hzOxMrHU.js";import"./nullish-CHIgUVhi.js";import"./cn-DaT-yT0k.js";import"./index-vXEQPYjJ.js";import"./RovingFocusGroup-C7YPdPzX.js";const a=["en","ru","de"],o={en:"English",ru:"Русский",de:"Deutsch"},A={title:"Win Predict AI / UI / LocaleSwitcher",component:r,tags:["autodocs"],argTypes:{modelValue:{control:"select",options:[...a]},ariaLabel:{control:"text"}}},i={modelValue:"en",locales:a,labels:o,ariaLabel:"Language"};function n(t){return{components:{LocaleSwitcher:r},setup(){const l=c(t.modelValue);return{args:t,locale:l,locales:a,labels:o}},template:`
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
