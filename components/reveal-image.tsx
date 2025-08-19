import React, { useRef } from 'react';
import useImageReveal from '@/hooks/useImageReveal';

interface RevealImageProps {
  src: string;
  alt: string;
  className?: string;
  direction?: 'leftToRight' | 'rightToLeft' | 'topToBottom' | 'bottomToTop' | 'center';
  shape?: 'rect' | 'circle' | 'polygon';
  duration?: number;
  delay?: number;
  priority?: boolean;
  width?: number;
  height?: number;
}

/**
 * A component that displays an image with a reveal animation effect
 */
export const RevealImage: React.FC<RevealImageProps> = ({
  src,
  alt,
  className = '',
  direction = 'leftToRight',
  shape = 'rect',
  duration = 1,
  delay = 0,
  priority = false,
  width,
  height
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useImageReveal({
    containerRef,
    direction,
    shape,
    duration,
    delay,
  });

  return (
    <div 
      ref={containerRef}
      className={`reveal-image-container overflow-hidden ${className}`}
      style={{ 
        position: 'relative',
        visibility: 'hidden', // Initially hidden, will be shown by GSAP
      }}
    >
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover"
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
      />
    </div>
  );
};

export default RevealImage;
