import{C as m}from"./index-DxXIMqEh.js";import{w as l}from"./storyHelpers-CiLmDOdr.js";import{_ as n}from"./index-BVegVfEr.js";import"./iframe-BPfh3LMt.js";import"./preload-helper-DCvky1p-.js";import"./Primitive-Dhu-moVp.js";import"./cn-DaT-yT0k.js";const b={title:"Win Predict AI / UI / Button",component:n,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","destructive","outline","secondary","ghost","link"]},size:{control:"select",options:["default","xs","sm","lg","icon","icon-xs","icon-sm","icon-lg"]}}},e={args:{variant:"default",size:"default"},render:o=>({components:{Button:n},setup(){return{args:o}},template:'<Button v-bind="args">Continue</Button>'})},{ZincLight:D,ZincDark:M,SlateTealLight:V,SlateTealDark:k,ClaudePlusLight:I,ClaudePlusDark:C}=l(e),p=["default","destructive","outline","secondary","ghost","link"],s=["default","xs","sm","lg"];function S(){const o=s.map(t=>`<th class="pb-2 pr-4 text-left text-xs font-medium text-muted-foreground">${t}</th>`).join(""),u=p.map(t=>{const c=s.map(d=>`
        <td class="py-2 pr-4 align-top">
          <Button variant="${t}" size="${d}">${t}</Button>
        </td>
      `).join("");return`
      <tr class="border-t border-border">
        <th class="py-2 pr-4 text-left text-xs font-medium text-muted-foreground">${t}</th>
        ${c}
      </tr>
    `}).join("");return`
    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr>
            <th class="pb-2 pr-4 text-left text-xs font-medium text-muted-foreground">variant \\ size</th>
            ${o}
          </tr>
        </thead>
        <tbody>${u}</tbody>
      </table>
    </div>
  `}const a={render:()=>({components:{Button:n},template:S()})},{VariantSizeMatrixZincLight:L,VariantSizeMatrixZincDark:y,VariantSizeMatrixSlateTealLight:T,VariantSizeMatrixSlateTealDark:P,VariantSizeMatrixClaudePlusLight:w,VariantSizeMatrixClaudePlusDark:Z}=l(a,"VariantSizeMatrix"),r={render:()=>({components:{Button:n,IconSearch:m},template:`
      <div class="flex flex-wrap items-center gap-3">
        <Button size="icon-xs" variant="outline" aria-label="Search xs"><IconSearch aria-hidden="true" /></Button>
        <Button size="icon-sm" variant="outline" aria-label="Search sm"><IconSearch aria-hidden="true" /></Button>
        <Button size="icon" variant="outline" aria-label="Search default"><IconSearch aria-hidden="true" /></Button>
        <Button size="icon-lg" variant="outline" aria-label="Search lg"><IconSearch aria-hidden="true" /></Button>
      </div>
    `})},i={render:()=>({components:{Button:n},template:`
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
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button
    },
    template: variantSizeMatrixTemplate()
  })
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const $=["Default","ZincLight","ZincDark","SlateTealLight","SlateTealDark","ClaudePlusLight","ClaudePlusDark","VariantSizeMatrix","VariantSizeMatrixZincLight","VariantSizeMatrixZincDark","VariantSizeMatrixSlateTealLight","VariantSizeMatrixSlateTealDark","VariantSizeMatrixClaudePlusLight","VariantSizeMatrixClaudePlusDark","IconSizes","Disabled"];export{C as ClaudePlusDark,I as ClaudePlusLight,e as Default,i as Disabled,r as IconSizes,k as SlateTealDark,V as SlateTealLight,a as VariantSizeMatrix,Z as VariantSizeMatrixClaudePlusDark,w as VariantSizeMatrixClaudePlusLight,P as VariantSizeMatrixSlateTealDark,T as VariantSizeMatrixSlateTealLight,y as VariantSizeMatrixZincDark,L as VariantSizeMatrixZincLight,M as ZincDark,D as ZincLight,$ as __namedExportsOrder,b as default};
