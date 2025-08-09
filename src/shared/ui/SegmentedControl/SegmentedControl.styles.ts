export const ITEM_COMMON = [
  "inline-flex",
  "items-center",
  "justify-center",
  "gap-[2px]",
  "h-8",
  "!min-h-[32px]",
  "!min-w-0",
  "px-2",
  "py-0",
  "rounded-[4px]",
  "!text-[14px]",
  "font-semibold",
  "tracking-[-0.015em]",
  "leading-[1.5]",
  "transition-colors",
  "duration-150",
  "outline-none",
  "focus-visible:ring-2",
  "flex-1",
  "basis-0",
] as const;

export const SELECTED = ["text-gray-3"] as const;
export const UNSELECTED = ["bg-transparent", "text-gray-5"] as const;

export const WRAPPER_BASE = [
  "inline-flex",
  "items-center",
  "relative",
  "rounded-[8px]",
  "p-1",
  "w-full",
] as const;
