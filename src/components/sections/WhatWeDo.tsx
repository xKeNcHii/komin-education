
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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6 animate-fade-in">{content.title}</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-[fade-in_1s_ease-out_200ms_both]">{content.subtitle}</p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {content.steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index} 
                className={`relative group p-8 bg-gradient-to-br from-light-gray to-gray-50 rounded-3xl hover:shadow-xl transition-all duration-500 hover:-translate-y-3 ml-8 animate-[fade-in_1s_ease-out_${400 + index * 100}ms_both]`}
              >
                {/* Step Number - Perfectly positioned */}
                <div className="absolute top-0 left-0 w-10 h-10 bg-gradient-to-br from-soft-red to-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg transform -translate-y-1/2 -translate-x-1/4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-teal/10 to-teal/20 rounded-3xl flex items-center justify-center mb-8 group-hover:from-teal/20 group-hover:to-teal/30 transition-all duration-300 group-hover:scale-110">
                  <IconComponent className="w-10 h-10 text-teal group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-navy mb-4 group-hover:text-soft-red transition-colors duration-300">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
              </div>
            );
          })}
        </div>

        
      </div>
    </section>
  );
};

export default WhatWeDo;
