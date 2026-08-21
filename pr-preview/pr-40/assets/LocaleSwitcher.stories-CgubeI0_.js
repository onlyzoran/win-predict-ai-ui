import{w as s}from"./storyHelpers-CiLmDOdr.js";import{r as c}from"./iframe-BGSuGtXa.js";import{_ as r}from"./LocaleSwitcher-Gei2Kcuk.js";import"./preload-helper-DCvky1p-.js";import"./DropdownMenuTrigger-CwHS52Qo.js";import"./Presence-CEE3RWKU.js";import"./Primitive-1ehU8uU-.js";import"./index-B1IerLe3.js";import"./index-DCK1vsYF.js";import"./useForwardExpose-CNBrxfw1.js";import"./useId-BynLL4mB.js";import"./createContext-Ch3-qSmN.js";import"./Teleport-eP9J1q6w.js";import"./nullish-CHIgUVhi.js";import"./cn-DaT-yT0k.js";import"./index-BDgphrpa.js";import"./RovingFocusGroup-DJmAymY6.js";const a=["en","ru","de"],o={en:"English",ru:"Русский",de:"Deutsch"},A={title:"Win Predict AI / UI / LocaleSwitcher",component:r,tags:["autodocs"],argTypes:{modelValue:{control:"select",options:[...a]},ariaLabel:{control:"text"}}},i={modelValue:"en",locales:a,labels:o,ariaLabel:"Language"};function n(t){return{components:{LocaleSwitcher:r},setup(){const l=c(t.modelValue);return{args:t,locale:l,locales:a,labels:o}},template:`
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
