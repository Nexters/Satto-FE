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
          "Figma 디자인 시스템을 기반으로 구현된 버튼 컴포넌트입니다. Primary, Tinted, Border, Border-Gray, Text 5가지 변형과 XL, L, M, S, XS 5가지 크기를 지원합니다.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "tinted", "border", "border-gray", "text"],
      description: "버튼의 스타일 변형",
    },
    size: {
      control: "select",
      options: ["xl", "l", "m", "s", "xs"],
      description: "버튼의 크기",
    },
    state: {
      control: "select",
      options: ["default", "pressed", "disabled"],
      description: "버튼의 상태",
    },
    children: {
      control: "text",
      description: "버튼 텍스트",
    },
    leftIcon: {
      control: false,
      description: "왼쪽 아이콘",
    },
    rightIcon: {
      control: false,
      description: "오른쪽 아이콘",
    },
    disabled: {
      control: "boolean",
      description: "비활성 상태",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    variant: "primary",
    size: "m",
    state: "default",
  },
};

export const AllVariants: Story = {
  args: {
    children: "Button",
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <Button variant="primary">Primary</Button>
        <Button variant="tinted">Tinted</Button>
        <Button variant="border">Border</Button>
        <Button variant="border-gray">Border Gray</Button>
        <Button variant="text">Text</Button>
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  args: {
    children: "Button",
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <Button size="xl">XL Button</Button>
        <Button size="l">L Button</Button>
        <Button size="m">M Button</Button>
        <Button size="s">S Button</Button>
        <Button size="xs">XS Button</Button>
      </div>
    </div>
  ),
};

export const AllStates: Story = {
  args: {
    children: "Button",
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Primary Button States</h3>
      <div className="flex gap-4 items-center">
        <Button variant="primary" state="default">
          Default
        </Button>
        <Button variant="primary" state="pressed">
          Pressed
        </Button>
        <Button variant="primary" state="disabled">
          Disabled
        </Button>
      </div>

      <h3 className="text-lg font-semibold">Tinted Button States</h3>
      <div className="flex gap-4 items-center">
        <Button variant="tinted" state="default">
          Default
        </Button>
        <Button variant="tinted" state="pressed">
          Pressed
        </Button>
        <Button variant="tinted" state="disabled">
          Disabled
        </Button>
      </div>

      <h3 className="text-lg font-semibold">Border Button States</h3>
      <div className="flex gap-4 items-center">
        <Button variant="border" state="default">
          Default
        </Button>
        <Button variant="border" state="pressed">
          Pressed
        </Button>
        <Button variant="border" state="disabled">
          Disabled
        </Button>
      </div>

      <h3 className="text-lg font-semibold">Border Gray Button States</h3>
      <div className="flex gap-4 items-center">
        <Button variant="border-gray" state="default">
          Default
        </Button>
        <Button variant="border-gray" state="pressed">
          Pressed
        </Button>
        <Button variant="border-gray" state="disabled">
          Disabled
        </Button>
      </div>

      <h3 className="text-lg font-semibold">Text Button States</h3>
      <div className="flex gap-4 items-center">
        <Button variant="text" state="default">
          Default
        </Button>
        <Button variant="text" state="pressed">
          Pressed
        </Button>
        <Button variant="text" state="disabled">
          Disabled
        </Button>
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  args: {
    children: "Button",
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <Button variant="primary" leftIcon={<span>←</span>}>
          Left Icon
        </Button>
        <Button variant="primary" rightIcon={<span>→</span>}>
          Right Icon
        </Button>
        <Button
          variant="primary"
          leftIcon={<span>←</span>}
          rightIcon={<span>→</span>}
        >
          Both Icons
        </Button>
      </div>
    </div>
  ),
};

export const SizeVariantMatrix: Story = {
  args: {
    children: "Button",
  },
  render: () => (
    <div className="flex flex-col gap-6">
      <h3 className="text-xl font-bold">Size × Variant Matrix</h3>
      {(["xl", "l", "m", "s", "xs"] as const).map((size) => (
        <div key={size} className="flex flex-col gap-2">
          <h4 className="text-lg font-semibold capitalize">
            {size.toUpperCase()} Size
          </h4>
          <div className="flex gap-4 items-center">
            <Button variant="primary" size={size}>
              Primary
            </Button>
            <Button variant="tinted" size={size}>
              Tinted
            </Button>
            <Button variant="border" size={size}>
              Border
            </Button>
            <Button variant="border-gray" size={size}>
              Border Gray
            </Button>
            <Button variant="text" size={size}>
              Text
            </Button>
          </div>
        </div>
      ))}
    </div>
  ),
};
