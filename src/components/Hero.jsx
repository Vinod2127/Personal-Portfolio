import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'
import { Link } from 'react-scroll'

const ParticleCanvas = ({ extraParticles, mousePos }) => {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const particlesRef = useRef([])
  const mousePosRef = useRef(mousePos)

  // Keep mousePos ref in sync without re-running effect
  useEffect(() => {
    mousePosRef.current = mousePos
  }, [mousePos])

  // Merge in any new burst particles from parent
  useEffect(() => {
    if (extraParticles && extraParticles.length > 0) {
      particlesRef.current = [...particlesRef.current, ...extraParticles]
    }
  }, [extraParticles])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Seed initial ambient particles
    particlesRef.current = Array.from({ length: 5 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 3 + 2,
      life: 1,
      hue: Math.random() * 60 + 180
    }))

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const mp = mousePosRef.current

      particlesRef.current = particlesRef.current
        .map(p => {
          let { x, y, vx, vy, hue, life, size } = p
          const dist = Math.hypot(x - mp.x, y - mp.y)
          if (dist < 100) {
            const angle = Math.atan2(y - mp.y, x - mp.x)
            vx += Math.cos(angle) * 0.3
            vy += Math.sin(angle) * 0.3
          }
          x += vx; y += vy
          vx *= 0.98; vy *= 0.98
          if (x < 0) x = canvas.width
          if (x > canvas.width) x = 0
          if (y < 0) y = canvas.height
          if (y > canvas.height) y = 0
          hue = (hue + 1) % 360
          life -= 0.005
          return { x, y, vx, vy, hue, life, size }
        })
        .filter(p => p.life > 0)

      particlesRef.current.forEach(p => {
        ctx.fillStyle = `hsla(${p.hue}, 100%, 50%, ${p.life})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animateParticles)
    }

    animateParticles()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  )
}

const WireframeShape = ({ mouseVelocity }) => {
  const canvasRef = useRef(null)
  const rotationRef = useRef({ x: 0, y: 0, z: 0 })

  useEffect(() => {
    const isMobile = window.innerWidth < 768
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (isMobile || prefersReducedMotion) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = 400
    canvas.height = 400

    const phi = (1 + Math.sqrt(5)) / 2
    const vertices = [
      [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
      [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
      [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1]
    ]

    const edges = [
      [0, 1], [0, 5], [0, 7], [0, 11], [1, 5], [1, 7], [1, 9],
      [2, 3], [2, 4], [2, 6], [2, 11], [3, 4], [3, 6], [3, 9],
      [4, 5], [4, 9], [5, 11], [6, 7], [6, 10], [7, 10], [8, 9],
      [8, 10], [10, 11], [1, 9], [3, 9], [8, 9]
    ]

    const animate = () => {
      rotationRef.current.x += 0.003 + mouseVelocity * 0.01
      rotationRef.current.y += 0.005 + mouseVelocity * 0.01
      rotationRef.current.z += 0.002

      ctx.fillStyle = '#050a14'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const rotatedVertices = vertices.map(v => {
        let [x, y, z] = v

        const cosX = Math.cos(rotationRef.current.x)
        const sinX = Math.sin(rotationRef.current.x)
        y = y * cosX - z * sinX
        z = y * sinX + z * cosX

        const cosY = Math.cos(rotationRef.current.y)
        const sinY = Math.sin(rotationRef.current.y)
        x = x * cosY + z * sinY
        z = -x * sinY + z * cosY

        const cosZ = Math.cos(rotationRef.current.z)
        const sinZ = Math.sin(rotationRef.current.z)
        const tempX = x * cosZ - y * sinZ
        y = x * sinZ + y * cosZ
        x = tempX

        const focalLength = 400
        const scale = focalLength / (z + 3)
        const x2d = x * scale + canvas.width / 2
        const y2d = y * scale + canvas.height / 2

        return { x2d, y2d, z }
      })

      edges.forEach(([a, b]) => {
        const v1 = rotatedVertices[a]
        const v2 = rotatedVertices[b]
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.15)'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(v1.x2d, v1.y2d)
        ctx.lineTo(v2.x2d, v2.y2d)
        ctx.stroke()
      })

      rotatedVertices.forEach(v => {
        ctx.fillStyle = 'rgba(6, 182, 212, 0.3)'
        ctx.beginPath()
        ctx.arc(v.x2d, v.y2d, 2, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()
  }, [mouseVelocity])

  return (
    <canvas
      ref={canvasRef}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block"
      style={{ width: '400px', height: '400px', zIndex: 0 }}
    />
  )
}

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const roles = ['Software Developer', 'Full Stack Developer', 'ML Engineer']
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [burstParticles, setBurstParticles] = useState([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [mouseVelocity, setMouseVelocity] = useState(0)
  const lastMousePosRef = useRef({ x: 0, y: 0 })
  const heroSectionRef = useRef(null)

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

  useEffect(() => {
    const handleMouseMove = (e) => {
      const velocity = Math.hypot(
        e.clientX - lastMousePosRef.current.x,
        e.clientY - lastMousePosRef.current.y
      ) / 16
      setMouseVelocity(Math.min(velocity, 5))
      lastMousePosRef.current = { x: e.clientX, y: e.clientY }
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    const handleClick = (e) => {
      if (!heroSectionRef.current || !heroSectionRef.current.contains(e.target)) return
      const newParticles = Array.from({ length: 8 }, () => ({
        x: e.clientX,
        y: e.clientY,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
        size: Math.random() * 4 + 2,
        life: 1,
        hue: Math.random() * 60 + 180
      }))
      setBurstParticles(newParticles)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('click', handleClick)
    }
  }, [])

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
      ref={heroSectionRef}
      id="hero"
      className="relative min-h-screen w-full animated-bg flex items-center justify-center overflow-hidden pt-16"
    >
      <ParticleCanvas extraParticles={burstParticles} mousePos={mousePos} />
      <WireframeShape mouseVelocity={mouseVelocity} />

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
