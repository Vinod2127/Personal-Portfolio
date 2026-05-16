import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Publications from './components/Publications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import CustomCursor from './components/CustomCursor'
import emailjs from 'emailjs-com'

function App() {
  useEffect(() => {
    // Initialize EmailJS
    emailjs.init('YU_LqLCzo_T-FAzLY')
  }, [])

  return (
    <div className="bg-dark min-h-screen">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Publications />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  )
}

export default App
