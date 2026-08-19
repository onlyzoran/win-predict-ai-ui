import{d as r,o as s,c as u,w as p,p as i,s as m,u as a,v as f,x as w,l as C,r as P}from"./iframe-oW6crexX.js";import{d as x}from"./index-GFSZMl-5.js";import{w as g}from"./storyHelpers-CiLmDOdr.js";import{_ as B}from"./index-DshFy_YX.js";import{i as k,M as G,_ as T,a as $,b as q,c as A,d as h}from"./DropdownMenuTrigger-DmQYbXJx.js";import{u as D}from"./useForwardExpose-q0Vybtwq.js";import{P as b}from"./Primitive-Blc-hMm0.js";import{c as v}from"./cn-DaT-yT0k.js";import{r as M}from"./index-D09o8Sgr.js";import{u as N,a as y}from"./Presence-Bn8EvSK4.js";import"./preload-helper-1ep5AMd6.js";import"./useId-b3kDYCyq.js";import"./createContext-BfrTAnai.js";import"./Teleport-BBkoj5q7.js";import"./index-CviQr2jP.js";import"./nullish-CHIgUVhi.js";import"./RovingFocusGroup-VbI-BVWm.js";var Z=r({__name:"MenuLabel",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"div"}},setup(e){const o=e,t=k({id:""});return(n,d)=>(s(),u(a(b),m(o,{id:a(t).id||void 0}),{default:p(()=>[i(n.$slots,"default")]),_:3},16,["id"]))}}),z=Z,E=r({__name:"MenuSeparator",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){const o=e;return(t,n)=>(s(),u(a(b),m(o,{role:"separator","aria-orientation":"horizontal"}),{default:p(()=>[i(t.$slots,"default")]),_:3},16))}}),F=E,O=r({__name:"DropdownMenuItem",props:{disabled:{type:Boolean,required:!1},textValue:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["select"],setup(e,{emit:o}){const t=e,d=N(o);return D(),(_,Q)=>(s(),u(a(G),f(w({...t,...a(d)})),{default:p(()=>[i(_.$slots,"default")]),_:3},16))}}),j=O,V=r({__name:"DropdownMenuLabel",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){const o=e;return D(),(t,n)=>(s(),u(a(z),f(w(o)),{default:p(()=>[i(t.$slots,"default")]),_:3},16))}}),U=V,W=r({__name:"DropdownMenuSeparator",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){const o=e;return D(),(t,n)=>(s(),u(a(F),f(w(o)),{default:p(()=>[i(t.$slots,"default")]),_:3},16))}}),H=W;const S=r({__name:"DropdownMenuItem",props:{disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]},inset:{type:Boolean},variant:{default:"default"}},setup(e){const o=e,t=M(o,"inset","variant","class"),n=y(t);return(d,_)=>(s(),u(a(j),m({"data-slot":"dropdown-menu-item","data-inset":e.inset?"":void 0,"data-variant":e.variant},a(n),{class:a(v)("relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground data-[variant=destructive]:*:[svg]:text-destructive!",o.class)}),{default:p(()=>[i(d.$slots,"default")]),_:3},16,["data-inset","data-variant","class"]))}});S.__docgenInfo={exportName:"default",displayName:"DropdownMenuItem",description:"",tags:{},props:[{name:"variant",defaultValue:{func:!1,value:"'default'"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/dropdown-menu/DropdownMenuItem.vue"]};const I=r({__name:"DropdownMenuLabel",props:{asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]},inset:{type:Boolean}},setup(e){const o=e,t=M(o,"class","inset"),n=y(t);return(d,_)=>(s(),u(a(U),m({"data-slot":"dropdown-menu-label","data-inset":e.inset?"":void 0},a(n),{class:a(v)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",o.class)}),{default:p(()=>[i(d.$slots,"default")]),_:3},16,["data-inset","class"]))}});I.__docgenInfo={exportName:"default",displayName:"DropdownMenuLabel",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/dropdown-menu/DropdownMenuLabel.vue"]};const L=r({__name:"DropdownMenuSeparator",props:{asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},setup(e){const o=e,t=M(o,"class");return(n,d)=>(s(),u(a(H),m({"data-slot":"dropdown-menu-separator"},a(t),{class:a(v)("bg-border -mx-1 my-1 h-px",o.class)}),null,16,["class"]))}});L.__docgenInfo={exportName:"default",displayName:"DropdownMenuSeparator",description:"",tags:{},sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/dropdown-menu/DropdownMenuSeparator.vue"]};const fe={title:"Win Predict AI / UI / DropdownMenu",component:h,tags:["autodocs"]},R={DropdownMenu:h,DropdownMenuTrigger:A,DropdownMenuContent:q,DropdownMenuItem:S,DropdownMenuLabel:I,DropdownMenuSeparator:L,DropdownMenuRadioGroup:$,DropdownMenuRadioItem:T,Button:B,IconArrowsSort:x};function J(){return`
    <DropdownMenu :modal="false">
      <DropdownMenuTrigger as-child>
        <Button variant="outline">Actions</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" class="w-48">
        <DropdownMenuLabel>League</DropdownMenuLabel>
        <DropdownMenuItem>Pin to dashboard</DropdownMenuItem>
        <DropdownMenuItem>Copy share link</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>View</DropdownMenuLabel>
        <DropdownMenuItem inset>Show standings table</DropdownMenuItem>
        <DropdownMenuItem inset disabled>Show playoff bracket</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">Remove from watchlist</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  `}function K(){return`
    <DropdownMenu :modal="false">
      <DropdownMenuTrigger as-child>
        <Button variant="ghost" size="sm" aria-label="Sort tournaments">
          <IconArrowsSort class="size-4" />
          <span>Sort: {{ sortLabel }}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup v-model="sort">
          <DropdownMenuRadioItem value="popular">Popular</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="name">Name</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="endingSoon">Ending soon</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  `}const l={render:()=>({components:R,template:J()})},{ZincLight:we,ZincDark:De,SlateTealLight:ve,SlateTealDark:Me,ClaudePlusLight:ge,ClaudePlusDark:he}=g(l),c={render:()=>({components:R,setup(){const e=P("popular"),o={popular:"Popular",name:"Name",endingSoon:"Ending soon"},t=C(()=>o[e.value]??e.value);return{sort:e,sortLabel:t}},template:K()})},{RadioGroupZincLight:be,RadioGroupZincDark:ye,RadioGroupSlateTealLight:Se,RadioGroupSlateTealDark:Ie,RadioGroupClaudePlusLight:Le,RadioGroupClaudePlusDark:Re}=g(c,"RadioGroup");l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: menuComponents,
    template: actionsMenuTemplate()
  })
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: menuComponents,
    setup() {
      const sort = ref('popular');
      const labels: Record<string, string> = {
        popular: 'Popular',
        name: 'Name',
        endingSoon: 'Ending soon'
      };
      const sortLabel = computed(() => labels[sort.value] ?? sort.value);
      return {
        sort,
        sortLabel
      };
    },
    template: sortRadioTemplate()
  })
}`,...c.parameters?.docs?.source}}};const Ce=["Default","ZincLight","ZincDark","SlateTealLight","SlateTealDark","ClaudePlusLight","ClaudePlusDark","RadioGroup","RadioGroupZincLight","RadioGroupZincDark","RadioGroupSlateTealLight","RadioGroupSlateTealDark","RadioGroupClaudePlusLight","RadioGroupClaudePlusDark"];export{he as ClaudePlusDark,ge as ClaudePlusLight,l as Default,c as RadioGroup,Re as RadioGroupClaudePlusDark,Le as RadioGroupClaudePlusLight,Ie as RadioGroupSlateTealDark,Se as RadioGroupSlateTealLight,ye as RadioGroupZincDark,be as RadioGroupZincLight,Me as SlateTealDark,ve as SlateTealLight,De as ZincDark,we as ZincLight,Ce as __namedExportsOrder,fe as default};
