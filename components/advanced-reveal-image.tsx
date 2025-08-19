import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

type RevealEffect = 'clip' | 'mask' | 'overlay' | 'scale' | 'fade';
type RevealDirection = 'leftToRight' | 'rightToLeft' | 'topToBottom' | 'bottomToTop' | 'center';
type OverlayColor = string;

interface AdvancedRevealImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  effect?: RevealEffect;
  direction?: RevealDirection;
  duration?: number;
  delay?: number;
  threshold?: number;
  overlayColor?: OverlayColor;
  priority?: boolean;
  width?: number;
  height?: number;
}

/**
 * Advanced image component with multiple reveal animation options
 */
export const AdvancedRevealImage: React.FC<AdvancedRevealImageProps> = ({
  src,
  alt,
  className = '',
  imgClassName = '',
  effect = 'clip',
  direction = 'leftToRight',
  duration = 1,
  delay = 0,
  threshold = 0.15,
  overlayColor = '#ffffff',
  priority = false,
  width,
  height
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    const overlay = overlayRef.current;
    
    if (!container || !image) return;
    
    // Setup based on effect type
    switch (effect) {
      case 'clip': {
        // Initial clip path based on direction
        let initialClip: string;
        switch (direction) {
          case 'leftToRight':
            initialClip = 'inset(0 100% 0 0)';
            break;
          case 'rightToLeft':
            initialClip = 'inset(0 0 0 100%)';
            break;
          case 'topToBottom':
            initialClip = 'inset(0 0 100% 0)';
            break;
          case 'bottomToTop':
            initialClip = 'inset(100% 0 0 0)';
            break;
          case 'center':
            initialClip = 'inset(50% 50% 50% 50%)';
            break;
          default:
            initialClip = 'inset(0 100% 0 0)';
        }
        
        // Set initial state
        gsap.set(image, {
          clipPath: initialClip,
          webkitClipPath: initialClip,
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
        
        tl.to(image, {
          clipPath: 'inset(0 0 0 0)',
          webkitClipPath: 'inset(0 0 0 0)',
          duration,
          delay,
          ease: 'power2.inOut',
        });
        
        return () => {
          if (tl.scrollTrigger) {
            tl.scrollTrigger.kill(true);
          }
        };
      }
      
      case 'overlay': {
        if (!overlay) return;
        
        let fromX = 0, fromY = 0, toX = 0, toY = 0;
        
        // Set overlay position based on direction
        switch (direction) {
          case 'leftToRight':
            fromX = -100;
            toX = 100;
            break;
          case 'rightToLeft':
            fromX = 100;
            toX = -100;
            break;
          case 'topToBottom':
            fromY = -100;
            toY = 100;
            break;
          case 'bottomToTop':
            fromY = 100;
            toY = -100;
            break;
          case 'center':
            // For center, we'll scale instead of translate
            break;
        }
        
        // Set initial state
        if (direction === 'center') {
          gsap.set(overlay, { scale: 0, opacity: 1 });
        } else {
          gsap.set(overlay, { x: `${fromX}%`, y: `${fromY}%`, opacity: 1 });
        }
        gsap.set(image, { opacity: 0 });
        
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
        
        // Animate image appearance
        tl.to(image, { opacity: 1, duration: 0.01 });
        
        // Animate overlay
        if (direction === 'center') {
          tl.to(overlay, { 
            scale: 1.5, 
            opacity: 0,
            duration, 
            delay, 
            ease: 'power2.inOut' 
          });
        } else {
          tl.to(overlay, {
            x: `${toX}%`,
            y: `${toY}%`,
            duration,
            delay,
            ease: 'power2.inOut',
          });
        }
        
        return () => {
          if (tl.scrollTrigger) {
            tl.scrollTrigger.kill(true);
          }
        };
      }
      
      case 'scale': {
        // Set initial state
        gsap.set(image, { 
          scale: 1.5, 
          opacity: 0,
          visibility: 'visible'
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
        
        tl.to(image, {
          scale: 1,
          opacity: 1,
          duration,
          delay,
          ease: 'power2.out',
        });
        
        return () => {
          if (tl.scrollTrigger) {
            tl.scrollTrigger.kill(true);
          }
        };
      }
      
      case 'fade': {
        // Set initial state
        gsap.set(image, { 
          opacity: 0,
          visibility: 'visible'
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
        
        tl.to(image, {
          opacity: 1,
          duration,
          delay,
          ease: 'power2.inOut',
        });
        
        return () => {
          if (tl.scrollTrigger) {
            tl.scrollTrigger.kill(true);
          }
        };
      }
      
      case 'mask': {
        // For mask effect using CSS mask
        let initialMask: string;
        switch (direction) {
          case 'leftToRight':
            initialMask = 'linear-gradient(to right, black 0%, transparent 0%)';
            break;
          case 'rightToLeft':
            initialMask = 'linear-gradient(to left, black 0%, transparent 0%)';
            break;
          case 'topToBottom':
            initialMask = 'linear-gradient(to bottom, black 0%, transparent 0%)';
            break;
          case 'bottomToTop':
            initialMask = 'linear-gradient(to top, black 0%, transparent 0%)';
            break;
          case 'center':
            initialMask = 'radial-gradient(circle at center, black 0%, transparent 0%)';
            break;
          default:
            initialMask = 'linear-gradient(to right, black 0%, transparent 0%)';
        }
        
        // Set initial state
        gsap.set(image, {
          WebkitMask: initialMask,
          mask: initialMask,
          visibility: 'visible',
        });
        
        // Final mask based on direction
        let finalMask: string;
        switch (direction) {
          case 'leftToRight':
            finalMask = 'linear-gradient(to right, black 100%, transparent 100%)';
            break;
          case 'rightToLeft':
            finalMask = 'linear-gradient(to left, black 100%, transparent 100%)';
            break;
          case 'topToBottom':
            finalMask = 'linear-gradient(to bottom, black 100%, transparent 100%)';
            break;
          case 'bottomToTop':
            finalMask = 'linear-gradient(to top, black 100%, transparent 100%)';
            break;
          case 'center':
            finalMask = 'radial-gradient(circle at center, black 100%, transparent 100%)';
            break;
          default:
            finalMask = 'linear-gradient(to right, black 100%, transparent 100%)';
        }
        
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
        
        tl.to(image, {
          WebkitMask: finalMask,
          mask: finalMask,
          duration,
          delay,
          ease: 'power2.inOut',
        });
        
        return () => {
          if (tl.scrollTrigger) {
            tl.scrollTrigger.kill(true);
          }
        };
      }
    }
  }, [effect, direction, duration, delay, threshold, overlayColor]);
  
  return (
    <div 
      ref={containerRef}
      className={`advanced-reveal-image-container relative overflow-hidden ${className}`}
      style={{ 
        position: 'relative',
      }}
    >
      <img 
        ref={imageRef}
        src={src} 
        alt={alt}
        className={`w-full h-full object-cover ${imgClassName}`}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        style={{ visibility: 'hidden' }} // Initially hidden, will be shown by GSAP
      />
      
      {effect === 'overlay' && (
        <div 
          ref={overlayRef}
          className="absolute inset-0 z-10"
          style={{ backgroundColor: overlayColor }}
        />
      )}
    </div>
  );
};

export default AdvancedRevealImage;
