import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">히스토리</h1>
        <p className="text-gray-600">모바일 웹뷰 히스토리 관리 앱</p>
      </div>
    </div>
  ),
})
