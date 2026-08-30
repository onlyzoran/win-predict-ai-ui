import{w as c}from"./storyHelpers-C8GjIxNC.js";import{m as e,_ as r}from"./bracket-bisFSgJ-.js";import"./iframe-BKwT2t80.js";import"./preload-helper-DLzIWJua.js";import"./cn-DaT-yT0k.js";import"./utils-CTyml5eC.js";import"./shortTeamName-BmyZtoJ2.js";const u={title:"Win Predict AI / Patterns / MlbBracketMatchup",component:r,tags:["autodocs"]},a={render:()=>({components:{MlbBracketMatchupPattern:r},setup:()=>({matchup:e.worldSeries}),template:'<MlbBracketMatchupPattern :matchup="matchup" class="max-w-xs" />'})},t={render:()=>({components:{MlbBracketMatchupPattern:r},setup:()=>({matchup:{id:"tbd",higher:e.al.championshipSeries.winner,lower:null,winner:e.al.championshipSeries.winner}}),template:'<MlbBracketMatchupPattern :matchup="matchup" class="max-w-xs" />'})},{ZincLight:h,ZincDark:d,SlateTealLight:k,SlateTealDark:M,ClaudePlusLight:P,ClaudePlusDark:b}=c(a);a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MlbBracketMatchupPattern
    },
    setup: () => ({
      matchup: mockMlbPlayoffBracket.worldSeries
    }),
    template: '<MlbBracketMatchupPattern :matchup="matchup" class="max-w-xs" />'
  })
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const w=["Default","Tbd","ZincLight","ZincDark","SlateTealLight","SlateTealDark","ClaudePlusLight","ClaudePlusDark"];export{b as ClaudePlusDark,P as ClaudePlusLight,a as Default,M as SlateTealDark,k as SlateTealLight,t as Tbd,d as ZincDark,h as ZincLight,w as __namedExportsOrder,u as default};
