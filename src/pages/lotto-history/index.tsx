import { useMemo, useRef, useState } from "react";
import { SegmentedControl, Typography } from "../../shared/ui";
import { FloatButton } from "../../shared/ui/Button/FloatButton";
import colors from "../../shared/design-tokens/color";
import { historyMock, rankingMock } from "./mock";
import HistoryList from "../../widgets/lotto-history/HistoryList";
import RankingPanel from "../../widgets/lotto-history/RankingPanel";

const LottoHistory = () => {
  const [activeTab, setActiveTab] = useState<"history" | "ranking">("history");
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollToTop = () => {
    contentRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [rankingSort, setRankingSort] = useState<"rank" | "number">("rank");
  const [includeBonus, setIncludeBonus] = useState(false);

  const rankingList = useMemo(() => {
    const list = [...rankingMock];
    if (rankingSort === "rank") {
      list.sort((a, b) => a.rank - b.rank);
    } else {
      list.sort((a, b) => a.number - b.number);
    }
    return list;
  }, [rankingSort, includeBonus]);

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
            <HistoryList items={historyMock} />
          ) : (
            <RankingPanel
              list={rankingList}
              rankingSort={rankingSort}
              setRankingSort={setRankingSort}
              includeBonus={includeBonus}
              setIncludeBonus={setIncludeBonus}
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
