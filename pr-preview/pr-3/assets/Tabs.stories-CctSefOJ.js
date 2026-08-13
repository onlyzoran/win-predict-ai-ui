import{d as m,k as P,j as E,w as H,o as g,l as T,p,b as B,e,r as v,h,n as z,H as K,g as A,A as G,O as U,q as W,f as J,K as Q,I as X,C as L}from"./iframe-BuI7zV7p.js";import{l as Y,f as O,b as Z,P as y,m as ee,w as te,n as ae,a as se,u as k,c as oe,d as re,R as ne,e as le,h as V,k as R}from"./cn-CeOn-Pdh.js";import{f as ie,g as M}from"./index-CiD9DIaN.js";import"./preload-helper-CC8koZlP.js";var ue=m({__name:"RovingFocusItem",props:{tabStopId:{type:String,required:!1},focusable:{type:Boolean,required:!1,default:!0},active:{type:Boolean,required:!1},allowShiftKey:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(r){const t=r,a=Y(),s=O(),i=h(()=>t.tabStopId||s),d=h(()=>a.currentTabStopId.value===i.value),{getItems:c,CollectionItem:n}=Z();P(()=>{t.focusable&&a.onFocusableItemAdd()}),E(()=>{t.focusable&&a.onFocusableItemRemove()}),H(()=>t.focusable,(o,l)=>{o!==l&&(o?a.onFocusableItemAdd():a.onFocusableItemRemove())});function b(o){if(o.key==="Tab"&&o.shiftKey){a.onItemShiftTab();return}if(o.target!==o.currentTarget)return;const l=ee(o,a.orientation.value,a.dir.value);if(l!==void 0){if(o.metaKey||o.ctrlKey||o.altKey||!t.allowShiftKey&&o.shiftKey)return;o.preventDefault();let u=[...c().map(f=>f.ref).filter(f=>f.dataset.disabled!=="")];if(l==="last")u.reverse();else if(l==="prev"||l==="next"){l==="prev"&&u.reverse();const f=u.indexOf(o.currentTarget);u=a.loop.value?te(u,f+1):u.slice(f+1)}z(()=>ae(u))}}return(o,l)=>(g(),T(e(n),null,{default:p(()=>[B(e(y),{tabindex:d.value?0:-1,"data-orientation":e(a).orientation.value,"data-active":o.active?"":void 0,"data-disabled":o.focusable?void 0:"",as:o.as,"as-child":o.asChild,onMousedown:l[0]||(l[0]=u=>{o.focusable?e(a).onItemFocus(i.value):u.preventDefault()}),onFocus:l[1]||(l[1]=u=>e(a).onItemFocus(i.value)),onKeydown:b},{default:p(()=>[v(o.$slots,"default")]),_:3},8,["tabindex","data-orientation","data-active","data-disabled","as","as-child"])]),_:3}))}}),de=ue;const[$,ce]=oe("TabsRoot");var be=m({__name:"TabsRoot",props:{defaultValue:{type:null,required:!1},orientation:{type:String,required:!1,default:"horizontal"},dir:{type:String,required:!1},activationMode:{type:String,required:!1,default:"automatic"},modelValue:{type:null,required:!1},unmountOnHide:{type:Boolean,required:!1,default:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["update:modelValue"],setup(r,{emit:t}){const a=r,s=t,{orientation:i,unmountOnHide:d,dir:c}=K(a),n=se(c);k();const b=ie(a,"modelValue",s,{defaultValue:a.defaultValue,passive:a.modelValue===void 0}),o=A(),l=G(new Set);return ce({modelValue:b,changeModelValue:u=>{b.value=u},orientation:i,dir:n,unmountOnHide:d,activationMode:a.activationMode,baseId:O(void 0,"reka-tabs"),tabsList:o,contentIds:l,registerContent:u=>{l.value=new Set([...l.value,u])},unregisterContent:u=>{const f=new Set(l.value);f.delete(u),l.value=f}}),(u,f)=>(g(),T(e(y),{dir:e(n),"data-orientation":e(i),"as-child":u.asChild,as:u.as},{default:p(()=>[v(u.$slots,"default",{modelValue:e(b)})]),_:3},8,["dir","data-orientation","as-child","as"]))}}),pe=be;function D(r,t){return`${r}-trigger-${t}`}function j(r,t){return`${r}-content-${t}`}var fe=m({__name:"TabsContent",props:{value:{type:[String,Number],required:!0},forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(r){const t=r,{forwardRef:a}=k(),s=$(),i=h(()=>D(s.baseId,t.value)),d=h(()=>j(s.baseId,t.value)),c=h(()=>t.value===s.modelValue.value),n=A(c.value);return P(()=>{s.registerContent(t.value),requestAnimationFrame(()=>{n.value=!1})}),U(()=>{s.unregisterContent(t.value)}),(b,o)=>(g(),T(e(re),{present:b.forceMount||c.value,"force-mount":""},{default:p(({present:l})=>[B(e(y),{id:d.value,ref:e(a),"as-child":b.asChild,as:b.as,role:"tabpanel","data-state":c.value?"active":"inactive","data-orientation":e(s).orientation.value,"aria-labelledby":i.value,hidden:!l,tabindex:"0",style:W({animationDuration:n.value?"0s":void 0})},{default:p(()=>[!e(s).unmountOnHide.value||l?v(b.$slots,"default",{key:0}):J("v-if",!0)]),_:2},1032,["id","as-child","as","data-state","data-orientation","aria-labelledby","hidden","style"])]),_:3},8,["present"]))}}),me=fe,ge=m({__name:"TabsList",props:{loop:{type:Boolean,required:!1,default:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(r){const t=r,{loop:a}=K(t),{forwardRef:s,currentElement:i}=k(),d=$();return d.tabsList=i,(c,n)=>(g(),T(e(ne),{"as-child":"",orientation:e(d).orientation.value,dir:e(d).dir.value,loop:e(a)},{default:p(()=>[B(e(y),{ref:e(s),role:"tablist","as-child":c.asChild,as:c.as,"aria-orientation":e(d).orientation.value},{default:p(()=>[v(c.$slots,"default")]),_:3},8,["as-child","as","aria-orientation"])]),_:3},8,["orientation","dir","loop"]))}}),Te=ge,ve=m({__name:"TabsTrigger",props:{value:{type:[String,Number],required:!0},disabled:{type:Boolean,required:!1,default:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(r){const t=r,{forwardRef:a}=k(),s=$(),i=h(()=>D(s.baseId,t.value)),d=h(()=>s.contentIds.value.has(t.value)?j(s.baseId,t.value):void 0),c=h(()=>t.value===s.modelValue.value);return(n,b)=>(g(),T(e(de),{"as-child":"",focusable:!n.disabled,active:c.value},{default:p(()=>[B(e(y),{id:i.value,ref:e(a),role:"tab",type:n.as==="button"?"button":void 0,as:n.as,"as-child":n.asChild,"aria-selected":c.value?"true":"false","aria-controls":d.value,"data-state":c.value?"active":"inactive",disabled:n.disabled,"data-disabled":n.disabled?"":void 0,"data-orientation":e(s).orientation.value,onMousedown:b[0]||(b[0]=X(o=>{!n.disabled&&o.ctrlKey===!1?e(s).changeModelValue(n.value):o.preventDefault()},["left"])),onKeydown:b[1]||(b[1]=Q(o=>e(s).changeModelValue(n.value),["enter","space"])),onFocus:b[2]||(b[2]=()=>{const o=e(s).activationMode!=="manual";!c.value&&!n.disabled&&o&&e(s).changeModelValue(n.value)})},{default:p(()=>[v(n.$slots,"default")]),_:3},8,["id","type","as","as-child","aria-selected","aria-controls","data-state","disabled","data-disabled","data-orientation"])]),_:3},8,["focusable","active"]))}}),he=ve;const C=m({__name:"Tabs",props:{defaultValue:{},orientation:{default:"horizontal"},dir:{},activationMode:{},modelValue:{},unmountOnHide:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["update:modelValue"],setup(r,{emit:t}){const i=le(r,t);return(d,c)=>(g(),T(e(pe),L({"data-slot":"tabs"},e(i)),{default:p(()=>[v(d.$slots,"default")]),_:3},16))}});C.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"orientation",defaultValue:{func:!1,value:"'horizontal'"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/tabs/Tabs.vue"]};const _=m({__name:"TabsList",props:{loop:{type:Boolean},asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},setup(r){const t=r,a=M(t,"class"),s=V(a);return(i,d)=>(g(),T(e(Te),L({"data-slot":"tabs-list"},e(s),{class:e(R)("inline-flex h-9 w-full max-w-full items-center justify-start gap-1 overflow-x-auto rounded-lg bg-muted p-1 text-muted-foreground [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",t.class)}),{default:p(()=>[v(i.$slots,"default")]),_:3},16,["class"]))}});_.__docgenInfo={exportName:"default",displayName:"TabsList",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/tabs/TabsList.vue"]};const w=m({__name:"TabsTrigger",props:{value:{},disabled:{type:Boolean},asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},setup(r){const t=r,a=M(t,"class"),s=V(a);return(i,d)=>(g(),T(e(he),L({"data-slot":"tabs-trigger"},e(s),{class:e(R)("inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",t.class)}),{default:p(()=>[v(i.$slots,"default")]),_:3},16,["class"]))}});w.__docgenInfo={exportName:"default",displayName:"TabsTrigger",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/tabs/TabsTrigger.vue"]};const I=m({__name:"TabsContent",props:{value:{},forceMount:{type:Boolean},asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},setup(r){const t=r,a=M(t,"class"),s=V(a);return(i,d)=>(g(),T(e(me),L({"data-slot":"tabs-content"},e(s),{class:e(R)("mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",t.class)}),{default:p(()=>[v(i.$slots,"default")]),_:3},16,["class"]))}});I.__docgenInfo={exportName:"default",displayName:"TabsContent",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/tabs/TabsContent.vue"]};const Ie={title:"Win Predict AI / UI / Tabs",component:C,tags:["autodocs"]};function N(){return`
    <Tabs default-value="overview" class="w-full max-w-md">
      <TabsList aria-label="Example tabs">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="stats">Stats</TabsTrigger>
        <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" class="rounded-lg border border-border bg-card p-4 text-card-foreground">
        <p class="text-sm text-muted-foreground">General information for the selected item.</p>
      </TabsContent>
      <TabsContent value="stats" class="rounded-lg border border-border bg-card p-4 text-card-foreground">
        <p class="text-sm text-muted-foreground">Metrics and performance data.</p>
      </TabsContent>
      <TabsContent value="disabled" class="rounded-lg border border-border bg-card p-4 text-card-foreground">
        <p class="text-sm text-muted-foreground">This panel is not reachable while disabled.</p>
      </TabsContent>
    </Tabs>
  `}const x={render:()=>({components:{Tabs:C,TabsList:_,TabsTrigger:w,TabsContent:I},template:N()})},S={globals:{theme:"light"},render:()=>({components:{Tabs:C,TabsList:_,TabsTrigger:w,TabsContent:I},template:N()})},q={globals:{theme:"dark"},render:()=>({components:{Tabs:C,TabsList:_,TabsTrigger:w,TabsContent:I},template:N()})},F={render:()=>({components:{Tabs:C,TabsList:_,TabsTrigger:w,TabsContent:I},template:`
      <Tabs default-value="tab-1" class="w-56">
        <TabsList aria-label="Scrollable tabs">
          <TabsTrigger value="tab-1">First</TabsTrigger>
          <TabsTrigger value="tab-2">Second tab</TabsTrigger>
          <TabsTrigger value="tab-3">Third tab</TabsTrigger>
          <TabsTrigger value="tab-4">Fourth tab</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1" class="text-sm text-muted-foreground">Content for the first tab.</TabsContent>
        <TabsContent value="tab-2" class="text-sm text-muted-foreground">Content for the second tab.</TabsContent>
        <TabsContent value="tab-3" class="text-sm text-muted-foreground">Content for the third tab.</TabsContent>
        <TabsContent value="tab-4" class="text-sm text-muted-foreground">Content for the fourth tab.</TabsContent>
      </Tabs>
    `})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Tabs,
      TabsList,
      TabsTrigger,
      TabsContent
    },
    template: tabsTemplate()
  })
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'light'
  },
  render: () => ({
    components: {
      Tabs,
      TabsList,
      TabsTrigger,
      TabsContent
    },
    template: tabsTemplate()
  })
}`,...S.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'dark'
  },
  render: () => ({
    components: {
      Tabs,
      TabsList,
      TabsTrigger,
      TabsContent
    },
    template: tabsTemplate()
  })
}`,...q.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Tabs,
      TabsList,
      TabsTrigger,
      TabsContent
    },
    template: \`
      <Tabs default-value="tab-1" class="w-56">
        <TabsList aria-label="Scrollable tabs">
          <TabsTrigger value="tab-1">First</TabsTrigger>
          <TabsTrigger value="tab-2">Second tab</TabsTrigger>
          <TabsTrigger value="tab-3">Third tab</TabsTrigger>
          <TabsTrigger value="tab-4">Fourth tab</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1" class="text-sm text-muted-foreground">Content for the first tab.</TabsContent>
        <TabsContent value="tab-2" class="text-sm text-muted-foreground">Content for the second tab.</TabsContent>
        <TabsContent value="tab-3" class="text-sm text-muted-foreground">Content for the third tab.</TabsContent>
        <TabsContent value="tab-4" class="text-sm text-muted-foreground">Content for the fourth tab.</TabsContent>
      </Tabs>
    \`
  })
}`,...F.parameters?.docs?.source}}};const xe=["Default","Light","Dark","NarrowScroll"];export{q as Dark,x as Default,S as Light,F as NarrowScroll,xe as __namedExportsOrder,Ie as default};
