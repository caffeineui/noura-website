"use client"

import { useEffect, useRef, type MutableRefObject } from "react"

// GSAP types
interface GSAPTimeline {
  to: (target: any, vars: any) => GSAPTimeline
  from: (target: any, vars: any) => GSAPTimeline
  fromTo: (target: any, fromVars: any, toVars: any) => GSAPTimeline
  set: (target: any, vars: any) => GSAPTimeline
  kill: () => void
  revert: () => void
}

interface GSAP {
  timeline: (vars?: any) => GSAPTimeline
  to: (target: any, vars: any) => GSAPTimeline
  from: (target: any, vars: any) => GSAPTimeline
  fromTo: (target: any, fromVars: any, toVars: any) => GSAPTimeline
  set: (target: any, vars: any) => GSAPTimeline
  registerPlugin: (plugin: any) => void
  matchMedia: () => any
}

declare global {
  interface Window {
    gsap: GSAP
    ScrollTrigger: any
    SplitText: any
  }
}

export const useGSAP = (
  callback: (gsap: GSAP, ScrollTrigger: any, SplitText: any) => GSAPTimeline | void,
  dependencies: any[] = [],
) => {
  const timelineRef = useRef<GSAPTimeline | null>(null)

  useEffect(() => {
    // Load GSAP libraries dynamically
    const loadGSAP = async () => {
      if (typeof window === "undefined") return

      // Load GSAP core
      if (!window.gsap) {
        const gsapModule = await import("../lib/gsap.js")
        window.gsap = gsapModule.gsap || gsapModule.default?.gsap
      }

      // Load ScrollTrigger
      if (!window.ScrollTrigger) {
        const scrollTriggerModule = await import("../lib/scrolltrigger.js")
        window.ScrollTrigger = scrollTriggerModule.ScrollTrigger || scrollTriggerModule.default?.ScrollTrigger
        window.gsap.registerPlugin(window.ScrollTrigger)
      }

      // Load SplitText
      if (!window.SplitText) {
        const splitTextModule = await import("../lib/splittext.js")
        window.SplitText = splitTextModule.SplitText || splitTextModule.default?.SplitText
        window.gsap.registerPlugin(window.SplitText)
      }

      // Execute animation callback
      const result = callback(window.gsap, window.ScrollTrigger, window.SplitText)
      if (result) {
        timelineRef.current = result
      }
    }

    loadGSAP()

    // Cleanup function
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill()
        timelineRef.current = null
      }
      // Clean up ScrollTrigger instances
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill())
      }
    }
  }, dependencies)

  return timelineRef
}

export const useScrollTrigger = (
  elementRef: MutableRefObject<HTMLElement | null>,
  animationCallback: (gsap: GSAP, element: HTMLElement) => GSAPTimeline,
  options: any = {},
) => {
  const timelineRef = useRef<GSAPTimeline | null>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const loadAndAnimate = async () => {
      if (typeof window === "undefined") return

      // Ensure GSAP and ScrollTrigger are loaded
      if (!window.gsap) {
        const gsapModule = await import("../lib/gsap.js")
        window.gsap = gsapModule.gsap || gsapModule.default?.gsap
      }

      if (!window.ScrollTrigger) {
        const scrollTriggerModule = await import("../lib/scrolltrigger.js")
        window.ScrollTrigger = scrollTriggerModule.ScrollTrigger || scrollTriggerModule.default?.ScrollTrigger
        window.gsap.registerPlugin(window.ScrollTrigger)
      }

      const element = elementRef.current
      if (!element) return

      const timeline = animationCallback(window.gsap, element)
      timelineRef.current = timeline

      // Create ScrollTrigger
      window.ScrollTrigger.create({
        trigger: element,
        start: options.start || "top 80%",
        end: options.end || "bottom 20%",
        animation: timeline,
        toggleActions: options.toggleActions || "play none none reverse",
        ...options,
      })
    }

    loadAndAnimate()

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill()
      }
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach((trigger: any) => {
          if (trigger.trigger === elementRef.current) {
            trigger.kill()
          }
        })
      }
    }
  }, [elementRef, options])

  return timelineRef
}
