import { twMerge } from "tailwind-merge";
import colors from "../../design-tokens/color";

export const Divider = () => {
  return (
    <div
      className={twMerge("absolute left-[49px] top-[276px] w-[375px]")}
      style={{
        background: colors.gradient.component.direction,
        height: 1,
      }}
      role="separator"
      aria-orientation="horizontal"
    />
  );
};

export default Divider;
