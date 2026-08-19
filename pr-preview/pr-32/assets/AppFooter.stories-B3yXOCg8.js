import{d as k,f as e,b as a,F as f,h as g,g as c,n as b,t as i,o as t}from"./iframe-CZbg21jV.js";import"./preload-helper-DR0Ra8Iv.js";const y={class:"mt-auto border-t border-border/60 py-4"},F={class:"w-full px-6 text-xs text-muted-foreground"},P={key:0,class:"flex flex-col gap-0.5 sm:hidden"},v={key:0,"aria-hidden":"true",class:"ml-1.5 text-border"},A={key:0,class:"ml-auto tabular-nums"},w={key:0,"aria-hidden":"true",class:"ml-1.5 text-border"},D={class:"ml-auto tabular-nums"},m=k({__name:"AppFooterPattern",props:{version:{default:"0.42.0"},narrow:{type:Boolean,default:!1}},setup(n){const o=["Vue","Vite","TypeScript","Tailwind","Pinia","i18n","Reka UI","Unovis"],x=[o.slice(0,4),o.slice(4)];return(S,V)=>(t(),e("footer",y,[a("div",F,[n.narrow?(t(),e("div",P,[(t(),e(f,null,g(x,(s,l)=>a("ul",{key:l,class:"flex flex-wrap items-center gap-x-1.5"},[(t(!0),e(f,null,g(s,(h,_)=>(t(),e("li",{key:h,class:"inline-flex items-center"},[a("span",null,i(h),1),_<s.length-1?(t(),e("span",v,"·")):c("",!0)]))),128)),l===0?(t(),e("li",A,"v"+i(n.version),1)):c("",!0)])),64))])):c("",!0),a("ul",{class:b(["flex flex-wrap items-center gap-x-1.5 gap-y-0.5",n.narrow?"hidden sm:flex":void 0])},[(t(),e(f,null,g(o,(s,l)=>a("li",{key:s,class:"inline-flex items-center"},[a("span",null,i(s),1),l<o.length-1?(t(),e("span",w,"·")):c("",!0)])),64)),a("li",D,"v"+i(n.version),1)],2)])]))}});m.__docgenInfo={exportName:"default",displayName:"AppFooterPattern",description:"",tags:{},props:[{name:"version",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'0.42.0'"}},{name:"narrow",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/stories/patterns/demos/AppFooterPattern.vue"]};const C={title:"Win Predict AI / Patterns / AppFooter",component:m,tags:["autodocs"]},r={render:()=>({components:{AppFooterPattern:m},template:"<AppFooterPattern />"})},p={render:()=>({components:{AppFooterPattern:m},template:"<AppFooterPattern narrow />"})},u={globals:{theme:"slate-teal-light"},...r},d={globals:{theme:"slate-teal-dark"},...r};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AppFooterPattern
    },
    template: '<AppFooterPattern />'
  })
}`,...r.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AppFooterPattern
    },
    template: '<AppFooterPattern narrow />'
  })
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-light'
  },
  ...Default
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-dark'
  },
  ...Default
}`,...d.parameters?.docs?.source}}};const L=["Default","Mobile","Light","Dark"];export{d as Dark,r as Default,u as Light,p as Mobile,L as __namedExportsOrder,C as default};
