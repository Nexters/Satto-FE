import type { Meta, StoryObj } from '@storybook/react-vite';
import { LottoBall } from './LottoBall';

const meta = {
  title: 'Design System/LottoBall',
  component: LottoBall,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '로또 번호를 표시하는 볼 컴포넌트입니다. 번호 범위에 따라 색상이 자동으로 결정됩니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    number: {
      control: { type: 'number', min: 1, max: 45 },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'bonus'],
    },
  },
} satisfies Meta<typeof LottoBall>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Yellow: Story = {
  args: {
    number: 7,
  },
};

export const Blue: Story = {
  args: {
    number: 15,
  },
};

export const Red: Story = {
  args: {
    number: 23,
  },
};

export const Gray: Story = {
  args: {
    number: 31,
  },
};

export const Green: Story = {
  args: {
    number: 38,
  },
};

export const Bonus: Story = {
  args: {
    number: 12,
    variant: 'bonus',
  },
};

export const Small: Story = {
  args: {
    number: 7,
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    number: 7,
    size: 'lg',
  },
};

export const ColorRanges: Story = {
  args: {
    number: 1,
  },
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="text-sm text-gray-600 mb-2">1-10 (노란색)</p>
        <div className="flex gap-2">
          {[1, 5, 10].map((num) => (
            <LottoBall key={num} number={num} />
          ))}
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-600 mb-2">11-20 (파란색)</p>
        <div className="flex gap-2">
          {[11, 15, 20].map((num) => (
            <LottoBall key={num} number={num} />
          ))}
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-600 mb-2">21-30 (빨간색)</p>
        <div className="flex gap-2">
          {[21, 25, 30].map((num) => (
            <LottoBall key={num} number={num} />
          ))}
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-600 mb-2">31-40 (회색)</p>
        <div className="flex gap-2">
          {[31, 35, 40].map((num) => (
            <LottoBall key={num} number={num} />
          ))}
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-600 mb-2">41-45 (초록색)</p>
        <div className="flex gap-2">
          {[41, 43, 45].map((num) => (
            <LottoBall key={num} number={num} />
          ))}
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-600 mb-2">보너스 볼</p>
        <div className="flex gap-2">
          <LottoBall number={12} variant="bonus" />
        </div>
      </div>
    </div>
  ),
};

export const LottoSet: Story = {
  args: {
    number: 7,
  },
  render: () => (
    <div className="flex gap-2 items-center">
      <LottoBall number={7} />
      <LottoBall number={15} />
      <LottoBall number={23} />
      <LottoBall number={31} />
      <LottoBall number={38} />
      <LottoBall number={45} />
      <span className="text-gray-400 mx-2">+</span>
      <LottoBall number={12} variant="bonus" />
    </div>
  ),
};
