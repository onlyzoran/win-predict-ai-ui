import{d as y,c as P,w as t,u as e,o as s,a,b as i,e as d,f as L,g as _,F as S,h as v,t as C}from"./iframe-DrxeuGHg.js";import{p as A,z as $}from"./index-CaIypAJk.js";import{_ as z,a as B,b as x}from"./CardHeader-BHvOKOST.js";import{_ as N}from"./CardTitle-WMkYFSec.js";import{_ as T}from"./Progress-CnZ-73qg.js";import{_ as H}from"./index-CFbYQ49t.js";import{_ as V}from"./Separator-KaYIJfsy.js";import{_ as W}from"./CardFooter-CmjqqmEL.js";import{_ as b}from"./index-YrMu6-Ox.js";import"./preload-helper-CWSTMizN.js";import"./cn-DaT-yT0k.js";import"./createContext-CqK2b_PS.js";import"./nullish-CHIgUVhi.js";import"./useForwardExpose-D10lv_Y8.js";import"./index-Cq5DJ3c2.js";import"./index-4_bo63-3.js";import"./Primitive-D0k1zrdX.js";const Z={class:"flex min-h-8 items-center justify-between"},F={key:0,type:"button",class:"rounded-md px-2 py-1 text-sm font-medium uppercase text-muted-foreground transition-colors hover:bg-accent hover:text-foreground","aria-label":"Pin tournament"},I={class:"flex items-center justify-between px-4 py-2"},j={class:"font-medium"},r=y({__name:"LeaguePredictionCardDemo",props:{withHeaderAction:{type:Boolean,default:!0}},setup(k){const D=[{id:"lad",name:"Los Angeles Dodgers",pct:"8%"},{id:"nyy",name:"New York Yankees",pct:"6%"},{id:"hou",name:"Houston Astros",pct:"4%"},{id:"atl",name:"Atlanta Braves",pct:"4%"},{id:"phi",name:"Philadelphia Phillies",pct:"4%"},{id:"others",name:"Others (25)",pct:"74%"}];return(E,o)=>(s(),P(e(x),{class:"w-full p-0 sm:max-w-xs sm:min-w-3xs"},{default:t(()=>[a(e(z),{class:"px-4 pt-4"},{default:t(()=>[i("div",Z,[a(e(N),{class:"flex items-center gap-2"},{default:t(()=>[a(e(A),{"aria-hidden":"true",class:"size-4"}),o[0]||(o[0]=d(" MLB World Series 26/27 ",-1))]),_:1}),k.withHeaderAction?(s(),L("button",F,[a(e($),{"aria-hidden":"true"})])):_("",!0)]),a(e(T),{"model-value":64,class:"mt-4 h-1"})]),_:1}),a(e(B),{class:"p-0"},{default:t(()=>[(s(),L(S,null,v(D,(h,w)=>i("div",{key:h.id},[i("div",I,[i("span",j,C(h.name),1),a(e(H),{variant:"secondary"},{default:t(()=>[d(C(h.pct),1)]),_:2},1024)]),w<D.length-1?(s(),P(e(V),{key:0})):_("",!0)])),64))]),_:1}),a(e(W),{class:"flex gap-2 px-4 pb-4"},{default:t(()=>[a(e(b),{variant:"outline",class:"flex-1 cursor-pointer"},{default:t(()=>[...o[1]||(o[1]=[d(" Preview ",-1)])]),_:1}),a(e(b),{class:"flex-1 cursor-pointer"},{default:t(()=>[...o[2]||(o[2]=[d(" Details ",-1)])]),_:1})]),_:1})]),_:1}))}});r.__docgenInfo={exportName:"default",displayName:"LeaguePredictionCardDemo",description:"",tags:{},props:[{name:"withHeaderAction",description:"Pin в header — как editMode в TeamProbabilityList на главной app.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/stories/LeaguePredictionCardDemo.vue"]};const se={title:"Win Predict AI / UI / Card",component:x,tags:["autodocs"]},c={render:()=>({components:{LeaguePredictionCardDemo:r},template:"<LeaguePredictionCardDemo />"})},n={render:()=>({components:{LeaguePredictionCardDemo:r},template:'<LeaguePredictionCardDemo :with-header-action="false" />'})},m={globals:{theme:"zinc-light"},render:()=>({components:{LeaguePredictionCardDemo:r},template:"<LeaguePredictionCardDemo />"})},l={globals:{theme:"zinc-dark"},render:()=>({components:{LeaguePredictionCardDemo:r},template:"<LeaguePredictionCardDemo />"})},p={globals:{theme:"slate-teal-light"},render:()=>({components:{LeaguePredictionCardDemo:r},template:"<LeaguePredictionCardDemo />"})},u={globals:{theme:"slate-teal-dark"},render:()=>({components:{LeaguePredictionCardDemo:r},template:"<LeaguePredictionCardDemo />"})},g={globals:{theme:"claude-plus-light"},render:()=>({components:{LeaguePredictionCardDemo:r},template:"<LeaguePredictionCardDemo />"})},f={globals:{theme:"claude-plus-dark"},render:()=>({components:{LeaguePredictionCardDemo:r},template:"<LeaguePredictionCardDemo />"})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LeaguePredictionCardDemo
    },
    template: '<LeaguePredictionCardDemo />'
  })
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LeaguePredictionCardDemo
    },
    template: '<LeaguePredictionCardDemo :with-header-action="false" />'
  })
}`,...n.parameters?.docs?.source},description:{story:"Без pin в header — высота строки заголовка совпадает с Default (min-h-8 под action).",...n.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'zinc-light'
  },
  render: () => ({
    components: {
      LeaguePredictionCardDemo
    },
    template: '<LeaguePredictionCardDemo />'
  })
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'zinc-dark'
  },
  render: () => ({
    components: {
      LeaguePredictionCardDemo
    },
    template: '<LeaguePredictionCardDemo />'
  })
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-light'
  },
  render: () => ({
    components: {
      LeaguePredictionCardDemo
    },
    template: '<LeaguePredictionCardDemo />'
  })
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-dark'
  },
  render: () => ({
    components: {
      LeaguePredictionCardDemo
    },
    template: '<LeaguePredictionCardDemo />'
  })
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'claude-plus-light'
  },
  render: () => ({
    components: {
      LeaguePredictionCardDemo
    },
    template: '<LeaguePredictionCardDemo />'
  })
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'claude-plus-dark'
  },
  render: () => ({
    components: {
      LeaguePredictionCardDemo
    },
    template: '<LeaguePredictionCardDemo />'
  })
}`,...f.parameters?.docs?.source}}};const ie=["Default","WithoutHeaderAction","ZincLight","ZincDark","SlateTealLight","SlateTealDark","ClaudePlusLight","ClaudePlusDark"];export{f as ClaudePlusDark,g as ClaudePlusLight,c as Default,u as SlateTealDark,p as SlateTealLight,n as WithoutHeaderAction,l as ZincDark,m as ZincLight,ie as __namedExportsOrder,se as default};
