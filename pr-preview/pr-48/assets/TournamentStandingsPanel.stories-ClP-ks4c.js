import{w as m}from"./storyHelpers-C8GjIxNC.js";import{_ as e}from"./TournamentStandingsPanelPattern-BnzoKp03.js";import{m as o,p as i}from"./teams-C7RLY5nc.js";import"./iframe-DOGP0jui.js";import"./preload-helper-DLzIWJua.js";import"./index-Bcpf0SKN.js";import"./useId-C7S5JFNM.js";import"./createContext-277sqqAX.js";import"./cn-DaT-yT0k.js";import"./Primitive-CzodhsL4.js";import"./index-BvGfxNU8.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-CTyml5eC.js";import"./WinProbabilityPieTooltipPattern-DlnnzTrA.js";import"./shortTeamName-D1eMPfg5.js";import"./index-CG_ORI5r.js";import"./Separator-DTrbeZXx.js";import"./index-CURuVh1X.js";const L={title:"Win Predict AI / Patterns / TournamentStandingsPanel",component:e,tags:["autodocs"],parameters:{layout:"padded"}},r={render:()=>({components:{TournamentStandingsPanelPattern:e},setup:()=>({teams:o}),template:'<TournamentStandingsPanelPattern :teams="teams" />'})},a={render:()=>({components:{TournamentStandingsPanelPattern:e},setup:()=>({teams:o}),template:'<TournamentStandingsPanelPattern :teams="teams" show-chart />'})},t={parameters:{viewport:{defaultViewport:"mobile1"}},render:()=>({components:{TournamentStandingsPanelPattern:e},setup:()=>({teams:o}),template:'<TournamentStandingsPanelPattern :teams="teams" show-chart />'})},n={render:()=>({components:{TournamentStandingsPanelPattern:e},setup:()=>({teams:o}),template:'<TournamentStandingsPanelPattern :teams="teams" compact />'})},s={render:()=>({components:{TournamentStandingsPanelPattern:e},setup:()=>({teams:i}),template:'<TournamentStandingsPanelPattern :teams="teams" />'})},{ZincLight:O,ZincDark:_,SlateTealLight:v,SlateTealDark:Z,ClaudePlusLight:x,ClaudePlusDark:A}=m(a);r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TournamentStandingsPanelPattern
    },
    setup: () => ({
      teams: mlbWorldSeriesTeams
    }),
    template: '<TournamentStandingsPanelPattern :teams="teams" />'
  })
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TournamentStandingsPanelPattern
    },
    setup: () => ({
      teams: mlbWorldSeriesTeams
    }),
    template: '<TournamentStandingsPanelPattern :teams="teams" show-chart />'
  })
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  render: () => ({
    components: {
      TournamentStandingsPanelPattern
    },
    setup: () => ({
      teams: mlbWorldSeriesTeams
    }),
    template: '<TournamentStandingsPanelPattern :teams="teams" show-chart />'
  })
}`,...t.parameters?.docs?.source},description:{story:"Narrow viewport — abbreviations in table and pie legend.",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TournamentStandingsPanelPattern
    },
    setup: () => ({
      teams: mlbWorldSeriesTeams
    }),
    template: '<TournamentStandingsPanelPattern :teams="teams" compact />'
  })
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TournamentStandingsPanelPattern
    },
    setup: () => ({
      teams: probabilityOnlyTeams
    }),
    template: '<TournamentStandingsPanelPattern :teams="teams" />'
  })
}`,...s.parameters?.docs?.source}}};const M=["Default","WithChart","Mobile","Compact","ProbabilityOnly","ZincLight","ZincDark","SlateTealLight","SlateTealDark","ClaudePlusLight","ClaudePlusDark"];export{A as ClaudePlusDark,x as ClaudePlusLight,n as Compact,r as Default,t as Mobile,s as ProbabilityOnly,Z as SlateTealDark,v as SlateTealLight,a as WithChart,_ as ZincDark,O as ZincLight,M as __namedExportsOrder,L as default};
