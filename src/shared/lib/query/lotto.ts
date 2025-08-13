import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { lottoApi } from '../../api';
import type { LottoDrawsParams, LottoStatisticsParams } from '../../api';

export const LOTTO_QUERY_KEYS = {
  draws: ['lotto', 'draws'] as const,
  statistics: ['lotto', 'statistics'] as const,
};

export const useLottoDraws = (params: LottoDrawsParams = {}) => {
  return useInfiniteQuery({
    queryKey: [...LOTTO_QUERY_KEYS.draws, params],
    queryFn: ({ pageParam }) =>
      lottoApi.getDraws({
        ...params,
        cursor: pageParam as number | null,
      }),
    initialPageParam: null as number | null,
    getNextPageParam: (lastPage) => lastPage.next_cursor,
  });
};

export const useLottoStatistics = (params: LottoStatisticsParams = {}) => {
  return useQuery({
    queryKey: [...LOTTO_QUERY_KEYS.statistics, params],
    queryFn: () => lottoApi.getStatistics(params),
  });
};
