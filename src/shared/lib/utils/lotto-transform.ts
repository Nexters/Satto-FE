import type { LottoDraw, LottoStatistic } from "../../api";
import type {
  HistoryItem,
  HistoryBall,
  RankingItem,
} from "../../../entities/lotto/model";
import { getColorByNumber } from "../../../entities/lotto/model";

const formatPrizeAmount = (amount: number): string => {
  if (amount >= 100000000) {
    const oku = Math.floor(amount / 100000000);
    const man = Math.floor((amount % 100000000) / 10000);
    if (man > 0) {
      return `${oku}억 ${man}만원`;
    }
    return `${oku}억원`;
  }
  if (amount >= 10000) {
    const man = Math.floor(amount / 10000);
    return `${man}만원`;
  }
  return `${amount}원`;
};

const formatDate = (dateString: string): string => {
  return dateString.replace(/-/g, ".");
};

export const transformLottoDrawToHistoryItem = (
  draw: LottoDraw
): HistoryItem => {
  const balls: HistoryBall[] = [
    { number: draw.num1, color: getColorByNumber(draw.num1) },
    { number: draw.num2, color: getColorByNumber(draw.num2) },
    { number: draw.num3, color: getColorByNumber(draw.num3) },
    { number: draw.num4, color: getColorByNumber(draw.num4) },
    { number: draw.num5, color: getColorByNumber(draw.num5) },
    { number: draw.num6, color: getColorByNumber(draw.num6) },
  ];

  const bonusBall: HistoryBall = {
    number: draw.bonus_num,
    color: getColorByNumber(draw.bonus_num),
  };

  return {
    id: draw.round.toString(),
    title: `제 ${draw.round}회`,
    date: formatDate(draw.draw_date),
    balls,
    bonusBall,
    footerLeft: `총 당첨자 ${draw.total_winners}명`,
    footerRight: `1등 ${formatPrizeAmount(draw.first_prize_amount)}`,
  };
};

export const transformLottoStatisticsToRankingItems = (
  statistics: LottoStatistic[]
): RankingItem[] => {
  return statistics.map((stat, index) => ({
    rank: index + 1,
    number: stat.num,
    color: getColorByNumber(stat.num),
  }));
};
