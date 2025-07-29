import { Card } from "../../../shared/ui";
import {
  colors,
  typography,
  spacing,
} from "../../../shared/config/design-tokens";
import type { WhatCameOutItem as WhatCameOutItemType } from "../../../shared/api/mocks/what-came-out";

interface WhatCameOutItemProps {
  item: WhatCameOutItemType;
  onClick?: (item: WhatCameOutItemType) => void;
}

export const WhatCameOutItem = ({ item, onClick }: WhatCameOutItemProps) => {
  const handleClick = () => {
    onClick?.(item);
  };

  return (
    <Card onClick={handleClick}>
      <div
        style={{ display: "flex", flexDirection: "column", gap: spacing[8] }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: spacing[12],
          }}
        >
          <h3
            style={{
              fontFamily: typography.fontFamily.primary,
              fontSize: typography.fontSize["16"],
              fontWeight: typography.fontWeight["600"],
              lineHeight: typography.lineHeight.normal,
              letterSpacing: typography.letterSpacing.tight,
              color: colors.text.primary,
              margin: 0,
              flex: 1,
            }}
          >
            {item.title}
          </h3>

          <span
            style={{
              fontFamily: typography.fontFamily.primary,
              fontSize: typography.fontSize["14"],
              fontWeight: typography.fontWeight["400"],
              lineHeight: typography.lineHeight.normal,
              letterSpacing: typography.letterSpacing.tight,
              color: colors.text.tertiary,
              whiteSpace: "nowrap",
            }}
          >
            {new Date(item.date).toLocaleDateString("ko-KR", {
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>

        {item.description && (
          <p
            style={{
              fontFamily: typography.fontFamily.primary,
              fontSize: typography.fontSize["14"],
              fontWeight: typography.fontWeight["400"],
              lineHeight: typography.lineHeight.tight,
              letterSpacing: typography.letterSpacing.tight,
              color: colors.text.secondary,
              margin: 0,
            }}
          >
            {item.description}
          </p>
        )}

        {item.category && (
          <div
            style={{
              display: "inline-flex",
              alignSelf: "flex-start",
              padding: `${spacing[4]} ${spacing[8]}`,
              backgroundColor: colors.background.secondary,
              borderRadius: "12px",
              border: `1px solid ${colors.border.primary}`,
            }}
          >
            <span
              style={{
                fontFamily: typography.fontFamily.primary,
                fontSize: typography.fontSize["12"],
                fontWeight: typography.fontWeight["500"],
                lineHeight: typography.lineHeight.normal,
                letterSpacing: typography.letterSpacing.tight,
                color: colors.text.quaternary,
              }}
            >
              {item.category}
            </span>
          </div>
        )}
      </div>
    </Card>
  );
};
