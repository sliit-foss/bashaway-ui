import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{E as t,o as n,t as r}from"./components-CJQkuDNY.js";import{a as i,i as a}from"./icons-PdGlN1rt.js";function o(e){return a({tag:`svg`,attr:{viewBox:`0 0 1024 1024`},child:[{tag:`path`,attr:{d:`M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z`},child:[]}]})(e)}function s(){return(s=e((()=>{i()})))()}var c,l,u,d,f,p;function m(){return(m=e((()=>{s(),r(),c={variant:{options:[`primary`,`secondary`],control:{type:`radio`},description:`Changes the look of the button`,table:{defaultValue:{summary:`primary`}}},icon:{description:`The icon to be displayed within the button`},label:{description:`The label to be displayed as a tooltip over the button on hover`,type:`string`},loading:{description:`If true, the button will be in a loading state`,table:{defaultValue:{summary:!1}},type:`boolean`},loaderProps:{description:`Any additional props to be passed into the loader component`,type:`object`},className:{description:`Any additional CSS classes to be passed into the button. Existing classes will be overwritten in case of conflict`,type:`string`}},l={title:`Components/IconButton`,component:e=>t({children:n(e)}),parameters:{layout:`centered`},tags:[`autodocs`],argTypes:c},u={args:{variant:`primary`,icon:o(),label:`I'm a primary icon button`},argTypes:c},d={args:{variant:`secondary`,icon:o(),label:`I'm a secondary icon button`},argTypes:c},f={args:{variant:`primary`,icon:o(),label:`I'm loading`,loading:!0,loaderProps:{height:16,width:16}},argTypes:c},p=[`Primary`,`Secondary`,`Loading`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    icon: AiOutlineEye(),
    label: "I'm a primary icon button"
  },
  argTypes
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    icon: AiOutlineEye(),
    label: "I'm a secondary icon button"
  },
  argTypes
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}}})))()}m();export{f as Loading,u as Primary,d as Secondary,p as __namedExportsOrder,l as default};