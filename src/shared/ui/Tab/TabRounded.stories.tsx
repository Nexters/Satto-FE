import type { Meta, StoryObj } from "@storybook/react-vite";
import { TabRounded, type TabOption } from "./TabRounded";
import { useState } from "react";

const meta = {
  title: "Design System/Tab",
  component: TabRounded,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Tab/Round/Solid(선택)과 Tab/Round/Border(비선택) 스타일을 사용합니다.",
      },
    },
  },
  argTypes: {
    value: { control: false },
    options: { control: false },
    onChange: { action: "changed" },
    fullWidth: { control: "boolean" },
    gapClassName: { control: "text" },
  },
} satisfies Meta<typeof TabRounded>;

export default meta;

type Story = StoryObj<typeof meta>;

const baseOptions: TabOption[] = [
  { label: "랭킹순", value: "rank" },
  { label: "번호순", value: "number" },
];

export const Playground: Story = {
  args: { value: "", options: [], onChange: () => {} },
  render: () => {
    const [value, setValue] = useState<string>(baseOptions[0].value);
    return (
      <TabRounded value={value} options={baseOptions} onChange={setValue} />
    );
  },
};

export const DisabledExample: Story = {
  args: { value: "", options: [], onChange: () => {} },
  render: () => {
    const [value, setValue] = useState<string>("rank");
    return (
      <div className="flex flex-col gap-6">
        <TabRounded
          value={value}
          options={[
            { label: "랭킹순", value: "rank" },
            { label: "번호순", value: "number", disabled: true },
          ]}
          onChange={setValue}
        />
      </div>
    );
  },
};
