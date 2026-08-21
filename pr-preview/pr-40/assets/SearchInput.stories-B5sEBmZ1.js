import{w as c}from"./storyHelpers-CiLmDOdr.js";import{r as n}from"./iframe-BPfh3LMt.js";import{_ as t}from"./SearchInput-fy3-f8bY.js";import"./preload-helper-DCvky1p-.js";import"./index-DxXIMqEh.js";import"./cn-DaT-yT0k.js";const g={title:"Win Predict AI / UI / SearchInput",component:t,tags:["autodocs"],argTypes:{placeholder:{control:"text"},ariaLabel:{control:"text"},clearAriaLabel:{control:"text"}}},e={args:{placeholder:"Search tournaments…",ariaLabel:"Search tournaments",clearAriaLabel:"Clear search"},render:a=>({components:{SearchInput:t},setup(){const r=n("");return{args:a,query:r}},template:`
      <div class="w-full max-w-xs space-y-2">
        <SearchInput
          v-model="query"
          :placeholder="args.placeholder"
          :aria-label="args.ariaLabel"
          :clear-aria-label="args.clearAriaLabel"
        />
        <p class="text-xs text-muted-foreground">Query: <code>{{ query || '—' }}</code></p>
      </div>
    `})},{ZincLight:h,ZincDark:b,SlateTealLight:x,SlateTealDark:f,ClaudePlusLight:L,ClaudePlusDark:S}=c(e),l={args:{...e.args},render:a=>({components:{SearchInput:t},setup(){const r=n("MLB");return{args:a,query:r}},template:`
      <div class="w-full max-w-xs">
        <SearchInput
          v-model="query"
          :placeholder="args.placeholder"
          :aria-label="args.ariaLabel"
          :clear-aria-label="args.clearAriaLabel"
        />
      </div>
    `})},s={args:{...e.args},render:a=>({components:{SearchInput:t},setup(){const r=n("");return{args:a,query:r}},template:`
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
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const y=["Default","ZincLight","ZincDark","SlateTealLight","SlateTealDark","ClaudePlusLight","ClaudePlusDark","WithValue","InToolbar"];export{S as ClaudePlusDark,L as ClaudePlusLight,e as Default,s as InToolbar,f as SlateTealDark,x as SlateTealLight,l as WithValue,b as ZincDark,h as ZincLight,y as __namedExportsOrder,g as default};
