import{d as k,f as d,a as n,w as P,u as s,b as i,F as x,h as C,l as b,o as f,k as v,t as _}from"./iframe-CZbg21jV.js";import{T as W,_ as D,c as S}from"./index-BFMtzt5Q.js";import{m as N}from"./teams-C7RLY5nc.js";import{f as T}from"./utils-DlQ6874p.js";import{_ as $}from"./WinProbabilityPieTooltipPattern-ByijBoeE.js";import{S as B,D as F,a as L}from"./index-DySCn9gj.js";import"./preload-helper-DR0Ra8Iv.js";import"./useId-DCtzg9yx.js";import"./createContext-9E_p4YM4.js";import"./cn-DaT-yT0k.js";import"./Primitive-B616n9Qm.js";import"./index-D7g1-zI5.js";import"./_commonjsHelpers-CqkleIqs.js";const O={"data-testid":"win-probability-pie",class:"mx-auto w-full max-w-md space-y-4"},z={class:"grid gap-2 text-sm"},E={class:"flex min-w-0 items-center gap-2"},I={class:"truncate font-medium"},V={class:"shrink-0 text-muted-foreground tabular-nums"},h=5,g=k({__name:"WinProbabilityPieChartPattern",setup(j){const m=N,u=b(()=>{const r=m.slice(0,h),e=Math.max(0,m.length-h),t=m.slice(h).reduce((o,p)=>o+p.winProbability,0);return[...r.map((o,p)=>({key:`team-${o.id}`,name:o.name,winProbability:o.winProbability,fill:`var(--chart-${p+1})`})),{key:"others",name:`Others (${e})`,winProbability:t,fill:"var(--chart-4)"}]}),y=b(()=>{const r={};for(const e of u.value)r[e.key]={label:e.name,color:e.fill};return r}),w=b(()=>({[L.selectors.segment]:S({},$)}));return(r,e)=>(f(),d("div",O,[n(s(D),{config:y.value,class:"mx-auto aspect-square max-h-[260px] w-full"},{default:P(()=>[n(s(B),{data:u.value,margin:{top:4,bottom:4}},{default:P(()=>[n(s(F),{value:t=>t.winProbability,color:t=>t.fill,"arc-width":28},null,8,["value","color"]),n(s(W),{triggers:w.value},null,8,["triggers"])]),_:1},8,["data"])]),_:1},8,["config"]),i("ul",z,[(f(!0),d(x,null,C(u.value,t=>(f(),d("li",{key:t.key,class:"flex items-center justify-between gap-3"},[i("span",E,[i("span",{class:"size-2.5 shrink-0 rounded-xs",style:v({backgroundColor:t.fill}),"aria-hidden":"true"},null,4),i("span",I,_(t.name),1)]),i("span",V,_(s(T)(t.winProbability)),1)]))),128))])]))}});g.__docgenInfo={exportName:"default",displayName:"WinProbabilityPieChartPattern",description:"",tags:{},sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/stories/patterns/demos/WinProbabilityPieChartPattern.vue"]};const tt={title:"Win Predict AI / Patterns / WinProbabilityPieChart",component:g,tags:["autodocs"]},a={render:()=>({components:{WinProbabilityPieChartPattern:g},template:"<WinProbabilityPieChartPattern />"})},l={globals:{theme:"slate-teal-light"},...a},c={globals:{theme:"slate-teal-dark"},...a};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      WinProbabilityPieChartPattern
    },
    template: '<WinProbabilityPieChartPattern />'
  })
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-light'
  },
  ...Default
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-dark'
  },
  ...Default
}`,...c.parameters?.docs?.source}}};const et=["Default","Light","Dark"];export{c as Dark,a as Default,l as Light,et as __namedExportsOrder,tt as default};
