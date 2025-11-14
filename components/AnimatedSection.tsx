
import React, { ReactNode } from 'react';
import { useIntersectionAnimation } from '../hooks/useIntersectionAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right';
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '', animation = 'fade-up', delay = 0 }) => {
  let defaultTranslate;
  if (animation === 'fade-left') defaultTranslate = 'translateX(-50px)';
  else if (animation === 'fade-right') defaultTranslate = 'translateX(50px)';
  else defaultTranslate = 'translateY(20px)'; // 'fade-up'

  const [ref, style] = useIntersectionAnimation(defaultTranslate);

  const finalStyle = {
     ...style, 
     transitionDelay: `${delay}s`, 
     transitionProperty: 'opacity, transform' 
  };

  return (
    <div
      ref={ref}
      style={finalStyle}
      className={`relative ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
