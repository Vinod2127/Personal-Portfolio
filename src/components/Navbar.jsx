import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const TextScramble = ({ text, onTextChange }) => {
  useEffect(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let iteration = 0
    const targetLength = text.length

    const interval = setInterval(() => {
      const scrambled = text
        .split('')
        .map((char, i) => {
          if (i < iteration) {
            return char
          }
          return chars[Math.floor(Math.random() * chars.length)]
        })
        .join('')

      onTextChange(scrambled)

      if (iteration >= targetLength) {
        clearInterval(interval)
      }
      iteration += 0.6
    }, 30)

    return () => clearInterval(interval)
  }, [text, onTextChange])

  return null
}

const NavLink = ({ item, isActive }) => {
  const [displayedText, setDisplayedText] = useState(item.name)
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setDisplayedText(item.name)
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      {isHovering && <TextScramble text={item.name} onTextChange={setDisplayedText} />}
      <Link
        to={item.to}
        smooth={true}
        duration={500}
        className="px-3 py-2 rounded-md text-sm font-medium hover:text-primary transition-colors cursor-pointer relative block"
      >
        {displayedText}
      </Link>
      {isActive && (
        <motion.div
          layoutId="activeIndicator"
          className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/75"
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        />
      )}
    </div>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = ['hero', 'about', 'skills', 'projects', 'publications', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { top, bottom } = element.getBoundingClientRect()
          if (top <= window.innerHeight / 2 && bottom > window.innerHeight / 2) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Publications', to: 'publications' },
    { name: 'Contact', to: 'contact' },
  ]

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <div className="text-2xl font-bold gradient-text">NV</div>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                item={item}
                isActive={activeSection === item.to}
              />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden overflow-hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="glass px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-primary transition-colors cursor-pointer relative"
            >
              <div className={`flex items-center gap-2 ${activeSection === item.to ? 'text-primary' : ''}`}>
                {activeSection === item.to && (
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                )}
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  )
}
