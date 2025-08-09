import { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import {
  ITEM_COMMON,
  SELECTED as SELECTED_SELECTED,
  UNSELECTED as UNSELECTED_COMMON,
  WRAPPER_BASE,
} from "./SegmentedControl.styles";
import { useIndicator, useKeyboardNavigation } from "./SegmentedControl.hooks";

export type SegmentedOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type SegmentedControlProps = {
  value: string;
  options: SegmentedOption[];
  onChange: (value: string) => void;
  className?: string;
  gapClassName?: string;
  color?: "primary" | "gray";
};

export function SegmentedControl({
  value,
  options,
  onChange,
  className,
  gapClassName = "gap-1",
  color = "primary",
}: SegmentedControlProps) {
  const { wrapperRef, itemRefs, indicator, updateIndicatorLayout } =
    useIndicator(value);
  const { handleKey } = useKeyboardNavigation(options, value, onChange);

  useEffect(() => {
    updateIndicatorLayout();
  }, [updateIndicatorLayout, options.length]);

  const ringClass =
    color === "primary"
      ? "focus-visible:ring-primary-6"
      : "focus-visible:ring-gray-6";
  const wrapperBg = color === "primary" ? "bg-[#F2EDFF]" : "bg-gray-8";

  return (
    <div
      role="tablist"
      aria-label="Segmented Control"
      className={twMerge(
        clsx(WRAPPER_BASE, wrapperBg, gapClassName),
        className
      )}
      onKeyDown={handleKey}
      ref={wrapperRef}
    >
      <div
        aria-hidden
        className={clsx(
          "absolute top-1 left-0 bg-white rounded-[4px] z-0 pointer-events-none will-change-transform",
          "transition-all duration-200 ease-out"
        )}
        style={{
          transform: `translateX(${indicator.left}px)`,
          width: indicator.width,
          height: indicator.height,
        }}
      />
      {options.map((opt) => {
        const selected = opt.value === value;
        const tabIndex = selected ? 0 : -1;

        const classes = twMerge(
          clsx(
            ITEM_COMMON,
            ringClass,

            selected ? SELECTED_SELECTED : UNSELECTED_COMMON,
            opt.disabled && "opacity-50 pointer-events-none"
          )
        );

        return (
          <button
            key={opt.value}
            type="button"
            role="tab"
            aria-selected={selected}
            tabIndex={tabIndex}
            className={twMerge(clsx("relative z-10"), classes)}
            onClick={() => !opt.disabled && onChange(opt.value)}
            ref={(el) => {
              itemRefs.current[opt.value] = el;
            }}
          >
            <span className="whitespace-nowrap">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default SegmentedControl;
