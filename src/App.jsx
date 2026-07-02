import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SideSocial from './components/SideSocial'
import { SocialConnect } from '@/components/ui/connect-with-us'

export default function App() {
  return (
    <div className="bg-[#282C33] text-[#abb2bf] min-h-screen">
      <SideSocial />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <SocialConnect />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
