import{_ as t}from"./Progress-DI1FWYcI.js";import"./iframe-CZbg21jV.js";import"./preload-helper-DR0Ra8Iv.js";import"./createContext-9E_p4YM4.js";import"./nullish-CHIgUVhi.js";import"./useForwardExpose-DTCiqJDU.js";import"./index-BfW2HXGB.js";import"./index-D7g1-zI5.js";import"./Primitive-B616n9Qm.js";import"./cn-DaT-yT0k.js";const v={title:"Win Predict AI / UI / Progress",component:t,tags:["autodocs"],argTypes:{modelValue:{control:{type:"range",min:0,max:100,step:1}}}},e={args:{modelValue:64},render:n=>({components:{Progress:t},setup(){return{args:n}},template:`
      <div class="w-full max-w-md space-y-2">
        <Progress v-bind="args" />
        <p class="text-xs text-muted-foreground">Season progress — {{ args.modelValue }}%</p>
      </div>
    `})},s={globals:{theme:"slate-teal-light"},args:{...e.args},render:e.render},r={globals:{theme:"slate-teal-dark"},args:{...e.args},render:e.render},a={render:()=>({components:{Progress:t},template:`
      <div class="w-full max-w-md space-y-4">
        <div class="space-y-1">
          <p class="text-xs text-muted-foreground">0%</p>
          <Progress :model-value="0" />
        </div>
        <div class="space-y-1">
          <p class="text-xs text-muted-foreground">33%</p>
          <Progress :model-value="33" />
        </div>
        <div class="space-y-1">
          <p class="text-xs text-muted-foreground">100%</p>
          <Progress :model-value="100" />
        </div>
      </div>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: 64
  },
  render: args => ({
    components: {
      Progress
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="w-full max-w-md space-y-2">
        <Progress v-bind="args" />
        <p class="text-xs text-muted-foreground">Season progress — {{ args.modelValue }}%</p>
      </div>
    \`
  })
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-light'
  },
  args: {
    ...Default.args
  },
  render: Default.render
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-dark'
  },
  args: {
    ...Default.args
  },
  render: Default.render
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Progress
    },
    template: \`
      <div class="w-full max-w-md space-y-4">
        <div class="space-y-1">
          <p class="text-xs text-muted-foreground">0%</p>
          <Progress :model-value="0" />
        </div>
        <div class="space-y-1">
          <p class="text-xs text-muted-foreground">33%</p>
          <Progress :model-value="33" />
        </div>
        <div class="space-y-1">
          <p class="text-xs text-muted-foreground">100%</p>
          <Progress :model-value="100" />
        </div>
      </div>
    \`
  })
}`,...a.parameters?.docs?.source}}};const f=["Default","Light","Dark","Values"];export{r as Dark,e as Default,s as Light,a as Values,f as __namedExportsOrder,v as default};
