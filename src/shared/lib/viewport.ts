// 뷰포트 관련 유틸리티 함수들

/**
 * 현재 뷰포트 크기 가져오기
 */
export function getViewportSize() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

/**
 * Safe Area Inset 값 가져오기
 */
export function getSafeAreaInsets() {
  const style = getComputedStyle(document.documentElement);

  return {
    top: Number.parseInt(
      style.getPropertyValue("--safe-area-inset-top") || "0"
    ),
    bottom: Number.parseInt(
      style.getPropertyValue("--safe-area-inset-bottom") || "0"
    ),
    left: Number.parseInt(
      style.getPropertyValue("--safe-area-inset-left") || "0"
    ),
    right: Number.parseInt(
      style.getPropertyValue("--safe-area-inset-right") || "0"
    ),
  };
}

/**
 * 디바이스가 모바일인지 확인
 */
export function isMobile(): boolean {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

/**
 * 디바이스가 iOS인지 확인
 */
export function isIOS(): boolean {
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
}

/**
 * 디바이스가 Android인지 확인
 */
export function isAndroid(): boolean {
  return /Android/.test(navigator.userAgent);
}

/**
 * 현재 화면 방향 가져오기
 */
export function getOrientation(): "portrait" | "landscape" {
  return window.innerHeight > window.innerWidth ? "portrait" : "landscape";
}

/**
 * 뷰포트 메타 태그 설정
 */
export function setViewportMeta() {
  let viewport = document.querySelector('meta[name="viewport"]');

  if (!viewport) {
    viewport = document.createElement("meta");
    viewport.setAttribute("name", "viewport");
    document.head.appendChild(viewport);
  }

  viewport.setAttribute(
    "content",
    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
  );
}

/**
 * 키보드 높이 감지 (iOS Safari 대응)
 */
export function detectKeyboardHeight(callback: (height: number) => void) {
  if (!isIOS()) return;

  const initialHeight = window.innerHeight;

  const handleResize = () => {
    const currentHeight = window.innerHeight;
    const keyboardHeight = Math.max(0, initialHeight - currentHeight);
    callback(keyboardHeight);
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}

/**
 * 스크롤 위치 복원 방지 (웹뷰 최적화)
 */
export function preventScrollRestore() {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
}
