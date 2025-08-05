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
      options: ['h1', 'h2', 'h3', 'body1', 'body2', 'caption', 'overline'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'gray', 'white', 'black'],
    },
    weight: {
      control: { type: 'select' },
      options: ['light', 'regular', 'medium', 'semibold', 'bold'],
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: '뭐나왔지',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: '로또 번호 히스토리',
  },
};

export const Heading3: Story = {
  args: {
    variant: 'h3',
    children: '지난 번호',
  },
};

export const Body1: Story = {
  args: {
    variant: 'body1',
    children: '1234회차 로또 번호입니다.',
  },
};

export const Body2: Story = {
  args: {
    variant: 'body2',
    children: '작은 본문 텍스트입니다.',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: '캡션 텍스트',
  },
};

export const Overline: Story = {
  args: {
    variant: 'overline',
    children: 'OVERLINE TEXT',
  },
};

export const PrimaryColor: Story = {
  args: {
    variant: 'h2',
    color: 'primary',
    children: '브랜드 컬러 텍스트',
  },
};

export const AllVariants: Story = {
  args: {
    children: 'Typography Text',
  },
  render: () => (
    <div className="space-y-4">
      <Typography variant="h1">H1 - 뭐나왔지</Typography>
      <Typography variant="h2">H2 - 로또 번호 히스토리</Typography>
      <Typography variant="h3">H3 - 지난 번호</Typography>
      <Typography variant="body1">Body1 - 일반 본문 텍스트입니다.</Typography>
      <Typography variant="body2">Body2 - 작은 본문 텍스트입니다.</Typography>
      <Typography variant="caption">Caption - 캡션 텍스트</Typography>
      <Typography variant="overline">OVERLINE - 오버라인 텍스트</Typography>
    </div>
  ),
};
