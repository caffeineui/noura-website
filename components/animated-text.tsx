"use client"

import type React from "react"
import { useTextAnimation } from "../hooks/useTextAnimation"
import type { JSX } from "react/jsx-runtime" // Declare JSX variable

interface AnimatedTextProps {
  children: React.ReactNode
  className?: string
  trigger?: "scroll" | "immediate"
  type?: "chars" | "words" | "lines" | "chars,words" | "chars,lines" | "words,lines" | "chars,words,lines"
  stagger?: number
  duration?: number
  delay?: number
  ease?: string
  as?: keyof JSX.IntrinsicElements
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  className = "",
  trigger = "scroll",
  type = "chars,words",
  stagger = 0.02,
  duration = 0.8,
  delay = 0,
  ease = "back.out(1.7)",
  as: Component = "div",
}) => {
  const textRef = useTextAnimation(trigger, {
    type,
    stagger,
    duration,
    delay,
    ease,
  })

  return (
    <Component ref={textRef} className={className}>
      {children}
    </Component>
  )
}
