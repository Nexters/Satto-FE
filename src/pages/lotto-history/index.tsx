import { useMemo, useRef, useState } from "react";
import { SegmentedControl, Typography } from "../../shared/ui";
import { FloatButton } from "../../shared/ui/Button/FloatButton";
import colors from "../../shared/design-tokens/color";
import HistoryList from "../../widgets/lotto-history/HistoryList";
import RankingPanel from "../../widgets/lotto-history/RankingPanel";
import {
  useLottoDraws,
  useLottoStatistics,
  transformLottoDrawToHistoryItem,
  transformLottoStatisticsToRankingItems,
} from "../../shared/lib";

const LottoHistory = () => {
  const [activeTab, setActiveTab] = useState<"history" | "ranking">("history");
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollToTop = () => {
    contentRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [rankingSort, setRankingSort] = useState<"rank" | "number">("rank");
  const [includeBonus, setIncludeBonus] = useState(false);

  const {
    data: drawsData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading: isDrawsLoading,
    error: drawsError,
  } = useLottoDraws({ limit: 20 });

  const {
    data: statisticsData,
    isLoading: isStatisticsLoading,
    error: statisticsError,
  } = useLottoStatistics({
    sort_type: rankingSort === "rank" ? "frequency" : "number",
    include_bonus: includeBonus,
  });

  const historyItems = useMemo(() => {
    if (!drawsData?.pages) return [];
    return drawsData.pages.flatMap((page) =>
      page.draws.map(transformLottoDrawToHistoryItem)
    );
  }, [drawsData]);

  const rankingList = useMemo(() => {
    if (!statisticsData) return [];
    return transformLottoStatisticsToRankingItems(statisticsData);
  }, [statisticsData]);

  const tabs = useMemo(
    () => [
      { label: "지난 번호", value: "history" },
      { label: "번호 랭킹", value: "ranking" },
    ],
    []
  );

  return (
    <div className="h-screen bg-primary-9 flex flex-col">
      <div className="bg-primary-9">
        <div className="max-w-md mx-auto px-6 pt-6 pb-4">
          <Typography
            as="h1"
            variant="heading-24"
            className="text-2xl font-bold text-gray-1 text-center"
          >
            뭐 나왔지
          </Typography>

          <div className="mt-6 flex justify-center">
            <SegmentedControl
              value={activeTab}
              options={tabs}
              onChange={(v) => setActiveTab(v as "history" | "ranking")}
              color="primary"
            />
          </div>
        </div>
        <div
          className="h-[1px] w-full"
          style={{ background: colors.gradient.component.direction }}
          role="separator"
          aria-orientation="horizontal"
        />
      </div>

      <div ref={contentRef} className="flex-1 overflow-y-auto">
        <div className="max-w-md mx-auto px-6 space-y-4 relative">
          {activeTab === "history" ? (
            <HistoryList
              items={historyItems}
              isLoading={isDrawsLoading}
              error={drawsError}
              hasNextPage={hasNextPage}
              isFetchingNextPage={isFetchingNextPage}
              onLoadMore={fetchNextPage}
            />
          ) : (
            <RankingPanel
              list={rankingList}
              rankingSort={rankingSort}
              setRankingSort={setRankingSort}
              includeBonus={includeBonus}
              setIncludeBonus={setIncludeBonus}
              isLoading={isStatisticsLoading}
              error={statisticsError}
            />
          )}
          <div className="sticky bottom-6 flex justify-end pointer-events-none z-10">
            <div className="pointer-events-auto">
              <FloatButton onClick={scrollToTop} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LottoHistory;
