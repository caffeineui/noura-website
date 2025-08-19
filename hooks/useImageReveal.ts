import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

type RevealDirection = 'leftToRight' | 'rightToLeft' | 'topToBottom' | 'bottomToTop' | 'center';
type RevealShape = 'rect' | 'circle' | 'polygon';

interface UseImageRevealProps {
  containerRef: React.RefObject<HTMLElement>;
  direction?: RevealDirection;
  shape?: RevealShape;
  duration?: number;
  delay?: number;
  ease?: string;
  threshold?: number; // When to start the animation (0-1)
}

/**
 * Custom hook for creating image reveal animations using clip-path
 * @param props Configuration object for the reveal animation
 * @returns void
 * 
 * @example
 * ```tsx
 * const imageRef = useRef<HTMLDivElement>(null);
 * 
 * // Simple usage
 * useImageReveal({ containerRef: imageRef });
 * 
 * // Advanced usage
 * useImageReveal({ 
 *   containerRef: imageRef,
 *   direction: 'leftToRight',
 *   shape: 'rect',
 *   duration: 1.2,
 *   delay: 0.2,
 *   ease: 'power3.inOut',
 *   threshold: 0.2
 * });
 * 
 * return <div ref={imageRef} className="image-container">
 *   <img src="/path/to/image.jpg" alt="Description" />
 * </div>
 * ```
 */
export function useImageReveal({
  containerRef,
  direction = 'leftToRight',
  shape = 'rect',
  duration = 1,
  delay = 0,
  ease = 'power2.inOut',
  threshold = 0.15,
}: UseImageRevealProps) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Initial clip path based on direction and shape
    const getInitialClipPath = () => {
      switch (shape) {
        case 'circle':
          return 'circle(0% at center)';
        case 'polygon':
          switch (direction) {
            case 'leftToRight':
              return 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)';
            case 'rightToLeft':
              return 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)';
            case 'topToBottom':
              return 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)';
            case 'bottomToTop':
              return 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)';
            case 'center':
              return 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)';
            default:
              return 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)';
          }
        case 'rect':
        default:
          switch (direction) {
            case 'leftToRight':
              return 'inset(0% 100% 0% 0%)';
            case 'rightToLeft':
              return 'inset(0% 0% 0% 100%)';
            case 'topToBottom':
              return 'inset(0% 0% 100% 0%)';
            case 'bottomToTop':
              return 'inset(100% 0% 0% 0%)';
            case 'center':
              return 'inset(50% 50% 50% 50%)';
            default:
              return 'inset(0% 100% 0% 0%)';
          }
      }
    };

    // Final clip path
    const getFinalClipPath = () => {
      switch (shape) {
        case 'circle':
          return 'circle(100% at center)';
        case 'polygon':
          return 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
        case 'rect':
        default:
          return 'inset(0% 0% 0% 0%)';
      }
    };

    // Set initial styles
    gsap.set(container, {
      clipPath: getInitialClipPath(),
      webkitClipPath: getInitialClipPath(), // For Safari compatibility
      visibility: 'visible',
    });

    // Create animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: `top ${(1 - threshold) * 100}%`,
        end: `bottom ${threshold * 100}%`,
        toggleActions: 'play none none none',
        once: true,
      },
    });

    tl.to(container, {
      clipPath: getFinalClipPath(),
      webkitClipPath: getFinalClipPath(),
      duration,
      delay,
      ease,
    });

    // Clean up
    return () => {
      tl.kill();
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, [containerRef, direction, shape, duration, delay, ease, threshold]);
}

export default useImageReveal;
