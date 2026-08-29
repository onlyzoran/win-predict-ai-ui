import{w as c}from"./storyHelpers-C8GjIxNC.js";import{m as t,_ as r}from"./bracket-DqIR9qjj.js";import"./iframe-BRy-N9Yh.js";import"./preload-helper-1ep5AMd6.js";import"./cn-DaT-yT0k.js";import"./utils-DlQ6874p.js";const i={title:"Win Predict AI / Patterns / MlbBracketMatchup",component:r,tags:["autodocs"]},a={render:()=>({components:{MlbBracketMatchupPattern:r},setup:()=>({matchup:t.worldSeries}),template:'<MlbBracketMatchupPattern :matchup="matchup" class="max-w-xs" />'})},e={render:()=>({components:{MlbBracketMatchupPattern:r},setup:()=>({matchup:{id:"tbd",higher:t.al.championshipSeries.winner,lower:null,winner:t.al.championshipSeries.winner}}),template:'<MlbBracketMatchupPattern :matchup="matchup" class="max-w-xs" />'})},{ZincLight:u,ZincDark:h,SlateTealLight:d,SlateTealDark:k,ClaudePlusLight:M,ClaudePlusDark:P}=c(a);a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MlbBracketMatchupPattern
    },
    setup: () => ({
      matchup: mockMlbPlayoffBracket.worldSeries
    }),
    template: '<MlbBracketMatchupPattern :matchup="matchup" class="max-w-xs" />'
  })
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const b=["Default","Tbd","ZincLight","ZincDark","SlateTealLight","SlateTealDark","ClaudePlusLight","ClaudePlusDark"];export{P as ClaudePlusDark,M as ClaudePlusLight,a as Default,k as SlateTealDark,d as SlateTealLight,e as Tbd,h as ZincDark,u as ZincLight,b as __namedExportsOrder,i as default};
