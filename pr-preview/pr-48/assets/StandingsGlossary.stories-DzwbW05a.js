import{d as p,f as l,F as b,h as u,n as m,u as g,l as f,o as n,b as o,t as i}from"./iframe-BG9Um9s_.js";import{c as y}from"./cn-DaT-yT0k.js";import{w as G}from"./storyHelpers-C8GjIxNC.js";import"./preload-helper-DLzIWJua.js";const S=[{abbr:"GP",label:"Games played"},{abbr:"W",label:"Wins"},{abbr:"D",label:"Draws"},{abbr:"L",label:"Losses"},{abbr:"GF",label:"Goals for"},{abbr:"GA",label:"Goals against"},{abbr:"GD",label:"Goal difference"},{abbr:"Pts",label:"Points"}];function P(t){if(t==="football")return S}const _={class:"font-medium text-foreground"},c=p({__name:"StandingsGlossary",props:{preset:{default:"football"},entries:{},class:{type:[Boolean,null,String,Object,Array]}},setup(t){const a=t,d=f(()=>a.entries?.length?a.entries:P(a.preset));return(h,x)=>(n(),l("dl",{"data-testid":"standings-glossary",class:m(g(y)("flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground",a.class))},[(n(!0),l(b,null,u(d.value,r=>(n(),l("div",{key:r.abbr,class:"inline-flex gap-1"},[o("dt",_,i(r.abbr),1),o("dd",null,i(r.label),1)]))),128))],2))}});c.__docgenInfo={exportName:"default",displayName:"StandingsGlossary",description:"",tags:{},props:[{name:"preset",required:!1,type:{name:"StandingsGlossaryPreset"},defaultValue:{func:!1,value:"'football'"}},{name:"entries",required:!1,type:{name:"Array",elements:[{name:"StandingsGlossaryEntry"}]}},{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/StandingsGlossary.vue"]};const T={title:"Win Predict AI / UI / StandingsGlossary",component:c,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{preset:{control:"select",options:["football"]}}},e={args:{preset:"football"}},{ZincLight:w,ZincDark:C,SlateTealLight:F,SlateTealDark:E,ClaudePlusLight:v,ClaudePlusDark:B}=G(e),s={args:{entries:[{abbr:"GP",label:"Games played"},{abbr:"Pts",label:"Points"}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    preset: 'football'
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    entries: [{
      abbr: 'GP',
      label: 'Games played'
    }, {
      abbr: 'Pts',
      label: 'Points'
    }]
  }
}`,...s.parameters?.docs?.source}}};const I=["Football","ZincLight","ZincDark","SlateTealLight","SlateTealDark","ClaudePlusLight","ClaudePlusDark","CustomEntries"];export{B as ClaudePlusDark,v as ClaudePlusLight,s as CustomEntries,e as Football,E as SlateTealDark,F as SlateTealLight,C as ZincDark,w as ZincLight,I as __namedExportsOrder,T as default};
