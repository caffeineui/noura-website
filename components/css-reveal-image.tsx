import React, { useEffect, useRef } from 'react';

interface CssRevealImageProps {
  src: string;
  alt: string;
  className?: string;
  effect?: 'left-to-right' | 'right-to-left' | 'top-to-bottom' | 'bottom-to-top' | 'center' | 'circle' | 'overlay';
  width?: number;
  height?: number;
  threshold?: number;
  rootMargin?: string;
  priority?: boolean;
}

/**
 * CSS-only image reveal component using Intersection Observer
 */
export const CssRevealImage: React.FC<CssRevealImageProps> = ({
  src,
  alt,
  className = '',
  effect = 'left-to-right',
  width,
  height,
  threshold = 0.1,
  rootMargin = '0px',
  priority = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Create and configure IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add class to trigger animations when in view
            container.classList.add('in-view');
            // Disconnect observer once animation is triggered
            observer.disconnect();
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );
    
    // Start observing
    observer.observe(container);
    
    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);
  
  return (
    <div 
      ref={containerRef}
      className={`css-reveal-image-container reveal-${effect} ${className}`}
    >
      <img 
        className="css-reveal-image"
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
      />
    </div>
  );
};

export default CssRevealImage;
