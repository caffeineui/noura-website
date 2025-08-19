"use client"

import { useEffect, useRef } from "react"

export const useTextAnimation = (
  trigger: "scroll" | "immediate" = "scroll",
  options: {
    type?: "chars" | "words" | "lines" | "chars,words" | "chars,lines" | "words,lines" | "chars,words,lines"
    stagger?: number
    duration?: number
    delay?: number
    ease?: string
    start?: string
    scrollTrigger?: any
  } = {},
) => {
  const elementRef = useRef<HTMLElement | null>(null)
  const timelineRef = useRef<any>(null)
  const splitTextRef = useRef<any>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const animateText = async () => {
      if (typeof window === "undefined") return

      // Load GSAP libraries
      if (!window.gsap) {
        const gsapModule = await import("../lib/gsap.js")
        window.gsap = gsapModule.gsap || gsapModule.default?.gsap
      }

      if (!window.SplitText) {
        const splitTextModule = await import("../lib/splittext.js")
        window.SplitText = splitTextModule.SplitText || splitTextModule.default?.SplitText
        window.gsap.registerPlugin(window.SplitText)
      }

      if (!window.ScrollTrigger) {
        const scrollTriggerModule = await import("../lib/scrolltrigger.js")
        window.ScrollTrigger = scrollTriggerModule.ScrollTrigger || scrollTriggerModule.default?.ScrollTrigger
        window.gsap.registerPlugin(window.ScrollTrigger)
      }

      const element = elementRef.current
      if (!element) return

      const {
        type = "chars,words",
        stagger = 0.02,
        duration = 0.8,
        delay = 0,
        ease = "back.out(1.7)",
        start = "top 80%",
      } = options

      splitTextRef.current = new window.SplitText(element, { type })

      const timeline = window.gsap.timeline({ paused: true, delay })

      if (type.includes("chars") && splitTextRef.current.chars) {
        timeline.from(splitTextRef.current.chars, {
          duration,
          opacity: 0,
          y: 50,
          rotationX: -90,
          stagger,
          ease,
        })
      } else if (type.includes("words") && splitTextRef.current.words) {
        timeline.from(splitTextRef.current.words, {
          duration,
          opacity: 0,
          y: 30,
          stagger: stagger * 5,
          ease,
        })
      } else if (type.includes("lines") && splitTextRef.current.lines) {
        timeline.from(splitTextRef.current.lines, {
          duration,
          opacity: 0,
          y: 50,
          stagger: stagger * 10,
          ease,
        })
      }

      timelineRef.current = timeline

      if (trigger === "scroll") {
        window.ScrollTrigger.create({
          trigger: element,
          start,
          animation: timeline,
          toggleActions: "play none none reverse",
          ...options.scrollTrigger,
        })
      } else {
        timeline.play()
      }
    }

    animateText()

    return () => {
      if (splitTextRef.current) {
        splitTextRef.current.revert()
      }
      if (timelineRef.current) {
        timelineRef.current.kill()
      }
    }
  }, [trigger, options])

  return elementRef
}
