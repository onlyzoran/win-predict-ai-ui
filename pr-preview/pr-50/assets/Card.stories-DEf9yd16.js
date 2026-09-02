import{d as y,c as u,w as a,u as e,o as n,a as t,b as i,e as c,f,g as _,F as C,h as L,t as h}from"./iframe-pIBGhHsF.js";import{p as b,z as w}from"./index-B08xoKxG.js";import{_ as k,a as v,b as P}from"./CardHeader-GNllwEF1.js";import{_ as $}from"./CardTitle-DJBJYxQQ.js";import{_ as A}from"./Progress-BMsJLEsn.js";import{_ as B}from"./index-BAPdf0aM.js";import{_ as M}from"./Separator-BbdlE9N8.js";import{_ as N}from"./CardFooter-1IwV8wru.js";import{_ as g}from"./index-mx0180-x.js";import{_ as H}from"./MatchResultCardsDemo-DnSKhTlq.js";import"./preload-helper-QR2TdjE1.js";import"./cn-DaT-yT0k.js";import"./createContext-DUGmTljU.js";import"./nullish-CHIgUVhi.js";import"./useForwardExpose-BDLhgg3j.js";import"./index-DakSyiJJ.js";import"./index-B5Q6pv39.js";import"./Primitive-BXWwZxR9.js";import"./CardDescription-B3vGJu6y.js";const R={class:"flex min-h-8 items-center justify-between"},S={key:0,type:"button",class:"rounded-md px-2 py-1 text-sm font-medium uppercase text-muted-foreground transition-colors hover:bg-accent hover:text-foreground","aria-label":"Pin tournament"},V={class:"flex items-center justify-between px-4 py-2"},O={class:"font-medium"},p=y({__name:"LeaguePredictionCardDemo",props:{withHeaderAction:{type:Boolean,default:!0}},setup(D){const l=[{id:"lad",name:"Los Angeles Dodgers",pct:"8%"},{id:"nyy",name:"New York Yankees",pct:"6%"},{id:"hou",name:"Houston Astros",pct:"4%"},{id:"atl",name:"Atlanta Braves",pct:"4%"},{id:"phi",name:"Philadelphia Phillies",pct:"4%"},{id:"others",name:"Others (25)",pct:"74%"}];return(W,r)=>(n(),u(e(P),{class:"w-full p-0 sm:max-w-xs sm:min-w-3xs"},{default:a(()=>[t(e(k),{class:"px-4 pt-4"},{default:a(()=>[i("div",R,[t(e($),{class:"flex items-center gap-2"},{default:a(()=>[t(e(b),{"aria-hidden":"true",class:"size-4"}),r[0]||(r[0]=c(" MLB World Series 26/27 ",-1))]),_:1}),D.withHeaderAction?(n(),f("button",S,[t(e(w),{"aria-hidden":"true"})])):_("",!0)]),t(e(A),{"model-value":64,class:"mt-4 h-1"})]),_:1}),t(e(v),{class:"p-0"},{default:a(()=>[(n(),f(C,null,L(l,(m,x)=>i("div",{key:m.id},[i("div",V,[i("span",O,h(m.name),1),t(e(B),{variant:"secondary"},{default:a(()=>[c(h(m.pct),1)]),_:2},1024)]),x<l.length-1?(n(),u(e(M),{key:0})):_("",!0)])),64))]),_:1}),t(e(N),{class:"flex gap-2 px-4 pb-4"},{default:a(()=>[t(e(g),{variant:"outline",class:"flex-1 cursor-pointer"},{default:a(()=>[...r[1]||(r[1]=[c(" Preview ",-1)])]),_:1}),t(e(g),{class:"flex-1 cursor-pointer"},{default:a(()=>[...r[2]||(r[2]=[c(" Details ",-1)])]),_:1})]),_:1})]),_:1}))}});p.__docgenInfo={exportName:"default",displayName:"LeaguePredictionCardDemo",description:"",tags:{},props:[{name:"withHeaderAction",description:"Pin в header — как editMode в TeamProbabilityList на главной app.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/stories/LeaguePredictionCardDemo.vue"]};const oe={title:"Win Predict AI / UI / Card",component:P,tags:["autodocs"],parameters:{docs:{description:{component:"Card использует семантические токены (`bg-card`, `text-card-foreground`). Палитру и light/dark переключайте через toolbar **Palette** — отдельные story под каждую тему не нужны."}}}},d={render:()=>({components:{LeaguePredictionCardDemo:p},template:"<LeaguePredictionCardDemo />"})},o={render:()=>({components:{LeaguePredictionCardDemo:p},template:'<LeaguePredictionCardDemo :with-header-action="false" />'})},s={render:()=>({components:{MatchResultCardsDemo:H},template:"<MatchResultCardsDemo />"}),parameters:{docs:{description:{story:"Карточки итогов: приглушённый зелёный (chart-1 / primary) для финальных результатов, приглушённый жёлтый (chart-2) для промежуточных. Переключите toolbar **Palette** на Pastel · Light / Dark."}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LeaguePredictionCardDemo
    },
    template: '<LeaguePredictionCardDemo />'
  })
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LeaguePredictionCardDemo
    },
    template: '<LeaguePredictionCardDemo :with-header-action="false" />'
  })
}`,...o.parameters?.docs?.source},description:{story:"Без pin в header — высота строки заголовка совпадает с Default (min-h-8 под action).",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MatchResultCardsDemo
    },
    template: '<MatchResultCardsDemo />'
  }),
  parameters: {
    docs: {
      description: {
        story: 'Карточки итогов: приглушённый зелёный (chart-1 / primary) для финальных результатов, приглушённый жёлтый (chart-2) для промежуточных. Переключите toolbar **Palette** на Pastel · Light / Dark.'
      }
    }
  }
}`,...s.parameters?.docs?.source},description:{story:"Match/result cards: sage (chart-1) — финал, butter (chart-2) — промежуточный итог. Palette → Pastel Light/Dark.",...s.parameters?.docs?.description}}};const se=["Default","WithoutHeaderAction","ResultOutcomes"];export{d as Default,s as ResultOutcomes,o as WithoutHeaderAction,se as __namedExportsOrder,oe as default};
