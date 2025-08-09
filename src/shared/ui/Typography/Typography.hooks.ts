import type { ElementType } from "react";
import type { FontWeight, TypographyVariant } from "./Typography";

export const getDefaultWeight = (variant: TypographyVariant): FontWeight => {
  if (variant.startsWith("display")) return "bold";
  if (variant.startsWith("heading")) return "bold";
  if (variant.startsWith("body")) return "regular";
  if (variant.startsWith("caption")) return "regular";
  return "regular";
};

export const getDefaultTag = (variant: TypographyVariant): ElementType => {
  if (variant.startsWith("display")) return "h1";
  if (variant.startsWith("heading")) {
    if (variant === "heading-24") return "h2";
    if (variant === "heading-22") return "h3";
    if (variant === "heading-20") return "h4";
  }
  if (variant.startsWith("body")) return "p";
  if (variant.startsWith("caption")) return "span";
  return "p";
};
