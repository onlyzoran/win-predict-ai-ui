import{r as t}from"./iframe-DVs0euI0.js";import{_ as r}from"./LocaleSwitcher-CXfG7MJk.js";import"./preload-helper-BvwbUWYJ.js";import"./RovingFocusGroup-Ceaij-wa.js";import"./index-BUysF9Tp.js";import"./cn-DaT-yT0k.js";import"./index-BHzOPFEc.js";const a=["en","ru","de"],o={en:"English",ru:"Русский",de:"Deutsch"},g={title:"Win Predict AI / UI / LocaleSwitcher",component:r,tags:["autodocs"],argTypes:{modelValue:{control:"select",options:[...a]},ariaLabel:{control:"text"}}},e={args:{modelValue:"en",locales:a,labels:o,ariaLabel:"Language"},render:l=>({components:{LocaleSwitcher:r},setup(){const s=t(l.modelValue);return{args:l,locale:s,locales:a,labels:o}},template:`
      <div class="flex items-center gap-3">
        <LocaleSwitcher
          v-model="locale"
          :locales="locales"
          :labels="labels"
          :aria-label="args.ariaLabel"
        />
        <span class="text-sm text-muted-foreground">Selected: <code>{{ locale }}</code></span>
      </div>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: 'en',
    locales,
    labels,
    ariaLabel: 'Language'
  },
  render: args => ({
    components: {
      LocaleSwitcher
    },
    setup() {
      const locale = ref(args.modelValue);
      return {
        args,
        locale,
        locales,
        labels
      };
    },
    template: \`
      <div class="flex items-center gap-3">
        <LocaleSwitcher
          v-model="locale"
          :locales="locales"
          :labels="labels"
          :aria-label="args.ariaLabel"
        />
        <span class="text-sm text-muted-foreground">Selected: <code>{{ locale }}</code></span>
      </div>
    \`
  })
}`,...e.parameters?.docs?.source}}};const b=["Controlled"];export{e as Controlled,b as __namedExportsOrder,g as default};
