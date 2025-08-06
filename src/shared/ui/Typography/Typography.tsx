import { ReactNode } from "react";

export type FontWeight = "regular" | "medium" | "semibold" | "bold";
export type FontSize = 12 | 14 | 16 | 18 | 20 | 22 | 24 | 26 | 28;
export type SemanticVariant = "display" | "heading" | "body" | "caption";

export interface TypographyProps {
  children: ReactNode;
}

export const Typography = ({ children }: TypographyProps) => {
  return <>{children}</>;
};

export default Typography;
