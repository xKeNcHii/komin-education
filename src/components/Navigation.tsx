
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';

interface NavigationProps {
  language?: 'en' | 'kr' | 'cn';
}

const Navigation = ({ language = 'en' }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const getBasePath = () => {
    if (language === 'en') return '';
    return `/${language}`;
  };

  const navItems = {
    en: {
      home: 'Home',
      services: 'Services',
      packages: 'Packages',
      about: 'About',
      blog: 'Blog',
      contact: 'Contact',
      consult: 'Free Consultation'
    },
    kr: {
      home: '홈',
      services: '서비스',
      packages: '패키지',
      about: '소개',
      blog: '블로그',
      contact: '연락처',
      consult: '무료 상담'
    },
    cn: {
      home: '首页',
      services: '服务',
      packages: '套餐',
      about: '关于我们',
      blog: '博客',
      contact: '联系我们',
      consult: '免费咨询'
    }
  };

  const texts = navItems[language];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleNavClick = (path: string, sectionId?: string) => {
    const currentPath = location.pathname.replace(/^\/(kr|cn|en)/, '');
    const isHomePage = currentPath === '/' || currentPath === '';
    
    if (isHomePage && sectionId) {
      // If on homepage, scroll to section
      scrollToSection(sectionId);
    } else if (sectionId) {
      // Navigate to homepage then scroll
      navigate(`${getBasePath()}/`);
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      // Regular navigation
      navigate(`${getBasePath()}${path}`);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to={`${getBasePath()}/`} className="flex items-center group">
            <div className="text-2xl font-bold text-navy transition-colors duration-300 group-hover:text-soft-red">
              KoMin Education
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick('/', 'hero')} 
              className="text-gray-600 hover:text-navy transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-navy after:transition-all after:duration-300 hover:after:w-full"
            >
              {texts.home}
            </button>
            <button 
              onClick={() => handleNavClick('/', 'services')} 
              className="text-gray-600 hover:text-navy transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-navy after:transition-all after:duration-300 hover:after:w-full"
            >
              {texts.services}
            </button>
            <button 
              onClick={() => handleNavClick('/', 'packages')} 
              className="text-gray-600 hover:text-navy transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-navy after:transition-all after:duration-300 hover:after:w-full"
            >
              {texts.packages}
            </button>
            <button 
              onClick={() => handleNavClick('/about')} 
              className="text-gray-600 hover:text-navy transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-navy after:transition-all after:duration-300 hover:after:w-full"
            >
              {texts.about}
            </button>
            <button 
              onClick={() => handleNavClick('/blog')} 
              className="text-gray-600 hover:text-navy transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-navy after:transition-all after:duration-300 hover:after:w-full"
            >
              {texts.blog}
            </button>
            <button 
              onClick={() => handleNavClick('/contact')} 
              className="text-gray-600 hover:text-navy transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-navy after:transition-all after:duration-300 hover:after:w-full"
            >
              {texts.contact}
            </button>
          </div>

          {/* Language Selector & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector with Globe Icon */}
            <div className="flex items-center space-x-2 border border-gray-200 rounded-lg p-1 bg-white/80 backdrop-blur-sm">
              <Globe className="w-4 h-4 text-gray-500" />
              <Link 
                to={location.pathname.replace(/^\/(kr|cn|en)/, '/en')} 
                className={`px-3 py-1 rounded text-sm transition-all duration-300 ${language === 'en' ? 'bg-navy text-white shadow-sm' : 'text-gray-600 hover:text-navy hover:bg-gray-50'}`}
              >
                EN
              </Link>
              <Link 
                to={`/kr${location.pathname.replace(/^\/(kr|cn|en)/, '')}`} 
                className={`px-3 py-1 rounded text-sm transition-all duration-300 ${language === 'kr' ? 'bg-navy text-white shadow-sm' : 'text-gray-600 hover:text-navy hover:bg-gray-50'}`}
              >
                한국어
              </Link>
              <Link 
                to={`/cn${location.pathname.replace(/^\/(kr|cn|en)/, '')}`} 
                className={`px-3 py-1 rounded text-sm transition-all duration-300 ${language === 'cn' ? 'bg-navy text-white shadow-sm' : 'text-gray-600 hover:text-navy hover:bg-gray-50'}`}
              >
                中文
              </Link>
            </div>
            
            <Button 
              onClick={() => handleNavClick('/consult')}
              className="bg-soft-red hover:bg-soft-red/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              {texts.consult}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-navy transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button onClick={() => handleNavClick('/', 'hero')} className="text-gray-600 hover:text-navy text-left transition-colors duration-300">
                {texts.home}
              </button>
              <button onClick={() => handleNavClick('/', 'services')} className="text-gray-600 hover:text-navy text-left transition-colors duration-300">
                {texts.services}
              </button>
              <button onClick={() => handleNavClick('/', 'packages')} className="text-gray-600 hover:text-navy text-left transition-colors duration-300">
                {texts.packages}
              </button>
              <button onClick={() => handleNavClick('/about')} className="text-gray-600 hover:text-navy text-left transition-colors duration-300">
                {texts.about}
              </button>
              <button onClick={() => handleNavClick('/blog')} className="text-gray-600 hover:text-navy text-left transition-colors duration-300">
                {texts.blog}
              </button>
              <button onClick={() => handleNavClick('/contact')} className="text-gray-600 hover:text-navy text-left transition-colors duration-300">
                {texts.contact}
              </button>
              
              {/* Mobile Language Selector */}
              <div className="flex items-center space-x-2 pt-4 border-t border-gray-200">
                <Globe className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-500">Language:</span>
                <Link 
                  to={location.pathname.replace(/^\/(kr|cn|en)/, '/en')} 
                  className={`px-2 py-1 rounded text-sm transition-all duration-300 ${language === 'en' ? 'bg-navy text-white' : 'text-gray-600'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  EN
                </Link>
                <Link 
                  to={`/kr${location.pathname.replace(/^\/(kr|cn|en)/, '')}`} 
                  className={`px-2 py-1 rounded text-sm transition-all duration-300 ${language === 'kr' ? 'bg-navy text-white' : 'text-gray-600'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  한국어
                </Link>
                <Link 
                  to={`/cn${location.pathname.replace(/^\/(kr|cn|en)/, '')}`} 
                  className={`px-2 py-1 rounded text-sm transition-all duration-300 ${language === 'cn' ? 'bg-navy text-white' : 'text-gray-600'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  中文
                </Link>
              </div>
              
              <Button 
                onClick={() => handleNavClick('/consult')}
                className="bg-soft-red hover:bg-soft-red/90 w-full transition-all duration-300"
              >
                {texts.consult}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
