
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

interface ServicesProps {
  language?: 'en' | 'kr' | 'cn';
}

const Services = ({ language = 'en' }: ServicesProps) => {
  const getBasePath = () => {
    if (language === 'en') return '';
    return `/${language}`;
  };

  const texts = {
    en: {
      title: 'Our Services',
      subtitle: 'Comprehensive support for your Singapore university journey',
      cta: 'Get Started Today',
      learnMore: 'Learn More',
      services: [
        {
          title: 'University Applications',
          description: 'Expert guidance through the entire application process for top Singapore universities.',
          features: [
            'University selection strategy',
            'Application essay writing',
            'Document preparation',
            'Interview preparation',
            'Scholarship applications'
          ],
          image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Visa & Immigration',
          description: 'Complete visa application support and immigration guidance for students and families.',
          features: [
            'Student visa applications',
            'Document verification',
            'Immigration consulting',
            'Family visa support',
            'Renewal assistance'
          ],
          image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Accommodation Services',
          description: 'Safe and comfortable housing solutions near Singapore universities.',
          features: [
            'On-campus housing applications',
            'Private accommodation search',
            'Housing inspections',
            'Contract negotiations',
            'Move-in assistance'
          ],
          image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Academic Support',
          description: 'Tutoring and academic preparation to ensure success in Singapore universities.',
          features: [
            'Subject-specific tutoring',
            'English language support',
            'Study skills development',
            'Exam preparation',
            'Academic mentoring'
          ],
          image: 'https://images.pexels.com/photos/8617697/pexels-photo-8617697.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          title: 'Relocation Support',
          description: 'Complete assistance with moving to Singapore and settling in.',
          features: [
            'Airport pickup service',
            'City orientation tours',
            'Bank account setup',
            'Mobile phone plans',
            'Essential shopping trips'
          ],
          image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80'
        },
        {
          title: 'Ongoing Guardian Support',
          description: 'Continuous support and guidance throughout the student\'s time in Singapore.',
          features: [
            '24/7 emergency support',
            'Regular check-ins',
            'Parent progress reports',
            'Crisis management',
            'Local liaison services'
          ],
          image: 'https://images.pexels.com/photos/5691846/pexels-photo-5691846.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
      ]
    },
    kr: {
      title: '우리의 서비스',
      subtitle: '싱가포르 대학교 진학을 위한 종합적인 지원',
      cta: '오늘 시작하기',
      learnMore: '자세히 보기',
      services: [
        {
          title: '대학교 지원',
          description: '싱가포르 최고 대학교 입학을 위한 전체 지원 과정의 전문 가이드.',
          features: [
            '대학교 선택 전략',
            '지원서 에세이 작성',
            '서류 준비',
            '면접 준비',
            '장학금 신청'
          ],
          image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
        },
        {
          title: '비자 및 이민',
          description: '학생과 가족을 위한 완전한 비자 신청 지원 및 이민 가이드.',
          features: [
            '학생 비자 신청',
            '서류 확인',
            '이민 컨설팅',
            '가족 비자 지원',
            '갱신 지원'
          ],
          image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80'
        },
        {
          title: '숙소 서비스',
          description: '싱가포르 대학교 근처의 안전하고 편안한 주거 솔루션.',
          features: [
            '캠퍼스 내 숙소 신청',
            '개인 숙소 검색',
            '주거 점검',
            '계약 협상',
            '입주 지원'
          ],
          image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80'
        },
        {
          title: '학업 지원',
          description: '싱가포르 대학교에서의 성공을 보장하는 튜터링 및 학업 준비.',
          features: [
            '과목별 튜터링',
            '영어 지원',
            '학습 기술 개발',
            '시험 준비',
            '학업 멘토링'
          ],
          image: 'https://images.pexels.com/photos/8617697/pexels-photo-8617697.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          title: '이주 지원',
          description: '싱가포르 이주 및 정착을 위한 완전한 지원.',
          features: [
            '공항 픽업 서비스',
            '도시 오리엔테이션 투어',
            '은행 계좌 개설',
            '휴대폰 요금제',
            '필수품 쇼핑'
          ],
          image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80'
        },
        {
          title: '지속적인 가디언 지원',
          description: '학생의 싱가포르 체류 기간 동안 지속적인 지원과 가이드.',
          features: [
            '24/7 응급 지원',
            '정기 체크인',
            '학부모 진행 보고서',
            '위기 관리',
            '현지 연락 서비스'
          ],
          image: 'https://images.pexels.com/photos/5691846/pexels-photo-5691846.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
      ]
    },
    cn: {
      title: '我们的服务',
      subtitle: '为您的新加坡大学之旅提供全面支持',
      cta: '今天开始',
      learnMore: '了解更多',
      services: [
        {
          title: '大学申请',
          description: '为新加坡顶尖大学整个申请过程提供专业指导。',
          features: [
            '大学选择策略',
            '申请文书写作',
            '文件准备',
            '面试准备',
            '奖学金申请'
          ],
          image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
        },
        {
          title: '签证和移民',
          description: '为学生和家庭提供完整的签证申请支持和移民指导。',
          features: [
            '学生签证申请',
            '文件验证',
            '移民咨询',
            '家庭签证支持',
            '续签协助'
          ],
          image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80'
        },
        {
          title: '住宿服务',
          description: '新加坡大学附近安全舒适的住房解决方案。',
          features: [
            '校内住宿申请',
            '私人住宿搜索',
            '房屋检查',
            '合同谈判',
            '入住协助'
          ],
          image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80'
        },
        {
          title: '学术支持',
          description: '辅导和学术准备，确保在新加坡大学的成功。',
          features: [
            '学科专项辅导',
            '英语语言支持',
            '学习技能培养',
            '考试准备',
            '学术指导'
          ],
          image: 'https://images.pexels.com/photos/8617697/pexels-photo-8617697.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          title: '搬迁支持',
          description: '搬到新加坡和安顿下来的完整协助。',
          features: [
            '机场接机服务',
            '城市导览',
            '银行开户',
            '手机套餐',
            '必需品购物'
          ],
          image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80'
        },
        {
          title: '持续监护支持',
          description: '在学生在新加坡期间提供持续的支持和指导。',
          features: [
            '24/7紧急支持',
            '定期检查',
            '家长进度报告',
            '危机管理',
            '本地联络服务'
          ],
          image: 'https://images.pexels.com/photos/5691846/pexels-photo-5691846.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
      ]
    }
  };

  const content = texts[language];

  return (
    <Layout language={language}>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="bg-navy text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">{content.title}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">{content.subtitle}</p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {content.services.map((service, index) => (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Image */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
                    />
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <h3 className="text-3xl font-bold text-navy mb-4">{service.title}</h3>
                    <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <Check className="w-5 h-5 text-navy flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button asChild className="bg-navy hover:bg-navy/90">
                      <Link to={`${getBasePath()}/consult`}>
                        {content.cta}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-light-gray py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-navy mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl text-gray-600 mb-8">Schedule a free consultation to discuss your goals and get a personalized plan.</p>
            <Button asChild size="lg" className="bg-soft-red hover:bg-soft-red/90">
              <Link to={`${getBasePath()}/consult`}>{content.cta}</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
