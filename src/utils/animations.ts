
export const fadeInUp = (delay = 0) => ({
  opacity: 0,
  transform: 'translateY(20px)',
  animation: `fadeInUp 0.6s ease-out ${delay}ms forwards`
});

export const scaleIn = (delay = 0) => ({
  opacity: 0,
  transform: 'scale(0.95)',
  animation: `scaleIn 0.5s ease-out ${delay}ms forwards`
});

export const slideInFromLeft = (delay = 0) => ({
  opacity: 0,
  transform: 'translateX(-20px)',
  animation: `slideInFromLeft 0.6s ease-out ${delay}ms forwards`
});

export const slideInFromRight = (delay = 0) => ({
  opacity: 0,
  transform: 'translateX(20px)',
  animation: `slideInFromRight 0.6s ease-out ${delay}ms forwards`
});

// Intersection Observer hook for scroll-triggered animations
export const useScrollAnimation = () => {
  const observerRef = React.useRef<IntersectionObserver | null>(null);
  
  React.useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);
};
