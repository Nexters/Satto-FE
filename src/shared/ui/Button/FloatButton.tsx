import { type ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import ballImage from "../../assets/images/ball/export-ball.png";
import arrowUpSvg from "../../assets/svgs/arrow-up.svg";

export interface FloatButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const FloatButton = ({ className, ...props }: FloatButtonProps) => {
  return (
    <button
      className={twMerge(
        "fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-600 cursor-pointer select-none outline-none focus:outline-none active:scale-95",
        "bg-cover bg-center bg-no-repeat",
        "flex items-center justify-center",
        "animate-bounce",
        className
      )}
      style={{
        backgroundImage: `url(${ballImage})`,
      }}
      {...props}
    >
      <img
        src={arrowUpSvg}
        alt="위로 가기"
        className="w-6 h-6 filter brightness-0 invert drop-shadow-sm"
      />
    </button>
  );
};
