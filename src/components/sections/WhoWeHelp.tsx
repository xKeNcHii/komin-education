
import React from 'react';

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
          flag: '🇰🇷'
        },
        {
          title: 'Chinese Students',
          description: 'Students from China seeking prestigious education with strong career prospects and international recognition',
          features: ['Mandarin-speaking team', 'Simplified visa process', 'Parent updates in Chinese'],
          flag: '🇨🇳'
        },
        {
          title: 'Supportive Parents',
          description: 'Families who want the best for their children but need guidance navigating international education',
          features: ['Regular progress updates', 'Parent orientation sessions', 'Emergency contact support'],
          flag: '👨‍👩‍👧‍👦'
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
          flag: '🇰🇷'
        },
        {
          title: '중국 학생들',
          description: '강력한 취업 전망과 국제적 인정을 받는 명문 교육을 찾는 중국 학생들',
          features: ['중국어 상담팀', '간편한 비자 절차', '중국어로 학부모 업데이트'],
          flag: '🇨🇳'
        },
        {
          title: '지원하는 학부모님',
          description: '자녀에게 최고를 원하지만 국제 교육 진행에 가이드가 필요한 가족',
          features: ['정기적인 진행 상황 업데이트', '학부모 오리엔테이션', '응급 연락 지원'],
          flag: '👨‍👩‍👧‍👦'
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
          flag: '🇰🇷'
        },
        {
          title: '中国学生',
          description: '寻求具有强大职业前景和国际认可的名校教育的中国学生',
          features: ['中文团队', '简化签证流程', '中文家长更新'],
          flag: '🇨🇳'
        },
        {
          title: '支持性家长',
          description: '希望为孩子提供最好教育但需要国际教育指导的家庭',
          features: ['定期进度更新', '家长指导会议', '紧急联系支持'],
          flag: '👨‍👩‍👧‍👦'
        }
      ]
    }
  };

  const content = texts[language];

  return (
    <section className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">{content.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{content.subtitle}</p>
        </div>

        {/* Personas Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {content.personas.map((persona, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Flag/Icon */}
              <div className="text-4xl mb-6 text-center">{persona.flag}</div>
              
              {/* Title */}
              <h3 className="text-2xl font-semibold text-navy mb-4 text-center">
                {persona.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed text-center">
                {persona.description}
              </p>
              
              {/* Features */}
              <div className="space-y-3">
                {persona.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-teal rounded-full mr-3"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        {/* <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-navy mb-2">500+</div>
            <div className="text-gray-600">Families Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-navy mb-2">98%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-navy mb-2">15+</div>
            <div className="text-gray-600">Universities</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-navy mb-2">3</div>
            <div className="text-gray-600">Languages</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default WhoWeHelp;
