export interface LottoDraw {
  round: number;
  draw_date: string;
  num1: number;
  num2: number;
  num3: number;
  num4: number;
  num5: number;
  num6: number;
  bonus_num: number;
  first_prize_amount: number;
  total_winners: number;
}

export interface LottoDrawsResponse {
  draws: LottoDraw[];
  next_cursor: number | null;
}

export interface LottoDrawsParams {
  cursor?: number | null;
  limit?: number;
  user_id?: string | null;
}

export interface LottoStatistic {
  num: number;
  count: number;
}

export type LottoStatisticsResponse = LottoStatistic[];

export interface LottoStatisticsParams {
  sort_type?: "frequency" | "number";
  include_bonus?: boolean;
}
