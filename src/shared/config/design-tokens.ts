/**
 * Design Tokens - Figma 디자인 시스템 기반
 * 모든 색상, 타이포그래피, 간격 등의 디자인 토큰을 정의합니다.
 */
export const designTokens = {
  // Colors - Figma Color Palette
  colors: {
    // Common Colors
    black: '#171719',
    white: '#FFFFFF',
    
    // Gray Scale
    gray: {
      50: '#F7F9FA',
      100: '#F1F4F6',
      200: '#E7EDF0',
      300: '#CFD6D9',
      400: '#AEB7BC',
      500: '#6E777C',
      600: '#5E696E',
      700: '#4A5256',
      800: '#353C3F',
      900: '#222729',
    },
    
    // Primary Red
    primary: {
      50: '#FFF4F5',
      100: '#FFE0E2',
      200: '#FFC2C5',
      300: '#FFA6AA',
      400: '#FF828A',
      500: '#F34854', // Main brand color
      600: '#FF5C67',
      700: '#E43540',
      800: '#D71723',
      900: '#B91C1C',
    },
    
    // Purple (Secondary)
    purple: {
      50: '#F7F5FF',
      100: '#ECE5FF',
      200: '#DDD0FF',
      300: '#CBB8FF',
      400: '#BDA4FF',
      500: '#A481FF',
      600: '#8E61FF',
      700: '#7843FF',
      800: '#6A00FF',
      900: '#5A00D9',
    },
    
    // Orange
    orange: {
      50: '#FFF7F4',
      100: '#FFE8E0',
      200: '#FFD3C2',
      300: '#FFBFA6',
      400: '#FFA582',
      500: '#FF8A5C',
      600: '#FF7943',
      700: '#F5662D',
      800: '#ED4C0C',
      900: '#CC3D00',
    },
    
    // Yellow
    yellow: {
      50: '#FFFDF4',
      100: '#FFF7D5',
      200: '#FFF4C2',
      300: '#FFEFA6',
      400: '#FFE882',
      500: '#FFE365',
      600: '#FFDB3B',
      700: '#FFD105',
      800: '#FFC300',
      900: '#E6A800',
    },
    
    // Green
    green: {
      50: '#EDFDF4',
      100: '#D2F8E3',
      200: '#A4F2C3',
      300: '#83E9AC',
      400: '#69DB97',
      500: '#54CE85',
      600: '#41BD73',
      700: '#26AD5C',
      800: '#05A445',
      900: '#047A37',
    },
    
    // Blue
    blue: {
      50: '#F4FAFF',
      100: '#E6F3FF',
      200: '#C2E3FF',
      300: '#A6D5FF',
      400: '#82C5FF',
      500: '#5CB3FF',
      600: '#48A3F3',
      700: '#3592E4',
      800: '#177FD9',
      900: '#1366B8',
    },
    
    // Overlay Colors
    overlay: {
      80: 'rgba(23, 23, 25, 0.8)',
      50: 'rgba(23, 23, 25, 0.5)',
      16: 'rgba(23, 23, 25, 0.16)',
      8: 'rgba(23, 23, 25, 0.08)',
      4: 'rgba(23, 23, 25, 0.04)',
      2: 'rgba(23, 23, 25, 0.02)',
    },
  },

  // Typography - Figma 기준
  typography: {
    fontFamily: {
      suit: ['SUIT', 'system-ui', 'sans-serif'],
      pretendard: ['Pretendard', 'system-ui', 'sans-serif'],
    },
    
    // Display sizes (큰 제목용)
    display: {
      28: {
        fontSize: '28px',
        lineHeight: '150%',
        letterSpacing: '-1.5%',
      },
      26: {
        fontSize: '26px',
        lineHeight: '150%',
        letterSpacing: '-1.5%',
      },
      24: {
        fontSize: '24px',
        lineHeight: '150%',
        letterSpacing: '-1.5%',
      },
      22: {
        fontSize: '22px',
        lineHeight: '150%',
        letterSpacing: '-1.5%',
      },
      20: {
        fontSize: '20px',
        lineHeight: '150%',
        letterSpacing: '-1.5%',
      },
    },
    
    // Text sizes (본문용)
    text: {
      18: {
        fontSize: '18px',
        lineHeight: '150%',
        letterSpacing: '-1.5%',
      },
      16: {
        fontSize: '16px',
        lineHeight: '150%',
        letterSpacing: '-1.5%',
      },
      14: {
        fontSize: '14px',
        lineHeight: '150%',
        letterSpacing: '-1.5%',
      },
      12: {
        fontSize: '12px',
        lineHeight: '150%',
        letterSpacing: '-1.5%',
      },
    },
    
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },

  // Spacing - 8px 기준 시스템
  spacing: {
    0: '0px',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    8: '32px',
    10: '40px',
    12: '48px',
    16: '64px',
    20: '80px',
    24: '96px',
    32: '128px',
  },

  // Border Radius
  borderRadius: {
    none: '0px',
    xs: '2px',
    sm: '4px',
    md: '6px',
    lg: '8px',
    xl: '12px',
    '2xl': '16px',
    '3xl': '20px',
    '4xl': '24px',
    '5xl': '32px',
    '6xl': '40px',
    '7xl': '48px',
    full: '9999px',
  },

  // Shadows - 브랜드 색상 기반
  shadows: {
    xs: '0 1px 2px 0 rgba(23, 23, 25, 0.05)',
    sm: '0 1px 3px 0 rgba(23, 23, 25, 0.1), 0 1px 2px -1px rgba(23, 23, 25, 0.1)',
    md: '0 4px 6px -1px rgba(23, 23, 25, 0.1), 0 2px 4px -2px rgba(23, 23, 25, 0.1)',
    lg: '0 10px 15px -3px rgba(23, 23, 25, 0.1), 0 4px 6px -4px rgba(23, 23, 25, 0.1)',
    xl: '0 20px 25px -5px rgba(23, 23, 25, 0.1), 0 8px 10px -6px rgba(23, 23, 25, 0.1)',
    '2xl': '0 25px 50px -12px rgba(23, 23, 25, 0.25)',
  },

  // Z-index
  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },

  // Breakpoints
  breakpoints: {
    xs: '375px',
    sm: '390px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },

  // Animation
  animation: {
    duration: {
      fast: '150ms',
      normal: '200ms',
      slow: '300ms',
    },
    easing: {
      ease: 'ease',
      easeIn: 'ease-in',
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out',
    },
  },
} as const;

export type DesignTokens = typeof designTokens;

// 색상 유틸리티 함수
export const getColor = (path: string) => {
  const keys = path.split('.');
  let result: any = designTokens.colors;
  
  for (const key of keys) {
    result = result?.[key];
  }
  
  return result || path;
};

// 타이포그래피 유틸리티 함수
export const getTypography = (type: 'display' | 'text', size: number) => {
  const typography = designTokens.typography[type];
  return typography[size as keyof typeof typography];
};

// 타입 안전한 타이포그래피 헬퍼
export const getDisplayTypography = (size: 28 | 26 | 24 | 22 | 20) => {
  return designTokens.typography.display[size];
};

export const getTextTypography = (size: 18 | 16 | 14 | 12) => {
  return designTokens.typography.text[size];
};
