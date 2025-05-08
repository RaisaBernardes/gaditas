'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
// @ts-ignore – SplitType não possui tipos definidos ainda
import SplitType from 'split-type'
import type { ElementType } from 'react'

interface TextSplitRevealProps {
  text: string
  className?: string
  tag?: ElementType
}

const TextSplitReveal = ({
  text,
  className = '',
  tag: Tag = 'h1',
}: TextSplitRevealProps) => {
  const textRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!textRef.current) return

    const splitInstance = new SplitType(textRef.current, {
      types: 'lines,words',
      tagName: 'span',
    })

    const lines = textRef.current.querySelectorAll('.line')

    gsap.set(textRef.current, { opacity: 1 })

    gsap.from(lines, {
      yPercent: 100,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'expo.out',
    })

    return () => {
      splitInstance.revert()
    }
  }, [])

  return (
    <Tag ref={textRef} className={`opacity-0 ${className}`}>
      {text}
    </Tag>
  )
}

export default TextSplitReveal
