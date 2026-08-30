import{w as m}from"./storyHelpers-C8GjIxNC.js";import{_ as t}from"./TournamentStandingsPanelPattern-CkqI7GaQ.js";import{m as s,p as o}from"./teams-C7RLY5nc.js";import"./iframe-BKwT2t80.js";import"./preload-helper-DLzIWJua.js";import"./index-CdLdupmr.js";import"./useId-DGmG3Yx4.js";import"./createContext-CIfQaHsO.js";import"./cn-DaT-yT0k.js";import"./Primitive-BzAyRPy0.js";import"./index-byXwkcx4.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-CTyml5eC.js";import"./WinProbabilityPieTooltipPattern-Bz56KGth.js";import"./shortTeamName-BmyZtoJ2.js";import"./index-BmkK3Xia.js";import"./Separator-CdIl_qy4.js";import"./index-C8quPW7O.js";const L={title:"Win Predict AI / Patterns / TournamentStandingsPanel",component:t,tags:["autodocs"],parameters:{layout:"padded"}},a={render:()=>({components:{TournamentStandingsPanelPattern:t},setup:()=>({teams:s}),template:'<TournamentStandingsPanelPattern :teams="teams" />'})},e={render:()=>({components:{TournamentStandingsPanelPattern:t},setup:()=>({teams:s}),template:'<TournamentStandingsPanelPattern :teams="teams" show-chart />'})},n={render:()=>({components:{TournamentStandingsPanelPattern:t},setup:()=>({teams:s}),template:'<TournamentStandingsPanelPattern :teams="teams" compact />'})},r={render:()=>({components:{TournamentStandingsPanelPattern:t},setup:()=>({teams:o}),template:'<TournamentStandingsPanelPattern :teams="teams" />'})},{ZincLight:O,ZincDark:_,SlateTealLight:w,SlateTealDark:Z,ClaudePlusLight:x,ClaudePlusDark:A}=m(e);a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
