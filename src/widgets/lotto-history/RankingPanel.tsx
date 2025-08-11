import { Chip, Checkbox } from "../../shared/ui";
import Card from "../../shared/ui/Card";
import colors from "../../shared/design-tokens/color";
import type { RankingItem } from "../../entities/lotto/model";

interface RankingPanelProps {
  list: RankingItem[];
  rankingSort: "rank" | "number";
  setRankingSort: (v: "rank" | "number") => void;
  includeBonus: boolean;
  setIncludeBonus: (v: boolean) => void;
}

export const RankingPanel = ({
  list,
  rankingSort,
  setRankingSort,
  includeBonus,
  setIncludeBonus,
}: RankingPanelProps) => {
  return (
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
        {list.map((r) => (
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
  );
};

export default RankingPanel;
