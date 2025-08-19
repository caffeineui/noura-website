# Quick Reference: Text Animation Implementation

## Basic Usage

### 1. Import the hook in your component

```typescript
import { useTextAnimation } from "../hooks/useTextAnimation"
```

### 2. Create a reference using the hook

```typescript
// For immediate animation on page load
const textRef = useTextAnimation("immediate", {
  type: "chars",           // Options: "chars", "words", "lines", or combinations like "chars,words"
  stagger: 0.02,           // Time delay between each element (seconds)
  duration: 0.8,           // Duration of each element's animation (seconds)
  delay: 0.5,              // Initial delay before animation starts (seconds)
  ease: "back.out(1.7)",   // Animation easing function (controls physics)
})

// For scroll-triggered animation
const scrollTextRef = useTextAnimation("scroll", {
  type: "words",
  stagger: 0.1,
  start: "top 80%",        // When animation triggers during scroll
})
```

### 3. Attach the reference to your text element

```jsx
<h1 ref={textRef}>This text will animate!</h1>
<p ref={scrollTextRef}>This text will animate on scroll.</p>
```

## Using the Ready-Made Component

For quick implementation without manual hook setup:

```jsx
import { AnimatedText } from "../components/animated-text"

// Usage in a component
<AnimatedText 
  as="h2"                 // HTML element type (div, h1, p, etc.)
  trigger="immediate"     // "immediate" or "scroll"
  type="chars"           // "chars", "words", "lines" or combinations
  stagger={0.03}         // Time between elements
  duration={0.8}         // Animation duration
  delay={0.2}            // Initial delay
  ease="power2.out"      // Easing function
  className="my-heading" // Optional CSS class
>
  This text will animate!
</AnimatedText>
```

## Common Animation Patterns

### Hero Heading (Character-by-Character)

```jsx
const headingRef = useTextAnimation("immediate", {
  type: "chars",
  stagger: 0.03,
  duration: 1,
  ease: "back.out(1.7)",
  delay: 0.5,
})

<h1 ref={headingRef}>Welcome to Noura</h1>
```

### Subtitle (Word-by-Word)

```jsx
const subtitleRef = useTextAnimation("immediate", {
  type: "words",
  stagger: 0.1,
  duration: 0.6,
  delay: 1.2,
  ease: "power2.out",
})

<p ref={subtitleRef}>A creative design agency crafting beautiful experiences</p>
```

### Section Heading (On Scroll)

```jsx
const sectionHeadingRef = useTextAnimation("scroll", {
  type: "chars",
  stagger: 0.02,
  duration: 0.8,
  ease: "power3.out",
})

<h2 ref={sectionHeadingRef}>Our Services</h2>
```

## Animation Timing Tips

For multiple text elements that should animate in sequence:

1. Use increasing delay values:
   - First element: `delay: 0.2`
   - Second element: `delay: 0.5`
   - Third element: `delay: 0.8`

2. Decrease duration and stagger values for later elements to create a faster "catch-up" effect:
   - First element: `duration: 1, stagger: 0.03`
   - Second element: `duration: 0.9, stagger: 0.025`
   - Third element: `duration: 0.8, stagger: 0.02`

## Easing Function Cheat Sheet

- `"power1.out"` - Subtle, gentle easing
- `"power2.out"` - Medium strength easing
- `"power3.out"` - Strong easing
- `"back.out(1.7)"` - Elastic, bouncy easing (number controls bounce amount)
- `"elastic.out(1, 0.3)"` - Very bouncy, oscillating effect
- `"circ.out"` - Circular motion easing
- `"expo.out"` - Exponential deceleration

## Performance Tips

- Use character animations only for short text (headings)
- Use word animations for longer paragraphs
- Limit the number of simultaneous animations on one page
