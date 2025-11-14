
// FIX: Import React to use React types like React.RefObject.
import React, { useState, useEffect, useRef, CSSProperties } from 'react';

type AnimationStyle = Pick<CSSProperties, 'opacity' | 'transform' | 'transition' | 'transitionDelay'>;

export const useIntersectionAnimation = (defaultTranslate: string = 'translateY(20px)'): [React.RefObject<HTMLDivElement>, AnimationStyle, boolean] => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2, // 20% visible
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      // Cleanup observer on component unmount
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const style: AnimationStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : defaultTranslate,
    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
    transitionDelay: '0.1s',
  };

  return [ref, style, isVisible];
};