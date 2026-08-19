import{r as s}from"./iframe-dNbJB5Cb.js";import{_ as r}from"./LocaleSwitcher-xkfvsCdz.js";import"./preload-helper-DR0Ra8Iv.js";import"./RovingFocusGroup-CFV45uun.js";import"./cn-NULjfwdo.js";import"./index-DH-FERnp.js";import"./index-CrwLdkTu.js";import"./useId-DHJB7rgs.js";import"./useForwardExpose-CLoJ9jCo.js";import"./nullish-CHIgUVhi.js";const a=["en","ru","de"],o={en:"English",ru:"Русский",de:"Deutsch"},f={title:"Win Predict AI / UI / LocaleSwitcher",component:r,tags:["autodocs"],argTypes:{modelValue:{control:"select",options:[...a]},ariaLabel:{control:"text"}}},e={args:{modelValue:"en",locales:a,labels:o,ariaLabel:"Language"},render:l=>({components:{LocaleSwitcher:r},setup(){const t=s(l.modelValue);return{args:l,locale:t,locales:a,labels:o}},template:`
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
}`,...e.parameters?.docs?.source}}};const x=["Controlled"];export{e as Controlled,x as __namedExportsOrder,f as default};
