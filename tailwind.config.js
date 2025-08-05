/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#171719",
        white: "#FFFFFF",

        gray: {
          50: "#F7F9FA",
          100: "#F1F4F6",
          200: "#E7EDF0",
          300: "#CFD6D9",
          400: "#AEB7BC",
          500: "#6E777C",
          600: "#5E696E",
          700: "#4A5256",
          800: "#353C3F",
          900: "#222729",
        },

        primary: {
          50: "#FFF4F5",
          100: "#FFE0E2",
          200: "#FFC2C5",
          300: "#FFA6AA",
          400: "#FF828A",
          500: "#F34854",
          600: "#FF5C67",
          700: "#E43540",
          800: "#D71723",
          900: "#B91C1C",
        },

        purple: {
          50: "#F7F5FF",
          100: "#ECE5FF",
          200: "#DDD0FF",
          300: "#CBB8FF",
          400: "#BDA4FF",
          500: "#A481FF",
          600: "#8E61FF",
          700: "#7843FF",
          800: "#6A00FF",
          900: "#5A00D9",
        },

        orange: {
          50: "#FFF7F4",
          100: "#FFE8E0",
          200: "#FFD3C2",
          300: "#FFBFA6",
          400: "#FFA582",
          500: "#FF8A5C",
          600: "#FF7943",
          700: "#F5662D",
          800: "#ED4C0C",
          900: "#CC3D00",
        },

        yellow: {
          50: "#FFFDF4",
          100: "#FFF7D5",
          200: "#FFF4C2",
          300: "#FFEFA6",
          400: "#FFE882",
          500: "#FFE365",
          600: "#FFDB3B",
          700: "#FFD105",
          800: "#FFC300",
          900: "#E6A800",
        },

        green: {
          50: "#EDFDF4",
          100: "#D2F8E3",
          200: "#A4F2C3",
          300: "#83E9AC",
          400: "#69DB97",
          500: "#54CE85",
          600: "#41BD73",
          700: "#26AD5C",
          800: "#05A445",
          900: "#047A37",
        },

        blue: {
          50: "#F4FAFF",
          100: "#E6F3FF",
          200: "#C2E3FF",
          300: "#A6D5FF",
          400: "#82C5FF",
          500: "#5CB3FF",
          600: "#48A3F3",
          700: "#3592E4",
          800: "#177FD9",
          900: "#1366B8",
        },

        overlay: {
          80: "rgba(23, 23, 25, 0.8)",
          50: "rgba(23, 23, 25, 0.5)",
          16: "rgba(23, 23, 25, 0.16)",
          8: "rgba(23, 23, 25, 0.08)",
          4: "rgba(23, 23, 25, 0.04)",
          2: "rgba(23, 23, 25, 0.02)",
        },
      },

      fontFamily: {
        suit: ["SUIT", "system-ui", "sans-serif"],
        pretendard: ["Pretendard", "system-ui", "sans-serif"],
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
        "display-24": ["24px", { lineHeight: "150%", letterSpacing: "-1.5%" }],
        "display-22": ["22px", { lineHeight: "150%", letterSpacing: "-1.5%" }],
        "display-20": ["20px", { lineHeight: "150%", letterSpacing: "-1.5%" }],

        "text-18": ["18px", { lineHeight: "150%", letterSpacing: "-1.5%" }],
        "text-16": ["16px", { lineHeight: "150%", letterSpacing: "-1.5%" }],
        "text-14": ["14px", { lineHeight: "150%", letterSpacing: "-1.5%" }],
        "text-12": ["12px", { lineHeight: "150%", letterSpacing: "-1.5%" }],
      },

      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },

      borderRadius: {
        xs: "2px",
        sm: "4px",
        md: "6px",
        lg: "8px",
        xl: "12px",
        "2xl": "16px",
        "3xl": "20px",
        "4xl": "24px",
        "5xl": "32px",
        "6xl": "40px",
        "7xl": "48px",
      },

      boxShadow: {
        xs: "0 1px 2px 0 rgba(23, 23, 25, 0.05)",
        sm: "0 1px 3px 0 rgba(23, 23, 25, 0.1), 0 1px 2px -1px rgba(23, 23, 25, 0.1)",
        md: "0 4px 6px -1px rgba(23, 23, 25, 0.1), 0 2px 4px -2px rgba(23, 23, 25, 0.1)",
        lg: "0 10px 15px -3px rgba(23, 23, 25, 0.1), 0 4px 6px -4px rgba(23, 23, 25, 0.1)",
        xl: "0 20px 25px -5px rgba(23, 23, 25, 0.1), 0 8px 10px -6px rgba(23, 23, 25, 0.1)",
        "2xl": "0 25px 50px -12px rgba(23, 23, 25, 0.25)",
      },

      screens: {
        xs: "375px",
        "safe-area": "390px",
      },

      spacing: {
        "safe-top": "env(safe-area-inset-top)",
        "safe-bottom": "env(safe-area-inset-bottom)",
        "safe-left": "env(safe-area-inset-left)",
        "safe-right": "env(safe-area-inset-right)",
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
