import { ReactNode, ElementType } from 'react';
import { cn } from '../../lib/utils';

interface TypographyProps {
  children: ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'caption' | 'overline';
  color?: 'primary' | 'secondary' | 'gray' | 'white' | 'black';
  weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
  className?: string;
  as?: ElementType;
}

const variantStyles = {
  h1: 'text-3xl font-bold leading-tight',
  h2: 'text-2xl font-semibold leading-tight',
  h3: 'text-xl font-medium leading-tight',
  body1: 'text-base font-regular leading-normal',
  body2: 'text-sm font-regular leading-normal',
  caption: 'text-xs font-regular leading-normal',
  overline: 'text-xs font-medium leading-normal uppercase tracking-wide',
};

const colorStyles = {
  primary: 'text-primary-500',
  secondary: 'text-gray-600',
  gray: 'text-gray-700',
  white: 'text-white',
  black: 'text-black',
};

const weightStyles = {
  light: 'font-light',
  regular: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

export const Typography = ({
  children,
  variant = 'body1',
  color = 'black',
  weight,
  className,
  as,
}: TypographyProps) => {
  const Component = as || getDefaultElement(variant);
  
  return (
    <Component
      className={cn(
        'font-suit',
        variantStyles[variant],
        colorStyles[color],
        weight && weightStyles[weight],
        className
      )}
    >
      {children}
    </Component>
  );
};

function getDefaultElement(variant: TypographyProps['variant']): ElementType {
  switch (variant) {
    case 'h1':
      return 'h1';
    case 'h2':
      return 'h2';
    case 'h3':
      return 'h3';
    case 'caption':
    case 'overline':
      return 'span';
    default:
      return 'p';
  }
}
