
import React from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <div className="animate-[fade-in_0.5s_ease-out] min-h-screen">
      {children}
    </div>
  );
};

export default PageTransition;
