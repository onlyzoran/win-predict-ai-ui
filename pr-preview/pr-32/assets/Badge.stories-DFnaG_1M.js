import{_ as l}from"./index-DqbMneEH.js";import"./iframe-B5mGNOHy.js";import"./preload-helper-DR0Ra8Iv.js";import"./Primitive-BSc1KSSL.js";import"./cn-DaT-yT0k.js";import"./index-CifWeJNQ.js";const B={title:"Win Predict AI / UI / Badge",component:l,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","secondary","destructive","outline"]}}},e={args:{variant:"default"},render:a=>({components:{Badge:l},setup(){return{args:a}},template:'<Badge v-bind="args">17%</Badge>'})},t={globals:{theme:"slate-teal-light"},args:{...e.args},render:e.render},s={globals:{theme:"slate-teal-dark"},args:{...e.args},render:e.render},i=["default","secondary","destructive","outline"],m=["Live","NL","Injury","Outline"];function p(){return`
    <div class="flex flex-wrap items-center gap-3">
      ${i.map((a,c)=>`
        <Badge variant="${a}">${m[c]??a}</Badge>
      `).join("")}
    </div>
  `}const r={render:()=>({components:{Badge:l},template:p()})},n={globals:{theme:"slate-teal-light"},render:r.render},o={globals:{theme:"slate-teal-dark"},render:r.render},d={render:()=>({components:{Badge:l},template:`
      <table class="text-sm">
        <thead>
          <tr class="border-b border-border text-left text-muted-foreground">
            <th class="pb-2 pr-6 font-medium">Team</th>
            <th class="pb-2 font-medium">Win %</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-border/60">
            <td class="py-2.5 pr-6 text-foreground">Los Angeles Dodgers</td>
            <td class="py-2.5"><Badge>17%</Badge></td>
          </tr>
          <tr class="border-b border-border/60">
            <td class="py-2.5 pr-6 text-foreground">New York Yankees</td>
            <td class="py-2.5"><Badge variant="secondary">7%</Badge></td>
          </tr>
        </tbody>
      </table>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default'
  },
  render: args => ({
    components: {
      Badge
    },
    setup() {
      return {
        args
      };
    },
    template: '<Badge v-bind="args">17%</Badge>'
  })
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-light'
  },
  args: {
    ...Default.args
  },
  render: Default.render
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-dark'
  },
  args: {
    ...Default.args
  },
  render: Default.render
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Badge
    },
    template: variantMatrixTemplate()
  })
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-light'
  },
  render: VariantMatrix.render
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-dark'
  },
  render: VariantMatrix.render
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Badge
    },
    template: \`
      <table class="text-sm">
        <thead>
          <tr class="border-b border-border text-left text-muted-foreground">
            <th class="pb-2 pr-6 font-medium">Team</th>
            <th class="pb-2 font-medium">Win %</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-border/60">
            <td class="py-2.5 pr-6 text-foreground">Los Angeles Dodgers</td>
            <td class="py-2.5"><Badge>17%</Badge></td>
          </tr>
          <tr class="border-b border-border/60">
            <td class="py-2.5 pr-6 text-foreground">New York Yankees</td>
            <td class="py-2.5"><Badge variant="secondary">7%</Badge></td>
          </tr>
        </tbody>
      </table>
    \`
  })
}`,...d.parameters?.docs?.source}}};const y=["Default","Light","Dark","VariantMatrix","VariantMatrixLight","VariantMatrixDark","InTableContext"];export{s as Dark,e as Default,d as InTableContext,t as Light,r as VariantMatrix,o as VariantMatrixDark,n as VariantMatrixLight,y as __namedExportsOrder,B as default};
