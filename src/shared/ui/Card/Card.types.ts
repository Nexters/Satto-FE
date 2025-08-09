import { type HTMLAttributes, type ReactNode } from "react";
import type { BallProps } from "../Ball";

export type CardSize = "M" | "S";

export type CardMState = "joined" | "not_joined";
export type CardSState = "default" | "rank1";

export interface BaseCardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export interface CardMProps extends BaseCardProps {
  size: "M";
  state: CardMState;
  title: string;
  date?: string;
  chipLabel?: string;
  chipVisible?: boolean;
  balls?: BallProps[];
  bonusBall?: BallProps;
  iconRight?: ReactNode;
  footerLeft?: string;
  footerRight?: string;
}

export interface CardSProps extends BaseCardProps {
  size: "S";
  state: CardSState;
  rank?: number;
  title: string;
  ball?: BallProps;
}

export type CardProps = CardMProps | CardSProps;
