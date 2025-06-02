
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MessageCircle } from 'lucide-react';

interface FooterProps {
  language?: 'en' | 'kr' | 'cn';
}

const Footer = ({ language = 'en' }: FooterProps) => {
  const getBasePath = () => {
    if (language === 'en') return '';
    return `/${language}`;
  };

  const footerTexts = {
    en: {
      tagline: 'Your trusted guide to Singapore\'s top universities',
      contact: 'Contact Us',
      email: 'info@komin-education.com',
      singapore: 'Singapore: +65 9123 4567',
      korea: 'Korea: +82 10 1234 5678',
      whatsapp: 'WhatsApp',
      wechat: 'WeChat',
      kakao: 'KakaoTalk',
      telegram: 'Telegram',
      quickLinks: 'Quick Links',
      services: 'Services',
      packages: 'Packages',
      about: 'About',
      blog: 'Blog',
      consult: 'Free Consultation',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      copyright: '© 2024 KoMin Education. All rights reserved.'
    },
    kr: {
      tagline: '싱가포르 명문대학교 진학을 위한 신뢰할 수 있는 가이드',
      contact: '연락처',
      email: 'info@komin-education.com',
      singapore: '싱가포르: +65 9123 4567',
      korea: '한국: +82 10 1234 5678',
      whatsapp: 'WhatsApp',
      wechat: 'WeChat',
      kakao: '카카오톡',
      telegram: '텔레그램',
      quickLinks: '빠른 링크',
      services: '서비스',
      packages: '패키지',
      about: '소개',
      blog: '블로그',
      consult: '무료 상담',
      legal: '법적 고지',
      privacy: '개인정보 처리방침',
      terms: '이용약관',
      copyright: '© 2024 KoMin Education. 모든 권리 보유.'
    },
    cn: {
      tagline: '您通往新加坡顶尖大学的可靠向导',
      contact: '联系我们',
      email: 'info@komin-education.com',
      singapore: '新加坡: +65 9123 4567',
      korea: '韩国: +82 10 1234 5678',
      whatsapp: 'WhatsApp',
      wechat: 'WeChat',
      kakao: 'KakaoTalk',
      telegram: 'Telegram',
      quickLinks: '快速链接',
      services: '服务',
      packages: '套餐',
      about: '关于我们',
      blog: '博客',
      consult: '免费咨询',
      legal: '法律声明',
      privacy: '隐私政策',
      terms: '服务条款',
      copyright: '© 2024 KoMin Education. 保留所有权利。'
    }
  };

  const texts = footerTexts[language];

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold mb-6">KoMin Education</div>
            <p className="text-gray-300 text-sm leading-relaxed">{texts.tagline}</p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{texts.contact}</h3>
            <div className="space-y-4 text-sm text-gray-300">
              <a 
                href="mailto:info@komin-education.com"
                className="flex items-center space-x-3 hover:text-white transition-colors group cursor-pointer"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{texts.email}</span>
              </a>
              <a 
                href="tel:+6591234567"
                className="flex items-center space-x-3 hover:text-white transition-colors group cursor-pointer"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{texts.singapore}</span>
              </a>
              <a 
                href="tel:+821012345678"
                className="flex items-center space-x-3 hover:text-white transition-colors group cursor-pointer"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{texts.korea}</span>
              </a>
              <a 
                href="https://wa.me/6591234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-green-400 transition-colors group cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{texts.whatsapp}: +65 9123 4567</span>
              </a>
              <a 
                href="https://weixin.qq.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-green-500 transition-colors group cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{texts.wechat}: KoMinEducation</span>
              </a>
              <a 
                href="https://open.kakao.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-yellow-400 transition-colors group cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{texts.kakao}: KoMinEducation</span>
              </a>
              <a 
                href="https://t.me/KoMinEducation"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-blue-400 transition-colors group cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{texts.telegram}: @KoMinEducation</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{texts.quickLinks}</h3>
            <div className="space-y-3 text-sm">
              <Link to={`${getBasePath()}/services`} className="block text-gray-300 hover:text-white transition-colors">
                {texts.services}
              </Link>
              <Link to={`${getBasePath()}/packages`} className="block text-gray-300 hover:text-white transition-colors">
                {texts.packages}
              </Link>
              <Link to={`${getBasePath()}/about`} className="block text-gray-300 hover:text-white transition-colors">
                {texts.about}
              </Link>
              <Link to={`${getBasePath()}/blog`} className="block text-gray-300 hover:text-white transition-colors">
                {texts.blog}
              </Link>
              <Link to={`${getBasePath()}/consult`} className="block text-gray-300 hover:text-white transition-colors">
                {texts.consult}
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{texts.legal}</h3>
            <div className="space-y-3 text-sm">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                {texts.privacy}
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                {texts.terms}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 mt-12 pt-8 text-center text-sm text-gray-300">
          {texts.copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
