import{w as o}from"./storyHelpers-C8GjIxNC.js";import{B as n}from"./BrandTitle-CH9y5-Wz.js";import"./iframe-BKwT2t80.js";import"./preload-helper-DLzIWJua.js";import"./cn-DaT-yT0k.js";const p={title:"Win Predict AI / UI / BrandTitle",component:n,tags:["autodocs"],argTypes:{prefix:{control:"text"},accent:{control:"text"},suffix:{control:"text"},href:{control:"text"}}},r={args:{prefix:"Win Predict",accent:"AI",suffix:""}},e={args:{...r.args,href:"#"}},a={args:{prefix:"Win Predict",accent:"AI",suffix:" Admin"}},t={args:{...r.args,href:"#"},render:s=>({components:{BrandTitle:n},setup(){return{args:s}},template:`
      <header class="flex h-14 items-center border-b border-border bg-background/80 px-6 shadow-sm backdrop-blur-md">
        <BrandTitle v-bind="args" />
      </header>
    `})},{ZincLight:u,ZincDark:g,SlateTealLight:f,SlateTealDark:x,ClaudePlusLight:h,ClaudePlusDark:b,NexoraLight:k,NexoraDark:A}=o(r);r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    prefix: 'Win Predict',
    accent: 'AI',
    suffix: ''
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    href: '#'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    prefix: 'Win Predict',
    accent: 'AI',
    suffix: ' Admin'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    href: '#'
  },
  render: args => ({
    components: {
      BrandTitle
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <header class="flex h-14 items-center border-b border-border bg-background/80 px-6 shadow-sm backdrop-blur-md">
        <BrandTitle v-bind="args" />
      </header>
    \`
  })
}`,...t.parameters?.docs?.source}}};const D=["Default","AsLink","AdminVariant","InHeader","ZincLight","ZincDark","SlateTealLight","SlateTealDark","ClaudePlusLight","ClaudePlusDark","NexoraLight","NexoraDark"];export{a as AdminVariant,e as AsLink,b as ClaudePlusDark,h as ClaudePlusLight,r as Default,t as InHeader,A as NexoraDark,k as NexoraLight,x as SlateTealDark,f as SlateTealLight,g as ZincDark,u as ZincLight,D as __namedExportsOrder,p as default};
