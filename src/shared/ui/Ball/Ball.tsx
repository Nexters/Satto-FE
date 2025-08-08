import { cn } from "../../lib/tailwind-cn";

export const LOTTO_BALL_COLORS = {
  YELLOW: "yellow",
  BLUE: "blue",
  RED: "red",
  GRAY: "gray",
  GREEN: "green",
} as const;

const ballImages = {
  yellow: new URL("../../assets/images/ball/ball_yellow.png", import.meta.url)
    .href,
  blue: new URL("../../assets/images/ball/ball_blue.png", import.meta.url).href,
  red: new URL("../../assets/images/ball/ball_red.png", import.meta.url).href,
  gray: new URL("../../assets/images/ball/ball_gray.png", import.meta.url).href,
  green: new URL("../../assets/images/ball/ball_green.png", import.meta.url)
    .href,
} as const;

export type LottoBallColor =
  (typeof LOTTO_BALL_COLORS)[keyof typeof LOTTO_BALL_COLORS];

export interface BallProps {
  number: number;
  color: LottoBallColor;
  className?: string;
}

export const Ball = ({ number, color, className }: BallProps) => {
  if (number < 1 || number > 45) {
    console.warn(`Ball number should be between 1-45, received: ${number}`);
  }

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center w-8 h-8 text-sm",
        className
      )}
      role="img"
      aria-label={`로또 번호 ${number}`}
    >
      <img
        src={ballImages[color]}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-contain"
      />

      <span
        className={cn(
          "relative z-10 font-extrabold text-white text-center leading-none",
          "drop-shadow-sm select-none",

          number >= 10 ? "tracking-tighter" : ""
        )}
        style={{
          textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
        }}
      >
        {number}
      </span>
    </div>
  );
};

export default Ball;
