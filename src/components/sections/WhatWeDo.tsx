
import React from 'react';
import { User, Book, FileText, Map, Home, Users } from 'lucide-react';

interface WhatWeDoProps {
  language?: 'en' | 'kr' | 'cn';
}

const WhatWeDo = ({ language = 'en' }: WhatWeDoProps) => {
  const texts = {
    en: {
      title: 'What We Do',
      subtitle: 'Your complete journey to Singapore universities in 6 simple steps',
      steps: [
        {
          icon: User,
          title: 'Consultation',
          description: 'Personalized assessment of your academic profile and university goals'
        },
        {
          icon: Book,
          title: 'Academic Preparation',
          description: 'Tutoring and guidance to strengthen your application profile'
        },
        {
          icon: FileText,
          title: 'Application Handling',
          description: 'Complete university application management and essay guidance'
        },
        {
          icon: Map,
          title: 'Visa Support',
          description: 'Full visa application assistance and documentation guidance'
        },
        {
          icon: Home,
          title: 'Housing Arrangement',
          description: 'Secure comfortable accommodation near your university'
        },
        {
          icon: Users,
          title: 'Onboarding in Singapore',
          description: 'Airport pickup, orientation, and local support upon arrival'
        }
      ]
    },
    kr: {
      title: '우리가 하는 일',
      subtitle: '6개의 간단한 단계로 싱가포르 대학교까지의 완전한 여정',
      steps: [
        {
          icon: User,
          title: '상담',
          description: '학업 프로필 및 대학교 목표에 대한 개인별 평가'
        },
        {
          icon: Book,
          title: '학업 준비',
          description: '지원서 프로필 강화를 위한 튜터링 및 가이드'
        },
        {
          icon: FileText,
          title: '지원서 관리',
          description: '완전한 대학교 지원서 관리 및 에세이 가이드'
        },
        {
          icon: Map,
          title: '비자 지원',
          description: '완전한 비자 신청 지원 및 서류 가이드'
        },
        {
          icon: Home,
          title: '숙소 준비',
          description: '대학교 근처 편안한 숙소 확보'
        },
        {
          icon: Users,
          title: '싱가포르 정착',
          description: '공항 픽업, 오리엔테이션 및 도착 시 현지 지원'
        }
      ]
    },
    cn: {
      title: '我们的服务',
      subtitle: '通过6个简单步骤完成您的新加坡大学之旅',
      steps: [
        {
          icon: User,
          title: '咨询',
          description: '个性化评估您的学术背景和大学目标'
        },
        {
          icon: Book,
          title: '学术准备',
          description: '辅导和指导以加强您的申请档案'
        },
        {
          icon: FileText,
          title: '申请处理',
          description: '完整的大学申请管理和论文指导'
        },
        {
          icon: Map,
          title: '签证支持',
          description: '全面的签证申请协助和文件指导'
        },
        {
          icon: Home,
          title: '住房安排',
          description: '在您的大学附近安排舒适的住宿'
        },
        {
          icon: Users,
          title: '新加坡入学',
          description: '机场接机、入学指导和抵达后的本地支持'
        }
      ]
    }
  };

  const content = texts[language];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">{content.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{content.subtitle}</p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index} 
                className="relative group p-8 bg-light-gray rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-soft-red text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-teal/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal/20 transition-colors">
                  <IconComponent className="w-8 h-8 text-teal" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-navy mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

        {/* Process Flow Indicator */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center space-x-4">
            {[1, 2, 3, 4, 5, 6].map((step, index) => (
              <React.Fragment key={step}>
                <div className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center font-semibold">
                  {step}
                </div>
                {index < 5 && (
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
