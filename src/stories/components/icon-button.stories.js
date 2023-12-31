import { AiOutlineEye } from "react-icons/ai";
import { IconButton, TooltipProvider } from "@/components";

const argTypes = {
  variant: {
    options: ["primary", "secondary"],
    control: { type: "radio" },
    description: "Changes the look of the button",
    table: {
      defaultValue: { summary: "primary" }
    }
  },
  icon: {
    description: "The icon to be displayed within the button"
  },
  label: {
    description: "The label to be displayed as a tooltip over the button on hover",
    type: "string"
  },
  loading: {
    description: "If true, the button will be in a loading state",
    table: {
      defaultValue: { summary: false }
    },
    type: "boolean"
  },
  loaderProps: {
    description: "Any additional props to be passed into the loader component",
    type: "object"
  },
  className: {
    description:
      "Any additional CSS classes to be passed into the button. Existing classes will be overwritten in case of conflict",
    type: "string"
  }
};

export default {
  title: "Components/IconButton",
  component: (props) =>
    TooltipProvider({
      children: IconButton(props)
    }),
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes
};

export const Primary = {
  args: {
    variant: "primary",
    icon: AiOutlineEye(),
    label: "I'm a primary icon button"
  },
  argTypes
};

export const Secondary = {
  args: {
    variant: "secondary",
    icon: AiOutlineEye(),
    label: "I'm a secondary icon button"
  },
  argTypes
};

export const Loading = {
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
};
