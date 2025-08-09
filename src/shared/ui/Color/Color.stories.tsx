import type { Meta, StoryObj } from "@storybook/react-vite";
import { colors } from "../../design-tokens/color";

const meta: Meta = {
  title: "UI/Color",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Satto 디자인 시스템의 색상 팔레트입니다.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

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
      className={`${isLarge ? "w-20 h-20" : "w-16 h-16"} rounded-lg border border-gray-200 shadow-sm`}
      style={{ backgroundColor: color }}
    />
    <div className="mt-2 text-center">
      <div className="text-sm font-semibold text-gray-700">{name}</div>
      <div className="text-xs text-gray-400 font-mono">{value}</div>
    </div>
  </div>
);

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

export const AllColors: Story = {
  render: () => (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
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

        <ColorGroup title="Gray" colors={colors.gray} />
        <ColorGroup title="Primary" colors={colors.primary} />
        <ColorGroup title="Red" colors={colors.red} />
        <ColorGroup title="Orange" colors={colors.orange} />
        <ColorGroup title="Yellow" colors={colors.yellow} />
        <ColorGroup title="Green" colors={colors.green} />
        <ColorGroup title="Blue" colors={colors.blue} />
      </div>
    </div>
  ),
};

export const OpacityColors: Story = {
  render: () => (
    <div className="p-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Opacity</h2>
        <p className="text-gray-600 mb-8">
          시스템 내에서 사용하는 투명도 컬러를 안내합니다.
        </p>

        <div className="grid grid-cols-6 gap-6">
          {Object.entries(colors.opacity).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="relative">
                <div
                  className="w-20 h-20 rounded-lg"
                  style={{
                    backgroundSize: "8px 8px",
                    backgroundPosition: "0 0, 0 4px, 4px -4px, -4px 0px",
                  }}
                />
                <div
                  className="absolute inset-0 w-20 h-20 rounded-lg border border-gray-200"
                  style={{ backgroundColor: value }}
                />
              </div>
              <div className="mt-3">
                <div className="text-sm font-semibold text-gray-700">
                  Gray {key}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const GradientColors: Story = {
  render: () => (
    <div className="p-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Gradient</h2>
        <p className="text-gray-600 mb-8">
          시스템 내에서 사용하는 그라디언트 컬러를 안내합니다.
        </p>

        <div className="space-y-6">
          <div className="text-center">
            <div
              className="w-full h-16 rounded-lg border border-gray-200"
              style={{
                background: colors.gradient.component.direction,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  ),
};
