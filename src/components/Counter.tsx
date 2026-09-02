import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function Counter({ value }: { value: string }) {
  const [count, setCount] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  
  // Detect prefers-reduced-motion preference for accessibility
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Extract number and suffix/prefix
  const match = value.match(/^(\D*)(\d+)(\D*)$/);
  const prefix = match ? match[1] : "";
  const targetNumber = match ? parseInt(match[2], 10) : 0;
  const suffix = match ? match[3] : "";

  useEffect(() => {
    if (prefersReducedMotion) {
      setCount(targetNumber);
      return;
    }

    if (inView && targetNumber > 0) {
      let start = 0;
      const duration = 2000;
      const increment = targetNumber / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= targetNumber) {
          setCount(targetNumber);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    } else if (inView && targetNumber === 0) {
      setCount(0);
    }
  }, [inView, targetNumber, prefersReducedMotion]);

  if (!match) {
    return <span>{value}</span>;
  }

  return (
    <span ref={ref} className="inline-flex items-center">
      {/* Screen-reader-only accessible final static value to prevent reading intermediate animation counts */}
      <span className="sr-only">{value}</span>
      
      {/* Visual animating value hidden from assistive technology */}
      <span aria-hidden="true">
        {prefersReducedMotion ? value : `${prefix}${count}${suffix}`}
      </span>
    </span>
  );
}
