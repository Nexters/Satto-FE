import { twMerge } from "tailwind-merge";
import getChipClasses from "./Chip.styles";

import { type ButtonHTMLAttributes, type ReactNode } from "react";

export type ChipVariant = "solid" | "tinted" | "border";
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

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ChipVariant;
  shape?: ChipShape;
  color?: ChipColor;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  disabled?: boolean;
  children?: ReactNode;
}

export const Chip = ({
  variant = "solid",
  shape = "round",
  color = "primary",
  leftIcon,
  rightIcon,
  className,
  disabled,
  children,
  ...props
}: ChipProps) => {
  const classes = getChipClasses(variant, shape, color, disabled);

  return (
    <button
      type="button"
      className={twMerge(className, classes)}
      disabled={disabled}
      aria-disabled={disabled}
      {...props}
    >
      {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
      {children && <span>{children}</span>}
      {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
    </button>
  );
};

export default Chip;
