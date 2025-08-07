import type { Meta, StoryObj } from "@storybook/react-vite";
import { Typography } from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "UI/Typography",
  component: Typography,
  parameters: {
    docs: {
      description: {
        component:
          "Typography 컴포넌트입니다. Display, Heading, Body, Caption 4가지 카테고리로 구성되어 있습니다.",
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "display-28",
        "display-26",
        "heading-24",
        "heading-22",
        "heading-20",
        "body-18",
        "body-16",
        "body-14",
        "caption-12",
      ],
    },
    weight: {
      control: { type: "select" },
      options: ["regular", "medium", "semibold", "bold"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TypographyTable: Story = {
  render: () => (
    <div className="p-6 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-600 w-80">
                Name
              </th>
              <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-600">
                Font Weight
              </th>
              <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-600">
                Size
              </th>
              <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-600">
                Line Height
              </th>
              <th className="border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-600">
                Letter Spacing
              </th>
            </tr>
          </thead>
          <tbody>
            {typographyData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-25">
                <td className="border border-gray-200 px-4 py-3">
                  <Typography variant={item.variant} weight={item.weight}>
                    {item.name}
                  </Typography>
                </td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                  {item.fontWeight}
                </td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                  {item.size}
                </td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                  {item.lineHeight}
                </td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                  {item.letterSpacing}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ),
};

export const Display: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="display-28" weight="bold">
        28_B
      </Typography>
      <Typography variant="display-26" weight="bold">
        26_B
      </Typography>
    </div>
  ),
};

export const Heading: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="heading-24" weight="bold">
        24_B
      </Typography>
      <Typography variant="heading-24" weight="semibold">
        24_SB
      </Typography>
      <Typography variant="heading-22" weight="bold">
        22_B
      </Typography>
      <Typography variant="heading-22" weight="semibold">
        22_SB
      </Typography>
      <Typography variant="heading-20" weight="bold">
        20_B
      </Typography>
      <Typography variant="heading-20" weight="semibold">
        20_SB
      </Typography>
      <Typography variant="heading-20" weight="medium">
        20_M
      </Typography>
      <Typography variant="heading-20" weight="regular">
        20_R
      </Typography>
    </div>
  ),
};

export const Body: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="body-18" weight="bold">
        18_B
      </Typography>
      <Typography variant="body-18" weight="semibold">
        18_SB
      </Typography>
      <Typography variant="body-18" weight="medium">
        18_M
      </Typography>
      <Typography variant="body-18" weight="regular">
        18_R
      </Typography>
      <Typography variant="body-16" weight="bold">
        16_B
      </Typography>
      <Typography variant="body-16" weight="semibold">
        16_SB
      </Typography>
      <Typography variant="body-16" weight="medium">
        16_M
      </Typography>
      <Typography variant="body-16" weight="regular">
        16_R
      </Typography>
      <Typography variant="body-14" weight="bold">
        14_B
      </Typography>
      <Typography variant="body-14" weight="semibold">
        14_SB
      </Typography>
      <Typography variant="body-14" weight="medium">
        14_M
      </Typography>
      <Typography variant="body-14" weight="regular">
        14_R
      </Typography>
    </div>
  ),
};

export const Caption: Story = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <Typography variant="caption-12" weight="bold">
        12_B
      </Typography>
      <Typography variant="caption-12" weight="semibold">
        12_SB
      </Typography>
      <Typography variant="caption-12" weight="medium">
        12_M
      </Typography>
      <Typography variant="caption-12" weight="regular">
        12_R
      </Typography>
    </div>
  ),
};

