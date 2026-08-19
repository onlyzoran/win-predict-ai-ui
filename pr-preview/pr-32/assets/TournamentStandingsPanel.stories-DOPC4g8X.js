import{_ as t}from"./TournamentStandingsPanelPattern-D7_AARRk.js";import{m,p}from"./teams-C7RLY5nc.js";import"./iframe-CZbg21jV.js";import"./preload-helper-DR0Ra8Iv.js";import"./index-BFMtzt5Q.js";import"./useId-DCtzg9yx.js";import"./createContext-9E_p4YM4.js";import"./cn-DaT-yT0k.js";import"./Primitive-B616n9Qm.js";import"./index-D7g1-zI5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DlQ6874p.js";import"./WinProbabilityPieTooltipPattern-ByijBoeE.js";import"./index-Cptxg-sT.js";import"./Separator-C9PZ_JCj.js";import"./index-DySCn9gj.js";const _={title:"Win Predict AI / Patterns / TournamentStandingsPanel",component:t,tags:["autodocs"],parameters:{layout:"padded"}},a={render:()=>({components:{TournamentStandingsPanelPattern:t},setup:()=>({teams:m}),template:'<TournamentStandingsPanelPattern :teams="teams" />'})},e={render:()=>({components:{TournamentStandingsPanelPattern:t},setup:()=>({teams:m}),template:'<TournamentStandingsPanelPattern :teams="teams" show-chart />'})},r={render:()=>({components:{TournamentStandingsPanelPattern:t},setup:()=>({teams:m}),template:'<TournamentStandingsPanelPattern :teams="teams" compact />'})},n={render:()=>({components:{TournamentStandingsPanelPattern:t},setup:()=>({teams:p}),template:'<TournamentStandingsPanelPattern :teams="teams" />'})},s={globals:{theme:"slate-teal-light"},...e},o={globals:{theme:"slate-teal-dark"},...e};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TournamentStandingsPanelPattern
    },
    setup: () => ({
      teams: mlbWorldSeriesTeams
    }),
    template: '<TournamentStandingsPanelPattern :teams="teams" compact />'
  })
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TournamentStandingsPanelPattern
    },
    setup: () => ({
      teams: probabilityOnlyTeams
    }),
    template: '<TournamentStandingsPanelPattern :teams="teams" />'
  })
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-light'
  },
  ...WithChart
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-dark'
  },
  ...WithChart
}`,...o.parameters?.docs?.source}}};const k=["Default","WithChart","Compact","ProbabilityOnly","Light","Dark"];export{r as Compact,o as Dark,a as Default,s as Light,n as ProbabilityOnly,e as WithChart,k as __namedExportsOrder,_ as default};
