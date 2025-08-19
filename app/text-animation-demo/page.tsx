"use client"

import React from "react"
import { useTextAnimation } from "@/hooks/useTextAnimation"
import { AnimatedText } from "@/components/animated-text"

/**
 * Text Animation Example Component
 * 
 * This component demonstrates various text animation techniques used in the Noura website,
 * focusing particularly on the hero section animation style.
 */
export default function TextAnimationDemo() {
  // Sequential headings with character animations (like in the hero section)
  const mainHeadingRef = useTextAnimation("immediate", {
    type: "chars",
    stagger: 0.03,
    duration: 1,
    delay: 0.5,
    ease: "back.out(1.7)",
  })

  const subHeadingRef = useTextAnimation("immediate", {
    type: "chars",
    stagger: 0.025,
    duration: 0.9,
    delay: 0.7,
    ease: "back.out(1.7)",
  })

  // Paragraph with word animation
  const paragraphRef = useTextAnimation("immediate", {
    type: "words",
    stagger: 0.1,
    duration: 0.6,
    delay: 1.1,
    ease: "power2.out",
  })

  // Scroll-triggered animations for sections below the fold
  const sectionHeadingRef = useTextAnimation("scroll", {
    type: "chars",
    stagger: 0.02,
    duration: 0.8,
    ease: "power3.out",
  })

  const sectionTextRef = useTextAnimation("scroll", {
    type: "words",
    stagger: 0.05,
    duration: 0.6,
    ease: "power2.out",
  })

  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <section className="mb-24">
        <h1 className="text-5xl font-bold mb-6 text-purple-800">
          Text Animation Techniques
        </h1>
        <p className="text-xl mb-12">
          Below are examples of text animations used throughout the Noura website.
        </p>
        
        {/* Hero-style animation with sequential headings */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-12 rounded-xl mb-12">
          <h2 className="text-4xl font-bold mb-2 text-purple-700" ref={mainHeadingRef}>
            Designs that resonate
          </h2>
          <h3 className="text-3xl font-bold mb-2 text-pink-600" ref={subHeadingRef}>
            Websites that perform
          </h3>
          <p className="text-xl text-gray-700 mt-6" ref={paragraphRef}>
            A design team, ready to serve — always.
          </p>
        </div>
      </section>

      {/* Scroll-triggered animations */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-8 text-purple-800">
          Scroll-Triggered Animations
        </h2>
        
        <div className="bg-gray-50 p-12 rounded-xl mb-12">
          <h3 className="text-2xl font-bold mb-4 text-purple-600" ref={sectionHeadingRef}>
            Animations that appear as you scroll
          </h3>
          <p className="text-gray-700 mb-6" ref={sectionTextRef}>
            This text will animate word by word as it enters the viewport. 
            Scroll-triggered animations help create an engaging experience as users 
            explore your content.
          </p>
        </div>
      </section>

      {/* Using the AnimatedText component for quicker implementation */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-8 text-purple-800">
          Using the AnimatedText Component
        </h2>
        
        <div className="bg-gray-50 p-12 rounded-xl mb-12">
          <AnimatedText
            as="h3"
            trigger="scroll"
            type="chars"
            stagger={0.02}
            duration={0.8}
            ease="back.out(1.7)"
            className="text-2xl font-bold mb-4 text-pink-600"
          >
            Component-based implementation
          </AnimatedText>
          
          <AnimatedText
            as="p"
            trigger="scroll"
            type="words"
            stagger={0.08}
            duration={0.7}
            delay={0.3}
            ease="power2.out"
            className="text-gray-700"
          >
            Using the AnimatedText component is the quickest way to add text animations
            throughout your site. Simply wrap your text in this component and configure
            the animation properties you want.
          </AnimatedText>
        </div>
      </section>
      
      {/* Advanced animation examples */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-purple-800">
          Advanced Animation Combinations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-purple-200 to-pink-200 p-8 rounded-xl">
            <AnimatedText
              as="h3"
              trigger="scroll"
              type="chars,words"  
              stagger={0.03}
              duration={0.9}
              ease="elastic.out(1, 0.3)"  // Very bouncy animation
              className="text-xl font-bold mb-4 text-purple-700"
            >
              Elastic Bouncy Text
            </AnimatedText>
            
            <AnimatedText
              as="p"
              trigger="scroll"
              type="words"
              stagger={0.05}
              duration={0.6}
              delay={0.2}
              ease="power2.out"
              className="text-gray-700"
            >
              This heading uses an elastic easing function for an extra bouncy effect.
            </AnimatedText>
          </div>
          
          <div className="bg-gradient-to-br from-blue-200 to-teal-200 p-8 rounded-xl">
            <AnimatedText
              as="h3"
              trigger="scroll"
              type="chars" 
              stagger={0.02}
              duration={1.5}
              ease="expo.out"  // Exponential deceleration
              className="text-xl font-bold mb-4 text-blue-700"
            >
              Slow Motion Reveal
            </AnimatedText>
            
            <AnimatedText
              as="p"
              trigger="scroll"
              type="words"
              stagger={0.05}
              duration={0.6}
              delay={0.2}
              ease="power2.out"
              className="text-gray-700"
            >
              This heading uses a longer duration and exponential easing for a dramatic slow-motion effect.
            </AnimatedText>
          </div>
        </div>
      </section>
    </div>
  )
}
