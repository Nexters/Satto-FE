import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>웹뷰 히스토리 앱</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          프로젝트 설정이 완료되었습니다!
        </p>
      </div>
      <p className="read-the-docs">
        TanStack Router + Store + Query로 모바일 웹뷰 앱을 만들어보세요
      </p>
    </>
  )
}

export default App
