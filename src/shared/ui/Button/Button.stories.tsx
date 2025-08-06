import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";
import { Icon } from "../Icon";

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
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary"],
      description: "버튼의 시각적 스타일 변형",
    },
    size: {
      control: { type: "select" },
      options: ["xs", "s", "m", "l", "xl"],
      description: "버튼의 크기",
    },
    loading: {
      control: { type: "boolean" },
      description: "로딩 상태 표시",
    },
    fullWidth: {
      control: { type: "boolean" },
      description: "전체 너비 사용",
    },
    disabled: {
      control: { type: "boolean" },
      description: "비활성화 상태",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 변형 스토리들
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Button",
  },
};

// 크기별 스토리들
export const ExtraSmall: Story = {
  args: {
    size: "xs",
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "s",
    children: "Button",
  },
};

export const Medium: Story = {
  args: {
    size: "m",
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "l",
    children: "Button",
  },
};

export const ExtraLarge: Story = {
  args: {
    size: "xl",
    children: "Button",
  },
};

// 아이콘 포함 버튼
export const WithLeftIcon: Story = {
  args: {
    children: "Button",
    icon: <Icon name="chevron-left" size="sm" />,
    iconPosition: "left",
  },
};

export const WithRightIcon: Story = {
  args: {
    children: "Button",
    icon: <Icon name="chevron-right" size="sm" />,
    iconPosition: "right",
  },
};

// 상태별 스토리들
export const Loading: Story = {
  args: {
    loading: true,
    children: "Button",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Button",
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: "Button",
  },
  parameters: {
    layout: "padded",
  },
};

// 모든 변형 시각화
export const AllVariants = {
  render: () => (
    <div className="space-y-8 p-4">
      <div>
        <h3 className="text-lg font-bold mb-4">버튼 변형 (Variants)</h3>
        <div className="flex gap-4 flex-wrap">
          <Button variant="primary">Primary</Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4">버튼 크기 (Sizes)</h3>
        <div className="flex gap-4 items-center flex-wrap">
          <Button size="xs">XS</Button>
          <Button size="s">S</Button>
          <Button size="m">M</Button>
          <Button size="l">L</Button>
          <Button size="xl">XL</Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4">상태 (States)</h3>
        <div className="flex gap-4 flex-wrap">
          <Button>Default</Button>
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};

// 이미지 기반 디자인 매트릭스
export const DesignMatrix = {
  render: () => (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-xl font-bold mb-6">이미지 기반 Button 매트릭스</h2>

      {/* Button/Primary */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4">
          Button/Primary - 상태별 시각화
        </h3>
        <div className="grid grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-sm text-gray-500 mb-4 font-medium">
              Default (#7843FF)
            </div>
            <Button variant="primary" size="xl">
              Button
            </Button>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-500 mb-4 font-medium">
              Pressed (#6A00FF)
            </div>
            <Button
              variant="primary"
              size="xl"
              style={{ backgroundColor: "#6A00FF" }}
            >
              Button
            </Button>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-500 mb-4 font-medium">
              Disabled (#DDD0FF)
            </div>
            <Button variant="primary" size="xl" disabled>
              Button
            </Button>
          </div>
        </div>

        {/* 다양한 사이즈로 테스트 */}
        <div className="mt-8">
          <h4 className="text-md font-medium mb-4">다양한 사이즈</h4>
          <div className="flex items-center gap-4 flex-wrap">
            <Button variant="primary" size="xs">
              XS
            </Button>
            <Button variant="primary" size="s">
              S
            </Button>
            <Button variant="primary" size="m">
              M
            </Button>
            <Button variant="primary" size="l">
              L
            </Button>
            <Button variant="primary" size="xl">
              XL
            </Button>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};
