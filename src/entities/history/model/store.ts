import { Store } from "@tanstack/store";
import type {
  HistoryItem,
  HistoryFilter,
  HistorySort,
  Participant,
} from "./types";

// 더미 참여자 데이터
const mockParticipants: Participant[] = [
  { id: "1", name: "김철수", color: "#FF6B6B" },
  { id: "2", name: "이영희", color: "#4ECDC4" },
  { id: "3", name: "박민수", color: "#45B7D1" },
  { id: "4", name: "정수진", color: "#96CEB4" },
  { id: "5", name: "최동현", color: "#FECA57" },
];

// 더미 히스토리 데이터
const mockHistoryItems: HistoryItem[] = [
  {
    id: "1",
    year: 2025,
    month: 1,
    count: 192,
    participants: [
      mockParticipants[0],
      mockParticipants[1],
      mockParticipants[2],
    ],
    status: "completed",
    date: "2025-01-31",
    createdAt: new Date("2025-01-01"),
    updatedAt: new Date("2025-01-31"),
  },
  {
    id: "2",
    year: 2025,
    month: 2,
    count: 192,
    participants: [
      mockParticipants[1],
      mockParticipants[2],
      mockParticipants[3],
    ],
    status: "completed",
    date: "2025-02-28",
    createdAt: new Date("2025-02-01"),
    updatedAt: new Date("2025-02-28"),
  },
  {
    id: "3",
    year: 2025,
    month: 4,
    count: 192,
    participants: [
      mockParticipants[0],
      mockParticipants[3],
      mockParticipants[4],
    ],
    status: "active",
    date: "2025-04-30",
    createdAt: new Date("2025-04-01"),
    updatedAt: new Date("2025-04-22"),
  },
  {
    id: "4",
    year: 2025,
    month: 5,
    count: 156,
    participants: [mockParticipants[2], mockParticipants[4]],
    status: "active",
    date: "2025-05-31",
    createdAt: new Date("2025-05-01"),
    updatedAt: new Date("2025-05-22"),
  },
];

// 스토어 상태 타입
export interface HistoryState {
  items: HistoryItem[];
  selectedYear: number;
  filter: HistoryFilter;
  sort: HistorySort;
  isLoading: boolean;
  error: string | null;
}

// 초기 상태
const initialState: HistoryState = {
  items: mockHistoryItems,
  selectedYear: 2025,
  filter: {},
  sort: { by: "month", order: "asc" },
  isLoading: false,
  error: null,
};

// 히스토리 스토어 생성
export const historyStore = new Store(initialState);

// 스토어 액션들
export const historyActions = {
  // 히스토리 아이템 추가
  addHistoryItem: (
    item: Omit<HistoryItem, "id" | "createdAt" | "updatedAt">
  ) => {
    historyStore.setState((state) => ({
      ...state,
      items: [
        ...state.items,
        {
          ...item,
          id: Date.now().toString(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    }));
  },

  // 히스토리 아이템 업데이트
  updateHistoryItem: (id: string, updates: Partial<HistoryItem>) => {
    historyStore.setState((state) => ({
      ...state,
      items: state.items.map((item) =>
        item.id === id ? { ...item, ...updates, updatedAt: new Date() } : item
      ),
    }));
  },

  // 히스토리 아이템 삭제
  removeHistoryItem: (id: string) => {
    historyStore.setState((state) => ({
      ...state,
      items: state.items.filter((item) => item.id !== id),
    }));
  },

  // 연도 선택
  setSelectedYear: (year: number) => {
    historyStore.setState((state) => ({
      ...state,
      selectedYear: year,
    }));
  },

  // 필터 설정
  setFilter: (filter: HistoryFilter) => {
    historyStore.setState((state) => ({
      ...state,
      filter,
    }));
  },

  // 정렬 설정
  setSort: (sort: HistorySort) => {
    historyStore.setState((state) => ({
      ...state,
      sort,
    }));
  },

  // 로딩 상태 설정
  setLoading: (isLoading: boolean) => {
    historyStore.setState((state) => ({
      ...state,
      isLoading,
    }));
  },

  // 에러 설정
  setError: (error: string | null) => {
    historyStore.setState((state) => ({
      ...state,
      error,
    }));
  },
};

// 선택자 함수들
export const historySelectors = {
  // 필터링된 히스토리 아이템들
  getFilteredItems: (state: HistoryState): HistoryItem[] => {
    let filtered = state.items;

    // 연도 필터
    if (state.selectedYear) {
      filtered = filtered.filter((item) => item.year === state.selectedYear);
    }

    // 상태 필터
    if (state.filter.status) {
      filtered = filtered.filter((item) => item.status === state.filter.status);
    }

    // 참여자 필터
    if (state.filter.participantId) {
      filtered = filtered.filter((item) =>
        item.participants.some((p) => p.id === state.filter.participantId)
      );
    }

    // 정렬
    filtered.sort((a, b) => {
      let aValue: number;
      let bValue: number;

      switch (state.sort.by) {
        case "date":
          aValue = new Date(a.date).getTime();
          bValue = new Date(b.date).getTime();
          break;
        case "count":
          aValue = a.count;
          bValue = b.count;
          break;
        default:
          aValue = a.month;
          bValue = b.month;
          break;
      }

      return state.sort.order === "asc" ? aValue - bValue : bValue - aValue;
    });

    return filtered;
  },

  // 사용 가능한 연도들
  getAvailableYears: (state: HistoryState): number[] => {
    const years = [...new Set(state.items.map((item) => item.year))];
    return years.sort((a, b) => b - a);
  },

  // 총 히스토리 개수
  getTotalCount: (state: HistoryState): number => {
    return historySelectors
      .getFilteredItems(state)
      .reduce((total, item) => total + item.count, 0);
  },
};
