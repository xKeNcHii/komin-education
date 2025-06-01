
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  language?: 'en' | 'kr' | 'cn';
}

const HeroSection = ({ language = 'en' }: HeroSectionProps) => {
  const getBasePath = () => {
    if (language === 'en') return '';
    return `/${language}`;
  };

  const heroTexts = {
    en: {
      headline: 'Your Trusted Guide to Singapore\'s Top Universities',
      subheadline: 'Expert guidance for Korean and Chinese students pursuing education at NUS, NTU, and other premier Singapore universities.',
      cta: 'Book Free Consultation',
      secondaryCta: 'View Packages',
      trustText: 'Trusted by 500+ families'
    },
    kr: {
      headline: '싱가포르 명문대학교 진학을 위한 신뢰할 수 있는 가이드',
      subheadline: 'NUS, NTU 및 기타 싱가포르 명문 대학교 진학을 위한 한국 학생들을 위한 전문 가이드',
      cta: '무료 상담 예약',
      secondaryCta: '패키지 보기',
      trustText: '500+ 가족이 신뢰하는'
    },
    cn: {
      headline: '您通往新加坡顶尖大学的可靠向导',
      subheadline: '为中国学生提供申请新加坡国立大学、南洋理工大学及其他顶尖新加坡大学的专业指导',
      cta: '预约免费咨询',
      secondaryCta: '查看套餐',
      trustText: '500+ 家庭信赖之选'
    }
  };

  const texts = heroTexts[language];

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative bg-gradient-to-br from-light-gray to-white py-20 lg:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-teal/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-soft-red/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-navy leading-tight mb-6">
              {texts.headline}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed" style={{ lineHeight: '1.6' }}>
              {texts.subheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild size="lg" className="bg-soft-red hover:bg-soft-red/90 text-lg px-8 py-4">
                <Link to={`${getBasePath()}/consult`}>{texts.cta}</Link>
              </Button>
              <Button asChild size="lg" className="bg-teal hover:bg-teal/90 text-white text-lg px-8 py-4">
                <Link to={`${getBasePath()}/packages`}>{texts.secondaryCta}</Link>
              </Button>
            </div>

            <div className="flex items-center text-sm text-gray-500">
              <div className="flex -space-x-2 mr-4">
                <div className="w-8 h-8 bg-teal rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-soft-red rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-navy rounded-full border-2 border-white"></div>
              </div>
              {texts.trustText}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" 
                alt="Happy international students studying together"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent"></div>
            </div>
            
            {/* Floating card - now clickable */}
            <Link 
              to={`${getBasePath()}/success`}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center group-hover:bg-teal/20 transition-colors">
                  <span className="text-teal font-bold text-lg">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-navy">98% Success Rate</div>
                  <div className="text-sm text-gray-500">University Admissions</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToNextSection}
          className="p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-colors"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="w-6 h-6 text-navy" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
