import{r as m}from"./iframe-CEcj8ys-.js";import{_ as n}from"./LocaleSwitcher-bGvTzOjZ.js";import"./preload-helper-DR0Ra8Iv.js";import"./RovingFocusGroup-BUDQFy0z.js";import"./Primitive-DgBgeqSA.js";import"./index-qujQPUfq.js";import"./index-GzIrTbA5.js";import"./createContext-sQmaukuv.js";import"./useId-BZJGG6rp.js";import"./useForwardExpose-3zj45elM.js";import"./nullish-CHIgUVhi.js";import"./cn-DaT-yT0k.js";import"./index--yy_xmLr.js";const t=["en","ru","de"],c={en:"English",ru:"Русский",de:"Deutsch"},k={title:"Win Predict AI / UI / LocaleSwitcher",component:n,tags:["autodocs"],argTypes:{modelValue:{control:"select",options:[...t]},ariaLabel:{control:"text"}}},s={modelValue:"en",locales:t,labels:c,ariaLabel:"Language"};function l(e){return{components:{LocaleSwitcher:n},setup(){const d=m(e.modelValue);return{args:e,locale:d,locales:t,labels:c}},template:`
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
}`,...o.parameters?.docs?.source}}};const R=["Default","Light","Dark"];export{o as Dark,r as Default,a as Light,R as __namedExportsOrder,k as default};
