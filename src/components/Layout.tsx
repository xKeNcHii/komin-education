
import React, { useEffect } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import BackToTopButton from './BackToTopButton';
import PageTransition from './PageTransition';
import { useScrollAnimations } from '@/hooks/useScrollAnimations';

interface LayoutProps {
  children: React.ReactNode;
  language?: 'en' | 'kr' | 'cn';
}

const Layout = ({ children, language = 'en' }: LayoutProps) => {
  useScrollAnimations();

  useEffect(() => {
    // Add scroll animation styles to the document
    const style = document.createElement('style');
    style.textContent = `
      .scroll-animate {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.7s ease-out;
      }
      
      .scroll-animate.animate-in {
        opacity: 1;
        transform: translateY(0);
      }
      
      .scroll-animate[data-animation="slide-up"].animate-in {
        transform: translateY(0);
      }
      
      .scroll-animate[data-animation="slide-left"] {
        transform: translateX(-30px);
      }
      
      .scroll-animate[data-animation="slide-left"].animate-in {
        transform: translateX(0);
      }
      
      .scroll-animate[data-animation="slide-right"] {
        transform: translateX(30px);
      }
      
      .scroll-animate[data-animation="slide-right"].animate-in {
        transform: translateX(0);
      }
      
      .scroll-animate[data-animation="zoom-in"] {
        transform: scale(0.8);
      }
      
      .scroll-animate[data-animation="zoom-in"].animate-in {
        transform: scale(1);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation language={language} />
      <PageTransition>
        <main>{children}</main>
      </PageTransition>
      <Footer language={language} />
      <BackToTopButton />
    </div>
  );
};

export default Layout;
