
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface FinalCTAProps {
  language?: 'en' | 'kr' | 'cn';
}

const FinalCTA = ({ language = 'en' }: FinalCTAProps) => {
  const getBasePath = () => {
    if (language === 'en') return '';
    return `/${language}`;
  };

  const texts = {
    en: {
      title: 'Ready to Start Your Singapore University Journey?',
      subtitle: 'Book your free consultation today and take the first step towards your dream education in Singapore.',
      cta: 'Book Free Consultation',
      secondary: 'Learn More About Our Services',
      features: [
        '30-minute personalized consultation',
        'University matching and guidance',
        'No obligation or hidden fees'
      ]
    },
    kr: {
      title: '싱가포르 대학교 여정을 시작할 준비가 되셨나요?',
      subtitle: '오늘 무료 상담을 예약하고 싱가포르에서의 꿈의 교육을 향한 첫 걸음을 내딛으세요.',
      cta: '무료 상담 예약',
      secondary: '우리 서비스에 대해 더 알아보기',
      features: [
        '30분 개인 맞춤 상담',
        '대학교 매칭 및 가이드',
        '의무사항이나 숨겨진 비용 없음'
      ]
    },
    cn: {
      title: '准备开始您的新加坡大学之旅了吗？',
      subtitle: '今天就预约您的免费咨询，朝着您在新加坡的梦想教育迈出第一步。',
      cta: '预约免费咨询',
      secondary: '了解更多我们的服务',
      features: [
        '30分钟个性化咨询',
        '大学匹配和指导',
        '无义务或隐藏费用'
      ]
    }
  };

  const content = texts[language];

  return (
    <section className="py-20 bg-gradient-to-br from-navy to-teal text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          {content.title}
        </h2>
        <p className="text-xl text-white/90 mb-8 leading-relaxed">
          {content.subtitle}
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {content.features.map((feature, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="w-2 h-2 bg-white/60 rounded-full mr-3"></div>
              <span className="text-white/90">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild 
            size="lg" 
            className="bg-soft-red hover:bg-soft-red/90 text-white text-lg px-8 py-4"
          >
            <Link to={`${getBasePath()}/consult`}>{content.cta}</Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:text-navy text-lg px-8 py-4"
          >
            <Link to={`${getBasePath()}/services`}>{content.secondary}</Link>
          </Button>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-white/70 mb-4">Prefer to talk directly?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <span>📧 info@komin-education.com</span>
            <span>📱 WhatsApp: +65 9123 4567</span>
            <span>💬 WeChat: KoMinEducation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
