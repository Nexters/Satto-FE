import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card';
import { Typography } from '../Typography';
import { LottoBall } from '../LottoBall';

const meta = {
  title: 'Design System/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '콘텐츠를 감싸는 카드 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'elevated'],
    },
    padding: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <Typography variant="display-20" weight="semibold">기본 카드</Typography>
        <Typography variant="text-14" color="gray">
          기본 스타일의 카드입니다.
        </Typography>
      </div>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: (
      <div>
        <Typography variant="display-20" weight="semibold">외곽선 카드</Typography>
        <Typography variant="text-14" color="gray">
          외곽선이 강조된 카드입니다.
        </Typography>
      </div>
    ),
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <div>
        <Typography variant="display-20" weight="semibold">그림자 카드</Typography>
        <Typography variant="text-14" color="gray">
          그림자가 있는 카드입니다.
        </Typography>
      </div>
    ),
  },
};

export const LottoCard: Story = {
  args: {
    variant: 'elevated',
    children: (
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <Typography variant="display-20" weight="semibold">1234회차</Typography>
          <Typography variant="text-12" color="gray">
            2024.01.01
          </Typography>
        </div>
        <div className="flex gap-2">
          <LottoBall number={7} />
          <LottoBall number={15} />
          <LottoBall number={23} />
          <LottoBall number={31} />
          <LottoBall number={38} />
          <LottoBall number={45} />
          <span className="text-gray-400">+</span>
          <LottoBall number={12} variant="bonus" />
        </div>
      </div>
    ),
  },
};

export const Clickable: Story = {
  args: {
    variant: 'elevated',
    onClick: () => alert('카드가 클릭되었습니다!'),
    children: (
      <div>
        <Typography variant="display-20" weight="semibold">클릭 가능한 카드</Typography>
        <Typography variant="text-14" color="gray">
          이 카드를 클릭해보세요.
        </Typography>
      </div>
    ),
  },
};

export const AllVariants: Story = {
  args: {
    children: <Typography variant="text-16">Card Content</Typography>,
  },
  render: () => (
    <div className="space-y-4 w-80">
      <Card variant="default">
        <Typography variant="text-16">Default Card</Typography>
      </Card>
      <Card variant="outlined">
        <Typography variant="text-16">Outlined Card</Typography>
      </Card>
      <Card variant="elevated">
        <Typography variant="text-16">Elevated Card</Typography>
      </Card>
    </div>
  ),
};
