import{w as s}from"./storyHelpers-CiLmDOdr.js";import{r as c}from"./iframe-CjsSOzag.js";import{_ as r}from"./LocaleSwitcher-hc-exjF_.js";import"./preload-helper-O0ynFoic.js";import"./DropdownMenuTrigger-Rhccqyhx.js";import"./Presence-Yo5WxD2i.js";import"./Primitive-CZq5C_r-.js";import"./index-iTowoDpF.js";import"./index-CO_Rj_7H.js";import"./useForwardExpose-DOkWvSvD.js";import"./useId-B6EMcsnx.js";import"./createContext-BRe1JI0z.js";import"./Teleport-cxlipT3T.js";import"./nullish-CHIgUVhi.js";import"./cn-DaT-yT0k.js";import"./index-B8lnUtTy.js";import"./RovingFocusGroup-CXzDS4Yl.js";const a=["en","ru","de"],o={en:"English",ru:"Русский",de:"Deutsch"},A={title:"Win Predict AI / UI / LocaleSwitcher",component:r,tags:["autodocs"],argTypes:{modelValue:{control:"select",options:[...a]},ariaLabel:{control:"text"}}},i={modelValue:"en",locales:a,labels:o,ariaLabel:"Language"};function n(t){return{components:{LocaleSwitcher:r},setup(){const l=c(t.modelValue);return{args:t,locale:l,locales:a,labels:o}},template:`
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
