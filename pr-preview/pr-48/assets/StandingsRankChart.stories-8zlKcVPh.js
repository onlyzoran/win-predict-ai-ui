import{w as s}from"./storyHelpers-C8GjIxNC.js";import{m as a,_ as r}from"./rankSeries-BlQuCJrW.js";import"./iframe-DOGP0jui.js";import"./preload-helper-DLzIWJua.js";import"./index-Bcpf0SKN.js";import"./useId-C7S5JFNM.js";import"./createContext-277sqqAX.js";import"./cn-DaT-yT0k.js";import"./Primitive-CzodhsL4.js";import"./index-BvGfxNU8.js";import"./_commonjsHelpers-CqkleIqs.js";import"./shortTeamName-D1eMPfg5.js";import"./ChartTooltipContent-BNp3d2ZF.js";const P={title:"Win Predict AI / Patterns / StandingsRankChart",component:r,tags:["autodocs"],parameters:{layout:"fullscreen"}},t={render:()=>({components:{StandingsRankChartPattern:r},setup:()=>({series:a}),template:'<div class="w-full p-4 md:p-6"><StandingsRankChartPattern :series="series" /></div>'})},e={parameters:{viewport:{defaultViewport:"mobile1"},layout:"fullscreen"},render:()=>({components:{StandingsRankChartPattern:r},setup:()=>({series:a}),template:'<StandingsRankChartPattern :series="series" />'})},{ZincLight:f,ZincDark:C,SlateTealLight:R,SlateTealDark:w,ClaudePlusLight:v,ClaudePlusDark:D}=s(t);t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      StandingsRankChartPattern
    },
    setup: () => ({
      series: mockRankSeries
    }),
    template: '<div class="w-full p-4 md:p-6"><StandingsRankChartPattern :series="series" /></div>'
  })
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    layout: 'fullscreen'
  },
  render: () => ({
    components: {
      StandingsRankChartPattern
    },
    setup: () => ({
      series: mockRankSeries
    }),
    template: '<StandingsRankChartPattern :series="series" />'
  })
}`,...e.parameters?.docs?.source},description:{story:"Full-width rank chart on narrow viewport — abbreviations on side labels.",...e.parameters?.docs?.description}}};const b=["Default","Mobile","ZincLight","ZincDark","SlateTealLight","SlateTealDark","ClaudePlusLight","ClaudePlusDark"];export{D as ClaudePlusDark,v as ClaudePlusLight,t as Default,e as Mobile,w as SlateTealDark,R as SlateTealLight,C as ZincDark,f as ZincLight,b as __namedExportsOrder,P as default};