// Typography 테이블 데이터
const typographyData = [
  // Display
  {
    name: "28_B",
    variant: "display-28" as const,
    weight: "bold" as const,
    size: "28",
    fontWeight: "Bold",
    lineHeight: "150%",
    letterSpacing: "-1.5%",
  },
  {
    name: "26_B",
    variant: "display-26" as const,
    weight: "bold" as const,
    size: "26",
    fontWeight: "Bold",
    lineHeight: "150%",
    letterSpacing: "-1.5%",
  },

  // Heading
  {
    name: "24_B",
    variant: "heading-24" as const,
    weight: "bold" as const,
    size: "24",
    fontWeight: "Bold",
    lineHeight: "150%",
    letterSpacing: "-1.5%",
  },
  {
    name: "24_SB",
    variant: "heading-24" as const,
    weight: "semibold" as const,
    size: "24",
    fontWeight: "Semibold",
    lineHeight: "150%",
    letterSpacing: "-1.5%",
  },
  {
    name: "22_B",
    variant: "heading-22" as const,
    weight: "bold" as const,
    size: "22",
    fontWeight: "Bold",
    lineHeight: "150%",
    letterSpacing: "-1.5%",
  },
  {
    name: "22_SB",
    variant: "heading-22" as const,
    weight: "semibold" as const,
    size: "22",
    fontWeight: "Semibold",
    lineHeight: "150%",
    letterSpacing: "-1.5%",
  },
  {
    name: "20_B",
    variant: "heading-20" as const,
    weight: "bold" as const,
    size: "20",
    fontWeight: "Bold",
    lineHeight: "150%",
    letterSpacing: "-1.5%",
  },
  {
    name: "20_SB",
    variant: "heading-20" as const,
    weight: "semibold" as const,
    size: "20",
    fontWeight: "Semibold",
    lineHeight: "150%",
    letterSpacing: "-1.5%",
  },
  {
    name: "20_M",
    variant: "heading-20" as const,
    weight: "medium" as const,
    size: "20",
    fontWeight: "Medium",
    lineHeight: "150%",
    letterSpacing: "-1.5%",
  },
  {
    name: "20_R",
    variant: "heading-20" as const,
    weight: "regular" as const,
    size: "20",
    fontWeight: "Regular",
    lineHeight: "150%",
    letterSpacing: "-1.5%",
  },

  // Body
  {
    name: "18_B",
    variant: "body-18" as const,
    weight: "bold" as const,
    size: "18",
    fontWeight: "Bold",
    lineHeight: "150%",
    letterSpacing: "-1.5%",
  },
  {
    name: "18_SB",
    variant: "body-18" as const,
    weight: "semibold" as const,
    size: "18",
    fontWeight: "Semibold",
    lineHeight: "150%",
    letterSpacing: "-1.5%",
  },
  {
    name: "18_M",
    variant: "body-18" as const,
    weight: "medium" as const,
    size: "18",
    fontWeight: "Medium",
    lineHeight: "150%",
    letterSpacing: "-1.5%",
  },
  {
    name: "18_R",
    variant: "body-18" as const,
    weight: "regular" as const,
    size: "18",
    fontWeight: "Regular",
    lineHeight: "150%",
    letterSpacing: "-1.5%",
  },
  {
    name: "16_B",
    variant: "body-16" as const,
    weight: "bold" as const,
    size: "16",
    fontWeight: "Bold",
    lineHeight: "150%",
    letterSpacing: "-1.5%",
  },
  {
    name: "16_SB",
    variant: "body-16" as const,
    weight: "semibold" as const,
    size: "16",
    fontWeight: "Semibold",
    lineHeight: "150%",
    letterSpacing: "-1.5%",
  },
  {
    name: "16_M",
    variant: "body-16" as const,
    weight: "medium" as const,
    size: "16",
    fontWeight: "Medium",
    lineHeight: "150%",
    letterSpacing: "-1.5%",
  },
  {
    name: "16_R",
    variant: "body-16" as const,
    weight: "regular" as const,
    size: "16",
    fontWeight: "Regular",
    lineHeight: "150%",
    letterSpacing: "-1.5%",
  },
  {
    name: "14_B",
    variant: "body-14" as const,
    weight: "bold" as const,
    size: "14",
    fontWeight: "Bold",
    lineHeight: "150%",
    letterSpacing: "-1.5%",
  },
  {
    name: "14_SB",
    variant: "body-14" as const,
    weight: "semibold" as const,
    size: "14",
    fontWeight: "Semibold",
    lineHeight: "150%",
    letterSpacing: "-1.5%",
  },
  {
    name: "14_M",
    variant: "body-14" as const,
    weight: "medium" as const,
    size: "14",
    fontWeight: "Medium",
    lineHeight: "150%",
    letterSpacing: "-1.5%",
  },
  {
    name: "14_R",
    variant: "body-14" as const,
    weight: "regular" as const,
    size: "14",
    fontWeight: "Regular",
    lineHeight: "150%",
    letterSpacing: "-1.5%",
  },

  // Caption
  {
    name: "12_B",
    variant: "caption-12" as const,
    weight: "bold" as const,
    size: "12",
    fontWeight: "Bold",
    lineHeight: "150%",
    letterSpacing: "-1.5%",
  },
  {
    name: "12_SB",
    variant: "caption-12" as const,
    weight: "semibold" as const,
    size: "12",
    fontWeight: "Semibold",
    lineHeight: "150%",
    letterSpacing: "-1.5%",
  },
  {
    name: "12_M",
    variant: "caption-12" as const,
    weight: "medium" as const,
    size: "12",
    fontWeight: "Medium",
    lineHeight: "150%",
    letterSpacing: "-1.5%",
  },
  {
    name: "12_R",
    variant: "caption-12" as const,
    weight: "regular" as const,
    size: "12",
    fontWeight: "Regular",
    lineHeight: "150%",
    letterSpacing: "-1.5%",
  },
];
