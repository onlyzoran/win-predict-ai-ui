import{w as s}from"./storyHelpers-CiLmDOdr.js";import{r as c}from"./iframe-Co1gEe7Z.js";import{_ as r}from"./LocaleSwitcher-BQQXdcw1.js";import"./preload-helper-CE2h5UKx.js";import"./DropdownMenuTrigger-oVvSThB4.js";import"./Presence-CJcLSHfj.js";import"./Primitive-phwxLrPC.js";import"./index-BwSErBIk.js";import"./index-BSlgtreQ.js";import"./useForwardExpose-BG-F8nu2.js";import"./useId-hjJZh0PL.js";import"./createContext-3f_-hNPN.js";import"./Teleport-CzF24d0o.js";import"./nullish-CHIgUVhi.js";import"./cn-DaT-yT0k.js";import"./index-BJH0Ay5l.js";import"./RovingFocusGroup-DVwdMaLj.js";const a=["en","ru","de"],o={en:"English",ru:"Русский",de:"Deutsch"},A={title:"Win Predict AI / UI / LocaleSwitcher",component:r,tags:["autodocs"],argTypes:{modelValue:{control:"select",options:[...a]},ariaLabel:{control:"text"}}},i={modelValue:"en",locales:a,labels:o,ariaLabel:"Language"};function n(t){return{components:{LocaleSwitcher:r},setup(){const l=c(t.modelValue);return{args:t,locale:l,locales:a,labels:o}},template:`
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
