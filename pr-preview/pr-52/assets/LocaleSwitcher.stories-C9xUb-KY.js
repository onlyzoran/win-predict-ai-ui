import{w as s}from"./storyHelpers-C8GjIxNC.js";import{r as c}from"./iframe-DGu8-ult.js";import{_ as r}from"./LocaleSwitcher-B0JXxBNZ.js";import"./preload-helper-ryaLxqgM.js";import"./DropdownMenuTrigger-C09hcUMx.js";import"./Presence-DuG5eVED.js";import"./Primitive-b-wa9P1l.js";import"./index-xtnnYiFr.js";import"./index-DoBiO-cm.js";import"./useForwardExpose-Czpm3Iyc.js";import"./useId-uR1BxZtj.js";import"./createContext-BqfGFRYg.js";import"./Teleport-BrK-N4aD.js";import"./nullish-CHIgUVhi.js";import"./cn-DaT-yT0k.js";import"./index-BWmxGBdC.js";import"./RovingFocusGroup-C2qZmp7R.js";const a=["en","ru","de"],o={en:"English",ru:"Русский",de:"Deutsch"},A={title:"Win Predict AI / UI / LocaleSwitcher",component:r,tags:["autodocs"],argTypes:{modelValue:{control:"select",options:[...a]},ariaLabel:{control:"text"}}},i={modelValue:"en",locales:a,labels:o,ariaLabel:"Language"};function n(t){return{components:{LocaleSwitcher:r},setup(){const l=c(t.modelValue);return{args:t,locale:l,locales:a,labels:o}},template:`
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
