"use client"

import { useEffect, useRef, type MutableRefObject } from "react"

export const useHoverAnimation = (
  elementRef: MutableRefObject<HTMLElement | null>,
  hoverInAnimation: any,
  hoverOutAnimation: any,
) => {
  const hoverInTimelineRef = useRef<any>(null)
  const hoverOutTimelineRef = useRef<any>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const setupHoverAnimation = async () => {
      if (typeof window === "undefined") return

      if (!window.gsap) {
        const gsapModule = await import("../lib/gsap.js")
        window.gsap = gsapModule.gsap || gsapModule.default?.gsap
      }

      const element = elementRef.current
      if (!element) return

      // Create hover in timeline
      hoverInTimelineRef.current = window.gsap.timeline({ paused: true })
      hoverInTimelineRef.current.to(element, hoverInAnimation)

      // Create hover out timeline
      hoverOutTimelineRef.current = window.gsap.timeline({ paused: true })
      hoverOutTimelineRef.current.to(element, hoverOutAnimation)

      // Add event listeners
      const handleMouseEnter = () => {
        hoverOutTimelineRef.current?.pause()
        hoverInTimelineRef.current?.restart()
      }

      const handleMouseLeave = () => {
        hoverInTimelineRef.current?.pause()
        hoverOutTimelineRef.current?.restart()
      }

      element.addEventListener("mouseenter", handleMouseEnter)
      element.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        element.removeEventListener("mouseenter", handleMouseEnter)
        element.removeEventListener("mouseleave", handleMouseLeave)
      }
    }

    const cleanup = setupHoverAnimation()

    return () => {
      if (hoverInTimelineRef.current) {
        hoverInTimelineRef.current.kill()
      }
      if (hoverOutTimelineRef.current) {
        hoverOutTimelineRef.current.kill()
      }
      if (cleanup) {
        cleanup.then((cleanupFn) => cleanupFn && cleanupFn())
      }
    }
  }, [elementRef, hoverInAnimation, hoverOutAnimation])

  return { hoverIn: hoverInTimelineRef, hoverOut: hoverOutTimelineRef }
}
