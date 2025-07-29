import { colors, layout, spacing, typography } from '../../config/design-tokens';

interface NavigationProps {
  title: string;
  onBackClick?: () => void;
  showBackButton?: boolean;
}

export const Navigation = ({ 
  title, 
  onBackClick, 
  showBackButton = true 
}: NavigationProps) => {
  return (
    <header 
      style={{
        height: layout.header.height,
        backgroundColor: colors.background.primary,
        borderBottom: `1px solid ${colors.border.primary}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: `0 ${spacing[16]}`,
      }}
    >
      {showBackButton && (
        <button
          onClick={onBackClick}
          style={{
            position: 'absolute',
            left: spacing[16],
            background: 'none',
            border: 'none',
            padding: spacing[8],
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-label="뒤로가기"
        >
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none"
            style={{ color: colors.text.primary }}
          >
            <path 
              d="M10 12L6 8L10 4" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
      
      <h1 
        style={{
          fontFamily: typography.fontFamily.primary,
          fontSize: typography.fontSize['22'],
          fontWeight: typography.fontWeight['600'],
          lineHeight: typography.lineHeight.normal,
          letterSpacing: typography.letterSpacing.tight,
          color: colors.text.primary,
          margin: 0,
          textAlign: 'center',
        }}
      >
        {title}
      </h1>
    </header>
  );
};
