import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const requestRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  
  // Track cursor position
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  const delayedMouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })

  const [isDisabled, setIsDisabled] = useState(false)

  useEffect(() => {
    // Disable on touch devices and mobile screens
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    const isMobile = window.innerWidth < 768
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (isTouch || isMobile || prefersReducedMotion) {
      setIsDisabled(true)
      return
    }

    // Hide default cursor
    document.body.style.cursor = 'none'

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    // Add interactive hover state for links and buttons
    const handleMouseOver = (e) => {
      if (e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(true)
      }
    }
    const handleMouseOut = (e) => {
      if (e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    // Animation loop for delayed ring
    const animate = () => {
      // Lerp logic for the ring
      delayedMouse.current.x += (mouse.current.x - delayedMouse.current.x) * 0.12
      delayedMouse.current.y += (mouse.current.y - delayedMouse.current.y) * 0.12

      if (dotRef.current && ringRef.current) {
        dotRef.current.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px) translate(-50%, -50%) ${isClicking ? 'scale(0.6)' : 'scale(1)'}`
        
        ringRef.current.style.transform = `translate(${delayedMouse.current.x}px, ${delayedMouse.current.y}px) translate(-50%, -50%) ${isHovering ? 'scale(1.625)' : 'scale(1)'}`
        
        if (isHovering) {
          ringRef.current.style.backgroundColor = 'rgba(6, 182, 212, 0.15)'
        } else {
          ringRef.current.style.backgroundColor = 'transparent'
        }
      }

      requestRef.current = requestAnimationFrame(animate)
    }
    
    requestRef.current = requestAnimationFrame(animate)

    return () => {
      document.body.style.cursor = 'auto'
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      cancelAnimationFrame(requestRef.current)
    }
  }, [isHovering, isClicking])

  if (isDisabled) return null

  return (
    <>
      <div 
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-cyan-500 pointer-events-none z-[100] transition-colors duration-200"
        style={{ transformOrigin: '0 0' }}
      />
      <div 
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-500 pointer-events-none z-[100]"
        style={{ mixBlendMode: 'difference', transformOrigin: '0 0' }}
      />
    </>
  )
}
