import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t,t as n}from"./components-CJQkuDNY.js";var r,i,a,o,s,c;function l(){return(l=e((()=>{n(),r={containerClassName:{description:`Any additional CSS classes to be passed into the root element. Existing classes will be overwritten in case of conflict`,type:`string`},className:{description:`Any additional CSS classes to be passed into the skeleton element. Existing classes will be overwritten in case of conflict`,type:`string`},shade:{description:`The shade of the skeleton`,control:{type:`radio`},options:[`light`,`dark`],table:{defaultValue:{summary:`light`}}},count:{description:`The number of skeleton items to render`,type:`number`,table:{defaultValue:{summary:1}}}},i={title:`Components/Skeleton`,component:t,parameters:{layout:`centered`},tags:[`autodocs`]},a={argTypes:r,args:{className:`w-[300px] h-[30px]`}},o={argTypes:r,args:{className:`w-[300px] h-[30px]`,count:3}},s={argTypes:r,args:{className:`p-12 flex flex-col gap-4`,children:[t({className:`w-[300px] h-[30px]`,shade:`dark`}),t({className:`w-[300px] h-[30px]`,shade:`dark`}),t({className:`w-[300px] h-[30px]`,shade:`dark`})]}},c=[`SingleSkeleton`,`MultiLine`,`NestedSkeletons`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    className: "w-[300px] h-[30px]"
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    className: "w-[300px] h-[30px]",
    count: 3
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    className: "p-12 flex flex-col gap-4",
    children: [SkeletonComponent({
      className: "w-[300px] h-[30px]",
      shade: "dark"
    }), SkeletonComponent({
      className: "w-[300px] h-[30px]",
      shade: "dark"
    }), SkeletonComponent({
      className: "w-[300px] h-[30px]",
      shade: "dark"
    })]
  }
}`,...s.parameters?.docs?.source}}}})))()}l();export{o as MultiLine,s as NestedSkeletons,a as SingleSkeleton,c as __namedExportsOrder,i as default};