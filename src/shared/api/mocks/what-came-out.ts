export interface WhatCameOutItem {
  id: string;
  title: string;
  description?: string;
  date: string;
  category?: string;
}

export const whatCameOutMockData: WhatCameOutItem[] = [
  {
    id: "1",
    title: "새로운 기능 업데이트",
    description: "사용자 경험을 개선하는 새로운 기능들이 추가되었습니다.",
    date: "2024-07-29",
    category: "업데이트",
  },
  {
    id: "2",
    title: "시스템 점검 안내",
    description: "서비스 안정성 향상을 위한 정기 점검이 진행됩니다.",
    date: "2024-07-28",
    category: "공지",
  },
  {
    id: "3",
    title: "이벤트 당첨자 발표",
    description: "7월 이벤트 당첨자가 발표되었습니다.",
    date: "2024-07-27",
    category: "이벤트",
  },
  {
    id: "4",
    title: "개인정보 처리방침 변경",
    description: "개인정보 처리방침이 일부 변경되었습니다.",
    date: "2024-07-26",
    category: "정책",
  },
  {
    id: "5",
    title: "앱 버전 2.1.0 출시",
    description: "성능 개선 및 버그 수정이 포함된 새 버전이 출시되었습니다.",
    date: "2024-07-25",
    category: "업데이트",
  },
  {
    id: "6",
    title: "고객센터 운영시간 변경",
    description: "고객센터 운영시간이 변경되었습니다.",
    date: "2024-07-24",
    category: "공지",
  },
  {
    id: "7",
    title: "8월 이벤트 예고",
    description: "다가오는 8월에 진행될 특별 이벤트를 미리 확인해보세요.",
    date: "2024-07-23",
    category: "이벤트",
  },
  {
    id: "8",
    title: "서비스 이용약관 개정",
    description: "서비스 이용약관이 개정되었습니다.",
    date: "2024-07-22",
    category: "정책",
  },
];
