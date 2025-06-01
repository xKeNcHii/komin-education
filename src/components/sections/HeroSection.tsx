
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown, Check, Building2, MessageCircle, Phone } from 'lucide-react';

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
      headline: 'Your Trusted Pathway to Singapore\'s Top Universities',
      subheadline: 'Comprehensive admissions, relocation, and academic support for Korean and Chinese students aspiring to study at NUS, NTU, and beyond.',
      benefits: [
        'University Application Strategy',
        'Accommodation & Visa Support',
        'Academic Prep & Tutoring',
        'Ongoing Guardian Support in Singapore'
      ],
      cta: 'Book Free Consultation',
      secondaryCta: 'View Admission Packages',
      trustText: 'Trusted by 500+ families',
      testimonial: '"Without KoMin, we wouldn\'t have made it to NUS. They handled everything."',
      testimonialAuthor: '— Parent, Seoul',
      successRate: '98% Admission Rate',
      successSubtext: 'Across top-tier Singapore universities'
    },
    kr: {
      headline: '싱가포르 명문대학교로의 신뢰할 수 있는 길',
      subheadline: 'NUS, NTU 및 그 이상의 대학교에서 공부하고자 하는 한국과 중국 학생들을 위한 종합적인 입학, 이주 및 학업 지원',
      benefits: [
        '대학 지원 전략',
        '숙소 및 비자 지원',
        '학업 준비 및 튜터링',
        '싱가포르 내 지속적인 가디언 지원'
      ],
      cta: '무료 상담 예약',
      secondaryCta: '입학 패키지 보기',
      trustText: '500+ 가족이 신뢰하는',
      testimonial: '"KoMin 없이는 NUS에 진학할 수 없었을 것입니다. 모든 것을 처리해 주었습니다."',
      testimonialAuthor: '— 학부모, 서울',
      successRate: '98% 입학률',
      successSubtext: '최고 수준의 싱가포르 대학교 전반'
    },
    cn: {
      headline: '通往新加坡顶尖大学的可靠途径',
      subheadline: '为志向申请新加坡国立大学、南洋理工大学及其他顶尖院校的中韩学生提供全面的入学、搬迁和学术支持',
      benefits: [
        '大学申请策略',
        '住宿及签证支持',
        '学术准备与辅导',
        '新加坡持续监护支持'
      ],
      cta: '预约免费咨询',
      secondaryCta: '查看入学套餐',
      trustText: '500+ 家庭信赖之选',
      testimonial: '"没有KoMin，我们不可能进入新加坡国立大学。他们处理了所有事情。"',
      testimonialAuthor: '— 家长，首尔',
      successRate: '98% 录取率',
      successSubtext: '涵盖新加坡顶尖大学'
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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=80" 
          alt="International students on Singapore university campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in text-white">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              {texts.headline}
            </h1>
            <p className="text-xl leading-relaxed mb-8 text-white/90" style={{ lineHeight: '1.5' }}>
              {texts.subheadline}
            </p>
            
            {/* Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {texts.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-white/90">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild size="lg" className="bg-soft-red hover:bg-soft-red/90 text-white text-lg px-8 py-4">
                <Link to={`${getBasePath()}/consult`}>{texts.cta}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy text-lg px-8 py-4">
                <Link to={`${getBasePath()}/packages`}>{texts.secondaryCta}</Link>
              </Button>
            </div>

            {/* Trust Row with Testimonial */}
            <div className="space-y-4">
              <div className="flex items-center text-sm text-white/80">
                <div className="flex -space-x-2 mr-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full border-2 border-white flex items-center justify-center text-xs">🇰🇷</div>
                  <div className="w-8 h-8 bg-white/20 rounded-full border-2 border-white flex items-center justify-center text-xs">🇨🇳</div>
                  <div className="w-8 h-8 bg-white/20 rounded-full border-2 border-white flex items-center justify-center text-xs">🇸🇬</div>
                </div>
                {texts.trustText}
              </div>
              
              {/* Testimonial */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <p className="text-white/90 italic mb-2">{texts.testimonial}</p>
                <p className="text-white/70 text-sm">{texts.testimonialAuthor}</p>
              </div>
            </div>
          </div>

          {/* Right Side - Success Badge & University Logos */}
          <div className="relative animate-fade-in">
            {/* Floating Success Rate Badge */}
            <Link 
              to={`${getBasePath()}/success`}
              className="block bg-white p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow cursor-pointer group max-w-md mx-auto"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-navy/20 transition-colors">
                  <Check className="w-8 h-8 text-navy" />
                </div>
                <div className="text-3xl font-bold text-navy mb-2">{texts.successRate}</div>
                <div className="text-gray-600">{texts.successSubtext}</div>
              </div>
            </Link>

            {/* University Logos */}
            <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-center text-white/80 text-sm mb-4">
                {language === 'en' ? 'Partnered Universities' : 
                 language === 'kr' ? '파트너 대학교' : '合作大学'}
              </div>
              <div className="flex justify-center items-center space-x-6 text-white/70">
                <div className="text-center">
                  <Building2 className="w-8 h-8 mx-auto mb-1 text-white/80" />
                  <div className="text-xs">NUS</div>
                </div>
                <div className="text-center">
                  <Building2 className="w-8 h-8 mx-auto mb-1 text-white/80" />
                  <div className="text-xs">NTU</div>
                </div>
                <div className="text-center">
                  <Building2 className="w-8 h-8 mx-auto mb-1 text-white/80" />
                  <div className="text-xs">SMU</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToNextSection}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 transition-colors"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="w-6 h-6 text-white" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
