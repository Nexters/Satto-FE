import { apiClient } from './client';
import type {
  LottoDrawsResponse,
  LottoDrawsParams,
  LottoStatisticsResponse,
  LottoStatisticsParams,
} from './types/lotto';

export const lottoApi = {
  getDraws: async (params: LottoDrawsParams = {}): Promise<LottoDrawsResponse> => {
    const { cursor, limit = 10 } = params;
    return apiClient.get<LottoDrawsResponse>('/lotto/draws', {
      cursor,
      limit,
    });
  },

  getStatistics: async (params: LottoStatisticsParams = {}): Promise<LottoStatisticsResponse> => {
    const { sort_type = 'frequency', include_bonus = true } = params;
    return apiClient.get<LottoStatisticsResponse>('/lotto/statistics', {
      sort_type,
      include_bonus,
    });
  },
};
