import{d as l,c,a as p,n as u,u as e,o as s,b as k,w as d,e as n,f,g as _,h as S,F,i as H,t as v}from"./iframe-CEcj8ys-.js";import{p as z,z as j}from"./index--yy_xmLr.js";import{c as g}from"./cn-DaT-yT0k.js";import{_ as O}from"./Progress-DZiuR4gC.js";import{_ as q}from"./index-D5vgHvVV.js";import{_ as V}from"./Separator-DJb1siiB.js";import{_ as T}from"./index-Bo4t0_qQ.js";import"./preload-helper-DR0Ra8Iv.js";import"./createContext-sQmaukuv.js";import"./nullish-CHIgUVhi.js";import"./useForwardExpose-3zj45elM.js";import"./index-qujQPUfq.js";import"./index-GzIrTbA5.js";import"./Primitive-DgBgeqSA.js";const w=l({__name:"Card",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(r){const a=r;return(o,t)=>(s(),c("div",{"data-slot":"card",class:u(e(g)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",a.class))},[p(o.$slots,"default")],2))}});w.__docgenInfo={exportName:"default",displayName:"Card",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/card/Card.vue"]};const A=l({__name:"CardContent",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(r){const a=r;return(o,t)=>(s(),c("div",{"data-slot":"card-content",class:u(e(g)("px-6",a.class))},[p(o.$slots,"default")],2))}});A.__docgenInfo={exportName:"default",displayName:"CardContent",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/card/CardContent.vue"]};const N=l({__name:"CardFooter",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(r){const a=r;return(o,t)=>(s(),c("div",{"data-slot":"card-footer",class:u(e(g)("flex items-center px-6 [.border-t]:pt-6",a.class))},[p(o.$slots,"default")],2))}});N.__docgenInfo={exportName:"default",displayName:"CardFooter",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/card/CardFooter.vue"]};const $=l({__name:"CardHeader",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(r){const a=r;return(o,t)=>(s(),c("div",{"data-slot":"card-header",class:u(e(g)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",a.class))},[p(o.$slots,"default")],2))}});$.__docgenInfo={exportName:"default",displayName:"CardHeader",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/card/CardHeader.vue"]};const I=l({__name:"CardTitle",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(r){const a=r;return(o,t)=>(s(),c("h3",{"data-slot":"card-title",class:u(e(g)("leading-none font-semibold",a.class))},[p(o.$slots,"default")],2))}});I.__docgenInfo={exportName:"default",displayName:"CardTitle",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/card/CardTitle.vue"]};const W={class:"flex min-h-8 items-center justify-between"},Z={key:0,type:"button",class:"rounded-md px-2 py-1 text-sm font-medium uppercase text-muted-foreground transition-colors hover:bg-accent hover:text-foreground","aria-label":"Pin tournament"},E={class:"flex items-center justify-between px-4 py-2"},M={class:"font-medium"},i=l({__name:"LeaguePredictionCardDemo",props:{withHeaderAction:{type:Boolean,default:!0}},setup(r){const a=[{id:"lad",name:"Los Angeles Dodgers",pct:"8%"},{id:"nyy",name:"New York Yankees",pct:"6%"},{id:"hou",name:"Houston Astros",pct:"4%"},{id:"atl",name:"Atlanta Braves",pct:"4%"},{id:"phi",name:"Philadelphia Phillies",pct:"4%"},{id:"others",name:"Others (25)",pct:"74%"}];return(o,t)=>(s(),k(e(w),{class:"w-full p-0 sm:max-w-xs sm:min-w-3xs"},{default:d(()=>[n(e($),{class:"px-4 pt-4"},{default:d(()=>[f("div",W,[n(e(I),{class:"flex items-center gap-2"},{default:d(()=>[n(e(z),{"aria-hidden":"true",class:"size-4"}),t[0]||(t[0]=_(" MLB World Series 26/27 ",-1))]),_:1}),r.withHeaderAction?(s(),c("button",Z,[n(e(j),{"aria-hidden":"true"})])):S("",!0)]),n(e(O),{"model-value":64,class:"mt-4 h-1"})]),_:1}),n(e(A),{class:"p-0"},{default:d(()=>[(s(),c(F,null,H(a,(b,B)=>f("div",{key:b.id},[f("div",E,[f("span",M,v(b.name),1),n(e(q),{variant:"secondary"},{default:d(()=>[_(v(b.pct),1)]),_:2},1024)]),B<a.length-1?(s(),k(e(V),{key:0})):S("",!0)])),64))]),_:1}),n(e(N),{class:"flex gap-2 px-4 pb-4"},{default:d(()=>[n(e(T),{variant:"outline",class:"flex-1 cursor-pointer"},{default:d(()=>[...t[1]||(t[1]=[_(" Preview ",-1)])]),_:1}),n(e(T),{class:"flex-1 cursor-pointer"},{default:d(()=>[...t[2]||(t[2]=[_(" Details ",-1)])]),_:1})]),_:1})]),_:1}))}});i.__docgenInfo={exportName:"default",displayName:"LeaguePredictionCardDemo",description:"",tags:{},props:[{name:"withHeaderAction",description:"Pin в header — как editMode в TeamProbabilityList на главной app.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/stories/LeaguePredictionCardDemo.vue"]};const se={title:"Win Predict AI / UI / Card",component:w,tags:["autodocs"]},h={render:()=>({components:{LeaguePredictionCardDemo:i},template:"<LeaguePredictionCardDemo />"})},m={render:()=>({components:{LeaguePredictionCardDemo:i},template:'<LeaguePredictionCardDemo :with-header-action="false" />'})},C={globals:{theme:"zinc-light"},render:()=>({components:{LeaguePredictionCardDemo:i},template:"<LeaguePredictionCardDemo />"})},D={globals:{theme:"zinc-dark"},render:()=>({components:{LeaguePredictionCardDemo:i},template:"<LeaguePredictionCardDemo />"})},P={globals:{theme:"slate-teal-light"},render:()=>({components:{LeaguePredictionCardDemo:i},template:"<LeaguePredictionCardDemo />"})},L={globals:{theme:"slate-teal-dark"},render:()=>({components:{LeaguePredictionCardDemo:i},template:"<LeaguePredictionCardDemo />"})},y={globals:{theme:"claude-plus-light"},render:()=>({components:{LeaguePredictionCardDemo:i},template:"<LeaguePredictionCardDemo />"})},x={globals:{theme:"claude-plus-dark"},render:()=>({components:{LeaguePredictionCardDemo:i},template:"<LeaguePredictionCardDemo />"})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LeaguePredictionCardDemo
    },
    template: '<LeaguePredictionCardDemo />'
  })
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LeaguePredictionCardDemo
    },
    template: '<LeaguePredictionCardDemo :with-header-action="false" />'
  })
}`,...m.parameters?.docs?.source},description:{story:"Без pin в header — высота строки заголовка совпадает с Default (min-h-8 под action).",...m.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'zinc-light'
  },
  render: () => ({
    components: {
      LeaguePredictionCardDemo
    },
    template: '<LeaguePredictionCardDemo />'
  })
}`,...C.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'zinc-dark'
  },
  render: () => ({
    components: {
      LeaguePredictionCardDemo
    },
    template: '<LeaguePredictionCardDemo />'
  })
}`,...D.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-light'
  },
  render: () => ({
    components: {
      LeaguePredictionCardDemo
    },
    template: '<LeaguePredictionCardDemo />'
  })
}`,...P.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-dark'
  },
  render: () => ({
    components: {
      LeaguePredictionCardDemo
    },
    template: '<LeaguePredictionCardDemo />'
  })
}`,...L.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'claude-plus-light'
  },
  render: () => ({
    components: {
      LeaguePredictionCardDemo
    },
    template: '<LeaguePredictionCardDemo />'
  })
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'claude-plus-dark'
  },
  render: () => ({
    components: {
      LeaguePredictionCardDemo
    },
    template: '<LeaguePredictionCardDemo />'
  })
}`,...x.parameters?.docs?.source}}};const ie=["Default","WithoutHeaderAction","ZincLight","ZincDark","SlateTealLight","SlateTealDark","ClaudePlusLight","ClaudePlusDark"];export{x as ClaudePlusDark,y as ClaudePlusLight,h as Default,L as SlateTealDark,P as SlateTealLight,m as WithoutHeaderAction,D as ZincDark,C as ZincLight,ie as __namedExportsOrder,se as default};
