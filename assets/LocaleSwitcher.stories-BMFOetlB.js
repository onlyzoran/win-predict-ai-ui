import{r as t}from"./iframe-DuI5vkNz.js";import{_ as r}from"./LocaleSwitcher-DY7m2XzD.js";import"./preload-helper-CWSTMizN.js";import"./RovingFocusGroup-CLf0CVnC.js";import"./cn-CBdnK8wL.js";import"./index-xocHJDrQ.js";import"./nullish-CHIgUVhi.js";const a=["en","ru","de"],o={en:"English",ru:"Русский",de:"Deutsch"},g={title:"Win Predict AI / UI / LocaleSwitcher",component:r,tags:["autodocs"],argTypes:{modelValue:{control:"select",options:[...a]},ariaLabel:{control:"text"}}},e={args:{modelValue:"en",locales:a,labels:o,ariaLabel:"Language"},render:l=>({components:{LocaleSwitcher:r},setup(){const s=t(l.modelValue);return{args:l,locale:s,locales:a,labels:o}},template:`
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
