import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';
import { Icon } from '../Icon';

const meta = {
  title: 'Design System/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '다양한 스타일과 크기를 지원하는 버튼 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost', 'floating'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    loading: {
      control: { type: 'boolean' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: '확인',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: '취소',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: '더보기',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: '닫기',
  },
};

export const Floating: Story = {
  args: {
    variant: 'floating',
    children: '플로팅',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: '작은 버튼',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: '큰 버튼',
  },
};

export const WithIcon: Story = {
  args: {
    children: '뒤로가기',
    icon: <Icon name="chevron-left" size="sm" />,
    iconPosition: 'left',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: '로딩 중...',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: '전체 너비 버튼',
  },
  parameters: {
    layout: 'padded',
  },
};

export const AllVariants: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-2 flex-wrap">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="floating">Floating</Button>
      </div>
      <div className="flex gap-2 items-center">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    </div>
  ),
};
