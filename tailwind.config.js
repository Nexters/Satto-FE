/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern:
        /^(bg|text|border)-(primary|gray|red|orange|yellow|green|blue)-(1|2|3|4|5|6|7|8|9)$/,
    },
    {
      pattern: /^(bg|text|border)-gray-alpha-(80|55|16|8|4|2)$/,
    },
    // Typography 클래스들
    {
      pattern: /^text-(display|heading|body|caption)-(28|26|24|22|20|18|16|14|12)$/,
    },
    {
      pattern: /^font-(regular|medium|semibold|bold)$/,
    },
  ],
  theme: {
    extend: {
      screens: {
        "safe-area": "390px",
      },

      spacing: {
        "safe-top": "env(safe-area-inset-top)",
        "safe-bottom": "env(safe-area-inset-bottom)",
        "safe-left": "env(safe-area-inset-left)",
        "safe-right": "env(safe-area-inset-right)",
      },

      colors: {
        black: "#171719",
        white: "#FFFFFF",

        gray: {
          1: "#222729",
          2: "#353C3F",
          3: "#4A5256",
          4: "#6E777C",
          5: "#AEB7BC",
          6: "#CFD6D9",
          7: "##E7EDF0",
          8: "#F1F4F6",
          9: "#F7F9FA",
        },

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

        "gray-alpha": {
          80: "rgba(23, 23, 25, 0.8)",
          55: "rgba(23, 23, 25, 0.55)",
          16: "rgba(23, 23, 25, 0.16)",
          8: "rgba(23, 23, 25, 0.08)",
          4: "rgba(23, 23, 25, 0.04)",
          2: "rgba(23, 23, 25, 0.02)",
        },
      },

      fontFamily: {
        sans: [
          "SUIT",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "Apple SD Gothic Neo",
          "Roboto",
          "Noto Sans KR",
          "Segoe UI",
          "Malgun Gothic",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "sans-serif",
        ],
      },

      fontSize: {
        "display-28": ["28px", { lineHeight: "150%", letterSpacing: "-1.5%" }],
        "display-26": ["26px", { lineHeight: "150%", letterSpacing: "-1.5%" }],

        "heading-24": ["24px", { lineHeight: "150%", letterSpacing: "-1.5%" }],
        "heading-22": ["22px", { lineHeight: "150%", letterSpacing: "-1.5%" }],
        "heading-20": ["20px", { lineHeight: "150%", letterSpacing: "-1.5%" }],

        "body-18": ["18px", { lineHeight: "150%", letterSpacing: "-1.5%" }],
        "body-16": ["16px", { lineHeight: "150%", letterSpacing: "-1.5%" }],
        "body-14": ["14px", { lineHeight: "150%", letterSpacing: "-1.5%" }],

        "caption-12": ["12px", { lineHeight: "150%", letterSpacing: "-1.5%" }],
      },

      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },

      minHeight: {
        "screen-safe":
          "calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))",
      },

      maxWidth: {
        mobile: "430px",
      },
    },
  },
  plugins: [],
};
