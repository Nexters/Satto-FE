import type { Meta, StoryObj } from "@storybook/react-vite";
import { Ball } from "./Ball";
import { LOTTO_BALL_COLORS } from "./Ball";

const meta: Meta<typeof Ball> = {
  title: "Design System/Ball",
  component: Ball,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "로또 번호를 표시하는 Ball 컴포넌트입니다. 배경 이미지 위에 숫자를 오버레이하여 표시합니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    number: {
      control: { type: "number", min: 1, max: 45 },
      description: "로또 번호 (1-45)",
    },
    color: {
      control: { type: "select" },
      options: Object.values(LOTTO_BALL_COLORS),
      description: "볼 색상",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    number: 7,
    color: LOTTO_BALL_COLORS.YELLOW,
  },
};

export const AllColors: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Ball number={1} color={LOTTO_BALL_COLORS.YELLOW} />
      <Ball number={15} color={LOTTO_BALL_COLORS.BLUE} />
      <Ball number={25} color={LOTTO_BALL_COLORS.RED} />
      <Ball number={35} color={LOTTO_BALL_COLORS.GRAY} />
      <Ball number={45} color={LOTTO_BALL_COLORS.GREEN} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "모든 색상의 볼을 표시합니다.",
      },
    },
  },
};

export const LottoSet: Story = {
  render: () => (
    <div className="flex gap-2 items-center">
      <Ball number={3} color={LOTTO_BALL_COLORS.YELLOW} />
      <Ball number={12} color={LOTTO_BALL_COLORS.BLUE} />
      <Ball number={23} color={LOTTO_BALL_COLORS.BLUE} />
      <Ball number={31} color={LOTTO_BALL_COLORS.RED} />
      <Ball number={42} color={LOTTO_BALL_COLORS.RED} />
      <Ball number={45} color={LOTTO_BALL_COLORS.GRAY} />
      <span className="mx-2 text-gray-3">+</span>
      <Ball number={8} color={LOTTO_BALL_COLORS.GREEN} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "실제 로또 번호 세트 예시입니다.",
      },
    },
  },
};
