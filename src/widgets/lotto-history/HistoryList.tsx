import Card from "../../shared/ui/Card";
import type { HistoryItem } from "../../entities/lotto/model";

interface HistoryListProps {
  items: HistoryItem[];
}

export const HistoryList = ({ items }: HistoryListProps) => {
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
    </div>
  );
};

export default HistoryList;
