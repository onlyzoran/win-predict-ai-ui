import{z as k,p as T}from"./index-CTf1SE6u.js";import{d as t,c as n,a as o,n as i,u as l,o as d}from"./iframe-CuGMAQgI.js";import{c}from"./cn-DaT-yT0k.js";import"./preload-helper-BvwbUWYJ.js";const x=t({__name:"Card",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(a){const e=a;return(r,u)=>(d(),n("div",{"data-slot":"card",class:i(l(c)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",e.class))},[o(r.$slots,"default")],2))}});x.__docgenInfo={exportName:"default",displayName:"Card",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/card/Card.vue"]};const v=t({__name:"CardContent",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(a){const e=a;return(r,u)=>(d(),n("div",{"data-slot":"card-content",class:i(l(c)("px-6",e.class))},[o(r.$slots,"default")],2))}});v.__docgenInfo={exportName:"default",displayName:"CardContent",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/card/CardContent.vue"]};const _=t({__name:"CardFooter",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(a){const e=a;return(r,u)=>(d(),n("div",{"data-slot":"card-footer",class:i(l(c)("flex items-center px-6 [.border-t]:pt-6",e.class))},[o(r.$slots,"default")],2))}});_.__docgenInfo={exportName:"default",displayName:"CardFooter",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/card/CardFooter.vue"]};const w=t({__name:"CardHeader",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(a){const e=a;return(r,u)=>(d(),n("div",{"data-slot":"card-header",class:i(l(c)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",e.class))},[o(r.$slots,"default")],2))}});w.__docgenInfo={exportName:"default",displayName:"CardHeader",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/card/CardHeader.vue"]};const S=t({__name:"CardTitle",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(a){const e=a;return(r,u)=>(d(),n("h3",{"data-slot":"card-title",class:i(l(c)("leading-none font-semibold",e.class))},[o(r.$slots,"default")],2))}});S.__docgenInfo={exportName:"default",displayName:"CardTitle",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/card/CardTitle.vue"]};const P={Card:x,CardContent:v,CardFooter:_,CardHeader:w,CardTitle:S,IconBallFootball:T,IconPin:k},y=[{name:"Los Angeles Dodgers",pct:"8%"},{name:"New York Yankees",pct:"6%"},{name:"Houston Astros",pct:"4%"},{name:"Atlanta Braves",pct:"4%"},{name:"Philadelphia Phillies",pct:"4%"},{name:"Others (25)",pct:"74%"}];function I(){return`
    <Card class="w-full p-0 sm:max-w-xs sm:min-w-3xs">
      <CardHeader class="px-4 pt-4">
        <div class="flex justify-between">
          <CardTitle class="flex items-center gap-2">
            <IconBallFootball aria-hidden="true" class="size-4" />
            MLB World Series 26/27
          </CardTitle>
          <button
            type="button"
            class="rounded-md px-2 py-1 text-sm font-medium uppercase text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
            aria-label="Pin tournament"
          >
            <IconPin aria-hidden="true" />
          </button>
        </div>
        <div
          class="bg-primary/20 relative mt-4 h-1 w-full overflow-hidden rounded-full"
          role="progressbar"
          aria-valuenow="64"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="Season progress"
        >
          <div class="bg-primary h-full w-[64%] transition-all"></div>
        </div>
      </CardHeader>
      <CardContent class="p-0">
        ${y.map((e,r)=>`
        <div class="flex items-center justify-between px-4 py-2">
          <span class="font-medium">${e.name}</span>
          <span class="inline-flex items-center justify-center rounded-full border border-transparent bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">${e.pct}</span>
        </div>
        ${r<y.length-1?'<div class="bg-border h-px w-full shrink-0" role="separator"></div>':""}
      `).join("")}
      </CardContent>
      <CardFooter class="flex gap-2 px-4 pb-4">
        <button
          type="button"
          class="inline-flex h-9 flex-1 cursor-pointer items-center justify-center gap-2 rounded-md border bg-background px-4 py-2 text-sm font-medium shadow-xs transition-all hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
        >
          Preview
        </button>
        <button
          type="button"
          class="inline-flex h-9 flex-1 cursor-pointer items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
        >
          Details
        </button>
      </CardFooter>
    </Card>
  `}const j={title:"Win Predict AI / UI / Card",component:x,tags:["autodocs"]};function s(){return{components:P,template:I()}}const p={render:()=>s()},m={globals:{theme:"zinc-light"},render:()=>s()},g={globals:{theme:"zinc-dark"},render:()=>s()},f={globals:{theme:"slate-teal-light"},render:()=>s()},b={globals:{theme:"slate-teal-dark"},render:()=>s()},h={globals:{theme:"claude-plus-light"},render:()=>s()},C={globals:{theme:"claude-plus-dark"},render:()=>s()};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => renderLeaguePredictionCard()
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'zinc-light'
  },
  render: () => renderLeaguePredictionCard()
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'zinc-dark'
  },
  render: () => renderLeaguePredictionCard()
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-light'
  },
  render: () => renderLeaguePredictionCard()
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-dark'
  },
  render: () => renderLeaguePredictionCard()
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'claude-plus-light'
  },
  render: () => renderLeaguePredictionCard()
}`,...h.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'claude-plus-dark'
  },
  render: () => renderLeaguePredictionCard()
}`,...C.parameters?.docs?.source}}};const B=["Default","ZincLight","ZincDark","SlateTealLight","SlateTealDark","ClaudePlusLight","ClaudePlusDark"];export{C as ClaudePlusDark,h as ClaudePlusLight,p as Default,b as SlateTealDark,f as SlateTealLight,g as ZincDark,m as ZincLight,B as __namedExportsOrder,j as default};
