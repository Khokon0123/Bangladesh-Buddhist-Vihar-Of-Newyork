/**
 * Performance utilities for optimizing the website
 */

/**
 * Check if user is on mobile device
 * Used to conditionally load lighter resources on mobile
 */
export const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
};

/**
 * Check if user prefers reduced motion
 * Used to disable animations for better performance and accessibility
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Lazy load images with Intersection Observer
 * Fallback for browsers that don't support native lazy loading
 */
export const lazyLoadImage = (img: HTMLImageElement): void => {
  if ('loading' in HTMLImageElement.prototype) {
    // Native lazy loading is supported
    return;
  }

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const image = entry.target as HTMLImageElement;
        if (image.dataset.src) {
          image.src = image.dataset.src;
          image.removeAttribute('data-src');
        }
        observer.unobserve(image);
      }
    });
  });

  imageObserver.observe(img);
};

/**
 * Debounce function for performance optimization
 * Prevents excessive function calls during scroll/resize events
 */
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle function for performance optimization
 * Limits function execution frequency
 */
export const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

