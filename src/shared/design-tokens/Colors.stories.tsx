import type { Meta, StoryObj } from "@storybook/react-vite";
import { colors } from "./index";

const meta: Meta = {
  title: "Design System/Colors",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Satto 디자인 시스템의 색상 팔레트입니다. Figma 디자인을 기반으로 구성되었습니다.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 색상 칩 컴포넌트
const ColorChip = ({
  color,
  name,
  value,
  isLarge = false,
}: {
  color: string;
  name: string;
  value: string;
  isLarge?: boolean;
}) => (
  <div className="flex flex-col items-center">
    <div
      className={`${isLarge ? "w-20 h-20" : "w-16 h-16"} rounded-lg border border-gray-200 shadow-sm bg-${color}`}
    />
    <div className="mt-2 text-center">
      <div className="text-sm font-semibold text-gray-700">{name}</div>
      <div className="text-xs text-gray-400 font-mono">{value}</div>
    </div>
  </div>
);

// 색상 그룹 컴포넌트
const ColorGroup = ({
  title,
  colors: colorSet,
  description,
}: {
  title: string;
  colors: Record<string, string>;
  description?: string;
}) => (
  <div className="mb-12">
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-gray-700 mb-2">{title}</h3>
      {description && <p className="text-gray-500">{description}</p>}
    </div>
    <div className="grid grid-cols-9 gap-4">
      {Object.entries(colorSet).map(([key, value]) => (
        <ColorChip
          key={key}
          color={value}
          name={`${title} ${key}`}
          value={value}
        />
      ))}
    </div>
  </div>
);

// 전체 색상 팔레트
export const AllColors: Story = {
  render: () => (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Satto Color Palette
          </h1>
          <p className="text-gray-600">
            Figma 디자인을 기반으로 한 일관된 색상 시스템입니다. 각 색상은
            9단계의 변형을 제공하며, 다양한 UI 상황에 맞게 사용할 수 있습니다.
          </p>
        </div>

        {/* Common Colors */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-700 mb-6">
            Common Colors
          </h3>
          <div className="flex gap-8">
            <ColorChip
              color={colors.black}
              name="Black"
              value={colors.black}
              isLarge
            />
            <ColorChip
              color={colors.white}
              name="White"
              value={colors.white}
              isLarge
            />
          </div>
        </div>

        {/* Gray Scale */}
        <ColorGroup
          title="Gray"
          colors={colors.gray}
          description="기본적인 텍스트, 배경, 테두리에 사용되는 중성 색상입니다."
        />

        {/* Primary Colors */}
        <ColorGroup
          title="Primary"
          colors={colors.primary}
          description="브랜드의 주요 색상입니다. 버튼, 링크, 강조 요소에 사용됩니다."
        />

        {/* Red Colors */}
        <ColorGroup
          title="Red"
          colors={colors.red}
          description="오류, 경고, 삭제 등의 위험한 액션을 나타내는 색상입니다."
        />

        {/* Orange Colors */}
        <ColorGroup
          title="Orange"
          colors={colors.orange}
          description="주의, 경고 메시지에 사용되는 색상입니다."
        />

        {/* Yellow Colors */}
        <ColorGroup
          title="Yellow"
          colors={colors.yellow}
          description="알림, 하이라이트에 사용되는 색상입니다."
        />

        {/* Green Colors */}
        <ColorGroup
          title="Green"
          colors={colors.green}
          description="성공, 완료, 승인을 나타내는 색상입니다."
        />

        {/* Blue Colors */}
        <ColorGroup
          title="Blue"
          colors={colors.blue}
          description="정보, 링크, 보조 액션에 사용되는 색상입니다."
        />
      </div>
    </div>
  ),
};

// Opacity 색상들
export const OpacityColors: Story = {
  render: () => (
    <div className="p-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          Opacity Variants
        </h2>
        <p className="text-gray-600 mb-8">
          Gray 색상을 기준으로 한 투명도 변형입니다. 오버레이, 그림자, 반투명
          배경에 사용됩니다.
        </p>

        <div className="grid grid-cols-6 gap-6">
          {Object.entries(colors.opacity).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="relative">
                {/* 체크보드 배경 */}
                <div
                  className="w-20 h-20 rounded-lg"
                  style={{
                    backgroundImage: `
                      linear-gradient(45deg, #f0f0f0 25%, transparent 25%), 
                      linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), 
                      linear-gradient(45deg, transparent 75%, #f0f0f0 75%), 
                      linear-gradient(-45deg, transparent 75%, #f0f0f0 75%)
                    `,
                    backgroundSize: "8px 8px",
                    backgroundPosition: "0 0, 0 4px, 4px -4px, -4px 0px",
                  }}
                />
                {/* 투명도 색상 */}
                <div
                  className="absolute inset-0 w-20 h-20 rounded-lg border border-gray-200"
                  style={{ backgroundColor: value }}
                />
              </div>
              <div className="mt-3">
                <div className="text-sm font-semibold text-gray-700">
                  Gray {key}
                </div>
                <div className="text-xs text-gray-400 font-mono">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

// Gradient
export const GradientColors: Story = {
  render: () => (
    <div className="p-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Gradient</h2>
        <p className="text-gray-600 mb-8">
          컴포넌트에 사용되는 그라데이션입니다. 구분선, 장식 요소에 활용됩니다.
        </p>

        <div className="space-y-6">
          <div className="text-center">
            <div
              className="w-full h-16 rounded-lg border border-gray-200"
              style={{
                background: colors.gradient.component.direction,
              }}
            />
            <div className="mt-4">
              <div className="text-sm font-semibold text-gray-700">
                Component Gradient
              </div>
              <div className="text-xs text-gray-400 font-mono mt-1">
                {colors.gradient.component.direction}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
