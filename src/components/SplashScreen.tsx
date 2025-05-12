'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const splashRef = useRef<HTMLDivElement | null>(null)
  const textRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Reset scroll position immediately when component mounts
    window.scrollTo(0, 0)
    
    // Prevent scrolling during splash screen
    document.body.style.overflow = 'hidden'

    const tl = gsap.timeline({
      onComplete: () => {
        // Enable scrolling again
        document.body.style.overflow = ''
        // Ensure page is at the top before completing
        window.scrollTo({ top: 0, behavior: 'auto' })
        onComplete()
      },
    })

    // Animate the logo text
    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    )

    // Use translateY transform instead of y property for better performance
    // Change direction to move DOWN instead of UP (use '100%' instead of '-100%')
    tl.to(splashRef.current, {
      y: '100%', // Changed from '-100%' to '100%' to make it slide down
      duration: 1.2,
      delay: 1,
      ease: 'power4.inOut',
    })
  }, [onComplete])

  return (
    <div
      ref={splashRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      style={{ transform: 'translateY(0)' }} // Explicitly set initial position
    >
      <div
        ref={textRef}
        className="text-white text-4xl md:text-6xl font-bold tracking-wide"
      >
        gaditas
      </div>
    </div>
  )
}

export default SplashScreen