import{C as h}from"./index-2wsb77Qq.js";import{_ as r}from"./index-gZ8Rg3bO.js";import"./iframe-B5mGNOHy.js";import"./preload-helper-DR0Ra8Iv.js";import"./Primitive-BSc1KSSL.js";import"./cn-DaT-yT0k.js";const I={title:"Win Predict AI / UI / Button",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","destructive","outline","secondary","ghost","link"]},size:{control:"select",options:["default","xs","sm","lg","icon","icon-xs","icon-sm","icon-lg"]}}},e={args:{variant:"default",size:"default"},render:d=>({components:{Button:r},setup(){return{args:d}},template:'<Button v-bind="args">Continue</Button>'})},n={globals:{theme:"slate-teal-light"},args:{...e.args},render:e.render},o={globals:{theme:"slate-teal-dark"},args:{...e.args},render:e.render},B=["default","destructive","outline","secondary","ghost","link"],u=["default","xs","sm","lg"];function f(){const d=u.map(a=>`<th class="pb-2 pr-4 text-left text-xs font-medium text-muted-foreground">${a}</th>`).join(""),m=B.map(a=>{const p=u.map(g=>`
        <td class="py-2 pr-4 align-top">
          <Button variant="${a}" size="${g}">${a}</Button>
        </td>
      `).join("");return`
      <tr class="border-t border-border">
        <th class="py-2 pr-4 text-left text-xs font-medium text-muted-foreground">${a}</th>
        ${p}
      </tr>
    `}).join("");return`
    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr>
            <th class="pb-2 pr-4 text-left text-xs font-medium text-muted-foreground">variant \\ size</th>
            ${d}
          </tr>
        </thead>
        <tbody>${m}</tbody>
      </table>
    </div>
  `}const t={render:()=>({components:{Button:r},template:f()})},s={globals:{theme:"slate-teal-light"},render:t.render},i={globals:{theme:"slate-teal-dark"},render:t.render},l={render:()=>({components:{Button:r,IconSearch:h},template:`
      <div class="flex flex-wrap items-center gap-3">
        <Button size="icon-xs" variant="outline" aria-label="Search xs"><IconSearch aria-hidden="true" /></Button>
        <Button size="icon-sm" variant="outline" aria-label="Search sm"><IconSearch aria-hidden="true" /></Button>
        <Button size="icon" variant="outline" aria-label="Search default"><IconSearch aria-hidden="true" /></Button>
        <Button size="icon-lg" variant="outline" aria-label="Search lg"><IconSearch aria-hidden="true" /></Button>
      </div>
    `})},c={render:()=>({components:{Button:r},template:`
      <div class="flex flex-wrap gap-2">
        <Button disabled>Default</Button>
        <Button variant="outline" disabled>Outline</Button>
        <Button variant="secondary" disabled>Secondary</Button>
      </div>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'default'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Continue</Button>'
  })
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-light'
  },
  args: {
    ...Default.args
  },
  render: Default.render
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-dark'
  },
  args: {
    ...Default.args
  },
  render: Default.render
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button
    },
    template: variantSizeMatrixTemplate()
  })
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-light'
  },
  render: VariantSizeMatrix.render
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-dark'
  },
  render: VariantSizeMatrix.render
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button,
      IconSearch
    },
    template: \`
      <div class="flex flex-wrap items-center gap-3">
        <Button size="icon-xs" variant="outline" aria-label="Search xs"><IconSearch aria-hidden="true" /></Button>
        <Button size="icon-sm" variant="outline" aria-label="Search sm"><IconSearch aria-hidden="true" /></Button>
        <Button size="icon" variant="outline" aria-label="Search default"><IconSearch aria-hidden="true" /></Button>
        <Button size="icon-lg" variant="outline" aria-label="Search lg"><IconSearch aria-hidden="true" /></Button>
      </div>
    \`
  })
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button
    },
    template: \`
      <div class="flex flex-wrap gap-2">
        <Button disabled>Default</Button>
        <Button variant="outline" disabled>Outline</Button>
        <Button variant="secondary" disabled>Secondary</Button>
      </div>
    \`
  })
}`,...c.parameters?.docs?.source}}};const y=["Default","Light","Dark","VariantSizeMatrix","VariantSizeMatrixLight","VariantSizeMatrixDark","IconSizes","Disabled"];export{o as Dark,e as Default,c as Disabled,l as IconSizes,n as Light,t as VariantSizeMatrix,i as VariantSizeMatrixDark,s as VariantSizeMatrixLight,y as __namedExportsOrder,I as default};
