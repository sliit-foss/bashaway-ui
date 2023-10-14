import{B as u}from"./pagination-79877c59.js";import"./title-f8b3384f.js";import"./index-769a4e57.js";import"./tw-merge-06f6846c.js";import"./index-cf225d18.js";import"./Combination-17516053.js";import"./index-2ec7e7c1.js";import"./link-3426ec6a.js";import"./v4-a960c1f4.js";import"./_commonjsHelpers-042e6b4d.js";const a={variant:{options:["primary","secondary"],control:{type:"radio"},description:"Changes the look of the button",table:{defaultValue:{summary:"primary"}}},children:{description:"Any JSX child / children to be passed into the button"},className:{description:"Any additional CSS classes to be passed into the button. Existing classes will be overwritten in case of conflict",type:"string"},loading:{description:"If true, the button will be in a loading state",table:{defaultValue:{summary:!1}},type:"boolean"},to:{description:"The URL to link to when the button is clicked. Should be used within a React Router",type:"string"},target:{description:"Specifies where to open the linked document. Should be used within a React Router",control:{type:"radio"},options:["_blank","_self"],table:{defaultValue:{summary:"_self"}}},wrapperClassName:{description:"Any additional CSS classes to be passed into the button wrapper. Should be used in conjunction with the `to` prop",type:"string"}},k={title:"Components/Button",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:a},e={args:{variant:"primary",children:"I'm a primary button"},argTypes:a},t={args:{variant:"secondary",children:"I'm a secondary button"},argTypes:a},r={args:{variant:"primary",children:"I'm loading",loading:!0},argTypes:a};var o,n,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: "I'm a primary button"
  },
  argTypes
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var i,c,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "I'm a secondary button"
  },
  argTypes
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,l,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: "I'm loading",
    loading: true
  },
  argTypes
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const C=["Primary","Secondary","Loading"];export{r as Loading,e as Primary,t as Secondary,C as __namedExportsOrder,k as default};
//# sourceMappingURL=button.stories-1edbc61e.js.map
