import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import NoiseOverlay from './components/NoiseOverlay'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Portfolio from './components/Portfolio'
import Philosophy from './components/Philosophy'
import Protocol from './components/Protocol'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <>
      <NoiseOverlay />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Portfolio />
        <Philosophy />
        <Protocol />
        <Pricing />
      </main>
      <Footer />
    </>
  )
}

export default App
