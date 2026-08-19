import{_ as o}from"./MlbLeagueBracketPattern-BK4M5ZOF.js";import{m as s}from"./bracket-B1Blz3He.js";import"./iframe-CZbg21jV.js";import"./preload-helper-DR0Ra8Iv.js";import"./cn-DaT-yT0k.js";import"./utils-DlQ6874p.js";const b={title:"Win Predict AI / Patterns / MlbLeagueBracket",component:o,tags:["autodocs"]},e={render:()=>({components:{MlbLeagueBracketPattern:o},setup:()=>({bracket:s.al}),template:'<MlbLeagueBracketPattern :bracket="bracket" />'})},a={render:()=>({components:{MlbLeagueBracketPattern:o},setup:()=>({bracket:s.nl}),template:'<MlbLeagueBracketPattern :bracket="bracket" mirror />'})},r={render:()=>({components:{MlbLeagueBracketPattern:o},setup:()=>({bracket:s.al}),template:'<MlbLeagueBracketPattern :bracket="bracket" layout="vertical" />'})},t={globals:{theme:"slate-teal-light"},...e},c={globals:{theme:"slate-teal-dark"},...e};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MlbLeagueBracketPattern
    },
    setup: () => ({
      bracket: mockMlbPlayoffBracket.al
    }),
    template: '<MlbLeagueBracketPattern :bracket="bracket" />'
  })
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MlbLeagueBracketPattern
    },
    setup: () => ({
      bracket: mockMlbPlayoffBracket.nl
    }),
    template: '<MlbLeagueBracketPattern :bracket="bracket" mirror />'
  })
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MlbLeagueBracketPattern
    },
    setup: () => ({
      bracket: mockMlbPlayoffBracket.al
    }),
    template: '<MlbLeagueBracketPattern :bracket="bracket" layout="vertical" />'
  })
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-light'
  },
  ...AmericanLeague
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-dark'
  },
  ...AmericanLeague
}`,...c.parameters?.docs?.source}}};const i=["AmericanLeague","NationalLeagueMirrored","Vertical","Light","Dark"];export{e as AmericanLeague,c as Dark,t as Light,a as NationalLeagueMirrored,r as Vertical,i as __namedExportsOrder,b as default};
