import{b as N,z as E,p as P}from"./index-BHzOPFEc.js";import{d as t,c as s,a as n,n as o,u as d,o as i}from"./iframe-DVs0euI0.js";import{c as l}from"./cn-DaT-yT0k.js";import"./preload-helper-BvwbUWYJ.js";const W=t({__name:"Card",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(a){const e=a;return(r,c)=>(i(),s("div",{"data-slot":"card",class:o(d(l)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",e.class))},[n(r.$slots,"default")],2))}});W.__docgenInfo={exportName:"default",displayName:"Card",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/card/Card.vue"]};const I=t({__name:"CardAction",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(a){const e=a;return(r,c)=>(i(),s("div",{"data-slot":"card-action",class:o(d(l)("col-start-2 row-span-2 row-start-1 self-start justify-self-end",e.class))},[n(r.$slots,"default")],2))}});I.__docgenInfo={exportName:"default",displayName:"CardAction",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/card/CardAction.vue"]};const j=t({__name:"CardContent",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(a){const e=a;return(r,c)=>(i(),s("div",{"data-slot":"card-content",class:o(d(l)("px-6",e.class))},[n(r.$slots,"default")],2))}});j.__docgenInfo={exportName:"default",displayName:"CardContent",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/card/CardContent.vue"]};const L=t({__name:"CardDescription",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(a){const e=a;return(r,c)=>(i(),s("p",{"data-slot":"card-description",class:o(d(l)("text-muted-foreground text-sm",e.class))},[n(r.$slots,"default")],2))}});L.__docgenInfo={exportName:"default",displayName:"CardDescription",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/card/CardDescription.vue"]};const O=t({__name:"CardFooter",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(a){const e=a;return(r,c)=>(i(),s("div",{"data-slot":"card-footer",class:o(d(l)("flex items-center px-6 [.border-t]:pt-6",e.class))},[n(r.$slots,"default")],2))}});O.__docgenInfo={exportName:"default",displayName:"CardFooter",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/card/CardFooter.vue"]};const $=t({__name:"CardHeader",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(a){const e=a;return(r,c)=>(i(),s("div",{"data-slot":"card-header",class:o(d(l)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",e.class))},[n(r.$slots,"default")],2))}});$.__docgenInfo={exportName:"default",displayName:"CardHeader",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/card/CardHeader.vue"]};const B=t({__name:"CardTitle",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(a){const e=a;return(r,c)=>(i(),s("h3",{"data-slot":"card-title",class:o(d(l)("leading-none font-semibold",e.class))},[n(r.$slots,"default")],2))}});B.__docgenInfo={exportName:"default",displayName:"CardTitle",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/card/CardTitle.vue"]};const h={Card:W,CardAction:I,CardContent:j,CardDescription:L,CardFooter:O,CardHeader:$,CardTitle:B,IconBallFootball:P,IconPin:E,IconPencil:N},F=[{name:"Los Angeles Dodgers",pct:"17%"},{name:"New York Yankees",pct:"7%"},{name:"Milwaukee Brewers",pct:"6%"},{name:"Others (25)",pct:"59%"}];function z(){return`
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
            <IconPin aria-hidden="true" class="size-4" />
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
        ${F.map((e,r)=>`
        <div class="flex items-center justify-between px-4 py-2">
          <span class="font-medium">${e.name}</span>
          <span class="inline-flex items-center justify-center rounded-full border border-transparent bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">${e.pct}</span>
        </div>
        ${r<F.length-1?'<div class="bg-border h-px w-full shrink-0" role="separator"></div>':""}
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
  `}const G={title:"Win Predict AI / UI / Card",component:W,tags:["autodocs"]},p={render:()=>({components:h,template:z()})},b={globals:{theme:"slate-teal-light"},render:p.render},x={globals:{theme:"slate-teal-dark"},render:p.render},m={render:()=>({components:h,template:`
      <Card class="w-full max-w-sm min-h-24" aria-label="Empty card surface">
        <CardContent class="py-0">
          <p class="text-sm text-muted-foreground">Placeholder surface for loading or empty states.</p>
        </CardContent>
      </Card>
    `})},y={globals:{theme:"slate-teal-light"},render:m.render},w={globals:{theme:"slate-teal-dark"},render:m.render},u={render:()=>({components:h,template:`
      <Card class="w-full max-w-sm">
        <CardHeader>
          <CardTitle>World Series win odds</CardTitle>
          <CardDescription>Projected from simulation runs for the current season.</CardDescription>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-foreground">Los Angeles Dodgers lead the field at 17%.</p>
        </CardContent>
      </Card>
    `})},v={globals:{theme:"slate-teal-light"},render:u.render},_={globals:{theme:"slate-teal-dark"},render:u.render},g={render:()=>({components:h,template:`
      <Card class="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Standings snapshot</CardTitle>
          <CardDescription>Updated after the latest completed games.</CardDescription>
        </CardHeader>
        <CardContent>
          <dl class="grid grid-cols-2 gap-3 text-sm">
            <div>
              <dt class="text-muted-foreground">Leader</dt>
              <dd class="font-medium text-foreground">Dodgers</dd>
            </div>
            <div>
              <dt class="text-muted-foreground">Games played</dt>
              <dd class="font-medium text-foreground">140</dd>
            </div>
          </dl>
        </CardContent>
        <CardFooter class="border-t">
          <p class="text-xs text-muted-foreground">Source: internal simulation pipeline</p>
        </CardFooter>
      </Card>
    `})},D={globals:{theme:"slate-teal-light"},render:g.render},S={globals:{theme:"slate-teal-dark"},render:g.render},f={render:()=>({components:h,template:`
      <Card class="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Matchup card</CardTitle>
          <CardDescription>Dodgers vs Yankees — projected tonight.</CardDescription>
          <CardAction>
            <button
              type="button"
              class="inline-flex size-8 items-center justify-center rounded-md border border-border bg-background text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
              aria-label="Edit card"
            >
              <IconPencil aria-hidden="true" class="size-4" />
            </button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-foreground">Home win probability: <span class="font-medium">54%</span></p>
        </CardContent>
      </Card>
    `})},k={globals:{theme:"slate-teal-light"},render:f.render},H={globals:{theme:"slate-teal-dark"},render:f.render},C={render:()=>({components:h,template:`
      <Card class="w-full max-w-sm">
        <CardHeader class="border-b">
          <CardTitle>Season progress</CardTitle>
          <CardDescription>Major League Baseball — 140 days elapsed.</CardDescription>
        </CardHeader>
      </Card>
    `})},T={globals:{theme:"slate-teal-light"},render:C.render},A={globals:{theme:"slate-teal-dark"},render:C.render};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: cardComponents,
    template: leaguePredictionCardTemplate()
  })
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-light'
  },
  render: Default.render
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-dark'
  },
  render: Default.render
}`,...x.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: cardComponents,
    template: \`
      <Card class="w-full max-w-sm min-h-24" aria-label="Empty card surface">
        <CardContent class="py-0">
          <p class="text-sm text-muted-foreground">Placeholder surface for loading or empty states.</p>
        </CardContent>
      </Card>
    \`
  })
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-light'
  },
  render: Empty.render
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-dark'
  },
  render: Empty.render
}`,...w.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: cardComponents,
    template: \`
      <Card class="w-full max-w-sm">
        <CardHeader>
          <CardTitle>World Series win odds</CardTitle>
          <CardDescription>Projected from simulation runs for the current season.</CardDescription>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-foreground">Los Angeles Dodgers lead the field at 17%.</p>
        </CardContent>
      </Card>
    \`
  })
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-light'
  },
  render: WithHeaderDescription.render
}`,...v.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-dark'
  },
  render: WithHeaderDescription.render
}`,..._.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: cardComponents,
    template: \`
      <Card class="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Standings snapshot</CardTitle>
          <CardDescription>Updated after the latest completed games.</CardDescription>
        </CardHeader>
        <CardContent>
          <dl class="grid grid-cols-2 gap-3 text-sm">
            <div>
              <dt class="text-muted-foreground">Leader</dt>
              <dd class="font-medium text-foreground">Dodgers</dd>
            </div>
            <div>
              <dt class="text-muted-foreground">Games played</dt>
              <dd class="font-medium text-foreground">140</dd>
            </div>
          </dl>
        </CardContent>
        <CardFooter class="border-t">
          <p class="text-xs text-muted-foreground">Source: internal simulation pipeline</p>
        </CardFooter>
      </Card>
    \`
  })
}`,...g.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-light'
  },
  render: WithFooter.render
}`,...D.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-dark'
  },
  render: WithFooter.render
}`,...S.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: cardComponents,
    template: \`
      <Card class="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Matchup card</CardTitle>
          <CardDescription>Dodgers vs Yankees — projected tonight.</CardDescription>
          <CardAction>
            <button
              type="button"
              class="inline-flex size-8 items-center justify-center rounded-md border border-border bg-background text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
              aria-label="Edit card"
            >
              <IconPencil aria-hidden="true" class="size-4" />
            </button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-foreground">Home win probability: <span class="font-medium">54%</span></p>
        </CardContent>
      </Card>
    \`
  })
}`,...f.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-light'
  },
  render: WithAction.render
}`,...k.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-dark'
  },
  render: WithAction.render
}`,...H.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: cardComponents,
    template: \`
      <Card class="w-full max-w-sm">
        <CardHeader class="border-b">
          <CardTitle>Season progress</CardTitle>
          <CardDescription>Major League Baseball — 140 days elapsed.</CardDescription>
        </CardHeader>
      </Card>
    \`
  })
}`,...C.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-light'
  },
  render: HeaderOnly.render
}`,...T.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-dark'
  },
  render: HeaderOnly.render
}`,...A.parameters?.docs?.source}}};const R=["Default","Light","Dark","Empty","EmptyLight","EmptyDark","WithHeaderDescription","WithHeaderDescriptionLight","WithHeaderDescriptionDark","WithFooter","WithFooterLight","WithFooterDark","WithAction","WithActionLight","WithActionDark","HeaderOnly","HeaderOnlyLight","HeaderOnlyDark"];export{x as Dark,p as Default,m as Empty,w as EmptyDark,y as EmptyLight,C as HeaderOnly,A as HeaderOnlyDark,T as HeaderOnlyLight,b as Light,f as WithAction,H as WithActionDark,k as WithActionLight,g as WithFooter,S as WithFooterDark,D as WithFooterLight,u as WithHeaderDescription,_ as WithHeaderDescriptionDark,v as WithHeaderDescriptionLight,R as __namedExportsOrder,G as default};
