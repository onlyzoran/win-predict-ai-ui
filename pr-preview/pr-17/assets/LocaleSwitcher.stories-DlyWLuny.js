import{w as s}from"./storyHelpers-BtxSlO8i.js";import{r as c}from"./iframe-Cjt7rWhq.js";import{_ as r}from"./LocaleSwitcher-Pnwm9lMk.js";import"./preload-helper-BpNApFJb.js";import"./DropdownMenuTrigger-DmJcixSe.js";import"./Presence-Ba-6sSD-.js";import"./Primitive-B8dr5XQd.js";import"./index-pvDV5ziJ.js";import"./index-B34JahxU.js";import"./useForwardExpose-e8AT4wru.js";import"./useId-TreTHH-W.js";import"./createContext-DRGHJETB.js";import"./Teleport-rSlzd051.js";import"./nullish-CHIgUVhi.js";import"./cn-DaT-yT0k.js";import"./index-DD6tCWhD.js";import"./RovingFocusGroup-DD4x00n4.js";const a=["en","ru","de"],o={en:"English",ru:"Русский",de:"Deutsch"},A={title:"Win Predict AI / UI / LocaleSwitcher",component:r,tags:["autodocs"],argTypes:{modelValue:{control:"select",options:[...a]},ariaLabel:{control:"text"}}},i={modelValue:"en",locales:a,labels:o,ariaLabel:"Language"};function n(t){return{components:{LocaleSwitcher:r},setup(){const l=c(t.modelValue);return{args:t,locale:l,locales:a,labels:o}},template:`
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
