import { ReactNode, ElementType } from "react";
import { cn } from "../../lib/utils";

interface TypographyProps {
  children: ReactNode;
  variant?:
    | "display-28"
    | "display-26"
    | "display-24"
    | "display-22"
    | "display-20"
    | "text-18"
    | "text-16"
    | "text-14"
    | "text-12";
  weight?: "regular" | "medium" | "semibold" | "bold";
  color?:
    | "black"
    | "white"
    | "primary"
    | "primary-50"
    | "primary-100"
    | "primary-200"
    | "primary-300"
    | "primary-400"
    | "primary-500"
    | "primary-600"
    | "primary-700"
    | "primary-800"
    | "primary-900"
    | "gray"
    | "gray-50"
    | "gray-100"
    | "gray-200"
    | "gray-300"
    | "gray-400"
    | "gray-500"
    | "gray-600"
    | "gray-700"
    | "gray-800"
    | "gray-900"
    | "purple"
    | "purple-50"
    | "purple-100"
    | "purple-200"
    | "purple-300"
    | "purple-400"
    | "purple-500"
    | "purple-600"
    | "purple-700"
    | "purple-800"
    | "purple-900"
    | "orange"
    | "orange-50"
    | "orange-100"
    | "orange-200"
    | "orange-300"
    | "orange-400"
    | "orange-500"
    | "orange-600"
    | "orange-700"
    | "orange-800"
    | "orange-900"
    | "yellow"
    | "yellow-50"
    | "yellow-100"
    | "yellow-200"
    | "yellow-300"
    | "yellow-400"
    | "yellow-500"
    | "yellow-600"
    | "yellow-700"
    | "yellow-800"
    | "yellow-900"
    | "green"
    | "green-50"
    | "green-100"
    | "green-200"
    | "green-300"
    | "green-400"
    | "green-500"
    | "green-600"
    | "green-700"
    | "green-800"
    | "green-900"
    | "blue"
    | "blue-50"
    | "blue-100"
    | "blue-200"
    | "blue-300"
    | "blue-400"
    | "blue-500"
    | "blue-600"
    | "blue-700"
    | "blue-800"
    | "blue-900";
  className?: string;
  as?: ElementType;
}

const variantStyles = {
  "display-28": "text-[28px] leading-[1.5] tracking-[-0.015em]",
  "display-26": "text-[26px] leading-[1.5] tracking-[-0.015em]",
  "display-24": "text-[24px] leading-[1.5] tracking-[-0.015em]",
  "display-22": "text-[22px] leading-[1.5] tracking-[-0.015em]",
  "display-20": "text-[20px] leading-[1.5] tracking-[-0.015em]",

  "text-18": "text-[18px] leading-[1.5] tracking-[-0.015em]",
  "text-16": "text-[16px] leading-[1.5] tracking-[-0.015em]",
  "text-14": "text-[14px] leading-[1.5] tracking-[-0.015em]",
  "text-12": "text-[12px] leading-[1.5] tracking-[-0.015em]",
};

const colorStyles = {
  // Common colors
  black: "text-black",
  white: "text-white",

  // Primary colors
  primary: "text-primary-500",
  "primary-50": "text-primary-50",
  "primary-100": "text-primary-100",
  "primary-200": "text-primary-200",
  "primary-300": "text-primary-300",
  "primary-400": "text-primary-400",
  "primary-500": "text-primary-500",
  "primary-600": "text-primary-600",
  "primary-700": "text-primary-700",
  "primary-800": "text-primary-800",
  "primary-900": "text-primary-900",

  // Gray colors
  gray: "text-gray-500",
  "gray-50": "text-gray-50",
  "gray-100": "text-gray-100",
  "gray-200": "text-gray-200",
  "gray-300": "text-gray-300",
  "gray-400": "text-gray-400",
  "gray-500": "text-gray-500",
  "gray-600": "text-gray-600",
  "gray-700": "text-gray-700",
  "gray-800": "text-gray-800",
  "gray-900": "text-gray-900",

  // Purple colors
  purple: "text-purple-500",
  "purple-50": "text-purple-50",
  "purple-100": "text-purple-100",
  "purple-200": "text-purple-200",
  "purple-300": "text-purple-300",
  "purple-400": "text-purple-400",
  "purple-500": "text-purple-500",
  "purple-600": "text-purple-600",
  "purple-700": "text-purple-700",
  "purple-800": "text-purple-800",
  "purple-900": "text-purple-900",

  // Orange colors
  orange: "text-orange-500",
  "orange-50": "text-orange-50",
  "orange-100": "text-orange-100",
  "orange-200": "text-orange-200",
  "orange-300": "text-orange-300",
  "orange-400": "text-orange-400",
  "orange-500": "text-orange-500",
  "orange-600": "text-orange-600",
  "orange-700": "text-orange-700",
  "orange-800": "text-orange-800",
  "orange-900": "text-orange-900",

  // Yellow colors
  yellow: "text-yellow-500",
  "yellow-50": "text-yellow-50",
  "yellow-100": "text-yellow-100",
  "yellow-200": "text-yellow-200",
  "yellow-300": "text-yellow-300",
  "yellow-400": "text-yellow-400",
  "yellow-500": "text-yellow-500",
  "yellow-600": "text-yellow-600",
  "yellow-700": "text-yellow-700",
  "yellow-800": "text-yellow-800",
  "yellow-900": "text-yellow-900",

  // Green colors
  green: "text-green-500",
  "green-50": "text-green-50",
  "green-100": "text-green-100",
  "green-200": "text-green-200",
  "green-300": "text-green-300",
  "green-400": "text-green-400",
  "green-500": "text-green-500",
  "green-600": "text-green-600",
  "green-700": "text-green-700",
  "green-800": "text-green-800",
  "green-900": "text-green-900",

  // Blue colors
  blue: "text-blue-500",
  "blue-50": "text-blue-50",
  "blue-100": "text-blue-100",
  "blue-200": "text-blue-200",
  "blue-300": "text-blue-300",
  "blue-400": "text-blue-400",
  "blue-500": "text-blue-500",
  "blue-600": "text-blue-600",
  "blue-700": "text-blue-700",
  "blue-800": "text-blue-800",
  "blue-900": "text-blue-900",
};

const weightStyles = {
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

export const Typography = ({
  children,
  variant = "text-16",
  weight = "regular",
  color = "black",
  className,
  as,
}: TypographyProps) => {
  const Component = as || getDefaultElement(variant);

  return (
    <Component
      className={cn(
        "font-suit",
        variantStyles[variant],
        weightStyles[weight],
        colorStyles[color],
        className
      )}
    >
      {children}
    </Component>
  );
};

function getDefaultElement(variant: TypographyProps["variant"]): ElementType {
  switch (variant) {
    case "display-28":
      return "h1";
    case "display-26":
    case "display-24":
      return "h2";
    case "display-22":
    case "display-20":
      return "h3";
    case "text-12":
      return "span";
    default:
      return "p";
  }
}
