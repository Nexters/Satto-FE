import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import getButtonClasses from "./Button.styles";

export type ButtonVariant =
  | "primary"
  | "tinted"
  | "border"
  | "border-gray"
  | "text";
export type ButtonSize = "xl" | "l" | "m" | "s" | "xs";
export type ButtonState = "default" | "pressed" | "disabled";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  state?: ButtonState;
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Button = ({
  variant = "primary",
  size = "m",
  state = "default",
  children,
  leftIcon,
  rightIcon,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  const buttonState = disabled ? "disabled" : state;
  const buttonClasses = getButtonClasses(variant, size, buttonState);

  return (
    <button
      className={twMerge(buttonClasses, className)}
      disabled={disabled || state === "disabled"}
      {...props}
    >
      {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
    </button>
  );
};
