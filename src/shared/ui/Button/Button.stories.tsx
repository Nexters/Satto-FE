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
        component: 'Figma 디자인 시스템 기반 버튼 컴포넌트입니다. 3가지 변형(Primary, Secondary, Ghost)과 5가지 크기(XS, S, M, L, XL)를 지원합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost'],
      description: '버튼의 시각적 스타일 변형',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 's', 'm', 'l', 'xl'],
      description: '버튼의 크기',
    },
    loading: {
      control: { type: 'boolean' },
      description: '로딩 상태 표시',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: '전체 너비 사용',
    },
    disabled: {
      control: { type: 'boolean' },
      description: '비활성화 상태',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리들
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

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: '닫기',
  },
};

// 크기별 스토리들
export const ExtraSmall: Story = {
  args: {
    size: 'xs',
    children: 'XS 버튼',
  },
};

export const Small: Story = {
  args: {
    size: 's',
    children: 'S 버튼',
  },
};

export const Medium: Story = {
  args: {
    size: 'm',
    children: 'M 버튼',
  },
};

export const Large: Story = {
  args: {
    size: 'l',
    children: 'L 버튼',
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    children: 'XL 버튼',
  },
};

// 아이콘 포함 버튼
export const WithLeftIcon: Story = {
  args: {
    children: '뒤로가기',
    icon: <Icon name="chevron-left" size="sm" />,
    iconPosition: 'left',
  },
};

export const WithRightIcon: Story = {
  args: {
    children: '다음',
    icon: <Icon name="chevron-right" size="sm" />,
    iconPosition: 'right',
  },
};

// 상태별 스토리들
export const Loading: Story = {
  args: {
    loading: true,
    children: '로딩 중...',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: '비활성화',
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

// 모든 변형 시각화
export const AllVariants = {
  render: () => (
    <div className="space-y-8 p-4">
      <div>
        <h3 className="text-lg font-bold mb-4">버튼 변형 (Variants)</h3>
        <div className="flex gap-4 flex-wrap">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-bold mb-4">버튼 크기 (Sizes)</h3>
        <div className="flex gap-4 items-center flex-wrap">
          <Button size="xs">XS</Button>
          <Button size="s">S</Button>
          <Button size="m">M</Button>
          <Button size="l">L</Button>
          <Button size="xl">XL</Button>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-bold mb-4">상태 (States)</h3>
        <div className="flex gap-4 flex-wrap">
          <Button>Default</Button>
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

// Figma 디자인 매트릭스
export const DesignMatrix = {
  render: () => (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-6">Figma 디자인 매트릭스</h2>
      <div className="space-y-6">
        {(['primary', 'secondary', 'ghost'] as const).map((variant) => (
          <div key={variant}>
            <h3 className="text-lg font-semibold mb-3 capitalize">{variant}</h3>
            <div className="grid grid-cols-5 gap-4">
              {(['xs', 's', 'm', 'l', 'xl'] as const).map((size) => (
                <div key={size} className="space-y-2">
                  <div className="text-sm text-gray-500 uppercase">{size}</div>
                  <Button variant={variant} size={size}>
                    Button
                  </Button>
                  <Button variant={variant} size={size} disabled>
                    Disabled
                  </Button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
