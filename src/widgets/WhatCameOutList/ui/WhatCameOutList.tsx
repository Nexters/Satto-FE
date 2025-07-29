import { spacing } from '../../../shared/config/design-tokens';
import { whatCameOutMockData, type WhatCameOutItem } from '../../../shared/api/mocks/what-came-out';
import { WhatCameOutItem as WhatCameOutItemComponent } from './WhatCameOutItem';

interface WhatCameOutListProps {
  onItemClick?: (item: WhatCameOutItem) => void;
}

export const WhatCameOutList = ({ onItemClick }: WhatCameOutListProps) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: spacing[8],
      padding: spacing[16],
    }}>
      {whatCameOutMockData.map((item) => (
        <WhatCameOutItemComponent
          key={item.id}
          item={item}
          onClick={onItemClick}
        />
      ))}
    </div>
  );
};
