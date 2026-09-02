import{w as s}from"./storyHelpers-C8GjIxNC.js";import{r as c}from"./iframe-DOGP0jui.js";import{_ as r}from"./LocaleSwitcher-DejbibcM.js";import"./preload-helper-DLzIWJua.js";import"./DropdownMenuTrigger-CpZg5v4t.js";import"./Presence-Dj3QDAd9.js";import"./Primitive-CzodhsL4.js";import"./index-DhEgnuC9.js";import"./index-BvGfxNU8.js";import"./useForwardExpose-RocVsnrv.js";import"./useId-C7S5JFNM.js";import"./createContext-277sqqAX.js";import"./Teleport-Cy4fAqN0.js";import"./nullish-CHIgUVhi.js";import"./cn-DaT-yT0k.js";import"./index-zVntxYkJ.js";import"./RovingFocusGroup-TNNmCbq7.js";const a=["en","ru","de"],o={en:"English",ru:"Русский",de:"Deutsch"},A={title:"Win Predict AI / UI / LocaleSwitcher",component:r,tags:["autodocs"],argTypes:{modelValue:{control:"select",options:[...a]},ariaLabel:{control:"text"}}},i={modelValue:"en",locales:a,labels:o,ariaLabel:"Language"};function n(t){return{components:{LocaleSwitcher:r},setup(){const l=c(t.modelValue);return{args:t,locale:l,locales:a,labels:o}},template:`
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
