import{w as m}from"./storyHelpers-BtxSlO8i.js";import{_ as t}from"./TournamentStandingsPanelPattern-Bpd_t1i5.js";import{m as s,p as o}from"./teams-C7RLY5nc.js";import"./iframe-CrnZ8d65.js";import"./preload-helper-QR2TdjE1.js";import"./index-D-obk3f9.js";import"./useId-D2sgm-yv.js";import"./createContext-DsPWDOFb.js";import"./cn-DaT-yT0k.js";import"./Primitive-CrksTsCf.js";import"./index-Dz5-xlzP.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DlQ6874p.js";import"./WinProbabilityPieTooltipPattern-DLxhEeGc.js";import"./index-D_WYzVWY.js";import"./Separator-VHMxuDK5.js";import"./index-DKPeeEF_.js";const k={title:"Win Predict AI / Patterns / TournamentStandingsPanel",component:t,tags:["autodocs"],parameters:{layout:"padded"}},a={render:()=>({components:{TournamentStandingsPanelPattern:t},setup:()=>({teams:s}),template:'<TournamentStandingsPanelPattern :teams="teams" />'})},e={render:()=>({components:{TournamentStandingsPanelPattern:t},setup:()=>({teams:s}),template:'<TournamentStandingsPanelPattern :teams="teams" show-chart />'})},n={render:()=>({components:{TournamentStandingsPanelPattern:t},setup:()=>({teams:s}),template:'<TournamentStandingsPanelPattern :teams="teams" compact />'})},r={render:()=>({components:{TournamentStandingsPanelPattern:t},setup:()=>({teams:o}),template:'<TournamentStandingsPanelPattern :teams="teams" />'})},{ZincLight:L,ZincDark:O,SlateTealLight:_,SlateTealDark:w,ClaudePlusLight:Z,ClaudePlusDark:x}=m(e);a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
