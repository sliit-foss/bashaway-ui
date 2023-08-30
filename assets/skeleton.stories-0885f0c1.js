import{a as t}from"./pagination-10599bea.js";import"./title-f8b3384f.js";import"./index-769a4e57.js";import"./tw-merge-06f6846c.js";import"./index-cf225d18.js";import"./Combination-91fcf32f.js";import"./index-2ec7e7c1.js";import"./link-3426ec6a.js";import"./v4-a960c1f4.js";import"./_commonjsHelpers-042e6b4d.js";const o={containerClassName:{description:"Any additional CSS classes to be passed into the root element. Existing classes will be overwritten in case of conflict",type:"string"},className:{description:"Any additional CSS classes to be passed into the skeleton element. Existing classes will be overwritten in case of conflict",type:"string"},shade:{description:"The shade of the skeleton",control:{type:"radio"},options:["light","dark"],table:{defaultValue:{summary:"light"}}},count:{description:"The number of skeleton items to render",type:"number",table:{defaultValue:{summary:1}}}},C={title:"Components/Skeleton",component:t,parameters:{layout:"centered"},tags:["autodocs"]},e={argTypes:o,args:{className:"w-[300px] h-[30px]"}},s={argTypes:o,args:{className:"w-[300px] h-[30px]",count:3}},a={argTypes:o,args:{className:"p-12 flex flex-col gap-4",children:[t({className:"w-[300px] h-[30px]",shade:"dark"}),t({className:"w-[300px] h-[30px]",shade:"dark"}),t({className:"w-[300px] h-[30px]",shade:"dark"})]}};var n,r,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  argTypes,
  args: {
    className: "w-[300px] h-[30px]"
  }
}`,...(p=(r=e.parameters)==null?void 0:r.docs)==null?void 0:p.source}}};var l,c,i;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  argTypes,
  args: {
    className: "w-[300px] h-[30px]",
    count: 3
  }
}`,...(i=(c=s.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var m,d,x;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(x=(d=a.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};const T=["SingleSkeleton","MultiLine","NestedSkeletons"];export{s as MultiLine,a as NestedSkeletons,e as SingleSkeleton,T as __namedExportsOrder,C as default};
//# sourceMappingURL=skeleton.stories-0885f0c1.js.map
