import{w as h}from"./storyHelpers-C8GjIxNC.js";import{_ as D}from"./index-Xg5DtBK7.js";import{d as i,i as T,o as l,c as d,w as p,p as u,q as c,u as a}from"./iframe-ZqraQVRG.js";import{i as k,D as w,d as x,c as V,b as L,a as $,_ as P,e as g}from"./SheetTitle-BVXIYw7j.js";import{u as B}from"./useForwardExpose-DL1rGHBD.js";import{u as y}from"./useId-DxbAlWFr.js";import{P as F}from"./Primitive-f8G2po-X.js";import"./cn-DaT-yT0k.js";import"./preload-helper-bvNQjlSe.js";import"./Presence-DPBRsKg_.js";import"./index-CNslLCCB.js";import"./index-DqO1gcAP.js";import"./index-INa3KFeT.js";import"./Teleport-h9LBGbDJ.js";import"./nullish-CHIgUVhi.js";import"./createContext-DkbHdF2S.js";var b=i({__name:"DialogTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(t){const o=t,e=k(),{forwardRef:n,currentElement:v}=B();return e.contentId||=y(void 0,"reka-dialog-content"),T(()=>{e.triggerElement.value=v.value}),(m,I)=>(l(),d(a(F),c(o,{ref:a(n),type:m.as==="button"?"button":void 0,"aria-haspopup":"dialog","aria-expanded":a(e).open.value||!1,"aria-controls":a(e).open.value?a(e).contentId:void 0,"data-state":a(e).open.value?"open":"closed",onClick:a(e).onOpenToggle}),{default:p(()=>[u(m.$slots,"default")]),_:3},16,["type","aria-expanded","aria-controls","data-state","onClick"]))}}),Z=b;const S=i({__name:"SheetClose",props:{asChild:{type:Boolean},as:{}},setup(t){const o=t;return(e,n)=>(l(),d(a(w),c({"data-slot":"sheet-close"},o),{default:p(()=>[u(e.$slots,"default")]),_:3},16))}});S.__docgenInfo={exportName:"default",displayName:"SheetClose",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/sheet/SheetClose.vue"]};const f=i({__name:"SheetTrigger",props:{asChild:{type:Boolean},as:{}},setup(t){const o=t;return(e,n)=>(l(),d(a(Z),c({"data-slot":"sheet-trigger"},o),{default:p(()=>[u(e.$slots,"default")]),_:3},16))}});f.__docgenInfo={exportName:"default",displayName:"SheetTrigger",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/ui/sheet/SheetTrigger.vue"]};const X={title:"Win Predict AI / UI / Sheet",component:g,tags:["autodocs"]},_={Sheet:g,SheetTrigger:f,SheetContent:P,SheetHeader:$,SheetTitle:L,SheetDescription:V,SheetFooter:x,SheetClose:S,Button:D};function C(t){return`
    <Sheet>
      <SheetTrigger as-child>
        <Button variant="outline">Open ${t} sheet</Button>
      </SheetTrigger>
      <SheetContent side="${t}">
        <SheetHeader>
          <SheetTitle>Team details</SheetTitle>
          <SheetDescription>
            Standings row drill-down for Los Angeles Dodgers — World Series odds and recent movement.
          </SheetDescription>
        </SheetHeader>
        <div class="flex-1 overflow-y-auto px-4 text-sm text-muted-foreground">
          <p>Win probability: <span class="font-medium text-foreground">17%</span></p>
          <p class="mt-2">Conference: NL West · Position: 1</p>
          <p class="mt-2">Last 10 games: 7-3</p>
        </div>
        <SheetFooter>
          <SheetClose as-child>
            <Button variant="outline">Close</Button>
          </SheetClose>
          <Button>View full standings</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  `}const r={render:()=>({components:_,template:C("right")})},{ZincLight:Y,ZincDark:ee,SlateTealLight:te,SlateTealDark:ae,ClaudePlusLight:oe,ClaudePlusDark:re}=h(r),s={render:()=>({components:_,template:`
      <div class="flex flex-wrap gap-3">
        ${["top","right","bottom","left"].map(t=>C(t).trim()).join(`
`)}
      </div>
    `})},{SideVariantsZincLight:se,SideVariantsZincDark:ne,SideVariantsSlateTealLight:ie,SideVariantsSlateTealDark:le,SideVariantsClaudePlusLight:de,SideVariantsClaudePlusDark:pe}=h(s,"SideVariants");r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: sheetComponents,
    template: sheetWithHeaderFooter('right')
  })
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: sheetComponents,
    template: \`
      <div class="flex flex-wrap gap-3">
        \${(['top', 'right', 'bottom', 'left'] as const).map(side => sheetWithHeaderFooter(side).trim()).join('\\n')}
      </div>
    \`
  })
}`,...s.parameters?.docs?.source}}};const ue=["Default","ZincLight","ZincDark","SlateTealLight","SlateTealDark","ClaudePlusLight","ClaudePlusDark","SideVariants","SideVariantsZincLight","SideVariantsZincDark","SideVariantsSlateTealLight","SideVariantsSlateTealDark","SideVariantsClaudePlusLight","SideVariantsClaudePlusDark"];export{re as ClaudePlusDark,oe as ClaudePlusLight,r as Default,s as SideVariants,pe as SideVariantsClaudePlusDark,de as SideVariantsClaudePlusLight,le as SideVariantsSlateTealDark,ie as SideVariantsSlateTealLight,ne as SideVariantsZincDark,se as SideVariantsZincLight,ae as SlateTealDark,te as SlateTealLight,ee as ZincDark,Y as ZincLight,ue as __namedExportsOrder,X as default};
