// 참여자 타입 정의
export interface Participant {
  id: string
  name: string
  avatar?: string
  color: string
}

// 히스토리 상태 타입
export type HistoryStatus = 'active' | 'completed' | 'paused'

// 히스토리 아이템 타입 정의
export interface HistoryItem {
  id: string
  year: number
  month: number
  count: number
  participants: Participant[]
  status: HistoryStatus
  date: string
  createdAt: Date
  updatedAt: Date
}

// 히스토리 필터 타입
export interface HistoryFilter {
  year?: number
  status?: HistoryStatus
  participantId?: string
}

// 히스토리 정렬 옵션
export type HistorySortBy = 'date' | 'count' | 'month'
export type HistorySortOrder = 'asc' | 'desc'

export interface HistorySort {
  by: HistorySortBy
  order: HistorySortOrder
}
