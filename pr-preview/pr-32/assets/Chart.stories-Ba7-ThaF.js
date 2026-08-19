import{d as D,i as N,o as n,f as i,F as w,h as O,n as v,u as o,c as L,j as B,k as W,e as I,t as _,g as T,l as b,r as j,b as a,a as l,w as k}from"./iframe-CZbg21jV.js";import{u as q,T as F,_ as S,c as V}from"./index-BFMtzt5Q.js";import{S as $,D as M,a as z}from"./index-DySCn9gj.js";import{c as x}from"./cn-DaT-yT0k.js";import{_ as K}from"./ChartTooltipContent-BbbYwyY5.js";import"./preload-helper-DR0Ra8Iv.js";import"./useId-DCtzg9yx.js";import"./createContext-9E_p4YM4.js";import"./Primitive-B616n9Qm.js";import"./index-D7g1-zI5.js";import"./_commonjsHelpers-CqkleIqs.js";const A=D({__name:"ChartLegendContent",props:{hideIcon:{type:Boolean},nameKey:{},verticalAlign:{default:"bottom"},class:{type:[Boolean,null,String,Object,Array]}},setup(g){const s=g,{id:c,config:y}=q(),C=b(()=>Object.entries(y.value).map(([m,e])=>({key:s.nameKey||m,itemConfig:e}))),d=j("");return N(()=>{d.value=`[data-chart="chart-${c}"]>[data-vis-xy-container]`}),(m,e)=>d.value?(n(),i("div",{key:0,class:v(o(x)("flex items-center justify-center gap-4",g.verticalAlign==="top"?"pb-3":"pt-3",s.class))},[(n(!0),i(w,null,O(C.value,({key:r,itemConfig:t})=>(n(),i("div",{key:r,class:v(o(x)("[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3"))},[t.icon?(n(),L(B(t.icon),{key:0})):(n(),i("div",{key:1,class:"h-2 w-2 shrink-0 rounded-xs",style:W({backgroundColor:t?.color})},null,4)),I(" "+_(t.label),1)],2))),128))],2)):T("",!0)}});A.__docgenInfo={exportName:"default",displayName:"ChartLegendContent",description:"",tags:{},props:[{name:"hideIcon",required:!1,type:{name:"boolean"}},{name:"nameKey",required:!1,type:{name:"string"}},{name:"verticalAlign",required:!1,type:{name:"union",elements:[{name:'"bottom"'},{name:'"top"'}]},defaultValue:{func:!1,value:"'bottom'"}},{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/chart/ChartLegendContent.vue"]};const P={class:"mx-auto w-full max-w-md space-y-4"},U={class:"grid gap-2 text-sm"},E={class:"flex min-w-0 items-center gap-2"},Y={class:"truncate font-medium"},G={class:"shrink-0 text-muted-foreground tabular-nums"},f=D({__name:"ChartWinOddsDemo",setup(g){const s=[{key:"dodgers",name:"Los Angeles Dodgers",probability:.17,fill:"var(--chart-1)"},{key:"yankees",name:"New York Yankees",probability:.07,fill:"var(--chart-2)"},{key:"brewers",name:"Milwaukee Brewers",probability:.06,fill:"var(--chart-3)"},{key:"others",name:"Others (25)",probability:.59,fill:"var(--chart-4)"}],c=b(()=>{const e={};for(const r of s)e[r.key]={label:r.name,color:r.fill};return e}),y=e=>e.probability,C=e=>e.fill,d=b(()=>({[z.selectors.segment]:V(c.value,K,{labelFormatter:()=>"World Series win odds"})}));function m(e){return`${Math.round(e*100)}%`}return(e,r)=>(n(),i("div",P,[r[0]||(r[0]=a("div",{class:"space-y-1"},[a("h2",{class:"text-sm font-medium text-foreground"},"World Series win odds"),a("p",{class:"text-xs text-muted-foreground"},"Mock chart — ChartContainer + Unovis donut")],-1)),l(o(S),{config:c.value,class:"mx-auto aspect-square max-h-[260px] w-full"},{default:k(()=>[l(o($),{data:s,margin:{top:4,bottom:4}},{default:k(()=>[l(o(M),{value:y,color:C,"arc-width":28}),l(o(F),{triggers:d.value},null,8,["triggers"])]),_:1})]),_:1},8,["config"]),l(o(A)),a("ul",U,[(n(),i(w,null,O(s,t=>a("li",{key:t.key,class:"flex items-center justify-between gap-3"},[a("span",E,[a("span",{class:"size-2.5 shrink-0 rounded-xs",style:W({backgroundColor:t.fill}),"aria-hidden":"true"},null,4),a("span",Y,_(t.name),1)]),a("span",G,_(m(t.probability)),1)])),64))])]))}});f.__docgenInfo={exportName:"default",displayName:"ChartWinOddsDemo",description:"",tags:{},sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/stories/ChartWinOddsDemo.vue"]};const oe={title:"Win Predict AI / UI / Chart",component:S,tags:["autodocs"],parameters:{docs:{description:{component:"Shadcn-обвязка для Unovis: ChartContainer, ChartStyle, ChartTooltipContent, ChartLegendContent. Peer dependency: `@unovis/vue`."}}}},u={render:()=>({components:{ChartWinOddsDemo:f},template:"<ChartWinOddsDemo />"})},p={globals:{theme:"slate-teal-light"},render:()=>({components:{ChartWinOddsDemo:f},template:"<ChartWinOddsDemo />"})},h={globals:{theme:"slate-teal-dark"},render:()=>({components:{ChartWinOddsDemo:f},template:"<ChartWinOddsDemo />"})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ChartWinOddsDemo
    },
    template: '<ChartWinOddsDemo />'
  })
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-light'
  },
  render: () => ({
    components: {
      ChartWinOddsDemo
    },
    template: '<ChartWinOddsDemo />'
  })
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-dark'
  },
  render: () => ({
    components: {
      ChartWinOddsDemo
    },
    template: '<ChartWinOddsDemo />'
  })
}`,...h.parameters?.docs?.source}}};const se=["Default","Light","Dark"];export{h as Dark,u as Default,p as Light,se as __namedExportsOrder,oe as default};
