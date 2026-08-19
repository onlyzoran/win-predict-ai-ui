import{d as n,o as s,c as d,w as p,p as l,s as m,u as t,v as M,x as D,l as P,r as k}from"./iframe-CZbg21jV.js";import{d as $}from"./index-BRmrF3c1.js";import{_ as q}from"./index-YV_CqY7G.js";import{i as G,M as A,_ as N,a as T,b as z,c as E,d as I}from"./DropdownMenuTrigger-DcSzUJej.js";import{u as b}from"./useForwardExpose-DTCiqJDU.js";import{P as S}from"./Primitive-B616n9Qm.js";import{c as h}from"./cn-DaT-yT0k.js";import{r as y}from"./index-D7g1-zI5.js";import{u as F,a as x}from"./Presence-BxBsFUlv.js";import"./preload-helper-DR0Ra8Iv.js";import"./useId-DCtzg9yx.js";import"./createContext-9E_p4YM4.js";import"./Teleport-442Fj_HE.js";import"./index-BfW2HXGB.js";import"./nullish-CHIgUVhi.js";import"./RovingFocusGroup-By-EjTts.js";var O=n({__name:"MenuLabel",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"div"}},setup(e){const o=e,r=G({id:""});return(a,u)=>(s(),d(t(S),m(o,{id:t(r).id||void 0}),{default:p(()=>[l(a.$slots,"default")]),_:3},16,["id"]))}}),j=O,V=n({__name:"MenuSeparator",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){const o=e;return(r,a)=>(s(),d(t(S),m(o,{role:"separator","aria-orientation":"horizontal"}),{default:p(()=>[l(r.$slots,"default")]),_:3},16))}}),U=V,W=n({__name:"DropdownMenuItem",props:{disabled:{type:Boolean,required:!1},textValue:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["select"],setup(e,{emit:o}){const r=e,u=F(o);return b(),(v,ee)=>(s(),d(t(A),M(D({...r,...t(u)})),{default:p(()=>[l(v.$slots,"default")]),_:3},16))}}),H=W,J=n({__name:"DropdownMenuLabel",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){const o=e;return b(),(r,a)=>(s(),d(t(j),M(D(o)),{default:p(()=>[l(r.$slots,"default")]),_:3},16))}}),K=J,Q=n({__name:"DropdownMenuSeparator",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){const o=e;return b(),(r,a)=>(s(),d(t(U),M(D(o)),{default:p(()=>[l(r.$slots,"default")]),_:3},16))}}),X=Q;const L=n({__name:"DropdownMenuItem",props:{disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]},inset:{type:Boolean},variant:{default:"default"}},setup(e){const o=e,r=y(o,"inset","variant","class"),a=x(r);return(u,v)=>(s(),d(t(H),m({"data-slot":"dropdown-menu-item","data-inset":e.inset?"":void 0,"data-variant":e.variant},t(a),{class:t(h)("relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground data-[variant=destructive]:*:[svg]:text-destructive!",o.class)}),{default:p(()=>[l(u.$slots,"default")]),_:3},16,["data-inset","data-variant","class"]))}});L.__docgenInfo={exportName:"default",displayName:"DropdownMenuItem",description:"",tags:{},props:[{name:"variant",defaultValue:{func:!1,value:"'default'"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/dropdown-menu/DropdownMenuItem.vue"]};const R=n({__name:"DropdownMenuLabel",props:{asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]},inset:{type:Boolean}},setup(e){const o=e,r=y(o,"class","inset"),a=x(r);return(u,v)=>(s(),d(t(K),m({"data-slot":"dropdown-menu-label","data-inset":e.inset?"":void 0},t(a),{class:t(h)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",o.class)}),{default:p(()=>[l(u.$slots,"default")]),_:3},16,["data-inset","class"]))}});R.__docgenInfo={exportName:"default",displayName:"DropdownMenuLabel",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/dropdown-menu/DropdownMenuLabel.vue"]};const B=n({__name:"DropdownMenuSeparator",props:{asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},setup(e){const o=e,r=y(o,"class");return(a,u)=>(s(),d(t(X),m({"data-slot":"dropdown-menu-separator"},t(r),{class:t(h)("bg-border -mx-1 my-1 h-px",o.class)}),null,16,["class"]))}});B.__docgenInfo={exportName:"default",displayName:"DropdownMenuSeparator",description:"",tags:{},sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/dropdown-menu/DropdownMenuSeparator.vue"]};const ge={title:"Win Predict AI / UI / DropdownMenu",component:I,tags:["autodocs"]},C={DropdownMenu:I,DropdownMenuTrigger:E,DropdownMenuContent:z,DropdownMenuItem:L,DropdownMenuLabel:R,DropdownMenuSeparator:B,DropdownMenuRadioGroup:T,DropdownMenuRadioItem:N,Button:q,IconArrowsSort:$};function Y(){return`
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
  `}function Z(){return`
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
  `}const i={render:()=>({components:C,template:Y()})},_={globals:{theme:"slate-teal-light"},render:i.render},f={globals:{theme:"slate-teal-dark"},render:i.render},c={render:()=>({components:C,setup(){const e=k("popular"),o={popular:"Popular",name:"Name",endingSoon:"Ending soon"},r=P(()=>o[e.value]??e.value);return{sort:e,sortLabel:r}},template:Z()})},w={globals:{theme:"slate-teal-light"},render:c.render},g={globals:{theme:"slate-teal-dark"},render:c.render};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: menuComponents,
    template: actionsMenuTemplate()
  })
}`,...i.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-light'
  },
  render: Default.render
}`,..._.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-dark'
  },
  render: Default.render
}`,...f.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-light'
  },
  render: RadioGroup.render
}`,...w.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-dark'
  },
  render: RadioGroup.render
}`,...g.parameters?.docs?.source}}};const ve=["Default","Light","Dark","RadioGroup","RadioGroupLight","RadioGroupDark"];export{f as Dark,i as Default,_ as Light,c as RadioGroup,g as RadioGroupDark,w as RadioGroupLight,ve as __namedExportsOrder,ge as default};
