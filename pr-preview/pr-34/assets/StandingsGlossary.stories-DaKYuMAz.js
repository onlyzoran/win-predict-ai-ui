import{_ as s}from"./StandingsGlossaryPattern-BxzuFDKJ.js";import"./iframe-CUqNZo_k.js";import"./preload-helper-D-K94Hq9.js";const l={title:"Win Predict AI / Patterns / StandingsGlossary",component:s,tags:["autodocs"],parameters:{layout:"padded"}},t={render:()=>({components:{StandingsGlossaryPattern:s},template:'<StandingsGlossaryPattern variant="football" />'})},e={render:()=>({components:{StandingsGlossaryPattern:s},template:'<StandingsGlossaryPattern variant="mlb" />'})},a={render:()=>({components:{StandingsGlossaryPattern:s},setup:()=>({entries:[{abbr:"GP",label:"Games played"},{abbr:"Pts",label:"Points"}]}),template:'<StandingsGlossaryPattern :entries="entries" />'})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      StandingsGlossaryPattern
    },
    template: '<StandingsGlossaryPattern variant="football" />'
  })
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      StandingsGlossaryPattern
    },
    template: '<StandingsGlossaryPattern variant="mlb" />'
  })
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      StandingsGlossaryPattern
    },
    setup: () => ({
      entries: [{
        abbr: 'GP',
        label: 'Games played'
      }, {
        abbr: 'Pts',
        label: 'Points'
      }]
    }),
    template: '<StandingsGlossaryPattern :entries="entries" />'
  })
}`,...a.parameters?.docs?.source}}};const i=["Football","Mlb","CustomEntries"];export{a as CustomEntries,t as Football,e as Mlb,i as __namedExportsOrder,l as default};
