import{w as s}from"./storyHelpers-CiLmDOdr.js";import{r as c}from"./iframe-DrxeuGHg.js";import{_ as r}from"./LocaleSwitcher-CGosFli6.js";import"./preload-helper-CWSTMizN.js";import"./DropdownMenuTrigger-DqT31B1g.js";import"./Presence-Zij-Ynek.js";import"./Primitive-D0k1zrdX.js";import"./index-Cq5DJ3c2.js";import"./index-4_bo63-3.js";import"./useForwardExpose-D10lv_Y8.js";import"./useId-DUbumxmf.js";import"./createContext-CqK2b_PS.js";import"./Teleport-BgLUts2y.js";import"./nullish-CHIgUVhi.js";import"./cn-DaT-yT0k.js";import"./index-CaIypAJk.js";import"./RovingFocusGroup-DMXU_7C-.js";const a=["en","ru","de"],o={en:"English",ru:"Русский",de:"Deutsch"},A={title:"Win Predict AI / UI / LocaleSwitcher",component:r,tags:["autodocs"],argTypes:{modelValue:{control:"select",options:[...a]},ariaLabel:{control:"text"}}},i={modelValue:"en",locales:a,labels:o,ariaLabel:"Language"};function n(t){return{components:{LocaleSwitcher:r},setup(){const l=c(t.modelValue);return{args:t,locale:l,locales:a,labels:o}},template:`
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
