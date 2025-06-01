
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';

interface NavigationProps {
  language?: 'en' | 'kr' | 'cn';
}

const Navigation = ({ language = 'en' }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const getBasePath = () => {
    if (language === 'en') return '';
    return `/${language}`;
  };

  const navItems = {
    en: {
      home: 'Home',
      services: 'Services',
      packages: 'Packages',
      success: 'Success Stories',
      blog: 'Blog',
      contact: 'Contact',
      consult: 'Free Consultation'
    },
    kr: {
      home: '홈',
      services: '서비스',
      packages: '패키지',
      success: '성공 사례',
      blog: '블로그',
      contact: '연락처',
      consult: '무료 상담'
    },
    cn: {
      home: '首页',
      services: '服务',
      packages: '套餐',
      success: '成功案例',
      blog: '博客',
      contact: '联系我们',
      consult: '免费咨询'
    }
  };

  const texts = navItems[language];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to={`${getBasePath()}/`} className="flex items-center">
            <div className="text-2xl font-bold text-navy">KoMin Education</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to={`${getBasePath()}/`} className="text-gray-600 hover:text-navy transition-colors">
              {texts.home}
            </Link>
            <Link to={`${getBasePath()}/services`} className="text-gray-600 hover:text-navy transition-colors">
              {texts.services}
            </Link>
            <Link to={`${getBasePath()}/packages`} className="text-gray-600 hover:text-navy transition-colors">
              {texts.packages}
            </Link>
            <Link to={`${getBasePath()}/success`} className="text-gray-600 hover:text-navy transition-colors">
              {texts.success}
            </Link>
            <Link to={`${getBasePath()}/blog`} className="text-gray-600 hover:text-navy transition-colors">
              {texts.blog}
            </Link>
            <Link to={`${getBasePath()}/contact`} className="text-gray-600 hover:text-navy transition-colors">
              {texts.contact}
            </Link>
          </div>

          {/* Language Selector & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector with Globe Icon */}
            <div className="flex items-center space-x-2 border border-gray-200 rounded-lg p-1">
              <Globe className="w-4 h-4 text-gray-500" />
              <Link 
                to={location.pathname.replace(/^\/(kr|cn|en)/, '/en')} 
                className={`px-3 py-1 rounded text-sm transition-colors ${language === 'en' ? 'bg-navy text-white' : 'text-gray-600 hover:text-navy hover:bg-gray-50'}`}
              >
                EN
              </Link>
              <Link 
                to={`/kr${location.pathname.replace(/^\/(kr|cn|en)/, '')}`} 
                className={`px-3 py-1 rounded text-sm transition-colors ${language === 'kr' ? 'bg-navy text-white' : 'text-gray-600 hover:text-navy hover:bg-gray-50'}`}
              >
                한국어
              </Link>
              <Link 
                to={`/cn${location.pathname.replace(/^\/(kr|cn|en)/, '')}`} 
                className={`px-3 py-1 rounded text-sm transition-colors ${language === 'cn' ? 'bg-navy text-white' : 'text-gray-600 hover:text-navy hover:bg-gray-50'}`}
              >
                中文
              </Link>
            </div>
            
            <Button asChild className="bg-soft-red hover:bg-soft-red/90">
              <Link to={`${getBasePath()}/consult`}>{texts.consult}</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-navy"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link to={`${getBasePath()}/`} className="text-gray-600 hover:text-navy" onClick={() => setIsMenuOpen(false)}>
                {texts.home}
              </Link>
              <Link to={`${getBasePath()}/services`} className="text-gray-600 hover:text-navy" onClick={() => setIsMenuOpen(false)}>
                {texts.services}
              </Link>
              <Link to={`${getBasePath()}/packages`} className="text-gray-600 hover:text-navy" onClick={() => setIsMenuOpen(false)}>
                {texts.packages}
              </Link>
              <Link to={`${getBasePath()}/success`} className="text-gray-600 hover:text-navy" onClick={() => setIsMenuOpen(false)}>
                {texts.success}
              </Link>
              <Link to={`${getBasePath()}/blog`} className="text-gray-600 hover:text-navy" onClick={() => setIsMenuOpen(false)}>
                {texts.blog}
              </Link>
              <Link to={`${getBasePath()}/contact`} className="text-gray-600 hover:text-navy" onClick={() => setIsMenuOpen(false)}>
                {texts.contact}
              </Link>
              
              {/* Mobile Language Selector */}
              <div className="flex items-center space-x-2 pt-4 border-t border-gray-200">
                <Globe className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-500">Language:</span>
                <Link 
                  to={location.pathname.replace(/^\/(kr|cn|en)/, '/en')} 
                  className={`px-2 py-1 rounded text-sm ${language === 'en' ? 'bg-navy text-white' : 'text-gray-600'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  EN
                </Link>
                <Link 
                  to={`/kr${location.pathname.replace(/^\/(kr|cn|en)/, '')}`} 
                  className={`px-2 py-1 rounded text-sm ${language === 'kr' ? 'bg-navy text-white' : 'text-gray-600'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  한국어
                </Link>
                <Link 
                  to={`/cn${location.pathname.replace(/^\/(kr|cn|en)/, '')}`} 
                  className={`px-2 py-1 rounded text-sm ${language === 'cn' ? 'bg-navy text-white' : 'text-gray-600'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  中文
                </Link>
              </div>
              
              <Button asChild className="bg-soft-red hover:bg-soft-red/90 w-full" onClick={() => setIsMenuOpen(false)}>
                <Link to={`${getBasePath()}/consult`}>{texts.consult}</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
