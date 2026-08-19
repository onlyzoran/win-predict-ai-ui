import{z as P,p as A}from"./index-D94U3CJS.js";import{d as o,c as i,a as d,n as c,u as l,o as u}from"./iframe-oKRL-TxQ.js";import{c as p}from"./cn-DaT-yT0k.js";import"./preload-helper-BvwbUWYJ.js";const y=o({__name:"Card",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(e){const r=e;return(a,s)=>(u(),i("div",{"data-slot":"card",class:c(l(p)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",r.class))},[d(a.$slots,"default")],2))}});y.__docgenInfo={exportName:"default",displayName:"Card",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/card/Card.vue"]};const _=o({__name:"CardContent",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(e){const r=e;return(a,s)=>(u(),i("div",{"data-slot":"card-content",class:c(l(p)("px-6",r.class))},[d(a.$slots,"default")],2))}});_.__docgenInfo={exportName:"default",displayName:"CardContent",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/card/CardContent.vue"]};const w=o({__name:"CardFooter",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(e){const r=e;return(a,s)=>(u(),i("div",{"data-slot":"card-footer",class:c(l(p)("flex items-center px-6 [.border-t]:pt-6",r.class))},[d(a.$slots,"default")],2))}});w.__docgenInfo={exportName:"default",displayName:"CardFooter",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/card/CardFooter.vue"]};const S=o({__name:"CardHeader",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(e){const r=e;return(a,s)=>(u(),i("div",{"data-slot":"card-header",class:c(l(p)("@container/card-header grid auto-rows-min grid-rows-[minmax(2rem,auto)_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",r.class))},[d(a.$slots,"default")],2))}});S.__docgenInfo={exportName:"default",displayName:"CardHeader",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/card/CardHeader.vue"]};const k=o({__name:"CardTitle",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(e){const r=e;return(a,s)=>(u(),i("h3",{"data-slot":"card-title",class:c(l(p)("leading-none font-semibold",r.class))},[d(a.$slots,"default")],2))}});k.__docgenInfo={exportName:"default",displayName:"CardTitle",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/card/CardTitle.vue"]};const L={Card:y,CardContent:_,CardFooter:w,CardHeader:S,CardTitle:k,IconBallFootball:A,IconPin:P},v=[{name:"Los Angeles Dodgers",pct:"8%"},{name:"New York Yankees",pct:"6%"},{name:"Houston Astros",pct:"4%"},{name:"Atlanta Braves",pct:"4%"},{name:"Philadelphia Phillies",pct:"4%"},{name:"Others (25)",pct:"74%"}];function I(e=!0){const r=v.map((s,T)=>`
        <div class="flex items-center justify-between px-4 py-2">
          <span class="font-medium">${s.name}</span>
          <span class="inline-flex items-center justify-center rounded-full border border-transparent bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">${s.pct}</span>
        </div>
        ${T<v.length-1?'<div class="bg-border h-px w-full shrink-0" role="separator"></div>':""}
      `).join("");return`
    <Card class="w-full p-0 sm:max-w-xs sm:min-w-3xs">
      <CardHeader class="px-4 pt-4">
        <div class="flex min-h-8 items-center justify-between">
          <CardTitle class="flex items-center gap-2">
            <IconBallFootball aria-hidden="true" class="size-4" />
            MLB World Series 26/27
          </CardTitle>
          ${e?`<button
            type="button"
            class="rounded-md px-2 py-1 text-sm font-medium uppercase text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
            aria-label="Pin tournament"
          >
            <IconPin aria-hidden="true" />
          </button>`:""}
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
        ${r}
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
  `}const D={title:"Win Predict AI / UI / Card",component:y,tags:["autodocs"]};function t(e=!0){return{components:L,template:I(e)}}const m={render:()=>t()},n={render:()=>t(!1)},g={globals:{theme:"zinc-light"},render:()=>t()},f={globals:{theme:"zinc-dark"},render:()=>t()},h={globals:{theme:"slate-teal-light"},render:()=>t()},b={globals:{theme:"slate-teal-dark"},render:()=>t()},C={globals:{theme:"claude-plus-light"},render:()=>t()},x={globals:{theme:"claude-plus-dark"},render:()=>t()};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => renderLeaguePredictionCard()
}`,...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => renderLeaguePredictionCard(false)
}`,...n.parameters?.docs?.source},description:{story:"Без pin в header — высота строки заголовка совпадает с Default (min-h-8 под action).",...n.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'zinc-light'
  },
  render: () => renderLeaguePredictionCard()
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'zinc-dark'
  },
  render: () => renderLeaguePredictionCard()
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-light'
  },
  render: () => renderLeaguePredictionCard()
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-dark'
  },
  render: () => renderLeaguePredictionCard()
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'claude-plus-light'
  },
  render: () => renderLeaguePredictionCard()
}`,...C.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'claude-plus-dark'
  },
  render: () => renderLeaguePredictionCard()
}`,...x.parameters?.docs?.source}}};const N=["Default","WithoutHeaderAction","ZincLight","ZincDark","SlateTealLight","SlateTealDark","ClaudePlusLight","ClaudePlusDark"];export{x as ClaudePlusDark,C as ClaudePlusLight,m as Default,b as SlateTealDark,h as SlateTealLight,n as WithoutHeaderAction,f as ZincDark,g as ZincLight,N as __namedExportsOrder,D as default};
