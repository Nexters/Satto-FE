import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta = {
  title: "Design System/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "이미지 기반으로 구현된 버튼 컴포넌트입니다. Primary, Filled, Border, Border-Gray, Text 변형과 5가지 크기를 지원합니다.",
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
