import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BuildPage from './pages/BuildPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/build/:id" element={<BuildPage />} />
    </Routes>
  )
}

export default App
