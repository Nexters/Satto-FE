import { createFileRoute, Link } from "@tanstack/react-router";
import { colors, typography, spacing, layout } from '../shared/config/design-tokens';

export const Route = createFileRoute("/")({
  component: () => (
    <div style={{
      minHeight: '100vh',
      backgroundColor: colors.background.primary,
      maxWidth: layout.mobile.maxWidth,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: spacing[16],
    }}>
      <div style={{ textAlign: 'center', marginBottom: spacing[48] }}>
        <h1 style={{
          fontFamily: typography.fontFamily.primary,
          fontSize: typography.fontSize['28'],
          fontWeight: typography.fontWeight['700'],
          color: colors.text.primary,
          margin: `0 0 ${spacing[32]} 0`,
        }}>Satto</h1>
        
        <Link 
          to="/what-came-out"
          style={{
            display: 'inline-block',
            padding: `${spacing[16]} ${spacing[24]}`,
            backgroundColor: colors.primary,
            color: colors.background.primary,
            textDecoration: 'none',
            borderRadius: '12px',
            fontFamily: typography.fontFamily.primary,
            fontSize: typography.fontSize['16'],
            fontWeight: typography.fontWeight['600'],
            transition: 'transform 0.1s ease',
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = 'scale(0.95)';
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          뭐나왔지 보기
        </Link>
      </div>
    </div>
  ),
});
