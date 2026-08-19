import{w as x}from"./storyHelpers-CiLmDOdr.js";import{d as k,f as e,b as a,F as d,h as m,g as i,n as P,t as c,o as t}from"./iframe-CUqNZo_k.js";import"./preload-helper-D-K94Hq9.js";const _={class:"mt-auto border-t border-border/60 py-4"},y={class:"w-full px-6 text-xs text-muted-foreground"},F={key:0,class:"flex flex-col gap-0.5 sm:hidden"},w={key:0,"aria-hidden":"true",class:"ml-1.5 text-border"},A={key:0,class:"ml-auto tabular-nums"},v={key:0,"aria-hidden":"true",class:"ml-1.5 text-border"},b={class:"ml-auto tabular-nums"},u=k({__name:"AppFooterPattern",props:{version:{default:"0.42.0"},narrow:{type:Boolean,default:!1}},setup(s){const o=["Vue","Vite","TypeScript","Tailwind","Pinia","i18n","Reka UI","Unovis"],h=[o.slice(0,4),o.slice(4)];return(D,S)=>(t(),e("footer",_,[a("div",y,[s.narrow?(t(),e("div",F,[(t(),e(d,null,m(h,(r,l)=>a("ul",{key:l,class:"flex flex-wrap items-center gap-x-1.5"},[(t(!0),e(d,null,m(r,(f,g)=>(t(),e("li",{key:f,class:"inline-flex items-center"},[a("span",null,c(f),1),g<r.length-1?(t(),e("span",w,"·")):i("",!0)]))),128)),l===0?(t(),e("li",A,"v"+c(s.version),1)):i("",!0)])),64))])):i("",!0),a("ul",{class:P(["flex flex-wrap items-center gap-x-1.5 gap-y-0.5",s.narrow?"hidden sm:flex":void 0])},[(t(),e(d,null,m(o,(r,l)=>a("li",{key:r,class:"inline-flex items-center"},[a("span",null,c(r),1),l<o.length-1?(t(),e("span",v,"·")):i("",!0)])),64)),a("li",b,"v"+c(s.version),1)],2)])]))}});u.__docgenInfo={exportName:"default",displayName:"AppFooterPattern",description:"",tags:{},props:[{name:"version",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'0.42.0'"}},{name:"narrow",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/stories/patterns/demos/AppFooterPattern.vue"]};const V={title:"Win Predict AI / Patterns / AppFooter",component:u,tags:["autodocs"]},n={render:()=>({components:{AppFooterPattern:u},template:"<AppFooterPattern />"})},p={render:()=>({components:{AppFooterPattern:u},template:"<AppFooterPattern narrow />"})},{ZincLight:B,ZincDark:N,SlateTealLight:Z,SlateTealDark:q,ClaudePlusLight:E,ClaudePlusDark:I}=x(n);n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AppFooterPattern
    },
    template: '<AppFooterPattern />'
  })
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AppFooterPattern
    },
    template: '<AppFooterPattern narrow />'
  })
}`,...p.parameters?.docs?.source}}};const M=["Default","Mobile","ZincLight","ZincDark","SlateTealLight","SlateTealDark","ClaudePlusLight","ClaudePlusDark"];export{I as ClaudePlusDark,E as ClaudePlusLight,n as Default,p as Mobile,q as SlateTealDark,Z as SlateTealLight,N as ZincDark,B as ZincLight,M as __namedExportsOrder,V as default};
