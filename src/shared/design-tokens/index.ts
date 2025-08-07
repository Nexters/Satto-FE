/**
 * Satto 디자인 시스템 색상 토큰
 * Figma 디자인을 기반으로 한 색상 정의
 */

export const colors = {
  // Common Colors
  black: "#171719",
  white: "#FFFFFF",

  // Gray Scale (9단계)
  gray: {
    1: "#222729",
    2: "#353C3F",
    3: "#4A5256",
    4: "#6E777C",
    5: "#AEB7BC",
    6: "#CFD6D9",
    7: "#E7EDF0",
    8: "#F1F4F6",
    9: "#F7F9FA",
  },

  // Primary Colors (9단계)
  primary: {
    1: "#6A00FF",
    2: "#7843FF",
    3: "#8E61FF",
    4: "#A481FF",
    5: "#BDA4FF",
    6: "#CBB8FF",
    7: "#DDD0FF",
    8: "#ECE5FF",
    9: "#F7F5FF",
  },

  // Red Colors (9단계)
  red: {
    1: "#E43540",
    2: "#E43540",
    3: "#F34854",
    4: "#FF5C67",
    5: "#FF828A",
    6: "#FFA6AA",
    7: "#FFC2C5",
    8: "#FFE6E8",
    9: "#FFF4F5",
  },

  // Orange Colors (9단계)
  orange: {
    1: "#ED4C0C",
    2: "#F5662D",
    3: "#FF7943",
    4: "#FF8A5C",
    5: "#FFA582",
    6: "#FFBFA6",
    7: "#FFD3C2",
    8: "#FFE8E0",
    9: "#FFF7F4",
  },

  // Yellow Colors (9단계)
  yellow: {
    1: "#FFC300",
    2: "#FFD105",
    3: "#FFDB3B",
    4: "#FFE365",
    5: "#FFE882",
    6: "#FFEFA6",
    7: "#FFF4C2",
    8: "#FFF7D5",
    9: "#FFFDF4",
  },

  // Green Colors (9단계)
  green: {
    1: "#05A445",
    2: "#26AD5C",
    3: "#41BD73",
    4: "#54CE85",
    5: "#69DB97",
    6: "#83E9AC",
    7: "#A4F2C3",
    8: "#D2F8E3",
    9: "#EDFDF4",
  },

  // Blue Colors (9단계)
  blue: {
    1: "#177FD9",
    2: "#3592E4",
    3: "#48A3F3",
    4: "#5CB3FF",
    5: "#82C5FF",
    6: "#A6D5FF",
    7: "#C2E3FF",
    8: "#E6F3FF",
    9: "#F4FAFF",
  },

  // Opacity Variants (Gray 기준)
  opacity: {
    "80%": "rgba(23, 23, 25, 0.8)",
    "55%": "rgba(23, 23, 25, 0.55)",
    "16%": "rgba(23, 23, 25, 0.16)",
    "8%": "rgba(23, 23, 25, 0.08)",
    "4%": "rgba(23, 23, 25, 0.04)",
    "2%": "rgba(23, 23, 25, 0.02)",
  },

  // Gradient
  gradient: {
    // Component gradient (Primary 기준)
    component: {
      from: "#F2EDFF",
      to: "#F2EDFF",
      opacity: {
        start: 0,
        middle: 1,
        end: 0,
      },
      direction:
        "linear-gradient(90deg, rgba(242, 237, 255, 0%) 0%, rgba(242, 237, 255, 100%) 50%, rgba(242, 237, 255, 0%) 100%)",
    },
  },
} as const;

export default colors;
