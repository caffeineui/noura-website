# Text Animation Documentation for Noura Website Hero Section

## Overview

The hero section of the Noura website features sophisticated text animations that create an engaging entrance effect. These animations use GSAP (GreenSock Animation Platform) with the SplitText plugin to create character-by-character or word-by-word reveal animations.

## Core Technologies Used

1. **GSAP** - Industry-standard animation library
2. **SplitText Plugin** - GSAP plugin that splits text into characters, words, and/or lines
3. **React Hooks** - Custom hooks to create reusable animation logic

## Implementation Details

### 1. Custom Hook: `useTextAnimation`

The main animation logic is encapsulated in a custom React hook called `useTextAnimation`. This hook:

- Takes text elements and splits them into characters, words, or lines
- Animates each split element with configurable properties
- Supports both scroll-triggered and immediate animations

```typescript
// Location: /hooks/useTextAnimation.ts

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
  // Implementation...
}
```

### 2. Hero Section Implementation

The hero section uses four separate text animations with carefully timed delays to create a cascading effect:

```typescript
// Location: /components/hero.tsx

const heading1Ref = useTextAnimation("immediate", {
  type: "chars",           // Split into individual characters
  stagger: 0.03,           // Each character animates 0.03s after the previous
  duration: 1,             // Each animation takes 1 second
  ease: "back.out(1.7)",   // Elastic bouncy effect
  delay: 0.5,              // Start 0.5s after component mount
})

const heading2Ref = useTextAnimation("immediate", {
  type: "chars",
  stagger: 0.025,          // Slightly faster stagger than heading1
  duration: 0.9,           // Slightly shorter duration
  delay: 0.7,              // Start after heading1 has begun
  ease: "back.out(1.7)",
})

const heading3Ref = useTextAnimation("immediate", {
  type: "chars",
  stagger: 0.02,           // Even faster stagger
  duration: 0.8,           // Even shorter duration
  delay: 0.9,              // Start after heading2 has begun
  ease: "back.out(1.7)",
})

const textRef = useTextAnimation("immediate", {
  type: "words",           // Split by words instead of characters
  stagger: 0.1,            // Words appear with 0.1s delay between them
  duration: 0.6,           // Quick word animations
  delay: 1.1,              // Start after the headings
  ease: "power2.out",      // Smoother, less bouncy animation for words
})
```

### 3. Animation Properties Explained

#### Animation Types
- **`"chars"`**: Animates each character individually
- **`"words"`**: Animates each word as a unit
- **`"lines"`**: Animates each line as a unit
- Can combine types with comma separation: `"chars,words"`

#### Key Animation Parameters
- **`stagger`**: The time delay between each element's animation (seconds)
- **`duration`**: How long each element's animation lasts (seconds)
- **`delay`**: Initial delay before animation starts (seconds)
- **`ease`**: The easing function that controls animation physics
  - `"back.out(1.7)"`: Creates a slight overshoot effect (bouncy)
  - `"power2.out"`: Smooth deceleration (less bouncy)

#### Animation Effects
For character animations (`type: "chars"`), each character:
1. Starts invisible (`opacity: 0`)
2. Starts 50px below final position (`y: 50`)
3. Starts rotated backward (`rotationX: -90`)
4. Animates to final state with staggered timing

For word animations (`type: "words"`), each word:
1. Starts invisible (`opacity: 0`)
2. Starts 30px below final position (`y: 30`)
3. Animates to final state with staggered timing

## Reusing This Animation Pattern

To implement similar text animations elsewhere:

### Basic Usage with the Hook

```typescript
import { useTextAnimation } from "../hooks/useTextAnimation"

function MyComponent() {
  const textRef = useTextAnimation("immediate", {
    type: "chars",
    stagger: 0.02,
    duration: 0.8,
    delay: 0.3,
    ease: "power2.out"
  })

  return <h2 ref={textRef}>Animated text goes here</h2>
}
```

### Scroll-Triggered Animation

```typescript
const paragraphRef = useTextAnimation("scroll", {
  type: "words",
  stagger: 0.05,
  duration: 0.5,
  ease: "power1.out",
  // Defines when animation triggers during scroll
  start: "top 80%",  // Animation starts when element's top hits 80% down viewport
})
```

### Using the Reusable Component

A pre-built `AnimatedText` component is available for quick implementation:

```jsx
import { AnimatedText } from "../components/animated-text"

function MySection() {
  return (
    <section>
      <AnimatedText 
        as="h1"
        trigger="immediate" 
        type="chars"
        stagger={0.03}
        duration={0.8}
        delay={0.2}
        className="my-heading"
      >
        This text will animate character by character
      </AnimatedText>
    </section>
  )
}
```

## Technical Implementation Details

### SplitText Plugin

The animation leverages GSAP's SplitText plugin, which:
1. Splits text content into individual DOM elements (spans)
2. Maintains original styling and layout
3. Allows for targeted animation of individual pieces

### Animation Loading Strategy

Text animations load GSAP libraries dynamically:
```typescript
// Dynamic imports for performance
if (!window.gsap) {
  const gsapModule = await import("../lib/gsap.js")
  window.gsap = gsapModule.gsap || gsapModule.default?.gsap
}

if (!window.SplitText) {
  const splitTextModule = await import("../lib/splittext.js")
  window.SplitText = splitTextModule.SplitText || splitTextModule.default?.SplitText
  window.gsap.registerPlugin(window.SplitText)
}
```

### Animation Timeline

The animation uses GSAP's timeline feature:
```typescript
const timeline = window.gsap.timeline({ paused: true, delay })

// For character animations
timeline.from(splitTextRef.current.chars, {
  duration,
  opacity: 0,
  y: 50,
  rotationX: -90,
  stagger,
  ease,
})

// Plays immediately or on scroll based on trigger type
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
```

## Advanced Customization

The text animation system supports various customizations:

### Custom Easing Functions

- `"power1.out"`: Subtle, gentle easing
- `"power2.out"`: Medium strength easing
- `"power3.out"`: Strong easing
- `"back.out(1.7)"`: Elastic, bouncy easing (the number controls amount of overshoot)
- `"elastic.out(1, 0.3)"`: Very bouncy, oscillating effect

### Combining Animation Types

```typescript
const textRef = useTextAnimation("immediate", {
  type: "chars,words",  // Splits text into both chars and words
  stagger: 0.02,        // Staggers both chars and words
})
```

### Custom ScrollTrigger Options

```typescript
const textRef = useTextAnimation("scroll", {
  // Basic animation options
  type: "chars",
  stagger: 0.02,
  
  // Custom ScrollTrigger settings
  scrollTrigger: {
    start: "top 70%",           // Start when top of element hits 70% down viewport
    end: "bottom 20%",          // End when bottom of element hits 20% down viewport
    toggleActions: "play pause resume reset",  // Controls behavior on scroll direction change
    markers: true,              // Debug markers (development only)
    scrub: true,                // Animation progress ties directly to scroll position
  }
})
```

## Browser Compatibility

The text animation system is designed to work in modern browsers with these considerations:

- Automatically handles dynamic imports of GSAP libraries
- Properly cleans up animations and split text elements on unmount
- Uses browser-compatible CSS transforms
- Falls back to simpler animations when needed

## Performance Optimization Tips

For optimal performance with text animations:

1. Limit character-by-character animations to shorter text (headings, short phrases)
2. Use word-by-word animations for longer paragraphs
3. Stagger multiple animations to distribute processing load
4. Use appropriate delay values to prevent too many simultaneous animations
5. Consider using `will-change: transform, opacity` CSS property for smoother animations on complex pages
