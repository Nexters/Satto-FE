import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography } from './Typography';

const meta = {
  title: 'Design System/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'SUIT 폰트를 사용하는 타이포그래피 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'display-28', 'display-26', 'display-24', 'display-22', 'display-20',
        'text-18', 'text-16', 'text-14', 'text-12'
      ],
    },
    weight: {
      control: { type: 'select' },
      options: ['regular', 'medium', 'semibold', 'bold'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'gray', 'white', 'black'],
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    variant: 'display-28',
    weight: 'bold',
    children: '뭐나왔지',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'display-24',
    weight: 'bold',
    children: '로또 번호 히스토리',
  },
};

export const Heading3: Story = {
  args: {
    variant: 'display-20',
    weight: 'semibold',
    children: '지난 번호',
  },
};

export const Body1: Story = {
  args: {
    variant: 'text-16',
    weight: 'regular',
    children: '1234회차 로또 번호입니다.',
  },
};

export const Body2: Story = {
  args: {
    variant: 'text-14',
    weight: 'regular',
    children: '작은 본문 텍스트입니다.',
  },
};

export const Caption: Story = {
  args: {
    variant: 'text-12',
    weight: 'regular',
    children: '캡션 텍스트',
  },
};

export const Small: Story = {
  args: {
    variant: 'text-12',
    children: '작은 텍스트',
  },
};

export const PrimaryColor: Story = {
  args: {
    variant: 'display-24',
    weight: 'bold',
    color: 'primary',
    children: '브랜드 컬러 텍스트',
  },
};

// Figma 디자인 시스템 기준 스토리
export const DisplayStyles: Story = {
  args: {
    children: 'Typography Text',
  },
  render: () => (
    <div className="space-y-4">
      <Typography variant="display-28" weight="bold">뭐나왔지</Typography>
      <Typography variant="display-24" weight="bold">로또 번호 히스토리</Typography>
      <Typography variant="display-20" weight="semibold">지난 번호</Typography>
      <Typography variant="text-16" weight="regular">일반 본문 텍스트입니다.</Typography>
      <Typography variant="text-14" weight="regular">작은 본문 텍스트입니다.</Typography>
      <Typography variant="text-12" weight="regular">캡션 텍스트</Typography>
    </div>
  ),
};

export const TextStyles: Story = {
  args: {
    children: 'Text Content',
  },
  render: () => (
    <div className="space-y-4">
      <div>
        <Typography variant="text-18" weight="bold">본문 텍스트 - Text 18 Bold</Typography>
        <Typography variant="text-18" weight="semibold">본문 텍스트 - Text 18 SemiBold</Typography>
        <Typography variant="text-18" weight="medium">본문 텍스트 - Text 18 Medium</Typography>
        <Typography variant="text-18" weight="regular">본문 텍스트 - Text 18 Regular</Typography>
      </div>
      <div>
        <Typography variant="text-16" weight="bold">본문 텍스트 - Text 16 Bold</Typography>
        <Typography variant="text-16" weight="semibold">본문 텍스트 - Text 16 SemiBold</Typography>
        <Typography variant="text-16" weight="medium">본문 텍스트 - Text 16 Medium</Typography>
        <Typography variant="text-16" weight="regular">본문 텍스트 - Text 16 Regular</Typography>
      </div>
      <div>
        <Typography variant="text-14" weight="bold">본문 텍스트 - Text 14 Bold</Typography>
        <Typography variant="text-14" weight="semibold">본문 텍스트 - Text 14 SemiBold</Typography>
        <Typography variant="text-14" weight="medium">본문 텍스트 - Text 14 Medium</Typography>
        <Typography variant="text-14" weight="regular">본문 텍스트 - Text 14 Regular</Typography>
      </div>
      <div>
        <Typography variant="text-12" weight="bold">본문 텍스트 - Text 12 Bold</Typography>
        <Typography variant="text-12" weight="semibold">본문 텍스트 - Text 12 SemiBold</Typography>
        <Typography variant="text-12" weight="medium">본문 텍스트 - Text 12 Medium</Typography>
        <Typography variant="text-12" weight="regular">본문 텍스트 - Text 12 Regular</Typography>
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  args: {
    children: 'Typography Text',
  },
  render: () => (
    <div className="space-y-4">
      <Typography variant="display-28" weight="bold">H1 - 뭐나왔지</Typography>
      <Typography variant="display-24" weight="bold">H2 - 로또 번호 히스토리</Typography>
      <Typography variant="display-20" weight="semibold">H3 - 지난 번호</Typography>
      <Typography variant="text-16" weight="regular">Body1 - 일반 본문 텍스트입니다.</Typography>
      <Typography variant="text-14" weight="regular">Body2 - 작은 본문 텍스트입니다.</Typography>
      <Typography variant="text-12" weight="regular">Caption - 캡션 텍스트</Typography>
    </div>
  ),
};
