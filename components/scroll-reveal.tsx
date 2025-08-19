"use client"

import { useRef, type ReactNode } from "react"
import { useScrollTrigger } from "../hooks/useGSAP"

interface ScrollRevealProps {
  children: ReactNode
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn"
  duration?: number
  delay?: number
  start?: string
  className?: string
}

export default function ScrollReveal({
  children,
  animation = "fadeInUp",
  duration = 1,
  delay = 0,
  start = "top 80%",
  className = "",
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  const getAnimationProps = () => {
    switch (animation) {
      case "fadeInLeft":
        return { opacity: 0, x: -50 }
      case "fadeInRight":
        return { opacity: 0, x: 50 }
      case "scaleIn":
        return { opacity: 0, scale: 0.8 }
      case "fadeInUp":
      default:
        return { opacity: 0, y: 50 }
    }
  }

  useScrollTrigger(
    elementRef,
    (gsap, element) => {
      return gsap.from(element, {
        duration,
        delay,
        ease: "power2.out",
        ...getAnimationProps(),
      })
    },
    { start },
  )

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}
