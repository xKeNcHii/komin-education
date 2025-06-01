
import React from 'react';
import { Map, Users, TrendingUp, Shield } from 'lucide-react';

interface WhySingaporeProps {
  language?: 'en' | 'kr' | 'cn';
}

const WhySingapore = ({ language = 'en' }: WhySingaporeProps) => {
  const texts = {
    en: {
      title: 'Why Singapore?',
      subtitle: 'Discover why Singapore is the perfect destination for your education journey',
      benefits: [
        {
          icon: Shield,
          title: 'Safe & Secure',
          description: 'One of the safest countries in the world with excellent healthcare and low crime rates'
        },
        {
          icon: Users,
          title: 'English-Speaking',
          description: 'Official English-language instruction with multicultural environment'
        },
        {
          icon: TrendingUp,
          title: 'Top-Ranked Universities',
          description: 'NUS and NTU consistently ranked among top 15 universities globally'
        },
        {
          icon: Map,
          title: 'Strategic Location',
          description: 'Gateway to Asia with easy access to home countries and global opportunities'
        }
      ],
      universities: 'Partner Universities',
      uniList: [
        'National University of Singapore (NUS)',
        'Nanyang Technological University (NTU)',
        'Singapore Management University (SMU)',
        'Singapore University of Technology and Design (SUTD)'
      ]
    },
    kr: {
      title: '왜 싱가포르인가?',
      subtitle: '싱가포르가 여러분의 교육 여정에 완벽한 목적지인 이유를 알아보세요',
      benefits: [
        {
          icon: Shield,
          title: '안전하고 보안',
          description: '우수한 의료 서비스와 낮은 범죄율을 가진 세계에서 가장 안전한 국가 중 하나'
        },
        {
          icon: Users,
          title: '영어 사용',
          description: '다문화 환경에서 공식 영어 교육'
        },
        {
          icon: TrendingUp,
          title: '최고 수준 대학교',
          description: 'NUS와 NTU는 지속적으로 세계 15위권 대학교로 평가받음'
        },
        {
          icon: Map,
          title: '전략적 위치',
          description: '아시아의 관문으로 본국과 글로벌 기회에 쉽게 접근'
        }
      ],
      universities: '파트너 대학교',
      uniList: [
        '싱가포르 국립대학교 (NUS)',
        '난양기술대학교 (NTU)',
        '싱가포르 경영대학교 (SMU)',
        '싱가포르 기술디자인대학교 (SUTD)'
      ]
    },
    cn: {
      title: '为什么选择新加坡？',
      subtitle: '了解为什么新加坡是您教育之旅的完美目的地',
      benefits: [
        {
          icon: Shield,
          title: '安全可靠',
          description: '世界上最安全的国家之一，拥有优秀的医疗保健和低犯罪率'
        },
        {
          icon: Users,
          title: '英语环境',
          description: '官方英语教学，多元文化环境'
        },
        {
          icon: TrendingUp,
          title: '顶级大学',
          description: 'NUS和NTU持续跻身全球前15名大学'
        },
        {
          icon: Map,
          title: '战略位置',
          description: '亚洲门户，轻松接触家乡和全球机会'
        }
      ],
      universities: '合作大学',
      uniList: [
        '新加坡国立大学 (NUS)',
        '南洋理工大学 (NTU)',
        '新加坡管理大学 (SMU)',
        '新加坡科技设计大学 (SUTD)'
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Benefits */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {content.benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div 
                    key={index}
                    className="p-6 bg-light-gray rounded-xl hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-teal" />
                    </div>
                    <h3 className="text-lg font-semibold text-navy mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Singapore Image & Universities */}
          <div>
            {/* Singapore Skyline */}
            <div className="relative mb-8">
              <img 
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80" 
                alt="Singapore skyline"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent rounded-2xl"></div>
            </div>

            {/* Universities List */}
            <div className="bg-light-gray p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-navy mb-4">{content.universities}</h3>
              <div className="space-y-3">
                {content.uniList.map((university, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-soft-red rounded-full mr-3"></div>
                    <span className="text-gray-700">{university}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Banner */}
        <div className="mt-16 bg-gradient-to-br from-navy to-navy/80 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">#3</div>
              <div className="text-white/80">Best Higher Education System</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">85%</div>
              <div className="text-white/80">Graduate Employment Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4</div>
              <div className="text-white/80">Official Languages</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySingapore;
