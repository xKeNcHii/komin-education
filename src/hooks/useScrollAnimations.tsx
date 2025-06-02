
import React, { useEffect, useRef } from 'react';

export const useScrollAnimations = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const animationType = element.dataset.animation || 'fade-in';
            const delay = element.dataset.delay || '0';
            
            // Add animation class with delay
            setTimeout(() => {
              element.classList.add('animate-in');
            }, parseInt(delay));
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all elements with scroll-animate class
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);
};

export const ScrollAnimateWrapper: React.FC<{
  children: React.ReactNode;
  animation?: 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right' | 'zoom-in';
  delay?: number;
  className?: string;
}> = ({ children, animation = 'fade-in', delay = 0, className = '' }) => {
  return (
    <div 
      className={`scroll-animate opacity-0 transform transition-all duration-700 ease-out ${className}`}
      data-animation={animation}
      data-delay={delay.toString()}
    >
      {children}
    </div>
  );
};
