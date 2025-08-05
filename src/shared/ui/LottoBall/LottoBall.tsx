import { cn } from '../../lib/utils';

interface LottoBallProps {
  number: number;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'bonus';
  className?: string;
}

const sizeStyles = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-12 h-12 text-base',
};

const getNumberColor = (number: number, variant: 'default' | 'bonus') => {
  if (variant === 'bonus') {
    return 'bg-yellow-500 text-white';
  }
  
  if (number <= 10) return 'bg-yellow-400 text-gray-800';
  if (number <= 20) return 'bg-blue-500 text-white';
  if (number <= 30) return 'bg-red-500 text-white';
  if (number <= 40) return 'bg-gray-600 text-white';
  return 'bg-green-500 text-white';
};

export const LottoBall = ({
  number,
  size = 'md',
  variant = 'default',
  className,
}: LottoBallProps) => {
  return (
    <div
      className={cn(
        'rounded-full flex items-center justify-center font-bold shadow-sm',
        sizeStyles[size],
        getNumberColor(number, variant),
        className
      )}
    >
      {number}
    </div>
  );
};
