import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t,v as n}from"./components-CJQkuDNY.js";var r,i,a,o,s,c;function l(){return(l=e((()=>{t(),r={variant:{options:[`primary`,`secondary`],control:{type:`radio`},description:`Changes the look of the button`,table:{defaultValue:{summary:`primary`}}},children:{description:`Any JSX child / children to be passed into the button`},className:{description:`Any additional CSS classes to be passed into the button. Existing classes will be overwritten in case of conflict`,type:`string`},loading:{description:`If true, the button will be in a loading state`,table:{defaultValue:{summary:!1}},type:`boolean`},to:{description:`The URL to link to when the button is clicked. Should be used within a React Router`,type:`string`},target:{description:`Specifies where to open the linked document. Should be used within a React Router`,control:{type:`radio`},options:[`_blank`,`_self`],table:{defaultValue:{summary:`_self`}}},wrapperClassName:{description:"Any additional CSS classes to be passed into the button wrapper. Should be used in conjunction with the `to` prop",type:`string`}},i={title:`Components/Button`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:r},a={args:{variant:`primary`,children:`I'm a primary button`},argTypes:r},o={args:{variant:`secondary`,children:`I'm a secondary button`},argTypes:r},s={args:{variant:`primary`,children:`I'm loading`,loading:!0},argTypes:r},c=[`Primary`,`Secondary`,`Loading`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: "I'm a primary button"
  },
  argTypes
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "I'm a secondary button"
  },
  argTypes
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: "I'm loading",
    loading: true
  },
  argTypes
}`,...s.parameters?.docs?.source}}}})))()}l();export{s as Loading,a as Primary,o as Secondary,c as __namedExportsOrder,i as default};