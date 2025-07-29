export const colors = {
  primary: "#F34854",

  text: {
    primary: "#171719",
    secondary: "#353C3F",
    tertiary: "#5E696E",
    quaternary: "#4A5256",
    disabled: "#AEB7BC",
  },

  background: {
    primary: "#FFFFFF",
    secondary: "#F7F9FA",
  },

  gray: {
    80: "rgba(23, 23, 25, 0.8)",
    50: "rgba(23, 23, 25, 0.5)",
    16: "rgba(23, 23, 25, 0.16)",
    8: "rgba(23, 23, 25, 0.08)",
    4: "rgba(23, 23, 25, 0.04)",
    2: "rgba(23, 23, 25, 0.02)",
  },

  border: {
    primary: "#E7EDF0",
    secondary: "#CFD6D9",
  },
} as const;

export const typography = {
  fontFamily: {
    primary: "SUIT",
    secondary: "Pretendard",
  },

  fontSize: {
    "28": "28px",
    "22": "22px",
    "20": "20px",
    "18": "18px",
    "16": "16px",
    "14": "14px",
    "12": "12px",
  },

  fontWeight: {
    700: "700",
    600: "600",
    500: "500",
    400: "400",
  },

  lineHeight: {
    normal: "1.5em",
    tight: "1.6em",
  },

  letterSpacing: {
    tight: "-1.5%",
  },
} as const;

export const spacing = {
  0: "0px",
  2: "2px",
  4: "4px",
  6: "6px",
  8: "8px",
  12: "12px",
  16: "16px",
  20: "20px",
  24: "24px",
  32: "32px",
  40: "40px",
  48: "48px",
  80: "80px",
} as const;

export const borderRadius = {
  none: "0px",
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "20px",
  "2xl": "24px",
  "3xl": "48px",
} as const;

export const shadows = {
  card: "0px 4px 16px 0px rgba(247, 249, 250, 1)",
  elevation:
    "0px 0px 16px 0px rgba(247, 249, 250, 1), 0px 4px 16px 0px rgba(247, 249, 250, 1), 0px 4px 20px 0px rgba(247, 249, 250, 1)",
} as const;

export const layout = {
  mobile: {
    width: "375px",
    maxWidth: "375px",
  },
  header: {
    height: "72px",
  },
} as const;
