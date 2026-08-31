import{l as F,d as W,r as I,m as H,f as C,a as c,w as l,T as J,u as a,o as h,b as t,t as o,e as d,g as D,F as Q,h as X,n as G,i as O}from"./iframe-ZqraQVRG.js";import{c as V}from"./cn-DaT-yT0k.js";import{u as Z}from"./index-CNslLCCB.js";import{_ as v}from"./index-Xg5DtBK7.js";import{_ as ee,a as ne,b as se,c as te,d as ae,e as oe}from"./SheetTitle-BVXIYw7j.js";import{_ as re}from"./Separator-D2_3nOrz.js";import"./preload-helper-bvNQjlSe.js";import"./index-DqO1gcAP.js";import"./Primitive-f8G2po-X.js";import"./Presence-DPBRsKg_.js";import"./index-INa3KFeT.js";import"./useForwardExpose-DL1rGHBD.js";import"./Teleport-h9LBGbDJ.js";import"./useId-DxbAlWFr.js";import"./createContext-DkbHdF2S.js";import"./nullish-CHIgUVhi.js";const Y={en:{bannerTitle:"Cookie preferences",bannerDescription:"We use local storage for essential site operation and optional categories you can control. Analytics is off until you opt in.",acceptAll:"Accept all",rejectNonEssential:"Reject non-essential",customize:"Customize",customizeTitle:"Manage cookie preferences",customizeDescription:"Choose which optional categories we may use. Necessary storage keeps the app working.",savePreferences:"Save preferences",privacyPolicy:"Privacy policy",alwaysOn:"Always on",categories:{necessary:{label:"Necessary",description:"Required for core functionality such as language and theme."},preferences:{label:"Preferences",description:"Remembers tournament pins, sort order, and similar UI choices."},analytics:{label:"Analytics",description:"Helps us understand usage when enabled. Not loaded until you opt in."}}},ru:{bannerTitle:"Настройки cookies",bannerDescription:"Мы используем localStorage для работы сайта и опциональных категорий, которые вы контролируете. Аналитика выключена, пока вы не разрешите.",acceptAll:"Принять все",rejectNonEssential:"Только необходимые",customize:"Настроить",customizeTitle:"Управление cookies",customizeDescription:"Выберите опциональные категории. Необходимые данные нужны для работы приложения.",savePreferences:"Сохранить",privacyPolicy:"Политика конфиденциальности",alwaysOn:"Всегда включено",categories:{necessary:{label:"Необходимые",description:"Язык, тема и другие базовые функции."},preferences:{label:"Предпочтения",description:"Закреплённые турниры, сортировка и похожие настройки интерфейса."},analytics:{label:"Аналитика",description:"Помогает понимать использование. Подключается только после согласия."}}}};function ie(n,r){const e=Y[n]??Y.en;return r?{...e,...r,categories:{...e.categories,...r.categories,necessary:{...e.categories.necessary,...r.categories?.necessary},preferences:{...e.categories.preferences,...r.categories?.preferences},analytics:{...e.categories.analytics,...r.categories?.analytics}}}:e}const N="cookie-consent-preferences",U=1,ce={necessary:!0,preferences:!1,analytics:!1},le={necessary:!0,preferences:!0,analytics:!0},ue={necessary:!0,preferences:!1,analytics:!1};function j(){return{version:U,decided:!1,categories:{...ce},updatedAt:null}}function de(n){return{version:U,decided:!!n.decided,categories:{necessary:!0,preferences:!!n.categories?.preferences,analytics:!!n.categories?.analytics},updatedAt:n.updatedAt??null}}function w(n,r){return de({...n,decided:!0,categories:{...r,necessary:!0},updatedAt:new Date().toISOString()})}function M(n={}){const r=n.storageKey??N,e=Z(r,j(),localStorage,{mergeDefaults:!0}),A=F(()=>!e.value.decided);function E(i){return i==="necessary"?!0:e.value.decided?e.value.categories[i]===!0:!1}function T(){e.value=w(e.value,le)}function z(){e.value=w(e.value,ue)}function m(i){e.value=w(e.value,{necessary:!0,preferences:i.preferences??e.value.categories.preferences,analytics:i.analytics??e.value.categories.analytics})}function s(){e.value=j()}return{consent:e,showBanner:A,hasConsent:E,acceptAll:T,rejectAll:z,savePreferences:m,resetConsent:s}}const pe={"data-slot":"cookie-consent"},me={key:0,role:"region","aria-live":"polite","aria-label":"Cookie consent",class:"fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 p-4 shadow-lg backdrop-blur-sm supports-[backdrop-filter]:bg-card/90 sm:p-5"},fe={class:"mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"},ge={class:"min-w-0 space-y-1.5"},ye={class:"text-sm font-semibold text-foreground"},ve={class:"text-sm leading-relaxed text-muted-foreground"},be=["href"],_e={class:"flex shrink-0 flex-wrap items-center gap-2 sm:justify-end"},Ce={class:"flex flex-col gap-4 px-4 py-4"},he={class:"flex items-start justify-between gap-4 rounded-lg border border-border bg-muted/30 px-4 py-3"},xe={class:"min-w-0 space-y-1"},ke={class:"text-sm font-medium text-foreground"},Se={class:"text-sm text-muted-foreground"},Oe={class:"shrink-0 rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"},Ae={class:"min-w-0 space-y-1"},Ee={class:"text-sm font-medium text-foreground"},Te={class:"text-sm text-muted-foreground"},ze=["aria-checked","aria-label","onClick"],y=W({__name:"CookieConsentBanner",props:{locale:{default:"en"},messages:{},privacyPolicyUrl:{},storageKey:{},initialCustomizeOpen:{type:Boolean,default:!1}},setup(n){const r=["preferences","analytics"],e=n,{showBanner:A,acceptAll:E,rejectAll:T,savePreferences:z,consent:m}=M({storageKey:e.storageKey}),s=F(()=>ie(e.locale,e.messages)),i=I(e.initialCustomizeOpen),p=I({preferences:m.value.categories.preferences,analytics:m.value.categories.analytics});H(i,K=>{K&&(p.value={preferences:m.value.categories.preferences,analytics:m.value.categories.analytics})});function $(){i.value=!0}function L(){z({...p.value}),i.value=!1}function q(){E(),i.value=!1}function R(){T(),i.value=!1}return(K,P)=>(h(),C("div",pe,[c(J,{"enter-active-class":"transition duration-300 ease-out","enter-from-class":"translate-y-full opacity-0","enter-to-class":"translate-y-0 opacity-100","leave-active-class":"transition duration-200 ease-in","leave-from-class":"translate-y-0 opacity-100","leave-to-class":"translate-y-full opacity-0"},{default:l(()=>[a(A)?(h(),C("div",me,[t("div",fe,[t("div",ge,[t("p",ye,o(s.value.bannerTitle),1),t("p",ve,[d(o(s.value.bannerDescription)+" ",1),n.privacyPolicyUrl?(h(),C("a",{key:0,href:n.privacyPolicyUrl,class:"ml-1 font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"},o(s.value.privacyPolicy),9,be)):D("",!0)])]),t("div",_e,[c(a(v),{variant:"outline",size:"sm",onClick:R},{default:l(()=>[d(o(s.value.rejectNonEssential),1)]),_:1}),c(a(v),{variant:"secondary",size:"sm",onClick:$},{default:l(()=>[d(o(s.value.customize),1)]),_:1}),c(a(v),{size:"sm",onClick:q},{default:l(()=>[d(o(s.value.acceptAll),1)]),_:1})])])])):D("",!0)]),_:1}),c(a(oe),{open:i.value,"onUpdate:open":P[0]||(P[0]=u=>i.value=u)},{default:l(()=>[c(a(ee),{side:"bottom",class:"max-h-[85vh] gap-0 overflow-y-auto rounded-t-xl sm:max-h-[80vh]"},{default:l(()=>[c(a(ne),{class:"border-b border-border pb-4"},{default:l(()=>[c(a(se),null,{default:l(()=>[d(o(s.value.customizeTitle),1)]),_:1}),c(a(te),null,{default:l(()=>[d(o(s.value.customizeDescription),1)]),_:1})]),_:1}),t("div",Ce,[t("div",he,[t("div",xe,[t("p",ke,o(s.value.categories.necessary.label),1),t("p",Se,o(s.value.categories.necessary.description),1)]),t("span",Oe,o(s.value.alwaysOn),1)]),c(a(re)),(h(),C(Q,null,X(r,u=>t("div",{key:u,class:"flex items-start justify-between gap-4 rounded-lg border border-border px-4 py-3"},[t("div",Ae,[t("p",Ee,o(s.value.categories[u].label),1),t("p",Te,o(s.value.categories[u].description),1)]),t("button",{type:"button",role:"switch","aria-checked":p.value[u],"aria-label":s.value.categories[u].label,class:"mt-0.5 shrink-0 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring/50",onClick:we=>p.value[u]=!p.value[u]},[t("span",{class:G(a(V)("relative inline-flex h-5 w-9 shrink-0 rounded-full border border-transparent transition-colors",p.value[u]?"bg-primary":"bg-input"))},[t("span",{class:G(a(V)("pointer-events-none absolute top-0.5 block size-4 rounded-full bg-background shadow-sm transition-transform",p.value[u]?"translate-x-4":"translate-x-0.5"))},null,2)],2)],8,ze)])),64))]),c(a(ae),{class:"border-t border-border pt-4"},{default:l(()=>[c(a(v),{variant:"outline",onClick:R},{default:l(()=>[d(o(s.value.rejectNonEssential),1)]),_:1}),c(a(v),{onClick:L},{default:l(()=>[d(o(s.value.savePreferences),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["open"])]))}});y.__docgenInfo={exportName:"default",displayName:"CookieConsentBanner",description:"",tags:{},props:[{name:"locale",required:!1,type:{name:"ConsentLocale"},defaultValue:{func:!1,value:"'en'"}},{name:"messages",required:!1,type:{name:"Partial",elements:[{name:"ConsentMessages"}]}},{name:"privacyPolicyUrl",required:!1,type:{name:"string"}},{name:"storageKey",required:!1,type:{name:"string"}},{name:"initialCustomizeOpen",description:"Storybook / demo: open customize sheet on mount.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/CookieConsentBanner.vue"]};const _="cookie-consent-preferences-story",qe={title:"Win Predict AI / UI / CookieConsentBanner",component:y,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{locale:{control:"select",options:["en","ru"]},privacyPolicyUrl:{control:"text"},initialCustomizeOpen:{control:"boolean"}}};function B(){localStorage.removeItem(_)}const f={args:{locale:"en",storageKey:_,privacyPolicyUrl:"/privacy",initialCustomizeOpen:!1},render:n=>({components:{CookieConsentBanner:y},setup(){return O(B),{args:n}},template:`
      <div class="min-h-[320px] bg-background p-6">
        <p class="text-sm text-muted-foreground">
          First visit — banner appears at the bottom until a choice is saved.
        </p>
        <CookieConsentBanner v-bind="args" />
      </div>
    `})},x={...f,args:{...f.args,locale:"ru"}},k={args:{locale:"en",storageKey:_},render:n=>({components:{CookieConsentBanner:y},setup(){return O(()=>{B();const{acceptAll:r}=M({storageKey:_});r()}),{args:n}},template:`
      <div class="min-h-[320px] bg-background p-6">
        <p class="text-sm text-muted-foreground">
          Consent already saved — banner stays hidden.
        </p>
        <CookieConsentBanner v-bind="args" />
      </div>
    `})},g={args:{locale:"en",storageKey:_,initialCustomizeOpen:!0},render:n=>({components:{CookieConsentBanner:y},setup(){return O(B),{args:n}},template:`
      <div class="min-h-[480px] bg-background p-6">
        <p class="text-sm text-muted-foreground">
          Customize sheet with category toggles (Necessary always on).
        </p>
        <CookieConsentBanner v-bind="args" />
      </div>
    `})},S={...g,args:{...g.args,locale:"ru"}},b={args:{locale:"en",storageKey:N},render:n=>({components:{CookieConsentBanner:y},setup(){return O(()=>localStorage.removeItem(N)),{args:n}},template:`
      <div class="min-h-[320px] bg-background p-6">
        <CookieConsentBanner v-bind="args" />
      </div>
    `})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'en',
    storageKey: STORY_STORAGE_KEY,
    privacyPolicyUrl: '/privacy',
    initialCustomizeOpen: false
  },
  render: args => ({
    components: {
      CookieConsentBanner
    },
    setup() {
      onMounted(clearStoryStorage);
      return {
        args
      };
    },
    template: \`
      <div class="min-h-[320px] bg-background p-6">
        <p class="text-sm text-muted-foreground">
          First visit — banner appears at the bottom until a choice is saved.
        </p>
        <CookieConsentBanner v-bind="args" />
      </div>
    \`
  })
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  ...FirstVisit,
  args: {
    ...FirstVisit.args,
    locale: 'ru'
  }
}`,...x.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'en',
    storageKey: STORY_STORAGE_KEY
  },
  render: args => ({
    components: {
      CookieConsentBanner
    },
    setup() {
      onMounted(() => {
        clearStoryStorage();
        const {
          acceptAll
        } = useConsent({
          storageKey: STORY_STORAGE_KEY
        });
        acceptAll();
      });
      return {
        args
      };
    },
    template: \`
      <div class="min-h-[320px] bg-background p-6">
        <p class="text-sm text-muted-foreground">
          Consent already saved — banner stays hidden.
        </p>
        <CookieConsentBanner v-bind="args" />
      </div>
    \`
  })
}`,...k.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'en',
    storageKey: STORY_STORAGE_KEY,
    initialCustomizeOpen: true
  },
  render: args => ({
    components: {
      CookieConsentBanner
    },
    setup() {
      onMounted(clearStoryStorage);
      return {
        args
      };
    },
    template: \`
      <div class="min-h-[480px] bg-background p-6">
        <p class="text-sm text-muted-foreground">
          Customize sheet with category toggles (Necessary always on).
        </p>
        <CookieConsentBanner v-bind="args" />
      </div>
    \`
  })
}`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  ...CustomizeOpen,
  args: {
    ...CustomizeOpen.args,
    locale: 'ru'
  }
}`,...S.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'en',
    storageKey: CONSENT_STORAGE_KEY
  },
  render: args => ({
    components: {
      CookieConsentBanner
    },
    setup() {
      onMounted(() => localStorage.removeItem(CONSENT_STORAGE_KEY));
      return {
        args
      };
    },
    template: \`
      <div class="min-h-[320px] bg-background p-6">
        <CookieConsentBanner v-bind="args" />
      </div>
    \`
  })
}`,...b.parameters?.docs?.source},description:{story:"Documents the default production storage key for app integration.",...b.parameters?.docs?.description}}};const We=["FirstVisit","FirstVisitRu","AfterAccept","CustomizeOpen","CustomizeOpenRu","DefaultStorageKey"];export{k as AfterAccept,g as CustomizeOpen,S as CustomizeOpenRu,b as DefaultStorageKey,f as FirstVisit,x as FirstVisitRu,We as __namedExportsOrder,qe as default};
