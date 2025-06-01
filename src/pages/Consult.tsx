
import React from 'react';
import Layout from '@/components/Layout';
import ConsultationForm from '@/components/ConsultationForm';

interface ConsultProps {
  language?: 'en' | 'kr' | 'cn';
}

const Consult = ({ language = 'en' }: ConsultProps) => {
  const texts = {
    en: {
      title: 'Schedule Your Free Consultation',
      subtitle: 'Take the first step towards your Singapore university journey'
    },
    kr: {
      title: '무료 상담 예약하기',
      subtitle: '싱가포르 대학교 진학의 첫 걸음을 내딛어보세요'
    },
    cn: {
      title: '预约免费咨询',
      subtitle: '迈出新加坡大学之旅的第一步'
    }
  };

  const content = texts[language];

  return (
    <Layout language={language}>
      <div className="min-h-screen bg-light-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-4">{content.title}</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{content.subtitle}</p>
          </div>
          <ConsultationForm language={language} />
        </div>
      </div>
    </Layout>
  );
};

export default Consult;
