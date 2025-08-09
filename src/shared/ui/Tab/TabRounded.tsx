import { useCallback, KeyboardEvent } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export type TabOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type TabRoundedProps = {
  value: string;
  options: TabOption[];
  onChange: (value: string) => void;
  className?: string;
  gapClassName?: string;
  fullWidth?: boolean;
};

const CHIP_COMMON = [
  "inline-flex",
  "items-center",
  "justify-center",
  "gap-[2px]",
  "h-7",
  "!min-h-[28px]",
  "!min-w-0",
  "!px-[10px]",
  "!py-0",
  "rounded-[14px]",
  "!text-[14px]",
  "font-semibold",
  "tracking-[-0.015em]",
  "leading-[1.5]",
  "transition-colors",
  "duration-150",
  "border",
  "outline-none",
  "focus-visible:ring-2",
  "focus-visible:ring-primary-7",
];

const CHIP_SELECTED = [
  "bg-primary-2",
  "text-white",
  "border-primary-2",
  "hover:bg-primary-1",
  "active:bg-primary-3",
];

const CHIP_UNSELECTED = [
  "bg-transparent",
  "text-primary-5",
  "border-primary-7",
  "hover:bg-primary-9/40",
  "active:bg-primary-9/60",
];

export function TabRounded({
  value,
  options,
  onChange,
  className,
  gapClassName = "gap-8",
  fullWidth,
}: TabRoundedProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) return;
      e.preventDefault();

      const enabled = options.filter((o) => !o.disabled);
      if (enabled.length === 0) return;

      const enabledIdx = enabled.findIndex((o) => o.value === value);
      const last = enabled.length - 1;

      let nextIdx = enabledIdx;
      if (e.key === "ArrowRight")
        nextIdx = enabledIdx === last ? 0 : enabledIdx + 1;
      if (e.key === "ArrowLeft")
        nextIdx = enabledIdx <= 0 ? last : enabledIdx - 1;
      if (e.key === "Home") nextIdx = 0;
      if (e.key === "End") nextIdx = last;

      const next = enabled[nextIdx];
      if (next) onChange(next.value);
    },
    [onChange, options, value]
  );

  return (
    <div
      role="tablist"
      aria-label="Tab Rounded"
      className={twMerge(
        clsx("inline-flex", gapClassName, fullWidth && "w-full"),
        className
      )}
      onKeyDown={handleKey}
    >
      {options.map((opt) => {
        const selected = opt.value === value;
        const ariaSelected = selected ? true : false;
        const tabIndex = selected ? 0 : -1;

        const classes = twMerge(
          clsx(
            CHIP_COMMON,
            selected ? CHIP_SELECTED : CHIP_UNSELECTED,
            opt.disabled && "opacity-50 pointer-events-none"
          )
        );

        return (
          <button
            key={opt.value}
            type="button"
            role="tab"
            aria-selected={ariaSelected}
            tabIndex={tabIndex}
            className={classes}
            onClick={() => !opt.disabled && onChange(opt.value)}
          >
            <span className="whitespace-nowrap">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default TabRounded;
