import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/settings')({
  component: () => (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">설정</h1>
        <p className="text-gray-600">앱 설정 페이지</p>
      </div>
    </div>
  ),
})
