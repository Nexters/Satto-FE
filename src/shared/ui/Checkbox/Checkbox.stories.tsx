import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Checkbox } from "./Checkbox";
import type { CheckboxProps } from "./Checkbox.types";

const meta = {
  title: "Design System/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Checkbox 컴포넌트는 단일 사이즈 토큰 기반 상태 구성",
      },
    },
  },
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    label: { control: "text" },
    onChange: { action: "changed" },
  },
  args: {
    checked: false,
    disabled: false,
    label: "Check Box",
  },
} satisfies Meta<typeof Checkbox>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { checked: false },
  render: (args: CheckboxProps) => {
    const [checked, setChecked] = useState<boolean>(args.checked ?? false);
    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={setChecked}
        label={args.label ?? "Check Box"}
      />
    );
  },
};

export const Checked: Story = {
  args: { checked: true },
};

export const DisabledUnchecked: Story = {
  args: { disabled: true },
};

export const DisabledChecked: Story = {
  args: { disabled: true, checked: true },
};
