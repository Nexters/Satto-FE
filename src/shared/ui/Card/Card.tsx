import { ReactNode } from 'react';
import { colors, borderRadius, spacing, shadows } from '../../config/design-tokens';

interface CardProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Card = ({ children, onClick, className }: CardProps) => {
  const isClickable = !!onClick;
  
  return (
    <div
      onClick={onClick}
      className={className}
      style={{
        backgroundColor: colors.background.primary,
        borderRadius: borderRadius.md,
        padding: spacing[16],
        boxShadow: shadows.card,
        border: `1px solid ${colors.border.primary}`,
        cursor: isClickable ? 'pointer' : 'default',
        transition: isClickable ? 'transform 0.1s ease' : 'none',
      }}
      onMouseDown={isClickable ? (e) => {
        e.currentTarget.style.transform = 'scale(0.98)';
      } : undefined}
      onMouseUp={isClickable ? (e) => {
        e.currentTarget.style.transform = 'scale(1)';
      } : undefined}
      onMouseLeave={isClickable ? (e) => {
        e.currentTarget.style.transform = 'scale(1)';
      } : undefined}
    >
      {children}
    </div>
  );
};
