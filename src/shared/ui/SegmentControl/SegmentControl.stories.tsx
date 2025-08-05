import type { Meta, StoryObj } from "@storybook/react-vite";
import type { SegmentControlProps } from "./SegmentControl";
import { useState } from "react";
import { SegmentControl } from "./SegmentControl";
import { Icon } from "../Icon";

const meta = {
  title: "Design System/SegmentControl",
  component: SegmentControl,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "탭 전환을 위한 세그먼트 컨트롤 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    fullWidth: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof SegmentControl>;

export default meta;
type Story = StoryObj<typeof meta>;

const basicOptions = [
  { value: "history", label: "지난 번호" },
  { value: "ranking", label: "번호 랭킹" },
];

const iconOptions = [
  { value: "list", label: "목록", icon: <Icon name="list" size="sm" /> },
  { value: "chart", label: "차트", icon: <Icon name="chart" size="sm" /> },
];

export const Basic: Story = {
  args: {
    options: basicOptions,
    value: "history",
    onChange: () => {},
  },
  render: (args: SegmentControlProps) => {
    const [value, setValue] = useState(args.value);
    return (
      <SegmentControl
        {...args}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const WithIcons: Story = {
  args: {
    options: iconOptions,
    value: "list",
    onChange: () => {},
  },
  render: (args: SegmentControlProps) => {
    const [value, setValue] = useState(args.value);
    return (
      <SegmentControl
        {...args}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const Small: Story = {
  args: {
    options: basicOptions,
    value: "history",
    onChange: () => {},
    size: "sm",
  },
  render: (args: SegmentControlProps) => {
    const [value, setValue] = useState(args.value);
    return (
      <SegmentControl
        {...args}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const Large: Story = {
  args: {
    options: basicOptions,
    value: "history",
    onChange: () => {},
    size: "lg",
  },
  render: (args: SegmentControlProps) => {
    const [value, setValue] = useState(args.value);
    return (
      <SegmentControl
        {...args}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const FullWidth: Story = {
  args: {
    options: basicOptions,
    value: "history",
    onChange: () => {},
    fullWidth: true,
  },
  render: (args: SegmentControlProps) => {
    const [value, setValue] = useState(args.value);
    return (
      <div className="w-80">
        <SegmentControl
          {...args}
          value={value}
          onChange={setValue}
        />
      </div>
    );
  },
};

const multipleOptions = [
  { value: "all", label: "전체" },
  { value: "recent", label: "최근" },
  { value: "popular", label: "인기" },
  { value: "favorite", label: "즐겨찾기" },
];

export const MultipleOptions: Story = {
  args: {
    options: multipleOptions,
    value: "all",
    onChange: () => {},
  },
  render: (args: SegmentControlProps) => {
    const [value, setValue] = useState(args.value);
    return (
      <SegmentControl
        {...args}
        value={value}
        onChange={setValue}
      />
    );
  },
};
