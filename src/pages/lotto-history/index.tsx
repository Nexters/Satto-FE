import { useMemo, useRef, useState } from "react";
import { SegmentedControl, Typography, Chip, Checkbox } from "../../shared/ui";
import Card from "../../shared/ui/Card";
import { FloatButton } from "../../shared/ui/Button/FloatButton";
import colors from "../../shared/design-tokens/color";
import { historyMock, rankingMock } from "./mock";

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
            <div className="space-y-3">
              {historyMock.map((item) => {
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
            </div>
          ) : (
            <>
              <div className="sticky top-0 z-30 bg-primary-9 pt-4 pb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Chip
                    variant={rankingSort === "rank" ? "solid" : "tinted"}
                    color="primary"
                    onClick={() => setRankingSort("rank")}
                  >
                    랭킹순
                  </Chip>
                  <Chip
                    variant={rankingSort === "number" ? "solid" : "tinted"}
                    color="primary"
                    onClick={() => setRankingSort("number")}
                  >
                    번호순
                  </Chip>
                </div>
                <Checkbox
                  checked={includeBonus}
                  onChange={(checked) => setIncludeBonus(checked)}
                  label="보너스 포함"
                />
              </div>
              <div
                className="sticky top-[52px] z-30 h-px w-full"
                style={{ background: colors.gradient.component.direction }}
              />

              <div className="grid grid-cols-1 gap-3 relative z-0">
                {rankingList.map((r) => (
                  <Card
                    key={`${r.rank}-${r.number}`}
                    title={`${r.number}회`}
                    size="S"
                    state={r.rank === 1 ? "rank1" : "default"}
                    rank={r.rank}
                    ball={{ number: r.number, color: r.color }}
                  />
                ))}
              </div>
            </>
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
