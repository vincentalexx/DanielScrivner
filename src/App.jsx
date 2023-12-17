import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'slick-carousel/slick/slick.min.js'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Navbar from './components/js/Navbar.jsx'
import Dashboard from './components/js/Dashboard.jsx'
import Slick from './components/js/Slick.jsx'
import Summary from './components/js/Summary.jsx'
import Footer from './components/js/Footer.jsx'
import Outliers from './components/js/Outliers.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Dashboard />
      <Slick />
      <Outliers />
      <Summary />
      <Footer />
    </div>
  )
}

export default App
