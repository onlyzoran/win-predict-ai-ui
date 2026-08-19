import{r as c}from"./iframe-CZbg21jV.js";import{_ as o}from"./SearchInput-BJzT-EOe.js";import"./preload-helper-DR0Ra8Iv.js";import"./index-BRmrF3c1.js";import"./cn-DaT-yT0k.js";const g={title:"Win Predict AI / UI / SearchInput",component:o,tags:["autodocs"],argTypes:{placeholder:{control:"text"},ariaLabel:{control:"text"},clearAriaLabel:{control:"text"}}},e={args:{placeholder:"Search tournaments…",ariaLabel:"Search tournaments",clearAriaLabel:"Clear search"},render:r=>({components:{SearchInput:o},setup(){const a=c("");return{args:r,query:a}},template:`
      <div class="w-full max-w-xs space-y-2">
        <SearchInput
          v-model="query"
          :placeholder="args.placeholder"
          :aria-label="args.ariaLabel"
          :clear-aria-label="args.clearAriaLabel"
        />
        <p class="text-xs text-muted-foreground">Query: <code>{{ query || '—' }}</code></p>
      </div>
    `})},s={globals:{theme:"slate-teal-light"},args:{...e.args},render:e.render},l={globals:{theme:"slate-teal-dark"},args:{...e.args},render:e.render},n={args:{...e.args},render:r=>({components:{SearchInput:o},setup(){const a=c("MLB");return{args:r,query:a}},template:`
      <div class="w-full max-w-xs">
        <SearchInput
          v-model="query"
          :placeholder="args.placeholder"
          :aria-label="args.ariaLabel"
          :clear-aria-label="args.clearAriaLabel"
        />
      </div>
    `})},t={args:{...e.args},render:r=>({components:{SearchInput:o},setup(){const a=c("");return{args:r,query:a}},template:`
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
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-light'
  },
  args: {
    ...Default.args
  },
  render: Default.render
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-dark'
  },
  args: {
    ...Default.args
  },
  render: Default.render
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const h=["Default","Light","Dark","WithValue","InToolbar"];export{l as Dark,e as Default,t as InToolbar,s as Light,n as WithValue,h as __namedExportsOrder,g as default};
