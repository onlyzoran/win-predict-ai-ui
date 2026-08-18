import{b as L}from"./index-CIMRR5hR.js";import{d as t,c as s,a as n,n as o,u as d,o as c}from"./iframe-B4zZgiif.js";import{c as l}from"./cn-DaT-yT0k.js";import"./preload-helper-BvwbUWYJ.js";const A=t({__name:"Card",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(e){const r=e;return(a,i)=>(c(),s("div",{"data-slot":"card",class:o(d(l)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",r.class))},[n(a.$slots,"default")],2))}});A.__docgenInfo={exportName:"default",displayName:"Card",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/card/Card.vue"]};const v=t({__name:"CardAction",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(e){const r=e;return(a,i)=>(c(),s("div",{"data-slot":"card-action",class:o(d(l)("col-start-2 row-span-2 row-start-1 self-start justify-self-end",r.class))},[n(a.$slots,"default")],2))}});v.__docgenInfo={exportName:"default",displayName:"CardAction",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/card/CardAction.vue"]};const H=t({__name:"CardContent",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(e){const r=e;return(a,i)=>(c(),s("div",{"data-slot":"card-content",class:o(d(l)("px-6",r.class))},[n(a.$slots,"default")],2))}});H.__docgenInfo={exportName:"default",displayName:"CardContent",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/card/CardContent.vue"]};const F=t({__name:"CardDescription",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(e){const r=e;return(a,i)=>(c(),s("p",{"data-slot":"card-description",class:o(d(l)("text-muted-foreground text-sm",r.class))},[n(a.$slots,"default")],2))}});F.__docgenInfo={exportName:"default",displayName:"CardDescription",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/card/CardDescription.vue"]};const I=t({__name:"CardFooter",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(e){const r=e;return(a,i)=>(c(),s("div",{"data-slot":"card-footer",class:o(d(l)("flex items-center px-6 [.border-t]:pt-6",r.class))},[n(a.$slots,"default")],2))}});I.__docgenInfo={exportName:"default",displayName:"CardFooter",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/card/CardFooter.vue"]};const W=t({__name:"CardHeader",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(e){const r=e;return(a,i)=>(c(),s("div",{"data-slot":"card-header",class:o(d(l)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",r.class))},[n(a.$slots,"default")],2))}});W.__docgenInfo={exportName:"default",displayName:"CardHeader",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/card/CardHeader.vue"]};const j=t({__name:"CardTitle",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(e){const r=e;return(a,i)=>(c(),s("h3",{"data-slot":"card-title",class:o(d(l)("leading-none font-semibold",r.class))},[n(a.$slots,"default")],2))}});j.__docgenInfo={exportName:"default",displayName:"CardTitle",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/card/CardTitle.vue"]};const f={Card:A,CardAction:v,CardContent:H,CardDescription:F,CardFooter:I,CardHeader:W,CardTitle:j,IconPencil:L},B={title:"Win Predict AI / UI / Card",component:A,tags:["autodocs"]},p={render:()=>({components:f,template:`
      <Card class="w-full max-w-sm">
        <CardHeader>
          <CardTitle>World Series win odds</CardTitle>
          <CardDescription>Projected from simulation runs for the current season.</CardDescription>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-foreground">Los Angeles Dodgers lead the field at 17%.</p>
        </CardContent>
      </Card>
    `})},h={globals:{theme:"slate-teal-light"},render:p.render},b={globals:{theme:"slate-teal-dark"},render:p.render},m={render:()=>({components:f,template:`
      <Card class="w-full max-w-sm min-h-24" aria-label="Empty card surface">
        <CardContent class="py-0">
          <p class="text-sm text-muted-foreground">Placeholder surface for loading or empty states.</p>
        </CardContent>
      </Card>
    `})},x={globals:{theme:"slate-teal-light"},render:m.render},y={globals:{theme:"slate-teal-dark"},render:m.render},u={render:()=>({components:f,template:`
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
    `})},_={globals:{theme:"slate-teal-light"},render:u.render},w={globals:{theme:"slate-teal-dark"},render:u.render},C={render:()=>({components:f,template:`
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
    `})},D={globals:{theme:"slate-teal-light"},render:C.render},S={globals:{theme:"slate-teal-dark"},render:C.render},g={render:()=>({components:f,template:`
      <Card class="w-full max-w-sm">
        <CardHeader class="border-b">
          <CardTitle>Season progress</CardTitle>
          <CardDescription>Major League Baseball — 140 days elapsed.</CardDescription>
        </CardHeader>
      </Card>
    `})},T={globals:{theme:"slate-teal-light"},render:g.render},k={globals:{theme:"slate-teal-dark"},render:g.render};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-light'
  },
  render: Default.render
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-dark'
  },
  render: Default.render
}`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-light'
  },
  render: Empty.render
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-dark'
  },
  render: Empty.render
}`,...y.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-light'
  },
  render: WithFooter.render
}`,..._.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-dark'
  },
  render: WithFooter.render
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-light'
  },
  render: WithAction.render
}`,...D.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-dark'
  },
  render: WithAction.render
}`,...S.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-light'
  },
  render: HeaderOnly.render
}`,...T.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-dark'
  },
  render: HeaderOnly.render
}`,...k.parameters?.docs?.source}}};const P=["Default","Light","Dark","Empty","EmptyLight","EmptyDark","WithFooter","WithFooterLight","WithFooterDark","WithAction","WithActionLight","WithActionDark","HeaderOnly","HeaderOnlyLight","HeaderOnlyDark"];export{b as Dark,p as Default,m as Empty,y as EmptyDark,x as EmptyLight,g as HeaderOnly,k as HeaderOnlyDark,T as HeaderOnlyLight,h as Light,C as WithAction,S as WithActionDark,D as WithActionLight,u as WithFooter,w as WithFooterDark,_ as WithFooterLight,P as __namedExportsOrder,B as default};
