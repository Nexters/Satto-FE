type ChipVariant = "solid" | "tinted" | "border";
export type ChipShape = "round" | "square";
export type ChipColor =
  | "primary"
  | "black"
  | "gray"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue";

const shapeClasses: Record<ChipShape, string> = {
  round: "rounded-full",
  square: "rounded-[6px]",
};

const baseClasses = [
  "inline-flex items-center justify-center",
  "h-[28px] min-h-[28px] max-h-[28px] px-[10px] gap-0.5",
  "text-[14px] leading-6 font-semibold tracking-[-0.015em] whitespace-nowrap",
  "transition-colors duration-150 ease-in-out",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-3",
].join(" ");

const solidMap: Record<
  ChipColor,
  { bg: string; text: string; border?: string }
> = {
  primary: { bg: "bg-primary-2", text: "text-white" },
  black: { bg: "bg-gray-2", text: "text-white" },
  gray: { bg: "bg-gray-5", text: "text-white" },
  red: { bg: "bg-red-4", text: "text-white" },
  orange: { bg: "bg-orange-3", text: "text-white" },
  yellow: { bg: "bg-yellow-3", text: "text-white" },
  green: { bg: "bg-green-3", text: "text-white" },
  blue: { bg: "bg-blue-3", text: "text-white" },
};

const tintedMap: Record<
  ChipColor,
  { bg: string; text: string; border: string }
> = {
  primary: {
    bg: "bg-primary-8",
    text: "text-primary-3",
    border: "border border-primary-8",
  },
  black: {
    bg: "bg-gray-9",
    text: "text-black",
    border: "border border-gray-9",
  },
  gray: {
    bg: "bg-gray-9",
    text: "text-gray-5",
    border: "border border-gray-9",
  },
  red: { bg: "bg-red-8", text: "text-red-3", border: "border border-red-8" },
  orange: {
    bg: "bg-orange-8",
    text: "text-orange-3",
    border: "border border-orange-8",
  },
  yellow: {
    bg: "bg-yellow-8",
    text: "text-yellow-3",
    border: "border border-yellow-8",
  },
  green: {
    bg: "bg-green-8",
    text: "text-green-3",
    border: "border border-green-8",
  },
  blue: {
    bg: "bg-blue-8",
    text: "text-blue-3",
    border: "border border-blue-8",
  },
};

const borderMap: Record<
  ChipColor,
  { bg: string; text: string; border: string }
> = {
  primary: {
    bg: "bg-transparent",
    text: "text-primary-3",
    border: "border border-primary-3",
  },
  black: {
    bg: "bg-transparent",
    text: "text-black",
    border: "border border-black",
  },
  gray: {
    bg: "bg-transparent",
    text: "text-gray-5",
    border: "border border-gray-5",
  },
  red: {
    bg: "bg-transparent",
    text: "text-red-3",
    border: "border border-red-3",
  },
  orange: {
    bg: "bg-transparent",
    text: "text-orange-3",
    border: "border border-orange-3",
  },
  yellow: {
    bg: "bg-transparent",
    text: "text-yellow-3",
    border: "border border-yellow-3",
  },
  green: {
    bg: "bg-transparent",
    text: "text-green-3",
    border: "border border-green-3",
  },
  blue: {
    bg: "bg-transparent",
    text: "text-blue-3",
    border: "border border-blue-3",
  },
};

export default function getChipClasses(
  variant: ChipVariant,
  shape: ChipShape,
  color: ChipColor,
  disabled?: boolean
) {
  const colorClasses =
    variant === "solid"
      ? solidMap[color]
      : variant === "tinted"
        ? tintedMap[color]
        : borderMap[color];
  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  return [
    baseClasses,
    shapeClasses[shape],
    colorClasses.bg,
    colorClasses.text,
    colorClasses.border,
    disabledClasses,
  ]
    .filter(Boolean)
    .join(" ");
}
