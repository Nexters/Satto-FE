import { ReactNode, ElementType } from 'react';
import { cn } from '../../lib/utils';

interface TypographyProps {
  children: ReactNode;
  variant?: 
    // Display styles
    | 'display-28' | 'display-26' | 'display-24' | 'display-22' | 'display-20'
    // Text styles  
    | 'text-18' | 'text-16' | 'text-14' | 'text-12';
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  color?: 'primary' | 'secondary' | 'gray' | 'white' | 'black';
  className?: string;
  as?: ElementType;
}

const variantStyles = {
  // Display styles (Figma 기준)
  'display-28': 'text-[28px] leading-[150%] tracking-[-0.015em]',
  'display-26': 'text-[26px] leading-[150%] tracking-[-0.015em]', 
  'display-24': 'text-[24px] leading-[150%] tracking-[-0.015em]',
  'display-22': 'text-[22px] leading-[150%] tracking-[-0.015em]',
  'display-20': 'text-[20px] leading-[150%] tracking-[-0.015em]',
  
  // Text styles (Figma 기준)
  'text-18': 'text-[18px] leading-[150%] tracking-[-0.015em]',
  'text-16': 'text-[16px] leading-[150%] tracking-[-0.015em]',
  'text-14': 'text-[14px] leading-[150%] tracking-[-0.015em]',
  'text-12': 'text-[12px] leading-[150%] tracking-[-0.015em]',
};

const colorStyles = {
  primary: 'text-primary-500',
  secondary: 'text-[#5E696E]', // Figma secondary color
  gray: 'text-[#5E696E]',
  white: 'text-white',
  black: 'text-[#171719]', // Figma black color
};

const weightStyles = {
  regular: 'font-normal', // 400
  medium: 'font-medium',  // 500
  semibold: 'font-semibold', // 600
  bold: 'font-bold',      // 700
};

export const Typography = ({
  children,
  variant = 'text-16',
  weight = 'regular',
  color = 'black',
  className,
  as,
}: TypographyProps) => {
  const Component = as || getDefaultElement(variant);
  
  return (
    <Component
      className={cn(
        'font-suit',
        variantStyles[variant],
        weightStyles[weight],
        colorStyles[color],
        className
      )}
    >
      {children}
    </Component>
  );
};

function getDefaultElement(variant: TypographyProps['variant']): ElementType {
  switch (variant) {
    case 'display-28':
      return 'h1';
    case 'display-26':
    case 'display-24':
      return 'h2';
    case 'display-22':
    case 'display-20':
      return 'h3';
    case 'text-12':
      return 'span';
    default:
      return 'p';
  }
}
