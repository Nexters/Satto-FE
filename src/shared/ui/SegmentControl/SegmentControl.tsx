import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface SegmentOption {
  value: string;
  label: string;
  icon?: ReactNode;
}

export interface SegmentControlProps {
  options: SegmentOption[];
  value: string;
  onChange: (value: string) => void;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
}

const sizeStyles = {
  sm: 'h-8 text-sm',
  md: 'h-10 text-base',
  lg: 'h-12 text-lg',
};

export const SegmentControl = ({
  options,
  value,
  onChange,
  size = 'md',
  fullWidth = false,
  className,
}: SegmentControlProps) => {
  return (
    <div
      className={cn(
        'inline-flex bg-gray-100 rounded-lg p-1',
        fullWidth && 'w-full',
        className
      )}
    >
      {options.map((option) => (
        <button
          key={option.value}
          className={cn(
            'flex items-center justify-center gap-2 px-4 rounded-md font-medium transition-all duration-200 focus:outline-none',
            sizeStyles[size],
            fullWidth && 'flex-1',
            value === option.value
              ? 'bg-white text-primary-500 shadow-sm'
              : 'text-gray-600 hover:text-gray-800'
          )}
          onClick={() => onChange(option.value)}
        >
          {option.icon && option.icon}
          {option.label}
        </button>
      ))}
    </div>
  );
};
