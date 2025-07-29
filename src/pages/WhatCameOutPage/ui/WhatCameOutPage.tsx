import { useNavigate } from '@tanstack/react-router';
import { Navigation } from '../../../shared/ui';
import { WhatCameOutList } from '../../../widgets/WhatCameOutList';
import { colors, layout } from '../../../shared/config/design-tokens';
import type { WhatCameOutItem } from '../../../shared/api/mocks/what-came-out';

export const WhatCameOutPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate({ to: '/' });
  };

  const handleItemClick = (item: WhatCameOutItem) => {
    // 아이템 클릭 시 동작 (현재는 콘솔 로그만)
    console.log('아이템 클릭:', item);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: colors.background.primary,
      maxWidth: layout.mobile.maxWidth,
      margin: '0 auto',
      position: 'relative',
    }}>
      <Navigation 
        title="뭐나왔지" 
        onBackClick={handleBackClick}
        showBackButton={true}
      />
      
      <main style={{
        paddingTop: '0',
        paddingBottom: '20px',
      }}>
        <WhatCameOutList onItemClick={handleItemClick} />
      </main>
    </div>
  );
};
