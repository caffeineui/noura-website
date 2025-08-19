"use client"

import { useRef } from "react"
import { useTextAnimation, useScrollTrigger } from "../hooks/useTextAnimation"
import { useGSAP } from "../hooks/useGSAP"

export default function AnimatedHero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const imageGridRef = useRef<HTMLDivElement>(null)

  // Animate hero title with split text
  useTextAnimation(titleRef, "splitWords", {
    duration: 0.8,
    y: 100,
    stagger: 0.1,
    ease: "power3.out",
    scrollTrigger: {
      start: "top 70%",
    },
  })

  // Animate subtitle
  useTextAnimation(subtitleRef, "fadeInUp", {
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      start: "top 70%",
    },
  })

  // Animate image grid
  useScrollTrigger(
    imageGridRef,
    (gsap, element) => {
      const images = element.querySelectorAll(".hero-image")
      return gsap.timeline().from(images, {
        duration: 1.2,
        scale: 0.8,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out",
      })
    },
    {
      start: "top 60%",
    },
  )

  // Background gradient animation
  useGSAP((gsap) => {
    if (!heroRef.current) return

    const gradientBalls = heroRef.current.querySelectorAll(".gradient-ball")

    return gsap
      .timeline({ repeat: -1 })
      .to(gradientBalls, {
        duration: 8,
        rotation: 360,
        ease: "none",
      })
      .to(
        gradientBalls,
        {
          duration: 6,
          scale: 1.2,
          yoyo: true,
          repeat: 1,
          ease: "power2.inOut",
        },
        0,
      )
  })

  return (
    <section ref={heroRef} className="hero-section">
      <div className="gradient-ball gradient-ball-1"></div>
      <div className="gradient-ball gradient-ball-2"></div>

      <div className="hero-content">
        <h1 ref={titleRef} className="hero-title">
          We are Noura
        </h1>
        <p ref={subtitleRef} className="hero-subtitle">
          A creative design agency crafting beautiful digital experiences
        </p>

        <div ref={imageGridRef} className="hero-images">
          <div className="hero-image">
            <img src="/creative-design-portfolio.png" alt="Design work 1" />
          </div>
          <div className="hero-image">
            <img src="/modern-web-design.png" alt="Design work 2" />
          </div>
          <div className="hero-image">
            <img src="/branding-project.png" alt="Design work 3" />
          </div>
        </div>
      </div>
    </section>
  )
}
