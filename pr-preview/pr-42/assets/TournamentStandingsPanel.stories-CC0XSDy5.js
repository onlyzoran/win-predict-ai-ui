import{w as m}from"./storyHelpers-CiLmDOdr.js";import{_ as t}from"./TournamentStandingsPanelPattern-BujUdDjn.js";import{m as s,p as o}from"./teams-C7RLY5nc.js";import"./iframe-BIGzh4_n.js";import"./preload-helper-O0ynFoic.js";import"./index-CTIY3bNh.js";import"./useId-Cc4uoEl-.js";import"./createContext-CWqWQp_8.js";import"./cn-DaT-yT0k.js";import"./Primitive-BNDAvoc_.js";import"./index-BqKjURdo.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DlQ6874p.js";import"./WinProbabilityPieTooltipPattern-DPP6JmLk.js";import"./index-CqujHLdP.js";import"./Separator-DS_oOFe1.js";import"./index-BaVBRDat.js";const k={title:"Win Predict AI / Patterns / TournamentStandingsPanel",component:t,tags:["autodocs"],parameters:{layout:"padded"}},a={render:()=>({components:{TournamentStandingsPanelPattern:t},setup:()=>({teams:s}),template:'<TournamentStandingsPanelPattern :teams="teams" />'})},e={render:()=>({components:{TournamentStandingsPanelPattern:t},setup:()=>({teams:s}),template:'<TournamentStandingsPanelPattern :teams="teams" show-chart />'})},n={render:()=>({components:{TournamentStandingsPanelPattern:t},setup:()=>({teams:s}),template:'<TournamentStandingsPanelPattern :teams="teams" compact />'})},r={render:()=>({components:{TournamentStandingsPanelPattern:t},setup:()=>({teams:o}),template:'<TournamentStandingsPanelPattern :teams="teams" />'})},{ZincLight:L,ZincDark:O,SlateTealLight:_,SlateTealDark:w,ClaudePlusLight:Z,ClaudePlusDark:x}=m(e);a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const A=["Default","WithChart","Compact","ProbabilityOnly","ZincLight","ZincDark","SlateTealLight","SlateTealDark","ClaudePlusLight","ClaudePlusDark"];export{x as ClaudePlusDark,Z as ClaudePlusLight,n as Compact,a as Default,r as ProbabilityOnly,w as SlateTealDark,_ as SlateTealLight,e as WithChart,O as ZincDark,L as ZincLight,A as __namedExportsOrder,k as default};
