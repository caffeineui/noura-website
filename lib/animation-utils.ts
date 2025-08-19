/**
 * Utility functions for image reveal animations
 */

// Define common types
export type RevealDirection = 'leftToRight' | 'rightToLeft' | 'topToBottom' | 'bottomToTop' | 'center';
export type RevealShape = 'rect' | 'circle' | 'polygon';

/**
 * Generate clip-path values for different reveal directions and shapes
 */
export const getClipPath = {
  /**
   * Get initial clip path value
   * @param direction - The direction of the reveal animation
   * @param shape - The shape of the clip path
   * @returns CSS clip-path value as string
   */
  initial: (direction: RevealDirection, shape: RevealShape): string => {
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
  },
  
  /**
   * Get final clip path value
   * @param shape - The shape of the clip path
   * @returns CSS clip-path value as string
   */
  final: (shape: RevealShape): string => {
    switch (shape) {
      case 'circle':
        return 'circle(100% at center)';
      case 'polygon':
        return 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
      case 'rect':
      default:
        return 'inset(0% 0% 0% 0%)';
    }
  }
};

/**
 * Generate CSS mask values for different reveal directions
 */
export const getMask = {
  /**
   * Get initial mask value
   * @param direction - The direction of the reveal animation
   * @returns CSS mask value as string
   */
  initial: (direction: RevealDirection): string => {
    switch (direction) {
      case 'leftToRight':
        return 'linear-gradient(to right, black 0%, transparent 0%)';
      case 'rightToLeft':
        return 'linear-gradient(to left, black 0%, transparent 0%)';
      case 'topToBottom':
        return 'linear-gradient(to bottom, black 0%, transparent 0%)';
      case 'bottomToTop':
        return 'linear-gradient(to top, black 0%, transparent 0%)';
      case 'center':
        return 'radial-gradient(circle at center, black 0%, transparent 0%)';
      default:
        return 'linear-gradient(to right, black 0%, transparent 0%)';
    }
  },
  
  /**
   * Get final mask value
   * @param direction - The direction of the reveal animation
   * @returns CSS mask value as string
   */
  final: (direction: RevealDirection): string => {
    switch (direction) {
      case 'leftToRight':
        return 'linear-gradient(to right, black 100%, transparent 100%)';
      case 'rightToLeft':
        return 'linear-gradient(to left, black 100%, transparent 100%)';
      case 'topToBottom':
        return 'linear-gradient(to bottom, black 100%, transparent 100%)';
      case 'bottomToTop':
        return 'linear-gradient(to top, black 100%, transparent 100%)';
      case 'center':
        return 'radial-gradient(circle at center, black 100%, transparent 100%)';
      default:
        return 'linear-gradient(to right, black 100%, transparent 100%)';
    }
  }
};

/**
 * Generate transform positions for overlay animations
 * @param direction - The direction of the reveal animation
 * @returns Object with fromX, fromY, toX, toY values as percentages
 */
export const getOverlayPosition = (direction: RevealDirection): { fromX: number, fromY: number, toX: number, toY: number } => {
  switch (direction) {
    case 'leftToRight':
      return { fromX: -100, fromY: 0, toX: 100, toY: 0 };
    case 'rightToLeft':
      return { fromX: 100, fromY: 0, toX: -100, toY: 0 };
    case 'topToBottom':
      return { fromX: 0, fromY: -100, toX: 0, toY: 100 };
    case 'bottomToTop':
      return { fromX: 0, fromY: 100, toX: 0, toY: -100 };
    case 'center':
      return { fromX: 0, fromY: 0, toX: 0, toY: 0 }; // For center, we use scale instead
    default:
      return { fromX: -100, fromY: 0, toX: 100, toY: 0 };
  }
};

/**
 * Create an IntersectionObserver instance for animation triggers
 * @param callback - Function to run when element intersects
 * @param options - IntersectionObserver options
 * @returns IntersectionObserver instance
 */
export const createIntersectionObserver = (
  callback: (entry: IntersectionObserverEntry) => void,
  options: { threshold?: number, rootMargin?: string } = {}
): IntersectionObserver | null => {
  if (typeof window === 'undefined') return null;
  
  const { threshold = 0.1, rootMargin = '0px' } = options;
  
  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry);
        }
      });
    },
    { threshold, rootMargin }
  );
};

/**
 * Check if the browser supports a CSS property
 * @param property - CSS property to check
 * @returns boolean indicating support
 */
export const supportsProperty = (property: string): boolean => {
  if (typeof window === 'undefined' || !window.CSS || !window.CSS.supports) return false;
  return window.CSS.supports(property, 'initial');
};

/**
 * Detect browser capabilities for animations
 * @returns Object with boolean flags for various capabilities
 */
export const detectAnimationCapabilities = (): {
  supportsClipPath: boolean;
  supportsMask: boolean;
  supportsWebkitMask: boolean;
  supportsIntersectionObserver: boolean;
} => {
  if (typeof window === 'undefined') {
    return {
      supportsClipPath: false,
      supportsMask: false,
      supportsWebkitMask: false,
      supportsIntersectionObserver: false,
    };
  }
  
  return {
    supportsClipPath: supportsProperty('clip-path'),
    supportsMask: supportsProperty('mask'),
    supportsWebkitMask: supportsProperty('-webkit-mask'),
    supportsIntersectionObserver: 'IntersectionObserver' in window,
  };
};

export default {
  getClipPath,
  getMask,
  getOverlayPosition,
  createIntersectionObserver,
  supportsProperty,
  detectAnimationCapabilities
};
