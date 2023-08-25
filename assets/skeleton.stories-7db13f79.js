import{S as t}from"./skeleton-54195d94.js";import"./tw-merge-06f6846c.js";import"./index-769a4e57.js";import"./button-23cbc42a.js";import"./index-cf225d18.js";import"./Combination-e7886bdc.js";import"./index-2ec7e7c1.js";import"./_commonjsHelpers-042e6b4d.js";import"./link-a9089d7f.js";import"./v4-a960c1f4.js";const r={containerClassName:{description:"Any additional CSS classes to be passed into the root element. Existing classes will be overwritten in case of conflict",type:"string"},className:{description:"Any additional CSS classes to be passed into the skeleton element. Existing classes will be overwritten in case of conflict",type:"string"},shade:{description:"The shade of the skeleton",control:{type:"radio"},options:["light","dark"],table:{defaultValue:{summary:"light"}}},count:{description:"The number of skeleton items to render",type:"number",table:{defaultValue:{summary:1}}}},T={title:"Components/Skeleton",component:t,parameters:{layout:"centered"},tags:["autodocs"]},e={argTypes:r,args:{className:"w-[300px] h-[30px]"}},s={argTypes:r,args:{className:"w-[300px] h-[30px]",count:3}},a={argTypes:r,args:{className:"p-12 flex flex-col gap-4",children:[t({className:"w-[300px] h-[30px]",shade:"dark"}),t({className:"w-[300px] h-[30px]",shade:"dark"}),t({className:"w-[300px] h-[30px]",shade:"dark"})]}};var o,n,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  argTypes,
  args: {
    className: "w-[300px] h-[30px]"
  }
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var p,c,i;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  argTypes,
  args: {
    className: "w-[300px] h-[30px]",
    count: 3
  }
}`,...(i=(c=s.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var m,d,x;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  argTypes,
  args: {
    className: "p-12 flex flex-col gap-4",
    children: [Skeleton({
      className: "w-[300px] h-[30px]",
      shade: "dark"
    }), Skeleton({
      className: "w-[300px] h-[30px]",
      shade: "dark"
    }), Skeleton({
      className: "w-[300px] h-[30px]",
      shade: "dark"
    })]
  }
}`,...(x=(d=a.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};const C=["Default","MultiLine","NestedSkeletons"];export{e as Default,s as MultiLine,a as NestedSkeletons,C as __namedExportsOrder,T as default};
//# sourceMappingURL=skeleton.stories-7db13f79.js.map
