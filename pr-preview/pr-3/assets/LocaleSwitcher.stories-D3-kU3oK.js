import{g as r}from"./iframe-BuI7zV7p.js";import{_ as s}from"./LocaleSwitcher-f4IRr1WL.js";import"./preload-helper-CC8koZlP.js";import"./cn-CeOn-Pdh.js";import"./index-CiD9DIaN.js";import"./index-DwKrDyKp.js";const a=["en","ru","de"],o={en:"English",ru:"Русский",de:"Deutsch"},u={title:"Win Predict AI / UI / LocaleSwitcher",component:s,tags:["autodocs"],argTypes:{modelValue:{control:"select",options:[...a]},ariaLabel:{control:"text"}}},e={args:{modelValue:"en",locales:a,labels:o,ariaLabel:"Language"},render:l=>({components:{LocaleSwitcher:s},setup(){const t=r(l.modelValue);return{args:l,locale:t,locales:a,labels:o}},template:`
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
}`,...e.parameters?.docs?.source}}};const g=["Controlled"];export{e as Controlled,g as __namedExportsOrder,u as default};
