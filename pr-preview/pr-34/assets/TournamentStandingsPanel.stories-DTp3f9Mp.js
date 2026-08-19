import{w as i}from"./storyHelpers-CiLmDOdr.js";import{_ as e}from"./TournamentStandingsPanelPattern--0iHsQE9.js";import{m as l,r as p,e as c,p as d}from"./teams-iedWkac2.js";import"./iframe-CUqNZo_k.js";import"./preload-helper-D-K94Hq9.js";import"./index-Tavq1VA5.js";import"./useId-BnaVDcFE.js";import"./createContext-COrHwm6y.js";import"./cn-DaT-yT0k.js";import"./Primitive-Cj7xrKsP.js";import"./index-DpN_U36v.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DybhynFY.js";import"./StandingsGlossaryPattern-BxzuFDKJ.js";import"./WinProbabilityPieTooltipPattern-DLh_K8wP.js";import"./index-CWpwpoty.js";import"./Separator-BAPsByhm.js";import"./index-CDhXfvBm.js";const Z={title:"Win Predict AI / Patterns / TournamentStandingsPanel",component:e,tags:["autodocs"],parameters:{layout:"padded"}},a={render:()=>({components:{TournamentStandingsPanelPattern:e},setup:()=>({teams:l}),template:'<TournamentStandingsPanelPattern :teams="teams" />'})},t={render:()=>({components:{TournamentStandingsPanelPattern:e},setup:()=>({teams:l}),template:'<TournamentStandingsPanelPattern :teams="teams" show-chart />'})},n={render:()=>({components:{TournamentStandingsPanelPattern:e},setup:()=>({teams:l}),template:'<TournamentStandingsPanelPattern :teams="teams" compact />'})},r={render:()=>({components:{TournamentStandingsPanelPattern:e},setup:()=>({teams:d}),template:'<TournamentStandingsPanelPattern :teams="teams" />'})},s={render:()=>({components:{TournamentStandingsPanelPattern:e},setup:()=>({teams:p}),template:'<TournamentStandingsPanelPattern :teams="teams" show-glossary />'})},o={render:()=>({components:{TournamentStandingsPanelPattern:e},setup:()=>({teams:c}),template:'<TournamentStandingsPanelPattern :teams="teams" show-chart show-glossary />'})},m={render:()=>({components:{TournamentStandingsPanelPattern:e},setup:()=>({teams:p}),template:'<TournamentStandingsPanelPattern :teams="teams" compact show-glossary />'})},{ZincLight:E,ZincDark:x,SlateTealLight:A,SlateTealDark:R,ClaudePlusLight:I,ClaudePlusDark:j}=i(t);a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TournamentStandingsPanelPattern
    },
    setup: () => ({
      teams: mlbWorldSeriesTeams
    }),
    template: '<TournamentStandingsPanelPattern :teams="teams" />'
  })
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TournamentStandingsPanelPattern
    },
    setup: () => ({
      teams: mlbWorldSeriesTeams
    }),
    template: '<TournamentStandingsPanelPattern :teams="teams" show-chart />'
  })
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TournamentStandingsPanelPattern
    },
    setup: () => ({
      teams: rplStandingsTeams
    }),
    template: '<TournamentStandingsPanelPattern :teams="teams" show-glossary />'
  })
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TournamentStandingsPanelPattern
    },
    setup: () => ({
      teams: eplStandingsTeams
    }),
    template: '<TournamentStandingsPanelPattern :teams="teams" show-chart show-glossary />'
  })
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TournamentStandingsPanelPattern
    },
    setup: () => ({
      teams: rplStandingsTeams
    }),
    template: '<TournamentStandingsPanelPattern :teams="teams" compact show-glossary />'
  })
}`,...m.parameters?.docs?.source}}};const q=["Default","WithChart","Compact","ProbabilityOnly","FootballRpl","FootballEpl","FootballCompact","ZincLight","ZincDark","SlateTealLight","SlateTealDark","ClaudePlusLight","ClaudePlusDark"];export{j as ClaudePlusDark,I as ClaudePlusLight,n as Compact,a as Default,m as FootballCompact,o as FootballEpl,s as FootballRpl,r as ProbabilityOnly,R as SlateTealDark,A as SlateTealLight,t as WithChart,x as ZincDark,E as ZincLight,q as __namedExportsOrder,Z as default};
