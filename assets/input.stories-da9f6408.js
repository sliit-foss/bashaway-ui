import{G as S}from"./link-3426ec6a.js";import{I}from"./pagination-c593dda7.js";import"./title-f8b3384f.js";import"./index-769a4e57.js";import"./tw-merge-06f6846c.js";import"./index-cf225d18.js";import"./Combination-17516053.js";import"./index-2ec7e7c1.js";import"./v4-a960c1f4.js";import"./_commonjsHelpers-042e6b4d.js";function y(x){return S({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}}]})(x)}const s={variant:{options:["primary","secondary"],control:{type:"radio"},description:"Changes the look of the input",table:{defaultValue:{summary:"primary"}}},placeholder:{description:"The placeholder text to be displayed in the input",type:"string"},prefixIcon:{description:"An icon to be displayed in the input before the text",type:"object"},suffixIcon:{description:"An icon to be displayed in the input after the text",type:"object"},className:{description:"Any additional CSS classes to be passed into the input. Existing classes will be overwritten in case of conflict",type:"string"}},A={title:"Components/Input",component:I,parameters:{layout:"centered"},tags:["autodocs"],argTypes:s},e={args:{placeholder:"Name"},argTypes:s},r={args:{placeholder:"Password",type:"password"},argTypes:s},a={args:{placeholder:"Search",prefixIcon:y({size:20,className:"text-gray-400"})},argTypes:s},t={args:{placeholder:"Search",suffixIcon:y({size:20,className:"text-gray-400"})}};var o,n,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    placeholder: "Name"
  },
  argTypes
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,p,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    placeholder: "Password",
    type: "password"
  },
  argTypes
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var l,m,h;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    placeholder: "Search",
    prefixIcon: BsSearch({
      size: 20,
      className: "text-gray-400"
    })
  },
  argTypes
}`,...(h=(m=a.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var u,g,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    placeholder: "Search",
    suffixIcon: BsSearch({
      size: 20,
      className: "text-gray-400"
    })
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const _=["Text","Password","WithPrefixIcon","WithSuffixIcon"];export{r as Password,e as Text,a as WithPrefixIcon,t as WithSuffixIcon,_ as __namedExportsOrder,A as default};
//# sourceMappingURL=input.stories-da9f6408.js.map
