import{r as t}from"./iframe-SKCoYe1A.js";import{_ as s}from"./LocaleSwitcher-CxvGpEAe.js";import"./preload-helper-CWSTMizN.js";import"./cn-DY7j8TNJ.js";import"./index-IOIvUd6e.js";const a=["en","ru","de"],o={en:"English",ru:"Русский",de:"Deutsch"},p={title:"Win Predict AI / UI / LocaleSwitcher",component:s,tags:["autodocs"],argTypes:{modelValue:{control:"select",options:[...a]},ariaLabel:{control:"text"}}},e={args:{modelValue:"en",locales:a,labels:o,ariaLabel:"Language"},render:l=>({components:{LocaleSwitcher:s},setup(){const r=t(l.modelValue);return{args:l,locale:r,locales:a,labels:o}},template:`
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
}`,...e.parameters?.docs?.source}}};const u=["Controlled"];export{e as Controlled,u as __namedExportsOrder,p as default};
