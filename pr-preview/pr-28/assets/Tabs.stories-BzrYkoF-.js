import{b as R,z as V,C as N,d as ae,I as se,g as re}from"./index-D94U3CJS.js";import{d as h,l as J,k as ne,w as oe,o as x,p as y,q as b,f as A,u as t,a as w,h as C,i as le,I as Q,r as X,B as de,P as ie,s as ue,g as ce,L as pe,J as be,D as j}from"./iframe-oKRL-TxQ.js";import{k as me,f as Z,b as ge,P as I,l as fe,w as Te,m as ve,a as he,u as W,c as xe,d as ye,R as we,e as Ce,h as O}from"./RovingFocusGroup-BOce8cjd.js";import{f as Ie,g as z}from"./index-WM5MDSRY.js";import{c as K}from"./cn-DaT-yT0k.js";import"./preload-helper-BvwbUWYJ.js";var _e=h({__name:"RovingFocusItem",props:{tabStopId:{type:String,required:!1},focusable:{type:Boolean,required:!1,default:!0},active:{type:Boolean,required:!1},allowShiftKey:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(n){const a=n,s=me(),e=Z(),d=C(()=>a.tabStopId||e),u=C(()=>s.currentTabStopId.value===d.value),{getItems:c,CollectionItem:o}=ge();J(()=>{a.focusable&&s.onFocusableItemAdd()}),ne(()=>{a.focusable&&s.onFocusableItemRemove()}),oe(()=>a.focusable,(r,l)=>{r!==l&&(r?s.onFocusableItemAdd():s.onFocusableItemRemove())});function p(r){if(r.key==="Tab"&&r.shiftKey){s.onItemShiftTab();return}if(r.target!==r.currentTarget)return;const l=fe(r,s.orientation.value,s.dir.value);if(l!==void 0){if(r.metaKey||r.ctrlKey||r.altKey||!a.allowShiftKey&&r.shiftKey)return;r.preventDefault();let i=[...c().map(g=>g.ref).filter(g=>g.dataset.disabled!=="")];if(l==="last")i.reverse();else if(l==="prev"||l==="next"){l==="prev"&&i.reverse();const g=i.indexOf(r.currentTarget);i=s.loop.value?Te(i,g+1):i.slice(g+1)}le(()=>ve(i))}}return(r,l)=>(x(),y(t(o),null,{default:b(()=>[A(t(I),{tabindex:u.value?0:-1,"data-orientation":t(s).orientation.value,"data-active":r.active?"":void 0,"data-disabled":r.focusable?void 0:"",as:r.as,"as-child":r.asChild,onMousedown:l[0]||(l[0]=i=>{r.focusable?t(s).onItemFocus(d.value):i.preventDefault()}),onFocus:l[1]||(l[1]=i=>t(s).onItemFocus(d.value)),onKeydown:p},{default:b(()=>[w(r.$slots,"default")]),_:3},8,["tabindex","data-orientation","data-active","data-disabled","as","as-child"])]),_:3}))}}),Se=_e;const[E,ke]=xe("TabsRoot");var Le=h({__name:"TabsRoot",props:{defaultValue:{type:null,required:!1},orientation:{type:String,required:!1,default:"horizontal"},dir:{type:String,required:!1},activationMode:{type:String,required:!1,default:"automatic"},modelValue:{type:null,required:!1},unmountOnHide:{type:Boolean,required:!1,default:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["update:modelValue"],setup(n,{emit:a}){const s=n,e=a,{orientation:d,unmountOnHide:u,dir:c}=Q(s),o=he(c);W();const p=Ie(s,"modelValue",e,{defaultValue:s.defaultValue,passive:s.modelValue===void 0}),r=X(),l=de(new Set);return ke({modelValue:p,changeModelValue:i=>{p.value=i},orientation:d,dir:o,unmountOnHide:u,activationMode:s.activationMode,baseId:Z(void 0,"reka-tabs"),tabsList:r,contentIds:l,registerContent:i=>{l.value=new Set([...l.value,i])},unregisterContent:i=>{const g=new Set(l.value);g.delete(i),l.value=g}}),(i,g)=>(x(),y(t(I),{dir:t(o),"data-orientation":t(d),"as-child":i.asChild,as:i.as},{default:b(()=>[w(i.$slots,"default",{modelValue:t(p)})]),_:3},8,["dir","data-orientation","as-child","as"]))}}),Pe=Le;function ee(n,a){return`${n}-trigger-${a}`}function te(n,a){return`${n}-content-${a}`}var Be=h({__name:"TabsContent",props:{value:{type:[String,Number],required:!0},forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(n){const a=n,{forwardRef:s}=W(),e=E(),d=C(()=>ee(e.baseId,a.value)),u=C(()=>te(e.baseId,a.value)),c=C(()=>a.value===e.modelValue.value),o=X(c.value);return J(()=>{e.registerContent(a.value),requestAnimationFrame(()=>{o.value=!1})}),ie(()=>{e.unregisterContent(a.value)}),(p,r)=>(x(),y(t(ye),{present:p.forceMount||c.value,"force-mount":""},{default:b(({present:l})=>[A(t(I),{id:u.value,ref:t(s),"as-child":p.asChild,as:p.as,role:"tabpanel","data-state":c.value?"active":"inactive","data-orientation":t(e).orientation.value,"aria-labelledby":d.value,hidden:!l,tabindex:"0",style:ue({animationDuration:o.value?"0s":void 0})},{default:b(()=>[!t(e).unmountOnHide.value||l?w(p.$slots,"default",{key:0}):ce("v-if",!0)]),_:2},1032,["id","as-child","as","data-state","data-orientation","aria-labelledby","hidden","style"])]),_:3},8,["present"]))}}),De=Be,Me=h({__name:"TabsList",props:{loop:{type:Boolean,required:!1,default:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(n){const a=n,{loop:s}=Q(a),{forwardRef:e,currentElement:d}=W(),u=E();return u.tabsList=d,(c,o)=>(x(),y(t(we),{"as-child":"",orientation:t(u).orientation.value,dir:t(u).dir.value,loop:t(s)},{default:b(()=>[A(t(I),{ref:t(e),role:"tablist","as-child":c.asChild,as:c.as,"aria-orientation":t(u).orientation.value},{default:b(()=>[w(c.$slots,"default")]),_:3},8,["as-child","as","aria-orientation"])]),_:3},8,["orientation","dir","loop"]))}}),$e=Me,Fe=h({__name:"TabsTrigger",props:{value:{type:[String,Number],required:!0},disabled:{type:Boolean,required:!1,default:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(n){const a=n,{forwardRef:s}=W(),e=E(),d=C(()=>ee(e.baseId,a.value)),u=C(()=>e.contentIds.value.has(a.value)?te(e.baseId,a.value):void 0),c=C(()=>a.value===e.modelValue.value);return(o,p)=>(x(),y(t(Se),{"as-child":"",focusable:!o.disabled,active:c.value},{default:b(()=>[A(t(I),{id:d.value,ref:t(s),role:"tab",type:o.as==="button"?"button":void 0,as:o.as,"as-child":o.asChild,"aria-selected":c.value?"true":"false","aria-controls":u.value,"data-state":c.value?"active":"inactive",disabled:o.disabled,"data-disabled":o.disabled?"":void 0,"data-orientation":t(e).orientation.value,onMousedown:p[0]||(p[0]=be(r=>{!o.disabled&&r.ctrlKey===!1?t(e).changeModelValue(o.value):r.preventDefault()},["left"])),onKeydown:p[1]||(p[1]=pe(r=>t(e).changeModelValue(o.value),["enter","space"])),onFocus:p[2]||(p[2]=()=>{const r=t(e).activationMode!=="manual";!c.value&&!o.disabled&&r&&t(e).changeModelValue(o.value)})},{default:b(()=>[w(o.$slots,"default")]),_:3},8,["id","type","as","as-child","aria-selected","aria-controls","data-state","disabled","data-disabled","data-orientation"])]),_:3},8,["focusable","active"]))}}),qe=Fe;const m=h({__name:"Tabs",props:{defaultValue:{},orientation:{default:"horizontal"},dir:{},activationMode:{},modelValue:{},unmountOnHide:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["update:modelValue"],setup(n,{emit:a}){const d=Ce(n,a);return(u,c)=>(x(),y(t(Pe),j({"data-slot":"tabs"},t(d)),{default:b(()=>[w(u.$slots,"default")]),_:3},16))}});m.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"orientation",defaultValue:{func:!1,value:"'horizontal'"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/tabs/Tabs.vue"]};const f=h({__name:"TabsList",props:{loop:{type:Boolean},asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},setup(n){const a=n,s=z(a,"class"),e=O(s);return(d,u)=>(x(),y(t($e),j({"data-slot":"tabs-list"},t(e),{class:t(K)("inline-flex h-9 w-full max-w-full items-center justify-start gap-1 overflow-x-auto rounded-lg bg-muted p-1 text-muted-foreground [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",a.class)}),{default:b(()=>[w(d.$slots,"default")]),_:3},16,["class"]))}});f.__docgenInfo={exportName:"default",displayName:"TabsList",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/tabs/TabsList.vue"]};const T=h({__name:"TabsTrigger",props:{value:{},disabled:{type:Boolean},asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]},variant:{default:"default"}},setup(n){const a=n,s=z(a,"class","variant"),e=O(s),d={default:"","with-icon":"gap-1.5 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0","icon-only":"size-9 p-0 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"};return(u,c)=>(x(),y(t(qe),j({"data-slot":"tabs-trigger"},t(e),{class:t(K)("inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",d[a.variant],a.class)}),{default:b(()=>[w(u.$slots,"default")]),_:3},16,["class"]))}});T.__docgenInfo={exportName:"default",displayName:"TabsTrigger",description:"",tags:{},props:[{name:"variant",defaultValue:{func:!1,value:"'default'"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/tabs/TabsTrigger.vue"]};const v=h({__name:"TabsContent",props:{value:{},forceMount:{type:Boolean},asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},setup(n){const a=n,s=z(a,"class"),e=O(s);return(d,u)=>(x(),y(t(De),j({"data-slot":"tabs-content"},t(e),{class:t(K)("mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",a.class)}),{default:b(()=>[w(d.$slots,"default")]),_:3},16,["class"]))}});v.__docgenInfo={exportName:"default",displayName:"TabsContent",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/tabs/TabsContent.vue"]};const Oe={title:"Win Predict AI / UI / Tabs",component:m,tags:["autodocs"]};function H(){return`
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
  `}const _={render:()=>({components:{Tabs:m,TabsList:f,TabsTrigger:T,TabsContent:v},template:H()})},S={globals:{theme:"slate-teal-light"},render:()=>({components:{Tabs:m,TabsList:f,TabsTrigger:T,TabsContent:v},template:H()})},k={globals:{theme:"slate-teal-dark"},render:()=>({components:{Tabs:m,TabsList:f,TabsTrigger:T,TabsContent:v},template:H()})},L={render:()=>({components:{Tabs:m,TabsList:f,TabsTrigger:T,TabsContent:v},template:`
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
    `})};function G(){return`
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
  `}const P={render:()=>({components:{Tabs:m,TabsList:f,TabsTrigger:T,TabsContent:v,IconSearch:N,IconPin:V,IconPencil:R},template:G()})},B={globals:{theme:"slate-teal-light"},render:()=>({components:{Tabs:m,TabsList:f,TabsTrigger:T,TabsContent:v,IconSearch:N,IconPin:V,IconPencil:R},template:G()})},D={globals:{theme:"slate-teal-dark"},render:()=>({components:{Tabs:m,TabsList:f,TabsTrigger:T,TabsContent:v,IconSearch:N,IconPin:V,IconPencil:R},template:G()})},M={render:()=>({components:{Tabs:m,TabsList:f,TabsTrigger:T,TabsContent:v,IconSearch:N,IconPin:V,IconPencil:R},template:`
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
    `})};function Y(){return`
    <div class="mx-auto w-full max-w-5xl space-y-6">
      <header class="space-y-4">
        <div class="space-y-1">
          <h1 class="text-lg font-semibold text-foreground">Major League Baseball | World Series</h1>
          <p class="text-sm text-muted-foreground">Season 2026</p>
        </div>
        <div class="space-y-2">
          <div class="h-2 overflow-hidden rounded-full bg-muted">
            <div class="h-full w-[64%] rounded-full bg-foreground/80" aria-hidden="true"></div>
          </div>
          <div class="flex flex-wrap justify-between gap-2 text-xs text-muted-foreground">
            <span>Mar 26, 2026 (ongoing for 140 days)</span>
            <span>Nov 1, 2026 (80 days left)</span>
          </div>
        </div>
      </header>

      <Tabs default-value="standings" class="w-full">
        <TabsList aria-label="League detail sections">
          <TabsTrigger value="standings" variant="with-icon">
            <IconGripVertical aria-hidden="true" />
            Standings
          </TabsTrigger>
          <TabsTrigger value="playoff" variant="with-icon">
            <IconFlag aria-hidden="true" />
            Playoff projection
          </TabsTrigger>
          <TabsTrigger value="movement" variant="with-icon">
            <IconArrowsSort aria-hidden="true" />
            Standings movement
          </TabsTrigger>
        </TabsList>

        <TabsContent value="standings" class="space-y-4">
          <div class="grid gap-4 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
            <section class="rounded-lg border border-border bg-card p-4 text-card-foreground">
              <h2 class="sr-only">Standings table</h2>
              ${`
    <div class="overflow-x-auto">
      <table class="w-full min-w-[32rem] text-sm">
        <thead>
          <tr class="border-b border-border text-left text-muted-foreground">
            <th class="pb-2 pr-4 font-medium">Team</th>
            <th class="pb-2 pr-3 font-medium">Conf</th>
            <th class="pb-2 pr-3 font-medium">Pos</th>
            <th class="pb-2 pr-3 font-medium">GP</th>
            <th class="pb-2 pr-3 font-medium">W-L</th>
            <th class="pb-2 pr-3 font-medium">PCT</th>
            <th class="pb-2 font-medium">Win %</th>
          </tr>
        </thead>
        <tbody>
          ${[{team:"Los Angeles Dodgers",conf:"NL",pos:"1",gp:140,wl:"84-56",pct:".600",win:"17%"},{team:"New York Yankees",conf:"AL",pos:"1",gp:140,wl:"78-62",pct:".557",win:"7%"},{team:"Milwaukee Brewers",conf:"NL",pos:"2",gp:140,wl:"76-64",pct:".543",win:"6%"},{team:"Tampa Bay Rays",conf:"AL",pos:"2",gp:140,wl:"74-66",pct:".529",win:"5%"}].map(e=>`
            <tr class="border-b border-border/60">
              <td class="py-2.5 pr-4 font-medium text-foreground">${e.team}</td>
              <td class="py-2.5 pr-3 text-muted-foreground">${e.conf}</td>
              <td class="py-2.5 pr-3 text-muted-foreground">${e.pos}</td>
              <td class="py-2.5 pr-3 text-muted-foreground">${e.gp}</td>
              <td class="py-2.5 pr-3 text-muted-foreground">${e.wl}</td>
              <td class="py-2.5 pr-3 text-muted-foreground">${e.pct}</td>
              <td class="py-2.5">
                <span class="inline-flex rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-foreground">${e.win}</span>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}
            </section>
            <section class="rounded-lg border border-border bg-card p-4 text-card-foreground">
              <h2 class="mb-4 text-sm font-medium text-foreground">World Series win odds</h2>
              <div class="mx-auto mb-4 flex size-36 items-center justify-center rounded-full border-[10px] border-muted bg-background" aria-hidden="true">
                <div class="size-20 rounded-full bg-card"></div>
              </div>
              <ul class="space-y-2 text-sm">
                ${[{team:"Los Angeles Dodgers",pct:"17%",tone:"bg-primary"},{team:"New York Yankees",pct:"7%",tone:"bg-primary/70"},{team:"Milwaukee Brewers",pct:"6%",tone:"bg-primary/40"},{team:"Others (25)",pct:"59%",tone:"bg-muted-foreground/30"}].map(e=>`
                  <li class="flex items-center justify-between gap-3">
                    <span class="flex min-w-0 items-center gap-2">
                      <span class="size-2.5 shrink-0 rounded-sm ${e.tone}" aria-hidden="true"></span>
                      <span class="truncate text-foreground">${e.team}</span>
                    </span>
                    <span class="shrink-0 text-muted-foreground">${e.pct}</span>
                  </li>
                `).join("")}
              </ul>
            </section>
          </div>
        </TabsContent>

        <TabsContent value="playoff">
          <section class="rounded-lg border border-border bg-card p-4 text-card-foreground">
            <div class="mb-6 space-y-1">
              <h2 class="text-base font-semibold text-foreground">Playoff projection</h2>
              <p class="text-sm text-muted-foreground">Bracket projected from World Series win odds.</p>
            </div>
            <div class="grid gap-4 overflow-x-auto lg:grid-cols-[1fr_auto_1fr] lg:items-start">
              <div class="min-w-[12rem] space-y-3">
                <p class="text-center text-xs font-medium uppercase tracking-wide text-muted-foreground">American League</p>
                <div class="space-y-2">
                  <div class="rounded-md border border-border bg-background p-2 text-xs">
                    <p class="mb-1 text-[10px] uppercase text-muted-foreground">Wild Card</p>
                    <p class="font-medium text-foreground">Red Sox <span class="float-right text-muted-foreground">2%</span></p>
                    <p class="text-muted-foreground">Rangers</p>
                  </div>
                  <div class="rounded-md border border-border bg-background p-2 text-xs">
                    <p class="mb-1 text-[10px] uppercase text-muted-foreground">ALCS</p>
                    <p class="font-medium text-foreground">Yankees <span class="float-right text-muted-foreground">7%</span></p>
                    <p class="text-muted-foreground">Rays</p>
                  </div>
                </div>
              </div>
              <div class="flex min-w-[10rem] flex-col items-center justify-center rounded-lg border border-border bg-background p-4 text-center">
                <p class="text-[10px] uppercase tracking-wide text-muted-foreground">World Series</p>
                <p class="mt-2 text-sm font-semibold text-foreground">Dodgers vs Yankees</p>
                <p class="mt-4 text-[10px] uppercase tracking-wide text-muted-foreground">Projected champion</p>
                <p class="mt-1 text-lg font-semibold text-foreground">Dodgers</p>
                <span class="mt-2 inline-flex rounded-md bg-muted px-2 py-0.5 text-xs font-medium">17%</span>
              </div>
              <div class="min-w-[12rem] space-y-3">
                <p class="text-center text-xs font-medium uppercase tracking-wide text-muted-foreground">National League</p>
                <div class="space-y-2">
                  <div class="rounded-md border border-border bg-background p-2 text-xs">
                    <p class="mb-1 text-[10px] uppercase text-muted-foreground">Wild Card</p>
                    <p class="font-medium text-foreground">Braves <span class="float-right text-muted-foreground">3%</span></p>
                    <p class="text-muted-foreground">Diamondbacks</p>
                  </div>
                  <div class="rounded-md border border-border bg-background p-2 text-xs">
                    <p class="mb-1 text-[10px] uppercase text-muted-foreground">NLCS</p>
                    <p class="font-medium text-foreground">Dodgers <span class="float-right text-muted-foreground">17%</span></p>
                    <p class="text-muted-foreground">Brewers</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="movement">
          <section class="rounded-lg border border-border bg-card p-4 text-card-foreground">
            <h2 class="mb-4 text-base font-semibold text-foreground">Standings movement</h2>
            <div class="relative min-h-[18rem] overflow-hidden rounded-md border border-border bg-background">
              <svg viewBox="0 0 640 220" class="h-full w-full" aria-hidden="true">
                <path d="M20 30 H620" class="stroke-border" fill="none" stroke-width="1" />
                <path d="M20 110 H620" class="stroke-border" fill="none" stroke-width="1" />
                <path d="M20 190 H620" class="stroke-border" fill="none" stroke-width="1" />
                <path d="M40 40 C120 40, 120 180, 200 180" class="stroke-primary" fill="none" stroke-width="2" />
                <path d="M40 80 C140 80, 140 60, 240 60" class="stroke-primary/70" fill="none" stroke-width="2" />
                <path d="M40 120 C160 120, 160 40, 280 40" class="stroke-primary/50" fill="none" stroke-width="2" />
                <path d="M40 160 C180 160, 180 100, 300 100" class="stroke-muted-foreground" fill="none" stroke-width="2" />
              </svg>
              <div class="absolute left-4 top-4 rounded-md border border-border bg-card/95 p-3 text-xs shadow-sm">
                <p class="font-medium text-foreground">Apr 16, 2026</p>
                <ul class="mt-2 space-y-1 text-muted-foreground">
                  <li>Tampa Bay Rays — 4</li>
                  <li>Milwaukee Brewers — 10</li>
                  <li>Atlanta Braves — 3</li>
                </ul>
              </div>
            </div>
            <p class="mt-3 text-xs text-muted-foreground">
              Bump chart widget from the app; tab keeps the tall interactive canvas isolated from the standings grid.
            </p>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  `}const U={Tabs:m,TabsList:f,TabsTrigger:T,TabsContent:v,IconGripVertical:re,IconFlag:se,IconArrowsSort:ae},$={render:()=>({components:U,template:Y()})},F={globals:{theme:"slate-teal-light"},render:()=>({components:U,template:Y()})},q={globals:{theme:"slate-teal-dark"},render:()=>({components:U,template:Y()})};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Tabs,
      TabsList,
      TabsTrigger,
      TabsContent
    },
    template: tabsTemplate()
  })
}`,..._.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-light'
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
}`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-dark'
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
}`,...k.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-light'
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
}`,...B.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-dark'
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
}`,...D.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: leagueDetailComponents,
    template: leagueDetailTabsTemplate()
  })
}`,...$.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-light'
  },
  render: () => ({
    components: leagueDetailComponents,
    template: leagueDetailTabsTemplate()
  })
}`,...F.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-dark'
  },
  render: () => ({
    components: leagueDetailComponents,
    template: leagueDetailTabsTemplate()
  })
}`,...q.parameters?.docs?.source}}};const ze=["Default","Light","Dark","NarrowScroll","WithIcons","WithIconsLight","WithIconsDark","IconOnly","LeagueDetail","LeagueDetailLight","LeagueDetailDark"];export{k as Dark,_ as Default,M as IconOnly,$ as LeagueDetail,q as LeagueDetailDark,F as LeagueDetailLight,S as Light,L as NarrowScroll,P as WithIcons,D as WithIconsDark,B as WithIconsLight,ze as __namedExportsOrder,Oe as default};
