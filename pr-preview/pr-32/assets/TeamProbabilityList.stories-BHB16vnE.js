import{d as T,c as i,w as r,u as e,o as s,a as t,b as l,e as m,f as x,F as w,h as k,t as h,g as $,l as D}from"./iframe-CZbg21jV.js";import{p as N,z as B,_ as S}from"./index-BRmrF3c1.js";import{l as _}from"./teams-C7RLY5nc.js";import{f as V}from"./utils-DlQ6874p.js";import{_ as C,a as z,b as F}from"./CardHeader-CE-CLTNq.js";import{_ as O}from"./CardTitle-DzY1_SF7.js";import{_ as j}from"./Progress-DI1FWYcI.js";import{_ as q}from"./index-Cptxg-sT.js";import{_ as E}from"./Separator-C9PZ_JCj.js";import{_ as I}from"./CardFooter-6-RnyhoZ.js";import{_ as v}from"./index-YV_CqY7G.js";import"./preload-helper-DR0Ra8Iv.js";import"./cn-DaT-yT0k.js";import"./createContext-9E_p4YM4.js";import"./nullish-CHIgUVhi.js";import"./useForwardExpose-DTCiqJDU.js";import"./index-BfW2HXGB.js";import"./index-D7g1-zI5.js";import"./Primitive-B616n9Qm.js";const M={class:"flex min-h-8 items-center justify-between"},W=["aria-label"],A={class:"flex items-center justify-between px-4 py-2"},U={class:"font-medium"},P=5,u=T({__name:"TeamProbabilityListPattern",props:{pinned:{type:Boolean,default:!1},progress:{default:64}},setup(f){const y=D(()=>{const g=_.slice(0,P),a=Math.max(0,_.length-P),o=_.slice(P).reduce((b,L)=>b+L.winProbability,0);return[...g,{id:"others",name:`Others (${a})`,winProbability:o}]});return(g,a)=>(s(),i(e(F),{class:"w-full p-0 sm:max-w-xs sm:min-w-3xs"},{default:r(()=>[t(e(C),{class:"px-4 pt-4"},{default:r(()=>[l("div",M,[t(e(O),{class:"flex items-center gap-2"},{default:r(()=>[t(e(N),{"aria-hidden":"true",class:"size-4"}),a[0]||(a[0]=m(" MLB World Series 26/27 ",-1))]),_:1}),l("button",{type:"button",class:"rounded-md px-2 py-1 text-sm font-medium uppercase text-muted-foreground transition-colors hover:bg-accent hover:text-foreground","aria-label":f.pinned?"Unpin tournament":"Pin tournament"},[f.pinned?(s(),i(e(S),{key:1,"aria-hidden":"true"})):(s(),i(e(B),{key:0,"aria-hidden":"true"}))],8,W)]),t(e(j),{"model-value":f.progress,class:"mt-4 h-1"},null,8,["model-value"])]),_:1}),t(e(z),{class:"p-0"},{default:r(()=>[(s(!0),x(w,null,k(y.value,(o,b)=>(s(),x("div",{key:o.id},[l("div",A,[l("span",U,h(o.name),1),t(e(q),{variant:"secondary"},{default:r(()=>[m(h(e(V)(o.winProbability)),1)]),_:2},1024)]),b<y.value.length-1?(s(),i(e(E),{key:0})):$("",!0)]))),128))]),_:1}),t(e(I),{class:"flex gap-2 px-4 pb-4"},{default:r(()=>[t(e(v),{variant:"outline",class:"flex-1 cursor-pointer"},{default:r(()=>[...a[1]||(a[1]=[m("Preview",-1)])]),_:1}),t(e(v),{class:"flex-1 cursor-pointer"},{default:r(()=>[...a[2]||(a[2]=[m("Details",-1)])]),_:1})]),_:1})]),_:1}))}});u.__docgenInfo={exportName:"default",displayName:"TeamProbabilityListPattern",description:"",tags:{},props:[{name:"pinned",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"progress",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"64"}}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/stories/patterns/demos/TeamProbabilityListPattern.vue"]};const ce={title:"Win Predict AI / Patterns / TeamProbabilityList",component:u,tags:["autodocs"]},n={render:()=>({components:{TeamProbabilityListPattern:u},template:"<TeamProbabilityListPattern />"})},c={render:()=>({components:{TeamProbabilityListPattern:u},template:"<TeamProbabilityListPattern pinned />"})},p={globals:{theme:"slate-teal-light"},...n},d={globals:{theme:"slate-teal-dark"},...n};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TeamProbabilityListPattern
    },
    template: '<TeamProbabilityListPattern />'
  })
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TeamProbabilityListPattern
    },
    template: '<TeamProbabilityListPattern pinned />'
  })
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-light'
  },
  ...Default
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-dark'
  },
  ...Default
}`,...d.parameters?.docs?.source}}};const pe=["Default","Pinned","Light","Dark"];export{d as Dark,n as Default,p as Light,c as Pinned,pe as __namedExportsOrder,ce as default};
