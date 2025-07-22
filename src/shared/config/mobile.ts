// 모바일 웹뷰 최적화 설정

/**
 * 터치 이벤트 최적화 설정
 */
export const TOUCH_CONFIG = {
  // 최소 터치 영역 크기 (44px는 Apple 권장사항)
  MIN_TOUCH_SIZE: 44,
  
  // 터치 지연 시간 (ms)
  TOUCH_DELAY: 0,
  
  // 스크롤 임계값
  SCROLL_THRESHOLD: 10,
} as const

/**
 * 뷰포트 설정
 */
export const VIEWPORT_CONFIG = {
  // 기본 뷰포트 너비
  DEFAULT_WIDTH: 375,
  
  // 최소/최대 스케일
  MIN_SCALE: 1.0,
  MAX_SCALE: 1.0,
  
  // 사용자 확대/축소 허용 여부
  USER_SCALABLE: false,
  
  // Safe Area 적용 여부
  VIEWPORT_FIT: 'cover',
} as const

/**
 * 성능 최적화 설정
 */
export const PERFORMANCE_CONFIG = {
  // 이미지 지연 로딩 임계값
  LAZY_LOAD_THRESHOLD: '200px',
  
  // 디바운스 지연 시간
  DEBOUNCE_DELAY: 300,
  
  // 스로틀 지연 시간
  THROTTLE_DELAY: 100,
  
  // 가상 스크롤 아이템 높이
  VIRTUAL_ITEM_HEIGHT: 60,
} as const

/**
 * 애니메이션 설정
 */
export const ANIMATION_CONFIG = {
  // 기본 전환 시간
  DEFAULT_DURATION: 300,
  
  // 빠른 전환 시간
  FAST_DURATION: 150,
  
  // 느린 전환 시간
  SLOW_DURATION: 500,
  
  // 이징 함수
  EASING: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
} as const

/**
 * 키보드 대응 설정
 */
export const KEYBOARD_CONFIG = {
  // 키보드 표시 감지 지연 시간
  DETECTION_DELAY: 150,
  
  // 키보드 애니메이션 시간
  ANIMATION_DURATION: 300,
  
  // 키보드 높이 임계값 (iOS)
  HEIGHT_THRESHOLD: 150,
} as const

/**
 * 브라우저별 설정
 */
export const BROWSER_CONFIG = {
  // iOS Safari 설정
  IOS_SAFARI: {
    // 바운스 스크롤 비활성화
    DISABLE_BOUNCE: true,
    
    // 확대/축소 비활성화
    DISABLE_ZOOM: true,
    
    // 선택 비활성화
    DISABLE_SELECTION: true,
  },
  
  // Android Chrome 설정
  ANDROID_CHROME: {
    // 하이라이트 색상 제거
    REMOVE_HIGHLIGHT: true,
    
    // 포커스 아웃라인 제거
    REMOVE_OUTLINE: true,
  },
} as const
