import{d as c,c as d,n as i,u as m,o as p}from"./iframe-CEcj8ys-.js";import{c as u}from"./cn-DaT-yT0k.js";import"./preload-helper-DR0Ra8Iv.js";const s=c({__name:"Skeleton",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(t){const o=t;return(k,f)=>(p(),d("div",{"data-slot":"skeleton",class:i(m(u)("bg-accent animate-pulse rounded-md",o.class))},null,2))}});s.__docgenInfo={exportName:"default",displayName:"Skeleton",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/skeleton/Skeleton.vue"]};const w={title:"Win Predict AI / UI / Skeleton",component:s,tags:["autodocs"]},e={render:()=>({components:{Skeleton:s},template:'<Skeleton class="h-4 w-48" />'})},n={globals:{theme:"slate-teal-light"},render:e.render},a={globals:{theme:"slate-teal-dark"},render:e.render},l={render:()=>({components:{Skeleton:s},template:`
      <div class="w-full max-w-md space-y-4 rounded-lg border border-border bg-card p-4">
        <div class="flex items-center justify-between gap-3">
          <div class="flex items-center gap-2">
            <Skeleton class="size-4 rounded-sm" />
            <Skeleton class="h-5 w-32" />
          </div>
          <Skeleton class="size-8 rounded-md" />
        </div>
        <Skeleton class="h-1 w-full" />
        <div class="space-y-2">
          <div v-for="n in 3" :key="n" class="flex items-center justify-between gap-3">
            <Skeleton class="h-4 w-28" />
            <Skeleton class="h-5 w-12 rounded-full" />
          </div>
        </div>
        <Skeleton class="h-9 w-full" />
      </div>
    `})},r={render:()=>({components:{Skeleton:s},template:`
      <div class="w-full max-w-lg space-y-2">
        <div v-for="n in 4" :key="n" class="flex gap-4">
          <Skeleton class="h-4 flex-1" />
          <Skeleton class="h-4 w-12" />
          <Skeleton class="h-4 w-16" />
        </div>
      </div>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Skeleton
    },
    template: '<Skeleton class="h-4 w-48" />'
  })
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-light'
  },
  render: Default.render
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-dark'
  },
  render: Default.render
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Skeleton
    },
    template: \`
      <div class="w-full max-w-md space-y-4 rounded-lg border border-border bg-card p-4">
        <div class="flex items-center justify-between gap-3">
          <div class="flex items-center gap-2">
            <Skeleton class="size-4 rounded-sm" />
            <Skeleton class="h-5 w-32" />
          </div>
          <Skeleton class="size-8 rounded-md" />
        </div>
        <Skeleton class="h-1 w-full" />
        <div class="space-y-2">
          <div v-for="n in 3" :key="n" class="flex items-center justify-between gap-3">
            <Skeleton class="h-4 w-28" />
            <Skeleton class="h-5 w-12 rounded-full" />
          </div>
        </div>
        <Skeleton class="h-9 w-full" />
      </div>
    \`
  })
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Skeleton
    },
    template: \`
      <div class="w-full max-w-lg space-y-2">
        <div v-for="n in 4" :key="n" class="flex gap-4">
          <Skeleton class="h-4 flex-1" />
          <Skeleton class="h-4 w-12" />
          <Skeleton class="h-4 w-16" />
        </div>
      </div>
    \`
  })
}`,...r.parameters?.docs?.source}}};const h=["Default","Light","Dark","ListLoading","TableRows"];export{a as Dark,e as Default,n as Light,l as ListLoading,r as TableRows,h as __namedExportsOrder,w as default};
