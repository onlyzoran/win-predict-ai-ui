import{w as t}from"./storyHelpers-BtxSlO8i.js";import{_ as r}from"./Progress-Chk5c7QS.js";import"./iframe-CrnZ8d65.js";import"./preload-helper-QR2TdjE1.js";import"./createContext-DsPWDOFb.js";import"./nullish-CHIgUVhi.js";import"./useForwardExpose-BVWDrM11.js";import"./index-BzlL2piU.js";import"./index-Dz5-xlzP.js";import"./Primitive-CrksTsCf.js";import"./cn-DaT-yT0k.js";const v={title:"Win Predict AI / UI / Progress",component:r,tags:["autodocs"],argTypes:{modelValue:{control:{type:"range",min:0,max:100,step:1}}}},e={args:{modelValue:64},render:a=>({components:{Progress:r},setup(){return{args:a}},template:`
      <div class="w-full max-w-md space-y-2">
        <Progress v-bind="args" />
        <p class="text-xs text-muted-foreground">Season progress — {{ args.modelValue }}%</p>
      </div>
    `})},{ZincLight:P,ZincDark:f,SlateTealLight:y,SlateTealDark:w,ClaudePlusLight:D,ClaudePlusDark:S}=t(e),s={render:()=>({components:{Progress:r},template:`
      <div class="w-full max-w-md space-y-4">
        <div class="space-y-1">
          <p class="text-xs text-muted-foreground">0%</p>
          <Progress :model-value="0" />
        </div>
        <div class="space-y-1">
          <p class="text-xs text-muted-foreground">33%</p>
          <Progress :model-value="33" />
        </div>
        <div class="space-y-1">
          <p class="text-xs text-muted-foreground">100%</p>
          <Progress :model-value="100" />
        </div>
      </div>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: 64
  },
  render: args => ({
    components: {
      Progress
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="w-full max-w-md space-y-2">
        <Progress v-bind="args" />
        <p class="text-xs text-muted-foreground">Season progress — {{ args.modelValue }}%</p>
      </div>
    \`
  })
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Progress
    },
    template: \`
      <div class="w-full max-w-md space-y-4">
        <div class="space-y-1">
          <p class="text-xs text-muted-foreground">0%</p>
          <Progress :model-value="0" />
        </div>
        <div class="space-y-1">
          <p class="text-xs text-muted-foreground">33%</p>
          <Progress :model-value="33" />
        </div>
        <div class="space-y-1">
          <p class="text-xs text-muted-foreground">100%</p>
          <Progress :model-value="100" />
        </div>
      </div>
    \`
  })
}`,...s.parameters?.docs?.source}}};const h=["Default","ZincLight","ZincDark","SlateTealLight","SlateTealDark","ClaudePlusLight","ClaudePlusDark","Values"];export{S as ClaudePlusDark,D as ClaudePlusLight,e as Default,w as SlateTealDark,y as SlateTealLight,s as Values,f as ZincDark,P as ZincLight,h as __namedExportsOrder,v as default};
