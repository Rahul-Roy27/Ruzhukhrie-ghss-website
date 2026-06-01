import './index.css'
import TickerBar from './components/layout/TickerBar'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Heritage from './components/sections/Heritage'
import Academics from './components/sections/Academics'
import Achievements from './components/sections/Achievements'
import Gallery from './components/sections/Gallery'
import Notices from './components/sections/Notices'
import SecondChance from './components/sections/SecondChance'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'
import { useEffect } from 'react'
import CampusTour from './components/sections/CampusTour'
import SchoolMotto from './components/sections/SchoolMotto'

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen">
      <TickerBar />
      <Navbar />
      <Hero />
      <Notices />
      <Heritage />
      <Academics />
      <Achievements />
      <Gallery />
      <CampusTour /> 
      <SecondChance />
      <SchoolMotto />
      <Contact />
      <Footer />
    </div>
  )
}

export default App