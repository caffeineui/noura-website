"use client"

import Link from "next/link"
import { useTextAnimation } from "../hooks/useTextAnimation"
import { useEffect, useState } from "react"

function LottieGlobe() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <div className="home-header_location-globe" />
  }

  return (
    <div
      className="home-header_location-globe"
      data-w-id="eb066453-3996-6940-62ac-9318a85cc20d"
      data-animation-type="lottie"
      data-src="https://cdn.prod.website-files.com/664b347d42b63a8c8c6026dc/664ca8e0cfd8688ec332af69_globe.json"
      data-loop="1"
      data-direction="1"
      data-autoplay="1"
      data-is-ix2-target="0"
      data-renderer="svg"
      data-default-duration="2"
      data-duration="0"
    />
  )
}

export default function Hero() {
  const heading1Ref = useTextAnimation("immediate", {
    type: "chars",
    stagger: 0.03,
    duration: 1,
    ease: "back.out(1.7)",
    delay: 0.5,
  })

  const heading2Ref = useTextAnimation("immediate", {
    type: "chars",
    stagger: 0.025,
    duration: 0.9,
    delay: 0.7,
    ease: "back.out(1.7)",
  })

  const heading3Ref = useTextAnimation("immediate", {
    type: "chars",
    stagger: 0.02,
    duration: 0.8,
    delay: 0.9,
    ease: "back.out(1.7)",
  })

  const textRef = useTextAnimation("immediate", {
    type: "words",
    stagger: 0.1,
    duration: 0.6,
    delay: 1.1,
    ease: "power2.out",
  })

  return (
    <section className="section_home-header">
      <div className="padding-section-xxlarge"></div>
      <div className="padding-global z-index-2">
        <div className="home-header_component">
          <div className="home-header_headings" suppressHydrationWarning>
            <h1 ref={heading1Ref} className="home-header_heading _1" suppressHydrationWarning>
              Designs that resonate
            </h1>
            <h2 ref={heading2Ref} className="home-header_heading _2" suppressHydrationWarning>
              Websites that perform
            </h2>
            <h3 ref={heading3Ref} className="home-header_heading _3" suppressHydrationWarning>
              Apps that deliver
            </h3>
          </div>
          <div className="spacer-custom-1 is-mobile-small"></div>
          <p ref={textRef} className="home-header_text" suppressHydrationWarning>
            A design team, ready to serve — always.
          </p>
          <div className="spacer-medium"></div>
          <div className="home-header_button" suppressHydrationWarning>
            <Link data-wf-button-variant="dark" href="#section-brands" className="button w-inline-block">
              <div className="button_inner">
                <div className="button_gradient">
                  <div className="button_gradient-ball ball-1" suppressHydrationWarning></div>
                  <div className="button_gradient-ball ball-2" suppressHydrationWarning></div>
                </div>
                <div className="button_text">Learn more</div>
              </div>
              <div className="button_gradient-glow">
                <div className="button_gradient-ball ball-1" suppressHydrationWarning></div>
                <div className="button_gradient-ball ball-2" suppressHydrationWarning></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="padding-section-xxlarge"></div>
      <div className="home-header_labels-wrap">
        <div className="padding-global">
          <div className="home-header_labels">
            <div className="home-header_location">
              <LottieGlobe />
              <div className="home-header_label">Canada</div>
            </div>
            <div className="home-header_label">©2025</div>
          </div>
        </div>
      </div>
    </section>
  )
}
