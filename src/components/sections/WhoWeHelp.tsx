
import React from 'react';
import { Users, Globe, Heart } from 'lucide-react';

interface WhoWeHelpProps {
  language?: 'en' | 'kr' | 'cn';
}

const WhoWeHelp = ({ language = 'en' }: WhoWeHelpProps) => {
  const texts = {
    en: {
      title: 'Who We Help',
      subtitle: 'Dedicated support for Korean and Chinese families pursuing world-class education',
      personas: [
        {
          title: 'Korean Students',
          description: 'High school graduates and university transfer students looking for English-language education in a culturally familiar Asian environment',
          features: ['Korean-speaking consultants', 'Cultural bridging support', 'Family communication in Korean'],
          icon: Globe
        },
        {
          title: 'Chinese Students',
          description: 'Students from China seeking prestigious education with strong career prospects and international recognition',
          features: ['Mandarin-speaking team', 'Simplified visa process', 'Parent updates in Chinese'],
          icon: Users
        },
        {
          title: 'Supportive Parents',
          description: 'Families who want the best for their children but need guidance navigating international education',
          features: ['Regular progress updates', 'Parent orientation sessions', 'Emergency contact support'],
          icon: Heart
        }
      ]
    },
    kr: {
      title: '우리가 도와드리는 분들',
      subtitle: '세계적 수준의 교육을 추구하는 한국과 중국 가족들을 위한 전문 지원',
      personas: [
        {
          title: '한국 학생들',
          description: '문화적으로 친숙한 아시아 환경에서 영어 교육을 원하는 고등학교 졸업생 및 대학 편입생',
          features: ['한국어 상담사', '문화적 연결 지원', '한국어로 가족 소통'],
          icon: Globe
        },
        {
          title: '중국 학생들',
          description: '강력한 취업 전망과 국제적 인정을 받는 명문 교육을 찾는 중국 학생들',
          features: ['중국어 상담팀', '간편한 비자 절차', '중국어로 학부모 업데이트'],
          icon: Users
        },
        {
          title: '지원하는 학부모님',
          description: '자녀에게 최고를 원하지만 국제 교육 진행에 가이드가 필요한 가족',
          features: ['정기적인 진행 상황 업데이트', '학부모 오리엔테이션', '응급 연락 지원'],
          icon: Heart
        }
      ]
    },
    cn: {
      title: '我们帮助的人群',
      subtitle: '为追求世界级教育的韩国和中国家庭提供专业支持',
      personas: [
        {
          title: '韩国学生',
          description: '寻求在文化熟悉的亚洲环境中接受英语教育的高中毕业生和大学转学生',
          features: ['韩语咨询师', '文化桥梁支持', '韩语家庭沟通'],
          icon: Globe
        },
        {
          title: '中国学生',
          description: '寻求具有强大职业前景和国际认可的名校教育的中国学生',
          features: ['中文团队', '简化签证流程', '中文家长更新'],
          icon: Users
        },
        {
          title: '支持性家长',
          description: '希望为孩子提供最好教育但需要国际教育指导的家庭',
          features: ['定期进度更新', '家长指导会议', '紧急联系支持'],
          icon: Heart
        }
      ]
    }
  };

  const content = texts[language];

  return (
    <section className="py-24 bg-gradient-to-br from-light-gray via-gray-50 to-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6 animate-fade-in">{content.title}</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-[fade-in_1s_ease-out_200ms_both]">{content.subtitle}</p>
        </div>

        {/* Personas Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {content.personas.map((persona, index) => {
            const IconComponent = persona.icon;
            return (
              <div 
                key={index}
                className={`bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group animate-[fade-in_1s_ease-out_${400 + index * 200}ms_both]`}
              >
                {/* Icon */}
                <div className="flex justify-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal/10 to-teal/20 rounded-3xl flex items-center justify-center group-hover:from-teal/20 group-hover:to-teal/30 transition-all duration-300 group-hover:scale-110">
                    <IconComponent className="w-10 h-10 text-teal" />
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-semibold text-navy mb-6 text-center group-hover:text-soft-red transition-colors duration-300">
                  {persona.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-8 leading-relaxed text-center text-lg">
                  {persona.description}
                </p>
                
                {/* Features */}
                <div className="space-y-4">
                  {persona.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center group-hover:scale-105 transition-transform duration-300">
                      <div className="w-3 h-3 bg-gradient-to-br from-teal to-teal/80 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
