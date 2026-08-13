import{g as X,h as D,k as V,m as R,n as M}from"./index-CPbFOyR5.js";import{d as m,k as W,j as Y,w as Z,o as f,l as v,p,b as $,e,r as h,h as _,n as ee,H,g as G,A as ae,O as te,q as se,f as ne,K as re,I as oe,C as N}from"./iframe-m5B8GmXk.js";import{l as ie,f as U,b as le,P as w,m as de,w as ue,n as ce,a as be,u as O,c as pe,d as Te,R as ge,e as me,h as K,k as A}from"./cn-Cpz526km.js";import"./preload-helper-CC8koZlP.js";var fe=m({__name:"RovingFocusItem",props:{tabStopId:{type:String,required:!1},focusable:{type:Boolean,required:!1,default:!0},active:{type:Boolean,required:!1},allowShiftKey:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(r){const a=r,t=ie(),s=U(),l=_(()=>a.tabStopId||s),u=_(()=>t.currentTabStopId.value===l.value),{getItems:c,CollectionItem:o}=le();W(()=>{a.focusable&&t.onFocusableItemAdd()}),Y(()=>{a.focusable&&t.onFocusableItemRemove()}),Z(()=>a.focusable,(n,i)=>{n!==i&&(n?t.onFocusableItemAdd():t.onFocusableItemRemove())});function b(n){if(n.key==="Tab"&&n.shiftKey){t.onItemShiftTab();return}if(n.target!==n.currentTarget)return;const i=de(n,t.orientation.value,t.dir.value);if(i!==void 0){if(n.metaKey||n.ctrlKey||n.altKey||!a.allowShiftKey&&n.shiftKey)return;n.preventDefault();let d=[...c().map(T=>T.ref).filter(T=>T.dataset.disabled!=="")];if(i==="last")d.reverse();else if(i==="prev"||i==="next"){i==="prev"&&d.reverse();const T=d.indexOf(n.currentTarget);d=t.loop.value?ue(d,T+1):d.slice(T+1)}ee(()=>ce(d))}}return(n,i)=>(f(),v(e(o),null,{default:p(()=>[$(e(w),{tabindex:u.value?0:-1,"data-orientation":e(t).orientation.value,"data-active":n.active?"":void 0,"data-disabled":n.focusable?void 0:"",as:n.as,"as-child":n.asChild,onMousedown:i[0]||(i[0]=d=>{n.focusable?e(t).onItemFocus(l.value):d.preventDefault()}),onFocus:i[1]||(i[1]=d=>e(t).onItemFocus(l.value)),onKeydown:b},{default:p(()=>[h(n.$slots,"default")]),_:3},8,["tabindex","data-orientation","data-active","data-disabled","as","as-child"])]),_:3}))}}),ve=fe;const[E,he]=pe("TabsRoot");var Ce=m({__name:"TabsRoot",props:{defaultValue:{type:null,required:!1},orientation:{type:String,required:!1,default:"horizontal"},dir:{type:String,required:!1},activationMode:{type:String,required:!1,default:"automatic"},modelValue:{type:null,required:!1},unmountOnHide:{type:Boolean,required:!1,default:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["update:modelValue"],setup(r,{emit:a}){const t=r,s=a,{orientation:l,unmountOnHide:u,dir:c}=H(t),o=be(c);O();const b=X(t,"modelValue",s,{defaultValue:t.defaultValue,passive:t.modelValue===void 0}),n=G(),i=ae(new Set);return he({modelValue:b,changeModelValue:d=>{b.value=d},orientation:l,dir:o,unmountOnHide:u,activationMode:t.activationMode,baseId:U(void 0,"reka-tabs"),tabsList:n,contentIds:i,registerContent:d=>{i.value=new Set([...i.value,d])},unregisterContent:d=>{const T=new Set(i.value);T.delete(d),i.value=T}}),(d,T)=>(f(),v(e(w),{dir:e(o),"data-orientation":e(l),"as-child":d.asChild,as:d.as},{default:p(()=>[h(d.$slots,"default",{modelValue:e(b)})]),_:3},8,["dir","data-orientation","as-child","as"]))}}),Ie=Ce;function J(r,a){return`${r}-trigger-${a}`}function Q(r,a){return`${r}-content-${a}`}var ye=m({__name:"TabsContent",props:{value:{type:[String,Number],required:!0},forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(r){const a=r,{forwardRef:t}=O(),s=E(),l=_(()=>J(s.baseId,a.value)),u=_(()=>Q(s.baseId,a.value)),c=_(()=>a.value===s.modelValue.value),o=G(c.value);return W(()=>{s.registerContent(a.value),requestAnimationFrame(()=>{o.value=!1})}),te(()=>{s.unregisterContent(a.value)}),(b,n)=>(f(),v(e(Te),{present:b.forceMount||c.value,"force-mount":""},{default:p(({present:i})=>[$(e(w),{id:u.value,ref:e(t),"as-child":b.asChild,as:b.as,role:"tabpanel","data-state":c.value?"active":"inactive","data-orientation":e(s).orientation.value,"aria-labelledby":l.value,hidden:!i,tabindex:"0",style:se({animationDuration:o.value?"0s":void 0})},{default:p(()=>[!e(s).unmountOnHide.value||i?h(b.$slots,"default",{key:0}):ne("v-if",!0)]),_:2},1032,["id","as-child","as","data-state","data-orientation","aria-labelledby","hidden","style"])]),_:3},8,["present"]))}}),_e=ye,we=m({__name:"TabsList",props:{loop:{type:Boolean,required:!1,default:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(r){const a=r,{loop:t}=H(a),{forwardRef:s,currentElement:l}=O(),u=E();return u.tabsList=l,(c,o)=>(f(),v(e(ge),{"as-child":"",orientation:e(u).orientation.value,dir:e(u).dir.value,loop:e(t)},{default:p(()=>[$(e(w),{ref:e(s),role:"tablist","as-child":c.asChild,as:c.as,"aria-orientation":e(u).orientation.value},{default:p(()=>[h(c.$slots,"default")]),_:3},8,["as-child","as","aria-orientation"])]),_:3},8,["orientation","dir","loop"]))}}),xe=we,Se=m({__name:"TabsTrigger",props:{value:{type:[String,Number],required:!0},disabled:{type:Boolean,required:!1,default:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(r){const a=r,{forwardRef:t}=O(),s=E(),l=_(()=>J(s.baseId,a.value)),u=_(()=>s.contentIds.value.has(a.value)?Q(s.baseId,a.value):void 0),c=_(()=>a.value===s.modelValue.value);return(o,b)=>(f(),v(e(ve),{"as-child":"",focusable:!o.disabled,active:c.value},{default:p(()=>[$(e(w),{id:l.value,ref:e(t),role:"tab",type:o.as==="button"?"button":void 0,as:o.as,"as-child":o.asChild,"aria-selected":c.value?"true":"false","aria-controls":u.value,"data-state":c.value?"active":"inactive",disabled:o.disabled,"data-disabled":o.disabled?"":void 0,"data-orientation":e(s).orientation.value,onMousedown:b[0]||(b[0]=oe(n=>{!o.disabled&&n.ctrlKey===!1?e(s).changeModelValue(o.value):n.preventDefault()},["left"])),onKeydown:b[1]||(b[1]=re(n=>e(s).changeModelValue(o.value),["enter","space"])),onFocus:b[2]||(b[2]=()=>{const n=e(s).activationMode!=="manual";!c.value&&!o.disabled&&n&&e(s).changeModelValue(o.value)})},{default:p(()=>[h(o.$slots,"default")]),_:3},8,["id","type","as","as-child","aria-selected","aria-controls","data-state","disabled","data-disabled","data-orientation"])]),_:3},8,["focusable","active"]))}}),Pe=Se;const g=m({__name:"Tabs",props:{defaultValue:{},orientation:{default:"horizontal"},dir:{},activationMode:{},modelValue:{},unmountOnHide:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["update:modelValue"],setup(r,{emit:a}){const l=me(r,a);return(u,c)=>(f(),v(e(Ie),N({"data-slot":"tabs"},e(l)),{default:p(()=>[h(u.$slots,"default")]),_:3},16))}});g.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"orientation",defaultValue:{func:!1,value:"'horizontal'"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/tabs/Tabs.vue"]};const C=m({__name:"TabsList",props:{loop:{type:Boolean},asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},setup(r){const a=r,t=D(a,"class"),s=K(t);return(l,u)=>(f(),v(e(xe),N({"data-slot":"tabs-list"},e(s),{class:e(A)("inline-flex h-9 w-full max-w-full items-center justify-start gap-1 overflow-x-auto rounded-lg bg-muted p-1 text-muted-foreground [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",a.class)}),{default:p(()=>[h(l.$slots,"default")]),_:3},16,["class"]))}});C.__docgenInfo={exportName:"default",displayName:"TabsList",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/tabs/TabsList.vue"]};const I=m({__name:"TabsTrigger",props:{value:{},disabled:{type:Boolean},asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]},variant:{default:"default"}},setup(r){const a=r,t=D(a,"class","variant"),s=K(t),l={default:"","with-icon":"gap-1.5 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0","icon-only":"size-9 p-0 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"};return(u,c)=>(f(),v(e(Pe),N({"data-slot":"tabs-trigger"},e(s),{class:e(A)("inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",l[a.variant],a.class)}),{default:p(()=>[h(u.$slots,"default")]),_:3},16,["class"]))}});I.__docgenInfo={exportName:"default",displayName:"TabsTrigger",description:"",tags:{},props:[{name:"variant",defaultValue:{func:!1,value:"'default'"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/tabs/TabsTrigger.vue"]};const y=m({__name:"TabsContent",props:{value:{},forceMount:{type:Boolean},asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},setup(r){const a=r,t=D(a,"class"),s=K(t);return(l,u)=>(f(),v(e(_e),N({"data-slot":"tabs-content"},e(s),{class:e(A)("mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",a.class)}),{default:p(()=>[h(l.$slots,"default")]),_:3},16,["class"]))}});y.__docgenInfo={exportName:"default",displayName:"TabsContent",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/tabs/TabsContent.vue"]};const Be={title:"Win Predict AI / UI / Tabs",component:g,tags:["autodocs"]};function j(){return`
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
  `}const x={render:()=>({components:{Tabs:g,TabsList:C,TabsTrigger:I,TabsContent:y},template:j()})},S={globals:{theme:"light"},render:()=>({components:{Tabs:g,TabsList:C,TabsTrigger:I,TabsContent:y},template:j()})},P={globals:{theme:"dark"},render:()=>({components:{Tabs:g,TabsList:C,TabsTrigger:I,TabsContent:y},template:j()})},L={render:()=>({components:{Tabs:g,TabsList:C,TabsTrigger:I,TabsContent:y},template:`
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
    `})};function z(){return`
    <Tabs default-value="search" class="w-full max-w-md">
      <TabsList aria-label="Tabs with icons">
        <TabsTrigger value="search" variant="with-icon">
          <IconSearch aria-hidden="true" />
          Search
        </TabsTrigger>
        <TabsTrigger value="pinned" variant="with-icon">
          <IconPin aria-hidden="true" />
          Pinned
        </TabsTrigger>
        <TabsTrigger value="edit" variant="with-icon" disabled>
          <IconPencil aria-hidden="true" />
          Edit
        </TabsTrigger>
      </TabsList>
      <TabsContent value="search" class="rounded-lg border border-border bg-card p-4 text-card-foreground">
        <p class="text-sm text-muted-foreground">Search results and filters.</p>
      </TabsContent>
      <TabsContent value="pinned" class="rounded-lg border border-border bg-card p-4 text-card-foreground">
        <p class="text-sm text-muted-foreground">Pinned items for quick access.</p>
      </TabsContent>
      <TabsContent value="edit" class="rounded-lg border border-border bg-card p-4 text-card-foreground">
        <p class="text-sm text-muted-foreground">Edit mode is disabled in this example.</p>
      </TabsContent>
    </Tabs>
  `}const k={render:()=>({components:{Tabs:g,TabsList:C,TabsTrigger:I,TabsContent:y,IconSearch:M,IconPin:R,IconPencil:V},template:z()})},q={globals:{theme:"light"},render:()=>({components:{Tabs:g,TabsList:C,TabsTrigger:I,TabsContent:y,IconSearch:M,IconPin:R,IconPencil:V},template:z()})},F={globals:{theme:"dark"},render:()=>({components:{Tabs:g,TabsList:C,TabsTrigger:I,TabsContent:y,IconSearch:M,IconPin:R,IconPencil:V},template:z()})},B={render:()=>({components:{Tabs:g,TabsList:C,TabsTrigger:I,TabsContent:y,IconSearch:M,IconPin:R,IconPencil:V},template:`
      <Tabs default-value="search" class="w-fit">
        <TabsList aria-label="Icon-only tabs">
          <TabsTrigger value="search" variant="icon-only" aria-label="Search">
            <IconSearch aria-hidden="true" />
          </TabsTrigger>
          <TabsTrigger value="pinned" variant="icon-only" aria-label="Pinned">
            <IconPin aria-hidden="true" />
          </TabsTrigger>
          <TabsTrigger value="edit" variant="icon-only" aria-label="Edit" disabled>
            <IconPencil aria-hidden="true" />
          </TabsTrigger>
        </TabsList>
        <TabsContent value="search" class="mt-2 text-sm text-muted-foreground">Search panel.</TabsContent>
        <TabsContent value="pinned" class="mt-2 text-sm text-muted-foreground">Pinned panel.</TabsContent>
        <TabsContent value="edit" class="mt-2 text-sm text-muted-foreground">Edit panel.</TabsContent>
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
}`,...S.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Tabs,
      TabsList,
      TabsTrigger,
      TabsContent,
      IconSearch,
      IconPin,
      IconPencil
    },
    template: withIconsTemplate()
  })
}`,...k.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'light'
  },
  render: () => ({
    components: {
      Tabs,
      TabsList,
      TabsTrigger,
      TabsContent,
      IconSearch,
      IconPin,
      IconPencil
    },
    template: withIconsTemplate()
  })
}`,...q.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'dark'
  },
  render: () => ({
    components: {
      Tabs,
      TabsList,
      TabsTrigger,
      TabsContent,
      IconSearch,
      IconPin,
      IconPencil
    },
    template: withIconsTemplate()
  })
}`,...F.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Tabs,
      TabsList,
      TabsTrigger,
      TabsContent,
      IconSearch,
      IconPin,
      IconPencil
    },
    template: \`
      <Tabs default-value="search" class="w-fit">
        <TabsList aria-label="Icon-only tabs">
          <TabsTrigger value="search" variant="icon-only" aria-label="Search">
            <IconSearch aria-hidden="true" />
          </TabsTrigger>
          <TabsTrigger value="pinned" variant="icon-only" aria-label="Pinned">
            <IconPin aria-hidden="true" />
          </TabsTrigger>
          <TabsTrigger value="edit" variant="icon-only" aria-label="Edit" disabled>
            <IconPencil aria-hidden="true" />
          </TabsTrigger>
        </TabsList>
        <TabsContent value="search" class="mt-2 text-sm text-muted-foreground">Search panel.</TabsContent>
        <TabsContent value="pinned" class="mt-2 text-sm text-muted-foreground">Pinned panel.</TabsContent>
        <TabsContent value="edit" class="mt-2 text-sm text-muted-foreground">Edit panel.</TabsContent>
      </Tabs>
    \`
  })
}`,...B.parameters?.docs?.source}}};const Ve=["Default","Light","Dark","NarrowScroll","WithIcons","WithIconsLight","WithIconsDark","IconOnly"];export{P as Dark,x as Default,B as IconOnly,S as Light,L as NarrowScroll,k as WithIcons,F as WithIconsDark,q as WithIconsLight,Ve as __namedExportsOrder,Be as default};
