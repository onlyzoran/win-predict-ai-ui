import{w as x}from"./storyHelpers-C8GjIxNC.js";import{d as v,c as p,w as s,u as e,o as i,a,b as n,e as o,f as c,F as _,h as k,t as u,g as D,l as $}from"./iframe-BG9Um9s_.js";import{p as C,z as N,_ as S}from"./index-C9D01r6J.js";import{l as y}from"./teams-C7RLY5nc.js";import{f as V}from"./utils-CTyml5eC.js";import{_ as B,a as z,b as M}from"./CardHeader-BC7jwWbi.js";import{_ as Z}from"./CardTitle-CnPujEaS.js";import{_ as F}from"./Progress-BVwpuVa3.js";import{s as O}from"./shortTeamName-BmyZtoJ2.js";import{_ as j}from"./index-B5nXWDCo.js";import{_ as q}from"./Separator-DRrquiE5.js";import{_ as A}from"./CardFooter-DuEYFK4Z.js";import{_ as L}from"./index-C7v__CuX.js";import"./preload-helper-DLzIWJua.js";import"./cn-DaT-yT0k.js";import"./createContext-CoBn2RF9.js";import"./nullish-CHIgUVhi.js";import"./useForwardExpose-Bip5_TVC.js";import"./index-Cs1pj6hK.js";import"./index-DupvBdgD.js";import"./Primitive-D9BDkSKS.js";const E={class:"flex min-h-8 items-center justify-between"},I=["aria-label"],W={class:"flex items-center justify-between px-4 py-2"},U=["title"],G={class:"md:hidden"},H={class:"hidden md:inline"},h=5,d=v({__name:"TeamProbabilityListPattern",props:{pinned:{type:Boolean,default:!1},progress:{default:64}},setup(b){const g=$(()=>{const T=y.slice(0,h),r=Math.max(0,y.length-h),t=y.slice(h).reduce((P,w)=>P+w.winProbability,0);return[...T,{id:"others",name:`Others (${r})`,winProbability:t}]});return(T,r)=>(i(),p(e(M),{class:"w-full p-0 sm:max-w-xs sm:min-w-3xs"},{default:s(()=>[a(e(B),{class:"px-4 pt-4"},{default:s(()=>[n("div",E,[a(e(Z),{class:"flex items-center gap-2"},{default:s(()=>[a(e(C),{"aria-hidden":"true",class:"size-4"}),r[0]||(r[0]=o(" MLB World Series 26/27 ",-1))]),_:1}),n("button",{type:"button",class:"rounded-md px-2 py-1 text-sm font-medium uppercase text-muted-foreground transition-colors hover:bg-accent hover:text-foreground","aria-label":b.pinned?"Unpin tournament":"Pin tournament"},[b.pinned?(i(),p(e(S),{key:1,"aria-hidden":"true"})):(i(),p(e(N),{key:0,"aria-hidden":"true"}))],8,I)]),a(e(F),{"model-value":b.progress,class:"mt-4 h-1"},null,8,["model-value"])]),_:1}),a(e(z),{class:"p-0"},{default:s(()=>[(i(!0),c(_,null,k(g.value,(t,P)=>(i(),c("div",{key:t.id},[n("div",W,[n("span",{class:"font-medium",title:t.id==="others"?void 0:t.name},[t.id==="others"?(i(),c(_,{key:0},[o(u(t.name),1)],64)):(i(),c(_,{key:1},[n("span",G,u(e(O)(t.name)),1),n("span",H,u(t.name),1)],64))],8,U),a(e(j),{variant:"secondary"},{default:s(()=>[o(u(e(V)(t.winProbability)),1)]),_:2},1024)]),P<g.value.length-1?(i(),p(e(q),{key:0})):D("",!0)]))),128))]),_:1}),a(e(A),{class:"flex gap-2 px-4 pb-4"},{default:s(()=>[a(e(L),{variant:"outline",class:"flex-1 cursor-pointer"},{default:s(()=>[...r[1]||(r[1]=[o("Preview",-1)])]),_:1}),a(e(L),{class:"flex-1 cursor-pointer"},{default:s(()=>[...r[2]||(r[2]=[o("Details",-1)])]),_:1})]),_:1})]),_:1}))}});d.__docgenInfo={exportName:"default",displayName:"TeamProbabilityListPattern",description:"",tags:{},props:[{name:"pinned",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"progress",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"64"}}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/stories/patterns/demos/TeamProbabilityListPattern.vue"]};const be={title:"Win Predict AI / Patterns / TeamProbabilityList",component:d,tags:["autodocs"]},m={render:()=>({components:{TeamProbabilityListPattern:d},template:"<TeamProbabilityListPattern />"})},f={render:()=>({components:{TeamProbabilityListPattern:d},template:"<TeamProbabilityListPattern pinned />"})},l={parameters:{viewport:{defaultViewport:"mobile1"}},render:()=>({components:{TeamProbabilityListPattern:d},template:"<TeamProbabilityListPattern />"})},{ZincLight:Pe,ZincDark:_e,SlateTealLight:ye,SlateTealDark:he,ClaudePlusLight:ge,ClaudePlusDark:Te}=x(m);m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TeamProbabilityListPattern
    },
    template: '<TeamProbabilityListPattern />'
  })
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TeamProbabilityListPattern
    },
    template: '<TeamProbabilityListPattern pinned />'
  })
}`,...f.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  render: () => ({
    components: {
      TeamProbabilityListPattern
    },
    template: '<TeamProbabilityListPattern />'
  })
}`,...l.parameters?.docs?.source},description:{story:"Narrow viewport — nicknames visible without resizing the canvas manually.",...l.parameters?.docs?.description}}};const Le=["Default","Pinned","Mobile","ZincLight","ZincDark","SlateTealLight","SlateTealDark","ClaudePlusLight","ClaudePlusDark"];export{Te as ClaudePlusDark,ge as ClaudePlusLight,m as Default,l as Mobile,f as Pinned,he as SlateTealDark,ye as SlateTealLight,_e as ZincDark,Pe as ZincLight,Le as __namedExportsOrder,be as default};
