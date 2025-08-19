# Footer Animation Documentation for Noura Website

## Overview

The footer in the Noura website uses subtle scroll-triggered animations to create a polished, professional appearance when users reach the bottom of the page. This document outlines how these animations are implemented, their visual characteristics, and how to reproduce them across the site.

## Animation Techniques Used

The footer animations utilize the following key techniques:

1. **Scroll-Triggered Reveal** - Elements appear with smooth transitions as they enter the viewport
2. **Staggered Animations** - Different parts of the footer animate sequentially for a more dynamic effect
3. **GSAP Animation Library** - Provides smooth, cross-browser compatible animations
4. **ScrollTrigger Plugin** - Controls when animations start based on scroll position

## Implementation Details

### 1. ScrollReveal Component

The footer uses the custom `ScrollReveal` component to animate its elements when they come into view:

```jsx
import ScrollReveal from "@/components/scroll-reveal"

export default function Footer() {
  return (
    <footer className="footer">
      <ScrollReveal animation="fadeInUp" delay={0.1}>
        <div className="footer_wrap">
          {/* Footer content */}
          <div className="footer_brand">Noura™</div>
        </div>
      </ScrollReveal>
    </footer>
  )
}
```

### 2. Animation Types Available

The `ScrollReveal` component supports several animation types:

- **fadeInUp** (default) - Elements fade in while moving upward
- **fadeInLeft** - Elements fade in while moving from the left
- **fadeInRight** - Elements fade in while moving from the right
- **scaleIn** - Elements scale up from 80% to 100% while fading in

### 3. Technical Implementation

The animations are powered by GSAP (GreenSock Animation Platform) and its ScrollTrigger plugin. The implementation happens in two key hooks:

#### The ScrollReveal Component

```tsx
export default function ScrollReveal({
  children,
  animation = "fadeInUp",
  duration = 1,
  delay = 0,
  start = "top 80%",
  className = "",
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  const getAnimationProps = () => {
    switch (animation) {
      case "fadeInLeft":
        return { opacity: 0, x: -50 }
      case "fadeInRight":
        return { opacity: 0, x: 50 }
      case "scaleIn":
        return { opacity: 0, scale: 0.8 }
      case "fadeInUp":
      default:
        return { opacity: 0, y: 50 }
    }
  }

  useScrollTrigger(
    elementRef,
    (gsap, element) => {
      return gsap.from(element, {
        duration,
        delay,
        ease: "power2.out",
        ...getAnimationProps(),
      })
    },
    { start },
  )

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}
```

#### The useScrollTrigger Hook

This custom hook sets up the scroll-based trigger for the animations:

```typescript
export const useScrollTrigger = (
  elementRef: MutableRefObject<HTMLElement | null>,
  animationCallback: (gsap: GSAP, element: HTMLElement) => GSAPTimeline,
  options: any = {},
) => {
  // Implementation details...
  
  // Create ScrollTrigger
  window.ScrollTrigger.create({
    trigger: element,
    start: options.start || "top 80%",
    end: options.end || "bottom 20%",
    animation: timeline,
    toggleActions: options.toggleActions || "play none none reverse",
    ...options,
  })
  
  // ...
}
```

## Visual Characteristics of the Footer Animation

The footer animation has the following key visual properties:

1. **Timing**: The animation begins when the footer enters the viewport (typically when it reaches 80% from the top of the viewport)

2. **Movement**: Elements start slightly below their final position (50px for fadeInUp) and move into place

3. **Opacity**: Elements fade in from completely transparent (opacity: 0) to fully visible (opacity: 1)

4. **Duration**: The default animation duration is 1 second

5. **Easing**: The animation uses "power2.out" easing, creating a smooth deceleration effect

6. **Staggering**: Different elements in the footer can be staggered by using different delay values

## Implementation Guide for Footer Elements

To implement the footer animations consistently:

### 1. Basic Footer Animation

```jsx
<ScrollReveal>
  <footer className="your-footer-class">
    {/* Your footer content */}
  </footer>
</ScrollReveal>
```

### 2. Animating Multiple Footer Sections with Staggered Timing

```jsx
<footer className="footer">
  <ScrollReveal animation="fadeInUp" delay={0}>
    <div className="footer-logo">
      <img src="/logo.png" alt="Logo" />
    </div>
  </ScrollReveal>
  
  <ScrollReveal animation="fadeInUp" delay={0.2}>
    <div className="footer-links">
      {/* Navigation links */}
    </div>
  </ScrollReveal>
  
  <ScrollReveal animation="fadeInUp" delay={0.4}>
    <div className="footer-contact">
      {/* Contact information */}
    </div>
  </ScrollReveal>
  
  <ScrollReveal animation="fadeInUp" delay={0.6}>
    <div className="footer-copyright">
      © 2025 Noura. All rights reserved.
    </div>
  </ScrollReveal>
</footer>
```

### 3. Customizing Animation Parameters

```jsx
<ScrollReveal 
  animation="fadeInLeft"
  duration={1.2}
  delay={0.3}
  start="top 90%"
  className="custom-class"
>
  <div className="footer-content">
    {/* Content */}
  </div>
</ScrollReveal>
```

## Animation Sequence for Best Visual Effect

For the most professional looking footer animation, follow this sequence:

1. **First**: Animate the logo or main footer heading (delay: 0)
2. **Second**: Animate the navigation links or main content (delay: 0.2)
3. **Third**: Animate secondary content like contact information (delay: 0.4)
4. **Last**: Animate the copyright notice or footer bottom elements (delay: 0.6)

## CSS Styles for Enhanced Footer Animation

To complement the GSAP animations, consider adding these CSS styles:

```css
.footer {
  position: relative;
  overflow: hidden;
  padding: 4rem 0;
  background-color: #f9f9f9;
}

.footer-logo img {
  display: block;
  max-width: 120px;
  height: auto;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 2rem 0;
}

.footer-links a {
  position: relative;
  text-decoration: none;
  color: #333;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #6c5ce7;
}

/* Underline animation for footer links */
.footer-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #6c5ce7;
  transition: width 0.3s ease;
}

.footer-links a:hover::after {
  width: 100%;
}

.footer-copyright {
  margin-top: 2rem;
  color: #666;
  font-size: 0.9rem;
}
```

## Best Practices for Footer Animations

1. **Keep animations subtle** - Footer animations should enhance, not distract from the content

2. **Use appropriate timing** - Animation duration of 0.8-1.2 seconds works well for footer elements

3. **Consider performance** - Minimize the number of animated elements to maintain smooth scrolling

4. **Test on mobile devices** - Ensure animations work well and don't cause layout shifts on small screens

5. **Add appropriate delay values** - Stagger animations by 0.2-0.3 seconds between elements

## Browser Compatibility

The GSAP-based animations used in the footer are compatible with all modern browsers. For older browsers or environments without JavaScript, the footer will simply appear without animation, maintaining functionality.
