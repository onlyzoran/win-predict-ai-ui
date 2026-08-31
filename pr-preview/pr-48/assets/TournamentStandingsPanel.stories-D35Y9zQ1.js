import{w as m}from"./storyHelpers-C8GjIxNC.js";import{_ as t}from"./TournamentStandingsPanelPattern-BUL52FBU.js";import{m as s,p as o}from"./teams-C7RLY5nc.js";import"./iframe-BG9Um9s_.js";import"./preload-helper-DLzIWJua.js";import"./index-_BfIV8xS.js";import"./useId-BNx9emcj.js";import"./createContext-CoBn2RF9.js";import"./cn-DaT-yT0k.js";import"./Primitive-D9BDkSKS.js";import"./index-DupvBdgD.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-CTyml5eC.js";import"./WinProbabilityPieTooltipPattern-CcwAVl5j.js";import"./shortTeamName-BmyZtoJ2.js";import"./index-B5nXWDCo.js";import"./Separator-DRrquiE5.js";import"./index-BeQ811Cf.js";const L={title:"Win Predict AI / Patterns / TournamentStandingsPanel",component:t,tags:["autodocs"],parameters:{layout:"padded"}},a={render:()=>({components:{TournamentStandingsPanelPattern:t},setup:()=>({teams:s}),template:'<TournamentStandingsPanelPattern :teams="teams" />'})},e={render:()=>({components:{TournamentStandingsPanelPattern:t},setup:()=>({teams:s}),template:'<TournamentStandingsPanelPattern :teams="teams" show-chart />'})},n={render:()=>({components:{TournamentStandingsPanelPattern:t},setup:()=>({teams:s}),template:'<TournamentStandingsPanelPattern :teams="teams" compact />'})},r={render:()=>({components:{TournamentStandingsPanelPattern:t},setup:()=>({teams:o}),template:'<TournamentStandingsPanelPattern :teams="teams" />'})},{ZincLight:O,ZincDark:_,SlateTealLight:w,SlateTealDark:Z,ClaudePlusLight:x,ClaudePlusDark:A}=m(e);a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TournamentStandingsPanelPattern
    },
    setup: () => ({
      teams: mlbWorldSeriesTeams
    }),
    template: '<TournamentStandingsPanelPattern :teams="teams" />'
  })
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TournamentStandingsPanelPattern
    },
    setup: () => ({
      teams: mlbWorldSeriesTeams
    }),
    template: '<TournamentStandingsPanelPattern :teams="teams" show-chart />'
  })
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TournamentStandingsPanelPattern
    },
    setup: () => ({
      teams: mlbWorldSeriesTeams
    }),
    template: '<TournamentStandingsPanelPattern :teams="teams" compact />'
  })
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TournamentStandingsPanelPattern
    },
    setup: () => ({
      teams: probabilityOnlyTeams
    }),
    template: '<TournamentStandingsPanelPattern :teams="teams" />'
  })
}`,...r.parameters?.docs?.source}}};const E=["Default","WithChart","Compact","ProbabilityOnly","ZincLight","ZincDark","SlateTealLight","SlateTealDark","ClaudePlusLight","ClaudePlusDark"];export{A as ClaudePlusDark,x as ClaudePlusLight,n as Compact,a as Default,r as ProbabilityOnly,Z as SlateTealDark,w as SlateTealLight,e as WithChart,_ as ZincDark,O as ZincLight,E as __namedExportsOrder,L as default};
