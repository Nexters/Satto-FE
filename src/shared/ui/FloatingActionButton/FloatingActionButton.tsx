import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface FloatingActionButtonProps {
  children: ReactNode;
  onClick: () => void;
  position?: 'bottom-right' | 'bottom-left' | 'bottom-center';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const positionStyles = {
  'bottom-right': 'fixed bottom-6 right-6',
  'bottom-left': 'fixed bottom-6 left-6',
  'bottom-center': 'fixed bottom-6 left-1/2 transform -translate-x-1/2',
};

const sizeStyles = {
  sm: 'w-12 h-12',
  md: 'w-14 h-14',
  lg: 'w-16 h-16',
};

export const FloatingActionButton = ({
  children,
  onClick,
  position = 'bottom-right',
  size = 'md',
  className,
}: FloatingActionButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'rounded-full bg-primary-500 text-white shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200 flex items-center justify-center z-50',
        positionStyles[position],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </button>
  );
};
