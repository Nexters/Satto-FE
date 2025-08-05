import type { Meta, StoryObj } from "@storybook/react-vite";
import { Typography } from "./Typography";

const meta = {
  title: "Design System/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "SATTO 프로젝트의 타이포그래피 컴포넌트입니다. Figma 디자인 시스템을 기반으로 한 일관된 텍스트 스타일을 제공합니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "display-28",
        "display-26",
        "display-24",
        "display-22",
        "display-20",
        "text-18",
        "text-16",
        "text-14",
        "text-12",
      ],
    },
    weight: {
      control: { type: "select" },
      options: ["regular", "medium", "semibold", "bold"],
    },
    color: {
      control: { type: "select" },
      options: [
        "black", "white",
        "primary", "primary-50", "primary-100", "primary-200", "primary-300", "primary-400", "primary-500", "primary-600", "primary-700", "primary-800", "primary-900",
        "gray", "gray-50", "gray-100", "gray-200", "gray-300", "gray-400", "gray-500", "gray-600", "gray-700", "gray-800", "gray-900",
        "purple", "purple-50", "purple-100", "purple-200", "purple-300", "purple-400", "purple-500", "purple-600", "purple-700", "purple-800", "purple-900",
        "orange", "orange-50", "orange-100", "orange-200", "orange-300", "orange-400", "orange-500", "orange-600", "orange-700", "orange-800", "orange-900",
        "yellow", "yellow-50", "yellow-100", "yellow-200", "yellow-300", "yellow-400", "yellow-500", "yellow-600", "yellow-700", "yellow-800", "yellow-900",
        "green", "green-50", "green-100", "green-200", "green-300", "green-400", "green-500", "green-600", "green-700", "green-800", "green-900",
        "blue", "blue-50", "blue-100", "blue-200", "blue-300", "blue-400", "blue-500", "blue-600", "blue-700", "blue-800", "blue-900",
      ],
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 인터랙티브 스토리
export const Default: Story = {
  args: {
    variant: "text-16",
    weight: "regular",
    color: "black",
    children: "타이포그래피 텍스트 예시",
  },
};

// Display 스타일 쇼케이스
export const DisplayStyles: Story = {
  args: {
    children: "Display Text",
  },
  render: () => (
    <div className="space-y-6 p-6">
      <div>
        <h3 className="text-sm font-semibold text-gray-500 mb-3">Display Styles</h3>
        <div className="space-y-4">
          <Typography variant="display-28" weight="bold">
            Display 28 - 메인 제목
          </Typography>
          <Typography variant="display-26" weight="semibold">
            Display 26 - 서브 제목
          </Typography>
          <Typography variant="display-24" weight="semibold">
            Display 24 - 섹션 제목
          </Typography>
          <Typography variant="display-22" weight="medium">
            Display 22 - 카드 제목
          </Typography>
          <Typography variant="display-20" weight="medium">
            Display 20 - 작은 제목
          </Typography>
        </div>
      </div>
    </div>
  ),
};

// Text 스타일 쇼케이스
export const TextStyles: Story = {
  args: {
    children: "Text Content",
  },
  render: () => (
    <div className="space-y-6 p-6">
      <div>
        <h3 className="text-sm font-semibold text-gray-500 mb-3">Text Styles</h3>
        <div className="space-y-3">
          <Typography variant="text-18" weight="semibold">
            Text 18 - 중요한 본문 텍스트
          </Typography>
          <Typography variant="text-16" weight="regular">
            Text 16 - 기본 본문 텍스트입니다. 가장 많이 사용되는 크기입니다.
          </Typography>
          <Typography variant="text-14" weight="regular" color="gray">
            Text 14 - 보조 설명 텍스트나 메타 정보에 사용합니다.
          </Typography>
          <Typography variant="text-12" weight="regular" color="gray">
            Text 12 - 캡션이나 라벨 텍스트에 사용합니다.
          </Typography>
        </div>
      </div>
    </div>
  ),
};

// 색상 변형
export const ColorVariants: Story = {
  args: {
    children: "Color Text",
  },
  render: () => (
    <div className="space-y-8 p-6">
      {/* Common Colors */}
      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-3">Common Colors</h4>
        <div className="space-y-2">
          <Typography variant="text-16" weight="semibold" color="black">
            Black - 기본 텍스트 색상
          </Typography>
          <div className="bg-gray-800 p-2 rounded">
            <Typography variant="text-16" weight="semibold" color="white">
              White - 어두운 배경용 텍스트
            </Typography>
          </div>
        </div>
      </div>

      {/* Primary Colors */}
      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-3">Primary Colors (Red)</h4>
        <div className="space-y-2">
          <Typography variant="text-14" weight="medium" color="primary-500">
            Primary 500 - 메인 브랜드 컬러 (#F34854)
          </Typography>
          <Typography variant="text-14" weight="medium" color="primary-300">
            Primary 300 - 밝은 브랜드 컬러
          </Typography>
          <Typography variant="text-14" weight="medium" color="primary-700">
            Primary 700 - 진한 브랜드 컬러
          </Typography>
        </div>
      </div>

      {/* Gray Colors */}
      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-3">Gray Colors</h4>
        <div className="space-y-1">
          <Typography variant="text-14" weight="medium" color="gray-900">
            Gray 900 - 가장 진한 회색
          </Typography>
          <Typography variant="text-14" weight="medium" color="gray-700">
            Gray 700 - 제목용 회색
          </Typography>
          <Typography variant="text-14" weight="medium" color="gray-500">
            Gray 500 - 기본 보조 텍스트
          </Typography>
          <Typography variant="text-14" weight="medium" color="gray-300">
            Gray 300 - 밝은 보조 텍스트
          </Typography>
        </div>
      </div>

      {/* Secondary Colors */}
      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-3">Secondary Colors</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <Typography variant="text-14" weight="medium" color="purple-500">
              Purple 500
            </Typography>
            <Typography variant="text-14" weight="medium" color="orange-500">
              Orange 500
            </Typography>
            <Typography variant="text-14" weight="medium" color="yellow-600">
              Yellow 600
            </Typography>
          </div>
          <div className="space-y-1">
            <Typography variant="text-14" weight="medium" color="green-500">
              Green 500
            </Typography>
            <Typography variant="text-14" weight="medium" color="blue-500">
              Blue 500
            </Typography>
          </div>
        </div>
      </div>
    </div>
  ),
};

// 전체 색상 팔레트
export const FullColorPalette: Story = {
  args: {
    children: "Color Palette",
  },
  render: () => {
    const colorGroups = {
      "Primary (Red)": [
        "primary-50", "primary-100", "primary-200", "primary-300", "primary-400",
        "primary-500", "primary-600", "primary-700", "primary-800", "primary-900"
      ],
      "Gray": [
        "gray-50", "gray-100", "gray-200", "gray-300", "gray-400",
        "gray-500", "gray-600", "gray-700", "gray-800", "gray-900"
      ],
      "Purple": [
        "purple-50", "purple-100", "purple-200", "purple-300", "purple-400",
        "purple-500", "purple-600", "purple-700", "purple-800", "purple-900"
      ],
      "Orange": [
        "orange-50", "orange-100", "orange-200", "orange-300", "orange-400",
        "orange-500", "orange-600", "orange-700", "orange-800", "orange-900"
      ],
      "Yellow": [
        "yellow-50", "yellow-100", "yellow-200", "yellow-300", "yellow-400",
        "yellow-500", "yellow-600", "yellow-700", "yellow-800", "yellow-900"
      ],
      "Green": [
        "green-50", "green-100", "green-200", "green-300", "green-400",
        "green-500", "green-600", "green-700", "green-800", "green-900"
      ],
      "Blue": [
        "blue-50", "blue-100", "blue-200", "blue-300", "blue-400",
        "blue-500", "blue-600", "blue-700", "blue-800", "blue-900"
      ],
    };

    return (
      <div className="space-y-6 p-6">
        <Typography variant="display-24" weight="bold" className="mb-6">
          전체 색상 팔레트
        </Typography>
        
        {Object.entries(colorGroups).map(([groupName, colors]) => (
          <div key={groupName}>
            <Typography variant="text-16" weight="semibold" color="gray-700" className="mb-3">
              {groupName}
            </Typography>
            <div className="grid grid-cols-5 gap-2 mb-4">
              {colors.map((color) => (
                <div key={color} className="text-center">
                  <Typography 
                    variant="text-12" 
                    weight="medium" 
                    color={color as any}
                    className="block mb-1"
                  >
                    Aa
                  </Typography>
                  <Typography variant="text-12" weight="regular" color="gray-500">
                    {color}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <div className="mt-8">
          <Typography variant="text-16" weight="semibold" color="gray-700" className="mb-3">
            Common Colors
          </Typography>
          <div className="flex gap-4">
            <div className="text-center">
              <Typography variant="text-12" weight="medium" color="black" className="block mb-1">
                Aa
              </Typography>
              <Typography variant="text-12" weight="regular" color="gray-500">
                black
              </Typography>
            </div>
            <div className="text-center bg-gray-800 p-2 rounded">
              <Typography variant="text-12" weight="medium" color="white" className="block mb-1">
                Aa
              </Typography>
              <Typography variant="text-12" weight="regular" color="gray-300">
                white
              </Typography>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

// 실제 사용 예시
export const UsageExamples: Story = {
  args: {
    children: "Usage Example",
  },
  render: () => (
    <div className="space-y-8 p-6 max-w-2xl">
      <article>
        <Typography variant="display-28" weight="bold" className="mb-4">
          뭐나왔지
        </Typography>
        <Typography variant="text-16" weight="regular" color="gray" className="mb-6">
          로또 번호 히스토리를 확인하고 분석해보세요.
        </Typography>
        
        <div className="space-y-4">
          <Typography variant="display-22" weight="semibold" className="mb-2">
            1234회차 당첨번호
          </Typography>
          <Typography variant="text-16" weight="regular">
            2024년 8월 5일 추첨된 로또 번호입니다.
          </Typography>
          <Typography variant="text-14" weight="regular" color="gray">
            당첨금: 25억원 (1등 당첨자 3명)
          </Typography>
          <Typography variant="text-12" weight="regular" color="gray">
            추첨일: 2024.08.05 (토)
          </Typography>
        </div>
      </article>
    </div>
  ),
};
