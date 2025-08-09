import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import type { ButtonVariant, ButtonSize, ButtonState } from "./Button";

const getButtonClasses = (
  variant: ButtonVariant,
  size: ButtonSize,
  state: ButtonState
) => {
  const baseClasses = [
    "inline-flex",
    "items-center",
    "justify-center",
    "font-bold",
    "transition-all",
    "duration-200",
    "cursor-pointer",
    "select-none",
    "outline-none",
    "focus:outline-none",
  ];

  const sizeClasses = {
    xl: ["h-14", "px-6", "text-body-18", "rounded-lg", "gap-2"],
    l: ["h-12", "px-[22px]", "text-body-16", "rounded-lg", "gap-2"],
    m: ["h-10", "px-[18px]", "text-body-14", "rounded-lg", "gap-1.5"],
    s: ["h-9", "px-[14px]", "text-body-14", "rounded-lg", "gap-1.5"],
    xs: ["h-8", "px-3", "text-caption-12", "rounded-md", "gap-1"],
  };

  const variantStateClasses = {
    primary: {
      default: [
        "bg-primary-2",
        "text-white",
        "hover:bg-primary-1",
        "active:bg-primary-3",
      ],
      pressed: ["bg-primary-1", "text-white"],
      disabled: ["bg-primary-7", "text-white", "cursor-not-allowed"],
    },
    tinted: {
      default: [
        "bg-primary-8",
        "text-primary-2",
        "hover:bg-primary-7",
        "active:bg-primary-6",
      ],
      pressed: ["bg-primary-7", "text-primary-2"],
      disabled: ["bg-primary-8", "text-primary-7", "cursor-not-allowed"],
    },
    border: {
      default: [
        "bg-transparent",
        "text-primary-2",
        "border",
        "border-primary-2",
        "hover:bg-primary-8",
        "active:bg-primary-7",
      ],
      pressed: ["bg-primary-8", "text-primary-2", "border", "border-primary-2"],
      disabled: [
        "bg-transparent",
        "text-gray-5",
        "border",
        "border-gray-5",
        "cursor-not-allowed",
      ],
    },
    "border-gray": {
      default: [
        "bg-transparent",
        "text-gray-1",
        "border",
        "border-gray-7",
        "hover:bg-gray-9",
        "active:bg-gray-8",
      ],
      pressed: ["bg-gray-9", "text-gray-1", "border", "border-gray-7"],
      disabled: [
        "bg-transparent",
        "text-gray-5",
        "border",
        "border-gray-7",
        "cursor-not-allowed",
      ],
    },
    text: {
      default: [
        "bg-transparent",
        "text-black",
        "hover:text-primary-1",
        "active:text-primary-2",
      ],
      pressed: ["bg-transparent", "text-primary-1"],
      disabled: ["bg-transparent", "text-gray-5", "cursor-not-allowed"],
    },
  };

  return twMerge(
    clsx([
      ...baseClasses,
      ...sizeClasses[size],
      ...variantStateClasses[variant][state],
    ])
  );
};

export default getButtonClasses;
