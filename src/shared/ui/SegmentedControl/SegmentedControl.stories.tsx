import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { SegmentedControl, type SegmentedOption } from "./SegmentedControl";

const meta = {
  title: "Design System/Segmented Control",
  component: SegmentedControl,
  decorators: [
    (Story) => (
      <div style={{ width: 327 }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Figma Control/Segmented Control 패턴을 반영한 단일 사이즈 SegmentedControl 입니다.",
      },
    },
  },
  argTypes: {
    value: { control: false },
    options: { control: false },
    onChange: { action: "changed" },
    gapClassName: { control: "text" },
    color: { control: { type: "radio" }, options: ["primary", "gray"] },
  },
} satisfies Meta<typeof SegmentedControl>;

export default meta;

type Story = StoryObj<typeof meta>;

const baseOptions: SegmentedOption[] = [
  { label: "랭킹순", value: "rank" },
  { label: "번호순", value: "number" },
];

export const Default: Story = {
  args: { value: "", options: [], onChange: () => {} },
  render: () => {
    const [value, setValue] = useState<string>(baseOptions[0].value);
    return (
      <SegmentedControl
        value={value}
        options={baseOptions}
        onChange={setValue}
      />
    );
  },
};

export const GrayVariant: Story = {
  args: { value: "", options: [], onChange: () => {} },
  render: () => {
    const [value, setValue] = useState<string>(baseOptions[0].value);
    return (
      <SegmentedControl
        value={value}
        options={baseOptions}
        onChange={setValue}
        color="gray"
      />
    );
  },
};
