import{_ as o}from"./ThemeToggle-D5B_QNyk.js";import"./iframe-CZbg21jV.js";import"./preload-helper-DR0Ra8Iv.js";import"./index-BRmrF3c1.js";import"./index-BfW2HXGB.js";import"./index-D7g1-zI5.js";const i={title:"Win Predict AI / UI / ThemeToggle",component:o,tags:["autodocs"],argTypes:{ariaLabelLight:{control:"text"},ariaLabelDark:{control:"text"}}},e={args:{ariaLabelLight:"Switch to light theme",ariaLabelDark:"Switch to dark theme"}},a={globals:{theme:"slate-teal-light"},args:{...e.args}},r={globals:{theme:"slate-teal-dark"},args:{...e.args}},l=`
  <header
    class="flex h-14 items-center justify-end border-b border-border bg-background/80 px-6 shadow-sm backdrop-blur-md"
  >
    <ThemeToggle v-bind="args" />
  </header>
`,t={globals:{theme:"claude-plus-light"},args:{...e.args},render:n=>({components:{ThemeToggle:o},setup(){return{args:n}},template:l})},s={globals:{theme:"claude-plus-dark"},args:{...e.args},render:n=>({components:{ThemeToggle:o},setup(){return{args:n}},template:l})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    ariaLabelLight: 'Switch to light theme',
    ariaLabelDark: 'Switch to dark theme'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-light'
  },
  args: {
    ...Default.args
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'slate-teal-dark'
  },
  args: {
    ...Default.args
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'claude-plus-light'
  },
  args: {
    ...Default.args
  },
  render: args => ({
    components: {
      ThemeToggle
    },
    setup() {
      return {
        args
      };
    },
    template: headerShellTemplate
  })
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'claude-plus-dark'
  },
  args: {
    ...Default.args
  },
  render: args => ({
    components: {
      ThemeToggle
    },
    setup() {
      return {
        args
      };
    },
    template: headerShellTemplate
  })
}`,...s.parameters?.docs?.source}}};const h=["Default","Light","Dark","ClaudePlusLight","ClaudePlusDark"];export{s as ClaudePlusDark,t as ClaudePlusLight,r as Dark,e as Default,a as Light,h as __namedExportsOrder,i as default};
