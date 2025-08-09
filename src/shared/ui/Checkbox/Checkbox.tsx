import { useId, type ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import type { CheckboxProps } from "./Checkbox.types";
import checkboxSvg from "../../assets/svgs/checkbox.svg";
import checkboxDisabledSvg from "../../assets/svgs/checkbox-disabled.svg";

export const Checkbox = ({
  id,
  name,
  value,
  checked,
  disabled = false,
  label,
  className,
  onChange,
}: CheckboxProps) => {
  const inputId = id || useId();
  const box = "w-5 h-5 rounded-[6px]";
  const icon = 14;
  const gap = "gap-2";

  const isChecked = checked;
  const isDisabled = disabled;
  const bgClass = isChecked
    ? isDisabled
      ? "bg-gray-8"
      : "bg-primary-2"
    : isDisabled
      ? "bg-gray-9"
      : "bg-white";
  const borderClass = !isChecked
    ? "border border-gray-7 border-[1.5px]"
    : undefined;
  const iconSrc = isDisabled ? checkboxDisabledSvg : checkboxSvg;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked);
  };

  return (
    <label
      htmlFor={inputId}
      className={twMerge(
        clsx(
          "inline-flex items-center select-none",
          gap,
          disabled ? "cursor-not-allowed" : "cursor-pointer"
        ),
        className
      )}
    >
      <input
        id={inputId}
        name={name}
        value={value}
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        aria-checked={checked}
        aria-disabled={disabled}
      />

      <span
        aria-hidden
        className={clsx(
          "relative inline-flex items-center justify-center",
          "shrink-0",
          box,
          bgClass,
          borderClass,
          "peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-primary-3",
          "transition-colors duration-150 ease-in-out"
        )}
      >
        {isChecked && (
          <img src={iconSrc} width={icon} height={icon} alt="" aria-hidden />
        )}
      </span>

      {label !== undefined && (
        <span
          className={clsx(
            "text-body-16 font-medium",
            disabled ? "text-gray-6" : "text-gray-1"
          )}
        >
          {label}
        </span>
      )}
    </label>
  );
};

export default Checkbox;
