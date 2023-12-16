import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar.jsx'
import Dashboard from './components/Dashboard.jsx'
import Slick from './components/Slick.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-dark'>
      <Navbar />
      <Dashboard />
      <Slick />
    </div>
  )
}

export default App
