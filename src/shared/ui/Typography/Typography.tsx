import { cn } from "../../lib/tailwind-cn";
import { ReactNode, ElementType } from "react";
import { getDefaultTag, getDefaultWeight } from "./Typography.hooks";

export type FontWeight = "regular" | "medium" | "semibold" | "bold";

export type DisplayVariant = "display-28" | "display-26";
export type HeadingVariant = "heading-24" | "heading-22" | "heading-20";
export type BodyVariant = "body-18" | "body-16" | "body-14";
export type CaptionVariant = "caption-12";

export type TypographyVariant =
  | DisplayVariant
  | HeadingVariant
  | BodyVariant
  | CaptionVariant;

export interface TypographyProps {
  children: ReactNode;
  variant: TypographyVariant;
  weight?: FontWeight;
  className?: string;
  as?: ElementType;
}

export const Typography = ({
  children,
  variant,
  weight,
  className,
  as,
}: TypographyProps) => {
  const Element = as || getDefaultTag(variant);
  const finalWeight = weight || getDefaultWeight(variant);

  const classes = cn(
    "font-sans",
    `text-${variant}`,
    `font-${finalWeight}`,
    className
  );

  return <Element className={classes}>{children}</Element>;
};

export default Typography;
