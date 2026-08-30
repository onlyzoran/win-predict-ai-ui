import{w as s}from"./storyHelpers-C8GjIxNC.js";import{r as c}from"./iframe-DC7cEK75.js";import{_ as r}from"./LocaleSwitcher-CVsO_F2w.js";import"./preload-helper-0FqUrSrT.js";import"./DropdownMenuTrigger-BLdN-XDY.js";import"./Presence-Buh80O_Y.js";import"./Primitive-Ggw_jUkL.js";import"./index-Ca1fcGbb.js";import"./index-D2OA19oX.js";import"./useForwardExpose-CoBDaAoR.js";import"./useId-BWQBwh5R.js";import"./createContext-SMxtsHrr.js";import"./Teleport-BXDF_K7W.js";import"./nullish-CHIgUVhi.js";import"./cn-DaT-yT0k.js";import"./index-aMbcan1Y.js";import"./RovingFocusGroup-Y6tIaU6S.js";const a=["en","ru","de"],o={en:"English",ru:"Русский",de:"Deutsch"},A={title:"Win Predict AI / UI / LocaleSwitcher",component:r,tags:["autodocs"],argTypes:{modelValue:{control:"select",options:[...a]},ariaLabel:{control:"text"}}},i={modelValue:"en",locales:a,labels:o,ariaLabel:"Language"};function n(t){return{components:{LocaleSwitcher:r},setup(){const l=c(t.modelValue);return{args:t,locale:l,locales:a,labels:o}},template:`
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
