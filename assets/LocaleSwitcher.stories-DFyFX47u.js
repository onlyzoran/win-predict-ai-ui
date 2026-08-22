import{w as s}from"./storyHelpers-CiLmDOdr.js";import{r as c}from"./iframe-DqO-fblW.js";import{_ as r}from"./LocaleSwitcher-D8vhOq99.js";import"./preload-helper-CWSTMizN.js";import"./DropdownMenuTrigger-C9nFP3gn.js";import"./Presence-C3fp2O4I.js";import"./Primitive-wDvBEZQ6.js";import"./index-Cc97huLb.js";import"./index-OvRJ06sW.js";import"./useForwardExpose-lchLs79b.js";import"./useId-DNnsI3Aa.js";import"./createContext-BiuJ0FWR.js";import"./Teleport-DXX1s1z0.js";import"./nullish-CHIgUVhi.js";import"./cn-DaT-yT0k.js";import"./index-DVAYGJwT.js";import"./RovingFocusGroup-BT6No11B.js";const a=["en","ru","de"],o={en:"English",ru:"Русский",de:"Deutsch"},A={title:"Win Predict AI / UI / LocaleSwitcher",component:r,tags:["autodocs"],argTypes:{modelValue:{control:"select",options:[...a]},ariaLabel:{control:"text"}}},i={modelValue:"en",locales:a,labels:o,ariaLabel:"Language"};function n(t){return{components:{LocaleSwitcher:r},setup(){const l=c(t.modelValue);return{args:t,locale:l,locales:a,labels:o}},template:`
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
