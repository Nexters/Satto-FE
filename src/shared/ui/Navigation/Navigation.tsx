import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface NavigationProps {
  title?: string;
  leftAction?: ReactNode;
  rightAction?: ReactNode;
  className?: string;
  variant?: 'default' | 'transparent';
}

const variantStyles = {
  default: 'bg-white border-b border-gray-200',
  transparent: 'bg-transparent',
};

export const Navigation = ({
  title,
  leftAction,
  rightAction,
  className,
  variant = 'default',
}: NavigationProps) => {
  return (
    <header
      className={cn(
        'flex items-center justify-between h-14 px-4 sticky top-0 z-50',
        variantStyles[variant],
        className
      )}
    >
      <div className="flex items-center">
        {leftAction}
      </div>
      
      {title && (
        <h1 className="text-lg font-semibold text-gray-900 absolute left-1/2 transform -translate-x-1/2">
          {title}
        </h1>
      )}
      
      <div className="flex items-center">
        {rightAction}
      </div>
    </header>
  );
};
