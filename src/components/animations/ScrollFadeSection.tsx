'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Tipagem dos props
interface ScrollFadeSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  threshold?: number;
}

const ScrollFadeSection = ({
  children,
  className = '',
  delay = 0.2,
  duration = 0.8,
  distance = 20,
  threshold = 0.2,
}: ScrollFadeSectionProps) => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    if (!section) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: `top bottom-=${threshold * 100}%`,
        toggleActions: 'play none none none',
        // markers: true,
      },
    });

    gsap.set(section, {
      opacity: 0,
      y: distance,
    });

    tl.to(section, {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: 'power3.out',
    });

    return () => {
      if (tl) tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [delay, duration, distance, threshold]);

  return (
    <section ref={sectionRef} className={className}>
      {children}
    </section>
  );
};

export default ScrollFadeSection;
