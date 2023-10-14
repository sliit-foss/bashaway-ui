import{G as g}from"./link-3426ec6a.js";import{f as b,g as h}from"./pagination-2792bd39.js";import"./title-f8b3384f.js";import"./index-769a4e57.js";import"./tw-merge-06f6846c.js";import"./index-cf225d18.js";import"./Combination-17516053.js";import"./index-2ec7e7c1.js";import"./v4-a960c1f4.js";import"./_commonjsHelpers-042e6b4d.js";function n(r){return g({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]})(r)}const e={variant:{options:["primary","secondary"],control:{type:"radio"},description:"Changes the look of the button",table:{defaultValue:{summary:"primary"}}},icon:{description:"The icon to be displayed within the button"},label:{description:"The label to be displayed as a tooltip over the button on hover",type:"string"},loading:{description:"If true, the button will be in a loading state",table:{defaultValue:{summary:!1}},type:"boolean"},loaderProps:{description:"Any additional props to be passed into the loader component",type:"object"},className:{description:"Any additional CSS classes to be passed into the button. Existing classes will be overwritten in case of conflict",type:"string"}},O={title:"Components/IconButton",component:r=>b({children:h(r)}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:e},o={args:{variant:"primary",icon:n(),label:"I'm a primary icon button"},argTypes:e},a={args:{variant:"secondary",icon:n(),label:"I'm a secondary icon button"},argTypes:e},t={args:{variant:"primary",icon:n(),label:"I'm loading",loading:!0,loaderProps:{height:16,width:16}},argTypes:e};var i,s,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    icon: AiOutlineEye(),
    label: "I'm a primary icon button"
  },
  argTypes
}`,...(c=(s=o.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var p,l,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    icon: AiOutlineEye(),
    label: "I'm a secondary icon button"
  },
  argTypes
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,u,y;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    icon: AiOutlineEye(),
    label: "I'm loading",
    loading: true,
    loaderProps: {
      height: 16,
      width: 16
    }
  },
  argTypes
}`,...(y=(u=t.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const x=["Primary","Secondary","Loading"];export{t as Loading,o as Primary,a as Secondary,x as __namedExportsOrder,O as default};
//# sourceMappingURL=icon-button.stories-574469e9.js.map
