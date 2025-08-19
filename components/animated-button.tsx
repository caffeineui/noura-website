"use client"

import type React from "react"

import { useRef } from "react"
import { useHoverAnimation } from "../hooks/useHoverAnimation"

interface AnimatedButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: "primary" | "secondary"
  className?: string
}

export default function AnimatedButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: AnimatedButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null)

  // Hover animations
  useHoverAnimation(
    buttonRef as any,
    {
      duration: 0.3,
      scale: 1.05,
      boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
      ease: "power2.out",
    },
    {
      duration: 0.3,
      scale: 1,
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
      ease: "power2.out",
    },
  )

  const baseClasses = `
    inline-flex items-center justify-center px-8 py-4 rounded-full
    font-medium transition-all duration-300 cursor-pointer
    ${
      variant === "primary"
        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
        : "bg-white text-gray-900 border border-gray-200"
    }
    ${className}
  `

  if (href) {
    return (
      <a ref={buttonRef as any} href={href} className={baseClasses}>
        {children}
      </a>
    )
  }

  return (
    <button ref={buttonRef as any} onClick={onClick} className={baseClasses}>
      {children}
    </button>
  )
}
