
import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  language?: 'en' | 'kr' | 'cn';
}

const Layout = ({ children, language = 'en' }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation language={language} />
      <main>{children}</main>
      <Footer language={language} />
    </div>
  );
};

export default Layout;
