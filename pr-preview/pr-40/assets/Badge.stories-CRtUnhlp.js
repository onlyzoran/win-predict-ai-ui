import{w as s}from"./storyHelpers-CiLmDOdr.js";import{_ as n}from"./index-DagIRjbQ.js";import"./iframe-e6Hny0VG.js";import"./preload-helper-DCvky1p-.js";import"./Primitive-C4NfsBKI.js";import"./cn-DaT-yT0k.js";import"./index-BF-ZqLY_.js";const f={title:"Win Predict AI / UI / Badge",component:n,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","secondary","destructive","outline"]}}},t={args:{variant:"default"},render:a=>({components:{Badge:n},setup(){return{args:a}},template:'<Badge v-bind="args">17%</Badge>'})},{ZincLight:h,ZincDark:B,SlateTealLight:y,SlateTealDark:M,ClaudePlusLight:k,ClaudePlusDark:D}=s(t),o=["default","secondary","destructive","outline"],i=["Live","NL","Injury","Outline"];function l(){return`
    <div class="flex flex-wrap items-center gap-3">
      ${o.map((a,d)=>`
        <Badge variant="${a}">${i[d]??a}</Badge>
      `).join("")}
    </div>
  `}const e={render:()=>({components:{Badge:n},template:l()})},{VariantMatrixZincLight:L,VariantMatrixZincDark:v,VariantMatrixSlateTealLight:T,VariantMatrixSlateTealDark:V,VariantMatrixClaudePlusLight:S,VariantMatrixClaudePlusDark:C}=s(e,"VariantMatrix"),r={render:()=>({components:{Badge:n},template:`
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
    `})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Badge
    },
    template: variantMatrixTemplate()
  })
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const P=["Default","ZincLight","ZincDark","SlateTealLight","SlateTealDark","ClaudePlusLight","ClaudePlusDark","VariantMatrix","VariantMatrixZincLight","VariantMatrixZincDark","VariantMatrixSlateTealLight","VariantMatrixSlateTealDark","VariantMatrixClaudePlusLight","VariantMatrixClaudePlusDark","InTableContext"];export{D as ClaudePlusDark,k as ClaudePlusLight,t as Default,r as InTableContext,M as SlateTealDark,y as SlateTealLight,e as VariantMatrix,C as VariantMatrixClaudePlusDark,S as VariantMatrixClaudePlusLight,V as VariantMatrixSlateTealDark,T as VariantMatrixSlateTealLight,v as VariantMatrixZincDark,L as VariantMatrixZincLight,B as ZincDark,h as ZincLight,P as __namedExportsOrder,f as default};
