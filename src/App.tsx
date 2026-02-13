import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const HomePage = lazy(() => import('./pages/HomePage'))
const BuildPage = lazy(() => import('./pages/BuildPage'))

function App() {
  return (
    <Suspense fallback={
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        height: '100vh', color: '#5c6bc0', fontFamily: 'var(--coh-font-heading)',
        fontSize: '1.2rem', letterSpacing: '2px'
      }}>
        Loading...
      </div>
    }>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/build/:id" element={<BuildPage />} />
      </Routes>
    </Suspense>
  )
}

export default App
