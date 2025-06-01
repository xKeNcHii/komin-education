
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface OurPackagesProps {
  language?: 'en' | 'kr' | 'cn';
}

const OurPackages = ({ language = 'en' }: OurPackagesProps) => {
  const getBasePath = () => {
    if (language === 'en') return '';
    return `/${language}`;
  };

  const texts = {
    en: {
      title: 'Our Packages',
      subtitle: 'Choose the perfect level of support for your Singapore university journey',
      viewAll: 'View All Packages',
      contactUs: 'Contact for Pricing',
      popular: 'Most Popular',
      idealForLabel: 'Ideal for',
      packages: [
        {
          name: 'Basic',
          description: 'Application-only support',
          idealFor: 'Self-prep students',
          features: [
            'University application assistance',
            'Document review',
            'Application submission',
            'Basic email support'
          ],
          price: 'From $800'
        },
        {
          name: 'Standard',
          description: 'Complete application and arrival support',
          idealFor: 'Most students',
          popular: true,
          features: [
            'Everything in Basic',
            'Visa application support',
            'Housing coordination',
            'Airport pickup',
            'Arrival orientation',
            'WhatsApp support'
          ],
          price: 'From $2,200'
        },
        {
          name: 'Premium',
          description: 'Full concierge service',
          idealFor: 'VIP / full-care families',
          features: [
            'Everything in Standard',
            'Academic tutoring (optional)',
            'Parent progress updates',
            'Emergency contact support',
            'Local check-ins',
            'Dedicated consultant'
          ],
          price: 'From $4,500'
        }
      ]
    },
    kr: {
      title: '우리의 패키지',
      subtitle: '싱가포르 대학교 여정을 위한 완벽한 지원 수준을 선택하세요',
      viewAll: '모든 패키지 보기',
      contactUs: '가격 문의',
      popular: '가장 인기',
      idealForLabel: '적합한 대상',
      packages: [
        {
          name: '베이직',
          description: '지원서 전용 지원',
          idealFor: '자체 준비 학생',
          features: [
            '대학교 지원서 지원',
            '서류 검토',
            '지원서 제출',
            '기본 이메일 지원'
          ],
          price: '$800부터'
        },
        {
          name: '스탠다드',
          description: '완전한 지원서 및 도착 지원',
          idealFor: '대부분의 학생',
          popular: true,
          features: [
            '베이직의 모든 항목',
            '비자 신청 지원',
            '숙소 조정',
            '공항 픽업',
            '도착 오리엔테이션',
            'WhatsApp 지원'
          ],
          price: '$2,200부터'
        },
        {
          name: '프리미엄',
          description: '완전한 컨시어지 서비스',
          idealFor: 'VIP / 완전 케어 가족',
          features: [
            '스탠다드의 모든 항목',
            '학업 튜터링 (선택사항)',
            '학부모 진행 상황 업데이트',
            '응급 연락 지원',
            '현지 체크인',
            '전담 컨설턴트'
          ],
          price: '$4,500부터'
        }
      ]
    },
    cn: {
      title: '我们的套餐',
      subtitle: '为您的新加坡大学之旅选择完美的支持级别',
      viewAll: '查看所有套餐',
      contactUs: '联系询价',
      popular: '最受欢迎',
      idealForLabel: '适合人群',
      packages: [
        {
          name: '基础版',
          description: '仅申请支持',
          idealFor: '自主准备学生',
          features: [
            '大学申请协助',
            '文件审查',
            '申请提交',
            '基础邮件支持'
          ],
          price: '从$800起'
        },
        {
          name: '标准版',
          description: '完整的申请和抵达支持',
          idealFor: '大多数学生',
          popular: true,
          features: [
            '基础版的所有内容',
            '签证申请支持',
            '住房协调',
            '机场接机',
            '抵达指导',
            'WhatsApp支持'
          ],
          price: '从$2,200起'
        },
        {
          name: '高级版',
          description: '全方位礼宾服务',
          idealFor: 'VIP / 全方位护理家庭',
          features: [
            '标准版的所有内容',
            '学术辅导（可选）',
            '家长进度更新',
            '紧急联系支持',
            '当地检查',
            '专属顾问'
          ],
          price: '从$4,500起'
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

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {content.packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow ${
                pkg.popular ? 'border-2 border-soft-red' : ''
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-soft-red text-white px-4 py-1 rounded-full text-sm font-medium">
                    {content.popular}
                  </span>
                </div>
              )}

              {/* Package Name & Description */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-navy mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-2">{pkg.description}</p>
                <p className="text-sm text-teal font-medium">
                  {content.idealForLabel}: {pkg.idealFor}
                </p>
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-navy">{pkg.price}</div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-teal mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                asChild 
                className={`w-full ${
                  pkg.popular 
                    ? 'bg-soft-red hover:bg-soft-red/90' 
                    : 'bg-navy hover:bg-navy/90'
                }`}
              >
                <Link to={`${getBasePath()}/consult`}>{content.contactUs}</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* View All Packages Button */}
        <div className="text-center">
          <Button asChild variant="outline" size="lg" className="border-navy text-navy hover:bg-navy hover:text-white">
            <Link to={`${getBasePath()}/packages`}>{content.viewAll}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OurPackages;
