import{r as m}from"./iframe-B5mGNOHy.js";import{_ as n}from"./LocaleSwitcher-DNyaCMPx.js";import"./preload-helper-DR0Ra8Iv.js";import"./DropdownMenuTrigger-D15-8tAg.js";import"./Presence-BxTUNtSL.js";import"./Primitive-BSc1KSSL.js";import"./index-BbCV0m8L.js";import"./index-CifWeJNQ.js";import"./useForwardExpose-CgtmRX3c.js";import"./useId-CHu9-HQt.js";import"./createContext-DFVDcGMr.js";import"./Teleport-BrA4NzMo.js";import"./nullish-CHIgUVhi.js";import"./cn-DaT-yT0k.js";import"./index-2wsb77Qq.js";import"./RovingFocusGroup-CeyJUWry.js";const t=["en","ru","de"],c={en:"English",ru:"Русский",de:"Deutsch"},w={title:"Win Predict AI / UI / LocaleSwitcher",component:n,tags:["autodocs"],argTypes:{modelValue:{control:"select",options:[...t]},ariaLabel:{control:"text"}}},s={modelValue:"en",locales:t,labels:c,ariaLabel:"Language"};function l(e){return{components:{LocaleSwitcher:n},setup(){const d=m(e.modelValue);return{args:e,locale:d,locales:t,labels:c}},template:`
      <div class="flex items-center gap-3">
        <LocaleSwitcher
          v-model="locale"
          :locales="locales"
          :labels="labels"
          :aria-label="args.ariaLabel"
        />
        <span class="text-sm text-muted-foreground">Selected: <code>{{ locale }}</code></span>
      </div>
    `}}const r={args:s,render:e=>l(e)},a={globals:{theme:"slate-teal-light"},args:s,render:e=>l(e)},o={globals:{theme:"slate-teal-dark"},args:s,render:e=>l(e)};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: controlledArgs,
  render: args => controlledRender(args)
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-light'
  },
  args: controlledArgs,
  render: args => controlledRender(args)
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-dark'
  },
  args: controlledArgs,
  render: args => controlledRender(args)
}`,...o.parameters?.docs?.source}}};const V=["Default","Light","Dark"];export{o as Dark,r as Default,a as Light,V as __namedExportsOrder,w as default};
