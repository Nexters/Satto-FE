export const button = {
  sizes: {
    xl: {
      height: "56px",
      padding: "0px 24px",
      fontSize: "text-body-18",
      borderRadius: "8px",
      gap: "8px",
    },
    l: {
      height: "48px",
      padding: "0px 22px",
      fontSize: "text-body-16",
      borderRadius: "8px",
      gap: "8px",
    },
    m: {
      height: "40px",
      padding: "0px 18px",
      fontSize: "text-body-14",
      borderRadius: "8px",
      gap: "6px",
    },
    s: {
      height: "36px",
      padding: "0px 14px",
      fontSize: "text-body-14",
      borderRadius: "8px",
      gap: "6px",
    },
    xs: {
      height: "32px",
      padding: "0px 12px",
      fontSize: "text-caption-12",
      borderRadius: "6px",
      gap: "4px",
    },
  },

  variants: {
    primary: {
      default: {
        backgroundColor: "bg-primary-2",
        color: "text-white",
        border: "none",
      },
      pressed: {
        backgroundColor: "bg-primary-1",
        color: "text-white",
        border: "none",
      },
      disabled: {
        backgroundColor: "bg-primary-7",
        color: "text-white",
        border: "none",
      },
    },
    tinted: {
      default: {
        backgroundColor: "bg-primary-8",
        color: "text-primary-2",
        border: "none",
      },
      pressed: {
        backgroundColor: "bg-primary-7",
        color: "text-primary-2",
        border: "none",
      },
      disabled: {
        backgroundColor: "bg-primary-8",
        color: "text-primary-7",
        border: "none",
      },
    },
    border: {
      default: {
        backgroundColor: "transparent",
        color: "text-primary-2",
        border: "1px solid border-primary-2",
      },
      pressed: {
        backgroundColor: "bg-primary-8",
        color: "text-primary-2",
        border: "1px solid border-primary-2",
      },
      disabled: {
        backgroundColor: "transparent",
        color: "text-gray-5",
        border: "1px solid border-gray-5",
      },
    },
    "border-gray": {
      default: {
        backgroundColor: "transparent",
        color: "text-gray-1",
        border: "1px solid border-gray-7",
      },
      pressed: {
        backgroundColor: "bg-gray-9",
        color: "text-gray-1",
        border: "1px solid border-gray-7",
      },
      disabled: {
        backgroundColor: "transparent",
        color: "text-gray-5",
        border: "1px solid border-gray-7",
      },
    },
    text: {
      default: {
        backgroundColor: "transparent",
        color: "text-black",
        border: "none",
      },
      pressed: {
        backgroundColor: "transparent",
        color: "text-primary-1",
        border: "none",
      },
      disabled: {
        backgroundColor: "transparent",
        color: "text-gray-5",
        border: "none",
      },
    },
  },

  typography: {
    fontFamily: "SUIT",
    fontWeight: "700",
    lineHeight: "150%",
    letterSpacing: "-1.5%",
    textAlign: "center",
  },
} as const;

export default button;
