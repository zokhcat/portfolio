import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Notes from './pages/Notes'

function useTabTitleTaunt() {
  useEffect(() => {
    const original = document.title
    const taunt = 'HAHAHHAHAHAHAHHAHA come here'

    const onVisibility = () => {
      document.title = document.hidden ? taunt : original
    }

    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      document.removeEventListener('visibilitychange', onVisibility)
      document.title = original
    }
  }, [])
}

export default function App() {
  useTabTitleTaunt()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </BrowserRouter>
  )
}
