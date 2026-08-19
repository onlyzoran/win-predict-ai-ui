import{d as b,J as f,c as p,e as m,u,Z as x,_ as v,f as y,h as S,n as L,K as q,o as g,r as d}from"./iframe-CEcj8ys-.js";import{C as I,P as w}from"./index--yy_xmLr.js";import{c as A}from"./cn-DaT-yT0k.js";import"./preload-helper-DR0Ra8Iv.js";const V=["placeholder","aria-label"],k=["aria-label"],l=b({__name:"SearchInput",props:q({placeholder:{default:"Search…"},ariaLabel:{default:"Search"},clearAriaLabel:{default:"Clear search"},class:{type:[Boolean,null,String,Object,Array]}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const a=f(e,"modelValue"),h=e;return(D,s)=>(g(),p("div",{class:L(u(A)("relative w-full",h.class))},[m(u(I),{class:"pointer-events-none absolute top-1/2 left-2 size-3.5 -translate-y-1/2 text-muted-foreground","aria-hidden":"true"}),x(y("input",{"onUpdate:modelValue":s[0]||(s[0]=i=>a.value=i),type:"search",placeholder:e.placeholder,"aria-label":e.ariaLabel,class:"h-8 w-full rounded-md border border-input bg-transparent py-1 pr-7 pl-7 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 [&::-webkit-search-cancel-button]:hidden"},null,8,V),[[v,a.value]]),a.value?(g(),p("button",{key:0,type:"button",class:"absolute top-1/2 right-1.5 -translate-y-1/2 rounded p-0.5 text-muted-foreground hover:text-foreground","aria-label":e.clearAriaLabel,onClick:s[1]||(s[1]=i=>a.value="")},[m(u(w),{class:"size-3.5","aria-hidden":"true"})],8,k)):S("",!0)],2))}});l.__docgenInfo={exportName:"default",displayName:"SearchInput",description:"",tags:{},props:[{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Search…'"}},{name:"ariaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Search'"}},{name:"clearAriaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Clear search'"}},{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],sourceFiles:["/home/runner/work/win-predict-ai-ui/win-predict-ai-ui/src/components/SearchInput.vue"]};const N={title:"Win Predict AI / UI / SearchInput",component:l,tags:["autodocs"],argTypes:{placeholder:{control:"text"},ariaLabel:{control:"text"},clearAriaLabel:{control:"text"}}},r={args:{placeholder:"Search tournaments…",ariaLabel:"Search tournaments",clearAriaLabel:"Clear search"},render:e=>({components:{SearchInput:l},setup(){const a=d("");return{args:e,query:a}},template:`
      <div class="w-full max-w-xs space-y-2">
        <SearchInput
          v-model="query"
          :placeholder="args.placeholder"
          :aria-label="args.ariaLabel"
          :clear-aria-label="args.clearAriaLabel"
        />
        <p class="text-xs text-muted-foreground">Query: <code>{{ query || '—' }}</code></p>
      </div>
    `})},t={globals:{theme:"slate-teal-light"},args:{...r.args},render:r.render},n={globals:{theme:"slate-teal-dark"},args:{...r.args},render:r.render},o={args:{...r.args},render:e=>({components:{SearchInput:l},setup(){const a=d("MLB");return{args:e,query:a}},template:`
      <div class="w-full max-w-xs">
        <SearchInput
          v-model="query"
          :placeholder="args.placeholder"
          :aria-label="args.ariaLabel"
          :clear-aria-label="args.clearAriaLabel"
        />
      </div>
    `})},c={args:{...r.args},render:e=>({components:{SearchInput:l},setup(){const a=d("");return{args:e,query:a}},template:`
      <div class="flex w-full max-w-md items-center gap-3 rounded-lg border border-border bg-card p-3">
        <SearchInput
          v-model="query"
          class="flex-1"
          :placeholder="args.placeholder"
          :aria-label="args.ariaLabel"
          :clear-aria-label="args.clearAriaLabel"
        />
        <span class="shrink-0 text-xs text-muted-foreground">Sport filter</span>
      </div>
    `})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search tournaments…',
    ariaLabel: 'Search tournaments',
    clearAriaLabel: 'Clear search'
  },
  render: args => ({
    components: {
      SearchInput
    },
    setup() {
      const query = ref('');
      return {
        args,
        query
      };
    },
    template: \`
      <div class="w-full max-w-xs space-y-2">
        <SearchInput
          v-model="query"
          :placeholder="args.placeholder"
          :aria-label="args.ariaLabel"
          :clear-aria-label="args.clearAriaLabel"
        />
        <p class="text-xs text-muted-foreground">Query: <code>{{ query || '—' }}</code></p>
      </div>
    \`
  })
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-light'
  },
  args: {
    ...Default.args
  },
  render: Default.render
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-dark'
  },
  args: {
    ...Default.args
  },
  render: Default.render
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => ({
    components: {
      SearchInput
    },
    setup() {
      const query = ref('MLB');
      return {
        args,
        query
      };
    },
    template: \`
      <div class="w-full max-w-xs">
        <SearchInput
          v-model="query"
          :placeholder="args.placeholder"
          :aria-label="args.ariaLabel"
          :clear-aria-label="args.clearAriaLabel"
        />
      </div>
    \`
  })
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => ({
    components: {
      SearchInput
    },
    setup() {
      const query = ref('');
      return {
        args,
        query
      };
    },
    template: \`
      <div class="flex w-full max-w-md items-center gap-3 rounded-lg border border-border bg-card p-3">
        <SearchInput
          v-model="query"
          class="flex-1"
          :placeholder="args.placeholder"
          :aria-label="args.ariaLabel"
          :clear-aria-label="args.clearAriaLabel"
        />
        <span class="shrink-0 text-xs text-muted-foreground">Sport filter</span>
      </div>
    \`
  })
}`,...c.parameters?.docs?.source}}};const z=["Default","Light","Dark","WithValue","InToolbar"];export{n as Dark,r as Default,c as InToolbar,t as Light,o as WithValue,z as __namedExportsOrder,N as default};
