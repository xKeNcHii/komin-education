
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
      quickLinks: 'Quick Links',
      services: 'Services',
      packages: 'Packages',
      success: 'Success Stories',
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
      quickLinks: '빠른 링크',
      services: '서비스',
      packages: '패키지',
      success: '성공 사례',
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
      quickLinks: '快速链接',
      services: '服务',
      packages: '套餐',
      success: '成功案例',
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold mb-4">KoMin Education</div>
            <p className="text-gray-300 text-sm leading-relaxed">{texts.tagline}</p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{texts.contact}</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>{texts.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{texts.singapore}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{texts.korea}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span>{texts.whatsapp}: +65 9123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span>{texts.wechat}: KoMinEducation</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span>{texts.kakao}: KoMinEducation</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{texts.quickLinks}</h3>
            <div className="space-y-2 text-sm">
              <Link to={`${getBasePath()}/services`} className="block text-gray-300 hover:text-white transition-colors">
                {texts.services}
              </Link>
              <Link to={`${getBasePath()}/packages`} className="block text-gray-300 hover:text-white transition-colors">
                {texts.packages}
              </Link>
              <Link to={`${getBasePath()}/success`} className="block text-gray-300 hover:text-white transition-colors">
                {texts.success}
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
            <h3 className="text-lg font-semibold mb-4">{texts.legal}</h3>
            <div className="space-y-2 text-sm">
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
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-300">
          {texts.copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
