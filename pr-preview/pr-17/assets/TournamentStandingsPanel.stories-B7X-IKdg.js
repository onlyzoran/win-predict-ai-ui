import{w as m}from"./storyHelpers-BDsVevaL.js";import{_ as t}from"./TournamentStandingsPanelPattern-DJFNkp6B.js";import{m as s,p as o}from"./teams-C7RLY5nc.js";import"./iframe-Cg15W5Fh.js";import"./preload-helper-BpNApFJb.js";import"./index-Cuys9wpU.js";import"./useId-D8kpStIp.js";import"./createContext-BU2ixiWK.js";import"./cn-DaT-yT0k.js";import"./Primitive-DGsNjbeP.js";import"./index-Bgut4YTF.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DlQ6874p.js";import"./WinProbabilityPieTooltipPattern-rGCsM5ei.js";import"./index-CZJQJ_Xr.js";import"./Separator-D6BFdA1J.js";import"./index-DRpNU64D.js";const k={title:"Win Predict AI / Patterns / TournamentStandingsPanel",component:t,tags:["autodocs"],parameters:{layout:"padded"}},a={render:()=>({components:{TournamentStandingsPanelPattern:t},setup:()=>({teams:s}),template:'<TournamentStandingsPanelPattern :teams="teams" />'})},e={render:()=>({components:{TournamentStandingsPanelPattern:t},setup:()=>({teams:s}),template:'<TournamentStandingsPanelPattern :teams="teams" show-chart />'})},n={render:()=>({components:{TournamentStandingsPanelPattern:t},setup:()=>({teams:s}),template:'<TournamentStandingsPanelPattern :teams="teams" compact />'})},r={render:()=>({components:{TournamentStandingsPanelPattern:t},setup:()=>({teams:o}),template:'<TournamentStandingsPanelPattern :teams="teams" />'})},{ZincLight:L,ZincDark:O,SlateTealLight:_,SlateTealDark:w,ClaudePlusLight:Z,ClaudePlusDark:x}=m(e);a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
