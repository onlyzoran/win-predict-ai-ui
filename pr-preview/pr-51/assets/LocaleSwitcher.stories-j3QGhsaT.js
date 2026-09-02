import{w as s}from"./storyHelpers-C8GjIxNC.js";import{r as c}from"./iframe-DNECT0O5.js";import{_ as r}from"./LocaleSwitcher-CkelOHy7.js";import"./preload-helper-C5OArUy5.js";import"./DropdownMenuTrigger-BS4hl6So.js";import"./Presence-27Xr_Y5Z.js";import"./Primitive-B99v3q95.js";import"./index-CkORYd66.js";import"./index-Ccztzia1.js";import"./useForwardExpose-CPcRDBqZ.js";import"./useId-DIjdQX3n.js";import"./createContext-fMMRMqoc.js";import"./Teleport-onjAy_sy.js";import"./nullish-CHIgUVhi.js";import"./cn-DaT-yT0k.js";import"./index-OOC3Juja.js";import"./RovingFocusGroup-BPULZW_A.js";const a=["en","ru","de"],o={en:"English",ru:"Русский",de:"Deutsch"},A={title:"Win Predict AI / UI / LocaleSwitcher",component:r,tags:["autodocs"],argTypes:{modelValue:{control:"select",options:[...a]},ariaLabel:{control:"text"}}},i={modelValue:"en",locales:a,labels:o,ariaLabel:"Language"};function n(t){return{components:{LocaleSwitcher:r},setup(){const l=c(t.modelValue);return{args:t,locale:l,locales:a,labels:o}},template:`
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
