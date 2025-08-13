import Card from "../../shared/ui/Card";
import type { HistoryItem } from "../../entities/lotto/model";
import type { FetchNextPageOptions } from "@tanstack/react-query";

interface HistoryListProps {
  items: HistoryItem[];
  isLoading?: boolean;
  error?: Error | null;
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
  onLoadMore?: (options?: FetchNextPageOptions) => Promise<any>;
}

export const HistoryList = ({ 
  items, 
  isLoading = false, 
  error = null, 
  hasNextPage = false, 
  isFetchingNextPage = false, 
  onLoadMore 
}: HistoryListProps) => {
  if (error) {
    return (
      <div className="text-center py-8 text-gray-5">
        데이터를 불러오는 중 오류가 발생했습니다.
      </div>
    );
  }

  if (isLoading && items.length === 0) {
    return (
      <div className="text-center py-8 text-gray-5">
        로딩 중...
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const chipVisible = item.participated === true;
        const chipLabel = item.participated ? "참여" : "미참여";

        return (
          <Card
            key={item.id}
            size="M"
            state={
              item.participated === undefined
                ? "not_joined"
                : item.participated
                ? "joined"
                : "not_joined"
            }
            title={item.title}
            date={item.date}
            chipVisible={chipVisible}
            chipLabel={chipLabel}
            balls={item.balls}
            bonusBall={item.bonusBall}
            footerLeft={item.footerLeft}
            footerRight={item.footerRight}
          />
        );
      })}
      
      {hasNextPage && (
        <div className="text-center py-4">
          <button
            onClick={() => onLoadMore?.()}
            disabled={isFetchingNextPage}
            className="px-4 py-2 bg-primary-7 text-white rounded-lg disabled:opacity-50"
          >
            {isFetchingNextPage ? "로딩 중..." : "더 보기"}
          </button>
        </div>
      )}
    </div>
  );
}

export default HistoryList;
