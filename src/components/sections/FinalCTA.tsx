
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MessageCircle } from 'lucide-react';

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
      ],
      preferTalk: 'Prefer to talk directly?'
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
      ],
      preferTalk: '직접 통화를 원하시나요?'
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
      ],
      preferTalk: '更喜欢直接通话？'
    }
  };

  const content = texts[language];

  return (
    <section className="py-20 bg-gradient-to-br from-navy to-navy/80 text-white">
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy text-lg px-8 py-4 w-full sm:w-auto"
          >
            <Link to={`${getBasePath()}/services`}>{content.secondary}</Link>
          </Button>
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-white/70 mb-6">{content.preferTalk}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <a 
              href="mailto:info@komin-education.com"
              className="flex items-center justify-center space-x-2 p-3 rounded-lg hover:bg-white/10 transition-colors group cursor-pointer"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-white/90">info@komin-education.com</span>
            </a>
            <a 
              href="https://wa.me/6591234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 p-3 rounded-lg hover:bg-green-600/20 transition-colors group cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-white/90">WhatsApp: +65 9123 4567</span>
            </a>
            <a 
              href="https://t.me/KoMinEducation"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 p-3 rounded-lg hover:bg-blue-500/20 transition-colors group cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-white/90">KakaoTalk: KoMinEducation</span>
            </a>
            <a 
              href="https://t.me/KoMinEducation"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 p-3 rounded-lg hover:bg-blue-400/20 transition-colors group cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-white/90">Telegram: @KoMinEducation</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
