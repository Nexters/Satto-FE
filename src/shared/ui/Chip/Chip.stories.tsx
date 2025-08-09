import type { Meta, StoryObj } from "@storybook/react-vite";
import { Chip } from ".";
import type { ChipColor, ChipShape, ChipVariant } from "./Chip";

const meta: Meta<typeof Chip> = {
  title: "Design System/Chip",
  component: Chip,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Chip 디자인 시스템",
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["solid", "tinted", "border" satisfies ChipVariant],
    },
    shape: {
      control: { type: "inline-radio" },
      options: ["round", "square" satisfies ChipShape],
    },
    color: {
      control: { type: "select" },
      options: [
        "primary",
        "black",
        "gray",
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
      ] satisfies ChipColor[],
    },
    leftIcon: { control: false },
    rightIcon: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof Chip>;

const ChevronLeft = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M9.5 12L5.5 8L9.5 4"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronRight = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M6.5 4L10.5 8L6.5 12"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const colors: ChipColor[] = [
  "primary",
  "black",
  "gray",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
];

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="space-y-4">
    <h3 className="text-[18px] font-semibold text-gray-2">{title}</h3>
    {children}
  </section>
);

const GroupRow = ({
  variant,
  shape,
  withIcons = false,
}: {
  variant: ChipVariant;
  shape: ChipShape;
  withIcons?: boolean;
}) => (
  <div className="space-y-2">
    <div className="grid grid-cols-8 gap-8">
      {colors.map((c) => (
        <div
          key={`${variant}-${shape}-${c}`}
          className="flex items-center justify-center"
        >
          <Chip
            variant={variant}
            shape={shape}
            color={c}
            leftIcon={withIcons ? <ChevronLeft /> : undefined}
            rightIcon={withIcons ? <ChevronRight /> : undefined}
          >
            Chip
          </Chip>
        </div>
      ))}
    </div>
  </div>
);

export const FigmaLikeOverview: Story = {
  name: "Overview (Figma UI)",
  render: () => (
    <div className="p-10 bg-white space-y-10">
      <div className="space-y-2">
        <h2 className="text-[24px] font-bold text-gray-1">Chip</h2>
      </div>

      <Section title="Round / Solid">
        <GroupRow variant="solid" shape="round" />
      </Section>

      <Section title="Round / Tinted">
        <GroupRow variant="tinted" shape="round" />
      </Section>

      <Section title="Round / Border">
        <GroupRow variant="border" shape="round" />
      </Section>

      <Section title="Square / Solid">
        <GroupRow variant="solid" shape="square" />
      </Section>

      <Section title="Square / Tinted">
        <GroupRow variant="tinted" shape="square" />
      </Section>

      <Section title="Square / Border">
        <GroupRow variant="border" shape="square" />
      </Section>

      <Section title="Round with Icons">
        <GroupRow variant="solid" shape="round" withIcons />
      </Section>

      <Section title="Square with Icons">
        <GroupRow variant="solid" shape="square" withIcons />
      </Section>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    children: "Chip",
    variant: "solid",
    shape: "round",
    color: "primary",
  },
  render: (args) => <Chip {...args} />,
};
