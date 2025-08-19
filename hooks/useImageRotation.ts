"use client"

import { useEffect, useRef } from "react"

export const useImageRotation = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let animationId: number
    let rotation = 0

    const animate = () => {
      rotation += 0.5
      if (containerRef.current) {
        containerRef.current.style.transform = `rotate(${rotation}deg)`
      }
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return containerRef
}
