import{m as s,_ as c}from"./bracket-B1Blz3He.js";import"./iframe-CZbg21jV.js";import"./preload-helper-DR0Ra8Iv.js";import"./cn-DaT-yT0k.js";import"./utils-DlQ6874p.js";const i={title:"Win Predict AI / Patterns / MlbBracketMatchup",component:c,tags:["autodocs"]},e={render:()=>({components:{MlbBracketMatchupPattern:c},setup:()=>({matchup:s.worldSeries}),template:'<MlbBracketMatchupPattern :matchup="matchup" class="max-w-xs" />'})},a={render:()=>({components:{MlbBracketMatchupPattern:c},setup:()=>({matchup:{id:"tbd",higher:s.al.championshipSeries.winner,lower:null,winner:s.al.championshipSeries.winner}}),template:'<MlbBracketMatchupPattern :matchup="matchup" class="max-w-xs" />'})},t={globals:{theme:"slate-teal-light"},...e},r={globals:{theme:"slate-teal-dark"},...e};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MlbBracketMatchupPattern
    },
    setup: () => ({
      matchup: mockMlbPlayoffBracket.worldSeries
    }),
    template: '<MlbBracketMatchupPattern :matchup="matchup" class="max-w-xs" />'
  })
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MlbBracketMatchupPattern
    },
    setup: () => ({
      matchup: {
        id: 'tbd',
        higher: mockMlbPlayoffBracket.al.championshipSeries.winner,
        lower: null,
        winner: mockMlbPlayoffBracket.al.championshipSeries.winner
      }
    }),
    template: '<MlbBracketMatchupPattern :matchup="matchup" class="max-w-xs" />'
  })
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-light'
  },
  ...Default
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-dark'
  },
  ...Default
}`,...r.parameters?.docs?.source}}};const u=["Default","Tbd","Light","Dark"];export{r as Dark,e as Default,t as Light,a as Tbd,u as __namedExportsOrder,i as default};
