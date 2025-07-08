import { useState } from 'react'
import Nav from './components/Nav.jsx'
import './index.css'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-dark text-white' : 'bg-white text-gray-900'}`}>
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  )
}
