
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Check, Star } from 'lucide-react';

interface PackagesProps {
  language?: 'en' | 'kr' | 'cn';
}

const Packages = ({ language = 'en' }: PackagesProps) => {
  const getBasePath = () => {
    if (language === 'en') return '';
    return `/${language}`;
  };

  const texts = {
    en: {
      title: 'Admission Packages',
      subtitle: 'Choose the perfect level of support for your Singapore university journey',
      contactUs: 'Contact for Pricing',
      popular: 'Most Popular',
      premium: 'Premium Choice',
      idealForLabel: 'Ideal for',
      whatsIncluded: 'What\'s Included',
      additionalServices: 'Additional Services',
      guarantee: '98% Success Rate Guarantee',
      packages: [
        {
          name: 'Basic',
          description: 'Application-only support',
          idealFor: 'Self-prep students who need guidance',
          features: [
            'University selection strategy (2 universities)',
            'Application essay review and editing',
            'Document preparation checklist',
            'Application submission assistance',
            'Basic email support (5 business days)',
            'Pre-submission review'
          ],
          price: 'From $800',
          duration: '2-3 months'
        },
        {
          name: 'Standard',
          description: 'Complete application and arrival support',
          idealFor: 'Most students and families',
          popular: true,
          features: [
            'Everything in Basic',
            'University selection (up to 5 universities)',
            'Student visa application support',
            'Housing coordination and booking',
            'Airport pickup service',
            'Arrival orientation (3 days)',
            'WhatsApp support group',
            'Bank account setup assistance',
            'Priority email support (2 business days)'
          ],
          price: 'From $2,200',
          duration: '4-6 months'
        },
        {
          name: 'Premium',
          description: 'Full concierge service with ongoing support',
          idealFor: 'VIP families wanting comprehensive care',
          premium: true,
          features: [
            'Everything in Standard',
            'Unlimited university applications',
            'Academic tutoring (20 hours)',
            'Scholarship application assistance',
            'Weekly parent progress updates',
            '24/7 emergency contact support',
            'Monthly local check-ins (first year)',
            'Dedicated personal consultant',
            'Family visa consultation',
            'Priority customer service'
          ],
          price: 'From $4,500',
          duration: '6-12 months'
        }
      ],
      additionalServicesList: [
        'Additional university applications ($200 each)',
        'Extended tutoring hours ($80/hour)',
        'Parent visit coordination ($500)',
        'Housing renewal assistance ($300)',
        'Academic transcript evaluation ($150)',
        'Interview coaching sessions ($200/session)'
      ]
    },
    kr: {
      title: '입학 패키지',
      subtitle: '싱가포르 대학교 여정을 위한 완벽한 지원 수준을 선택하세요',
      contactUs: '가격 문의',
      popular: '가장 인기',
      premium: '프리미엄 선택',
      idealForLabel: '적합한 대상',
      whatsIncluded: '포함 내용',
      additionalServices: '추가 서비스',
      guarantee: '98% 성공률 보장',
      packages: [
        {
          name: '베이직',
          description: '지원서 전용 지원',
          idealFor: '가이드가 필요한 자체 준비 학생',
          features: [
            '대학교 선택 전략 (2개 대학)',
            '지원서 에세이 검토 및 편집',
            '서류 준비 체크리스트',
            '지원서 제출 지원',
            '기본 이메일 지원 (5 영업일)',
            '제출 전 검토'
          ],
          price: '$800부터',
          duration: '2-3개월'
        },
        {
          name: '스탠다드',
          description: '완전한 지원서 및 도착 지원',
          idealFor: '대부분의 학생과 가족',
          popular: true,
          features: [
            '베이직의 모든 항목',
            '대학교 선택 (최대 5개 대학)',
            '학생 비자 신청 지원',
            '숙소 조정 및 예약',
            '공항 픽업 서비스',
            '도착 오리엔테이션 (3일)',
            'WhatsApp 지원 그룹',
            '은행 계좌 개설 지원',
            '우선 이메일 지원 (2 영업일)'
          ],
          price: '$2,200부터',
          duration: '4-6개월'
        },
        {
          name: '프리미엄',
          description: '지속적인 지원이 포함된 완전한 컨시어지 서비스',
          idealFor: '종합적인 케어를 원하는 VIP 가족',
          premium: true,
          features: [
            '스탠다드의 모든 항목',
            '무제한 대학교 지원',
            '학업 튜터링 (20시간)',
            '장학금 신청 지원',
            '주간 학부모 진행 업데이트',
            '24/7 응급 연락 지원',
            '월간 현지 체크인 (첫 해)',
            '전담 개인 컨설턴트',
            '가족 비자 상담',
            '우선 고객 서비스'
          ],
          price: '$4,500부터',
          duration: '6-12개월'
        }
      ],
      additionalServicesList: [
        '추가 대학교 지원 (각 $200)',
        '연장 튜터링 시간 ($80/시간)',
        '학부모 방문 조정 ($500)',
        '숙소 갱신 지원 ($300)',
        '학업 성적 평가 ($150)',
        '면접 코칭 세션 ($200/세션)'
      ]
    },
    cn: {
      title: '录取套餐',
      subtitle: '为您的新加坡大学之旅选择完美的支持级别',
      contactUs: '联系询价',
      popular: '最受欢迎',
      premium: '高端选择',
      idealForLabel: '适合人群',
      whatsIncluded: '包含内容',
      additionalServices: '额外服务',
      guarantee: '98%成功率保证',
      packages: [
        {
          name: '基础版',
          description: '仅申请支持',
          idealFor: '需要指导的自主准备学生',
          features: [
            '大学选择策略（2所大学）',
            '申请文书审查和编辑',
            '文件准备清单',
            '申请提交协助',
            '基础邮件支持（5个工作日）',
            '提交前审查'
          ],
          price: '从$800起',
          duration: '2-3个月'
        },
        {
          name: '标准版',
          description: '完整的申请和抵达支持',
          idealFor: '大多数学生和家庭',
          popular: true,
          features: [
            '基础版的所有内容',
            '大学选择（最多5所大学）',
            '学生签证申请支持',
            '住房协调和预订',
            '机场接机服务',
            '抵达指导（3天）',
            'WhatsApp支持群',
            '银行开户协助',
            '优先邮件支持（2个工作日）'
          ],
          price: '从$2,200起',
          duration: '4-6个月'
        },
        {
          name: '高级版',
          description: '包含持续支持的全方位礼宾服务',
          idealFor: '希望全面护理的VIP家庭',
          premium: true,
          features: [
            '标准版的所有内容',
            '无限大学申请',
            '学术辅导（20小时）',
            '奖学金申请协助',
            '每周家长进度更新',
            '24/7紧急联系支持',
            '月度本地检查（第一年）',
            '专属个人顾问',
            '家庭签证咨询',
            '优先客户服务'
          ],
          price: '从$4,500起',
          duration: '6-12个月'
        }
      ],
      additionalServicesList: [
        '额外大学申请（每个$200）',
        '延长辅导时间（$80/小时）',
        '家长访问协调（$500）',
        '住房续签协助（$300）',
        '学术成绩单评估（$150）',
        '面试指导课程（$200/课程）'
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
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">{content.subtitle}</p>
            <Badge variant="outline" className="border-white text-white text-lg px-4 py-2">
              {content.guarantee}
            </Badge>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {content.packages.map((pkg, index) => (
                <div 
                  key={index}
                  className={`relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow ${
                    pkg.popular ? 'border-2 border-soft-red ring-4 ring-soft-red/20' : 
                    pkg.premium ? 'border-2 border-navy ring-4 ring-navy/20' : 
                    'border border-gray-200'
                  }`}
                >
                  {/* Badge */}
                  {(pkg.popular || pkg.premium) && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className={`${
                        pkg.popular ? 'bg-soft-red' : 'bg-navy'
                      } text-white px-4 py-2 flex items-center space-x-1`}>
                        <Star className="w-4 h-4" />
                        <span>{pkg.popular ? content.popular : content.premium}</span>
                      </Badge>
                    </div>
                  )}

                  {/* Package Header */}
                  <div className="text-center mb-8 pt-4">
                    <h3 className="text-2xl font-bold text-navy mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 mb-4">{pkg.description}</p>
                    <div className="text-3xl font-bold text-navy mb-2">{pkg.price}</div>
                    <p className="text-sm text-gray-500">{pkg.duration}</p>
                  </div>

                  {/* Ideal For */}
                  <div className="mb-6">
                    <p className="text-sm font-medium text-navy mb-2">{content.idealForLabel}:</p>
                    <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">{pkg.idealFor}</p>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-navy mb-4">{content.whatsIncluded}</h4>
                    <div className="space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-navy mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    asChild 
                    className={`w-full ${
                      pkg.popular ? 'bg-soft-red hover:bg-soft-red/90' : 
                      pkg.premium ? 'bg-navy hover:bg-navy/90' :
                      'bg-gray-800 hover:bg-gray-700'
                    }`}
                  >
                    <Link to={`${getBasePath()}/consult`}>{content.contactUs}</Link>
                  </Button>
                </div>
              ))}
            </div>

            {/* Additional Services */}
            <div className="bg-light-gray rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-navy mb-6 text-center">{content.additionalServices}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {content.additionalServicesList.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-navy flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-navy text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation to discuss which package is right for you and get a personalized quote.
            </p>
            <Button asChild size="lg" className="bg-soft-red hover:bg-soft-red/90">
              <Link to={`${getBasePath()}/consult`}>Schedule Free Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Packages;
