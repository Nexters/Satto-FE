import type { ReactNode } from 'react'
import { clsx } from 'clsx'

interface SafeAreaProps {
  children: ReactNode
  top?: boolean
  bottom?: boolean
  left?: boolean
  right?: boolean
  className?: string
}

/**
 * Safe Area 컴포넌트
 * iOS의 노치, 홈 인디케이터 등을 고려한 안전 영역 제공
 */
export function SafeArea({
  children,
  top = false,
  bottom = false,
  left = false,
  right = false,
  className,
}: SafeAreaProps) {
  return (
    <div
      className={clsx(
        'w-full h-full',
        {
          'pt-safe-top': top,
          'pb-safe-bottom': bottom,
          'pl-safe-left': left,
          'pr-safe-right': right,
        },
        className
      )}
    >
      {children}
    </div>
  )
}

/**
 * Safe Area View 컴포넌트 (전체 화면용)
 */
export function SafeAreaView({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <SafeArea
      top
      bottom
      left
      right
      className={clsx('min-h-screen', className)}
    >
      {children}
    </SafeArea>
  )
}

/**
 * Safe Area Inset 컴포넌트 (개별 영역용)
 */
export function SafeAreaInset({
  position,
  className,
}: {
  position: 'top' | 'bottom' | 'left' | 'right'
  className?: string
}) {
  const insetClass = {
    top: 'h-safe-top',
    bottom: 'h-safe-bottom',
    left: 'w-safe-left',
    right: 'w-safe-right',
  }[position]

  return <div className={clsx(insetClass, className)} />
}
