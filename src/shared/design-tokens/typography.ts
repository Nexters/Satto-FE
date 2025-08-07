export const typography = {
  fontFamily: {
    primary: "SUIT",
    fallback: [
      "Pretendard",
      "-apple-system",
      "BlinkMacSystemFont",
      "Apple SD Gothic Neo",
      "Roboto",
      "Noto Sans KR",
      "Segoe UI",
      "Malgun Gothic",
      "sans-serif",
    ],
  },

  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  scale: {
    display: {
      28: {
        fontSize: "28px",
        lineHeight: "150%",
        letterSpacing: "-1.5%",
        fontWeight: 700,
      },
      26: {
        fontSize: "26px",
        lineHeight: "150%",
        letterSpacing: "-1.5%",
        fontWeight: 700,
      },
    },

    heading: {
      24: {
        fontSize: "24px",
        lineHeight: "150%",
        letterSpacing: "-1.5%",
        fontWeight: 700,
      },
      22: {
        fontSize: "22px",
        lineHeight: "150%",
        letterSpacing: "-1.5%",
        fontWeight: 700,
      },
      20: {
        fontSize: "20px",
        lineHeight: "150%",
        letterSpacing: "-1.5%",
        fontWeight: 700,
      },
    },

    body: {
      18: {
        fontSize: "18px",
        lineHeight: "150%",
        letterSpacing: "-1.5%",
        fontWeight: 400,
      },
      16: {
        fontSize: "16px",
        lineHeight: "150%",
        letterSpacing: "-1.5%",
        fontWeight: 400,
      },
      14: {
        fontSize: "14px",
        lineHeight: "150%",
        letterSpacing: "-1.5%",
        fontWeight: 400,
      },
    },

    caption: {
      12: {
        fontSize: "12px",
        lineHeight: "150%",
        letterSpacing: "-1.5%",
        fontWeight: 400,
      },
    },
  },

  cssVariables: {
    "--font-family-primary": "SUIT",
    "--font-weight-regular": "400",
    "--font-weight-medium": "500",
    "--font-weight-semibold": "600",
    "--font-weight-bold": "700",
    "--line-height-default": "150%",
    "--letter-spacing-default": "-1.5%",
  },
} as const;

export default typography;
