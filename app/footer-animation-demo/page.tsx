"use client"

import React from "react"
import EnhancedFooter from "@/components/enhanced-footer"
import ScrollReveal from "@/components/scroll-reveal"

export default function FooterAnimationDemo() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Footer Animation Demo</h1>
          <p className="text-xl">Scroll down to see the animated footer in action</p>
        </div>
      </header>

      {/* Main Content - to create scrollable space */}
      <main className="container mx-auto px-4 py-16">
        <ScrollReveal>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Footer Animation Documentation</h2>
            <p className="text-lg mb-6">
              This page demonstrates the animated footer component for the Noura website. The footer uses scroll-triggered
              animations to create an engaging experience as users reach the bottom of the page.
            </p>
            <p className="text-lg mb-6">
              The animations leverage GSAP (GreenSock Animation Platform) with the ScrollTrigger plugin, providing smooth,
              cross-browser compatible animations that trigger when elements enter the viewport.
            </p>
          </section>
        </ScrollReveal>

        <ScrollReveal animation="fadeInLeft" delay={0.2}>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Key Animation Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Scroll-Triggered Animations</h3>
                <p>Elements animate into view as they enter the viewport, creating a dynamic scrolling experience.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Staggered Timing</h3>
                <p>Different sections of the footer animate sequentially with carefully timed delays.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Subtle Movement</h3>
                <p>Elements move slightly as they animate in, creating visual interest without being distracting.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Fade & Scale Effects</h3>
                <p>Combines opacity and transform animations for a polished, professional appearance.</p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal animation="fadeInRight" delay={0.3}>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Animation Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">fadeInUp</h3>
                <p>Elements fade in while moving upward from below</p>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">fadeInLeft</h3>
                <p>Elements fade in while moving from the left side</p>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">fadeInRight</h3>
                <p>Elements fade in while moving from the right side</p>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">scaleIn</h3>
                <p>Elements scale up while fading in for a dramatic effect</p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal animation="scaleIn" delay={0.4}>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Implementation</h2>
            <p className="text-lg mb-6">
              The footer animations use the <code className="bg-gray-100 px-2 py-1 rounded">ScrollReveal</code> component that wraps
              around elements you want to animate. You can customize the animation type, duration, delay, and other parameters.
            </p>
            <div className="bg-gray-800 text-gray-100 p-6 rounded-lg overflow-x-auto">
              <pre>{`<ScrollReveal animation="fadeInUp" delay={0.3}>
  <div className="footer-section">
    Content to animate
  </div>
</ScrollReveal>`}</pre>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Continue Scrolling</h2>
            <p className="text-lg">
              Keep scrolling down to see the animated footer at the bottom of the page.
            </p>
            
            {/* Empty space to ensure scrolling */}
            <div className="h-96"></div>
            
            <p className="text-lg font-semibold">
              The animated footer will appear below!
            </p>
          </section>
        </ScrollReveal>
      </main>

      {/* The Enhanced Footer */}
      <EnhancedFooter />
    </div>
  )
}
