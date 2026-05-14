import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'
import { Link } from 'react-scroll'

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const roles = ['Software Developer', 'Full Stack Developer', 'ML Engineer']
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentRole = roles[roleIndex]

      if (!isDeleting) {
        if (displayedText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000)
        } else {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1))
        }
      } else {
        if (displayedText === '') {
          setRoleIndex((prev) => (prev + 1) % roles.length)
          setIsDeleting(false)
        } else {
          setDisplayedText(displayedText.slice(0, -1))
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayedText, roleIndex, isDeleting])

  const socialLinks = [
    { icon: Github, link: 'https://github.com/Vinod2127', label: 'GitHub' },
    { icon: Linkedin, link: 'http://www.linkedin.com/in/vinod-nalajala-a7264b268', label: 'LinkedIn' },
    { icon: Mail, link: 'mailto:nalajalavinod@gmail.com', label: 'Email' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full animated-bg flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="particle"
          style={{
            width: Math.random() * 300 + 100 + 'px',
            height: Math.random() * 300 + 100 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Photo */}
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
          <div className="relative">
            <motion.img
              src="/profile.jpg"
              alt="Nalajala Vinod"
              className="w-32 sm:w-40 lg:w-48 h-32 sm:h-40 lg:h-48 rounded-full object-cover border-4 border-primary shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-0 hover:opacity-20 transition-opacity duration-300" />
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4">
            <span className="gradient-text">Hi, I'm</span>
            <br />
            <span className="glow-text">Nalajala Vinod</span>
          </h1>
        </motion.div>

        {/* Typewriter effect */}
        <motion.div variants={itemVariants} className="h-16 flex items-center justify-center mb-6">
          <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            <span className="text-primary">{displayedText}</span>
            <span className="animate-blink">|</span>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Building intelligent systems and scalable web solutions
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Link to="projects" smooth={true} duration={500}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              View My Work
            </motion.button>
          </Link>
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary block sm:inline-block text-center"
          >
            Download Resume
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 mb-8"
        >
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <motion.a
                key={social.label}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="hover:text-primary transition-colors"
              >
                <Icon size={32} />
              </motion.a>
            )
          })}
        </motion.div>

        {/* Contact info */}
        <motion.div
          variants={itemVariants}
          className="text-sm text-gray-400 mb-12"
        >
          <p>📱 +91 9505387364 | 📧 nalajalavinod@gmail.com</p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Link to="about" smooth={true} duration={500}>
            <ChevronDown size={32} className="mx-auto text-primary cursor-pointer hover:text-secondary transition-colors" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
