import type { BallProps } from "../../shared/ui/Ball/Ball";

export type HistoryBall = { number: number; color: BallProps["color"] };

export type HistoryItem = {
  id: string;
  title: string;
  date?: string;
  balls: HistoryBall[];
  bonusBall?: HistoryBall;
  footerLeft?: string;
  footerRight?: string;
  participated?: boolean;
};

export type RankingItem = {
  rank: number;
  number: number;
  color: BallProps["color"];
};

export const getColorByNumber = (n: number): BallProps["color"] => {
  if (n >= 1 && n <= 10) return "yellow";
  if (n >= 11 && n <= 20) return "blue";
  if (n >= 21 && n <= 30) return "red";
  if (n >= 31 && n <= 40) return "gray";
  return "green";
};
