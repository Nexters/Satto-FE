import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: "primary";
  size?: "xs" | "s" | "m" | "l" | "xl";
  fullWidth?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

const getButtonStyles = (
  variant: string,
  size: string,
  fullWidth: boolean,
  disabled: boolean
) => {
  // 기본 스타일 - Figma 디자인에 정확히 맞게 수정
  const baseStyles = 'inline-flex justify-center items-center flex-shrink-0 font-bold';
  
  // Size styles - Figma의 둥근 모양과 넉넉한 패딩에 맞게 조정
  const sizeStyles = {
    xs: 'h-8 px-4 gap-[4px] text-[12px] leading-[16px] min-w-[60px]',
    s: 'h-9 px-5 gap-[6px] text-[14px] leading-[18px] min-w-[70px]', 
    m: 'h-10 px-6 gap-[8px] text-[14px] leading-[18px] min-w-[80px]',
    l: 'h-12 px-8 gap-[8px] text-[16px] leading-[20px] min-w-[100px]',
    xl: 'h-[56px] px-[32px] gap-[8px] text-[18px] leading-[22px] min-w-[120px]'
  };
  
  // Variant styles - Figma 색상에 맞게 조정
  const variantStyles = {
    primary: disabled
      ? "bg-[#DDD0FF] text-white cursor-not-allowed" // disabled
      : "bg-[#7843FF] text-white hover:bg-[#7843FF] active:bg-[#6A00FF] transition-colors", // default & pressed
  };
  
  // Border radius - Figma의 매우 둥근 모양에 맞게 16px로 증가
  const radiusStyles = 'rounded-[16px]';
  
  // Full width
  const widthStyles = fullWidth ? 'w-full' : '';
  
  return `${baseStyles} ${sizeStyles[size as keyof typeof sizeStyles]} ${variantStyles[variant as keyof typeof variantStyles]} ${radiusStyles} ${widthStyles}`;
};

const getIconSize = (size: string) => {
  const iconSizes = {
    xs: "w-3 h-3",
    s: "w-4 h-4",
    m: "w-4 h-4",
    l: "w-5 h-5",
    xl: "w-6 h-6",
  };

  return iconSizes[size as keyof typeof iconSizes];
};

export const Button = ({
  children,
  variant = "primary",
  size = "m",
  fullWidth = false,
  loading = false,
  icon,
  iconPosition = "left",
  className,
  disabled,
  ...props
}: ButtonProps) => {
  const isDisabled = disabled || loading;
  const buttonStyles = getButtonStyles(variant, size, fullWidth, isDisabled);
  const iconStyles = getIconSize(size);

  return (
    <button
      className={cn(buttonStyles, className)}
      disabled={isDisabled}
      {...props}
    >
      {loading ? (
        <>
          <div className={`animate-spin rounded-full  ${iconStyles}`} />
          {children && <span>Loading...</span>}
        </>
      ) : (
        <>
          {icon && iconPosition === "left" && (
            <span className={iconStyles}>{icon}</span>
          )}
          {children}
          {icon && iconPosition === "right" && (
            <span className={iconStyles}>{icon}</span>
          )}
        </>
      )}
    </button>
  );
};
