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

export const historyMock: HistoryItem[] = [
  {
    id: "1120",
    title: "제 1120회",
    date: "2025.08.09",
    balls: [
      { number: 3, color: "yellow" },
      { number: 12, color: "blue" },
      { number: 18, color: "blue" },
      { number: 27, color: "red" },
      { number: 28, color: "red" },
      { number: 33, color: "gray" },
    ],
    bonusBall: { number: 41, color: "green" },
    footerLeft: "총 당첨자 12명",
    footerRight: "1등 2명",
    participated: true,
  },
  {
    id: "1119",
    title: "제 1119회",
    date: "2025.08.02",
    balls: [
      { number: 7, color: "yellow" },
      { number: 11, color: "blue" },
      { number: 20, color: "blue" },
      { number: 21, color: "red" },
      { number: 29, color: "red" },
      { number: 36, color: "gray" },
    ],
    bonusBall: { number: 44, color: "green" },
    footerLeft: "총 당첨자 8명",
    footerRight: "1등 1명",
  },
  {
    id: "1118",
    title: "제 1118회",
    date: "2025.07.26",
    balls: [
      { number: 2, color: "yellow" },
      { number: 9, color: "blue" },
      { number: 13, color: "blue" },
      { number: 23, color: "red" },
      { number: 28, color: "red" },
      { number: 31, color: "gray" },
    ],
    bonusBall: { number: 40, color: "green" },
    footerLeft: "총 당첨자 15명",
    footerRight: "1등 3명",
  },
  {
    id: "1117",
    title: "제 1117회",
    date: "2025.07.19",
    balls: [
      { number: 5, color: "yellow" },
      { number: 14, color: "blue" },
      { number: 19, color: "blue" },
      { number: 22, color: "red" },
      { number: 27, color: "red" },
      { number: 34, color: "gray" },
    ],
    bonusBall: { number: 43, color: "green" },
    footerLeft: "총 당첨자 10명",
    footerRight: "1등 2명",
    participated: true,
  },
  {
    id: "1116",
    title: "제 1116회",
    date: "2025.07.12",
    balls: [
      { number: 6, color: "yellow" },
      { number: 11, color: "blue" },
      { number: 17, color: "blue" },
      { number: 24, color: "red" },
      { number: 30, color: "red" },
      { number: 35, color: "gray" },
    ],
    bonusBall: { number: 41, color: "green" },
    footerLeft: "총 당첨자 9명",
    footerRight: "1등 1명",
  },
  {
    id: "1115",
    title: "제 1115회",
    date: "2025.07.05",
    balls: [
      { number: 1, color: "yellow" },
      { number: 12, color: "blue" },
      { number: 18, color: "blue" },
      { number: 21, color: "red" },
      { number: 26, color: "red" },
      { number: 32, color: "gray" },
    ],
    bonusBall: { number: 45, color: "green" },
    footerLeft: "총 당첨자 11명",
    footerRight: "1등 2명",
  },
  {
    id: "1114",
    title: "제 1114회",
    date: "2025.06.28",
    balls: [
      { number: 10, color: "yellow" },
      { number: 16, color: "blue" },
      { number: 20, color: "blue" },
      { number: 25, color: "red" },
      { number: 29, color: "red" },
      { number: 37, color: "gray" },
    ],
    bonusBall: { number: 41, color: "green" },
    footerLeft: "총 당첨자 7명",
    footerRight: "1등 1명",
    participated: true,
  },
  {
    id: "1113",
    title: "제 1113회",
    date: "2025.06.21",
    balls: [
      { number: 8, color: "yellow" },
      { number: 11, color: "blue" },
      { number: 12, color: "blue" },
      { number: 23, color: "red" },
      { number: 27, color: "red" },
      { number: 31, color: "gray" },
    ],
    bonusBall: { number: 42, color: "green" },
    footerLeft: "총 당첨자 13명",
    footerRight: "1등 3명",
  },
  {
    id: "1112",
    title: "제 1112회",
    date: "2025.06.14",
    balls: [
      { number: 9, color: "yellow" },
      { number: 14, color: "blue" },
      { number: 19, color: "blue" },
      { number: 22, color: "red" },
      { number: 28, color: "red" },
      { number: 33, color: "gray" },
    ],
    bonusBall: { number: 41, color: "green" },
    footerLeft: "총 당첨자 6명",
    footerRight: "1등 1명",
    participated: true,
  },
  {
    id: "1111",
    title: "제 1111회",
    date: "2025.06.07",
    balls: [
      { number: 4, color: "yellow" },
      { number: 13, color: "blue" },
      { number: 17, color: "blue" },
      { number: 21, color: "red" },
      { number: 30, color: "red" },
      { number: 36, color: "gray" },
    ],
    bonusBall: { number: 44, color: "green" },
    footerLeft: "총 당첨자 5명",
    footerRight: "1등 1명",
  },
];

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

export const rankingMock: RankingItem[] = Array.from({ length: 50 }).map(
  (_, i) => {
    const number = (i % 50) + 1;
    return { rank: i + 1, number, color: getColorByNumber(number) };
  }
);
