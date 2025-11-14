import { useState, useEffect, useRef } from 'react';

export const useCounterAnimation = (target: number, duration: number, start: boolean, isK: boolean = false): string => {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const frameIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) {
        setCount(0);
        startTimeRef.current = null;
        return;
    }

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(1, elapsed / duration);
      
      const newCount = target * progress;
      setCount(newCount);

      if (progress < 1) {
        frameIdRef.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    frameIdRef.current = requestAnimationFrame(animate);

    return () => {
      if(frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }
    };
  }, [target, duration, start]);

  const displayValue = isK ? (count / 1000).toFixed(0) : Math.floor(count).toString();

  return displayValue;
};